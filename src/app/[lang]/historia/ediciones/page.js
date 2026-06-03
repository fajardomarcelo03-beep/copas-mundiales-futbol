'use client';

import { use } from 'react';
import { edicionesMundialistas } from '../../../data/mundialesData';

export default function EdicionesPage({ params }) {
  // En Next.js 15+, params es una promesa, por eso usamos use()
  const resolvedParams = use(params);
  const lang = resolvedParams.lang;
  
  // Aseguramos que el idioma sea 'es' o 'en'
  const idiomaActual = lang === 'en' ? 'en' : 'es';

  const textos = {
    es: {
      titulo: "Historia de los Mundiales",
      nacimiento: "Fechas",
      infancia: "Contexto Inicial",
      mundiales: "El Torneo",
      logros: "Legado Histórico"
    },
    en: {
      titulo: "World Cup History",
      nacimiento: "Dates",
      infancia: "Initial Context",
      mundiales: "The Tournament",
      logros: "Historical Legacy"
    }
  };

  const t = textos[idiomaActual];

  return (
    <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#0a192f', fontSize: '2.5rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px 0' }}>
          {t.titulo}
        </h1>
        <div style={{ width: '80px', height: '5px', backgroundColor: '#f1c40f', margin: '0 auto', borderRadius: '2px' }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
        {edicionesMundialistas.map((mundial) => (
          <div key={mundial.id} style={{ backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)', display: 'flex', flexDirection: 'column', border: '1px solid #e2e8f0' }}>
            
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#0a192f' }}>
              <img 
                src={mundial.imagen} 
                alt={mundial.nombre} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.9' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div style={{ position: 'absolute', bottom: '15px', left: '15px', backgroundColor: '#f1c40f', color: '#0a192f', padding: '6px 12px', fontWeight: '800', fontSize: '0.85rem', borderRadius: '6px', textTransform: 'uppercase' }}>
                {mundial.pais}
              </div>
            </div>

            <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', color: '#0a192f', margin: '0 0 5px 0', fontWeight: '700' }}>
                  {mundial.nombre}
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
                  🗓️ <strong>{t.nacimiento}:</strong> {mundial.nacimiento}
                </p>
                <p style={{ fontSize: '0.85rem', color: '#e11d48', margin: '3px 0 0 0', fontWeight: '600' }}>
                  📌 {mundial.estado}
                </p>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '5px 0' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', lineHeight: '1.6', color: '#334155' }}>
                <p>
                  <strong>👶 {t.infancia}:</strong> {mundial.infancia[idiomaActual]}
                </p>
                <p>
                  <strong>⚽ {t.mundiales}:</strong> {mundial.mundiales[idiomaActual]}
                </p>
                <p style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #f1c40f', margin: '5px 0 0 0', fontStyle: 'italic' }}>
                  <strong>🏆 {t.logros}:</strong> {mundial.logros[idiomaActual]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}