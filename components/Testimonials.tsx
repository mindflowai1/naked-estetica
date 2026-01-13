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
    <section id={SectionId.TESTIMONIALS} className="py-24 bg-beige/30">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl text-cocoa mb-2">Depoimentos</h2>
            <p className="font-sans text-charcoal/70 uppercase tracking-widest text-sm">O que nossos clientes dizem sobre nós</p>
          </div>

          {/* Trust Index Simulation */}
          <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-sm shadow-sm">
             <div className="flex gap-1 text-nude">
               {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#BF9F88" />)}
             </div>
             <div className="border-l border-line pl-4">
               <span className="block text-cocoa font-serif font-bold leading-none">EXCELENTE</span>
               <span className="text-xs text-charcoal/60">Com base em 332 avaliações</span>
             </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="mb-8 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-nude/10 flex items-center justify-center">
                    <Quote className="text-nude w-8 h-8 fill-nude/20" />
                  </div>
                </div>
                
                <p className="font-serif text-2xl lg:text-4xl text-cocoa mb-8 leading-snug">
                  "{reviews[currentIndex].text}"
                </p>

                <div className="flex flex-col items-center gap-2">
                  <span className="font-sans font-bold text-cocoa uppercase tracking-wider">{reviews[currentIndex].name}</span>
                  <div className="flex items-center gap-2 text-sm text-charcoal/60">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="#BF9F88" className="text-nude" />)}
                    </div>
                    <span>• {reviews[currentIndex].date}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button onClick={prev} className="p-3 rounded-full border border-cocoa/20 text-cocoa hover:bg-cocoa hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="p-3 rounded-full border border-cocoa/20 text-cocoa hover:bg-cocoa hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;