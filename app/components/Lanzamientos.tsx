'use client';

import { useState, useEffect } from 'react';
import styles from './Lanzamientos.module.css';

interface Release {
  id: number;
  title: string;
  artist: string;
  type: string;
  cover: string;
  platforms: {
    spotify?: string;
    apple?: string;
    youtube?: string;
  };
}

const releases: Release[] = [
  {
    id: 1,
    title: 'Bailame',
    artist: 'Treekoo ft. Kaese, Didac Torres',
    type: 'Single',
    cover: '/images/releases/bailame.png',
    platforms: {
      spotify: 'https://open.spotify.com/intl-es/album/5tD79MQQzMXd9rX5E25FV9',
      apple: 'https://music.apple.com/us/album/example1',
      youtube: 'https://youtube.com/watch?v=example1'
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
      apple: 'https://music.apple.com/us/album/example2',
      youtube: 'https://youtube.com/watch?v=example2'
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
      apple: 'https://music.apple.com/us/album/example3',
      youtube: 'https://youtube.com/watch?v=example3'
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
      apple: 'https://music.apple.com/us/album/example4',
      youtube: 'https://youtube.com/watch?v=example4'
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
      apple: 'https://music.apple.com/us/album/example5',
      youtube: 'https://youtube.com/watch?v=example5'
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
      apple: 'https://music.apple.com/us/album/example6',
      youtube: 'https://youtube.com/watch?v=example6'
    }
  },
];

export default function Lanzamientos() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems((prev) => new Set(prev).add(itemId));
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('[data-id]');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="lanzamientos" className={styles.lanzamientos}>
      <div className={styles.container}>
        <h2 className={styles.title}>Últimos Lanzamientos</h2>
        <p className={styles.subtitle}>
          Descubre las últimas producciones de nuestros artistas
        </p>
        <div className={styles.grid}>
          {releases.map((release, index) => (
            <div
              key={release.id}
              data-id={release.id}
              className={`${styles.card} ${visibleItems.has(release.id) ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.coverContainer}>
                <img 
                  src={release.cover} 
                  alt={release.title}
                  className={styles.coverImage}
                />
                <div className={styles.playIcon}>▶</div>
              </div>
              <div className={styles.info}>
                <span className={styles.type}>{release.type}</span>
                <h3 className={styles.title}>{release.title}</h3>
                <p className={styles.artist}>{release.artist}</p>
                <div className={styles.platforms}>
                  {release.platforms.spotify && (
                    <a href={release.platforms.spotify} target="_blank" rel="noopener noreferrer">
                      Spotify
                    </a>
                  )}
                  {release.platforms.apple && (
                    <a href={release.platforms.apple} target="_blank" rel="noopener noreferrer">
                      Apple Music
                    </a>
                  )}
                  {release.platforms.youtube && (
                    <a href={release.platforms.youtube} target="_blank" rel="noopener noreferrer">
                      YouTube
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
