'use client';

import { useEffect, useState } from 'react';
import styles from './Servicios.module.css';

export default function Servicios() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Mostrar todas las tarjetas inmediatamente
    setVisibleCards([1, 2, 3, 4, 5, 6, 7, 8]);
  }, []);

  const serviciosData = [
    {
      id: 1,
      title: "Auditoría",
      description: "Expertos revisarán tu proyecto para ofrecerte un presupuesto adaptado a tus necesidades.",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Evaluación",
      description: "Identificaremos áreas de mejora en tu proyecto para construir una marca duradera.",
      icon: "📊"
    },
    {
      id: 3,
      title: "Plan de Acción",
      description: "Alcanzaremos tus objetivos con un plan creativo que te dé visibilidad en el mundo musical.",
      icon: "📋"
    },
    {
      id: 4,
      title: "Producción",
      description: "Composición de letra y música original, arreglos, grabación y realización de videoclips.",
      icon: "🎵"
    },
    {
      id: 5,
      title: "Mezcla",
      description: "Ingenieros expertos darán vida a tu canción, potencia tu música con nuestra mezcla profesional.",
      icon: "🎛️"
    },
    {
      id: 6,
      title: "Mastering",
      description: "Ajustamos la calidad de audio en tus canciones para que suenen radial en cualquier dispositivo.",
      icon: "🎧"
    },
    {
      id: 7,
      title: "Distribución",
      description: "Lleva tu música al mundo en plataformas digitales, tiendas online, radio y televisión.",
      icon: "🌍"
    },
    {
      id: 8,
      title: "Marketing",
      description: "Estrategias publicitarias innovadoras y los medios de difusión más efectivos del mercado.",
      icon: "📈"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className={styles.servicios}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Servicios</h2>
          <p className={styles.subtitle}>
            Centrados en resultados, buscamos elevar el nivel de nuestros clientes.
          </p>
          <button 
            className={styles.ctaButton}
            onClick={() => scrollToSection('contacto')}
          >
            COMENCEMOS
          </button>
        </div>

        <div className={styles.grid}>
          {serviciosData.map((servicio, index) => (
            <div
              key={servicio.id}
              data-card={servicio.id}
              className={`${styles.card} ${visibleCards.includes(servicio.id) ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.icon}>{servicio.icon}</div>
              <h3 className={styles.cardTitle}>{servicio.title}</h3>
              <p className={styles.cardDescription}>{servicio.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.platforms}>
          <h3 className={styles.platformsTitle}>Trabajamos con las mejores plataformas</h3>
          <div className={styles.platformsGrid}>
            <div className={styles.platform}>Spotify</div>
            <div className={styles.platform}>Apple Music</div>
            <div className={styles.platform}>YouTube Music</div>
            <div className={styles.platform}>Sony Music</div>
            <div className={styles.platform}>Warner Music</div>
            <div className={styles.platform}>Universal Music</div>
          </div>
        </div>
      </div>
    </section>
  );
}
