import DetalleNoticia from './DetalleNoticia';
import { noticiasLaLiga } from '@/data/noticias/laLigaData'; // Asegúrate de que esta ruta sea correcta

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { id, lang } = resolvedParams;
  
  // Buscamos la noticia de LaLiga
  const noticia = noticiasLaLiga.find(n => n.id === id);
  
  if (!noticia) return { title: "Noticia no encontrada" };

  const baseUrl = 'https://copas-mundiales-futbol.vercel.app';
  const urlNoticia = `${baseUrl}/${lang}/competiciones/la-liga/${id}`;
  
  // Extraemos textos dinámicos
  const titulo = noticia[lang]?.titulo || "Fútbol Fanátic | LaLiga";
  const descripcion = noticia[lang]?.subtitulo || "La casa del verdadero fanático del fútbol.";

  return {
    title: titulo,
    description: descripcion,
    alternates: {
      canonical: urlNoticia,
    },
    openGraph: {
      title: titulo,
      description: descripcion,
      url: urlNoticia,
      siteName: 'Fútbol Fanátic',
      images: [
        {
          url: `${baseUrl}${noticia.imagen}`, // URL absoluta a la imagen
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