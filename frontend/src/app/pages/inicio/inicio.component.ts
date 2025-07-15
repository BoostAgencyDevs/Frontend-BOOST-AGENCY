/**
 * @fileoverview Componente de la página de inicio de Boost Agency
 * 
 * Este componente maneja la página principal del sitio web,
 * cargando y mostrando el contenido hero, servicios destacados y estadísticas.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../../shared/services/contenido.service';

/**
 * Componente de la página de inicio
 * 
 * Funcionalidades:
 * - Carga dinámica del contenido desde el backend
 * - Muestra sección hero con call-to-action
 * - Presenta servicios destacados
 * - Exhibe estadísticas de la empresa
 */
@Component({
  selector: 'app-inicio',  // Selector para usar en templates
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {
  /**
   * Contenido de la página de inicio
   * 
   * Estructura:
   * - hero: Sección principal con título, descripción y CTA
   * - servicios_destacados: Lista de servicios principales
   * - estadisticas: Métricas de la empresa
   */
  contenido: any = {
    hero: {
      titulo: '',
      subtitulo: '',
      descripcion: '',
      cta_texto: '',
      cta_link: '',
      imagen: ''
    },
    servicios_destacados: [],
    estadisticas: {
      clientes_satisfechos: '',
      proyectos_completados: '',
      años_experiencia: '',
      equipo_profesional: ''
    }
  };

  statsAnimated = false;
  mostrarMasTexto = false;

  constructor(private contenidoService: ContenidoService) {}

  /**
   * Hook del ciclo de vida - se ejecuta al inicializar el componente
   * 
   * Carga el contenido de la página desde el backend
   */
  ngOnInit(): void {
    this.loadContent();
    // Animación de estadísticas
    setTimeout(() => {
      this.checkStatsAnimation();
      window.addEventListener('scroll', this.checkStatsAnimation.bind(this));
      // Animación de textos de tarjetas
      this.checkStatTexts();
      window.addEventListener('scroll', this.checkStatTexts.bind(this));
    }, 0);
  }

  /**
   * Carga el contenido de la página desde el backend
   * 
   * Realiza una petición HTTP para obtener el contenido dinámico
   * y actualiza las propiedades del componente
   */
  private loadContent(): void {
    this.contenidoService.getContenido().subscribe({
      next: (data) => {
        if (data && data.inicio) {
          this.contenido = data.inicio;
        }
      },
      error: (error) => {
        console.error('Error loading content:', error);
      }
    });
  }

  animateStats() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target')!;
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;
      let increment = Math.ceil(target / 60);
      if (target > 100000) increment = Math.ceil(target / 100);
      if (target < 100) increment = 1;
      const update = () => {
        if (count < target) {
          count += increment;
          if (count > target) count = target;
          let display: string | number = count;
          if (suffix === 'k' && count >= 1000) display = Math.floor(count / 1000) + 'k';
          else if (suffix) display = count + suffix;
          else if (target >= 1000) display = count.toLocaleString();
          (counter as HTMLElement).textContent = display.toString();
          requestAnimationFrame(update);
        } else {
          let display: string | number = target;
          if (suffix === 'k' && target >= 1000) display = Math.floor(target / 1000) + 'k';
          else if (suffix) display = target + suffix;
          else if (target >= 1000) display = target.toLocaleString();
          (counter as HTMLElement).textContent = display.toString();
        }
      };
      update();
    });
  }

  checkStatsAnimation() {
    if (this.statsAnimated) return;
    const section = document.querySelector('.stat-number');
    if (section && section.getBoundingClientRect().top < window.innerHeight - 100) {
      this.animateStats();
      this.statsAnimated = true;
    }
  }

  /**
   * Hace aparecer los textos de las tarjetas de estadísticas al hacer scroll
   */
  checkStatTexts() {
    const statTexts = document.querySelectorAll('.stat-text');
    statTexts.forEach((el: any) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-4');
      }
    });
  }
}
