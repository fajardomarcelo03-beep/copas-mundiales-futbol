import './globals.css';
import HeaderContextLayout from './HeaderContextLayout';
// 📈 NUMERAL 2: Importación oficial del componente de analíticas de Vercel
import { Analytics } from '@vercel/analytics/react';

// 🌐 METADATOS OFICIALES PARA SEO (Procesados en el Servidor)
export const metadata = {
  title: "Historia de los Campeonatos Mundiales de Fútbol | Crónicas y Noticias",
  description: "Explora la pasión eterna del fútbol desde Uruguay 1930 hasta la cobertura y análisis exclusivo rumbo al Mundial 2026.",
  // 🔽 VERIFICACIÓN DE GOOGLE SEARCH CONSOLE INTEGRADA
  verification: {
    google: "EdZgljICR0ilCM-OhtUWdw9liZBFlfod44GiZRfyl6s",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f8fafc' }}>
        <HeaderContextLayout>
          {children}
        </HeaderContextLayout>
        
        {/* 📈 NUMERAL 2: Renderizado del componente para registrar tráfico global */}
        <Analytics />
      </body>
    </html>
  );
}