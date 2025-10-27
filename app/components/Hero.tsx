'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className={styles.hero}>
      <video 
        className={styles.backgroundVideo}
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/videos/hero-video.mov" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={`${styles.textContainer} ${isVisible ? styles.visible : ''}`}>
          <h1 className={styles.title}>
            LOS TIGRES <span className={styles.titleGradient}>RECORDS</span>
          </h1>
          <button 
            className={styles.ctaButton}
            onClick={() => scrollToSection('artistas')}
          >
            Explorar Artistas
          </button>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll ↓</span>
      </div>
    </section>
  );
}
