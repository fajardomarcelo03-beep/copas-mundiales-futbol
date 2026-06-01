// src/app/noticias/[id]/page.js
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useIdioma } from '../../HeaderContextLayout';
import { noticiasData } from '../../data/noticiasData';

// =========================================================================
// 1. FUNCIONES AUXILIARES Y DICCIONARIOS
// =========================================================================
function obtenerBandera(codigo) {
  const flags = {
    'ALG': 'dz', 'ARG': 'ar', 'AUS': 'au', 'AUT': 'at', 'BEL': 'be', 
    'BIH': 'ba', 'BRA': 'br', 'CAN': 'ca', 'CIV': 'ci', 'COD': 'cd', 
    'COL': 'co', 'CPV': 'cv', 'CRO': 'hr', 'CW':  'cw', 'CZE': 'cz', 
    'EGY': 'eg', 'ENG': 'gb', 'ESP': 'es', 'FRA': 'fr', 'GER': 'de', 
    'GHA': 'gh', 'HAI': 'ht', 'IRN': 'ir', 'IRQ': 'iq', 'ITA': 'it', 
    'JOR': 'jo', 'JPN': 'jp', 'KOR': 'kr', 'KSA': 'sa', 'MAR': 'ma', 
    'MEX': 'mx', 'NED': 'nl', 'NOR': 'no', 'NZL': 'nz', 'PAN': 'pa', 
    'PAR': 'py', 'POR': 'pt', 'QAT': 'qa', 'RSA': 'za', 'SCO': 'gb', 
    'SEN': 'sn', 'SUI': 'ch', 'SWE': 'se', 'TUN': 'tn', 'TUR': 'tr', 
    'USA': 'us', 'URU': 'uy', 'UZB': 'uz'
  };
  return flags[codigo] || 'un';
}

function traducirEquipo(codigo, idioma) {
  const nombres = {
    es: {
      'ECU': 'Ecuador', 'QAT': 'Catar', 'SEN': 'Senegal', 'NED': 'Países Bajos',
      'ENG': 'Inglaterra', 'IRN': 'Irán', 'USA': 'EE. UU.', 'WAL': 'Gales',
      'ARG': 'Argentina', 'KSA': 'Arabia Saudita', 'MEX': 'México', 'POL': 'Polonia',
      'FRA': 'Francia', 'AUS': 'Australia', 'DEN': 'Dinamarca', 'TUN': 'Túnez',
      'ESP': 'España', 'CRC': 'Costa Rica', 'GER': 'Alemania', 'JPN': 'Japón',
      'ALG': 'Argelia', 'ARG': 'Argentina', 'AUS': 'Australia', 'AUT': 'Austria', 'BEL': 'Bélgica',
      'BIH': 'Bosnia y Herzegovina', 'BRA': 'Brasil', 'CAN': 'Canadá', 'CIV': 'Costa de Marfil', 'COD': 'Rep. Dem. del Congo',
      'COL': 'Colombia', 'CPV': 'Cabo Verde', 'CRO': 'Croacia', 'CW':  'Curazao', 'CZE': 'República Checa',
      'EGY': 'Egipto', 'ENG': 'Inglaterra', 'ESP': 'España', 'FRA': 'Francia', 'GER': 'Alemania',
      'GHA': 'Ghana', 'HAI': 'Haití', 'IRN': 'Irán', 'IRQ': 'Irak', 'ITA': 'Italia',
      'JOR': 'Jordania', 'JPN': 'Japón', 'KOR': 'Corea del Sur', 'KSA': 'Arabia Saudita', 'MAR': 'Marruecos',
      'MEX': 'México', 'NED': 'Países Bajos', 'NOR': 'Noruega', 'NZL': 'Nueva Zelanda', 'PAN': 'Panamá',
      'PAR': 'Paraguay', 'POR': 'Portugal', 'QAT': 'Catar', 'RSA': 'Sudáfrica', 'SCO': 'Escocia',
      'SEN': 'Senegal', 'SUI': 'Suiza', 'SWE': 'Suecia', 'TUN': 'Túnez', 'TUR': 'Turquía',
      'USA': 'EE. UU.', 'URU': 'Uruguay', 'UZB': 'Uzbekistán'
    },
    en: {
      'ALG': 'Algeria', 'ARG': 'Argentina', 'AUS': 'Australia', 'AUT': 'Austria', 'BEL': 'Belgium',
      'BIH': 'Bosnia and Herzegovina', 'BRA': 'Brazil', 'CAN': 'Canada', 'CIV': 'Ivory Coast', 'COD': 'DR Congo',
      'COL': 'Colombia', 'CPV': 'Cape Verde', 'CRO': 'Croatia', 'CW':  'Curaçao', 'CZE': 'Czechia',
      'EGY': 'Egypt', 'ENG': 'England', 'ESP': 'Spain', 'FRA': 'France', 'GER': 'Germany',
      'GHA': 'Ghana', 'HAI': 'Haiti', 'IRN': 'Iran', 'IRQ': 'Iraq', 'ITA': 'Italy',
      'JOR': 'Jordan', 'JPN': 'Japan', 'KOR': 'South Korea', 'KSA': 'Saudi Arabia', 'MAR': 'Morocco',
      'MEX': 'Mexico', 'NED': 'Netherlands', 'NOR': 'Norway', 'NZL': 'New Zealand', 'PAN': 'Panama',
      'PAR': 'Paraguay', 'POR': 'Portugal', 'QAT': 'Qatar', 'RSA': 'South Africa', 'SCO': 'Scotland',
      'SEN': 'Senegal', 'SUI': 'Switzerland', 'SWE': 'Sweden', 'TUN': 'Tunisia', 'TUR': 'Turkey',
      'USA': 'USA', 'URU': 'Uruguay', 'UZB': 'Uzbekistan'
    }
  };
  return nombres[idioma]?.[codigo] || codigo;
}

