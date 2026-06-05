import React from 'react';

const TarjetaNoticia = ({ noticia, lang }) => {
  if (!noticia) return null;

  // Imprimimos la noticia en la consola para ver los nombres exactos de los campos
  console.log("Datos de la noticia:", noticia);

  return (
    <div className="border rounded-lg p-4 shadow-sm mb-4">
      {/* Mostramos los nombres reales que encontremos en el objeto */}
      <h2 className="text-xl font-bold mb-2">{noticia.titulo || noticia.title || "Sin título"}</h2>
      <p className="text-sm text-gray-500 mb-4">{noticia.fecha || noticia.date || "Sin fecha"}</p>
      <p className="text-gray-700">{noticia.resumen || noticia.summary || noticia.description || "Sin resumen"}</p>
      
      <a href={`/${lang}/mundial-2026/noticias/${noticia.id}`} className="text-blue-500 hover:underline">
        {lang === 'es' ? 'Leer más' : 'Read more'}
      </a>
    </div>
  );
};

export default TarjetaNoticia;