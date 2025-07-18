/**
 * @fileoverview Componente de formularios de Boost Agency
 * 
 * Este componente maneja dos formularios principales:
 * 1. Formulario de Cotización (POST apiUrl/api/quote)
 * 2. Formulario de Asesoría (POST apiUrl/api/support)
 * 
 * Características:
 * - Validaciones reactivas y visuales
 * - Manejo completo de estados de carga y errores
 * - Estructura de datos exacta según especificaciones del backend
 * - Todos los campos requeridos validados
 * - El segundo formulario aparece tras éxito del primero
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from '../../shared/services/formulario.service';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Componente de formularios
 * 
 * Funcionalidades:
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

  /**
   * Constructor del componente
   * 
   * Inicializa ambos formularios con la estructura exacta requerida
   * por el backend, incluyendo todas las validaciones necesarias.
   * 
   * @param fb - FormBuilder para crear formularios reactivos
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
        company: ['']  // Campo opcional
      }),
      budgetsData: this.fb.group({
        min_amount: [0, Validators.required],
        max_amount: [0, Validators.required],
        is_unsure: [false]
      }),
      goalsData: this.fb.group({
        increase_sales: [false],
        boost_brand_visibility: [false],
        generate_leads: [false],
        launch_new_product: [false],
        improve_digital_positioning: [false],
        other: ['']  // Campo de texto libre
      }),
      websitesData: this.fb.group({
        url1: [''],
        url2: [''],
        url3: ['']  // URLs opcionales
      }),
      social_mediaData: this.fb.group({
        facebook: [''],
        twitter: [''],
        instagram: [''],
        linkedin: [''],
        tiktok: [''],
        youtube: ['']  // Redes sociales opcionales
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
        other: ['']  // Servicios adicionales
      }),
      commentsQuoteData: this.fb.group({
        comment: ['']  // Comentarios opcionales
      })
    });

    // Inicialización del formulario de Asesoría
    this.form2 = this.fb.group({
      leadsData: this.fb.group({
        names: ['', Validators.required],
        lastnames: ['', Validators.required],
        mobile: ['', [Validators.required, Validators.minLength(7)]],
        email: ['', [Validators.required, Validators.email]],
        company: ['']  // Campo opcional
      }),
      challengesData: this.fb.group({
        low_sales: [false],
        no_digital_presence: [false],
        no_advertising_knowledge: [false],
        no_strategy: [false],
        other: ['']  // Desafíos adicionales
      }),
      digitalPresenceData: this.fb.group({
        has_website: [false],
        has_social_media: [false],
        wants_new_start: [false]
      }),
      commentsSupportData: this.fb.group({
        comment: ['']  // Comentarios opcionales
      })
    });
  }

  /**
   * Envía el formulario de cotización al backend
   * 
   * Maneja todos los posibles estados de respuesta:
   * - error: Error interno del backend
   * - blocked: Demasiadas peticiones
   * - !success: No se cumplió la lógica de negocio
   * - success: Envío exitoso
   * 
   * También maneja errores de red y del servidor.
   */
  submitForm1() {
    // Validar formulario antes de enviar
    if (this.form1.invalid) {
      this.form1.markAllAsTouched();
      return;
    }
    
    // Configurar estados de carga y limpiar mensajes
    this.loading1 = true;
    this.error1 = '';
    this.message1 = '';
    
    // Enviar formulario al backend
    this.formularioService.enviarCotizacion(this.form1.value).subscribe(response => {
      this.loading1 = false;
      
      // Manejar diferentes tipos de respuesta
      if (response.error) {
        this.error1 = typeof response.error === 'string' ? response.error : 'Error interno del backend.';
      } else if (response.blocked) {
        this.error1 = 'Demasiadas peticiones. Intenta más tarde.';
      } else if (!response.success) {
        this.error1 = 'No se cumplió la lógica de negocio.';
      } else if (response.success) {
        this.message1 = '¡Cotización enviada correctamente!';
        this.form1Success = true;  // Mostrar segundo formulario
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
   * 
   * Maneja los mismos estados de respuesta que el formulario de cotización,
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