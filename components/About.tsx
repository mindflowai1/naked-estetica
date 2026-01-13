
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
    <section id={SectionId.ABOUT} className="py-24 lg:py-40 bg-off-white relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 ml-12 lg:ml-24 hidden lg:block"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-nude font-black">Essência Naked</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl lg:text-7xl text-cocoa mb-14"
            >
              Quem Somos
            </motion.h2>

            <div className="space-y-8 text-charcoal font-sans text-lg lg:text-xl leading-relaxed mb-16 font-light">
              <p>
                A Naked Laser é mais que estética: é transformação real. Para quem busca excelência, oferecemos não apenas tratamentos, mas resultados que superam expectativas. 
              </p>
              <p>
                Aqui, o foco é você. Com um atendimento personalizado, cuidado minucioso e um compromisso incansável com a sua satisfação, cada sessão na Naked Laser é um passo para revelar a sua melhor versão.
              </p>
            </div>

            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="border-b border-white/5 pb-6">
                  <button 
                    onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-2 group text-left"
                  >
                    <div className="flex items-center gap-8">
                      <span className="font-serif text-2xl text-nude/40 group-hover:text-nude transition-colors">{item.id}</span>
                      <span className={`font-serif text-2xl lg:text-3xl transition-colors ${activeItem === item.id ? 'text-nude' : 'text-charcoal group-hover:text-cocoa'}`}>
                        {item.title}
                      </span>
                    </div>
                    <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${activeItem === item.id ? 'bg-nude border-nude text-cream' : 'text-nude hover:border-nude'}`}>
                      {activeItem === item.id ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeItem === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pl-16 pr-4 py-6 font-sans text-charcoal leading-relaxed lg:text-lg">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-32">
              <div className="relative rounded-sm overflow-hidden mb-16 shadow-2xl aspect-[4/5] group">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                  alt="Clínica Naked Laser Interior" 
                  className="w-full h-full object-cover brightness-75 transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                   <div className="flex flex-col">
                      <span className="text-nude text-xs uppercase tracking-[0.4em] font-black mb-2">Localização</span>
                      <span className="font-serif text-3xl text-white">Savassi, BH</span>
                   </div>
                   <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white">
                      <Plus size={20} />
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-16">
                {[
                  { val: '19+', label: 'Anos de Experiência' },
                  { val: 'Top 1', label: 'Pioneiros em Laser' },
                  { val: '100%', label: 'Remoção de Tatuagem' },
                  { val: 'Expert', label: 'Facial e Corporal' }
                ].map((stat, i) => (
                  <div key={i} className="border-l border-nude/30 pl-8 group">
                    <span className="block font-serif text-5xl lg:text-6xl text-cocoa mb-3 group-hover:text-nude transition-colors duration-500">{stat.val}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal font-black">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
