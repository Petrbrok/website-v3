import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Advantages from './components/Advantages';
import About from './components/About';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="section-divider" />

      <Services />

      <div className="section-divider" />

      <Gallery />

      <div className="section-divider" />

      <Advantages />

      <div className="section-divider" />

      <About />

      <div className="section-divider" />

      <Reviews />

      <div className="section-divider" />

      <Contacts />

      <Footer />

      <FloatingButtons />

      {/* Spacer for mobile bottom bar */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
