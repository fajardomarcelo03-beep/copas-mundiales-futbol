'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { getCompeticionData } from '@/services/noticiasService';
import TarjetaNoticia from '@/components/TarjetaNoticia';

export default function ListaNoticiasPage({ params }) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang || 'es';

  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarDatos() {
      try {
        // Usamos getCompeticionData con el ID correcto del mapa de competiciones
        const data = await getCompeticionData('mundial-2026');
        setNoticias(data?.noticias || []);
      } catch (error) {
        console.error("Error al cargar noticias:", error);
        setNoticias([]);
      } finally {
        setCargando(false);
      }
    }
    cargarDatos();
  }, []);

  if (cargando) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Cargando...</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0a192f', marginBottom: '30px', textAlign: 'center' }}>
        {lang === 'es' ? 'Noticias Mundial 2026' : 'World Cup 2026 News'}
      </h1>

      <div style={{ display: 'grid', gap: '20px' }}>
        {noticias.length > 0 ? (
          noticias.map((noticia) => (
            <TarjetaNoticia 
              key={noticia.id} 
              noticia={noticia} 
              lang={lang} 
              rutaBase="mundial-2026/noticias" 
            />
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>
            {lang === 'es' ? 'No hay noticias disponibles.' : 'No news available.'}
          </p>
        )}
      </div>
    </div>
  );
}