
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Founder: React.FC = () => {
  const founderImageUrl = "https://ptotpfdlgsohxmsrfczs.supabase.co/storage/v1/object/public/bucket/dono%20da%20clinica.png";
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section className="py-32 lg:py-56 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-marble-noise opacity-40 mix-blend-overlay pointer-events-none"></div>
      
      <div className="absolute top-1/2 right-0 w-1/4 h-3/4 bg-white/5 -translate-y-1/2 blur-[100px] z-0 hidden lg:block"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <motion.span 
              style={{ y: yOffset }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 0.05, x: 0 }}
              transition={{ duration: 2 }}
              className="absolute -top-40 -left-20 text-[10rem] lg:text-[18rem] font-serif text-white select-none pointer-events-none z-0 leading-none italic"
            >
              Khalil
            </motion.span>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <div className="mb-10 flex items-center gap-6">
                <span className="h-[1px] w-16 bg-nude"></span>
                <span className="text-[10px] uppercase tracking-[0.5em] text-nude font-black">Fundação & Visão</span>
              </div>

              <h2 className="font-serif text-6xl lg:text-8xl text-cocoa mb-14 leading-[0.9]">
                Propósito & <br/> <span className="italic pl-16 lg:pl-28 text-nude">Legado</span>
              </h2>
              
              <div className="pl-10 border-l border-white/10 space-y-10">
                <p className="font-serif text-2xl lg:text-4xl text-cocoa leading-snug font-light italic opacity-90">
                  “Khalil fundou a Naked com um único propósito: transformar o setor de estética em BH.”
                </p>
                
                <p className="font-sans text-lg lg:text-xl text-charcoal leading-relaxed max-w-md font-light">
                  Nosso trabalho vai além do procedimento; utilizamos as melhores tecnologias disponíveis para promover confiança e resultados naturais que mudam a forma como você se vê.
                </p>

                <div className="pt-10 flex items-center gap-8">
                  <div className="w-20 h-20 rounded-full border border-nude/20 flex items-center justify-center p-5 group cursor-default">
                     <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-nude transition-transform duration-700 group-hover:rotate-180" strokeWidth="1">
                        <circle cx="50" cy="50" r="48" strokeDasharray="6 6" />
                        <path d="M25 50 C 30 40, 70 40, 75 50 S 30 60, 25 50" strokeLinecap="round" />
                     </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-[0.4em] text-cocoa font-black">Dr. Khalil</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-nude/60">Diretor Clínico</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center items-center">
             <div className="relative w-full max-w-xl group">
                
                <motion.div 
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  whileInView={{ opacity: 1, x: 30, y: 30 }}
                  transition={{ duration: 2 }}
                  className="absolute inset-0 border border-nude/20 -z-10 rounded-sm"
                ></motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                  className="relative w-full aspect-[4/5] overflow-hidden rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-cream via-transparent to-white/5 z-20 pointer-events-none"></div>
                  
                  <img 
                    src={founderImageUrl} 
                    alt="Khalil" 
                    className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-cream to-transparent z-30"></div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-10 -right-6 lg:-right-16 bg-nude py-8 px-12 text-cream z-40 shadow-2xl"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="font-serif text-5xl leading-none">19</span>
                    <span className="text-[9px] uppercase tracking-[0.5em] font-black mt-3">Anos de Excelência</span>
                  </div>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
