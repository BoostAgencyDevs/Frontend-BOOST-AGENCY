import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Servicio para enviar los formularios de Cotización y Asesoría a la API externa.
 * - Cotización: POST https://api-nodejs-production-f88a.up.railway.app/api/quote
 * - Asesoría: POST https://api-nodejs-production-f88a.up.railway.app/api/support
 */
@Injectable({ providedIn: 'root' })
export class FormularioService {
  private cotizacionUrl = 'http://localhost:3000/leads/formQuote';
  private asesoriaUrl = 'http://localhost:3000/leads/formSupport';

  constructor(private http: HttpClient) {}

  /**
   * Envía el formulario de cotización al endpoint externo
   * @param data Objeto con la estructura JSON requerida
   */
  enviarCotizacion(data: any): Observable<any> {
    return this.http.post(this.cotizacionUrl, data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  /**
   * Envía el formulario de asesoría al endpoint externo
   * @param data Objeto con la estructura JSON requerida
   */
  enviarAsesoria(data: any): Observable<any> {
    return this.http.post(this.asesoriaUrl, data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 