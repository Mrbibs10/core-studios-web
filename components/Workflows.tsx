import React, { useState, useEffect, useRef } from 'react';
import { WorkflowCardProps, ServiceCategory, ViewState } from '../types';
import { 
  Mail, Sparkles, BarChart3, Package, Lock, Bot, 
  Globe, ShoppingBag, Layout, Lightbulb, Home, Zap, X, Check, Wand2 
} from 'lucide-react';

const servicesData: WorkflowCardProps[] = [
  // WORKFLOWS
  {
    id: 'w1',
    category: 'WORKFLOWS',
    title: "Gmail Auto-Replayer",
    description: "Borradores automáticos y etiquetado inteligente.",
    longDescription: "Sistema inteligente que etiqueta correos por prioridad y genera borradores de respuesta automáticamente en varios idiomas. Los deja listos en tu carpeta de borradores para tu revisión final, ahorrando horas de gestión de email diaria.",
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
    longDescription: "Generación automatizada de publicaciones adaptadas a la identidad de tu empresa para múltiples plataformas de RRSS. Ahorra horas de redacción y diseño mensual manteniendo una presencia digital constante y profesional.",
    priceSetup: 600,
    priceMonthly: 75,
    icon: Sparkles,
    comingSoon: false
  },
  {
    id: 'w-custom',
    category: 'WORKFLOWS',
    title: "Solución a Medida",
    description: "¿Tienes un proceso complejo? Cuéntanos tu reto y diseñaremos una arquitectura de IA exclusiva para ti.",
    longDescription: "No todas las empresas funcionan igual. Analizamos tus cuellos de botella específicos y desarrollamos un Agente de IA capaz de resolverlos. Si puedes imaginar el flujo, podemos automatizarlo.",
    customPricing: true,
    icon: Wand2,
    comingSoon: false
  },
  {
    id: 'w3',
    category: 'WORKFLOWS',
    title: "Analítica de Ventas Pro",
    description: "Dashboards predictivos en tiempo real.",
    icon: BarChart3,
    comingSoon: true
  },
  {
    id: 'w4',
    category: 'WORKFLOWS',
    title: "Gestión de Inventario Smart",
    description: "Sincronización multi-almacén con IA.",
    icon: Package,
    comingSoon: true
  },
  {
    id: 'w5',
    category: 'WORKFLOWS',
    title: "Chatbot Soporte 24/7",
    description: "Resolución de dudas automática.",
    icon: Bot,
    comingSoon: true
  },

  // DESARROLLO WEB
  {
    id: 'web1',
    category: 'WEB',
    title: "Web Corporativa",
    description: "Presencia digital rápida, segura y optimizada.",
    longDescription: "Desarrollamos sitios web corporativos que transmiten la esencia de tu marca. Optimizados para SEO, con tiempos de carga ultrarrápidos y diseño responsive adaptado a todos los dispositivos. Incluye gestión de contenidos fácil para que tengas el control.",
    customPricing: true,
    icon: Globe,
    comingSoon: false
  },
  {
    id: 'web2',
    category: 'WEB',
    title: "E-commerce Personalizado",
    description: "Tiendas online escalables y sin límites.",
    longDescription: "Soluciones de comercio electrónico robustas diseñadas para vender. Integración con pasarelas de pago locales e internacionales, gestión de inventario sincronizada y experiencias de usuario diseñadas para maximizar la conversión.",
    customPricing: true,
    icon: ShoppingBag,
    comingSoon: false
  },
  {
    id: 'web3',
    category: 'WEB',
    title: "Landing Page de Campaña",
    description: "Páginas de alto impacto para conversión.",
    longDescription: "Páginas de aterrizaje diseñadas específicamente para campañas de marketing. Estructura persuasiva, llamadas a la acción claras y tests A/B integrados para captar leads o ventas directas de la forma más eficiente.",
    customPricing: true,
    icon: Layout,
    comingSoon: false
  },

  // DOMÓTICA
  {
    id: 'dom1',
    category: 'DOMOTICA',
    title: "Oficinas Inteligentes",
    description: "Control de acceso e iluminación automatizada.",
    longDescription: "Moderniza tu espacio de trabajo. Sistemas de iluminación que se adaptan a la luz natural, control de accesos biométrico y climatización inteligente que se activa según la ocupación de las salas. Eficiencia y seguridad en un solo sistema.",
    customPricing: true,
    icon: Lightbulb,
    comingSoon: false
  },
  {
    id: 'dom2',
    category: 'DOMOTICA',
    title: "Hogares Conectados",
    description: "Confort centralizado en tu mano.",
    longDescription: "Integra persianas, luces, música y seguridad en una sola interfaz. Creamos 'escenas' personalizadas (ej: Modo Cine, Modo Noche) que ajustan toda tu casa con un solo toque o comando de voz.",
    customPricing: true,
    icon: Home,
    comingSoon: false
  },
  {
    id: 'dom3',
    category: 'DOMOTICA',
    title: "Automatización Energética",
    description: "Ahorro inteligente y gestión solar.",
    longDescription: "Optimiza el consumo energético de tu empresa o vivienda. Integración con placas solares para encender electrodomésticos o maquinaria cuando la producción es máxima, reduciendo drásticamente la factura eléctrica.",
    customPricing: true,
    icon: Zap,
    comingSoon: true
  }
];

