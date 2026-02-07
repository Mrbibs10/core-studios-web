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
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-apple-bg flex justify-center">
      <div className="container max-w-xl">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-apple-text mb-4 tracking-tight">Hablemos.</h2>
          <p className="text-apple-subtext text-lg">Diseñamos la solución que tu negocio necesita.</p>
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100">
          {isSubmitted ? (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
              <CheckCircle size={64} className="text-green-500" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold text-apple-text">Mensaje Enviado</h3>
              <button onClick={() => setIsSubmitted(false)} className="text-apple-blue font-medium hover:underline">Volver</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-apple-text mb-2 ml-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-apple-bg border border-transparent rounded-2xl px-5 py-4 text-apple-text focus:ring-2 focus:ring-apple-blue/20 outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-apple-text mb-2 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-apple-bg border border-transparent rounded-2xl px-5 py-4 text-apple-text focus:ring-2 focus:ring-apple-blue/20 outline-none transition-all"
                  placeholder="nombre@empresa.com"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-apple-text mb-2 ml-1">Servicio</label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-apple-bg border border-transparent rounded-2xl px-5 py-4 text-apple-text appearance-none focus:ring-2 focus:ring-apple-blue/20 outline-none cursor-pointer transition-all"
                  >
                    <option value="WORKFLOWS">Workflows / IA</option>
                    <option value="WEB">Desarrollo Web</option>
                    <option value="DOMOTICA">Domótica</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-apple-subtext pointer-events-none" size={18} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-apple-text mb-2 ml-1">Mensaje</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-apple-bg border border-transparent rounded-2xl px-5 py-4 text-apple-text focus:ring-2 focus:ring-apple-blue/20 outline-none transition-all resize-none"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 px-1 py-2">
                <input
                  type="checkbox"
                  required
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                  className="mt-1 w-4 h-4 text-apple-blue border-gray-300 rounded focus:ring-apple-blue"
                />
                <label className="text-xs text-apple-subtext leading-tight">
                  He leído y acepto la <button type="button" onClick={() => setShowPrivacy(true)} className="text-apple-blue hover:underline">política de privacidad</button>.
                </label>
              </div>

              <button
                type="submit"
                disabled={!acceptedPrivacy || isLoading}
                className={`w-full font-medium py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-sm
                  ${acceptedPrivacy && !isLoading 
                    ? 'bg-black text-white hover:bg-gray-800 active:scale-95' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
              >
                {isLoading ? <Loader2 size={20} className="animate-spin" /> : <>Enviar <Send size={16} /></>}
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
