'use client';

import { useEffect, useState } from 'react';
import styles from './Nosotros.module.css';

export default function Nosotros() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleCards(prev => [...prev, cardId]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-card]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const nosotrosData = [
    {
      id: 1,
      title: "Experiencia",
      description: "Cada proyecto que asumimos representa el compromiso de un equipo dedicado.",
      icon: "🎵"
    },
    {
      id: 2,
      title: "Trayectoria", 
      description: "Nos impulsamos en una industria exigente que necesita adaptarse a cambios constantes.",
      icon: "🚀"
    },
    {
      id: 3,
      title: "Tradición",
      description: "Rescatamos la esencia musical que ha perdurado en el tiempo.",
      icon: "⭐"
    },
    {
      id: 4,
      title: "Innovación",
      description: "Buscamos construir algo que cambie la vida de nuestros artistas.",
      icon: "💡"
    }
  ];

  return (
    <section id="nosotros" className={styles.nosotros}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nosotros</h2>
          <p className={styles.subtitle}>
            Nos respaldan años de historia como productora musical especializada en música.
          </p>
        </div>

        <div className={styles.grid}>
          {nosotrosData.map((item, index) => (
            <div
              key={item.id}
              data-card={item.id}
              className={`${styles.card} ${visibleCards.includes(item.id) ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>5+</h3>
            <p className={styles.statLabel}>Años de Experiencia</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>50+</h3>
            <p className={styles.statLabel}>Proyectos Realizados</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>100%</h3>
            <p className={styles.statLabel}>Clientes Satisfechos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
