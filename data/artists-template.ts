// 📝 PLANTILLA DE DATOS PARA ARTISTAS
// Copia y pega la información de tus artistas reales aquí

export interface Artist {
  id: number;
  name: string;
  genre: string;
  description: string;
  images: string[]; // Hasta 3 imágenes
  socialMedia: {
    instagram?: string;
    spotify?: string;
    youtube?: string;
    twitter?: string;
  };
}

// ✏️ REEMPLAZA ESTOS DATOS CON TUS ARTISTAS REALES
export const artistsData: Artist[] = [
  {
    id: 1,
    name: 'Rubén Guzmán',
    genre: 'Urbano',
    description: 'DJ Open Format',
    images: [
      '/images/artists/ruben-guzman-1.jpg',
      '/images/artists/ruben-guzman-2.jpg',
      '/images/artists/ruben-guzman-3.jpg'
    ], // Hasta 3 imágenes
    socialMedia: {
      instagram: 'https://instagram.com/tu-artista',
      spotify: 'https://open.spotify.com/artist/TU_ID',
      youtube: 'https://youtube.com/@tu-artista',
      twitter: 'https://twitter.com/tu-artista'
    }
  },
  {
    id: 2,
    name: 'Seba Maza',
    genre: 'Urbano',
    description: 'DJ Reggaeton',
    images: [
      '/images/artists/seba-maza-1.jpg',
      '/images/artists/seba-maza-2.jpg',
      '/images/artists/seba-maza-3.jpg'
    ], // Hasta 3 imágenes
    socialMedia: {
      instagram: 'https://instagram.com/tu-artista',
      spotify: 'https://open.spotify.com/artist/TU_ID',
      youtube: 'https://youtube.com/@tu-artista'
    }
  },
  {
    id: 3,
    name: 'Valentín Vargas',
    genre: 'Urbano',
    description: 'Cantante/Compositor',
    images: [
      '/images/artists/valentin-vargas-1.jpg',
      '/images/artists/valentin-vargas-2.jpg',
      '/images/artists/valentin-vargas-3.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/tu-artista',
      spotify: 'https://open.spotify.com/artist/TU_ID',
      youtube: 'https://youtube.com/@tu-artista'
    }
  },
  {
    id: 4,
    name: 'Didac Torres',
    genre: 'Plena',
    description: 'Cantante/Compositor',
    images: [
      '/images/artists/didac-torres-1.jpg',
      '/images/artists/didac-torres-2.jpg',
      '/images/artists/didac-torres-3.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/tu-artista',
      spotify: 'https://open.spotify.com/artist/TU_ID',
      youtube: 'https://youtube.com/@tu-artista'
    }
  }
];

// 💡 EJEMPLO REAL:
/*
export const artistsData: Artist[] = [
  {
    id: 1,
    name: 'Bad Bunny',
    genre: 'Reggaeton/Trap',
    description: 'Cantante y rapero puertorriqueño, uno de los artistas más influyentes del reggaeton',
    images: [
      '/images/artists/bad-bunny-1.jpg',
      '/images/artists/bad-bunny-2.jpg',
      '/images/artists/bad-bunny-3.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/badbunnypr',
      spotify: 'https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X',
      youtube: 'https://youtube.com/@BadBunnyPR',
      twitter: 'https://twitter.com/sanbenito'
    }
  }
];
*/
