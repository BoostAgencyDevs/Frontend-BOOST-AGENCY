/**
 * @fileoverview Componente de formularios de Boost Agency
 *  * Este componente maneja dos formularios principales:
 * 1. Formulario de Cotización (POST apiUrl/api/quote)
 * 2. Formulario de Asesoría (POST apiUrl/api/support)
 *  * Características:
 * - Validaciones reactivas y visuales
 * - Manejo completo de estados de carga y errores
 * - Estructura de datos exacta según especificaciones del backend
 * - Todos los campos requeridos validados
 * - El segundo formulario aparece tras éxito del primero
 *  * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormularioService } from '../../shared/services/formulario.service';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Componente de formularios
 *  * Funcionalidades:
 * - Gestión de formularios de cotización y asesoría
 * - Validación de campos requeridos
 * - Manejo de estados de carga y errores
 * - Comunicación con API externa
 * - Flujo secuencial entre formularios
 */
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {
  /** Formulario de Cotización con estructura completa */
  form1: FormGroup;
  
  /** Formulario de Asesoría con estructura completa */
  form2: FormGroup;
  
  /** Controla la visibilidad del segundo formulario */
  form1Success = false;
  
  /** Estados de carga para cada formulario */
  loading1 = false;
  loading2 = false;
  
  /** Mensajes de éxito para cada formulario */
  message1 = '';
  message2 = '';
  
  /** Mensajes de error para cada formulario */
  error1 = '';
  error2 = '';

  /** Controla la visibilidad de las mini-ventanas de ayuda */
  helpVisibility: { [key: string]: boolean } = {
    websites: false,
    social_media: false // Cambiado a un solo control para todas las redes sociales
  };

  /** Controla la visibilidad de los campos adicionales del formulario 1 */
  showMoreFields = false; // Nueva propiedad para controlar la visibilidad

  /**
   * Validador personalizado para asegurar que el monto máximo no sea inferior al monto mínimo.
   * También considera si el presupuesto está establecido.
   * @param control El FormGroup que contiene los controles 'min_amount', 'max_amount' y 'has_budget'.
   * @returns Un objeto de errores de validación si la condición no se cumple, o null si es válido.
   */
  minMaxValidator(control: AbstractControl): ValidationErrors | null {
    const hasBudget = control.get('has_budget')?.value;
    const minAmount = control.get('min_amount')?.value;
    const maxAmount = control.get('max_amount')?.value;

    // Solo validar si 'has_budget' es true y ambos montos son numéricos
    if (hasBudget === true && typeof minAmount === 'number' && typeof maxAmount === 'number' && maxAmount < minAmount) {
      return { minMaxMismatch: true }; // Retorna un error si max_amount es menor que min_amount
    }
    return null; // Retorna null si es válido
  }

  /**
   * Constructor del componente
   *    * Inicializa ambos formularios con la estructura exacta requerida
   * por el backend, incluyendo todas las validaciones necesarias.
   *    * @param fb - FormBuilder para crear formularios reactivos
   * @param formularioService - Servicio para enviar formularios al backend
   */
  constructor(private fb: FormBuilder, private formularioService: FormularioService) {
    // Inicialización del formulario de Cotización
    this.form1 = this.fb.group({
      leadsData: this.fb.group({
        names: ['', Validators.required],
        lastnames: ['', Validators.required],
        mobile: ['', [Validators.required, Validators.minLength(7)]],
        email: ['', [Validators.required, Validators.email]],
        company: ['']  // Campo opcional
      }),
      budgetsData: this.fb.group({
        has_budget: [false], // Nuevo campo para controlar la visibilidad de los montos
        min_amount: [null], 
        max_amount: [null], 
        is_unsure: [false]
      }, { validators: this.minMaxValidator }), 
      goalsData: this.fb.group({
        increase_sales: [false],
        boost_brand_visibility: [false],
        generate_leads: [false],
        launch_new_product: [false],
        improve_digital_positioning: [false],
        other: ['']  // Campo de texto libre
      }),
      // websitesData vuelve a ser un FormGroup con campos fijos
      websitesData: this.fb.group({
        url1: [''],
        url2: [''],
        url3: ['']  // URLs opcionales
      }),
      // social_mediaData vuelve a ser un FormGroup con campos fijos
      social_mediaData: this.fb.group({
        facebook: [''],
        twitter: [''],
        instagram: [''],
        linkedin: [''],
        tiktok: [''],
        youtube: ['']  // Redes sociales opcionales
      }),
      servicesData: this.fb.group({
        web_design: [false],
        branding: [false],
        social_media_management: [false],
        google_ads: [false],
        social_media_advertising: [false],
        sales_funnels: [false],
        automation: [false],
        crm: [false],
        chatbot: [false],
        other: ['']  // Servicios adicionales
      }),
      commentsQuoteData: this.fb.group({
        comment: ['']  // Comentarios opcionales
      })
    });

    // Observar cambios en 'has_budget' para ajustar validadores si es necesario
    this.form1.get('budgetsData.has_budget')?.valueChanges.subscribe(value => {
      const minAmountControl = this.form1.get('budgetsData.min_amount');
      const maxAmountControl = this.form1.get('budgetsData.max_amount');
      if (value === true) {
        // Si tiene presupuesto, los campos de monto son requeridos
        minAmountControl?.setValidators(Validators.required);
        maxAmountControl?.setValidators(Validators.required);
      } else {
        // Si no tiene presupuesto, limpiar validadores y valores
        minAmountControl?.clearValidators();
        maxAmountControl?.clearValidators();
        minAmountControl?.setValue(null);
        maxAmountControl?.setValue(null);
      }
      minAmountControl?.updateValueAndValidity();
      maxAmountControl?.updateValueAndValidity();
      this.form1.get('budgetsData')?.updateValueAndValidity(); // Re-evaluar el validador del FormGroup
    });


    // Inicialización del formulario de Asesoría
    this.form2 = this.fb.group({
      leadsData: this.fb.group({
        names: ['', Validators.required],
        lastnames: ['', Validators.required],
        mobile: ['', [Validators.required, Validators.minLength(7)]],
        email: ['', [Validators.required, Validators.email]],
        company: ['']  // Campo opcional
      }),
      challengesData: this.fb.group({
        low_sales: [false],
        no_digital_presence: [false],
        no_advertising_knowledge: [false],
        no_strategy: [false],
        other: ['']  // Desafíos adicionales
      }),
      digitalPresenceData: this.fb.group({
        has_website: [false],
        has_social_media: [false],
        wants_new_start: [false]
      }),
      commentsSupportData: this.fb.group({
        comment: ['']  // Comentarios opcionales
      })
    });
  }

  /**
   * Muestra la mini-ventana de ayuda para un campo específico.
   * @param fieldName El nombre del campo para el cual mostrar la ayuda.
   */
  showHelp(fieldName: string) {
    this.helpVisibility[fieldName] = true;
  }

  /**
   * Oculta la mini-ventana de ayuda para un campo específico.
   * @param fieldName El nombre del campo para el cual ocultar la ayuda.
   */
  hideHelp(fieldName: string) {
    this.helpVisibility[fieldName] = false;
  }

  /**
   * Alterna la visibilidad de los campos adicionales del formulario 1.
   */
  toggleMoreFields() {
    this.showMoreFields = !this.showMoreFields;
  }

  /**
   * Formatea un valor numérico como moneda estadounidense (USD).
   * @param value El número a formatear.
   * @returns El valor formateado como string.
   */
  formatUSDCurrency(value: number | null): string {
    if (value === null || isNaN(value)) {
      return '';
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  }

  /**
   * Maneja el evento de input para formatear el valor de los campos de monto.
   * @param controlName El nombre del control del formulario ('min_amount' o 'max_amount').
   * @param event El evento de input.
   */
  formatCurrency(controlName: 'min_amount' | 'max_amount', event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let rawValue = inputElement.value.replace(/[^0-9]/g, ''); // Eliminar caracteres no numéricos
    let numericValue = parseInt(rawValue, 10);

    if (isNaN(numericValue)) {
      numericValue = 0; // Si no es un número válido, establecer como null
    }

    // Actualizar el valor del control del formulario con el número puro
    this.form1.get(`budgetsData.${controlName}`)?.setValue(numericValue, { emitEvent: false });

    // Actualizar la validación del FormGroup budgetsData para que el validador minMaxValidator se ejecute
    this.form1.get('budgetsData')?.updateValueAndValidity();
    
    // Formatear el valor para mostrar en el input
    inputElement.value = this.formatUSDCurrency(numericValue);
  }

  /**
   * Envía el formulario de cotización al backend
   *    * Maneja todos los posibles estados de respuesta:
   * - error: Error interno del backend
   * - blocked: Demasiadas peticiones
   * - !success: No se cumplió la lógica de negocio
   * - success: Envío exitoso
   *    * También maneja errores de red y del servidor.
   */
  submitForm1() {
    // Marcar todos los campos como tocados para activar las validaciones visuales
    this.form1.markAllAsTouched();

    // Validar formulario antes de enviar
    // Ahora incluye la validación personalizada del monto
    if (this.form1.invalid) {
      // Si hay un error de minMaxMismatch, mostrar un mensaje específico
      if (this.form1.get('budgetsData')?.errors?.['minMaxMismatch']) {
        this.error1 = 'El monto máximo no puede ser inferior al monto mínimo.';
      } else {
        // Para otros errores de validación, se puede poner un mensaje genérico
        this.error1 = 'Por favor, completa todos los campos requeridos y corrige los errores.';
      }
      return;
    }
    
    // Configurar estados de carga y limpiar mensajes
    this.loading1 = true;
    this.error1 = '';
    this.message1 = '';
    
    // Obtener los valores del formulario
    const form1RawValue = this.form1.value;

    // Preparar websitesData como un objeto con URLs, convirtiendo cadenas vacías a null
    const websitesDataToSend = {
      url1: form1RawValue.websitesData.url1 || null,
      url2: form1RawValue.websitesData.url2 || null,
      url3: form1RawValue.websitesData.url3 || null,
    };

    // Preparar social_mediaData como un objeto con URLs, convirtiendo cadenas vacías a null
    const socialMediaDataToSend = {
      facebook: form1RawValue.social_mediaData.facebook || null,
      twitter: form1RawValue.social_mediaData.twitter || null,
      instagram: form1RawValue.social_mediaData.instagram || null,
      linkedin: form1RawValue.social_mediaData.linkedin || null,
      tiktok: form1RawValue.social_mediaData.tiktok || null,
      youtube: form1RawValue.social_mediaData.youtube || null,
    };

    // Construir el payload final para el backend
    const payload = {
      ...form1RawValue,
      websitesData: websitesDataToSend,
      social_mediaData: socialMediaDataToSend
    };

    // Si has_budget es false, asegurar que min_amount y max_amount sean null
    if (payload.budgetsData.has_budget === false) {
      payload.budgetsData.min_amount = null;
      payload.budgetsData.max_amount = null;
    }

    this.formularioService.enviarCotizacion(payload).subscribe(response => {
      this.loading1 = false;
      
      // Manejar diferentes tipos de respuesta
      if (response.error) {
        this.error1 = typeof response.error === 'string' ? response.error : 'Ha ocurrido un error.';
      } else if (response.blocked) {
        this.error1 = 'Demasiadas peticiones. Intenta más tarde.';
      } else if (!response.success) {
        this.error1 = 'No se cumplió la lógica de negocio.';
      } else if (response.success) {
        this.message1 = '¡Cotización enviada correctamente!';
        this.form1Success = true;  // Mostrar segundo formulario
      }
    }, (error: HttpErrorResponse) => {
      this.loading1 = false;
      
      // Extraer mensaje de error específico del backend
      if (error.error && typeof error.error === 'string') {
        this.error1 = error.error;
      } else if (error.error && error.error.message) {
        this.error1 = error.error.message;
      } else {
        this.error1 = 'Error de red o del servidor.';
      }
    });
  }

  /**
   * Envía el formulario de asesoría al backend
   *    * Maneja los mismos estados de respuesta que el formulario de cotización,
   * pero sin mostrar el segundo formulario al completarse.
   */
  submitForm2() {
    // Validar formulario antes de enviar
    if (this.form2.invalid) {
      this.form2.markAllAsTouched();
      return;
    }
    
    // Configurar estados de carga y limpiar mensajes
    this.loading2 = true;
    this.error2 = '';
    this.message2 = '';
    
    // Enviar formulario al backend
    this.formularioService.enviarAsesoria(this.form2.value).subscribe(response => {
      this.loading2 = false;
      
      // Manejar diferentes tipos de respuesta
      if (response.error) {
        this.error2 = typeof response.error === 'string' ? response.error : 'Error interno del backend.';
      } else if (response.blocked) {
        this.error2 = 'Demasiadas peticiones. Intenta más tarde.';
      } else if (!response.success) {
        this.error2 = 'No se cumplió la lógica de negocio.';
      } else if (response.success) {
        this.message2 = '¡Asesoría enviada correctamente!';
      }
    }, (error: HttpErrorResponse) => {
      this.loading2 = false;
      
      // Extraer mensaje de error específico del backend
      if (error.error && typeof error.error === 'string') {
        this.error2 = error.error;
      } else if (error.error && error.error.message) {
        this.error2 = error.error.message;
      } else {
        this.error2 = 'Error de red o del servidor.';
      }
    });
  }
}

