/**
 * @fileoverview Módulo principal de la aplicación Boost Agency
 * 
 * Este módulo configura la aplicación Angular con todos los componentes,
 * servicios y dependencias necesarias para el funcionamiento del sitio web.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './pages/inicio/inicio.component';

/**
 * Módulo raíz de la aplicación
 * 
 * Configura:
 * - Componentes principales (App, Layout, Inicio)
 * - Módulos de Angular necesarios (Browser, HttpClient, Router)
 * - Enrutamiento de la aplicación
 */
@NgModule({
  declarations: [
    AppComponent,        // Componente raíz de la aplicación
    LayoutComponent,     // Componente de layout principal
    InicioComponent      // Componente de la página de inicio
  ],
  imports: [
    BrowserModule,       // Módulo para aplicaciones web
    AppRoutingModule,    // Configuración de rutas
    HttpClientModule,    // Para peticiones HTTP
    RouterModule         // Funcionalidad de enrutamiento
  ],
  providers: [],
  bootstrap: [AppComponent]  // Componente que inicia la aplicación
})
export class AppModule { }
