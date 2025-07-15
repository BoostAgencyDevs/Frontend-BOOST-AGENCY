import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Servicio para enviar los formularios de Cotización y Asesoría a la API externa.
 * Se han actualizado las URLs para apuntar a los endpoints correctos en Railway.
 *
 * - Cotización: POST https://api-nodejs-production-f88a.up.railway.app/leads/formQuote
 * - Asesoría: POST https://api-nodejs-production-f88a.up.railway.app/leads/formSupport
 */
@Injectable({ providedIn: 'root' })
export class FormulariosService {
  // URL base de tu API en Railway
  private baseUrl = 'https://api-nodejs-production-f88a.up.railway.app/api';

  // Endpoints específicos para cada formulario
  private cotizacionUrl = `${this.baseUrl}/leads/formQuote`;
  private asesoriaUrl = `${this.baseUrl}/leads/formSupport`;

  constructor(private http: HttpClient) {}

  /**
   * Envía el formulario de cotización al endpoint externo
   * @param data Objeto con la estructura JSON requerida para la cotización
   */
  enviarCotizacion(data: any): Observable<any> {
    return this.http.post(this.cotizacionUrl, data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  /**
   * Envía el formulario de asesoría al endpoint externo
   * @param data Objeto con la estructura JSON requerida para la asesoría
   */
  enviarAsesoria(data: any): Observable<any> {
    return this.http.post(this.asesoriaUrl, data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 