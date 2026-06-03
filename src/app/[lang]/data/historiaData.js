// BASE DE DATOS CENTRALIZADA DE HISTORIA DE LOS MUNDIALES

export const jugadoresHistoricos = [
  {
    id: 1,
    nombre: "Lionel Messi",
    pais: "Argentina",
    nacimiento: "24 de junio de 1987",
    estado: "Edad actual: 38 años",
    imagen: "/Messi.jpg",
    infancia: {
      es: "Nacido en Rosario, jugaba desde los 4 años en el club Grandoli, impulsado por su abuela Celia (a quien le dedica todos sus goles mirando al cielo). A los 11 años le diagnosticaron una deficiencia de la hormona de crecimiento; ante la crisis económica en Argentina, el FC Barcelona apareció para pagar su costoso tratamiento médico, cambiando la historia del fútbol para siempre.",
      en: "Born in Rosario, he played from age 4 at Grandoli club, driven by his grandmother Celia (to whom he dedicates all his goals looking at the sky). At 11, he was diagnosed with a growth hormone deficiency; amid Argentina's economic crisis, FC Barcelona stepped in to pay for his medical treatment, changing football history forever."
    },
    mundiales: {
      es: "Disputó 5 mundiales (2006, 2010, 2014, 2018, 2022). Tras la dolorosa final perdida en 2014, alcanzó la gloria eterna en Qatar 2022, donde firmó una de las mayores exhibiciones individuales de la historia anotando 7 goles (dos en la final) y liderando a Argentina a su tercera estrella.",
      en: "He played in 5 World Cups (2006, 2010, 2014, 2018, 2022). After the painful final loss in 2014, he achieved eternal glory in Qatar 2022, delivering one of the greatest individual campaigns in history by scoring 7 goals (two in the final) and leading Argentina to their third star."
    },
    logros: {
      es: "Único jugador en ganar 2 Balones de Oro del Mundial (2014 y 2022), máximo goleador argentino en Mundiales (13 goles) y el futbolista con más partidos jugados en la historia del torneo (26 partidos).",
      en: "Only player to win 2 World Cup Golden Balls (2014 and 2022), Argentina's all-time top scorer in World Cups (13 goals), and the player with the most appearances in tournament history (26 matches)."
    }
  },
  {
    id: 2,
    nombre: "Diego Maradona",
    pais: "Argentina",
    nacimiento: "30 de octubre de 1960",
    estado: "Falleció a los 60 años (25 de noviembre de 2020)",
    imagen: "/Maradona.jpg",
    infancia: {
      es: "Creció en Villa Fiorito, una de las zonas más humildes de Buenos Aires, donde jugaba en un potrero llamado 'Las Siete Canchitas' con una pelota de trapo. A los 10 años entró a 'Los Cebollitas' (las inferiores de Argentinos Juniors), maravillando al país desde niño por hacer malabares con el balón durante los entretiempos de Primera División.",
      en: "Grew up in Villa Fiorito, one of Buenos Aires' poorest neighborhoods, playing on a dirt field called 'Las Siete Canchitas' with a rag ball. At 10, he joined 'Los Cebollitas' (Argentinos Juniors youth), amazing the country since childhood by juggling the ball during First Division halftime shows."
    },
    mundiales: {
      es: "Disputó 4 mundiales (1982, 1986, 1990, 1994). México 1986 fue su obra de arte, inmortalizada en los cuartos de final contra Inglaterra donde anotó 'La Mano de Dios' y, solo cuatro minutos después, el 'Gol del Siglo', eludiendo a cinco rivales en una carrera eterna.",
      en: "Played in 4 World Cups (1982, 1986, 1990, 1994). Mexico 1986 was his masterpiece, immortalized in the quarterfinals against England where he scored the 'Hand of God' and, just four minutes later, the 'Goal of the Century', bypassing five opponents in an eternal run."
    },
    logros: {
      es: "Campeón del Mundo en 1986 y Subcampeón en 1990. Balón de Oro del Mundial 1986 y considerado por la FIFA como el mejor jugador del siglo XX.",
      en: "World Cup Champion in 1986 and Runner-up in 1990. 1986 World Cup Golden Ball and recognized by FIFA as the greatest player of the 20th century."
    }
  },
  {
    id: 3,
    nombre: "Luka Modrić",
    pais: "Croacia",
    nacimiento: "9 de septiembre de 1985",
    estado: "Edad actual: 40 años",
    imagen: "/Modric.jpg",
    infancia: {
      es: "Su infancia estuvo marcada por la tragedia de la Guerra de Independencia de Croacia en 1991. Su abuelo fue ejecutado por milicianos y su familia tuvo que huir, viviendo durante años como refugiados en un hotel de Zadar. En el estacionamiento asfaltado de ese hotel, entre ruidos de granadas y alarmas de bombardeo, Luka aprendió a controlar el balón de forma milimétrica.",
      en: "His childhood was scarred by the Croatian War of Independence in 1991. His grandfather was executed by militiamen and his family had to flee, living for years as refugees in a Zadar hotel. In that hotel's asphalt parking lot, amid grenade noises and bomb alarms, Luka learned millimetric ball control."
    },
    mundiales: {
      es: "Líder absoluto de Croacia en Alemania 2006, Brasil 2014, Rusia 2018 y Qatar 2022. Llevó a una nación de apenas 4 millones de habitantes a la Final en 2018 y al tercer lugar en 2022, rompiendo los esquemas del fútbol moderno a base de talento y resistencia.",
      en: "Absolute leader of Croatia in Germany 2006, Brazil 2014, Russia 2018, and Qatar 2022. He carried a nation of just 4 million people to the Final in 2018 and third place in 2022, breaking modern football norms with pure talent and stamina."
    },
    logros: {
      es: "Balón de Oro del Mundial de Rusia 2018 y Balón de Oro de la FIFA (The Best) y Ballon d'Or el mismo año. Es el jugador croata con más partidos internacionales en la historia.",
      en: "2018 Russia World Cup Golden Ball, FIFA Best Player, and Ballon d'Or in the same year. He is the most capped player in Croatian international history."
    }
  },
  {
    id: 4,
    nombre: "Ronaldo Nazário",
    pais: "Brasil",
    nacimiento: "22 de septiembre de 1976",
    estado: "Edad actual: 49 años",
    imagen: "/RonaldoNazario.jpg",
    infancia: {
      es: "Nacido en los suburbios de Río de Janeiro, jugaba descalzo en las calles empedradas de Bento Ribeiro. Su familia no tenía dinero para pagar los pasajes de autobús para que fuera a entrenar al Flamengo, por lo que tuvo que comenzar su carrera en el modesto São Cristóvão antes de irrumpir en el Cruzeiro como un ciclón indomable.",
      en: "Born in the suburbs of Rio de Janeiro, he played barefoot on the cobblestone streets of Bento Ribeiro. His family lacked bus fare for him to train at Flamengo, so he started at modest São Cristóvão before exploding at Cruzeiro like an unstoppable storm."
    },
    mundiales: {
      es: "Convocado con solo 17 años a EE.UU. 1994 (sin jugar). Tras el misterioso colapso de salud sufrido horas antes de la final perdida en Francia 1998 y superar dos roturas de rodilla casi definitivas, regresó en Corea-Japón 2002 para firmar una redención cinematográfica anotando 8 goles, incluidos los dos de la final contra Alemania.",
      en: "Called up at just 17 to USA 1994 (did not play). Following a mysterious health collapse hours before the lost final in France 1998 and overcoming two near-career-ending knee ruptures, he returned in Korea-Japan 2002 for a cinematic redemption scoring 8 goals, including two in the final against Germany."
    },
    logros: {
      es: "Dos veces Campeón del Mundo (1994, 2002) y una vez Subcampeón (1998). Bota de Oro en 2002 y Balón de Oro del Mundial en 1998.",
      en: "Two-time World Cup Champion (1994, 2002) and one-time Runner-up (1998). 2002 Golden Shoe and 1998 World Cup Golden Ball."
    }
  },
  {
    id: 5,
    nombre: "Zinedine Zidane",
    pais: "Francia",
    nacimiento: "23 de junio de 1972",
    estado: "Edad actual: 53 años",
    imagen: "/Zidane.jpg",
    infancia: {
      es: "Hijo de inmigrantes argelinos, creció en La Castellane, un barrio complejo de Marsella marcado por el desempleo y las dificultades sociales. Allí pulió su técnica de control orientado y elegancia jugando en la plaza central de concreto del complejo residencial contra jóvenes mucho más grandes que él.",
      en: "Son of Algerian immigrants, he grew up in La Castellane, a tough Marseille neighborhood marked by unemployment and social hardships. There he polished his first-touch control and elegance playing on the concrete central plaza against much older youths."
    },
    mundiales: {
      es: "Protagonista en 1998, 2002 y 2006. En Francia 1998 anotó dos goles de cabeza en la final contra Brasil para darle a su país su primer título. En Alemania 2006 lideró una campaña magistral hasta la final, la cual terminó de forma dramática con su histórica expulsión tras el cabezazo a Materazzi.",
      en: "Protagonist in 1998, 2002, and 2006. In France 1998, he scored two headers in the final against Brazil to give his nation its first title. In Germany 2006, he led a masterful campaign to the final, which ended dramatically with his historic red card after headbutting Materazzi."
    },
    logros: {
      es: "Campeón del Mundo en 1998 y Subcampeón en 2006. Ganador del Balón de Oro del Mundial de Alemania 2006 y Miembro del Equipo de las Estrellas de la FIFA.",
      en: "World Cup Champion in 1998 and Runner-up in 2006. Winner of the 2006 Germany World Cup Golden Ball and FIFA All-Star Team member."
    }
  },
  {
    id: 6,
    nombre: "Romário",
    pais: "Brasil",
    nacimiento: "29 de enero de 1966",
    estado: "Edad actual: 60 años",
    imagen: "/Romario.jpg",
    infancia: {
      es: "Creció en Jacarezinho, una de las favelas más grandes de Río de Janeiro. Su padre, Edevair, construyó una cancha de fútbol improvisada en la comunidad para que Romário entrenara. Su baja estatura obligó a que perfeccionara un arranque corto devastador y una definición sutil en espacios mínimos que desconcertaba a los arqueros.",
      en: "Grew up in Jacarezinho, one of Rio de Janeiro's largest favelas. His father, Edevair, built an improvised football pitch in the community for Romário to train. His short stature forced him to perfect a devastating short-burst acceleration and subtle finishing in tight spaces that baffled goalkeepers."
    },
    mundiales: {
      es: "Tras una participación discreta en Italia 1990 por lesión, asumió la responsabilidad de Brasil en EE.UU. 1994. Formó una dupla histórica con Bebeto y anotó 5 goles cruciales en el torneo, devolviéndole el título mundial a Brasil tras 24 años de sequía.",
      en: "After a low-key display at Italy 1990 due to injury, he shouldered Brazil's responsibility at USA 1994. He formed an iconic partnership with Bebeto and scored 5 crucial tournament goals, returning the world title to Brazil after a 24-year drought."
    },
    logros: {
      es: "Campeón del Mundo en 1994 y ganador del Balón de Oro al Mejor Jugador de dicho torneo. Famoso por superar la barrera de los 1,000 goles en su carrera profesional.",
      en: "World Cup Champion in 1994 and recipient of the tournament's Golden Ball for Best Player. Renowned for crossing the 1,000-goal milestone across his professional career."
    }
  },
  {
    id: 7,
    nombre: "Cristiano Ronaldo",
    pais: "Portugal",
    nacimiento: "5 de febrero de 1985",
    estado: "Edad actual: 41 años",
    imagen: "/CristianoRonaldo.jpg",
    infancia: {
      es: "Nacido en Funchal, Madeira, creció en un barrio obrero en una familia con recursos muy limitados. A los 15 años, mientras jugaba en las inferiores del Sporting de Lisboa, fue diagnosticado con un problema cardíaco (corazón acelerado) que amenazó con retirarlo del fútbol; fue operado con éxito mediante láser y volvió a entrenar a los pocos días.",
      en: "Born in Funchal, Madeira, he grew up in a working-class neighborhood within a low-income family. At 15, while in Sporting Lisbon's youth ranks, he was diagnosed with a racing heart condition that threatened his football career; he underwent successful laser surgery and resumed training days later."
    },
    mundiales: {
      es: "Ha disputado 5 mundiales (2006, 2010, 2014, 2018, 2022). Su mejor participación colectiva fue el cuarto puesto en Alemania 2006. En Qatar 2022 hizo historia de longevidad al convertirse en el primer jugador de todos los tiempos en anotar al menos un gol en cinco ediciones consecutivas de la Copa del Mundo.",
      en: "He has played in 5 World Cups (2006, 2010, 2014, 2018, 2022). His best team finish was fourth place in Germany 2006. At Qatar 2022, he wrote longevity history by becoming the first player ever to score a goal in five consecutive World Cup tournaments."
    },
    logros: {
      es: "Máximo goleador histórico de selecciones nacionales y máximo anotador de Portugal en fases finales (8 goles en Mundiales). Campeón de la Eurocopa 2016.",
      en: "All-time leading goalscorer in international football and Portugal's top scorer in finals (8 World Cup goals). Euro 2016 Champion."
    }
  },
  {
    id: 8,
    nombre: "Franz Beckenbauer",
    pais: "Alemania",
    nacimiento: "11 de septiembre de 1945",
    estado: "Falleció a los 78 años (7 de enero de 2024)",
    imagen: "/Beckenbauer.jpg",
    infancia: {
      es: "Nació en las ruinas de Múnich tras la Segunda Guerra Mundial. Su padre, un trabajador postal, no quería que jugara debido a la dura situación del país. Originalmente quería jugar en el 1860 Múnich, pero tras recibir una bofetada de un rival de ese equipo en un torneo juvenil, decidió fichar por el Bayern Múnich, cambiando el destino de ese club.",
      en: "Born in the ruins of Munich after WWII. His father, a postal worker, opposed him playing due to the nation's harsh state. He originally wanted to play for 1860 Munich, but after being slapped by a player from that club in a youth game, he signed with rivals Bayern Munich instead, altering the club's destiny."
    },
    mundiales: {
      es: "Disputó 3 mundiales como jugador (1966, 1970, 1974) y 2 como DT (1986, 1990). En México 1970 protagonizó el 'Partido del Siglo' contra Italia, jugando la prórroga con el hombro dislocado. En 1974 levantó la copa como capitán en su tierra.",
      en: "Played 3 World Cups as a player (1966, 1970, 1974) and 2 as coach (1986, 1990). In Mexico 1970, he starred in the 'Game of the Century' against Italy, playing extra time with a dislocated shoulder. In 1974, he lifted the trophy as captain on home soil."
    },
    logros: {
      es: "Una de las tres únicas personas en ganar la Copa del Mundo como jugador (1974) y como director técnico (1990). Creador de la posición moderna de 'Líbero'.",
      en: "One of only three people to win the World Cup as both player (1974) and manager (1990). Creator of the modern 'Libero' (sweeper) position."
    }
  },
  {
    id: 9,
    nombre: "Johan Cruyff",
    pais: "Países Bajos",
    nacimiento: "25 de abril de 1947",
    estado: "Falleció a los 68 años (24 de marzo de 2016)",
    imagen: "/Cruyff.jpg",
    infancia: {
      es: "Creció a pocos metros del estadio del Ajax. Su padre falleció de un ataque al corazón cuando Johan tenía 12 años, trayendo problemas económicos. Su madre tuvo que trabajar como limpiadora en los vestuarios del club, y los empleados adoptaron emocionalmente al pequeño Johan, permitiéndole entrenar y ayudar a cuidar el césped.",
      en: "Grew up meters away from the Ajax stadium. His father died of a heart attack when Johan was 12, causing financial struggles. His mother worked as a cleaner in the club's dressing rooms, and Ajax staff emotionally adopted young Johan, letting him train and help tend the pitch."
    },
    mundiales: {
      es: "Solo disputó un Mundial, Alemania 1974, pero revolucionó el torneo. Lideró a la mítica 'Naranja Mecánica', un equipo que practicaba el 'Fútbol Total' donde todos defendían y atacaban. Perdió la final, pero el mundo se rindió a su estilo.",
      en: "Only played one World Cup, Germany 1974, but revolutionized the tournament. He anchored the legendary 'Clockwork Orange' squad executing 'Total Football' where everyone defended and attacked. He lost the final, but won the world over."
    },
    logros: {
      es: "Ganador del Balón de Oro al Mejor Jugador del Mundial 1974. Tres veces ganador del Balón de Oro europeo y considerado el pensador más influyente del fútbol.",
      en: "Winner of the Golden Ball for Best Player at the 1974 World Cup. Three-time European Ballon d'Or winner and considered football's most influential thinker."
    }
  },
  {
    id: 10,
    nombre: "Mario Kempes",
    pais: "Argentina",
    nacimiento: "15 de julio de 1954",
    estado: "Edad actual: 71 años",
    imagen: "/Kempes.jpg",
    infancia: {
      es: "Nacidos en Bell Ville, Córdoba, comenzó a jugar gracias a su padre. Alternaba el fútbol con sus estudios de perito mercantil. Su talento era tan evidente que cuando fue a probarse a Instituto de Córdoba, jugó bajo un nombre falso (Carlos Aguilera) para evitar que otros clubes se enteraran y se lo quitaran.",
      en: "Born in Bell Ville, Cordoba, he started playing thanks to his father. He balanced football with commercial accounting studies. His talent was so glaring that during a trial at Instituto de Cordoba, he played under a fake name (Carlos Aguilera) to prevent rival clubs from poaching him."
    },
    mundiales: {
      es: "Participó en 3 mundiales (1974, 1978, 1982). Su clímax llegó en Argentina 1978: tras una primera fase sin goles, el técnico Menotti le pidió que se afeitara el bigote para cambiar la suerte. Funcionó, anotando 6 goles desde cuartos hasta la gran final ante Países Bajos.",
      en: "Participated in 3 World Cups (1974, 1978, 1982). His peak arrived at Argentina 1978: after a goalless first round, coach Menotti asked him to shave his mustache to switch fortunes. It worked, as he hit 6 goals from the quarterfinals to the grand final against Netherlands."
    },
    logros: {
      es: "Campeón del Mundo en 1978, ganador de la Bota de Oro (máximo goleador) y elegido el Mejor Jugador de ese mismo torneo.",
      en: "World Cup Champion in 1978, Golden Shoe winner (top scorer), and voted Best Player of that same tournament."
    }
  },
  {
    id: 11,
    nombre: "Paolo Rossi",
    pais: "Italia",
    nacimiento: "23 de septiembre de 1956",
    estado: "Falleció a los 64 años (9 de diciembre de 2020)",
    imagen: "/Rossi.jpg",
    infancia: {
      es: "Nació en Prato, Toscana. Su inicio profesional fue complejo debido a tres graves lesiones de cartílago en las rodillas cuando era adolescente en la Juventus. Su fisionomía delgada y frágil obligó a los entrenadores a reconvertirlo de extremo a delantero centro, buscando su astucia en lugar de la fuerza física.",
      en: "Born in Prato, Tuscany. His professional start was tough due to three severe knee cartilage injuries as a teenager at Juventus. His thin and fragile frame forced coaches to convert him from a winger into a center-forward, relying on his cunning over physical strength."
    },
    mundiales: {
      es: "Disputó los mundiales de 1978, 1982 y 1986. Su historia en España 1982 es legendaria: venía de una suspensión de dos años por un escándalo de apuestas (del cual se declaró inocente) y explotó en la segunda fase con un Hat-Trick histórico ante Brasil, metiendo dos en semis y uno en la final.",
      en: "Played in the 1978, 1982, and 1986 World Cups. His Spain 1982 story is legendary: returning from a two-year betting scandal ban (always maintaining innocence), he exploded in the second phase with a historic hat-trick against Brazil, scoring two in semis, and one in the final."
    },
    logros: {
      es: "Campeón del Mundo en 1982, Bota de Oro del torneo (6 goles) y Balón de Oro al mejor jugador del torneo, además del Balón de Oro de Europa.",
      en: "World Cup Champion in 1982, tournament Golden Shoe (6 goals), tournament Golden Ball for best player, and European Ballon d'Or winner."
    }
  },
  {
    id: 12,
    nombre: "Garrincha",
    pais: "Brasil",
    nacimiento: "28 de octubre de 1933",
    estado: "Falleció a los 49 años (20 de enero de 1983)",
    imagen: "/Garrincha.jpg",
    infancia: {
      es: "Manuel Francisco dos Santos nació con severas condiciones médicas: columna desviada, pierna derecha seis centímetros más corta y piernas arqueadas. Los médicos dijeron que nunca caminaría bien. Su hermana lo apodó 'Garrincha' por un pájaro feo y veloz de la selva.",
      en: "Manuel Francisco dos Santos was born with severe conditions: a curved spine, a right leg six centimeters shorter than the left, and bowed legs. Doctors said he would never walk normally. His sister nicknamed him 'Garrincha' after a small, ugly, fast jungle bird."
    },
    mundiales: {
      es: "Jugó y ganó los mundiales de 1958 y 1962. En 1962, tras la lesión de Pelé, Garrincha se echó el país al hombro. Firmó la actuación individual más divertida de la historia de los mundiales a base de regates impredecibles que hacían reír al público.",
      en: "Played and won the 1958 and 1962 World Cups. In 1962, following Pelé's injury, Garrincha carried the country. He turned in the most entertaining individual display in tournament history with unpredictable dribbles that made fans laugh."
    },
    logros: {
      es: "Bicampeón del Mundo (1958, 1962). Máximo goleador y Mejor Jugador del Mundial de Chile 1962. Brasil nunca perdió un partido si jugaban juntos Pelé y Garrincha.",
      en: "Two-time World Cup Champion (1958, 1962). Top scorer and Best Player at Chile 1962. Brazil never lost a match when Pelé and Garrincha played together."
    }
  },
  {
    id: 13,
    nombre: "Bobby Charlton",
    pais: "Inglaterra",
    nacimiento: "11 de octubre de 1937",
    estado: "Falleció a los 86 años (21 de octubre de 2023)",
    imagen: "/Charlton.jpg",
    infancia: {
      es: "Nacido en una familia minera en Ashington. Su vida cambió radicalmente a los 20 años cuando sobrevivió milagrosamente al Desastre Aéreo de Múnich en 1958, donde fallecieron 8 compañeros del Manchester United. Esta tragedia marcó profundamente su carácter caballeroso y su sentido del deber.",
      en: "Born into a coal-mining family in Ashington. His life altered radically at 20 when he miraculously survived the 1958 Munich Air Disaster, which claimed 8 of his Manchester United teammates. This tragedy deeply forged his gentlemanly character and sense of duty."
    },
    mundiales: {
      es: "Estuvo en 4 mundiales (1958, 1962, 1966, 1970). En Inglaterra 1966 lideró a su selección anotando goles decisivos (incluyendo un doblete en semifinales ante Portugal) para guiar a los creadores del fútbol a su único título mundial en Wembley.",
      en: "Featured in 4 World Cups (1958, 1962, 1966, 1970). In England 1966, he spearheaded his team, scoring decisive goals (including a semifinal brace against Portugal) to guide the game's creators to their lone world title at Wembley."
    },
    logros: {
      es: "Campeón del Mundo en 1966, ganador del Balón de Oro de Europa ese mismo año y considerado unánimemente como el máximo caballero de la historia del fútbol británico.",
      en: "World Cup Champion in 1966, European Ballon d'Or winner that same year, and universally regarded as the ultimate gentleman of British football history."
    }
  },
  {
    id: 14,
    nombre: "Eusébio",
    pais: "Portugal",
    nacimiento: "25 de enero de 1942",
    estado: "Falleció a los 71 años (5 de enero de 2014)",
    imagen: "/Eusebio.jpg",
    infancia: {
      es: "Nacido en Mozambique, creció en extrema pobreza. Perdió a su padre a los 8 años. Descalzo, solía faltar a la escuela para jugar con balones hechos de calcetines viejos y periódicos, desarrollando una potencia física que le ganaría el apodo de 'La Pantera Negra'.",
      en: "Born in Mozambique, he grew up in extreme poverty. He lost his father at age 8. Barefoot, he often skipped school to play with balls made of old socks and newspapers, forging a physical power that would earn him the nickname 'The Black Panther'."
    },
    mundiales: {
      es: "Solo disputó Inglaterra 1966, pero firmó una actuación dominante. En cuartos ante Corea del Norte, Portugal perdía 3-0 y Eusébio anotó 4 goles seguidos para remontar 5-3, llevando a su país a un histórico tercer puesto.",
      en: "Only played England 1966, but recorded a dominant display. In the quarterfinals against North Korea, Portugal trailed 3-0, and Eusébio struck 4 straight goals to script a 5-3 comeback, taking his country to a historic third place."
    },
    logros: {
      es: "Máximo goleador (Bota de Oro) del Mundial de 1966 con 9 goles en 6 partidos. Ganador del Balón de Oro de Europa en 1965.",
      en: "Top scorer (Golden Shoe) of the 1966 World Cup with 9 goals in 6 matches. European Ballon d'Or winner in 1965."
    }
  },
  {
    id: 15,
    nombre: "Michel Platini",
    pais: "Francia",
    nacimiento: "21 de junio = de 1955",
    estado: "Edad actual: 70 años",
    imagen: "/Platini.jpg",
    infancia: {
      es: "Nacido en Jœuf, de abuelos inmigrantes italianos. Su padre le enseñó los fundamentos del pase preciso. Michel tenía capacidad pulmonar limitada en su adolescencia; fue rechazado en una prueba inicial tras desmayarse en un examen respiratorio, obligándose a perfeccionar su inteligencia táctica.",
      en: "Born in Jœuf, to Italian immigrant grandparents. His father taught him precision passing baselines. Michel had limited lung capacity in his teens; he was rejected in an initial trial after fainting during a breathing exam, forcing him to refine his tactical brains."
    },
    mundiales: {
      es: "Disputó 3 mundiales (1978, 1982, 1986). Lideró al místico mediocampo francés. Protagonizó la dramática semifinal de España 1982 contra Alemania, y llevó a Francia al tercer lugar en México 1986 eliminando a la Brasil de Zico.",
      en: "Played 3 World Cups (1978, 1982, 1986). He pulled the strings in France's mystical midfield. He starred in the dramatic Spain 1982 semifinal against Germany and led France to third place at Mexico 1986, eliminating Zico's Brazil."
    },
    logros: {
      es: "Dos veces semifinalista de la Copa del Mundo (1982, 1986). Único mediocampista en ganar 3 Balones de Oro europeos consecutivos (1983-1985) y campeón de la Eurocopa 1984.",
      en: "Two-time World Cup semifinalist (1982, 1986). Only midfielder to secure 3 consecutive European Ballon d'Or awards (1983-1985) and Euro 1984 Champion."
    }
  },
  {
    id: 16,
    nombre: "Ferenc Puskás",
    pais: "Hungría / España",
    nacimiento: "1 de abril de 1927",
    estado: "Falleció a los 79 años (17 de noviembre de 2006)",
    imagen: "/Puskas.jpg",
    infancia: {
      es: "Nació en Budapest y creció junto a la cancha del Kispest. Debido a la Segunda Guerra Mundial y la posterior dictadura, su juventud estuvo rodeada de estrictos regímenes militares que lo obligaron a tener rango de Mayor en el ejército (de ahí su apodo 'El Comandante Galopante').",
      en: "Born in Budapest and grew up next to the Kispest pitch. Due to WWII and the subsequent dictatorship, his youth was surrounded by strict military regimes that earned him a Major rank in the army (hence his nickname 'The Galloping Major')."
    },
    mundiales: {
      es: "Disputó el Mundial de Suiza 1954 con la revolucionaria Hungría. Anotó en la final contra Alemania pese a jugar fracturado, perdiendo 3-2 ('Milagro de Berna'). Años más tarde, se exilió y disputó con España el Mundial de Chile 1962.",
      en: "Contested the 1954 Switzerland World Cup with revolutionary Hungary. He scored in the final against Germany despite playing fractured, losing 3-2 ('Miracle of Berns'). Years later, he exiled and represented Spain at the Chile 1962 World Cup."
    },
    logros: {
      es: "Subcampeón del Mundo y Balón de Oro al Mejor Jugador del Mundial 1954. Su nombre titula el premio de la FIFA al mejor gol del año.",
      en: "World Cup Runner-up and Golden Ball for Best Player at the 1954 World Cup. His name headlines the FIFA award for the year's best goal."
    }
  },
  {
    id: 17,
    nombre: "Just Fontaine",
    pais: "Francia",
    nacimiento: "18 de agosto de 1933",
    estado: "Falleció a los 89 años (1 de marzo de 2023)",
    imagen: "/Fontaine.jpg",
    infancia: {
      es: "Nacido en Marrakech, Marruecos, de padre francés y madre española. Su físico era propenso a las lesiones óseas, teniendo que retirarse prematuramente a los 28 años tras sufrir dos fracturas consecutivas de pierna.",
      en: "Born in Marrakech, Morocco, to a French father and Spanish mother. His physique was highly prone to bone injuries, forcing a premature retirement at age 28 after suffering two back-to-back leg fractures."
    },
    mundiales: {
      es: "Disputó un único Mundial, Suecia 1958. No iba a ser titular, pero la lesión de un compañero le abrió el puesto. Jugó el torneo con botas prestadas por un suplente porque las suyas se rompieron, logrando la mayor racha goleadora vista.",
      en: "Contested a single World Cup, Sweden 1958. He wasn't meant to start, but a teammate's injury opened the spot. He played the tournament using boots borrowed from a substitute because his broke, setting the highest scoring streak ever seen."
    },
    logros: {
      es: "Posee el récord absoluto e imbatible de más goles anotados en un solo Mundial, con 13 goles en la edición de 1958.",
      en: "Holds the absolute and unbreakable record for the most goals scored in a single World Cup, with 13 goals in the 1958 edition."
    }
  },
  {
    id: 18,
    nombre: "Lev Yashin",
    pais: "Unión Soviética",
    nacimiento: "22 de octubre de 1929",
    estado: "Falleció a los 60 años (20 de marzo de 1990)",
    imagen: "/Yashin.jpg",
    infancia: {
      es: "Nacido en Moscú. Durante la Segunda Guerra Mundial, con solo 12 años, trabajó en una fábrica de herramientas militares. Para lidiar con el estrés de las bombas, empezó a jugar como arquero en el equipo de la fábrica. Vestido de negro y con reflejos sobrehumanos, se ganó el apodo de 'La Araña Negra'.",
      en: "Born in Moscow. During WWII, at just 12, he worked in a military tools factory. To handle bomb stress, he started playing as goalkeeper for the factory team. Clad in black with superhuman reflexes, he earned the nickname 'The Black Spider'."
    },
    mundiales: {
      es: "Disputó 4 mundiales (1958-1970). Revolucionó la posición: inventó el salir a cortar centros, interceptar pases fuera del área y ordenar a gritos a sus defensores, rompiendo el molde clásico de quedarse inmóvil bajo el arco.",
      en: "Played 4 World Cups (1958-1970). He revolutionized the role: inventing coming off the line to clear crosses, intercepting passes outside the box, and shouting orders at defenders, breaking the classic mold of staying static under the bar."
    },
    logros: {
      es: "Cuarto lugar en el Mundial de Inglaterra 1966. Es el único arquero en toda la historia en ganar el Balón de Oro de Europa (1963). Atajó más de 150 penales.",
      en: "Fourth place at the 1966 England World Cup. He is the only goalkeeper in history to win the European Ballon d'Or (1963). He saved over 150 penalties."
    }
  },
  {
    id: 19,
    nombre: "Giuseppe Meazza",
    pais: "Italia",
    nacimiento: "23 de agosto de 1910",
    estado: "Falleció a los 68 años (21 de agosto de 1979)",
    imagen: "/Meazza.jpg",
    infancia: {
      es: "Nacido en Milán, perdió a su padre en la Primera Guerra Mundial. Jugaba descalzo con pelotas de trapos viejos porque su madre le escondía los zapatos para que no los rompiera. El Milan lo rechazó por flaco, pero el Inter lo descubrió en la calle y lo fichó.",
      en: "Born in Milan, he lost his father in WWI. He played barefoot with old rag balls because his mother hid his shoes to prevent him from tearing them. Milan rejected him for being skinny, but Inter discovered him on the street and signed him."
    },
    mundiales: {
      es: "Líder de Italia en los títulos de 1934 y 1938. En la semifinal de 1938 contra Brasil, anotó el gol de la victoria de penal mientras se sostenía los pantalones con la mano porque se le había roto el elástico segundos antes.",
      en: "Leader of Italy in the 1934 and 1938 titles. In the 1938 semifinal against Brazil, he scored the match-winning penalty while holding his shorts up with his hand because the elastic snapped seconds earlier."
    },
    logros: {
      es: "Primer bicampeón del mundo de la historia (1934, 1938) y Balón de Oro de 1934. El mítico estadio de San Siro lleva su nombre en su honor.",
      en: "First two-time world champion in history (1934, 1938) and 1934 Golden Ball. The mythical San Siro stadium officially bears his name in his honor."
    }
  }
];