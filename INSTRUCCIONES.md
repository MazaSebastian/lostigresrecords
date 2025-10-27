# 🎵 Instrucciones para Agregar Contenido Real

## 📁 Estructura de Archivos para Contenido

### 1. Crear Carpeta de Assets
Crea la siguiente estructura en `public/`:

```
public/
├── images/
│   ├── artists/
│   │   ├── artista1.jpg
│   │   ├── artista2.jpg
│   │   ├── artista3.jpg
│   │   └── artista4.jpg
│   └── releases/
│       ├── release1.jpg
│       ├── release2.jpg
│       ├── release3.jpg
│       └── release4.jpg
├── videos/
│   └── hero-video.mp4
└── logos/
    └── logo.svg
```

### 2. Agregar Imágenes de Artistas

**Ubicación:** `app/components/Artistas.tsx`

Reemplaza las líneas de los placeholders. **Ahora puedes agregar hasta 3 fotos por artista** con un carrusel automático:

```typescript
const artists: Artist[] = [
  {
    id: 1,
    name: 'Tu Artista Real',
    genre: 'Reggaeton/Trap',
    description: 'Tu descripción real',
    images: [
      '/images/artists/artista1-foto1.jpg', // Primera foto
      '/images/artists/artista1-foto2.jpg', // Segunda foto (opcional)
      '/images/artists/artista1-foto3.jpg'  // Tercera foto (opcional)
    ], // Puedes tener 1, 2 o 3 imágenes
    socialMedia: {
      instagram: 'https://instagram.com/tu-artista',
      spotify: 'https://open.spotify.com/artist/xxx',
      youtube: 'https://youtube.com/@tu-artista'
    }
  },
  // ... más artistas
];
```

**Características del carrusel:**
- Muestra hasta 3 fotos por artista
- Botones de navegación (← →) que aparecen al hacer hover
- Indicadores en la parte inferior que muestran qué foto está visible
- Click en los indicadores para cambiar de foto directamente

### 3. Agregar Portadas de Lanzamientos

**Ubicación:** `app/components/Lanzamientos.tsx`

```typescript
const releases: Release[] = [
  {
    id: 1,
    title: 'Nombre Real del Single',
    artist: 'Nombre del Artista',
    type: 'Single',
    cover: '/images/releases/release1.jpg', // ← Cambia esto
    platforms: {
      spotify: 'https://open.spotify.com/track/xxx',
      apple: 'https://music.apple.com/us/album/xxx',
      youtube: 'https://youtube.com/watch?v=xxx'
    }
  },
  // ... más lanzamientos
];
```

### 4. Agregar Video de Fondo al Hero

**Ubicación:** `app/components/Hero.tsx`

Opción 1: Video de fondo

```tsx
return (
  <section id="inicio" className={styles.hero}>
    <video 
      className={styles.videoBackground}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/videos/hero-video.mp4" type="video/mp4" />
    </video>
    <div className={styles.overlay}></div>
    {/* resto del contenido */}
  </section>
);
```

Luego agrega a `Hero.module.css`:

```css
.videoBackground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
```

### 5. Agregar Imágenes a las Cards

**Para Artists Cards:**
```tsx
<div className={styles.imageContainer}>
  <img 
    src={artist.image} 
    alt={artist.name}
    className={styles.artistImage}
  />
</div>
```

**Para Release Cards:**
```tsx
<div className={styles.coverContainer}>
  <img 
    src={release.cover} 
    alt={release.title}
    className={styles.coverImage}
  />
</div>
```

## 🎬 Opciones para Videos

### Opción 1: Video Local
1. Convierte tu video a `.mp4`
2. Optimiza el tamaño (máx 5MB recomendado)
3. Guárdalo en `public/videos/`
4. Usa el código de arriba

### Opción 2: YouTube/Vimeo Embeds
Si prefieres embeds, puedes agregar secciones de video:

```tsx
<div className={styles.videoSection}>
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
```

## 📸 Optimización de Imágenes

### Tamaños Recomendados:
- **Artistas:** 800x800px (cuadradas)
- **Portadas:** 1000x1000px (cuadradas)  
- **Hero Background:** 1920x1080px
- **Logo:** SVG o PNG de 500x500px mínimo

### Herramientas de Optimización:
- [TinyPNG](https://tinypng.com/) - Comprimir PNG/JPG
- [Squoosh](https://squoosh.app/) - Optimización avanzada
- [ImageOptim](https://imageoptim.com/) - Para Mac

## 🎨 Ejemplo de Datos Reales

### Artistas Completos:
```typescript
{
  id: 1,
  name: 'Maluma',
  genre: 'Reggaeton/Pop',
  description: 'Cantante y compositor colombiano, reconocido por su música urbana',
  image: '/images/artists/maluma.jpg',
  socialMedia: {
    instagram: 'https://instagram.com/maluma',
    spotify: 'https://open.spotify.com/artist/1r4hJ1h58CWwUQe3MxPuau',
    youtube: 'https://youtube.com/@MalumaVEVO'
  }
}
```

### Lanzamientos Completos:
```typescript
{
  id: 1,
  title: 'Felices los 4',
  artist: 'Maluma',
  type: 'Single',
  cover: '/images/releases/felices-los-4.jpg',
  platforms: {
    spotify: 'https://open.spotify.com/track/1R7AXT7HVxcD8V9EHMn9cL',
    apple: 'https://music.apple.com/us/album/felices-los-4/1224153050',
    youtube: 'https://youtube.com/watch?v=PhZHjfbqKVU'
  }
}
```

## 🔄 Proceso Recomendado

1. **Recopila el contenido:**
   - Fotos de artistas (JPG/PNG)
   - Portadas de álbumes (JPG/PNG)
   - Videos (MP4) opcional
   - Logo (SVG preferible)

2. **Optimiza las imágenes:**
   - Reduce el tamaño para mejor carga
   - Formato: JPG para fotos, PNG para logos

3. **Coloca los archivos:**
   - Imágenes en `public/images/`
   - Videos en `public/videos/`

4. **Actualiza los componentes:**
   - Edita `Artistas.tsx` con datos reales
   - Edita `Lanzamientos.tsx` con datos reales
   - Opcionalmente modifica `Hero.tsx` para video

5. **Actualiza las rutas:**
   - Cambia las rutas de `/api/placeholder/...` a `/images/...`

6. **Verifica en navegador:**
   - Ejecuta `npm run dev`
   - Visita `http://localhost:3000`
   - Revisa que todas las imágenes carguen

## 💡 Tips

- **Nombres de archivos:** Usa nombres descriptivos sin espacios ni caracteres especiales
- **Compresión:** Mantén archivos bajo 500KB cuando sea posible
- **CDN:** Para producción, considera usar un CDN como Cloudinary o Imgix
- **Lazy Loading:** Las imágenes ya están optimizadas con Next.js Image si decides usarlas

## 🚀 Próximos Pasos

1. Agrega las fotos de tus artistas reales
2. Reemplaza los nombres y descripciones
3. Agrega portadas reales de tus lanzamientos
4. Configura los enlaces reales de redes sociales
5. (Opcional) Agrega un video de fondo al hero
6. Personaliza los textos y descripciones

¡Tu sitio estará listo con contenido real! 🎉
