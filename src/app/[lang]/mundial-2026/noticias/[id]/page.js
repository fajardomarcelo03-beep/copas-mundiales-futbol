import DetalleNoticia from './DetalleNoticia';
import { noticiasMundial } from '@/data/noticias/mundialData'; // 1. Importa tus datos

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { id, lang } = resolvedParams;
  
  // 2. Busca la noticia exacta
  const noticia = noticiasMundial.find(n => n.id === id);
  
  // Si no existe, manejamos un fallback básico
  if (!noticia) return { title: "Noticia no encontrada" };

  const baseUrl = 'https://copas-mundiales-futbol.vercel.app';
  const urlNoticia = `${baseUrl}/${lang}/mundial-2026/noticias/${id}`;
  
  // 3. Extraemos textos dinámicos según el idioma (es/en)
  const titulo = noticia[lang]?.titulo || "Fútbol Fanátic";
  const descripcion = noticia[lang]?.subtitulo || "La casa del verdadero fanático del fútbol.";

  return {
    title: titulo,
    description: descripcion,
    alternates: {
      canonical: urlNoticia,
    },
    // 4. Configuración de Open Graph para redes sociales
    openGraph: {
      title: titulo,
      description: descripcion,
      url: urlNoticia,
      siteName: 'Fútbol Fanátic',
      images: [
        {
          url: `${baseUrl}${noticia.imagen}`, // Asegura que sea una URL absoluta
          width: 1200,
          height: 630,
        },
      ],
      type: 'article',
      locale: lang === 'es' ? 'es_ES' : 'en_US',
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <DetalleNoticia params={resolvedParams} />;
}