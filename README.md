# Los Tigres Records 🐅

Sitio web moderno y elegante para el sello discográfico **Los Tigres Records** - El rugido del sonido latino moderno.

## 🎨 Características

- **Diseño Moderno**: Interfaz elegante con colores negro y plateado
- **Responsive**: Adaptado para dispositivos móviles, tablets y escritorio
- **Animaciones Suaves**: Transiciones y efectos de scroll fluidos
- **Navegación Fluida**: Scroll suave entre secciones
- **Header Fijo**: Navbar que se mantiene visible al hacer scroll
- **Secciones Completas**: Hero, Artistas, Lanzamientos, Noticias, Contacto y Footer

## 🚀 Tecnologías

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático
- **CSS Modules** - Estilos encapsulados por componente
- **Google Fonts (Poppins)** - Tipografía moderna y limpia

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd los-tigres-records
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
los-tigres-records/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.tsx       # Navegación principal
│   │   ├── Hero.tsx         # Sección hero
│   │   ├── Artistas.tsx     # Sección de artistas
│   │   ├── Lanzamientos.tsx # Sección de discografía
│   │   ├── Noticias.tsx     # Sección de blog/noticias
│   │   ├── Contacto.tsx     # Formulario de contacto
│   │   └── Footer.tsx       # Pie de página
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── public/                  # Archivos estáticos
└── package.json             # Dependencias

```

## 🎨 Paleta de Colores

- **Negro**: `#000000` - Color principal de fondo
- **Plateado**: `#C0C0C0` - Texto y acentos
- **Gris Oscuro**: `#AAAAAA` - Texto secundario
- **Degradado Metálico**: `linear-gradient(135deg, #C0C0C0 0%, #888888 100%)`

## ✨ Características de UX

- **Scroll Animations**: Efectos de aparición al hacer scroll
- **Hover Effects**: Retroalimentación visual en cards y botones
- **Smooth Scrolling**: Navegación suave entre secciones
- **Responsive Design**: Adaptado a todos los tamaños de pantalla
- **Loading States**: Animaciones de carga y transiciones

## 🔧 Personalización

### Agregar Artistas

Edita el array `artists` en `app/components/Artistas.tsx`:

```typescript
const artists: Artist[] = [
  {
    id: 1,
    name: 'Tu Artista',
    genre: 'Género',
    description: 'Descripción',
    // ...
  }
];
```

### Modificar Lanzamientos

Edita el array `releases` en `app/components/Lanzamientos.tsx`

### Cambiar Información de Contacto

Edita `app/components/Contacto.tsx` y `app/components/Footer.tsx`

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea una build de producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🌐 Despliegue

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Build Manual

```bash
npm run build
npm run start
```

## 📄 Licencia

© 2024 Los Tigres Records. Todos los derechos reservados.

## 👨‍💻 Desarrollado con

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Poppins Font](https://fonts.google.com/specimen/Poppins)

---

**Los Tigres Records** - El rugido del sonido latino moderno 🎵
