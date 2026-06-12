import React from 'react';
import { MessageCircle, Cpu, Rocket } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  { icon: MessageCircle, title: "Consultoría", text: "Entendemos tu negocio y detectamos cuellos de botella." },
  { icon: Cpu, title: "Diseño del Agente", text: "Configuramos tu IA y flujos de trabajo personalizados." },
  { icon: Rocket, title: "Implementación", text: "Despliegue rápido y ahorro de tiempo inmediato." }
];

const delayClasses = ['', 'reveal-delay-1', 'reveal-delay-2'];

function ProcessStep({ step, delay }: { step: typeof steps[0]; delay: string }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal flex flex-col items-center text-center group ${delay}`}>
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-full bg-apple-bg border border-gray-100 flex items-center justify-center text-apple-text group-hover:bg-apple-blue group-hover:text-white group-hover:shadow-[0_16px_40px_-12px_rgba(0,113,227,0.5)] transition-all duration-300 shadow-sm group-hover:-translate-y-2" aria-hidden="true">
          <step.icon size={32} strokeWidth={1.5} />
        </div>
        <div className="absolute -top-1 -right-1 w-7 h-7 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold text-apple-subtext group-hover:text-apple-blue group-hover:border-apple-blue/30 transition-colors" aria-hidden="true">
          {steps.indexOf(step) + 1}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-apple-text mb-3 tracking-tight group-hover:text-apple-blue transition-colors">{step.title}</h3>
      <p className="text-apple-subtext max-w-[240px] leading-relaxed">{step.text}</p>
    </div>
  );
}

const Process: React.FC = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="proceso"
      aria-label="Cómo trabajamos - Proceso de automatización en 3 pasos"
      className="py-32 px-6 bg-white transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl">
        <div ref={headingRef} className="reveal text-center mb-20">
          <span className="text-apple-blue font-semibold tracking-[0.2em] mb-4 inline-block uppercase text-[10px]">
            Metodología
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            <span className="text-gradient-dark">Cómo trabajamos.</span>
          </h2>
          <p className="text-lg text-apple-subtext font-light">Un proceso simple diseñado para la máxima eficiencia.</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          <div className="hidden md:block absolute top-1/4 left-[16%] w-[68%] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10"></div>
          {steps.map((step, idx) => (
            <ProcessStep key={idx} step={step} delay={delayClasses[idx]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
