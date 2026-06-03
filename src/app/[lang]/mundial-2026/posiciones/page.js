'use client';
import React, { useMemo } from 'react';
import { useIdioma } from '../../../HeaderContextLayout';
import { resultados } from '../../../data/resultadosData';

export default function PosicionesPage() {
  const { idioma } = useIdioma();

  const t = {
    es: { titulo: "Resultados y Posiciones", pos: "Pos", equipo: "Equipo", pj: "PJ", dg: "DG", pts: "PTS", partidos: "Partidos Jugados" },
    en: { titulo: "Results and Standings", pos: "Pos", equipo: "Team", pj: "MP", dg: "GD", pts: "PTS", partidos: "Matches Played" }
  }[idioma];

  const dataProcesada = useMemo(() => {
    return Object.entries(resultados.grupos).map(([grupo, partidos]) => {
      const stats = {};
      
      // Inicializar equipos usando el nombre en el idioma actual para la clave del objeto
      partidos.forEach(p => {
        [p.local, p.visita].forEach(eq => { 
          if (!stats[eq[idioma]]) {
            stats[eq[idioma]] = { nombre: eq[idioma], pts: 0, pj: 0, dg: 0 }; 
          }
        });
      });

      // FILTRO: Solo tomamos los partidos donde 'jugado' es true
      const partidosJugados = partidos.filter(p => p.jugado === true);

      partidosJugados.forEach(p => {
        const localNom = p.local[idioma];
        const visitaNom = p.visita[idioma];
        
        stats[localNom].pj += 1;
        stats[visitaNom].pj += 1;
        stats[localNom].dg += (p.golesLocal - p.golesVisita);
        stats[visitaNom].dg += (p.golesVisita - p.golesLocal);
        
        if (p.golesLocal > p.golesVisita) stats[localNom].pts += 3;
        else if (p.golesLocal < p.golesVisita) stats[visitaNom].pts += 3;
        else { stats[localNom].pts += 1; stats[visitaNom].pts += 1; }
      });

      return {
        grupo,
        tabla: Object.values(stats).sort((a, b) => b.pts - a.pts || b.dg - a.dg),
        partidosJugados
      };
    });
  }, [idioma]); // Dependencia del idioma agregada

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', backgroundColor: '#f1f5f9', borderRadius: '12px' }}>
      <h1 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '30px' }}>{t.titulo}</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {dataProcesada.map(({ grupo, tabla, partidosJugados }) => (
          <div key={grupo} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#0ea5e9', marginBottom: '15px' }}>Grupo {grupo}</h2>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b' }}>
                      <th style={{ padding: '10px' }}>{t.pos}</th>
                      <th style={{ textAlign: 'left', padding: '10px' }}>{t.equipo}</th>
                      <th style={{ padding: '10px' }}>{t.pj}</th>
                      <th style={{ padding: '10px' }}>{t.dg}</th>
                      <th style={{ padding: '10px' }}>{t.pts}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabla.map((fila, i) => (
                      <tr key={fila.nombre} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ textAlign: 'center', padding: '10px' }}>{i + 1}</td>
                        <td style={{ padding: '10px' }}>{fila.nombre}</td>
                        <td style={{ textAlign: 'center', padding: '10px' }}>{fila.pj}</td>
                        <td style={{ textAlign: 'center', padding: '10px' }}>{fila.dg}</td>
                        <td style={{ textAlign: 'center', padding: '10px', fontWeight: 'bold', color: '#0ea5e9' }}>{fila.pts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {partidosJugados.length > 0 && (
                <div style={{ flex: '0.8', minWidth: '250px', backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '10px', textAlign: 'center' }}>{t.partidos}</h3>
                  {partidosJugados.map(p => (
                    <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e2e8f0' }}>
                      <span style={{ fontSize: '0.85rem' }}>{p.local[idioma]} vs {p.visita[idioma]}</span>
                      <span style={{ fontWeight: 'bold' }}>{p.golesLocal} - {p.golesVisita}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}