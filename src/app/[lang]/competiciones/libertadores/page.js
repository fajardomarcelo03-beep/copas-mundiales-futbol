'use client';

import { useIdioma } from '../../../HeaderContextLayout'; 
import { noticiasLibertadores } from '@/data/noticias/libertadoresData'; 
import Image from 'next/image';

export default function LibertadoresPage() {
  const { idioma } = useIdioma();
  const noticia = noticiasLibertadores[0];

  if (!noticia) return <p>Cargando...</p>;

  return (
    <article style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#0a192f', fontSize: '2.5rem', marginBottom: '20px' }}>
        {noticia[idioma].titulo}
      </h1>
      
      <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '20px' }}>
        <Image src={noticia.imagen} alt={noticia[idioma].titulo} fill style={{ objectFit: 'cover', borderRadius: '8px' }} />
      </div>

      <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '30px' }}>
        {noticia[idioma].subtitulo}
      </p>

      {/* AQUÍ ESTÁN LOS CAMBIOS DE FORMATO */}
      <div style={{ 
        textAlign: 'justify', 
        lineHeight: '1.8', 
        fontSize: '1.1rem', 
        color: '#333' 
      }}>
        {noticia[idioma].contenido}
      </div>

      <p style={{ marginTop: '30px', color: '#666', fontStyle: 'italic' }}>
        {noticia[idioma].fecha} | {noticia[idioma].tiempoLectura}
      </p>
    </article>
  );
}