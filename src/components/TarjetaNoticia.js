// src/components/PlantillaNoticia.js
import React from 'react';

const PlantillaNoticia = ({ noticias }) => {
  if (!noticias || noticias.length === 0) {
    return <p>No hay noticias disponibles en este momento.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {noticias.map((noticia) => (
        <div key={noticia.id} className="border rounded-lg p-4 shadow-sm">
          {/* Aquí defines tu diseño único */}
          <h2 className="text-xl font-bold mb-2">{noticia.titulo}</h2>
          <p className="text-sm text-gray-500 mb-4">{noticia.fecha}</p>
          <p className="text-gray-700">{noticia.resumen}</p>
          <a href={`/noticias/${noticia.id}`} className="text-blue-500 hover:underline">
            Leer más
          </a>
        </div>
      ))}
    </div>
  );
};

export default PlantillaNoticia;