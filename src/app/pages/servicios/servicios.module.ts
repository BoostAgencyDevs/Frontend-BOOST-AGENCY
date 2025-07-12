/**
 * @fileoverview Módulo de servicios de Boost Agency
 * 
 * Este módulo maneja la página de servicios de la empresa,
 * mostrando las diferentes soluciones y servicios ofrecidos.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiciosComponent } from './servicios.component';

/**
 * Módulo de servicios
 * 
 * Configura:
 * - Componente principal de servicios
 * - Enrutamiento específico del módulo
 * - Módulos necesarios para funcionalidad básica
 */
@NgModule({
  declarations: [
    ServiciosComponent  // Componente principal del módulo
  ],
  imports: [
    CommonModule,  // Directivas comunes de Angular
    RouterModule.forChild([{ path: '', component: ServiciosComponent }])  // Enrutamiento específico
  ]
})
export class ServiciosModule { }
