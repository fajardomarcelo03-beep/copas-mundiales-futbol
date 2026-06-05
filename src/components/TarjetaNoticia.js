import React from 'react';

const TarjetaNoticia = ({ noticia, lang, rutaBase }) => {
  if (!noticia) return null;

  const content = noticia[lang] || noticia.es;

  // Estilos base
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row', // Imagen a la izquierda, texto a la derecha
    gap: '20px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '15px',
    marginBottom: '20px',
    backgroundColor: '#fff',
    alignItems: 'center',
    // Esto hace que en pantallas pequeñas (celular) se ponga uno sobre otro
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    }
  };

  return (
    <div style={cardStyle} className="tarjeta-noticia">
      {/* Estilos para que funcione la media query en JS */}
      <style jsx>{`
        .tarjeta-noticia {
          display: flex;
          flex-direction: row;
        }
        @media (max-width: 768px) {
          .tarjeta-noticia {
            flex-direction: column;
          }
        }
      `}</style>

      {noticia.imagen && (
        <img 
          src={noticia.imagen} 
          alt={content.titulo} 
          style={{ width: '40%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
        />
      )}
      
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
          {content.titulo}
        </h2>
        <p style={{ color: '#666', fontSize: '12px', marginBottom: '8px' }}>
          {noticia.fechaISO}
        </p>
        <p style={{ fontSize: '14px', marginBottom: '10px', color: '#444' }}>
          {content.subtitulo}
        </p>
        <a href={`/${lang}/${rutaBase}/${noticia.id}`} style={{ color: '#0070f3', textDecoration: 'none', fontWeight: '600' }}>
          {lang === 'es' ? 'Leer más →' : 'Read more →'}
        </a>
      </div>
    </div>
  );
};

export default TarjetaNoticia;