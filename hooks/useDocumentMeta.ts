import { useEffect } from 'react';
import { ViewState } from '../types';

interface MetaConfig {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

const META: Record<ViewState, MetaConfig> = {
  [ViewState.HOME]: {
    title: 'Core Studios | Automatización e IA para Empresas en Mallorca',
    description:
      'Agencia de automatización con IA en Mallorca. Optimizamos tu negocio con workflows inteligentes, chatbots, agentes de voz y desarrollo web. Inca, Mallorca.',
    ogTitle: 'Core Studios | Automatización e IA para Empresas en Mallorca',
    ogDescription:
      'Transformamos tu negocio con Automatización, Inteligencia Artificial y Desarrollo Web. Flujos de trabajo que ahorran tiempo y dinero. Inca, Mallorca.',
  },
  [ViewState.SERVICES]: {
    title: 'Servicios | Core Studios — Automatización, Web y Domótica en Mallorca',
    description:
      'Workflows de IA, desarrollo web premium y domótica inteligente para empresas en Mallorca. Consulta nuestros servicios y precios.',
    ogTitle: 'Servicios de Core Studios — Automatización, Web y Domótica',
    ogDescription:
      'Explora nuestros servicios: automatización con IA, webs corporativas, e-commerce y domótica KNX para empresas en Mallorca.',
  },
  [ViewState.ABOUT]: {
    title: 'Nosotros | Core Studios — Ingeniería local, impacto global',
    description:
      'Conoce al equipo de Core Studios, agencia de automatización e IA con sede en Inca, Mallorca. Comprometidos con la excelencia técnica.',
    ogTitle: 'Nosotros | Core Studios — Equipo de automatización en Mallorca',
    ogDescription:
      'Somos Core Studios. Automatizamos procesos, diseñamos webs y creamos espacios inteligentes desde el corazón de Mallorca.',
  },
  [ViewState.CONTACT]: {
    title: 'Contacto | Core Studios — Consulta gratuita',
    description:
      'Solicita una consulta gratuita. Analizamos tu negocio y proponemos soluciones de automatización e IA a medida. Respuesta en menos de 24h.',
    ogTitle: 'Contacta con Core Studios — Consulta gratuita',
    ogDescription:
      'Cuéntanos tu reto y te proponemos una solución de automatización personalizada. Sin compromiso.',
  },
  [ViewState.TERMS]: {
    title: 'Términos y Condiciones | Core Studios',
    description: 'Términos y condiciones de uso de los servicios de Core Studios Automations.',
    ogTitle: 'Términos y Condiciones | Core Studios',
    ogDescription: 'Términos y condiciones de uso de los servicios de Core Studios Automations.',
  },
  [ViewState.PRIVACY]: {
    title: 'Política de Privacidad | Core Studios',
    description:
      'Política de privacidad y protección de datos de Core Studios Automations, conforme al RGPD.',
    ogTitle: 'Política de Privacidad | Core Studios',
    ogDescription:
      'Información sobre cómo Core Studios gestiona y protege tus datos personales conforme al RGPD.',
  },
};

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  const el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (el) el.setAttribute('content', content);
}

export function useDocumentMeta(view: ViewState) {
  useEffect(() => {
    const config = META[view];
    document.title = config.title;
    setMeta('description', config.description);
    setMeta('og:title', config.ogTitle, 'property');
    setMeta('og:description', config.ogDescription, 'property');
    setMeta('twitter:title', config.ogTitle);
    setMeta('twitter:description', config.ogDescription);
  }, [view]);
}
