/**
 * @fileoverview Componente raíz de la aplicación Boost Agency
 * 
 * Este componente actúa como punto de entrada de la aplicación,
 * configurando el layout principal y el router outlet para la navegación.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { Component } from '@angular/core';

/**
 * Componente raíz de la aplicación
 * 
 * Funcionalidad:
 * - Proporciona el layout principal de la aplicación
 * - Configura el router outlet para la navegación entre páginas
 * - Define el título de la aplicación
 */
@Component({
  selector: 'app-root',  // Selector CSS para usar en el DOM
  template: `
    <app-layout>
      <router-outlet></router-outlet>
    </app-layout>
  `,
  styles: []
})
export class AppComponent {
  /** Título de la aplicación */
  title = 'BOOST AGENCY';
}
