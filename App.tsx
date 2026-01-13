import React from 'react';
import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Founder from './components/Founder';
import Services from './components/Services';
import TattooRemoval from './components/TattooRemoval';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <TattooRemoval />
        <Benefits />
        <Testimonials />
        <Location />
      </main>
      
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="#"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-900/20 hover:-translate-y-1 transition-transform duration-300 flex items-center justify-center"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={28} strokeWidth={2} />
      </a>
    </div>
  );
};

export default App;