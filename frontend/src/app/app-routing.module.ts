/**
 * @fileoverview Configuración de enrutamiento principal de Boost Agency
 * 
 * Define todas las rutas de la aplicación con lazy loading para optimizar
 * el rendimiento y la carga inicial de la aplicación.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';

/**
 * Configuración de rutas de la aplicación
 * 
 * Características:
 * - Lazy loading para todos los módulos excepto Inicio
 * - Redirección automática a /inicio para rutas vacías
 * - Manejo de rutas no encontradas (404)
 */
const routes: Routes = [
  // Ruta por defecto - redirige a inicio
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  
  // Página principal - cargada por lazy loading
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule) },
  
  // Módulos con lazy loading para optimizar rendimiento
  { path: 'nosotros', loadChildren: () => import('./pages/nosotros/nosotros.module').then(m => m.NosotrosModule) },
  { path: 'servicios', loadChildren: () => import('./pages/servicios/servicios.module').then(m => m.ServiciosModule) },
  { path: 'planes', loadChildren: () => import('./pages/planes/planes.module').then(m => m.PlanesModule) },
  { path: 'fundacion', loadChildren: () => import('./pages/fundacion/fundacion.module').then(m => m.FundacionModule) },
  { path: 'boostcast', loadChildren: () => import('./pages/boostcast/boostcast.module').then(m => m.BoostcastModule) },
  { path: 'tienda', loadChildren: () => import('./pages/tienda/tienda.module').then(m => m.TiendaModule) },
  { path: 'contacto', loadChildren: () => import('./pages/contacto/contacto.module').then(m => m.ContactoModule) },
  { path: 'el-futuro-es-ahora', loadChildren: () => import('./pages/futuro/futuro.module').then(m => m.FuturoModule) },
  { path: 'formularios', loadChildren: () => import('./pages/formularios/formularios.module').then(m => m.FormulariosModule) },
  
  // Página de error 404
  { path: '404', component: Error404Component },
  
  // Ruta wildcard - maneja páginas no encontradas
  { path: '**', redirectTo: '404' }
];

/**
 * Módulo de enrutamiento principal
 * 
 * Configuración adicional:
 * - scrollPositionRestoration: 'enabled' - Restaura posición del scroll al navegar
 * - anchorScrolling: 'enabled' - Permite scroll a anclas en la URL
 * - scrollOffset: [0, 64] - Offset de 64px para compensar header fijo
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',  // Restaura posición del scroll
    anchorScrolling: 'enabled',            // Scroll a anclas
    scrollOffset: [0, 64]                  // Offset para header fijo [x, y]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
