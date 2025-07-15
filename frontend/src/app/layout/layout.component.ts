/**
 * @fileoverview Componente de layout principal de Boost Agency
 * 
 * Este componente maneja la estructura general de la aplicación,
 * incluyendo la navegación, menú móvil y funcionalidades de UI.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente de layout principal
 * 
 * Responsabilidades:
 * - Gestionar el estado del menú móvil
 * - Proporcionar navegación entre páginas
 * - Manejar la detección de rutas activas
 * - Controlar el scroll de la página
 */
@Component({
  selector: 'app-layout',  // Selector para usar en templates
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  /** Estado del menú móvil (abierto/cerrado) */
  isMobileMenuOpen = false;

  /**
   * Constructor del componente
   * 
   * @param router - Servicio de enrutamiento de Angular
   */
  constructor(private router: Router) {
    // Cerrar el menú móvil automáticamente al cambiar de ruta
    this.router.events.subscribe(() => {
      this.closeMobileMenu();
    });
  }

  /**
   * Alterna el estado del menú móvil
   * 
   * Cambia entre abierto y cerrado el menú de navegación móvil
   */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  /**
   * Cierra el menú móvil
   * 
   * Establece el estado del menú móvil como cerrado
   */
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  /**
   * Verifica si una ruta está actualmente activa
   * 
   * @param route - Ruta a verificar
   * @returns true si la ruta está activa, false en caso contrario
   */
  isActive(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',        // Comparación exacta de rutas
      queryParams: 'exact',  // Comparación exacta de parámetros
      fragment: 'ignored',   // Ignorar fragmentos de URL
      matrixParams: 'ignored' // Ignorar parámetros de matriz
    });
  }

  /**
   * Realiza scroll suave al inicio de la página
   * 
   * Utiliza la API nativa de scroll con comportamiento suave
   */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
