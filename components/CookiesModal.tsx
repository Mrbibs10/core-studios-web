import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface CookiesModalProps {
  onClose: () => void;
}

const CookiesModal: React.FC<CookiesModalProps> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-scale-up border border-gray-100">
        <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <h3 className="text-xl font-semibold text-apple-text tracking-tight">Preferencias de Cookies</h3>
          <button onClick={onClose} className="p-2 bg-apple-bg rounded-full text-apple-subtext hover:bg-gray-200 transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="px-8 py-8 overflow-y-auto text-apple-text/80 leading-relaxed text-sm md:text-base space-y-6">
          <section>
            <h4 className="font-semibold text-apple-text mb-2">¿Qué son las cookies?</h4>
            <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo para recordar tus preferencias, mejorar el rendimiento y analizar cómo interactúas con el sitio.</p>
          </section>

          <section>
            <h4 className="font-semibold text-apple-text mb-2">Cookies Técnicas (Necesarias)</h4>
            <p>Son esenciales para que el sitio funcione correctamente. Permiten la navegación y el uso de las diferentes opciones o servicios que en ella existen.</p>
          </section>

          <section>
            <h4 className="font-semibold text-apple-text mb-2">Cookies Analíticas</h4>
            <p>Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios de nuestra web.</p>
          </section>

          <section>
            <h4 className="font-semibold text-apple-text mb-2">Cómo desactivarlas</h4>
            <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador (Chrome, Safari, Firefox, Edge).</p>
          </section>
        </div>
        <div className="px-8 py-6 bg-gray-50 flex justify-end">
          <button onClick={onClose} className="px-8 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesModal;
