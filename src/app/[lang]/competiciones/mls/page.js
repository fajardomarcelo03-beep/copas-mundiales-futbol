'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { getCompeticionData } from '@/services/noticiasService';
import TarjetaNoticia from '@/components/TarjetaNoticia';

export default function ListaMLSPage({ params }) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang || 'es';

  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarDatos() {
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
        {noticias.map((noticia) => (
          <TarjetaNoticia 
            key={noticia.id} 
            noticia={noticia} 
            lang={lang} 
            rutaBase="mls" 
          />
        ))}
      </div>
    </div>
  );
}