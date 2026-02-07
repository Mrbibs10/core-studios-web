import React, { useState } from 'react';
import { WorkflowCardProps, ServiceCategory, ViewState } from '../types';
import { 
  Mail, Sparkles, BarChart3, Globe, ShoppingBag, Lightbulb, 
  Wand2, ChevronDown, Mic, MessageSquare, LayoutDashboard, Home 
} from 'lucide-react';

const servicesData: WorkflowCardProps[] = [
  // --- WORKFLOWS ---
  {
    id: 'w1',
    category: 'WORKFLOWS',
    title: "Gmail Auto-Replayer",
    description: "Borradores automáticos y etiquetado inteligente.",
    longDescription: "Sistema inteligente que etiqueta correos por prioridad y genera borradores de respuesta automáticamente. Los deja listos para tu revisión final.",
    priceSetup: 800,
    priceMonthly: 40,
    icon: Mail,
    comingSoon: false
  },
  {
    id: 'w2',
    category: 'WORKFLOWS',
    title: "Creador de Contenido IA",
    description: "Posts para RRSS adaptados a tu marca.",
    longDescription: "Generación automatizada de publicaciones adaptadas a la identidad de tu empresa para múltiples plataformas de RRSS.",
    priceSetup: 600,
    priceMonthly: 75,
    icon: Sparkles,
    comingSoon: false
  },
  {
    id: 'w-custom',
    category: 'WORKFLOWS',
    title: "Solución a Medida",
    description: "¿Tienes un proceso complejo? Cuéntanos tu reto y diseñaremos una arquitectura de IA exclusiva.",
    longDescription: "Analizamos tus cuellos de botella específicos y desarrollamos un Agente de IA capaz de resolverlos.",
    customPricing: true,
    icon: Wand2,
    comingSoon: false
  },
  {
    id: 'w3',
    category: 'WORKFLOWS',
    title: "Voice AI Agent",
    description: "Asistente de voz inteligente para llamadas.",
    longDescription: "Agente de voz capaz de agendar citas y resolver dudas frecuentes por teléfono de forma natural.",
    icon: Mic,
    comingSoon: true
  },
  {
    id: 'w4',
    category: 'WORKFLOWS',
    title: "WhatsApp Business IA",
    description: "Atención al cliente 24/7 automatizada.",
    longDescription: "Chatbot avanzado conectado a tu base de datos para responder clientes instantáneamente.",
    icon: MessageSquare,
    comingSoon: true
  },
  // --- WEB ---
  {
    id: 'web1',
    category: 'WEB',
    title: "Web Corporativa",
    description: "Presencia digital rápida, segura y optimizada.",
    longDescription: "Sitios web que transmiten la esencia de tu marca. Optimizados para SEO y carga ultrarrápida.",
    customPricing: true,
    icon: Globe,
    comingSoon: false
  },
  {
    id: 'web2',
    category: 'WEB',
    title: "E-commerce Pro",
    description: "Tiendas online escalables y sin límites.",
    longDescription: "Soluciones de comercio electrónico robustas diseñadas para vender con máxima conversión.",
    customPricing: true,
    icon: ShoppingBag,
    comingSoon: false
  },
  {
    id: 'web3',
    category: 'WEB',
    title: "Dashboard KPI",
    description: "Visualización de datos en tiempo real.",
    longDescription: "Panel de control centralizado para monitorizar todas las métricas de tu negocio.",
    icon: LayoutDashboard,
    comingSoon: true
  },
  // --- DOMOTICA ---
  {
    id: 'dom1',
    category: 'DOMOTICA',
    title: "Oficinas Inteligentes",
    description: "Control de acceso e iluminación automatizada.",
    longDescription: "Moderniza tu espacio. Sistemas que se adaptan a la luz natural y climatización inteligente.",
    customPricing: true,
    icon: Lightbulb,
    comingSoon: false
  },
  {
    id: 'dom2',
    category: 'DOMOTICA',
    title: "Casas Inteligentes",
    description: "Climatización, persianas e iluminación integrada.",
    longDescription: "Transformamos tu hogar en un espacio eficiente y confortable. Control total de persianas, luces y clima desde una única interfaz intuitiva.",
    customPricing: true,
    icon: Home,
    comingSoon: false
  }
];

