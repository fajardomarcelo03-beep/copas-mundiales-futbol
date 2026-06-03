// src/data/noticias/index.js
import { noticiasMundial } from './mundialData';
import { noticiasLaLiga } from './laLigaData';
import { noticiasLibertadores } from './libertadoresData';
import { noticiasLigaPro } from './ligaProData';
import { noticiasMLS } from './mlsData';
import { noticiasPremier } from './PremierData';
import { noticiasSudamericana } from './sudamericanaData';

// Unificamos todo en un solo array
export const todasLasNoticias = [
  ...noticiasMundial,
  ...noticiasLaLiga,
  ...noticiasLibertadores,
  ...noticiasLigaPro,
  ...noticiasMLS,
  ...noticiasPremier,
  ...noticiasSudamericana,
];