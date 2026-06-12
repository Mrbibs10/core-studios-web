import React from 'react';
import { ViewState } from '../types';
import { MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
  onOpenPrivacy: () => void;
  onOpenCookies: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy, onOpenCookies }) => {
  const navLinks = [
    { label: 'Inicio', action: () => onNavigate(ViewState.HOME) },
    { label: 'Servicios', action: () => onNavigate(ViewState.SERVICES) },
    { label: 'Nosotros', action: () => onNavigate(ViewState.ABOUT) },
    { label: 'Contacto', action: () => onNavigate(ViewState.CONTACT) },
  ];

  const legalLinks = [
    { label: 'Política de Privacidad', action: onOpenPrivacy },
    { label: 'Política de Cookies', action: onOpenCookies },
    { label: 'Términos y Condiciones', action: () => onNavigate(ViewState.TERMS) },
  ];

  return (
    <footer
      aria-label="Pie de página de Core Studios"
      className="bg-white border-t border-gray-100 w-full overflow-hidden relative z-10"
    >
      <div className="container mx-auto px-6 pt-20 pb-10">

        {/* Top: marca + CTA + columnas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Marca */}
          <div className="md:col-span-6 flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-apple-text" aria-hidden="true">
                <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="22" y="20" width="56" height="16" rx="8" />
                  <rect x="22" y="42" width="56" height="16" rx="8" />
                  <rect x="22" y="64" width="56" height="16" rx="8" />
                </svg>
              </div>
              <span className="font-semibold text-xl tracking-tight text-apple-text" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">Core Studios</span>
              </span>
            </div>

            <p className="text-apple-subtext font-light leading-relaxed max-w-sm">
              Automatización, inteligencia artificial y espacios inteligentes.
              Ingeniería que devuelve el tiempo a tu negocio.
            </p>

            <button
              onClick={() => onNavigate(ViewState.CONTACT)}
              className="btn-shine group inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            >
              Empezar un proyecto
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </button>
          </div>

          {/* Navegación */}
          <nav className="md:col-span-2" aria-label="Pie de página - navegación">
            <p className="text-[10px] uppercase tracking-[0.2em] text-apple-subtext/60 font-bold mb-5">Explora</p>
            <ul className="space-y-3 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.action}
                    className="text-sm text-apple-subtext hover:text-apple-text transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav className="md:col-span-2" aria-label="Pie de página - enlaces legales">
            <p className="text-[10px] uppercase tracking-[0.2em] text-apple-subtext/60 font-bold mb-5">Legal</p>
            <ul className="space-y-3 list-none p-0 m-0">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.action}
                    className="text-sm text-apple-subtext hover:text-apple-text transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto / Social */}
          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-apple-subtext/60 font-bold mb-5">Síguenos</p>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <a
                  href="https://www.instagram.com/corestudios"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="Core Studios en Instagram"
                  className="text-sm text-apple-subtext hover:text-apple-blue transition-colors inline-flex items-center gap-1"
                >
                  Instagram <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </li>
              <li>
                <span className="text-sm text-apple-subtext inline-flex items-center gap-1.5">
                  <MapPin size={13} className="text-apple-blue" aria-hidden="true" />
                  <span itemProp="address">Inca, Mallorca</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-fade mb-8" aria-hidden="true"></div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-apple-subtext">
          <span>Core Studios Automations &copy; {new Date().getFullYear()} — Todos los derechos reservados.</span>
          <span className="text-apple-subtext/50 tracking-widest uppercase font-medium text-[10px]">
            Diseñado y desarrollado en Mallorca
          </span>
        </div>
      </div>

      {/* Marca de agua gigante */}
      <div className="relative h-[12vw] md:h-[10vw] max-h-44 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <span className="wordmark-watermark absolute left-1/2 -translate-x-1/2 bottom-[-0.18em] text-[16vw] md:text-[13vw] whitespace-nowrap">
          CORE STUDIOS
        </span>
      </div>
    </footer>
  );
};

export default Footer;