interface ServicesProps {
  onNavigate: (view: ViewState) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('WORKFLOWS');
  const [selectedService, setSelectedService] = useState<WorkflowCardProps | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'WORKFLOWS', label: 'Workflows' },
    { id: 'WEB', label: 'Desarrollo Web' },
    { id: 'DOMOTICA', label: 'Domótica' },
  ];

  const filteredServices = servicesData.filter(service => service.category === activeCategory);

  const handleCardClick = (service: WorkflowCardProps) => {
    if (!service.comingSoon) {
      setSelectedService(service);
    }
  };

  useEffect(() => {
    if (!selectedService) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const modal = modalRef.current;
    if (!modal) return;
    let scrollTimeout: number;
    const handleScroll = () => {
      modal.classList.add('scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        modal.classList.remove('scrolling');
      }, 800);
    };
    modal.addEventListener('scroll', handleScroll);
    return () => {
      document.body.style.overflow = '';
      modal.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [selectedService]);

  return (
    <section className="min-h-screen py-32 px-6 bg-apple-bg dark:bg-[#0A0A0B] transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header & Sub-navigation */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-semibold text-apple-text dark:text-white mb-4 tracking-tight">Nuestros Servicios.</h2>
            <p className="text-xl text-apple-subtext dark:text-white/40 font-light max-w-md">
              Ecosistemas digitales completos para tu negocio.
            </p>
          </div>

          {/* Invisible Category Switcher */}
          <div className="flex gap-1 self-center md:self-auto bg-gray-200/50 dark:bg-white/5 p-1 rounded-full backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === cat.id 
                    ? 'bg-white dark:bg-white/10 text-apple-text dark:text-white shadow-sm' 
                    : 'text-apple-subtext dark:text-white/40 hover:text-apple-text dark:hover:text-white'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <button
              key={service.id}
              onClick={() => handleCardClick(service)}
              disabled={service.comingSoon}
              className={`
                relative p-8 rounded-[32px] text-left transition-all duration-300 ease-out flex flex-col h-full min-h-[300px]
                ${service.comingSoon 
                  ? 'bg-gray-100/50 dark:bg-white/5 border-2 border-dashed border-gray-200 dark:border-white/10 cursor-default opacity-70 grayscale-[0.5]' 
                  : `bg-white dark:bg-[#1C1C1E] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 border ${service.id === 'w-custom' ? 'border-apple-blue/20 dark:border-apple-blue/30' : 'border-transparent dark:border-white/5'} hover:border-gray-100 dark:hover:border-white/20 cursor-pointer group`
                }
              `}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${service.comingSoon ? 'bg-gray-200/50 dark:bg-white/5 text-gray-400' : 'bg-apple-bg dark:bg-white/5 text-apple-text dark:text-white group-hover:text-apple-blue group-hover:bg-blue-50 dark:group-hover:bg-apple-blue/10'} transition-all`}>
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                
                {service.comingSoon && (
                  <span className="bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-white/40 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                    <Lock size={10} />
                    Próximamente
                  </span>
                )}

                {service.id === 'w-custom' && (
                  <span className="bg-apple-blue/10 text-apple-blue text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                    <Zap size={10} fill="currentColor" />
                    Premium
                  </span>
                )}
              </div>

              <h3 className={`text-xl font-semibold mb-3 ${service.comingSoon ? 'text-gray-400' : 'text-apple-text dark:text-white'}`}>
                {service.title}
              </h3>
              
              <p className={`text-base leading-relaxed mb-8 flex-grow ${service.comingSoon ? 'text-gray-400' : 'text-apple-subtext dark:text-white/40'}`}>
                {service.description}
              </p>

              {!service.comingSoon && (
                <div className="flex justify-between items-center mt-auto w-full pt-6 border-t border-gray-50 dark:border-white/5">
                  <span className="text-sm font-medium text-apple-blue group-hover:translate-x-1 transition-transform">
                    {service.customPricing ? 'Consultar proyecto' : 'Ver precios'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-apple-bg dark:bg-white/10 flex items-center justify-center text-apple-text dark:text-white group-hover:bg-apple-blue group-hover:text-white transition-all shadow-sm">
                    <span className="text-xl leading-none mb-1">+</span>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] grid place-items-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xl transition-opacity animate-fade-in"
            onClick={() => setSelectedService(null)}
          ></div>
          
          <div 
            ref={modalRef}
            className="relative bg-white dark:bg-[#1C1C1E] rounded-[40px] shadow-[0_32px_128px_rgba(0,0,0,0.3)] dark:shadow-none w-full max-w-2xl p-8 md:p-14 overflow-hidden animate-scale-up max-h-[90vh] overflow-y-auto z-10 border dark:border-white/10"
          >
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-8 right-8 w-10 h-10 bg-apple-bg dark:bg-white/10 rounded-full flex items-center justify-center text-apple-subtext dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors z-20"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-5 mb-8">
              <div className="p-4 bg-apple-blue/10 text-apple-blue rounded-[24px]">
                <selectedService.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-apple-text dark:text-white tracking-tight">
                {selectedService.id === 'w-custom' ? 'Tu Desafío Tecnológico' : selectedService.title}
              </h3>
            </div>

            <p className="text-xl text-apple-text dark:text-white/80 leading-relaxed mb-10 border-b border-gray-100 dark:border-white/5 pb-10">
              {selectedService.longDescription}
            </p>

            <div className="bg-apple-bg dark:bg-white/5 rounded-[32px] p-8 md:p-10 border border-gray-100 dark:border-white/5 shadow-inner">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-apple-subtext dark:text-white/40 font-bold mb-8">
                {selectedService.id === 'w-custom' ? 'Consultoría Gratuita' : 'Inversión Estimada'}
              </h4>
              
              {selectedService.customPricing ? (
                <div className="flex flex-col gap-6">
                   <div className="flex items-start gap-4">
                      <div className="mt-1 p-1 bg-apple-blue text-white rounded-full">
                        <Check size={16} />
                      </div>
                      <p className="text-apple-text dark:text-white font-semibold text-xl">
                        {selectedService.id === 'w-custom' ? 'Presupuesto bajo análisis' : 'Proyecto a medida'}
                      </p>
                   </div>
                   <p className="text-apple-subtext dark:text-white/40 text-base leading-relaxed pl-10">
                     {selectedService.id === 'w-custom' 
                       ? "Analizamos tus cuellos de botella específicos y desarrollamos un Agente de IA capaz de resolverlos. Diseñamos una arquitectura escalable desde cero."
                       : "Analizamos tus requerimientos técnicos para ofrecerte un presupuesto ajustado y escalable."
                     }
                   </p>
                   <div className="pl-10 pt-2">
                      <button 
                        onClick={() => {
                          setSelectedService(null);
                          onNavigate(ViewState.CONTACT);
                        }}
                        className="bg-apple-blue text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-600 transition-all shadow-md active:scale-95"
                      >
                        {selectedService.id === 'w-custom' ? 'Plantear mi Reto' : 'Hablar con un experto'} &rarr;
                      </button>
                   </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div>
                      <span className="block text-apple-text dark:text-white font-semibold text-xl">Implementación</span>
                      <span className="text-sm text-apple-subtext dark:text-white/40">Configuración inicial y despliegue total.</span>
                    </div>
                    <div className="text-3xl font-bold text-apple-text dark:text-white tabular-nums">
                      {selectedService.priceSetup}€
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-200 dark:bg-white/10"></div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div>
                      <span className="block text-apple-text dark:text-white font-semibold text-xl">Mantenimiento</span>
                      <span className="text-sm text-apple-subtext dark:text-white/40">Soporte, optimización y hosting IA.</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-apple-text dark:text-white tabular-nums">{selectedService.priceMonthly}€</span>
                      <span className="text-sm text-apple-subtext dark:text-white/40 font-medium">/mes</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-[10px] text-apple-subtext dark:text-white/30 max-w-[240px] leading-relaxed text-center sm:text-left">
                * Precios orientativos. IVA no incluido. Sujeto a revisión técnica.
              </p>
              <button 
                 onClick={() => setSelectedService(null)}
                 className="w-full sm:w-auto px-10 py-4 bg-black dark:bg-white dark:text-black text-white rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all active:scale-95 shadow-xl"
              >
                Cerrar Detalles
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;