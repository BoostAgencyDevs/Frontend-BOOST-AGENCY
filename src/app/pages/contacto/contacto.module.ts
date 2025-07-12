/**
 * @fileoverview Módulo de contacto de Boost Agency
 * 
 * Este módulo maneja la página de contacto de la empresa,
 * proporcionando información de contacto y formularios de comunicación.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto.component';

/**
 * Módulo de contacto
 * 
 * Configura:
 * - Componente principal de contacto
 * - Enrutamiento específico del módulo
 * - Módulos necesarios para funcionalidad básica
 */
@NgModule({
  declarations: [
    ContactoComponent  // Componente principal del módulo
  ],
  imports: [
    CommonModule,  // Directivas comunes de Angular
    RouterModule.forChild([{ path: '', component: ContactoComponent }])  // Enrutamiento específico
  ]
})
export class ContactoModule { }
