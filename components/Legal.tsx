
import React from 'react';
import { ViewState } from '../types';
import { ArrowLeft } from 'lucide-react';

interface LegalProps {
  view: ViewState.TERMS | ViewState.PRIVACY;
  onBack: () => void;
}

const Legal: React.FC<LegalProps> = ({ view, onBack }) => {
  const isTerms = view === ViewState.TERMS;

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-white dark:bg-black animate-fade-in transition-colors duration-500">
      <div className="container mx-auto max-w-3xl">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-medium text-apple-subtext dark:text-white/40 mb-8 hover:text-apple-blue transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver
        </button>

        <h1 className="text-4xl md:text-5xl font-semibold text-apple-text dark:text-white mb-12 tracking-tight">
          {isTerms ? 'Términos y Condiciones' : 'Política de Privacidad'}
        </h1>

        <div className="space-y-12 text-lg text-apple-subtext dark:text-white/50 font-light leading-relaxed">
          {isTerms ? (
            <>
              <div>
                <h3 className="text-xl font-medium text-apple-text dark:text-white mb-3">1. Introducción</h3>
                <p>Bienvenido a Core Studios. Al contratar nuestros servicios de automatización, aceptas cumplir con los siguientes términos. Buscamos relaciones justas y transparentes.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-apple-text dark:text-white mb-3">2. Servicios y Presupuestos</h3>
                <p>Nuestros servicios de Workflows tienen tarifas establecidas, mientras que Proyectos Web y Domótica requieren presupuestos personalizados.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-apple-text dark:text-white mb-3">3. Propiedad Intelectual</h3>
                <p>Todo el código y configuraciones entregados pasan a ser propiedad del cliente una vez finalizado el pago total del proyecto.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-apple-text dark:text-white mb-3">4. Limitación de Responsabilidad</h3>
                <p>Core Studios no se hace responsable de interrupciones de servicio causadas por proveedores externos (Google, hosting, APIs de terceros).</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-xl font-medium text-apple-text dark:text-white mb-3">1. Compromiso de Privacidad</h3>
                <p>En Core Studios respetamos tu privacidad y protegemos tus datos personales. No vendemos ni comerciamos con tu información.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-apple-text dark:text-white mb-3">2. Datos Recopilados</h3>
                <p>Únicamente recopilamos la información que nos proporcionas voluntariamente a través de nuestro formulario de contacto.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-apple-text dark:text-white mb-3">3. Uso de la Información</h3>
                <p>Los datos se utilizan exclusivamente para comunicación comercial y prestación de servicios contratados.</p>
              </div>

               <div>
                <h3 className="text-xl font-medium text-apple-text dark:text-white mb-3">4. Cookies</h3>
                <p>Este sitio web utiliza cookies técnicas esenciales. No utilizamos cookies de rastreo publicitario sin tu consentimiento.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Legal;