interface ServicesProps {
  onNavigate: (view: ViewState, service?: ServiceCategory) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('WORKFLOWS');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'WORKFLOWS', label: 'Workflows' },
    { id: 'WEB', label: 'Desarrollo Web' },
    { id: 'DOMOTICA', label: 'Domótica' },
  ];

  const filteredServices = servicesData.filter(service => service.category === activeCategory);

  const toggleService = (id: string, comingSoon?: boolean) => {
    if (comingSoon) return;
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <section className="min-h-screen py-32 px-6 bg-apple-bg transition-colors duration-500 overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-semibold text-apple-text mb-4 tracking-tight">Nuestros Servicios.</h2>
            <p className="text-xl text-apple-subtext font-light max-w-md">
              Ecosistemas digitales completos para tu negocio.
            </p>
          </div>

          <div className="flex gap-1 self-center md:self-auto bg-gray-200/50 p-1 rounded-full backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setExpandedServiceId(null);
                }}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === cat.id 
                    ? 'bg-white text-apple-text shadow-sm' 
                    : 'text-apple-subtext hover:text-apple-text'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;
            
            return (
              <div
                key={service.id}
                className={`
                  relative rounded-[32px] transition-all duration-500 ease-in-out flex flex-col overflow-hidden border
                  ${isExpanded 
                    ? 'bg-white shadow-2xl ring-1 ring-apple-blue/10 scale-[1.02] z-10' 
                    : 'bg-white shadow-sm border-transparent'
                  }
                  ${service.comingSoon ? 'opacity-70 grayscale-[0.5]' : 'hover:shadow-lg hover:border-gray-200'}
                `}
              >
                <button
                  onClick={() => toggleService(service.id, service.comingSoon)}
                  disabled={service.comingSoon}
                  className={`p-8 text-left w-full h-full flex flex-col ${service.comingSoon ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl transition-all duration-300 ${isExpanded ? 'bg-apple-blue text-white' : 'bg-apple-bg text-apple-text'}`}>
                      <service.icon size={28} strokeWidth={1.5} />
                    </div>
                    {service.comingSoon && (
                      <span className="bg-gray-100 text-apple-subtext text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Próximamente
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-apple-text">
                    {service.title}
                  </h3>
                  
                  <p className={`text-base leading-relaxed ${isExpanded ? 'mb-4' : 'mb-8'} transition-all text-apple-subtext`}>
                    {service.description}
                  </p>

                  {!service.comingSoon && (
                    <div className={`flex justify-between items-center w-full pt-6 transition-all border-t border-gray-50 ${isExpanded ? 'opacity-0 h-0 p-0 pointer-events-none' : 'opacity-100'}`}>
                      <span className="text-sm font-medium text-apple-blue">
                        {service.customPricing ? 'Consultar' : 'Ver detalles'}
                      </span>
                      <ChevronDown size={18} className="text-apple-blue" />
                    </div>
                  )}
                </button>

                <div className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[800px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-4 space-y-6">
                    <p className="text-apple-text/80 leading-relaxed text-sm">
                      {service.longDescription}
                    </p>

                    <div className="bg-apple-bg rounded-2xl p-6 border border-gray-100">
                      <h4 className="text-[10px] uppercase tracking-wider text-apple-subtext font-bold mb-4">
                        Inversión
                      </h4>
                      
                      {service.customPricing ? (
                        <button 
                          onClick={() => onNavigate(ViewState.CONTACT, service.category)}
                          className="w-full bg-apple-blue text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors"
                        >
                          Solicitar presupuesto
                        </button>
                      ) : (
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-apple-subtext">Implementación</span>
                            <span className="font-semibold text-apple-text">{service.priceSetup}€</span>
                          </div>
                          {service.priceMonthly && (
                            <div className="flex justify-between items-center pt-2 border-t border-gray-200/40">
                              <span className="text-xs text-apple-subtext">Mantenimiento mensual</span>
                              <span className="font-semibold text-apple-text">{service.priceMonthly}€/mes</span>
                            </div>
                          )}
                          <button 
                            onClick={() => onNavigate(ViewState.CONTACT, service.category)}
                            className="w-full mt-4 bg-black text-white py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                          >
                            Contratar ahora
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
