// src/app/sitemap.js
import { noticiasMundial } from '../data/noticias/mundialData'; 

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
  // Aseguramos que convertimos el objeto de datos a un array si es necesario
  const listaNoticias = Object.values(noticiasMundial);

  const rutasNoticiasEs = listaNoticias.map((noticia) => ({
    url: `${baseUrl}/es/mundial-2026/noticias/${noticia.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const rutasNoticiasEn = listaNoticias.map((noticia) => ({
    url: `${baseUrl}/en/mundial-2026/noticias/${noticia.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Combinar todas las rutas en un solo sitemap
  return [...rutasEstaticas, ...rutasNoticiasEs, ...rutasNoticiasEn];
}