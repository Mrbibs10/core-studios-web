import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
  onOpenPrivacy: () => void;
  onOpenCookies: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy, onOpenCookies }) => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100 w-full overflow-x-hidden relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-apple-subtext text-xs">
          &copy; {new Date().getFullYear()} Core Studios Automations. Inca, Mallorca.
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium text-apple-subtext">
          <button 
            onClick={onOpenPrivacy} 
            className="hover:text-apple-text transition-colors"
          >
            Política de Privacidad
          </button>
          <button 
            onClick={onOpenCookies} 
            className="hover:text-apple-text transition-colors"
          >
            Política de Cookies
          </button>
          <button 
            onClick={() => onNavigate(ViewState.TERMS)} 
            className="hover:text-apple-text transition-colors"
          >
            Términos
          </button>
          <a href="#" className="hover:text-apple-blue transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
