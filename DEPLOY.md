# 🚀 Despliegue en Vercel - Los Tigres Records

## ✅ Proyecto Listo para Despliegue

### Características del Proyecto:
- **Framework:** Next.js 16 con App Router
- **Estilos:** CSS Modules (sin Tailwind)
- **Tipografía:** Poppins (Google Fonts)
- **Contenido:** 4 artistas reales con carrusel de imágenes
- **Lanzamientos:** 6 singles reales con portadas y links de Spotify
- **Noticias:** 6 artículos relacionados con el contenido
- **Video:** Video de fondo en Hero con 50% opacidad
- **Responsive:** Optimizado para móvil, tablet y desktop

### Archivos de Contenido:
- **Artistas:** 12 imágenes (3 por artista)
- **Lanzamientos:** 6 portadas de singles
- **Video:** 1 video de fondo para Hero
- **Total:** ~100MB de assets multimedia

## 🎯 Pasos para Desplegar en Vercel:

### Opción 1: Desde GitHub (Recomendado)
1. **Subir a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Los Tigres Records"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/los-tigres-records.git
   git push -u origin main
   ```

2. **Conectar con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con GitHub
   - Click "New Project"
   - Importa el repositorio `los-tigres-records`
   - Vercel detectará automáticamente Next.js
   - Click "Deploy"

### Opción 2: Desde Vercel CLI
1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Desplegar:**
   ```bash
   vercel
   vercel --prod
   ```

### Opción 3: Drag & Drop
1. **Comprimir proyecto:**
   ```bash
   zip -r los-tigres-records.zip . -x "node_modules/*" ".next/*" ".git/*"
   ```

2. **Subir a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Arrastra el archivo ZIP
   - Vercel lo desplegará automáticamente

## ⚙️ Configuración Automática:

El proyecto incluye `vercel.json` con:
- **Cache optimizado** para imágenes y videos
- **Framework detection** para Next.js
- **Headers** para assets estáticos

## 🔧 Variables de Entorno:
No se requieren variables de entorno para este proyecto.

## 📱 URLs de Prueba:
- **Desarrollo local:** http://localhost:3000
- **Producción:** https://tu-proyecto.vercel.app

## 🎨 Características Técnicas:
- **SSG (Static Site Generation)** - Páginas pre-renderizadas
- **Image Optimization** - Next.js optimiza automáticamente las imágenes
- **Video Streaming** - Video de fondo optimizado
- **Responsive Design** - Mobile-first approach
- **SEO Ready** - Meta tags y estructura semántica

## 🚨 Notas Importantes:
- El video de fondo es de ~80MB, puede tardar en cargar en conexiones lentas
- Todas las imágenes están optimizadas para web
- El proyecto no requiere base de datos
- Funciona completamente como sitio estático

## 🎵 Contenido Incluido:
- **Artistas:** Rubén Guzmán, Seba Maza, Valentín Vargas, Didac Torres
- **Lanzamientos:** 6 singles con links reales de Spotify
- **Noticias:** 6 artículos relacionados con el sello
- **Video:** Video profesional de fondo

¡El proyecto está 100% listo para producción! 🎉
