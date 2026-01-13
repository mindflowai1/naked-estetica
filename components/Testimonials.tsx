
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionId, Testimonial } from '../types';

const reviews: Testimonial[] = [
  { id: 1, name: "Ana Souza", date: "2 dias atrás", rating: 5, text: "Experiência incrível. Profissionais extremamente qualificados e atenciosos. O resultado da depilação superou minhas expectativas." },
  { id: 2, name: "Carlos Pereira", date: "1 semana atrás", rating: 5, text: "Fiz a remoção de tatuagem e estou impressionado com a rapidez e a cicatrização. Recomendo de olhos fechados." },
  { id: 3, name: "Mariana Lima", date: "2 semanas atrás", rating: 5, text: "Ambiente sofisticado e acolhedor. Me senti segura desde a primeira consulta. A Naked é referência por um motivo." },
  { id: 4, name: "Fernanda Costa", date: "3 semanas atrás", rating: 5, text: "Melhor clínica de BH. O Ultraformer mudou meu rosto, muito natural. Obrigada equipe Naked!" }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id={SectionId.TESTIMONIALS} className="py-24 lg:py-40 bg-off-white relative overflow-hidden">
      {/* Texture & Noise */}
      <div className="absolute inset-0 bg-marble-noise opacity-20 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 gap-12">
          <div className="text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.5em] text-nude font-black mb-4 block">Prova Social</span>
            <h2 className="font-serif text-5xl lg:text-7xl text-cocoa mb-4">Depoimentos</h2>
            <p className="font-sans text-charcoal uppercase tracking-[0.3em] text-[10px] font-black">O que nossos clientes dizem sobre nós</p>
          </div>

          {/* Trust Index Dark Glass Card */}
          <div className="flex items-center gap-6 bg-white/5 backdrop-blur-xl px-8 py-5 rounded-sm border border-white/10 shadow-2xl">
             <div className="flex gap-1.5 text-nude">
               {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#BF9F88" className="drop-shadow-[0_0_8px_rgba(191,159,136,0.3)]" />)}
             </div>
             <div className="border-l border-white/10 pl-6">
               <span className="block text-cocoa font-serif text-xl font-bold leading-none tracking-tight">EXCELENTE</span>
               <span className="text-[9px] uppercase tracking-[0.2em] text-charcoal font-black mt-2 block">332 avaliações no Google</span>
             </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl mx-auto text-center"
              >
                <div className="mb-12 flex justify-center">
                  <Quote className="text-nude w-16 h-16 opacity-10" />
                </div>
                
                <p className="font-serif text-3xl lg:text-5xl text-cocoa mb-12 leading-snug lg:leading-[1.3] font-light">
                  "{reviews[currentIndex].text}"
                </p>

                <div className="flex flex-col items-center gap-4">
                  <div className="h-[1px] w-12 bg-nude mb-2"></div>
                  <span className="font-sans font-black text-cocoa uppercase tracking-[0.3em] text-[11px]">{reviews[currentIndex].name}</span>
                  <div className="flex items-center gap-3 text-[10px] text-charcoal font-black uppercase tracking-[0.2em]">
                    <span>{reviews[currentIndex].date}</span>
                    <span className="text-nude/40">•</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} size={8} fill="#BF9F88" className="text-nude" />)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none">
            <button 
              onClick={prev} 
              className="p-4 rounded-full border border-white/5 text-charcoal hover:text-nude hover:border-nude/50 transition-all pointer-events-auto bg-cream/50 backdrop-blur-sm lg:translate-x-[-50%]"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next} 
              className="p-4 rounded-full border border-white/5 text-charcoal hover:text-nude hover:border-nude/50 transition-all pointer-events-auto bg-cream/50 backdrop-blur-sm lg:translate-x-[50%]"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-3 mt-16">
            {reviews.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-[2px] transition-all duration-500 ${currentIndex === i ? 'w-12 bg-nude' : 'w-4 bg-white/10 hover:bg-white/20'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
