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

      {/* Contenedor del contenido */}
      <div className="main-content-wrapper" style={{ paddingTop: '68px' }}>
        {children}
      </div>

      {/* ⚡ SOLUCIÓN RESPONSIVA PARA LA BARRA DE NOTICIAS Y ELEMENTOS DE LA LANDING ⚡ */}
      <style jsx global>{`
        /* Buscamos el contenedor amarillo de noticias de tu page.js de forma dinámica */
        div[style*="background-color: rgb(241, 196, 15)"], 
        div[style*="background-color: #f1c40f"],
        .barra-noticias {
          display: flex !important;
          transition: all 0.3s ease;
        }

        /* Reglas exclusivas para pantallas de Celulares (< 768px) */
        @media (max-width: 768px) {
          /* 1. Forzamos a que la barra amarilla pase de fila horizontal a bloque vertical */
          div[style*="background-color: rgb(241, 196, 15)"], 
          div[style*="background-color: #f1c40f"] {
            flex-direction: column !important;
            height: auto !important;
            padding: 12px 15px !important;
            gap: 10px !important;
            text-align: center !important;
          }

          /* 2. Ajustamos los textos internos (Título de la noticia y descripción) */
          div[style*="background-color: rgb(241, 196, 15)"] h2,
          div[style*="background-color: #f1c40f"] h2,
          div[style*="background-color: rgb(241, 196, 15)"] h3,
          div[style*="background-color: #f1c40f"] h3 {
            font-size: 0.95rem !important;
            margin: 0 !important;
            white-space: normal !important;
          }

          div[style*="background-color: rgb(241, 196, 15)"] div,
          div[style*="background-color: #f1c40f"] div {
            font-size: 0.85rem !important;
            white-space: normal !important;
            line-height: 1.4 !important;
          }

          /* 3. Ajustamos el botón o enlace "Leer más" para que se centre en móviles */
          div[style*="background-color: rgb(241, 196, 15)"] a,
          div[style*="background-color: #f1c40f"] a {
            display: inline-block !important;
            margin-top: 5px !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>

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
  padding: '12px 20px', 
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)', 
  zIndex: 10000, 
  fontFamily: 'system-ui, -apple-system, sans-serif',
  height: '44px', 
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
  flexGrow: 1
};

const textoTituloResponsivoStyle = {
  fontSize: 'clamp(0.78rem, 3.5vw, 1rem)', 
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