'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { getCompeticionData } from '@/services/noticiasService';
import TarjetaNoticia from '@/components/TarjetaNoticia';

export default function ListaLaLigaPage({ params }) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang || 'es';
  const idioma = lang === 'en' ? 'en' : 'es';

  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [visibles, setVisibles] = useState(8); // Estado para mostrar 8 noticias iniciales

  useEffect(() => {
    async function cargarDatos() {
      // Usamos el ID correcto para LaLiga
      const data = await getCompeticionData('la-liga');
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
        LaLiga
      </h1>

      <div style={{ display: 'grid', gap: '20px' }}>
        {noticias.length > 0 ? (
          <>
            {/* Renderizamos solo el segmento definido por 'visibles' */}
            {noticias.slice(0, visibles).map((noticia) => (
              <TarjetaNoticia 
                key={noticia.id} 
                noticia={noticia} 
                lang={lang} 
                rutaBase="competiciones/la-liga" 
              />
            ))}

            {/* Botón de 'Cargar más' si quedan noticias ocultas */}
            {visibles < noticias.length && (
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button 
                  onClick={() => setVisibles(visibles + 8)}
                  style={{ 
                    padding: '12px 24px', 
                    cursor: 'pointer',
                    backgroundColor: '#0a192f',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}
                >
                  {lang === 'es' ? 'Ver más noticias' : 'Load more news'}
                </button>
              </div>
            )}
          </>
        ) : (
          <p style={{ textAlign: 'center' }}>
            {lang === 'es' ? 'No hay noticias disponibles.' : 'No news available.'}
          </p>
        )}
      </div>
    </div>
  );
}