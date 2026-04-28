import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
  onOpenPrivacy: () => void;
  onOpenCookies: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy, onOpenCookies }) => {
  return (
    <footer
      aria-label="Pie de página de Core Studios"
      className="bg-white py-12 border-t border-gray-100 w-full overflow-x-hidden relative z-10"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-apple-subtext text-xs">
          <span itemScope itemType="https://schema.org/Organization">
            <span itemProp="name">Core Studios Automations</span>
          </span>
          {' '}&copy; {new Date().getFullYear()} — <span itemProp="address">Inca, Mallorca</span>.
        </div>
        <nav aria-label="Pie de página - enlaces legales y redes sociales">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium text-apple-subtext list-none p-0 m-0">
            <li>
              <button
                onClick={onOpenPrivacy}
                className="hover:text-apple-text transition-colors"
              >
                Política de Privacidad
              </button>
            </li>
            <li>
              <button
                onClick={onOpenCookies}
                className="hover:text-apple-text transition-colors"
              >
                Política de Cookies
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate(ViewState.TERMS)}
                className="hover:text-apple-text transition-colors"
              >
                Términos
              </button>
            </li>
            <li>
              <a
                href="https://www.instagram.com/corestudios"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Core Studios en Instagram"
                className="hover:text-apple-blue transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
