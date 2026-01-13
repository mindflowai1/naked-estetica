
import React, { useState, useEffect } from 'react';
import { X, Instagram, MessageCircle, Menu } from 'lucide-react';
import Button from './Button';
import { SectionId } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Quem Somos', href: `#${SectionId.ABOUT}` },
    { label: 'Serviços', href: `#${SectionId.SERVICES}` },
    { label: 'Benefícios', href: `#${SectionId.BENEFITS}` },
    { label: 'Depoimentos', href: `#${SectionId.TESTIMONIALS}` },
    { label: 'Localização', href: `#${SectionId.LOCATION}` },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const logoUrl = "https://ptotpfdlgsohxmsrfczs.supabase.co/storage/v1/object/public/bucket/logo%20naked.png";

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-[45] transition-opacity duration-700 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'bg-[#0F0E0D]/80 backdrop-blur-2xl py-4 border-b border-white/5 shadow-2xl' 
            : 'bg-transparent py-6 lg:py-8 border-b border-white/5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          <div 
            className="flex-shrink-0 cursor-pointer h-9 lg:h-13 flex items-center" 
            onClick={() => scrollToSection('#hero')}
          >
            <img 
              src={logoUrl} 
              alt="Naked Laser Logo" 
              className="h-full w-auto brightness-0 invert opacity-100 transition-all duration-500 object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-[10px] uppercase font-sans font-black tracking-[0.3em] transition-all relative group text-white/80 hover:text-nude"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-nude" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button 
              variant={isScrolled ? "primary" : "glass"} 
              className={`!px-7 !py-2.5 !text-[9px] !tracking-[0.3em] !font-black transition-all duration-500 ${
                !isScrolled ? '!text-white !border-white/20 !bg-white/5 hover:!bg-white/10' : 'bg-nude hover:bg-nude-light text-cream'
              }`}
            >
              CONTATO
            </Button>
          </div>

          <button 
            className={`lg:hidden flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 border ${
              isScrolled 
                ? 'bg-nude/90 border-white/10 text-cream' 
                : 'bg-white/10 backdrop-blur-md border-white/20 text-white'
            }`}
            onPointerDown={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-cream flex flex-col overflow-hidden touch-none"
            style={{ willChange: 'opacity' }}
          >
            <div className="absolute inset-0 bg-marble-noise opacity-15 pointer-events-none"></div>
            
            <div className="flex items-center justify-between p-8 relative z-10">
              <div className="h-9">
                <img src={logoUrl} alt="Naked Laser" className="h-full w-auto object-contain brightness-0 invert" />
              </div>
              <button 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-nude text-cream shadow-xl active:scale-90 transition-transform"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-grow space-y-10 relative z-10 px-8 text-center">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + (i * 0.05), duration: 0.3 }}
                  onClick={() => scrollToSection(link.href)}
                  className="group py-2"
                >
                  <span className="block font-serif text-4xl text-cocoa active:text-nude transition-colors duration-200">
                    {link.label}
                  </span>
                </motion.button>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="pt-10 w-full max-w-xs"
              >
                <Button variant="primary" onClick={() => setMobileMenuOpen(false)} className="!w-full !py-5 !text-[11px] !tracking-[0.4em] !bg-nude !text-cream">
                  FALE CONOSCO
                </Button>
              </motion.div>
            </nav>

            <div className="p-8 text-center relative z-10 border-t border-white/5">
              <div className="flex justify-center gap-8 mb-6">
                <a href="#" className="text-charcoal hover:text-nude transition-colors"><Instagram size={24} /></a>
                <a href="#" className="text-charcoal hover:text-nude transition-colors"><MessageCircle size={24} /></a>
              </div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-charcoal/60 font-black">
                Belo Horizonte • Savassi
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
