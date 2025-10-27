'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection('inicio')}>
          <span className={styles.logoText}>LOS TIGRES</span>
          <span className={styles.logoSubtext}>RECORDS</span>
        </div>
        <nav className={styles.nav}>
          <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>Inicio</a>
          <a href="#artistas" onClick={(e) => { e.preventDefault(); scrollToSection('artistas'); }}>Artistas</a>
          <a href="#lanzamientos" onClick={(e) => { e.preventDefault(); scrollToSection('lanzamientos'); }}>Lanzamientos</a>
          <a href="#noticias" onClick={(e) => { e.preventDefault(); scrollToSection('noticias'); }}>Noticias</a>
          <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>Contacto</a>
        </nav>
      </div>
    </header>
  );
}
