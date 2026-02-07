import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-scale-up border border-gray-100">
        <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <h3 className="text-xl font-semibold text-apple-text tracking-tight">Política de Privacidad</h3>
          <button onClick={onClose} className="p-2 bg-apple-bg rounded-full text-apple-subtext hover:bg-gray-200 transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="px-8 py-8 overflow-y-auto text-apple-text/80 leading-relaxed text-sm md:text-base space-y-6">
          <p>Core Studios garantiza la protección de tus datos personales según el RGPD. Recopilamos información únicamente para gestionar tus consultas y servicios contratados.</p>
          <p>Tus datos no serán cedidos a terceros sin tu consentimiento expreso, salvo obligación legal.</p>
        </div>
        <div className="px-8 py-6 bg-gray-50 flex justify-end">
          <button onClick={onClose} className="px-6 py-2 bg-black text-white rounded-full text-sm font-semibold hover:opacity-90">Entendido</button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
