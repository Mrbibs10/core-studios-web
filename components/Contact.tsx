import React, { useState } from 'react';
import { Send, CheckCircle, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'WORKFLOWS',
    message: ''
  });

  // Tu enlace configurado:
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgolewar";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('service', formData.service);
    data.append('message', formData.message);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'WORKFLOWS', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="CONTACT" className="min-h-screen pt-32 pb-20 px-6 bg-black text-white flex justify-center">
      <div className="container max-w-xl">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-white mb-4 tracking-tight">Hablemos.</h2>
          <p className="text-gray-400 text-lg">
            Cuéntanos tu reto. Nosotros diseñamos la solución.
          </p>
        </div>

        <div className="bg-[#1C1C1E] rounded-[40px] p-8 md:p-12 shadow-sm border border-white/10">
          {status === 'success' ? (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
              <CheckCircle size={64} className="text-green-500" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold text-white">Mensaje Enviado</h3>
              <p className="text-gray-400">Gracias por contactar. Te responderemos en breve.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-blue-400 font-medium hover:underline mt-4"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2 ml-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2 ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none"
                  placeholder="nombre@empresa.com"
                />
              </div>

              <div className="relative">
                <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2 ml-1">Tipo de Servicio</label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white appearance-none focus:ring-2 focus:ring-blue-500/50 transition-all outline-none cursor-pointer"
                  >
                    <option value="WORKFLOWS" className="bg-gray-900">Workflows / Automatización</option>
                    <option value="WEB" className="bg-gray-900">Desarrollo Web</option>
                    <option value="DOMOTICA" className="bg-gray-900">Domótica / Espacios Inteligentes</option>
                    <option value="CONSULTORIA" className="bg-gray-900">Consultoría General</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2 ml-1">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 transition-all resize-none outline-none"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-white text-black font-medium py-4 rounded-full hover:bg-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Enviando...' : (
                    <>Enviar consulta <Send size={16} /></>
                  )}
                </button>
              </div>

              {status === 'error' && (
                <div className="text-red-500 text-sm mt-4 text-center">
                  Hubo un error al enviar. Por favor, inténtalo de nuevo.
                </div>
              )}
            </form>
          )}
        </div>
        
        <div className="mt-12 text-center space-y-2">
            <p className="text-white/30 text-sm">O contáctanos directamente:</p>
            <a href="mailto:contacto@corestudios.com" className="text-white font-medium hover:underline">
              contacto@corestudios.com
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
