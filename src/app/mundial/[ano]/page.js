'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MundialPage({ params }) {
  // Nota: Dependiendo de tu configuración de enrutamiento en Next.js (App Router),
  // podrías desestructurar 'params' aquí. Por ejemplo: const { anoMundial } = params;
  // O usar valores simulados para pruebas locales. Ajusta estas dos variables según tu arquitectura:
  const anoMundial = params?.anoMundial || "2022"; 
  const idioma = "es"; // Puede alternarse dinámicamente entre 'es' y 'en'

  // Estados globales de la UI
  const [indexModal, setIndexModal] = useState(null);

  // BASE DE DATOS HISTÓRICA (Mundiales 2002 - 2022)
  const datosMundiales = {
    "2002": { 
      es: {
        anfitrion: "Corea del Sur / Japón", campeon: "Brasil", subcampeon: "Alemania", 
        goles: "161", partidos: "64", botaOro: "Ronaldo (8 goles)", 
        equipos: "32 selecciones", balonOro: "Oliver Kahn (Alemania)",
        desc: "La histórica primera Copa del Mundo en suelo asiático y coorganizada por dos naciones. Corea-Japón 2002 estuvo plagada de sorpresas mayúsculas desde el silbatazo inicial, incluyendo la eliminación prematura de potencias como Francia y Argentina, y el polémico avance del anfitrión surcoreano hasta semifinales. El torneo significó la redención absoluta del astro brasileño Ronaldo. La gran final en Yokohama enfrentó a los dos máximos colosos de la historia, donde Brasil derrotó 2-0 a Alemania para coronar su ansiado e invicto 'Pentacampeonato'.", 
        curiosidades: [
          "El guardameta alemán Oliver Kahn hizo historia al convertirse en el primer y único portero en ganar el premio al Balón de Oro como mejor jugador del torneo.",
          "El delantero turco Hakan Şükür anotó el gol más rápido en la historia de los mundiales, batiendo la portería de Corea del Sur a los 11 segundos de haber iniciado el partido.",
          "La selección de Francia firmó la peor campaña defensiva de un campeón vigente al quedar eliminada en fase de grupos sin poder anotar un solo gol.",
          "El brasileño Cafú se transformó en el único futbolista de la historia en disputar tres finales de la Copa del Mundo consecutivas (1994, 1998 y 2002).",
          "El defensor de la República de Irlanda, Roy Keane, fue expulsado de la concentración por su propio director técnico antes del torneo tras insultarlo públicamente.",
          "Ronaldo lució un extravagante corte de pelo rapado dejando solo un semicírculo en la frente, confesando años después que lo hizo para desviar la atención de los medios sobre sus lesiones."
        ]
      },
      en: {
        anfitrion: "South Korea / Japan", campeon: "Brazil", subcampeon: "Germany", 
        goles: "161", partidos: "64", botaOro: "Ronaldo (8 goals)", 
        equipos: "32 teams", balonOro: "Oliver Kahn (Germany)",
        desc: "The historic first World Cup held on Asian soil and jointly co-hosted by two nations. South Korea/Japan 2002 was filled with massive upsets from the opening whistle, including the premature exits of powerhouses France and Argentina, and South Korea's stunning run to the semifinals amidst refereeing controversies. The tournament signified the absolute redemption of Brazilian star Ronaldo. The grand final in Yokohama pitted the two biggest historical giants against each other, where Brazil defeated Germany 2-0 to secure their coveted undefeated 'Pentacampeonato.'", 
        curiosidades: [
          "German shot-stopper Oliver Kahn made history by becoming the first and only goalkeeper to win the tournament's Golden Ball award as the best player.",
          "Turkish striker Hakan Şükür scored the fastest goal in World Cup history, hitting the back of South Korea's net just 11 seconds after kickoff.",
          "Reigning champions France suffered the worst title defense in history by being eliminated in the group stage without scoring a single goal.",
          "Brazil's Cafu became the only footballer in history to play in three consecutive World Cup final matches (1994, 1998, and 2002).",
          "Republic of Ireland defender Roy Keane was sent home from the training camp before the tournament started after a infamous public fallout with his manager.",
          "Ronaldo sported an extravagant haircut, shaving his head except for a tuft at the front, later confessing he did it to distract media attention away from his fitness issues."
        ]
      },
      img: "/Mundial_02_5.jpg",
      galeria: ["/Mundial_02.jpg", "/Mundial_02_1.jpg", "/Mundial_02_2.jpg", "/Mundial_02_3.jpg", "/Mundial_02_4.jpg", "/Mundial_02_5.jpg", "/Mundial_02_6.jpg", "/Mundial_02_7.jpg"]
    },
    "2006": { 
      es: {
        anfitrion: "Alemania", campeon: "Italia", subcampeon: "Francia", 
        goles: "147", partidos: "52", botaOro: "Miroslav Klose (5 goles)", 
        equipos: "32 selecciones", balonOro: "Zinedine Zidane (Francia)",
        desc: "Una edición de altísima calidad técnica que escenificó el cambio de guardia del fútbol mundial. Alemania 2006 deleitó por sus estadios modernos y una organización impecable bajo el lema 'El mundo entre amigos'. El torneo albergó partidos de enorme intensidad dramática y despidió de las canchas a leyendas como Zinedine Zidane. La final en Berlín entre Italia y Francia se convirtió en un clásico instantáneo; tras empatar 1-1 en el tiempo reglamentario, la 'Azzurra' mostró una efectividad perfecta en la tanda de penaltis (5-3) para bordar su cuarta estrella mundial.", 
        curiosidades: [
          "La final quedó marcada por la expulsión de Zinedine Zidane en la prórroga, tras propinarle un fuerte cabezazo en el pecho al defensor italiano Marco Materazzi.",
          "El árbitro ruso Valentin Ivanov estableció un récord mundialista en el partido Portugal-Países Bajos, apodado 'La Batalla de Núremberg', al mostrar 16 tarjetas amarillas y 4 rojas.",
          "El guardameta portugués Ricardo Pereira se convirtió en el primero en detener tres lanzamientos en una sola tanda de penaltis mundialista contra Inglaterra.",
          "El árbitro inglés Graham Poll cometió un error histórico al mostrarle tres tarjetas amarillas al jugador croata Josip Šimunić antes de expulsarlo formalmente del partido.",
          "La selección de Suiza fue eliminada en octavos de final estableciendo una marca inédita: se marchó del torneo invicta y sin haber recibido un solo gol en contra.",
          "El delantero brasileño Ronaldo anotó ante Ghana su decimoquinto gol en mundiales, superando temporalmente a Gerd Müller como el máximo artillero histórico."
        ]
      },
      en: {
        anfitrion: "Germany", campeon: "Italy", subcampeon: "France", 
        goles: "147", partidos: "52", botaOro: "Miroslav Klose (5 goals)", 
        equipos: "32 teams", balonOro: "Zinedine Zidane (France)",
        desc: "An edition of supreme technical quality that staged the changing of the guard in world football. Germany 2006 delighted with its modern stadiums and impeccable organization under the motto 'A time to make friends.' The tournament hosted matches of immense dramatic intensity and saw the international farewell of legends like Zinedine Zidane. The final in Berlin between Italy and France became an instant classic; after a 1-1 draw in regulation, the 'Azzurra' executed a perfect penalty shootout (5-3) to claim their fourth world title.", 
        curiosidades: [
          "The final was indelibly marked by Zinedine Zidane's extra-time red card, shown after he delivered a violent headbutt to the chest of Italian defender Marco Materazzi.",
          "Russian referee Valentin Ivanov set a World Cup record during the Portugal-Netherlands match, dubbed 'The Battle of Nuremberg,' by showing 16 yellow cards and 4 red cards.",
          "Portuguese goalkeeper Ricardo Pereira became the first-ever keeper to save three spot-kicks in a single World Cup penalty shootout, denying England.",
          "English referee Graham Poll committed a historic blunder by showing Croatian player Josip Šimunić three yellow cards before finally sending him off.",
          "The Switzerland national team was eliminated in the round of 16 while setting an unprecedented record: leaving the tournament undefeated and without conceding a single goal.",
          "Brazilian forward Ronaldo scored his 15th World Cup goal against Ghana, temporarily surpassing Gerd Müller as the tournament's all-time top goalscorer."
        ]
      },
      img: "/Mundial_06.jpg",
      galeria: ["/Mundial_06.jpg", "/Mundial_06_1.jpg", "/Mundial_06_2.jpg", "/Mundial_06_3.jpg", "/Mundial_06_4.jpg", "/Mundial_06_5.jpg", "/Mundial_06_6.jpg", "/Mundial_06_7.jpg"]
    },
    "2010": { 
      es: {
        anfitrion: "Sudáfrica", campeon: "España", subcampeon: "Países Bajos", 
        goles: "145", partidos: "64", botaOro: "Thomas Müller (5 goles)", 
        equipos: "32 selecciones", balonOro: "Diego Forlán (Uruguay)",
        desc: "La histórica primera Copa del Mundo en el continente africano, caracterizada por el sonido ensordecedor de las vuvuzelas y un colorido cultural único. Sudáfrica 2010 presenció la caída temprana de los finalistas previos y el vistoso despliegue del fútbol de posesión de la selección española, conocido como 'Tiki-Taka'. Tras superar batallas tácticas muy cerradas, la final en Johannesburgo enfrentó a España y los Países Bajos en un partido sumamente tenso y físico. Un gol agónico de Andrés Iniesta en el minuto 116 de la prórroga selló el 1-0 que le dio a España el primer título mundial de su historia.", 
        curiosidades: [
          "España hizo historia al convertirse en la primera selección en coronarse campeona del mundo tras haber perdido su primer partido de la fase de grupos (1-0 contra Suiza).",
          "El torneo popularizó globalmente al Pulpo Paul, un molusco acuarista en Alemania que predijo correctamente los resultados de ocho partidos, incluyendo la final.",
          "Los finalistas de la edición anterior, Italia y Francia, causaron una gran sorpresa al finalizar en los últimos lugares de sus respectivos grupos en la primera ronda.",
          "Los hermanos Jérôme Boateng (Alemania) y Kevin-Prince Boateng (Ghana) hicieron historia al enfrentarse en la fase de grupos defendiendo a países distintos.",
          "El balón oficial de Adidas, el Jabulani, recibió severas críticas por parte de los guardametas debido a su trayectoria inestable y movimientos impredecibles en el aire.",
          "La cantante colombiana Shakira interpretó el tema oficial 'Waka Waka (This Time for Africa)', convirtiéndose en un fenómeno musical global masivo."
        ]
      },
      en: {
        anfitrion: "South Africa", campeon: "Spain", subcampeon: "Netherlands", 
        goles: "145", partidos: "64", botaOro: "Thomas Müller (5 goals)", 
        equipos: "32 teams", balonOro: "Diego Forlán (Uruguay)",
        desc: "The historic first World Cup on the African continent, characterized by the deafening buzz of vuvuzelas and a unique cultural vibrancy. South Africa 2010 witnessed the early collapse of previous finalists and the beautiful display of Spain's possession-based style, known as 'Tiki-Taka.' After overcoming tightly contested tactical battles, the final in Johannesburg pitted Spain against the Netherlands in a highly tense and physical match. A dramatic 116th-minute extra-time winner by Andrés Iniesta sealed the 1-0 victory, handing Spain their first-ever World Cup title.", 
        curiosidades: [
          "Spain made history by becoming the first national team to win the World Cup after losing their opening match of the group stage (1-0 against Switzerland).",
          "The tournament popularized Paul the Octopus, an aquarium mollusk in Germany who achieved global fame by correctly predicting the outcome of eight matches, including the final.",
          "The finalists of the previous tournament, Italy and France, caused a massive shock by finishing dead last in their respective groups during the opening round.",
          "Brothers Jérôme Boateng (Germany) and Kevin-Prince Boateng (Ghana) made history by facing each other in the group stage representing different nations.",
          "The official Adidas match ball, the Jabulani, faced severe backlash from goalkeepers due to its erratic flight path and unpredictable aerodynamic behavior.",
          "Colombian pop star Shakira performed the official theme song 'Waka Waka (This Time for Africa),' which became a massive global musical phenomenon."
        ]
      },
      img: "/Mundial_10.jpg",
      galeria: ["/Mundial_10.jpg", "/Mundial_10_1.jpg", "/Mundial_10_2.jpg", "/Mundial_10_3.jpg", "/Mundial_10_4.jpg", "/Mundial_10_5.jpg", "/Mundial_10_6.jpg", "/Mundial_10_7.jpg"]
    },
    "2014": { 
      es: {
        anfitrion: "Brasil", campeon: "Alemania", subcampeon: "Argentina", 
        goles: "171", partidos: "64", botaOro: "James Rodríguez (6 goles)", 
        equipos: "32 selecciones", balonOro: "Lionel Messi (Argentina)",
        desc: "El regreso de la Copa al gigante sudamericano deparó un torneo vibrante, repleto de goles y capítulos que alteraron la historia del fútbol. Brasil 2014 combinó la calidez de su afición con la irrupción de tecnologías arbitrales revolucionarias. Las semifinales escenificaron el pánico 'Mineirazo', donde Alemania trituró al anfitrión con un histórico 7-1. La gran final se disputó en el mítico Estadio Maracaná ante la Argentina de Lionel Messi; un solitario y estético gol de Mario Götze en la prórroga le otorgó a Alemania la victoria 1-0, siendo el primer equipo europeo en coronarse en suelo americano.", 
        curiosidades: [
          "Fue el primer mundial de la historia que implementó el uso de la tecnología de la línea de gol para evitar goles fantasma y el spray evanescente para las barreras.",
          "El delantero alemán Miroslav Klose anotó ante Brasil su decimosexto gol en fases finales, superando definitivamente a Ronaldo como el máximo goleador histórico del certamen.",
          "Costa Rica protagonizó la campaña más gloriosa de su historia al liderar el 'Grupo de la Muerte' ante tres campeones mundiales y alcanzar los cuartos de final invicta.",
          "El guardameta estadounidense Tim Howard estableció un récord absoluto en mundiales al realizar 16 paradas espectaculares en el partido de octavos contra Bélgica.",
          "El delantero uruguayo Luis Suárez recibió una sanción histórica por parte de la FIFA tras morder en el hombro al defensor italiano Giorgio Chiellini en fase de grupos.",
          "La humillante derrota de Brasil ante Alemania por 7-1 rompió récords como la mayor goleada encajada por un país anfitrión y la peor caída de la 'Seleção' en su historia."
        ]
      },
      en: {
        anfitrion: "Brazil", campeon: "Germany", subcampeon: "Argentina", 
        goles: "171", partidos: "64", botaOro: "James Rodríguez (6 goals)", 
        equipos: "32 teams", balonOro: "Lionel Messi (Argentina)",
        desc: "The return of the Cup to the South American giant delivered a vibrant tournament filled with goals and chapters that altered football history. Brazil 2014 combined the warmth of its fans with the introduction of revolutionary refereeing technologies. The semifinals staged the shocking 'Mineirazo,' where Germany dismantled the hosts with a historic 7-1 victory. The grand final took place at the mythical Maracanã Stadium against Lionel Messi's Argentina; a solitary, clinical extra-time goal by Mario Götze sealed the 1-0 win, making Germany the first European nation to win the title on American soil.", 
        curiosidades: [
          "It was the first World Cup in history to deploy Goal-Line Technology to prevent ghost goals and vanishing spray to regulate defensive walls.",
          "German striker Miroslav Klose scored against Brazil to net his 16th tournament goal, officially clean past Ronaldo as the World Cup's all-time top scorer.",
          "Costa Rica produced the most glorious run in their history, topping the 'Group of Death' ahead of three former world champions and reaching the quarterfinals undefeated.",
          "United States goalkeeper Tim Howard established an all-time World Cup record by making 16 spectacular saves in a single match against Belgium.",
          "Uruguayan striker Luis Suárez received a historic retrospective ban from FIFA after biting the shoulder of Italian defender Giorgio Chiellini during the group stage.",
          "Brazil's humiliating 7-1 defeat against Germany broke records as the heaviest loss ever suffered by a host nation and the worst defeat in 'Seleção' history."
        ]
      },
      img: "/Mundial_14.jpg",
      galeria: ["/Mundial_14.jpg", "/Mundial_14_1.jpg", "/Mundial_14_2.jpg", "/Mundial_14_3.jpg", "/Mundial_14_4.jpg", "/Mundial_14_5.jpg", "/Mundial_14_6.jpg", "/Mundial_14_7.jpg"]
    },
    "2018": { 
      es: {
        anfitrion: "Rusia", campeon: "Francia", subcampeon: "Croacia", 
        goles: "169", partidos: "64", botaOro: "Harry Kane (6 goles)", 
        equipos: "32 selecciones", balonOro: "Luka Modrić (Croacia)",
        desc: "La Copa de la revolución tecnológica y la consagración de la verticalidad francesa. Rusia 2018 marcó un antes y un después en el arbitraje con la introducción oficial del VAR, modificando la dinámica del juego y elevando la cantidad de penaltis concedidos. El certamen vio la heroica travesía de Croacia, que encadenó prórrogas extenuantes guiada por un excelso Luka Modrić. La final en el Estadio Luzhnikí de Moscú ofreció un espectáculo ofensivo inusual; la pegada letal, velocidad y solidez de Francia terminaron imponiéndose 4-2 para otorgar a 'Les Bleus' su segunda estrella mundial.", 
        curiosidades: [
          "Fue el primer mundial de fútbol de la historia en implementar oficialmente el sistema de videoarbitraje (VAR), revisando jugadas decisivas en tiempo real.",
          "El guardameta egipcio Essam El-Hadary rompió un récord histórico de longevidad al disputar el torneo y atajar un penalti a la edad de 45 años y 161 días.",
          "El defensor francés Benjamin Pavard ganó el premio al mejor gol del torneo tras conectar una icónica e inolvidable volea con efecto frente a Argentina.",
          "Alemania continuó con la llamada 'maldición de los campeones del siglo XXI' al quedar eliminada en la fase inicial tras caer estrepitosamente ante Corea del Sur.",
          "Por primera vez en las normativas del Fair Play, Japón avanzó a octavos de final sobre Senegal gracias a tener menos tarjetas amarillas acumuladas.",
          "El técnico francés Didier Deschamps se unió al selecto club de Mário Zagallo y Franz Beckenbauer al coronarse campeón del mundo como jugador (1998) y como entrenador."
        ]
      },
      en: {
        anfitrion: "Russia", campeon: "France", subcampeon: "Croatia", 
        goles: "169", partidos: "64", botaOro: "Harry Kane (6 goals)", 
        equipos: "32 teams", balonOro: "Luka Modrić (Croacia)",
        desc: "The Cup of technological revolution and the coronation of French clinical verticality. Russia 2018 marked a turning point in refereeing with the official introduction of VAR, altering match dynamics and increasing the volume of penalties awarded. The competition saw Croatia's heroic journey, fighting through grueling consecutive extra-time matches guided by an sublime Luka Modrić. The final at Moscow's Luzhniki Stadium produced an unusual attacking spectacle, where France's lethal pace and defensive structure ultimately prevailed 4-2 to claim their second world title.", 
        curiosidades: [
          "It was the first football World Cup in history to officially implement the Video Assistant Referee (VAR) system, reviewing game-changing plays in real time.",
          "Egyptian goalkeeper Essam El-Hadary shattered the tournament's longevity record by featuring and saving a penalty at the age of 45 years and 161 days old.",
          "French defender Benjamin Pavard captured the Goal of the Tournament award after striking an iconic, unforgettable slicing volley against Argentina.",
          "Germany extended the 21st-century 'champions' curse' by crashing out in the opening group stage following a stunning defeat against South Korea.",
          "For the first time using Fair Play criteria, Japan advanced to the round of 16 over Senegal due to having accumulated fewer yellow cards.",
          "French manager Didier Deschamps joined the elite club of Mário Zagallo and Franz Beckenbauer by winning the World Cup as both a player (1998) and a coach."
        ]
      },
      img: "/Mundial_18.jpg",
      galeria: ["/Mundial_18.jpg", "/Mundial_18_1.jpg", "/Mundial_18_2.jpg", "/Mundial_18_3.jpg", "/Mundial_18_4.jpg", "/Mundial_18_5.jpg", "/Mundial_18_6.jpg", "/Mundial_18_7.jpg"]
    },
    "2022": { 
      es: {
        anfitrion: "Catar", campeon: "Argentina", subcampeon: "Francia", 
        goles: "172", partidos: "64", botaOro: "Kylian Mbappé (8 goles)", 
        equipos: "32 selecciones", balonOro: "Lionel Messi (Argentina)",
        desc: "La primera edición celebrada en el mundo árabe ofreció infraestructuras de última generación y una cercanía geográfica sin precedentes. El torneo culminó en el Estadio de Lusail con la que críticos y aficionados consideran la mejor final de todos los tiempos. Un duelo titánico, dramático y de antología entre Lionel Messi y Kylian Mbappé que se definió en una tanda de penaltis cardíaca, coronando la carrera de Messi y bordando la tercera estrella albiceleste.", 
        curiosidades: [
          "Fue la Copa del Mundo con mayor cantidad de goles anotados en la historia, registrando un total de 172 anotaciones.",
          "Stephanie Frappart hizo historia al convertirse en la primera mujer en arbitrar un partido en un Mundial masculino.",
          "Fue el primer mundial disputado en los meses de invierno para evitar temperaturas extremas en el desierto.",
          "Marruecos rompió paradigmas continentales al ser la primera selección africana en alcanzar las semifinales.",
          "Lionel Messi se transformó en el jugador con más partidos disputados en la historia del certamen (26 encuentros).",
          "El balón oficial incorporó sensores de alta tecnología en su interior para determinar fueras de juego milimétricos."
        ]
      },
      en: {
        anfitrion: "Qatar", campeon: "Argentina", subcampeon: "France", 
        goles: "172", partidos: "64", botaOro: "Kylian Mbappé (8 goals)", 
        equipos: "32 teams", balonOro: "Lionel Messi (Argentina)",
        desc: "The first edition held in the Arab world offered state-of-the-art infrastructures and unprecedented geographical proximity. The tournament culminated at the Lusail Stadium with what critics and fans consider the best final of all time. A titanic, dramatic and anthological duel between Lionel Messi and Kylian Mbappé that was defined in a cardiac penalty shootout, crowning Messi's career and embroidering the third albiceleste star.", 
        curiosidades: [
          "It was the World Cup with the highest number of goals scored in history, registering a total of 172 goals.",
          "Stephanie Frappart made history by becoming the first woman to referee a match in a men's World Cup.",
          "It was the first World Cup played in the winter months to avoid extreme temperatures in the desert.",
          "Morocco broke continental paradigms by being the first African team to reach the semifinals.",
          "Lionel Messi became the player with the most matches played in the history of the tournament (26 games).",
          "The official ball incorporated high-tech sensors inside to determine millimetric offsides."
        ]
      },
      img: "/Mundial_22.jpg",
      galeria: ["/Mundial_22.jpg", "/Mundial_22_1.jpg", "/Mundial_22_2.jpg", "/Mundial_22_3.jpg", "/Mundial_22_4.jpg", "/Mundial_22_5.jpg", "/Mundial_22_6.jpg", "/Mundial_22_7.jpg"]
    }
  };

  // DICCIONARIO DE TRADUCCIONES DE LA INTERFAZ
  const textosInterface = {
    es: {
      tituloFicha: "Estadísticas del Torneo", tituloCronica: "Resumen de la Edición",
      tituloCuriosidades: "Historias y Datos Curiosos", tituloGaleria: "Galería Multimedia",
      volver: "Volver al inicio", ampliar: "Ampliar Imagen 🔍", errorTitulo: "Mundial no encontrado",
      errorDesc: "El año solicitado no se encuentra registrado en la enciclopedia.", errorBtn: "← Regresar al Inicio",
      sede: "Sede Oficial", campeon: "Campeón", subcampeon: "Subcampeón", equipos: "Equipos Participantes",
      balon: "Balón de Oro", bota: "Bota de Oro", goles: "Goles Totales", partidos: "Partidos Jugados"
    },
    en: {
      tituloFicha: "Tournament Statistics", tituloCronica: "Summary of the Edition",
      tituloCuriosidades: "Stories and Trivia", tituloGaleria: "Multimedia Gallery",
      volver: "Back to home", ampliar: "Enlarge Image 🔍", errorTitulo: "World Cup not found",
      errorDesc: "The requested year is not registered in the encyclopedia.", errorBtn: "← Back to Home",
      sede: "Official Host", campeon: "Champion", subcampeon: "Runner-up", equipos: "Participating Teams",
      balon: "Golden Ball", bota: "Golden Boot", goles: "Total Goals", partidos: "Matches Played"
    }
  };

  const t = textosInterface[idioma] || textosInterface["es"];
  const mundialSeleccionado = datosMundiales[anoMundial];

  // Estructura Fallback para mundiales que aún no tengan datos definidos
  const mundial = mundialSeleccionado ? mundialSeleccionado[idioma] : {
    anfitrion: idioma === "es" ? "País Sede" : "Host Country",
    campeon: idioma === "es" ? "Por definir" : "TBD",
    subcampeon: idioma === "es" ? "Por definir" : "TBD",
    goles: "--", partidos: "--", 
    botaOro: idioma === "es" ? "Por registrar" : "To register", 
    equipos: idioma === "es" ? "Por registrar" : "To register", 
    balonOro: idioma === "es" ? "Por registrar" : "To register",
    desc: idioma === "es" ? "Información detallada en proceso de carga." : "Detailed information currently loading.",
    curiosidades: Array(6).fill(idioma === "es" ? "Dato histórico en proceso de redacción." : "Historical data in drafting process.")
  };

  const galeriaUrls = mundialSeleccionado ? mundialSeleccionado.galeria : Array(8).fill("/Mundial1930.jpeg");
  const imgPoster = mundialSeleccionado ? mundialSeleccionado.img : "/Mundial1930.jpeg";

  // EFFECT: Manejo global del teclado para cerrar modal con 'Escape'
  useEffect(() => {
    const manejarTeclado = (event) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        setIndexModal(null);
      }
    };
    if (indexModal !== null) {
      window.addEventListener('keydown', manejarTeclado);
    }
    return () => {
      window.removeEventListener('keydown', manejarTeclado);
    };
  }, [indexModal]);

  // FUNCIONES DE NAVEGACIÓN DEL LIGHTBOX
  const cambiarImagenAnterior = () => {
    if (indexModal > 0) {
      setIndexModal((prevIndex) => prevIndex - 1);
    }
  };

  const cambiarImagenSiguiente = () => {
    if (indexModal < galeriaUrls.length - 1) {
      setIndexModal((prevIndex) => prevIndex + 1);
    }
  };

  // CONTROL DE ERROR: Años fuera de rango histórico lógico
  if (!mundialSeleccionado && (parseInt(anoMundial) < 1930 || parseInt(anoMundial) > 2026)) {
    return (
      <div style={errorContainerStyle}>
        <h2>{t.errorTitulo}</h2>
        <p>{t.errorDesc}</p>
        <Link href="/" style={btnVolverStyle}>{t.errorBtn}</Link>
      </div>
    );
  }

  // RETORNO DE LA INTERFAZ DE USUARIO (JSX)
  return (
    <main style={mainContainerStyle}>
      <Link href="/" style={backLinkFlotanteStyle} className="btn-flotante">
        <span style={flechaIconStyle}>←</span> {t.volver}
      </Link>

      <div style={wrapperStyle}>
        
        <div style={headerContainerStyle}>
          <h1 style={titleStyle}>
            {idioma === 'es' ? 'Copa Mundial de la FIFA' : 'FIFA World Cup'} {anoMundial}
          </h1>
          <p style={subtitleStyle}>📍 {t.sede}: <span style={sedeHighlightStyle}>{mundial.anfitrion}</span></p>
        </div>

        {/* BLOQUE SUPERIOR: Póster y Tarjeta Estadísticas */}
        <div style={topGridStyle}>
          <div style={imageWrapperStyle}>
            <Image 
              src={imgPoster} 
              alt={`Póster Oficial ${anoMundial}`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div style={statsCardStyle}>
            <h2 style={statsTitleStyle}>{t.tituloFicha}</h2>
            <div style={dividerStyle}></div>
            
            <div style={statRowStyle}><span style={statLabelStyle}>🏆 {t.campeon}</span><span style={campeonStyle}>{mundial.campeon}</span></div>
            <div style={statRowStyle}><span style={statLabelStyle}>🥈 {t.subcampeon}</span><span style={valueStyle}>{mundial.subcampeon}</span></div>
            <div style={statRowStyle}><span style={statLabelStyle}>👥 {t.equipos}</span><span style={valueStyle}>{mundial.equipos}</span></div>
            <div style={statRowStyle}><span style={statLabelStyle}>🏅 {t.balon}</span><span style={oroStyle}>{mundial.balonOro}</span></div>
            <div style={statRowStyle}><span style={statLabelStyle}>👑 {t.bota}</span><span style={valueStyle}>{mundial.botaOro}</span></div>
            <div style={statRowStyle}><span style={statLabelStyle}>⚽ {t.goles}</span><span style={badgeGolesStyle}>{mundial.goles} {idioma === 'es' ? 'Goles' : 'Goals'}</span></div>
            <div style={{...statRowStyle, borderBottom: 'none'}}><span style={statLabelStyle}>🏃‍♂️ {t.partidos}</span><span style={valueStyle}>{mundial.partidos}</span></div>
          </div>
        </div>

        {/* RESUMEN CRÓNICA DE LA EDICIÓN */}
        <section style={wideSectionCardStyle}>
          <h2 style={seccionTitleStyle}>{t.tituloCronica}</h2>
          <div style={accentLineStyle}></div>
          <p style={descStyle}>{mundial.desc}</p>
        </section>

        {/* RECUADRO DE HISTORIAS Y DATOS CURIOSOS */}
        <section style={{ marginBottom: '45px' }}>
          <h2 style={seccionTitleStyle}>{t.tituloCuriosidades}</h2>
          <div style={accentLineStyle}></div>
          <div style={curiosidadesGridTresPorDosStyle}>
            {mundial.curiosidades.slice(0, 6).map((curiosidad, index) => (
              <div key={index} style={curiosidadCardStyle}>
                <div style={curiosidadNumeroStyle}>0{index + 1}</div>
                <p style={curiosidadTextoStyle}>{curiosidad}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALERÍA MULTIMEDIOS */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={seccionTitleStyle}>{t.tituloGaleria}</h2>
          <div style={accentLineStyle}></div>
          <div style={galeriaGridCuatroPorDosStyle}>
            {galeriaUrls.slice(0, 8).map((imgUrl, idx) => (
              <div 
                key={idx} 
                style={galeriaItemStyle} 
                onClick={() => setIndexModal(idx)}
                className="contenedor-galeria-item"
              >
                <Image 
                  src={imgUrl} 
                  alt={`Registro visual ${idx + 1}`}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  className="foto-galeria"
                />
                <div style={galeriaOverlayStyle} className="overlay-galeria">
                  <span>{t.ampliar}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* LIGHTBOX / MODAL INTERACTIVO OPTIMIZADO */}
      {indexModal !== null && (
        <div style={modalLightboxStyle} onClick={() => setIndexModal(null)}>
          
          {/* Renderizado condicional: Flecha izquierda sólo si no es la primera imagen */}
          {indexModal > 0 && (
            <button 
              style={flechaNavegacionIzquierdaStyle} 
              onClick={(e) => { e.stopPropagation(); cambiarImagenAnterior(); }}
              className="flecha-modal"
            >
              ‹
            </button>
          )}

          <div style={modalContenedorStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeModalBtn} onClick={() => setIndexModal(null)}>✕</button>
            <div style={{ position: 'relative', width: '85vw', height: '80vh', maxWidth: '900px', maxHeight: '650px' }}>
              <Image 
                src={galeriaUrls[indexModal]} 
                alt="Visualización ampliada" 
                fill 
                style={{ objectFit: 'contain' }} 
                priority
              />
            </div>
          </div>

          {/* Renderizado condicional: Flecha derecha sólo si no es la última imagen */}
          {indexModal < galeriaUrls.length - 1 && (
            <button 
              style={flechaNavegacionDerechaStyle} 
              onClick={(e) => { e.stopPropagation(); cambiarImagenSiguiente(); }}
              className="flecha-modal"
            >
              ›
            </button>
          )}
        </div>
      )}

      {/* Estilos CSS Dinámicos / Globales */}
      <style jsx global>{`
        .foto-galeria:hover { transform: scale(1.08); }
        .contenedor-galeria-item:hover .overlay-galeria { opacity: 1 !important; }
        .btn-flotante:hover { transform: scale(1.04); background-color: #f8fafc !important; }
        .flecha-modal:hover { background-color: rgba(255, 255, 255, 0.25) !important; transform: scale(1.1); }
      `}</style>
    </main>
  );
}

// ---- ARQUITECTURA DE ESTILOS PREMIUM (CSS-in-JS) ----
const mainContainerStyle = { backgroundColor: '#f8fafc', minHeight: '100vh', padding: '140px 20px 50px 20px', fontFamily: 'system-ui, -apple-system, sans-serif' };
const wrapperStyle = { maxWidth: '1140px', margin: '0 auto' };
const backLinkFlotanteStyle = { position: 'fixed', top: '95px', right: '40px', color: '#0a192f', textDecoration: 'none', fontWeight: '700', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', backgroundColor: '#ffffff', padding: '10px 18px', borderRadius: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', transition: 'transform 0.2s ease, background-color 0.2s ease', zIndex: 90 };
const flechaIconStyle = { marginRight: '6px', fontSize: '1.05rem' };
const headerContainerStyle = { marginBottom: '35px' };
const titleStyle = { fontSize: '2.4rem', fontWeight: '800', color: '#0a192f', marginBottom: '8px', letterSpacing: '-0.03em' };
const subtitleStyle = { fontSize: '1.05rem', color: '#64748b', fontWeight: '500' };
const sedeHighlightStyle = { color: '#0f172a', fontWeight: '700' };
const topGridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '35px', marginBottom: '45px' };
const imageWrapperStyle = { position: 'relative', height: '480px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' };
const statsCardStyle = { backgroundColor: '#ffffff', borderRadius: '16px', padding: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #edf2f7' };
const statsTitleStyle = { fontSize: '1.35rem', fontWeight: '700', color: '#0a192f', marginBottom: '12px' };
const dividerStyle = { height: '3px', backgroundColor: '#3b82f6', width: '50px', borderRadius: '2px', marginBottom: '15px' };
const statRowStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: '1px dashed #e2e8f0' };
const statLabelStyle = { fontSize: '0.95rem', color: '#475569', fontWeight: '500' };
const valueStyle = { fontSize: '0.95rem', color: '#0f172a', fontWeight: '600' };
const campeonStyle = { fontSize: '1.05rem', color: '#16a34a', fontWeight: '700' };
const oroStyle = { fontSize: '0.95rem', color: '#ca8a04', fontWeight: '600' };
const badgeGolesStyle = { backgroundColor: '#eff6ff', color: '#1d4ed8', padding: '4px 10px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '700' };
const wideSectionCardStyle = { backgroundColor: '#ffffff', borderRadius: '16px', padding: '35px', boxShadow: '0 10px 25px rgba(0,0,0,0.02)', marginBottom: '45px', border: '1px solid #edf2f7' };
const seccionTitleStyle = { fontSize: '1.5rem', fontWeight: '700', color: '#0a192f', marginBottom: '8px' };
const accentLineStyle = { height: '4px', backgroundColor: '#3b82f6', width: '35px', borderRadius: '2px', marginBottom: '25px' };
const descStyle = { fontSize: '1.1rem', color: '#334155', lineHeight: '1.75', textAlign: 'justify' };
const curiosidadesGridTresPorDosStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const curiosidadCardStyle = { backgroundColor: '#ffffff', borderRadius: '14px', padding: '24px', boxShadow: '0 8px 20px rgba(0,0,0,0.01)', border: '1px solid #f1f5f9', display: 'flex', gap: '18px', alignItems: 'flex-start' };
const curiosidadNumeroStyle = { fontSize: '1.35rem', fontWeight: '800', color: '#3b82f6', opacity: '0.8', fontFamily: 'monospace' };
const curiosidadTextoStyle = { fontSize: '0.95rem', color: '#334155', lineHeight: '1.6', margin: 0 };
const galeriaGridCuatroPorDosStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' };
const galeriaItemStyle = { position: 'relative', height: '150px', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' };
const galeriaOverlayStyle = { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10, 25, 47, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ffffff', fontSize: '0.85rem', fontWeight: '600', opacity: 0, transition: 'opacity 0.3s ease', backdropFilter: 'blur(3px)' };
const modalLightboxStyle = { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(10, 25, 47, 0.92)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(6px)' };
const modalContenedorStyle = { position: 'relative', backgroundColor: 'transparent', padding: '10px', borderRadius: '12px' };
const closeModalBtn = { position: 'absolute', top: '-45px', right: '0px', backgroundColor: 'transparent', border: 'none', color: '#ffffff', fontSize: '1.5rem', cursor: 'pointer', outline: 'none' };
const errorContainerStyle = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', gap: '15px' };
const btnVolverStyle = { padding: '10px 20px', backgroundColor: '#3b82f6', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: '600' };

const flechaNavegacionIzquierdaStyle = {
  position: 'absolute', left: '40px', backgroundColor: 'rgba(255, 255, 255, 0.12)', border: 'none',
  color: '#ffffff', fontSize: '3.5rem', width: '60px', height: '60px', borderRadius: '50%',
  cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center',
  userSelect: 'none', transition: 'all 0.2s ease', outline: 'none', zIndex: 1010, paddingBottom: '7px'
};

const flechaNavegacionDerechaStyle = {
  position: 'absolute', right: '40px', backgroundColor: 'rgba(255, 255, 255, 0.12)', border: 'none',
  color: '#ffffff', fontSize: '3.5rem', width: '60px', height: '60px', borderRadius: '50%',
  cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center',
  userSelect: 'none', transition: 'all 0.2s ease', outline: 'none', zIndex: 1010, paddingBottom: '7px'
};