'use client';
import { use } from 'react';

// BASE DE DATOS LOCAL DE LOS PRESIDENTES MÁS DESTACADOS DE LA FIFA
const presidentesHistoricos = [
  {
    id: 1,
    nombre: "Robert Guérin",
    pais: "Francia",
    nacimiento: "1904 – 1906 (Periodo)",
    estado: "Primer Presidente de la FIFA. Falleció en 1952.",
    imagen: "/Guerin.jpg",
    infancia: {
      es: "Nacido en Francia, compaginaba su profesión de periodista en el diario 'Le Matin' con una profunda pasión por el automovilismo y el fútbol. Su mentalidad visionaria lo llevó a entender que el fútbol necesitaba una estructura global unificada.",
      en: "Born in France, he balanced his career as a journalist for 'Le Matin' with a deep passion for motorsport and football. His visionary mindset led him to understand that football required a unified global structure."
    },
    mundiales: {
      es: "Como primer presidente, sentó las bases de la federación. Con solo 28 años, convocó a las primeras siete federaciones europeas en París en 1904 para firmar el acta constitutiva de la FIFA y planificar los primeros torneos internacionales.",
      en: "As the first president, he laid down the foundation of the federation. At just 28 years old, he gathered the first seven European associations in Paris in 1904 to sign FIFA's constitutive act and plan the first international tournaments."
    },
    logros: {
      es: "Fundador principal y primer presidente de la FIFA. Logró agrupar a las primeras naciones para crear el marco legal del balompié mundial.",
      en: "Main founder and first president of FIFA. He successfully brought together the first nations to establish the legal framework of global football."
    }
  },
  {
    id: 2,
    nombre: "Jules Rimet",
    pais: "Francia",
    nacimiento: "1921 – 1954 (Periodo)",
    estado: "Presidente con el mandato más largo (33 años). Falleció en 1956.",
    imagen: "/JulesRimet.jpg",
    infancia: {
      es: "Hijo de un tendero en una comuna rural de Francia, se mudó a París de niño y se licenció en derecho. De firmes convicciones humanistas, Rimet creía que el deporte era una herramienta infalible para unir a las clases sociales y promover la paz.",
      en: "Son of a grocery store worker in rural France, he moved to Paris as a child and earned a law degree. Guided by solid humanistic beliefs, Rimet viewed sports as an infallible tool to unite social classes and foster peace."
    },
    mundiales: {
      es: "El padre absoluto de la Copa del Mundo. Superó el boicot de las potencias europeas y materializó el primer Mundial en Uruguay 1930. Bajo su incansable liderazgo, el torneo sobrevivió a la Segunda Guerra Mundial y se consolidó globalmente.",
      en: "The absolute father of the FIFA World Cup. He overcame boycotts from European powers and brought the first World Cup to life in Uruguay 1930. Under his tireless leadership, the tournament survived World War II and consolidated globally."
    },
    logros: {
      es: "Creación de la Copa del Mundo. En su honor, el trofeo original del certamen llevó su nombre (Copa Jules Rimet) hasta que Brasil se la quedó en propiedad en 1970.",
      en: "Creation of the FIFA World Cup. In his honor, the tournament's original trophy bore his name (Jules Rimet Cup) until Brazil won it permanently in 1970."
    }
  },
  {
    id: 3,
    nombre: "Arthur Drewry",
    pais: "Inglaterra",
    nacimiento: "1955 – 1961 (Periodo)",
    estado: "Falleció en funciones a los 70 años (25 de marzo de 1961).",
    imagen: "/Drewry.jpg",
    infancia: {
      es: "Nacido en Lincolnshire, sirvió en el ejército durante la Primera Guerra Mundial y luego lideró la empresa de pescado de su suegro. Su impecable capacidad de gestión empresarial e institucional lo llevó a presidir la Football League inglesa.",
      en: "Born in Lincolnshire, he served in the military during World War I and later headed his father-in-law's fish merchant business. His pristine corporate and institutional management skills led him to chair the English Football League."
    },
    mundiales: {
      es: "Jugó un papel crucial para que las selecciones de Gran Bretaña regresaran a la FIFA en 1946. Como presidente, supervisó el icónico Mundial de Suecia 1958, torneo que vio la irrupción de Pelé y consolidó la transmisión televisiva internacional.",
      en: "He played a pivotal role in getting the British associations back into FIFA in 1946. As president, he oversaw the iconic 1958 World Cup in Sweden, which witnessed Pelé's explosion and solidified international TV broadcasting."
    },
    logros: {
      es: "Artífice de la reunificación británica con la FIFA y organizador clave de la gran expansión del fútbol internacional a finales de los años 50.",
      en: "Architect of the British reunification with FIFA and key organizer of international football's major expansion during the late 1950s."
    }
  },
  {
    id: 4,
    nombre: "Sir Stanley Rous",
    pais: "Inglaterra",
    nacimiento: "1961 – 1974 (Periodo)",
    estado: "Nombrado Presidente de Honor de la FIFA. Falleció en 1986.",
    imagen: "/StanleyRous.jpg",
    infancia: {
      es: "Nacido en Mutford, comenzó como profesor de educación física. Destacó como árbitro internacional de fútbol en los años 20 y 30. Su obsesión siempre fue el orden, la disciplina y la codificación exacta de las reglas para proteger el juego limpio.",
      en: "Born in Mutford, he started out as a physical education teacher. He excelled as an international football referee during the 1920s and 1930s. His obsession was always order, discipline, and the exact codification of rules to protect fair play."
    },
    mundiales: {
      es: "Presidió los mundiales de Chile 1962, Inglaterra 1966 y México 1970. Impulsó la masificación comercial y la universalización del torneo a través de las pantallas a color, dándole al fútbol un carácter más técnico y estructurado.",
      en: "He presided over the World Cups of Chile 1962, England 1966, and Mexico 1970. He drove the commercial growth and universalization of the tournament through color television screens, giving football a technical and structured character."
    },
    logros: {
      es: "Redactó y reestructuró por completo las Reglas de Juego oficiales en 1938, introduciendo el sistema de arbitraje diagonal que se usa hasta el día de hoy.",
      en: "Completely rewrote and restructured the official Laws of the Game in 1938, introducing the diagonal refereeing system used to this day."
    }
  },
  {
    id: 5,
    nombre: "João Havelange",
    pais: "Brasil",
    nacimiento: "1974 – 1998 (Periodo)",
    estado: "Transformó el fútbol en una industria global. Falleció a los 100 años en 2016.",
    imagen: "/Havelange.jpg",
    infancia: {
      es: "Nacido en Río de Janeiro, fue un atleta de élite excepcional: compitió en natación en los JJ.OO. de Berlín 1936 y en waterpolo en Helsinki 1952. Se licenció en derecho y demostró un asombroso instinto para la diplomacia deportiva.",
      en: "Born in Rio de Janeiro, he was an exceptional elite athlete: competing in swimming at the 1936 Berlin Olympics and waterpolo at Helsinki 1952. He earned a law degree and displayed a staggering instinct for sports diplomacy."
    },
    mundiales: {
      es: "Bajo su mandato, la Copa del Mundo se convirtió en una potencia comercial. Expandió los cupos de 16 a 24 y luego a 32 equipos, abriendo las puertas a las federaciones de África, Asia y Concacaf, democratizando el acceso global.",
      en: "During his tenure, the World Cup grew into a commercial powerhouse. He expanded the tournament slots from 16 to 24 and eventually to 32, unlocking World Cup doors for Africa, Asia, and Concacaf, democratizing global access."
    },
    logros: {
      es: "Creación del Mundial Femenino, mundiales juveniles (Sub-17, Sub-20) y la Copa Confederaciones. Consiguió contratos multimillonarios de patrocinio.",
      en: "Creation of the Women's World Cup, youth World Cups (U-17, U-20), and the Confederations Cup. Secured multi-million dollar sponsorship contracts."
    }
  },
  {
    id: 6,
    nombre: "Gianni Infantino",
    pais: "Suiza / Italia",
    nacimiento: "2016 – Presente (Periodo)",
    estado: "Presidente en funciones (Edad: 56 años)",
    imagen: "/Infantino.jpg",
    infancia: {
      es: "Nació en Brig, Suiza, siendo hijo de inmigrantes italianos. Estudió derecho en la Universidad de Friburgo. Antes de llegar a la FIFA, escaló peldaños en la UEFA hasta convertirse en la mano derecha de la administración europea.",
      en: "Born in Brig, Switzerland, to Italian immigrant parents. He studied law at the University of Fribourg. Before hitting FIFA, he climbed ranks at UEFA until becoming the right hand of European administration."
    },
    mundiales: {
      es: "Es el arquitecto de la mayor expansión moderna de los mundiales. Implementó el uso del VAR (Árbitro de Asistente de Video) a partir de Rusia 2018 y aprobó el formato masivo de 48 selecciones para el Mundial de 2026.",
      en: "He is the architect behind the largest modern World Cup expansion. He implemented the use of VAR starting at Russia 2018 and approved the massive 48-team format for the 2026 World Cup."
    },
    logros: {
      es: "Introducción del VAR en las reglas de juego globales y expansión de la Copa del Mundo a 48 países para multiplicar el alcance internacional.",
      en: "Introduction of VAR into global game rules and expansion of the World Cup to 48 countries to multiply international reach."
    }
  }
];

