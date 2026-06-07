// lib/klaro-config.js
export const klaroConfig = {
  elementID: 'klaro',
  cookieName: 'futbolFanaticConsent',
  // Klaro detectará el idioma del usuario basándose en este valor o el atributo lang de tu <html>
  lang: 'es', 
  translations: {
    // Configuración en español
    es: {
      consentModal: {
        title: 'Cookies y privacidad',
        description: 'Utilizamos cookies y otras tecnologías de seguimiento para hacer funcionar este sitio. Si estás de acuerdo, nosotros y nuestros partners las utilizaremos para mejorar el rendimiento, conocer cómo utilizan el sitio y mostrar anuncios que se ajusten a tus intereses.',
      },
      consentNotice: {
        changeDescription: 'Puedes cambiar tu elección en cualquier momento.',
        description: 'Utilizamos cookies y otras tecnologías de seguimiento para hacer funcionar este sitio. Si estás de acuerdo, nosotros y nuestros partners las utilizaremos para mejorar el rendimiento, conocer cómo utilizan el sitio y mostrar anuncios que se ajusten a tus intereses.',
      },
      accept: 'Aceptar todas',
      decline: 'Rechazar todas',
      settings: 'Configurar cookies',
      purposes: {
        analytics: 'Analítica',
        marketing: 'Afiliación y Marketing',
      },
    },
    // Configuración en inglés
    en: {
      consentModal: {
        title: 'Cookies and privacy',
        description: 'We use cookies and other tracking technologies to run this site. If you agree, we and our partners will use them to improve performance, learn how people use the site, and show ads that match your interests.',
      },
      consentNotice: {
        changeDescription: 'You can change your choice at any time.',
        description: 'We use cookies and other tracking technologies to run this site. If you agree, we and our partners will use them to improve performance, learn how people use the site, and show ads that match your interests.',
      },
      accept: 'Accept all',
      decline: 'Reject all',
      settings: 'Cookie settings',
      purposes: {
        analytics: 'Analytics',
        marketing: 'Affiliation and Marketing',
      },
    },
  },
  apps: [
    {
      name: 'google-analytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: [/^_ga/],
    },
    {
      name: 'adidas-afiliados',
      title: 'Affiliate links',
      purposes: ['marketing'],
    }
  ],
};