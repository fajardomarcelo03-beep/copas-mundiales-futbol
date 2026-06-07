import './globals.css';
import HeaderContextLayout from './HeaderContextLayout';
import { Analytics } from '@vercel/analytics/react';
import CookieBanner from './components/CookieBanner';

export const metadata = {
  title: "Fútbol Fanátic | Noticias, Resultados y la Historia del Fútbol",
  description: "La casa del verdadero fanático del fútbol.",
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
        <HeaderContextLayout>
          {children}
        </HeaderContextLayout>
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  );
}