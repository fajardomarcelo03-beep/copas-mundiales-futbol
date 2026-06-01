export default async function sitemap() {
  const baseUrl = 'https://copas-mundiales-futbol.vercel.app';

  // 1. Ruta principal (Inicio / Portada)
  const rutasEstaticas = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. Generar las rutas para tus 8 noticias basadas en tu estructura de URLs
  const idsNoticias = [1, 2, 3, 4, 5, 6, 7, 8];
  
  const rutasNoticias = idsNoticias.map((id) => ({
    url: `${baseUrl}/noticias/noticia-${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Combinar todo en una sola lista para Google
  return [...rutasEstaticas, ...rutasNoticias];
}