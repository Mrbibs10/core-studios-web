import React from 'react';
import { ViewState } from '../types';
import { ArrowLeft } from 'lucide-react';

interface LegalProps {
  view: ViewState.TERMS | ViewState.PRIVACY;
  onBack: () => void;
}

const Legal: React.FC<LegalProps> = ({ view, onBack }) => {
  const isTerms = view === ViewState.TERMS;

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-white animate-fade-in">
      <div className="container mx-auto max-w-3xl">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-medium text-apple-subtext mb-8 hover:text-apple-blue transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver
        </button>

        <h1 className="text-4xl md:text-5xl font-semibold text-apple-text mb-12 tracking-tight">
          {isTerms ? 'Términos y Condiciones' : 'Política de Privacidad'}
        </h1>

        <div className="space-y-12 text-lg text-apple-subtext font-light leading-relaxed">
          <div>
            <h3 className="text-xl font-medium text-apple-text mb-3">Compromiso Core Studios</h3>
            <p>Buscamos la excelencia en la automatización. Todos nuestros servicios se rigen por principios de transparencia, seguridad y propiedad de datos del cliente.</p>
          </div>
          <div>
             <h3 className="text-xl font-medium text-apple-text mb-3">Protección de Datos</h3>
             <p>Cumplimos con la normativa vigente para asegurar que tu información corporativa y personal esté siempre bajo tu control.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
