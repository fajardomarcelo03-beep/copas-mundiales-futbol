'use client';
import Link from 'next/link';
import { use } from 'react';
import { noticiasData } from '@/data/noticias/mundialData';

export default function ListaNoticiasPage({ params }) {
  const { lang } = use(params);
  const idioma = lang === 'en' ? 'en' : 'es';

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0a192f', marginBottom: '30px', textAlign: 'center' }}>
        {idioma === 'es' ? 'Noticias Mundial 2026' : 'World Cup 2026 News'}
      </h1>

      <div style={{ display: 'grid', gap: '20px' }}>
        {Object.entries(noticiasData).map(([id, data]) => {
          const content = data[idioma];
          return (
            <Link 
              key={id} 
              href={`/${lang}/mundial-2026/noticias/${id}`} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {/* Contenedor principal que se adapta al ancho disponible */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', // Esto permite que en móviles se apilen
                gap: '15px', 
                padding: '12px', 
                border: '1px solid #e2e8f0', 
                borderRadius: '10px',
                alignItems: 'center'
              }}>
                <img 
                  src={data.imagen} 
                  alt={content.titulo} 
                  style={{ 
                    width: '100%', 
                    maxWidth: '160px', 
                    height: '110px', 
                    objectFit: 'cover', 
                    borderRadius: '6px',
                    flexShrink: 0
                  }} 
                />
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column' }}>
                  <h2 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#0a192f' }}>
                    {content.titulo}
                  </h2>
                  <p style={{ margin: '0 0 8px 0', color: '#4a5568', fontSize: '0.85rem' }}>
                    {content.subtitulo}
                  </p>
                  <span style={{ fontSize: '0.7rem', color: '#718096' }}>
                    ⏱️ {content.tiempoLectura} | 📅 {content.fecha}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}