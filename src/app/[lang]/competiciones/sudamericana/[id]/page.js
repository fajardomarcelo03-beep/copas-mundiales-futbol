'use client';

import { useIdioma } from '@/app/HeaderContextLayout'; 
import { noticiasSudamericana } from '@/data/noticias/sudamericanaData'; 
import Image from 'next/image';

export default function SudamericanaPage() {
  const { idioma } = useIdioma();
  const noticia = noticiasSudamericana[0];

  if (!noticia) return <p>Cargando...</p>;

  return (
    <article style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#0a192f', fontSize: '2.5rem', marginBottom: '20px' }}>
        {noticia[idioma].titulo}
      </h1>
      
      {/* CONTENEDOR DE IMAGEN CON LOGO SUPERPUESTO */}
      <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '20px' }}>
        
        {/* LOGO TORNEO */}
        <div style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          zIndex: 10,
          width: '45px',
          height: '45px',
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: '50%',
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          <Image src={noticia.logo} alt="Logo Torneo" width={30} height={30} style={{ objectFit: 'contain' }} />
        </div>

        {/* IMAGEN PRINCIPAL */}
        <Image 
          src={noticia.imagen} 
          alt={noticia[idioma].titulo} 
          fill 
          style={{ objectFit: 'cover', borderRadius: '8px' }} 
        />
      </div>

      <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '30px' }}>
        {noticia[idioma].subtitulo}
      </p>

      {/* CONTENIDO JUSTIFICADO CON INTERLINEADO AMPLIO */}
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