/**
 * @fileoverview Módulo de planes de Boost Agency
 * 
 * Este módulo maneja la página de planes y paquetes de servicios,
 * permitiendo a los usuarios seleccionar diferentes opciones.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlanesComponent } from './planes.component';

/**
 * Módulo de planes
 * 
 * Configura:
 * - Componente principal de planes
 * - Enrutamiento específico del módulo
 * - Módulos necesarios para funcionalidad básica
 */
@NgModule({
  declarations: [
    PlanesComponent  // Componente principal del módulo
  ],
  imports: [
    CommonModule,  // Directivas comunes de Angular
    RouterModule.forChild([{ path: '', component: PlanesComponent }])  // Enrutamiento específico
  ]
})
export class PlanesModule { }
