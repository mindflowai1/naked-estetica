import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const TattooRemoval: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-cocoa text-cream relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-marble-noise opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Content */}
        <div className="lg:col-span-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl lg:text-6xl mb-10 text-white"
          >
            Remoção de Tatuagem
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 font-sans text-cream/80 text-lg leading-relaxed font-light"
          >
            <p>
              Se você tem uma tatuagem indesejada e deseja removê-la, a Naked Laser pode ajudar! Com tecnologia de ponta, removemos sua tatuagem em menos da metade do tempo dos lasers tradicionais, com eficácia e total segurança.
            </p>
            <p>
              Independente do motivo—seja um significado mal pensado, uma ideia da juventude que perdeu relevância, uma execução inadequada, ou simplesmente uma nova fase em sua vida—essas marcas podem já não representar quem você é. Nós estamos aqui para ajudá-lo a deixar o passado para trás e seguir com confiança!
            </p>
          </motion.div>

          <div className="mt-12">
            <Button variant="outline" className="!border-nude !text-nude hover:!bg-nude hover:!text-white">
              Agendar minha consulta
            </Button>
          </div>
        </div>

        {/* Visuals */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md aspect-[3/4]"
          >
            {/* Main Image */}
            <div className="absolute inset-0 border border-white/10 rounded-sm p-4">
              <div className="w-full h-full overflow-hidden bg-charcoal/20 relative">
                 <img 
                    src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1935&auto=format&fit=crop" 
                    alt="Laser Removal Technology" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 to-transparent"></div>
              </div>
            </div>
            
            {/* Accent Details */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-nude/50"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-nude/50"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TattooRemoval;