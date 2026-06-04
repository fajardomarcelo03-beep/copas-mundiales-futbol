'use client';

import { useIdioma } from '@/app/HeaderContextLayout'; 
import { noticiasLibertadores } from '@/data/noticias/libertadoresData'; 
import Image from 'next/image';
import { useParams } from 'next/navigation'; // 1. Importa useParams

export default function LibertadoresPage() {
  const { idioma } = useIdioma();
  const params = useParams(); // 2. Obtén los parámetros de la URL
  
  // 3. Busca la noticia cuyo ID coincida con el de la URL
  const noticia = noticiasLibertadores.find((n) => n.id === params.id);

  if (!noticia) return <p>Cargando noticia...</p>;

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

      {/* CONTENIDO JUSTIFICADO */}
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