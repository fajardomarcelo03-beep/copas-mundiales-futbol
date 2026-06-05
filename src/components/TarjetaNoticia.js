import React from 'react';

const TarjetaNoticia = ({ noticia, lang, rutaBase }) => {
  if (!noticia) return null;

  // Accedemos al objeto de idioma dinámicamente: noticia.es o noticia.en
  const content = noticia[lang] || noticia.es;

  return (
    <div className="border rounded-lg p-4 shadow-sm mb-4 bg-white">
      {/* Usamos el título del idioma correspondiente */}
      <h2 className="text-xl font-bold mb-2">
        {content.titulo || "Sin título"}
      </h2>
      
      {/* Usamos fechaISO que es la propiedad raíz */}
      <p className="text-sm text-gray-500 mb-4">
        {noticia.fechaISO || "Sin fecha"}
      </p>
      
      {/* Usamos el subtítulo como resumen */}
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