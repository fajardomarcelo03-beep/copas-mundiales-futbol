import DetalleNoticia from './DetalleNoticia';
import { noticiasSudamericana } from '@/data/noticias/sudamericanaData'; 

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { id, lang } = resolvedParams;
  
  const noticia = noticiasSudamericana.find(n => n.id === id);
  
  if (!noticia) return { title: "Noticia no encontrada" };

  const baseUrl = 'https://copas-mundiales-futbol.vercel.app';
  const urlNoticia = `${baseUrl}/${lang}/competiciones/sudamericana/${id}`;
  
  const titulo = noticia[lang]?.titulo || "Fútbol Fanátic | Sudamericana";
  const descripcion = noticia[lang]?.subtitulo || "La casa del verdadero fanático del fútbol.";

  // Estructura JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    'headline': titulo,
    'image': [`${baseUrl}${noticia.imagen}`],
    'datePublished': noticia.fechaISO,
    'author': {
      '@type': 'Organization',
      'name': 'Fútbol Fanátic',
      'url': baseUrl
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Fútbol Fanátic',
      'logo': {
        '@type': 'ImageObject',
        'url': `${baseUrl}/logo/logo.png`
      }
    }
  };

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
    other: {
      'script': [
        {
          type: 'application/ld+json',
          children: JSON.stringify(jsonLd),
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <DetalleNoticia params={resolvedParams} />;
}