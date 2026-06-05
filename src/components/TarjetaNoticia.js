import React from 'react';

const TarjetaNoticia = ({ noticia, lang, rutaBase }) => {
  if (!noticia) return null;

  const content = noticia[lang] || noticia.es;

  return (
    /* Contenedor de la tarjeta */
    <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-6">
      
      {/* Imagen con altura fija y objeto de cobertura */}
      {noticia.imagen && (
        <img 
          src={noticia.imagen} 
          alt={content.titulo} 
          className="w-full h-56 object-cover"
        />
      )}

      {/* Contenido de texto */}
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {content.titulo}
        </h2>
        
        <p className="text-sm text-gray-500 mb-4 font-medium">
          {noticia.fechaISO}
        </p>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {content.subtitulo}
        </p>
        
        <a 
          href={`/${lang}/${rutaBase}/${noticia.id}`} 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {lang === 'es' ? 'Leer más' : 'Read more'}
        </a>
      </div>
    </div>
  );
};

export default TarjetaNoticia;