import React, { useEffect } from 'react';

interface AnalyticsTrackerProps {
  isEnabled: boolean;
}

/**
 * AnalyticsTracker gestiona la inyección de Google Analytics.
 * Siguiendo las directrices de privacidad, el script solo se carga 
 * si el usuario ha aceptado explícitamente las cookies.
 */
const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ isEnabled }) => {
  const GA_ID = 'G-SX7SWV5E3H';

  useEffect(() => {
    if (!isEnabled) return;

    // Verificar si el script ya ha sido inyectado para evitar duplicados
    if (document.getElementById('google-analytics-script')) return;

    // 1. Inyectar el script principal de gtag.js
    const script = document.createElement('script');
    script.id = 'google-analytics-script';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // 2. Inyectar el script de configuración inicial
    const inlineScript = document.createElement('script');
    inlineScript.id = 'google-analytics-config';
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', {
        'anonymize_ip': true,
        'cookie_flags': 'SameSite=None;Secure'
      });
    `;
    document.head.appendChild(inlineScript);

    console.log('Analytics inicializado correctamente.');
  }, [isEnabled]);

  return null;
};

export default AnalyticsTracker;
