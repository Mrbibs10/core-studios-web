import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, ChevronDown, Loader2, AlertCircle } from 'lucide-react';
import PrivacyModal from './PrivacyModal';

type ServiceCategory = 'WORKFLOWS' | 'WEB' | 'DOMOTICA';

interface ContactProps {
  initialService?: ServiceCategory;
}

const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || 'WORKFLOWS',
    message: ''
  });

  // 🔴 PEGA TU ENLACE AQUÍ (ej: https://formspree.io/f/mgolewar)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgolewar"; 

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedPrivacy) return;
    
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData(prev => ({ ...prev, message: '' })); 
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Error enviando formulario:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen pt-32 pb-20 px-6 bg-[#F5F5F7] flex justify-center">
      <div className="container max-w-xl">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">Hablemos.</h2>
          <p className="text-[#86868b] text-lg">Diseñamos la solución que tu negocio necesita.</p>
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-200">
          {isSubmitted ? (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle size={48} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">Mensaje Enviado</h3>
                <p className="text-[#86868b]">Gracias por contactar. Te responderemos muy pronto.</p>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)} 
                className="text-[#0066CC] font-medium hover:underline mt-4"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-2 ml-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F7] border border-transparent rounded-2xl px-5 py-4 text-[#1d1d1f] focus:ring-2 focus:ring-[#0066CC]/20 focus:bg-white outline-none transition-all placeholder-gray-400"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-2 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F7] border border-transparent rounded-2xl px-5 py-4 text-[#1d1d1f] focus:ring-2 focus:ring-[#0066CC]/20 focus:bg-white outline-none transition-all placeholder-gray-400"
                  placeholder="nombre@empresa.com"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-[#1d1d1f] mb-2 ml-1">Servicio</label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#F5F5F7] border border-transparent rounded-2xl px-5 py-4 text-[#1d1d1f] appearance-none focus:ring-2 focus:ring-[#0066CC]/20 focus:bg-white outline-none cursor-pointer transition-all"
                  >
                    <option value="WORKFLOWS">Workflows / IA</option>
                    <option value="WEB">Desarrollo Web</option>
                    <option value="DOMOTICA">Domótica</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#86868b] pointer-events-none" size={18} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-2 ml-1">Mensaje</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F7] border border-transparent rounded-2xl px-5 py-4 text-[#1d1d1f] focus:ring-2 focus:ring-[#0066CC]/20 focus:bg-white outline-none transition-all resize-none placeholder-gray-400"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 px-1 py-2">
                <input
                  type="checkbox"
                  required
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#1d1d1f] border-gray-300 rounded focus:ring-[#1d1d1f] cursor-pointer"
                />
                <label className="text-xs text-[#86868b] leading-tight">
                  He leído y acepto la <button type="button" onClick={() => setShowPrivacy(true)} className="text-[#0066CC] hover:underline">política de privacidad</button>.
                </label>
              </div>

              {isError && (
                <div className="flex items-center gap-2 text-red-500 text-sm justify-center bg-red-50 p-3 rounded-xl border border-red-100">
                  <AlertCircle size={16} />
                  <span>Hubo un error al enviar. Por favor, inténtalo de nuevo.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={!acceptedPrivacy || isLoading}
                className={`w-full font-medium py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-sm text-lg
                  ${acceptedPrivacy && !isLoading 
                    ? 'bg-[#1d1d1f] text-white hover:bg-black hover:scale-[1.02] active:scale-[0.98]' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
              >
                {isLoading ? <Loader2 size={24} className="animate-spin" /> : <>Enviar <Send size={18} className="ml-1" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </section>
  );
};

export default Contact;
