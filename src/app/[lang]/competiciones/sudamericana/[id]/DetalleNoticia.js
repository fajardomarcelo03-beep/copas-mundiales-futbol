'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useIdioma } from '@/app/HeaderContextLayout';
import { noticiasSudamericana } from '@/data/noticias/sudamericanaData';
import { useParams } from 'next/navigation';
import Image from 'next/image';

export default function DetalleSudamericanaPage() {
  const params = useParams();
  const id = params.id;
  
  const { idioma } = useIdioma();
  const [sugerenciasAleatorias, setSugerenciasAleatorias] = useState([]);

  // Búsqueda de la noticia
  const objetoNoticia = noticiasSudamericana.find(n => n.id === id);

  useEffect(() => {
    if (noticiasSudamericana && id) {
      const otras = noticiasSudamericana.filter(n => n.id !== id);
      const mezcladas = [...otras].sort(() => 0.5 - Math.random());
      setSugerenciasAleatorias(mezcladas.slice(0, 4));
    }
  }, [id]);

  if (!objetoNoticia) {
    return (
      <div style={{ ...containerStyle, justifyContent: 'center' }}>
        <h2>{idioma === 'es' ? 'Artículo no encontrado' : 'Article not found'}</h2>
        <Link href={`/${idioma}`} style={btnVolverStyle}>
          {idioma === 'es' ? '← Volver a Portada' : '← Back to Home'}
        </Link>
      </div>
    );
  }

  const textoNoticia = objetoNoticia[idioma];

  return (
    <div style={containerStyle} className="vista-detalle-noticia-raiz">
      <div style={cardStyle} className="cuerpo-articulo-card">
        <div style={headerNoticiaStyle} className="header-noticia">
          <span style={tagStyle}>🔴 SUDAMERICANA 2026</span>
          <span style={fechaStyle}>⏱️ {textoNoticia.tiempoLectura} | ✍️ {textoNoticia.fecha}</span>
        </div>
        
        <h1 style={tituloStyle} className="noticia-titulo">{textoNoticia.titulo}</h1>
        <h2 style={subtituloStyle} className="noticia-subtitulo">{textoNoticia.subtitulo}</h2>
        
        <div style={contenedorImagenStyle} className="contenedor-imagen-noticia">
          <Image 
            src={objetoNoticia.imagen} 
            alt={textoNoticia.titulo} 
            fill
            priority={true}
            sizes="(max-width: 820px) 100vw, 820px"
            style={{ objectFit: 'cover' }} 
          />
        </div>
        
        <div style={lineaDecorativaStyle} className="linea-amarilla-decorativa"></div>
        
        {/* Contenido */}
        <p style={contenidoTextoStyle} className="contenido-texto">{textoNoticia.contenido}</p>

        {/* Sugerencias */}
        {sugerenciasAleatorias.length > 0 && (
          <>
            <hr style={separadorSugerenciasStyle} />
            <div style={gridSugerenciasStyle} className="grid-sugerencias">
              {sugerenciasAleatorias.map((sug) => (
                <Link key={sug.id} href={`/${idioma}/competiciones/sudamericana/${sug.id}`} style={enlaceSugerenciaStyle}>
                  <div style={miniCardSugerenciaStyle} className="mini-card-sugerencia">
                    <div style={{ position: 'relative', width: '100px', height: '70px', flexShrink: 0 }}>
                      <Image 
                        src={sug.imagen} 
                        alt={sug[idioma].titulo} 
                        fill
                        sizes="100px"
                        style={{ objectFit: 'cover', borderRadius: '4px' }} 
                      />
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <h4 style={miniTituloSugerenciaStyle}>{sug[idioma].titulo}</h4>
                      <span style={miniEnlaceTextoStyle}>{idioma === 'es' ? 'Leer artículo →' : 'Read article →'}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        <div style={{ marginTop: '35px', textAlign: 'center' }}>
          <Link href={`/${idioma}`} style={btnVolverStyle}>
            {idioma === 'es' ? '← Volver a Portada' : '← Back to Home'}
          </Link>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// ESTILOS UNIFICADOS
// =========================================================================
const containerStyle = { minHeight: '100vh', backgroundColor: '#f8fafc', padding: '12px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' };
const cardStyle = { backgroundColor: '#ffffff', padding: '35px', borderRadius: '12px', maxWidth: '820px', width: '100%', boxShadow: '0 8px 24px rgba(0,0,0,0.02)', marginTop: '40px' };
const headerNoticiaStyle = { display: 'flex', justifyContent: 'space-between', marginBottom: '12px' };
const tagStyle = { color: '#e74c3c', fontWeight: 'bold', fontSize: '0.78rem' };
const fechaStyle = { color: '#718096', fontSize: '0.78rem' };
const tituloStyle = { color: '#0a192f', fontSize: '2.1rem', fontWeight: '800', marginBottom: '10px' };
const subtituloStyle = { color: '#4a5568', fontSize: '1.08rem', marginBottom: '20px' };

const contenedorImagenStyle = { 
  width: '100%', 
  position: 'relative', 
  borderRadius: '8px', 
  overflow: 'hidden', 
  marginBottom: '20px',
  backgroundColor: '#e2e8f0',
  aspectRatio: '16 / 9', 
  maxHeight: '420px'
};

const lineaDecorativaStyle = { width: '50px', height: '4px', backgroundColor: '#f1c40f', marginBottom: '20px' };
const contenidoTextoStyle = { fontSize: '1.05rem', color: '#2d3748', lineHeight: '1.75', marginBottom: '15px', textAlign: 'justify', whiteSpace: 'pre-line' };
const btnVolverStyle = { display: 'inline-block', backgroundColor: '#0a192f', color: '#ffffff', padding: '10px 22px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.92rem' };
const separadorSugerenciasStyle = { border: '0', height: '1px', backgroundColor: '#e2e8f0', margin: '35px 0 25px 0' };
const gridSugerenciasStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' };
const enlaceSugerenciaStyle = { display: 'block', textDecoration: 'none', color: 'inherit' };
const miniCardSugerenciaStyle = { display: 'flex', gap: '12px', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' };
const miniTituloSugerenciaStyle = { fontSize: '0.88rem', color: '#0a192f', margin: '0 0 4px 0', fontWeight: '700' };
const miniEnlaceTextoStyle = { fontSize: '0.8rem', color: '#f1c40f', fontWeight: '700' };