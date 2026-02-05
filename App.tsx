
import React, { useState, useEffect } from 'react';
import { ViewState, NavItem } from './types';
import Hero from './components/Hero';
import Services from './components/Workflows';
import About from './components/About';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Process from './components/Process';
import { Menu, X, Sun, Moon } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
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
    { id: ViewState.CONTACT, label: 'Contacto' },
  ];

  const handleNavClick = (view: ViewState) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        return <Contact />;
      case ViewState.TERMS:
        return <Legal view={ViewState.TERMS} onBack={() => handleNavClick(ViewState.HOME)} />;
      case ViewState.PRIVACY:
        return <Legal view={ViewState.PRIVACY} onBack={() => handleNavClick(ViewState.HOME)} />;
      default:
        return <Hero onNavigate={handleNavClick} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-apple-blue selection:text-white transition-colors duration-500 bg-white dark:bg-black w-full overflow-x-hidden relative">
      
      {/* Navigation Bar */}
      <nav 
        className={`fixed top-0 w-full z-[60] transition-all duration-500 ${
          scrolled || isMenuOpen 
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/10 py-3 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick(ViewState.HOME)}
          >
            <div className="w-8 h-8 text-apple-text dark:text-white transition-colors group-hover:text-apple-blue">
               <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="22" y="20" width="56" height="16" rx="8" />
                  <rect x="22" y="42" width="56" height="16" rx="8" />
                  <rect x="22" y="64" width="56" height="16" rx="8" />
               </svg>
            </div>
            <span className="font-semibold text-xl tracking-tight text-apple-text dark:text-white">
              Core Studios
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                  currentView === item.id 
                    ? 'text-apple-text dark:text-white font-medium bg-gray-100 dark:bg-white/10' 
                    : 'text-apple-subtext dark:text-white/60 hover:text-apple-text dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
             {/* Dark Mode Toggle */}
             <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-apple-text dark:text-white hover:scale-110 transition-all duration-300"
                aria-label="Cambiar tema"
             >
               {darkMode ? <Sun size={18} /> : <Moon size={18} />}
             </button>

             <button 
                onClick={() => handleNavClick(ViewState.CONTACT)}
                className="bg-black dark:bg-white dark:text-black text-white text-xs px-5 py-2.5 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium active:scale-95"
             >
               Consultar
             </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-apple-text dark:text-white"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="text-apple-text dark:text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-100 dark:border-white/10 shadow-lg animate-fade-in">
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg font-medium py-3 px-4 rounded-xl ${
                    currentView === item.id ? 'bg-gray-50 dark:bg-white/10 text-apple-text dark:text-white' : 'text-apple-subtext dark:text-white/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow animate-fade-in w-full overflow-x-hidden">
        {renderView()}
      </main>

      {/* Minimal Footer */}
      <footer className="bg-white dark:bg-black py-12 border-t border-gray-100 dark:border-white/10 w-full overflow-x-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-apple-subtext dark:text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Core Studios Automations. Inca, Mallorca.
          </div>
          <div className="flex gap-8 text-xs font-medium text-apple-subtext dark:text-white/40">
            <button onClick={() => handleNavClick(ViewState.PRIVACY)} className="hover:text-apple-blue transition-colors">Privacidad</button>
            <button onClick={() => handleNavClick(ViewState.TERMS)} className="hover:text-apple-blue transition-colors">Términos</button>
            <a href="#" className="hover:text-apple-blue transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
