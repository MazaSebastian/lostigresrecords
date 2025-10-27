'use client';

import styles from './Noticias.module.css';

const news = [
  {
    id: 1,
    title: '"Bailame" de Treekoo ft. Kaese y Didac Torres supera 500K reproducciones',
    date: '20 Oct 2024',
    excerpt: 'El exitoso single alcanza medio millón de reproducciones en Spotify en solo dos semanas, consolidando la colaboración entre los artistas del sello.',
    category: 'Destacado'
  },
  {
    id: 2,
    title: 'Rubén Guzmán presenta "Tan Loca | INSOMNIO #1" en vivo',
    date: '18 Oct 2024',
    excerpt: 'El DJ Open Format debutó su nuevo single en el club más exclusivo de la ciudad, con una presentación que dejó al público sin aliento.',
    category: 'Eventos'
  },
  {
    id: 3,
    title: 'Seba Maza anuncia colaboración con Fercho Energy',
    date: '15 Oct 2024',
    excerpt: 'El DJ Reggaeton se une al productor Fercho Energy para crear "Que no pare", un track que promete ser el hit del verano.',
    category: 'Noticias'
  },
  {
    id: 4,
    title: 'Valentín Vargas lanza "Por Ese Hombre" con Aneley',
    date: '12 Oct 2024',
    excerpt: 'El cantante y compositor presenta su nueva colaboración con la artista Aneley, explorando nuevos sonidos en el género urbano.',
    category: 'Lanzamientos'
  },
  {
    id: 5,
    title: 'Didac Torres estrena "Un Montón De Estrellas" con Mily Britez',
    date: '10 Oct 2024',
    excerpt: 'El artista de Plena sorprende con una balada romántica que muestra su versatilidad musical y su evolución artística.',
    category: 'Lanzamientos'
  },
  {
    id: 6,
    title: 'Blezan y Treekoo unen fuerzas en "La cone"',
    date: '8 Oct 2024',
    excerpt: 'Dos de los artistas más prometedores del sello se unen para crear un track que combina lo mejor del reggaeton y el trap latino.',
    category: 'Colaboraciones'
  }
];

export default function Noticias() {
  return (
    <section id="noticias" className={styles.noticias}>
      <div className={styles.container}>
        <h2 className={styles.title}>Noticias</h2>
        <p className={styles.subtitle}>
          Mantente al día con las últimas novedades
        </p>
        <div className={styles.grid}>
          {news.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.category}>{item.category}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.excerpt}>{item.excerpt}</p>
              <div className={styles.footer}>
                <span className={styles.date}>{item.date}</span>
                <a href="#" className={styles.readMore}>Leer más →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
