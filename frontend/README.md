# Frontend-BOOST-AGENCY
Frontend

# Despliegue del Frontend Angular en Netlify

## Estructura del Proyecto

- `/frontend`: Aplicación Angular (solo esta carpeta se despliega en Netlify)
- `/backend`: API Node.js (se despliega por separado, por ejemplo en Railway)

---

## 1. Construcción del Proyecto Angular

Ejecuta el siguiente comando desde la carpeta raíz del proyecto:

```bash
ng build --configuration production
```

Esto generará la carpeta de salida en:

```
frontend/dist/<nombre-del-proyecto>
```

> **Nota:** Reemplaza `<nombre-del-proyecto>` por el nombre real de la carpeta generada dentro de `dist` (por ejemplo, `frontend/dist/frontend`).

---

## 2. Configuración de Netlify (`netlify.toml`)

Crea (o edita) el archivo `netlify.toml` en la raíz del proyecto o dentro de `/frontend` con el siguiente contenido:

```toml
[build]
  base = "frontend"
  publish = "frontend/dist/<nombre-del-proyecto>"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

> **Importante:** Cambia `<nombre-del-proyecto>` por el nombre real de la carpeta generada en `dist`.

---

## 3. Despliegue en Netlify

### a) Subida manual

1. Inicia sesión en [Netlify](https://app.netlify.com/).
2. Haz clic en “Add new site” > “Deploy manually”.
3. Sube el contenido completo de la carpeta `dist/<nombre-del-proyecto>` (después de ejecutar el build).

### b) Conexión automática vía GitHub

1. Conecta tu repositorio de GitHub a Netlify.
2. En la configuración de **Build & Deploy**:
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/dist/<nombre-del-proyecto>`

---

## 4. Notas sobre rutas Angular

El archivo `netlify.toml` incluye una regla de redirección:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Esto permite que Angular maneje correctamente las rutas internas del frontend (Single Page Application).

---

## 5. Importante

- **Solo el frontend se despliega en Netlify.**
- El backend (`/backend`) debe desplegarse por separado (por ejemplo, en Railway, Render, etc.).
- Asegúrate de que las variables de entorno y endpoints del frontend apunten correctamente al backend desplegado.

---

¿Dudas? Consulta este README o contacta al equipo de desarrollo.
