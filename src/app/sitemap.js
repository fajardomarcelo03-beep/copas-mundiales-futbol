import { noticiasData } from '@/app/data/noticias/mundialData';

export default async function sitemap() {
  const baseUrl = 'https://copas-mundiales-futbol.vercel.app';

  // 1. Rutas estáticas principales
  const rutasEstaticas = [
    '',
    '/es',
    '/en',
  ].map((ruta) => ({
    url: `${baseUrl}${ruta}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  }));

  // 2. Obtener solo las llaves ("noticia-1", "noticia-2", etc.) 
  // para evitar problemas con el JSX interno
  const idsNoticias = Object.keys(noticiasData);

  // 3. Generar dinámicamente las rutas para cada idioma
  const rutasNoticiasEs = idsNoticias.map((id) => ({
    url: `${baseUrl}/es/noticias/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const rutasNoticiasEn = idsNoticias.map((id) => ({
    url: `${baseUrl}/en/noticias/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Combinar todas las rutas en un solo sitemap
  return [...rutasEstaticas, ...rutasNoticiasEs, ...rutasNoticiasEn];
}