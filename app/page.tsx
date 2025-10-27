import Header from './components/Header';
import Hero from './components/Hero';
import Artistas from './components/Artistas';
import Lanzamientos from './components/Lanzamientos';
import Noticias from './components/Noticias';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './globals.css';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Artistas />
      <Lanzamientos />
      <Noticias />
      <Contacto />
      <Footer />
    </main>
  );
}
