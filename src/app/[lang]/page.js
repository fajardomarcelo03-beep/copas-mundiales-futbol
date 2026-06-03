'use client';

import { useIdioma } from '../HeaderContextLayout';
import { noticiasMundial } from '@/data/noticias/mundialData';
import { noticiasLibertadores } from '@/data/noticias/libertadoresData';
import { noticiasSudamericana } from '@/data/noticias/sudamericanaData';
import { noticiasLigaPro } from '@/data/noticias/ligaProData';
import { noticiasMLS } from '@/data/noticias/mlsData';
import { noticiasLaLiga } from '@/data/noticias/laLigaData';
import { noticiasPremier } from '@/data/noticias/PremierData';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const { idioma } = useIdioma();
  const lang = idioma || 'es';

  const t = {
    es: { noticiasTitulo: "LO ÚLTIMO DEL MUNDO DEL FÚTBOL", leerMas: "Leer más →" },
    en: { noticiasTitulo: "LATEST FROM THE FOOTBALL WORLD", leerMas: "Read more →" }
  }[lang];

  // Mantenemos la estructura de secciones para el orden visual
  const secciones = [
    { data: noticiasMundial },
    { data: noticiasLibertadores },
    { data: noticiasSudamericana },
    { data: noticiasLigaPro },
    { data: noticiasMLS },
    { data: noticiasLaLiga },
    { data: noticiasPremier },
  ];

  // MANTENEMOS TU FUNCIÓN ORIGINAL SIN CAMBIOS
  const generarLink = (noticia) => {
    const base = `/${lang}/competiciones`;
    switch(noticia.categoria) {
      case 'mundial': return `/${lang}/mundial-2026/noticias/${noticia.id}`;
      case 'libertadores': return `${base}/libertadores/${noticia.id}`;
      case 'sudamericana': return `${base}/sudamericana/${noticia.id}`;
      case 'ligapro': return `${base}/liga-pro/${noticia.id}`;
      case 'mls': return `${base}/mls/${noticia.id}`;
      case 'liga-espanola': return `${base}/liga-espanola/${noticia.id}`;
      case 'premier-league': return `${base}/premier-league/${noticia.id}`;
      default: return `/${lang}/noticias/${noticia.id}`;
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={contenedorMaxWidthStyle}>
        
        {secciones.map((seccion, index) => (
          <div key={index} style={{ marginBottom: '40px' }}>
            <div style={gridContainerStyle}>
              {seccion.data.slice(0, 3).map((noticia) => (
                <div key={noticia.id} style={cardStyle}>
                  <div style={fotoCardStyle}>
                    <div style={logoCompeticionStyle}>
                      {noticia.logo && <Image src={noticia.logo} alt="Logo" width={30} height={30} style={{ objectFit: 'contain' }} />}
                    </div>
                    <Image 
                      src={noticia.imagen || '/placeholder.jpg'} 
                      alt={noticia[lang]?.titulo || "Noticia"} 
                      fill sizes="(max-width: 1024px) 100vw, 33vw" 
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={cardContentStyle}>
                    <h3 style={cardTitleStyle}>{noticia[lang]?.titulo}</h3>
                    <p style={cardTextStyle}>{noticia[lang]?.subtitulo}</p>
                    {/* ENLACE FUNCIONAL MANTENIDO */}
                    <Link href={generarLink(noticia)} style={cardLinkStyle}>{t.leerMas}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ESTILOS MANTENIDOS
const gridContainerStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', width: '100%' };
const cardStyle = { backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', border: '1px solid #e2e8f0' };
const fotoCardStyle = { width: '100%', position: 'relative', backgroundColor: '#f1f5f9', aspectRatio: '16/9' };
const logoCompeticionStyle = { position: 'absolute', top: '10px', left: '10px', zIndex: 10, width: '35px', height: '35px', backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '50%', padding: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' };
const cardContentStyle = { padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 };
const cardTitleStyle = { fontSize: '1.15rem', color: '#0a192f', margin: '0 0 10px 0', fontWeight: '700' };
const cardTextStyle = { fontSize: '0.9rem', color: '#4a5568', lineHeight: '1.6', margin: '0 0 20px 0', flexGrow: 1 };
const cardLinkStyle = { color: '#0a192f', textDecoration: 'none', fontWeight: '800', fontSize: '0.88rem' };
const contenedorMaxWidthStyle = { maxWidth: '1280px', margin: '0 auto', width: '100%' };