'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Importamos la base de datos unificada optimizada
import { datosMundiales } from '@/app/mundial/[ano]/datosMundiales';

export default function MundialPage({ params }) {
  // 1. CAPTURA SEGURA Y EXCLUSIVA DE LA URL DINÁMICA
  const asyncParams = use(params);
  const anoMundial = asyncParams?.ano;
  const [idioma, setIdioma] = useState("es"); 

  // Estados globales de la UI para el Lightbox / Galería
  const [indexModal, setIndexModal] = useState(null);

  // DICCIONARIO DE TRADUCCIONES DE LA INTERFAZ
  const textosInterface = {
    es: {
      tituloFicha: "Estadísticas del Torneo", tituloCronica: "Resumen de la Edición",
      tituloCuriosidades: "Historias y Datos Curiosos", tituloGaleria: "Galería Multimedia",
      volver: "Volver al inicio", ampliar: "Ampliar Imagen 🔍", errorTitulo: "Mundial no encontrado",
      errorDesc: "El año solicitado no se encuentra registrado en la enciclopedia.", errorBtn: "← Regresar al Inicio",
      sede: "Sede Oficial", campeon: "Campeón", subcampeon: "Subcampeón", equipos: "Equipos Participantes",
      balon: "Balón de Oro", bota: "Bota de Oro", goles: "Goles Totales", partidos: "Partidos Jugados"
    },
    en: {
      tituloFicha: "Tournament Statistics", tituloCronica: "Summary of the Edition",
      tituloCuriosidades: "Stories and Trivia", tituloGaleria: "Multimedia Gallery",
      volver: "Back to home", ampliar: "Enlarge Image 🔍", errorTitulo: "World Cup not found",
      errorDesc: "The requested year is not registered in the encyclopedia.", errorBtn: "← Back to Home",
      sede: "Official Host", campeon: "Champion", subcampeon: "Runner-up", equipos: "Participating Teams",
      balon: "Golden Ball", bota: "Golden Boot", goles: "Total Goals", partidos: "Matches Played"
    }
  };

  // CONTROL INTERNO ASÍNCRONO ANTES DE PROCESAR UI
  if (!anoMundial) return <div style={mainContainerStyle}>Cargando Enciclopedia Histórica...</div>;

  const t = textosInterface[idioma] || textosInterface["es"];
  
  // Buscamos directamente en el archivo externo importado
  const mundialSeleccionado = datosMundiales[anoMundial];

  // Si el mundial no existe en la base de datos estructuramos un objeto vacío limpio por seguridad
  const mundial = mundialSeleccionado ? mundialSeleccionado[idioma] : {
    anfitrion: "--", campeon: "--", subcampeon: "--", goles: "--", partidos: "--", 
    botaOro: "--", equipos: "--", balonOro: "--", desc: "--", curiosidades: []
  };

  // Extraemos los archivos multimedia desde la raíz del objeto externo
  const galeriaUrls = mundialSeleccionado ? mundialSeleccionado.galeria : [];
  const imgPoster = mundialSeleccionado ? mundialSeleccionado.img : "/Estadio_final.jpg";

  // EFFECT: Manejo global del teclado para cerrar modal con 'Escape'
  useEffect(() => {
    const manejarTeclado = (event) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        setIndexModal(null);
      }
    };
    if (indexModal !== null) {
      window.addEventListener('keydown', manejarTeclado);
    }
    return () => {
      window.removeEventListener('keydown', manejarTeclado);
    };
  }, [indexModal]);

  // FUNCIONES DE NAVEGACIÓN DEL LIGHTBOX
  const cambiarImagenAnterior = () => {
    if (indexModal > 0) {
      setIndexModal((prevIndex) => prevIndex - 1);
    }
  };

  const cambiarImagenSiguiente = () => {
    if (indexModal < galeriaUrls.length - 1) {
      setIndexModal((prevIndex) => prevIndex + 1);
    }
  };

  // CONTROL DE ERROR RÍGIDO: Si el año está fuera de los rangos oficiales del fútbol
  if (!mundialSeleccionado && (parseInt(anoMundial) < 1930 || parseInt(anoMundial) > 2026)) {
    return (
      <div style={errorContainerStyle}>
        <h2>{t.errorTitulo}</h2>
        <p>{t.errorDesc}</p>
        <Link href="/" style={btnVolverStyle}>{t.errorBtn}</Link>
      </div>
    );
  }

  return (
    <main style={mainContainerStyle}>

      <Link href="/" style={backLinkFlotanteStyle} className="btn-flotante">
        <span style={flechaIconStyle}>←</span> {t.volver}
      </Link>

      <div style={wrapperStyle}>
        
        <div style={headerContainerStyle}>
          <h1 style={titleStyle}>
            {idioma === 'es' ? 'Copa Mundial de la FIFA' : 'FIFA World Cup'} {anoMundial}
          </h1>
          <p style={subtitleStyle}>📍 {t.sede}: <span style={sedeHighlightStyle}>{mundial.anfitrion}</span></p>
        </div>

        {/* BLOQUE SUPERIOR (Póster y Tarjeta Estadísticas) */}
        <div style={topGridStyle} className="top-grid-responsivo">
          <div style={imageWrapperStyle} className="poster-contenedor">
            <Image 
              src={imgPoster} 
              alt={`Póster Oficial ${anoMundial}`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div style={statsCardStyle}>
            <h2 style={statsTitleStyle}>{t.tituloFicha}</h2>
            <div style={dividerStyle}></div>
            
            <div style={statRowStyle}><span style={statLabelStyle}>🏆 {t.campeon}</span><span style={campeonStyle}>{mundial.campeon}</span></div>
            <div style={statRowStyle}><span style={statLabelStyle}>🥈 {t.subcampeon}</span><span style={valueStyle}>{mundial.subcampeon}</span></div>
            <div style={statRowStyle}><span style={statLabelStyle}>👥 {t.equipos}</span><span style={valueStyle}>{mundial.equipos}</span></div>
            <div style={statRowStyle}><span style={statLabelStyle}>🏅 {t.balon}</span><span style={oroStyle}>{mundial.balonOro}</span></div>
            <div style={statRowStyle}><span style={statLabelStyle}>👑 {t.bota}</span><span style={valueStyle}>{mundial.botaOro}</span></div>
            <div style={statRowStyle}><span style={statLabelStyle}>⚽ {t.goles}</span><span style={badgeGolesStyle}>{mundial.goles} {idioma === 'es' ? 'Goles' : 'Goals'}</span></div>
            <div style={{...statRowStyle, borderBottom: 'none'}}><span style={statLabelStyle}>🏃‍♂️ {t.partidos}</span><span style={valueStyle}>{mundial.partidos}</span></div>
          </div>
        </div>

        {/* RESUMEN CRÓNICA DE LA EDICIÓN */}
        <section style={wideSectionCardStyle}>
          <h2 style={seccionTitleStyle}>{t.tituloCronica}</h2>
          <div style={accentLineStyle}></div>
          <p style={descStyle}>{mundial.desc}</p>
        </section>

        {/* RECUADRO DE HISTORIAS Y DATOS CURIOSOS */}
        <section style={{ marginBottom: '45px' }}>
          <h2 style={seccionTitleStyle}>{t.tituloCuriosidades}</h2>
          <div style={accentLineStyle}></div>
          <div style={{...curiosidadesGridTresPorDosStyle, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}} className="curiosidades-grid">
            {mundial.curiosidades.map((curiosidad, index) => (
              <div key={index} style={curiosidadCardStyle} className="curiosidad-card">
                <div style={curiosidadNumeroStyle}>0{index + 1}</div>
                <p style={curiosidadTextoStyle}>{curiosidad}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALERÍA MULTIMEDIOS */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={seccionTitleStyle}>{t.tituloGaleria}</h2>
          <div style={accentLineStyle}></div>
          <div style={galeriaGridCuatroPorDosStyle} className="galeria-grid">
            {galeriaUrls.slice(0, 8).map((imgUrl, idx) => (
              <div 
                key={idx} 
                style={galeriaItemStyle} 
                onClick={() => setIndexModal(idx)}
                className="contenedor-galeria-item"
              >
                <Image 
                  src={imgUrl} 
                  alt={`Registro visual ${idx + 1}`}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  className="foto-galeria"
                />
                <div style={galeriaOverlayStyle} className="overlay-galeria">
                  <span>{t.ampliar}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* LIGHTBOX / MODAL INTERACTIVO OPTIMIZADO */}
      {indexModal !== null && (
        <div style={modalLightboxStyle} onClick={() => setIndexModal(null)}>
          
          {indexModal > 0 && (
            <button 
              style={flechaNavegacionIzquierdaStyle} 
              onClick={(e) => { e.stopPropagation(); cambiarImagenAnterior(); }}
              className="flecha-modal"
            >
              ‹
            </button>
          )}

          <div style={modalContenedorStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeModalBtn} onClick={() => setIndexModal(null)}>✕</button>
            <div style={{ position: 'relative', width: '90vw', height: '70vh', maxWidth: '900px', maxHeight: '650px' }}>
              <Image 
                src={galeriaUrls[indexModal]} 
                alt="Visualización ampliada" 
                fill 
                style={{ objectFit: 'contain' }} 
                priority
              />
            </div>
          </div>

          {indexModal < galeriaUrls.length - 1 && (
            <button 
              style={flechaNavegacionDerechaStyle} 
              onClick={(e) => { e.stopPropagation(); cambiarImagenSiguiente(); }}
              className="flecha-modal"
            >
              ›
            </button>
          )}
        </div>
      )}

      {/* ⚡ MEDIA QUERIES RESPONSIVAS ⚡ */}
      <style jsx global>{`
        .foto-galeria:hover { transform: scale(1.08); }
        .contenedor-galeria-item:hover .overlay-galeria { opacity: 1 !important; }
        .btn-flotante:hover { transform: scale(1.04); background-color: #f8fafc !important; }
        .flecha-modal:hover { background-color: rgba(255, 255, 255, 0.25) !important; transform: scale(1.1); }
        
        @media (max-width: 900px) {
          .top-grid-responsivo { grid-template-columns: 1fr !important; gap: 20px !important; }
          .poster-contenedor { height: 380px !important; }
          .galeria-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .btn-flotante { position: relative !important; top: 0 !important; right: 0 !important; margin-bottom: 25px !important; display: inline-flex !important; }
        }

        @media (max-width: 600px) {
          .poster-contenedor { height: 300px !important; }
          .curiosidades-grid { grid-template-columns: 1fr !important; gap: 15px !important; }
          .curiosidad-card { padding: 16px !important; }
          .flecha-modal { width: 45px !important; height: 45px !important; font-size: 2rem !important; }
        }
      `}</style>
    </main>
  );
}

// ---- ARQUITECTURA DE ESTILOS PREMIUM (CSS-in-JS) ----
const mainContainerStyle = { backgroundColor: '#f8fafc', minHeight: '100vh', padding: '40px 20px 50px 20px', fontFamily: 'system-ui, -apple-system, sans-serif' };
const wrapperStyle = { maxWidth: '1140px', margin: '0 auto' };
const backLinkFlotanteStyle = { position: 'fixed', top: '30px', right: '40px', color: '#0a192f', textDecoration: 'none', fontWeight: '700', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', backgroundColor: '#ffffff', padding: '10px 18px', borderRadius: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', transition: 'transform 0.2s ease, background-color 0.2s ease', zIndex: 200 };
const flechaIconStyle = { marginRight: '6px', fontSize: '1.05rem' };
const headerContainerStyle = { marginBottom: '35px' };
const titleStyle = { fontSize: '2.2rem', fontWeight: '800', color: '#0a192f', marginBottom: '8px', letterSpacing: '-0.03em' };
const subtitleStyle = { fontSize: '1.05rem', color: '#64748b', fontWeight: '500' };
const sedeHighlightStyle = { color: '#0f172a', fontWeight: '700' };
const topGridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '35px', marginBottom: '45px' };
const imageWrapperStyle = { position: 'relative', height: '480px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' };
const statsCardStyle = { backgroundColor: '#ffffff', borderRadius: '16px', padding: '25px', boxShadow: '0 10px 25px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #edf2f7' };
const statsTitleStyle = { fontSize: '1.35rem', fontWeight: '700', color: '#0a192f', marginBottom: '12px' };
const dividerStyle = { height: '3px', backgroundColor: '#3b82f6', width: '50px', borderRadius: '2px', marginBottom: '15px' };
const statRowStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: '1px dashed #e2e8f0' };
const statLabelStyle = { fontSize: '0.95rem', color: '#475569', fontWeight: '500' };
const valueStyle = { fontSize: '0.95rem', color: '#0f172a', fontWeight: '600' };
const campeonStyle = { fontSize: '1.05rem', color: '#16a34a', fontWeight: '700' };
const oroStyle = { fontSize: '0.95rem', color: '#ca8a04', fontWeight: '600' };
const badgeGolesStyle = { backgroundColor: '#eff6ff', color: '#1d4ed8', padding: '4px 10px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '700' };
const wideSectionCardStyle = { backgroundColor: '#ffffff', borderRadius: '16px', padding: '35px', boxShadow: '0 10px 25px rgba(0,0,0,0.02)', marginBottom: '45px', border: '1px solid #edf2f7' };
const seccionTitleStyle = { fontSize: '1.5rem', fontWeight: '700', color: '#0a192f', marginBottom: '8px' };
const accentLineStyle = { height: '4px', backgroundColor: '#3b82f6', width: '35px', borderRadius: '2px', marginBottom: '25px' };
const descStyle = { fontSize: '1.1rem', color: '#334155', lineHeight: '1.75', textAlign: 'justify' };
const curiosidadesGridTresPorDosStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const curiosidadCardStyle = { backgroundColor: '#ffffff', borderRadius: '14px', padding: '24px', boxShadow: '0 8px 20px rgba(0,0,0,0.01)', border: '1px solid #f1f5f9', display: 'flex', gap: '18px', alignItems: 'flex-start' };
const curiosidadNumeroStyle = { fontSize: '1.35rem', fontWeight: '800', color: '#3b82f6', opacity: '0.8', fontFamily: 'monospace' };
const curiosidadTextoStyle = { fontSize: '0.95rem', color: '#334155', lineHeight: '1.6', margin: 0 };
const galeriaGridCuatroPorDosStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' };
const galeriaItemStyle = { position: 'relative', height: '150px', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' };
const galeriaOverlayStyle = { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10, 25, 47, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ffffff', fontSize: '0.85rem', fontWeight: '600', opacity: 0, transition: 'opacity 0.3s ease', backdropFilter: 'blur(3px)' };
const modalLightboxStyle = { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(10, 25, 47, 0.92)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(6px)' };
const modalContenedorStyle = { position: 'relative', backgroundColor: 'transparent', padding: '10px', borderRadius: '12px' };
const closeModalBtn = { position: 'absolute', top: '-45px', right: '0px', backgroundColor: 'transparent', border: 'none', color: '#ffffff', fontSize: '1.5rem', cursor: 'pointer', outline: 'none' };
const errorContainerStyle = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', gap: '15px' };
const btnVolverStyle = { padding: '10px 20px', backgroundColor: '#3b82f6', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: '600' };
const flechaNavegacionIzquierdaStyle = { position: 'absolute', left: '20px', backgroundColor: 'rgba(255, 255, 255, 0.12)', border: 'none', color: '#ffffff', fontSize: '3rem', width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', userSelect: 'none', transition: 'all 0.2s ease', outline: 'none', zIndex: 2010, paddingBottom: '7px' };
const flechaNavegacionDerechaStyle = { position: 'absolute', right: '20px', backgroundColor: 'rgba(255, 255, 255, 0.12)', border: 'none', color: '#ffffff', fontSize: '3rem', width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', userSelect: 'none', transition: 'all 0.2s ease', outline: 'none', zIndex: 2010, paddingBottom: '7px' };