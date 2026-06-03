'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIdioma } from '../HeaderContextLayout'; // Ajustado con ../ para subir un nivel

export default function HistoriaMundialesPage() {
  const { idioma } = useIdioma();

  // ==========================================
  // 1. DICCIONARIO DE TRADUCCIÓN (SÓLO HISTORIA)
  // ==========================================
  const t = {
    es: {
      heroTitulo: "LA HISTORIA DE LA GLORIA",
      heroSub: "Desde 1930, el torneo que detiene el tiempo y consagra leyendas.",
      origenGloria: "El Camino a la Gloria",
      resumenTexto: "La Copa Mundial de la FIFA nació en 1930 tras la audaz visión de Jules Rimet, celebrando su primera edición en Uruguay. Lo que comenzó como una competencia de trece naciones invitadas se ha transformado en el fenómeno cultural y deportivo más grande del planeta.",
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
      heroTitulo: "THE HISTORY OF GLORY",
      heroSub: "Since 1930, the tournament that stops time and crowns legends.",
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
  }[idioma || 'es'];

  // ==========================================
  // 2. BASES DE DATOS (PROTEGIDAS)
  // ==========================================
  const todosLosMundiales = [
    { ano: "1930", era: "pioneros", anfitrion: { es: "Uruguay", en: "Uruguay" }, desc: { es: "El inicio de la leyenda en Sudamérica con trece selecciones en el mítico Estadio Centenario.", en: "The dawn of a legacy in South America, featuring thirteen national teams at the legendary Centenario Stadium." }, img: "/Mundial1930.jpeg" },
    { ano: "1934", era: "pioneros", anfitrion: { es: "Italia", en: "Italy" }, desc: { es: "El primer mundial disputado en suelo europeo, cargado de una alta tensión competitiva.", en: "The inaugural World Cup on European soil, defined by intense competitive stakes." }, img: "/Mundial1934.jpeg" },
    { ano: "1938", era: "pioneros", anfitrion: { es: "Francia", en: "France" }, desc: { es: "La última gran cita futbolística antes del parón mundial.", en: "The final major tournament before the global hiatus." }, img: "/Mundial1938.jpeg" },
    { ano: "1950", era: "pioneros", anfitrion: { es: "Brasil", en: "Brazil" }, desc: { es: "El Maracanazo: la hazaña charrúa que grabó el silencio más grande en la historia.", en: "The Maracanazo: the historic Uruguayan feat that produced the greatest silence." }, img: "/Mundial1950.jpeg" },
    { ano: "1954", era: "pioneros", anfitrion: { es: "Suiza", en: "Switzerland" }, desc: { es: "El Milagro de Berna: Alemania Occidental sorprende al vencer al mítico equipo de Hungría.", en: "The Miracle of Berna: West Germany stuns the world by defeating the legendary Hungarians." }, img: "/Mundial1954.jpeg" },
    { ano: "1958", era: "revolucion", anfitrion: { es: "Suecia", en: "Sweden" }, desc: { es: "La irrupción mundial de un joven Pelé y el primer título de Brasil.", en: "The world stage debut of a young Pelé, securing Brazil's first world title." }, img: "/Mundial1958.jpeg" },
    { ano: "1962", era: "revolucion", anfitrion: { es: "Chile", en: "Chile" }, desc: { es: "Brasil revalidó su corona en un torneo de alta exigencia física.", en: "Brazil successfully retained their crown in a highly physical tournament." }, img: "/Mundial1962.jpeg" },
    { ano: "1966", era: "revolucion", anfitrion: { es: "Inglaterra", en: "England" }, desc: { es: "Los creadores del fútbol alzan su copa en casa rodeados de polémica.", en: "The founders of football lift the trophy on home soil amidst controversy." }, img: "/Mundial1966.jpeg" },
    { ano: "1970", era: "revolucion", anfitrion: { es: "México", en: "Mexico" }, desc: { es: "El juego bonito de Brasil toca el cielo. El mejor mundial para muchos.", en: "Brazil's 'Jogo Bonito' reaches its absolute pinnacle. Often called the best WC." }, img: "/Mundial1970.jpeg" },
    { ano: "1974", era: "revolucion", anfitrion: { es: "Alemania", en: "Germany" }, desc: { es: "La Naranja Mecánica revoluciona el juego, pero la eficacia alemana gana.", en: "Total Football revolutionizes the game, yet German efficiency secures the title." }, img: "/Mundial1974.jpeg" },
    { ano: "1978", era: "revolucion", anfitrion: { es: "Argentina", en: "Argentina" }, desc: { es: "La Albiceleste conquista su primera estrella ante su apasionado público.", en: "The Albiceleste claims its historic first star before a passionate home crowd." }, img: "/Mundial1978.jpeg" },
    { ano: "1982", era: "oro", anfitrion: { es: "España", en: "Spain" }, desc: { es: "Italia de Paolo Rossi resurge para ser tricampeona en un mundial lleno de magia.", en: "Paolo Rossi's Italy surges back to become three-time champions in a magical WC." }, img: "/Mundial1982.jpeg" },
    { ano: "1986", era: "oro", anfitrion: { es: "México", en: "Mexico" }, desc: { es: "La consagración absoluta de Diego Armando Maradona y su legendaria 'Mano de Dios'.", en: "The absolute consecration of Maradona, featuring his legendary 'Hand of God'." }, img: "/Mundial1986.jpeg" },
    { ano: "1990", era: "oro", anfitrion: { es: "Italia", en: "Italy" }, desc: { es: "Un torneo táctico que culminó con la revancha de Alemania frente a Argentina.", en: "A deeply tactical tournament culminating in Germany's redemption against Argentina." }, img: "/Mundial1990.jpeg" },
    { ano: "1994", era: "oro", anfitrion: { es: "EE.UU.", en: "USA" }, desc: { es: "El fútbol conquista Norteamérica y se define en penales a favor de Brasil.", en: "Football captures the USA, concluding in a penalty shootout won by Brazil." }, img: "/Mundial1994.jpeg" },
    { ano: "1998", era: "oro", anfitrion: { es: "Francia", en: "France" }, desc: { es: "Zinedine Zidane lidera a 'Les Bleus' hacia una noche gloriosa en París.", en: "Zinedine Zidane masterfully guides 'Les Bleus' to a glorious night in Paris." }, img: "/Mundial1998.jpeg" },
    { ano: "2002", era: "oro", anfitrion: { es: "Corea/Japón", en: "South Korea/Japan" }, desc: { es: "Redención de Ronaldo y el pentacampeonato de Brasil en suelo asiático.", en: "Ronaldo’s iconic redemption, sealing Brazil’s fifth world title in Asia." }, img: "/Mundial2002.jpeg" },
    { ano: "2006", era: "moderna", anfitrion: { es: "Alemania", en: "Germany" }, desc: { es: "Italia se corona tetracampeona en el adiós de Zidane.", en: "Italy is crowned four-time champions in Zinedine Zidane’s farewell." }, img: "/Mundial2006.jpeg" },
    { ano: "2010", era: "moderna", anfitrion: { es: "Sudáfrica", en: "South Africa" }, desc: { es: "El 'Tiki-Taka' de España conquista el primer mundial africano.", en: "Spain's 'Tiki-Taka' conquers the first African World Cup." }, img: "/Mundial2010.jpeg" },
    { ano: "2014", era: "moderna", anfitrion: { es: "Brasil", en: "Brazil" }, desc: { es: "Alemania domina suelo sudamericano con un histórico 7-1 al anfitrión.", en: "Germany dominates on South American soil, routing the hosts 7-1." }, img: "/Mundial2014.jpeg" },
    { ano: "2018", era: "moderna", anfitrion: { es: "Rusia", en: "Russia" }, desc: { es: "La velocidad de Kylian Mbappé lleva a Francia a su segunda estrella.", en: "The explosive pace of Kylian Mbappé propels France to its second star." }, img: "/Mundial2018.jpeg" },
    { ano: "2022", era: "moderna", anfitrion: { es: "Catar", en: "Qatar" }, desc: { es: "La Copa más espectacular corona a Lionel Messi en una final inolvidable.", en: "The most spectacular World Cup crowns Lionel Messi in an unforgettable final." }, img: "/Mundial2022.jpeg" }
  ];

  const presidentesFifa = [
    { id: 1, nombre: "Jules Rimet", periodo: "1921 - 1954", foto: "/JulesRimet.jpeg", hitos: { es: ["Creador de la Copa Mundial en 1930.", "Mantuvo la FIFA durante la guerra.", "Trofeo nombrado en su honor."], en: ["Founder of the World Cup in 1930.", "Maintained FIFA during the war.", "Trophy named in his honor."] } },
    { id: 2, nombre: "Stanley Rous", periodo: "1961 - 1974", foto: "/StanleyRouse.jpeg", hitos: { es: ["Reestructuró las reglas en 1938.", "Promovió el arbitraje internacional.", "Impulsó la TV global."], en: ["Drafted rules in 1938.", "Promoted international refereeing.", "Drove global TV."] } },
    { id: 3, nombre: "João Havelange", periodo: "1974 - 1998", foto: "/JoaoHavelange.jpeg", hitos: { es: ["Globalizó comercialmente la FIFA.", "Expandió de 16 a 32 selecciones.", "Creó el Mundial Femenino."], en: ["Globalized FIFA commercially.", "Expanded from 16 to 32 teams.", "Created Women's World Cup."] } },
    { id: 4, nombre: "Gianni Infantino", periodo: "2016 - Presente", foto: "/GianniInfantino.jpeg", hitos: { es: ["Introducción del VAR en 2018.", "Mundial de 48 equipos para 2026.", "Crecimiento financiero récord."], en: ["VAR introduction in 2018.", "48-team World Cup for 2026.", "Record financial growth."] } }
  ];

  const estadiosEmblematicos = [
    { id: 1, nombre: "Azteca", foto: "/Azteca.jpg", info: { construccion: "1966", capacidad: "87,523", ciudad: { es: "México", en: "Mexico" }, final: { es: "1970 y 1986", en: "1970 and 1986" } } },
    { id: 2, nombre: "Maracaná", foto: "/Maracana.jpg", info: { construccion: "1950", capacidad: "78,838", ciudad: { es: "Río de Janeiro", en: "Rio de Janeiro" }, final: { es: "1950 y 2014", en: "1950 and 2014" } } },
    { id: 3, nombre: "Wembley", foto: "/Wembley.jpg", info: { construccion: "1923/2007", capacidad: "90,000", ciudad: { es: "Londres", en: "London" }, final: { es: "1966", en: "1966" } } },
    { id: 4, nombre: "Centenario", foto: "/Centenario.jpg", info: { construccion: "1930", capacidad: "60,235", ciudad: { es: "Montevideo", en: "Montevideo" }, final: { es: "1930", en: "1930" } } },
    { id: 5, nombre: "Stade France", foto: "/Stade_france.jpg", info: { construccion: "1998", capacidad: "80,698", ciudad: { es: "Saint-Denis", en: "Saint-Denis" }, final: { es: "1998", en: "1998" } } },
    { id: 6, nombre: "Lusail", foto: "/Lusail.jpg", info: { construccion: "2021", capacidad: "88,966", ciudad: { es: "Lusail", en: "Lusail" }, final: { es: "2022", en: "2022" } } },
    { id: 7, nombre: "Olympiastadion", foto: "/Olympiastadion.jpg", info: { construccion: "1936", capacidad: "74,475", ciudad: { es: "Berlín", en: "Berlin" }, final: { es: "2006", en: "2006" } } },
    { id: 8, nombre: "Rose Bowl", foto: "/RoseBowl.jpg", info: { construccion: "1922", capacidad: "92,542", ciudad: { es: "Pasadena", en: "Pasadena" }, final: { es: "1994", en: "1994" } } }
  ];

  // ==========================================
  // 3. ESTADOS Y LÓGICA
  // ==========================================
  const [eraActiva, setEraActiva] = useState('pioneros');
  const [tarjetaHover, setTarjetaHover] = useState(null);
  const [estadioHover, setEstadioHover] = useState(null);

  const mundialesFiltrados = todosLosMundiales.filter(m => m.era === eraActiva);

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      
      {/* BANNER HERO HISTÓRICO */}
      <section style={{ backgroundColor: '#0a192f', color: '#fff', padding: '100px 20px', textAlign: 'center', backgroundImage: 'linear-gradient(rgba(10,25,47,0.8), rgba(10,25,47,0.8)), url("/Azteca.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '20px' }}>{t.heroTitulo}</h1>
          <p style={{ fontSize: '1.2rem', color: '#f1c40f' }}>{t.heroSub}</p>
        </div>
      </section>

      {/* RESUMEN */}
      <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={tituloSeccionStyle}>{t.origenGloria}</h2>
          <p style={parrafoResumenStyle}>{t.resumenTexto}</p>
        </div>
      </section>

      {/* MUNDIALES INTERACTIVOS */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f4f6f9' }}>
        <h2 style={{...tituloSeccionStyle, textAlign: 'center'}}>{t.capitulosTitulo}</h2>
        <p style={{textAlign: 'center', color: '#718096', marginBottom: '40px'}}>{t.capitulosSub}</p>
        
        <div style={filterContainerStyle}>
          {Object.keys(t.eras).map((key) => (
            <button 
              key={key}
              onClick={() => setEraActiva(key)} 
              style={{
                ...btnFilterStyle, 
                backgroundColor: eraActiva === key ? '#0a192f' : '#fff', 
                color: eraActiva === key ? '#fff' : '#0a192f'
              }}
            >
              {t.eras[key]}
            </button>
          ))}
        </div>

        <div style={{ maxWidth: '1350px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          {mundialesFiltrados.map((m) => (
            <div key={m.ano} style={cardStyle}>
              <div style={{ position: 'relative', width: '100%', height: '180px' }}>
                <Image src={m.img} alt={m.ano} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={cardContentStyle}>
                <h3 style={cardTitleStyle}>{idioma === 'en' ? 'WORLD CUP' : 'COPA MUNDIAL'} {m.ano}</h3>
                <p style={cardSubtitleStyle}>📍 {t.sede}: {m.anfitrion[idioma || 'es']}</p>
                <p style={cardTextStyle}>{m.desc[idioma || 'es']}</p>
                <Link href={`/mundial/${m.ano}?lang=${idioma || 'es'}`} style={cardLinkStyle}>{t.leerMas}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRESIDENTES FIFA */}
      <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
        <h2 style={{...tituloSeccionStyle, textAlign: 'center'}}>{t.lideresTitulo}</h2>
        <p style={{textAlign: 'center', color: '#718096', marginBottom: '50px'}}>{t.lideresSub}</p>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
          {presidentesFifa.map((pres) => (
            <div 
              key={pres.id} 
              style={{...flipCardContainerStyle, transform: tarjetaHover === pres.id ? 'translateY(-6px)' : 'translateY(0)'}}
              onMouseEnter={() => setTarjetaHover(pres.id)}
              onMouseLeave={() => setTarjetaHover(null)}
            >
              <div style={{...flipCardInnerStyle, transform: tarjetaHover === pres.id ? 'rotateY(180deg)' : 'rotateY(0deg)'}}>
                <div style={flipCardFrontStyle}>
                  <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                    <Image src={pres.foto} alt={pres.nombre} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={infoPresidenteStyle}>
                    <h3 style={nombrePresStyle}>{pres.nombre}</h3>
                    <p style={periodoPresStyle}>{pres.periodo}</p>
                  </div>
                </div>
                <div style={flipCardBackStyle}>
                  <h3 style={tituloBackStyle}>{t.gestionDe} {pres.nombre}</h3>
                  <div style={divisorBackStyle}></div>
                  <ul style={listaHitosStyle}>
                    {pres.hitos[idioma || 'es'].map((hito, i) => <li key={i} style={itemHitoStyle}>{hito}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ESTADIOS */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f4f6f9' }}>
        <h2 style={{...tituloSeccionStyle, textAlign: 'center'}}>{t.estadiosTitulo}</h2>
        <p style={{textAlign: 'center', color: '#718096', marginBottom: '50px'}}>{t.estadiosSub}</p>
        <div style={{ maxWidth: '1350px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {estadiosEmblematicos.map((est) => (
            <div 
              key={est.id} 
              style={{...flipCardContainerStyle, height: '350px', transform: estadioHover === est.id ? 'translateY(-6px)' : 'translateY(0)'}}
              onMouseEnter={() => setEstadioHover(est.id)}
              onMouseLeave={() => setEstadioHover(null)}
            >
              <div style={{...flipCardInnerStyle, transform: estadioHover === est.id ? 'rotateY(180deg)' : 'rotateY(0deg)'}}>
                <div style={flipCardFrontStyle}>
                  <div style={{ position: 'relative', width: '100%', height: '270px' }}>
                    <Image src={est.foto} alt={est.nombre} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={infoPresidenteStyle}><h3 style={nombrePresStyle}>{est.nombre}</h3></div>
                </div>
                <div style={flipCardBackStyle}>
                  <h3 style={tituloBackStyle}>{est.nombre}</h3>
                  <div style={divisorBackStyle}></div>
                  <p style={itemFichaEstadioStyle}><strong>🗓️ {t.fichaEstadio.construccion}:</strong> {est.info.construccion}</p>
                  <p style={itemFichaEstadioStyle}><strong>🏟️ {t.fichaEstadio.capacidad}:</strong> {est.info.capacidad}</p>
                  <p style={itemFichaEstadioStyle}><strong>📍 {t.fichaEstadio.city}:</strong> {est.info.ciudad[idioma || 'es']}</p>
                  <p style={{...itemFichaEstadioStyle, color: '#f1c40f'}}><strong>🏆 {t.fichaEstadio.final}:</strong> {est.info.final[idioma || 'es']}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ESTILOS REUTILIZADOS DEL ORIGINAL
const tituloSeccionStyle = { color: '#0a192f', fontSize: '2rem', margin: '0 0 15px 0', fontWeight: '800' };
const parrafoResumenStyle = { color: '#4a5568', fontSize: '1.1rem', lineHeight: '1.8' };
const filterContainerStyle = { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '35px' };
const btnFilterStyle = { padding: '10px 20px', border: '2px solid #0a192f', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' };
const cardStyle = { backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' };
const cardContentStyle = { padding: '20px' };
const cardTitleStyle = { fontSize: '1.2rem', color: '#0a192f', fontWeight: '800', marginBottom: '8px' };
const cardSubtitleStyle = { fontSize: '0.9rem', color: '#718096', marginBottom: '12px' };
const cardTextStyle = { fontSize: '0.95rem', color: '#4a5568', lineHeight: '1.5', marginBottom: '15px' };
const cardLinkStyle = { color: '#0a192f', fontWeight: '800', textDecoration: 'none' };
const flipCardContainerStyle = { width: '100%', height: '370px', perspective: '1000px', cursor: 'pointer' };
const flipCardInnerStyle = { position: 'relative', width: '100%', height: '100%', transition: 'transform 0.6s', transformStyle: 'preserve-3d' };
const flipCardFrontStyle = { position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', backgroundColor: '#fff' };
const flipCardBackStyle = { position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', borderRadius: '12px', transform: 'rotateY(180deg)', backgroundColor: '#0a192f', color: '#fff', padding: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center' };
const infoPresidenteStyle = { padding: '15px', textAlign: 'center' };
const nombrePresStyle = { fontSize: '1.2rem', fontWeight: '800', margin: 0 };
const periodoPresStyle = { fontSize: '0.9rem', color: '#64748b' };
const tituloBackStyle = { fontSize: '1.2rem', color: '#f1c40f', marginBottom: '10px' };
const divisorBackStyle = { width: '40px', height: '3px', backgroundColor: '#f1c40f', marginBottom: '15px' };
const listaHitosStyle = { paddingLeft: '15px', margin: 0 };
const itemHitoStyle = { fontSize: '0.85rem', marginBottom: '8px', color: '#cbd5e1' };
const itemFichaEstadioStyle = { fontSize: '0.9rem', margin: '5px 0' };