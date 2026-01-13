
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Founder: React.FC = () => {
  const founderImageUrl = "https://ptotpfdlgsohxmsrfczs.supabase.co/storage/v1/object/public/bucket/dono%20da%20clinica.png";
  
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-32 lg:py-48 bg-off-white relative overflow-hidden">
      {/* Background Texture & Elements */}
      <div className="absolute inset-0 bg-marble-noise opacity-30 mix-blend-multiply pointer-events-none"></div>
      
      {/* Large background decorative block for anchoring */}
      <div className="absolute top-1/2 right-0 w-1/3 h-[70%] bg-beige/40 -translate-y-1/2 z-0 hidden lg:block"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            {/* Watermark Name - Adjusted for better integration */}
            <motion.span 
              style={{ y: yOffset }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute -top-32 -left-16 text-[8rem] lg:text-[12rem] font-serif text-nude/5 select-none pointer-events-none z-0 leading-none"
            >
              Khalil
            </motion.span>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative z-10"
            >
              <div className="mb-8 flex items-center gap-4">
                <span className="h-[1px] w-12 bg-nude"></span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-nude font-black">História & Visão</span>
              </div>

              <h2 className="font-serif text-5xl lg:text-7xl text-cocoa mb-12 leading-tight">
                Fundação e <br/> <span className="italic pl-12 lg:pl-20 text-nude">Propósito</span>
              </h2>
              
              <div className="pl-6 border-l border-line/60 space-y-8">
                <p className="font-sans text-xl lg:text-2xl text-cocoa leading-relaxed font-light italic">
                  “Khalil fundou a Naked com um único propósito: transformar o setor de estética em BH.”
                </p>
                
                <p className="font-sans text-base lg:text-lg text-charcoal/80 leading-relaxed max-w-md">
                  Nosso trabalho vai além do procedimento; utilizamos as melhores tecnologias disponíveis para promover bem-estar, confiança e resultados naturais que mudam a forma como você se vê.
                </p>

                {/* Minimalist Signature Graphic */}
                <div className="pt-8 opacity-80 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full border border-nude/30 flex items-center justify-center p-3">
                     <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-cocoa" strokeWidth="1.5">
                        <circle cx="50" cy="50" r="45" strokeDasharray="4 4" className="opacity-30" />
                        <path d="M30 50 C 35 40, 65 40, 70 50 S 35 60, 30 50" strokeLinecap="round" />
                     </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-cocoa font-black">Khalil</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-nude">Fundador & Diretor Clínico</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Column - High-End Editorial Presentation */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center items-center">
             <div className="relative w-full max-w-xl group">
                
                {/* Floating Offset Frame (Quiet Luxury Detail) */}
                <motion.div 
                  initial={{ opacity: 0, x: 40, y: 40 }}
                  whileInView={{ opacity: 1, x: 20, y: 20 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0 border border-nude/40 -z-10 translate-x-5 translate-y-5 rounded-sm transition-transform duration-1000 group-hover:translate-x-3 group-hover:translate-y-3"
                ></motion.div>

                {/* Decorative Solid Plate behind image */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1.2 }}
                   className="absolute -top-10 -left-10 w-40 h-40 bg-cream/50 -z-10 rounded-full blur-3xl"
                ></motion.div>

                {/* Main Image Container with Masks and Soft Borders */}
                <motion.div
                  initial={{ opacity: 0, filter: 'grayscale(100%)' }}
                  whileInView={{ opacity: 1, filter: 'grayscale(0%)' }}
                  transition={{ duration: 1.5 }}
                  className="relative w-full aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-15px_rgba(104,80,62,0.15)]"
                >
                  {/* Subtle Grain & Light Overlay for texture harmony */}
                  <div className="absolute inset-0 bg-cocoa/5 mix-blend-multiply z-10 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-cocoa/20 via-transparent to-white/10 z-20 pointer-events-none"></div>
                  
                  <motion.img 
                    src={founderImageUrl} 
                    alt="Khalil, Fundador da Naked Laser" 
                    className="w-full h-full object-cover object-center transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                  />
                  
                  {/* Bottom Vignette for text overlay protection or aesthetics */}
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-cocoa/30 to-transparent z-30"></div>
                </motion.div>

                {/* Badge Overlay (Discreet Luxury) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -right-6 lg:-right-12 bg-cocoa py-6 px-10 text-white z-40 shadow-2xl"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="font-serif text-3xl leading-none">19</span>
                    <span className="text-[8px] uppercase tracking-[0.4em] font-black mt-1">Anos de Excelência</span>
                  </div>
                </motion.div>

                {/* Fine Decorative Lines */}
                <div className="absolute top-1/2 -left-20 w-40 h-[1px] bg-line/40 hidden lg:block -z-10"></div>
                <div className="absolute -bottom-20 right-1/4 w-[1px] h-40 bg-line/40 hidden lg:block -z-10"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
