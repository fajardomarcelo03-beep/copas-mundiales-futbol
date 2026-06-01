// src/app/noticias/[id]/page.js
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../HeaderContextLayout';
import { noticiasData } from '../../data/noticiasData';

// =========================================================================
// 1. FUNCIONES AUXILIARES Y DICCIONARIOS (Mantenidos exactamente de tu código)
// =========================================================================
function obtenerBandera(codigo) {
  const flags = {
    'ECU': 'ec', 'QAT': 'qa', 'SEN': 'sn', 'NED': 'nl',
    'ENG': 'gb-eng', 'IRN': 'ir', 'USA': 'us', 'WAL': 'gb-wls',
    'ARG': 'ar', 'KSA': 'sa', 'MEX': 'mx', 'POL': 'pl',
    'FRA': 'fr', 'AUS': 'au', 'DEN': 'dk', 'TUN': 'tn',
    'ESP': 'es', 'CRC': 'cr', 'GER': 'de', 'JPN': 'jp',
    'BEL': 'be', 'CAN': 'ca', 'MAR': 'ma', 'CRO': 'hr',
    'BRA': 'br', 'SRB': 'rs', 'SUI': 'ch', 'CMR': 'cm',
    'POR': 'pt', 'GHA': 'gh', 'URU': 'uy', 'KOR': 'kr',
    'RSA': 'za', 'ITA': 'it', 'COL': 'co', 'CHL': 'cl'
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
      'BEL': 'Bélgica', 'CAN': 'Canadá', 'MAR': 'Marruecos', 'CRO': 'Croacia',
      'BRA': 'Brasil', 'SRB': 'Serbia', 'SUI': 'Suiza', 'CMR': 'Camerún',
      'POR': 'Portugal', 'GHA': 'Ghana', 'URU': 'Uruguay', 'KOR': 'Corea del Sur',
      'RSA': 'Sudáfrica', 'ITA': 'Italia', 'COL': 'Colombia', 'CHL': 'Chile'
    },
    en: {
      'ECU': 'Ecuador', 'QAT': 'Qatar', 'SEN': 'Senegal', 'NED': 'Netherlands',
      'ENG': 'England', 'IRN': 'Iran', 'USA': 'USA', 'WAL': 'Wales',
      'ARG': 'Argentina', 'KSA': 'Saudi Arabia', 'MEX': 'Mexico', 'POL': 'Poland',
      'FRA': 'France', 'AUS': 'Australia', 'DEN': 'Denmark', 'TUN': 'Tunisia',
      'ESP': 'Spain', 'CRC': 'Costa Rica', 'GER': 'Germany', 'JPN': 'Japan',
      'BEL': 'Belgium', 'CAN': 'Canada', 'MAR': 'Morocco', 'CRO': 'Croacia',
      'BRA': 'Brazil', 'SRB': 'Serbia', 'SUI': 'Switzerland', 'CMR': 'Cameroon',
      'POR': 'Portugal', 'GHA': 'Ghana', 'URU': 'Uruguay', 'KOR': 'South Korea',
      'RSA': 'South Africa', 'ITA': 'Italy', 'COL': 'Colombia', 'CHL': 'Chile'
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

// Data estática de partidos y posiciones (Mantenidos idénticos)
const todosLosPartidosMundial = [
  { fase: 'GRUPOS', e1: 'MEX', e2: 'RSA', hora: '11:00 AM', estadio: 'Estadio Azteca, CDMX' },
  { fase: 'GRUPOS', e1: 'USA', e2: 'ITA', hora: '02:00 PM', estadio: 'SoFi Stadium, LA' },
  { fase: 'GRUPOS', e1: 'CAN', e2: 'COL', hora: '05:00 PM', estadio: 'BMO Field, Toronto' }
];

const tablaPosicionesData = [
  { grupo: "GRUPO A", lineas: [ { posicion: 1, equipo: "MEX", pj: 0, pts: 0, b: "mx" }, { posicion: 2, equipo: "RSA", pj: 0, pts: 0, b: "za" }, { posicion: 3, equipo: "ITA", pj: 0, pts: 0, b: "it" }, { posicion: 4, equipo: "CHL", pj: 0, pts: 0, b: "cl" } ] },
  { grupo: "GRUPO B", lineas: [ { posicion: 1, equipo: "USA", pj: 0, pts: 0, b: "us" }, { posicion: 2, equipo: "ENG", pj: 0, pts: 0, b: "gb-eng" }, { posicion: 3, equipo: "IRN", pj: 0, pts: 0, b: "ir" }, { posicion: 4, equipo: "WAL", pj: 0, pts: 0, b: "gb-wls" } ] },
  { grupo: "GRUPO C", lineas: [ { posicion: 1, equipo: "ARG", pj: 0, pts: 0, b: "ar" }, { posicion: 2, equipo: "KSA", pj: 0, pts: 0, b: "sa" }, { posicion: 3, equipo: "POL", pj: 0, pts: 0, b: "pl" }, { posicion: 4, equipo: "COL", pj: 0, pts: 0, b: "co" } ] }
];

// =========================================================================
// 2. COMPONENTE PRINCIPAL
// =========================================================================
export default function DetalleNoticiaPage({ params }) {
  const { id } = React.use(params);
  const { idioma } = useLanguage();

  const [partidosFiltradosHoy, setPartidosFiltradosHoy] = useState([]);
  const [grupoActivoCarrusel, setGrupoActivoCarrusel] = useState(0);
  const [sugerenciasAleatorias, setSugerenciasAleatorias] = useState([]);

  // Carga inicial y lógica de UI
  useEffect(() => {
    setPartidosFiltradosHoy(todosLosPartidosMundial);

    // Seleccionar 2 sugerencias alternativas que no sean la noticia actual
    const todasLasKeys = Object.keys(noticiasData);
    const filtradas = todasLasKeys.filter(k => k !== id);
    const mezcladas = [...filtradas].sort(() => 0.5 - Math.random());
    setSugerenciasAleatorias(mezcladas.slice(0, 2));
  }, [id]);

  // Auto-rotación del carrusel de posiciones
  useEffect(() => {
    const intervalo = setInterval(() => {
      setGrupoActivoCarrusel((prev) => (prev + 1) % tablaPosicionesData.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

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
          
          {/* ================================================================= */}
          {/* NUEVA SECCIÓN DE PARTIDOS DEL DÍA: ESTILO DEPORTIVO PREMIUM       */}
          {/* ================================================================= */}
          <div style={seccionPartidosFijoStyle}>
            <div style={encabezadoSubModuloStyle}>
              <span style={indicadorEnVivoStyle}>🔴</span> {idioma === 'es' ? 'PARTIDOS POR FECHA' : 'MATCHES BY DATE'}
            </div>
            
            {/* Carrusel de Fechas Horizontal Horizontal */}
            <div style={carruselFechasStyle} className="hide-scrollbar">
              <div style={fechaCardActivaStyle}>
                <div>{idioma === 'es' ? 'JUE' : 'THU'}</div>
                <div style={{ fontSize: '1rem', margin: '1px 0', fontWeight: '800' }}>11</div>
                <div>{idioma === 'es' ? 'JUN' : 'JUN'}</div>
              </div>
              <div style={fechaCardInactivaStyle}>
                <div>{idioma === 'es' ? 'VIE' : 'FRI'}</div>
                <div style={{ fontSize: '1rem', margin: '1px 0', fontWeight: '800' }}>12</div>
                <div>{idioma === 'es' ? 'JUN' : 'JUN'}</div>
              </div>
              <div style={fechaCardInactivaStyle}>
                <div>{idioma === 'es' ? 'SAB' : 'SAT'}</div>
                <div style={{ fontSize: '1rem', margin: '1px 0', fontWeight: '800' }}>13</div>
                <div>{idioma === 'es' ? 'JUN' : 'JUN'}</div>
              </div>
              <div style={fechaCardInactivaStyle}>
                <div>{idioma === 'es' ? 'DOM' : 'SUN'}</div>
                <div style={{ fontSize: '1rem', margin: '1px 0', fontWeight: '800' }}>14</div>
                <div>{idioma === 'es' ? 'JUN' : 'JUN'}</div>
              </div>
            </div>

            {/* Listado de Partidos Horizontal/Deslizable */}
            <div style={contenedorFilaPartidosEstilo} className="hide-scrollbar">
              {partidosFiltradosHoy.length > 0 ? (
                partidosFiltradosHoy.map((partido, idx) => (
                  <div key={idx} style={tarjetaPartidoSuperiorStyle}>
                    <div style={badgeFaseEstilo}>{traducirFase(partido.fase, idioma)}</div>
                    <div style={infoLugarMatchStyle}>{partido.estadio.split(',')[0]}</div>
                    
                    <div style={filaEquiposMatchStyle}>
                      {/* Local */}
                      <div style={bloqueEquipoMatchStyle}>
                        <img src={`https://flagcdn.com/w80/${obtenerBandera(partido.e1)}.png`} alt="E1" style={banderaMatchStyle} />
                        <span style={nombreEquipoMatchStyle}>{partido.e1}</span>
                      </div>
                      
                      {/* VS / Hora */}
                      <div style={vsTextoEstilo}>
                        <span style={{ fontSize: '0.6rem', color: '#cbd5e1' }}>VS</span>
                        <span style={{ color: '#ffffff', fontSize: '0.78rem', marginTop: '1px' }}>{partido.hora.replace(" AM", "").replace(" PM", "")}</span>
                      </div>
                      
                      {/* Visitante */}
                      <div style={bloqueEquipoMatchStyle}>
                        <img src={`https://flagcdn.com/w80/${obtenerBandera(partido.e2)}.png`} alt="E2" style={banderaMatchStyle} />
                        <span style={nombreEquipoMatchStyle}>{partido.e2}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={sinPartidosEstilo}>
                  {idioma === 'es' ? 'No hay partidos programados.' : 'No programmed matches.'}
                </div>
              )}
            </div>
          </div>

          {/* Bloque Derecho: Carrusel de Posiciones (Se mantiene idéntico) */}
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

              {/* Indicadores de puntos (Dots) */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '6px' }}>
                {tablaPosicionesData.map((_, dotIdx) => (
                  <div
                    key={dotIdx}
                    style={{
                      width: dotIdx === grupoActivoCarrusel ? '14px' : '6px',
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

      {/* 📰 CUERPO DEL ARTÍCULO (Mantenido intacto de tu código) */}
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

      {/* ⚡ MEDIA QUERIES GLOBALES OPTIMIZADOS CON OCULTADOR DE SCROLL ⚡ */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
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
// OBJETOS DE ESTILOS (Actualizados milimétricamente)
// =========================================================================
const containerStyle = { minHeight: '100vh', backgroundColor: '#f4f6f9', padding: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box' };
const recuadroSuperiorFijoContainer = { position: 'fixed', top: '64px', left: '0', width: '100%', backgroundColor: '#0a192f', borderBottom: '4px solid #f1c40f', zIndex: '999', padding: '12px 20px', boxSizing: 'border-box', boxShadow: '0 6px 20px rgba(0,0,0,0.15)', transition: 'opacity 0.35s ease, transform 0.35s ease, visibility 0.35s' };
const gridInternoRecuadroStyle = { maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const encabezadoSubModuloStyle = { display: 'flex', alignItems: 'center', gap: '6px', color: '#ffffff', fontSize: '0.72rem', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4px' };
const indicadorEnVivoStyle = { color: '#e74c3c' };
const seccionPartidosFijoStyle = { display: 'flex', flexDirection: 'column', overflow: 'hidden' };

// Nuevos objetos de estilo para el carrusel horizontal deportivo
const carruselFechasStyle = { display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '6px', marginBottom: '6px' };
const fechaCardActivaStyle = { backgroundColor: '#00b020', color: '#ffffff', minWidth: '50px', padding: '4px', borderRadius: '6px', textAlign: 'center', fontSize: '0.65rem', fontWeight: 'bold', boxShadow: '0 2px 6px rgba(0, 176, 32, 0.4)' };
const fechaCardInactivaStyle = { backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a0aec0', minWidth: '50px', padding: '4px', borderRadius: '6px', textAlign: 'center', fontSize: '0.65rem', fontWeight: '500' };
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
const cardHeaderGrupoCarrusel = { backgroundColor: '#0a192f', color: '#ffffff', fontSize: '0.68rem', fontWeight: '800', padding: '2px 6px', borderRadius: '3px', alignSelf: 'flex-start', marginBottom: '4px' };
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