function traducirFase(fase, idioma) {
  const fases = {
    es: { 'GRUPOS': 'FASE DE GRUPOS', 'OCTAVOS': 'OCTAVOS DE FINAL', 'CUARTOS': 'CUARTOS DE FINAL', 'SEMIS': 'SEMIFINAL', 'FINAL': 'GRAN FINAL' },
    en: { 'GRUPOS': 'GROUP STAGE', 'OCTAVOS': 'ROUND OF 16', 'CUARTOS': 'QUARTER-FINALS', 'SEMIS': 'SEMI-FINALS', 'FINAL': 'GRAND FINALE' }
  };
  return fases[idioma]?.[fase] || fase;
}

// Listado de fechas disponibles para el Carrusel
const diasMundialData = [
  { id: "2026-06-11", esDia: "JUE", enDia: "THU", num: "11", mes: "JUN" },
  { id: "2026-06-12", esDia: "VIE", enDia: "FRI", num: "12", mes: "JUN" },
  { id: "2026-06-13", esDia: "SAB", enDia: "SAT", num: "13", mes: "JUN" },
  { id: "2026-06-14", esDia: "DOM", enDia: "SUN", num: "14", mes: "JUN" },
  { id: "2026-06-15", esDia: "LUN", enDia: "MON", num: "15", mes: "JUN" },
  { id: "2026-06-16", esDia: "MAR", enDia: "TUE", num: "16", mes: "JUN" },
  { id: "2026-06-17", esDia: "MIE", enDia: "WED", num: "17", mes: "JUN" },
  { id: "2026-06-18", esDia: "JUE", enDia: "THU", num: "18", mes: "JUN" },
  { id: "2026-06-19", esDia: "VIE", enDia: "FRI", num: "19", mes: "JUN" },
  { id: "2026-06-20", esDia: "SAB", enDia: "SAT", num: "20", mes: "JUN" },
  { id: "2026-06-21", esDia: "DOM", enDia: "SUN", num: "20", mes: "JUN" },
  { id: "2026-06-22", esDia: "LUN", enDia: "MON", num: "20", mes: "JUN" },
  { id: "2026-06-23", esDia: "MAR", enDia: "TUE", num: "20", mes: "JUN" },
  { id: "2026-06-24", esDia: "MIE", enDia: "WED", num: "20", mes: "JUN" },
  { id: "2026-06-25", esDia: "JUE", enDia: "THU", num: "20", mes: "JUN" },
  { id: "2026-06-26", esDia: "VIE", enDia: "FRI", num: "20", mes: "JUN" },
  { id: "2026-06-27", esDia: "SAB", enDia: "SAT", num: "20", mes: "JUN" }
];

