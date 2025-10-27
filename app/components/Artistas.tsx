'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Artistas.module.css';

interface Artist {
  id: number;
  name: string;
  genre: string;
  description: string;
  images: string[]; // Array de hasta 3 imágenes
  socialMedia: {
    instagram?: string;
    spotify?: string;
    youtube?: string;
  };
}

const artists: Artist[] = [
  {
    id: 1,
    name: 'Rubén Guzmán',
    genre: 'Urbano',
    description: 'DJ Open Format',
    images: [
      '/images/artists/ruben-guzman-1.jpg',
      '/images/artists/ruben-guzman-2.jpg',
      '/images/artists/ruben-guzman-3.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com',
      spotify: 'https://spotify.com',
      youtube: 'https://youtube.com'
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
        ],
    socialMedia: {
      instagram: 'https://instagram.com',
      spotify: 'https://spotify.com',
      youtube: 'https://youtube.com'
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
      instagram: 'https://instagram.com',
      spotify: 'https://spotify.com',
      youtube: 'https://youtube.com'
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
      instagram: 'https://instagram.com',
      spotify: 'https://spotify.com',
      youtube: 'https://youtube.com'
    }
  },
];

export default function Artistas() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [currentImages, setCurrentImages] = useState<Record<number, number>>({});

  const changeImage = (artistId: number, direction: 'next' | 'prev') => {
    const artist = artists.find(a => a.id === artistId);
    if (!artist) return;
    
    const currentIndex = currentImages[artistId] || 0;
    const maxIndex = artist.images.length - 1;
    
    let newIndex: number;
    if (direction === 'next') {
      newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    }
    
    setCurrentImages(prev => ({ ...prev, [artistId]: newIndex }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleCards((prev) => new Set(prev).add(cardId));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-id]');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="artistas" className={styles.artistas}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestros Artistas</h2>
        <p className={styles.subtitle}>
          Talentos que están redefiniendo el sonido latino
        </p>
        <div className={styles.grid}>
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              data-id={artist.id}
              className={`${styles.card} ${visibleCards.has(artist.id) ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imageContainer}>
                {artist.images.length > 0 && (
                  <>
                    <img 
                      src={artist.images[currentImages[artist.id] || 0]} 
                      alt={artist.name}
                      className={styles.artistImage}
                    />
                    {artist.images.length > 1 && (
                      <>
                        <div className={styles.carouselControls}>
                          <button 
                            className={styles.carouselButton}
                            onClick={(e) => {
                              e.stopPropagation();
                              changeImage(artist.id, 'prev');
                            }}
                            aria-label="Imagen anterior"
                          >
                            ‹
                          </button>
                          <button 
                            className={styles.carouselButton}
                            onClick={(e) => {
                              e.stopPropagation();
                              changeImage(artist.id, 'next');
                            }}
                            aria-label="Siguiente imagen"
                          >
                            ›
                          </button>
                        </div>
                        <div className={styles.imageIndicators}>
                          {artist.images.map((_, index) => (
                            <span
                              key={index}
                              className={`${styles.indicator} ${(currentImages[artist.id] || 0) === index ? styles.active : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImages(prev => ({ ...prev, [artist.id]: index }));
                              }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
              <div className={styles.content}>
                <span className={styles.genre}>{artist.genre}</span>
                <h3 className={styles.artistName}>{artist.name}</h3>
                <p className={styles.description}>{artist.description}</p>
                <div className={styles.socialMedia}>
                  {artist.socialMedia.instagram && (
                    <a href={artist.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  )}
                  {artist.socialMedia.spotify && (
                    <a href={artist.socialMedia.spotify} target="_blank" rel="noopener noreferrer">
                      Spotify
                    </a>
                  )}
                  {artist.socialMedia.youtube && (
                    <a href={artist.socialMedia.youtube} target="_blank" rel="noopener noreferrer">
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
