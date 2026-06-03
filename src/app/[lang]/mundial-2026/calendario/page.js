'use client';
import React from 'react';
import { grupos } from '../../../../data/calendarioData';
import { partidos } from '../../../../data/partidosData'; 
import { useIdioma } from '../../../HeaderContextLayout';
import * as Flags from 'country-flag-icons/react/3x2';

const FlipCard = ({ letra, equipos, listaPartidos, idioma, content }) => {
  return (
    <div className="flip-card-wrapper" style={{ width: '100%', height: '400px', perspective: '1000px', cursor: 'pointer' }}>
      <div className="flip-card-inner" style={{
        position: 'relative', width: '100%', height: '100%', transition: 'transform 0.8s',
        transformStyle: 'preserve-3d'
      }}>
        
        {/* CARA FRONTAL */}
        <div className="flip-card-front" style={{
          position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
          padding: '20px', borderRadius: '12px', backgroundColor: '#fff', 
          border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
          <h3 style={{ borderBottom: '2px solid #f1c40f', paddingBottom: '10px', fontSize: '1.4rem', marginBottom: '20px' }}>
            {content.grupo} {letra}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {equipos.map((eq, i) => {
              const Flag = Flags[eq.iso];
              // CORRECCIÓN: Accedemos al idioma correcto dentro del objeto 'nombres'
              const nombreEquipo = typeof eq.nombres === 'object' ? eq.nombres[idioma] : eq.nombres;
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {Flag && <Flag style={{ width: '32px', height: '20px', borderRadius: '2px' }} />}
                  <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{nombreEquipo}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ANVERSO */}
        <div className="flip-card-back" style={{
          position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)', padding: '15px', borderRadius: '12px',
          backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', overflowY: 'auto'
        }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '15px', color: '#f1c40f', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>
            {content.calendario}
          </h3>
          {listaPartidos?.map((p, idx) => {
            // CORRECCIÓN: Accedemos a las traducciones de local y visita
            const local = typeof p.local === 'object' ? p.local[idioma] : p.local;
            const visita = typeof p.visita === 'object' ? p.visita[idioma] : p.visita;
            return (
              <div key={idx} style={{ 
                fontSize: '0.85rem', marginBottom: '12px', paddingBottom: '8px', 
                borderBottom: '1px solid #eee' 
              }}>
                <div style={{ fontWeight: 'bold' }}>{p.fecha} - {p.hora}</div>
                <div>{local} vs {visita}</div>
                <div style={{ color: '#666', fontStyle: 'italic' }}>{p.estadio}</div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .flip-card-wrapper:hover .flip-card-inner { transform: rotateY(180deg); }
        @media (max-width: 768px) {
          .flip-card-wrapper:active .flip-card-inner { transform: rotateY(180deg); }
        }
      `}</style>
    </div>
  );
};

export default function CalendarioPage() {
  const { idioma } = useIdioma();
  const t = {
    es: { titulo: "Grupos - Mundial 2026", grupo: "GRUPO", calendario: "Calendario de Partidos" },
    en: { titulo: "Groups - World Cup 2026", grupo: "GROUP", calendario: "Match Schedule" }
  };
  const content = t[idioma] || t['es'];

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.5rem' }}>{content.titulo}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {Object.entries(grupos).map(([letra, equipos]) => (
          <FlipCard key={letra} letra={letra} equipos={equipos} listaPartidos={partidos.grupos[letra]} idioma={idioma} content={content} />
        ))}
      </div>
    </div>
  );
}