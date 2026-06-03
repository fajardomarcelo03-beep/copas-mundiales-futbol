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

  // Definimos las categorías y sus datos
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
        // Ordenamos y tomamos solo las 6 más recientes por categoría
        const noticiasMostradas = [...seccion.data]
          .sort((a, b) => new Date(b.fechaISO) - new Date(a.fechaISO))
          .slice(0, 6);

        if (noticiasMostradas.length === 0) return null;

        return (
          <section key={index} style={{ marginBottom: '60px', maxWidth: '1280px', margin: '0 auto 60px' }}>
            <h2 style={tituloSeccionStyle}>{seccion.titulo[lang]}</h2>
            
            {/* GRID 3x2 */}
            <div style={gridContainerStyle}>
              {noticiasMostradas.map((noticia) => (
                <div key={noticia.id} style={cardStyle}>
                  <div style={fotoCardStyle}>
                    <Image 
                      src={noticia.imagen || '/placeholder.jpg'} 
                      alt={noticia[lang]?.titulo || "Noticia"} 
                      fill sizes="(max-width: 1024px) 100vw, 33vw" 
                      style={{ objectFit: 'cover' }}
                      onError={(e) => { e.target.src = '/placeholder.jpg'; }} 
                    />
                  </div>
                  <div style={cardContentStyle}>
                    <h3 style={cardTitleStyle}>{noticia[lang]?.titulo}</h3>
                    <Link href={`/${lang}/noticias/${noticia.id}`} style={cardLinkStyle}>Leer más →</Link>
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

// ESTILOS
const gridContainerStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' };
const cardStyle = { backgroundColor: '#f9f9f9', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee' };
const fotoCardStyle = { width: '100%', position: 'relative', aspectRatio: '16/9' };
const cardContentStyle = { padding: '15px' };
const cardTitleStyle = { fontSize: '1rem', margin: '0 0 10px 0', fontWeight: '700' };
const cardLinkStyle = { color: '#d4af37', fontWeight: 'bold', fontSize: '0.9rem' };
const tituloSeccionStyle = { fontSize: '1.5rem', marginBottom: '20px', borderLeft: '5px solid #f1c40f', paddingLeft: '10px' };