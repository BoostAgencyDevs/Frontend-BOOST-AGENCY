/**
 * @fileoverview Componente de Contacto para Boost Agency.
 * Este componente maneja el formulario de contacto para enviar mensajes al backend.
 *
 * Características:
 * - Utiliza Angular Reactive Forms para la gestión del formulario y validaciones.
 * - Define la estructura de datos para el envío al endpoint /api/lead.
 * - Muestra estados de carga, mensajes de éxito y errores al usuario.
 *
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../../shared/services/contacto.service'; // Importa el servicio ContactoService
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  //styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  /** Formulario de contacto */
  contactForm: FormGroup;

  /** Estado de carga del formulario */
  loading = false;

  /** Mensaje de éxito tras el envío */
  message = '';

  /** Mensaje de error si el envío falla */
  error = '';

  constructor(private fb: FormBuilder, private contactoService: ContactoService) {
    // Inicialización del formulario de contacto
    this.contactForm = this.fb.group({
      names: ['', Validators.required],
      lastnames: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''], // Opcional
      message: [''] // Este campo es para la UI, pero no se enviará dentro de leadsData al API /api/lead
    });
  }

  /**
   * Maneja el envío del formulario de contacto.
   * Valida el formulario, prepara los datos y los envía al backend.
   * Muestra retroalimentación al usuario (carga, éxito, error).
   */
  submitContactForm() {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      this.error = 'Por favor, completa todos los campos requeridos y corrige los errores.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.message = '';

    // Prepara los datos para el envío, anidando los campos en 'leadsData'
    // IMPORTANTE: El campo 'message' del HTML NO se incluye en 'leadsData'
    // porque el cuerpo de la API para /api/lead que proporcionaste no lo especifica allí.
    const payload = {
      leadsData: {
        names: this.contactForm.value.names,
        lastnames: this.contactForm.value.lastnames,
        mobile: this.contactForm.value.mobile,
        email: this.contactForm.value.email,
        company: this.contactForm.value.company || null // Asegura que sea null si está vacío
      }
    };

    this.contactoService.enviarContacto(payload).subscribe(
      (response: any) => {
        this.loading = false;
        if (response.error) {
          this.error = typeof response.error === 'string' ? response.error : 'Error interno del backend.';
        } else if (response.blocked) {
          this.error = 'Demasiadas peticiones. Intenta más tarde.';
        } else if (!response.success) {
          this.error = 'No se pudo enviar el mensaje. Intenta de nuevo.';
        } else if (response.success) {
          this.message = '¡Mensaje enviado correctamente! Te responderemos pronto.';
          this.contactForm.reset();
        }
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        if (error.error && typeof error.error === 'string') {
          this.error = error.error;
        } else if (error.error && error.error.message) {
          this.error = error.error.message;
        } else {
          this.error = 'Error de conexión o del servidor. Intenta de nuevo más tarde.';
        }
      }
    );
  }
}
