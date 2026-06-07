'use client';
import { useEffect } from 'react';
import { klaroConfig } from '../lib/klaro-config';

export default function KlaroInitializer() {
  useEffect(() => {
    // Importación dinámica para evitar el error de "self is not defined"
    import('klaro').then((Klaro) => {
      Klaro.setup(klaroConfig);
    });
  }, []);

  return null;
}