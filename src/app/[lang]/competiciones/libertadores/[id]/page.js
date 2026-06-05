import DetalleNoticia from './DetalleNoticia';
export async function generateMetadata({ params }) {
  const { id } = params; 
  const baseUrl = 'https://copas-mundiales-futbol.vercel.app';
  const canonicalUrl = `${baseUrl}/${params.lang}/competiciones/libertadores/${id}`;
  return {
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
export default function Page({ params }) {
  return <DetalleNoticia />;
}