
import React from 'react';
import { ViewState } from '../types';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-6 text-center max-w-4xl animate-fade-in">
        
        {/* Subtle Badge */}
        <div className="inline-block mb-6">
          <span className="text-xs font-semibold tracking-widest text-apple-subtext dark:text-white/40 uppercase">
            Automatización en Mallorca
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-apple-text dark:text-white mb-6">
          Transformando empresas.<br />
          <span className="text-apple-subtext dark:text-white/30">Con inteligencia.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-apple-text dark:text-white/80 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Simplificamos lo complejo. Diseñamos flujos de trabajo que devuelven el tiempo a tu negocio.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => onNavigate(ViewState.SERVICES)}
            className="px-8 py-4 bg-black dark:bg-white dark:text-black text-white rounded-full text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out active:scale-95"
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

        {/* Minimalist Graphic/Placeholder */}
        <div className="mt-20 w-full max-w-5xl mx-auto rounded-[40px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-none border border-gray-100 dark:border-white/10 bg-apple-bg dark:bg-[#1C1C1E] aspect-[16/9] flex items-center justify-center relative hover:scale-[1.01] transition-transform duration-700">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 dark:to-black/30"></div>
          {/* Abstract representation of UI */}
          <div className="w-3/4 h-3/4 bg-white dark:bg-black/40 rounded-3xl shadow-sm flex flex-col p-8 space-y-4 border border-white/5">
             <div className="w-1/3 h-4 bg-gray-100 dark:bg-white/10 rounded-full"></div>
             <div className="w-full h-full grid grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-white/5 rounded-2xl"></div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-2xl"></div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-2xl"></div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
