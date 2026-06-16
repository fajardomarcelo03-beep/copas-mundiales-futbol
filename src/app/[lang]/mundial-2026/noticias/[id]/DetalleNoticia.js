'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // 1. Importamos el componente
import { useIdioma } from '@/app/HeaderContextLayout';
import { noticiasMundial } from '@/data/noticias/mundialData';

export default function DetalleNoticia({ params }) {
  const { id } = params;
  const { idioma } = useIdioma();
  const [sugerenciasAleatorias, setSugerenciasAleatorias] = useState([]);

  const objetoNoticia = noticiasMundial.find(n => n.id === id);

  useEffect(() => {
    if (noticiasMundial && id) {
      const otras = noticiasMundial.filter(n => n.id !== id);
      const mezcladas = [...otras].sort(() => 0.5 - Math.random());
      setSugerenciasAleatorias(mezcladas.slice(0, 4));
    }
  }, [id]);

  if (!objetoNoticia) {
    return (
      <div style={{ ...containerStyle, justifyContent: 'center' }}>
        <h2>{idioma === 'es' ? 'Artículo no encontrado' : 'Article not found'}</h2>
        <Link href={`/${idioma}`} style={btnVolverStyle}>
          {idioma === 'es' ? '← Volver a la Portada' : '← Back to Home'}
        </Link>
      </div>
    );
  }

  const textoNoticia = objetoNoticia[idioma];

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={headerNoticiaStyle}>
          <span style={tagStyle}>🔴 {idioma === 'es' ? 'MUNDIAL 2026' : 'WORLD CUP 2026'}</span>
          <span style={fechaStyle}>⏱️ {textoNoticia.tiempoLectura} | ✍️ {textoNoticia.fecha}</span>
        </div>
        
        <h1 style={tituloStyle}>{textoNoticia.titulo}</h1>
        <h2 style={subtituloStyle}>{textoNoticia.subtitulo}</h2>
        
        {/* 2. Imagen Principal optimizada */}
        <div style={contenedorImagenStyle}>
          <Image 
            src={objetoNoticia.imagen} 
            alt={textoNoticia.titulo} 
            width={820} 
            height={420} 
            priority
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>
       {/* --- BLOQUE DE MARKETING: NEWSLETTER --- */}
        <div style={{
          backgroundColor: '#0a192f',
          padding: '25px',
          borderRadius: '8px',
          margin: '0 0 25px 0',
          textAlign: 'center',
          color: '#ffffff'
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>
            {idioma === 'es' ? '¿Quieres las noticias del Mundial 2026 en tu email?' : 'Want World Cup 2026 news in your email?'}
          </h3>
          <p style={{ fontSize: '0.9rem', marginBottom: '15px', opacity: 0.9 }}>
            {idioma === 'es' ? 'Recibe resúmenes y datos exclusivos gratis.' : 'Get exclusive summaries and data for free.'}
          </p> {/* <--- Aquí cerramos el párrafo correctamente */}
          {/* --- BLOQUE DE NEWSLETTER INCORPORADO --- */}
<div style={{ 
  margin: '30px 0', 
  padding: '10px', 
  border: '1px solid #e2e8f0', 
  borderRadius: '8px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center'
}}>
  <iframe 
    src="https://1568a985.sibforms.com/v2/serve/MUIFAMRARQ4TjyxYl6qUGpUCM_F-Cb6OIXo2tK-t7pXIUDkoojjGdsppS_U3C563k6VSZpxliftoK2dcYTx-fcgStHOTO64n0OYPut6EU6f7S3-Fj9lpObYG7taqPmHii_CWN1RI-MURHh5x5oWT1OuecDpjscdFN3RU_Lnd5ubOSe2itor42eLgiQv3VWy55iKpsiEm3Zlis0X_2g==" 
    width="540" 
    height="305" 
    frameBorder="0" 
    scrolling="auto" 
    allowFullScreen 
    style={{ display: 'block', maxWidth: '100%' }}
    title="Newsletter FutbolFanatic"
  ></iframe>
</div>
{/* --- FIN DEL BLOQUE --- */}

        <div style={lineaDecorativaStyle}></div>
        
        {textoNoticia.intro ? (
          <div>
            {textoNoticia.intro.map((parrafo, i) => (
              <p key={i} style={contenidoTextoStyle}>{parrafo}</p>
            ))}
          </div>
        ) : (
          <p style={contenidoTextoStyle}>{textoNoticia.contenido}</p>
        )}
        {objetoNoticia.video && (
  <div style={videoContainerStyle}>
    <iframe 
      src={objetoNoticia.video} 
      title="Video relacionado"
      style={iframeStyle}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
)}
        {sugerenciasAleatorias.length > 0 && (
          <>
            <hr style={separadorSugerenciasStyle} />
            <div style={gridSugerenciasStyle}>
              {sugerenciasAleatorias.map((sug) => (
                <Link key={sug.id} href={`/${idioma}/mundial-2026/noticias/${sug.id}`} style={enlaceSugerenciaStyle}>
                  <div style={miniCardSugerenciaStyle}>
                    {/* 3. Imágenes sugeridas con Lazy Loading nativo */}
                    <Image 
                      src={sug.imagen} 
                      alt={sug[idioma].titulo} 
                      width={100} 
                      height={70} 
                      style={{ objectFit: 'cover', borderRadius: '4px' }}
                    />
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
            {idioma === 'es' ? '← Volver a la Portada' : '← Back to Home'}
          </Link>
        </div>
      </div>
    </div>
  );
}

const containerStyle = { minHeight: '100vh', backgroundColor: '#f8fafc', padding: '12px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' };
const cardStyle = { backgroundColor: '#ffffff', padding: '35px', borderRadius: '12px', maxWidth: '820px', width: '100%', boxShadow: '0 8px 24px rgba(0,0,0,0.02)', marginTop: '40px' };
const headerNoticiaStyle = { display: 'flex', justifyContent: 'space-between', marginBottom: '12px' };
const tagStyle = { color: '#e74c3c', fontWeight: 'bold', fontSize: '0.78rem' };
const fechaStyle = { color: '#718096', fontSize: '0.78rem' };
const tituloStyle = { color: '#0a192f', fontSize: '2.1rem', fontWeight: '800', marginBottom: '10px' };
const subtituloStyle = { color: '#4a5568', fontSize: '1.08rem', marginBottom: '20px' };
const contenedorImagenStyle = { width: '100%', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' };
const imagenStyle = { width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover' };
const lineaDecorativaStyle = { width: '50px', height: '4px', backgroundColor: '#f1c40f', marginBottom: '20px' };
const contenidoTextoStyle = { fontSize: '1.05rem', color: '#2d3748', lineHeight: '1.75', marginBottom: '15px', textAlign: 'justify', whiteSpace: 'pre-line' };
const btnVolverStyle = { display: 'inline-block', backgroundColor: '#0a192f', color: '#ffffff', padding: '10px 22px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.92rem' };
const separadorSugerenciasStyle = { border: '0', height: '1px', backgroundColor: '#e2e8f0', margin: '35px 0 25px 0' };
const gridSugerenciasStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' };
const enlaceSugerenciaStyle = { display: 'block', textDecoration: 'none', color: 'inherit' };
const miniCardSugerenciaStyle = { display: 'flex', gap: '12px', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' };
const miniImgSugerenciaStyle = { width: '100px', height: '70px', objectFit: 'cover', borderRadius: '4px' };
const miniTituloSugerenciaStyle = { fontSize: '0.88rem', color: '#0a192f', margin: '0 0 4px 0', fontWeight: '700' };
const miniEnlaceTextoStyle = { fontSize: '0.8rem', color: '#f1c40f', fontWeight: '700' };
const videoContainerStyle = {
  position: 'relative',
  width: '100%',
  paddingBottom: '56.25%', // Relación de aspecto 16:9
  height: 0,
  overflow: 'hidden',
  marginBottom: '20px',
  borderRadius: '8px'
};

const iframeStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 0
};