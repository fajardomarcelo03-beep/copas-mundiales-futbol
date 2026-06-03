'use client';
import { use } from 'react';

// BASE DE DATOS LOCAL DE LOS ESTADIOS MÁS EMBLEMÁTICOS DE LOS MUNDIALES
const estadiosHistoricos = [
  {
    id: 1,
    nombre: "Maracaná",
    pais: "Brasil",
    nacimiento: "Inaugurado en 1950",
    estado: "Sede de las finales de 1950 y 2014.",
    imagen: "/maracana.jpg",
    infancia: {
      es: "Construido específicamente para la Copa del Mundo de 1950, este coloso fue diseñado para ser el templo del fútbol brasileño. Su arquitectura circular y masiva buscaba acoger a la mayor cantidad de aficionados posible, convirtiéndose en el corazón palpitante del deporte en Río de Janeiro.",
      en: "Built specifically for the 1950 World Cup, this colossus was designed to be the temple of Brazilian football. Its circular, massive architecture was intended to host the largest possible number of fans, becoming the beating heart of the sport in Rio de Janeiro."
    },
    mundiales: {
      es: "Escenario del histórico 'Maracanazo' en 1950 donde Uruguay sorprendió al mundo, y sede de la final de 2014 entre Alemania y Argentina. Es el mayor símbolo de la pasión mundialista en Sudamérica.",
      en: "The scene of the historic 'Maracanazo' in 1950 where Uruguay shocked the world, and host of the 2014 final between Germany and Argentina. It is the greatest symbol of World Cup passion in South America."
    },
    logros: {
      es: "Uno de los pocos estadios en el mundo que ha tenido el honor de albergar dos finales de la Copa Mundial de la FIFA.",
      en: "One of the few stadiums in the world that has had the honor of hosting two FIFA World Cup finals."
    }
  },
  {
    id: 2,
    nombre: "Estadio Azteca",
    pais: "México",
    nacimiento: "Inaugurado en 1966",
    estado: "Único estadio con dos finales de Mundial (1970, 1986).",
    imagen: "/azteca.jpg",
    infancia: {
      es: "Conocido como el 'Coloso de Santa Úrsula', fue concebido como una pieza de ingeniería monumental para el Mundial de 1970. Su estructura permitía una visibilidad perfecta desde cualquier punto, marcando una nueva era en el diseño de estadios en México.",
      en: "Known as the 'Colossus of Santa Ursula', it was conceived as a monumental piece of engineering for the 1970 World Cup. Its structure allowed perfect visibility from any point, marking a new era in stadium design in Mexico."
    },
    mundiales: {
      es: "El escenario donde Pelé se consagró en 1970 y donde Diego Maradona inmortalizó el 'Gol del Siglo' y la 'Mano de Dios' en 1986. Es la casa sagrada de las leyendas mundialistas.",
      en: "The stage where Pelé was crowned in 1970 and where Diego Maradona immortalized the 'Goal of the Century' and the 'Hand of God' in 1986. It is the sacred home of World Cup legends."
    },
    logros: {
      es: "Es el único estadio en la historia en albergar dos finales de la Copa del Mundo de la FIFA, consolidándose como un ícono global.",
      en: "It is the only stadium in history to host two FIFA World Cup finals, establishing itself as a global icon."
    }
  },
  {
    id: 3,
    nombre: "Wembley",
    pais: "Inglaterra",
    nacimiento: "Inaugurado en 1923 (Renovado 2007)",
    estado: "Sede de la final de 1966.",
    imagen: "/wembley.jpg",
    infancia: {
      es: "Considerado la 'Catedral del Fútbol', su diseño original con las icónicas 'Torres Gemelas' definió la identidad del fútbol inglés. Tras su reconstrucción, se transformó en un recinto moderno con un arco de 134 metros que domina el horizonte de Londres.",
      en: "Considered the 'Cathedral of Football', its original design with the iconic 'Twin Towers' defined the identity of English football. After its reconstruction, it transformed into a modern venue with a 134-meter arch that dominates the London skyline."
    },
    mundiales: {
      es: "Fue el corazón palpitante del Mundial de 1966. Aquí, Inglaterra alzó su primer y único título mundial en una final épica que sigue siendo referencia histórica para el país.",
      en: "It was the beating heart of the 1966 World Cup. Here, England lifted their first and only world title in an epic final that remains a historical reference for the country."
    },
    logros: {
      es: "Sede de la final de 1966 y punto de encuentro obligatorio para los eventos más importantes del fútbol internacional.",
      en: "Host of the 1966 final and a mandatory meeting point for the most important events in international football."
    }
  },
  {
    id: 4,
    nombre: "Estadio Centenario",
    pais: "Uruguay",
    nacimiento: "Inaugurado en 1930",
    estado: "Sede del primer Mundial de la historia.",
    imagen: "/centenario.jpg",
    infancia: {
      es: "Construido en un tiempo récord para celebrar el centenario de la Constitución uruguaya y albergar el primer Mundial de la FIFA. Es una pieza arquitectónica histórica, declarada monumento del fútbol mundial.",
      en: "Built in record time to celebrate the centenary of the Uruguayan Constitution and host the first FIFA World Cup. It is a historic architectural piece, declared a monument of world football."
    },
    mundiales: {
      es: "Fue el epicentro del torneo inaugural de 1930. Aquí, Uruguay escribió la primera página dorada del fútbol al coronarse como el primer campeón mundial ante su gente.",
      en: "It was the epicenter of the inaugural 1930 tournament. Here, Uruguay wrote the first golden page of football by being crowned the first world champion before its people."
    },
    logros: {
      es: "Haber sido la cuna del primer torneo mundial de la historia, sentando el precedente de lo que hoy es el evento deportivo más grande del mundo.",
      en: "Having been the cradle of the first world tournament in history, setting the precedent for what is now the world's biggest sporting event."
    }
  },
  {
    id: 5,
    nombre: "Santiago Bernabéu",
    pais: "España",
    nacimiento: "Inaugurado en 1947",
    estado: "Sede de la final de 1982.",
    imagen: "/bernabeu.jpg",
    infancia: {
      es: "Ubicado en el corazón de Madrid, este estadio ha crecido junto a la historia del fútbol. Su arquitectura ha sido constantemente modernizada, pasando de un tazón clásico a un estadio tecnológicamente avanzado con cubierta retráctil.",
      en: "Located in the heart of Madrid, this stadium has grown alongside the history of football. Its architecture has been constantly modernized, moving from a classic bowl to a technologically advanced stadium with a retractable roof."
    },
    mundiales: {
      es: "Presidió la gran final de España 1982. En este césped, Italia venció a Alemania Federal en un duelo que consolidó la pasión española por organizar grandes eventos mundiales.",
      en: "It presided over the great final of Spain 1982. On this pitch, Italy defeated West Germany in a duel that consolidated the Spanish passion for organizing major world events."
    },
    logros: {
      es: "Sede de la final de 1982, convirtiéndose en un referente de infraestructura deportiva a nivel europeo y mundial.",
      en: "Host of the 1982 final, becoming a benchmark for sports infrastructure at a European and global level."
    }
  },
  {
    id: 6,
    nombre: "Stadio Olimpico",
    pais: "Italia",
    nacimiento: "Inaugurado en 1953",
    estado: "Sede de la final de 1990.",
    imagen: "/olimpico.jpg",
    infancia: {
      es: "Situado en el Foro Itálico de Roma, combina la herencia clásica con la funcionalidad deportiva. Ha sido el hogar de los grandes eventos en Italia, destacando por su pista de atletismo y su atmósfera imponente.",
      en: "Located in the Foro Italico in Rome, it combines classical heritage with sporting functionality. It has been the home of major events in Italy, standing out for its track and field and imposing atmosphere."
    },
    mundiales: {
      es: "Fue el escenario máximo del Mundial de 1990. Testigo de la victoria de Alemania Federal ante Argentina, fue el punto final de uno de los torneos más recordados por su despliegue táctico.",
      en: "It was the ultimate stage of the 1990 World Cup. Witness to the victory of West Germany over Argentina, it was the final point of one of the tournaments most remembered for its tactical display."
    },
    logros: {
      es: "Sede principal de Italia 1990, consolidando al país como uno de los organizadores más históricos del fútbol mundial.",
      en: "Main venue of Italy 1990, consolidating the country as one of the most historic organizers of world football."
    }
  },
  {
    id: 7,
    nombre: "Estadio Lusail",
    pais: "Qatar",
    nacimiento: "Inaugurado en 2022",
    estado: "Sede de la final de 2022.",
    imagen: "/lusail.jpg",
    infancia: {
      es: "Una maravilla de la arquitectura moderna inspirada en el juego de luces y sombras de la linterna 'fanar'. Fue diseñado para ser un hito cultural y el punto central de una ciudad futurista.",
      en: "A marvel of modern architecture inspired by the interplay of light and shadow of the 'fanar' lantern. It was designed to be a cultural landmark and the centerpiece of a futuristic city."
    },
    mundiales: {
      es: "El escenario donde se escribió la historia moderna. Aquí, Argentina y Messi alcanzaron la gloria eterna tras una de las finales más espectaculares jamás vistas contra Francia.",
      en: "The stage where modern history was written. Here, Argentina and Messi reached eternal glory after one of the most spectacular finals ever seen against France."
    },
    logros: {
      es: "Albergar la final del Mundial 2022, siendo el estadio que coronó a una de las leyendas más grandes de la historia del fútbol.",
      en: "Hosting the 2022 World Cup final, being the stadium that crowned one of the greatest legends in football history."
    }
  },
  {
    id: 8,
    nombre: "Allianz Arena",
    pais: "Alemania",
    nacimiento: "Inaugurado en 2005",
    estado: "Sede inaugural de 2006.",
    imagen: "/allianz.jpg",
    infancia: {
      es: "Un icono del diseño digital. Su fachada está compuesta por paneles inflables que pueden cambiar de color, representando una nueva generación de recintos deportivos donde la tecnología y el confort son prioridad absoluta.",
      en: "An icon of digital design. Its facade is composed of inflatable panels that can change color, representing a new generation of sports venues where technology and comfort are the absolute priority."
    },
    mundiales: {
      es: "Dio inicio al Mundial de Alemania 2006 con el partido inaugural. Fue el centro de atención global en un torneo marcado por la modernidad y la impecable eficiencia alemana.",
      en: "Kicked off the 2006 Germany World Cup with the opening match. It was the center of global attention in a tournament marked by modernity and impeccable German efficiency."
    },
    logros: {
      es: "Primera estructura del mundo con una fachada completamente inflable y símbolo del fútbol moderno.",
      en: "World's first structure with a fully inflatable facade and a symbol of modern football."
    }
  },
  {
    id: 9,
    nombre: "Signal Iduna Park",
    pais: "Alemania",
    nacimiento: "Inaugurado en 1974",
    estado: "Sede de la semifinal de 2006.",
    imagen: "/signaliduna.jpg",
    infancia: {
      es: "Construido originalmente para el Mundial de 1974, destaca por su 'Muro Amarillo', la tribuna de pie más grande de Europa. Su diseño está pensado para amplificar el sonido y la presión de la hinchada.",
      en: "Originally built for the 1974 World Cup, it stands out for its 'Yellow Wall', the largest standing terrace in Europe. Its design is intended to amplify the sound and pressure of the fans."
    },
    mundiales: {
      es: "Clave en el Mundial 2006, albergó la vibrante semifinal entre Alemania e Italia. Es reconocido por albergar la atmósfera más vibrante e intimidante de los mundiales.",
      en: "Key in the 2006 World Cup, it hosted the vibrant semi-final between Germany and Italy. It is recognized for hosting the most vibrant and intimidating atmosphere in the World Cups."
    },
    logros: {
      es: "Haber creado una cultura de tribuna única que es referencia mundial en cuanto a pasión y lealtad de la afición.",
      en: "Having created a unique terrace culture that is a global reference in terms of passion and fan loyalty."
    }
  },
  {
    id: 10,
    nombre: "Estadio Nissan",
    pais: "Japón",
    nacimiento: "Inaugurado en 1998",
    estado: "Sede de la final de 2002.",
    imagen: "/nissan.jpg",
    infancia: {
      es: "Representa el orgullo de la ingeniería japonesa a finales del siglo XX. Un estadio polivalente que fue la joya de la corona del primer Mundial realizado en territorio asiático.",
      en: "Represents the pride of Japanese engineering at the end of the 20th century. A multi-purpose stadium that was the crown jewel of the first World Cup held on Asian soil."
    },
    mundiales: {
      es: "Escenario de la consagración de Brasil en 2002. Aquí, el pentacampeonato se hizo realidad tras vencer a Alemania, cerrando el primer Mundial en Asia con broche de oro.",
      en: "The stage for Brazil's consecration in 2002. Here, the fifth title became a reality after beating Germany, closing the first World Cup in Asia with a flourish."
    },
    logros: {
      es: "Sede de la final del primer Mundial asiático, marcando la expansión definitiva del fútbol hacia nuevos horizontes globales.",
      en: "Host of the final of the first Asian World Cup, marking the definitive expansion of football towards new global horizons."
    }
  }
];

