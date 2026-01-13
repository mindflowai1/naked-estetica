
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId, ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  // Tratamentos Estéticos
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
    description: 'Estimula a produção natural de colágeno.', 
    category: 'estetica',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=2670&auto=format&fit=crop'
  },
  { 
    id: '4', 
    title: 'BOTOX', 
    description: 'Suaviza rugas e linhas de expressão.', 
    category: 'estetica',
    image: 'https://images.unsplash.com/photo-1588510883462-765002a91d51?q=80&w=2071&auto=format&fit=crop'
  },
  { 
    id: '5', 
    title: 'PREENCHIMENTO', 
    description: 'Devolve volume e contorno à face com Ácido Hialurônico.', 
    category: 'estetica',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop'
  },
  
  // Capilar
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
  
  // Tatuagem
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
    description: 'Correção e remoção de sobrancelhas definitivas (Micropigmentação).', 
    category: 'tatuagem',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop'
  },
];

const categories = [
  { id: 'estetica', label: 'Tratamentos Estéticos' },
  { id: 'capilar', label: 'Tratamentos Capilares' },
  { id: 'tatuagem', label: 'Remoção de Tatuagem' },
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('estetica');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filteredServices = servicesData.filter(s => s.category === activeTab);

  return (
    <section id={SectionId.SERVICES} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl lg:text-6xl text-cocoa mb-4"
          >
            Nossos Serviços
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg text-charcoal/80"
          >
            Cuidados Personalizados para Sua Beleza
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-line/30 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-6 py-3 rounded-full text-sm uppercase tracking-wide transition-all duration-300 ${
                activeTab === cat.id ? 'text-white' : 'text-cocoa hover:bg-white/50'
              }`}
            >
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-cocoa rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative bg-white overflow-hidden border border-transparent hover:border-nude/30 min-h-[300px] transition-all duration-500 hover:shadow-2xl hover:shadow-cocoa/10 rounded-sm ${
                  index === 0 && activeTab === 'estetica' ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/20 z-10 transition-colors duration-500 group-hover:from-white/90 group-hover:via-white/60 group-hover:to-white/10" />
                  
                  <img 
                    src={service.image} 
                    alt="" 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Content Layer */}
                <div className="relative z-20 p-8 lg:p-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl lg:text-3xl text-cocoa mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="font-sans text-charcoal/80 leading-relaxed text-sm lg:text-base max-w-sm font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-end">
                     <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-nude group-hover:text-cocoa transition-colors">
                       Ver Mais
                       <span className="block h-[1px] w-8 bg-nude group-hover:bg-cocoa transition-colors"></span>
                     </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
