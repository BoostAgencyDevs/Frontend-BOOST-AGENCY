/**
 * @fileoverview Servicio para gestión de contenido de Boost Agency
 * 
 * Este servicio maneja todas las operaciones relacionadas con el contenido
 * del sitio web, incluyendo lectura, actualización y carga de imágenes.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

/**
 * Servicio de gestión de contenido
 * 
 * Responsabilidades:
 * - Obtener contenido general y específico del sitio
 * - Actualizar contenido (funcionalidad administrativa)
 * - Gestionar carga de imágenes
 * - Comunicación con el backend para operaciones de contenido
 */
@Injectable({
  providedIn: 'root'  // Servicio disponible globalmente
})
export class ContenidoService {
  /** URL base de la API obtenida desde environment */
  private apiUrl = environment.apiUrl;

  /**
   * Constructor del servicio
   * 
   * @param http - Cliente HTTP de Angular para peticiones al backend
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene todo el contenido del sitio web
   * 
   * @returns Observable con el contenido completo
   */
  getContenido(): Observable<any> {
    return this.http.get(`${this.apiUrl}/contenido`);
  }

  /**
   * Obtiene contenido de una sección específica
   * 
   * @param seccion - Nombre de la sección a consultar
   * @returns Observable con el contenido de la sección
   */
  getSeccionContenido(seccion: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${seccion}`);
  }

  /**
   * Actualiza el contenido de una sección específica
   * 
   * @param seccion - Nombre de la sección a actualizar
   * @param content - Nuevo contenido a guardar
   * @returns Observable con la respuesta del servidor
   */
  updateContenido(seccion: string, content: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${seccion}`, content);
  }

  /**
   * Sube una imagen al servidor
   * 
   * @param file - Archivo de imagen a subir
   * @returns Observable con la respuesta del servidor
   */
  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }
}
