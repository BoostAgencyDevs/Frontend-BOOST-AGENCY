/**
 * @fileoverview Módulo de formularios de Boost Agency
 * 
 * Este módulo maneja todos los formularios de la aplicación,
 * incluyendo formularios de contacto, cotización y asesoría.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto.component';

/**
 * Rutas del módulo de formularios
 * 
 * Configuración de enrutamiento específica para este módulo
 */
const routes: Routes = [
  { path: '', component: ContactoComponent }  // Ruta por defecto
];

/**
 * Módulo de formularios
 * 
 * Configura:
 * - Componente principal de formularios
 * - Módulos necesarios para formularios reactivos
 * - Enrutamiento específico del módulo
 */
@NgModule({
  declarations: [
    ContactoComponent  // Componente principal del módulo
  ],
  imports: [
    CommonModule,         // Directivas comunes de Angular
    ReactiveFormsModule,  // Para formularios reactivos
    RouterModule.forChild(routes)  // Enrutamiento específico del módulo
  ]
})
export class ContactoModule {} 
