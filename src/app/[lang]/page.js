'use client';

import { useIdioma } from '../HeaderContextLayout';
import { noticiasMundial } from '@/data/noticias/mundialData'; // CORREGIDO AQUÍ
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const { idioma } = useIdioma();

  // 1. DICCIONARIO DE TRADUCCIÓN
  const t = {
    es: { noticiasTitulo: "LO ÚLTIMO DEL MUNDO DEL FÚTBOL", leerMas: "Leer más →" },
    en: { noticiasTitulo: "LATEST FROM THE FOOTBALL WORLD", leerMas: "Read more →" }
  }[idioma || 'es'];

  // 2. LÓGICA DE LAS 9 MÁS RECIENTES (Usando noticiasMundial)
  const noticiasParaMostrar = noticiasMundial
    .sort((a, b) => new Date(b.fechaISO) - new Date(a.fechaISO))
    .slice(0, 9);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      
      <section style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
        <div style={contenedorMaxWidthStyle}>
          
          <h2 style={tituloSeccionStyle}>
            <span style={{ borderBottom: '3px solid #f1c40f', paddingBottom: '6px' }}>
              {t.noticiasTitulo}
            </span>
          </h2>
          
          {/* GRID DINÁMICO 1 + 8 */}
          <div style={gridContainerStyle}>
            {noticiasParaMostrar.map((noticia, idx) => (
              <div key={noticia.id} style={idx === 0 ? cardDestacadaStyle : cardStyle}>
                
                <div style={fotoCardStyle}>
                  <div style={logoCompeticionStyle}>
                    <Image src={noticia.logo} alt="Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
                  </div>

                  <Image 
                    src={noticia.imagen} 
                    alt={noticia.es.titulo} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }} 
                    priority={idx < 3} 
                  />
                </div>

                <div style={cardContentStyle}>
                  <h3 style={idx === 0 ? cardTitleDestacadaStyle : cardTitleStyle}>
                    {noticia[idioma || 'es'].titulo}
                  </h3>
                  <p style={cardTextStyle}>{noticia[idioma || 'es'].subtitulo}</p>
                  <Link 
                    // CORREGIDO: Ajustado a la ruta correcta de tus carpetas
                    href={`/${idioma}/mundial-2026/noticias/${noticia.id}`} 
                    style={cardLinkStyle}
                  >
                    {t.leerMas}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '30px',
  width: '100%'
};

const cardDestacadaStyle = {
  ...{ gridColumn: '1 / -1', flexDirection: 'row', height: '400px' },
  backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', border: '1px solid #e2e8f0'
};

const cardStyle = { 
  backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', border: '1px solid #e2e8f0'
};

const fotoCardStyle = { width: '100%', position: 'relative', backgroundColor: '#f1f5f9' };

const logoCompeticionStyle = {
  position: 'absolute', top: '15px', left: '15px', zIndex: 10, width: '50px', height: '50px', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '50%', padding: '5px'
};

const cardContentStyle = { padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 };

const cardTitleStyle = { fontSize: '1.15rem', color: '#0a192f', margin: '0 0 10px 0', fontWeight: '700' };

const cardTitleDestacadaStyle = { ...cardTitleStyle, fontSize: '2rem' };

const cardTextStyle = { fontSize: '0.9rem', color: '#4a5568', lineHeight: '1.6', margin: '0 0 20px 0', flexGrow: 1 };

const cardLinkStyle = { color: '#0a192f', textDecoration: 'none', fontWeight: '800', fontSize: '0.88rem' };

const contenedorMaxWidthStyle = { maxWidth: '1280px', margin: '0 auto', width: '100%' };

const tituloSeccionStyle = { color: '#0a192f', fontSize: '1.7rem', margin: '0 0 40px 0', fontWeight: '800' };