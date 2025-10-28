import Header from './components/Header';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Portfolio from './components/Portfolio';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './globals.css';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Nosotros />
      <Servicios />
      <Portfolio />
      <Contacto />
      <Footer />
    </main>
  );
}
