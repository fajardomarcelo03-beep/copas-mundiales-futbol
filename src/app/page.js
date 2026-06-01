'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIdioma } from './HeaderContextLayout';
import { noticiasData } from '@/app/data/noticiasData';

export default function HomePage() {
  const { idioma } = useIdioma();

  // ==========================================
  // 1. DICCIONARIO DE TRADUCCIÓN PROFESIONAL
  // ==========================================
  const t = {
    es: {
      noticiasTitulo: "NOTICIAS MÁS DESTACADAS DEL MUNDIAL FIFA 2026",
      carrusel: [
        { titulo: "La Pasión Eterna del Fútbol", subtitulo: "Crónicas de los torneos que paralizan al planeta." },
        { titulo: "Estadios Míticos y Leyendas", subtitulo: "El teatro donde se consagraron los más grandes." },
        { titulo: "Momentos Inolvidables", subtitulo: "Goles y hazañas grabadas en la memoria colectiva." }
      ],
      origenGloria: "El Camino a la Gloria",
      resumenTexto: "La Copa Mundial de la FIFA nació en 1930 tras la audaz visión de Jules Rimet, celebrando su primera edición en las tierras orientales de Uruguay. Lo que comenzó como una competencia de trece naciones invitadas se ha transformado en el fenómeno cultural y deportivo más grande del planeta.",
      capitulosTitulo: "Ediciones de la Copa Mundial de la FIFA",
      capitulosSub: "Explora la historia interactiva seleccionando una época del fútbol:",
      eras: {
        pioneros: "Los Pioneros (1930-1954)",
        revolucion: "Revolución (1958-1978)",
        oro: "Era de Oro (1982-2002)",
        moderna: "Tiempos Modernos (2006-2022)"
      },
      sede: "Sede",
      leerMas: "Leer más →",
      lideresTitulo: "Presidentes de la FIFA más destacados",
      lideresSub: "Evolución y gestión de los mandatos que marcaron el rumbo institucional:",
      gestionDe: "Gestión de",
      estadiosTitulo: "Estadios Mundialistas más Emblemáticos",
      estadiosSub: "Los templos del fútbol donde se forjó la historia de las grandes finales:",
      fichaEstadio: {
        construccion: "Construcción",
        capacidad: "Capacidad",
        city: "Ciudad",
        final: "Partido Final"
      }
    },
    en: {
      noticiasTitulo: "FIFA WORLD CUP 2026 HIGHLIGHTS & NEWS",
      carrusel: [
        { titulo: "The Eternal Passion of Football", subtitulo: "Chronicles of the tournaments that captivate the world." },
        { titulo: "Mythical Stadiums & Legends", subtitulo: "The grand stages where the greatest icons were crowned." },
        { titulo: "Unforgettable Moments", subtitulo: "Historic goals and feats etched into collective memory." }
      ],
      origenGloria: "The Road to Glory",
      resumenTexto: "The FIFA World Cup was born in 1930 under the bold vision of Jules Rimet, hosting its inaugural edition in Uruguay. What began as an invitational tournament among thirteen nations has evolved into the greatest cultural and sporting phenomenon on the planet.",
      capitulosTitulo: "FIFA World Cup Editions",
      capitulosSub: "Explore interactive history by selecting a football era:",
      eras: {
        pioneros: "The Pioneers (1930-1954)",
        revolucion: "The Revolution (1958-1978)",
        oro: "The Golden Era (1982-2002)",
        moderna: "Modern Times (2006-2022)"
      },
      sede: "Host Country",
      leerMas: "Read more →",
      lideresTitulo: "Most Prominent FIFA Presidents",
      lideresSub: "Evolution and governance of the mandates that shaped institutional direction:",
      gestionDe: "Administration of",
      estadiosTitulo: "Most Iconic World Cup Stadiums",
      estadiosSub: "The cathedrals of football where historic final matches were defined:",
      fichaEstadio: {
        construccion: "Built In",
        capacidad: "Capacity",
        city: "City",
        final: "Final Match"
      }
    }
  }[idioma || 'es']; // Contingencia segura en caso de que el contexto de idioma tarde en inicializar

  // =================================================================================
  // 2. MAPEO ULTRA-SEGURO ANTI-FALLO DE COMPILACIÓN (PRODUCCIÓN VERCEL)
  // =================================================================================
  const obtenerNoticiasSeguras = () => {
    try {
      const datosOrigen = noticiasData || {};
      const llaves = Object.keys(datosOrigen);
      
      if (llaves.length === 0) {
        // Fallback robusto en caso de que el módulo no se lea a tiempo durante el build estático
        return [{
          id: "noticia-6",
          img: "/Beccacece.jpg",
          titulos: { es: "Ecuador presenta sus convocados", en: "Ecuador announces squad list" },
          resumen: { es: "Sebastián Beccacece definió la lista", en: "Sebastián Beccacece finalized the roster" }
        }];
      }

      return llaves.map((key) => {
        const n = datosOrigen[key];
        return {
          id: key || "noticia-desconocida",
          img: n?.imagen || "/Carrusel1.jpg",
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

  // ==========================================
  // 3. BASE DE DATOS DE MUNDIALES HISTÓRICOS
  // ==========================================
  const todosLosMundiales = [
    { ano: "1930", era: "pioneros", anfitrion: { es: "Uruguay", en: "Uruguay" }, desc: { es: "El inicio de la leyenda en Sudamérica con trece selecciones dispuestas a hacer historia en el mítico Estadio Centenario.", en: "The dawn of a legacy in South America, featuring thirteen national teams poised to make history at the legendary Centenario Stadium." }, img: "/Mundial1930.jpeg" },
    { ano: "1934", era: "pioneros", anfitrion: { es: "Italia", en: "Italy" }, desc: { es: "El primer mundial disputado en suelo europeo, cargado de una alta tensión competitiva.", en: "The inaugural World Cup on European soil, defined by intense competitive stakes and athletic drama." }, img: "/Mundial1934.jpeg" },
    { ano: "1938", era: "pioneros", anfitrion: { es: "Francia", en: "France" }, desc: { es: "La última gran cita futbolística antes del parón mundial, consolidando dynasties épicas.", en: "The final major tournament before the global hiatus, solidifying legendary football dynasties." }, img: "/Mundial1938.jpeg" },
    { ano: "1950", era: "pioneros", anfitrion: { es: "Brasil", en: "Brazil" }, desc: { es: "El Maracanazo: la hazaña charrúa que grabó el silencio más grande en la historia.", en: "The Maracanazo: the historic Uruguayan feat that produced the greatest silence in football history." }, img: "/Mundial1950.jpeg" },
    { ano: "1954", era: "pioneros", anfitrion: { es: "Suiza", en: "Switzerland" }, desc: { es: "El Milagro de Berna: Alemania Occidental sorprende al mundo al vencer al mítico equipo de Hungría.", en: "The Miracle of Berna: West Germany stuns the world by defeating the legendary Hungarian squad." }, img: "/Mundial1954.jpeg" },
    { ano: "1958", era: "revolucion", anfitrion: { es: "Suecia", en: "Sweden" }, desc: { es: "La irrupción mundial de un joven de 17 años llamado Pelé y el primer título de Brasil.", en: "The world stage debut of a 17-year-old phenom named Pelé, securing Brazil's first world title." }, img: "/Mundial1958.jpeg" },
    { ano: "1962", era: "revolucion", anfitrion: { es: "Chile", en: "Chile" }, desc: { es: "Un torneo de alta exigencia física donde Brasil revalidó su corona sin Pelé lesionado.", en: "A highly physical tournament where Brazil successfully retained their crown despite Pelé's early injury." }, img: "/Mundial1962.jpeg" },
    { ano: "1966", era: "revolucion", anfitrion: { es: "Inglaterra", en: "England" }, desc: { es: "Los creadores del fútbol moderno alzan su copa en casa rodeados de polémica.", en: "The founders of modern football lift the trophy on home soil amidst intense match controversy." }, img: "/Mundial1966.jpeg" },
    { ano: "1970", era: "revolucion", anfitrion: { es: "México", en: "Mexico" }, desc: { es: "Considerado el mejor mundial de la historia; el juego bonito de Brasil toca el cielo.", en: "Widely regarded as the greatest World Cup ever; Brazil's 'Jogo Bonito' reaches its absolute pinnacle." }, img: "/Mundial1970.jpeg" },
    { ano: "1974", era: "revolucion", anfitrion: { es: "Alemania", en: "Germany" }, desc: { es: "La Naranja Mecánica de Cruyff revoluciona el juego, pero la eficacia alemana gana.", en: "Cruyff's 'Total Football' revolutionizes the game, yet German clinical efficiency secures the title." }, img: "/Mundial1974.jpeg" },
    { ano: "1978", era: "revolucion", anfitrion: { es: "Argentina", en: "Argentina" }, desc: { es: "La Albiceleste comandada por Kempes conquista su primera estrella ante su público.", en: "The Albiceleste, spearheaded by Mario Kempes, claims its historic first star before a passionate home crowd." }, img: "/Mundial1978.jpeg" },
    { ano: "1982", era: "oro", anfitrion: { es: "España", en: "Spain" }, desc: { es: "Un mundial lleno de magia donde la Italia de Paolo Rossi resurgió para ser tricampeona.", en: "A tournament defined by pure magic, where Paolo Rossi's Italy surged back to become three-time champions." }, img: "/Mundial1982.jpeg" },
    { ano: "1986", era: "oro", anfitrion: { es: "México", en: "Mexico" }, desc: { es: "La consagración absoluta de Diego Armando Maradona y su legendaria 'Mano de Dios'.", en: "The absolute consecration of Diego Armando Maradona, featuring his legendary 'Hand of God' and Goal of the Century." }, img: "/Mundial1986.jpeg" },
    { ano: "1990", era: "oro", anfitrion: { es: "Italia", en: "Italy" }, desc: { es: "Un torneo táctico y cerrado que culminó con la revancha de Alemania frente a Argentina.", en: "A deeply tactical, tight tournament culminating in Germany's sweet redemption against Argentina." }, img: "/Mundial1990.jpeg" },
    { ano: "1994", era: "oro", anfitrion: { es: "EE.UU.", en: "USA" }, desc: { es: "El fútbol conquista Norteamérica y se define por primera vez en penales a favor de Brasil.", en: "Football captures the North American market, concluding in the first-ever penalty shootout won by Brazil." }, img: "/Mundial1994.jpeg" },
    { ano: "1998", era: "oro", anfitrion: { es: "Francia", en: "France" }, desc: { es: "Zinedine Zidane lidera a 'Les Bleus' hacia una noche gloriosa e inolvidable en París.", en: "Zinedine Zidane masterfully guides 'Les Bleus' to a glorious and unforgettable night in Paris." }, img: "/Mundial1998.jpeg" },
    { ano: "2002", era: "oro", anfitrion: { es: "Corea/Japón", en: "South Korea/Japan" }, desc: { es: "El primer mundial en Asia presencia la redención de Ronaldo y el pentacampeonato de Brasil.", en: "Asia's inaugural World Cup hosts Ronaldo’s iconic redemption, sealing Brazil’s fifth world title." }, img: "/Mundial2002.jpeg" },
    { ano: "2006", era: "moderna", anfitrion: { es: "Alemania", en: "Germany" }, desc: { es: "Italia se corona tetracampeona en una dramática final marcada por la despedida de Zidane.", en: "Italy is crowned four-time champions in a dramatic final defined by Zinedine Zidane’s farewell." }, img: "/Mundial2006.jpeg" },
    { ano: "2010", era: "moderna", anfitrion: { es: "Sudáfrica", en: "South Africa" }, desc: { es: "El 'Tiki-Taka' de España conquista el primer mundial africano con el gol histórico de Iniesta.", en: "Spain's tactical 'Tiki-Taka' conquers the first African World Cup, sealed by Iniesta's historic extra-time goal." }, img: "/Mundial2010.jpeg" },
    { ano: "2014", era: "moderna", anfitrion: { es: "Brasil", en: "Brazil" }, desc: { es: "Alemania domina suelo sudamericano marcando un histórico 7-1 al anfitrión en su ruta al título.", en: "Germany dominates on South American soil, routing the hosts 7-1 on their relentless path to the title." }, img: "/Mundial2014.jpeg" },
    { ano: "2018", era: "moderna", anfitrion: { es: "Rusia", en: "Russia" }, desc: { es: "La juventud y velocidad de Kylian Mbappé llevan a Francia a bordar su segunda estrella.", en: "The explosive pace and youth of Kylian Mbappé propel France to claim their second world title." }, img: "/Mundial2018.jpeg" },
    { ano: "2022", era: "moderna", anfitrion: { es: "Catar", en: "Qatar" }, desc: { es: "La Copa más espectacular de la era moderna corona a Lionel Messi en una final inolvidable.", en: "The most spectacular World Cup of the modern era crowns Lionel Messi in an unforgettable final." }, img: "/Mundial2022.jpeg" }
  ];

  // ==========================================
  // 4. BASE DE DATOS DE PRESIDENTES FIFA
  // ==========================================
  const presidentesFifa = [
    { id: 1, nombre: "Jules Rimet", periodo: "1921 - 1954", foto: "/JulesRimet.jpeg", hitos: { es: ["Creador de la Copa Mundial de la FIFA en 1930.", "Mantuvo la organización unida durante la Segunda Guerra Mundial.", "El trofeo original llevó su nombre en su honor."], en: ["Founder of the FIFA World Cup in 1930.", "Maintained organizational unity through the challenges of World War II.", "The original World Cup trophy was named in his honor."] } },
    { id: 2, nombre: "Stanley Rous", periodo: "1961 - 1974", foto: "/StanleyRouse.jpeg", hitos: { es: ["Redactó y reestructuró las reglas del fútbol moderno en 1938.", "Promovió la expansión del arbitraje internacional.", "Impulsó la transmisión televisiva global de los mundiales."], en: ["Drafted and standardized modern football rules in 1938.", "Promoted the expansion and training of international refereeing.", "Drove the global television broadcasting of the World Cup tournaments."] } },
    { id: 3, nombre: "João Havelange", periodo: "1974 - 1998", foto: "/JoaoHavelange.jpeg", hitos: { es: ["Transformó la FIFA en una potencia comercial y global.", "Expandió los cupos del mundial de 16 a 32 selecciones.", "Creó el Mundial Femenino y los torneos juveniles Sub-17 y Sub-20."], en: ["Transformed FIFA into a global commercial and corporate powerhouse.", "Expanded the World Cup format from 16 to 32 participating teams.", "Established the FIFA Women's World Cup alongside U-17 and U-20 youth brackets."] } },
    { id: 4, nombre: "Gianni Infantino", periodo: "2016 - Presente", foto: "/GianniInfantino.jpeg", hitos: { es: ["Introducción histórica del VAR (Video Assistant Referee) en 2018.", "Aprobación del formato ampliado a 48 equipos para el Mundial 2026.", "Logró un crecimiento financiero récord en derechos audiovisuales."], en: ["Oversaw the historic implementation of the VAR system in 2018.", "Approved the expansion of the tournament format to 48 teams for 2026.", "Achieved record financial growth through media and broadcasting rights optimization."] } }
  ];

  // =======================================================
  // 5. BASE DE DATOS DE ESTADIOS EMBLEMÁTICOS (8 unidades)
  // =======================================================
  const estadiosEmblematicos = [
    { id: 1, nombre: "Azteca", foto: "/Azteca.jpg", info: { construccion: "1966", capacidad: "87,523", ciudad: { es: "Ciudad de México", en: "Mexico City" }, final: { es: "Brasil 4-1 Italia (1970) / Argentina 3-2 Alemania (1986)", en: "Brazil 4-1 Italy (1970) / Argentina 3-2 Germany (1986)" } } },
    { id: 2, nombre: "Maracaná", foto: "/Maracana.jpg", info: { construccion: "1950", capacidad: "78,838", ciudad: { es: "Río de Janeiro", en: "Rio de Janeiro" }, final: { es: "Uruguay 2-1 Brasil (1950) / Alemania 1-0 Argentina (2014)", en: "Uruguay 2-1 Brazil (1950) / Germany 1-0 Argentina (2014)" } } },
    { id: 3, nombre: "Wembley", foto: "/Wembley.jpg", info: { construccion: "1923 (Reconstruido 2007)", capacidad: "90,000", ciudad: { es: "Londres", en: "London" }, final: { es: "Inglaterra 4-2 Alemania Occidental (1966)", en: "England 4-2 West Germany (1966)" } } },
    { id: 4, nombre: "Centenario", foto: "/Centenario.jpg", info: { construccion: "1930", capacidad: "60,235", ciudad: { es: "Montevideo", en: "Montevideo" }, final: { es: "Uruguay 4-2 Argentina (1930)", en: "Uruguay 4-2 Argentina (1930)" } } },
    { id: 5, nombre: "Stade France", foto: "/Stade_france.jpg", info: { construccion: "1998", capacidad: "80,698", ciudad: { es: "Saint-Denis", en: "Saint-Denis" }, final: { es: "Francia 3-0 Brasil (1998)", en: "Francia 3-0 Brasil (1998)" } } },
    { id: 6, nombre: "Lusail", foto: "/Lusail.jpg", info: { construccion: "2021", capacidad: "88,966", ciudad: { es: "Lusail", en: "Lusail" }, final: { es: "Argentina 3(4)-(2)3 Francia (2022)", en: "Argentina 3(4)-(2)3 France (2022)" } } },
    { id: 7, nombre: "Olympiastadion Berlin", foto: "/Olympiastadion.jpg", info: { construccion: "1936", capacidad: "74,475", ciudad: { es: "Berlín", en: "Berlin" }, final: { es: "Italia 1(5)-(3)1 Francia (2006)", en: "Italy 1(5)-(3)1 France (2006)" } } },
    { id: 8, nombre: "Rose Bowl", foto: "/RoseBowl.jpg", info: { construccion: "1922", capacidad: "92,542", ciudad: { es: "Pasadena", en: "Pasadena" }, final: { es: "Brasil 0(3)-(2)0 Italia (1994)", en: "Brasil 0(3)-(2)0 Italy (1994)" } } }
  ];

  // ESTADOS Y HOOKS INTERACTIVOS ORIGINALES
  const [indiceActual, setIndiceActual] = useState(0);
  const [indiceNoticia, setIndiceNoticia] = useState(0);
  const [eraActiva, setEraActiva] = useState('pioneros');
  const [tarjetaHover, setTarjetaHover] = useState(null);
  const [estadioHover, setEstadioHover] = useState(null);

  // FILTRO CRONOLÓGICO SEGURO: Extrae de forma limpia las noticias
  const ultimasNoticias = [...noticias].reverse().slice(0, 5);

  const mundialesFiltrados = todosLosMundiales.filter(m => m.era === eraActiva);
  const esEraDeCinco = eraActiva === 'pioneros' || eraActiva === 'moderna';

  const siguienteImagen = () => setIndiceActual((prev) => (prev === (t?.carrusel?.length || 3) - 1 ? 0 : prev + 1));
  const anteriorImagen = () => setIndiceActual((prev) => (prev === 0 ? (t?.carrusel?.length || 3) - 1 : prev - 1));

  // Efecto automático para el carrusel de fondo principal
  useEffect(() => {
    const temporizador = setInterval(() => { siguienteImagen(); }, 5000);
    return () => clearInterval(temporizador);
  }, [indiceActual]);

  // Efecto automático para el carrusel superior
  useEffect(() => {
    if (ultimasNoticias.length === 0) return;
    const tempNoticias = setInterval(() => {
      setIndiceNoticia((prev) => (prev >= ultimasNoticias.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(tempNoticias);
  }, [indiceNoticia, ultimasNoticias.length]);

  return (
    <div>
      {/* 1. RECUADRO FIJO (STICKY HEADER) */}
      <div style={stickyNewsBarContainer}>
        <div style={stickyNewsTitleBox}>
          <span>{t?.noticiasTitulo}</span>
        </div>
        <div style={stickyNewsCarouselWrapper}>
          {ultimasNoticias.length > 0 && (
            <div style={stickyNewsSlideStyle}>
              <div style={stickyNewsImageContainer}>
                <Image 
                  src={ultimasNoticias[indiceNoticia]?.img || "/Carrusel1.jpg"} 
                  alt="Noticia Mundial 2026" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div style={stickyNewsTextContent}>
                <strong style={{ color: '#f1c40f' }}>{ultimasNoticias[indiceNoticia]?.titulos?.[idioma || 'es']} : </strong>
                <span>{ultimasNoticias[indiceNoticia]?.resumen?.[idioma || 'es']}</span>
              </div>
              {/* href dinámico seguro envuelto para que Next.js compile sin dependencias omitidas */}
              <Link href={`/noticias/${ultimasNoticias[indiceNoticia]?.id || 'error'}?lang=${idioma || 'es'}`} style={{...stickyNewsLinkStyle, zIndex: 10000}}>
                {t?.leerMas}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* SECCIÓN DEL CARRUSEL AUTOMÁTICO BILINGÜE DE BIENVENIDA */}
      <section style={carruselContainerStyle}>
        <div 
          style={{
            ...carruselSlideStyle,
            backgroundColor: '#16222f',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url(${imagenesCarruselData[indiceActual] || "/Carrusel1.jpg"})`
          }}
        >
          <div style={infoCarruselStyle}>
            <h1 style={tituloCarruselStyle}>{t?.carrusel?.[indiceActual]?.titulo}</h1>
            <p style={subtituloCarruselStyle}>{t?.carrusel?.[indiceActual]?.subtitulo}</p>
          </div>
        </div>

        <button onClick={anteriorImagen} style={{ ...flechaStyle, left: '20px' }}>❮</button>
        <button onClick={siguienteImagen} style={{ ...flechaStyle, right: '20px' }}>❯</button>

        <div style={puntosContainerStyle}>
          {(t?.carrusel || [1,2,3]).map((_, index) => (
            <span 
              key={index} 
              onClick={() => setIndiceActual(index)}
              style={{
                ...puntoStyle,
                backgroundColor: index === indiceActual ? '#f1c40f' : 'rgba(255,255,255,0.4)'
              }}
            />
          ))}
        </div>
      </section>

      {/* SECCIÓN RESUMEN HISTÓRICO */}
      <section style={resumenSectionStyle}>
        <div style={resumenContenedorInterno}>
          <h2 style={tituloSeccionStyle}>{t?.origenGloria}</h2>
          <p style={parrafoResumenStyle}>{t?.resumenTexto}</p>
        </div>
      </section>

      {/* SECCIÓN MUNDIALES REESTRUCTURADA */}
      <section style={gridSectionStyle}>
        <h2 style={{...tituloSeccionStyle, textAlign: 'center', marginBottom: '15px'}}>{t?.capitulosTitulo}</h2>
        <p style={{textAlign: 'center', color: '#718096', marginBottom: '35px'}}>{t?.capitulosSub}</p>
        
        <div style={filterContainerStyle}>
          {Object.keys(t?.eras || {}).map((key) => (
            <button 
              key={key}
              onClick={() => setEraActiva(key)} 
              style={{
                ...btnFilterStyle, 
                backgroundColor: eraActiva === key ? '#0a192f' : '#fff', 
                color: eraActiva === key ? '#fff' : '#0a192f'
              }}
            >
              {t?.eras?.[key]}
            </button>
          ))}
        </div>

        <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
          <div style={esEraDeCinco ? gridContenedorCincoStyle : gridContenedorSeisStyle}>
            {mundialesFiltrados.map((mundial) => (
              <div key={mundial.ano} style={cardStyle}>
                <div style={fotoCardStyle}>
                  <Image 
                    src={mundial.img} 
                    alt={`Copa Mundial ${mundial.ano}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 250px"
                    style={{ objectFit: 'cover' }}
                    priority={eraActiva === 'pioneros'}
                  />
                </div>
                <div style={cardContentStyle}>
                  <h3 style={cardTitleStyle}>{idioma === 'en' ? 'WORLD CUP' : 'COPA MUNDIAL'} {mundial.ano}</h3>
                  <p style={cardSubtitleStyle}>📍 {t?.sede}: {mundial.anfitrion[idioma || 'es']}</p>
                  <p style={cardTextStyle}>{mundial.desc[idioma || 'es']}</p>
                  <Link href={`/mundial/${mundial.ano}?lang=${idioma || 'es'}`} style={cardLinkStyle}>{t?.leerMas}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN PRESIDENTES FIFA */}
      <section style={presidentesSectionStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{...tituloSeccionStyle, textAlign: 'center', marginBottom: '10px'}}>{t?.lideresTitulo}</h2>
          <p style={{textAlign: 'center', color: '#718096', marginBottom: '50px'}}>{t?.lideresSub}</p>

          <div style={gridPresidentesStyle}>
            {presidentesFifa.map((pres) => (
              <div 
                key={pres.id} 
                style={{
                  ...flipCardContainerStyle,
                  transform: tarjetaHover === pres.id ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: tarjetaHover === pres.id ? '0 15px 35px rgba(0,0,0,0.12)' : '0 8px 20px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={() => setTarjetaHover(pres.id)}
                onMouseLeave={() => setTarjetaHover(null)}
                onTouchStart={() => setTarjetaHover(prev => prev === pres.id ? null : pres.id)}
                onClick={(e) => {
                  if (e.pointerType === 'mouse') {
                    setTarjetaHover(prev => prev === pres.id ? null : pres.id);
                  }
                }}
              >
                <div 
                  style={{
                    ...flipCardInnerStyle,
                    transform: tarjetaHover === pres.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* CARA FRONTAL */}
                  <div style={flipCardFrontStyle}>
                    <div style={fotoPresidenteContenedor}>
                      <Image 
                        src={pres.foto} 
                        alt={pres.nombre}
                        fill
                        sizes="280px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={infoPresidenteStyle}>
                      <h3 style={nombrePresStyle}>{pres.nombre}</h3>
                      <p style={periodoPresStyle}>{pres.periodo}</p>
                    </div>
                  </div>

                  {/* CARA TRASERA */}
                  <div style={flipCardBackStyle}>
                    <h3 style={tituloBackStyle}>{t?.gestionDe} {pres.nombre}</h3>
                    <div style={divisorBackStyle}></div>
                    <ul style={listaHitosStyle}>
                      {(pres.hitos[idioma || 'es'] || []).map((hito, i) => (
                        <li key={i} style={itemHitoStyle}>{hito}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN ESTADIOS MUNDIALISTAS EMBLEMÁTICOS */}
      <section style={estadiosSectionStyle}>
        <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
          <h2 style={{ ...tituloSeccionStyle, textAlign: 'center', marginBottom: '10px' }}>{t?.estadiosTitulo}</h2>
          <p style={{ textAlign: 'center', color: '#718096', marginBottom: '50px' }}>{t?.estadiosSub}</p>

          <div style={gridEstadiosStyle}>
            {estadiosEmblematicos.map((estadio) => (
              <div
                key={estadio.id}
                style={{
                  ...flipCardContainerStyle,
                  height: '350px',
                  transform: estadioHover === estadio.id ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: estadioHover === estadio.id ? '0 15px 35px rgba(0,0,0,0.15)' : '0 8px 20px rgba(0,0,0,0.06)'
                }}
                onMouseEnter={() => setEstadioHover(estadio.id)}
                onMouseLeave={() => setEstadioHover(null)}
                onTouchStart={() => setEstadioHover(prev => prev === estadio.id ? null : estadio.id)}
                onClick={(e) => {
                  if (e.pointerType === 'mouse') {
                    setEstadioHover(prev => prev === estadio.id ? null : estadio.id);
                  }
                }}
              >
                <div
                  style={{
                    ...flipCardInnerStyle,
                    transform: estadioHover === estadio.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* FRONTAL: FOTO DEL ESTADIO */}
                  <div style={flipCardFrontStyle}>
                    <div style={{ ...fotoPresidenteContenedor, height: '270px' }}>
                      <Image
                        src={estadio.foto}
                        alt={estadio.nombre}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={infoPresidenteStyle}>
                      <h3 style={nombrePresStyle}>{estadio.nombre}</h3>
                    </div>
                  </div>

                  {/* POSTERIOR: DATOS TÉCNICOS DETALLADOS */}
                  <div style={flipCardBackStyle}>
                    <h3 style={tituloBackStyle}>{estadio.nombre}</h3>
                    <div style={divisorBackStyle}></div>
                    <div style={fichaEstadioCuerpoStyle}>
                      <p style={itemFichaEstadioStyle}><strong>🗓️ {t?.fichaEstadio?.construccion}:</strong> {estadio.info.construccion}</p>
                      <p style={itemFichaEstadioStyle}><strong>🏟️ {t?.fichaEstadio?.capacidad}:</strong> {estadio.info.capacidad}</p>
                      <p style={itemFichaEstadioStyle}><strong>📍 {t?.fichaEstadio?.city}:</strong> {estadio.info.ciudad[idioma || 'es']}</p>
                      <p style={{ ...itemFichaEstadioStyle, color: '#f1c40f', marginTop: '4px' }}>
                        <strong>🏆 {t?.fichaEstadio?.final}:</strong> <span style={{ color: '#e2e8f0' }}>{estadio.info.final[idioma || 'es']}</span>
                      </p>
                    </div>
                  </div>
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
// ARCHIVO DE ESTILOS Y MAPEO DE COMPONENTES ORIGINALES
// =========================================================================
const imagenesCarruselData = ["/Carrusel1.jpg", "/Carrusel2.jpg", "/Carrusel3.webp"];

const carruselContainerStyle = { position: 'relative', width: '100%', height: '480px', overflow: 'hidden' };
const carruselSlideStyle = { width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'background-image 0.5s ease-in-out' };
const infoCarruselStyle = { textAlign: 'center', color: '#fff', padding: '0 20px' };
const tituloCarruselStyle = { fontSize: '2.8rem', margin: '0 0 10px 0', textShadow: '2px 2px 8px rgba(0,0,0,0.7)', fontWeight: '700' };
const subtituloCarruselStyle = { fontSize: '1.2rem', margin: 0, textShadow: '1px 1px 5px rgba(0,0,0,0.7)' };
const flechaStyle = { position: 'absolute', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(10, 25, 47, 0.6)', color: '#fff', border: 'none', fontSize: '1.8rem', padding: '10px 14px', cursor: 'pointer', borderRadius: '5px', zIndex: 10 };
const puntosContainerStyle = { position: 'absolute', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'center', gap: '10px', zIndex: 10 };
const puntoStyle = { width: '10px', height: '10px', borderRadius: '50%', cursor: 'pointer' };
const resumenSectionStyle = { backgroundColor: '#ffffff', padding: '60px 20px' };
const resumenContenedorInterno = { maxWidth: '850px', margin: '0 auto', textAlign: 'center' };
const tituloSeccionStyle = { color: '#0a192f', fontSize: '1.9rem', margin: '0 0 20px 0', fontWeight: '700' };
const parrafoResumenStyle = { color: '#4a5568', fontSize: '1.05rem', lineHeight: '1.8' };
const gridSectionStyle = { padding: '60px 25px', backgroundColor: '#f4f6f9' };
const gridContenedorCincoStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '20px', width: '100%' };
const gridContenedorSeisStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px', width: '100%' };
const cardStyle = { backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' };
const fotoCardStyle = { width: '100%', height: '160px', position: 'relative' };
const cardContentStyle = { padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 };
const cardTitleStyle = { fontSize: '1.1rem', color: '#0a192f', margin: '0 0 6px 0', fontWeight: '700' };
const cardSubtitleStyle = { fontSize: '0.85rem', color: '#718096', margin: '0 0 12px 0' };
const cardTextStyle = { fontSize: '0.9rem', color: '#4a5568', lineHeight: '1.5', margin: '0 0 16px 0', flexGrow: 1 };
const cardLinkStyle = { color: '#0a192f', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem', alignSelf: 'flex-start' };
const filterContainerStyle = { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' };
const btnFilterStyle = { padding: '10px 18px', border: '2px solid #0a192f', borderRadius: '25px', fontWeight: 'bold', fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.3s ease' };
const presidentesSectionStyle = { padding: '80px 25px', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' };
const gridPresidentesStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '35px', justifyContent: 'center' };
const flipCardContainerStyle = { backgroundColor: 'transparent', width: '100%', height: '380px', perspective: '1000px', cursor: 'pointer', borderRadius: '12px', transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)' };
const flipCardInnerStyle = { position: 'relative', width: '100%', height: '100%', textAlign: 'center', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)', transformStyle: 'preserve-3d' };
const caraComunStyle = { position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' };
const flipCardFrontStyle = { ...caraComunStyle, backgroundColor: '#ffffff', border: '1px solid #e2e8f0' };
const fotoPresidenteContenedor = { width: '100%', height: '260px', position: 'relative', backgroundColor: '#f8fafc' };
const infoPresidenteStyle = { padding: '15px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', alignItems: 'center' };
const nombrePresStyle = { fontSize: '1.2rem', color: '#0a192f', margin: '0 0 4px 0', fontWeight: '700', letterSpacing: '-0.3px' };
const periodoPresStyle = { fontSize: '0.9rem', color: '#64748b', fontWeight: '500', margin: 0 };
const flipCardBackStyle = { ...caraComunStyle, backgroundColor: '#0a192f', color: '#ffffff', transform: 'rotateY(180deg)', padding: '24px', alignItems: 'flex-start', textAlign: 'left', justifyContent: 'center' };
const tituloBackStyle = { fontSize: '1.15rem', fontWeight: '700', color: '#f1c40f', margin: '0 0 6px 0' };
const divisorBackStyle = { width: '35px', height: '2.5px', backgroundColor: '#f1c40f', marginBottom: '15px', borderRadius: '2px' };
const listaHitosStyle = { paddingLeft: '15px', margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' };
const itemHitoStyle = { fontSize: '0.88rem', lineHeight: '1.5', color: '#cbd5e1' };

const stickyNewsBarContainer = { 
  position: 'sticky', 
  top: '0px', 
  zIndex: 9999, 
  width: '100%', 
  height: '65px', 
  backgroundColor: '#0a192f', 
  borderBottom: '3px solid #f1c40f', 
  display: 'flex', 
  alignItems: 'center', 
  boxShadow: '0 6px 20px rgba(0,0,0,0.3)', 
  overflow: 'hidden' 
};

const stickyNewsTitleBox = { backgroundColor: '#f1c40f', color: '#0a192f', height: '100%', display: 'flex', alignItems: 'center', padding: '0 24px', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.5px', whiteSpace: 'nowrap', boxShadow: '4px 0 10px rgba(0,0,0,0.3)', zIndex: 2 };
const stickyNewsCarouselWrapper = { flexGrow: 1, height: '100%', padding: '0 20px', display: 'flex', alignItems: 'center' };
const stickyNewsSlideStyle = { display: 'flex', alignItems: 'center', width: '100%', height: '100%', gap: '15px' };
const stickyNewsImageContainer = { position: 'relative', width: '70px', height: '45px', borderRadius: '4px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(255,255,255,0.1)' };
const stickyNewsTextContent = { color: '#ffffff', fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', flexGrow: 1 };
const stickyNewsLinkStyle = { color: '#f1c40f', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem', whiteSpace: 'nowrap', paddingLeft: '10px' };

const estadiosSectionStyle = { padding: '80px 25px', backgroundColor: '#f4f6f9', borderTop: '1px solid #e2e8f0' };
const gridEstadiosStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', justifyContent: 'center' };
const fichaEstadioCuerpoStyle = { display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' };
const itemFichaEstadioStyle = { fontSize: '0.85rem', color: '#cbd5e1', margin: 0, lineHeight: '1.4' };