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
        /* Selector robusto multivariante para asegurar la captura del contenedor amarillo */
        div[style*="background-color"][style*="f1c40f"],
        div[style*="background-color"][style*="f1d413"],
        div[style*="background-color"][style*="241, 196, 15"],
        div[style*="background-color"][style*="241,296,15"],
        .barra-noticias {
          display: flex !important;
          transition: all 0.3s ease;
        }

        /* Reglas exclusivas para pantallas de Celulares (< 768px) */
        @media (max-width: 768px) {
          /* 1. Forzamos a que la barra amarilla pase de fila horizontal a bloque vertical y tome medidas adaptables */
          div[style*="background-color"][style*="f1c40f"],
          div[style*="background-color"][style*="f1d413"],
          div[style*="background-color"][style*="241, 196, 15"],
          div[style*="background-color"][style*="241,296,15"] {
            flex-direction: column !important;
            height: auto !important;
            min-height: unset !important;
            max-height: unset !important;
            padding: 14px 16px !important;
            gap: 12px !important;
            text-align: center !important;
            align-items: center !important;
            justify-content: center !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          /* 2. Ajustamos los textos internos (Título de la noticia y descripción) */
          div[style*="background-color"] h2,
          div[style*="background-color"] h3,
          div[style*="background-color"] p,
          div[style*="background-color"] span {
            font-size: 0.95rem !important;
            margin: 0 !important;
            white-space: normal !important;
            overflow: visible !important;
            text-overflow: unset !important;
            max-width: 100% !important;
          }

          div[style*="background-color"] div {
            font-size: 0.88rem !important;
            white-space: normal !important;
            line-height: 1.4 !important;
            overflow: visible !important;
            max-width: 100% !important;
          }

          /* Forzamos que los contenedores hijos del Flex hereden un ancho responsivo */
          div[style*="background-color"] > div {
            width: 100% !important;
            display: block !important;
          }

          /* 3. Ajustamos el botón o enlace "Leer más" para que sea visible, grande y centrado en móviles */
          div[style*="background-color"] a {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 4px auto 0 auto !important;
            font-size: 0.85rem !important;
            padding: 8px 16px !important;
            width: auto !important;
            min-width: 120px !important;
            white-space: nowrap !important;
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