
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const TattooRemoval: React.FC = () => {
  return (
    <section className="py-24 lg:py-40 bg-cream relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-marble-noise opacity-30 mix-blend-overlay"></div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-nude/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center relative z-10">
        
        {/* Visuals - Lado Esquerdo para variar o layout editorial */}
        <div className="lg:col-span-6 flex justify-center relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg aspect-[4/5]"
          >
            {/* Main Image Frame */}
            <div className="absolute inset-0 border border-white/5 rounded-sm overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] group">
              <div className="w-full h-full relative">
                 <img 
                    src="https://ptotpfdlgsohxmsrfczs.supabase.co/storage/v1/object/public/bucket/remocao-pigmento1-1.jpg" 
                    alt="Procedimento de Remoção de Tatuagem na Naked Laser" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-80"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-white/5"></div>
              </div>
            </div>
            
            {/* Accent Details (Nude Lines) */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-b border-r border-nude/30 pointer-events-none"></div>
            
            {/* Number Badge */}
            <div className="absolute -top-6 -left-6 bg-nude py-6 px-8 text-cream z-20 shadow-2xl">
               <span className="font-serif text-3xl italic">Tecnologia</span>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-nude font-black mb-6 block">Especialidade Premium</span>
            <h2 className="font-serif text-5xl lg:text-7xl mb-12 text-cocoa leading-[1.1]">
              Remoção de <br/> <span className="italic pl-12 text-nude">Tatuagem</span>
            </h2>
            
            <div className="space-y-8 font-sans text-charcoal text-lg lg:text-xl leading-relaxed font-light mb-16">
              <p className="border-l border-nude/20 pl-8">
                Se você tem uma tatuagem indesejada e deseja removê-la, a Naked Laser pode ajudar! Com tecnologia de ponta, removemos sua tatuagem em menos da metade do tempo dos lasers tradicionais, com eficácia e total segurança.
              </p>
              <p className="pl-8 opacity-70">
                Independente do motivo—seja um significado mal pensado, uma ideia da juventude que perdeu relevância, ou simplesmente uma nova fase em sua vida—essas marcas podem já não representar quem você é. Nós estamos aqui para ajudá-lo a deixar o passado para trás e seguir com confiança!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Button variant="primary" className="!bg-nude !text-cream w-full sm:w-auto">
                Agendar minha consulta
              </Button>
              <div className="flex items-center gap-4 text-nude/60 text-[10px] uppercase tracking-[0.2em] font-black">
                <div className="w-12 h-[1px] bg-nude/20"></div>
                Segurança Certificada
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TattooRemoval;
