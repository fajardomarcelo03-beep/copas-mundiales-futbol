import './globals.css';
import HeaderContextLayout from './HeaderContextLayout';
import { Analytics } from '@vercel/analytics/react';
import KlaroInitializer from '../components/KlaroInitializer';

export const metadata = {
  title: "Fútbol Fanatic | Noticias, Resultados y la Historia del Fútbol",
  description: "La casa del verdadero fanático del fútbol.",
  verification: {
    google: "L_Tf8Rw3rUKttglqFdrGJI0A_ysbMuvy_sqEuc6p8",
  },
};

// Next.js pasa los params de la ruta dinámica [lang] automáticamente a este componente
export default async function RootLayout({ children, params }) {
  // Al ser un layout dentro de [lang], 'params' contendrá { lang: 'es' } o { lang: 'en' }
  const { lang } = await params; 

  return (
    <html lang={lang || 'es'}>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: '#ffffff', 
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {/* Inicializador de Klaro para la gestión profesional de cookies */}
        <KlaroInitializer />
        
        <HeaderContextLayout>
          {children}
        </HeaderContextLayout>
        <Analytics />
      </body>
    </html>
  );
}