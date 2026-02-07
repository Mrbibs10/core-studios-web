import React, { useState, useEffect } from 'react';
import { ViewState, NavItem, ServiceCategory } from './types';
import Hero from './components/Hero';
import Services from './components/Workflows';
import About from './components/About';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Process from './components/Process';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';
import CookiesModal from './components/CookiesModal';
import CookiesBanner from './components/CookiesBanner';
import AnalyticsTracker from './components/AnalyticsTracker';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [preselectedService, setPreselectedService] = useState<ServiceCategory | undefined>(undefined);
  
  // Estados para Privacidad y Cookies
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookiesModal, setShowCookiesModal] = useState(false);
  const [showCookiesBanner, setShowCookiesBanner] = useState(false);
  
  // Estado de consentimiento para Analytics
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    // Comprobar si ya se aceptaron las cookies en visitas anteriores
    const accepted = localStorage.getItem('core-studios-cookies-accepted');
    if (accepted === 'true') {
      setCookieConsent(true);
      setShowCookiesBanner(false);
    } else {
      // Mostrar el banner tras un pequeño retraso para mejorar la UX (Apple Style)
      setTimeout(() => setShowCookiesBanner(true), 1500);
    }

    let scrollTimeout: number;
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      document.documentElement.classList.add('scrolling');
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        document.documentElement.classList.remove('scrolling');
      }, 800);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(scrollTimeout);
    };
  }, []);

  const navItems: NavItem[] = [
    { id: ViewState.HOME, label: 'Inicio' },
    { id: ViewState.SERVICES, label: 'Servicios' },
    { id: ViewState.ABOUT, label: 'Nosotros' },
  ];

  const handleNavClick = (view: ViewState, service?: ServiceCategory) => {
    setCurrentView(view);
    setPreselectedService(service);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAcceptCookies = () => {
    localStorage.setItem('core-studios-cookies-accepted', 'true');
    setCookieConsent(true);
    setShowCookiesBanner(false);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero onNavigate={handleNavClick} />
            <Process />
          </>
        );
      case ViewState.SERVICES:
        return <Services onNavigate={handleNavClick} />;
      case ViewState.ABOUT:
        return <About />;
      case ViewState.CONTACT:
        return <Contact initialService={preselectedService} />;
      case ViewState.TERMS:
        return <Legal view={ViewState.TERMS} onBack={() => handleNavClick(ViewState.HOME)} />;
      case ViewState.PRIVACY:
        return <Legal view={ViewState.PRIVACY} onBack={() => handleNavClick(ViewState.HOME)} />;
      default:
        return <Hero onNavigate={handleNavClick} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-apple-blue selection:text-white bg-apple-bg w-full overflow-x-hidden relative">
      
      {/* Componente de Rastreo de Analytics (Inyecta scripts solo si cookieConsent es true) */}
      <AnalyticsTracker isEnabled={cookieConsent} />

      {/* Navigation Bar */}
      <nav 
        className={`fixed top-0 w-full z-[60] transition-all duration-500 ${
          scrolled || isMenuOpen 
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick(ViewState.HOME)}
          >
            <div className="w-8 h-8 text-apple-text transition-colors group-hover:text-apple-blue">
               <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="22" y="20" width="56" height="16" rx="8" />
                  <rect x="22" y="42" width="56" height="16" rx="8" />
                  <rect x="22" y="64" width="56" height="16" rx="8" />
               </svg>
            </div>
            <span className="font-semibold text-xl tracking-tight text-apple-text">
              Core Studios
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                  currentView === item.id 
                    ? 'text-apple-text font-medium bg-gray-100' 
                    : 'text-apple-subtext hover:text-apple-text hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
             <button 
                onClick={() => handleNavClick(ViewState.CONTACT)}
                className="bg-black text-white text-xs px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors font-medium active:scale-95"
             >
               Consultar
             </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              className="text-apple-text p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-fade-in">
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg font-medium py-3 px-4 rounded-xl ${
                    currentView === item.id ? 'bg-gray-50 text-apple-text' : 'text-apple-subtext'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick(ViewState.CONTACT)}
                className="mt-2 bg-black text-white text-center font-medium py-3 rounded-xl active:scale-95 transition-transform"
              >
                Consultar
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow animate-fade-in w-full overflow-x-hidden">
        {renderView()}
      </main>

      <Footer 
        onNavigate={handleNavClick} 
        onOpenPrivacy={() => setShowPrivacy(true)}
        onOpenCookies={() => setShowCookiesModal(true)}
      />

      {/* Modales y Banner */}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
      {showCookiesModal && <CookiesModal onClose={() => setShowCookiesModal(false)} />}
      {showCookiesBanner && (
        <CookiesBanner 
          onAccept={handleAcceptCookies} 
          onConfigure={() => setShowCookiesModal(true)} 
        />
      )}
    </div>
  );
};

export default App;
