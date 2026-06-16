'use client';
import { useState, useMemo } from 'react';
import { partidos } from '@/data/partidosData'; 
import styles from './PrediccionWidget.module.css';

export default function PrediccionWidget({ lang, partidoId }) {
  // useMemo hace que la búsqueda sea súper rápida
  const partido = useMemo(() => 
    partidos.find(p => p.id === partidoId), 
  [partidoId]);

  const [voto, setVoto] = useState(null);

  if (!partido) return null; 

  return (
    <div className={styles.widgetContainer}>
      <h3>{partido.local[lang]} vs {partido.visita[lang]}</h3>
      {!voto ? (
        <div className={styles.botones}>
          <button onClick={() => setVoto('local')}>{partido.local[lang]}</button>
          <button onClick={() => setVoto('empate')}>Empate</button>
          <button onClick={() => setVoto('visita')}>{partido.visita[lang]}</button>
        </div>
      ) : (
        <p className={styles.mensajeGracias}>¡Gracias por votar!</p>
      )}
    </div>
  );
}