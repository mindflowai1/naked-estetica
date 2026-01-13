
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll);
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
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logoUrl = "https://ptotpfdlgsohxmsrfczs.supabase.co/storage/v1/object/public/bucket/logo%20naked.png";

  return (
    <>
      {/* UI Protection Layer - Intensified for better white-on-light contrast */}
      <div className={`fixed top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none z-[45] transition-opacity duration-700 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-cream/95 backdrop-blur-lg py-3 border-b border-line/20 shadow-sm' 
            : 'bg-white/5 backdrop-blur-[2px] py-5 lg:py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Official Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer h-8 lg:h-10 flex items-center" 
            onClick={() => scrollToSection('#hero')}
          >
            <img 
              src={logoUrl} 
              alt="Naked Laser Logo" 
              className={`h-full w-auto transition-all duration-500 object-contain ${
                isScrolled ? 'brightness-100 contrast-100' : 'brightness-0 invert'
              }`}
              style={{ 
                filter: isScrolled ? 'none' : 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2)) brightness(0) invert(1)' 
              }}
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`text-[11px] uppercase font-sans font-black tracking-[0.25em] transition-all relative group ${
                  isScrolled 
                    ? 'text-cocoa/70 hover:text-cocoa' 
                    : 'text-white hover:text-white drop-shadow-md'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] transition-all duration-500 group-hover:w-full ${
                  isScrolled ? 'bg-nude' : 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                }`} />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button 
              variant={isScrolled ? "primary" : "glass"} 
              className={`!px-8 !py-3 !text-[10px] !tracking-[0.25em] !font-black transition-all duration-500 ${
                !isScrolled ? '!text-white !border-white/60 !bg-white/10 hover:!bg-white/20' : ''
              }`}
            >
              CONTATO
            </Button>
          </div>

          {/* Mobile Glass-Pill Menu Button */}
          <button 
            className={`lg:hidden flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 border ${
              isScrolled 
                ? 'bg-cocoa border-cocoa text-white shadow-lg' 
                : 'bg-white/20 backdrop-blur-md border-white/40 text-white shadow-2xl'
            }`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <span className="h-[2px] bg-current transition-all w-6"></span>
              <span className="h-[2px] bg-current transition-all w-4"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed inset-0 bg-cream z-[60] flex flex-col"
            >
              <div className="absolute inset-0 bg-marble-noise opacity-15 pointer-events-none"></div>

              <div className="flex items-center justify-between p-8">
                <div className="h-8">
                  <img src={logoUrl} alt="Naked Laser" className="h-full w-auto object-contain" />
                </div>
                <button 
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-cocoa text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col items-center justify-center flex-grow space-y-8 relative z-10 px-8 text-center">
                {navLinks.map((link, i) => (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="font-serif text-4xl text-cocoa hover:text-nude transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="pt-10 w-full"
                >
                  <Button variant="primary" onClick={() => setMobileMenuOpen(false)} className="!w-full !py-6">
                    FALE CONOSCO NO WHATSAPP
                  </Button>
                </motion.div>
              </nav>

              <div className="p-12 text-center text-charcoal/40 text-xs uppercase tracking-widest font-bold">
                Belo Horizonte • Savassi
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
