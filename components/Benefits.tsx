import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, Shield, Star } from 'lucide-react';
import { SectionId } from '../types';

const benefits = [
  {
    icon: Clock,
    title: 'Acesso & Facilidade',
    text: 'Valorize cada centavo do seu investimento. Oferecemos procedimentos de alto padrão com transparência, resultados duradouros e preço justo, garantindo que o cuidado com sua beleza e bemestar seja a melhor decisão que você fará.'
  },
  {
    icon: CheckCircle,
    title: 'Conveniência & Praticidade',
    text: 'Reunimos em um só lugar toda a tecnologia e especialização em depilação a laser, remoção de tatuagem, tratamentos faciais e corporais.'
  },
  {
    icon: Shield,
    title: 'Conforto & Segurança',
    text: 'Utilizamos equipamentos com as tecnoligias mais avançadas do mercado. Isso é conforto de ter a certeza de resultados seguros e eficazes.'
  },
  {
    icon: Star,
    title: 'Qualidade & Profissionalismo',
    text: 'Por 19 anos, nosso compromisso é e sempre será entregar excelência clínica e cuidado humanizado em cada detalhe para você e sua família.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section id={SectionId.BENEFITS} className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-serif text-4xl lg:text-5xl text-cocoa mb-4">Porque escolher a Naked Laser?</h2>
          <div className="w-24 h-[1px] bg-nude mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-line -translate-x-1/2"></div>

          <div className="space-y-16 lg:space-y-0">
            {benefits.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-24 relative lg:py-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Icon Node (Center) */}
                  <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-cream border border-nude flex items-center justify-center text-cocoa shadow-lg shadow-cocoa/5">
                      <item.icon strokeWidth={1} size={32} />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`w-full lg:w-1/2 text-center ${isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <h3 className="font-serif text-2xl lg:text-3xl text-cocoa mb-4">{item.title}</h3>
                    <p className="font-sans text-charcoal/80 leading-relaxed text-sm lg:text-base">
                      {item.text}
                    </p>
                  </div>
                  
                  {/* Empty Side for Grid Balance */}
                  <div className="hidden lg:block lg:w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;