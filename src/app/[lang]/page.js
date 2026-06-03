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
    { titulo: { es: "Mundial 2026", en: "World Cup 2026" }, data: noticiasMundial, path: "noticias" },
    { titulo: { es: "Libertadores", en: "Libertadores" }, data: noticiasLibertadores, path: "competiciones/libertadores" },
    { titulo: { es: "Sudamericana", en: "Sudamericana" }, data: noticiasSudamericana, path: "competiciones/sudamericana" },
    { titulo: { es: "Liga Pro", en: "Liga Pro" }, data: noticiasLigaPro, path: "competiciones/liga-pro" },
    { titulo: { es: "MLS", en: "MLS" }, data: noticiasMLS, path: "competiciones/mls" },
    { titulo: { es: "La Liga", en: "La Liga" }, data: noticiasLaLiga, path: "competiciones/la-liga" },
    { titulo: { es: "Premier League", en: "Premier League" }, data: noticiasPremier, path: "competiciones/premier-league" },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '40px 20px' }}>
      <style jsx global>{`
        .grid-3x2 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 900px) { .grid-3x2 { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .grid-3x2 { grid-template-columns: 1fr; } }
      `}</style>

      {secciones.map((seccion, index) => {
        const noticiasMostradas = [...seccion.data]
          .sort((a, b) => new Date(b.fechaISO) - new Date(a.fechaISO))
          .slice(0, 6);

        if (noticiasMostradas.length === 0) return null;

        return (
          <section key={index} style={{ marginBottom: '60px', maxWidth: '1280px', margin: '0 auto 60px' }}>
            <h2 style={tituloSeccionStyle}>{seccion.titulo[lang]}</h2>
            
            <div className="grid-3x2">
              {noticiasMostradas.map((noticia) => (
                <div key={noticia.id} style={cardStyle}>
                  <div style={fotoCardStyle}>
                    <Image 
                      src={noticia.imagen || '/placeholder.jpg'} 
                      alt={noticia[lang]?.titulo || "Noticia"} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      onError={(e) => { e.target.src = '/placeholder.jpg'; }} 
                    />
                  </div>
                  <div style={cardContentStyle}>
                    <h3 style={cardTitleStyle}>{noticia[lang]?.titulo}</h3>
                    <Link href={`/${lang}/${seccion.path}/${noticia.id}`} style={cardLinkStyle}>
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

// ESTILOS
const cardStyle = { backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', border: '1px solid #e2e8f0' };
const fotoCardStyle = { width: '100%', position: 'relative', backgroundColor: '#f1f5f9', aspectRatio: '16/9' };
const cardContentStyle = { padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 };
const cardTitleStyle = { fontSize: '1.1rem', color: '#0a192f', margin: '0 0 12px 0', fontWeight: '700', lineHeight: '1.4' };
const cardLinkStyle = { color: '#0a192f', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem', marginTop: 'auto' };
const tituloSeccionStyle = { color: '#0a192f', fontSize: '1.5rem', marginBottom: '25px', fontWeight: '800', borderLeft: '5px solid #f1c40f', paddingLeft: '15px' };