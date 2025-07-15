/**
 * @fileoverview Configuración de entorno de desarrollo para Boost Agency
 * 
 * Este archivo contiene las variables de configuración específicas
 * para el entorno de desarrollo de la aplicación Angular.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

/**
 * Configuración del entorno de desarrollo
 * 
 * Variables disponibles:
 * - production: Indica si es entorno de producción (false para desarrollo)
 * - apiUrl: URL base de la API backend
 */
export const environment = {
  production: false,  // Entorno de desarrollo
  apiUrl: 'http://api-nodejs-production-f88a.up.railway.app/api'  // URL de la API en Railway
};
