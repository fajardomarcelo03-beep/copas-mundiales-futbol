import React from 'react';

const TarjetaNoticia = ({ noticia, lang, rutaBase }) => {
  if (!noticia) return null;

  const content = noticia[lang] || noticia.es;

  return (
    <div className="border rounded-lg p-4 shadow-sm mb-4 bg-white">
      {/* Añadimos la imagen aquí */}
      {noticia.imagen && (
        <img 
          src={noticia.imagen} 
          alt={content.titulo} 
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      <h2 className="text-xl font-bold mb-2">
        {content.titulo || "Sin título"}
      </h2>
      
      <p className="text-sm text-gray-500 mb-4">
        {noticia.fechaISO || "Sin fecha"}
      </p>
      
      <p className="text-gray-700 mb-4">
        {content.subtitulo || "Sin resumen"}
      </p>
      
      <a 
        href={`/${lang}/${rutaBase}/${noticia.id}`} 
        className="text-blue-500 hover:underline font-medium"
      >
        {lang === 'es' ? 'Leer más' : 'Read more'}
      </a>
    </div>
  );
};

export default TarjetaNoticia;