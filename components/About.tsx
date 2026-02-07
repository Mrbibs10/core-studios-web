import React from 'react';
import { Workflow, Layers, Cpu, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen py-32 px-6 bg-white flex flex-col items-center justify-center transition-colors duration-500">
      <div className="container mx-auto max-w-4xl text-center">
        
        <h2 className="text-4xl md:text-5xl font-semibold text-apple-text mb-6 tracking-tight animate-fade-in">
          Ecosistemas digitales.
        </h2>
        <p className="text-xl text-apple-subtext font-light max-w-2xl mx-auto leading-relaxed mb-16 animate-fade-in">
          Conectamos el software, la web y el espacio físico para que tu empresa funcione con absoluta precisión.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 animate-fade-in">
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-apple-bg flex items-center justify-center mb-6 group-hover:bg-apple-blue group-hover:text-white transition-all duration-300">
              <Workflow size={32} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-semibold text-apple-text mb-3">IA Aplicada</h3>
            <p className="text-apple-subtext font-light leading-relaxed">
              Agentes inteligentes que gestionan tareas repetitivas 24/7.
            </p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-apple-bg flex items-center justify-center mb-6 group-hover:bg-apple-blue group-hover:text-white transition-all duration-300">
              <Layers size={32} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-semibold text-apple-text mb-3">Webs Vivas</h3>
            <p className="text-apple-subtext font-light leading-relaxed">
              Plataformas conectadas directamente a tus procesos internos.
            </p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-apple-bg flex items-center justify-center mb-6 group-hover:bg-apple-blue group-hover:text-white transition-all duration-300">
              <Cpu size={32} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-semibold text-apple-text mb-3">Domótica</h3>
            <p className="text-apple-subtext font-light leading-relaxed">
              Control de consumos y accesos desde la misma arquitectura.
            </p>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-100 flex justify-center animate-fade-in">
          <div className="inline-flex items-center gap-2 text-apple-text font-medium bg-apple-bg px-6 py-3 rounded-full">
            <MapPin size={18} className="text-apple-blue" />
            <span>Tecnología global desde Inca, Mallorca.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
