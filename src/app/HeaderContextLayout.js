'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const IdiomaContext = createContext();

export function useIdioma() {
  const context = useContext(IdiomaContext);
  return context || { idioma: 'es', setIdioma: () => {} };
}

export default function HeaderContextLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [idioma, setIdioma] = useState('es');
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);
  const [submenuActivo, setSubmenuActivo] = useState(null);
  const [menuEscritorioAbierto, setMenuEscritorioAbierto] = useState(null);

  useEffect(() => {
    const pathLang = pathname.split('/')[1];
    setIdioma(pathLang === 'en' ? 'en' : 'es');
    setMenuEscritorioAbierto(null);
    setMenuMovilAbierto(false);
  }, [pathname]);

  const cambiarIdioma = () => {
    const nuevoIdioma = idioma === 'es' ? 'en' : 'es';
    const segments = pathname.split('/');
    segments[1] = nuevoIdioma;
    router.push(segments.join('/'));
  };

  const toggleSubmenu = (index) => {
    setSubmenuActivo(submenuActivo === index ? null : index);
  };

  const textosHeader = {
    es: { 
      titulo: "FÚTBOL FANÁTIC", 
      boton: "ES 🌐",
      menu: [
        { title: "MUNDIAL 2026", submenu: [{ name: "Calendario", url: "/mundial-2026/calendario" }, { name: "Resultados y Posiciones", url: "/mundial-2026/posiciones" }, { name: "Noticias", url: "/mundial-2026/noticias" }] },
        { title: "HISTORIA DE LOS MUNDIALES", submenu: [{ name: "Ediciones", url: "/historia/ediciones" }, { name: "Presidentes Destacados", url: "/historia/presidentes" }, { name: "Estadios Emblemáticos", url: "/historia/estadios" }, { name: "Jugadores Históricos", url: "/historia/jugadores" }] },
        { title: "COMPETICIONES", isMegaMenu: false, submenu: [{ name: "Liga Pro (Ecuador)", url: "/competiciones/liga-pro" }, { name: "Copa Libertadores", url: "/competiciones/libertadores" }, { name: "Copa Sudamericana", url: "/competiciones/sudamericana" }, { name: "MLS", url: "/competiciones/mls" }, { name: "Liga Española", url: "/competiciones/la-liga" }, { name: "Premier League", url: "/competiciones/premier-league" }] }
      ]
    },
    en: { 
      titulo: "FÚTBOL FANÁTIC", 
      boton: "EN 🌐",
      menu: [
        { title: "WORLD CUP 2026", submenu: [{ name: "Schedule", url: "/mundial-2026/calendario" }, { name: "Results & Standings", url: "/mundial-2026/posiciones" }, { name: "News", url: "/mundial-2026/noticias" }] },
        { title: "WORLD CUP HISTORY", submenu: [{ name: "Editions", url: "/historia/ediciones" }, { name: "Notable Presidents", url: "/historia/presidentes" }, { name: "Iconic Stadiums", url: "/historia/estadios" }, { name: "Historical Players", url: "/historia/jugadores" }] },
        { title: "COMPETITIONS", isMegaMenu: false, submenu: [{ name: "Liga Pro (Ecuador)", url: "/competiciones/liga-pro" }, { name: "Copa Libertadores", url: "/competiciones/libertadores" }, { name: "Copa Sudamericana", url: "/competiciones/sudamericana" }, { name: "MLS", url: "/competiciones/mls" }, { name: "La Liga", url: "/competiciones/la-liga" }, { name: "Premier League", url: "/competiciones/premier-league" }] }
      ]
    }
  };

  const t = textosHeader[idioma] || textosHeader['es'];

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma: cambiarIdioma }}>
      <header style={headerStyle}>
        <div style={headerContainerStyle}>
          <button className="mobile-burger-btn" onClick={() => setMenuMovilAbierto(!menuMovilAbierto)} style={burgerButtonStyle}>
            {menuMovilAbierto ? '✕' : '☰'}
          </button>
          
          <Link href={`/${idioma}`} style={{...logoStyle, textDecoration: 'none'}} className="brand-logo">
            <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>⚽</span> 
            <span style={textoTituloResponsivoStyle}>{t.titulo}</span>
          </Link>

          <nav style={navLinksContainerStyle} className="nav-desktop">
            {t.menu.map((item, index) => (
              <div 
                key={index} 
                className="menu-item-group" 
                style={{...menuItemGroupStyle, paddingBottom: '20px'}}
                onMouseEnter={() => setMenuEscritorioAbierto(index)}
                onMouseLeave={() => setMenuEscritorioAbierto(null)}
              >
                <span style={menuTitleStyle}>{item.title} <span style={{ fontSize: '0.65rem' }}>▼</span></span>
                <div style={{...dropdownPanelStyle, display: menuEscritorioAbierto === index ? 'block' : 'none'}}>
                  {item.submenu.map((sub, subIdx) => (
                    <Link key={subIdx} href={`/${idioma}${sub.url}`} style={dropdownLinkStyle} onClick={() => setMenuEscritorioAbierto(null)}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          <div style={navStyle}>
            <button onClick={cambiarIdioma} style={langButtonStyle}>{t.boton}</button>
          </div>
        </div>

        <div className={`nav-mobile-panel ${menuMovilAbierto ? 'open' : ''}`} style={{...navMobilePanelStyle, display: menuMovilAbierto ? 'block' : 'none'}}>
          {t.menu.map((item, index) => (
            <div key={index} style={{ borderBottom: '1px solid #1e293b' }}>
              <button onClick={() => toggleSubmenu(index)} style={mobileMenuTitleButtonStyle}>{item.title} <span>{submenuActivo === index ? '▲' : '▼'}</span></button>
              <div style={{ display: submenuActivo === index ? 'block' : 'none', backgroundColor: '#071120', paddingLeft: '15px' }}>
                {item.submenu.map((sub, subIdx) => (
                    <Link key={subIdx} href={`/${idioma}${sub.url}`} style={mobileDropdownLinkStyle} onClick={() => {setMenuMovilAbierto(false); setSubmenuActivo(null);}}>
                        {sub.name}
                    </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </header>

      <div className="main-content-wrapper" style={{ paddingTop: '56px' }}>{children}</div>

      <style jsx global>{`
        .brand-logo { cursor: pointer; }
        .nav-mobile-panel { transform: translateX(-100%) !important; transition: transform 0.25s ease-in-out, opacity 0.2s ease; opacity: 0 !important; visibility: hidden !important; }
        .nav-mobile-panel.open { visibility: visible !important; opacity: 1 !important; transform: translateX(0) !important; }
        @media (min-width: 993px) { .mobile-burger-btn { display: none !important; } .nav-desktop { display: flex !important; } }
        @media (max-width: 992px) { .nav-desktop { display: none !important; } .mobile-burger-btn { display: block !important; } }
      `}</style>
    </IdiomaContext.Provider>
  );
}

const headerStyle = { position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#0a192f', color: '#ffffff', padding: '0 20px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', zIndex: 10000, height: '56px', display: 'flex', alignItems: 'center' };
const headerContainerStyle = { width: '100%', maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px', height: '100%' };
const burgerButtonStyle = { background: 'none', border: 'none', color: '#ffffff', fontSize: '1.6rem', cursor: 'pointer', padding: '5px', display: 'none' };
const logoStyle = { fontWeight: '900', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px' };
const textoTituloResponsivoStyle = { fontSize: 'clamp(0.9rem, 4vw, 1.1rem)', fontWeight: '900' };
const navLinksContainerStyle = { display: 'flex', alignItems: 'center', gap: '5px', height: '100%', paddingLeft: '25px' };
const menuItemGroupStyle = { position: 'relative', height: '100%', display: 'flex', alignItems: 'center', cursor: 'pointer', outline: 'none' };
const menuTitleStyle = { fontSize: '0.82rem', fontWeight: '700', padding: '0 12px', color: '#e2e8f0', whiteSpace: 'nowrap' };
const dropdownPanelStyle = { position: 'absolute', top: '45px', left: '0', backgroundColor: '#ffffff', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', borderRadius: '0 0 6px 6px', minWidth: '240px', padding: '8px 0', zIndex: 9999 };
const dropdownLinkStyle = { display: 'block', padding: '10px 18px', color: '#1e293b', textDecoration: 'none', fontSize: '0.85rem', borderBottom: '1px solid #f1f5f9' };
const navMobilePanelStyle = { position: 'fixed', top: '56px', left: 0, bottom: 0, width: '280px', backgroundColor: '#0a192f', boxShadow: '4px 0 20px rgba(0,0,0,0.3)', padding: '15px 0', zIndex: 9999, overflowY: 'auto' };
const mobileMenuTitleButtonStyle = { width: '100%', background: 'none', border: 'none', color: '#ffffff', textAlign: 'left', padding: '15px 20px', fontSize: '0.88rem', fontWeight: '700', display: 'flex', justifyContent: 'space-between' };
const mobileDropdownLinkStyle = { display: 'block', padding: '12px 20px', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.85rem' };
const navStyle = { display: 'flex', alignItems: 'center' };
const langButtonStyle = { backgroundColor: '#f1c40f', color: '#0a192f', border: 'none', fontWeight: '800', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer' };