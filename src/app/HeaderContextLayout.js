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
      setIdioma(idiomaGuardado);
    } else {
      setIdioma('en');
    }
  }, []);

  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
    localStorage.setItem('preferencia-idioma', nuevoIdioma);
  };

  const textosHeader = {
    es: { titulo: "HISTORIA DE LOS MUNDIALES", boton: "ES 🌐" },
    en: { titulo: "HISTORY OF FIFA WORLD CUPS", boton: "EN 🌐" }
  };

  const t = textosHeader[idioma] || textosHeader['en'];

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma: cambiarIdioma }}>
      
      {/* HEADER GLOBAL OPTIMIZADO */}
      <header style={headerStyle}>
        <div style={headerContainerStyle}>
          <div style={logoStyle}>
            <span style={{ fontSize: '1.2rem', shrink: 0 }}>🏆</span> 
            {/* El span evita que el texto larguísimo rompa el layout en móviles */}
            <span style={textoTituloResponsivoStyle}>{t.titulo}</span>
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

      {/* 💡 SOLUCIÓN AQUÍ: Se ajustó el padding-top a 68px (altura exacta del header). 
        Tu barra de noticias fija (sticky) se acoplará perfectamente justo debajo.
      */}
      <div style={{ paddingTop: '68px' }}>
        {children}
      </div>

    </IdiomaContext.Provider>
  );
}

// ---- ESTILOS DEL HEADER CON SOPORTE RESPONSIVO ----
const headerStyle = { 
  position: 'fixed', 
  top: 0, 
  left: 0, 
  right: 0, 
  backgroundColor: '#0a192f', 
  color: '#ffffff', 
  padding: '12px 20px', // Reducido un poco para mayor balance en móviles
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)', 
  zIndex: 10000, 
  fontFamily: 'system-ui, -apple-system, sans-serif',
  height: '44px', // Altura fija controlada
  display: 'flex',
  alignItems: 'center'
};

const headerContainerStyle = { 
  width: '100%',
  maxWidth: '1200px', 
  margin: '0 auto', 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center',
  gap: '10px'
};

const logoStyle = { 
  fontWeight: '800', 
  color: '#f1c40f', 
  display: 'flex', 
  alignItems: 'center', 
  gap: '8px',
  overflow: 'hidden',
  flexRoll: 1
};

// Controla que el texto largo no desborde en pantallas pequeñas
const textoTituloResponsivoStyle = {
  fontSize: 'clamp(0.78rem, 3.5vw, 1rem)', // Se autoajusta mágicamente según el tamaño de la pantalla
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

const navStyle = { 
  display: 'flex', 
  alignItems: 'center', 
  flexShrink: 0 
};

const langButtonStyle = { 
  backgroundColor: '#f1c40f', 
  color: '#0a192f', 
  border: 'none', 
  fontWeight: '800', 
  padding: '6px 12px', 
  borderRadius: '6px', 
  fontSize: '0.8rem', 
  cursor: 'pointer', 
  display: 'flex', 
  alignItems: 'center', 
  gap: '4px', 
  transition: 'background-color 0.2s ease',
  whiteSpace: 'nowrap'
};