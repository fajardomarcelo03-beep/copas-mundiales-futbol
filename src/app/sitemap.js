// src/app/sitemap.js
import { todasLasNoticias } from '../data/noticias/index';

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

  // 2. Generar dinámicamente las rutas para cada noticia
  // 'todasLasNoticias' es un array, por lo tanto usamos .map directamente
  const rutasNoticiasEs = todasLasNoticias.map((noticia) => ({
    url: `${baseUrl}/es/noticias/${noticia.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const rutasNoticiasEn = todasLasNoticias.map((noticia) => ({
    url: `${baseUrl}/en/noticias/${noticia.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Combinar todas las rutas en un solo sitemap
  return [...rutasEstaticas, ...rutasNoticiasEs, ...rutasNoticiasEn];
}