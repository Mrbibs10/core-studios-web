import React from 'react';
import { ViewState } from '../types';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 bg-white">
      <div className="container mx-auto px-6 text-center max-w-4xl animate-fade-in">
        
        <div className="inline-block mb-6">
          <span className="text-xs font-semibold tracking-widest text-apple-subtext uppercase">
            Automatización en Mallorca
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-apple-text mb-6">
          Transformando empresas.<br />
          <span className="text-gray-400">Con inteligencia.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Simplificamos lo complejo. Diseñamos flujos de trabajo que devuelven el tiempo a tu negocio.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => onNavigate(ViewState.SERVICES)}
            className="px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out active:scale-95"
          >
            Ver soluciones
          </button>
          
          <button 
            onClick={() => onNavigate(ViewState.CONTACT)}
            className="group flex items-center gap-1 text-apple-blue text-lg font-medium hover:underline decoration-2 underline-offset-4 transition-all"
          >
            Contactar equipo
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-20 w-full max-w-5xl mx-auto rounded-[40px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100 bg-apple-bg aspect-[16/9] flex items-center justify-center relative hover:scale-[1.01] transition-transform duration-700">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30"></div>
          <div className="w-3/4 h-3/4 bg-white rounded-3xl shadow-sm flex flex-col p-8 space-y-4 border border-gray-50">
             <div className="w-1/3 h-4 bg-gray-100 rounded-full"></div>
             <div className="w-full h-full grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-2xl"></div>
                <div className="bg-gray-50 rounded-2xl"></div>
                <div className="bg-gray-50 rounded-2xl"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
