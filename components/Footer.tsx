import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-cocoa text-cream pt-20 pb-8 border-t border-nude/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-cream/10 pb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl tracking-widest uppercase font-bold text-cream">
              Naked<span className="text-nude">.</span>
            </h2>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full border border-cream/20 hover:bg-nude hover:border-nude transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full border border-cream/20 hover:bg-nude hover:border-nude transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-sans font-bold uppercase tracking-wider text-sm mb-6 text-nude">Menu</h3>
            <ul className="space-y-4 font-sans text-sm text-cream/70">
              <li><button onClick={() => scrollTo(`#${SectionId.ABOUT}`)} className="hover:text-white transition-colors">Quem Somos</button></li>
              <li><button onClick={() => scrollTo(`#${SectionId.SERVICES}`)} className="hover:text-white transition-colors">Serviços</button></li>
              <li><button onClick={() => scrollTo(`#${SectionId.BENEFITS}`)} className="hover:text-white transition-colors">Benefícios</button></li>
              <li><button onClick={() => scrollTo(`#${SectionId.TESTIMONIALS}`)} className="hover:text-white transition-colors">Depoimentos</button></li>
              <li><button onClick={() => scrollTo(`#${SectionId.LOCATION}`)} className="hover:text-white transition-colors">Localização</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-bold uppercase tracking-wider text-sm mb-6 text-nude">Contato</h3>
            <ul className="space-y-4 font-sans text-sm text-cream/70">
              <li className="flex flex-col">
                <span className="text-cream/40 text-xs uppercase mb-1">WhatsApp</span>
                <span>(31) 99999-9999</span>
              </li>
              <li className="flex flex-col">
                <span className="text-cream/40 text-xs uppercase mb-1">Email</span>
                <span>contato@nakedlaser.com.br</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-sans font-bold uppercase tracking-wider text-sm mb-6 text-nude">Horários</h3>
             <ul className="space-y-2 font-sans text-sm text-cream/70">
              <li>Segunda a Sexta: 07h às 21h</li>
              <li>Sábado: 07h às 17h</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-cream/40">
          <p>Copyright © 2026, Naked Laser – Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-cream transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;