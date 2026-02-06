
import React, { useState } from 'react';
import { Send, CheckCircle, ChevronDown, Loader2 } from 'lucide-react';
import PrivacyModal from './PrivacyModal';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'WORKFLOWS',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedPrivacy) return;

    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mgolewar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback a mailto si el fetch falla para asegurar que el cliente reciba la consulta
        const serviceLabel = formData.service === 'WORKFLOWS' ? 'Workflows' : 
                             formData.service === 'WEB' ? 'Desarrollo Web' : 'Domótica';
        const body = `Nombre: ${formData.name}%0D%0AServicio: ${serviceLabel}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`;
        window.location.href = `mailto:contacto@corestudios.com?subject=Consulta de ${formData.name} - ${serviceLabel}&body=${body}`;
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="CONTACT" className="min-h-screen pt-32 pb-20 px-6 bg-apple-bg dark:bg-black flex justify-center transition-colors duration-500">
      <div className="container max-w-xl">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-apple-text dark:text-white mb-4 tracking-tight">Hablemos.</h2>
          <p className="text-apple-subtext dark:text-white/40 text-lg">
            Cuéntanos tu reto. Nosotros diseñamos la solución.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1C1C1E] rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-white/10">
          {isSubmitted ? (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
              <CheckCircle size={64} className="text-green-500" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold text-apple-text dark:text-white">Mensaje Enviado</h3>
              <p className="text-apple-subtext dark:text-white/40">Te responderemos en breve.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-apple-blue font-medium hover:underline"
              >
                Volver al formulario
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-apple-text dark:text-white/80 mb-2 ml-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-apple-bg dark:bg-white/5 border border-transparent dark:border-white/5 rounded-2xl px-5 py-4 text-apple-text dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-apple-blue/50 transition-all outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-apple-text dark:text-white/80 mb-2 ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-apple-bg dark:bg-white/5 border border-transparent dark:border-white/5 rounded-2xl px-5 py-4 text-apple-text dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-apple-blue/50 transition-all outline-none"
                  placeholder="nombre@empresa.com"
                />
              </div>

              <div className="relative">
                <label htmlFor="service" className="block text-sm font-medium text-apple-text dark:text-white/80 mb-2 ml-1">Tipo de Servicio</label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-apple-bg dark:bg-white/5 border border-transparent dark:border-white/5 rounded-2xl px-5 py-4 text-apple-text dark:text-white appearance-none focus:ring-2 focus:ring-apple-blue/50 transition-all outline-none cursor-pointer"
                  >
                    <option value="WORKFLOWS">Workflows / Automatización</option>
                    <option value="WEB">Desarrollo Web</option>
                    <option value="DOMOTICA">Domótica / Espacios Inteligentes</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-apple-subtext pointer-events-none" size={18} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-apple-text dark:text-white/80 mb-2 ml-1">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-apple-bg dark:bg-white/5 border border-transparent dark:border-white/5 rounded-2xl px-5 py-4 text-apple-text dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-apple-blue/50 transition-all resize-none outline-none"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>

              {/* GDPR Compliance Checkbox with Modal Trigger */}
              <div className="flex items-start gap-3 px-1 py-2">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    checked={acceptedPrivacy}
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                    className="w-4 h-4 text-apple-blue border-gray-300 dark:border-white/10 rounded focus:ring-apple-blue cursor-pointer"
                  />
                </div>
                <label htmlFor="privacy" className="text-xs text-apple-subtext dark:text-white/40 leading-tight cursor-pointer select-none">
                  He leído y acepto la <button type="button" onClick={() => setShowPrivacy(true)} className="text-apple-blue hover:underline">política de privacidad</button>.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!acceptedPrivacy || isLoading}
                  className={`w-full font-medium py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-sm
                    ${acceptedPrivacy && !isLoading 
                      ? 'bg-black dark:bg-white dark:text-black text-white hover:bg-gray-800 dark:hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95' 
                      : 'bg-gray-200 dark:bg-white/5 text-gray-400 dark:text-white/20 cursor-not-allowed opacity-60'
                    }`}
                >
                  {isLoading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <>
                      Enviar consulta
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
        
        <div className="mt-12 text-center space-y-2">
            <p className="text-apple-subtext dark:text-white/30 text-sm">O contáctanos directamente:</p>
            <p className="text-apple-text dark:text-white font-medium">contacto@corestudios.com</p>
        </div>
      </div>

      {/* Privacy Modal rendering */}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </section>
  );
};

export default Contact;
