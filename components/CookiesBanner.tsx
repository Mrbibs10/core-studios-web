import React from 'react';

interface CookiesBannerProps {
  onAccept: () => void;
  onConfigure: () => void;
}

/**
 * CookiesBanner implementado con estética Apple:
 * - Glassmorphism (backdrop-blur)
 * - Bordes suaves y sombras sutiles
 * - Animación de entrada suave
 */
const CookiesBanner: React.FC<CookiesBannerProps> = ({ onAccept, onConfigure }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-6 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] rounded-[24px] p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base text-apple-text font-medium leading-relaxed">
              Utilizamos cookies para mejorar tu experiencia. 
              <span className="text-apple-subtext font-normal ml-1">
                Al aceptar, permites el uso de analíticas para ayudarnos a mejorar el servicio.
              </span>
            </p>
          </div>
          
          <div className="flex items-center gap-4 shrink-0">
            <button 
              type="button"
              onClick={onConfigure}
              className="text-xs md:text-sm font-medium text-apple-subtext hover:text-apple-text transition-colors px-4 py-2"
            >
              Configurar
            </button>
            <button 
              type="button"
              onClick={onAccept}
              className="bg-black text-white text-xs md:text-sm font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-all active:scale-95 shadow-sm"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesBanner;
