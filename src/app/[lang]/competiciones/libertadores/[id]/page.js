import DetalleNoticia from './DetalleNoticia';
import { noticiasLibertadores } from '@/data/noticias/libertadoresData'; 

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { id, lang } = resolvedParams;
  
    const noticia = noticiasLibertadores.find(n => n.id === id);
  
  if (!noticia) return { title: "Noticia no encontrada" };

  const baseUrl = 'https://copas-mundiales-futbol.vercel.app';
  const urlNoticia = `${baseUrl}/${lang}/competiciones/libertadores/${id}`;
  
  // Extraemos textos dinámicos
  const titulo = noticia[lang]?.titulo || "Fútbol Fanátic | Libertadores";
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
          url: `${baseUrl}${noticia.imagen}`, 
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