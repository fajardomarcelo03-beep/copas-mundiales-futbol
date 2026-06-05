// src/app/sitemap.js
import { noticiasMundial } from '@/data/noticias/mundialData';
import { noticiasLaLiga } from '@/data/noticias/laLigaData';
import { noticiasLibertadores } from '@/data/noticias/libertadoresData'; 
import { noticiasLigaPro } from '@/data/noticias/ligaProData';
import { noticiasMLS } from '@/data/noticias/mlsData';
import { noticiasPremier } from '@/data/noticias/PremierData';

export default async function sitemap() {
  const baseUrl = 'https://copas-mundiales-futbol.vercel.app';

  // 1. Rutas estáticas
  const rutasEstaticas = ['', '/es', '/en'].map((ruta) => ({
    url: `${baseUrl}${ruta}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  }));

  // Función para mapear noticias a URLs según la estructura [lang]/competiciones/...
  const generarRutas = (noticias, path) => {
    return Object.values(noticias).flatMap((noticia) => [
      {
        url: `${baseUrl}/es/competiciones/${path}/${noticia.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/en/competiciones/${path}/${noticia.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }
    ]);
  };

  // Rutas especiales para el mundial (según tu estructura de carpetas)
  const generarRutasMundial = (noticias) => {
    return Object.values(noticias).flatMap((noticia) => [
      { url: `${baseUrl}/es/mundial-2026/noticias/${noticia.id}`, lastModified: new Date(), priority: 0.7 },
      { url: `${baseUrl}/en/mundial-2026/noticias/${noticia.id}`, lastModified: new Date(), priority: 0.7 }
    ]);
  };

  // Combinar todo
  return [
    ...rutasEstaticas,
    ...generarRutasMundial(noticiasMundial),
    ...generarRutas(noticiasLaLiga, 'la-liga'),
    ...generarRutas(noticiasLibertadores, 'libertadores'),
    ...generarRutas(noticiasLigaPro, 'liga-pro'),
    ...generarRutas(noticiasMLS, 'mls'),
    ...generarRutas(noticiasPremier, 'premier-league'),
  ];
}