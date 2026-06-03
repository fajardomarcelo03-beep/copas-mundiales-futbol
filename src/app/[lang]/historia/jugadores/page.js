'use client';
import { use } from 'react';
import { jugadoresHistoricos } from '../../../../data/historiaData';

export default function JugadoresPage({ params }) {
  // Desempaquetamos los parámetros dinámicos de la URL usando la función nativa 'use' de React
  const { lang } = use(params);

  // Validamos el idioma actual. Si no es 'en' ni 'es', por defecto usamos español.
  const idiomaActual = lang === 'en' || lang === 'es' ? lang : 'es';

  // Textos estáticos de la interfaz según el idioma seleccionado
  const textos = {
    es: {
      titulo: "Leyendas de los Mundiales",
      nacimiento: "Nacimiento",
      infancia: "Infancia y Orígenes",
      mundiales: "En los Mundiales",
      logros: "Logros Históricos"
    },
    en: {
      titulo: "World Cup Legends",
      nacimiento: "Birthdate",
      infancia: "Childhood & Origins",
      mundiales: "In the World Cups",
      logros: "Historical Achievements"
    }
  };

  const t = textos[idiomaActual];

  return (
    <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* Encabezado Dinámico */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ 
          color: '#0a192f', 
          fontSize: '2.5rem', 
          fontWeight: '800',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          margin: '0 0 10px 0'
        }}>
          {t.titulo}
        </h1>
        <div style={{ width: '80px', height: '5px', backgroundColor: '#f1c40f', margin: '0 auto', borderRadius: '2px' }}></div>
      </div>

      {/* Contenedor Grid de Tarjetas */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '30px' 
      }}>
        {jugadoresHistoricos.map((jugador) => (
          <div key={jugador.id} style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #e2e8f0'
          }}>
            
            {/* Foto del Jugador */}
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#0a192f' }}>
              <img 
                src={jugador.imagen} 
                alt={jugador.nombre} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.9' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                backgroundColor: '#f1c40f',
                color: '#0a192f',
                padding: '6px 12px',
                fontWeight: '800',
                fontSize: '0.85rem',
                borderRadius: '6px',
                textTransform: 'uppercase'
              }}>
                {jugador.pais}
              </div>
            </div>

            {/* Información Dinámica del Jugador */}
            <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', color: '#0a192f', margin: '0 0 5px 0', fontWeight: '700' }}>
                  {jugador.nombre}
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
                  🗓️ <strong>{t.nacimiento}:</strong> {jugador.nacimiento}
                </p>
                <p style={{ fontSize: '0.85rem', color: '#e11d48', margin: '3px 0 0 0', fontWeight: '600' }}>
                  📌 {jugador.estado}
                </p>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '5px 0' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', lineHeight: '1.6', color: '#334155' }}>
                <p>
                  <strong>👶 {t.infancia}:</strong> {jugador.infancia[idiomaActual]}
                </p>
                <p>
                  <strong>⚽ {t.mundiales}:</strong> {jugador.mundiales[idiomaActual]}
                </p>
                <p style={{ 
                  backgroundColor: '#f8fafc', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  borderLeft: '4px solid #f1c40f',
                  margin: '5px 0 0 0',
                  fontStyle: 'italic'
                }}>
                  <strong>🏆 {t.logros}:</strong> {jugador.logros[idiomaActual]}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}