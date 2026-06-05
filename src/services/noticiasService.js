import { noticiasMundial } from '@/data/noticias/mundialData';
import { noticiasLaLiga } from '@/data/noticias/laLigaData';
import { noticiasLibertadores } from '@/data/noticias/libertadoresData';
import { noticiasLigaPro } from '@/data/noticias/ligaProData';
import { noticiasMLS } from '@/data/noticias/mlsData';
import { noticiasPremier } from '@/data/noticias/PremierData';
import { noticiasSudamericana } from '@/data/noticias/sudamericanaData';

/**
 * MAPA DE COMPETICIONES
 * Asegura que todas las competiciones estén correctamente mapeadas.
 */
const competicionesMap = {
  'la-liga': { noticias: noticiasLaLiga },
  'libertadores': { noticias: noticiasLibertadores },
  'liga-pro': { noticias: noticiasLigaPro },
  'mls': { noticias: noticiasMLS },
  'premier-league': { noticias: noticiasPremier },
  'sudamericana': { noticias: noticiasSudamericana },
  'mundial-2026': { noticias: noticiasMundial },
};

/**
 * Servicio para obtener datos de competiciones
 */
export async function getCompeticionData(id) {
  const data = competicionesMap[id];
  
  if (!data) {
    console.warn(`Competición con ID '${id}' no encontrada en el mapa.`);
    return { noticias: [] };
  }

  return data;
}

/**
 * Servicio para obtener una noticia específica por ID
 */
export async function getNoticiaById(competicionId, noticiaId) {
  const data = await getCompeticionData(competicionId);
  if (!data.noticias) return null;
  return data.noticias.find(n => n.id === noticiaId);
}