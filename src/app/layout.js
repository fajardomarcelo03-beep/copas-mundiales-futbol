import './globals.css';
import HeaderContextLayout from './HeaderContextLayout';
import { Analytics } from '@vercel/analytics/react';
import KlaroInitializer from '../components/KlaroInitializer';

export const metadata = {
  title: "Fútbol Fanatic | Noticias, Resultados y la Historia del Fútbol",
  description: "La casa del verdadero fanático del fútbol.",
};

export default async function RootLayout({ children, params }) {
  const { lang } = await params; 

  return (
    <html lang={lang || 'es'}>
      <head>
        <meta name="google-site-verification" content="L_Tf8Rw3rUKttglqFdrGJI0A_ysbMuvy_sqEuc6p8" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: '#ffffff', 
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <KlaroInitializer />
        
        <HeaderContextLayout>
          {children}
        </HeaderContextLayout>
        <Analytics />
      </body>
    </html>
  );
}