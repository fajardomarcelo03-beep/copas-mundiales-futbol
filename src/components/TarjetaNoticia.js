import React from 'react';

const TarjetaNoticia = ({ noticia, lang, rutaBase }) => {
  if (!noticia) return null;

  const content = noticia[lang] || noticia.es;

  // Estilos en línea para asegurar que se vea bien
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '30px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: '0 auto 30px auto',
    backgroundColor: '#fff'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    marginBottom: '15px'
  };

  return (
    <div style={cardStyle}>
      {noticia.imagen && (
        <img src={noticia.imagen} alt={content.titulo} style={imageStyle} />
      )}
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 10px 0' }}>
        {content.titulo}
      </h2>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
        {noticia.fechaISO}
      </p>
      <p style={{ color: '#333', marginBottom: '20px' }}>
        {content.subtitulo}
      </p>
      <a href={`/${lang}/${rutaBase}/${noticia.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>
        {lang === 'es' ? 'Leer más' : 'Read more'}
      </a>
    </div>
  );
};

export default TarjetaNoticia;