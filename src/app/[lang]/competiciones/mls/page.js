'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { use } from 'react';
import { getCompeticionData } from '@/services/noticiasService';

export default function ListaMLSPage({ params }) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang || 'es';
  const idioma = lang === 'en' ? 'en' : 'es';

  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarDatos() {
      // Usamos el ID 'mls' configurado en tu servicio
      const data = await getCompeticionData('mls');
      setNoticias(data?.noticias || []);
      setCargando(false);
    }
    cargarDatos();
  }, []);

  if (cargando) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Cargando...</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0a192f', marginBottom: '30px', textAlign: 'center' }}>
        MLS
      </h1>

      <div style={{ display: 'grid', gap: '20px' }}>
        {noticias.map((noticia) => {
          const content = noticia[idioma];
          // Ruta apuntando a la carpeta mls
          const ruta = `/${lang}/competiciones/mls/${noticia.id}`;

          return (
            <Link 
              key={noticia.id} 
              href={ruta} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '15px', 
                padding: '12px', 
                border: '1px solid #e2e8f0', 
                borderRadius: '10px',
                alignItems: 'center'
              }}>
                <img 
                  src={noticia.imagen || '/placeholder.jpg'} 
                  alt={content?.titulo || "Noticia"} 
                  onError={(e) => { e.target.src = '/placeholder.jpg'; }}
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
                    {content?.titulo}
                  </h2>
                  <p style={{ margin: '0 0 8px 0', color: '#4a5568', fontSize: '0.85rem' }}>
                    {content?.subtitulo}
                  </p>
                  <span style={{ fontSize: '0.7rem', color: '#718096' }}>
                    ⏱️ {content?.tiempoLectura} | 📅 {content?.fecha}
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