/**
 * @fileoverview Punto de entrada principal de la aplicación Angular
 * 
 * Este archivo es el punto de entrada de la aplicación Angular,
 * donde se inicializa la plataforma del navegador y se carga
 * el módulo raíz de la aplicación.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

/**
 * Inicialización de la aplicación Angular
 * 
 * Bootstrap del módulo raíz de la aplicación en la plataforma
 * del navegador, con manejo de errores incluido.
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
