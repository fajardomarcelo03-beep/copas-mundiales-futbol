'use client';

import { useIdioma } from '../HeaderContextLayout';
import { noticiasMundial } from '@/data/noticias/mundialData';
import { noticiasLibertadores } from '@/data/noticias/libertadoresData';
import { noticiasSudamericana } from '@/data/noticias/sudamericanaData';
import { noticiasLigaPro } from '@/data/noticias/ligaProData';
import { noticiasMLS } from '@/data/noticias/mlsData';
import { noticiasLaLiga } from '@/data/noticias/laLigaData';
import { noticiasPremier } from '@/data/noticias/PremierData';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const { idioma } = useIdioma();

  const t = {
    es: { noticiasTitulo: "LO ÚLTIMO DEL MUNDO DEL FÚTBOL", leerMas: "Leer más →" },
    en: { noticiasTitulo: "LATEST FROM THE FOOTBALL WORLD", leerMas: "Read more →" }
  }[idioma || 'es'];

  // 1. COMBINAR TODAS LAS NOTICIAS (Nombres corregidos aquí)
  const todasLasNoticias = [
    ...noticiasMundial,
    ...noticiasLibertadores,
    ...noticiasSudamericana,
    ...noticiasLigaPro,
    ...noticiasMLS,
    ...noticiasLaLiga,
    ...noticiasPremier,
  ];

  // 2. ORDENAR POR FECHA Y TOMAR LAS 10 MÁS RECIENTES
  const noticiasOrdenadas = todasLasNoticias
    .sort((a, b) => new Date(b.fechaISO) - new Date(a.fechaISO))
    .slice(0, 10);
  
  const noticiaDestacada = noticiasOrdenadas[0];
  const noticiasGrid = noticiasOrdenadas.slice(1, 10);

  // 3. GENERAR LINK DINÁMICO
  const generarLink = (noticia) => {
    const base = `/${idioma}/competiciones`;
    switch(noticia.categoria) {
      case 'mundial': return `/${idioma}/mundial-2026/noticias/${noticia.id}`;
      case 'libertadores': return `${base}/libertadores/${noticia.id}`;
      case 'sudamericana': return `${base}/sudamericana/${noticia.id}`;
      case 'ligapro': return `${base}/liga-pro/${noticia.id}`;
      case 'mls': return `${base}/mls/${noticia.id}`;
      case 'liga-espanola': return `${base}/liga-espanola/${noticia.id}`;
      case 'premier-league': return `${base}/premier-league/${noticia.id}`;
      default: return `/${idioma}/noticias/${noticia.id}`;
    }
  };

  if (!noticiaDestacada) return null; // Previene error si no hay noticias cargadas

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <section style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
        <div style={contenedorMaxWidthStyle}>
          
          <h2 style={tituloSeccionStyle}>
            <span style={{ borderBottom: '3px solid #f1c40f', paddingBottom: '6px' }}>
              {t.noticiasTitulo}
            </span>
          </h2>
          
          {/* 1. NOTICIA DESTACADA */}
          <div style={{ marginBottom: '30px' }}>
            <div style={cardDestacadaStyle}>
              <div style={fotoCardStyle}>
                <div style={logoCompeticionStyle}>
                  <Image src={noticiaDestacada.logo} alt="Logo" width={30} height={30} style={{ objectFit: 'contain' }} />
                </div>
                <Image src={noticiaDestacada.imagen} alt={noticiaDestacada.es.titulo} fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
              </div>
              <div style={cardContentStyle}>
                <h3 style={cardTitleDestacadaStyle}>{noticiaDestacada[idioma || 'es'].titulo}</h3>
                <p style={cardTextStyle}>{noticiaDestacada[idioma || 'es'].subtitulo}</p>
                <Link href={generarLink(noticiaDestacada)} style={cardLinkStyle}>{t.leerMas}</Link>
              </div>
            </div>
          </div>

          {/* 2. GRID 3x3 */}
          <div style={gridContainerStyle}>
            {noticiasGrid.map((noticia) => (
              <div key={noticia.id} style={cardStyle}>
                <div style={fotoCardStyle}>
                  <div style={logoCompeticionStyle}>
                    <Image src={noticia.logo} alt="Logo" width={30} height={30} style={{ objectFit: 'contain' }} />
                  </div>
                  <Image src={noticia.imagen} alt={noticia.es.titulo} fill sizes="(max-width: 1024px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div style={cardContentStyle}>
                  <h3 style={cardTitleStyle}>{noticia[idioma || 'es'].titulo}</h3>
                  <p style={cardTextStyle}>{noticia[idioma || 'es'].subtitulo}</p>
                  <Link href={generarLink(noticia)} style={cardLinkStyle}>{t.leerMas}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ESTILOS (MANTENIDOS IGUALES)
const gridContainerStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', width: '100%' };
const cardDestacadaStyle = { gridColumn: '1 / -1', display: 'flex', flexDirection: 'row', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', minHeight: '300px' };
const cardStyle = { backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', border: '1px solid #e2e8f0' };
const fotoCardStyle = { width: '100%', position: 'relative', backgroundColor: '#f1f5f9', aspectRatio: '16/9' };
const logoCompeticionStyle = { position: 'absolute', top: '10px', left: '10px', zIndex: 10, width: '35px', height: '35px', backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '50%', padding: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' };
const cardContentStyle = { padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' };
const cardTitleStyle = { fontSize: '1.15rem', color: '#0a192f', margin: '0 0 10px 0', fontWeight: '700' };
const cardTitleDestacadaStyle = { ...cardTitleStyle, fontSize: '2rem' };
const cardTextStyle = { fontSize: '0.9rem', color: '#4a5568', lineHeight: '1.6', margin: '0 0 20px 0', flexGrow: 1 };
const cardLinkStyle = { color: '#0a192f', textDecoration: 'none', fontWeight: '800', fontSize: '0.88rem' };
const contenedorMaxWidthStyle = { maxWidth: '1280px', margin: '0 auto', width: '100%' };
const tituloSeccionStyle = { color: '#0a192f', fontSize: '1.7rem', margin: '0 0 40px 0', fontWeight: '800' };