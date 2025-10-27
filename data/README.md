# 📊 Gestión de Datos

## 📁 Archivos de Plantilla

### `artists-template.ts`
- Plantilla para datos de artistas
- Copia y pega la información de tus artistas reales
- Sigue el formato del ejemplo

### `releases-template.ts`
- Plantilla para datos de lanzamientos
- Incluye instrucciones para obtener links de Spotify, Apple Music, etc.

## 🚀 Cómo Usar

### Paso 1: Copiar las Plantillas
```bash
# Copia los archivos con tus propios nombres
cp artists-template.ts artists.ts
cp releases-template.ts releases.ts
```

### Paso 2: Agregar tus Datos
1. Abre `artists.ts` y `releases.ts`
2. Reemplaza los datos de ejemplo con tus datos reales
3. Guarda los archivos

### Paso 3: Importar en los Componentes
Una vez que tengas tus datos, actualiza los componentes:

**En `app/components/Artistas.tsx`:**
```typescript
import { artistsData } from '@/data/artists';

// Reemplaza el array hardcoded con:
const artists = artistsData;
```

**En `app/components/Lanzamientos.tsx`:**
```typescript
import { releasesData } from '@/data/releases';

// Reemplaza el array hardcoded con:
const releases = releasesData;
```

## 📝 Estructura de Datos

### Artista
```typescript
{
  id: number;                    // ID único
  name: string;                  // Nombre del artista
  genre: string;                 // Género musical
  description: string;           // Descripción breve
  images: string[];              // Array de hasta 3 imágenes (/images/artists/...)
  socialMedia: {
    instagram?: string;          // Link opcional
    spotify?: string;            // Link opcional
    youtube?: string;            // Link opcional
    twitter?: string;            // Link opcional
  }
}
```

**Nota:** El campo `images` ahora es un array. Puedes tener 1, 2 o hasta 3 imágenes por artista. Se muestra un carrusel automático si hay más de una foto.

### Lanzamiento
```typescript
{
  id: number;                    // ID único
  title: string;                 // Título del lanzamiento
  artist: string;                // Nombre del artista
  type: 'Single' | 'EP' | 'Album'; // Tipo de lanzamiento
  cover: string;                 // Ruta a la portada (/images/releases/...)
  platforms: {
    spotify?: string;            // Link opcional
    apple?: string;              // Link opcional
    youtube?: string;            // Link opcional
    amazon?: string;             // Link opcional
  }
}
```

## 💡 Tips

- **IDs únicos**: Usa números incrementales únicos para cada artista/lanzamiento
- **Rutas de imágenes**: Siempre comienza con `/images/`
- **Links opcionales**: Puedes dejar vacíos los campos que no uses
- **Descripciones**: Mantén las descripciones breves (1-2 líneas máximo)

## 🎨 Ejemplos Reales

Mira los comentarios en los archivos de plantilla para ver ejemplos con datos reales de artistas conocidos.
