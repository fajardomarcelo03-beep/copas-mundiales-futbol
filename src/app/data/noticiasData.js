// src/app/data/noticiasData.js
import React from 'react';

export const noticiasData = {
  "noticia-1": { 
    imagen: "/Azteca.jpg", 
    es: { 
      titulo: "El Estadio Azteca hará historia en la inauguración de 2026", 
      subtitulo: "El coloso de Santa Úrsula se convierte en el templo definitivo de la FIFA.", 
      contenido: "La FIFA ha confirmado de manera oficial que el místico Estadio Azteca de la Ciudad de México será el escenario encargado de albergar el partido inaugural del Mundial el 11 de junio de 2026.", 
      autor: "Redacción FIFA 2026", 
      tiempoLectura: "3 min" 
    }, 
    en: { 
      titulo: "Azteca Stadium will make history in the 2026 opening match", 
      subtitulo: "The Santa Úrsula colossus becomes FIFA's definitive temple.", 
      contenido: "FIFA has officially confirmed that the legendary Azteca Stadium in Mexico City will host the opening match of the World Cup on June 11, 2026.", 
      autor: "FIFA 2026 Press", 
      tiempoLectura: "3 min" 
    } 
  },
  "noticia-2": { 
    imagen: "/Sedes.jpg", 
    es: { 
      titulo: "Sedes listas en Norteamérica para recibir el macro torneo", 
      subtitulo: "Las 16 ciudades anfitrionas reportan avances óptimos en logística.", 
      contenido: "Los comités organizadores de Estados Unidos, México y Canadá han presentado su informe unificado de infraestructura.", 
      autor: "Corresponsal Norteamérica", 
      tiempoLectura: "2 min" 
    }, 
    en: { 
      titulo: "North American host venues fully prepared for the macro tournament", 
      subtitulo: "All 16 host cities report optimal logistical progress.", 
      contenido: "The joint organizing committees of the United States, Mexico, and Canada presented their unified infrastructure master plan.", 
      autor: "North America Correspondent", 
      tiempoLectura: "2 min" 
    } 
  },
  "noticia-3": { 
    imagen: "/Selecciones.jpg", 
    es: { 
      titulo: "Formato Y calendario Oficial de la Copa del Mundo 2026", 
      subtitulo: "Conoce a detalle la transformación del formato de competición y el cronograma definitivo de la fase final.", 
      contenido: (
        <div style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#2d3748' }}>
          <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
            La <strong>Copa Mundial de la FIFA 2026</strong> marcará un hito sin precedentes en la cronología del balompié internacional. Programado para desarrollarse del 11 de junio al 19 de julio de 2026, el torneo estrenará un format estructuralmente renovado. Por primera vez en la historia de la competición, la fase final reunirá a <strong>48 selecciones nacionales</strong> y será albergada en una histórica coorganización tripartita entre <strong>Canadá, Estados Unidos y México</strong>.
          </p>
          <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
            El sistema de competición ha sido rediseñado meticulosamente para optimizar la competitividad. La fase inicial constará de <strong>12 grupos de cuatro equipos</strong> cada uno, garantizando que cada delegación dispute un mínimo de tres partidos. La clasificación a la etapa de eliminación directa estará estrictamente reservada para los dos primeros lugares de cada sector, complementados por los los ocho mejores terceros clasificados.
          </p>
          <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
            Como principal innovación en la estructura de los <em>playoffs</em>, se incorporará una ronda de <strong>dieciseisavos de final</strong> compuesta por 32 escuadras. A partir de allí, el torneo procederá bajo el formato tradicional de eliminación súbita a través de octavos, cuartos, semifinales y la gran final. Esta expansión elevará el calendario a un total de <strong>104 encuentros</strong>, consolidando a esta edición como la más extensa, inclusiva y con mayor despliegue logístico en la historia del fútbol global.
          </p>
          
          <h3 style={{ color: '#0a192f', fontSize: '1.35rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🗓️</span> Cronograma Oficial del Torneo
          </h3>
          
          <div style={{ overflowX: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', marginBottom: '10px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#0a192f', color: '#ffffff' }}>
                  <th style={{ padding: '12px 16px', fontWeight: '700', borderBottom: '3px solid #f1c40f' }}>Fase del Campeonato</th>
                  <th style={{ padding: '12px 16px', fontWeight: '700', borderBottom: '3px solid #f1c40f' }}>Periodo / Fecha</th>
                  <th style={{ padding: '12px 16px', fontWeight: '700', borderBottom: '3px solid #f1c40f' }}>Detalle Informativo</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '700', color: '#0a192f' }}>⚽ Partido Inaugural</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>11 de Junio</td>
                  <td style={{ padding: '12px 16px', fontStyle: 'italic' }}>México vs. Sudáfrica (Estadio Azteca, CDMX)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '600' }}>📋 Fase de Grupos</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>Del 11 al 27 de Junio</td>
                  <td style={{ padding: '12px 16px' }}>12 sectores en sedes concurrentes</td>
                </tr>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '600' }}>⚡ Dieciseisavos de Final</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>Del 28 de Junio al 3 de Julio</td>
                  <td style={{ padding: '12px 16px' }}>Ronda eliminatoria de 32 equipos</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '600' }}>🔥 Octavos de Final</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>Del 4 al 7 de Julio</td>
                  <td style={{ padding: '12px 16px' }}>Clasificación directa a cuartos</td>
                </tr>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '600' }}>🏆 Cuartos de Final</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>Del 9 al 11 de Julio</td>
                  <td style={{ padding: '12px 16px' }}>Fase de alta exigencia competitiva</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '600' }}>🌟 Semifinales</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>14 y 15 de Julio</td>
                  <td style={{ padding: '12px 16px' }}>Definición de los dos grandes finalistas</td>
                </tr>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '600' }}>🥉 Tercer Lugar</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>18 de Julio</td>
                  <td style={{ padding: '12px 16px' }}>Consagración del podio mundialista</td>
                </tr>
                <tr style={{ backgroundColor: '#fffbf0' }}>
                  <td style={{ padding: '14px 16px', fontWeight: '800', color: '#b7791f' }}>👑 Gran Final</td>
                  <td style={{ padding: '14px 16px', fontWeight: '700', whiteSpace: 'nowrap' }}>19 de Julio</td>
                  <td style={{ padding: '14px 16px', fontWeight: '700', color: '#0a192f' }}>Clausura y coronación del Campeón</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ), 
      autor: "Mesa de Deportes", 
      tiempoLectura: "5 min" 
    }, 
    en: { 
      titulo: "**Official Format and Schedule of the 2026 FIFA World Cup",
      subtitulo: "An in-depth look at the structural competition upgrade and the definitive knockout phase schedule.", 
      contenido: (
        <div style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#2d3748' }}>
          <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
            The <strong>2026 FIFA World Cup</strong> will mark an unprecedented milestone in the chronology of international football. Scheduled to take place from June 11 to July 19, 2026, the tournament will debut a structurally renewed format. For the first time in the history of the competition, the final stage will bring together <strong>48 national teams</strong> and will be hosted in a historic tripartite co-organization between <strong>Canada, Mexico, and the United States</strong>.
          </p>
          <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
            The competition system has been meticulously redesigned to optimize global competitiveness. The initial phase will consist of <strong>12 groups of four teams</strong> each, ensuring that every delegation plays a minimum of three matches. Qualification for the direct elimination stage will be strictly reserved for the top two places in each sector, complemented by the eight best third-placed finishers.
          </p>
          <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
            As a major innovation in the <em>playoffs</em> structure, a <strong>round of 32</strong> consisting of 32 squads will be incorporated. From there, the tournament will proceed under the traditional single-elimination format through the round of 16, quarter-finals, semi-finals, and the grand finale. This expansion will increase the schedule to a total of <strong>104 matches</strong>, consolidating this edition as the most extensive, inclusive, and logistically demanding in global football history.
          </p>
          
          <h3 style={{ color: '#0a192f', fontSize: '1.35rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🗓️</span> Official Tournament Schedule
          </h3>
          
          <div style={{ overflowX: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', marginBottom: '10px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#0a192f', color: '#ffffff' }}>
                  <th style={{ padding: '12px 16px', fontWeight: '700', borderBottom: '3px solid #f1c40f' }}>Tournament Stage</th>
                  <th style={{ padding: '12px 16px', fontWeight: '700', borderBottom: '3px solid #f1c40f' }}>Period / Date</th>
                  <th style={{ padding: '12px 16px', fontWeight: '700', borderBottom: '3px solid #f1c40f' }}>Key Matchday Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '700', color: '#0a192f' }}>⚽ Opening Match</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>June 11</td>
                  <td style={{ padding: '12px 16px', fontStyle: 'italic' }}>Mexico vs. South Africa (Azteca Stadium, CDMX)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '600' }}>📋 Group Stage</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>June 11 to June 27</td>
                  <td style={{ padding: '12px 16px' }}>12 sectors across concurrent host cities</td>
                </tr>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '600' }}>⚡ Round of 32</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>June 28 to July 3</td>
                  <td style={{ padding: '12px 16px' }}>Knockout stage featuring 32 teams</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '600' }}>🔥 Round of 16</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>July 4 to July 7</td>
                  <td style={{ padding: '12px 16px' }}>Direct qualification path to quarter-finals</td>
                </tr>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '600' }}>🏆 Quarter-finals</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>July 9 to July 11</td>
                  <td style={{ padding: '12px 16px' }}>High-intensity elite competition phase</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '600' }}>🌟 Semi-finals</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>July 14 and July 15</td>
                  <td style={{ padding: '12px 16px' }}>Determining the two grand finalists</td>
                </tr>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '600' }}>🥉 Third Place Play-off</td>
                  <td style={{ padding: '12px 16px', whiteSpace: 'nowrap' }}>July 18</td>
                  <td style={{ padding: '12px 16px' }}>Crowning the World Cup podium</td>
                </tr>
                <tr style={{ backgroundColor: '#fffbf0' }}>
                  <td style={{ padding: '14px 16px', fontWeight: '800', color: '#b7791f' }}>👑 Grand Final</td>
                  <td style={{ padding: '14px 16px', fontWeight: '700', whiteSpace: 'nowrap' }}>July 19</td>
                  <td style={{ padding: '14px 16px', fontWeight: '700', color: '#0a192f' }}>Closing ceremony and Champion coronation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ), 
      autor: "Sports Desk", 
      tiempoLectura: "5 min" 
    } 
  },
  "noticia-4": { 
    imagen: "/Estadio_final.jpg", 
    es: { 
      titulo: "La Gran Final en Nueva York/Nueva Jersey", 
      subtitulo: "El MetLife Stadium será el escenario donde se definirá al nuevo campeón del mundo.", 
      contenido: "El MetLife Stadium, con capacidad para más de 80 mil espectadores, será la sede de la final de la copa del mundo 2026.", 
      autor: "Mesa de Deportes", 
      tiempoLectura: "5 min" 
    }, 
    en: { 
      titulo: "The Grand Finale in New York/New Jersey", 
      subtitulo: "The MetLife Stadium will be the venue where the new world champion will be crowned.", 
      contenido: "The MetLife Stadium, with a capacity of more than 80,000 spectators, will host the final of the 2026 FIFA World Cup.", 
      autor: "Sports Desk", 
      tiempoLectura: "5 min" 
    } 
  },
  "noticia-5": { 
    imagen: "/Neymar_lesion.jpg", 
    es: { 
      titulo: "Neymar enciende las alarmas en Brasil", 
      subtitulo: "El astro brasileño sufre una lesión muscular de grado II, pero el cuerpo médico confía en su recuperación.", 
      contenido: "La selección brasileña enfrenta momentos de alta tensión tras confirmarse que Neymar Jr. presenta una lesión muscular de grado II.", 
      autor: "Corresponsal Sudamérica", 
      tiempoLectura: "4 min" 
    }, 
    en: { 
      titulo: "Neymar sparks injury alarm in Brazil", 
      subtitulo: "The Brazilian star suffers a grade II muscle injury, but the medical staff remains confident.", 
      contenido: "The Brazilian national team is facing tense moments after confirming that Neymar Jr. has a grade II muscle injury.", 
      autor: "South American Correspondent", 
      tiempoLectura: "4 min" 
    } 
  },
  "noticia-6": {
    imagen: "/Beccacece.jpg",
    es: {
      titulo: "Ecuador presenta sus convocados oficiales para el Mundial 2026",
      subtitulo: "Sebastián Beccacece definió la lista de la Tri con sorpresas y un bloque consolidado en Europa.",
      contenido: "El director técnico Sebastián Beccacece presentó la lista oficial de la Selección de Ecuador para la Copa del Mundo 2026.\n\nArqueros: Gonzalo Valle (Liga de Quito), Hernán Galíndez (Huracán) y Moisés Ramírez (Kifisia FC).\nDefensores: Ángelo Preciado (Atlético Mineiro), Félix Torres (Inter PA), Joel Ordóñez (Brujas), Jackson Porozo (Xolos de Tijuana), Pervis Estupiñán (Milan), Piero Hincapié (Arsenal FC) y Willian Pacho (PSG).\nMediocampistas: Alan Franco (Atlético Mineiro), Denil Castillo (Midtjylland), Jordy Alcívar (Independiente del Valle), Kendry Páez (River Plate), Moisés Caicedo (Chelsea), Pedro Vite (Pumas), Anthony Valencia (Royal Antwerp) y Yaimar Medina (Genk).\nDelanteros: Alan Minda (Atlético Mineiro), Enner Valencia (Pachuca), Gonzalo Plata (Flamengo), Jeremy Arévalo (Stuttgart), John Yeboah (Venezia), Jordy Caicedo (Huracán), Kevin Rodríguez (Union Saint-Gilloise) y Nilson Angulo (Sunderland).",
      autor: "Corresponsal Quito",
      tiempoLectura: "3 min"
    },
    en: {
      titulo: "Ecuador announces official squad list for the 2026 World Cup",
      subtitulo: "Sebastián Beccacece finalized La Tri's roster with key surprises and a strong European core.",
      contenido: "Head coach Sebastián Beccacece announced Ecuador's official squad list for the 2026 World Cup.\n\nGoalkeepers: Gonzalo Valle (Liga de Quito), Hernán Galíndez (Huracán), and Moisés Ramírez (Kifisia FC).\nDefenders: Ángelo Preciado (Atlético Mineiro), Félix Torres (Inter PA), Joel Ordóñez (Brujas), Jackson Porozo (Xolos de Tijuana), Pervis Estupiñán (Milan), Piero Hincapié (Arsenal FC), and Willian Pacho (PSG).\nMidfielders: Alan Franco (Atlético Mineiro), Denil Castillo (Midtjylland), Jordy Alcívar (Independiente del Valle), Kendry Páez (River Plate), Moisés Caicedo (Chelsea), Pedro Vite (Pumas), Anthony Valencia (Royal Antwerp), and Yaimar Medina (Genk).\nForwards: Alan Minda (Atlético Mineiro), Enner Valencia (Pachuca), Gonzalo Plata (Flamengo), Jeremy Arevalo (Stuttgart), John Yeboah (Venezia), Jordy Caicedo (Huracán), Kevin Rodríguez (Union Saint-Gilloise), and Nilson Angulo (Sunderland).",
      autor: "Quito Correspondent",
      tiempoLectura: "3 min"
    }
  },
  "noticia-7": {
    imagen: "/Iran.jpg",
    es: {
      titulo: "Irán ya tiene sus convocados para conquistar América",
      subtitulo: "La convocatoria no estuvo exenta de polémica: la principal sorpresa fue la ausencia de Sardar Azmoun.",
      contenido: "La convocatoria no estuvo exenta de polémica: la principal sorpresa fue la ausencia de Sardar Azmoun, considerado durante años una de las máximas figuras de la selección iraní y uno de los futbolistas más influyentes de su generación.\n\nLista definitiva de Irán para el Mundial 2026:\n\nArqueros: Alireza Beiranvand (Tractor), Hossein Hosseini (Sepahan Esfahan) y Payam Niazmand (Persépolis Teherán).\nDefensores: Daniyal Eiri (Malavan), Ehsan Hajsafi (Sepahan Esfahan), Saleh Hardani (Esteghlal Teherán), Hossein Kanaani (Persépolis Teherán), Shoja Khalilzadeh (Tractor), Milad Mohammadi (Persépolis Teherán), Ali Nemati (Foolad) y Ramin Rezaeian (Foolad).\nCentrocampistas: Rouzbeh Cheshmi (Esteghlal Teherán), Saeid Ezatolahi (Shabab Al Ahli), Mehdi Ghayedi (Al-Nasr), Saman Ghoddos (Kalba), Mohammad Ghorbani (Al Wahda), Alireza Jahanbakhsh (Dender), Mohammad Mohebi (Rostov), Amir Mohammad Razzaghinia (Esteghlal Teherán), Mehdi Torabi (Tractor) y Aria Yousefi (Sepahan Esfahan).\nDelanteros: Ali Alipour (Persépolis Teherán), Dennis Dargahi (Standard Liège), Amirhossein Hosseinzadeh (Tractor), Mehdi Taremi (Olympiacos) y Shahriar Moghanlou (Kalba).",
      autor: "Corresponsal Teherán",
      tiempoLectura: "3 min"
    },
    en: {
      titulo: "Iran announces squad list to conquer America",
      subtitulo: "The roster was not without controversy: the main surprise was the absence of Sardar Azmoun.",
      contenido: "The squad announcement was not without controversy: the main surprise was the absence of Sardar Azmoun, considered for years one of the top figures of the Iranian national team and one of the most influential footballers of his generation.\n\nIran's final roster for the 2026 World Cup:\n\nGoalkeepers: Alireza Beiranvand (Tractor), Hossein Hosseini (Sepahan Esfahan), and Payam Niazmand (Persepolis Tehran).\nDefenders: Daniyal Eiri (Malavan), Ehsan Hajsafi (Sepahan Esfahan), Saleh Hardani (Esteghlal Tehran), Hossein Kanaani (Persepolis Tehran), Shoja Khalilzadeh (Tractor), Milad Mohammadi (Persepolis Tehran), Ali Nemati (Foolad), and Ramin Rezaeian (Foolad).\nMidfielders: Rouzbeh Cheshmi (Esteghlal Tehran), Saeid Ezatolahi (Shabab Al Ahli), Mehdi Ghayedi (Al-Nasr), Saman Ghoddos (Kalba), Mohammad Ghorbani (Al Wahda), Alireza Jahanbakhsh (Dender), Mohammad Mohebi (Rostov), Amir Mohammad Razzaghinia (Esteghlal Tehran), Mehdi Torabi (Tractor), and Aria Yousefi (Sepahan Esfahan).\nForwards: Ali Alipour (Persepolis Tehran), Dennis Dargahi (Standard Liège), Amirhossein Hosseinzadeh (Tractor), Mehdi Taremi (Olympiacos), and Shahriar Moghanlou (Kalba).",
      autor: "Tehran Correspondent",
      tiempoLectura: "3 min"
    }
  },
  "noticia-8": {
    imagen: "/Mexico.jpg",
    es: {
      titulo: "México definió su lista oficial previo al Mundial 2026",
      subtitulo: "El cuerpo técnico presentó a los 26 elegidos con una fuerte base europea y grandes sorpresas de la Liga MX.",
      contenido: "La Selección Mexicana tiene listos a sus guerreros para la gran cita mundialista. La convocatoria destaca por consolidar a una nueva generación que brilla en el viejo continente, liderada por Santiago Giménez y Obed Vargas, además de mantener la experiencia jerárquica de Guillermo Ochoa en el arco.\n\nLista oficial de la Selección de México:\n\nPorteros: Raúl Rangel (Chivas), Carlos Acevedo (Santos) y Guillermo Ochoa (AEL Limassol/CYP).\nDefensas: Israel Reyes (América), Jorge Sánchez (PAOK/GRE), César Montes (Lokomotiv/RUS), Johan Vásquez (Genoa/ITA), Edson Álvarez (Fenerbahçe/TUR), Jesús Gallardo (Toluca) y Mateo Chávez (AZ Alkmaar/NED).\nMediocampistas: Álvaro Fidalgo (Betis/ESP), Brian Gutiérrez (Chivas), Erik Lira (Cruz Azul), Luis Romo (Chivas), Gilberto Mora (Tijuana), Luis Chávez (Dinamo Moscú/RUS), Obed Vargas (Atlético de Madrid/ESP) y Orbelín Pineda (AEK Atenas/GRE).\nDelanteros: Roberto Alvarado (Chivas), César Huerta (Anderlecht/BEL), Julián Quiñones (Al-Qadisiya/KSA), Alexis Vega (Toluca), Armando González (Chivas), Guillermo Martínez (Pumas), Santiago Gimenez (Milan/ITA) y Raúl Jiménez (Fulham/ING).",
      autor: "Corresponsal CDMX",
      tiempoLectura: "3 min"
    },
    en: {
      titulo: "Mexico finalizes its official roster ahead of the 2026 World Cup",
      subtitulo: "The coaching staff presented the 26 chosen players, featuring a strong European base and major Liga MX surprises.",
      contenido: "The Mexican National Team has its warriors ready for the big World Cup event. The call-up stands out for consolidating a new generation shining in the old continent, led by Santiago Giménez and Obed Vargas, while maintaining the leadership and experience of Guillermo Ochoa in goal.\n\nMexico National Team Official Roster:\n\nGoalkeepers: Raúl Rangel (Chivas), Carlos Acevedo (Santos), and Guillermo Ochoa (AEL Limassol/CYP).\nDefenders: Israel Reyes (América), Jorge Sánchez (PAOK/GRE), César Montes (Lokomotiv/RUS), Johan Vásquez (Genoa/ITA), Edson Álvarez (Fenerbahçe/TUR), Jesús Gallardo (Toluca), and Mateo Chávez (AZ Alkmaar/NED).\nMidfielders: Álvaro Fidalgo (Betis/ESP), Brian Gutiérrez (Chivas), Erik Lira (Cruz Azul), Luis Romo (Chivas), Gilberto Mora (Tijuana), Luis Chávez (Dinamo Moscow/RUS), Obed Vargas (Atlético de Madrid/ESP), and Orbelín Pineda (AEK Athens/GRE).\nForwards: Roberto Alvarado (Chivas), César Huerta (Anderlecht/BEL), Julián Quiñones (Al-Qadisiya/KSA), Alexis Vega (Toluca), Armando González (Chivas), Guillermo Martínez (Pumas), Santiago Gimenez (Milan/ITA), and Raúl Jiménez (Fulham/ENG).",
      autor: "CDMX Correspondent",
      tiempoLectura: "3 min"
    }
  }
};