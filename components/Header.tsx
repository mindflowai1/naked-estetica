
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
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
      {/* UI Protection Layer for Hero Section */}
      <div className={`fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-[45] transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#F4F0ED]/95 backdrop-blur-xl py-4 border-b border-line/30 shadow-sm' 
            : 'bg-transparent py-6 lg:py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer h-7 lg:h-9 flex items-center" 
            onClick={() => scrollToSection('#hero')}
          >
            <img 
              src={logoUrl} 
              alt="Naked Laser Logo" 
              className={`h-full w-auto transition-all duration-300 object-contain ${
                isScrolled ? 'brightness-100' : 'brightness-0 invert'
              }`}
              style={{ 
                filter: isScrolled ? 'none' : 'drop-shadow(0px 1px 2px rgba(0,0,0,0.3))' 
              }}
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
                    ? 'text-cocoa/70 hover:text-cocoa' 
                    : 'text-white hover:text-white drop-shadow-md'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-nude' : 'bg-white'
                }`} />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button 
              variant={isScrolled ? "primary" : "glass"} 
              className={`!px-7 !py-2.5 !text-[9px] !tracking-[0.3em] !font-black ${
                !isScrolled ? '!text-white !border-white/40 !bg-white/10 hover:!bg-white/20' : ''
              }`}
            >
              CONTATO
            </Button>
          </div>

          {/* Mobile Menu Toggle - Faster interaction */}
          <button 
            className={`lg:hidden flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 border ${
              isScrolled 
                ? 'bg-cocoa border-cocoa text-white' 
                : 'bg-white/10 backdrop-blur-md border-white/30 text-white'
            }`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <span className="h-[1.5px] bg-current transition-all w-5"></span>
              <span className="h-[1.5px] bg-current transition-all w-3"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay - Optimized for performance */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{ willChange: 'opacity, transform' }}
              className="fixed inset-0 z-[100] bg-[#F4F0ED] flex flex-col overflow-hidden"
            >
              {/* Texture Layer */}
              <div className="absolute inset-0 bg-marble-noise opacity-[0.05] pointer-events-none"></div>
              
              {/* Header inside menu */}
              <div className="flex items-center justify-between p-8 relative z-10">
                <div className="h-7">
                  <img src={logoUrl} alt="Naked Laser" className="h-full w-auto object-contain" />
                </div>
                <button 
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-cocoa text-white shadow-lg active:scale-95 transition-transform"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links - Reduced delay and duration for snappiness */}
              <nav className="flex flex-col items-center justify-center flex-grow space-y-8 relative z-10 px-8 text-center">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + (i * 0.05), duration: 0.3 }}
                    onClick={() => scrollToSection(link.href)}
                    className="group"
                  >
                    <span className="block font-serif text-3xl text-cocoa group-hover:text-nude transition-colors duration-200">
                      {link.label}
                    </span>
                    <span className="block h-[1px] w-0 bg-nude mx-auto mt-2 transition-all duration-300 group-hover:w-full"></span>
                  </motion.button>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  className="pt-8 w-full max-w-xs"
                >
                  <Button variant="primary" onClick={() => setMobileMenuOpen(false)} className="!w-full !py-4 !text-[10px] !tracking-[0.3em] shadow-xl">
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
                <div className="flex justify-center gap-6 mb-4">
                  <a href="#" className="text-cocoa/50 hover:text-cocoa transition-colors"><Instagram size={18} /></a>
                  <a href="#" className="text-cocoa/50 hover:text-cocoa transition-colors"><MessageCircle size={18} /></a>
                </div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-charcoal/50 font-black">
                  Belo Horizonte • Savassi
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
