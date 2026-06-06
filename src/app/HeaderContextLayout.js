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
  }, [pathname]);

  const cambiarIdioma = () => {
    const nuevoIdioma = idioma === 'es' ? 'en' : 'es';
    const segments = pathname.split('/');
    segments[1] = nuevoIdioma;
    router.push(segments.join('/'));
  };

  const toggleSubmenu = (index) => setSubmenuActivo(submenuActivo === index ? null : index);

  const t = {
    titulo: "FÚTBOL FANÁTIC",
    botonLang: idioma === 'es' ? 'ES 🌐' : 'EN 🌐',
    menu: idioma === 'es' ? 
      [
        { title: "MUNDIAL 2026", submenu: [{ name: "Calendario", url: "/mundial-2026/calendario" }, { name: "Resultados", url: "/mundial-2026/posiciones" }, { name: "Noticias", url: "/mundial-2026/noticias" }] },
        { title: "HISTORIA", submenu: [{ name: "Ediciones", url: "/historia/ediciones" }, { name: "Presidentes", url: "/historia/presidentes" }, { name: "Estadios", url: "/historia/estadios" }, { name: "Jugadores", url: "/historia/jugadores" }] },
        { title: "COMPETICIONES", submenu: [{ name: "Liga Pro", url: "/competiciones/liga-pro" }, { name: "Libertadores", url: "/competiciones/libertadores" }, { name: "Sudamericana", url: "/competiciones/sudamericana" }, { name: "MLS", url: "/competiciones/mls" }, { name: "La Liga", url: "/competiciones/la-liga" }, { name: "Premier League", url: "/competiciones/premier-league" }] }
      ] : 
      [
        { title: "WORLD CUP 2026", submenu: [{ name: "Schedule", url: "/mundial-2026/calendario" }, { name: "Results", url: "/mundial-2026/posiciones" }, { name: "News", url: "/mundial-2026/noticias" }] },
        { title: "HISTORY", submenu: [{ name: "Editions", url: "/historia/ediciones" }, { name: "Presidents", url: "/historia/presidentes" }, { name: "Stadiums", url: "/historia/estadios" }, { name: "Players", url: "/historia/jugadores" }] },
        { title: "COMPETITIONS", submenu: [{ name: "Liga Pro", url: "/competiciones/liga-pro" }, { name: "Libertadores", url: "/competiciones/libertadores" }, { name: "Sudamericana", url: "/competiciones/sudamericana" }, { name: "MLS", url: "/competiciones/mls" }, { name: "La Liga", url: "/competiciones/la-liga" }, { name: "Premier League", url: "/competiciones/premier-league" }] }
      ]
  };

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma: cambiarIdioma }}>
      <header style={headerStyle}>
        <div style={headerContainerStyle}>
          <button className="mobile-burger-btn" onClick={() => setMenuMovilAbierto(!menuMovilAbierto)} style={burgerButtonStyle}>
            {menuMovilAbierto ? '✕' : '☰'}
          </button>
          
          <Link href={`/${idioma}`} style={{...logoStyle, textDecoration: 'none'}}><span>⚽</span><span className="logo-text">{t.titulo}</span></Link>

          <nav style={navLinksContainerStyle} className="nav-desktop">
            {t.menu.map((item, index) => (
              <div key={index} style={menuItemGroupStyle} onMouseEnter={() => setMenuEscritorioAbierto(index)} onMouseLeave={() => setMenuEscritorioAbierto(null)}>
                <span style={menuTitleStyle}>{item.title} ▼</span>
                <div style={{...dropdownPanelStyle, display: menuEscritorioAbierto === index ? 'block' : 'none'}}>
                  {item.submenu.map((sub, sIdx) => <Link key={sIdx} href={`/${idioma}${sub.url}`} style={dropdownLinkStyle}>{sub.name}</Link>)}
                </div>
              </div>
            ))}
          </nav>

          <button onClick={cambiarIdioma} style={langButtonStyle}>{t.botonLang}</button>
        </div>

        {menuMovilAbierto && (
          <div style={mobileMenuPanelStyle}>
            {t.menu.map((item, index) => (
              <div key={index}>
                <div style={mobileMenuTitleStyle} onClick={() => toggleSubmenu(index)}>{item.title} {submenuActivo === index ? '▲' : '▼'}</div>
                {submenuActivo === index && (
                  <div style={{backgroundColor: '#162033'}}>
                    {item.submenu.map((sub, sIdx) => <Link key={sIdx} href={`/${idioma}${sub.url}`} style={mobileDropdownLinkStyle} onClick={() => setMenuMovilAbierto(false)}>{sub.name}</Link>)}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      <div style={{ paddingTop: '56px' }}>{children}</div>

      <style jsx global>{`
        body { background-color: #ffffff; color: #0a192f; }
        @media (max-width: 900px) { .nav-desktop { display: none !important; } .mobile-burger-btn { display: block !important; } }
        @media (min-width: 901px) { .mobile-burger-btn { display: none !important; } .nav-desktop { display: flex !important; } }
      `}</style>
    </IdiomaContext.Provider>
  );
}

const headerStyle = { position: 'fixed', top: 0, width: '100%', backgroundColor: '#0a192f', color: '#ffffff', height: '56px', display: 'flex', alignItems: 'center', zIndex: 10000 };
const headerContainerStyle = { width: '100%', maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', padding: '0 15px', height: '100%', gap: '20px' };
const logoStyle = { fontWeight: '900', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' };
const burgerButtonStyle = { background: 'none', border: 'none', color: '#ffffff', fontSize: '1.6rem', cursor: 'pointer', display: 'none' };
const navLinksContainerStyle = { display: 'flex', height: '100%', alignItems: 'center', margin: '0 auto' };
const menuItemGroupStyle = { padding: '0 15px', cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center', position: 'relative' };
const menuTitleStyle = { fontSize: '0.8rem', fontWeight: '700' };
const dropdownPanelStyle = { position: 'absolute', top: '100%', left: 0, backgroundColor: '#ffffff', borderRadius: '0 0 6px 6px', padding: '10px 0', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', minWidth: '200px', color: '#0a192f' };
const dropdownLinkStyle = { display: 'block', padding: '8px 15px', color: '#0a192f', textDecoration: 'none', fontSize: '0.8rem' };
const langButtonStyle = { backgroundColor: '#f1c40f', border: 'none', padding: '5px 8px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.7rem', marginLeft: 'auto' };
const mobileMenuPanelStyle = { position: 'fixed', top: '56px', left: 0, height: '100vh', width: '260px', backgroundColor: '#0a192f', boxShadow: '2px 0 10px rgba(0,0,0,0.5)', zIndex: 9999, overflowY: 'auto' };
const mobileMenuTitleStyle = { padding: '15px', borderBottom: '1px solid #1e293b', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem' };
const mobileDropdownLinkStyle = { display: 'block', padding: '10px 20px', color: '#cbd5e1', textDecoration: 'none', fontSize: '0.85rem' };