// src/services/dataService.js
import { noticiasMundial } from '@/data/noticias/mundialData';

/**
 * MAPA DE COMPETICIONES
 * Permite cargar los datos de forma dinámica y escalable.
 */
const competicionesMap = {
  'la-liga': () => import('@/data/competiciones/la-liga'),
  'libertadores': () => import('@/data/competiciones/libertadores'),
  'liga-pro': () => import('@/data/competiciones/liga-pro'),
  'mls': () => import('@/data/competiciones/mls'),
  'premier-league': () => import('@/data/competiciones/premier-league'),
  'sudamericana': () => import('@/data/competiciones/sudamericana'),
  // Puedes añadir más aquí en el futuro sin cambiar la lógica principal
};

// --- SERVICIOS DE NOTICIAS ---

export async function getNoticias() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(noticiasMundial);
    }, 100);
  });
}

export async function getNoticiaById(id) {
  const noticias = await getNoticias();
  return noticias.find(n => n.id === id);
}

// --- SERVICIOS DE COMPETICIONES ---

/**
 * Carga los datos de una competición específica de forma dinámica.
 * @param {string} id - El ID de la competición (ej: 'la-liga')
 */
export async function getCompeticionData(id) {
  try {
    if (!competicionesMap[id]) {
      console.warn(`Competición con ID '${id}' no encontrada en el mapa.`);
      return null;
    }
    
    // Cargamos el módulo dinámicamente (Lazy Loading)
    const modulo = await competicionesMap[id]();
    return modulo.default; // Retorna el export default del archivo correspondiente
  } catch (error) {
    console.error(`Error al cargar los datos de la competición '${id}':`, error);
    return null;
  }
}