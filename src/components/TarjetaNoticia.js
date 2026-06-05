import React from 'react';

const TarjetaNoticia = ({ noticia, lang }) => {
  if (!noticia) return null;

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-bold mb-2">{noticia.titulo}</h2>
      <p className="text-sm text-gray-500 mb-4">{noticia.fecha}</p>
      <p className="text-gray-700">{noticia.resumen}</p>
      <a href={`/${lang}/mundial-2026/noticias/${noticia.id}`} className="text-blue-500 hover:underline">
        {lang === 'es' ? 'Leer más' : 'Read more'}
      </a>
    </div>
  );
};

export default TarjetaNoticia;