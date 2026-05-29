import './globals.css';
import HeaderContextLayout from './HeaderContextLayout';

// 🌐 METADATOS OFICIALES PARA SEO (Procesados en el Servidor)
export const metadata = {
  title: "Historia de los Campeonatos Mundiales de Fútbol | Crónicas y Noticias",
  description: "Explora la pasión eterna del fútbol desde Uruguay 1930 hasta la cobertura y análisis exclusivo rumbo al Mundial 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f8fafc' }}>
        <HeaderContextLayout>
          {children}
        </HeaderContextLayout>
      </body>
    </html>
  );
}