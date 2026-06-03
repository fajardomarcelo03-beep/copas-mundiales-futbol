'use client';

import { useIdioma } from '../HeaderContextLayout';
import { noticiasData } from './data/noticiasData';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const { idioma } = useIdioma();

  // ==========================================
  // 1. DICCIONARIO DE TRADUCCIÓN PROFESIONAL
  // ==========================================
  const t = {
    es: {
      noticiasTitulo: "LO ÚLTIMO DEL MUNDO DEL FÚTBOL",
      leerMas: "Leer más →"
    },
    en: {
      noticiasTitulo: "LATEST FROM THE FOOTBALL WORLD",
      leerMas: "Read more →"
    }
  }[idioma || 'es'];

  // =================================================================================
  // 2. MAPEO ULTRA-SEGURO DE DATOS
  // =================================================================================
  const obtenerNoticiasSeguras = () => {
    try {
      const datosOrigen = noticiasData || {};
      const llaves = Object.keys(datosOrigen);
      
      if (llaves.length === 0) {
        return [{
          id: "noticia-6",
          img: "/Beccacece.jpg",
          tag: "Fútbol",
          titulos: { es: "Ecuador presenta sus convocados", en: "Ecuador announces squad list" },
          resumen: { es: "Sebastián Beccacece definió la lista", en: "Sebastián Beccacece finalized the roster" }
        }];
      }

      return llaves.map((key) => {
        const n = datosOrigen[key];
        return {
          id: key || "noticia-desconocida",
          img: n?.imagen || "/Carrusel1.jpg",
          tag: n?.tag || "Fútbol",
          titulos: {
            es: n?.es?.titulo || "Noticia sin título",
            en: n?.en?.titulo || "Untitled News"
          },
          resumen: {
            es: n?.es?.subtitulo || "",
            en: n?.en?.subtitulo || ""
          }
        };
      });
    } catch (e) {
      return [];
    }
  };

  const noticias = obtenerNoticiasSeguras();

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      
      {/* SECCIÓN ÚNICA: LO ÚLTIMO DEL MUNDO DEL FÚTBOL */}
      <section style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
        <div style={contenedorMaxWidthStyle}>
          
          <h2 style={tituloSeccionStyle}>
            <span style={{ borderBottom: '3px solid #f1c40f', paddingBottom: '6px' }}>
              {t.noticiasTitulo}
            </span>
          </h2>
          
          {/* EL CAMBIO CRÍTICO: Usamos propiedades inline nativas para forzar la grilla 
              desde el primer milisegundo de renderizado (HTML crudo) */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
              width: '100%'
            }}
          >
            {noticias.map((noticia, idx) => (
              <div key={idx} style={cardStyle}>
                <div style={fotoCardStyle}>
                  <Image 
                    src={noticia.img} 
                    alt="Noticia Portada" 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }} 
                    priority={idx < 3} 
                  />
                  <span style={tagEstilo}>{noticia.tag || 'Ligas'}</span>
                </div>
                <div style={cardContentStyle}>
                  <h3 style={cardTitleStyle}>{noticia.titulos[idioma || 'es']}</h3>
                  <p style={cardTextStyle}>{noticia.resumen[idioma || 'es']}</p>
                  <Link 
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

// =========================================================================
// DISEÑO DE ESTILOS ESTÁTICOS
// =========================================================================
const contenedorMaxWidthStyle = { 
  maxWidth: '1280px', 
  margin: '0 auto', 
  width: '100%', 
  paddingBottom: '60px'
};

const tituloSeccionStyle = { 
  color: '#0a192f', 
  fontSize: 'clamp(1.3rem, 4vw, 1.7rem)', 
  margin: '0 0 40px 0', 
  fontWeight: '800',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
};

const cardStyle = { 
  backgroundColor: '#ffffff', 
  borderRadius: '12px', 
  overflow: 'hidden', 
  boxShadow: '0 4px 20px rgba(0,0,0,0.06)', 
  display: 'flex', 
  flexDirection: 'column',
  border: '1px solid #e2e8f0',
  width: '100%'
};

const fotoCardStyle = { 
  width: '100%', 
  height: '210px', 
  position: 'relative',
  backgroundColor: '#f1f5f9'
};

const tagEstilo = { 
  position: 'absolute', 
  top: '15px', 
  left: '15px', 
  backgroundColor: '#0a192f', 
  color: '#f1c40f', 
  padding: '5px 12px', 
  fontSize: '0.72rem', 
  fontWeight: '800', 
  borderRadius: '4px', 
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  zIndex: 10
};

const cardContentStyle = { 
  padding: '20px', 
  display: 'flex', 
  flexDirection: 'column', 
  flexGrow: 1 
};

const cardTitleStyle = { 
  fontSize: '1.15rem', 
  color: '#0a192f', 
  margin: '0 0 10px 0', 
  fontWeight: '700',
  lineHeight: '1.4'
};

const cardTextStyle = { 
  fontSize: '0.9rem', 
  color: '#4a5568', 
  lineHeight: '1.6', 
  margin: '0 0 20px 0', 
  flexGrow: 1 
};

const cardLinkStyle = { 
  color: '#0a192f', 
  textDecoration: 'none', 
  fontWeight: '800', 
  fontSize: '0.88rem', 
  alignSelf: 'flex-start',
  transition: 'color 0.2s ease'
};