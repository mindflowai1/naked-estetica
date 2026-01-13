
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityText = useTransform(scrollY, [200, 900], [1, 0]);
  const yText = useTransform(scrollY, [0, 900], [0, -100]);

  return (
    <section id={SectionId.HOME} className="relative min-h-[100svh] w-full bg-cream overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-marble-noise opacity-40 mix-blend-overlay pointer-events-none z-[1]" />
      
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-nude/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full h-[60vh] lg:h-screen lg:absolute lg:right-0 lg:top-0 lg:w-[62%] overflow-hidden order-1 lg:order-2">
        <motion.div 
          style={{ y: yImage }}
          initial={{ opacity: 0, filter: 'blur(20px) grayscale(40%)', scale: 1.1 }}
          animate={{ opacity: 1, filter: 'blur(0px) grayscale(0%)', scale: 1 }}
          transition={{ duration: 2.5, ease: [0.23, 1, 0.32, 1] }}
          className="h-full w-full relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1976&auto=format&fit=crop" 
            alt="Editorial Naked BH" 
            className="w-full h-full object-cover object-[50%_20%] lg:object-[20%_center] brightness-75 lg:brightness-90"
          />
          
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 via-transparent to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-cream via-cream/50 to-transparent" />
        </motion.div>

        <div className="hidden lg:flex absolute bottom-20 right-20 z-10 flex-col items-end">
          <span className="font-serif text-[12rem] leading-none text-white/5 italic">19</span>
          <span className="text-nude text-xs uppercase tracking-[0.5em] font-bold mt-[-2.5rem] mr-4">Excelência Clínica</span>
        </div>
      </div>

      <motion.div 
        style={{ opacity: opacityText, y: yText }}
        className="relative z-10 w-full lg:w-[48%] lg:h-screen flex flex-col justify-center px-8 lg:pl-24 lg:pr-12 py-16 lg:py-0 order-2 lg:order-1"
      >
        <div className="max-w-xl">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } } }}
            className="mb-10 lg:mb-16"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <span className="block font-serif text-[3.8rem] md:text-8xl lg:text-[7rem] leading-[0.9] text-cocoa italic font-light mb-1">
                Realce sua
              </span>
              <span className="block font-serif text-[3.8rem] md:text-8xl lg:text-[7rem] leading-[0.9] text-cocoa mb-6">
                beleza com
              </span>
            </motion.div>

            <motion.div 
               variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
               className="flex flex-col gap-4 mt-8"
            >
              <span className="block font-sans text-[11px] lg:text-xs font-black uppercase tracking-[0.6em] text-nude border-l-2 border-nude pl-6 mb-2">
                TECNOLOGIA DE PONTA
              </span>
              <span className="block font-serif text-xl lg:text-3xl text-charcoal font-light italic leading-snug max-w-md">
                na melhor clínica de estética de Belo Horizonte!
              </span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="space-y-6 mb-12 lg:mb-16"
          >
            <h2 className="font-sans text-[10px] lg:text-[11px] text-nude uppercase tracking-[0.4em] font-black">
              “Liberte-se de preocupações e revele o seu melhor”
            </h2>
            
            <p className="font-sans text-base lg:text-lg text-charcoal leading-[1.8] max-w-[38ch]">
              Na Naked, unimos 19 anos de excelência e os equipamentos mais avançados do mundo para garantir resultados seguros.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <a 
              href="#" 
              className="group relative inline-flex items-center gap-8 text-cocoa transition-all duration-500"
            >
              <div className="flex flex-col">
                <span className="font-serif text-3xl lg:text-5xl italic tracking-wide group-hover:text-nude transition-colors duration-500">
                  Quero minha consulta
                </span>
                <span className="w-16 h-[1px] bg-nude/40 mt-3 transition-all duration-700 group-hover:w-full group-hover:bg-nude" />
              </div>
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-nude group-hover:text-cream group-hover:border-nude transition-all duration-500 shadow-2xl">
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
