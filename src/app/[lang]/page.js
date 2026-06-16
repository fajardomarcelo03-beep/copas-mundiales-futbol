import HomePageContent from './HomePageContent';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;
  const baseUrl = 'https://www.futbolfanatic.com';

  return {
    title: 'Fútbol Fanátic | Noticias y Resultados en Vivo',
    description: 'La casa del verdadero fanático del fútbol. Cobertura en tiempo real.',
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'es': `${baseUrl}/es`,
        'en': `${baseUrl}/en`,
      },
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <HomePageContent />;
}