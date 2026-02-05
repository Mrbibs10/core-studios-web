
import React from 'react';
import { Workflow, Layers, Cpu, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen py-32 px-6 bg-white dark:bg-black flex flex-col items-center justify-center transition-colors duration-500">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold text-apple-text dark:text-white mb-6 tracking-tight">
            Ecosistemas digitales.
          </h2>
          <p className="text-xl text-apple-subtext dark:text-white/40 font-light max-w-2xl mx-auto leading-relaxed">
            Conectamos el software, la web y el espacio físico para que tu empresa funcione como un reloj suizo.
          </p>
        </div>

        {/* Intro Description: Who, Where, What */}
        <div className="max-w-3xl mx-auto text-center mb-24 pb-12 border-b border-gray-100 dark:border-white/10 animate-fade-in">
           <p className="text-2xl text-apple-text dark:text-white font-medium leading-relaxed mb-4">
             Somos <span className="text-apple-blue">Core Studios</span>, tu partner tecnológico integral con base en <span className="font-semibold">Inca</span>.
           </p>
           <p className="text-lg text-apple-subtext dark:text-white/50 font-light leading-relaxed">
             Nosotros unificamos tu presencia online (Web), tus procesos internos (Workflows) y tus espacios físicos (Domótica) en una sola estrategia coherente.
           </p>
        </div>

        {/* Content Pillars */}
        <div className="space-y-20">
          
          {/* 1. Software (Workflows) */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-apple-bg dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-apple-blue group-hover:text-white group-hover:-translate-y-1 transition-all duration-500">
              <Workflow size={32} strokeWidth={1} className="text-apple-text dark:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-semibold text-apple-text dark:text-white mb-4">Inteligencia de Procesos</h3>
            <p className="text-lg text-apple-subtext dark:text-white/40 font-light max-w-lg leading-relaxed">
              Nuestro Agente de IA Personal analiza tus datos y gestiona tareas repetitivas, liberando a tu equipo para la creatividad.
            </p>
          </div>

          {/* 2. Web & Digital Presence */}
          <div className="flex flex-col items-center text-center group">
             <div className="w-16 h-16 rounded-full bg-apple-bg dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-apple-blue group-hover:text-white group-hover:-translate-y-1 transition-all duration-500">
              <Layers size={32} strokeWidth={1} className="text-apple-text dark:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-semibold text-apple-text dark:text-white mb-4">Experiencias Web</h3>
            <p className="text-lg text-apple-subtext dark:text-white/40 font-light max-w-lg leading-relaxed">
              Desarrollamos plataformas vivas conectadas a tus procesos. Tu web no es solo un escaparate, es una herramienta de ventas automatizada.
            </p>
          </div>

          {/* 3. Hardware (Domotics) */}
          <div className="flex flex-col items-center text-center group">
             <div className="w-16 h-16 rounded-full bg-apple-bg dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-apple-blue group-hover:text-white group-hover:-translate-y-1 transition-all duration-500">
              <Cpu size={32} strokeWidth={1} className="text-apple-text dark:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-semibold text-apple-text dark:text-white mb-4">Espacios Inteligentes</h3>
            <p className="text-lg text-apple-subtext dark:text-white/40 font-light max-w-lg leading-relaxed">
              Eficiencia física a través de la domótica. Controlamos accesos y consumos para que tu espacio sea tan inteligente como tu software.
            </p>
          </div>

        </div>

        {/* Closing Local Touch */}
        <div className="mt-24 pt-12 border-t border-gray-100 dark:border-white/10 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center gap-2 text-apple-text dark:text-white font-medium text-lg bg-apple-bg dark:bg-white/5 px-6 py-3 rounded-full">
            <MapPin size={18} strokeWidth={2} className="text-apple-blue" />
            <span>Tecnología global aplicada localmente en Mallorca.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
