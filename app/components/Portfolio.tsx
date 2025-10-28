'use client';

import { useEffect, useState } from 'react';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Mostrar todas las tarjetas inmediatamente
    setVisibleCards([1, 2, 3, 4, 5, 6]);
  }, []);

  const portfolioData = [
    {
      id: 1,
      title: "Innovación",
      description: "Exploramos constantemente nuevas ideas para hacer música.",
      image: "/images/releases/bailame.png",
      category: "Producción"
    },
    {
      id: 2,
      title: "Diseño",
      description: "Nos centramos en cada detalle visual: foto, video, gráfico y web.",
      image: "/images/releases/tan-loca-insomnio.png",
      category: "Visual"
    },
    {
      id: 3,
      title: "Creatividad",
      description: "Preferimos lo disruptivo para nutrir la originalidad y el ingenio.",
      image: "/images/releases/por-ese-hombre.png",
      category: "Conceptual"
    },
    {
      id: 4,
      title: "Producción",
      description: "Creamos experiencias musicales únicas que conectan con la audiencia.",
      image: "/images/releases/que-no-pare.png",
      category: "Musical"
    },
    {
      id: 5,
      title: "Marketing",
      description: "Estrategias innovadoras que posicionan a nuestros artistas en el mercado.",
      image: "/images/releases/un-monton-de-estrellas.png",
      category: "Promoción"
    },
    {
      id: 6,
      title: "Distribución",
      description: "Llevamos la música a todas las plataformas digitales del mundo.",
      image: "/images/releases/la-cone.png",
      category: "Digital"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Portfolio</h2>
          <p className={styles.subtitle}>
            Ya hemos creado cosas increíbles para nuestros clientes.
          </p>
          <button 
            className={styles.ctaButton}
            onClick={() => scrollToSection('contacto')}
          >
            VER MÁS
          </button>
        </div>

        <div className={styles.grid}>
          {portfolioData.map((item, index) => (
            <div
              key={item.id}
              data-card={item.id}
              className={`${styles.card} ${visibleCards.includes(item.id) ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.category}>{item.category}</div>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>¿ESTÁS PREPARADO?</h3>
          <p className={styles.ctaDescription}>
            Asesórate con profesionales especializados en la industria de la música para consultar sobre tu proyecto musical.
          </p>
          <button 
            className={styles.ctaButtonLarge}
            onClick={() => scrollToSection('contacto')}
          >
            COMENCEMOS
          </button>
        </div>
      </div>
    </section>
  );
}
