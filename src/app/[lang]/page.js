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

  const secciones = [
    { titulo: { es: "Mundial 2026", en: "World Cup 2026" }, data: noticiasMundial },
    { titulo: { es: "Libertadores", en: "Libertadores" }, data: noticiasLibertadores },
    { titulo: { es: "Sudamericana", en: "Sudamericana" }, data: noticiasSudamericana },
    { titulo: { es: "Liga Pro", en: "Liga Pro" }, data: noticiasLigaPro },
    { titulo: { es: "MLS", en: "MLS" }, data: noticiasMLS },
    { titulo: { es: "La Liga", en: "La Liga" }, data: noticiasLaLiga },
    { titulo: { es: "Premier League", en: "Premier League" }, data: noticiasPremier },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '40px 20px' }}>
      {secciones.map((seccion, index) => {
        const noticiasMostradas = [...seccion.data]
          .sort((a, b) => new Date(b.fechaISO) - new Date(a.fechaISO))
          .slice(0, 6);

        if (noticiasMostradas.length === 0) return null;

        return (
          <section key={index} style={{ marginBottom: '60px', maxWidth: '1280px', margin: '0 auto 60px' }}>
            <h2 style={tituloSeccionStyle}>{seccion.titulo[lang]}</h2>
            
            <div style={gridContainerStyle}>
              {noticiasMostradas.map((noticia) => (
                <div key={noticia.id} style={cardStyle}>
                  <div style={fotoCardStyle}>
                    <Image 
                      src={noticia.imagen || '/placeholder.jpg'} 
                      alt={noticia[lang]?.titulo || "Noticia"} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      onError={(e) => { e.target.src = '/placeholder.jpg'; }} 
                    />
                  </div>
                  <div style={cardContentStyle}>
                    <h3 style={cardTitleStyle}>{noticia[lang]?.titulo}</h3>
                    <Link href={`/${lang}/noticias/${noticia.id}`} style={cardLinkStyle}>
                      {lang === 'es' ? 'Leer más →' : 'Read more →'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

// ESTILOS CORREGIDOS PARA VISTA ESTÁNDAR 3x2
const gridContainerStyle = { 
  display: 'grid', 
  gap: '24px',
  // Se adapta automáticamente: 3 columnas en desktop, 2 en tablets, 1 en móviles
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
};

const cardStyle = { 
  backgroundColor: '#ffffff', 
  borderRadius: '12px', 
  overflow: 'hidden', 
  boxShadow: '0 4px 20px rgba(0,0,0,0.06)', 
  display: 'flex', 
  flexDirection: 'column', 
  border: '1px solid #e2e8f0',
  transition: 'transform 0.2s'
};

const fotoCardStyle = { 
  width: '100%', 
  position: 'relative', 
  backgroundColor: '#f1f5f9', 
  aspectRatio: '16/9' 
};

const cardContentStyle = { 
  padding: '20px', 
  display: 'flex', 
  flexDirection: 'column', 
  flexGrow: 1 
};

const cardTitleStyle = { 
  fontSize: '1.1rem', 
  color: '#0a192f', 
  margin: '0 0 12px 0', 
  fontWeight: '700',
  lineHeight: '1.4'
};

const cardLinkStyle = { 
  color: '#0a192f', 
  textDecoration: 'none', 
  fontWeight: '800', 
  fontSize: '0.9rem',
  marginTop: 'auto'
};

const tituloSeccionStyle = { 
  color: '#0a192f', 
  fontSize: '1.5rem', 
  marginBottom: '25px', 
  fontWeight: '800',
  borderLeft: '5px solid #f1c40f',
  paddingLeft: '15px'
};