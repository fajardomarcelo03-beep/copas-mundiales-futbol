import DetalleNoticia from './DetalleNoticia';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { id, lang } = resolvedParams;
  const baseUrl = 'https://copas-mundiales-futbol.vercel.app';
  
  return {
    alternates: {
      canonical: `${baseUrl}/${lang}/mundial-2026/noticias/${id}`,
    },
  };
}

export default async function Page({ params }) {
  // Resolvemos los parámetros como promesa para evitar errores en Next.js 15+
  const resolvedParams = await params;
  return <DetalleNoticia params={resolvedParams} />;
}