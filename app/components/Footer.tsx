import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>LOS TIGRES</h3>
            <p>RECORDS</p>
            <span className={styles.tagline}>Sello discográfico latino</span>
          </div>
          <div className={styles.social}>
            <h4>Síguenos</h4>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                Spotify
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Los Tigres Records. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
