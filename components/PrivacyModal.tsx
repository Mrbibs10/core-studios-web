
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ onClose }) => {
  // Prevenir scroll en el cuerpo cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#1C1C1E] rounded-[32px] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-scale-up border border-gray-100 dark:border-white/10">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 dark:border-white/5 flex justify-between items-center bg-white/50 dark:bg-[#1C1C1E]/50 backdrop-blur-sm sticky top-0 z-10">
          <h3 className="text-xl font-semibold text-apple-text dark:text-white tracking-tight">Política de Privacidad</h3>
          <button 
            onClick={onClose}
            className="p-2 bg-apple-bg dark:bg-white/10 rounded-full text-apple-subtext dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-8 overflow-y-auto text-apple-text/80 dark:text-white/60 leading-relaxed text-sm md:text-base space-y-6">
          <section>
            <h4 className="text-apple-text dark:text-white font-semibold mb-2">1. Información General</h4>
            <p>
              En cumplimiento con el Reglamento General de Protección de Datos (RGPD), Core Studios informa a los usuarios que la privacidad y protección de sus datos es nuestra prioridad absoluta. Esta política explica cómo recopilamos y tratamos su información.
            </p>
          </section>

          <section>
            <h4 className="text-apple-text dark:text-white font-semibold mb-2">2. Datos Recopilados</h4>
            <p>
              Únicamente recopilamos los datos estrictamente necesarios para gestionar su consulta a través de nuestro formulario: nombre, dirección de correo electrónico, tipo de servicio solicitado y el mensaje que usted decida enviarnos.
            </p>
          </section>

          <section>
            <h4 className="text-apple-text dark:text-white font-semibold mb-2">3. Finalidad del Tratamiento</h4>
            <p>
              Sus datos serán utilizados exclusivamente para responder a su solicitud de información, enviarle presupuestos personalizados o gestionar la prestación de servicios tecnológicos contratados. No utilizamos sus datos para envío masivo de publicidad no solicitada.
            </p>
          </section>

          <section>
            <h4 className="text-apple-text dark:text-white font-semibold mb-2">4. Conservación y Seguridad</h4>
            <p>
              Sus datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados o mientras existan obligaciones legales. Implementamos medidas de seguridad técnicas y organizativas para proteger su información contra accesos no autorizados.
            </p>
          </section>

          <section>
            <h4 className="text-apple-text dark:text-white font-semibold mb-2">5. Sus Derechos</h4>
            <p>
              Como usuario, tiene derecho a acceder, rectificar, suprimir u oponerse al tratamiento de sus datos. Puede ejercer estos derechos enviando un correo electrónico a <strong>contacto@corestudios.com</strong> adjuntando una copia de su documento de identidad si fuera necesario para su validación.
            </p>
          </section>

          <section className="pt-4 border-t border-gray-100 dark:border-white/5 italic text-xs">
            Última actualización: Mayo 2024. Core Studios Automations, Inca, Mallorca.
          </section>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 dark:bg-white/[0.02] flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-black dark:bg-white dark:text-black text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
