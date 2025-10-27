// 📝 PLANTILLA DE DATOS PARA LANZAMIENTOS
// Copia y pega la información de tus lanzamientos reales aquí

export interface Release {
  id: number;
  title: string;
  artist: string;
  type: string; // 'Single', 'EP', 'Album'
  cover: string;
  platforms: {
    spotify?: string;
    apple?: string;
    youtube?: string;
    amazon?: string;
  };
}

// ✏️ REEMPLAZA ESTOS DATOS CON TUS LANZAMIENTOS REALES
export const releasesData: Release[] = [
  {
    id: 1,
    title: 'Bailame',
    artist: 'Treekoo ft. Kaese, Didac Torres',
    type: 'Single',
    cover: '/images/releases/bailame.png', // ← Coloca la imagen en public/images/releases/
    platforms: {
      spotify: 'https://open.spotify.com/intl-es/album/5tD79MQQzMXd9rX5E25FV9',
      apple: 'https://music.apple.com/us/album/TU_ID',
      youtube: 'https://youtube.com/watch?v=TU_ID'
    }
  },
  {
    id: 2,
    title: 'Tan Loca | INSOMNIO #1',
    artist: 'Dj Ruben Guzman ft. Juan Portella',
    type: 'Single',
    cover: '/images/releases/tan-loca-insomnio.png',
    platforms: {
      spotify: 'https://open.spotify.com/intl-es/track/3XPsfdjJPPIpFoKqljrlTL?si=b72d06d24e784f03',
      apple: 'https://music.apple.com/us/album/TU_ID',
      youtube: 'https://youtube.com/watch?v=TU_ID'
    }
  },
  {
    id: 3,
    title: 'Por Ese Hombre',
    artist: 'Aneley ft. Maxi Espindola, Valen',
    type: 'Single',
    cover: '/images/releases/por-ese-hombre.png',
    platforms: {
      spotify: 'https://open.spotify.com/intl-es/album/6NvHIKUxJtUJnLSrcNYDRL',
      apple: 'https://music.apple.com/us/album/TU_ID',
      youtube: 'https://youtube.com/watch?v=TU_ID'
    }
  },
  {
    id: 4,
    title: 'Que no pare',
    artist: 'Fercho Energy, Sebaa Maza',
    type: 'Single',
    cover: '/images/releases/que-no-pare.png',
    platforms: {
      spotify: 'https://open.spotify.com/intl-es/track/1slVFJDvlo9j8tEVhKEQ9q?si=419276d7120c4f57',
      apple: 'https://music.apple.com/us/album/TU_ID',
      youtube: 'https://youtube.com/watch?v=TU_ID'
    }
  },
  {
    id: 5,
    title: 'Un Montón De Estrellas',
    artist: 'Didac Torres, Mily Britez',
    type: 'Single',
    cover: '/images/releases/un-monton-de-estrellas.png',
    platforms: {
      spotify: 'https://open.spotify.com/intl-es/album/0tMoGxHMivVZlql2UXCiry',
      apple: 'https://music.apple.com/us/album/TU_ID',
      youtube: 'https://youtube.com/watch?v=TU_ID'
    }
  },
  {
    id: 6,
    title: 'La cone',
    artist: 'Blezan, Treekoo',
    type: 'Single',
    cover: '/images/releases/la-cone.png',
    platforms: {
      spotify: 'https://open.spotify.com/intl-es/album/4XjDNSyvZhdbkppbq1KkGl',
      apple: 'https://music.apple.com/us/album/TU_ID',
      youtube: 'https://youtube.com/watch?v=TU_ID'
    }
  }
];

// 💡 EJEMPLO REAL:
/*
export const releasesData: Release[] = [
  {
    id: 1,
    title: 'Dakiti',
    artist: 'Bad Bunny & Jhay Cortez',
    type: 'Single',
    cover: '/images/releases/dakiti.jpg',
    platforms: {
      spotify: 'https://open.spotify.com/track/4sFnBbhp0MN1upN4znO8aD',
      apple: 'https://music.apple.com/us/album/dakiti/1540531065',
      youtube: 'https://youtube.com/watch?v=TmKh7lAwnBI'
    }
  },
  {
    id: 2,
    title: 'Un Verano Sin Ti',
    artist: 'Bad Bunny',
    type: 'Album',
    cover: '/images/releases/un-verano-sin-ti.jpg',
    platforms: {
      spotify: 'https://open.spotify.com/album/3RQQmkQEvNCY4prGKE6oc5',
      apple: 'https://music.apple.com/us/album/un-verano-sin-ti/1629929957',
      youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_lTziQ1DSLVu-4Ov1JHvFgbvr6L8'
    }
  }
];
*/

// 🔗 CÓMO OBTENER LOS LINKS:

/*
SPOTIFY:
1. Ve a tu canción/álbum en Spotify
2. Haz clic en los "..." (tres puntos)
3. Selecciona "Compartir" → "Copiar enlace"
4. Pega el enlace aquí

APPLE MUSIC:
1. Ve a iTunes/Music
2. Haz clic derecho en el álbum/canción
3. Selecciona "Copiar enlace"
4. O usa: https://music.apple.com/us/album/TU-ID

YOUTUBE:
1. Ve al video en YouTube
2. Haz clic en "Compartir"
3. Copia el enlace
4. O usa: https://youtube.com/watch?v=VIDEO_ID

AMAZON MUSIC (Opcional):
1. Ve a Amazon Music
2. Copia el enlace del álbum/canción
*/
