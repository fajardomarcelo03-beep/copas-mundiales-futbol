'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const IdiomaContext = createContext();

export function useIdioma() {
  return useContext(IdiomaContext);
}

export default function HeaderContextLayout({ children }) {
  const [idioma, setIdioma] = useState('en');

  useEffect(() => {
    const idiomaGuardado = localStorage.getItem('preferencia-idioma');
    if (idiomaGuardado) {
      setIdioma(idiomaGuardado); // Corregido: "setIdioma"
    } else {
      setIdioma('en'); // Corregido: "setIdioma"
    }
  }, []);

  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma); // Corregido: "setIdioma"
    localStorage.setItem('preferencia-idioma', nuevoIdioma);
  };

  const textosHeader = {
    es: { titulo: "HISTORIA DE LOS CAMPEONATOS MUNDIALES DE FÚTBOL", boton: "ES 🌐" },
    en: { titulo: "HISTORY OF THE FIFA WORLD CUPS", boton: "EN 🌐" }
  };

  const t = textosHeader[idioma] || textosHeader['en'];

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma: cambiarIdioma }}>
      
      {/* HEADER GLOBAL */}
      <header style={headerStyle}>
        <div style={headerContainerStyle}>
          <div style={logoStyle}>
            <span style={{ fontSize: '1.2rem' }}>🏆</span> {t.titulo}
          </div>
          <nav style={navStyle}>
            <button 
              onClick={() => cambiarIdioma(idioma === 'es' ? 'en' : 'es')}
              style={langButtonStyle}
              title={idioma === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              {t.boton}
            </button>
          </nav>
        </div>
      </header>

      {/* Margen superior para que el contenido no se oculte debajo del header fijo */}
      <div style={{ paddingTop: '80px' }}>
        {children}
      </div>

    </IdiomaContext.Provider>
  );
}

// ---- ESTILOS DEL HEADER ----
const headerStyle = { position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#0a192f', color: '#ffffff', padding: '20px 25px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', zIndex: 10000, fontFamily: 'system-ui, -apple-system, sans-serif' };
const headerContainerStyle = { maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const logoStyle = { fontWeight: '800', fontSize: '1rem', letterSpacing: '0.5px', color: '#f1c40f', display: 'flex', alignItems: 'center', gap: '10px' };
const navStyle = { display: 'flex', alignItems: 'center', gap: '20px' };
const langButtonStyle = { backgroundColor: '#f1c40f', color: '#0a192f', border: 'none', fontWeight: '750', padding: '8px 16px', borderRadius: '6px', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', transition: 'background-color 0.2s ease' };