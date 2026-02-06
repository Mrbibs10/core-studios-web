
import React, { useState } from 'react';
import { WorkflowCardProps, ServiceCategory, ViewState } from '../types';
import { 
  Mail, Sparkles, BarChart3, Package, Lock, Bot, 
  Globe, ShoppingBag, Layout, Lightbulb, Home, Zap, X, Check, Wand2, ChevronDown 
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
    <section className="min-h-screen py-32 px-6 bg-apple-bg dark:bg-[#0A0A0B] transition-colors duration-500 overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header & Sub-navigation */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-semibold text-apple-text dark:text-white mb-4 tracking-tight">Nuestros Servicios.</h2>
            <p className="text-xl text-apple-subtext dark:text-white/40 font-light max-w-md">
              Ecosistemas digitales completos para tu negocio.
            </p>
          </div>

          <div className="flex gap-1 self-center md:self-auto bg-gray-200/50 dark:bg-white/5 p-1 rounded-full backdrop-blur-sm">
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

        {/* Grid Container - Using items-start to prevent stretching of non-expanded cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;
            
            return (
              <div
                key={service.id}
                className={`
                  relative rounded-[32px] transition-all duration-500 ease-in-out flex flex-col overflow-hidden border
                  ${isExpanded 
                    ? 'bg-white dark:bg-[#1C1C1E] shadow-2xl ring-1 ring-apple-blue/20 scale-[1.02] z-10 md:col-span-1' 
                    : service.comingSoon 
                      ? 'bg-gray-100/50 dark:bg-white/5 border-dashed border-gray-200 dark:border-white/10 opacity-70 grayscale-[0.5]' 
                      : 'bg-white dark:bg-[#1C1C1E] shadow-sm hover:shadow-lg border-transparent dark:border-white/5 hover:border-gray-200 dark:hover:border-white/20'
                  }
                `}
              >
                <button
                  onClick={() => toggleService(service.id, service.comingSoon)}
                  disabled={service.comingSoon}
                  className={`p-8 text-left w-full h-full flex flex-col ${service.comingSoon ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl transition-all duration-300 ${isExpanded ? 'bg-apple-blue text-white' : 'bg-apple-bg dark:bg-white/5 text-apple-text dark:text-white group-hover:bg-apple-blue/10'}`}>
                      <service.icon size={28} strokeWidth={1.5} />
                    </div>
                    
                    {service.comingSoon ? (
                      <span className="bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-white/40 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                        <Lock size={10} />
                        Próximamente
                      </span>
                    ) : service.id === 'w-custom' && (
                      <span className="bg-apple-blue/10 text-apple-blue text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                        <Zap size={10} fill="currentColor" />
                        Premium
                      </span>
                    )}
                  </div>

                  <h3 className={`text-xl font-semibold mb-3 ${service.comingSoon ? 'text-gray-400' : 'text-apple-text dark:text-white'}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-base leading-relaxed ${isExpanded ? 'mb-4' : 'mb-8'} transition-all ${service.comingSoon ? 'text-gray-400' : 'text-apple-subtext dark:text-white/40'}`}>
                    {service.description}
                  </p>

                  {!service.comingSoon && (
                    <div className={`flex justify-between items-center w-full pt-6 transition-all border-t border-gray-50 dark:border-white/5 ${isExpanded ? 'opacity-0 h-0 p-0 pointer-events-none' : 'opacity-100'}`}>
                      <span className="text-sm font-medium text-apple-blue">
                        {service.customPricing ? 'Consultar' : 'Ver detalles'}
                      </span>
                      <ChevronDown size={18} className="text-apple-blue" />
                    </div>
                  )}
                </button>

                {/* Expanded Content Area */}
                <div 
                  className={`
                    px-8 overflow-hidden transition-all duration-500 ease-in-out
                    ${isExpanded ? 'max-h-[800px] pb-8 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="pt-4 space-y-6">
                    <p className="text-apple-text/80 dark:text-white/70 leading-relaxed text-sm">
                      {service.longDescription}
                    </p>

                    <div className="bg-apple-bg dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/5">
                      <h4 className="text-[10px] uppercase tracking-wider text-apple-subtext dark:text-white/40 font-bold mb-4">
                        {service.customPricing ? 'Consultoría' : 'Inversión'}
                      </h4>
                      
                      {service.customPricing ? (
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Check size={14} className="mt-1 text-apple-blue" />
                            <p className="text-apple-text dark:text-white text-sm font-medium">Proyecto personalizado</p>
                          </div>
                          <button 
                            onClick={() => onNavigate(ViewState.CONTACT)}
                            className="w-full bg-apple-blue text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors"
                          >
                            Solicitar presupuesto
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-apple-subtext dark:text-white/40">Implementación</span>
                            <span className="font-semibold text-apple-text dark:text-white">{service.priceSetup}€</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-apple-subtext dark:text-white/40">Mantenimiento</span>
                            <span className="font-semibold text-apple-text dark:text-white">{service.priceMonthly}€/mes</span>
                          </div>
                          <button 
                            onClick={() => onNavigate(ViewState.CONTACT)}
                            className="w-full mt-4 bg-black dark:bg-white dark:text-black text-white py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                          >
                            Contratar ahora
                          </button>
                        </div>
                      )}
                    </div>
                    
                    <button 
                      onClick={() => setExpandedServiceId(null)}
                      className="w-full text-xs text-apple-subtext dark:text-white/30 hover:text-apple-text dark:hover:text-white transition-colors py-2"
                    >
                      Cerrar detalles
                    </button>
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
