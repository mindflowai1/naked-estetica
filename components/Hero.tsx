
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax da imagem: move para baixo enquanto scrolla
  const yImage = useTransform(scrollY, [0, 1000], [0, 200]);
  
  // Opacidade do texto: começa a sumir mais tarde e termina bem depois
  // Antes era [0, 400], agora o fade começa só após 200px e vai até 900px
  const opacityText = useTransform(scrollY, [200, 900], [1, 0]);
  
  // Deslocamento do texto: sobe levemente enquanto some (efeito parallax inverso)
  const yText = useTransform(scrollY, [0, 900], [0, -100]);

  return (
    <section id={SectionId.HOME} className="relative min-h-[100svh] w-full bg-cream overflow-hidden flex flex-col">
      
      {/* --- BACKGROUND TEXTURES --- */}
      <div className="absolute inset-0 bg-marble-noise opacity-30 mix-blend-multiply pointer-events-none z-[1]" />
      
      {/* Dynamic Background Circle (Mobile Luxury) */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-nude/10 blur-[100px] rounded-full pointer-events-none lg:hidden" />

      {/* --- ASYMMETRIC VISUAL --- */}
      <div className="relative w-full h-[55vh] lg:h-screen lg:absolute lg:right-0 lg:top-0 lg:w-[62%] overflow-hidden order-1 lg:order-2">
        <motion.div 
          style={{ y: yImage }}
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.15 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 2, ease: [0.23, 1, 0.32, 1] }}
          className="h-full w-full relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1976&auto=format&fit=crop" 
            alt="Editorial Naked BH" 
            className="w-full h-full object-cover object-[50%_20%] lg:object-[20%_center] lg:brightness-105"
          />
          
          {/* Subtle vignette on top of image to help header UI on mobile */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 via-transparent to-transparent lg:hidden" />

          {/* Fade to background color (Mobile bottom / Desktop left) */}
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/10 to-transparent lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-cream via-cream/5 to-transparent" />
        </motion.div>

        {/* Floating Auth Element (19 years) - Desktop only for less clutter on mobile */}
        <div className="hidden lg:flex absolute bottom-20 right-20 z-10 flex-col items-end">
          <span className="font-serif text-[12rem] leading-none text-white/40 mix-blend-overlay">19</span>
          <span className="text-white text-xs uppercase tracking-[0.5em] font-bold mt-[-2rem] mr-4">Anos de Excelência</span>
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <motion.div 
        style={{ opacity: opacityText, y: yText }}
        className="relative z-10 w-full lg:w-[45%] lg:h-screen flex flex-col justify-center px-8 lg:pl-24 lg:pr-12 py-12 lg:py-0 order-2 lg:order-1"
      >
        <div className="max-w-xl">
          {/* Title Hierarchy */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } } }}
            className="mb-8 lg:mb-14"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <span className="block font-serif text-[3.2rem] md:text-7xl lg:text-[6.5rem] leading-[1] text-cocoa italic font-light mb-1">
                Realce sua
              </span>
              <span className="block font-serif text-[3.2rem] md:text-7xl lg:text-[6.5rem] leading-[1] text-cocoa mb-6">
                beleza com
              </span>
            </motion.div>

            <motion.div 
               variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
               className="flex flex-col gap-4 mt-8"
            >
              <span className="block font-sans text-[11px] lg:text-sm font-black uppercase tracking-[0.5em] text-nude border-l-2 border-nude pl-4 mb-2">
                Tecnologia e Segurança
              </span>
              <span className="block font-serif text-lg lg:text-3xl text-charcoal font-light italic leading-snug">
                na melhor clínica de estética de Belo Horizonte!
              </span>
            </motion.div>
          </motion.div>

          {/* Body Text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="space-y-6 mb-12 lg:mb-16"
          >
            <h2 className="font-sans text-[10px] lg:text-[11px] text-cocoa/60 uppercase tracking-[0.3em] font-bold">
              “Liberte-se de preocupações e revele a beleza que sempre esteve em você!”
            </h2>
            
            <p className="font-sans text-sm lg:text-[0.95rem] text-cocoa/80 leading-[1.8] max-w-[42ch]">
              Na Naked, unimos 19 anos de excelência e os equipamentos mais avançados do mundo para garantir resultados excepcionais e seguros.
            </p>
          </motion.div>

          {/* Premium Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <a 
              href="#" 
              className="group relative inline-flex items-center gap-6 text-cocoa transition-all duration-500"
            >
              <div className="flex flex-col">
                <span className="font-serif text-2xl lg:text-4xl italic tracking-wide group-hover:text-nude transition-colors duration-500">
                  Quero realçar minha beleza!
                </span>
                <span className="w-12 h-[2px] bg-nude mt-2 transition-all duration-700 group-hover:w-full" />
              </div>
              <div className="w-14 h-14 rounded-full border border-line flex items-center justify-center group-hover:bg-cocoa group-hover:text-white group-hover:border-cocoa transition-all duration-500 shadow-sm">
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Indicators */}
      <div className="hidden lg:block absolute bottom-12 left-24 z-20 overflow-hidden">
        <div className="flex items-center gap-6">
           <div className="w-12 h-[1px] bg-line"></div>
           <span className="text-[10px] uppercase tracking-[0.4em] text-nude font-bold">Scroll to reveal</span>
        </div>
      </div>

    </section>
  );
};

export default Hero;
