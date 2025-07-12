import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

/**
 * Servicio para enviar formularios de Cotización y Asesoría a la API externa.
 * - Cotización: POST {apiUrl}/form/quote
 * - Asesoría: POST {apiUrl}/form/support
 * - La URL base se configura en environment.ts
 */
// ⚠️ Código no utilizado: Este servicio no está siendo utilizado actualmente en ningún componente.
@Injectable({ providedIn: 'root' })
export class FormulariosService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /**
   * Envía el formulario de cotización a la API externa
   * @param data Objeto con la estructura JSON requerida
   */
  enviarCotizacion(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/form/quote`, data);
  }

  /**
   * Envía el formulario de asesoría a la API externa
   * @param data Objeto con la estructura JSON requerida
   */
  enviarAsesoria(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/form/support`, data);
  }
} 