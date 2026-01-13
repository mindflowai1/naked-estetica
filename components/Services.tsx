
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowUpRight } from 'lucide-react';
import { SectionId, ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  { 
    id: '1', 
    title: 'DEPILAÇÃO A LASER', 
    description: 'Realizada com equipamentos de ponta, como Light Sheer Duet e Desire.', 
    category: 'estetica',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: '2', 
    title: 'ULTRAFORMER III E MPT', 
    description: 'Ultrassom microfocado e macrofocado para lifting facial e corporal.', 
    category: 'estetica',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: '3', 
    title: 'BIOESTIMULADORES', 
    description: 'Estimula a produção natural de colágeno para firmeza.', 
    category: 'estetica',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop'
  },
  { 
    id: '4', 
    title: 'BOTOX', 
    description: 'Suaviza rugas e linhas de expressão com precisão.', 
    category: 'estetica',
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop'
  },
  { 
    id: '5', 
    title: 'PREENCHIMENTO', 
    description: 'Devolve volume e contorno à face com Ácido Hialurônico.', 
    category: 'estetica',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: '6', 
    title: 'TERAPIA CAPILAR', 
    description: 'Tratamento completo para saúde do couro cabeludo.', 
    category: 'capilar',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop'
  },
  { 
    id: '7', 
    title: 'MMP CAPILAR', 
    description: 'Microinfusão de Medicamentos na Pele para crescimento.', 
    category: 'capilar',
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: '8', 
    title: 'REMOÇÃO DE TATUAGEM', 
    description: 'Tratamento eficaz para todas as cores de tatuagem.', 
    category: 'tatuagem',
    image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=2072&auto=format&fit=crop'
  },
  { 
    id: '9', 
    title: 'REMOÇÃO DE MICRO', 
    description: 'Correção e remoção de sobrancelhas definitivas.', 
    category: 'tatuagem',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop'
  },
];

const categories = [
  { id: 'estetica', label: 'Estética' },
  { id: 'capilar', label: 'Capilar' },
  { id: 'tatuagem', label: 'Tatuagem' },
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('estetica');
  const filteredServices = servicesData.filter(s => s.category === activeTab);

  return (
    <section id={SectionId.SERVICES} className="py-24 lg:py-40 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-marble-noise opacity-30 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col mb-20 lg:mb-32 text-center items-center">
          <motion.div
             initial={{ opacity: 0, y: -10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-8"
          >
             <span className="text-[10px] uppercase tracking-[0.6em] text-nude font-black px-8 py-3 border border-nude/20 rounded-full inline-block">
               Menu de Excelência
             </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl lg:text-8xl text-cocoa mb-8"
          >
            Nossos Serviços
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-[1px] bg-nude/30 mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-lg lg:text-xl text-charcoal font-light italic tracking-wide"
          >
            Cuidados Personalizados para Sua Beleza
          </motion.p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8 mb-24 border-b border-white/5 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`group relative px-6 md:px-10 py-6 transition-all duration-500`}
            >
              <span className={`text-[11px] md:text-[12px] uppercase tracking-[0.4em] font-black transition-colors duration-500 ${
                activeTab === cat.id ? 'text-cocoa' : 'text-charcoal group-hover:text-nude'
              }`}>
                {cat.label}
              </span>
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-nude"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute inset-0 bg-nude blur-[4px] opacity-50"></div>
                </motion.div>
              )}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="group relative bg-[#141312] aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm border border-white/[0.03] hover:border-nude/30 transition-all duration-700 shadow-2xl"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0D] via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-1000 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-all duration-[2.5s] group-hover:scale-110 grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0"
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 p-8 lg:p-12 h-full flex flex-col justify-end">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]">
                    
                    <span className="block text-nude text-[9px] uppercase tracking-[0.5em] font-black mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      Ver detalhes
                    </span>
                    
                    <h3 className="font-serif text-3xl lg:text-4xl text-cocoa mb-6 leading-[1.1] font-light">
                      {service.title}
                    </h3>
                    
                    <p className="font-sans text-charcoal/80 leading-relaxed text-sm lg:text-base mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                       <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-cocoa group/link">
                          <span className="border-b border-nude/30 group-hover/link:border-nude transition-all duration-500 pb-1">Ver Mais</span>
                          <ArrowUpRight size={14} className="text-nude group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                       </button>
                       <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-nude/40 opacity-0 group-hover:opacity-100 group-hover:border-nude/40 transition-all duration-700 delay-300">
                          <Plus size={18} />
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Area */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-16 border-t border-white/5 flex flex-col items-center"
        >
           <p className="text-charcoal text-sm uppercase tracking-[0.4em] mb-8 font-black">Interessado em outros tratamentos?</p>
           <a href="#" className="font-serif text-3xl text-nude italic hover:text-cocoa transition-colors flex items-center gap-4 group">
             Consultar lista completa 
             <div className="w-10 h-10 rounded-full border border-nude/20 flex items-center justify-center group-hover:bg-nude group-hover:text-cream transition-all duration-500">
               <ArrowUpRight size={18} />
             </div>
           </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
