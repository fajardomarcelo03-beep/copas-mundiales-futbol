'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// 🌐 Importamos tu hook global subiendo dos niveles de carpetas
import { useIdioma } from '../../HeaderContextLayout';

export default function DetalleNoticiaPage() {
  const params = useParams();
  
  // 🟢 CONSUMIMOS EL IDIOMA GLOBAL (Adiós a los conflictos de useSearchParams)
  const { idioma } = useIdioma();
  const noticiaId = params.id;

  // ==========================================
  // CONFIGURACIÓN CENTRALIZADA DE SELECCIONES (CÓDIGOS ISO DE BANDERA)
  // ==========================================
  const mapaEquipos = {
    "México": "mx", "Sudáfrica": "za", "Corea del Sur": "kr", "Chequia": "cz",
    "Canadá": "ca", "Bosnia y Herz.": "ba", "Catar": "qa", "Suiza": "ch",
    "Brasil": "br", "Alemania": "de", "Países Bajos": "nl", "Marruecos": "ma",
    "Suecia": "se", "Estados Unidos": "us", "Uruguay": "uy", "Ghana": "gh",
    "Japón": "jp", "Italia": "it", "Camerún": "cm", "Nueva Zelanda": "nz",
    "Argentina": "ar", "Francia": "fr", "Portugal": "pt", "Australia": "au",
    "España": "es", "Inglaterra": "gb-eng", "Bélgica": "be", "Croacia": "hr",
    "Ecuador": "ec", "Senegal": "sn", "Irán": "ir", "Argelia": "dz",
    "Colombia": "co", "Perú": "pe", "Ucrania": "ua", "Polonia": "pl",
    "Chile": "cl", "Túnez": "tn", "Costa Rica": "cr", "Arabia Saudita": "sa",
    "Egipto": "eg", "Nigeria": "ng", "Escocia": "gb-sct", "Gales": "gb-wls"
  };

  const obtenerBandera = (nombreEquipo) => {
    if (!nombreEquipo) return "un";
    if (mapaEquipos[nombreEquipo]) return mapaEquipos[nombreEquipo];
    const encontrado = Object.keys(mapaEquipos).find(k => nombreEquipo.includes(k) || k.includes(nombreEquipo));
    return encontrado ? mapaEquipos[encontrado] : "un";
  };

  // ==========================================
  // DICCIONARIO DE TRADUCCIÓN PARA PAÍSES Y TEXTOS DINÁMICOS
  // ==========================================
  const traduccionesPaises = {
    "México": { es: "México", en: "Mexico" },
    "Sudáfrica": { es: "Sudáfrica", en: "South Africa" },
    "Corea del Sur": { es: "Corea del Sur", en: "South Korea" },
    "Chequia": { es: "Chequia", en: "Czechia" },
    "Canadá": { es: "Canadá", en: "Canada" },
    "Bosnia y Herz.": { es: "Bosnia y Herz.", en: "Bosnia & Herz." },
    "Catar": { es: "Catar", en: "Qatar" },
    "Suiza": { es: "Suiza", en: "Switzerland" },
    "Brasil": { es: "Brasil", en: "Brazil" },
    "Alemania": { es: "Alemania", en: "Germany" },
    "Países Bajos": { es: "Países Bajos", en: "Netherlands" },
    "Marruecos": { es: "Marruecos", en: "Morocco" },
    "Suecia": { es: "Suecia", en: "Sweden" },
    "Estados Unidos": { es: "Estados Unidos", en: "United States" },
    "Uruguay": { es: "Uruguay", en: "Uruguay" },
    "Ghana": { es: "Ghana", en: "Ghana" },
    "Japón": { es: "Japón", en: "Japan" },
    "Italia": { es: "Italia", en: "Italy" },
    "Camerún": { es: "Camerún", en: "Cameroon" },
    "Nueva Zelanda": { es: "Nueva Zelanda", en: "New Zealand" },
    "Argentina": { es: "Argentina", en: "Argentina" },
    "Francia": { es: "Francia", en: "France" },
    "Portugal": { es: "Portugal", en: "Portugal" },
    "Australia": { es: "Australia", en: "Australia" },
    "España": { es: "España", en: "Spain" },
    "Inglaterra": { es: "Inglaterra", en: "England" },
    "Bélgica": { es: "Bélgica", en: "Belgium" },
    "Croacia": { es: "Croacia", en: "Croatia" },
    "Ecuador": { es: "Ecuador", en: "Ecuador" },
    "Senegal": { es: "Senegal", en: "Senegal" },
    "Irán": { es: "Irán", en: "Iran" },
    "Argelia": { es: "Argelia", en: "Algeria" },
    "Colombia": { es: "Colombia", en: "Colombia" },
    "Perú": { es: "Perú", en: "Peru" },
    "Ucrania": { es: "Ucrania", en: "Ukraine" },
    "Polonia": { es: "Polonia", en: "Poland" },
    "Chile": { es: "Chile", en: "Chile" },
    "Túnez": { es: "Túnez", en: "Tunisia" },
    "Costa Rica": { es: "Costa Rica", en: "Costa Rica" },
    "Arabia Saudita": { es: "Arabia Saudita", en: "Saudi Arabia" },
    "Egipto": { es: "Egipto", en: "Egypt" },
    "Nigeria": { es: "Nigeria", en: "Nigeria" },
    "Escocia": { es: "Escocia", en: "Scotland" },
    "Gales": { es: "Gales", en: "Wales" }
  };

  const traducirEquipo = (nombre, lang) => {
    if (traduccionesPaises[nombre]) {
      return traduccionesPaises[nombre][lang];
    }
    if (nombre.includes("Mejor 3°") && lang === "en") return "Best 3rd (A/B/C/D/F)";
    if (nombre.includes("Ganador") && lang === "en") return nombre.replace("Ganador", "Winner");
    return nombre;
  };

  const traducirFase = (fase, lang) => {
    if (lang === 'es') return fase;
    const fases = {
      "Fase de Grupos": "Group Stage",
      "16avos de Final": "Round of 32",
      "Cuartos de Final": "Quarter-finals",
      "FINAL MUNDIAL": "WORLD CUP FINAL"
    };
    return fases[fase] || fase;
  };

  // ==========================================
  // BASE DE DATOS COMPLETA DEL CALENDARIO GLOBAL
  // ==========================================
  const todosLosPartidosMundial = [
    { fecha: "2026-06-11", e1: "México", e2: "Sudáfrica", hora: "8:00 PM ET", estadio: "Estadio Azteca", fase: "Fase de Grupos" },
    { fecha: "2026-06-11", e1: "Corea del Sur", e2: "Chequia", hora: "11:00 PM ET", estadio: "Estadio Akron", fase: "Fase de Grupos" },
    { fecha: "2026-06-12", e1: "Canadá", e2: "Bosnia y Herz.", hora: "4:00 PM ET", estadio: "BC Place", fase: "Fase de Grupos" },
    { fecha: "2026-06-12", e1: "Catar", e2: "Suiza", hora: "7:00 PM ET", estadio: "Lumen Field", fase: "Fase de Grupos" },
    
    { fecha: "2026-06-28", e1: "Chequia", e2: "Suiza", hora: "3:00 PM ET", estadio: "Gillette Stadium", fase: "16avos de Final" },
    { fecha: "2026-06-29", e1: "Brasil", e2: "Suecia", hora: "1:00 PM ET", estadio: "Hard Rock Stadium", fase: "16avos de Final" },
    { fecha: "2026-06-29", e1: "Alemania", e2: "Mejor 3° (A/B/C/D/F)", hora: "4:30 PM ET", estadio: "Mercedes-Benz Stadium", fase: "16avos de Final" },
    { fecha: "2026-06-30", e1: "Países Bajos", e2: "Marruecos", hora: "11:00 PM ET", estadio: "AT&T Stadium", fase: "16avos de Final" },
    
    { fecha: "2026-07-09", e1: "Ganador M89", e2: "Ganador M90", hora: "6:00 PM ET", estadio: "MetLife Stadium", fase: "Cuartos de Final" },
    { fecha: "2026-07-19", e1: "Ganador SF1", e2: "Ganador SF2", hora: "7:00 PM ET", estadio: "MetLife Stadium", fase: "FINAL MUNDIAL" }
  ];

  const tablaPosicionesData = [
    { grupo: "GRUPO A", lineas: [{ posicion: 1, equipo: "México", b: "mx", pj: 0, pts: 0 }, { posicion: 2, equipo: "Sudáfrica", b: "za", pj: 0, pts: 0 }, { posicion: 3, equipo: "Corea del Sur", b: "kr", pj: 0, pts: 0 }, { posicion: 4, equipo: "Chequia", b: "cz", pj: 0, pts: 0 }] },
    { grupo: "GRUPO B", lineas: [{ posicion: 1, equipo: "Canadá", b: "ca", pj: 0, pts: 0 }, { posicion: 2, equipo: "Bosnia y Herz.", b: "ba", pj: 0, pts: 0 }, { posicion: 3, equipo: "Catar", b: "qa", pj: 0, pts: 0 }, { posicion: 4, equipo: "Suiza", b: "ch", pj: 0, pts: 0 }] },
    { grupo: "GRUPO C", lineas: [{ posicion: 1, equipo: "Estados Unidos", b: "us", pj: 0, pts: 0 }, { posicion: 2, equipo: "Uruguay", b: "uy", pj: 0, pts: 0 }, { posicion: 3, equipo: "Ghana", b: "gh", pj: 0, pts: 0 }, { posicion: 4, equipo: "Japón", b: "jp", pj: 0, pts: 0 }] },
    { grupo: "GRUPO D", lineas: [{ posicion: 1, equipo: "Alemania", b: "de", pj: 0, pts: 0 }, { posicion: 2, equipo: "Italia", b: "it", pj: 0, pts: 0 }, { posicion: 3, equipo: "Camerún", b: "cm", pj: 0, pts: 0 }, { posicion: 4, equipo: "Nueva Zelanda", b: "nz", pj: 0, pts: 0 }] },
    { grupo: "GRUPO E", lineas: [{ posicion: 1, equipo: "Argentina", b: "ar", pj: 0, pts: 0 }, { posicion: 2, equipo: "Francia", b: "fr", pj: 0, pts: 0 }, { posicion: 3, equipo: "Australia", b: "au", pj: 0, pts: 0 }, { posicion: 4, equipo: "Argelia", b: "dz", pj: 0, pts: 0 }] },
    { grupo: "GRUPO F", lineas: [{ posicion: 1, equipo: "Brasil", b: "br", pj: 0, pts: 0 }, { posicion: 2, equipo: "Portugal", b: "pt", pj: 0, pts: 0 }, { posicion: 3, equipo: "Marruecos", b: "ma", pj: 0, pts: 0 }, { posicion: 4, equipo: "Escocia", b: "gb-sct", pj: 0, pts: 0 }] },
    { grupo: "GRUPO G", lineas: [{ posicion: 1, equipo: "España", b: "es", pj: 0, pts: 0 }, { posicion: 2, equipo: "Suecia", b: "se", pj: 0, pts: 0 }, { posicion: 3, equipo: "Colombia", b: "co", pj: 0, pts: 0 }, { posicion: 4, equipo: "Gales", b: "gb-wls", pj: 0, pts: 0 }] },
    { grupo: "GRUPO H", lineas: [{ posicion: 1, equipo: "Inglaterra", b: "gb-eng", pj: 0, pts: 0 }, { posicion: 2, equipo: "Bélgica", b: "be", pj: 0, pts: 0 }, { posicion: 3, equipo: "Ecuador", b: "ec", pj: 0, pts: 0 }, { posicion: 4, equipo: "Túnez", b: "tn", pj: 0, pts: 0 }] },
    { grupo: "GRUPO I", lineas: [{ posicion: 1, equipo: "Países Bajos", b: "nl", pj: 0, pts: 0 }, { posicion: 2, equipo: "Croacia", b: "hr", pj: 0, pts: 0 }, { posicion: 3, equipo: "Senegal", b: "sn", pj: 0, pts: 0 }, { posicion: 4, equipo: "Perú", b: "pe", pj: 0, pts: 0 }] }
  ];

  const [partidosFiltradosHoy, setPartidosFiltradosHoy] = useState([]);
  const [grupoActivoCarrusel, setGrupoActivoCarrusel] = useState(0);
  const [fechaActualVisual, setFechaActualVisual] = useState("");
  const [mostrarCabecera, setMostrarCabecera] = useState(true);

  useEffect(() => {
    const manejarScroll = () => {
      if (window.scrollY > 40) {
        setMostrarCabecera(false);
      } else {
        setMostrarCabecera(true);
      }
    };

    window.addEventListener('scroll', manejarScroll);

    const hoy = new Date();
    let fechaFormateada = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
    
    if (hoy < new Date("2026-06-11T00:00:00")) {
      fechaFormateada = "2026-06-11"; 
    }
    setFechaActualVisual(fechaFormateada);

    setPartidosFiltradosHoy(todosLosPartidosMundial.filter(p => p.fecha === fechaFormateada));

    const intervaloCarrusel = setInterval(() => {
      setGrupoActivoCarrusel((prev) => (prev + 1) % tablaPosicionesData.length);
    }, 3500);

    return () => {
      window.removeEventListener('scroll', manejarScroll);
      clearInterval(intervaloCarrusel);
    };
  }, []);

  const noticiasDetalle = {
    "noticia-1": { imagen: "/Azteca.jpg", es: { titulo: "El Estadio Azteca hará historia en la inauguración de 2026", subtitulo: "El coloso de Santa Úrsula se convierte en el templo definitivo de la FIFA.", contenido: "La FIFA ha confirmado de manera oficial que el místico Estadio Azteca de la Ciudad de México será el escenario encargado de albergar el partido inaugural del Mundial el 11 de junio de 2026.", autor: "Redacción FIFA 2026", tiempoLectura: "3 min" }, en: { titulo: "Azteca Stadium will make history in the 2026 opening match", subtitulo: "The Santa Úrsula colossus becomes FIFA's definitive temple.", contenido: "FIFA has officially confirmed that the legendary Azteca Stadium in Mexico City will host the opening match of the World Cup on June 11, 2026.", autor: "FIFA 2026 Press", tiempoLectura: "3 min" } },
    "noticia-2": { imagen: "/Sedes.jpg", es: { titulo: "Sedes listas en Norteamérica para recibir el macro torneo", subtitulo: "Las 16 ciudades anfitrionas reportan avances óptimos en logística.", contenido: "Los comités organizadores de Estados Unidos, México y Canadá han presentado su informe unificado de infraestructura.", autor: "Corresponsal Norteamérica", tiempoLectura: "2 min" }, en: { titulo: "North American host venues fully prepared for the macro tournament", subtitulo: "All 16 host cities report optimal logistical progress.", contenido: "The joint organizing committees of the United States, Mexico, and Canada presented their unified infrastructure master plan.", autor: "North America Correspondent", tiempoLectura: "2 min" } },
    "noticia-3": { 
      imagen: "/Selecciones.jpg", 
      es: { 
        titulo: "Formato Y calendario Oficial de la Copa del Mundo 2026", 
        subtitulo: "Conoce a detalle la transformación del formato de competición y el cronograma definitivo de la fase final.", 
        contenido: (
          <div style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#2d3748' }}>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              La <strong>Copa Mundial de la FIFA 2026</strong> marcará un hito sin precedentes en la cronología del balompié internacional. Programado para desarrollarse del 11 de junio al 19 de julio de 2026, el torneo estrenará un formato estructuralmente renovado. Por primera vez en la historia de la competición, la fase final reunirá a <strong>48 selecciones nacionales</strong> y será albergada en una histórica coorganización tripartita entre <strong>Canadá, Estados Unidos y México</strong>.
            </p>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              El sistema de competición ha sido rediseñado meticulosamente para optimizar la competitividad. La fase inicial constará de <strong>12 grupos de cuatro equipos</strong> cada uno, garantizando que cada delegación dispute un mínimo de tres partidos. La clasificación a la etapa de eliminación directa estará estrictamente reservada para los dos primeros lugares de cada sector, complementados por los los ocho mejores terceros clasificados.
            </p>
            <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
              Como principal innovación en la estructura de los <em>playoffs</em>, se incorporará una ronda de <strong>dieciseisavos de final</strong> compuesta por 32 escuadras. A partir de allí, el torneo procederá bajo el formato tradicional de eliminación súbita a través de octavos, cuartos, semifinales y la gran final. Esta expansión elevará el calendario a un total de <strong>104 encuentros</strong>, consolidando a esta edición como la más extensa, inclusiva y con mayor despliegue logístico en la historia del fútbol global.
            </p>
            
            <h3 style={{ color: '#0a192f', fontSize: '1.35rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🗓️</span> Cronograma Oficial del Torneo
            </h3>
            
            <div style={{ overflowX: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', marginBottom: '10px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#0a192f', color: '#ffffff' }}>
                    <th style={{ padding: '12px 16px', fontWeight: '700', borderBottom: '3px solid #f1c40f' }}>Fase del Campeonato</th>
                    <th style={{ padding: '12px 16px', fontWeight: '700', borderBottom: '3px solid #f1c40f' }}>Periodo / Fecha</th>
                    <th style={{ padding: '12px 16px', fontWeight: '700', borderBottom: '3px solid #f1c40f' }}>Detalle Informativo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '700', color: '#0a192f' }}>⚽ Partido Inaugural</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>11 de Junio</td>
                    <td style={{ padding: '12px 16px', fontStyle: 'italic' }}>México vs. Sudáfrica (Estadio Azteca, CDMX)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600' }}>📋 Fase de Grupos</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>Del 11 al 27 de Junio</td>
                    <td style={{ padding: '12px 16px' }}>12 sectores en sedes concurrentes</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600' }}>⚡ Dieciseisavos de Final</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>Del 28 de Junio al 3 de Julio</td>
                    <td style={{ padding: '12px 16px' }}>Ronda eliminatoria de 32 equipos</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600' }}>🔥 Octavos de Final</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>Del 4 al 7 de Julio</td>
                    <td style={{ padding: '12px 16px' }}>Clasificación directa a cuartos</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600' }}>🏆 Cuartos de Final</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>Del 9 al 11 de Julio</td>
                    <td style={{ padding: '12px 16px' }}>Fase de alta exigencia competitiva</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600' }}>🌟 Semifinales</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>14 y 15 de Julio</td>
                    <td style={{ padding: '12px 16px' }}>Definición de los dos grandes finalistas</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600' }}>🥉 Tercer Lugar</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>18 de Julio</td>
                    <td style={{ padding: '12px 16px' }}>Consagración del podio mundialista</td>
                  </tr>
                  <tr style={{ backgroundColor: '#fffbf0' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '800', color: '#b7791f' }}>👑 Gran Final</td>
                    <td style={{ padding: '14px 16px', fontWeight: '700', whiteSpace: 'nowrap' }}>19 de Julio</td>
                    <td style={{ padding: '14px 16px', fontWeight: '700', color: '#0a192f' }}>Clausura y coronación del Campeón</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ), 
        autor: "Mesa de Deportes", 
        tiempoLectura: "5 min" 
      }, 
      en: { 
        titulo: "**Official Format and Schedule of the 2026 FIFA World Cup",
        subtitulo: "An in-depth look at the structural competition upgrade and the definitive knockout phase schedule.", 
        contenido: (
          <div style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#2d3748' }}>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              The <strong>2026 FIFA World Cup</strong> will mark an unprecedented milestone in the chronology of international football. Scheduled to take place from June 11 to July 19, 2026, the tournament will debut a structurally renewed format. For the first time in the history of the competition, the final stage will bring together <strong>48 national teams</strong> and will be hosted in a historic tripartite co-organization between <strong>Canada, Mexico, and the United States</strong>.
            </p>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              The competition system has been meticulously redesigned to optimize global competitiveness. The initial phase will consist of <strong>12 groups of four teams</strong> each, ensuring that every delegation plays a minimum of three matches. Qualification for the direct elimination stage will be strictly reserved for the top two places in each sector, complemented by the eight best third-placed finishers.
            </p>
            <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
              As a major innovation in the <em>playoffs</em> structure, a <strong>round of 32</strong> consisting of 32 squads will be incorporated. From there, the tournament will proceed under the traditional single-elimination format through the round of 16, quarter-finals, semi-finals, and the grand finale. This expansion will increase the schedule to a total of <strong>104 matches</strong>, consolidating this edition as the most extensive, inclusive, and logistically demanding in global football history.
            </p>
            
            <h3 style={{ color: '#0a192f', fontSize: '1.35rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🗓️</span> Official Tournament Schedule
            </h3>
            
            <div style={{ overflowX: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', marginBottom: '10px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#0a192f', color: '#ffffff' }}>
                    <th style={{ padding: '12px 16px', fontWeight: '700', borderBottom: '3px solid #f1c40f' }}>Tournament Stage</th>
                    <th style={{ padding: '12px 16px', fontWeight: '700', borderBottom: '3px solid #f1c40f' }}>Period / Date</th>
                    <th style={{ padding: '12px 16px', fontWeight: '700', borderBottom: '3px solid #f1c40f' }}>Key Matchday Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '700', color: '#0a192f' }}>⚽ Opening Match</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>June 11</td>
                    <td style={{ padding: '12px 16px', fontStyle: 'italic' }}>Mexico vs. South Africa (Azteca Stadium, CDMX)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600' }}>📋 Group Stage</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>June 11 to June 27</td>
                    <td style={{ padding: '12px 16px' }}>12 sectors across concurrent host cities</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600' }}>⚡ Round of 32</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>June 28 to July 3</td>
                    <td style={{ padding: '12px 16px' }}>Knockout stage featuring 32 teams</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600' }}>🔥 Round of 16</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>July 4 to July 7</td>
                    <td style={{ padding: '12px 16px' }}>Direct qualification path to quarter-finals</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600' }}>🏆 Quarter-finals</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>July 9 to July 11</td>
                    <td style={{ padding: '12px 16px' }}>High-intensity elite competition phase</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600' }}>🌟 Semi-finals</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>July 14 and July 15</td>
                    <td style={{ padding: '12px 16px' }}>Determining the two grand finalists</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600' }}>🥉 Third Place Play-off</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>July 18</td>
                    <td style={{ padding: '12px 16px' }}>Crowning the World Cup podium</td>
                  </tr>
                  <tr style={{ backgroundColor: '#fffbf0' }}>
                    <td style={{ padding: '14px 16px', fontWeight: '800', color: '#b7791f' }}>👑 Grand Final</td>
                    <td style={{ padding: '14px 16px', fontWeight: '700', whiteSpace: 'nowrap' }}>July 19</td>
                    <td style={{ padding: '14px 16px', fontWeight: '700', color: '#0a192f' }}>Closing ceremony and Champion coronation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ), 
        autor: "Sports Desk", 
        tiempoLectura: "5 min" 
      } 
    },
    "noticia-4": { imagen: "/Estadio_final.jpg", es: { titulo: "La Gran Final en Nueva York/Nueva Jersey", subtitulo: "El MetLife Stadium será el escenario donde se definirá al nuevo campeón del mundo.", contenido: "El MetLife Stadium, con capacidad para más de 80 mil espectadores, será la sede de la final de la copa del mundo 2026.", autor: "Mesa de Deportes", tiempoLectura: "5 min" }, en: { titulo: "The Grand Finale in New York/New Jersey", subtitulo: "The MetLife Stadium will be the venue where the new world champion will be crowned.", contenido: "The MetLife Stadium, with a capacity of more than 80,000 spectators, will host the final of the 2026 FIFA World Cup.", autor: "Sports Desk", tiempoLectura: "5 min" } },
    "noticia-5": { imagen: "/Neymar_lesion.jpg", es: { titulo: "Neymar enciende las alarmas en Brasil", subtitulo: "El astro brasileño sufre una lesión muscular de grado II, pero el cuerpo médico confía en su recuperación.", contenido: "La selección brasileña enfrenta momentos de alta tensión tras confirmarse que Neymar Jr. presenta una lesión muscular de grado II.", autor: "Corresponsal Sudamérica", tiempoLectura: "4 min" }, en: { titulo: "Neymar sparks injury alarm in Brazil", subtitulo: "The Brazilian star suffers a grade II muscle injury, but the medical staff remains confident.", contenido: "The Brazilian national team is facing tense moments after confirming that Neymar Jr. has a grade II muscle injury.", autor: "South American Correspondent", tiempoLectura: "4 min" } }
  };

  const noticiaDefecto = { imagen: "/Mundial_14_4.jpg", es: { titulo: "Noticia Mundial 2026", subtitulo: "Actualización de los preparativos", contenido: "Los detalles logísticos avanzan firmemente bajo la supervisión de la FIFA.", autor: "Prensa Oficial", tiempoLectura: "1 min" }, en: { titulo: "World Cup 2026 News", subtitulo: "Operational master update", contenido: "Logistical details progress steadily under FIFA inspection.", autor: "Official Press", tiempoLectura: "1 min" } };
  
  const objetoNoticia = noticiasDetalle[noticiaId] || noticiaDefecto;
  const textoNoticia = noticiasDetalle[noticiaId] ? noticiasDetalle[noticiaId][idioma] : noticiaDefecto[idioma];

  const [sugerenciasAleatorias, setSugerenciasAleatorias] = useState([]);
  useEffect(() => {
    const keysFiltradas = Object.keys(noticiasDetalle).filter(id => id !== noticiaId);
    setSugerenciasAleatorias(keysFiltradas.sort(() => 0.5 - Math.random()).slice(0, 4));
  }, [noticiaId]);

  return (
    <div style={containerStyle}>
      
      {/* 🏆 RECUADRO SUPERIOR CONFIGURADO CON SECCIONES TOTALMENTE BILINGÜES */}
      <div 
        className="recuadro-superior-fijo"
        style={{
          ...recuadroSuperiorFijoContainer,
          opacity: mostrarCabecera ? 1 : 0,
          visibility: mostrarCabecera ? 'visible' : 'hidden',
          transform: mostrarCabecera ? 'translateY(0)' : 'translateY(-15px)'
        }}
      >
        <div style={gridInternoRecuadroStyle} className="grid-interno-recuadro">
          
          {/* Bloque Izquierdo: Partidos */}
          <div style={seccionPartidosFijoStyle}>
            <div style={encabezadoSubModuloStyle}>
              <span style={indicadorEnVivoStyle}>⚽</span> 
              {idioma === 'es' ? `PARTIDOS DEL DÍA (${fechaActualVisual})` : `FIXTURES OF THE DAY (${fechaActualVisual})`}
            </div>
            
            <div style={contenedorScrollPartidosStyle}>
              {partidosFiltradosHoy.length > 0 ? (
                partidosFiltradosHoy.map((partido, idx) => (
                  <div key={idx} style={tarjetaPartidoSuperiorStyle}>
                    <div style={badgeFaseEstilo}>{traducirFase(partido.fase, idioma)}</div>
                    <div style={filaEquiposMatchStyle}>
                      <div style={bloqueEquipoMatchStyle}>
                        <img src={`https://flagcdn.com/w40/${obtenerBandera(partido.e1)}.png`} alt="E1" style={banderaMatchStyle} />
                        <span style={nombreEquipoMatchStyle} className="nombre-equipo-match">{traducirEquipo(partido.e1, idioma)}</span>
                      </div>
                      <span style={vsTextoEstilo}>VS</span>
                      <div style={bloqueEquipoMatchStyle}>
                        <img src={`https://flagcdn.com/w40/${obtenerBandera(partido.e2)}.png`} alt="E2" style={banderaMatchStyle} />
                        <span style={nombreEquipoMatchStyle} className="nombre-equipo-match">{traducirEquipo(partido.e2, idioma)}</span>
                      </div>
                    </div>
                    <div style={infoLugarMatchStyle}>🕒 {partido.hora} | 🏟️ {partido.estadio}</div>
                  </div>
                ))
              ) : (
                <div style={sinPartidosEstilo}>
                  {idioma === 'es' ? 'No hay partidos programados para la fecha actual.' : 'No matches scheduled for today.'}
                </div>
              )}
            </div>
          </div>

          {/* Bloque Derecho: Carrusel */}
          <div style={seccionTablasCarruselStyle}>
            <div style={encabezadoSubModuloStyle}>
              <span>📊</span> {idioma === 'es' ? 'TABLA DE POSICIONES' : 'STANDINGS'}
            </div>
            
            <div style={wrapperSlideCarrusel}>
              <div style={cardHeaderGrupoCarrusel}>
                {idioma === 'es' ? tablaPosicionesData[grupoActivoCarrusel].grupo : tablaPosicionesData[grupoActivoCarrusel].grupo.replace("GRUPO", "GROUP")}
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
                  {tablaPosicionesData[grupoActivoCarrusel].lineas.map((linea, lIdx) => (
                    <tr key={lIdx} style={trMiniEstilo}>
                      <td style={{ ...tdMiniEstilo, textAlign: 'center', fontWeight: 'bold', color: '#e74c3c' }}>{linea.posicion}</td>
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

              <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '8px' }}>
                {tablaPosicionesData.map((_, dotIdx) => (
                  <div
                    key={dotIdx}
                    style={{
                      width: dotIdx === grupoActivoCarrusel ? '16px' : '6px',
                      height: '6px',
                      borderRadius: '3px',
                      backgroundColor: dotIdx === grupoActivoCarrusel ? '#f1c40f' : '#cbd5e1',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

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
        
        {/* Validamos si el contenido es un nodo JSX objeto o texto plano */}
        {typeof textoNoticia.contenido === 'string' ? (
          <p style={contenidoTextoStyle} className="contenido-texto">{textoNoticia.contenido}</p>
        ) : (
          <div className="contenido-texto">{textoNoticia.contenido}</div>
        )}

        {sugerenciasAleatorias.length > 0 && (
          <>
            <hr style={separadorSugerenciasStyle} />
            <div style={gridSugerenciasStyle} className="grid-sugerencias">
              {sugerenciasAleatorias.map((id) => (
                <Link key={id} href={`/noticias/${id}`} style={enlaceSugerenciaStyle}>
                  <div style={miniCardSugerenciaStyle} className="mini-card-sugerencia">
                    <img src={noticiasDetalle[id].imagen} alt="Mini" style={miniImgSugerenciaStyle} className="mini-img-sugerencia" />
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <h4 style={miniTituloSugerenciaStyle} className="mini-titulo-sugerencia">
                        {typeof noticiasDetalle[id][idioma].titulo === 'string' ? noticiasDetalle[id][idioma].titulo : "Leer más"}
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

      {/* ⚡ MEDIA QUERIES GLOBALES EN INLINE STYLE JSX ⚡ */}
      <style jsx global>{`
        /* Adaptaciones para Tablets y Laptops Pequeñas (< 992px) */
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

        /* Adaptaciones para Smartphones (< 640px) */
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
          .nombre-equipo-match, .nombre-equipo-tabla {
            font-size: 0.75rem !important;
            max-width: 65px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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

// ==========================================
// ESTILOS AJUSTADOS AL PIXEL (MANTENIENDO TU PALETA PREMIUM)
// ==========================================
const containerStyle = { minHeight: '100vh', backgroundColor: '#f4f6f9', padding: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box' };
const recuadroSuperiorFijoContainer = { position: 'fixed', top: '64px', left: '0', width: '100%', backgroundColor: '#0a192f', borderBottom: '4px solid #f1c40f', zIndex: '999', padding: '12px 20px', boxSizing: 'border-box', boxShadow: '0 6px 20px rgba(0,0,0,0.15)', transition: 'opacity 0.35s ease, transform 0.35s ease, visibility 0.35s' };
const gridInternoRecuadroStyle = { maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const encabezadoSubModuloStyle = { display: 'flex', alignItems: 'center', gap: '6px', color: '#ffffff', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '6px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4px' };
const indicadorEnVivoStyle = { color: '#e74c3c' };
const seccionPartidosFijoStyle = { display: 'flex', flexDirection: 'column' };
const contenedorScrollPartidosStyle = { display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '120px', overflowY: 'auto', paddingRight: '4px' };
const tarjetaPartidoSuperiorStyle = { backgroundColor: '#ffffff', borderRadius: '6px', padding: '6px 10px', position: 'relative', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' };
const badgeFaseEstilo = { position: 'absolute', top: '6px', right: '10px', backgroundColor: '#e74c3c', color: '#ffffff', fontSize: '0.58rem', fontWeight: '800', padding: '1px 5px', borderRadius: '3px' };
const filaEquiposMatchStyle = { display: 'flex', alignItems: 'center', gap: '10px', marginTop: '2px' };
const bloqueEquipoMatchStyle = { display: 'flex', alignItems: 'center', gap: '6px', flex: '1' };
const banderaMatchStyle = { width: '24px', height: '15px', objectFit: 'cover', borderRadius: '2px', border: '1px solid #e2e8f0' };
const nombreEquipoMatchStyle = { fontSize: '0.82rem', fontWeight: '700', color: '#0a192f' };
const vsTextoEstilo = { fontSize: '0.65rem', fontWeight: '800', color: '#718096' };
const infoLugarMatchStyle = { fontSize: '0.65rem', color: '#718096', marginTop: '4px', fontWeight: '600', borderTop: '1px dashed #e2e8f0', paddingTop: '3px' };
const sinPartidosEstilo = { color: '#a0aec0', fontSize: '0.8rem', textAlign: 'center', paddingTop: '20px' };
const seccionTablasCarruselStyle = { display: 'flex', flexDirection: 'column' };
const wrapperSlideCarrusel = { backgroundColor: '#ffffff', borderRadius: '6px', padding: '6px 10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' };
const cardHeaderGrupoCarrusel = { backgroundColor: '#f1c40f', color: '#0a192f', fontSize: '0.72rem', fontWeight: '800', padding: '2px 6px', borderRadius: '3px', alignSelf: 'flex-start', marginBottom: '4px' };
const tablaMiniEstilo = { width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem' };
const thMiniRowEstilo = { borderBottom: '1px solid #e2e8f0' };
const thMiniEstilo = { padding: '2px 4px', color: '#718096', fontWeight: '700' };
const trMiniEstilo = { borderBottom: '1px solid #f1f5f9' };
const tdMiniEstilo = { padding: '3px 4px', color: '#2d3748' };
const miniBanderaTablaStyle = { width: '15px', height: '10px', objectFit: 'cover', borderRadius: '1px', border: '1px solid #cbd5e0' };

// Cambiamos a mt estático superior por herencia móvil y max-width controlado
const cardStyle = { backgroundColor: '#ffffff', padding: '35px', borderRadius: '12px', maxWidth: '900px', width: '100%', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', boxSizing: 'border-box', marginTop: '250px' };
const headerNoticiaStyle = { display: 'flex', justifyContent: 'space-between', marginBottom: '12px' };
const tagStyle = { color: '#e74c3c', fontWeight: 'bold', fontSize: '0.8rem' };
const autorStyle = { color: '#718096', fontSize: '0.8rem' };
const tituloStyle = { color: '#0a192f', fontSize: '2rem', fontWeight: '800', marginBottom: '10px', lineHeight: '1.3' };
const subtituloStyle = { color: '#4a5568', fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.4' };
const contenedorImagenStyle = { width: '100%', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' };
const imagenStyle = { width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover' };
const lineaDecorativaStyle = { width: '70px', height: '4px', backgroundColor: '#f1c40f', marginBottom: '20px' };
const contenidoTextoStyle = { fontSize: '1.05rem', color: '#2d3748', lineHeight: '1.75', marginBottom: '25px', textAlign: 'justify' };
const btnVolverStyle = { display: 'inline-block', backgroundColor: '#0a192f', color: '#ffffff', padding: '10px 22px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.95rem' };
const separadorSugerenciasStyle = { border: '0', height: '1px', backgroundColor: '#e2e8f0', margin: '35px 0 25px 0' };
const gridSugerenciasStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' };
const enlaceSugerenciaStyle = { textDecoration: 'none', color: 'inherit' };
const miniCardSugerenciaStyle = { display: 'flex', gap: '12px', backgroundColor: '#f8fafc', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' };
const miniImgSugerenciaStyle = { width: '110px', height: '75px', objectFit: 'cover', borderRadius: '4px' };
const miniTituloSugerenciaStyle = { fontSize: '0.92rem', color: '#0a192f', margin: '0 0 4px 0', fontWeight: '700', lineHeight: '1.3' };
const miniEnlaceTextoStyle = { fontSize: '0.82rem', color: '#f1c40f', fontWeight: '700' };