/**
 * @fileoverview Servicio de datos mock para Boost Agency
 * 
 * Este servicio proporciona datos de prueba para el desarrollo y testing
 * de la aplicación, incluyendo contenido de inicio y productos de la tienda.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Servicio de datos mock
 * 
 * Responsabilidades:
 * - Proporcionar datos de prueba para desarrollo
 * - Simular respuestas de API durante testing
 * - Mantener estructura de datos consistente
 * - Facilitar desarrollo sin dependencia del backend
 */
@Injectable({
  providedIn: 'root'  // Servicio disponible globalmente
})
export class MockDataService {
  /**
   * Datos mock de la aplicación
   * 
   * Estructura:
   * - inicio: Contenido de la página principal
   * - productos: Catálogo de productos de la tienda
   */
  private mockData = {
    // Contenido de la página de inicio
    inicio: {
      hero: {
        titulo: 'Impulsa tu Negocio al Siguiente Nivel',
        subtitulo: 'Agencia Digital de Marketing y Desarrollo',
        descripcion: 'Transformamos tu presencia digital con estrategias innovadoras y soluciones tecnológicas de vanguardia.',
        cta_texto: 'Comienza Ahora',
        cta_link: '/contacto',
        imagen: 'assets/images/hero-image.jpg'
      },
      servicios_destacados: [
        {
          titulo: 'Marketing Digital',
          descripcion: 'Estrategias personalizadas para aumentar tu visibilidad online y atraer clientes potenciales.',
          icono: 'fas fa-chart-line',
          link: '/servicios/marketing-digital'
        },
        {
          titulo: 'Desarrollo Web',
          descripcion: 'Sitios web modernos y aplicaciones que destacan tu marca y mejoran la experiencia del usuario.',
          icono: 'fas fa-code',
          link: '/servicios/desarrollo-web'
        },
        {
          titulo: 'Gestión de Redes Sociales',
          descripcion: 'Manejo profesional de tus redes sociales para construir una comunidad comprometida.',
          icono: 'fas fa-share-alt',
          link: '/servicios/redes-sociales'
        }
      ],
      estadisticas: {
        clientes_satisfechos: '500+',
        proyectos_completados: '1000+',
        años_experiencia: '10+',
        equipo_profesional: '50+'
      }
    },
    // Catálogo de productos de la tienda
    productos: [
      // Gorras
      { id: 1, nombre: 'Gorra BOOST Classic', precio: 29.99, imagen: 'assets/images/gorra1.png', categoria: 'Gorras', descripcion: 'Gorra negra con logo BOOST bordado.' },
      { id: 2, nombre: 'Gorra Visionaria', precio: 32.99, imagen: 'assets/images/gorra2.png', categoria: 'Gorras', descripcion: 'Estilo futurista, edición limitada.' },
      { id: 3, nombre: 'Gorra Cloud Nomad', precio: 27.99, imagen: 'assets/images/gorra3.png', categoria: 'Gorras', descripcion: 'Para creativos en movimiento.' },
      { id: 4, nombre: 'Gorra Digital Mind', precio: 31.99, imagen: 'assets/images/gorra4.png', categoria: 'Gorras', descripcion: 'Diseño para mentes digitales.' },
      { id: 5, nombre: 'Gorra Algorítmica', precio: 28.99, imagen: 'assets/images/gorra5.png', categoria: 'Gorras', descripcion: 'Inspirada en la lógica y el código.' },
      // Camisetas
      { id: 6, nombre: 'Camiseta BOOST Naranja', precio: 24.99, imagen: 'assets/images/camiseta1.png', categoria: 'Camisetas', descripcion: 'Color naranja oficial, algodón premium.' },
      { id: 7, nombre: 'Camiseta Futurista', precio: 26.99, imagen: 'assets/images/camiseta2.png', categoria: 'Camisetas', descripcion: 'Estampado digital, corte moderno.' },
      { id: 8, nombre: 'Camiseta Cloud Dev', precio: 22.99, imagen: 'assets/images/camiseta3.png', categoria: 'Camisetas', descripcion: 'Para desarrolladores en la nube.' },
      { id: 9, nombre: 'Camiseta Vision Boost', precio: 25.99, imagen: 'assets/images/camiseta4.png', categoria: 'Camisetas', descripcion: 'Viste tu visión digital.' },
      { id: 10, nombre: 'Camiseta Algorítmica', precio: 23.99, imagen: 'assets/images/camiseta5.png', categoria: 'Camisetas', descripcion: 'Inspirada en algoritmos y creatividad.' },
      // Hoodies
      { id: 11, nombre: 'Hoodie BOOST Black', precio: 44.99, imagen: 'assets/images/hoodie1.png', categoria: 'Hoodies', descripcion: 'Hoodie negro, logo BOOST.' },
      { id: 12, nombre: 'Hoodie Digital Nomad', precio: 47.99, imagen: 'assets/images/hoodie2.png', categoria: 'Hoodies', descripcion: 'Para nómadas digitales.' },
      { id: 13, nombre: 'Hoodie Futurista', precio: 49.99, imagen: 'assets/images/hoodie3.png', categoria: 'Hoodies', descripcion: 'Diseño vanguardista.' },
      { id: 14, nombre: 'Hoodie Cloud Coder', precio: 45.99, imagen: 'assets/images/hoodie4.png', categoria: 'Hoodies', descripcion: 'Para programadores en la nube.' },
      { id: 15, nombre: 'Hoodie Algorítmico', precio: 46.99, imagen: 'assets/images/hoodie5.png', categoria: 'Hoodies', descripcion: 'Inspirado en la lógica y el código.' },
      // Libros
      { id: 16, nombre: 'Libro: Creatividad Digital', precio: 19.99, imagen: 'assets/images/libro1.png', categoria: 'Libros', descripcion: 'Ideas para la era digital.' },
      { id: 17, nombre: 'Libro: Nómada Tech', precio: 21.99, imagen: 'assets/images/libro2.png', categoria: 'Libros', descripcion: 'Historias de nómadas digitales.' },
      { id: 18, nombre: 'Libro: Algoritmos para la Vida', precio: 18.99, imagen: 'assets/images/libro3.png', categoria: 'Libros', descripcion: 'Pensamiento algorítmico.' },
      { id: 19, nombre: 'Libro: Futuro Conectado', precio: 22.99, imagen: 'assets/images/libro4.png', categoria: 'Libros', descripcion: 'El futuro de la tecnología.' },
      { id: 20, nombre: 'Libro: BOOST Your Mind', precio: 20.99, imagen: 'assets/images/libro5.png', categoria: 'Libros', descripcion: 'Impulsa tu mente digital.' },
      // Accesorios
      { id: 21, nombre: 'Mug BOOST', precio: 14.99, imagen: 'assets/images/accesorio1.png', categoria: 'Accesorios', descripcion: 'Taza oficial BOOST.' },
      { id: 22, nombre: 'Sticker Pack', precio: 7.99, imagen: 'assets/images/accesorio2.png', categoria: 'Accesorios', descripcion: 'Stickers para tu laptop.' },
      { id: 23, nombre: 'Bolso Digital', precio: 34.99, imagen: 'assets/images/accesorio3.png', categoria: 'Accesorios', descripcion: 'Bolso para nómadas digitales.' },
      { id: 24, nombre: 'Llavero BOOST', precio: 9.99, imagen: 'assets/images/accesorio4.png', categoria: 'Accesorios', descripcion: 'Llavero metálico.' },
      { id: 25, nombre: 'Mousepad Futurista', precio: 16.99, imagen: 'assets/images/accesorio5.png', categoria: 'Accesorios', descripcion: 'Mousepad edición especial.' },
      // E-books
      { id: 26, nombre: 'E-book: Creatividad Digital', precio: 9.99, imagen: 'assets/images/ebook1.png', categoria: 'E-books', descripcion: 'Versión digital de creatividad.' },
      { id: 27, nombre: 'E-book: Nómada Tech', precio: 11.99, imagen: 'assets/images/ebook2.png', categoria: 'E-books', descripcion: 'Historias en formato digital.' },
      { id: 28, nombre: 'E-book: Algoritmos para la Vida', precio: 8.99, imagen: 'assets/images/ebook3.png', categoria: 'E-books', descripcion: 'Pensamiento algorítmico digital.' },
      { id: 29, nombre: 'E-book: Futuro Conectado', precio: 12.99, imagen: 'assets/images/ebook4.png', categoria: 'E-books', descripcion: 'El futuro en e-book.' },
      { id: 30, nombre: 'E-book: BOOST Your Mind', precio: 10.99, imagen: 'assets/images/ebook5.png', categoria: 'E-books', descripcion: 'Impulsa tu mente digital en digital.' }
    ]
  };

  /**
   * Constructor del servicio
   */
  constructor() { }

  /**
   * Obtiene todos los datos mock
   * 
   * @returns Observable con todos los datos mock
   */
  getContenido(): Observable<any> {
    return of(this.mockData);
  }

  /**
   * Actualiza los datos mock
   * 
   * @param content - Nuevo contenido a agregar/actualizar
   * @returns Observable con los datos actualizados
   */
  updateContenido(content: any): Observable<any> {
    this.mockData = { ...this.mockData, ...content };
    return of(this.mockData);
  }
}
