
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { ViewState } from '../types';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

// Hero component for the landing page following Apple-style design
const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-apple-blue/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-apple-blue animate-pulse"></span>
          <span className="text-xs font-medium text-apple-subtext dark:text-white/60 tracking-wide uppercase">
            Innovación en Mallorca
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-8xl font-bold text-apple-text dark:text-white mb-8 tracking-tight leading-[1.1] animate-slide-up">
          Automatiza <br />
          <span className="text-apple-blue">tu éxito.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-apple-subtext dark:text-white/40 font-light max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Diseñamos agentes de IA y ecosistemas digitales que transforman 
          la complejidad en eficiencia absoluta.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button 
            onClick={() => onNavigate(ViewState.SERVICES)}
            className="group px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-2"
          >
            Ver servicios
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => onNavigate(ViewState.ABOUT)}
            className="px-8 py-4 bg-transparent text-apple-text dark:text-white rounded-full font-semibold text-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-apple-blue/10 flex items-center justify-center text-apple-blue">
              <Play size={14} fill="currentColor" />
            </div>
            Saber más
          </button>
        </div>

        {/* Statistics or Key highlights */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center text-apple-text dark:text-white">
             <span className="text-3xl font-bold">95%</span>
             <span className="text-[10px] uppercase tracking-widest text-apple-subtext dark:text-white/40 font-bold">Eficiencia</span>
          </div>
          <div className="flex flex-col items-center text-apple-text dark:text-white">
             <span className="text-3xl font-bold">+20h</span>
             <span className="text-[10px] uppercase tracking-widest text-apple-subtext dark:text-white/40 font-bold">Ahorro semanal</span>
          </div>
          <div className="flex flex-col items-center text-apple-text dark:text-white">
             <span className="text-3xl font-bold">24/7</span>
             <span className="text-[10px] uppercase tracking-widest text-apple-subtext dark:text-white/40 font-bold">Soporte IA</span>
          </div>
          <div className="flex flex-col items-center text-apple-text dark:text-white">
             <span className="text-3xl font-bold">ROI</span>
             <span className="text-[10px] uppercase tracking-widest text-apple-subtext dark:text-white/40 font-bold">Inmediato</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