const todosLosPartidosMundial = [
  // Jueves, 11 de junio 2026
  { fecha: "2026-06-11", fase: 'GRUPOS', e1: 'MEX', e2: 'RSA', hora: '03:00 PM', estadio: 'Estadio Ciudad de México' },
  { fecha: "2026-06-11", fase: 'GRUPOS', e1: 'KOR', e2: 'CZE', hora: '10:00 PM', estadio: 'Estadio Guadalajara' },
  
  // Viernes, 12 de junio 2026
  { fecha: "2026-06-12", fase: 'GRUPOS', e1: 'CAN', e2: 'BIH', hora: '03:00 PM', estadio: 'Estadio Toronto' },
  { fecha: "2026-06-12", fase: 'GRUPOS', e1: 'USA', e2: 'PAR', hora: '09:00 PM', estadio: 'Estadio Los Ángeles' },
  
  // Sábado, 13 de junio 2026
  { fecha: "2026-06-13", fase: 'GRUPOS', e1: 'QAT', e2: 'SUI', hora: '03:00 PM', estadio: 'Estadio Bahía de San Francisco' },
  { fecha: "2026-06-13", fase: 'GRUPOS', e1: 'BRA', e2: 'MAR', hora: '06:00 PM', estadio: 'Estadio Nueva York Nueva Jersey' },
  { fecha: "2026-06-13", fase: 'GRUPOS', e1: 'HAI', e2: 'SCO', hora: '09:00 PM', estadio: 'Estadio Boston' },
  { fecha: "2026-06-13", fase: 'GRUPOS', e1: 'AUS', e2: 'TUR', hora: '12:00 AM', estadio: 'Estadio BC Place Vancouver' },
  
  // Domingo, 14 de junio 2026
  { fecha: "2026-06-14", fase: 'GRUPOS', e1: 'GER', e2: 'CW',  hora: '01:00 PM', estadio: 'Estadio Houston' },
  { fecha: "2026-06-14", fase: 'GRUPOS', e1: 'NED', e2: 'JPN', hora: '04:00 PM', estadio: 'Estadio Dallas' },
  { fecha: "2026-06-14", fase: 'GRUPOS', e1: 'CIV', e2: 'ECU', hora: '07:00 PM', estadio: 'Estadio Filadelfia' },
  { fecha: "2026-06-14", fase: 'GRUPOS', e1: 'SWE', e2: 'TUN', hora: '10:00 PM', estadio: 'Estadio Monterrey' },
  
  // Lunes, 15 de junio 2026
  { fecha: "2026-06-15", fase: 'GRUPOS', e1: 'ESP', e2: 'CPV', hora: '12:00 PM', estadio: 'Estadio Atlanta' },
  { fecha: "2026-06-15", fase: 'GRUPOS', e1: 'BEL', e2: 'EGY', hora: '03:00 PM', estadio: 'Estadio Seattle' },
  { fecha: "2026-06-15", fase: 'GRUPOS', e1: 'KSA', e2: 'URU', hora: '06:00 PM', estadio: 'Estadio Miami' },
  { fecha: "2026-06-15", fase: 'GRUPOS', e1: 'IRN', e2: 'NZL', hora: '09:00 PM', estadio: 'Estadio Los Ángeles' },
  
  // Martes, 16 de junio 2026
  { fecha: "2026-06-16", phase: 'GRUPOS', e1: 'FRA', e2: 'SEN', hora: '03:00 PM', estadio: 'Estadio Nueva York Nueva Jersey' },
  { fecha: "2026-06-16", fase: 'GRUPOS', e1: 'IRQ', e2: 'NOR', hora: '06:00 PM', estadio: 'Estadio Boston' },
  { fecha: "2026-06-16", fase: 'GRUPOS', e1: 'ARG', e2: 'ALG', hora: '09:00 PM', estadio: 'Estadio Kansas City' },
  { fecha: "2026-06-16", fase: 'GRUPOS', e1: 'AUT', e2: 'JOR', hora: '12:00 AM', estadio: 'Estadio Bahía de San Francisco' },
  
  // Miércoles, 17 de junio 2026
  { fecha: "2026-06-17", fase: 'GRUPOS', e1: 'POR', e2: 'COD', hora: '01:00 PM', estadio: 'Estadio Houston' },
  { fecha: "2026-06-17", fase: 'GRUPOS', e1: 'ENG', e2: 'CRO', hora: '04:00 PM', estadio: 'Estadio Dallas' },
  { fecha: "2026-06-17", fase: 'GRUPOS', e1: 'GHA', e2: 'PAN', hora: '07:00 PM', estadio: 'Estadio Toronto' },
  { fecha: "2026-06-17", fase: 'GRUPOS', e1: 'UZB', e2: 'COL', hora: '10:00 PM', estadio: 'Estadio Ciudad de México' },
  
  // Jueves, 18 de junio 2026
  { fecha: "2026-06-18", fase: 'GRUPOS', e1: 'CZE', e2: 'RSA', hora: '12:00 PM', estadio: 'Estadio Atlanta' },
  { fecha: "2026-06-18", fase: 'GRUPOS', e1: 'SUI', e2: 'BIH', hora: '03:00 PM', estadio: 'Estadio Los Ángeles' },
  { fecha: "2026-06-18", fase: 'GRUPOS', e1: 'CAN', e2: 'QAT', hora: '06:00 PM', estadio: 'Estadio BC Place Vancouver' },
  { fecha: "2026-06-18", fase: 'GRUPOS', e1: 'MEX', e2: 'KOR', hora: '09:00 PM', estadio: 'Estadio Guadalajara' },
  
  // Viernes, 19 de junio 2026
  { fecha: "2026-06-19", fase: 'GRUPOS', e1: 'USA', e2: 'AUS', hora: '03:00 PM', estadio: 'Estadio Seattle' },
  { fecha: "2026-06-19", fase: 'GRUPOS', e1: 'SCO', e2: 'MAR', hora: '06:00 PM', estadio: 'Estadio Boston' },
  { fecha: "2026-06-19", fase: 'GRUPOS', e1: 'BRA', e2: 'HAI', hora: '09:00 PM', estadio: 'Estadio Filadelfia' },
  { fecha: "2026-06-19", fase: 'GRUPOS', e1: 'TUR', e2: 'PAR', hora: '12:00 AM', estadio: 'Estadio Bahía de San Francisco' },
  
  // Sábado, 20 de junio 2026
  { fecha: "2026-06-20", fase: 'GRUPOS', e1: 'NED', e2: 'SWE', hora: '01:00 PM', estadio: 'Estadio Houston' },
  { fecha: "2026-06-20", fase: 'GRUPOS', e1: 'GER', e2: 'CIV', hora: '04:00 PM', estadio: 'Estadio Toronto' },
  { fecha: "2026-06-20", fase: 'GRUPOS', e1: 'ECU', e2: 'CW',  hora: '10:00 PM', estadio: 'Estadio Kansas City' },
  { fecha: "2026-06-20", fase: 'GRUPOS', e1: 'TUN', e2: 'JPN', hora: '12:00 AM', estadio: 'Estadio Monterrey' },
  
  // Domingo, 21 de junio 2026
  { fecha: "2026-06-21", fase: 'GRUPOS', e1: 'ESP', e2: 'KSA', hora: '12:00 PM', estadio: 'Estadio Atlanta' },
  { fecha: "2026-06-21", fase: 'GRUPOS', e1: 'BEL', e2: 'IRN', hora: '03:00 PM', estadio: 'Estadio Los Ángeles' },
  { fecha: "2026-06-21", fase: 'GRUPOS', e1: 'URU', e2: 'CPV', hora: '06:00 PM', estadio: 'Estadio Miami' },
  { fecha: "2026-06-21", fase: 'GRUPOS', e1: 'NZL', e2: 'EGY', hora: '09:00 PM', estadio: 'Estadio BC Place Vancouver' },
  
  // Lunes, 22 de junio 2026
  { fecha: "2026-06-22", fase: 'GRUPOS', e1: 'ARG', e2: 'AUT', hora: '01:00 PM', estadio: 'Estadio Dallas' },
  { fecha: "2026-06-22", fase: 'GRUPOS', e1: 'FRA', e2: 'IRQ', hora: '05:00 PM', estadio: 'Estadio Filadelfia' },
  { fecha: "2026-06-22", fase: 'GRUPOS', e1: 'NOR', e2: 'SEN', hora: '08:00 PM', estadio: 'Estadio Nueva York Nueva Jersey' },
  { fecha: "2026-06-22", fase: 'GRUPOS', e1: 'JOR', e2: 'ALG', hora: '11:00 PM', estadio: 'Estadio Bahía de San Francisco Bay' },
  
  // Martes, 23 de junio 2026
  { fecha: "2026-06-23", fase: 'GRUPOS', e1: 'POR', e2: 'UZB', hora: '01:00 PM', estadio: 'Estadio Houston' },
  { fecha: "2026-06-23", fase: 'GRUPOS', e1: 'ENG', e2: 'GHA', hora: '04:00 PM', estadio: 'Estadio Boston' },
  { fecha: "2026-06-23", fase: 'GRUPOS', e1: 'PAN', e2: 'CRO', hora: '07:00 PM', estadio: 'Estadio Toronto' },
  { fecha: "2026-06-23", fase: 'GRUPOS', e1: 'COL', e2: 'COD', hora: '10:00 PM', estadio: 'Estadio Guadalajara' },
  
  // Miércoles, 24 de junio 2026
  { fecha: "2026-06-24", fase: 'GRUPOS', e1: 'SUI', e2: 'CAN', hora: '03:00 PM', estadio: 'Estadio BC Place Vancouver' },
  { fecha: "2026-06-24", fase: 'GRUPOS', e1: 'BIH', e2: 'QAT', hora: '03:00 PM', estadio: 'Estadio Seattle' },
  { fecha: "2026-06-24", fase: 'GRUPOS', e1: 'SCO', e2: 'BRA', hora: '06:00 PM', estadio: 'Estadio Miami' },
  { fecha: "2026-06-24", fase: 'GRUPOS', e1: 'MAR', e2: 'HAI', hora: '06:00 PM', estadio: 'Estadio Atlanta' },
  { fecha: "2026-06-24", fase: 'GRUPOS', e1: 'CZE', e2: 'MEX', hora: '09:00 PM', estadio: 'Estadio Ciudad de México' },
  { fecha: "2026-06-24", fase: 'GRUPOS', e1: 'RSA', e2: 'KOR', hora: '09:00 PM', estadio: 'Estadio Monterrey' },
  
  // Jueves, 25 de junio 2026
  { fecha: "2026-06-25", fase: 'GRUPOS', e1: 'CW',  e2: 'CIV', hora: '04:00 PM', estadio: 'Estadio Filadelfia' },
  { fecha: "2026-06-25", fase: 'GRUPOS', e1: 'ECU', e2: 'GER', hora: '04:00 PM', estadio: 'Estadio Nueva York Nueva Jersey' },
  { fecha: "2026-06-25", fase: 'GRUPOS', e1: 'JPN', e2: 'SWE', hora: '07:00 PM', estadio: 'Estadio Dallas' },
  { fecha: "2026-06-25", fase: 'GRUPOS', e1: 'TUN', e2: 'NED', hora: '07:00 PM', estadio: 'Estadio Kansas City' },
  { fecha: "2026-06-25", fase: 'GRUPOS', e1: 'TUR', e2: 'USA', hora: '10:00 PM', estadio: 'Estadio Los Ángeles' },
  { fecha: "2026-06-25", fase: 'GRUPOS', e1: 'PAR', e2: 'AUS', hora: '10:00 PM', estadio: 'Estadio Bahía de San Francisco' },
  
  // Viernes, 26 de junio 2026
  { fecha: "2026-06-26", fase: 'GRUPOS', e1: 'NOR', e2: 'FRA', hora: '03:00 PM', estadio: 'Estadio Boston' },
  { fecha: "2026-06-26", fase: 'GRUPOS', e1: 'SEN', e2: 'IRQ', hora: '03:00 PM', estadio: 'Estadio Toronto' },
  { fecha: "2026-06-26", fase: 'GRUPOS', e1: 'CPV', e2: 'KSA', hora: '08:00 PM', estadio: 'Estadio Houston' },
  { fecha: "2026-06-26", fase: 'GRUPOS', e1: 'URU', e2: 'ESP', hora: '08:00 PM', estadio: 'Estadio Guadalajara' },
  { fecha: "2026-06-26", fase: 'GRUPOS', e1: 'EGY', e2: 'IRN', hora: '11:00 PM', estadio: 'Estadio Seattle' },
  { fecha: "2026-06-26", fase: 'GRUPOS', e1: 'NZL', e2: 'BEL', hora: '11:00 PM', estadio: 'Estadio BC Place Vancouver' },
  
  // Sábado, 27 de junio 2026
  { fecha: "2026-06-27", fase: 'GRUPOS', e1: 'PAN', e2: 'ENG', hora: '05:00 PM', estadio: 'Estadio Nueva York Nueva Jersey' },
  { fecha: "2026-06-27", fase: 'GRUPOS', e1: 'CRO', e2: 'GHA', hora: '05:00 PM', estadio: 'Estadio Filadelfia' },
  { fecha: "2026-06-27", fase: 'GRUPOS', e1: 'COL', e2: 'POR', hora: '07:30 PM', estadio: 'Estadio Miami' },
  { fecha: "2026-06-27", fase: 'GRUPOS', e1: 'COD', e2: 'UZB', hora: '07:30 PM', estadio: 'Estadio Atlanta' },
  { fecha: "2026-06-27", fase: 'GRUPOS', e1: 'ALG', e2: 'AUT', hora: '10:00 PM', estadio: 'Estadio Kansas City' },
  { fecha: "2026-06-27", fase: 'GRUPOS', e1: 'JOR', e2: 'ARG', hora: '10:00 PM', estadio: 'Estadio Dallas' }
];
const tablaPosicionesData = [
  { 
    grupo: "GRUPO A", 
    lineas: [ 
      { posicion: 1, equipo: "MEX", pj: 0, pts: 0, b: "mx" }, 
      { posicion: 2, equipo: "RSA", pj: 0, pts: 0, b: "za" }, 
      { posicion: 3, equipo: "ITA", pj: 0, pts: 0, b: "it" }, 
      { posicion: 4, equipo: "CHL", pj: 0, pts: 0, b: "cl" } 
    ] 
  },
  { 
    grupo: "GRUPO B", 
    lineas: [ 
      { posicion: 1, equipo: "CAN", pj: 0, pts: 0, b: "ca" }, 
      { posicion: 2, equipo: "BIH", pj: 0, pts: 0, b: "ba" }, 
      { posicion: 3, equipo: "QAT", pj: 0, pts: 0, b: "qa" }, 
      { posicion: 4, equipo: "SUI", pj: 0, pts: 0, b: "ch" } 
    ] 
  },
  { 
    grupo: "GRUPO C", 
    lineas: [ 
      { posicion: 1, equipo: "BRA", pj: 0, pts: 0, b: "br" }, 
      { posicion: 2, equipo: "MAR", pj: 0, pts: 0, b: "ma" }, 
      { posicion: 3, equipo: "HAI", pj: 0, pts: 0, b: "ht" }, 
      { posicion: 4, equipo: "SCO", pj: 0, pts: 0, b: "gb" } 
    ] 
  },
  { 
    grupo: "GRUPO D", 
    lineas: [ 
      { posicion: 1, equipo: "USA", pj: 0, pts: 0, b: "us" }, 
      { posicion: 2, equipo: "PAR", pj: 0, pts: 0, b: "py" }, 
      { posicion: 3, equipo: "AUS", pj: 0, pts: 0, b: "au" }, 
      { posicion: 4, equipo: "TUR", pj: 0, pts: 0, b: "tr" } 
    ] 
  },
  { 
    grupo: "GRUPO E", 
    lineas: [ 
      { posicion: 1, equipo: "GER", pj: 0, pts: 0, b: "de" }, 
      { posicion: 2, equipo: "CW", pj: 0, pts: 0, b: "cw" }, 
      { posicion: 3, equipo: "CIV", pj: 0, pts: 0, b: "ci" }, 
      { posicion: 4, equipo: "ECU", pj: 0, pts: 0, b: "ec" } 
    ] 
  },
  { 
    grupo: "GRUPO F", 
    lineas: [ 
      { posicion: 1, equipo: "NED", pj: 0, pts: 0, b: "nl" }, 
      { posicion: 2, equipo: "JPN", pj: 0, pts: 0, b: "jp" }, 
      { posicion: 3, equipo: "SWE", pj: 0, pts: 0, b: "se" }, 
      { posicion: 4, equipo: "TUN", pj: 0, pts: 0, b: "tn" } 
    ] 
  },
  { 
    grupo: "GRUPO G", 
    lineas: [ 
      { posicion: 1, equipo: "BEL", pj: 0, pts: 0, b: "be" }, 
      { posicion: 2, equipo: "EGY", pj: 0, pts: 0, b: "eg" }, 
      { posicion: 3, equipo: "IRN", pj: 0, pts: 0, b: "ir" }, 
      { posicion: 4, equipo: "NZL", pj: 0, pts: 0, b: "nz" } 
    ] 
  },
  { 
    grupo: "GRUPO H", 
    lineas: [ 
      { posicion: 1, equipo: "ESP", pj: 0, pts: 0, b: "es" }, 
      { posicion: 2, equipo: "CPV", pj: 0, pts: 0, b: "cv" }, 
      { posicion: 3, equipo: "KSA", pj: 0, pts: 0, b: "sa" }, 
      { posicion: 4, equipo: "URU", pj: 0, pts: 0, b: "uy" } 
    ] 
  },
  { 
    grupo: "GRUPO I", 
    lineas: [ 
      { posicion: 1, equipo: "FRA", pj: 0, pts: 0, b: "fr" }, 
      { posicion: 2, equipo: "SEN", pj: 0, pts: 0, b: "sn" }, 
      { posicion: 3, equipo: "IRQ", pj: 0, pts: 0, b: "iq" }, 
      { posicion: 4, equipo: "NOR", pj: 0, pts: 0, b: "no" } 
    ] 
  },
  { 
    grupo: "GRUPO J", 
    lineas: [ 
      { posicion: 1, equipo: "ARG", pj: 0, pts: 0, b: "ar" }, 
      { posicion: 2, equipo: "ALG", pj: 0, pts: 0, b: "dz" }, 
      { posicion: 3, equipo: "AUT", pj: 0, pts: 0, b: "at" }, 
      { posicion: 4, equipo: "JOR", pj: 0, pts: 0, b: "jo" } 
    ] 
  },
  { 
    grupo: "GRUPO K", 
    lineas: [ 
      { posicion: 1, equipo: "POR", pj: 0, pts: 0, b: "pt" }, 
      { posicion: 2, equipo: "COD", pj: 0, pts: 0, b: "cd" }, 
      { posicion: 3, equipo: "UZB", pj: 0, pts: 0, b: "uz" }, 
      { posicion: 4, equipo: "COL", pj: 0, pts: 0, b: "co" } 
    ] 
  },
  { 
    grupo: "GRUPO L", 
    lineas: [ 
      { posicion: 1, equipo: "ENG", pj: 0, pts: 0, b: "gb" }, 
      { posicion: 2, equipo: "CRO", pj: 0, pts: 0, b: "hr" }, 
      { posicion: 3, equipo: "GHA", pj: 0, pts: 0, b: "gh" }, 
      { posicion: 4, equipo: "PAN", pj: 0, pts: 0, b: "pa" } 
    ] 
  }
];