export default function PresidentesPage({ params }) {
  // Desempaquetamos los parámetros dinámicos de la URL usando la función nativa 'use' de React
  const { lang } = use(params);

  // Validamos el idioma actual. Si no es 'en' ni 'es', por defecto usamos español.
  const idiomaActual = lang === 'en' || lang === 'es' ? lang : 'es';

  // Textos estáticos adaptados para el contexto de Presidentes
  const textos = {
    es: {
      titulo: "Presidentes de la FIFA",
      nacimiento: "Gestión",
      infancia: "Origen y Transfondo",
      mundiales: "Impacto y Mandato",
      logros: "Logro Histórico"
    },
    en: {
      titulo: "FIFA Presidents",
      nacimiento: "Tenure",
      infancia: "Origin & Background",
      mundiales: "Impact & Mandate",
      logros: "Historical Achievement"
    }
  };

  const t = textos[idiomaActual];

  return (
    <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* Encabezado Dinámico */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ 
          color: '#0a192f', 
          fontSize: '2.5rem', 
          fontWeight: '800',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          margin: '0 0 10px 0'
        }}>
          {t.titulo}
        </h1>
        <div style={{ width: '80px', height: '5px', backgroundColor: '#f1c40f', margin: '0 auto', borderRadius: '2px' }}></div>
      </div>

      {/* Contenedor Grid de Tarjetas */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '30px' 
      }}>
        {presidentesHistoricos.map((presidente) => (
          <div key={presidente.id} style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #e2e8f0'
          }}>
            
            {/* Foto del Presidente */}
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#0a192f' }}>
              <img 
                src={presidente.imagen} 
                alt={presidente.nombre} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.9' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                backgroundColor: '#f1c40f',
                color: '#0a192f',
                padding: '6px 12px',
                fontWeight: '800',
                fontSize: '0.85rem',
                borderRadius: '6px',
                textTransform: 'uppercase'
              }}>
                {presidente.pais}
              </div>
            </div>

            {/* Información Dinámica del Presidente */}
            <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', color: '#0a192f', margin: '0 0 5px 0', fontWeight: '700' }}>
                  {presidente.nombre}
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
                  🗓️ <strong>{t.nacimiento}:</strong> {presidente.nacimiento}
                </p>
                <p style={{ fontSize: '0.85rem', color: '#e11d48', margin: '3px 0 0 0', fontWeight: '600' }}>
                  📌 {presidente.estado}
                </p>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '5px 0' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', lineHeight: '1.6', color: '#334155' }}>
                <p>
                  <strong>👶 {t.infancia}:</strong> {presidente.infancia[idiomaActual]}
                </p>
                <p>
                  <strong>⚽ {t.mundiales}:</strong> {presidente.mundiales[idiomaActual]}
                </p>
                <p style={{ 
                  backgroundColor: '#f8fafc', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  borderLeft: '4px solid #f1c40f',
                  margin: '5px 0 0 0',
                  fontStyle: 'italic'
                }}>
                  <strong>🏆 {t.logros}:</strong> {presidente.logros[idiomaActual]}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}