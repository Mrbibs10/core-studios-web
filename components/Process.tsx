
import React from 'react';
import { MessageCircle, Cpu, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: "Consultoría",
    text: "Entendemos tu negocio y detectamos cuellos de botella."
  },
  {
    icon: Cpu,
    title: "Diseño del Agente",
    text: "Configuramos tu IA y flujos de trabajo personalizados."
  },
  {
    icon: Rocket,
    title: "Implementación",
    text: "Despliegue rápido y ahorro de tiempo inmediato."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-apple-text dark:text-white mb-4 tracking-tight">Cómo trabajamos.</h2>
          <p className="text-lg text-apple-subtext dark:text-white/40">Un proceso simple diseñado para la máxima eficiencia.</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-gray-200 dark:bg-white/10 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full bg-apple-bg dark:bg-[#1C1C1E] border border-gray-100 dark:border-white/10 flex items-center justify-center text-apple-text dark:text-white group-hover:bg-apple-blue group-hover:text-white transition-all duration-500 shadow-sm group-hover:-translate-y-2 group-hover:shadow-xl">
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                {/* Step Number Badge */}
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-white dark:bg-black border border-gray-100 dark:border-white/10 rounded-full flex items-center justify-center text-[10px] font-bold text-apple-subtext dark:text-white/40">
                  {idx + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-apple-text dark:text-white mb-3 tracking-tight group-hover:text-apple-blue transition-colors">{step.title}</h3>
              <p className="text-apple-subtext dark:text-white/50 max-w-[240px] leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
