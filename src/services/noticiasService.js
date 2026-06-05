// src/services/dataService.js
import { noticiasMundial } from '@/data/noticias/mundialData';
import { noticiasLaLiga } from '@/data/noticias/laLigaData';
import { noticiasLibertadores } from '@/data/noticias/libertadoresData';
import { noticiasLigaPro } from '@/data/noticias/ligaProData';
import { noticiasMLS } from '@/data/noticias/mlsData';
import { noticiasPremier } from '@/data/noticias/PremierData';
import { noticiasSudamericana } from '@/data/noticias/sudamericanaData';

/**
 * MAPA DE COMPETICIONES
 * Mapea el ID de la competición con su objeto de datos correspondiente.
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

// --- SERVICIOS DE NOTICIAS ---

export async function getNoticias() {
  // Retornamos las noticias del mundial como base
  return new Promise((resolve) => {
    resolve(noticiasMundial);
  });
}

export async function getNoticiaById(id) {
  const noticias = await getNoticias();
  return noticias.find(n => n.id === id);
}

// --- SERVICIOS DE COMPETICIONES ---

/**
 * Carga los datos de una competición específica usando el mapa.
 * @param {string} id - El ID de la competición (ej: 'la-liga')
 */
export async function getCompeticionData(id) {
  const data = competicionesMap[id];
  
  if (!data) {
    console.warn(`Competición con ID '${id}' no encontrada en el mapa.`);
    return { noticias: [] };
  }

  return data;
}