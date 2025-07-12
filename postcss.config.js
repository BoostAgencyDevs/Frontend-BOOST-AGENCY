/**
 * @fileoverview Configuración de PostCSS para Boost Agency
 * 
 * Este archivo define los plugins de PostCSS utilizados para
 * procesar CSS en la aplicación Angular, incluyendo Tailwind CSS
 * y Autoprefixer.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

/**
 * Configuración de PostCSS
 * 
 * Plugins configurados:
 * - tailwindcss: Procesa las clases de Tailwind CSS
 * - autoprefixer: Añade prefijos de navegador automáticamente
 */
module.exports = {
  plugins: {
    tailwindcss: {},    // Plugin de Tailwind CSS
    autoprefixer: {},   // Plugin de Autoprefixer
  },
}