export default function EstadiosPage({ params }) {
  const { lang } = use(params);
  const idiomaActual = lang === 'en' || lang === 'es' ? lang : 'es';

  const t = {
    es: {
      titulo: "Estadios Emblemáticos",
      nacimiento: "Inauguración",
      infancia: "Historia Arquitectónica",
      mundiales: "Hitos Mundialistas",
      logros: "Legado Mundial"
    },
    en: {
      titulo: "Iconic Stadiums",
      nacimiento: "Inauguration",
      infancia: "Architectural History",
      mundiales: "World Cup Milestones",
      logros: "World Cup Legacy"
    }
  }[idiomaActual];

  return (
    <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#0a192f', fontSize: '2.5rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px 0' }}>
          {t.titulo}
        </h1>
        <div style={{ width: '80px', height: '5px', backgroundColor: '#f1c40f', margin: '0 auto', borderRadius: '2px' }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
        {estadiosHistoricos.map((estadio) => (
          <div key={estadio.id} style={{ backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)', display: 'flex', flexDirection: 'column', border: '1px solid #e2e8f0' }}>
            
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#0a192f' }}>
              <img src={estadio.imagen} alt={estadio.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.9' }} onError={(e) => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', bottom: '15px', left: '15px', backgroundColor: '#f1c40f', color: '#0a192f', padding: '6px 12px', fontWeight: '800', fontSize: '0.85rem', borderRadius: '6px', textTransform: 'uppercase' }}>
                {estadio.pais}
              </div>
            </div>

            <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', color: '#0a192f', margin: '0 0 5px 0', fontWeight: '700' }}>{estadio.nombre}</h2>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
                  🗓️ <strong>{t.nacimiento}:</strong> {estadio.nacimiento}
                </p>
                <p style={{ fontSize: '0.85rem', color: '#e11d48', margin: '3px 0 0 0', fontWeight: '600' }}>
                  📌 {estadio.estado}
                </p>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '5px 0' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', lineHeight: '1.6', color: '#334155' }}>
                <p><strong>🏗️ {t.infancia}:</strong> {estadio.infancia[idiomaActual]}</p>
                <p><strong>⚽ {t.mundiales}:</strong> {estadio.mundiales[idiomaActual]}</p>
                <p style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #f1c40f', margin: '5px 0 0 0', fontStyle: 'italic' }}>
                  <strong>🏆 {t.logros}:</strong> {estadio.logros[idiomaActual]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}