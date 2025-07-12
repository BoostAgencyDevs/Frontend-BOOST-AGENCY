/**
 * @fileoverview Configuración de Tailwind CSS para Boost Agency
 * 
 * Este archivo define la configuración personalizada de Tailwind CSS,
 * incluyendo colores, animaciones, sombras y espaciados específicos
 * para el diseño de Boost Agency.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Archivos donde buscar clases de Tailwind
  content: [
    "./src/**/*.{html,ts}",  // Buscar en todos los archivos HTML y TypeScript
  ],
  theme: {
    extend: {
      // Configuración de fuentes
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],  // Fuente principal de la aplicación
      },
      // Paleta de colores personalizada
      colors: {
        // Paleta de colores principal basada en influur.com
        primary: {
          50: '#FFA8A8',   // Tono más claro
          100: '#FF8787',  // Tono claro
          200: '#FF6B6B',  // Color tomate elegante principal
          300: '#FF6B6B',  // Color principal
          400: '#FF6B6B',  // Color principal
          500: '#FF6B6B',  // Color principal
          600: '#E55555',  // Tono más oscuro
          700: '#CC4444',  // Tono oscuro
          800: '#B33333',  // Tono muy oscuro
          900: '#992222'   // Tono más oscuro
        },
        // Colores de acento y texto
        accent: '#f05f02',        // Color tomate elegante
        'accent-light': '#f05f02', // Tono más claro
        'accent-lighter': '#f05f02', // Tono aún más claro
        'text-primary': '#FFFFFF',    // Blanco puro para texto principal
        'text-secondary': '#CCCCCC',  // Gris claro para textos secundarios
        'bg-primary': '#000000',      // Negro puro para fondo principal
        // Escala de colores oscuros
        dark: {
          50: '#CCCCCC',   // Texto secundario
          100: '#FFFFFF',  // Texto principal (blanco puro)
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FFFFFF',
          600: '#FFFFFF',
          700: '#FFFFFF',
          800: '#000000',  // Fondo principal (negro puro)
          900: '#000000',
          950: '#000000'
        },
        // Escala de colores claros
        light: {
          50: '#FFFFFF',   // Blanco puro
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#CCCCCC',  // Texto secundario
          400: '#CCCCCC',
          500: '#CCCCCC',
          600: '#CCCCCC',
          700: '#CCCCCC',
          800: '#CCCCCC',
          900: '#CCCCCC',
        }
      },
      // Animaciones personalizadas
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',      // Fade in básico
        'fade-in-up': 'fadeInUp 0.8s ease-out',           // Fade in desde abajo
        'fade-in-down': 'fadeInDown 0.6s ease-out',       // Fade in desde arriba
        'fade-in-left': 'fadeInLeft 0.6s ease-out',       // Fade in desde la izquierda
        'fade-in-right': 'fadeInRight 0.6s ease-out',     // Fade in desde la derecha
        'scale-in': 'scaleIn 0.6s ease-out',              // Escalado con fade
        'slide-in': 'slideIn 0.5s ease-out',              // Slide desde abajo
        'bounce-soft': 'bounceSoft 2s infinite',          // Bounce suave
        'zoom-in': 'zoom-in 0.8s ease-out forwards',      // Zoom in
        'entrance': 'entrance 1s ease-out',               // Animación de entrada
        'slide-up': 'slide-up 0.8s ease-out forwards',    // Slide hacia arriba
        'bounce-x': 'bounce-x 1s infinite',               // Bounce horizontal
        float: 'float 3s ease-in-out infinite',           // Efecto flotante
        'impressive-count': 'impressive-count 1.2s cubic-bezier(.22,1,.36,1) both',
      },
      // Definición de keyframes para las animaciones
      keyframes: {
        // Fade in básico
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Fade in desde abajo
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        // Fade in desde arriba
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        // Fade in desde la izquierda
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        // Fade in desde la derecha
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        // Escalado con fade
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        // Slide desde abajo
        slideIn: {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        // Bounce suave
        bounceSoft: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        // Fade in básico (alternativo)
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Slide hacia arriba
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Zoom in
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // Animación de entrada combinada
        entrance: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        // Bounce horizontal
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        // Efecto flotante
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'impressive-count': {
          '0%': { opacity: '0', filter: 'blur(8px)', transform: 'scale(0.8)' },
          '40%': { opacity: '1', filter: 'blur(0)', transform: 'scale(1.15)', textShadow: '0 0 24px #f05f02, 0 0 8px #fff2' },
          '60%': { opacity: '1', filter: 'blur(0)', transform: 'scale(0.98)', textShadow: '0 0 12px #f05f02, 0 0 4px #fff2' },
          '100%': { opacity: '1', filter: 'blur(0)', transform: 'scale(1)', textShadow: '0 0 0 #f05f02' },
        },
      },
      // Sombras personalizadas
      boxShadow: {
        'glow': '0 0 20px rgba(255, 107, 107, 0.3)',      // Glow suave
        'glow-lg': '0 0 30px rgba(255, 107, 107, 0.4)',   // Glow grande
        'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)', // Sombra oscura
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)', // Sombra oscura grande
        'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)', // Sombra oscura extra grande
      },
      // Bordes redondeados personalizados
      borderRadius: {
        'xl': '1rem',      // 16px
        '2xl': '1.5rem',   // 24px
        '3xl': '2rem',     // 32px
        '4xl': '2.5rem',   // 40px
      },
      // Espaciados personalizados
      spacing: {
        '18': '4.5rem',    // 72px
        '22': '5.5rem',    // 88px
        '72': '18rem',     // 288px
        '84': '21rem',     // 336px
        '96': '24rem',     // 384px
      },
    },
  },
  plugins: [],  // Plugins adicionales de Tailwind (vacío por ahora)
};
