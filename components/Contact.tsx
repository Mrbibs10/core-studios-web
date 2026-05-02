import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, ChevronDown, Loader2, AlertCircle } from 'lucide-react';
import PrivacyModal from './PrivacyModal';

type ServiceCategory = 'WORKFLOWS' | 'WEB' | 'DOMOTICA';

interface ContactProps {
  initialService?: ServiceCategory;
}

const FORMSPREE_ENDPOINT = (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT as string
  || 'https://formspree.io/f/mgolewar';

const VALID_SERVICES: ServiceCategory[] = ['WORKFLOWS', 'WEB', 'DOMOTICA'];
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
const RATE_LIMIT_KEY = 'cs_last_submit';
const RATE_LIMIT_MS = 60_000;

// Strip HTML tags and trim to max length
const sanitize = (s: string, max: number) => s.replace(/<[^>]*>/g, '').trim().slice(0, max);

const validate = (name: string, email: string, service: string, message: string): string | null => {
  if (name.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres.';
  if (name.trim().length > 100) return 'El nombre no puede superar los 100 caracteres.';
  if (!EMAIL_REGEX.test(email) || email.length > 254) return 'Introduce un email válido.';
  if (!VALID_SERVICES.includes(service as ServiceCategory)) return 'Servicio no válido.';
  if (message.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres.';
  if (message.trim().length > 2000) return 'El mensaje no puede superar los 2000 caracteres.';
  return null;
};

const isRateLimited = (): boolean => {
  try {
    const last = localStorage.getItem(RATE_LIMIT_KEY);
    return last !== null && Date.now() - parseInt(last, 10) < RATE_LIMIT_MS;
  } catch {
    return false;
  }
};

const markSubmission = () => {
  try { localStorage.setItem(RATE_LIMIT_KEY, String(Date.now())); } catch {}
};

const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: (initialService || 'WORKFLOWS') as ServiceCategory,
    message: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const limits: Record<string, number> = { name: 100, email: 254, message: 2000 };
    const capped = limits[name] !== undefined ? value.slice(0, limits[name]) : value;
    setFormData(prev => ({ ...prev, [name]: capped }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedPrivacy) return;

    // Honeypot: bots fill this, humans don't
    if (honeypot) return;

    // Rate limiting: one submission per minute
    if (isRateLimited()) {
      setErrorMsg('Por favor, espera un momento antes de enviar otro mensaje.');
      return;
    }

    const validationError = validate(formData.name, formData.email, formData.service, formData.message);
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);

    const sanitized = {
      name: sanitize(formData.name, 100),
      email: sanitize(formData.email, 254),
      service: formData.service,
      message: sanitize(formData.message, 2000),
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitized)
      });

      if (response.ok) {
        markSubmission();
        setIsSubmitted(true);
        setFormData(prev => ({ ...prev, message: '' }));
      } else {
        setErrorMsg('Hubo un error al enviar. Por favor, inténtalo de nuevo.');
      }
    } catch {
      setErrorMsg('Hubo un error al enviar. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contacto"
      aria-label="Formulario de contacto - Solicita presupuesto de automatización"
      className="min-h-screen pt-32 pb-20 px-6 bg-[#F5F5F7] flex justify-center"
    >
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
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>

              {/* Honeypot anti-bot: visually hidden, never filled by real users */}
              <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                <label htmlFor="cs_website">Website</label>
                <input
                  id="cs_website"
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-2 ml-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
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
                  maxLength={254}
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
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
                <label className="block text-sm font-medium text-[#1d1d1f] mb-2 ml-1">
                  Mensaje
                  <span className="ml-2 text-xs text-[#86868b] font-normal">
                    ({formData.message.length}/2000)
                  </span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  maxLength={2000}
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

              {errorMsg && (
                <div className="flex items-center gap-2 text-red-500 text-sm justify-center bg-red-50 p-3 rounded-xl border border-red-100">
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
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
