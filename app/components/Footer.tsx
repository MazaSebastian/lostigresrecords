import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>LOS TIGRES</h3>
            <p>RECORDS</p>
            <span className={styles.tagline}>Productora Musical</span>
          </div>
          <div className={styles.social}>
            <h4>Servicios</h4>
            <div className={styles.socialLinks}>
              <a href="#servicios">Producción Musical</a>
              <a href="#servicios">Mezcla y Mastering</a>
              <a href="#servicios">Distribución Digital</a>
              <a href="#servicios">Marketing Musical</a>
            </div>
          </div>
          <div className={styles.contact}>
            <h4>Contacto</h4>
            <div className={styles.contactInfo}>
              <a href="mailto:info@lostigresrecords.com">info@lostigresrecords.com</a>
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
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
