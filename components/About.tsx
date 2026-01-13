import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SectionId } from '../types';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const items: AccordionItem[] = [
  // Item "Fundação e Propósito" removed as it now has its own section
  {
    id: '01',
    title: 'Tecnologia de Confiança Global',
    content: 'Não somos apenas mais uma clínica. A Naked Laser se destaca porinvestir em tecnologias de ponta e certificadas, as mesmas utilizadasnos centros de estética mais renomados do mundo. Isso se traduzem segurança e eficácia máximas em cada sessão.'
  },
  {
    id: '02',
    title: 'Crescimento e Consolidação',
    content: 'Com quase duas décadas de história, a clínica consolidou-se comoreferência na cidade, guiando tendências e elevando continuamenteos padrões de excelência no setor.'
  },
  {
    id: '03',
    title: 'Excelência e Liderança',
    content: 'Com dedicação incansável e olhar visionário, garantimos que vocêreceba o atendimento e os resultados que merece.'
  }
];

const About: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>('01');

  return (
    <section id={SectionId.ABOUT} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-line opacity-30 ml-12 lg:ml-24 hidden lg:block"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Text Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl lg:text-6xl text-cocoa mb-12"
            >
              Quem Somos
            </motion.h2>

            <div className="space-y-6 text-charcoal/90 font-sans text-lg leading-relaxed mb-16">
              <p>
                A Naked Laser é mais que estética: é transformação real. Para quem busca excelência, oferecemos não apenas tratamentos, mas resultados que superam expectativas. Com tecnologias avançadas e inovadoras, garantimos segurança e eficácia sem abrir mão do conforto.
              </p>
              <p>
                Aqui, o foco é você. Com um atendimento personalizado, cuidado minucioso e um compromisso incansável com a sua satisfação, cada sessão na Naked Laser é um passo para revelar a sua melhor versão.
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border-b border-line/50 pb-4">
                  <button 
                    onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-2 group text-left"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-serif text-2xl text-nude/50 group-hover:text-nude transition-colors">{item.id}</span>
                      <span className={`font-serif text-xl lg:text-2xl transition-colors ${activeItem === item.id ? 'text-cocoa' : 'text-charcoal group-hover:text-cocoa'}`}>
                        {item.title}
                      </span>
                    </div>
                    <div className={`p-2 rounded-full border border-line transition-all duration-300 ${activeItem === item.id ? 'bg-cocoa border-cocoa text-white' : 'text-cocoa'}`}>
                      {activeItem === item.id ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeItem === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pl-14 pr-4 py-4 font-sans text-charcoal/80 leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visuals & Stats */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="relative rounded-sm overflow-hidden mb-12 shadow-2xl shadow-cocoa/5 aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                  alt="Clínica Naked Laser Interior" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-cocoa/10 mix-blend-multiply"></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                <div className="border-l-2 border-nude pl-6">
                  <span className="block font-serif text-4xl lg:text-5xl text-cocoa mb-1">19+</span>
                  <span className="text-xs uppercase tracking-widest text-charcoal">Anos de Experiência</span>
                </div>
                <div className="border-l-2 border-nude pl-6">
                  <span className="block font-serif text-4xl lg:text-5xl text-cocoa mb-1">Top 1</span>
                  <span className="text-xs uppercase tracking-widest text-charcoal">Pioneiros em Laser</span>
                </div>
                <div className="border-l-2 border-nude pl-6">
                  <span className="block font-serif text-4xl lg:text-5xl text-cocoa mb-1">100%</span>
                  <span className="text-xs uppercase tracking-widest text-charcoal">Remoção de Tatuagem</span>
                </div>
                <div className="border-l-2 border-nude pl-6">
                  <span className="block font-serif text-4xl lg:text-5xl text-cocoa mb-1">Expert</span>
                  <span className="text-xs uppercase tracking-widest text-charcoal">Facial e Corporal</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;