
import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { SectionId } from '../types';

const Location: React.FC = () => {
  return (
    <section id={SectionId.LOCATION} className="py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-4xl lg:text-5xl text-cocoa mb-16 text-center">Onde estamos localizados?</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-xl shadow-cocoa/5 rounded-sm overflow-hidden">
          {/* Map (Official colors as requested) */}
          <div className="h-[400px] lg:h-auto relative bg-gray-200">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.925586940801!2d-43.93867668508544!3d-19.93666668659978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e8c4e4b5f9%3A0x5028441113945c71!2sR.%20Sergipe%2C%201327%20-%20Savassi%2C%20Belo%20Horizonte%20-%20MG%2C%2030130-174!5e0!3m2!1sen!2sbr!4v1629898745632!5m2!1sen!2sbr" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy"
               title="Naked Laser Location"
             />
          </div>

          {/* Info */}
          <div className="p-12 lg:p-20 flex flex-col justify-center bg-off-white relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-marble-noise opacity-20"></div>

             <div className="space-y-12">
                
                {/* Address */}
                <div className="group">
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-white rounded-full text-nude shadow-sm">
                      <MapPin size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl text-cocoa mb-2">Endereço</h4>
                      <p className="font-sans text-charcoal leading-relaxed">
                        R. Sergipe, 1327 – Savassi,<br/> Belo Horizonte – MG
                      </p>
                      <span className="text-sm text-charcoal/60 mt-1 block">CEP 30130-170</span>
                      <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-nude mt-4 group-hover:text-cocoa transition-colors">
                        Ver no mapa <Navigation size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-white rounded-full text-nude shadow-sm">
                      <Clock size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl text-cocoa mb-2">Horários de Funcionamento</h4>
                      <div className="space-y-1 font-sans text-charcoal">
                        <p className="flex justify-between gap-8">
                          <span>Segunda a Sexta</span>
                          <span className="font-medium">07h às 21h</span>
                        </p>
                        <p className="flex justify-between gap-8">
                          <span>Sábado</span>
                          <span className="font-medium">07h às 17h</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
