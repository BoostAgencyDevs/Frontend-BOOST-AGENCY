import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  constructor(private http: HttpClient) { }

  enviarContacto(payload: any): Observable<any> {
    // Cambia la URL por la de tu backend si es necesario
    return this.http.post<any>('/api/lead', payload);
  }
} 