// =========================================================================
// 2. COMPONENTE PRINCIPAL
// =========================================================================
export default function DetalleNoticiaPage({ params }) {
  const { id } = React.use(params);
  const { idioma } = useIdioma();

  // Estados dinámicos para los filtros de Partidos y Tablas
  const [fechaSeleccionada, setFechaSeleccionada] = useState("2026-06-11");
  const [indiceGrupoActivo, setIndiceGrupoActivo] = useState(0);
  const [partidosFiltrados, setPartidosFiltrados] = useState([]);
  const [sugerenciasAleatorias, setSugerenciasAleatorias] = useState([]);
  
  const carruselFechasRef = useRef(null);

  // Filtrar los partidos cada vez que cambie la fecha seleccionada
  useEffect(() => {
    const filtrados = todosLosPartidosMundial.filter(p => p.fecha === fechaSeleccionada);
    setPartidosFiltrados(filtrados);
  }, [fechaSeleccionada]);

  // Manejo de noticias sugeridas
  useEffect(() => {
    const todasLasKeys = Object.keys(noticiasData);
    const filtradas = todasLasKeys.filter(k => k !== id);
    const mezcladas = [...filtradas].sort(() => 0.5 - Math.random());
    setSugerenciasAleatorias(mezcladas.slice(0, 2));
  }, [id]);

  // Funciones de navegación del carrusel de fechas (Web)
  const moverCarrusel = (direccion) => {
    if (carruselFechasRef.current) {
      const scrollAmount = 180; 
      carruselFechasRef.current.scrollBy({
        left: direccion === 'derecha' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const objetoNoticia = noticiasData[id];

  if (!objetoNoticia) {
    return (
      <div style={{ ...containerStyle, justifyContent: 'center' }}>
        <h2>{idioma === 'es' ? 'Artículo no encontrado' : 'Article not found'}</h2>
        <Link href="/" style={btnVolverStyle}>
          {idioma === 'es' ? '← Volver a la Portada' : '← Back to Home'}
        </Link>
      </div>
    );
  }

  const textoNoticia = objetoNoticia[idioma];

  return (
    <div style={containerStyle}>
      {/* 📌 RECUADRO SUPERIOR FIJO */}
      <div style={recuadroSuperiorFijoContainer} className="recuadro-superior-fijo">
        <div style={gridInternoRecuadroStyle} className="grid-interno-recuadro">
          
          {/* SECCIÓN PARTIDOS */}
          <div style={seccionPartidosFijoStyle}>
            <div style={encabezadoSubModuloStyle}>
              <span style={indicadorEnVivoStyle}>🔴</span> {idioma === 'es' ? 'PARTIDOS POR FECHA' : 'MATCHES BY DATE'}
            </div>
            
            {/* Contenedor del Carrusel con Flechas */}
            <div style={contenedorControladorCarruselStyle}>
              <button 
                onClick={() => moverCarrusel('izquierda')} 
                style={flechaCarruselBtnStyle}
                className="flecha-carrusel md-visible"
              >
                ‹
              </button>

              <div 
                ref={carruselFechasRef} 
                style={carruselFechasStyle} 
                className="hide-scrollbar"
              >
                {diasMundialData.map((dia) => {
                  const esActivo = fechaSeleccionada === dia.id;
                  return (
                    <div 
                      key={dia.id}
                      onClick={() => setFechaSeleccionada(dia.id)}
                      style={esActivo ? fechaCardActivaStyle : fechaCardInactivaStyle}
                    >
                      <div>{idioma === 'es' ? dia.esDia : dia.enDia}</div>
                      <div style={{ fontSize: '1rem', margin: '1px 0', fontWeight: '800' }}>{dia.num}</div>
                      <div>{dia.mes}</div>
                    </div>
                  );
                })}
              </div>

              <button 
                onClick={() => moverCarrusel('derecha')} 
                style={flechaCarruselBtnStyle}
                className="flecha-carrusel md-visible"
              >
                ›
              </button>
            </div>

            {/* Listado de partidos que cambian según la fecha */}
            <div style={contenedorFilaPartidosEstilo} className="hide-scrollbar">
              {partidosFiltrados.length > 0 ? (
                partidosFiltrados.map((partido, idx) => (
                  <div key={idx} style={tarjetaPartidoSuperiorStyle}>
                    <div style={badgeFaseEstilo}>{traducirFase(partido.fase, idioma)}</div>
                    <div style={infoLugarMatchStyle}>{partido.estadio.split(',')[0]}</div>
                    
                    <div style={filaEquiposMatchStyle}>
                      <div style={bloqueEquipoMatchStyle}>
                        <img src={`https://flagcdn.com/w80/${obtenerBandera(partido.e1)}.png`} alt="E1" style={banderaMatchStyle} />
                        <span style={nombreEquipoMatchStyle}>{partido.e1}</span>
                      </div>
                      
                      <div style={vsTextoEstilo}>
                        <span style={{ fontSize: '0.6rem', color: '#cbd5e1' }}>VS</span>
                        <span style={{ color: '#ffffff', fontSize: '0.78rem', marginTop: '1px' }}>{partido.hora.replace(" AM", "").replace(" PM", "")}</span>
                      </div>
                      
                      <div style={bloqueEquipoMatchStyle}>
                        <img src={`https://flagcdn.com/w80/${obtenerBandera(partido.e2)}.png`} alt="E2" style={banderaMatchStyle} />
                        <span style={nombreEquipoMatchStyle}>{partido.e2}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={sinPartidosEstilo}>
                  {idioma === 'es' ? 'No hay partidos en esta fecha.' : 'No matches on this date.'}
                </div>
              )}
            </div>
          </div>

          {/* SECCIÓN TABLA DE POSICIONES */}
          <div style={seccionTablasCarruselStyle}>
            <div style={encabezadoSubModuloStyle}>
              <span>📊</span> {idioma === 'es' ? 'TABLA DE POSICIONES' : 'STANDINGS'}
            </div>
            
            <div style={wrapperSlideCarrusel}>
              
              {/* CONTROLES DE INTERCAMBIO DE GRUPOS ADAPTATIVOS */}
              <div style={contenedorSelectorGrupoStyle}>
                {/* Mobile Selector (Dropdown) */}
                <select
                  value={indiceGrupoActivo}
                  onChange={(e) => setIndiceGrupoActivo(Number(e.target.value))}
                  style={selectGrupoMobileStyle}
                  className="select-grupo-mobile"
                >
                  {tablaPosicionesData.map((item, index) => (
                    <option key={index} value={index}>
                      {idioma === 'es' ? item.grupo : item.grupo.replace("GRUPO", "GROUP")}
                    </option>
                  ))}
                </select>

                {/* Web Selector (Tabs) */}
                <div style={tabsGrupoWebStyle} className="tabs-grupo-web">
                  {tablaPosicionesData.map((item, index) => {
                    const esGrupoActivo = index === indiceGrupoActivo;
                    return (
                      <button
                        key={index}
                        onClick={() => setIndiceGrupoActivo(index)}
                        style={esGrupoActivo ? tabBotonActivoStyle : tabBotonInactivoStyle}
                      >
                        {item.grupo.replace("GRUPO ", "")}
                      </button>
                    );
                  })}
                </div>
              </div>

              <table style={tablaMiniEstilo}>
                <thead>
                  <tr style={thMiniRowEstilo}>
                    <th style={{ ...thMiniEstilo, textAlign: 'center' }}>#</th>
                    <th style={{ ...thMiniEstilo, textAlign: 'left' }}>{idioma === 'es' ? 'Equipo' : 'Team'}</th>
                    <th style={{ ...thMiniEstilo, textAlign: 'center' }}>PJ</th>
                    <th style={{ ...thMiniEstilo, textAlign: 'center' }}>PTS</th>
                  </tr>
                </thead>
                <tbody>
                  {tablaPosicionesData[indiceGrupoActivo].lineas.map((linea, lIdx) => (
                    <tr key={lIdx} style={trMiniEstilo}>
                      <td style={{ ...tdMiniEstilo, textAlign: 'center', fontWeight: 'bold', color: '#00b020' }}>{linea.posicion}</td>
                      <td style={{ ...tdMiniEstilo, display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600', textAlign: 'left' }}>
                        <img src={`https://flagcdn.com/w20/${linea.b}.png`} alt="bandera" style={miniBanderaTablaStyle} />
                        <span className="nombre-equipo-tabla">{traducirEquipo(linea.equipo, idioma)}</span>
                      </td>
                      <td style={{ ...tdMiniEstilo, textAlign: 'center' }}>{linea.pj}</td>
                      <td style={{ ...tdMiniEstilo, textAlign: 'center', fontWeight: 'bold', color: '#0a192f' }}>{linea.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      {/* 📰 CUERPO DEL ARTÍCULO */}
      <div style={cardStyle} className="cuerpo-articulo-card">
        <div style={headerNoticiaStyle} className="header-noticia">
          <span style={tagStyle}>🔴 {idioma === 'es' ? 'MUNDIAL 2026' : 'WORLD CUP 2026'}</span>
          <span style={autorStyle}>⏱️ {textoNoticia.tiempoLectura} | ✍️ {textoNoticia.autor}</span>
        </div>
        
        <h1 style={tituloStyle} className="noticia-titulo">{textoNoticia.titulo}</h1>
        <h2 style={subtituloStyle} className="noticia-subtitulo">{textoNoticia.subtitulo}</h2>
        
        <div style={contenedorImagenStyle}>
          <img src={objetoNoticia.imagen} alt={typeof textoNoticia.titulo === 'string' ? textoNoticia.titulo : "Mundial 2026"} style={imagenStyle} />
        </div>
        
        <div style={lineaDecorativaStyle}></div>
        
        {typeof textoNoticia.contenido === 'string' ? (
          <p style={contenidoTextoStyle} className="contenido-texto">{textoNoticia.contenido}</p>
        ) : (
          <div className="contenido-texto">{textoNoticia.contenido}</div>
        )}

        {/* 📚 SECCIÓN DE SUGERENCIAS ALEATORIAS */}
        {sugerenciasAleatorias.length > 0 && (
          <>
            <hr style={separadorSugerenciasStyle} />
            <div style={gridSugerenciasStyle} className="grid-sugerencias">
              {sugerenciasAleatorias.map((sugId) => (
                <Link key={sugId} href={`/noticias/${sugId}`} style={enlaceSugerenciaStyle}>
                  <div style={miniCardSugerenciaStyle} className="mini-card-sugerencia">
                    <img src={noticiasData[sugId].imagen} alt="Mini" style={miniImgSugerenciaStyle} className="mini-img-sugerencia" />
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <h4 style={miniTituloSugerenciaStyle} className="mini-titulo-sugerencia">
                        {typeof noticiasData[sugId][idioma].titulo === 'string' ? noticiasData[sugId][idioma].titulo : "Leer más"}
                      </h4>
                      <span style={miniEnlaceTextoStyle}>{idioma === 'es' ? 'Leer artículo →' : 'Read article →'}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        <div style={{ marginTop: '35px', textAlign: 'center' }}>
          <Link href="/" style={btnVolverStyle}>
            {idioma === 'es' ? '← Volver a la Portada' : '← Back to Home'}
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Ocultar botones de flecha del carrusel en pantallas pequeñas */
        @media (max-width: 768px) {
          .flecha-carrusel.md-visible {
            display: none !important;
          }
          .select-grupo-mobile {
            display: block !important;
          }
          .tabs-grupo-web {
            display: none !important;
          }
        }

        @media (min-width: 769px) {
          .select-grupo-mobile {
            display: none !important;
          }
          .tabs-grupo-web {
            display: flex !important;
          }
        }

        @media (max-width: 992px) {
          .recuadro-superior-fijo {
            position: relative !important;
            top: 0 !important;
            margin-bottom: 20px !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08) !important;
          }
          .grid-interno-recuadro {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          .cuerpo-articulo-card {
            margin-top: 20px !important;
            padding: 25px 20px !important;
          }
        }

        @media (max-width: 640px) {
          .noticia-titulo {
            font-size: 1.55rem !important;
            line-height: 1.3 !important;
          }
          .noticia-subtitulo {
            font-size: 1.02rem !important;
          }
          .header-noticia {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px !important;
          }
          .grid-sugerencias {
            grid-template-columns: 1fr !important;
            width: 100% !important;
          }
          .mini-card-sugerencia {
            flex-direction: row !important;
            align-items: center !important;
            padding: 10px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .mini-img-sugerencia {
            width: 85px !important;
            height: 65px !important;
            flex-shrink: 0 !important;
          }
          .mini-titulo-sugerencia {
            font-size: 0.85rem !important;
            white-space: normal !important;
            word-break: break-word !important;
          }
          .contenido-texto {
            font-size: 0.98rem !important;
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
}

// =========================================================================
// OBJETOS DE ESTILOS (Actualizados con las nuevas características de UI)
// =========================================================================
const containerStyle = { minHeight: '100vh', backgroundColor: '#f4f6f9', padding: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box' };
const recuadroSuperiorFijoContainer = { position: 'fixed', top: '64px', left: '0', width: '100%', backgroundColor: '#0a192f', borderBottom: '4px solid #f1c40f', zIndex: '999', padding: '12px 20px', boxSizing: 'border-box', boxShadow: '0 6px 20px rgba(0,0,0,0.15)', transition: 'opacity 0.35s ease, transform 0.35s ease, visibility 0.35s' };
const gridInternoRecuadroStyle = { maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const encabezadoSubModuloStyle = { display: 'flex', alignItems: 'center', gap: '6px', color: '#ffffff', fontSize: '0.72rem', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4px' };
const indicadorEnVivoStyle = { color: '#e74c3c' };
const seccionPartidosFijoStyle = { display: 'flex', flexDirection: 'column', overflow: 'hidden' };

const contenedorControladorCarruselStyle = { display: 'flex', alignItems: 'center', gap: '4px', width: '100%' };
const flechaCarruselBtnStyle = { backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', border: 'none', borderRadius: '4px', width: '22px', height: '40px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' };

const carruselFechasStyle = { display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '6px', marginBottom: '6px', scrollBehavior: 'smooth', width: '100%' };
const fechaCardActivaStyle = { backgroundColor: '#00b020', color: '#ffffff', minWidth: '50px', padding: '4px', borderRadius: '6px', textAlign: 'center', fontSize: '0.65rem', fontWeight: 'bold', boxShadow: '0 2px 6px rgba(0, 176, 32, 0.4)', cursor: 'pointer' };
const fechaCardInactivaStyle = { backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a0aec0', minWidth: '50px', padding: '4px', borderRadius: '6px', textAlign: 'center', fontSize: '0.65rem', fontWeight: '500', cursor: 'pointer' };
const contenedorFilaPartidosEstilo = { display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' };
const tarjetaPartidoSuperiorStyle = { backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 10px', minWidth: '175px', flexShrink: 0, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' };

const badgeFaseEstilo = { position: 'absolute', top: '4px', right: '6px', backgroundColor: '#00b020', color: '#ffffff', fontSize: '0.5rem', fontWeight: '800', padding: '1px 4px', borderRadius: '2px', textTransform: 'uppercase' };
const filaEquiposMatchStyle = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4px', marginTop: '4px' };
const bloqueEquipoMatchStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', width: '45px' };
const banderaMatchStyle = { width: '28px', height: '18px', objectFit: 'cover', borderRadius: '3px', boxShadow: '0 1px 3px rgba(0,0,0,0.3)' };
const nombreEquipoMatchStyle = { fontSize: '0.75rem', fontWeight: '800', color: '#ffffff', marginTop: '2px' };
const vsTextoEstilo = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontWeight: '800', minWidth: '35px', textAlign: 'center' };
const infoLugarMatchStyle = { fontSize: '0.62rem', color: '#a0aec0', fontWeight: '700', textTransform: 'uppercase' };

const sinPartidosEstilo = { color: '#a0aec0', fontSize: '0.8rem', textAlign: 'center', width: '100%', paddingTop: '15px' };
const seccionTablasCarruselStyle = { display: 'flex', flexDirection: 'column' };
const wrapperSlideCarrusel = { backgroundColor: '#ffffff', borderRadius: '8px', padding: '8px 12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' };

// Estilos de los Selectores Adaptativos de Grupo
const contenedorSelectorGrupoStyle = { marginBottom: '6px', width: '100%' };
const selectGrupoMobileStyle = { display: 'none', width: '100%', padding: '5px 8px', fontSize: '0.75rem', fontWeight: '700', color: '#0a192f', backgroundColor: '#f4f6f9', border: '1px solid #cbd5e1', borderRadius: '4px', outline: 'none' };
const tabsGrupoWebStyle = { display: 'flex', gap: '4px', width: '100%' };
const tabBotonActivoStyle = { flex: 1, backgroundColor: '#0a192f', color: '#ffffff', border: 'none', padding: '3px 6px', borderRadius: '3px', fontSize: '0.65rem', fontWeight: '800', cursor: 'pointer' };
const tabBotonInactivoStyle = { flex: 1, backgroundColor: '#f4f6f9', color: '#4a5568', border: '1px solid #e2e8f0', padding: '3px 6px', borderRadius: '3px', fontSize: '0.65rem', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s' };

const tablaMiniEstilo = { width: '100%', borderCollapse: 'collapse', fontSize: '0.72rem' };
const thMiniRowEstilo = { borderBottom: '1px solid #e2e8f0' };
const thMiniEstilo = { padding: '2px 4px', color: '#718096', fontWeight: '700' };
const trMiniEstilo = { borderBottom: '1px solid #f1f5f9' };
const tdMiniEstilo = { padding: '3px 4px', color: '#2d3748' };
const miniBanderaTablaStyle = { width: '15px', height: '10px', objectFit: 'cover', borderRadius: '1px', border: '1px solid #cbd5e0' };
const cardStyle = { backgroundColor: '#ffffff', padding: '35px', borderRadius: '12px', maxWidth: '900px', width: '100%', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', boxSizing: 'border-box', marginTop: '250px' };
const headerNoticiaStyle = { display: 'flex', justifyContent: 'space-between', marginBottom: '12px' };
const tagStyle = { color: '#e74c3c', fontWeight: 'bold', fontSize: '0.8rem' };
const autorStyle = { color: '#718096', fontSize: '0.8rem' };
const tituloStyle = { color: '#0a192f', fontSize: '2rem', fontWeight: '800', marginBottom: '10px', lineHeight: '1.3' };
const subtituloStyle = { color: '#4a5568', fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.4' };
const contenedorImagenStyle = { width: '100%', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' };
const imagenStyle = { width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover' };
const lineaDecorativaStyle = { width: '70px', height: '4px', backgroundColor: '#f1c40f', marginBottom: '20px' };
const contenidoTextoStyle = { fontSize: '1.05rem', color: '#2d3748', lineHeight: '1.75', marginBottom: '25px', textAlign: 'justify', whiteSpace: 'pre-line' };
const btnVolverStyle = { display: 'inline-block', backgroundColor: '#0a192f', color: '#ffffff', padding: '10px 22px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.95rem' };
const separadorSugerenciasStyle = { border: '0', height: '1px', backgroundColor: '#e2e8f0', margin: '35px 0 25px 0' };
const gridSugerenciasStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' };
const enlaceSugerenciaStyle = { textDecoration: 'none', color: 'inherit' };
const miniCardSugerenciaStyle = { display: 'flex', gap: '12px', backgroundColor: '#f8fafc', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' };
const miniImgSugerenciaStyle = { width: '110px', height: '75px', objectFit: 'cover', borderRadius: '4px' };
const miniTituloSugerenciaStyle = { fontSize: '0.92rem', color: '#0a192f', margin: '0 0 4px 0', fontWeight: '700', lineHeight: '1.3' };
const miniEnlaceTextoStyle = { fontSize: '0.82rem', color: '#f1c40f', fontWeight: '700' };