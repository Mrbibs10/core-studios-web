import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // Move focus to close button on mount
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-scale-up border border-gray-100">

        <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <h3 id="privacy-modal-title" className="text-xl font-semibold text-apple-text tracking-tight">
            Política de Privacidad
          </h3>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Cerrar política de privacidad"
            className="p-2 bg-apple-bg rounded-full text-apple-subtext hover:bg-gray-200 transition-colors"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="px-8 py-8 overflow-y-auto text-apple-text/80 leading-relaxed text-sm md:text-base space-y-6">
          <section>
            <h4 className="font-semibold text-apple-text mb-2">Responsable del tratamiento</h4>
            <p>Core Studios Automations, con sede en Inca, Mallorca (Illes Balears), es el responsable del tratamiento de tus datos personales conforme al Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).</p>
          </section>

          <section>
            <h4 className="font-semibold text-apple-text mb-2">Datos que recopilamos</h4>
            <p>Recopilamos únicamente los datos que nos proporcionas voluntariamente a través del formulario de contacto: nombre, dirección de correo electrónico y el contenido de tu mensaje. No recopilamos datos sensibles.</p>
          </section>

          <section>
            <h4 className="font-semibold text-apple-text mb-2">Finalidad y base legal</h4>
            <p>Tus datos se utilizan exclusivamente para gestionar tu consulta y contactar contigo en relación a los servicios solicitados. La base legal es tu consentimiento expreso al enviar el formulario.</p>
          </section>

          <section>
            <h4 className="font-semibold text-apple-text mb-2">Conservación de datos</h4>
            <p>Conservamos tus datos durante el tiempo necesario para gestionar tu solicitud y, en su caso, la relación contractual posterior, o hasta que solicites su supresión.</p>
          </section>

          <section>
            <h4 className="font-semibold text-apple-text mb-2">Cesión a terceros</h4>
            <p>Tus datos no serán cedidos a terceros sin tu consentimiento expreso, salvo obligación legal. El formulario de contacto utiliza Formspree como procesador de datos, con medidas de seguridad adecuadas.</p>
          </section>

          <section>
            <h4 className="font-semibold text-apple-text mb-2">Tus derechos</h4>
            <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, portabilidad y limitación del tratamiento contactando con nosotros en <span className="text-apple-blue">info@core-studios.es</span>. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).</p>
          </section>
        </div>

        <div className="px-8 py-6 bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-black text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
