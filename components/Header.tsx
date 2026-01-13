
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
      {/* UI Protection Layer - Sutil para legibilidade no topo */}
      <div className={`fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/15 to-transparent pointer-events-none z-[45] transition-opacity duration-700 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} />

      {/* Main Header - Opacidade ajustada de 40% para 65% no scroll para melhor contraste */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'bg-[#F4F0ED]/65 backdrop-blur-2xl py-4 border-b border-line/15 shadow-sm' 
            : 'bg-transparent backdrop-blur-[2px] py-6 lg:py-8 border-b border-white/5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo Container - Aumentado de h-7/h-9 para h-10/h-13 */}
          <div 
            className="flex-shrink-0 cursor-pointer h-9 lg:h-13 flex items-center" 
            onClick={() => scrollToSection('#hero')}
          >
            <img 
              src={logoUrl} 
              alt="Naked Laser Logo" 
              className={`h-full w-auto transition-all duration-500 object-contain ${
                isScrolled ? 'brightness-100' : 'brightness-0 invert opacity-100'
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`text-[10px] uppercase font-sans font-black tracking-[0.3em] transition-all relative group ${
                  isScrolled 
                    ? 'text-cocoa hover:text-cocoa' 
                    : 'text-white hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-nude' : 'bg-white/70'
                }`} />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button 
              variant={isScrolled ? "primary" : "glass"} 
              className={`!px-7 !py-2.5 !text-[9px] !tracking-[0.3em] !font-black transition-all duration-500 shadow-sm ${
                !isScrolled ? '!text-white !border-white/25 !bg-white/10 hover:!bg-white/20 backdrop-blur-md' : 'bg-cocoa hover:bg-cocoa-dark shadow-cocoa/10'
              }`}
            >
              CONTATO
            </Button>
          </div>

          {/* Toggle Button - Opacidade aumentada no scroll para 90% */}
          <button 
            className={`lg:hidden flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 border ${
              isScrolled 
                ? 'bg-cocoa/90 border-cocoa/10 text-white shadow-md' 
                : 'bg-white/15 backdrop-blur-md border-white/40 text-white shadow-2xl'
            }`}
            onPointerDown={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
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
            {/* Texture Layer */}
            <div className="absolute inset-0 bg-marble-noise opacity-15 pointer-events-none"></div>
            
            {/* Inner Header - Logo maior no menu mobile também */}
            <div className="flex items-center justify-between p-8 relative z-10">
              <div className="h-9">
                <img src={logoUrl} alt="Naked Laser" className="h-full w-auto object-contain" />
              </div>
              <button 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-cocoa text-white shadow-xl active:scale-90 transition-transform"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
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
                <Button variant="primary" onClick={() => setMobileMenuOpen(false)} className="!w-full !py-5 !text-[11px] !tracking-[0.4em] shadow-xl">
                  FALE CONOSCO
                </Button>
              </motion.div>
            </nav>

            {/* Footer info in menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.3 }}
              className="p-8 text-center relative z-10 border-t border-line/20"
            >
              <div className="flex justify-center gap-8 mb-6">
                <a href="#" className="text-cocoa/50 hover:text-cocoa transition-colors"><Instagram size={24} /></a>
                <a href="#" className="text-cocoa/50 hover:text-cocoa transition-colors"><MessageCircle size={24} /></a>
              </div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-charcoal/60 font-black">
                Belo Horizonte • Savassi
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
