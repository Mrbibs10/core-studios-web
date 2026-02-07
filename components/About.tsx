import React from 'react';
import { MapPin, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen py-32 px-6 bg-apple-bg flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto max-w-4xl relative">
        
        {/* Manifiesto / Carta de Marca */}
        <div className="bg-white rounded-[48px] p-10 md:p-20 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 relative animate-fade-in">
          
          {/* Decoración de comilla sutil */}
          <div className="absolute top-12 left-12 text-apple-blue/5 pointer-events-none">
            <Quote size={80} fill="currentColor" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <header className="mb-12">
              <span className="text-apple-blue font-semibold tracking-[0.2em] mb-4 inline-block uppercase text-[10px]">
                Nuestra Esencia
              </span>
              <h2 className="text-4xl md:text-6xl font-semibold text-apple-text tracking-tight leading-tight">
                Ingeniería local.<br />
                <span className="text-apple-subtext/60">Impacto global.</span>
              </h2>
            </header>

            <div className="space-y-8 text-lg md:text-2xl text-apple-subtext font-light leading-relaxed">
              <p>
                En un mundo lleno de agencias que prometen la luna, nosotros preferimos mantener los pies en la tierra. 
                En <span className="text-apple-text font-medium">Core Studios</span>, entendemos los retos reales de los negocios en Mallorca.
              </p>
              
              <p>
                No solo escribimos código; <span className="italic text-apple-text">diseñamos tiempo</span>. Nuestro objetivo no es llenarte de herramientas complejas, sino construir sistemas invisibles que automaticen el trabajo sucio. 
              </p>
              
              <p>
                Queremos que tu empresa funcione como un reloj suizo, mientras tú recuperas tu calidad de vida y el control sobre lo que realmente importa.
              </p>
            </div>

            <footer className="mt-16 pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-left">
                <p className="text-apple-text font-semibold text-xl mb-1">El equipo de Core Studios.</p>
                <p className="text-apple-subtext text-sm font-light">Comprometidos con la excelencia técnica.</p>
              </div>

              <div className="inline-flex items-center gap-2 text-apple-text font-medium bg-apple-bg px-6 py-3 rounded-full border border-gray-100 shadow-sm transition-transform hover:scale-105">
                <MapPin size={18} className="text-apple-blue" />
                <span className="text-sm">Inca, Mallorca</span>
              </div>
            </footer>
          </div>
        </div>

        {/* Elemento decorativo inferior */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
          <p className="text-apple-subtext/40 text-xs tracking-widest uppercase font-bold">
            Estandarizando el futuro desde el corazón de la isla
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
