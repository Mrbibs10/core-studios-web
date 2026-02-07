import React from 'react';
import { ViewState } from '../types';
import { ChevronRight, Workflow, Bot, Monitor } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const bentoServices = [
    {
      icon: Workflow,
      iconColor: 'text-[#0071e3]',
      bgColor: 'bg-blue-50',
      title: "Automatización",
      text: "Elimina tareas repetitivas. Conectamos tus apps para que tu negocio funcione en piloto automático."
    },
    {
      icon: Bot,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      title: "Inteligencia Artificial",
      text: "Tu segundo cerebro. Asistentes que responden, agendan y venden por ti 24/7."
    },
    {
      icon: Monitor,
      iconColor: 'text-gray-800',
      bgColor: 'bg-gray-100',
      title: "Web Premium",
      text: "Diseño estratégico. No solo hacemos webs bonitas, creamos máquinas de conversión."
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-50/50 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
        
        {/* Badge superior */}
        <div className="inline-block mb-8 animate-fade-in">
          <span className="px-4 py-1.5 rounded-full bg-apple-bg text-[10px] font-bold tracking-[0.2em] text-apple-subtext uppercase border border-gray-100">
            Automatización en Mallorca
          </span>
        </div>

        {/* Headline principal */}
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.05] text-apple-text mb-8 animate-fade-in">
          Transformando empresas.<br />
          <span className="text-apple-subtext/40">Con inteligencia.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-apple-subtext font-light max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '100ms' }}>
          Simplificamos lo complejo. Diseñamos flujos de trabajo que devuelven el tiempo a tu negocio.
        </p>

        {/* Botones de acción principales */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <button 
            onClick={() => onNavigate(ViewState.SERVICES)}
            className="px-10 py-5 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-800 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out active:scale-95 shadow-xl"
          >
            Ver soluciones
          </button>
          
          <button 
            onClick={() => onNavigate(ViewState.CONTACT)}
            className="group flex items-center gap-2 text-apple-blue text-lg font-semibold hover:underline decoration-2 underline-offset-8 transition-all"
          >
            Contactar equipo
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bento Grid de Servicios - Sustituye a los antiguos placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left animate-fade-in" style={{ animationDelay: '300ms' }}>
          {bentoServices.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-[32px] p-10 border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-default"
            >
              <div className={`w-16 h-16 ${service.bgColor} ${service.iconColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-apple-text mb-4 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-[16px] leading-relaxed text-apple-subtext font-light">
                {service.text}
              </p>
              
              <div className="mt-8 pt-8 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button 
                  onClick={() => onNavigate(ViewState.SERVICES)}
                  className="text-sm font-semibold text-apple-blue flex items-center gap-1"
                >
                  Saber más <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
