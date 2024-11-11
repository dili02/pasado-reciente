export interface TerroristActionDefinition {
  date: Date;
  dates?: { init: Date; end: Date };
  title: string;
  slug: string;
  type: TypeTerroristActionDefinition;
  victims?: VictimsDefinition[];
  newsPapers?: NewsPaperDefinition[];
  apologyForCrimeInImages?: ApologyForCrimeInImagesDefinition[];
  virtualMemorial?: ImageDefinition[];
  vindicatedActions?: {
    books: Book[];
  };
  videos?: VideosTerroristActionDefinition[];
  fact?: string;
  moneyTheft?: {
    uyu: number;
    usd: number;
  };
  seeAlso?: [{ href: string; text: string }];
}

export type TypeTerroristActionDefinition =
  | "asesinatos"
  | "atentados"
  | "secuestros"
  | "robo-armamento-explosivos"
  | "robo-dinero"
  | "otras-acciones";

export type VictimsDefinition = {
  info?: VictimsInfoDefinition;
};

export type VictimsInfoDefinition = {
  name: string;
  deceased?: Date;
  age?: number;
  childs?: number;
  daughter?: number;
  childsDescription?: string;
  otherDescription?: string;
  marital?: string;
  nationality?: string;
  kidnapping?: {
    init: Date;
    end: Date;
    days: number;
    description?: string;
  };
  avatar?: {
    src: string;
    alt: string;
  };
};

export type NewsPaperDefinition = {
  name?: string;
  date?: Date;
  dateInit?: Date;
  dateEnd?: Date;
  title?: string;
  description?: string;
  subtitle?: string;
  subDescription?: string;
  title1?: string;
  description1?: string;
  subtitle1?: string;
  subDescription1?: string;
  subtitle2?: string;
  subDescription2?: string;
  title2?: string;
  description2?: string;
  title3?: string;
  description3?: string;
  subtitle3?: string;
  subDescription3?: string;
  title4?: string;
  description4?: string;
  subtitle4?: string;
  subDescription4?: string;
  imgSrc?: string[];
  images?: NewPapeImageDefinition[];
  fact?: string;
  notice?: NoticeDefinition[];
  body?: {
    title: string;
    titledescription?: string;
    subtitle?: string;
    subtitledescription?: string;
    subtitle1?: string;
    subtitledescription1?: string;
    subtitle2?: string;
    subtitledescription2?: string;
  };
  content?: NewsPaperContentDefinition[];
};

type NewsPaperContentDefinition = {
  title?: string;
  description?: string;
  subtitle?: string;
  subdescription?: string;
};

type NoticeDefinition = {
  name: string;
  date: Date;
  decription?: string;
  body?: [
    {
      title?: string;
      titledescription?: string;
      subtitle?: string;
      subtitledescription?: string;
      subtittle1?: string;
      subtitledescription1?: string;
      subtittle2?: string;
      subtitledescription2?: string;
      images?: NewPapeImageDefinition[];
    }
  ];
};

export type NewPapeImageDefinition = {
  src: string;
  alt: string;
  type: string;
};

export type ApologyForCrimeInImagesDefinition = {
  title: string;
  description?: string;
  images: ImageDefinition[];
};

export type ImageDefinition = {
  src: string;
  alt: string;
};

export type Book = {
  fragment: string;
  year?: Date;
  name: string;
  place: string;
  edition: string;
  pages: string;
  author?: string;
};

export type VideosTerroristActionDefinition = {
  id: string;
  title: string;
  src: string;
  slug: string;
  date: Date;
};

export const api = {
  countTotalTerroristActions: async (): Promise<number> => {
    return TerroristActions.length;
  },

  getAllMurders: async (): Promise<TerroristActionDefinition[]> => {
    return TerroristActions.filter((action) => action.type === "asesinatos") // Filtrar acciones por tipo
      .sort((a, b) => a.date.getTime() - b.date.getTime()); // Ordenar por fecha ascendente
  },

  getActionBySlug: async (slug: string): Promise<TerroristActionDefinition> => {
    const action = TerroristActions.find((action) => action.slug === slug);

    if (!action) throw new Error(`Accion Terrorista no encontrada`);

    return action;
  },

  getAllKidnappings: async (): Promise<TerroristActionDefinition[]> => {
    return TerroristActions.filter((action) => action.type === "secuestros") // Filtrar acciones por tipo
      .sort((a, b) => a.date.getTime() - b.date.getTime()); // Ordenar por fecha ascendente
  },

  getAllAtacks: async (): Promise<TerroristActionDefinition[]> => {
    return TerroristActions.filter((action) => action.type === "atentados") // Filtrar acciones por tipo
      .sort((a, b) => a.date.getTime() - b.date.getTime()); // Ordenar por fecha ascendente
  },

  getAllExplosiveWeaponsTheft: async (): Promise<
    TerroristActionDefinition[]
  > => {
    return TerroristActions.filter(
      (action) => action.type === "robo-armamento-explosivos"
    ) // Filtrar acciones por tipo
      .sort((a, b) => a.date.getTime() - b.date.getTime()); // Ordenar por fecha ascendente
  },

  getAllMoneyTheft: async (): Promise<TerroristActionDefinition[]> => {
    return TerroristActions.filter((action) => action.type === "robo-dinero") // Filtrar acciones por tipo
      .sort((a, b) => a.date.getTime() - b.date.getTime()); // Ordenar por fecha ascendente
  },

  getTotalAmountMoneyTheft: async (): Promise<number> => {
    return TerroristActions.filter(
      (action) => action.type === "robo-dinero"
    ).reduce((acc, value) => acc + value.moneyTheft?.usd!, 0);
  },

  getAllOtherAcctions: async (): Promise<TerroristActionDefinition[]> => {
    return TerroristActions.filter((action) => action.type === "otras-acciones") // Filtrar acciones por tipo
      .sort((a, b) => a.date.getTime() - b.date.getTime()); // Ordenar por fecha ascendente
  },
};

export const TerroristActions: TerroristActionDefinition[] = [
  {
    date: new Date("July 07, 1969 03:24:00"),
    title: "Agente Germán Garay",
    slug: "agente-german-garay",
    type: "asesinatos",
    vindicatedActions: {
      books: [
        {
          fragment:
            '"... El 7 de julio, en cinco operativos, los tupamaros lograron desarmar a ocho policías. Si bien en la columna 10 estaba muy presente lo de entrenarse para no herir a nadie, un grupo de otra columna no siguió -o no pudo seguir- las recomendaciones: Germán Garay, un viejo policía, terminó muerto ..."',
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 397",
          author: "Pernas",
        },
        {
          fragment:
            '"... En las primeras horas de la mañana del 7 de julio, y en el lapso de una hora, se hicieron cinco desarmes, de los cuales fueron víctimas ocho agentes de Policía. En todos los casos los atacantes actuaron en grupos de tres o cuatro personas. En uno de los ataques dieron muerte a un veterano agente llamado Germán Garay ..."',
          year: new Date("2007-1-1"),
          name: "Cero a la izquierda. Una biografía de Jorge Zabalza",
          place: "Montevideo - Uruguay",
          edition: "Letraeñe Ediciones",
          pages: "pág. 76",
          author: "Leicht",
        },
      ],
    },
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        dateInit: new Date("1969-6-18"),
        dateEnd: new Date("1969-7-18"),
        title:
          "“MALEANTES ATACAN VARIOS POLICÍAS Y MATAN A UNO POR LA ESPALDA”",
        description:
          "... los atacantes integraron grupo de tres y cuatro personas, en los que figuraba una mujer y en uno de sus ataques, que tenían por objeto despojar a los agentes de sus armas y parte del atuendo, los agresores dieron muerte a uno de los policías ...",
        imgSrc: [
          "/german-garay/14A-1-2-3-4-18-Jul-69-port,1001.jpg",
          "/german-garay/14A-1-2-3-4-18-Jul-69-port,1001B.jpg",
        ],
        images: [
          {
            type: "noticia publicada",
            src: "/german-garay/14A-1-2-3-4-18-Jul-69-port,1001B.jpg",
            alt: "noticia publicada por el diario el día",
          },
          {
            type: "página diario completa",
            src: "/german-garay/14A-1-2-3-4-18-Jul-69-port,1001.jpg",
            alt: "portada publicada por el diario el día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("1969-7-7"),
        title: "“UN POLICÍA FUE ULTIMADO HOY A MANSALVA POR DESCONOCIDOS”",
        description: "Aparece foto de ...",
        imgSrc: [
          "/german-garay/14B-1-2-3-4-07-Jul-69-port,1001.jpg",
          "/german-garay/14B-1-2-3-4-07-Jul-69-port,1001B.jpg",
        ],
        images: [
          {
            type: "noticia publicada",
            src: "/german-garay/14B-1-2-3-4-07-Jul-69-port,1001B.jpg",
            alt: "noticia publicada por el diario el diario",
          },
          {
            type: "página en diario completa",
            src: "/german-garay/14B-1-2-3-4-07-Jul-69-port,1001.jpg",
            alt: "portada publicada por el diario el diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("1969-7-7"),
        title: "“TUPAMAROS ASESINARON POR LA ESPALDA A UN POLICÍA”",
        description:
          "Es uno de los cinco atentados contra ocho funcionarios. El doloroso episodio fue uno de los cinco que conmovieron hoy a la ciudad... Aparecen fotos de ...",
        imgSrc: [
          "/german-garay/14C-1-2-3-4-07-Jul-69-port,1002.jpg",
          "/german-garay/14C-1-2-3-4-07-Jul-69-port,1002B.jpg",
        ],
        images: [
          {
            type: "noticia publicada",
            src: "/german-garay/14C-1-2-3-4-07-Jul-69-port,1002B.jpg",
            alt: "noticia publicada por el diario la accion",
          },
          {
            type: "página de dairio completa",
            src: "/german-garay/14C-1-2-3-4-07-Jul-69-port,1002.jpg",
            alt: "portada publicada por el diario la accion",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Policía es asesinado por Terroristas en la vía pública.",
        description:
          "Germán Garay, Agente de la Policía Nacional fue asesinado por Terroristas por la espalda.",
        images: [
          {
            src: "/german-garay/ilustration1.jpg",
            alt: "Agente Germán Garay seguido por tres Terroristas",
          },
          {
            src: "/german-garay/ilustration2.jpg",
            alt: "Terroristas armados atacan al Agente Germán Garay",
          },
          {
            src: "/german-garay/ilustration3.jpg",
            alt: "Terrorista asesina por la espalda al Agente Germán Garay al intentar resistirse.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/german-garay/placeOfOccurrence.jpg",
        alt: "Aquí, en plena democracia, el 07/07/69 fue asesinado por Terroristas, Germán Garay perteneciene a la Policía Nacional, de 52 años de edad, casado, 5 hijos",
      },
    ],
    victims: [
      {
        info: {
          name: "Agente Germán Garay",
          age: 52,
          childs: 5,
          marital: "casado",
          avatar: {
            src: "/german-garay/avatar.png",
            alt: "imagen de german garay",
          },
        },
      },
    ],
  },
  {
    date: new Date("December 27, 1966 03:24:00"),
    title: "Comisario Antonio Silveira Regalado",
    slug: "antonio-silveira-regalado",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Comisario Antonio Silveira Regalado",
          age: 40,
          childs: 2,
          childsDescription: "menores de edad",
          marital: "casado",
          avatar: {
            src: "/antonio-silveira-regalado/avatar.png",
            alt: "imagen de Antonio Silveira Regalado",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" en Portada',
        date: new Date("December 27, 1966 03:24:00"),
        title:
          "UN TUPAMARO MATÓ UN POLICÍA Y SE SUICIDÓ. LOS CABECILLAS AÚN CONTINÚAN PRÓFUGOS",
        description:
          "Aparece foto a cuyo pie dice: “El Tupamaro... yace sin vida. Desde su miserable cucheta disparó contra el Comisario Silveira Regalado, dándole muerte en forma instantánea. De inmediato volvió el arma y se disparó un balazo en la sien. Murió también en el acto”. Aparece foto a cuyo pie dice: “..., un ex soldado, sale conducido prisionero. Dormía en el rancho en el que mataron a Silveira. Cuando el comisario echó la puerta abajo... levantó los brazos entregándose. Distrajo al comisario, quien bajó la guardia y fue acribillado por el Tupamaro...”",
        images: [
          {
            type: "noticia publicada",
            src: "/antonio-silveira-regalado/noticia_1.jpg",
            alt: "portada publicada por el diario el diario",
          },
          {
            type: "página diario completa",
            src: "/antonio-silveira-regalado/noticia_2.jpg",
            alt: "noticia publicada por el diario el diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" en Portada',
        date: new Date("December 27, 1966 03:24:00"),
        title:
          "TERRORISTAS: MATAN ALEVOSAMENTE A UN COMISARIO POLICIAL. Al Allanar una Guarida Fue Atacado por la Espalda; el Homicida Se Quitó la Vida",
        description:
          "Atacado por la espalda cuando efectuaba un allanamiento en una chacra de Canelones, cayó esta madrugada bajo el plomo criminal, el Comisario Antonio Silveira Regalado, a cargo del Servicio de Radio Patrulla de la Jefatura de Policía de Montevideo. La muerte del joven e inteligente funcionario ha sido recibida por nuestra población con gran pesar, ya que Silveira Regalado había puesto en la defensa de la sociedad sus mejores condiciones de funcionario y de hombre, llegando muchas veces a exponer su vida que, lamentablemente, perdiera esta madrugada. La portada continúa detallando con diferentes subtítulos los sucesos y las características del Comisario.”",
        images: [
          {
            type: "noticia publicada",
            src: "/antonio-silveira-regalado/noticia_3.jpg",
            alt: "portada publicada por el diario el diario",
          },
          {
            type: "página diario completa",
            src: "/antonio-silveira-regalado/noticia_4.jpg",
            alt: "noticia publicada por el diario el diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("December 27, 1966 03:24:00"),
        title:
          "OTRA PANTALLA TERRORISTA: IMPRENTA CLANDESTINA TRAS TALLER MECÁNICO. Hallaron Protección de Cemento Similar a la de la Camioneta del Tiroteo",
        description: "...”",
        subtitle: "Matan a un Comisario",
        subDescription:
          "Agrega bajo diferentes subtítulos más detalles de los hechos e incluye una noticia con el subtítulo “último momento”. Tiroteo en Neptunia. Dos que huían en una motoneta. En este incidente uno fue detenido y ambos se encuentran heridos, uno en una pierna y el otro en un brazo. El otro se encuentra prófugo. Los prófugos estarían heridos, pero no de hoy, sino del tiroteo del jueves pasado...",
        images: [
          {
            type: "noticia publicada",
            src: "/antonio-silveira-regalado/noticia_5.jpg",
            alt: "portada publicada por el diario el diario",
          },
          {
            type: "página diario completa",
            src: "/antonio-silveira-regalado/noticia_6.jpg",
            alt: "noticia publicada por el diario el diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 5)',
        date: new Date("December 28, 1966 03:24:00"),
        title:
          "BATIDAS EN TODO MONTEVIDEO BUSCANDO A LOS CÓMPLICES DEL “TUPAMARO” QUE DIO MUERTE AL COMISARIO SILVEIRA",
        description:
          "Realiza un detallado relato del asesinato y de los acontecimientos. Un criadero de aves se utilizaba para reuniones secretas, ejercicios de tiro y refugio. Aparecen armas y un libro “50 preguntas a un guerrillero” con dedicatoria a Jorge durante su estadía en La Habana. El Tupamaro... había participado en el asalto al Banco La Caja Obrera Agencia Bella Vista. Identifican alias:...",
        images: [
          {
            type: "noticia publicada",
            src: "/antonio-silveira-regalado/noticia_7.jpg",
            alt: "portada publicada por el diario el dia",
          },
          {
            type: "página diario completa",
            src: "/antonio-silveira-regalado/noticia_8.jpg",
            alt: "noticia publicada por el diario el dia",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 8)',
        date: new Date("December 28, 1966 03:24:00"),
        subtitle: "Ya Hay Cuatro Extremistas Procesados",
        subDescription:
          "La Justicia ha producido un fallo terminante al disponer el procesamiento de..., todos confesos.",
        subtitle1: "Batidas en ...",
        subDescription1: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/antonio-silveira-regalado/noticia_9.jpg",
            alt: "portada publicada por el diario el dia",
          },
          {
            type: "página diario completa",
            src: "/antonio-silveira-regalado/noticia_10.jpg",
            alt: "noticia publicada por el diario el dia",
          },
        ],
      },
    ],
  },
  {
    date: new Date("September 26, 1969 03:24:00"),
    title: "Rafael Guidet",
    slug: "comerciante-rafael-guidet",
    type: "asesinatos",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("September 26, 1969 03:24:00"),
        title: "EXTREMISTAS ACRIBILLAN A UN COLECCIONISTA BUSCANDO ARMAS",
        description: "Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/rafael-guidet/noticia_1.jpg",
            alt: "portada publicada por el diario el diario",
          },
          {
            type: "página diario completa",
            src: "/rafael-guidet/noticia_2.jpg",
            alt: "noticia publicada por el diario el diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("September 26, 1969 03:24:00"),
        title: "LO ACRIBILLARON AL NO ENTREGAR EL ARMAMENTO",
        description:
          "Un coleccionista de armas... fue acribillado a balazos por un grupo de extremistas cuando intentaban robarle valiosas pistolas, revólveres y municiones... se produjo esta mañana pasada las 6.30 horas en el comercio de la Avda. General Flores 2687 esquina Vilardebó, propiedad de la víctima Rafael César Guidet Piotti. Aparece croquis de...",
        images: [
          {
            type: "noticia publicada",
            src: "/rafael-guidet/noticia_4.jpg",
            alt: "noticia publicada por el diario el diario",
          },
          {
            type: "página diario completa",
            src: "/rafael-guidet/noticia_3.jpg",
            alt: "pagina publicada por el diario el diario",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 5)',
        date: new Date("September 27, 1969 03:24:00"),
        title: "UN HOMBRE FUE MUERTO EN SU FLORERÍA DE GOES",
        description:
          "Un hombre fue ultimado en el interior de su florería en plena barriada de Goes, al enfrentarse con cuatro desconocidos que portando armas de fuego habían penetrado al comercio...",
        images: [
          {
            type: "noticia publicada",
            src: "/rafael-guidet/noticia_5.jpg",
            alt: "noticia publicada por el diario el diario",
          },
          {
            type: "página diario completa",
            src: "/rafael-guidet/noticia_6.jpg",
            alt: "portada publicada por el diario el popular",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("October 07, 1969 03:24:00"),
        title: "AMENAZAN A FAMILIARES DE GUIDET",
        description: "",
        images: [
          {
            type: "noticia publicada",
            src: "/rafael-guidet/noticia_7.jpg",
            alt: "pagina publicada por el diario el diario",
          },
          {
            type: "página diario completa",
            src: "/rafael-guidet/noticia_8.jpg",
            alt: "noticia publicada por el diario el diario",
          },
        ],
      },
    ],
    victims: [
      {
        info: {
          name: "Rafael Guidet",
          age: 54,
          childs: 1,
          marital: "casado",
          avatar: {
            src: "/rafael-guidet/avatar.jpg",
            alt: "imagen de rafael guidet",
          },
        },
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Sediciosos asesinan a un comerciante y coleccionista de armas.",
        description:
          "Rafael Guidet, fue asesinado por integrantes del MLN-T en intento de robo de armas.",
        images: [
          {
            src: "/rafael-guidet/ilustracion_1.jpg",
            alt: "Rafael Guidet es amenazado por terroristas.",
          },
          {
            src: "/rafael-guidet/ilustracion_2.jpg",
            alt: "Terroristas exigen a Rafael Guidet entrega de armas.",
          },
          {
            src: "/rafael-guidet/ilustracion_3.jpg",
            alt: "Rafael Guidet es asesinado por terroristas.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/rafael-guidet/placa_virtual.jpg",
        alt: "Aquí, en plena democracia, el 26/09/69 fue asesinado por Terroristas, Rafael Guidet, de 54 años de edad, casado, 1 hijo",
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>"Pero no todo salía tan limpio en las operaciones del MLN.</p>
          <p>El 26 de setiembre el movimiento guerrillero intentó asaltar al coleccionista de armas César Guidet, un experto instructor de tiro...</p>
            <p>Tupamaros de la columna 15 llegaron a las 6:30 de la mañana a la florería de la calle General Flores 2687, casi Vilardebó, en el barrio Goes, donde el coleccionista tenía su arsenal. Guidet acababa de abrir su comercio cuando ingresaron tres hombres, lo encañonaron y le exigieron entregar las armas. En principio no opuso resistencia, pero luego de adentrarse en el local –siempre siendo apuntado por los guerrilleros–, sacó con rapidez un revólver del cajón de su escritorio y alcanzó a disparar tres veces contra sus oponentes, antes de caer muerto por la respuesta a balazos.</p>
            <p>Al mediodía, otro grupo actúo con distinta planificación: averiguó que el coleccionista de armas y empresario Luis Alberto Bruzzone no estaba en su casa de la calle Luis de la Torre 468. Uno telefoneó a la hija, y haciéndose pasar por funcionario de una empresa, le comunicó a la joven que le llevarían unos papeles para su padre. Al llegar, ella les abrió la puerta y terminó encañonada.</p>
            <p>– ¡Quedate tranquila y no te va a pasar nada!</p>
            <p>Lo mismo le dijeron a la madre de la joven, cuando la encontraron en la cocina.</p>
            <p>En veinte minutos se llevaron carabinas, rifles, escopetas, revólveres, pistolas y municiones...</p>
            <p>Salieron, abordaron un taxi –el Mercedes Benz, negro, matrícula 350.910–..."</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 403",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("October 08, 1969 03:24:00"),
    title: "Carlos Burgueño y Sargento Radio Patrulla Enrique Fernández",
    slug: "acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Carlos Burgueño",
          age: 27,
          marital: "casado",
          childs: 2,
          childsDescription: "menores de edad",
          otherDescription: "(uno de tan solo un día)",
          avatar: {
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/avatar_1.png",
            alt: "imagen de Carlos Burgeño",
          },
        },
      },
      {
        info: {
          name: "Sgto. Radio Patrulla Enrique Fernández",
          age: 44,
          childs: 2,
          childsDescription: "menores de edad",
          marital: "casado",
          avatar: {
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/avatar_2.png",
            alt: "imagen de Enrique Fernández",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("October 08, 1969 03:24:00"),
        title: "TREMENDO GOLPE LE ASESTÓ LA POLICÍA AL GRUPO EXTREMISTA",
        description:
          "...quedaban cinco elementos subversivos prófugos... se encuentran dos mujeres jóvenes, una de las cuales,... hirió accidentalmente a uno de sus compinches extremistas...",
        subtitle: "Otro Extremista Muerto",
        subDescription:
          "... eran dos los extremistas muertos y no uno... Con el deceso también de Carlos Burgueño, llegan a tres los fallecidos en las dramáticas instancias de esta tarde... Así mismo se pudo saber que 2 funcionarios policiales... habían resultado heridos de bala..., en el lugar de los hechos, que habían sido incautadas a los extremistas numerosas armas, largas y cortas, así como bombas de mano y uniformes que habían hurtado aparentemente en la comisaría de Pando. Aparece foto de...",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_1.jpg",
            alt: "noticia publicada por el diario el diario",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_2.jpg",
            alt: "noticia publicada por el diario el diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("October 09, 1969 03:24:00"),
        title: "EXTREMISTAS PROMUEVEN TRÁGICO ENFRENTAMIENTO: 4 MUERTOS",
        description:
          "Un grupo de más de treinta extremistas promovieron un espectacular y trágico episodio. Simulando integrar un cortejo fúnebre, se apoderaron de cinco autos “remises” y con ellos y una camioneta,... divididos en tres comandos, asaltaron tres bancos... la Comisaría, Cuartelillo de Bomberos y la Central Telefónica... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_3.jpg",
            alt: "noticia publicada por el diario el dia",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_3.jpg",
            alt: "página diario completa publicada por el diario el dia",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("October 09, 1969 03:24:00"),
        title:
          "SE LLEVARON CERCA DE 50 MILLONES DE PESOS HABIÉNDOSE RECUPERADO UNA CIERTA CANTIDAD",
        description:
          "Un grupo de extremistas intentó... inmovilizar-...-la ciudad de Pando... Lograron, en un término de quince minutos, apoderarse de... Pero la operación fracasó, al fin, por la valiente oposición de algunos policías, la sagacidad de vecinos, y la rapidez y decisión con que-...-actuaron los efectivos de la policía... se convirtió en desesperada fuga... Pese al fuerte armamento que poseían tres resultaron muertos; un cuarto está gravemente herido y dieciséis fueron capturados... un joven y querido vecino de Pando, resultó muerto y un sargento de Patrulleros gravemente herido...",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("October 09, 1969 03:24:00"),
        subtitle:
          "Simularon Un Sepelio a Fin de que sus Movimientos no Despertaran Sospechas",
        subDescription: "Aparecen fotos y croquis de...",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_5.jpg",
            alt: "noticia publicada por el diario el diario",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("October 09, 1969 03:24:00"),
        title: "VENDAVAL DE SANGRE Y FUEGO SE ABATIÓ AYER SOBRE PANDO",
        description:
          "Durante veinticinco minutos un vendaval de fuego se abatió ayer sobre Pando... es el relato cronológico... en el que se consumó “el asalto a la ciudad”. Pando...",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_6.jpg",
            alt: "noticia publicada por el diario el diario",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_7.jpg",
            alt: "pagina diario completa publicada por el diario el diario",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (en Portada)',
        date: new Date("October 09, 1969 03:24:00"),
        title: "SANGRIENTO TIROTEO: 4 MUERTOS, VARIOS HERIDOS",
        description:
          "PANDO: 4 bancos y la comisaría fueron tomados ayer por asalto... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_8.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_9.jpg",
            alt: "pagina diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 12)',
        date: new Date("October 09, 1969 03:24:00"),
        title: "“SANGRIENTO TIROTEO: CUATRO MUERTOS”",
        description:
          "Pando: 4 bancos y la Comisaría fueron tomados por asalto, ayer... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/n_25.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/n_25.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("October 10, 1969 03:24:00"),
        title: "HUYEN PARA NO CAER EN LAS REDADAS POLICIALES",
        description:
          "Como consecuencia del operativo de Pando, los extremistas además de haber sufrido tres bajas en sus filas, y más de una veintena de detenciones de los integrantes de los comandos, están experimentando pérdidas millonarias en dinero, por que debieron hacer un abandono de guaridas arrendadas, adelantándose a revelaciones que pudieran hacer los presos... La organización cuando arrienda casas,... no pone garantías al formalizar los contratos. Esto lo sustituye por depósitos de dinero en efectivo...",
        title1: "VEINTE KILÓMETROS MINADOS POR BOMBAS",
        description1:
          "... Existe la certeza de que los comandos extremistas portaban dos bombas “per cápita” que, en su desesperada fuga, dejaron abandonadas y sin detonar, por el terreno que transitaron...",
        title2: "VAN AL CINE",
        description2:
          "Un cine céntrico exhibe en estos días (“por 4ª semana consecutiva”) una producción norteamericana titulada “Sociedad para el Crimen”. Sobre el final del film, el protagonista (Steve Mc Queen) se vale de un truco para despistar a los policías que le tendieron una celada donde debía guardar el botín de un asalto: una carroza fúnebre desfila ante los agentes, seguida por una lenta procesión de “remises” negros. Así mismo, dos meses atrás, la serial televisiva “Misión Imposible” mostró un ardid similar...",
        title3: "15 AUTOS UTILIZARON EN PANDO",
        description3:
          "Por los menos quince vehículos fueron utilizados por los terroristas en su “asalto a Pando”...",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_11.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_12.jpg",
            alt: "pagina diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 19)',
        date: new Date("October 11, 1969 03:24:00"),
        title: "LIMPIARON” LAS CHACRAS MINADAS",
        description:
          "Efectivos policiales concretaron en las últimas una “limpieza” completa de un rectángulo de 20 kilómetros cuadrados en donde los extremistas dejaron en su huida armas y bombas,...",
        title1: "70 HOMBRES PARTICIPARON EN EL OPERATIVO PANDO",
        description1:
          "Alrededor de 70 terroristas intervinieron... los 21 detenidos... La lista se completa con los dos extremistas que se atienden en el Hospital Militar. Uno de ellos es... El otro herido es...",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_13.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_14.jpg",
            alt: "pagina diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("October 14, 1969 03:24:00"),
        title:
          "DECLARARON AYER 17 DE LOS EXTREMISTAS Y CASI TODOS ADMITEN SU CULPABILIDAD",
        description:
          "... Es decir: 16 detenidos en Pando... los tres detenidos posteriormente en la calle Santiago Gadea... Casi todos los detenidos en Pando... admitieron... su intervención en los hechos. Los más claros fueron... enumeraron los episodios como “secuencias de una batalla”... Otros... incluidos los que fueron apresados en la calle Santiago Gadea admitieron... ser integrantes de grupos de células extremistas... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_15.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_16.jpg",
            alt: "pagina diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("October 15, 1969 03:24:00"),
        title: "16 EXTREMISTAS FUERON PROCESADOS AYER",
        description: "Ellos son...",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_17.jpg",
            alt: "noticia publicada por el diario El Dia",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_18.jpg",
            alt: "pagina diario completa publicada por el diario El Dia",
          },
        ],
      },
      {
        name: 'Diario "El País" (en Portada)',
        date: new Date("October 16, 1969 03:24:00"),
        title: "VARIOS DE LOS TERRORISTAS APRESADOS EN TOLEDO CHICO",
        description:
          "Aparecen fotos a cuyo pie dicen: “... algunos de los extremistas capturados en Toledo Chico y en actuaciones posteriores en Montevideo y ya procesados por la Justicia. Por su orden:...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_19.jpg",
            alt: "noticia publicada por el diario El Dia",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_20.jpg",
            alt: "pagina diario completa publicada por el diario El Dia",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 12)',
        date: new Date("October 16, 1969 03:24:00"),
        title: "EXTREMISTAS PROCESADOS",
        description:
          "Aparecen fotos, una de las cuales a cuyo pie dice: “... el procesamiento de estos extremistas, detenidos en ocasión de los luctuosos sucesos en la localidad de Pando. De izq. a derecha... ”.",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_21.jpg",
            alt: "noticia publicada por el diario El Dia",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_22.jpg",
            alt: "pagina diario completa publicada por el diario El Dia",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("October 20, 1969 03:24:00"),
        title: "OTRA MUERTE SUMA CULPAS A LOS “INVASORES” DE PANDO",
        description:
          "Peritaje balístico dirá cual de los delincuentes asesinó al Sargento Enrique Fernández Díaz. A una nueva masiva demostración de pesar dio lugar el velatorio de los restos de Enrique Fernández Díaz, el Sargento de Radio Patrulla fallecido...",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_23.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_24.jpg",
            alt: "pagina diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Un civil ajeno a los hechos, es asesinado durante una operación comando sediciosa",
        description:
          "Carlos Burgueño, fue asesinado por integrantes del MNT-T durante su huida luego del copamiento de la ciudad de Pando.",
        images: [
          {
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/ilustracion_1.jpg",
            alt: "Policía hace señas de detención a vehículo. En él viajaban sediciosos armados. Carlos Burgueño observa los hechos.",
          },
          {
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/ilustracion_2.jpg",
            alt: "Sediciosos disparan. Carlos Burgueño cae herido.",
          },
          {
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/ilustracion_3.jpg",
            alt: "Sediciosos huyen. Carlos Burgueño queda tendido en la vía pública.",
          },
        ],
      },
      {
        title: "Policía es asesinado durante una operación comando sediciosa",
        description:
          "Enrique Fernández, Sargento de la Policía Nacional fue asesinado por integrantes del MLN-T durante su huida luego del copamiento de la ciudad de Pando.",
        images: [
          {
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/ilustracion_4.jpg",
            alt: "Sediciosos huyen armados y se refugian en instalaciones de una escuela pública.",
          },
          {
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/ilustracion_5.jpg",
            alt: "Un sedicioso arroja un artefacto explosivo a un vehículo policial.",
          },
          {
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/ilustracion_6.jpg",
            alt: "Sargento Enrique Fernández, cae herido por un disparo de arma de fuego.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/memorial_1.jpg",
        alt: "Aquí, en plena democracia, el 08/10/69 fue asesinado por Terroristas,  Carlos Burgeño, de 29 años de edad, casado, 2 hijos menores de edad (uno de tan solo un día)",
      },
      {
        src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/memorial_2.jpg",
        alt: "Aquí, en plena democracia, el 08/10/69 fue asesinado por Terroristas, Enrique Fernández perteneciene a la Policía Nacional, de 44 años de edad, casado, 2 hijos menores de edad",
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“... Mujica debe salir para encontrarse con un contacto... Al final entra a la casa y espera...</p>
          <p>Atisba por la ventana y ve a Gallinares...</p>
          <p>- Tenemos una cosa muy linda para hacer dentro de unos días –le dice Pepe.<p>
          <p>- ¿Expropiación, copamiento, propaganda?</p>
          <p>- Todas al mismo tiempo –Pepe se ríe.</p>
          <p>- ¿Todas?</p>
          <p>- Sí, agarrá ahí a la derecha y metete por la paralela a 8 de Octubre... Después dale nomás, que vamos hasta Pando.</p>
          <p>En el camino, Pepe le va contando el plan que ha sido discutido y decidido por el comando del MLN: tomar la pequeña ciudad de Pando. Copar su comisaría, el cuartelillo de Bomberos, el Banco República, el Banco Pan de Azúcar, el Banco de Pando y la central telefónica de UTE.</p>
          <p>Actuarán cuarenta y nueve tupamaros, divididos en seis equipos...</p>
          <p>Es una acción de propaganda armada, de pertrechamiento: se piensa obtener dinero de los bancos y armas de la comisaría, instituciones que deberán ser copadas. Y también es un homenaje al guerrillero Ernesto Che Guevara, al cumplirse dos años de su asesinato en Bolivia.</p>
          <p>Por estos días, en el Centro de Montevideo, un joven elegante y de modales refinados conversa con el encargado de la empresa funeraria Martinelli.</p>
          <p>- El tío era de Soca –explica el muchacho-. Vivió sesenta años en Buenos Aires,...</p>
          <p>... Ahora queremos traer sus cenizas... para que descanse en su pueblo.</p>
          <p>- Una carroza de buena clase, pero no muy ostentosa, y si puede ser cerrada, mejor.</p>
          <p>- ¿Cuántos remises desearían?- le pregunta.</p>
          <p>- Estamos pensando en seis...</p>
          <p>-... Tuvimos un problema mecánico de último momento con la carroza americana y por eso acondicionamos la “Catalina”.</p>
          <p>La marcha va saliendo de la capital...</p>
          <p>En la carroza y en los cinco Cadillacs se escucha entonces la misma frase:</p>
          <p>-¡Somos Tupamaros!</p>
          <p>Los seis choferes y el encargado son invitados a bajar... los funcionarios son inmovilizados –con esposas caseras– por los tupamaros...</p>
          <p>... Deciden subir los funcionarios a la Kombi, y permanecen vigilados por tres guerrilleros.</p>
          <p>El coche de la columna 10 está completo: Pepe, Gallinares, Amilcar, Diana, el Goyo Pérez Lutz y el Gorila Ramos...</p>
          <p>En la ciudad ya esperan, dispersos más de treinta guerrilleros.</p>
          <p>Todos están listos, con sus armas...</p>
          <p>El Cadillac de la 10 marcha hacia el cementerio de Pando...</p>
          <p>Los deudos salen del auto...</p>
          <p>Al retornar solo (sic) faltan diez minutos...</p>
          <p>El auto arranca, despacio. En tres minutos queda frente a la UTE,..., donde bajan sus ocupantes...</p>
          <p>Por detrás se acercan dos hombres con uniformes de la Fuerza Aérea. Llevan a un tercero detenido... Pasan así el umbral de la Comisaría.</p>
<p>La señal está dada. La Comisaría de Pando está siendo copada.</p>
<p>A pocos metros, cuatro tupamaros irrumpen en el Cuartelillo de Bomberos.</p>
<p>Gallinares sale entonces con las luces prendidas... como señal general.</p>
<p>Un grupo al Banco Pan de Azúcar, otro al Banco de la República, un tercero al Banco la Caja Obrera de Pando y el cuarto al Banco Ítalo Americano...</p>
<p>La columna 10 entra en acción.</p>
<p>En el salón principal, Pepe ya ha dado la orden de subir a la azotea para cortar los cables..., suben Goyo y Gorila y se abocan a destrozar cuanto hilo metálico existe.</p>
<p>Algunas empleadas que aún quedan en el salón principal de la central gritan despavoridas...</p>
<p>Abajo, la dama del saco de piel,..., extrae una metralleta del bolso...</p>
<p>Una de las mujeres, embarazada, parece desvanecerse, pero es atendida por algunas funcionarias y vuelve en sí.</p>
<p>... De pronto asoma por la esquina un camión que rápidamente para frente a la UTE. Se abre la puerta y salta un policía a la vereda, y luego corre hacia la</p> central telefónica.
<p>El policía abre la puerta de UTE y entra veloz...</p>
<p>-¡Un teléfono, un teléfono –grita desesperado-, que los tupamaros están atacando la comisaría!</p>
<p>-¡Entregá el arma! –le ordena Pepe apuntándole de frente.</p>
<p>Con el último cable cortado, el operativo dentro de la UTE está por concluir.</p>
<p>La puerta del local se abre y comienzan a aparecer Pepe, Goyo, Gorila, Amílcar, Diana...</p>
<p>Apuran el paso hacia el auto. Gallinares los espera, pronto. Y al subir le dice a Pepe:</p>
<p>-¡Mirá que no pasó la moto del pañuelo!</p>
<p>-No importa. ¡Nos vamos igual! ¡Acá ya está!- contesta Pepe.</p>
<p>Pero cuando van a emprender la marcha, ven llegar a otro policía...</p>
<p>Lo abordan y en unos segundos le quitan el arma, ante el asombro de los estudiantes de la Escuela Industrial del frente...</p>
<p>Los tupamaros llevan al policía hasta dentro de la UTE...</p>
<p>Otra vez en el coche, parten hacia el cementerio, lugar fijado para el encuentro a la finalización del operativo...</p>
<p>Al llegar al cementerio, el Cadillac de la 10 se encuentra con otros coches chamuscados por choques, por los balazos...</p>
<p>... el cortejo fúnebre que comienza a salir por camino Las Piedritas rumbo a camino del Andaluz.</p>
<p>El cortejo de salida va guiado por la Catalina. Detrás el Cadillac de la Columna 10. Y luego otros cinco vehículos-...- en los que viajan decenas de tupamaros...</p>
<p>La Kombi –que aún traslada a los funcionarios de Martinelli– también integra el cortejo.</p>
<p>Atrás queda Pando, tapizada de volantes...</p>
<p>Pero también queda un hombre herido de gravedad, un parroquiano del Bar “U”... Su apellido-...- Burgueño.</p>
<p>A los diez kilómetros se avista un monte, majestuoso. El cortejo se detiene y los tupamaros hacen bajar a los empleados de Martinelli.</p>
<p>El cortejo avanza por el camino del Andaluz...</p>
<p>Recorren cinco kilómetros y pasan la ciudad de Suárez... Pero tres kilómetros después, al divisar el llamado cruce de Cassarino, se distinguen dos figuras humanas.</p>
<p>Al costado de la carretera se ve a un uniformado de la Policía Caminera haciendo señas de “Pare”...</p>
<p>Gallinares se aferra al volante y a la vez que pisa el acelerador...</p>
<p>El cortejo continúa otros seis kilómetros por el camino del Andaluz. Allí paran y los coches se dividen.</p>
<p>El coche de la 10 sigue raudo hacia Cuchilla Grande...</p>
<p>En la zona de Cuchilla Grande se van bajando del Cadillac. Algunos abordan un auto chico color aceituna, otros... toman un coche blanco.</p>
<p>Pepe y otros de sus compañeros se bajaron frente al monumento de Luis Alberto de Herrera y se metieron en un bar. Pidieron cerveza y brindaron por la misión cumplida.”</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "págs. 406-423",
          author: "Pernas",
        },
        {
          fragment: `<p>“Mauricio Rosencof...</p>
          <p>Hubo otras acciones que nos salieron bien: la toma de Pando fue una acción espectacular. También desde el punto de vista militar, porque consistía en ocupar territorio...</p>
          <p>... Pero ¿cómo hacemos para llegar a Pando sin control policial? Ahí fue mi aporte –digamos– teatral: “Lo que podemos hacer es enterrar a alguien, contratamos un furgón, seis remises y en cada remise va un comando. Llegado a determinado punto metemos a los choferes en los remises...”.”.</p>`,
          year: new Date("2009-1-1"),
          name: "Memorias de insurgencia. Historias de vida y militancia en el MLN-Tupamaros. 1965-1975.",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Banda Oriental S.R.L.",
          pages: "págs. 23-64",
          author: "Aldrighi",
        },
        {
          fragment: `<p>“J .M. –Otro nombre: Candán Grajales.</p>
          <p>H. A. P...</p>
          <p>En el regreso de la toma de Pando condujo con sangre fría la carroza en que trasladamos a Pucurull, herido por el disparo de una compañera en el Banco República...”.</p>`,
          year: new Date("2015-1-1"),
          name: "Palabra de Amodio. La otra historia de los Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Plaza",
          pages: "págs. 165-166",
          author: "Marius",
        },
      ],
    },
  },
  {
    date: new Date("November 12, 1969 03:24:00"),
    title: "Agente Juan Viera",
    slug: "agente-juan-viera",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Agente Juan Viera",
          age: 26,
          childs: 2,
          childsDescription: "menores de edad",
          marital: "casado",
          avatar: {
            src: "/juan-viera/avatar.png",
            alt: "imagen de Juan Viera",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("November 13, 1969 03:24:00"),
        title: "UN POLICÍA ASESINADO POR LOS EXTREMISTAS",
        description:
          "Un religioso implicado en el hecho, resultó gravemente herido. Un joven y muy apreciado funcionario policial fue ultimado, ayer de tarde, de un balazo. Juan Antonio Viera Piazza de 26 años, casado, es la víctima y hay pruebas suficientes para probar que fueron extremistas los que le dieron muerte... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/juan-viera/noticia_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/juan-viera/noticia_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 12)',
        date: new Date("November 13, 1969 03:24:00"),
        title: "RECONOCEN AL RELIGIOSO",
        description:
          "... Entre las ropas del herido que quedó en Clínicas, apareció un plano, muy completo de una residencia de Carrasco donde vive un conocido coleccionista de armas que tiene comercio en... Es evidente que se planeaba asaltar esta casa y, posiblemente, las palabras del que habló por teléfono (suspendida operación Bentancur), se refieren, justamente, al asalto a la casa del coleccionista... El cura párroco... fue reconocido en el Hospital de Clínicas por Monseñor Rubio quien concurrió especialmente para establecer su identidad. Como dijimos, al ingresar había dado un nombre falso...",
        images: [
          {
            type: "noticia publicada",
            src: "/juan-viera/noticia_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/juan-viera/noticia_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("November 13, 1969 03:24:00"),
        title: "LOS EXTREMISTAS QUE MATARON AL POLICÍA IBAN A ROBAR ARMAS",
        description:
          "El cura muerto comandaba una célula. Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/juan-viera/noticia_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/juan-viera/noticia_6.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 22)',
        date: new Date("November 13, 1969 03:24:00"),
        title: "BUSCABAN ARMAS Y HALLARON LA MUERTE",
        description:
          "... el terrorista fallecido y el que logró huir, formaban parte de un grupo que se proponía ayer mismo asaltar una residencia de Carrasco donde vive un coleccionista de armas... Viera Piazza salió de su oficina... posteriormente se les acercó pidiéndoles sus documentos... Frente al 1674 de Julio Herrera... se produce la reacción de los detenidos, uno de ellos forcejea con el funcionario policial... caería mortalmente herido... el agente utiliza dos veces su revólver, dando una vez en el blanco... dos sujetos huyen, uno de ellos perdiendo abundante sangre... al llegar a Belgrano y Larrañaga... ordenó detenerse... descendió del vehículo... haciendo una llamada telefónica. Camilloni alcanzó a escuchar... “No realojen la operación Bentancour...”... un vecino... ve al herido desangrándose... conduciéndole al Hospital de Clínicas...",
        title1: "DIRIGÍA 22 EXTREMISTAS EL CURA SALESIANO",
        description1:
          "... era un elemento de significación dentro del movimiento subversivo... El agente Viera Piazza que falleció ayer en cumplimiento de sus funciones, deja una viuda y dos hijos. Tenía 26 años de edad y se había caracterizado siempre por su corrección...",
        images: [
          {
            type: "noticia publicada",
            src: "/juan-viera/noticia_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/juan-viera/noticia_7.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("November 13, 1969 03:24:00"),
        title: "EX SACERDOTE FUE UNO DE LOS ASESINOS DEL POLICÍA",
        description:
          "También murió hoy en el Clínicas. Buscan a otros dos aún prófugos; fracasó la “Operación Bentancour”... Aparece foto de...",
        images: [
          {
            type: "noticia publicada",
            src: "/juan-viera/noticia_8.jpg",
            alt: "noticia publicada por el Diario Acción",
          },
          {
            type: "página diario completa",
            src: "/juan-viera/noticia_9.jpg",
            alt: "noticia publicada por el Diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("November 14, 1969 03:24:00"),
        title: "MUERE EL CURA QUE ERA JEFE DE UN GRUPO EXTREMISTA",
        description:
          "El cura párroco de la orden de los “Salesianos”... falleció ayer... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/juan-viera/noticia_10.jpg",
            alt: "noticia publicada por el Diario El Día",
          },
          {
            type: "página diario completa",
            src: "/juan-viera/noticia_11.jpg",
            alt: "noticia publicada por el Diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("November 15, 1969 03:24:00"),
        title: '"EL MATADOR DEL AGENTE ESTÁ YA IDENTIFICADO"',
        description:
          "... Estaría perfectamente identificado el extremista que acompañaba al ex sacerdote... y que posiblemente, fue el autor del disparo que causó la muerte del funcionario policial Juan A. Viera Piazza. En efecto, la fotografía que acompaña la cédula de identidad a nombre de Vibrante Gasco Ortega, corresponde muy exactamente a la fotografía que posee la Policía de...",
        images: [
          {
            type: "noticia publicada",
            src: "/juan-viera/noticia_12.jpg",
            alt: "noticia publicada por el Diario El Día",
          },
          {
            type: "página diario completa",
            src: "/juan-viera/noticia_13.jpg",
            alt: "noticia publicada por el Diario El Día",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Policía es asesinado por Terroristas cumpliendo sus funciones en sus horas libres",
        description:
          "Juan Viera, Agente de la Policía Nacional fue asesinado por un terrorista.",
        images: [
          {
            src: "/juan-viera/ilustracion_1.jpg",
            alt: "Agente Juan Viera vistiendo de civil, inspecciona documentos de identidad a dos “sospechosos”.",
          },
          {
            src: "/juan-viera/ilustracion_2.jpg",
            alt: "Terrorista se resiste disparando al Agente Juan Viera.",
          },
          {
            src: "/juan-viera/ilustracion_3.jpg",
            alt: "Agente Juan Viera reacciona hiriendo a terrorista.",
          },
          {
            src: "/juan-viera/ilustracion_4.jpg",
            alt: "Agente Juan Viera, herido de muerte. Terroristas huyen.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/juan-viera/memorial.jpg",
        alt: "Aquí, en plena democracia, el 12/11/69 fue asesinado por Terroristas, Juan Viera perteneciente a la Policía Nacional, de 26 años de edad, casado, 2 hijos menores de edad",
      },
    ],
  },
  {
    date: new Date("November 15, 1969 03:24:00"),
    title: "Agente Ruben Zembrano y Chofer Julio Techera",
    slug: "agente-ruben-zembrano-y-chofer-julio-techera",
    type: "asesinatos",
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("November 16, 1969 03:24:00"),
        title: "SALVAJE CRIMEN EN UN ÓMNIBUS",
        description: `En el interior de un ómnibus repleto de pasajeros, fue ultimado anoche de tres balazos un modesto funcionario policial. Un soldado, que iba a su lado, recibió también dos heridas y se halla grave, en el Hospital Militar. El hecho fue cometido por una banda que realizó esta espectacular y cruel acción, sin explicación lógica hasta esta madrugada. El muerto, Carlos Ruben Zembrano Rivero, soltero, de 24 años era policía... Aparece foto a cuyo pie dice: “Asesinato...”.`,
        images: [
          {
            type: "noticia publicada",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 10)',
        date: new Date("November 16, 1969 03:24:00"),
        title: "SALVAJE CRIMEN...",
        description: `... El vil asesinato... El funcionario de la Metropolitana, Zembrano, había sido sorprendido por la acción de los atacantes y, en ningún momento-según testigos-intentó usar la metralleta que llevaba. Fue alcanzado por tres disparos. Uno en el cuello y dos en el tórax... el soldado Barboza alcanzado por dos balazos, uno de los cuales le penetró sobre el abdomen y salió junto a la columna vertebral... Aparece foto a cuyo pie dice: “Carlos Ruben Zembrano Rivero, el joven funcionario de la Metropolitana, ultimado ferozmente en un ómnibus”.`,
        images: [
          {
            type: "noticia publicada",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("November 16, 1969 03:24:00"),
        title: "JOVEN POLICÍA FUSILADO EN UN BUS POR EXTREMISTAS.",
        description: `Lo acribillaron cobardemente en la plataforma de un coche de la línea 71; también hirieron a un soldado; peligró la vida de otros pasajeros... Aparecen fotos...`,
        images: [
          {
            type: "noticia publicada",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_6.jpg",
            alt: "noticia publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("November 16, 1969 03:24:00"),
        title:
          "SANGRIENTA ACCIÓN CUMPLIÓ UN COMANDO. ACRIBILLÓ A UN GUARDIA EN UN ÓMNIBUS REPLETO DE PASAJEROS.",
        description: `Aparecen fotos con el siguiente comentario: “...”. Otra con el título de “Ultimado” a cuyo pie dice: “Carlos Ruben Zembrano...”`,
        images: [
          {
            type: "noticia publicada",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_7.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 19)',
        date: new Date("November 16, 1969 03:24:00"),
        title: "TRAS LOS EXTREMISTAS.",
        description: `Sembraron terror y muerte en el ómnibus y después huyeron... Aparece foto de...`,
        images: [
          {
            type: "noticia publicada",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_8.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_9.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 5)',
        date: new Date("November 16, 1969 03:24:00"),
        title: "POLICÍA MUERTO Y SOLDADO HERIDO.",
        description: `... Un guardia de la metropolitana fue ultimado de tres balazos a quemarropa y despojado de su metralleta y un soldado fue alcanzado de dos balazos...`,
        images: [
          {
            type: "noticia publicada",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_10.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_11.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 22)',
        date: new Date("November 17, 1969 03:24:00"),
        title: "CRIMEN DEL GUARDIA: FUERON IDENTIFICADOS SEIS HOMBRES.",
        description: `Seis extremistas vinculados a graves sucesos de notoriedad, entre ellos el secuestro de Dr. Gaetano Pellegrini Giampetro y el asalto al Casino del Hotel Carrasco fueron reconocidos como integrantes del comando que ultimó dentro de un ómnibus al guardia de la Metropolitana Carlos Ruben Cembrano Rivero, e hirieron al soldado... Aparecen fotos con la siguiente leyenda: “Estos son los extremistas que según la policía y de acuerdo a testigos, participaron en el crimen...”. Aparece foto de...`,
        title1: "CHEQUES FALSOS",
        description1:
          "Integrantes de una organización subversiva, están incursionando en un delito nuevo para ellos, destinado a llegar fondos a su movimiento. Utilizando cheques falsos han logrado cobrar importantes sumas en algunos bancos de la capital. Hasta el momento lograron apoderarse por este medio de unos tres millones de pesos...",
        subtitle1: "PRESUNTO EXTREMISTA DETENIDO.",
        subDescription1:
          "... se encuentra detenido en la Comisaría de la localidad 25 de Agosto... un profesor de la Escuela Industrial de Canelones... Esta persona figuraba en la libreta de anotaciones que hallaron en poder del sacerdote saleciano... muerto con el agente Viera Piazza, durante el tiroteo días atrás entre este funcionario y extremistas...",
        images: [
          {
            type: "noticia publicada",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_12.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_13.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("November 17, 1969 03:24:00"),
        title: "IDENTIFICARON A LOS ASESINOS DEL GUARDIA.",
        description: `...`,
        title2: "ASESINOS Y NADA MÁS.",
        description2:
          "... No son revolucionarios porque la ideología en ellos no importa y bueno esto es decirlo y repetirlo para que nadie se llame a engaño: no son jóvenes proletarios golpeados por la injusticia social; al revés, hijos de familias acomodadas, a quienes el país nada ha negado, sus frustraciones personales, normalmente su fracaso en la vida, los ha identificado en esta triste misión de querer destruir la organización institucional de la República... Aparece foto de...",
        images: [
          {
            type: "noticia publicada",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_14.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_15.jpg",
            alt: "noticia publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("November 17, 1969 03:24:00"),
        title: "FUE ALGO HORRIBLE.",
        description: `Hablan testigos del fusilamiento... Aparece foto de...`,
        images: [
          {
            type: "noticia publicada",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_16.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_17.jpg",
            alt: "noticia publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 6)',
        date: new Date("November 17, 1969 03:24:00"),
        title: "IDENTIFICARON A LOS ASESINOS DEL GUARDIA.",
        description: `Todos ellos son terroristas ya conocidos. Seis extremistas conocidos, varios de ellos notoriamente implicados en gravísimas actividades terroristas, fueron identificados ayer por los pasajeros del ómnibus de AMDET recorrido 71, en el que el sábado fuera vilmente asesinado el agente de la “Metro” Carlos Ruben Zembrano Rivero y herido el soldado Cipriano Altanar Morales Barboza... Aparecen fotos a cuyo pie menciona los nombres...`,
        images: [
          {
            type: "noticia publicada",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_18.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_19.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("November 19, 1969 03:24:00"),
        title: "IDENTIFICAN A LA MUJER DE LA BANDA QUE ULTIMÓ AL CORACERO.",
        description: `... la mujer que integró la banda de extremistas que dio muerte alevosa al guardia de la Metropolitana Carlos R. Cembrano, es... Estaba calificada como extremista desde hace dos años...`,
        images: [
          {
            type: "noticia publicada",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_20.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_21.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("November 19, 1969 03:24:00"),
        title: "TRÁGICA DERIVACIÓN DEL ASESINATO DEL GUARDIA.",
        description: `... el Sr. Julio Techera Castillo, uruguayo de 56 años, que era el guarda del ómnibus de AMDET dentro del cual fue asesinado el agente-a un metro suyo-sufrió entonces, por la violenta emoción, una crisis nerviosa. Logró reponerse en los primeros momentos y fue, incluso, uno de los testigos más importantes con que contó la policía. Pero, luego su salud se quebrantó... sufrió una crisis cardíaca y fue transportado por una ambulancia de Salud Pública al Hospital de Clínicas donde llegó sin vida...`,
        images: [
          {
            type: "noticia publicada",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_22.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_23.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Agente policial asesinado por sediciosos",
        description:
          "El agente policial Carlos Zembrano viajaba en un ómnibus completo de pasajeros junto al Soldado Cipriano Morales. Julio Techera de 56 años, guarda del ómnibus, presenció de cerca el vil asesinato, sufriendo un quebranto de salud del cual no se recuperó falleciendo días después.",
        images: [
          {
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/i_1.jpg",
            alt: "Taxi intercepta recorrido del ómnibus. Bajan sediciosos armados.",
          },
          {
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/i_2.jpg",
            alt: "Sedicioso sube al ómnibus, asesina al Agente Zembrano y es herido el Soldado Morales.",
          },
          {
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/i_3.jpg",
            alt: "Sedicioso golpea a Zembrano ya herido de muerte.",
          },
          {
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/i_4.jpg",
            alt: "Roban metralleta y huyen.",
          },
        ],
      },
    ],
    victims: [
      {
        info: {
          name: "Agente Carlos Zembrano",
          age: 24,
          marital: "soltero",
          avatar: {
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/a.png",
            alt: "imagen de Agente Carlos Ruben Zembrano Rivero",
          },
        },
      },
      {
        info: {
          name: "Julio Techera",
          deceased: new Date("November 18, 1969"),
          age: 56,
          marital: "casado",
          avatar: {
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/a_1.png",
            alt: "imagen de Chofer Julio Techera",
          },
        },
      },
    ],
    virtualMemorial: [
      {
        src: "/agente-ruben-zembrano-y-chofer-julio-techera/virtual.jpg",
        alt: "Aquí, en plena democracia, el 15/09/69 fue asesinado por Terroristas, Carlos Zembrano perteneciente a la Policía Nacional, de 24 años de edad",
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `... El 15 de noviembre los tupamaros mataron al integrante de la Guardia Metropolitana Carlos Zembrano...`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 431",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("November 26, 1969 03:24:00"),
    title: "Agente Antonio Fernández",
    slug: "antonio-fernandez",
    type: "asesinatos",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 19)',
        date: new Date("November 26, 1969 03:24:00"),
        title: "FUE BALEADO DE MUERTE HOY UN POLICÍA: CAYÓ UN EXTREMISTA",
        description: `Un agente de la Seccional 18ª de Canelones fue asesinado esta tarde de seis balazos... en la Avda. de las Playas en El Pinar... la víctima es el agente Antonio Fernández (oriental, 40 años, casado, 5 hijos)... Veinte minutos después del alevoso crimen, el patrullero de la Caminera... detuvo en la Ruta Interbalnearia a un sospechoso que en un primer momento dijo llamarse... cuya vinculación con el homicidio parecía confusa en primera instancia... conocida la afiliación del mismo circuló la versión de que... había dado una identidad falsa y que era, en realidad, un extremista buscado por la policía... Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/antonio-fernandez/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/antonio-fernandez/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("November 27, 1969 03:24:00"),
        title: "NUEVA VÍCTIMA DEL EXTRAVÍO",
        description: `Los policías se llevan ya el cuerpo del compañero caído, acribillado con más de diez balazos... Afuera, la modesta bicicleta de las recorridas y la gorra, símbolo del poder que todos le conferimos, son mudos testigos del drama. Su nombre pasará a engrosar la larga lista de los “caídos cumpliendo con su deber” y, quizá, con el tiempo, hasta sea olvidado. Los que no olvidarán son los cuatro pequeños que allá, en la humilde casa de Pando, esperan en vano a su padre... Aparece foto.`,
        title1: `ALEVOSAMENTE FUE ASESINADO UN POLICÍA EN LA ZONA DE EL PINAR`,
        description1: `Fugaron los matadores; un detenido. En forma alevosa y criminal un modesto agente de 2ª..., fue muerto de más de 10 balazos por dos extremistas a los que pidió documentos. El hecho ocurrió en la entrada del balneario El Pinar,... Aparece foto del agente asesinado.`,
        images: [
          {
            type: "noticia publicada",
            src: "/antonio-fernandez/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/antonio-fernandez/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("November 27, 1969 03:24:00"),
        title: "EXTREMISTA DETENIDO Y OTROS DOS QUE ESTÁN IDENTIFICADOS",
        description: `Un modesto y bien conceptuado agente de policía de la comisaría de Shangrilá..., fue asesinado ayer en forma alevosa por dos pistoleros extremistas que lograron huir-aunque aparentemente ya estarían identificados-recibiendo en su cuerpo entre 9 y 13 proyectiles... Cerca de la hora 12 el agente de 2ª Antonio Fernández Rodríguez... se encontraba en la Avenida de las Playas de ese balneario... a unos cien metros del Km. 28.500 de la Avda. Italia. El Agte. Fernández, casado de 42 años, padre de cuatro hijos menores... tras haber trabajado casi 24 horas en forma continua... Aparecen fotos y croquis.`,
        images: [
          {
            type: "noticia publicada",
            src: "/antonio-fernandez/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/antonio-fernandez/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("November 27, 1969 03:24:00"),
        title: "QUIEN ES Y QUE HIZO...",
        description: `... Fue detenido, se verificó su identidad y en la valija de la motoneta se encontraron un revólver, una cachiporra y varios panfletos editados por los “extremistas”... Al ser interrogado,... no negó su vinculación con el movimiento... Aparece foto de...`,
        images: [
          {
            type: "noticia publicada",
            src: "/antonio-fernandez/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/antonio-fernandez/n_6.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 22)',
        date: new Date("November 27, 1969 03:24:00"),
        title: "GIGANTESCO OPERATIVO CONTRA LOS DOS ASESINOS",
        description: `La policía identificó a los presuntos homicidas del agente Fernández que serían... Aparece foto de...`,
        images: [
          {
            type: "noticia publicada",
            src: "/antonio-fernandez/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/antonio-fernandez/n_8.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("November 27, 1969 03:24:00"),
        title: "EXTREMISTAS CON ORDEN DE TIRAR A MATAR",
        description: `... ha sido sindicado como autor de los once disparos que provocaron la muerte del infortunado agente, con ocho años de antigüedad en la policía, padre de cuatro hijos y uno en camino..., fue procesado a principio de año y liberado a los cuatro meses. En sus declaraciones dijo que ahora los extremistas tenían la orden de tirar a matar a la policía. Aparecen fotos a cuyo pie dicen: “Lamentos y un llanto desgarrante de las niñas...,... y..., tres de las hijas del policía, víctimas indirectas del extravío terrorista”.`,
        title1: `EL POLICÍA ESTABA FRANCO Y HABÍA PEDIDO PARA TRABAJAR`,
        description1: `Clima de indignación en el velatorio... Aparece foto.`,
        images: [
          {
            type: "noticia publicada",
            src: "/antonio-fernandez/n_9.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/antonio-fernandez/n_10.jpg",
            alt: "noticia publicada por el diario Acción",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Policía es asesinado por Terroristas en la vía pública",
        description:
          "Antonio Fernández, Agente de la Policía Nacional fue asesinado por Terroristas durante una inspección rutinaria de documentos.",
        images: [
          {
            src: "/antonio-fernandez/i_1.jpg",
            alt: "Agente Antonio Fernández inspecciona documentos de identidad a dos personas.",
          },
          {
            src: "/antonio-fernandez/i_2.jpg",
            alt: "Terrorista saca un arma y apunta al Agente Antonio Fernández.",
          },
          {
            src: "/antonio-fernandez/i_3.jpg",
            alt: "Terrorista asesina al Agente Antonio Fernández.",
          },
        ],
      },
    ],
    victims: [
      {
        info: {
          name: "Agente Antonio Fernández",
          age: 40,
          childs: 5,
          childsDescription: "menores de edad",
          marital: "casado",
          avatar: {
            src: "/antonio-fernandez/a.png",
            alt: "imagen de Agente Antonio Fernández",
          },
        },
      },
    ],
    virtualMemorial: [
      {
        src: "/antonio-fernandez/memorial.jpg",
        alt: "Aquí, en plena democracia, el 26/11/69 fue asesinado por Terroristas, Antonio Fernándex perteneciente a la Policía Nacional, de 40 años de edad, casado, cinco hijos menores de edad",
      },
    ],
  },
  {
    date: new Date("December 29, 1969 03:24:00"),
    title: "Manuel Tejera",
    slug: "manuel-tejera",
    type: "asesinatos",
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("December 30, 1969 03:24:00"),
        title: "HEROICO ACTO FRUSTRÓ ASALTO AL “COMERCIAL",
        description: `Asalto trágico: 1 muerto y 6 heridos. Ayer,... 10 hombres y una mujer penetraron en el Banco Comercial... exhibiendo armas... Un policía privado del Banco, Manuel Tejera Bovadilla... fue acribillado... otro funcionario policial y cinco clientes recibieron heridas... Los asaltantes se dieron a la fuga...`,
        title1: "NOS TIRAMOS AL SUELO PERO IGUAL NOS HIRIERON",
        description1:
          "... víctimas, inermes clientes, Washington Pastorino... se encontraba en la sucursal Cordón del Banco Comercial... -Yo sólo vi a cuatro muchachos y una chica... era el guardia Tejera, intentó resistirse y lo balearon a quemarropa...- Aparecen fotos y croquis de...",
        images: [
          {
            type: "noticia publicada",
            src: "/manuel-tejera/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/manuel-tejera/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("December 30, 1969 03:24:00"),
        title: "GRAN CONMOCIÓN POR UN ASALTO “DESESPERADO”",
        description: `... en plena zona céntrica y en una hora en que circulan por el lugar miles de personas, intentaron asaltar la Sucursal “Cordón” del Banco Comercial. La intentona se frustró por el arrojo de un policía interno del Banco pero murió éste, en su valiente demanda y seis personas más recibieron heridas...`,
        images: [
          {
            type: "noticia publicada",
            src: "/manuel-tejera/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/manuel-tejera/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Guardia de Seguridad asesinado por Terroristas",
        description:
          "Manuel Tejera, Retirado Policial y Guardia de Seguridad, es asesinado por Terroristas cuando asaltaban a una sucursal bancaria.",
        images: [
          {
            src: "/manuel-tejera/i_1.jpg",
            alt: "Terroristas amenazan a empleados y clientes en asalto a sucursal bancaria. Manuel Tejera se desempeña como Guardia de Seguridad.",
          },
          {
            src: "/manuel-tejera/i_2.jpg",
            alt: "Manuel Tejera intenta impedir la acción delictiva.",
          },
          {
            src: "/manuel-tejera/i_3.jpg",
            alt: "Manuel Tejera es abatido por los Terroristas.",
          },
          {
            src: "/manuel-tejera/i_4.jpg",
            alt: "Manuel Tejera yace herido de muerte, una clienta queda herida. Los Terroristas huyen.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/manuel-tejera/memorial.jpg",
        alt: "Aquí, en plena democracia, el 29/12/69 en un intento de robo a una sucursal bancaria fue asesinado por Terroristas, Manuel Tejera, de 61 años de edad, casado",
      },
    ],
    victims: [
      {
        info: {
          name: "Manuel Tejera",
          age: 61,
          marital: "casado",
          avatar: {
            src: "/manuel-tejera/a.png",
            alt: "imagen de Manuel Tejera",
          },
        },
      },
    ],
  },
  {
    date: new Date("February 12, 1970 03:24:00"),
    title: "Agente Alfredo Pallas",
    slug: "alfredo-pallas",
    type: "asesinatos",
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("February 13, 1970 03:24:00"),
        title: "CAEN 4 PELIGROSOS “REOS”; UN POLICÍA SUFRIÓ GRAVE HERIDA",
        description: `La detención, totalmente casual, se produjo en Cuchilla Alta, encontraron armas y explosivos. Tras un intenso... cruento tiroteo-cayó herido de gravedad un funcionario policial-fueron detenidos cuatro conspiradores, entre ellos una mujer... otro apareció repentinamente armado de una metralleta, hiriendo de un tiro a Pallas Cardozo... El que agredió al policía... se llama... sindicado como el que mató... al agente Fernández en El Pinar... estaban construyendo un túnel, poseían armas y bombas... Aparecen fotos de...`,
        images: [
          {
            type: "noticia publicada",
            src: "/alfredo-pallas/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/alfredo-pallas/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("February 13, 1970 03:24:00"),
        title: "A QUEMARROPA TIRÓ...  SOBRE LOS TRES POLICÍAS",
        description: `Ayer de mañana,... cayó gravemente herido un policía... en Cuchilla Alta ubicado a la altura del kilómetro 72 de la Ruta Interbalnearia... operaba, en una zona no determinada de Canelones, un transmisor clandestino...`,
        images: [
          {
            type: "noticia publicada",
            src: "/alfredo-pallas/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/alfredo-pallas/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("February 14, 1970 03:24:00"),
        title: "OTRA MUERTE A LA CUENTA ANTISOCIAL.",
        description: `... El infortunado agente había nacido con un solo riñón... Aparecen fotos`,
        images: [
          {
            type: "noticia publicada",
            src: "/alfredo-pallas/n_4.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/alfredo-pallas/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("February 14, 1970 03:24:00"),
        title:
          "... ADMITE QUE EFECTÚO DISPAROS CONTRA LOS POLICÍAS FERNÁNDEZ Y PALLAS.",
        description: `... El infortunado agente había nacido...confesó su directa participación en la muerte del agente de Shangrilá Antonio Fernández... sería el autor del enfrentamiento... provocaría la muerte del agente Pallas...`,
        images: [
          {
            type: "noticia publicada",
            src: "/alfredo-pallas/n_6.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/alfredo-pallas/n_7.jpg",
            alt: "noticia publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("February 17, 1970 03:24:00"),
        title: "CUATRO PROCESAMIENTOS Y DOS NUEVAS DETENCIONES.",
        description: `... procesó a los cuatro conspiradores... Los nuevos detenidos...`,
        images: [
          {
            type: "noticia publicada",
            src: "/alfredo-pallas/n_8.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/alfredo-pallas/n_9.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Alfredo Pallas, Agente de la Policía Nacional fue asesinado por terroristas.",
        description:
          "Alfredo Pallas, Agente de la Policía Nacional es asesinado por terroristas durante un operativo.",
        images: [
          {
            src: "/alfredo-pallas/i_1.jpg",
            alt: "Tres efectivos policiales se aprestan a inspeccionar una vivienda.",
          },
          {
            src: "/alfredo-pallas/i_2.jpg",
            alt: " Un efectivo policial solicita a los inquilinos los documentos de identidad para su control.",
          },
          {
            src: "/alfredo-pallas/i_3.jpg",
            alt: "Un terrorista que se ocultaba en otra habitación dispara sobre el Agente Pallas.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/alfredo-pallas/memorial.jpg",
        alt: "Aquí, en plena democracia, el 12/02/70 fue asesinado por Terroristas,el Agente Alfredo Pallas perteneciente a la Policia Nacional, de 25 años de edad, casado, un hijo menor de edad",
      },
    ],
    victims: [
      {
        info: {
          name: "Agente Alfredo Pallas",
          age: 25,
          childs: 1,
          childsDescription: " menor de edad",
          marital: "casado",
          avatar: {
            src: "/alfredo-pallas/a.png",
            alt: "imagen de Agente Alfredo Pallas",
          },
        },
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `“Tras un tiroteo que tuvo lugar el 12 de febrero en el balneario Cuchilla Alta, fue capturado otro de los viejos miembros de la organización, Tabaré Rivero Cedrés, el Ismael tupamaro. Fue detenido junto a su compañera, también integrante del MLN, Ana María Castagneto, y otros dos militantes, Yamandú Cabrera y Marcos Suárez. El agente Alfredo Pallas resultó muerto en el enfrentamiento...”.`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 441",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("April 13, 1970 03:24:00"),
    title: "Inspector Héctor Morán Charquero",
    slug: "hector-moran-charquero",
    type: "asesinatos",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 13)',
        date: new Date("April 13, 1970 03:24:00"),
        title: "NUEVE BALAZOS EN EL CADÁVER DEL INSPECTOR",
        description: `El lunes pasado habían intentado el crimen. Aparecen fotos de...`,
        images: [
          {
            type: "noticia publicada",
            src: "/hector-moran-charquero/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/hector-moran-charquero/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("April 14, 1970 03:24:00"),
        title: "EL INSPECTOR MORÁN CHARQUERO ACRIBILLADO POR CONSPIRADORES.",
        description: `Con tres autos robados se cumplió el salvaje operativo... integraría el grupo autor del crimen... Aparecen fotos de...`,
        images: [
          {
            type: "noticia publicada",
            src: "/hector-moran-charquero/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/hector-moran-charquero/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("April 14, 1970 03:24:00"),
        title:
          "MORÁN CHARQUERO EMBOSCADO EN EL PARQUE RODÓ Y ACRIBILLADO A BALAZOS.",
        description: `El auto que guiaba el Inspector asesinado recibió 18 proyectiles: elementos conjurados son responsables del atentado... Aparecen fotos y croquis de...`,
        images: [
          {
            type: "noticia publicada",
            src: "/hector-moran-charquero/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/hector-moran-charquero/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("April 14, 1970 03:24:00"),
        title: "CON UNA METRALLETA LUGGER Y UN COLT, LO ACRIBILLARON.",
        description: `... se hicieron contra el Inspector Morán Charquero por lo menos 18 disparos. De esas balas, 17 pertenecen a una metralleta “Lugger”... y varios disparos con un revólver de calibre 38, posiblemente marca “Colt”... Las heridas principales que presenta el cuerpo indican que Morán Charquero fue alcanzado por diez o doce proyectiles... uno de los asesinos,... le hizo los disparos que lo remataron... fue rematado por una ráfaga de ametralladora...`,
        title1: `USARON UNA CAMIONETA Y DOS TAXIS ROBADOS.`,
        description1: `Tres secuestros a los conductores de los vehículos robados en la madrugada de ayer... dos taxis y una camioneta tipo “pick-up” pautaron... el comienzo de una jornada de singular violencia en la que dichas unidades tuvieron una participación importante...`,
        title2: `NOVENA VÍCTIMA DEL EXTRAVÍO`,
        description2: `...Como consecuencia de esos enfrentamientos, antes de la muerte del Inspector Héctor Morán Charquero, ocho funcionarios policiales cayeron, víctimas de la vileza de los sediciosos. Salvo la instancia relacionada con el asesinato del guardia Carlos Zambrano, no había existido sin embargo en todas esas muertes, la premeditación y alevosía expuestas ayer en el curso de la fatal emboscada y agresión... Aparecen fotos de...`,
        images: [
          {
            type: "noticia publicada",
            src: "/hector-moran-charquero/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/hector-moran-charquero/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 5)',
        date: new Date("April 14, 1970 03:24:00"),
        title: "FUE UTILIZADA UNA METRALLETA COMO LAS DE LA METROPOLITANA.",
        description: `... Más de treinta disparos se efectuaron contra el Opel de Morán, alrededor de diez de los cuales alcanzaron al Jerarca. Por lo menos uno de ellos fue realizado por un revólver y los demás por una metralleta similar a las que usa la Metropolitana... Aparecen fotos y croquis de...`,
        images: [
          {
            type: "noticia publicada",
            src: "/hector-moran-charquero/n_5.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/hector-moran-charquero/n_5.jpg",
            alt: "noticia publicada por el diario 'El Popular'",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 2 y 3)',
        date: new Date("April 15, 1970 03:24:00"),
        title:
          "NO HABÍA ESCAPATORIA POSIBLE EN LA EMBOSCADA AL INSPECTOR MORÁN.",
        description: `Exclusivo: reconstrucción del crimen. Aparecen fotos con la secuencia del asesinato.`,
        images: [
          {
            type: "página diario completa",
            src: "/hector-moran-charquero/n_6.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/hector-moran-charquero/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Oficial de Policía asesinado por comando sedicioso.",
        description:
          "El Inspector Héctor Morán Charquero fue asesinado luego de ser perseguido por sediciosos que se desplazaban en vehículos.",
        images: [
          {
            src: "/hector-moran-charquero/i_1.jpg",
            alt: "El Inspector Héctor Morán Charquero conduce su auto perseguido por sediciosos.",
          },
          {
            src: "/hector-moran-charquero/i_2.jpg",
            alt: "Sediciosos asesinan al Inspector Morán Charquero en plena marcha de sus vehículos.",
          },
          {
            src: "/hector-moran-charquero/i_3.jpg",
            alt: "Inspector Morán Charquero es rematado por sediciosos.",
          },
        ],
      },
    ],
    victims: [
      {
        info: {
          name: "Inspector Héctor Morán Charquero",
          age: 47,
          daughter: 1,
          marital: "casado",
          avatar: {
            src: "/hector-moran-charquero/a.png",
            alt: "imagen de Inspector Héctor Morán Charquero",
          },
        },
      },
    ],
    virtualMemorial: [
      {
        src: "/hector-moran-charquero/memorial.jpg",
        alt: "Aquí, en plena democracia, el 13/04/70 fue asesinado por integrantes del MLN-T, Héctor Morán Charquero, Inspector de la Policia Nacional, de 47 años de edad, casado, una hija",
      },
    ],
  },
  {
    date: new Date("June 11, 1970 03:24:00"),
    title: "Agente Nelson Sosa",
    slug: "nelson-sosa",
    type: "asesinatos",
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("June 11, 1970 03:24:00"),
        title: "EN ALEVOSA VENGANZA, SEDICIOSOS HIEREN GRAVEMENTE A POLICÍA",
        description: `... Anoche, se consumó una inaudita y alevosa agresión contra un modesto agente de policía que en estos momentos se debate entre la vida y la muerte alcanzado por un disparo de arma de fuego en la cabeza. El agente se llama Nelson Simbad Sosa... Aparece foto de...`,
        images: [
          {
            type: "noticia publicada",
            src: "/nelson-sosa/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/nelson-sosa/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("June 12, 1970 03:24:00"),
        title: "LOS SEDICIOSOS TOMARON UNA SANGRIENTA REVANCHA",
        description: `Era intervenido quirúrgicamente,... en el Hospital de Clínicas el agente Nelson Simbad Sosa, de 28 años de edad, herido gravemente en la cabeza anoche, en un atentado cuyos responsables son aparentemente conspiradores Aparece foto a cuyo pie dice: “Este el agente Nelson Sosa, baleado anoche por elementos sediciosos...”. Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/nelson-sosa/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/nelson-sosa/n_4.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("February 01, 1971 03:24:00"),
        title:
          "UN POLICÍA MURIÓ HOY DESPUÉS DE HABER SIDO HERIDO POR TUPAMAROS MESES ATRÁS",
        description: `...`,
        images: [
          {
            type: "noticia publicada",
            src: "/nelson-sosa/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/nelson-sosa/n_6.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("February 01, 1971 03:24:00"),
        title: "HERIDO EN JUNIO MURIÓ HOY UN AGENTE POLICIAL",
        description: `Dejó de existir hoy... el Agente de Seguridad Nelson Simbad Sosa, que... fuera baleado por tupamaros... Tras siete meses de luchar entre la vida y la muerte, el infortunado policía... dejó de existir... Aparece foto.`,
        images: [
          {
            type: "noticia publicada",
            src: "/nelson-sosa/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/nelson-sosa/n_8.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Policía en acto de servicio es asesinado por Terroristas",
        description:
          "Nelson Sosa, Agente de la Policía Nacional fue asesinado por un terrorista para robarle su arma de reglamento.",
        images: [
          {
            src: "/nelson-sosa/i_1.jpg",
            alt: "Terroristas mantienen diálogo con el Agente Nelson Sosa en el exterior de un kiosco policial.",
          },
          {
            src: "/nelson-sosa/i_2.jpg",
            alt: "Terrorista le dispara un tiro en la cabeza al Agente Nelson Sosa.",
          },
          {
            src: "/nelson-sosa/i_3.jpg",
            alt: "Terrorista se apodera del arma de reglamento estando el Agente Nelson Sosa herido de muerte.",
          },
        ],
      },
    ],
    victims: [
      {
        info: {
          name: "Agente Nelson Sosa",
          age: 28,
          marital: "soltero",
          avatar: {
            src: "/nelson-sosa/a.png",
            alt: "imagen del Agente Nelson Sosa",
          },
        },
      },
    ],
    virtualMemorial: [
      {
        src: "/nelson-sosa/memorial.jpg",
        alt: "Aquí, en plena democracia, el 11/06/70 fue asesinado por terroristas, Nelson Sosa perteneciente a la Policia Nacional, de 28 años de edad, soltero.",
      },
    ],
  },
  {
    date: new Date("July 04, 1970 03:24:00"),
    title: "Agente Armando Leses",
    slug: "armando-leses",
    type: "asesinatos",
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("July 05, 1970 03:24:00"),
        title: "UN POLICÍA FUE VILMENTE ASESINADO Y 4 HERIDOS",
        description: `Un policía fue asesinado y otros cuatro heridos de gravedad, en una serie de violentos episodios que... en medio del asombro, la estupefacción y la justísima indignación de la opinión pública... Leses... no intervino en ningún hecho relacionado con represión de los sediciosos. Hace dos meses que efectuaba la custodia frente a la casa del Sr. Agosto y, por su humildad y corrección se había granjeado la buena voluntad del vecindario. Aparecen fotos a cuyo pie dicen: “Armando Leses, el policía asesinado”, “Luis A. Garín herido frente a TEM”, “Guillermo Canacafúa herido” y “Esta vecina... narra-aún bajo la angustia de la escena vivida-como los criminales atacaron al agente Armando Leses”.`,
        images: [
          {
            type: "noticia publicada",
            src: "/armando-leses/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/armando-leses/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("July 05, 1970 03:24:00"),
        title: "UN POLICÍA FUE...",
        description: `(viene de la pág. 1)... Este sangriento episodio, tan insólito y miserable, fue seguido-menos de diez minutos después-por otro, tan sanguinario y cobarde como aquel...`,
        images: [
          {
            type: "noticia publicada",
            src: "/armando-leses/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/armando-leses/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("July 05, 1970 03:24:00"),
        title: "A SANGRE FRÍA ASESINARON A UN POLICÍA, PADRE DE CUATRO HIJOS",
        description: `El sedicioso..., que está moribundo, integraba la banda que atentó contra 9 Agentes... Aparecen fotos a cuyo pie dicen: “Estos son los cuatro policías heridos, dos de ellos de suma gravedad, durante los seis atentados de la víspera...”. Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/armando-leses/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/armando-leses/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("July 05, 1970 03:24:00"),
        title:
          "DIEZ POLICÍAS HAN CAÍDO, HASTA EL DÍA DE HOY, ASESINADOS POR LOS SEDICIOSOS",
        description: `Diez funcionarios policiales muertos, otros dos con heridas gravísimas y más de treinta agentes desarmados y agredidos con lesiones leves, es el saldo de alevosos atentados y enfrentamientos perpetrados desde su origen por el grupo delictivo que actúa en la clandestinidad contra los agentes del orden. La lista... Terrorismo en las calles. Los hechos que anoche conmovieron diversas zonas de la ciudad con una secuela de heridos y un muerto, tienen antecedentes... Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/armando-leses/n_6.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/armando-leses/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (en Portada)',
        date: new Date("July 05, 1970 03:24:00"),
        title: "POLICÍAS BALEADOS; UNO MUERTO, 4 HERIDOS",
        description: `...`,
        images: [
          {
            type: "noticia publicada",
            src: "/armando-leses/n_8.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/armando-leses/n_9.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 3)',
        date: new Date("July 05, 1970 03:24:00"),
        title: "ATAQUES A 8 POLICÍAS EN SEIS LUGARES",
        description: `Un agente de seguridad resultó muerto por una ráfaga de metralleta, otros dos heridos, al igual que dos coraceros de la Republicana...`,
        images: [
          {
            type: "noticia publicada",
            src: "/armando-leses/n_10.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/armando-leses/n_11.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 13)',
        date: new Date("July 12, 1970 03:24:00"),
        title:
          "LOS SEDICIOSOS LLEVARON ANOCHE LA VIOLENCIA A LOS HOGARES DE CUATRO AGENTES POLICIALES",
        description: `... intentaron inútilmente sembrar pánico entre los familiares... los sediciosos señalaron a los familiares que se trataba de allanamientos en represalia a los que efectúa la policía...`,
        images: [
          {
            type: "noticia publicada",
            src: "/armando-leses/n_12.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/armando-leses/n_13.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Armando Leses, Agente de la Policía Nacional fue asesinado por Terroristas",
        description:
          "Armando Leses, Agente de la Policía Nacional fue asesinado por terroristas cuando cumplía servicio de custodia en el domicilio de un jerarca del Poder Ejecutivo.",
        images: [
          {
            src: "/armando-leses/i_1.jpg",
            alt: "Armando Leses es baleado por Terroristas en la vía pública. Cumplía su servicio de guardia para un jerarca ministerial.",
          },
          {
            src: "/armando-leses/i_2.jpg",
            alt: "Herido de muerte el Agente Armando Leses busca auxilio en un comercio de la zona.",
          },
          {
            src: "/armando-leses/i_3.jpg",
            alt: "Una clienta intenta sin éxito brindarle auxilio. El Agente Armando Leses fallece en el lugar.",
          },
        ],
      },
    ],
    victims: [
      {
        info: {
          name: "Agente Armando Leses",
          age: 38,
          marital: "casado",
          childs: 2,
          childsDescription: "menores de edad",
          avatar: {
            src: "/armando-leses/a.png",
            alt: "imagen del Agente Armando Leses",
          },
        },
      },
    ],
    virtualMemorial: [
      {
        src: "/armando-leses/memorial.jpg",
        alt: "Aquí, en plena democracia, el 04/07/70 fue asesinado por terroristas, el Agente Armando Leses perteneciente a la Policia Nacional, de 38 años de edad, casado, dos hijos menores de edad.",
      },
    ],
  },
  {
    date: new Date("August 09, 1970 03:24:00"),
    title: "Dan Mitrione",
    slug: "dan-mitrione",
    type: "asesinatos",
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("August 10, 1970 03:24:00"),
        title:
          "IMPRESIONANTE DESAFÍO: VILMENTE FUE MUERTO EL NORTEAMENICANO MITRIONE",
        description: `Vendado, recibió dos balazos en la sien... apareció el cuerpo del infortunado Dan A. Mitrione, asesinado de un balazo en la cabeza... en el interior de un automóvil hurtado anoche.. Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("August 10, 1970 03:24:00"),
        title: "ESTABA VENDADO Y ESPOSADO CUANDO SE LE SACRIFICÓ",
        description: `... El cuerpo estaba... semicubierto por una frazada liviana de color celeste y vestido sumariamente... mostraba barba crecida... Sobre el lado derecho del abdomen presenta un hematoma, ya en recuperación, pero muy amplio y se presume que se debió a un golpe que le fue aplicado en el momento del secuestro... En torno a ambas muñecas aparecieron marcas rojizas e incluso despellejaduras que indican claramente que permaneció esposado muchas horas, quizás días. El tipo de señales indican que las esposas usadas para maniatarle no son las que usan la policía, sino posiblemente cadenillas de alambre, rústicas. Al cerrar esta edición se procedía a examinar el cuerpo... Aparecen fotos y croquis.`,
        title1: `VENDADO, RECIBIÓ DOS BALAZOS EN LA SIEN`,
        description2: `... Al revisar el cadáver se comprobó, que, además de la vieja herida en el pecho, ocasionada durante su secuestro, tenía otra cerca y una tercera mortal, en la cabeza, a la altura del parietal derecho...`,
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 6)',
        date: new Date("August 10, 1970 03:24:00"),
        title: "ANTE EL CRUEL Y REPUGNANTE ASESINATO",
        description: `... nada cabía esperar sino lo que sucedió, de una organización que no ha vacilado otras veces en asesinar a sangre fría y premeditadamente no sólo a jerarcas, sino que también a modestísimos funcionarios policiales. Los extremistas nos han salpicado a todos con los torrentes de sangre inocente que han derramado, y por eso en estos momentos no caben terceras posiciones. O se está contra o con el país... Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione/n_3.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 8)',
        date: new Date("August 10, 1970 03:24:00"),
        title: "EL CADÁVER DE DAN MITRIONE FUE ENCONTRADO EN UN COCHE",
        description: `Ultimado de cuatro balazos (dos en la cabeza, uno en la espalda y otro en el tórax), amordazado y con los ojos cubiertos por gasas, hallaron... Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione/n_4.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("August 11, 1970 03:24:00"),
        title: "MITRIONE FUE ASESINADO CERCA DE LAS 22 Y CON EL AUTO EN MARCHA",
        description: `Ultimado de cuatro balazos (dos en la cabeza, uno en la espalda y otro en el tórax), amordazado y con los ojos cubiertos por gasas, hallaron... Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione/n_5.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 2)',
        date: new Date("August 11, 1970 03:24:00"),
        title: "DENTRO DE UN AUTO SE ENCONTRÓ A MITRIONE",
        description: `... Presentaba cuatro balazos recientes y bajo un vendaje hecho con total pulcritud, apareció la herida de bala recibida en el pecho cuando su secuestro, que ya comenzaba a cicatrizar... Aparecen fotos de...`,
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione/n_6.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione/n_7.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("March 20, 1973 03:24:00"),
        title: `RECONSTRUYEN EL “CASO MITRIONE"`,
        description: `Ultimado de cuatro balazos (dos en la cabeza, uno en la espalda y otro en el tórax), amordazado y con los ojos cubiertos por gasas, hallaron... Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione/n_8.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione/n_9.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Funcionario norteamericano asesinado por sediciosos",
        description:
          "El Sr. Dan Mitrione fue secuestrado violentamente el 31 de julio de 1970. Una semana después, esposado y con los ojos vendados fue ejecutado.",
        images: [
          {
            src: "/dan-mitrione/i_1.jpg",
            alt: "Comando sedicioso secuestra y traslada en vehículo a Dan Mitrione.",
          },
          {
            src: "/dan-mitrione/i_2.jpg",
            alt: "Sediciosos deliberan ejecución de Dan Mitrione.",
          },
          {
            src: "/dan-mitrione/i_3.jpg",
            alt: "Mitrione es trasladado desde su cautiverio para su ejecución.",
          },
          {
            src: "/dan-mitrione/i_4.jpg",
            alt: "Mitrione es introducido en el vehículo donde será ejecutado.",
          },
          {
            src: "/dan-mitrione/i_5.jpg",
            alt: "Mitrione es asesinado, esposado y con los ojos vendados.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/dan-mitrione/memorial.jpg",
        alt: "Aquí, en plena democracia, el 09/08/70 fue asesinado por terroristas, el ciudadano extranjero Daniel Mitrione, de 50 años de edad, casado, 9 hijos (5 menores de edad).",
      },
    ],
    victims: [
      {
        info: {
          name: "Daniel (Dan) A. Mitrione",
          nationality: "Norteamericano",
          age: 50,
          marital: "casado",
          childs: 9,
          childsDescription: "(5 menores de edad)",
          avatar: {
            src: "/dan-mitrione/a.png",
            alt: "imagen del Agente Armando Leses",
          },
        },
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p class='font-extrabold'>“SÁBADO 8 DE AGOSTO La impaciencia revolucionaria</p>
          <p class='font-bold'>12.00 horas. Jacinto Vera</p>
          <p>Veinticuatro horas después de las capturas de Almería, los tupamaros del nuevo ejecutivo y las direcciones intermedias se reunieron en una casa del barrio Jacinto Vera... La suerte de Mitrione se decidió allí, a pocas cuadras de la Escuela MiIlitar...<p>
          <p>Según recuerda Mauricio Rosencof, “el sábado 8, en una casa de la columna Diez, en Garibaldi y Guadalupe, se reunió la nueva dirección de Mansilla, Blixen y demás... Se me pidió opinión sobre qué hacer... Algunos propusieron que se ejecutaran también los otros dos secuestrados, si no se accedía a la liberación de los presos. Yo dije que era necesario manejarnos con cautela y no tomar medidas que no tenían vuelta. Que había que aguantar el chaparrón, mantener a los detenidos en la cárcel del pueblo y después ver lo que se hacía. Pero no fue la opinión de la mayoría”.</p>
          <p>Por ello, señala Rosencof, “no es cierto que la decisión de la muerte de Mitrione la tomó el comando de la Quince... Simplemente la cumplió. Hubo una consulta con todos los comandos de columna, y a partir del resultado, se tomó la decisión”.</p>
          <p>Manuel Marx Menéndez, por el contrario, no cree que haya habido consultas. “A mí no me consultaron. Dónde se ha visto que se hagan consultas en una organización clandestina.”</p>
          <p>De hecho, la muerte de Mitrione fue decidida por votación por un conjunto de tupamaros que pensaban que sus proyectos iniciales habían fracasado. Recuerda Jessie Macchi, por entonces comando de la columna del Interior y participante de la reunión de Jacinto Vera: “Tomamos la decisión de ejecutarlo porque el gobierno había rechazado a negociar...”.</p>
          <p>Al concluir la consulta entre los comandos de columna, la dirección escribió el Comunicado 9, con el que anunciaba la sentencia de muerte.</p>
          <p class='font-extrabold mt-4'>DOMINGO 9 DE AGOSTO Las últimas horas de Mitrione</p>
          <p class='font-bold'>13.30 horas. Oeste de Montevideo, automóvil de Henry Engler</p>
          <p>Los tres estudiantes que ocupaban el comando de la columna Quince, Engler, Wolf y Blanco Katras, se dieron cita en las primeras horas de la tarde en una calle de Montevideo para tomar una decisión. “Es que no había otra cosa”. Recuerda Wolf. “Primero cae Almería...”... Aparece Blixen y me dice: “en la dirección estamos Mansilla, Marxito y yo”. Pero enseguida caen y el MLN se queda sin dirección. En la tarde del 9 de agosto, nos reunimos los tres, en condiciones muy precarias, en el coche del “Lanzallamas” –así le decíamos a Engler– para discutir. Tomamos la decisión. Engler, que era el comando del sector militar, dijo: “yo tengo gente que puede encargarse”.</p>
          <p>Recuerda Wolf...: “Se había que el plazo era para tal día y que si no se aceptaba iba a ser fusilado. Cuando nos quedamos sin dirección, nos atuvimos a la letra del comunicado”...“El comando de la Quince tenía la responsabilidad, porque era la columna que tenía secuestrado a Mitrione... Si no se cumplía, se perdía credibilidad”.</p>
          <p class='font-bold'>20.00 horas. Dulcinea y Larrañaga</p>
          <p>En las primeras horas de la noche, Jorge Washington Pérez, un joven de 21 años que conducía un Buick convertible de 1948, se detuvo en la estación de servicio ubicada en Constituyente y Carlos Roxlo y cargó nafta... Siguió su camino rumbo a la Unión..., en la intersección de Larrañaga y Dulcinea se detuvo... se le acercaron dos hombres jóvenes: “Somos tupamaros y necesitamos tu auto para hacer unos mandados”... Tomaron por Propios... En las inmediaciones de Canstatt un tupamaro se marchó con el Buick y el otro descendió con Pérez. Caminaron aproximadamente una hora. A las 22.00 Pérez fue dejado en libertad...</p>
          <p class='font-bold'>21.00 horas Cárcel del pueblo</p>
          <p>“Lo pasaron a buscar de noche, tarde”, recuerda “Felipe”. “No fue de madrugada”.</p>
          <p>“Se lo llevaron en un auto azul metalizado, legal”, señala Espinosa. En ese automóvil habían ingresado al garage dos tupamaros… “Mitrione murió entre las 21.30 y 22.00 del 9 de agosto. Estoy seguro que lo vinieron a buscar alrededor de las 21.00. Seguramente fue antes de las 23.00. La hora la había determinado yo, porque en mi casa podían hacerse movimientos hasta las 23.00...”.</p>
          <p>Espinosa escuchó la explicación que los custodios dieron a Mitrione. No recuerda si le hablaron solamente de un traslado o una próxima liberación.</p>
          <p>Dijeron que debían dormirlo y vendarlo para que no advirtiera donde estaba ni donde lo llevaban... Cubrieron sus ojos con algodón y varias tiras de gasa...</p>
          <p>“Nos dijeron de prepararlo para que se lo llevasen” recuerda José. “Se le dio una inyección de sedante… Se durmió y sabemos que no despertó”.</p>
          <p>“Creo recordar que vino un auto a buscarlo. Lo bajamos al garaje y lo metimos en él…. Uno de los custodios salió del local con las armas y se las entregó a quien se encargó de ejecutarlo. Más tarde nos dijeron que al disparar dentro del auto el compañero que lo hizo gritó: “Por Vietnam”...</p>
          <p>“Eligieron el barrio Puerto Rico porque estaba a pocos minutos de casa”. Recuerda Espinosa...</p>
          <p>En el Pontiac azul salieron tres tupamaros, los dos que habían entrado a la casa poco antes y uno de los custodios. En una calle del Puerto Rico trasladaron a Mitrione al Buick. El custodio se marchó en el Pontiac. En Ocho de Octubre y Corrales, los ocupantes del Buick –Antonio Mas Mas y Aurelio Sergio Fernández Peña– recogieron a Esteban Jorge Pereira Mena, responsable del grupo. “Dos de nosotros disparamos. Al hacerlo, dijimos: “Por América Latina, por sus muertos y torturados, por su liberación, su independencia”. Mitrione estaba dormido, pero en el momento en que recibió el balazo en el pecho, escuchamos un débil quejido.</p>
          <p>Uno de los textos de mayor difusión fue el “Reportaje a Urbano”... Urbano era Mauricio Rosencof. La entrevista fue realizada en setiembre de 1970 por Ernesto González Bermejo, en la casa de Malvín del escribano Luis Martirena.</p>
          <p>“En un principio la situación era un simple canje como los que se produjeron en otros países de América Latina”, señalaba Rosencof... “Es a partir de ese estado de crisis en el poder, de dos tendencias visibles en el gobierno, los partidarios del canje y los “duros”, que el Movimiento emite un comunicado dando plazo… Simultáneamente reforzamos nuestras propias posiciones con un tercer secuestro: el de Fly... Pienso que la respuesta negativa al canje y el haber dictado de hecho sentencia sobre Mitrione (porque la sentencia sobre Mitrione antes que la dictáramos nosotros la dictó el gobierno y la embajada norteamericana)...</p>
          <p>... Si el MLN no hubiera cumplido con su propia sentencia, señalaba “Urbano”, el método de los secuestros para obtener la liberación de prisioneros hubiera perdido eficacia”...</p>
          <p>En un plano más personal, así reflexiona, 30 años después de aquellos sucesos, Rodolfo Wolf, uno de los tupamaros que intervino en la última decisión:...: “... La guerrilla es una forma de guerra. Por lo tanto, los ajusticiamientos los veíamos dentro de ese marco...”.</p>
          <p>“Tratábamos a los secuestrados de modo “humanitario”, en el sentido que no se los torturaba. Pero no le garantizábamos el derecho a un juicio imparcial, un abogado defensor y un juez”...”.</p>`,
          year: new Date("2007-1-1"),
          name: "El caso Mitrione",
          place: "Montevideo - Uruguay",
          edition: "Trilce Ediciones",
          pages: "págs. 233, 234, ,256, 257, 260, 262, y 362-365",
          author: "Aldrighi",
        },
        {
          fragment: `<p>"En la noche de ese domingo 9, los guerrilleros aplicaron un potente sedante al agente estadounidense, que lo durmió. Luego lo metieron en un auto, abrieron las puertas del garaje y subieron la rampa. Se internaron en las calles del muy oscuro barrio Puerto Nuevo: “Por América Latina, por sus muertos y torturados, por su liberación, su independencia”, proclamaron, y lo ejecutaron de cuatro balazos.</p>
          <p>Su cuerpo apareció al otro día en el interior de un Buick celeste y blanco, estacionado en la calle Lucas Moreno, a un kilómetro y medio de la “cárcel del pueblo” de la avenida Centenario...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 472",
          author: "Pernas",
        },
        {
          fragment: `<p class='font-extrabold'>“LUIS ALEMAÑY</p>
          <p class='italic'>¿Cuáles fueron las acciones del MLN que más aprobó y cuáles desaprobó?</p>
          <p>Las que se caracterizaban como propaganda armada. No las que me conmovían interiormente. La duda comenzó a presentarse con (Dan) Mitrione. Por cómo fue. Y por sentir que ese día se produjo un quiebre del MLN con la población. No por quién era, sino por las características del Uruguay. Ese día yo sentí el rechazo de la población a cómo se había dado la muerte”.</p>`,
          year: new Date("2009-1-1"),
          name: "Memorias de insurgencia. Historias de vida y militancia en el MLN-Tupamaros. 1965-1975.",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Banda Oriental S.R.L.",
          pages: "pág. 317, 319",
          author: "Aldrighi",
        },
        {
          fragment: `<p>“Pero con Mitrione no hubo acuerdo. Fue ejecutado y abandonado en un auto pocos días después. Su ejecución era parte del Plan Satán, que junto con las cárceles del pueblo implicaba la instalación de un sistema de justicia popular por el MLN en nombre del pueblo asalariado...”.</p>`,
          year: new Date("2007-1-1"),
          name: " Cero a la izquierda. Una biografía de Jorge Zabalza.",
          place: "Montevideo - Uruguay",
          edition: "Letraeñe Ediciones",
          pages: "pág. 93",
          author: "Leicht",
        },
      ],
    },
  },
  {
    date: new Date("August 19, 1970 03:24:00"),
    title: "Agente Nelson Machado",
    slug: "nelson-machado",
    type: "asesinatos",
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("August 20, 1970 03:24:00"),
        title: "UN POLICÍA FUE MUERTO LUEGO DE FRUSTRAR UN ASALTO DE FACCIOSOS",
        description: `Otro modesto funcionario policial inmoló ayer su vida, tras un enfrentamiento armado con delincuentes que intentaron asaltar una entidad bancaria. El trágico hecho se registró en el exterior e interior de la sucursal del Banco Comercial... y resultó víctima, el agente de 2ª Nelson Esteban Machado Carreño,... padre de cuatro hijos menores de edad... Aparece foto.`,
        images: [
          {
            type: "noticia publicada",
            src: "/nelson-machado/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/nelson-machado/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 18)',
        date: new Date("August 20, 1970 03:24:00"),
        title: "LOS ÚLTIMOS DISPAROS LOS RECIBIÓ ESTANDO YA CAÍDO",
        description: `Nelson Esteban Machado Carreño, el agente de segunda ultimado ayer de cinco balazos por conspiradores frente al Banco Comercial... Aparece foto.`,
        images: [
          {
            type: "noticia publicada",
            src: "/nelson-machado/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/nelson-machado/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("August 21, 1970 03:24:00"),
        title: "INHUMARON LOS RESTOS DEL AGENTE MACHADO",
        description: `Nuevamente la tarde montevideana pareció recogerse en silencio para despedir a un servidor de la sociedad, vilmente asesinado mientras la defendía... Aparece foto.`,
        images: [
          {
            type: "noticia publicada",
            src: "/nelson-machado/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/nelson-machado/n_6.jpg",
            alt: "noticia publicada por el diario El Día",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Policía es asesinado en intento de robo de sucursal bancaria",
        description:
          "Nelson Machado, Agente de la Policía Nacional fue asesinado por Terroristas cumpliendo servicio de guardia en una institución bancaria.",
        images: [
          {
            src: "/nelson-machado/i_1.jpg",
            alt: "En intento de robo de sucursal bancaria, sediciosos armados reducen al Agente Esteban Machado y otro policía.",
          },
          {
            src: "/nelson-machado/i_2.jpg",
            alt: "Agente Esteban Machado es baleado por un terrorista al intentar evitar el robo.",
          },
          {
            src: "/nelson-machado/i_3.jpg",
            alt: "En su huida, terrorista asesina al Agente Esteban Machado, herido en el suelo.",
          },
        ],
      },
    ],
    victims: [
      {
        info: {
          name: "Agente Esteban Machado",
          age: 34,
          marital: "casado",
          childs: 4,
          childsDescription: "menores de edad (1 de 6 meses)",
          avatar: {
            src: "/nelson-machado/a.png",
            alt: "imagen del Agente Esteban Machado",
          },
        },
      },
    ],
    virtualMemorial: [
      {
        src: "/nelson-machado/memorial.jpg",
        alt: "Aquí, en plena democracia, el 19/08/70 fue asesinado por terroristas, Nelson Machado perteneciente a la Policia Nacional, de 34 años de edad, casado, 4 hijos menores de edad.",
      },
    ],
  },
  {
    date: new Date("January 11, 1971 03:24:00"),
    title: "Cabo (Ministerio Interior) José Villalba",
    slug: "jose-villalba",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Cabo (Ministerio Interior) José Villalba",
          age: 31,
          marital: "soltero",
          avatar: {
            src: "/jose-villalba/a.png",
            alt: "imagen del Cabo José Villalba",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: "Diario “El Diario” (en Portada)",
        date: new Date("January 11, 1971 03:24:00"),
        title: "“LOS TUPAMAROS ASESINARON A MANSALVA UN AGENTE POLICIAL”",
        description: `... Aparecen fotos en una de las cuales a su pie dice: “... Los círculos y la flecha destacan varios de los impactos de bala...”.`,
        images: [
          {
            type: "noticia publicada",
            src: "/jose-villalba/n_1.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
          {
            type: "página diario completa",
            src: "/jose-villalba/n_2.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
        ],
      },
      {
        name: "Diario “El Diario” (Página 16)",
        date: new Date("January 11, 1971 03:24:00"),
        title: "“LO REMATARON EN EL SUELO CON CUATRO TIROS A QUEMARROPA”",
        description: `Un funcionario administrativo de la sección personal de la Jefatura de Policía de Montevideo, fue acribillado a balazos por un grupo de tupamaros... los sediciosos dejaron en el lugar panfletos con la siguiente inscripción: “Así pagan los delatores”...`,
        images: [
          {
            type: "noticia publicada",
            src: "/jose-villalba/n_3.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
          {
            type: "página diario completa",
            src: "/jose-villalba/n_4.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
        ],
      },
      {
        name: "Diario “El Día” (Página 3)",
        date: new Date("January 12, 1971 03:24:00"),
        title: "“ASOMBRO E INDIGNACIÓN POR EL ASESINATO DEL POLICÍA”",
        description: `Asombro, indignación y estupor ha causado el bárbaro asesinato de José Leandro Villalba, un modesto y ejemplar funcionario policial, acribillado a balazos... fue obra del grupo autodenominado “tupamaros” que, incluso no vaciló en dejar su huella tras la consumación del cobarde atentado abandonando en el lugar... varios panfletos con la estrella característica y la inscripción “Así pagan los delatores”... se refiere a un episodio ocurrido hace casi un año-el 23 de marzo de 1970- cuando en el café “La Gran Vía”... fueron apresados... Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/jose-villalba/n_5.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
          {
            type: "página diario completa",
            src: "/jose-villalba/n_6.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
        ],
      },
      {
        name: "Diario “Acción” (Página 2)",
        date: new Date("January 12, 1971 03:24:00"),
        title:
          "“GRAN DEMOSTRACIÓN DE DOLOR Y PESAR EN EL SEPELIO DEL POLICÍA MUERTO POR LA ESPALDA POR SEDICIOSOS”",
        description: `Este mediodía los restos del agente de Investigaciones José Leandro Villalba recibieron sepultura...`,
        images: [
          {
            type: "noticia publicada",
            src: "/jose-villalba/n_7.jpg",
            alt: "noticia publicada por el diario “Acción”",
          },
          {
            type: "página diario completa",
            src: "/jose-villalba/n_8.jpg",
            alt: "noticia publicada por el diario “Acción”",
          },
        ],
      },
      {
        name: "Diario “El Día” (Página 3)",
        date: new Date("January 13, 1971 03:24:00"),
        // title: "“ASOMBRO E INDIGNACIÓN POR EL ASESINATO DEL POLICÍA”",
        subtitle: " “Dolor Colectivo por el Asesinato del Joven Policía”",
        description: `... Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/jose-villalba/n_9.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
          {
            type: "página diario completa",
            src: "/jose-villalba/n_10.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Agente policial asesinado en venganza por denunciar reunión clandestina de sediciosos",
        description:
          "El Cabo José Villalba fue ejecutado en la vía pública por cuatro sediciosos.",
        images: [
          {
            src: "/jose-villalba/i_1.jpg",
            alt: "Cabo Villalba perseguido por cuatro sediciosos.",
          },
          {
            src: "/jose-villalba/i_2.jpg",
            alt: "Cabo Villalba es atacado por sediciosos armados.",
          },
          {
            src: "/jose-villalba/i_3.jpg",
            alt: "Cabo Villalba es asesinado por cuatro sediciosos armados.",
          },
          {
            src: "/jose-villalba/i_4.jpg",
            alt: "Sediciosos dejan panfletos junto al cuerpo del Cabo Villalba.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/jose-villalba/memorial.jpg",
        alt: "Aquí, en plena democracia, el 11/01/71 fue asesinado por integrantes del MLN-T, José Villalba, Cabo de la Policia Nacional, de 31 años de edad.",
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“El lunes 23 de marzo, Pepe llegó al bar de Larrañaga y Monte Caseros junto con Antonio Hermida, uno de sus compañeros que cumplía tareas de apoyo para ciertas acciones del MLN.</p>
          <p>Al ingresar, Mujica divisó un lugar bastante discreto, en un rincón del local, al lado de la peluquería. Allí se sentaron.
          ... Luego ingresaron otros dos militantes de logística, Walter Sanzo –responsable de la columna de servicios de la 10– y Tabaré Curbelo...</p>
          <p>El teléfono sonó en la mesa central de Jefatura de Policía de Montevideo... El hombre, que no se identificó, denunció:
          -¡Hay cuatro subversivos en el bar La Vía, en la esquina de Larrañaga y Monte Caseros! Están en la mesa del fondo, a la izquierda...”.<p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 447",
          author: "Pernas",
        },
        {
          fragment: `<p>“Setenta y dos horas después del secuestro de Jackson, a Mujica le llegó la noticia de que la columna 10, luego de meses de planificación, vigilancia y seguimiento, ejecutó de varios balazos a José Leandro Villalba, el cabo de policía que lo había delatado en el bar La Vía.</p>
          <p>A la medianoche del domingo 10, Villalba, de 31 años de edad, se despidió de sus amigos y se retiró de ese mismo bar de la calle Larrañaga. Caminó una cuadra por Monte Caseros, y al llegar a la esquina de Echeandía escuchó una voz:</p>
          <p>-¡Leandro Villalba!</p>
          <p>Al darse vuelta, recibió descargas desde varias pistolas de 45 milímetros. Y cayó muerto.</p>
          <p>Los tupamaros tiraron volantes sobre el cuerpo del policía. <em>“Así pagan los delatores”</em>, advertía bajo la estrella de cinco puntas con la “T” en el centro...”.</p>
          `,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 482",
          author: "Pernas",
        },
        {
          fragment: `<p>“También la persona que reconoció a José Mujica y otros integrantes del MLN en un bar y avisó a la Policía fue luego asesinada, como escarmiento.</p>
          <p>Mujica lo cuenta en la biografía que escribió Miguel Ángel Campodónico</p>
          <p>“Y bueno, estando en ese boliche preparando el operativo, de pronto entró una patrulla de la Republicana. Después, supimos que alguien había llamado por teléfono... Tiempo después, la organización supo quién había llamado y fue ajusticiado en la calle”...”.</p>`,
          year: new Date("2008-1-1"),
          name: "Historias tupamaras. Nuevos testimonios sobre los mitos del MLN",
          place: "Montevideo - Uruguay",
          edition: "Editorial Fin de Siglo",
          pages: "pág. 119.",
          author: "Haberkorn",
        },
      ],
    },
  },
  {
    date: new Date("April 21, 1971 03:24:00"),
    title: "Agente Gilberto Carballo",
    slug: "gilberto-carballo",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Agente Gilberto Carballo",
          age: 35,
          marital: "soltero",
          avatar: {
            src: "/gilberto-carballo/a.png",
            alt: "imagen del Agente Gilberto Carballo",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: "Diario “El Diario” (en Portada)",
        date: new Date("April 22, 1971 03:24:00"),
        title: "“LOS ASESINOS DEL POLICÍA SEMBRARON SANGRE Y TERROR”",
        description: `... Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/gilberto-carballo/n_1.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
          {
            type: "página diario completa",
            src: "/gilberto-carballo/n_2.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
        ],
      },
      {
        name: "Diario “El Diario” (Página 16)",
        date: new Date("April 22, 1971 03:24:00"),
        title: "“UN NIÑO QUE JUGABA ESCAPÓ POR MILAGRO DE LA LLUVIA DE BALAS”",
        description: `Un grupo de conspiradores sembró muerte, sangre y terror ayer a media tarde, cuando desde una camioneta en marcha ametralló... un funcionario de 35 años muerto... otro gravemente herido y dos particulares seriamente lesionados. Un niño de tres años salvó milagrosamente su vida... Aparece foto.`,
        images: [
          {
            type: "noticia publicada",
            src: "/gilberto-carballo/n_3.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
          {
            type: "página diario completa",
            src: "/gilberto-carballo/n_4.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
        ],
      },
      {
        name: "Diario “El Día” (en Portada)",
        date: new Date("April 22, 1971 03:24:00"),
        title: "“INDEFENSO FUE ASESINADO UN POLICÍA; OTRO MUY GRAVE”",
        description: `...`,
        images: [
          {
            type: "noticia publicada",
            src: "/gilberto-carballo/n_5.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
          {
            type: "página diario completa",
            src: "/gilberto-carballo/n_6.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
        ],
      },
      {
        name: "Diario “El Día” (Página 3)",
        date: new Date("April 22, 1971 03:24:00"),
        title:
          "“POR AZAR NO HUBO OTRAS VÍCTIMAS EN EL BÁRBARO ATAQUE TERRORISTA”",
        description: `... el vil y criminal atentado contra tres funcionarios de la Policía Metropolitana se produjo a las 16 y 20... un modesto funcionario de la Metropolitana- agente que se desempeñaba como chofer-... Según vecinos del lugar una ráfaga de metralleta hizo impacto en la pared de una casa a muy pocos centímetros de una niña de seis años... Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/gilberto-carballo/n_7.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
          {
            type: "página diario completa",
            src: "/gilberto-carballo/n_8.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Policía es asesinado por Terroristas en acto de servicio.",
        description:
          "Gilberto Carballo, Agente de la Policía Nacional fue asesinado por Terroristas durante el patrullaje en la vía pública.",
        images: [
          {
            src: "/gilberto-carballo/i_1.jpg",
            alt: "Sediciosos en camioneta se aproximan a vehículo policial en marcha.",
          },
          {
            src: "/gilberto-carballo/i_2.jpg",
            alt: "Sediciosos disparan contra los Agentes Gilberto Carballo, conductor y Lisandro López.",
          },
          {
            src: "/gilberto-carballo/i_3.jpg",
            alt: "Vehículo policial con agentes heridos, impacta contra otro vehículo lesionando a sus ocupantes.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/gilberto-carballo/memorial.jpg",
        alt: "Aquí, en plena democracia, el 21/014/1971 fue asesinado por terroristas, Gilberto Carballo perteneciene a la Policia Nacional, de 35 años de edad.",
      },
    ],
  },
  {
    date: new Date("June 03, 1971 03:24:00"),
    title: "Agente Aides Pérez",
    slug: "aides-perez",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Agente Aides Pérez",
          age: 42,
          childs: 5,
          childsDescription: "(3 menores de edad)",
          // marital: "soltero",
          avatar: {
            src: "/aides-perez/a.png",
            alt: "imagen del Agente Aides Pérez",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: "Diario “Acción” (en Portada)",
        date: new Date("June 03, 1971 03:24:00"),
        title: "“BRUTAL CRIMEN: ACRIBILLAN AUTO Y MATAN A UN POLICÍA”",
        description: `El guardia de la Metropolitana Aidis Pérez fue bárbaramente asesinado esta mañana. Dos ráfagas de metralleta fueron disparadas desde una motoneta ocupada por dos hombres jóvenes,... Saravia resultó herido de entidad y corre el riesgo que se le ampute el brazo izquierdo. Aparece foto.`,
        images: [
          {
            type: "noticia publicada",
            src: "/aides-perez/n_1.jpg",
            alt: "noticia publicada por el diario “Acción”",
          },
          {
            type: "página diario completa",
            src: "/aides-perez/n_2.jpg",
            alt: "noticia publicada por el diario “Acción”",
          },
        ],
      },
      {
        name: "Diario “Acción” (Página 8)",
        date: new Date("June 03, 1971 03:24:00"),
        title: "“BRUTAL ASESINATO DE UN POLICÍA”",
        description: `... Tenía 42 años y cinco hijos... El mayor tiene, en suma, 20 años y el más pequeño siete. Aparece foto.`,
        images: [
          {
            type: "noticia publicada",
            src: "/aides-perez/n_3.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
          {
            type: "página diario completa",
            src: "/aides-perez/n_4.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
        ],
      },
      {
        name: "Diario “El Día” (en Portada)",
        date: new Date("June 04, 1971 03:24:00"),
        title: "“POLICÍA MUERTO Y JEFE DE LA METRO HERIDO”",
        description: `...`,
        images: [
          {
            type: "noticia publicada",
            src: "/aides-perez/n_9.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
          {
            type: "página diario completa",
            src: "/aides-perez/n_10.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
        ],
      },
      {
        name: "Diario “El Día” (Página 7)",
        date: new Date("June 04, 1971 03:24:00"),
        title:
          "“VIL ASESINATO DE UN MODESTO AGENTE: HIEREN AL SUBJEFE DE LA METRO”",
        description: `Un modesto chofer de la Guardia Metropolitana fue muerto ayer de varios balazos en el transcurso de un atentado dirigido a su superior... Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/aides-perez/n_5.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
          {
            type: "página diario completa",
            src: "/aides-perez/n_6.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
        ],
      },
      {
        name: "Diario “El Diario” (Página 16)",
        date: new Date("June 04, 1971 03:24:00"),
        title:
          "“EN LOS ÚLTIMOS CUATRO AÑOS CAEN 12 POLICÍAS CUMPLIENDO SU DEBER”",
        description: `Entre el 27 de diciembre de 1966 y la víspera, los hombres que integran los cuadros de la Policía uruguaya han sufrido como en carne propia las heridas que troncharon las vidas de doce de sus compañeros, caídos bajo las balas de los conspiradores...`,
        images: [
          {
            type: "noticia publicada",
            src: "/aides-perez/n_7.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
          {
            type: "página diario completa",
            src: "/aides-perez/n_8.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Policía en acto de servicio es asesinado por Terroristas.",
        description:
          "Aídes Pérez, Agente de la Policía Nacional fue asesinado por Terroristas dentro de un vehículo.",
        images: [
          {
            src: "/aides-perez/i_1.jpg",
            alt: "Policía acercándose para ascender a un vehículo. Una motoneta se aproxima.",
          },
          {
            src: "/aides-perez/i_2.jpg",
            alt: "Terroristas se aproximan para atentar contra los policías.",
          },
          {
            src: "/aides-perez/i_3.jpg",
            alt: "Terrorista asesina al Agente Aídes Pérez y es herido el Mayor Saravia de la Guardia Metropolitana.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/aides-perez/memorial.jpg",
        alt: "Aquí, en plena democracia, el 03/06/1971 fue asesinado por terroristas, Aides Pérez perteneciene a la Policia Nacional, de 41 años de edad, casado 5 hijos (4 menores de edad).",
      },
    ],
  },
  {
    date: new Date("June 22, 1971 03:24:00"),
    title: "Sargento (G.M.) Walter Custodio",
    slug: "walter-custodio",
    type: "asesinatos",
    videos: [
      {
        id: "ERIuedPriXs",
        title:
          "Fanny Custodio, hija del Sargento de la Guardia Metropolitana Walter Custodio.",
        src: "https://www.youtube.com/embed/ERIuedPriXs",
        slug: "sesinato-sargento-walter-custodio",
        date: new Date("1971-6-22"),
      },
    ],
    victims: [
      {
        info: {
          name: "Sargento (G.M.) Walter Custodio",
          age: 37,
          marital: "casado",
          childs: 5,
          childsDescription: "menores de edad",
          // marital: "soltero",
          avatar: {
            src: "/walter-custodio/a.png",
            alt: "imagen del Sargento (G.M.) Walter Custodioz",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("June 23, 1971 03:24:00"),
        title: "“POLICÍA Y ESTUDIANTE MUEREN EN NUEVA ACCIÓN EXTREMISTA”",
        description:
          "... un funcionario transitaba franco y ropas de civil... advirtió que en la sucursal de la firma Manzanares S.A. se estaba perpetrando un atraco… siendo baleado por los delincuentes resultando con una herida de bala en la espalda ... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/walter-custodio/n_1.jpg",
            alt: "portada publicada por el diario el diario",
          },
          {
            type: "página diario completa",
            src: "/walter-custodio/n_2.jpg",
            alt: "noticia publicada por el diario el diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("June 23, 1971 03:24:00"),
        title: "“ASESINARON POR LA ESPALDA AL POLICÍA (TENÍA CINCO HIJOS)”",
        description:
          "... Volvía con la leche para sus múltiples hijos cuando vio que un grupo de facciosos asaltaba la vecina sucursal de Manzanares... La responsabilidad y arrojo del Sgto. de la “Metro” Walter Custodio Rodríguez lo encaminaron hacia la muerte al enfrentar solo a varios conspiradores... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/walter-custodio/n_3.jpg",
            alt: "portada publicada por el diario el Acción",
          },
          {
            type: "página diario completa",
            src: "/walter-custodio/n_4.jpg",
            alt: "noticia publicada por el diario Acción",
          },
        ],
      },
      {
        name: "Diario “El Diario” (Página 18)",
        date: new Date("July 05, 1971 03:24:00"),
        title: "“ATRAPAN A UNA TUPAMARA QUE ASESINÓ A UN POLICÍA”",
        description:
          "Cinco sediciosos detenidos recientemente por la Policía, fueron procesados... una de tales personas (concretamente una joven estudiante de Medicina), ha sido identificada como autora de los disparos que causaron la muerte de un funcionario policial... La mujer... fue reconocida como... Además los delincuentes... y... fueron reconocidos también como participantes del referido asalto... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/walter-custodio/n_5.jpg",
            alt: "portada publicada por el diario el “El Diario”",
          },
          {
            type: "página diario completa",
            src: "/walter-custodio/n_6.jpg",
            alt: "noticia publicada por el diario“El Diario”",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/walter-custodio/memorial.jpg",
        alt: "Aquí, en plena democracia, el 22/06/1971 fue asesinado por terroristas, el Sargento Walter Custodio perteneciene a la Policia Nacional, de 37 años de edad, casado 5 hijos menores de edad.",
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Walter Custodio es asesinado por Terroristas que asaltaban un comercio.",
        description:
          "Walter Custodio, Sargento de la Policía Nacional fuera de su horario de Servicio intenta impedir un robo a un comercio y es asesinado por Terroristas que asaltaban un comercio.",
        images: [
          {
            src: "/walter-custodio/i_1.jpg",
            alt: "Sargento Walter Custodio se traba en lucha con dos Terroristas, un hombre y una mujer, en el exterior de un comercio de alimentos donde se estaba cometiendo un robo.",
          },
          {
            src: "/walter-custodio/i_2.jpg",
            alt: "Un tercer Terrorista dispara por la espalda al Sargento Walter Custodio.",
          },
          {
            src: "/walter-custodio/i_3.jpg",
            alt: "Sargento Walter Custodio herido, reacciona disparando su arma contra un Terrorista y los demás huyen en un vehículo con la mercancía robada.",
          },
          {
            src: "/walter-custodio/i_4.jpg",
            alt: "Sargento Walter Custodio queda herido de muerte junto a un Terrorista. Los otros Terroristas huyen.",
          },
        ],
      },
    ],
  },
  {
    date: new Date("June 22, 1971 03:24:00"),
    title: "Juan Bentancur",
    slug: "juan-bentancur",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Juan Bentancur",
          age: 37,
          marital: "casado",
          daughter: 1,
          childsDescription: " menor de edad",
          avatar: {
            src: "/juan-bentancur/a.png",
            alt: "imagen de Juan Bentancur",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("June 23, 1971 03:24:00"),
        title: "“SEDICIOSOS ASESINAN A UN EMPLEADO DE “NIBOPLAST”",
        description:
          "... Juan Andrés Bentancur Carrión, casado de 37 años, capataz de la fábrica Nibo Plast S.A.... fue interceptado por dos desconocidos... que le dispararon con armas de fuego... que provocó su fallecimiento… N. de R.-... Alguien llamó a Radiopatrulla...",
        images: [
          {
            type: "noticia publicada",
            src: "/juan-bentancur/n_1.jpg",
            alt: 'portada publicada por el diario "El Día"',
          },
          {
            type: "página diario completa",
            src: "/juan-bentancur/n_2.jpg",
            alt: 'noticia publicada por el diario "El Día"',
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 7)',
        date: new Date("June 23, 1971 03:24:00"),
        title: "“ULTIMARON A CAPATAZ DE NIBOPLAST S.A.”",
        description:
          "Anoche fue ultimado de un balazo en la cabeza un capataz de la firma Nibo Plast S.A., en acción que la policía relaciona escuetamente con el frustrado intento de una organización...",
        images: [
          {
            type: "noticia publicada",
            src: "/juan-bentancur/n_3.jpg",
            alt: 'portada publicada por el diario "El Popular"',
          },
          {
            type: "página diario completa",
            src: "/juan-bentancur/n_4.jpg",
            alt: 'noticia publicada por el diario "El Popular"',
          },
        ],
      },
      {
        name: "Diario “El Diario” (Página 18)",
        date: new Date("June 23, 1971 03:24:00"),
        title: "“MATARON ALEVOSAMENTE A SERENO DE NIBOPLAST”",
        description:
          "Dos conspiradores ultimaron ayer alevosamente a un capataz de la fábrica Niboplast, haciéndolo víctima de una insólita venganza urdida por quienes ven en los amigos del orden en sus enemigos... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/juan-bentancur/n_5.jpg",
            alt: "portada publicada por el diario el “El Diario”",
          },
          {
            type: "página diario completa",
            src: "/juan-bentancur/n_6.jpg",
            alt: "noticia publicada por el diario“El Diario”",
          },
        ],
      },
      {
        name: "Diario “Acción” (Página 8)",
        date: new Date("June 23, 1971 03:24:00"),
        title: "TÍTULO: “MATARON A TRAICIÓN A UN HUMILDE OBRERO”",
        description:
          "Nueva acción de los terroristas… Algunos volantes abandonados en el lugar permiten sindicar a los autores del atentado como integrantes de la organización clandestina y vincular este caso al fallido copamiento... Esta presunta venganza,... deja al desamparo a la esposa de Bentancur y a su pequeña hija de pocos años de edad... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/juan-bentancur/n_7.jpg",
            alt: "portada publicada por el diario “Acción”",
          },
          {
            type: "página diario completa",
            src: "/juan-bentancur/n_8.jpg",
            alt: "noticia publicada por el diario “Acción”",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Obrero asesinado por organización terrorista.",
        description:
          "Juan Bentancur, fue asesinado por venganza. Integrantes del MLN-T lo ejecutan cuando se retiraba de su lugar de trabajo.",
        images: [
          {
            src: "/juan-bentancur/i_1.jpg",
            alt: "Juan Bentancur camina hacia su domicilio. Lo persiguen dos sediciosos.",
          },
          {
            src: "/juan-bentancur/i_2.jpg",
            alt: "El obrero, Juan Bentancur, es asesinado por dos sediciosos.",
          },
          {
            src: "/juan-bentancur/i_3.jpg",
            alt: "Sediciosos dejan panfletos sobre el cadáver.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/juan-bentancur/memorial.jpg",
        alt: "Aquí, en plena democracia, el 22/06/1971 fue asesinado por terroristas, Juan Bentancur, de 37 años de edad, casado, 1 hija menor de edad.",
      },
    ],
  },
  {
    date: new Date("August 07, 1971 03:24:00"),
    title: "Alfonso Arhancet",
    slug: "alfonso-arhancet",
    type: "asesinatos",
    videos: [
      {
        id: "f62DC-0SP38",
        title:
          "Nilsa Garcés, madre de Alfonso Arhancet asesinado en un club del Frente Amplio",
        src: "https://www.youtube.com/embed/f62DC-0SP38",
        slug: "asesinan-en-local-del-frente-amplio-a-alfonso-aranchet",
        date: new Date("1972-8-7"),
      },
    ],
    victims: [
      {
        info: {
          name: "Alfonso Arhancet",
          age: 16,
          marital: "soltero",
          avatar: {
            src: "/alfonso-arhancet/a.png",
            alt: "imagen de Alfonso Arhancet",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("August 07, 1971 03:24:00"),
        title:
          "“EN UN LOCAL POLÍTICO MATARON DE UN BALAZO A UN MENOR DE 16 AÑOS”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/alfonso-arhancet/n_1.jpg",
            alt: 'portada publicada por el diario "El Diario"',
          },
          {
            type: "página diario completa",
            src: "/alfonso-arhancet/n_2.jpg",
            alt: 'noticia publicada por el diario "El Diario"',
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("August 07, 1971 03:24:00"),
        title: "SE REALIZÓ LA RECONSTRUCCIÓN EN EL CLUB DEL FRENTE AMPLIO”",
        description:
          "... se reconstruía el hecho de sangre ocurrido anoche en el Prado, cuando un menor de edad-hijo de un Coronel del Ejército-fue mortalmente herido de bala en el interior de un club perteneciente al Frente Amplio... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/alfonso-arhancet/n_3.jpg",
            alt: 'portada publicada por el diario "El Diario"',
          },
          {
            type: "página diario completa",
            src: "/alfonso-arhancet/n_4.jpg",
            alt: 'noticia publicada por el diario "El Diario"',
          },
        ],
      },
      {
        name: "Diario “El Día” (Página 9)",
        date: new Date("August 08, 1971 03:24:00"),
        title: "“TRAGEDIA EN EL CLUB: NO HUBO INTENCIÓN DE MATAR”",
        description:
          "...después de la reconstrucción, el Juez de Instrucción de 2º. Turno, Dr...resolvió que el encargado del club..., fuera procesado por “homicidio culposo...”. Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/alfonso-arhancet/n_5.jpg",
            alt: "portada publicada por el diario el “El Día”",
          },
          {
            type: "página diario completa",
            src: "/alfonso-arhancet/n_6.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Militante asesina a menor de edad en club político.",
        description:
          "Alfonso Arhancet, fue asesinado por el responsable de un club político del Frente Amplio.",
        images: [
          {
            src: "/alfonso-arhancet/i_1.jpg",
            alt: "Alfonso Arhancet y su amigo son obligados a entrar a un local político del Frente Amplio.",
          },
          {
            src: "/alfonso-arhancet/i_2.jpg",
            alt: "Alfonso Arhancet y su amigo amenazados por militantes del Frente Amplio.",
          },
          {
            src: "/alfonso-arhancet/i_3.jpg",
            alt: "Alfonso Arhancet es asesinado en el interior de un club político del Frente Amplio.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/alfonso-arhancet/memorial.jpg",
        alt: "Aquí, en plena democracia, el 07/08/1971 fue asesinado por un militante de un club del Frente Amplio, Alfonso Arhancet, de 16 años de edad.",
      },
    ],
  },
  {
    date: new Date("August 11, 1971 03:24:00"),
    title: "Agente Juan Álvarez",
    slug: "juan-alvarez",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Agente Juan Álvarez",
          age: 54,
          marital: "casado",
          childs: 3,
          childsDescription: "1 menor de edad",
          avatar: {
            src: "/juan-alvarez/a.png",
            alt: "imagen de Juan Álvarez",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: "Diario “El Día” (Página 13)",
        date: new Date("August 12, 1971 03:24:00"),
        title: "“UN VALIENTE AGENTE POLICIAL FUE ASESINADO POR ASALTANTES”",
        description:
          "Un modesto agente policial..., padre de tres hijos, fue vilmente asesinado... Juan Francisco Álvarez, de 54 años, cayó en el cumplimiento de su deber baleado por dos bárbaros sujetos... impidió que consumaran el atraco contra el camión remesero de “Manzanares”... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/juan-alvarez/n_1.jpg",
            alt: "portada publicada por el diario “El Día”",
          },
          {
            type: "página diario completa",
            src: "/juan-alvarez/n_2.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("August 12, 1971 03:24:00"),
        title:
          "“MATARON DE 5 BALAZOS A UN POLICÍA CUANDO INTENTÓ EVITAR EL ASALTO”",
        description:
          "Una gavilla de delincuentes mató alevosamente a un agente policial que custodiaba un camión remesero al que pretendían robar... ese vehículo... el agente de 2ª de la seccional 15ª Juan Francisco Álvarez Alvez, casado de 54 años... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/juan-alvarez/n_3.jpg",
            alt: 'portada publicada por el diario "Acción"',
          },
          {
            type: "página diario completa",
            src: "/juan-alvarez/n_4.jpg",
            alt: 'noticia publicada por el diario "Acción"',
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Agente policial asesinado por terroristas.",
        description:
          "Juan Álvarez, Agente de la Policía Nacional, fue asesinado por Terroristas al impedir el robo a una remesa de dinero.",
        images: [
          {
            src: "/juan-alvarez/i_1.jpg",
            alt: "Vehículo con remesa de dinero de empresa Manzanares es interceptado por Terroristas en otro vehículo. Agente Juan Álvarez cumple funciones de custodia.",
          },
          {
            src: "/juan-alvarez/i_2.jpg",
            alt: "Terroristas con sus armas destrozan el parabrisas del camión. Agente Álvarez reacciona.",
          },
          {
            src: "/juan-alvarez/i_3.jpg",
            alt: "Los Terroristas asesinan al Agente Álvarez dentro de la cabina del vehículo.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/juan-alvarez/memorial.jpg",
        alt: "Aquí, en plena democracia, el 11/08/1971 fue asesinado por terroristas, el Agente Juan Álvarez, de 54 años de edad, casado, tres hijos (uno menor de edad).",
      },
    ],
  },
  {
    date: new Date("September 09, 1971 03:24:00"),
    title: "Wilder Soto y Nelson Lima Coraceros",
    slug: "wilder-soto-y-nelson-lima",
    type: "asesinatos",
    newsPapers: [
      {
        name: "Diario “El Día” (en Portada)",
        date: new Date("September 03, 1971 03:24:00"),
        title: "ALEVOSO CRIMEN",
        description:
          "Los coraceros de la Guardia Republicana Wilder Daniel Soto Romero (izq.) de 24 años de edad y Nelson Lima Gutiérrez de 27 años fueron asesinados a mansalva por cuatro maleantes que portaban túnicas blancas... En su acción los criminales pusieron en peligro la vida de varios empleados del nosocomio... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/wilder-soto-y-nelson-lima/n_1.jpg",
            alt: "portada publicada por el diario “El Día”",
          },
          {
            type: "página diario completa",
            src: "/wilder-soto-y-nelson-lima/n_2.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
        ],
      },
      {
        name: "Diario “El Día” (Página 3)",
        date: new Date("September 03, 1971 03:24:00"),
        title: "“ASESINATO PREMEDITADO DE DOS CUSTODIAS DEL HOSPITAL VISCA”",
        description:
          "... El hecho tuvo lugar en la Sala de Administración del Hospital Pedro Visca a la hora 12.20... “Los dos policías-explicó- estaban inmediatos al mostrador... noté que entraban tres personas al local. Unas tenían túnica puesta,... De pronto, el estruendo de disparos llenó el local... Uno de los coraceros ni gritó... El otro atinó a huir hacia el corredor sólo para ser abatido de dos balazos en la cabeza... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/wilder-soto-y-nelson-lima/n_3.jpg",
            alt: "portada publicada por el diario “El Día”",
          },
          {
            type: "página diario completa",
            src: "/wilder-soto-y-nelson-lima/n_3.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
        ],
      },
      {
        name: "Diario “El Diario” (Página 19)",
        date: new Date("September 04, 1971 03:24:00"),
        title:
          "“DIERON SEPULTURA A LOS RESTOS DE LOS CORACEROS ASESINADOS EN PEDRO VISCA”",
        description:
          "El sepelio de los dos coraceros asesinados el jueves... causó indignación y dolor en las ciudades de las cuales eran oriundos...",
        images: [
          {
            type: "noticia publicada",
            src: "/wilder-soto-y-nelson-lima/n_4.jpg",
            alt: "portada publicada por el diario “El Diario”",
          },
          {
            type: "página diario completa",
            src: "/wilder-soto-y-nelson-lima/n_5.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Terroristas asesinan a Agentes policiales dentro de un Hospital de Niños.",
        description:
          "Wilder Soto y Nelson Lima, Agentes de la Guardia Republicana de la Policía Nacional, fueron asesinados por integrantes del MLN-T mientras custodiaban pago de sueldos a funcionarios de un Hospital.",
        images: [
          {
            src: "/wilder-soto-y-nelson-lima/i_1.jpg",
            alt: "Agentes Nelson Lima y Wilder Soto custodian el pago de sueldos a funcionarios del Hospital de Niños Pedro Visca.",
          },
          {
            src: "/wilder-soto-y-nelson-lima/i_2.jpg",
            alt: "Terroristas vistiendo túnicas médicas sorpresivamente atacan y asesinan a los Agentes Nelson Lima y Wilder Soto.",
          },
          {
            src: "/wilder-soto-y-nelson-lima/i_3.jpg",
            alt: "Agente Nelson Lima es rematado por los Terroristas.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/wilder-soto-y-nelson-lima/memorial.jpg",
        alt: "Aquí, actual ubicación de la Facultad de Ciencias Económicas y Administración, el 02/09/1971 en plena democracia fueron asesinados por terroristas, Nelson Lima 27 años, casado, un hijo menor de edad y Wilder Soto, 24 años, perteneciente a la Policia Nacional.",
      },
    ],
    victims: [
      {
        info: {
          name: "Wilder Soto",
          age: 24,
          marital: "soltero",
          // childs: 3,
          // childsDescription: "1 menor de edad",
          avatar: {
            src: "/wilder-soto-y-nelson-lima/a_1.png",
            alt: "imagen de Wilder Soto",
          },
        },
      },
      {
        info: {
          name: "Nelson Lima",
          age: 27,
          marital: "casado",
          childs: 1,
          childsDescription: " menor de edad",
          avatar: {
            src: "/wilder-soto-y-nelson-lima/a_2.png",
            alt: "imagen de Nelson Lima",
          },
        },
      },
    ],
  },
  {
    date: new Date("December 21, 1971 03:24:00"),
    title: "Pascasio Báez",
    slug: "pascasio-baez",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Pascasio Báez",
          age: 44,
          marital: "concubino",
          // childs: 3,
          // childsDescription: "1 menor de edad",
          avatar: {
            src: "/pascasio-baez/a_1.png",
            alt: "imagen de Pascasio Baéz",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: "Diario “El Diario” (Página 20)",
        date: new Date("June 21, 1972 03:24:00"),
        title: "“CÁRCEL DEL PUEBLO, CUBA O SIMPLEMENTE ULTIMARLO”",
        description:
          "... exhumaron esta mañana el cadáver de un peón rural de 45 años, ejecutado a fines del pasado año por los Tupamaros en la estancia Spartacus, diez días después de sorprenderlo en las inmediaciones de una de las tatuceras.... Por decisión de la dirección nacional del movimiento sedicioso, el changador -Pascasio Ramón Báez Mena, que residía en Pan de Azúcar -fue asesinado el 21 de diciembre último, suministrándole una dosis de cuatro gramos de pentotal, según narraron los propios sediciosos.... El 21 de diciembre, en presencia del miembro de la Dirección Nacional del MLN y el jefe del grupo.... se cumplió el designio.... fue.... quien se encargó de la eliminación de Baéz Mena.... le inyectó 4 gramos de pentotal.... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/pascasio-baez/n_1.jpg",
            alt: "portada publicada por el diario “El Diario”",
          },
          {
            type: "página diario completa",
            src: "/pascasio-baez/n_2.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
        ],
      },
      {
        name: "Diario “El País” (en Portada)",
        date: new Date("June 22, 1972 03:24:00"),
        title: "“BRUTAL CRIMEN DEL PEÓN RURAL”",
        description:
          "Comando faccioso ordenó ejecutarlo. Aparece foto a cuyo pie dice.”... quien administró la droga fatal fue el aventajado estudiante de Medicina... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/pascasio-baez/n_3.jpg",
            alt: "portada publicada por el diario “El País”",
          },
          {
            type: "página diario completa",
            src: "/pascasio-baez/n_4.jpg",
            alt: "noticia publicada por el diario “El País”",
          },
        ],
      },
      {
        name: "Diario “El País” (Página 19)",
        date: new Date("June 22, 1972 03:24:00"),
        title: "“CABECILLAS FACCIOSOS PRESENCIAN EL CRIMEN”",
        description:
          "... fue el conspirador que inyectó los cuatro gramos de Pentotal, al peón rural, Pascasio Ramón Báez Mena... Presenciaron la trágica ejecución... y... Aparecen fotos y plano.",
        images: [
          {
            type: "noticia publicada",
            src: "/pascasio-baez/n_5.jpg",
            alt: "portada publicada por el diario “El País”",
          },
          {
            type: "página diario completa",
            src: "/pascasio-baez/n_6.jpg",
            alt: "noticia publicada por el diario “El País”",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("June 22, 1972 03:24:00"),
        title: "“FRÍAMENTE SE DECIDIÓ EL ASESINATO DEL PEÓN”",
        description:
          "Utilizaron una dosis mortal de pentotal. En uno de los potreros de la estancia “Spartacus”..., fueron exhumados ayer..., los restos del peón Pascasio Ramón Báez Mena... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/pascasio-baez/n_7.jpg",
            alt: "portada publicada por el diario “El Día”",
          },
          {
            type: "página diario completa",
            src: "/pascasio-baez/n_8.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("June 22, 1972 03:24:00"),
        title:
          "“UN MODESTO PEÓN, DIABÓLICAMENTE ASESINADO POR TUPAMAROS EN MALDONADO HACE 6 MESES”",
        description:
          "Otro espeluznante crimen de los tupamaros, planeado con una frialdad inconcebible y ejecutado por mentes evidentemente enfermas por su obsesión asesina… Desarrollo de los hechos... Aparecen fotos.",
        title1: "“EL ASESINO,...”",
        description1:
          "... el sedicioso... admitió plenamente haber sido quien inyectó la dosis de pentotal al peón Pascasio Ramón Baéz Mena, ocasionándole la muerte...",
        title2: "“LA HUMILDE Y TRÁGICA INTIMIDAD DE PASCASIO BÁEZ”",
        description2:
          "... La mujer de Báez venía sufriendo desde tiempo atrás diversas dolencias... Cuando el 11 de diciembre Báez salió... para hacer una changa y fue secuestrado por los sediciosos, los males de la Sra. Garrido se agravaron... Lamentablemente... Alejandrina Garrido dejó de existir en el Hospital de Pan de Azúcar el 23 de diciembre... Pascasio Báez... fue salvajemente asesinado por quienes pretextan luchar por la erradicación de las injusticias sociales.",
        images: [
          {
            type: "noticia publicada",
            src: "/pascasio-baez/n_9.jpg",
            alt: "noticia publicada publicada por el diario “El Día”",
          },
          {
            type: "página diario completa",
            src: "/pascasio-baez/n_9.jpg",
            alt: "página diario completa publicada por el diario “El Día”",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("June 22, 1972 03:24:00"),
        title: "“AQUÍ ULTIMARON AL INFELIZ TRABAJADOR”",
        description: "Aparecen fotos y plano.",
        images: [
          {
            type: "noticia publicada",
            src: "/pascasio-baez/n_10.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
          {
            type: "página diario completa",
            src: "/pascasio-baez/n_10.jpg",
            alt: "página diario completa publicada por el diario “El Día”",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 2)',
        date: new Date("June 22, 1972 03:24:00"),
        title: "“EL CADÁVER DEL PEÓN BÁEZ MENA FUE EXHUMADO AYER”",
        description:
          "El cadáver de un trabajador rural, cuya muerte es atribuida a una ejecución resuelta por la Dirección del M.L.N., diez días después que aquel descubriera uno de los escondites rurales subterráneos,... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/pascasio-baez/n_11.jpg",
            alt: "noticia publicada por el diario “El Popular”",
          },
          {
            type: "página diario completa",
            src: "/pascasio-baez/n_12.jpg",
            alt: "página diario completa publicada por el diario “El Popular”",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 6)',
        date: new Date("August 14, 1972 03:24:00"),
        title: "“CAPTURAN AL ASESINO DEL PEÓN RURAL”",
        description:
          "Es un conspirador que había fugado del Penal. Un peligroso terrorista que había fugado del Penal de Punta Carretas... fue recapturado... El sujeto-...-participó en el asesinato del peón rural que descubriera la “tatucera” de las cercanías de Pan de Azúcar... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/pascasio-baez/n_13.jpg",
            alt: "noticia publicada publicada por el diario “El País”",
          },
          {
            type: "página diario completa",
            src: "/pascasio-baez/n_14.jpg",
            alt: "página diario completa publicada por el diario “El País”",
          },
        ],
      },
      {
        name: "Diario “Acción” (Página 7)",
        date: new Date("September 22, 1972 03:24:00"),
        title:
          "“PROCESARON A UNO DE LOS MATADORES DEL PEÓN RURAL PASCASIO MENA BÁEZ”",
        description: "... se trata del ex funcionario bancario...",
        images: [
          {
            type: "noticia publicada",
            src: "/pascasio-baez/n_15.jpg",
            alt: "portada publicada por el diario “Acción”",
          },
          {
            type: "página diario completa",
            src: "/pascasio-baez/n_16.jpg",
            alt: "noticia publicada por el diario “Acción”",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Peón rural asesinado y enterrado por sediciosos.",
        description:
          "Pascasio Baéz Mena, fue asesinado el 21 de diciembre de 1971 con una dosis de pentotal administrada por un estudiante de Medicina. Este humilde peón rural fue secuestrado en los días previos al haber avistado fortuitamente una “tatucera” en Maldonado. El comando sedicioso también evaluó la posibilidad de mantenerlo en una “Cárcel del Pueblo” o llevarlo a Cuba. Pascasio Báez, primer detenido desaparecido de la historia reciente, tenía 45 años. Su compañera Alejandra Garrido falleció el 23 de diciembre de 1971 en medio de la incertidumbre del paradero de Pascasio Baéz.",
        images: [
          {
            src: "/pascasio-baez/i_1.jpg",
            alt: "Pascasio Báez descubre accidentalmente una 'Tatucera'.",
          },
          {
            src: "/pascasio-baez/i_2.jpg",
            alt: "Es capturado y hecho prisionero en celda de 'Tatucera'.",
          },
          {
            src: "/pascasio-baez/i_3.jpg",
            alt: "Dirigentes sediciosos deciden “Pena de Muerte” de Pascasio Báez.",
          },
          {
            src: "/pascasio-baez/i_4.jpg",
            alt: "Sediciosos ejecuta “Pena de Muerte” con inyección de Pentotal.",
          },
          {
            src: "/pascasio-baez/i_5.jpg",
            alt: " Es enterrado.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/pascasio-baez/memorial.jpg",
        alt: "Aquí, en plena democracia, 21/12/1971  fue ejecutado y sepultado por Terroristas, el peón rural Pascasio Baéz, casado, 45 años de edad.",
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>““Observa Jorge Zabalza con relación a este tema: <em>“Cuando ocurrió lo del peón del Caraguatá hubo una gran discusión. Me encontré en un berretín con un compañero, quien venía de Pan de Azúcar espantado de lo que había pasado. Acerca de como (sic) se tomó esa decisión hay distintas versiones, lo real es que Píriz Budes fue con la orden de hacerlo. También es cierto que hubo compañeros que insistieron en la necesidad de tomar esa decisión. Creo que se optó por la vía más simple y menos humana, en lugar de elegir la otra posibilidad: sacarlo para el exterior. Se debía haber hecho ese esfuerzo, aun corriendo riesgo nosotros. En ese momento lo discutimos, no es cada una de esas cosas pasara desapercibida. Pienso que es esto hubo una trasgresión de los derechos humanos. Un delito...”</em>.”.</p>`,
          year: new Date("2001-1-1"),
          name: "La izquierda armada. Ideología, ética e identidad en el MLN-Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Trilce",
          pages: "págs. 158-159",
          author: "Aldrighi",
        },
        {
          fragment: `<p>“Hugo Wilkins</p>
          <p>“... Incluso en el caso de la muerte del peón (Báez), muy mal muerto, se le inyectó pentotal justamente para que no sufriera. No hubo desprecio por el dolor del hombre...”.”.</p>`,
          year: new Date("2009-1-1"),
          name: "Memorias de insurgencia. Historias de vida y militancia en el MLN-Tupamaros. 1965-1975.",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Banda Oriental S.R.L.",
          pages: "págs. 245,260-261",
          author: "Aldrighi",
        },
        {
          fragment: `<p>“... J .M. -¿Sobre el libro Sendic del periodista Blixen, que piensa?</p>
          <p>H. A. P.... se pretende dejarlo fuera del asesinato de Pascasio Báez Mena, ocultando que la tatucera era de la columna que él dirigía...”.</p>`,
          year: new Date("2015-1-1"),
          name: "Palabra de Amodio. La otra historia de los Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Plaza",
          pages: "págs. 144-145",
          author: "Marius",
        },
        {
          fragment: `<p>“... J .M. –Otro nombre que estimo es, sin dudas, el más polémico: Mario Píriz Budes.</p>
          <p>H. A. P. -... Su mayor enfrentamiento se produjo cuando la muerte de Pascasio Báez, propuesta desde el Caraguatá y aceptada por el Ejecutivo sin haber tenido en cuenta su oposición, a tal punto que fue Engler quien se desplazó a Maldonado para comunicar la ejecución...”.</p>`,
          year: new Date("2015-1-1"),
          name: "Palabra de Amodio. La otra historia de los Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Plaza",
          pages: "pág. 187",
          author: "Marius",
        },
        {
          fragment: `<p>“Aunque el tema no se trata en forma abierta, a Rosencof le pesa haber dado vía libre –al igual que el resto de la dirección – a que sus compañeros reunidos en la estancia Espartaco decidieran, a fines de 1971, la suerte de Pascasio Baéz. Se trataba de un peón que había descubierto una tatucera en aquel campo. Píriz Budes, responsable del interior desde la dirección, impulsó la decisión de dar muerte al peón. Engler, otro de los integrantes del Ejecutivo, pudo haberse negado pero no lo hizo, Wasen tampoco. El hombre fue asesinado con una inyección de pentotal...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 516",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("January 19, 1972 03:24:00"),
    title: "Heber Castiglioni Cadete de la Escuela Nacional de Policía",
    slug: "heber-castiglioni",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Heber Castiglioni",
          age: 19,
          marital: "soltero",
          // childs: 3,
          // childsDescription: "1 menor de edad",
          avatar: {
            src: "/heber-castiglioni/a_1.png",
            alt: "imagen de Heber Castiglioni",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: "Diario “Acción” (en Portada)",
        date: new Date("January 19, 1972 03:24:00"),
        title: "“ACRIBILLARON A UN POLICÍA”",
        description:
          "Criminal atentado de los Tupamaros. El cadete Heber Washington Castiglioni Castro,... soltero de 20 años de edad... Un joven cadete de la Escuela de Policía acribillado a balazos y..., es el saldo de un cruento enfrentamiento... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/heber-castiglioni/n_1.jpg",
            alt: "noticia publicada por el diario “Acción”",
          },
          {
            type: "página diario completa",
            src: "/heber-castiglioni/n_1.jpg",
            alt: "página diario completa publicada por el diario “Acción”",
          },
        ],
      },
      {
        name: "Diario “El Diario” (Página 16)",
        date: new Date("January 19, 1972 03:24:00"),
        title: "“HALLAN DOS BOLSONES, ESPOSAS Y UN ARMA EN LA KOMBI ROBADA”",
        description:
          "... Un joven cadete de la Policía..., fue muerto a balazos por un grupo de tupamaros en Pocitos... Aparecen fotos.",
        title1:
          "“SON VEINTE LOS POLICÍAS CAÍDOS EN LA LUCHA CONTRA LA SEDICIÓN”",
        description1:
          "Con la muerte del cadete Heber Washington Castiglioni Castro, de veinte años, ocurrida hoy de mañana a manos de sediciosos, son veinte los policías caídos en acciones con elementos subversivos en cinco años...",
        images: [
          {
            type: "noticia publicada",
            src: "/heber-castiglioni/n_2.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
          {
            type: "página diario completa",
            src: "/heber-castiglioni/n_2.jpg",
            alt: "página diario completa publicada por el diario “El Diario”",
          },
        ],
      },
      {
        name: "Diario “El País” (en Portada)",
        date: new Date("January 20, 1972 03:24:00"),
        title: "“UN POLICÍA DE 19 AÑOS ACRIBILLADO”",
        description:
          "... Mientras tres sediciosos distraían al Oficial y al Cadete, otros dos terroristas ocultos en la camioneta salieron sorpresivamente por la puerta trasera accionando sus metralletas... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/heber-castiglioni/n_3.jpg",
            alt: "noticia publicada por el diario “El País”",
          },
          {
            type: "página diario completa",
            src: "/heber-castiglioni/n_3.jpg",
            alt: "página diario completa publicada por el diario “El País””",
          },
        ],
      },
      {
        name: "Diario 'El País' (Página 13)",
        date: new Date("January 20, 1972 03:24:00"),
        title: "“EL VIOLENTO TIROTEO SE REGISTRÓ AYER”",
        description:
          "(viene de Portada) Reclutado por la sedición. El herido fue llevado al Hospital Militar... Se le identificó como... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/heber-castiglioni/n_4.jpg",
            alt: "portada publicada por el diario “El País”",
          },
          {
            type: "página diario completa",
            src: "/heber-castiglioni/n_5.jpg",
            alt: "noticia publicada por el diario “El País”",
          },
        ],
      },
      {
        name: "Diario 'Acción' (Página 8)",
        date: new Date("January 20, 1972 03:24:00"),
        title: "“SALVAN AL TUPAMARO HERIDO QUE ERA EL JEFE DEL GRUPO”",
        description:
          "Los médicos del Hospital Militar salvaron la vida del extremista herido en el trágico enfrentamiento de la víspera... Aparecen fotos.",
        title1: " “EL CADETE FUE ACRIBILLADO A QUEMARROPA: NO PODÍA SALVARSE”",
        description1:
          "El joven cadete Heber Washington Castiglioni Castro fue fulminado por una certera ráfaga de metralleta disparada por uno de los dos sediciosos... El infortunado cadete..., cayó mortalmente herido...",
        images: [
          {
            type: "noticia publicada",
            src: "/heber-castiglioni/n_6.jpg",
            alt: "noticia publicada por el diario “Acción”",
          },
          {
            type: "página diario completa",
            src: "/heber-castiglioni/n_6.jpg",
            alt: "página diario completa publicada por el diario “Acción”",
          },
        ],
      },
      {
        name: "Diario 'El Día' (Página 2)",
        date: new Date("January 20, 1972 03:24:00"),
        title: "“COBARDÍA Y SAÑA QUE ESTREMECEN”",
        description:
          "Trágico tiroteo -en el que corrieron peligro las vidas de inocentes vecinos -protagonizaron cinco conspiradores... el cadete Heber Washington Castiglioni Castro,... soltero de 20 años de edad - murió a consecuencia de varios impactos de bala... Aparecen fotos y croquis.",
        title1: "“EVIDENCIAS: IBAN A CONSUMAR UN NUEVO SECUESTRO”",
        description1:
          "La heroica acción de los dos funcionarios policiales logró desbaratar -a costa de la vida del cadete Castiglioni -la consumación de otro secuestro...",
        images: [
          {
            type: "noticia publicada",
            src: "/heber-castiglioni/n_7.jpg",
            alt: "noticia publicada por el diario “El Día”",
          },
          {
            type: "página diario completa",
            src: "/heber-castiglioni/n_7.jpg",
            alt: "página diario completa publicada por el diario “El Día”",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Cadete de la Escuela Nacional de Policía asesinado por sediciosos.",
        description:
          "Heber Castiglioni, Cadete de la Escuela Nacional de Policía, fue asesinado en acto de servicio por Terroristas.",
        images: [
          {
            src: "/heber-castiglioni/i_1.jpg",
            alt: "Un Oficial de Policía, acompañado por Heber Castiglioni, Cadete de la Escuela Nacional de Policía, proceden a detener un vehículo en un control rutinario de documentos.",
          },
          {
            src: "/heber-castiglioni/i_2.jpg",
            alt: "El cadete Heber Castiglioni, es asesinado por dos Terroristas.",
          },
          {
            src: "/heber-castiglioni/i_3.jpg",
            alt: "Un Terrorista en su huida, toma de rehén a una señora y su hijo. El Cadete Castiglioni herido de muerte en la vía pública.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/heber-castiglioni/memorial.jpg",
        alt: "Aquí, en plena democracia, 19/01/1972 fue asesinado por Terroristas, Heber Castiglini, de 19 años de edad, Cadete de la Escuela Nacional de Policía.",
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“... También se incluían secuestros dentro de la línea de Justicia Revolucionaria, como el de Juan Carlos Peirano Facio...</p>
          <p>... el secuestro de Peirano Facio fracasó porque el chofer de uno de los vehículos no controló y venía siendo seguido por un coche policial (en el tiroteo murió el cadete Castiglioni)...”.</p>`,
          year: new Date("2015-1-1"),
          name: "Palabra de Amodio. La otra historia de los Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Plaza",
          pages: "pág. 302",
          author: "Marius",
        },
      ],
    },
  },
  {
    date: new Date("January 27, 1972 03:24:00"),
    title: "Inspector Rodolfo Leoncino",
    slug: "rodolfo-leoncino",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Inspector Rodolfo Leoncino",
          age: 50,
          marital: "casado",
          childs: 2,
          childsDescription: " menores de edad",
          avatar: {
            src: "/rodolfo-leoncino/a.png",
            alt: "imagen de Rodolfo Leoncino",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: "Diario “El Diario” (Página 18)",
        date: new Date("January 27, 1972 03:24:00"),
        title: "“LOS FACCIOSOS AMETRALLARON AL GUARDIA CUANDO IBA AL TRABAJO”",
        description:
          "... fue asesinado esta mañana..., Rodolfo Leoncino... 50 años... atacado sorpresivamente a balazos,... Leoncino había sido amenazado, luego de que lo intentaran sobornar los conspiradores sin lograr sus propósitos... Aparecen fotos.",
        title1: "“LE HABÍAN ENVIADO UNA BOMBA A SU CASA COMO “REGALO”",
        description1:
          "... había sido amenazado de muerte meses atrás por los sediciosos y hace varias semanas-...- dejaron en su domicilio un artefacto explosivo... El inspector... lo sacó presuroso a la calle, donde después estalló...",
        images: [
          {
            type: "noticia publicada",
            src: "/rodolfo-leoncino/n_1.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
          {
            type: "página diario completa",
            src: "/rodolfo-leoncino/n_1.jpg",
            alt: "noticia publicada por el diario “El Diario”",
          },
        ],
      },
      {
        name: "Diario “Acción” (Página 8)",
        date: new Date("January 27, 1972 03:24:00"),
        title: "“ASESINARON A TRAICIÓN A UN INDEFENSO FUNCIONARIO”",
        description:
          "Monstruosa acción de Tupamaros:... El Jefe de Seguridad Interna del Penal de Punta Carreta, Inspector de 2ª Clase Rodolfo Leoncino (..., casado de 50 años) fue acribillado a balazos... por un grupo de tupamaros que le tendió una sangrienta emboscada... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/rodolfo-leoncino/n_2.jpg",
            alt: "noticia publicada por el diario “Acción”",
          },
          {
            type: "página diario completa",
            src: "/rodolfo-leoncino/n_3.jpg",
            alt: "página diario completa publicada por el diario “Acción”",
          },
        ],
      },
      {
        name: "Diario “El País” (en Portada)",
        date: new Date("January 28, 1972 03:24:00"),
        title: "“BRUTAL ASESINATO DE JEFE DEL PENAL”",
        description: "Facciosos lo ametrallan desde un auto... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/rodolfo-leoncino/n_10.jpg",
            alt: "noticia publicada por el diario “El País”",
          },
          {
            type: "página diario completa",
            src: "/rodolfo-leoncino/n_10.jpg",
            alt: "página diario completa publicada por el diario “El País”",
          },
        ],
      },
      {
        name: "Diario 'El País' (Página 2)",
        date: new Date("January 28, 1972 03:24:00"),
        title: "“TERRORISTAS ASESINAN A UN JEFE DEL PENAL”",
        description:
          "... el Jefe de Seguridad de la Penitenciaría fue acribillado a balazos por un grupo de extremistas que le tendieron una emboscada... Para perpetrar el crimen se utilizaron...: un revólver calibre 38 y dos armas automáticas  -diferentes - calibre 45... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/rodolfo-leoncino/n_4.jpg",
            alt: "portada publicada por el diario “El País”",
          },
          {
            type: "página diario completa",
            src: "/rodolfo-leoncino/n_5.jpg",
            alt: "noticia publicada por el diario “El País”",
          },
        ],
      },
      {
        name: "Diario 'El País' (Página 3)",
        date: new Date("January 28, 1972 03:24:00"),
        title: "“POR CARTAS Y TELEFÓNICAMENTE LEONCINO ERA AMENAZADO”",
        description:
          "Los alevosos extremistas, al no lograr vulnerar su honorabilidad, optaron por matarlo a mansalva. Rodolfo Leoncino... se retiró del instituto Policial para acogerse a los beneficios de una bien ganada jubilación... llamado por superiores para reintegrarse no trepidó en hacerlo... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/rodolfo-leoncino/n_6.jpg",
            alt: "portada publicada por el diario “El País”",
          },
          {
            type: "página diario completa",
            src: "/rodolfo-leoncino/n_7.jpg",
            alt: "noticia publicada por el diario “El País”",
          },
        ],
      },
      {
        name: "Diario 'Acción' (Página 7)",
        date: new Date("January 28, 1972 03:24:00"),
        title: "“INDIGNACIÓN POR EL NUEVO CRIMEN TUPAMARO”",
        description:
          "Escenas de profundo dolor se vivieron hoy durante el sepelio... de Rodolfo Leoncino quien fuera cobarde y salvajemente ultimado ayer por elementos del Movimiento de Liberación Nacional... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/rodolfo-leoncino/n_8.jpg",
            alt: "portada publicada por el diario “Acción”",
          },
          {
            type: "página diario completa",
            src: "/rodolfo-leoncino/n_9.jpg",
            alt: "noticia publicada por el diario “Acción”",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Policía asesinado por rehusarse a un acto de corrupción en la Cárcel de Punta Carretas.",
        description:
          "Rodolfo Leoncino, Inspector de la Policía Nacional, fue asesinado por Terroristas del MLN-T.",
        images: [
          {
            src: "/rodolfo-leoncino/i_1.jpg",
            alt: "Cabecillas sediciosos en prisión, deciden ejecución del Inspector Rodolfo Leoncino.",
          },
          {
            src: "/rodolfo-leoncino/i_2.jpg",
            alt: "Inspector Leoncino es asesinado por Terroristas.",
          },
          {
            src: "/rodolfo-leoncino/i_3.jpg",
            alt: "Inspector Leoncino ya caído, es ejecutado por un Terrorista.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/rodolfo-leoncino/memorial.jpg",
        alt: "Aquí, en plena democracia, 27/01/1972 fue asesinado por integrantes del MLN-T, Rodolfo Leoncino, Inspector de la Policía Nacional, de 50 años de edad, casasdo, 2 hijos menores de edad.",
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>
          “A mediados de enero, en Punta Carretas se reeditó un clásico de clásicos: el plan de fuga denominado Gallo se puso de nuevo en el tapete. Si bien los tupamaros tenían una relativa influencia en el penal, había un obstáculo para restablecer el funcionamiento que tenían antes; se llamaba Rodolfo Leoncino, jefe de la guardia de Punta Carretas... Jorge Zabalza, Efraín Martínez Platero y José Mujica (que bautizó el plan con el nombre de Corcho) decidieron que era tiempo de ejecutarlo sin más trámite, Muerto Leoncino a manos de un comando de la columna quince que lo baleó en su casa, cambió la interna del penal...”.</p>`,
          year: new Date("2007-1-1"),
          name: "Cero a la izquierda. Una biografía de Jorge Zabalza",
          place: "Montevideo - Uruguay",
          edition: "Letraeñe Ediciones de la Banda Oriental S.R.L.",
          pages: "págs. 107-108",
          author: "Leicht",
        },
        {
          fragment: `<p>De allí surgieron las bases del “Plan Corcho”, una operación de represalia.</p>
          <p>La mañana del 27 de enero, un comando de la columna 15 cumplió la orden de la dirección: esperó en la puerta de la casa de Leoncino y lo mató a balazos.</p>
          <p>Esta ejecución se enmarcaba en los planes de represalia que adoptó el MLN en los primeros meses de 1972...</p>
          <p>La ejecución de Leoncino instaló un aire de respeto y temor de parte de la guardia hacia los tupamaros, que ahora tenían mayor libertad de movimiento dentro del predio de la cárcel”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "págs. 514-516",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("January 28, 1972 03:24:00"),
    title: "Agente Francisco Godoy",
    slug: "francisco-godoy",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Agente Francisco Godoy",
          age: 58,
          marital: "casado",
          childs: 3,
          childsDescription: " (2 menores de edad)",
          avatar: {
            src: "/francisco-godoy/a.png",
            alt: "imagen de Agente Francisco Godoy",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("January 29, 1972 03:24:00"),
        title:
          "“SIMULARON NECESITAR ASISTENCIA MATANDO A MANSALVA A UN AGENTE... ”",
        description:
          "Un policía y un tupamaro muertos, más de tres agentes heridos (dos de ellos de gravedad) es el saldo del frustrado “copamiento” de la Seccional 27ª (Km. 16 del Cno. Maldonado) que intentaron anoche cincuenta terroristas. En el block operatorio del Hospital Militar, un cabo y un sargento que resistieron a la acción sediciosa, se debatían este mediodía, entre la vida y la muerte, en tanto eran velados los restos mortales del agente Francisco Godoy González, acribillado por una ráfaga de metralleta... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/francisco-godoy/n_1.jpg",
            alt: 'noticia publicada por el diario “"El Diario"',
          },
          {
            type: "página diario completa",
            src: "/francisco-godoy/n_1.jpg",
            alt: 'página diario completa publicada por el diario "El Diario"',
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 7)',
        date: new Date("January 30, 1972 03:24:00"),
        title: "“TRÁGICA INCURSIÓN: OCHO COCHES SECUESTRADOS Y LA ZONA COPADA”",
        description:
          "... del operativo tupamaro de la noche del viernes pretendiendo copar el local de la comisaría seccional 27ª, hecho en el cual murieron ametrallados un agente y un incursor como también resultaron con heridas graves dos policías...",
        images: [
          {
            type: "noticia publicada",
            src: "/francisco-godoy/n_2.jpg",
            alt: 'noticia publicada por el diario “"El Popular"',
          },
          {
            type: "página diario completa",
            src: "/francisco-godoy/n_3.jpg",
            alt: 'página diario completa publicada por el diario "El Popular"',
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 6)',
        date: new Date("January 30, 1972 03:24:00"),
        title: "“CONTINÚAN EN COMA DOS POLICÍAS DE LA 27a.”",
        description:
          "... El terrorista muerto fue identificado como... los delincuentes utilizaron alrededor de una docena de vehículos... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/francisco-godoy/n_4.jpg",
            alt: 'noticia publicada por el diario “"El País"',
          },
          {
            type: "página diario completa",
            src: "/francisco-godoy/n_5.jpg",
            alt: 'página diario completa publicada por el diario "El País"',
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("August 01, 1972 03:24:00"),
        title: "“REVELAN PLANES Y ACCIONES DEL GRUPO TUPAMARO “MAFALDA”",
        description:
          "... planes y acciones llevadas a cabo por el grupo “Mafalda” de la Sub -columna B de la Columna 10 de los “tupamaros”...",
        images: [
          {
            type: "noticia publicada",
            src: "/francisco-godoy/n_6.jpg",
            alt: 'noticia publicada por el diario “"El Día"',
          },
          {
            type: "página diario completa",
            src: "/francisco-godoy/n_7.jpg",
            alt: 'página diario completa publicada por el diario "El Día"',
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("January 30, 1973 03:24:00"),
        title: "“A UN AÑO DEL ASESINATO DE JUAN GODOY”",
        description:
          "... “... un grupo integrante de la mafia criminal... En el alevoso ataque tomaron parte...:...”. Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/francisco-godoy/n_8.jpg",
            alt: 'noticia publicada por el diario “"El Día"',
          },
          {
            type: "página diario completa",
            src: "/francisco-godoy/n_9.jpg",
            alt: 'página diario completa publicada por el diario "El Día"',
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Policía es asesinado en intento de copamiento de Seccional Policial.",
        description:
          "Francisco Godoy, Agente de la Policía Nacional fue asesinado por Terroristas cumpliendo servicio de guardia en una Seccional Policial.",
        images: [
          {
            src: "/francisco-godoy/i_1.jpg",
            alt: "Pareja de terroristas (mujer simulando estado de gravidez), solicita su atención en Seccional Policial.",
          },
          {
            src: "/francisco-godoy/i_2.jpg",
            alt: "Terroristas reducen a policías que los estaban atendiendo.",
          },
          {
            src: "/francisco-godoy/i_3.jpg",
            alt: " Francisco Godoy, Agente de Policía es asesinado, acribillado por Terroristas y el Agente de Policía, Alciro Farías, es herido.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/francisco-godoy/memorial.jpg",
        alt: "Aquí, en plena democracia, 28/01/1972 fue asesinado Frnacisco Godoy, de la Policía Nacional, de 58 años de edad, casasdo.",
      },
    ],
  },
  {
    date: new Date("February 13, 1972 03:24:00"),
    title: "Oficial Ayudante Juan Sánchez y Agente Segundo Fernández",
    slug: "accion-terrorista-a-comisaria-de-soca",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Oficial Ayudante Juan Sánchez",
          age: 50,
          marital: "casado",
          childs: 3,
          childsDescription: " menores de edad",
          avatar: {
            src: "/accion-terrorista-a-comisaria-de-soca/a.png",
            alt: "imagen de Oficial Ayudante Juan Sánchez",
          },
        },
      },
      {
        info: {
          name: "Agente Segundo Fernández",
          age: 42,
          marital: "casado",
          childs: 4,
          childsDescription: " menores de edad, (mellizas de 6 meses)",
          avatar: {
            src: "/accion-terrorista-a-comisaria-de-soca/a_1.png",
            alt: "imagen de Agente Segundo Fernández",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("February 14, 1972 03:24:00"),
        title: "“ASALTAN COMISARÍA: ASESINAN POLICÍAS”",
        description:
          "Tupamaros ultimaron con balazos en la cabeza cuando estaban caídos a un Oficial Ayudante y un Agente... Aparece foto a cuyo pie dice: “... Tres boy scouts se salvaron milagrosamente de ser asesinados por la mujer que integraba el grupo...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/accion-terrorista-a-comisaria-de-soca/n_1.jpg",
            alt: 'noticia publicada por el diario “"El Día"',
          },
          {
            type: "página diario completa",
            src: "/accion-terrorista-a-comisaria-de-soca/n_2.jpg",
            alt: 'página diario completa publicada por el diario "El Día"',
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("February 14, 1972 03:24:00"),
        title: "“TUPAMAROS FUSILARON POLICÍAS Y DESNUDARON SUS CADÁVERES”",
        description:
          "... Dos funcionarios policiales asesinados y un tercero acribillado a balazos, que se debate entre la vida y la muerte, es el saldo de una nueva incursión de los tupamaros que anoche sembraron terror y pánico en la localidad de Soca... Aparecen fotos.",
        title1: "“ROBARON TODAS LAS ARMAS”",
        description1:
          "Los extremistas saquearon totalmente el arsenal de la Comisaría... Hurtaron en total ocho fusiles, la única metralleta..., varios revólveres, los 38 largos de los funcionarios ultimados, el del herido y gran cantidad de municiones...",
        title2: "“DRAMÁTICO VELATORIO DE LOS POLICÍAS”",
        description2:
          "... El Oficial Ayudante Sánchez Molinari se domiciliaba con su esposa y sus tres hijos, uno de los cuales tiene apenas un mes de edad... El agente Fernández, padre de dos mellizas de seis meses...",
        images: [
          {
            type: "noticia publicada",
            src: "/accion-terrorista-a-comisaria-de-soca/n_3.jpg",
            alt: 'noticia publicada por el diario “Acción"',
          },
          {
            type: "página diario completa",
            src: "/accion-terrorista-a-comisaria-de-soca/n_3.jpg",
            alt: 'página diario completa publicada por el diario "Acción"',
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("February 14, 1972 03:24:00"),
        title: "“TAMBIÉN ARROJARON GRANADAS Y BOMBAS”",
        description:
          "Dos funcionarios policiales fueron acribillados a balazos anoche, en tanto que dos compañeros suyos y un particular resultaban heridos, cuando un grupo de tupamaros tomó por asalto la comisaría de Soca, localidad ubicada a 57 kilómetros de Montevideo, robando una metralleta, siete pistolas y abundante munición... Aparecen foto y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/accion-terrorista-a-comisaria-de-soca/n_4.jpg",
            alt: 'noticia publicada por el diario “El Diario"',
          },
          {
            type: "página diario completa",
            src: "/accion-terrorista-a-comisaria-de-soca/n_4.jpg",
            alt: 'página diario completa publicada por el diario "El Diario"',
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("February 15, 1972 03:24:00"),
        title: "“COMO HIRIERON Y ASESINARON VILMENTE A LOS FUNCIONARIOS”",
        description:
          "... El infortunado oficial ayudante Juan Manuel Sánchez Molinari... se hallaba en el umbral... con toda alevosía... abrieron fuego (...) con armas de diferentes tipos. Uno de los criminales le disparó entonces por la espalda... otro de los salvajes arroja hacia adentro un artefacto explosivo... Los siete “tupamaros” hacían fuego a través del zaguán... El policía González (joven y humilde padre de 7 hijos)... lo balearon dos veces por la espalda... Aparecen fotos.",
        title1: "“LOS INCREÍBLES DETALLES DE LA GRAN INFAMIA SEDICIOSA”",
        description1:
          "... otros policías de Soca enfrentaron a los anticonstitucionales en un tiroteo en la calle...",
        images: [
          {
            type: "noticia publicada",
            src: "/accion-terrorista-a-comisaria-de-soca/n_5.jpg",
            alt: 'noticia publicada por el diario “El Día"',
          },
          {
            type: "página diario completa",
            src: "/accion-terrorista-a-comisaria-de-soca/n_5.jpg",
            alt: 'página diario completa publicada por el diario "El Día"',
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("February 15, 1972 03:24:00"),
        title: "“SÓLO VINIMOS A MATAR POLICÍAS”",
        description:
          "Simultáneamente con el inicio del ataque a la Comisaría -por parte de los ocupantes de la Indio- los “tupamaros” que habían llegado en la “Land Rover” se introdujeron en la Central de UTE... llevaban armas y un hacha con la que pretendieron destrozar los tableros de teléfonos pero optaron por cortar a golpes los conductos de salidas hacia otros centros... quedando incomunicada la ciudad de Soca... Los facciosos quedaron en el edificio... y como la funcionaria sufriera una crisis nerviosa, el sedicioso le dijo: “... sólo vinimos a matar policías”. Aparecen fotos.",
        title1: "“EL PROCESO DE UN SANGUINARIO ACTO DE LOS BÁRBAROS”",
        description1:
          "... Ultimaron sin piedad a un oficial y a un agente (cuyos hijos suman ahora siete huérfanos) y ponen al borde de la muerte a otro policía, padre de siete niños... casi matan a tres inocentes “boy scouts”, a dos humildes muchachos de Soca, a un automovilista que pasaba por el lugar...",
        title2: "“EL “MINADO”, LA FUGA MASIVA Y EL “CAMIÓN DE LOS REZAGADOS”",
        description2:
          "... observaron en la ruta varios carteles con la indicación “Peligro, despacio” debajo de los cuales había cilindros metálicos que fingían ser bombas...",
        title3: "“HIZO CUATRO KILÓMETROS BAJO EL FUEGO DE LOS “TUPAMAROS”",
        description3:
          "Un particular también fue herido -...-en los hechos de Soca recorriendo casi 4 kilómetros bajo el fuego de los “tupamaros... al volante de un auto...",
        title4: "“ESPANTOSAS ESCENAS REVIVIDAS POR UNO DE LOS DOS DETENIDOS”",
        description4:
          "Tres “boy -scouts” y dos detenidos se encontraban en la Seccional 8ª... Los cinco estuvieron a punto de ser asesinados...",
        images: [
          {
            type: "noticia publicada",
            src: "/accion-terrorista-a-comisaria-de-soca/n_6.jpg",
            alt: 'noticia publicada por el diario “El Día"',
          },
          {
            type: "página diario completa",
            src: "/accion-terrorista-a-comisaria-de-soca/n_6.jpg",
            alt: 'página diario completa publicada por el diario "El Día"',
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 10)',
        date: new Date("September 21, 1972 03:24:00"),
        title: "“... DIRIGIÓ LOS CRÍMENES DE SOCA”",
        description:
          "Revelan identidades... En la agresión a Soca,... dirigió cinco grupos. Integraban el primero, los más notorios... con la misión de cerrar la salida por Ruta 35... El “Grupo 2” (que cerró la Ruta 8...) lo formaban... Aparece croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/accion-terrorista-a-comisaria-de-soca/n_7.jpg",
            alt: 'noticia publicada por el diario “El Día"',
          },
          {
            type: "página diario completa",
            src: "/accion-terrorista-a-comisaria-de-soca/n_8.jpg",
            alt: 'página diario completa publicada por el diario "El Día"',
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 10)',
        date: new Date("September 22, 1972 03:24:00"),
        title: "“FUE ACLARADO TOTALMENTE EL ATAQUE TUPAMARO EN SOCA”",
        description:
          "Importantes cabecillas participaron en la acción... la llamada “Acción Soca” tuvo como finalidad ocupar la localidad, tomar la comisaría, apropiarse del armamento y emitir una proclama de corte subversivo. Dicha acción estaba comprendida dentro del “Plan Collar”... Como responsable de la operación fue designado... resolviéndose asimismo la participación de cinco grupos... Aparece croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/accion-terrorista-a-comisaria-de-soca/n_9.jpg",
            alt: 'noticia publicada por el diario “Acción"',
          },
          {
            type: "página diario completa",
            src: "/accion-terrorista-a-comisaria-de-soca/n_10.jpg",
            alt: 'página diario completa publicada por el diario "Acción"',
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Dos policías asesinados por sediciosos. Y otro herido en atentado terrorista.",
        description:
          "Un comando terrorista integrado por varios subversivos ingresó a la comisaría de Soca, Canelones. Lanzaron una granada de fragmentación y abrieron fuego con metralletas. En la acción resultaron muertos el Oficial Ayudante Juan Sánchez y el Agente Segundo Fernández.",
        images: [
          {
            src: "/accion-terrorista-a-comisaria-de-soca/i_1.jpg",
            alt: "Sediciosos tiran “miguelitos” y bloquean rutas.",
          },
          {
            src: "/accion-terrorista-a-comisaria-de-soca/i_2.jpg",
            alt: "Tres sediciosos armados copan Seccional Policial.",
          },
          {
            src: "/accion-terrorista-a-comisaria-de-soca/i_3.jpg",
            alt: "El Oficial Sánchez y Agente Fernández fueron acribillados en la puerta. El Agente González es herido.",
          },
          {
            src: "/accion-terrorista-a-comisaria-de-soca/i_4.jpg",
            alt: "Sediciosa arroja granada hacia dentro de la Seccional.",
          },
          {
            src: "/accion-terrorista-a-comisaria-de-soca/i_5.jpg",
            alt: "Sediciosa intenta eliminar a 3 Boy Scouts alojados.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/accion-terrorista-a-comisaria-de-soca/memorial.jpg",
        alt: "Aquí, en plena democracia, 13/02/1972 fueron asesinados por terroristas, el Ofcial Ayudante Juan Sánchez y el Agente Segundo Fernández, de la Policía Nacional.",
      },
    ],
  },
  {
    date: new Date("April 14, 1972 03:24:00"),
    title:
      "Profesor Armando Acosta y Lara, Capitán de Corbeta Ernesto Motto, Sub Comisiario Óscar Delega, Agentes Carlos Leites y Segundo Goñi",
    slug: "actos-terroristas-14-de-abril",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Profesor Armando Acosta y Lara",
          age: 52,
          marital: "casado",
          childs: 3,
          avatar: {
            src: "/actos-terroristas-14-de-abril/a_1.png",
            alt: "imagen de Profesor Armando Acosta",
          },
        },
      },
      {
        info: {
          name: "Capitán de Corbeta Ernesto Motto",
          age: 35,
          marital: "soltero",
          avatar: {
            src: "/actos-terroristas-14-de-abril/a_2.png",
            alt: "imagen de Capitán de Corbeta Ernesto Motto",
          },
        },
      },
      {
        info: {
          name: "Sub Comisario Óscar Delega",
          age: 28,
          marital: "casado",
          childs: 1,
          childsDescription: " menor de edad",
          avatar: {
            src: "/actos-terroristas-14-de-abril/a_3.png",
            alt: "imagen de Sub Comisario Óscar Delega",
          },
        },
      },
      {
        info: {
          name: "Agente Carlos Leites",
          age: 43,
          marital: "casado",
          childs: 4,
          childsDescription: " menores de edad, (1 de 8 meses)",
          avatar: {
            src: "/actos-terroristas-14-de-abril/a_4.png",
            alt: "imagen de Agente Carlos Leites",
          },
        },
      },
      {
        info: {
          name: "Agente Segundo Goñi",
          age: 24,
          marital: "casado",
          daughter: 1,
          childsDescription: " menor de edad",
          avatar: {
            src: "/actos-terroristas-14-de-abril/a_5.png",
            alt: "imagen de Agente Segundo Goñi",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El País" (en Portada)',
        date: new Date("April 15, 1972 03:24:00"),
        title:
          "“ESTADO DE GUERRA” INTERNO POR  30 DÍAS”. DOCE MUERTOS ES EL SALDO DE LA TRÁGICA JORNADA”",
        description: "Los hechos... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_1.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_1.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 2)',
        date: new Date("April 15, 1972 03:24:00"),
        title: "“DOS POLICÍAS, UN MILITAR Y EX GOBERNANTE MUERTOS”",
        description:
          "Esperaron dos horas la salida de Acosta y Lara para matarlo... Aparece foto.",
        title1:
          "“EN SANGRIENTA CELADA ACRIBILLARON A UN JERARCA POLICIAL Y SU CHOFER”",
        description1:
          "... El Subcomisario Oscar Delega..., fue acribillado a tiros de metralleta... cuando varios grupos sediciosos le tendieron una emboscada... También cayó abatido por las balas, el Agente Carlos Alberto Leites Carfagno, quedando gravemente herido otro funcionario... el Agente Segundo Goñi... Aparecen fotos.",
        title2: "“AL CAPITÁN ERNESTO MOTTO LO ASESINARON DESDE UNA CAMIONETA”",
        description2:
          "De varios disparos de metralleta y en forma cobarde y alevosa, un grupo de tupamaros dio muerte... al joven Capitán de Corbeta, Ernesto Motto Benvenutto. El trágico y repudiable suceso ocurrió... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_2.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_2.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 3)',
        date: new Date("April 15, 1972 03:24:00"),
        title:
          "“EN MONTEVIDEO SE VIVIÓ AYER EL DÍA MÁS  SANGRIENTO DE NUESTRA HISTORIA”",
        description: "Sangre y terror en las calles. Fue... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_3.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_4.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 5)',
        date: new Date("April 15, 1972 03:24:00"),
        title: "“DOS CONSPIRADORES CAEN EN MANOS DE LA POLICÍA”",
        description: "... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_5.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_6.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 8)',
        date: new Date("April 15, 1972 03:24:00"),
        title: "“LA TRÁGICA JORNADA DE AYER”",
        description: "... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_7.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_7.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("April 15, 1972 03:24:00"),
        title: "“FUE APROBADO HOY EL ESTADO DE GUERRA”",
        description:
          "Una acongojada multitud acompañó hoy a las víctimas. Aparecen fotos al pie de una de las cuales dice: “Pueblo, Fuerzas Armadas y representantes del Instituto Policial formaron hoy el apesadumbrado cortejo que acompañaron los restos...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_8.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_8.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("April 15, 1972 03:24:00"),
        title: "“MONTEVIDEO VIVIÓ AYER SU MÁS TRÁGICA JORNADA: 12 MUERTOS”",
        description:
          "Ayer, en un lapso de siete horas, doce personas fueron muertas y por lo menos ocho resultaron heridas en una escalada de violencia... Lo que sigue es el relato pormenorizado y cronológico... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_9.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_10.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("April 15, 1972 03:24:00"),
        title:
          "“HORA 7.30: SIN DEFENSA POSIBLE ACRIBILLARON A LOS DOS POLICÍAS”",
        description:
          "Alevosamente, de varias ráfagas de ametralladora, un grupo de sediciosos, ultimó ayer al Subcomisario Oscar Delega Luzardo y al Agente Carlos Alberto Leites Carfagno... e hirieron gravemente a otro policía. Aparecen fotos y croquis.",
        title1: "“SÓLO DESEO QUE CESEN TODOS LOS ASESINATOS”",
        description1:
          "“Sólo deseo que cesen todos los asesinatos”... las palabras de Norma Ivia Pereira, viuda de Oscar Delega Luzardo... su pequeño hijo... de 7 años... Oscar Delega Luzardo tenía 28 años...",
        title2: "“CRIMEN QUE DESAMPARA A UNA FAMILIA”",
        description2:
          "..., de 14 años, hija mayor del agente Carlos Alberto Leites Carfagno... Casado con María Esther Muniz... tenía... otros tres hijos: ... de 12 años,... de 9 años y... que hoy cumple ocho meses...",
        title3: "“VEINTIDÓS POLICÍAS FUERON ASESINADOS ANTERIORMENTE”",
        description3:
          "Los policías muertos en la lucha contra la sedición componen una larga y tétrica lista...",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_11.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_11.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("April 15, 1972 03:24:00"),
        title:
          "“OFICIAL DE LA MARINA ASESINADO EN PLENO CENTRO DE LAS PIEDRAS”",
        description:
          "Fue baleado desde una camioneta ocupada por cuatro conspiradores... tuvo lugar en plena ciudad de Las Piedras cuando el Capitán de Corbeta Ernesto Oscar Motto cayó bajo los impactos de una ráfaga asesina... Aparecen fotos y croquis.",
        title1: "“SEGUNDO ATAQUE DIRECTO A UN OFICIAL MILITAR”",
        description1:
          "En el caso de ayer en el que fue alevosamente asesinado... es el segundo en el que son atacados directamente miembros de las Fuerzas Armadas. El primero se registró en Mercedes el 3 del corriente cuando un grupo de delincuentes llamó a la puerta de la casa del Alférez Criado...",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_12.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_12.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 4)',
        date: new Date("April 15, 1972 03:24:00"),
        title: "“DESDE UNA VENTANA, CON RIFLE M -16 MATARON A ACOSTA Y LARA”",
        description:
          "... otro grupo conspirador -tras copar una iglesia vecina -ultimaron con ráfagas de fusil automático al ex Subsecretario del Ministerio del Interior Sr. Armando Acosta y Lara e hirieron a su esposa y a uno de los funcionarios afectados a su custodia... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_13.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_13.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 4)',
        date: new Date("April 15, 1972 03:24:00"),
        title:
          " “DOS POLICÍAS, UN OFICIAL NAVAL Y EL PROF. ACOSTA Y LARA FUERON ABATIDOS AYER A BALAZOS”",
        description: "... Aparecen fotos ...",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_14.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_14.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El País" (en Portada)',
        date: new Date("April 16, 1972 03:24:00"),
        title:
          "“POR TREINTA DÍAS RIGE EL ESTADO DE GUERRA INTERNO Y SUSPENSIÓN DE DERECHOS”",
        title1: "“ACONGOJADO HOMENAJE A LOS CAÍDOS”",
        description:
          "Constituyó una alta expresión de congoja colectiva el acto del sepelio de los cuatro ciudadanos caídos... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_15.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_15.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 2)',
        date: new Date("April 16, 1972 03:24:00"),
        title: "“GRUESA COLUMNA DE CIUDADANOS EN EL SEPELIO”",
        description:
          "La ciudadanía homenajeó a los asesinados el viernes. Una multitud se congregó en la Plaza Independencia y acompañó los restos de las cuatro víctimas... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_16.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_17.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 4)',
        date: new Date("April 16, 1972 03:24:00"),
        title: "“LOS TUPAMAROS TENÍAN CENTRO DE CONTABILIDAD”",
        description:
          "Lo encontraron en Malvín junto a oculto hospital de campaña... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_18.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_19.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("April 16, 1972 03:24:00"),
        title: "“NUESTRO PUEBLO UNIDO EN EL MISMO DOLOR”",
        description: "... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_20.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_20.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El País" (en Portada)',
        date: new Date("July 17, 1972 03:24:00"),
        title: "“APRESAN ASESINOS DE ACOSTA Y LARA”",
        description: "... Aparecen fotos y plano demostrativo del homicidio...",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_21.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_21.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 2)',
        date: new Date("July 17, 1972 03:24:00"),
        title: "“OCHO DE LOS DIEZ ACUSADOS DEL FRÍO ASESINATO”",
        description:
          "La jornada del 14 de abril: aluvión de violencia y de sangre desatado de un golpe por los terroristas... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_22.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_23.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("July 17, 1972 03:24:00"),
        title: "“CAPTURARON A 8 DE LOS 10 ASESINOS DE ACOSTA Y LARA”",
        description:
          "... Siete delincuentes actuaron directamente en el alevoso atentado:... Aparecen fotos",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_24.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_25.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("July 17, 1972 03:24:00"),
        title: "“DOS ASESINOS PRÓFUGOS: UNO DE ELLOS VIAJÓ DESDE CHILE”",
        description:
          "El “comando” sedicioso que tuvo a su cargo la planificación y ejecución del atentado que costó la vida al... Prof. Armando Acosta y Lara... estaba compuesto por diez personas... ocho integrantes de ese grupo tupamaro ya están detenidos... El sedicioso... fue quien efectuó los primeros disparos... haciéndolo posteriormente... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_26.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_26.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("March 23, 1973 03:24:00"),
        title: "“NUEVA VÍCTIMA DE LOS TUPAMAROS. UN AGENTE”",
        description:
          "Dejó de existir... el agente Sagunto Goñi, quien resultara gravemente herido el 14 de abril de 1972... La esposa de Goñi quedó sola a cargo de un pequeño hijo de dos años y medio... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/actos-terroristas-14-de-abril/n_27.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/actos-terroristas-14-de-abril/n_28.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Armando Acosta y Lara.",
        description:
          "Armando Acosta y Lara, Profesor, fue asesinado en el marco de operativos terroristas planificados por el MLN-T.",
        images: [
          {
            src: "/actos-terroristas-14-de-abril/i_1.jpg",
            alt: "Sediciosos copan templo religioso amenazando con armas de fuego a funcionarios y menores de edad.",
          },
          {
            src: "/actos-terroristas-14-de-abril/i_2.jpg",
            alt: "Dos sediciosos se preparan dentro del templo religioso para asesinar a Acosta y Lara.",
          },
          {
            src: "/actos-terroristas-14-de-abril/i_3.jpg",
            alt: "Armando Acosta y Lara saliendo de su domicilio junto a su esposa y acompañante.",
          },
          {
            src: "/actos-terroristas-14-de-abril/i_4.jpg",
            alt: "Sediciosos asesinan a Acosta y Lara hiriendo a su señora y un acompañante.",
          },
        ],
      },
      {
        title: "Ernesto Motto.",
        description:
          "Ernesto Motto, Oficial de la Armada Nacional, fue asesinado en el marco de operativos terroristas planificados por el MLN-T.",
        images: [
          {
            src: "/actos-terroristas-14-de-abril/i_5.jpg",
            alt: "Ernesto Motto, Capitán de Corbeta saliendo de su domicilio.",
          },
          {
            src: "/actos-terroristas-14-de-abril/i_6.jpg",
            alt: "Sediciosos asesinan a Ernesto Motto, Capitán de Corbeta, desde un vehículo.",
          },
        ],
      },
      {
        title:
          "Sub Comisario Oscar Delega, Agentes Carlos Leites y Segundo Goñi.",
        description:
          "Oscar Delega y Carlos Leites fueron asesinados en el marco de operativos terroristas planificados por el MLN-T. Segundo Goñi, falleció meses después a consecuencia de las graves heridas recibidas.",
        images: [
          {
            src: "/actos-terroristas-14-de-abril/i_7.jpg",
            alt: "Sediciosos en camioneta se aproximan al vehículo policial en marcha.",
          },
          {
            src: "/actos-terroristas-14-de-abril/i_8.jpg",
            alt: "Sedicioso dispara su metralleta contra los tres policías que circulan en el vehículo.",
          },
          {
            src: "/actos-terroristas-14-de-abril/i_9.jpg",
            alt: "Policías heridos son acribillados por los sediciosos",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/actos-terroristas-14-de-abril/memorial_1.jpg",
        alt: "Aquí, en plena democracia, 14/04/1972 fue asesinado por integrantes del MLN-T, el Profesor Armando Acosta y Lara.",
      },
      {
        src: "/actos-terroristas-14-de-abril/memorial_2.jpg",
        alt: "Aquí, en plena democracia, 14/04/1972 fue asesinado por integrantes del MLN-T, el Capitán de Corbeta Ernesto Motto, Oficial de la Armada Nacional.",
      },
      {
        src: "/actos-terroristas-14-de-abril/memorial_3.jpg",
        alt: "Aquí, en plena democracia, 14/04/1972 fue asesinado por integrantes del MLN-T, el Sub Comisario Oscar Delega y los Agentes Carlos Leites y Segundo Goñi, de la Policía Nacional.",
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“... los grupos tupamaros... en el llamado “Plan Hipólito”, actuaron el viernes 14 de abril.</p>
          <p>A las siete y diez de la mañana mataron al subcomisario Oscar Delega. Viajaba por Luis P. Ponce y avenida Rivera en un Maverick policial cuando lo acribillaron. Las balas alcanzaron a su chofer, Carlos Leites, que también murió.
          A las nueve y diez, en la calle Roosevelt de la ciudad de Las Piedras, otro grupo terminó con la vida del capitán de corbeta Ernesto Motto, a fuego de metralleta.</p>
            <p>Sobre las diez y veinte, desde una ventana de la iglesia Metodista, dos francotiradores descargaron sus balas contra el subsecretario del Interior Armando Acosta y Lara, que murió en la puerta de su casa, en la calle San José...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 525",
          author: "Pernas",
        },
        {
          fragment: `<p>“Carlos Liscano</p>
          <p>“... Yo participé en el 14 de abril. No directamente, porque desde enero estaba herido, rengo. En esas condiciones salí para el 14 de abril. La base (del MLN) sabía que algo se iba a hacer...”.”.</p>`,
          year: new Date("2009-1-1"),
          name: "Memorias de insurgencia. Historias de vida y militancia en el MLN-Tupamaros. 1965-1975",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Banda Oriental S.R.L.",
          pages: "págs. 129, 144",
          author: "Aldrighi",
        },
      ],
    },
  },
  {
    date: new Date("April 17, 1972 03:24:00"),
    title: "Capitán Wilfredo Busconi",
    slug: "wilfredo-busconi",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Capitán Wilfredo Busconi",
          age: 33,
          marital: "casado",
          childs: 2,
          childsDescription: " menores de edad",
          avatar: {
            src: "/wilfredo-busconi/a_1.png",
            alt: "imagen de Capitán Wilfredo Busconi",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El País" (Página 2)',
        date: new Date("April 18, 1972 03:24:00"),
        title: "“CONMOCIÓN EN CAPURRO: RECIO TIROTEO Y 7 MUERTOS”",
        description: "Oficial de las Fuerzas Conjuntas gravísimo...",
        images: [
          {
            type: "noticia publicada",
            src: "/wilfredo-busconi/n_1.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/wilfredo-busconi/n_2.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("January 31, 1974 03:24:00"),
        title:
          "“MURIÓ MILITAR HERIDO EN UN CLUB COMUNISTA: 20 MESES EN COMA”...",
        images: [
          {
            type: "noticia publicada",
            src: "/wilfredo-busconi/n_3.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/wilfredo-busconi/n_4.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("January 31, 1974 03:24:00"),
        title:
          "“EL CAPITÁN MUERTO HOY FUE BALEADO EN LA CABEZA EL 17 DE ABRIL DE 1972”",
        description:
          "Luego de permanecer veinte meses internado..., en constante y dramático estado de coma, dejó de existir... el capitán Wilfredo José Busconi Brum (oriental, casado de 33 años)... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/wilfredo-busconi/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/wilfredo-busconi/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 18)',
        date: new Date("January 31, 1974 03:24:00"),
        title: "“AL CABO DE UNA LARGA AGONÍA FALLECIÓ EL CAPITÁN BUSCONI”",
        description:
          "En el Cementerio del Norte fueron inhumados ayer los restos del Capitán Wilfredo José Busconi Brum, de 33 años, casado y padre de dos niños, quien permaneciera en larga agonía..., desde el 17 de abril de 1972, fecha en que fuera gravemente herido… Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/wilfredo-busconi/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/wilfredo-busconi/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("May 04, 1972 03:24:00"),
    title: "Doctor Julio Morató",
    slug: "julio-morato",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Doctor Julio Morató",
          age: 67,
          marital: "casado",
          daughter: 1,
          childsDescription: ", un nieto recién nacido",
          avatar: {
            src: "/julio-morato/a_1.png",
            alt: "imagen de Doctor Julio Morató",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("May 05, 1972 03:24:00"),
        title: "“ALEVOSÍA SIN PAR: MATAN A UN CIENTÍFICO EMINENTE”",
        description:
          "Un eminente científico compatriota, el Dr. Julio Federico Morató Manaro, fue brutalmente asesinado por los sediciosos... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/julio-morato/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/julio-morato/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("May 05, 1972 03:24:00"),
        title: "“LOS TUPAMAROS ASESINARON A UN EMINENTE CIENTÍFICO”",
        description:
          "La violencia cobró ayer otra víctima civil, cuando un grupo tupamaro con la aparente misión de robarle armas a un coleccionista, terminó por eliminar su sorpresiva resistencia. Con cinco heridas de balas calibre 45... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/julio-morato/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/julio-morato/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Sediciosos asesinan a médico.",
        description:
          "Julio Morató, fue asesinado por integrantes del MLN-T en intento de robo de armas.",
        images: [
          {
            src: "/julio-morato/i_1.jpg",
            alt: "Julio Morató y su señora en la puerta de su domicilio, son emboscados por terroristas. ",
          },
          {
            src: "/julio-morato/i_2.jpg",
            alt: "Julio Morató reacciona ante los terroristas armados.",
          },
          {
            src: "/julio-morato/i_3.jpg",
            alt: "Julio Morató es ejecutado por uno de los terroristas.",
          },
          {
            src: "/julio-morato/i_4.jpg",
            alt: "Julio Morató en el suelo, es ultimado por terrorista, mientras su esposa es amenazada.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/julio-morato/memorial.jpg",
        alt: "Aquí, en plena democracia, 4/05/1972 fue asesinado por Terroristas, el Doctor Julio Morató.",
      },
    ],
    videos: [
      {
        id: "rdTEayWgJxE",
        title: "Raquel Morató, hija del Dr. Julio Morató.",
        src: "https://www.youtube.com/embed/rdTEayWgJxE",
        slug: "julio-morato",
        date: new Date("1972-5-4"),
      },
    ],
  },
  {
    date: new Date("May 18, 1972 03:24:00"),
    title:
      "Soldados Gaudencio Núñez, Saúl Correa, Osiris Núñez y Ramón Ferrerira",
    slug: "acto-terrorista-de-cuatro-integrantes-del-ejercito",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Soldado Gaudencio Núñez",
          age: 27,
          marital: "casado",
          childs: 2,
          childsDescription: " menores de edad",
          avatar: {
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/a_1.png",
            alt: "imagen de Soldado Gaudencio Núñez",
          },
        },
      },
      {
        info: {
          name: "Soldado Saúl Correa",
          age: 21,
          marital: "soltero",
          avatar: {
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/a_2.png",
            alt: "imagen de Soldado Saúl Correa",
          },
        },
      },
      {
        info: {
          name: "Soldado Osiris Núñez",
          age: 25,
          marital: "soltero",
          avatar: {
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/a_3.png",
            alt: "imagen de Soldado Osiris Núñez",
          },
        },
      },
      {
        info: {
          name: "Soldado Ramón Ferreira",
          age: 21,
          marital: "soltero",
          avatar: {
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/a_4.png",
            alt: "imagen de Soldado Ramón Ferrerira",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("May 18, 1972 03:24:00"),
        title: "“LOS AMETRALLARON DENTRO DE UN JEEP”",
        description:
          "Asesinan a cuatro guardias de Gravina. Consiguen huir los tupamaros... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_1.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("May 18, 1972 03:24:00"),
        title: "“LOS ACRIBILLARON DESDE UNA KOMBI”",
        description:
          "Las Fuerzas Armadas perdieron esta mañana cuatro jóvenes soldados del Batallón de Infantería Nº 13, quienes murieron acribillados bajo una lluvia de balas, sentados en el interior del Jeep... El cruento atentado terrorista fue perpetrado... por los ocupantes de una camioneta Kombi, que dispararon más de un centenar de proyectiles... Aparecen fotos.",
        title1: "“INDIGNACIÓN ENTRE LOS VECINOS”",
        description1:
          "... Un grupo mostraba una bandera nacional y periódicamente entonaba estrofas del Himno... Desde el público que mantenía un nutrido cordón policial y del Ejército, partían gritos condenando el asesinato y vivando a la Patria...",
        images: [
          {
            type: "noticia publicada",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_2.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("May 19, 1972 03:24:00"),
        title:
          "“RECIBIERON MÁS DE 80 DISPAROS SIN TIEMPO PARA INTENTAR UNA REACCIÓN”",
        description:
          "... Cuatro soldados jóvenes -... -fueron alevosamente asesinados por la espalda, por el solo delito de ser fieles a su deber... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_3.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("May 19, 1972 03:24:00"),
        title: "“IMPROVISADO VELATORIO: EL HIMNO EN VOCES DE CONDENA”",
        description:
          "La presencia espontánea y gravitante del pueblo se manifestó ayer con más vigor que nunca. De hecho fue el primer acto del velatorio de los cuatro servidores de la Patria asesinados a mansalva... Adhesión del deporte... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 9)',
        date: new Date("May 19, 1972 03:24:00"),
        title: "“FUERON INHUMADOS LOS CUATRO SOLDADOS”",
        description: " ... ",
        title1: "“YA SON 33 LAS VÍCTIMAS DE LA ESCALADA FACCIOSA”",
        description1:
          "Desde el aciago 27 de diciembre de 1966, cuando cobró su primera víctima, hasta la sangrienta tragedia de la víspera, la violencia sediciosa ha provocado la muerte de 28 policías y militares y 5 civiles... La nómina...:...",
        images: [
          {
            type: "noticia publicada",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_5.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (en Portada)',
        date: new Date("May 19, 1972 03:24:00"),
        title: "“4 SOLDADOS AMETRALLADOS”",
        description:
          "Custodiaban casa del Comandante en Jefe del Ejército... Aparecen fotos.",
        title1: "“ANTE LOS TRÁGICOS SUCESOS”",
        description1:
          "... nos sentimos conmovidos por este trágico hecho, que ha segado la vida de cuatro jóvenes, provenientes del interior que, por otra parte, no cayeron en combate, sino que fueron víctimas de un ataque sorpresivo.",
        images: [
          {
            type: "noticia publicada",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_6.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_7.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 3)',
        date: new Date("May 19, 1972 03:24:00"),
        title: "“ACRIBILLARON A 4 SOLDADOS FRENTE A LA CASA DE GRAVINA”",
        description:
          "... en lo que sin lugar a dudas fue un atentado directo contra la vida de dichos soldados... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_8.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_8.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 4)',
        date: new Date("May 19, 1972 03:24:00"),
        title: "“ANTE LOS TRÁGICOS SUCESOS”",
        description:
          "... Y hoy, como todo el pueblo uruguayo, nos sentimos conmovidos por este trágico hecho... no cayeron en combate, sino que fueron víctimas de un ataque sorpresivo...",
        images: [
          {
            type: "noticia publicada",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_9.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_10.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 10)',
        date: new Date("May 21, 1972 03:24:00"),
        title: "“ESCENAS DE DESGARRANTE DOLOR EN LOS SEPELIOS DE LOS SOLDADOS”",
        description: "... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_11.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_12.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 3)',
        date: new Date("July 21, 1972 03:24:00"),
        title: "“CAEN LOS ASESINOS DE LOS CUSTODIAS DEL GENERAL GRAVINA”",
        description:
          "Revelaron detalles del feroz golpe que perpetró el comando terrorista... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_13.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_14.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El País" (en Portada)',
        date: new Date("May 18, 1975 03:24:00"),
        title: "“ALEVOSO ASESINATO DE CUATRO GUARDIAS”",
        description:
          "Les rinden honores militares; vecinos entonan el himno ante sus cuerpos. Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_15.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/n_15.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Carlos Liscano</p>
            <p>“... En 1972, después de la reestructura, se formaron tres grupos de once militantes cada uno... De ahí salió el atentado del 18 de mayo... No tuve nada que ver con ese atentado aunque sí sé cómo fue y cómo se hizo todo. Las armas salieron de mi casa, las preparé yo porque nadie sabía prepararlas, las llevé también...”.”.</p>`,
          year: new Date("2009-1-1"),
          name: "Memorias de insurgencia. Historias de vida y militancia en el MLN-Tupamaros. 1965-1975",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Banda Oriental S.R.L.",
          pages: "pág. 129, 135",
          author: "Aldrighi",
        },
        {
          fragment: `<p>“El atentado contra la casa del general Gravina había sido decidido por la dirección del MLN en el marco de las operaciones de combate y represalia –un llamado de atención para que la represión actuara con más cautela- que permitieran el repliegue y la reorganización de los guerrilleros.
          Los tupamaros argumentaron que se trató de un tiroteo,...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 534",
          author: "Pernas",
        },
        {
          fragment: `<p>“Hugo Wilkins</p>
          <p>... Poner una bomba en una operación militar, en un cuartel, es otra cosa. Pero nunca se me ocurrió poner bombas como en el bowling. O como pasó el 18 de mayo de 1972, ametrallar a cuatro milicos que estaban haciendo una guardia, que no esperaban nada, que no estaban combatiendo”.</p>`,
          year: new Date("2009-1-1"),
          name: "Memorias de insurgencia. Historias de vida y militancia en el MLN-Tupamaros. 1965-1975",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Banda Oriental S.R.L.",
          pages: "pág. 245 y 248",
          author: "Aldrighi",
        },
      ],
    },
    apologyForCrimeInImages: [
      {
        title:
          "Soldados del Ejército Nacional asesinados por comando sedicioso",
        description:
          "Los Soldados fueron asesinados en el marco de operativos terroristas planificados por el MLN-T.",
        images: [
          {
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/i_1.jpg",
            alt: "Sediciosos deliberan el asesinato de soldados asignados a la vigilancia del domicilio de máximo jerarca militar.",
          },
          {
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/i_2.jpg",
            alt: "Un sedicioso caminando se asegura que los cuatro soldados se encuentren dentro del vehículo militar para iniciar la operación.",
          },
          {
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/i_3.jpg",
            alt: "Comando sedicioso asesina a cuatro soldados de servicio en el domicilio de jerarca militar.",
          },
          {
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/i_4.jpg",
            alt: "Dentro del vehículo militar, los cuerpos sin vida de los Soldados Saúl Correa, Ramón Ferreira, Osiris Núñez y Gaudencio Núñez acribillados por armas de fuego.",
          },
          {
            src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/i_5.jpg",
            alt: "En el lugar del asesinato de cuatro soldados, vecinos espontáneamente manifiestan su repudio portando la Bandera Nacional.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/acto-terrorista-de-cuatro-integrantes-del-ejercito/memorial.jpg",
        alt: "Aquí, en plena democracia, 18/05/1972 fueron asesinados por integrantes del MLN-T, los Soldados Gaudencio Núñez, Saúl Correa, Osiris Núñez y Ramón Ferrerira.",
      },
    ],
  },
  {
    date: new Date("June 15, 1972 03:24:00"),
    title: "Soldado Eusebio Godoy",
    slug: "eusebio-godoy",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Soldado Eusebio Godoy",
          age: 24,
          marital: "casado",
          avatar: {
            src: "/eusebio-godoy/a_1.png",
            alt: "imagen de Soldado Eusebio Godoy",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("June 18, 1972 03:24:00"),
        title:
          "“ATACARON UNA PATRULLA EN ARTIGAS DANDO MUERTE A UN SOLDADO EN ARROYO ÑAQUINÁ”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/eusebio-godoy/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/eusebio-godoy/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 11)',
        date: new Date("June 18, 1972 03:24:00"),
        title: "“LOS DELINCUENTES ASESINARON CON ARMAS AUTOMÁTICAS AL SOLDADO”",
        description:
          "... “... perdieron un joven soldado en un reciente enfrentamiento con un grupo sedicioso, en la región del arroyo Ñaquiná, en la Ruta 3... fueron agredidos a balazos... El infortunado soldado -Eusebio Godoy de 24 años, casado -...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/eusebio-godoy/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/eusebio-godoy/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("June 19, 1972 03:24:00"),
        title: "“ARTIGAS: ASESINAN A UN SOLDADO Y HUYEN”",
        description:
          "... El parte oficial señala: “...  - El día 15 de junio, una patrulla... integrada por un Cabo y tres Soldados, avistó en las proximidades del puente sobre el Arroyo Ñaquiná, en la Ruta 3, a 4 desconocidos... procedió a darles la voz de alto... los desconocidos en forma sorpresiva y alevosa abrieron de inmediato nutrido fuego con armas automáticas... fue alcanzado el soldado Eusebio Godoy, cayendo su cuerpo a las aguas del arroyo y siendo arrastrado por la corriente...”.",
        title1:
          "“EMOCIONADA MULTITUD DESPIDIÓ LOS RESTOS DEL SOLDADO EUSEBIO GODOY”",
        description1:
          "Artigas. En la mañana del sábado 17 ppdo. recibieron sepultura... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/eusebio-godoy/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/eusebio-godoy/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Soldado del Ejército abatido por Terrorista en zona rural.",
        description:
          "Eusebio Godoy, Soldado del Ejército Nacional fue abatido por Terrorista cuando cumplía servicio a la Patria.",
        images: [
          {
            src: "/eusebio-godoy/i_1.jpg",
            alt: "Durante la noche cuatro terroristas realizan disparos de armas de fuego y huyen a zona de montes.",
          },
          {
            src: "/eusebio-godoy/i_2.jpg",
            alt: "Tres Soldados al escuchar disparos desde su puesto de guardia se dirigen a inspeccionar la zona.",
          },
          {
            src: "/eusebio-godoy/i_3.jpg",
            alt: "El Soldado Eusebio Godoy es abatido por Terrorista cuando cumplía con su deber sirviendo a la Patria.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/eusebio-godoy/memorial.jpg",
        alt: "Aquí, en plena democracia, 15/06/1972 fue asesinado por un terrorista, el Soldado Eusebio Godoy.",
      },
    ],
  },
  {
    date: new Date("June 23, 1972 03:24:00"),
    title: "Soldados Eduardo Delgado y Victor Aguilar",
    slug: "eduardo-delgado-y-victor-aguilar",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Soldado Eduardo Delgado",
          age: 35,
          marital: "casado",
          daughter: 1,
          childsDescription: " adoptada, menor de edad",
          avatar: {
            src: "/eduardo-delgado-y-victor-aguilar/a_1.png",
            alt: "imagen de Soldado Eduardo Delgado",
          },
        },
      },
      {
        info: {
          name: "Soldado Victor Aguilar",
          age: 21,
          marital: "soltero",
          avatar: {
            src: "/eduardo-delgado-y-victor-aguilar/a_2.png",
            alt: "imagen de Soldado Victor Aguilar",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("June 24, 1972 03:24:00"),
        title:
          "“Pudo ser más Trágico, pues el Rodado Militar iba a Recoger otros oficiales”",
        description:
          "Ayer de mañana, exactamente a las 7 y 15-...- se consumaron nuevos, abominables y cobardes asesinatos perpetrados por terroristas que por sorpresa atacaron a tres militares... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/eduardo-delgado-y-victor-aguilar/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/eduardo-delgado-y-victor-aguilar/n_1.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("June 24, 1972 03:24:00"),
        title: "“TAMBIÉN HICIERON FUEGO DESDE UNA CAMIONETA ROJA”",
        description:
          "... Uno de los pocos testigos... es un vecino... Dice... a eso de las 7 y 10 recibió a una persona... vio venir por... Anzani... una camioneta... llevaba encendido, únicamente, los faros chicos... segundos después oyeron... una sucesión de disparos... Aparecen fotos.",
        title1: "“CON EL PADRE DEL SOLDADO DE 1ra. VÍCTOR A. AGUILAR ACOSTA”",
        description1:
          "“A las 5 y 30 de la mañana lo desperté... a eso de las 6 y 10... salió... a tomar el ómnibus... Era su único hijo varón y recién había cumplido 21 años... vivía la víctima con su padre, su madre y sus tres hermanas; su gemela y dos menores... el jefe de familia -que es obrero gráfico... -... “parece que tiraron al uniforme”... Aparecen fotos.",
        title2: "“40 ASESINATOS DE LA SEDICIÓN”",
        description2:
          "Un total de 40 personas - ... - han sido asesinadas por los conspiradores...",
        images: [
          {
            type: "noticia publicada",
            src: "/eduardo-delgado-y-victor-aguilar/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/eduardo-delgado-y-victor-aguilar/n_3.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 8)',
        date: new Date("June 24, 1972 03:24:00"),
        title:
          "“MATARON A 2 SOLDADOS E HIRIERON A UN OFICIAL DEL COMANDO GENERAL”",
        description:
          "Dos jóvenes soldados muertos y un oficial... herido fue el resultado del baleamiento realizado... “En las primeras horas de la mañana de hoy fue atacado cobardemente otro vehículo... Desde un vehículo Land Rover les fueron efectuadas varias ráfagas de sub -ametralladoras resultando muertos: -Soldado de 1ra. Víctor Ademir Aguilar Acosta... -Soldado de 1ra. Eduardo Delgado... resultó herido de consideración el Oficial...”. Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/eduardo-delgado-y-victor-aguilar/n_4.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/eduardo-delgado-y-victor-aguilar/n_5.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El País" (en Portada)',
        date: new Date("June 24, 1972 03:24:00"),
        title: "“SAÑA SEDICIOSA: AMETRALLARON A DOS SOLDADOS”",
        description: "... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/eduardo-delgado-y-victor-aguilar/n_6.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/eduardo-delgado-y-victor-aguilar/n_7.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 2)',
        date: new Date("June 24, 1972 03:24:00"),
        title: "“INSANIA FACCIOSA: DOS SOLDADOS MUERTOS”",
        description:
          "Ametrallaron un vehículo militar y huyeron: un Oficial Superior herido. Otro ataque contra las fuerzas del orden... ametrallaron despiadadamente una camioneta... Dos soldados de 1ª. Víctor Ademir Aguilar Acosta y Eduardo Delgado, murieron a consecuencia de los impactos recibidos... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/eduardo-delgado-y-victor-aguilar/n_8.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/eduardo-delgado-y-victor-aguilar/n_9.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Soldados asesinados en la vía pública.",
        description:
          "Eduardo Delgado y Víctor Aguilar, Soldados del Ejército Nacional, fueron asesinados por Terroristas del MLN-T.",
        images: [
          {
            src: "/eduardo-delgado-y-victor-aguilar/i_1.jpg",
            alt: "Vehículo militar circula por la vía pública. Terroristas, en otro vehículo, lo hacen por la misma calle en sentido contrario.",
          },
          {
            src: "/eduardo-delgado-y-victor-aguilar/i_2.jpg",
            alt: "Vehículo con Terroristas encandila a conductor del vehículo militar.",
          },
          {
            src: "/eduardo-delgado-y-victor-aguilar/i_3.jpg",
            alt: "Terroristas disparan asesinando a Eduardo Delgado y Víctor Aguilar, Soldados del Ejército Nacional y un tercer ocupante resulta herido.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/eduardo-delgado-y-victor-aguilar/m.jpg",
        alt: "Aquí, en plena democracia, 23/06/1972 fueron asesinados por un terroristas del MLN-T, los Soldados Eduardo Delgado y Victor Aguilar, pertenecientes al Ejército Nacional",
      },
    ],
  },
  {
    date: new Date("June 28, 1972 03:24:00"),
    title: "Vicente Orosa",
    slug: "vicente-orosa",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Vicente Orosa",
          nationality: "Español",
          age: 49,
          marital: "casado",
          childs: 2,
          childsDescription: " menores de edad",
          avatar: {
            src: "/vicente-orosa/a_1.png",
            alt: "imagen de Vicente Orosa (Español), chofer de CUTCSA",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Popular" (Página 5)',
        date: new Date("June 29, 1972 03:24:00"),
        title: "“TRABAJADOR DEL ÓMNIBUS MUERTO; SOLDADO HERIDO”",
        description:
          "... Un conductor de CUTCSA resultó muerto, un soldado fue herido de consideración... Aparecen fotos.",
        title1: "“OMNIBUSEROS: “MÁS QUE NUNCA PACIFICACIÓN CON SOLUCIONES””",
        description1:
          "... la resolución de la CNT de acompañar hoy..., el paro de transporte y llamar a la concurrencia al sepelio... Omnibuseros: basta de muertes. La Organización Obrera del Ómnibus (CNT) y el Sindicato Autónomo del Ómnibus dieron a conocer una declaración...: “... El humanismo, la solidaridad de la clase obrera ante este hecho se hace una vez más presente, manifestando su repudio ante esta muerte inocente...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/vicente-orosa/n_1.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/vicente-orosa/n_2.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("September 23, 1972 03:24:00"),
        title: "“CHOFER DE CUTCSA ASESINADO POR UN TUPAMARO YA DETENIDO”",
        description:
          "Quedó completamente aclarado el asesinato del obrero del transporte Vicente Jaime Orosa García, ocurrido el 28 de junio último... El asesino del obrero Orosa García resultó ser el tupamaro... alias “Mario” y su cómplice, que a su vez hirió a un integrante de las Fuerzas Conjuntas,... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/vicente-orosa/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/vicente-orosa/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Acción" (Página 8)',
        date: new Date("September 23, 1972 03:24:00"),
        title:
          "“CAPTURARON A..., MATADOR DEL OBRERO DEL TRANSPORTE VICENTE OROSA”",
        description:
          "Un tupamaro..., fue el autor de los disparos que le costaron la vida al trabajador de CUTCSA Vicente Jaime Orosa García... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/vicente-orosa/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/vicente-orosa/n_6.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Sediciosos asesinan a obrero del transporte",
        description:
          "Vicente Orosa, fue asesinado por integrantes del MLN-T, conduciendo un vehículo de transporte público.",
        images: [
          {
            src: "/vicente-orosa/i_1.jpg",
            alt: "Una patrulla militar detiene un vehículo de transporte para inspección de rutina de pasajeros.",
          },
          {
            src: "/vicente-orosa/i_2.jpg",
            alt: "Un soldado asciende al vehículo para inspeccionar a los pasajeros. Terroristas mantienen al guarda de rehén.",
          },
          {
            src: "/vicente-orosa/i_3.jpg",
            alt: "Los terroristas disparan hiriendo al soldado y asesinan a Vicente Orosa, conductor.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/vicente-orosa/m.jpg",
        alt: "Aquí, en plena democracia, 28/06/1972 fue asesinado por terroristas, Vicente Orosa.",
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“En la neblina de la guerra también murió un chofer de ómnibus de Montevideo. Se llamaba Vicente Orosa, le volaron la cabeza de un tiro el 28 de junio de 1972.</p>
            <p>Luis Nieto se acuerda. “... Un militante con responsabilidades, de los que quedaban a esa altura, iba dormitando en un ómnibus que iba al Cerro. Se despertó cuando los pararon en una pinza, en el Pantanoso. Se puso al lado del chofer y con el arma en la mano le dijo que acelerara; el chofer quedó sin saber qué hacer, afuera estaban los milicos apuntando.</p>
            <p>Este compañero me contó que se le había escapado un tiro,...”.</p>
            <p>Bernardo, uno de los tupamaros que brindaron su testimonio..., se refirió...:</p>
            <p>“Nosotros considerábamos esos casos como “daños colaterales”, normales en toda guerra. ¡Nosotros creíamos estar haciendo la guerra! La verdad, no nos preocupaba mucho. La muerte no era un problema, era parte del juego”...”.</p>`,
          year: new Date("2008-1-1"),
          name: "Historias tupamaras. Nuevos testimonios sobre los mitos del MLN",
          place: "Montevideo - Uruguay",
          edition: "Editorial Fin de Siglo",
          pages: "pág. 118",
          author: "Haberkorn",
        },
      ],
    },
  },
  {
    date: new Date("July 02, 1972 03:24:00"),
    title: "Agente (Retirado) Luis Barbizán",
    slug: "luis-barbizan",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Agente (Retirado) Luis Barbizán",
          age: 43,
          marital: "casado",
          childs: 3,
          childsDescription: " menores de edad",
          avatar: {
            src: "/luis-barbizan/a_1.png",
            alt: "imagen de Luis Barbizón",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("July 03, 1972 03:24:00"),
        title: "“ALEVOSO ASESINATO DE UN COMERCIANTE, EX POLICÍA”",
        description:
          "Un comerciante fue asesinado alevosamente anoche en presencia de su esposa y un amigo, por un individuo joven, que acompañado por una mujer,... le descerrajó cuatro tiros... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/luis-barbizan/n_1.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/luis-barbizan/n_2.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("July 06, 1972 03:24:00"),
        title: "“FUE UN FACCIOSO QUIEN ULTIMÓ A UN COMERCIANTE”",
        description:
          "..., sindicado como “fundador del Movimiento 22 de Diciembre” (la llamada “micro - facción” del MLN Tupamaros)... está requerido por el asesinato del ex agente policial Luis José Barbizón Giarchelli... La banda “22 de Diciembre”... considerado “desprendimiento” o “micro -facción” del M.L.N. Tupamaros... Se adjudican... el incendio del Club de Golf... estarían operando en estrecho contacto con el “O.P.R.33”... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/luis-barbizan/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/luis-barbizan/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title: "Policía retirado asesinado por Terroristas.",
        description:
          "Luis Barbizán, Retirado Policial y comerciante, es asesinado por Terroristas en su negocio. Su esposa presenció el homicidio.",
        images: [
          {
            src: "/luis-barbizan/i_1.jpg",
            alt: "Terroristas ingresan apuntando con sus armas en el comercio de Luis Barbizán.",
          },
          {
            src: "/luis-barbizan/i_2.jpg",
            alt: "Luis Barbizán intenta proteger a su esposa y un Terrorista le dispara en la espalda.",
          },
          {
            src: "/luis-barbizan/i_3.jpg",
            alt: "Luis Barbizán yace herido de muerte. Su esposa llora angustiada.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/luis-barbizan/m.jpg",
        alt: "Aquí, en plena democracia, 02/07/1972 fue asesinado por terroristas, Luis Barbizón.",
      },
    ],
  },
  {
    date: new Date("July 25, 1972 03:24:00"),
    title: "Coronel Artigas Álvarez",
    slug: "artigas-alvarez",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Coronel Artigas Álvarez",
          age: 49,
          marital: "casado",
          childs: 3,
          childsDescription: " 1 menor de edad",
          avatar: {
            src: "/artigas-alvarez/a_1.png",
            alt: "imagen de Coronel Artigas Álvarez",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("July 25, 1972 03:24:00"),
        title: "“LO AMETRALLAN AL SALIR DE SU CASA”",
        description: "Asesinaron a un Coronel... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/artigas-alvarez/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/artigas-alvarez/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El País" (en Portada)',
        date: new Date("July 26, 1972 03:24:00"),
        title: "“FACCIOSOS ASESINAN AL CORONEL ÁLVAREZ”",
        description: "... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/artigas-alvarez/n_3.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/artigas-alvarez/n_3.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 2)',
        date: new Date("July 26, 1972 03:24:00"),
        title: "“HIJA DE 9 AÑOS VIO AL CORONEL AGONIZANTE”",
        description:
          "... Una de las hijas -tiene 9 años - del Cnel. Artigas Gregorio Álvarez... no alcanzó a llegar a la escuela... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/artigas-alvarez/n_4.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/artigas-alvarez/n_5.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("July 26, 1972 03:24:00"),
        title: "“MATAR POR LA ESPALDA HÁBITO DE LA SEDICIÓN”",
        description:
          "Otro horrendo, cobarde y miserable crimen cometieron en la mañana de ayer, con premeditación y espantosa alevosía... un coronel del Ejército, el Sr. Artigas G. Álvarez, oriental, casado de 49 años de edad, fue asesinado por la espalda por un comando extremista...",
        title1: "“DOCE HORAS DE CAUTIVERIO PARA RAPIÑAR CAMIONETA”",
        description1:
          "Durante doce horas una familia del Cerrito de la Victoria estuvo secuestrada por los “Tupamaros” que se apoderaron de una camioneta de su propiedad para el asesinato del Cnel. Álvarez... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/artigas-alvarez/n_6.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/artigas-alvarez/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 10)',
        date: new Date("July 27, 1972 03:24:00"),
        title: "“PESAR MULTITUDINARIO EN LA DESPEDIDA AL CNEL. ÁLVAREZ”",
        description: "... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/artigas-alvarez/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/artigas-alvarez/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("February 17, 1973 03:24:00"),
        title: "“DOS TUPAMAROS ASESINARON AL CORONEL ARTIGAS ÁLVAREZ”",
        description: "Otro crimen esclarecido... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/artigas-alvarez/n_9.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/artigas-alvarez/n_9.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Oficial del Ejército Nacional asesinado frente a su hija y esposa.",
        description:
          "Artigas Álvarez, Coronel del Ejército Nacional, fue asesinado por Terroristas del MLN-T.",
        images: [
          {
            src: "/artigas-alvarez/i_1.jpg",
            alt: "Cabecillas terroristas, decidiendo ejecución de Artigas Álvarez, Coronel del Ejército.",
          },
          {
            src: "/artigas-alvarez/i_2.jpg",
            alt: "Artigas Álvarez, seguido de esposa e hija sale de su domicilio. Terroristas se aproximan.",
          },
          {
            src: "/artigas-alvarez/i_3.jpg",
            alt: "Terroristas asesinan al Coronel Artigas Álvarez.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/artigas-alvarez/m.jpg",
        alt: "Aquí, en plena democracia, 25/07/1972 fue asesinado por terroristas del MLN-T, Coronel del Ejército Nacional Artigas Álvarez.",
      },
    ],
  },
  {
    date: new Date("August 17, 1972 03:24:00"),
    title: "Inspector Darwin Fernández",
    slug: "darwin-fernandez",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Inspector Darwin Fernández",
          age: 42,
          marital: "casado",
          childs: 8,
          childsDescription: " menores de edad",
          avatar: {
            src: "/darwin-fernandez/a_1.png",
            alt: "imagen de Inspector Darwin Fernández",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("August 17, 1972 03:24:00"),
        title: "“COMBATE: MATAN A OFICIAL POLICIAL Y A UN TUPAMARO”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/darwin-fernandez/n_1.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/darwin-fernandez/n_2.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("August 17, 1972 03:24:00"),
        title: "“FUERON TRAS UN DELINCUENTE COMÚN: TROPIEZAN CON TUPAS”",
        description:
          "... un violento enfrentamiento... Un oficial Inspector perteneciente a la Comisaría 24ª, y un faccioso aún no identificado, perdieron la vida... un procedimiento en la calle Bogotá Nº 3915 casi Austria para detener a un delincuente común... el oficial inspector Darwin Fernández... fue recibido con disparos de armas de fuego... se oyó una detonación como de una granada, proveniente de la referida pieza... fue encontrado muerto un individuo... por efectos de la granada... en un dedo de la mano conserva aún la anilla del seguro... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/darwin-fernandez/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/darwin-fernandez/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 6)',
        date: new Date("August 18, 1972 03:24:00"),
        title: "“POLICÍA Y SEDICIOSO MUEREN EN ENFRENTAMIENTO”",
        description:
          "El trágico tiroteo tuvo lugar en finca del Cerro: las autoridades buscaban a un delincuente común. Un Oficial Inspector de la Seccional 24ª –que había concurrido acompañado por otros hombres...- hasta una finca del Cerro... fue recibido a balazos por un conspirador. El policía en cuestión, Darwin Fernández fue muerto a mansalva por... (a) “Pascual”... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/darwin-fernandez/n_5.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/darwin-fernandez/n_6.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Oficial de la Policía Nacional fue asesinado por terroristas en acto de servicio.",
        description:
          "Inspector Darwin Fernández, fue asesinado por Terroristas.",
        images: [
          {
            src: "/darwin-fernandez/i_1.jpg",
            alt: "El Oficial Insp. Fernández en cumplimiento del servicio ingresa con su personal en una pensión.",
          },
          {
            src: "/darwin-fernandez/i_2.jpg",
            alt: "El Oficial Insp. Fernández golpea la puerta de una de las habitaciones.",
          },
          {
            src: "/darwin-fernandez/i_3.jpg",
            alt: "Al ingresar, un terrorista dispara al Oficial y cae herido de muerte.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/darwin-fernandez/m.jpg",
        alt: "Aquí, en plena democracia, 17/08/1972 fue asesinado por terroristas del MLN-T, Inspector Darwin Fernández.",
      },
    ],
  },
  {
    date: new Date("August 19, 1972 03:24:00"),
    title: "Teniente Segundo Ricardo Braida",
    slug: "ricardo-braida",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Teniente Segundo Ricardo Braida",
          age: 25,
          marital: "casado",
          daughter: 1,
          childsDescription: " menor de edad (viuda embarazada)",
          avatar: {
            src: "/ricardo-braida/a_1.png",
            alt: "imagen de Teniente Segundo Ricardo Braida",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("August 19, 1972 03:24:00"),
        title: "“TUPAMAROS ASESINARON A UN TENIENTE DEL EJÉRCITO”",
        description:
          "Un teniente del ejército, de 25 años, fue muerto a tiros esta tarde por un tupamaro que logró escapar...",
        images: [
          {
            type: "noticia publicada",
            src: "/ricardo-braida/n_1.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/ricardo-braida/n_2.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("August 20, 1972 03:24:00"),
        title: "“SANGUINARIO TUPAMARO ASESINÓ A UN OFICIAL”",
        description:
          "Lo baleó alevosamente y fugó en un ómnibus... Aparece foto y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/ricardo-braida/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ricardo-braida/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "EL Diario" (en Portada)',
        date: new Date("August 20, 1972 03:24:00"),
        title: "“IDENTIFICARON AL TUPA QUE ASESINÓ AYER AL OFICIAL”",
        description:
          "Aparecen fotos en una de las cuales a su pie dice: “Este sujeto es... (a) “Arturo”... que ayer ultimó a sangre fría... al Teniente 2º Ricardo L. Braida...”. Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/ricardo-braida/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ricardo-braida/n_6.jpg",
            alt: "página diario completa publicada por el diario EL Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("August 20, 1972 03:24:00"),
        title: "“EL ASESINO:..., ES BUSCADO DESDE EL AÑO PASADO”",
        description:
          "Un faccioso requerido desde hace un año y cuya esposa está presa desde junio último... fue identificado... como el asesino del Tte. 2º Ricardo L. Braida... Fue detenido por primera vez el 23 de febrero de 1971 en la ciudad de Maldonado... realizando práctica de tiro... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/ricardo-braida/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ricardo-braida/n_8.jpg",
            alt: "página diario completa publicada por el diario EL Diario",
          },
        ],
      },
      {
        name: 'Diario "EL Popular" (Página 2)',
        date: new Date("August 20, 1972 03:24:00"),
        title: "“TENIENTE MUERTO POR UN TUPAMARO”",
        description:
          "Ayer... fue ultimado de dos balazos a quemarropa un Teniente 2º... cuando de particular... condujo a Cno. Carrasco y Alejandro Gallinal a un tupamaro detenido el cual debía realizar un “contacto”... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/ricardo-braida/n_9.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/ricardo-braida/n_10.jpg",
            alt: "página diario completa publicada por el diario EL Popular",
          },
        ],
      },
      {
        name: 'Diario "EL País" (en Portada)',
        date: new Date("August 20, 1972 03:24:00"),
        title: "“OFICIAL ULTIMADO POR UN FACCIOSO QUE LOGRÓ FUGAR”",
        description:
          "El Teniente Braida fue asesinado a quemarropa... A mansalva fue asesinado..., un Oficial... Llegó el tupamaro “enlace”... no trepidó en extraer un arma de fuego, descerrajando dos balazos contra Braida que fue alcanzado con los proyectiles en la cabeza... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/ricardo-braida/n_11.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/ricardo-braida/n_12.jpg",
            alt: "página diario completa publicada por el diario EL País",
          },
        ],
      },
      {
        name: 'Diario "EL País" (en Portada)',
        date: new Date("August 21, 1972 03:24:00"),
        title: "“IDENTIFICAN ASESINO DEL TENIENTE BRAIDA”",
        description:
          "Un año atrás habían pedido su detención... Se trata de..., conocido en filas subversivas bajo el alias de “Arturo”, de 23 años... Emocionada multitud presente en el sepelio del joven oficial. Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/ricardo-braida/n_13.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/ricardo-braida/n_14.jpg",
            alt: "página diario completa publicada por el diario EL País",
          },
        ],
      },
      {
        name: 'Diario "EL Día" (en Portada)',
        date: new Date("August 21, 1972 03:24:00"),
        title: "“... EL ASESINO DE BRAIDA”",
        description:
          "... (a) “Arturo”... fue identificado como el asesino del teniente 2º Ricardo L. Braida Matalonga... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/ricardo-braida/n_15.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ricardo-braida/n_16.jpg",
            alt: "página diario completa publicada por el diario EL Día",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Oficial del Ejército asesinado por Terrorista en la vía pública.",
        description:
          "Ricardo Braida, Teniente del Ejército Nacional fue asesinado por un Terrorista cuando trasladaba a un detenido en un vehículo.",
        images: [
          {
            src: "/ricardo-braida/i_1.jpg",
            alt: "Terrorista intenta liberar a sedicioso custodiado por el Teniente Braida.",
          },
          {
            src: "/ricardo-braida/i_2.jpg",
            alt: "Teniente Braida se defiende frente al terrorista armado",
          },
          {
            src: "/ricardo-braida/i_3.jpg",
            alt: "Terrorista hiere gravemente al Teniente Braida.",
          },
          {
            src: "/ricardo-braida/i_4.jpg",
            alt: "Terrorista ejecuta a Teniente Braida, caído en el suelo.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/ricardo-braida/m.jpg",
        alt: "Aquí, en plena democracia, 19/08/1972 fue asesinado por un terrorista, Teniente Segundo Ricardo Braida, perteneciente al Ejército Nacional.",
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Hugo Wilkins</p>
            <p>“… La gran mayoría de los hechos violentos, en donde cayó un miembro de las Fuerzas Armadas o de la Policía y/o eventualmente algún civil, fueron el resultado de combates en donde era la vida de uno u otro. Es legítimo resistir una captura o intentar liberar a un compañero.</p>
            <p>El Ejército y la Policía no iban con flores a los allanamientos y a los contactos.…”.”</p>`,
          year: new Date("2009-1-1"),
          name: "Memorias de insurgencia. Historias de vida y militancia en el MLN-Tupamaros. 1965-1975",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Banda Oriental S.R.L.",
          pages: "págs. 245, 262",
          author: "Aldrighi",
        },
      ],
    },
  },
  {
    date: new Date("April 01, 1974 03:24:00"),
    title: "Soldado Nelson Vique y Manuel Tobio",
    slug: "nelson-vique-y-manuel-tobio",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Soldado Nelson Vique",
          age: 31,
          marital: "casado",
          childs: 3,
          childsDescription: " menores de edad",
          avatar: {
            src: "/nelson-vique-y-manuel-tobio/a_1.png",
            alt: "imagen de Soldado Nelson Vique",
          },
        },
      },
      {
        info: {
          name: "Manuel Tobio (Español)",
          age: 40,
          marital: "soltero",
          avatar: {
            src: "/nelson-vique-y-manuel-tobio/a_2.png",
            alt: "imagen de Manuel Tobio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El País" (en Portada)',
        date: new Date("April 02, 1974 03:24:00"),
        title: "“REFRIEGA EN LA UNIÓN: SOLDADO MUERTO A TIROS”",
        description:
          "Uno de los sediciosos atacantes fue abatido. Un sangriento y espectacular suceso se registró... cuando conspiradores que se habían dado cita en un café de la Unión, abrieron fuego sobre los integrantes de una patrulla militar... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/nelson-vique-y-manuel-tobio/n_1.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/nelson-vique-y-manuel-tobio/n_2.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("April 02, 1974 03:24:00"),
        title: "“SOLDADO Y FACCIOSO SON MUERTOS EN TIROTEO”",
        description:
          "Se hallan heridos un Oficial y el dueño del bar, escenario del suceso... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/nelson-vique-y-manuel-tobio/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/nelson-vique-y-manuel-tobio/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 15)',
        date: new Date("April 02, 1974 03:24:00"),
        title: "“DOS MUERTOS Y DOS HERIDOS EN RECIO TIROTEO CON SEDICIOSOS”",
        description:
          "Un soldado y un conspirador muertos así como un oficial y el propietario de un bar heridos de gravedad es el saldo de un violento tiroteo...",
        images: [
          {
            type: "noticia publicada",
            src: "/nelson-vique-y-manuel-tobio/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/nelson-vique-y-manuel-tobio/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 6)',
        date: new Date("April 03, 1974 03:24:00"),
        title: "“PROFUNDO DOLOR EN VELATORIO Y SEPELIO DEL SOLDADO VIQUE”",
        description:
          "Escenas de tocante dramatismo se vivieron durante el velatorio y sepelio del soldado Nelson Vique, muerto en el enfrentamiento con tupamaros... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/nelson-vique-y-manuel-tobio/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/nelson-vique-y-manuel-tobio/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    apologyForCrimeInImages: [
      {
        title:
          "Soldado del Ejército Nelson Vique y Manuel Tobio asesinados por Terroristas.",
        description:
          "Nelson Vique, fue asesinado en cumplimiento del servicio militar por terroristas. Manuel Tobio, el propietario del comercio, falleció días después producto de las graves heridas.",
        images: [
          {
            src: "/nelson-vique-y-manuel-tobio/i_1.jpg",
            alt: "Un Oficial y el Soldado Nelson Vique, integrantes del Ejército Nacional en servicio, se aprestan a solicitar documentos a sospechosos en un bar.",
          },
          {
            src: "/nelson-vique-y-manuel-tobio/i_2.jpg",
            alt: "Los terroristas disparan contra el Oficial, el Soldado Nelson Vique y Manuel Tobio, dueño del bar.",
          },
          {
            src: "/nelson-vique-y-manuel-tobio/i_3.jpg",
            alt: "Terroristas huyen. Yacen el en el piso heridos de muerte el Soldado Vique y el Señor Tobio. El Oficial queda gravemente herido.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/nelson-vique-y-manuel-tobio/m.jpg",
        alt: "Aquí, en plena democracia, 01/04/1974 fueron asesinados por terroristas, Soldado Nelson Vique y Manuel Tobio.",
      },
    ],
  },
  {
    date: new Date("April 21, 1974 03:24:00"),
    title: "Capitán Julio Gutiérrez",
    slug: "julio-gutierrez",
    type: "asesinatos",
    victims: [
      {
        info: {
          name: "Capitán Julio Gutiérrez",
          age: 32,
          marital: "casado",
          childs: 3,
          childsDescription: " menores de edad (1 de 11 meses)",
          avatar: {
            src: "/julio-gutierrez/a_1.png",
            alt: "imagen de Capitán Julio Gutiérrez",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("April 23, 1974 03:24:00"),
        title:
          "“TRES SEDICIOSAS MUERTAS: HIRIERON A DOS OFICIALES Y UNO ESTÁ MUY GRAVE”",
        description: "... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/julio-gutierrez/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/julio-gutierrez/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 7)',
        date: new Date("April 23, 1974 03:24:00"),
        title:
          "“TRES SEDICIOSAS MUERTAS Y DOS MILITARES HERIDOS EN UN TIROTEO”",
        description:
          "Trágico desenlace tuvo un enfrentamiento entre elementos sediciosos y las Fuerzas Armadas,... Tres tupamaras, dos de las cuales se encontraban requeridas, encontraron la muerte en tanto que un oficial fue herido de suma gravedad y otro en forma leve...",
        images: [
          {
            type: "noticia publicada",
            src: "/julio-gutierrez/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/julio-gutierrez/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 13)',
        date: new Date("July 12, 1974 03:24:00"),
        title: "“ERAN INHUMADOS ESTA TARDE LOS RESTOS DEL CAPITÁN GUTIÉRREZ”",
        description:
          "... En la jornada culminó el velatorio de los despojos mortales de quien, víctima de la sedición,... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/julio-gutierrez/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/julio-gutierrez/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 8)',
        date: new Date("July 13, 1974 03:24:00"),
        title: "“INHUMARON EN FLORES AL CAPITÁN JULIO GUTIÉRREZ”",
        description:
          "Fueron inhumados ayer en la ciudad de Trinidad (Flores)... Julio César Gutiérrez, capitán de Artillería..., luego de una prolongada agonía... “deja un hogar modesto con tres pequeños hijos, uno de 5 años, otro de 6 y el menor de tan sólo 11 meses de edad”... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/julio-gutierrez/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/julio-gutierrez/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("August 07, 1968 03:24:00"),
    title: "Doctor Ulysses Pereira Reverbel - primer secuestro",
    slug: "ulysses-pereira-reverbel-primer-secuestro",
    type: "secuestros",
    victims: [
      {
        info: {
          name: "Doctor Ulysses Pereira Reverbel",
          age: 50,
          // marital: "casado",
          // childs: 3,
          // childsDescription: " menores de edad (1 de 11 meses)",
          avatar: {
            src: "/ulysses-pereira-reverbel-primer-secuestro/a.png",
            alt: "imagen de Doctor Ulysses Pereira Reverbe",
          },
          kidnapping: {
            init: new Date("August 07, 1968 03:24:00"),
            end: new Date("August 11, 1968 03:24:00"),
            days: 4,
            description: " días en cautiverio",
          },
        },
      },
    ],
    fact: "SECUESTRAN Y LIBERAN AL PRESIDENTE INTERVENTOR DE UTE DOCTOR ULYSSES PEREIRA REVERBEL CAUSANDO HERIDAS DE BALA A SU CHOFER Y SECRETARIO",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("August 07, 1968 03:24:00"),
        title:
          "“PEREIRA REVERBEL FUE SECUESTRADO POR LOS TUPAMAROS”. “APARECIERON EL AUTO OFICIAL Y LA CAMIONETA; AMBOS VACÍOS”. “ESTÁ SIENDO UTILIZADO COMO REHÉN”",
        description:
          "Aparecen fotos y dibujos describiendo el secuestro que dice: “Fue herido el chofer y el secretario privado”. “El hecho ocurrió en la puerta de su casa”.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 7)',
        date: new Date("August 07, 1968 03:24:00"),
        title:
          "“TUPAMAROS: ASUMEN LA RESPONSABILIDAD. Distribuyeron Comunicado”",
        description:
          "Cerca de las diez de la mañana, varias radioemisoras de la capital recibieron un sobre azul conteniendo un comunicado del llamado Movimiento de Liberación Nacional (Tupamaros) en el que explican las razones del secuestro del Presidente de UTE, Dr. Ulysses Pereira Reverbel. El comunicado está mimeografiado y firmado por el Comando ”Mario Robaina Méndez”, teniendo como distintivo una estrella que a su vez contiene una gran T con la sigla MLN. Hasta el momento, se conocían las acciones del Comando Carlos Flores grupo que llevaba el nombre del tupamaro muerto, a fines de 1966, en un violento tiroteo con la policía, a la altura de Burgues y Br Artigas. Ese comando fue responsable del hurto de una gran cantidad de gelinita en Pan de Azúcar en enero de este año. Aparece una galería de fotos de los principales comandos tupamaros...",
        title1: "“ESTARÍA HERIDO UN RAPTOR”",
        description1:
          "Según declaraciones de Rey a la policía, escuchó un diálogo entre dos miembros del “Comando” luego de haber sido herido:- “Si se resiste tirále, pegále un tiro.- No, yo no puedo, estoy herido-”. Según la impresión de Rey, en consecuencia una de las personas del grupo estaría herida.",
        title2: "VARIOS GRAVES DELITOS HAN SIDO CONFIGURADOS”",
        description2:
          "Hace referencia la configuración de varios y graves delitos que se habrían cometido en el episodio del rapto y circunstancia que lo rodea.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("August 07, 1968 03:24:00"),
        title: "“GUARDAN DE REHÉN A PEREIRA REVERBEL LOS TUPAMAROS”",
        description:
          "Hacen una descripción de los hechos y aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("August 08, 1968 03:24:00"),
        title: "“DRAMÁTICO SUSPENSO POR LA SUERTE DE PEREIRA REVERBEL”",
        description: "...",
        subtitle: "“Huellas de Arena Blanca”",
        subDescription:
          "El hallazgo de dos vehículos utilizados… en la camioneta se hallaron huellas de arena blanca...",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_7.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_8.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 2)',
        date: new Date("August 08, 1968 03:24:00"),
        title: "“TUPAMAROS”",
        description:
          "Hasta ahora... y curiosamente, las informaciones aparentemente más documentadas sobre la vida y milagro de los Tupamaros, han provenido del exterior. Recientemente se distribuyó en Montevideo, un suplemento de la revista chilena “Punto Final”, caracterizada por la difusión de documentos sobre movimientos revolucionarios en América Latina, que con el título “Tupamaros: germen de la lucha armada en el Uruguay” suministra no solamente información de tipo político sino que recoge un decálogo...",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_9.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_10.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("August 08, 1968 03:24:00"),
        title: "“SIN PISTAS DEL DOCTOR PEREIRA REVERBEL NI DE SUS RAPTORES”",
        description:
          "Aparecen fotos a cuyo pie dicen: “El Doctor Pereira Reverbel cuyas recias convicciones ideológicas hicieran que los extremistas lo eligieran como víctima de un hecho sin precedentes en el país”.",
        subtitle: "“Golpe Criminal Gestado a Punta de Metralletas”",
        subDescription:
          "Hasta esta madrugada continuaba la incertidumbre acerca del paradero del Presidente del Directorio Interventor de UTE, Dr. Ulysses Pereira Reverbel, secuestrado ayer a las 9 de la mañana por cuatro terroristas. En la emergencia fueron heridos de bala... el secretario y el chofer del Dr. Pereira Reverbel... los cuatro portaban revólveres y metralletas. Detalles reveladores de un golpe fría y criminalmente planeado hasta en sus más mínimos detalles. Los testigos identificaron a dos de los “tupamaros”...",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_11.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_12.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("August 08, 1968 03:24:00"),
        title:
          "“TENSA BÚSQUEDA EN TODO EL PAÍS DEL PRESIDENTE DE UTE DR. PEREIRA REVERBEL”",
        description:
          "... El rapto se produjo frente su domicilio, en la Rambla Wilson, y fue precedido de una brevísima y dramática escena ya que, por su enérgica y valiente resistencia, dos funcionarios de UTE que le habían ido a buscar e intentaron oponerse al secuestro, resultaron heridos de bala...",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_13.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_14.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("August 08, 1968 03:24:00"),
        title: "“SÓLO DOS RAPTORES A LOS CUALES NO PUDE RECONOCER”",
        description:
          "Relato del chofer del auto, Nicolás Galdós García, en que fue secuestrado el Presidente de UTE...",
        title1: "“A.F.U.T.E. ASOCIACIÓN DE FUNCIONARIOS DE UTE”",
        description1:
          "“Frente al incalificable hecho en que fuesen objeto el Presidente del Directorio Interventor de UTE Doctor Ulysses Pereira Reverbel y los funcionarios del Instituto Sres. Miguel Angel Rey y Nicolás Galdós García, la Asociación de Funcionarios de UTE (A.F.U.T.E.) condena y repudia tal censurable forma de lucha y alerta a los compañeros y a la opinión pública en general sobre tales prácticas desconocidas hasta ahora en nuestro ámbito exhortándolos a estrechar filas en defensa de nuestras instituciones democráticas y de nuestra forma tradicional de convivencia”.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_15.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_16.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 4)',
        date: new Date("August 08, 1968 03:24:00"),
        title: "“EL VOLANTE DE LOS TERRORISTAS”",
        description:
          "...-Como advertencia de que nada quedará impune y de que la justicia popular sabrá ejercerse por los canales y de la forma que corresponda y convenga, es que hemos detenido al Sr. Ulysses Pereira Reverbel... Advertimos a las fuerzas represivas: 1) El Sr. Pereira Reverbel en nuestro poder, garantizará con su persona la integridad física de nuestros compañeros y de todos cuantos hoy son perseguidos. 2) La seguridad e integridad física de Pereira Reverbel dependerá de la conducta de las fuerzas represivas y de los grupos fascistas a su servicio, por lo tanto estaremos muy atentos a los métodos que utilicen. 3) En consecuencia, no intenten buscarlo por que comprometen la seguridad e integridad física del detenido...",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_17.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_18.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 12)',
        date: new Date("August 08, 1968 03:24:00"),
        title: "“LOS TUPAMAROS SON UNA ORGANIZACIÓN FANTASMA”",
        description:
          "Organización fantasma en nuestro país, el Movimiento de Liberación Nacional, “Tupamaros”, ha motivado interés en naciones limítrofes, hasta el extremo de procurarse en ellas una difusión de documentos de MLN que en Uruguay han tenido escasa circulación. Los “Tupamaros” se manejan con un documento básico rotulado “30 Preguntas a un Tupamaro”, que se distribuye clandestinamente y en el que, bajo la forma de un cuestionario, se posibilita la emisión de los postulados del movimiento.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_19.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_20.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("August 08, 1968 03:24:00"),
        title: "“TUPAMAROS: ACTÚAN DISPUESTOS A TODO AFIRMAN LAS VÍCTIMAS”",
        description:
          "Aparecen declaraciones de Miguel Ángel Rey Núñez y de Nicolás Galdós García secretario del Presidente de UTE y chofer respectivamente.",
        title1: "“UNÁNIME REPUDIO DE TODOS LOS SECTORES”",
        description1:
          "Diversos sectores políticos reaccionaron inmediatamente después de tomarse conocimiento oficial del secuestro del Presidente Interventor de UTE Dr. Ulysses Pereira Reverbel. En declaraciones públicas se manifestó unánimemente el repudio al insólito acto y a la filosofía de quienes lo concibieron. Aparecen declaraciones del Comité Ejecutivo de la Unión Colorada y Batllista, del Senador Zelmar Michelini condenando el secuestro en su audición de CX 18 Radio Sport..., legisladores del Partido Colorado repudiando al acto de violencia cometido contra la persona del Sr. Presidente de UTE rubricado por Alba Roballo, y otros legisladores colorados y grupos políticos.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_21.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_22.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 11)',
        date: new Date("August 09, 1968 03:24:00"),
        title: "“SEIS IMÁGENES DEL SECUESTRO”",
        description:
          'En bosquejos aparece una secuencia de dibujos a cuyo pie dice: "Tupamaros rodean el coche de Pereira Reverbel”. “Caen heridos el chofer y el secretario”. “Un coche choca al que va tras los raptores”. “El chofer pide auxilio por el intercomunicador”. “Los secuestradores abandonan al secretario”. “El jerarca de UTE redacta una nota a Pacheco".',
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_23.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_24.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("August 12, 1968 03:24:00"),
        title: "“LO ENCONTRÉ SUCIO, BARBUDO Y DOPADO, AFIRMÓ GRACIELA PÉREZ”",
        description:
          "... Calle Vidal y Fuentes 3141 casi Manuel Alonso... era de noche, era el punto de reunión obligado de todos los cronistas y vecindario. No era para menos. Allí se había registrado a la hora 21.10 la aparición del presidente de UTE Dr. Ulysses Pereira Reverbel, luego del sensacional rapto de que fuera objeto el último miércoles... Se veía muy cansado, los ojos desorbitados e inyectados en sangre, muy barbudo, la camisa blanca muy sucia, el traje de color marrón arrugado y con restos de briznas de paja y una corbata color roja a lunares blancos algo floja sobre el cuello. Dijo que tenía mucha sed y manifestó algo de que había sido “dopado”. Se quejaba de un pinchazo en el muslo y otro que tenía en la mano derecha la cual se frotaba constantemente.",
        subtitle: "“Como Apareció”",
        subDescription:
          "... La primera noticia sobre su aparición se debió a un llamado anónimo recibido en la “Radio El Espectador”...",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_27.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_28.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("August 12, 1968 03:24:00"),
        title: "“FUE LIBERADO AYER PEREIRA REVERBEL”",
        description:
          "Aparece dibujo a cuyo pie dice: “Cubierto por capuchas cada vez que aparecieron a la vista de Pereira Reverbel, los Tupamaros preservaron así su identidad ante quien, una vez en libertad, podía llegar a ubicarlos. Esta precaución puede hacer creer que la organización terrorista no pensó seriamente en ultimarlo, ya que en este caso la precaución habría sido inútil. Así reconstruyó CENT el instante en que narcotizan a Pereira Reverbel antes de conducirlo a un jeep y abandonarlo.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_29.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_30.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 10)',
        date: new Date("August 12, 1968 03:24:00"),
        title:
          '"MUY AGOTADO APARECIÓ AYER PEREIRA REVERBEL. Hubo Un Aviso por Teléfono..."',
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_31.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-priimer-secuestro/n_32.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("June 17, 1969 03:24:00"),
        title:
          "“GUARIDA DESCUBIERTA. AQUÍ SECUESTRARON AL DR. PEREIRA REVERBEL”",
        description:
          "Ayer fue ubicada la casa donde los “tupamaros” tuvieron secuestrado, durante cinco días, en setiembre pasado, al Presidente de UTE Dr. Ulysses Pereira Reverbel... Aparecen fotos de la mencionada finca.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_25.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-reverbel-primer-secuestro/n_26.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“A las siete de la mañana del miércoles 7 de agosto, siete tupamaros -entre ellos Pepe- están prontos para la acción...</p>
          <p>Unos minutos antes de las 9:00 cuatro tupamaros se encuentran en la vereda: Rivero Cedrés y Coquito Rodríguez</p>
          <p>Recalde en la parada del ómnibus, Mujica y Marenales a unos metros de distancia enfrascados en una discusión: el que lleva el uniforme quiere detener al civil...<p>
          <p>Todos, de reojo, observan hacia la puerta del lujoso edificio de ocho pisos ubicado en Rambla Wilson 517...</p>
          <p>A las 9:08 llega el Chevrolet azul... El chofer, Nicolás Galdós, estaciona frente al edificio... Del auto baja Miguel Ángel Rey, el secretario de Pereira Reverbel...</p>
          <p>A las 9:10 sale Pereira Reverbel...</p>
          <p>... Rivero Cedrés va por la puerta delantera y encañona al chofer, Rodríguez Recalde por la trasera hace lo mismo con el secretario... mientras el policía Marenales y el civil renegado Mujica interceptan a Pereira Reverbel.</p>
          <p>... -¡Acompáñenos por favor!- le dice Mujica, y lo toma de un brazo pistola en mano</p>
          <p>... el chofer Galdós... y el decidido secretario Rey enfrentan a los otros dos tupamaros dentro del auto.</p>
          <p>... Rivero Cedrés advierte que el pulpejo carnoso de la mano del chofer oficial ha quedado sobre el caño y aprieta el gatillo de su 45...</p>
          <p>... La bala hiere al chofer en la mano, rebota en el volante...</p>
          <p>Con Rivero Cedrés al volante, el Chevrolet azul arranca... Pero atrás, el secretario del presidente de UTE, sigue aferrado al asiento luchando ahora contra Marenales, Rodríguez Recalde y Mujica...</p>
          <p>...-¡Pegale un tiro! – grita Rivero Cedrés...p>
          <p>... Rey puede zafarse, logra manotear su pistola...</p>
          <p>... Rodríguez Recalde se ve en la mira y grita de dolor...</p>
          <p>Han sonado dos estampidos: uno, de la bala que hiere al tupamaro, y otro, de la pistola de Mujica... le pega un tiro entre pecho y abdomen al secretario de Pereira Reverbel.</p>
          <p>... El secretario Rey se encuentra tirado en el piso del auto,...</p>
          <p>... Detrás a menos de cincuenta metros, marcha la Chevrolet verde en la que se ve asomar la cabeza de Rodríguez Ducós...</p>
          <p>Cerca del rancho de los pescadores..., los revolucionarios abren la puerta trasera del auto e intentan bajar a Rey,..</p>
          <p>... Rey cae y luego se recuesta contra un montículo de tierra...</p>
          <p>... sale de la empresa constructora un Fusca con dos personas... bajan para ayudarlo y lo suben al Volkswagen.</p>
          <p>No, les digo que sigan al auto. Soy el secretario el Presidente de UTE. Lo están secuestrando en ese auto...</p>
          <p>... el Fusca sale a su alcance. Pero detrás del escarabajo se ubica la camioneta verde de los guerrilleros.</p>
          <p>–¡Ahí vamos! –responde Martínez Platero</p>
          <p>... el conductor del Fusca ve como la Chevrolet verde se sitúa al lado...</p>
          <p>... el parachoques de la camioneta se incrusta en el lateral trasero del escarabajo,...</p>
          <p>Los tupamaros siguen su camino en un Land Rover...</p>
          <p>Al pasar frente el monumento a José Batlle y Ordóñez, le aplicaron un somnífero a Pereira Reverbel y éste sufrió un ahogo... Uno de los tupamaros debió asistirlo con respiración boca a boca, hasta que recuperó el aire.</p>
          <p>... el lugar en el que se encerraría al Presidente de UTE se ubicaba a siete kilómetros de la casa de Pepe.</p>
          <p>Era un local semirrural, a pocos metros de la planta emisora de radio El Espectador.</p>
          <p>Pereira Reverbel es llevado a una habitación interior, aislada, a la que los tupamaros llaman “jaula”.</p>
          <p>La pickup verde,... fue hallada en la avenida Garzón... Tenía barro y arena blanca adheridos al guardabarros.”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "págs. 348-355",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("September 10, 1969"),
    title: "Doctor Gaetano Pellegrini Giampietro",
    slug: "doctor-gaetano-pellegrini-giampietro",
    type: "secuestros",
    fact: "SECUESTRO DEL DR. GAETANO PELLEGRINI GIAMPIETRO",
    victims: [
      {
        info: {
          name: "Doctor Gaetano Pellegrini Giampietro",
          age: 44,
          marital: "casado",
          childs: 3,
          childsDescription: " menores de edad",
          nationality: "Italiano",
          avatar: {
            src: "/doctor-gaetano-pellegrini-giampietro/a.png",
            alt: "imagen de Gaetano Pellegrini Giampietro",
          },
          kidnapping: {
            init: new Date("September 09, 1969"),
            end: new Date("November 21, 1969"),
            days: 73,
            description: " días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("September 11, 1969"),
        title: "“CUATRO BUSCADOS POR DESAPARICIÓN DEL BANQUERO”",
        description:
          "“... comunicado: “En horas de la mañana de ayer, en circunstancias que llegaba a un rotativo capitalino, fue secuestrado el Director de un Banco de Plaza, Dr. Gaetano Pellegrini Giampietro, casado de 44 años de edad, padre de tres niños de 13, 11 y 7 años de edad... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/doctor-gaetano-pellegrini-giampietro/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/doctor-gaetano-pellegrini-giampietro/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("September 11, 1969"),
        title: "“BUSCAN A CUATRO INVOLUCRADOS EN EL SECUESTRO DE PELLEGRINI”",
        description:
          "... solicita información que permita ubicar a las personas cuya foto se acompaña, las que se encuentran involucradas en el hecho... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/doctor-gaetano-pellegrini-giampietro/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/doctor-gaetano-pellegrini-giampietro/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("November 21, 1969"),
        title:
          "“EN EL PUERTO DEL BUCEO, LIBERARON ESTA MADRUGADA AL DR. PELLEGRINI”",
        description: "... Aparecen fotos...",
        images: [
          {
            type: "noticia publicada",
            src: "/doctor-gaetano-pellegrini-giampietro/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/doctor-gaetano-pellegrini-giampietro/n_5.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 15)',
        date: new Date("November 21, 1969"),
        title: "“UN COMANDO FUERTEMENTE ARMADO CONSUMÓ EL OPERATIVO SECUESTRO”",
        description:
          "Raptado en su propio auto desde El Diario... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/doctor-gaetano-pellegrini-giampietro/n_6.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/doctor-gaetano-pellegrini-giampietro/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("November 29, 1969"),
        title: "“FUE HALLADO AYER EL SEGUNDO ENTERRADERO DE PELLEGRINI”",
        description: "... Aparecen fotos...",
        images: [
          {
            type: "noticia publicada",
            src: "/doctor-gaetano-pellegrini-giampietro/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/doctor-gaetano-pellegrini-giampietro/n_7.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("November 29, 1969"),
        title: "“LA ÚLTIMA VEZ QUE LOS VI FUE HACE 15 DÍAS” DIJO EL JARDINERO”",
        description: "...",
        title1:
          "“VECINO: “TODOS EN EL BARRIO DECÍAN QUE AQUÍ VIVÍAN LOS EXTREMISTAS”",
        description1: "...",
        title2: "“IMPORTANTE DATO BRINDARON DOS EXTREMISTAS APRESADOS”",
        description2:
          "Uno cuidó al Dr. Pellegrini... Aparecen fotos y croquis de...",
        images: [
          {
            type: "noticia publicada",
            src: "/doctor-gaetano-pellegrini-giampietro/n_8.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/doctor-gaetano-pellegrini-giampietro/n_9.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Fernando González Guyer se siente responsable por las bombas, los ajusticiamientos, los secuestros, los muertos del MLN.</p>
          <p>A mí me tocó custodiar en la Cárcel del Pueblo a Pellegrini Giampietro, el hijo de un banquero... una cosa patética, era un banquero italiano que estaba acá... para nosotros ser banquero ya era suficiente mérito como para secuestrarlo.</p>
          <p>El tipo lloraba, se angustiaba, claro: no entendía. Lo teníamos encerrado en una carpa adentro de una pieza. Teníamos prohibido hablarle... era un muchacho...”.</p>
          <p>Pellegrini Giampietro estuvo setenta y tres días secuestrado por el MLN”.</p>`,
          year: new Date("2008-1-1"),
          name: "Historias tupamaras. Nuevos testimonios sobre los mitos del MLN",
          place: "Montevideo - Uruguay",
          edition: "Editorial Fin de Siglo",
          pages: "pág. 129",
          author: "Haberkorn",
        },
        {
          fragment: `<p>“... H. A. P. -... Del Banco Francés e Italiano, ya habíamos secuestrado a su presidente, Gaetano Pellegrini Giampietro, en setiembre de 1969... Lo esperamos en las cercanías del diario La Mañana de cuya empresa, SEUSA, creo que también era presidente. Fuimos Candán, Wassen, Blanco Katras y yo, con un grupo de apoyo que ahora no puedo identificar. Lo trasbordamos a otro vehículo que nos esperaba en el Cementerio Central, que se encargó de llevar el taxi utilizado hasta el Parque Rodó y lo entregamos a un grupo del interior de Lagomar, que en un carro de caballos lo llevó a otro sitio donde estuvo unos días, a la espera de trasladarlo a Montevideo...”</p>`,
          year: new Date("2015-1-1"),
          name: "Palabra de Amodio. La otra historia de los Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Plaza",
          pages: "pág. 194",
          author: "Marius",
        },
        {
          fragment: `<p>“J. M. –Cuénteme del secuestro de Gaetano Pellegrini Giampietro.</p>
          <p>H. A. P. -... en uno de esos locales estaba Pellegrini, custodiado por gente con un bajísimo nivel de integración... bajo unas (sic) carpa instalada en el comedor de una casa en la que realizaban reuniones de estudiantes para organizar volanteadas y pegatinas, el MLN-T mantenía secuestrado a uno de los jefes de la patronal bancaria...</p>
          <p>... cuando me entrevisté con Pellegrini para comunicarle su pronta liberación, supe que en el local anterior se había discutido su ejecución...”.</p>`,
          year: new Date("2015-1-1"),
          name: "Palabra de Amodio. La otra historia de los Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Plaza",
          pages: "pág. 212",
          author: "Marius",
        },
      ],
    },
  },
  {
    date: new Date("July 25, 1970"),
    title: "Doctor Daniel Pereira Manelli",
    slug: "daniel-pereira-manelli",
    type: "secuestros",
    fact: "SECUESTRAN AL JUEZ LETRADO DE INSTRUCCIÓN DR. DANIEL PEREIRA MANELLI, LIBERACIÓN",
    victims: [
      {
        info: {
          name: "Doctor Daniel Pereira Manelli",
          age: 40,
          marital: "casado",
          childs: 2,
          childsDescription: " menores de edad",
          nationality: "Argentino, nacionalizado Uruguayo",
          avatar: {
            src: "/daniel-pereira-manelli/a.png",
            alt: "imagen de Daniel Pereira Manelli",
          },
          kidnapping: {
            init: new Date("July 28, 1970"),
            end: new Date("August 05, 1970"),
            days: 7,
            description: " días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("July 28, 1970"),
        title:
          "“ES EL TERCER SECUESTRO PERPETRADO EN DOS AÑOS POR GRUPOS SEDICIOSOS”",
        description:
          "Otro golpe criminal. El secuestro del Dr. Daniel Pereira Manelli que conmueve hoy a la opinión pública, sucede cuando está a punto de cumplirse el segundo aniversario de la aciaga jornada en la que el Uruguay conoció por primera vez las alternativas de esta forma de terrorismo político. Quienes emprendieron la lucha clandestina, en efecto, se apoderaron el 7 de Agosto de 1968 del Dr. Ulisses Pereira Reverbel... reincidiendo el 9 de Setiembre del pasado año cuando secuestraron al Dr, Gaetano Pellegrini Giampetro...",
        title1: "“EL JUEZ RAPTADO ACTUÓ EN VARIAS CAUSAS SEDICIOSAS”",
        description1:
          "... Casi un centenar de sediciosos fueron procesados por su decisión en los últimos cuatro años... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/daniel-pereira-manelli/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/daniel-pereira-manelli/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("July 28, 1970"),
        title: "“LO SECUESTRARON PARA LUEGO NEGOCIAR POR OTRAS LIBERTADES”",
        description:
          "Propondrían el canje de diez presos por Pereira Manelli... Aparecen fotos a cuyo pie dicen: “... reconocida como una de las sediciosas que intervino en el secuestro...” y “... otra de la mujeres reconocidas como participante en el secuestro...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/daniel-pereira-manelli/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/daniel-pereira-manelli/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("July 29, 1970"),
        title: "“COMO SE LLEVÓ A CABO EL TERCER SECUESTRO”",
        description:
          "... una noticia que trascendió a todos los ámbitos con la velocidad del rayo causó conmoción: se había consumado aparentemente por parte de elementos asociados para atentar contra la Constitución, el secuestro del Dr. Daniel Pereira Manelli... Aparecen fotos.",
        title1: "“PERSONALIDAD Y CARRERA DEL JUEZ”",
        description1:
          "Larga y meritoria es la carrera del Dr. Daniel Pereyra Manelli que tiene, ahora, 40 años de edad. De condición económica modesta, poco después de los 22 años ingresó en el Poder Judicial, como administrativo del más modesto grado. Era, por entonces estudiante de Derecho. Su carrera estudiantil la hizo...",
        title2: "“SACADO DE SU PROPIO LECHO POR EL GRUPO SEDICIOSO”",
        description2: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/daniel-pereira-manelli/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/daniel-pereira-manelli/n_5.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 4)',
        date: new Date("July 29, 1970"),
        title: "“CAMIONETA ABANDONADA CON 2 GRANADAS CREÓ GRAN RIESGO”",
        description:
          "Entre todos los vehículos que... estuvieron directa o indirectamente vinculados al secuestro del Juez Letrado de Instrucción, Dr. Daniel Pereira Manelli, el abandono por parte de los presuntos conspiradores de la camioneta International tipo pick-up,... presenta características singulares. En el interior de la caja descubierta y al alcance de los numerosos niños que pululan por el lugar y que sólo por azar no entraron en contacto con los poderosos explosivos, se encontraron dos granadas... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/daniel-pereira-manelli/n_6.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/daniel-pereira-manelli/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 5)',
        date: new Date("July 29, 1970"),
        title: "“UTILIZARON EN EL SECUESTRO MUCHOS VEHÍCULOS HURTADOS”",
        description:
          "... muchos de los siete vehículos hurtados en diferentes circunstancias, fueron utilizados para confundir la acción policial y facilitar los propósitos delictivos del grupo que finalmente consumó la audaz acción contra el magistrado... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/daniel-pereira-manelli/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/daniel-pereira-manelli/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("August 05, 1970"),
        title: "“PEREIRA MANELLI ENTREGÓ UN NUEVO MENSAJE DE SEDICIOSOS”",
        description:
          "Estuvo recluido siempre en una pieza muy chica. Aparecen fotos a cuyo pie dicen: “... el Juez De Instrucción Daniel Pereira Manelli se encuentra entre los suyos, liberado que fue por los sediciosos en pleno Parque Batlle y Ordóñez...” y “El Dr. Pereira Manelli...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/daniel-pereira-manelli/n_9.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/daniel-pereira-manelli/n_9.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“El 28 de julio se secuestra al juez de Instrucción Pereira Manelli,... Pereira Manelli permanece secuestrado varios días, luego de lo cual es liberado. Antes de abandonar la Cárcel del Pueblo...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Autobiografía de Amodio Pérez",
          place: "Montevideo - Uruguay",
          edition: " Editorial Arca",
          pages: "pág. 47",
          author: "Pérez",
        },
        {
          fragment: `<p>“... También intervine en algunos desarmes y en el secuestro de Pereyra Manelli.”</p>
          <p>-¿El Juez?</p>
          <p>-Sí, lo sacamos de la cama donde dormía con la mujer, lo llevamos y lo tuvimos cinco o seis días”.</p>`,
          year: new Date("2004-1-1"),
          name: "El Cholo González. Un cañero de Bella Unión",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Trilce",
          pages: "pág. 82",
          author: "Gilio",
        },
      ],
    },
  },
  {
    date: new Date("July 31, 1970"),
    title: "Daniel Anthony Mitrione",
    slug: "dan-mitrione-secuestro",
    type: "secuestros",
    fact: "SECUESTRAN A MITRIONE, ESCAPAN JONES Y ROSENFELD",
    victims: [
      {
        info: {
          name: "Daniel Anthony Mitrione",
          age: 50,
          marital: "casado",
          childs: 9,
          childsDescription: "(5 menores de edad)",
          nationality: "Norteamericano",
          avatar: {
            src: "/dan-mitrione/a.png",
            alt: "imagen de Daniel Anthony Mitrione",
          },
          kidnapping: {
            init: new Date("July 31, 1970"),
            end: new Date("August 09, 1970"),
            days: 9,
            description: "días secuestrado. Ejecutado en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("July 31, 1970"),
        title: "“OLA DE SECUESTROS”",
        description:
          "Se llevan al cónsul de Brasil y a un funcionario del F.B.I. Otro pudo escapar arrojándose del auto en que era conducido... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione-secuestro/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione-secuestro/n_1.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("August 01, 1970"),
        title: "“CRÓNICA DE UNA MAÑANA VIOLENTA”",
        description:
          "... los sediciosos desataron en la mañana de ayer una nueva oleada de violencia. Intentaron, en efecto, un total de cuatro secuestros, aunque finalmente consiguieron sus propósitos en sólo dos de los casos. En efecto, lograron raptar al Cónsul General de Brasil en nuestro País Sr. Aloiso Días y al “empleado de la Embajada de los Estados Unidos de América”... Sr. Dan Mitrione. Otros dos funcionarios diplomáticos norteamericanos-Gordon Jones, Segundo Secretario de la Embajada y Nathan Rosenfeld, Agregado Cultural-resistieron a sus captores y en circunstancias distintas... lograron liberarse. El siguiente es un resumen cronológico de los hechos protagonizados. Aparece plano.",
        title1: "“MITRIONE HERIDO”",
        description1:
          "... “El funcionario de U.S.A. recibió una herida de bala durante la acción...”...",
        title2: "“RÉCORD: DIECISÉIS HURTOS DE VEHÍCULOS”",
        description2:
          "... Concretamente, las denuncias de hurtos o de participación de vehículos en procedimientos, llegaron a un total de 16, según se enumeran:...",
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione-secuestro/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione-secuestro/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("August 01, 1970"),
        title: "“TRAS EL SECUESTRO Y PESE A ESTAR MANIATADO, PUDO HUIR”",
        description:
          "El secuestro del Segundo Secretario de la embajada de EE.UU. en nuestro país, Sr. Michael Gordon Jones, tuvo contornos realmente dramáticos,... cuando haciendo alarde de una destreza física admirable pudo huir de sus captores al saltar desde una camioneta tipo “pick-up” en marcha, sin, prácticamente, ninguna posibilidad de mover brazos y piernas...",
        title1: "“ATADO Y HERIDO MR. JONES HUYÓ DE SUS RAPTORES”",
        description1:
          "...Estaba envuelto en una frazada y atado con varias vueltas de una cuerda. Tenía la cabeza ensangrentada... Aparecen fotos.",
        title2: "“PENSARON QUE SE TRATABA DE UN DEMENTE”",
        description2:
          "...Aparecen fotos... “...vio cuando Michael Gordon Jones se arrojó de la caja de la camioneta “Morris”...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione-secuestro/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione-secuestro/n_3.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 4)',
        date: new Date("August 01, 1970"),
        title: "“EL TÉCNICO MITRIONE NO PUDO EVITAR EL SECUESTRO”",
        description:
          "... el secuestro del Sr. Dan Anthony Mitrione, norteamericano, de 50 años de edad, funcionario de la Agencia Internacional para el Desarrollo (AID) y agregado de la Misión de Asistencia Técnica de EE.UU. en nuestro país... Aparecen fotos.",
        title1: "“DOS PROFESIONALES ENVUELTOS EN LAS DRAMÁTICAS ESCENAS”",
        description1:
          "Varias personas, ajenas totalmente a los hechos, vivieron momentos de hondo dramatismo ayer, mientras se desarrollaba el secuestro del Segundo Secretario de la Embajada Norteamericana Mr. Gordon Jones..., se vieron, durante varios minutos amenazados por las armas de los sediciosos...",
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione-secuestro/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione-secuestro/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 8)',
        date: new Date("August 01, 1970"),
        title: "“... GUIÓ EL AUTO DEL QUE SE ARROJÓ GORDON JONES”",
        description: "Secuestrador capturado. Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione-secuestro/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione-secuestro/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 15)',
        date: new Date("August 07, 1970"),
        title: "“ESTA NOCHE A LAS 24 VENCE EL PLAZO: CRECE LA ANGUSTIA”",
        description:
          "Esta medianoche vence el siniestro plazo dado por los conspiradores...",
        title1: "“LA ESPOSA DEL CÓNSUL ESTÁ AL BORDE DEL SHOCK”",
        description1:
          "... la esposa del cónsul brasilero, María Apparecida de Días Gomide, sufría hoy una profunda crisis de imprevistas proyecciones, como consecuencia de la agravación de la situación... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione-secuestro/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione-secuestro/n_7.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p class="font-bold">“Viernes 31 de julio Los secuestros de Mitrione, Días Gomide y Gordon Jones</p>

          <p class="font-bold mt-4">7.00 horas. Rambla de Pocitos</p>
          <p>Amanece. Una Tupamara de 28 años, “Beatriz”, responsable del grupo militar que debe secuestrar a Mitrione, se apresta a salir de su casa en la rambla de Pocitos, donde vive con otro militante clandestino, Andrés Cultelli... Beatriz había caído presa en octubre de 1969... el 8 de marzo de 1970 logró fugar de la cárcel de mujeres...</p>
          <p>La indicación de secuestrar a Mitrione se la entregó personalmente Héctor Amodio el 30 de junio de 1970...</p>

          <p class="font-bold mt-4">8.15 Malvín Este</p>
          <p>Como todas las mañanas, el sargento Manuel Emilio González, chofer de Mitrione, partió de la Jefatura de Policía de Montevideo, conduciendo el Opel Rekord... al llegar encontró a Mitrione aguardando en la puerta de su casa...</p>
          <p>Mitrione se sentó junto a González en el asiento delantero... doblaron a la izquierda por Alejandro Gallinal...</p>
          <p>Antes de llegar a la intersección con Aconcagua, una camioneta pick-up International que se encontraba estacionada junto a la vereda este de Alejandro Gallinal, emprendió la marcha en sentido sur-norte hacia el automóvil policial, chocándolo violentamente del lado del conductor y desviándolo hacia la vereda. La conducía Andrés Cultelli. A su lado Jorge Torres, funcionario del Ministerio de Educación y Cultura.</p>
          <p>En la vereda oeste de Alejandro Gallinal... una pareja aparentaba esperar el ómnibus: Beatriz armada con una metralleta que ocultaba bajo un poncho de lana, y “Darío” que portaba un revólver calibre 38.</p>
          <p>Inmediatamente después del impacto, el sargento González los vio aparecer por el lado derecho de su automóvil. Seguida por Darío, Beatriz se acercó sin titubeos, rompió el vidrio con la metralleta, encañonó a Mitrione y le ordenó salir del auto.</p>
          <p>Mirando hacia el sur por Alejandro Gallinal,..., se hallaba estacionada una camioneta Ford con toldo, ocupada por Hugo Dermit y Carlos Julián Hernández Machado...</p>
          <p>Mientras Torres desarmaba al sargento González, Beatriz, acompañada por Darío condujo a Mitrione hasta la Ford, que se había acercado al lugar de los hechos. Le ordenó subir a la caja y tenderse en el piso. Tras el subió Darío; pero en ese momento, tal vez por la brusquedad del salto, se le escapó accidentalmente un disparo que hirió a Mitrione en la parte superior del pecho...</p>

          <p class="font-bold mt-4">9.00 horas. Rambla de Pocitos y barrio de la Unión</p>
          <p>Entretanto, aproximadamente a las 9.00 de la mañana, otros grupos del MLN secuestraban en el garaje de su vivienda a Michael Gordon Jones, segundo secretario de la embajada de Estados Unidos... En el mismo lugar vivía el agregado cultural Nathan Rosenfeld...</p>
          <p>El secuestro fue ejecutado por la columna Cuarenta...</p>
          <p>En el secuestro de Jones participaron siete tupamaros...</p>
          <p>El chofer del vehículo oficial se aprestaba a recoger en su vivienda de Juan Benito Blanco 1255 al ministro de Obras Públicas Walter Pintos Risso. Cuando encendió el motor dos hombres y una mujer lo encañonaron... Lo obligaron a descender del vehículo y lo dejaron en compañía de un tercer tupamaro...</p>
          <p>Dentro de esta camioneta se apostaría el “grupo de apoyo”, tres hombres con armas largas...</p>
          <p>Poco antes de la hora en que los dos funcionarios estadounidenses acostumbraban salir para el trabajo, cuatro tupamaros ingresaron al garaje... Bajaron del ascensor algunos habitantes del edificio...: los tupamaros los agruparon contra una pared...</p>
          <p>Cuando apareció Nathan Rosenfeld, dos integrantes del comando lo sujetaron...</p>
          <p>A los pocos minutos apareció Gordon Jones... El responsable le preguntó si era Jones. Al responder que sí, le pegó con el caño de la pistola en la nuca. Cayó al suelo, le atamos las manos con alambre y lo metimos en una gran bolsa... Le dimos un fierrazo también a Rosenfeld, metimos a Jones en el Impala y nos fuimos los cinco.</p>
          <p>En un descampado Jones fue trasladado a la caja de una camioneta Austin de color verde, sin toldo... “Fernando” y “Jorge” se dirigieron hacia el lugar donde los esperaba el vehículo de la “cárcel del pueblo”: la esquina de Gauna y Rafael Pérez...</p>
          <p>Pero el automóvil de la cárcel del pueblo nunca llegó... Jorge bajó de la caja de la Austin...</p>
          <p>En ese momento Jones advirtió que había quedado solo... comenzó a gritar pidiendo auxilio, Jorge volvió a la caja, le dio un golpe en la cabeza con el caño de la pistola y subió a la cabina. Jones se fingió inconsciente.</p>
          <p>Los dos tupamaros se preguntaron que hacer... En el instante que la Austin se puso en movimiento, Jones decidió arriesgarse: tomó impulso y se arrojó al suelo...</p>

          <p class="font-bold mt-4">8.50 horas Carrasco Norte</p>
          <p>Poco antes de las 9.00 de la mañana, un hombre que se identificó como técnico de UTE llamó a la puerta de un chalet ubicado en Potosí 2031..., donde vivía Aloysio Días Gomide, cónsul y primer secretario de la embajada de Brasil... La mucama le abrió la puerta y en ese momento se introdujeron cinco tupamaros –cuatro hombres y una mujer– armados con pistolas y una metralleta. Integraban el comando el estudiante de Derecho Adolfo Wassen y el obrero Luis Heber Correa Díaz... En una camioneta estacionada sobre Potosí esperaban otros cuatro tupamaros: tres estudiantes avanzados de Medicina (entre ellos Aurelio Sergio Fernández Peña) y el cuarto un conocido intelectual. Portaban armas largas que escondían en la funda de una máquina de tejer.</p>
          <p>En la lujosa residencia se encontraban la esposa del cónsul María Aparecida Leal y los seis hijos de la pareja, cuyas edades oscilaban entre los dos y quince años...</p>
          <p>Días Gomide, que aún se encontraba en piyama, fue obligado a acompañarlos en su propio automóvil... Wassen condujo hasta el lugar del trasbordo...</p>
          <p>... El grupo que realizó este secuestro pertenecía a la columna Quince. La acción fue planificada y supervisada por Alicia Rey, que no participó.</p>

          <p class="font-bold mt-4">9.15 horas. Curva de Maroñas</p>
          <p>A varios kilómetros de Malvín, en la Curva de Maroñas, Mitrione fue trasladado a una camioneta Volkswagen Kombi de color morado. En la parte trasera se hallaba “Felipe”, un estudiante avanzado de Medicina de 25 años, encargado de asistir e inyectar un sedante a los secuestrados... Felipe fue el responsable de la custodia de Mitrione durante los diez días de su cautiverio.</p>

          <p class="font-bold mt-4">9.30 horas. Cárcel del Pueblo</p>
          <p>Aunque el secuestro lo hizo la Uno, fue la Quince la columna encargada de mantener en cautiverio a Mitrione. La casa de Espinosa estaba ubicada en la Avenida Centenario 4115, entre las calles Juan Sebastián Elcano y El Cairo...</p>
          <p>Espinosa y su mujer eran enfermeros del Hospital de Clínicas y tenían una hija de dos años... Durante un breve período Fly estuvo en la misma habitación que había permanecido Mitrione...</p>

          <p class="font-bold mt-4">16.00 Barrio de la Unión</p>
          <p>Pese a estar atado y envuelto en una frazada, Gordon Jones no había perdido detalle de lo que sucedía a su alrededor.</p>
          <p>Logró describir a la policía tan precisamente la camioneta Austin..., que poco después una patrulla la reconoció estacionada en el mismo lugar de la Unión donde había sido dejada... los investigadores concluyeron que su propietario debía ser un guerrillero... la camioneta había sido comprada con documento falso por Manuel Marx Menéndez...</p>
          <p>... Por la tarde Sergio Emigidio da Rosa decidió arriesgarse y pasar a recuperarla. Desde la ventana de una casa en la que se hallaban ocultos, los policías lo vieron llegar... Cuando estaba por subir al automóvil cayeron sobre él y lo arrestaron...”.</p>
          `,
          year: new Date("2007-1-1"),
          name: "El caso Mitrione,",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Trilce",
          pages: "págs. 37-44, 47-48, 53-54",
          author: "Aldrighi",
        },
        {
          fragment: `<p>“... El 31 de julio –tres días después de haber secuestrado al juez Pereira Manelli–, los tupamaros esperaban a Mitrione muy cerca de su casa..., una camioneta pick-up Internacional –conducida por Andrés Cultelli, quien iba acompañado por Jorge Torres– se fue de frente contra el auto de Mitrione y lo chocó con violencia del lado de la puerta del conductor.</p>
          <p>Otros dos tupamaros, “Beatriz” y “Darío”, estaban parados en la esquina y se fueron encima del vehículo chocado. Beatriz rompió el vidrio con la metralleta, encañonó a Mitrione y lo hizo salir. Torres redujo al Sargento González y lo desarmó... Mitrione fue conducido hasta una camioneta Ford con toldo-donde esperaban Hugo Dermit y Carlos Hernández Machado-, que se encontraba estacionada a pocos metros. Le ordenaron subirse a la caja y acostarse bocarriba. Y en ese momento a Darío se le escapó un tiro que dio en el pecho del agente estadounidense...</p>
          <p>En la Curva de Maroñas -...- trasladaron a Mitrione a una camioneta Kombi camuflada como ambulancia, donde “Felipe”, estudiante de Medicina, le prestó los primeros auxilios al herido. Recorrieron otros cuatro kilómetros... donde levantaron a otro secuestrado: el cónsul brasileño Aloysio Marés Días Gomide,..., sorprendido en su casa del barrio Carrasco Norte por un comando de la columna 15, en el que participaban el Nepo Adolfo Wasem, y Henry Engler, alias Octavio...</p>
          <p>La “ambulancia” se dirigió entonces a un local del barrio Pérez Castellano.</p>
          <p>La Kombi con los secuestrados bajó por la rampa y se introdujo en el garaje hasta quedar dentro de la vivienda... Mitrione y Días Gomide permanecieron cautivos en el apartamento de Centenario 4115, entre Juan Sebastián Elcano y El Cairo...”. ”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "págs. 466-467",
          author: "Pernas",
        },
        {
          fragment: `<p>“... El 31 de julio varios comandos del MLN, en una operación combinada, capturaron a Dan A. Mitrione..., y a Aloysio Mares Días Gomide...</p>
          <p>Michael Gordon Jones..., logró fugar mientras que... fracasaba el operativo destinado a capturar a Nathan Rosenfeld...”.</p>`,
          // year: new Date("1990-1-1"),
          name: "La tregua armada",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "págs. 466-467",
          author: "Fernández Huidobro",
        },
      ],
    },
  },
  {
    date: new Date("July 31, 1970"),
    title: "Aloysio Días Gomide",
    slug: "aloysio-dias-gomide",
    type: "secuestros",
    fact: "SECUESTRAN Y LIBERAN AL CÓNSUL BRASILEÑO ALOYSIO DÍAS GOMIDE",
    victims: [
      {
        info: {
          name: "Aloysio Días Gomide",
          age: 49,
          marital: "casado",
          childs: 4,
          childsDescription: "menores de edad",
          nationality: "Brasileño",
          avatar: {
            src: "/aloysio-dias-gomide/a.png",
            alt: "imagen de Aloysio Días Gomide",
          },
          kidnapping: {
            init: new Date("July 31, 1970"),
            end: new Date("February 21, 1971"),
            days: 205,
            description: "días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("July 31, 1970"),
        title: "“OLA DE SECUESTROS”",
        description:
          "Se llevan al cónsul de Brasil y a un funcionario del F.B.I. Otro pudo escapar arrojándose del auto en que era conducido... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione-secuestro/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione-secuestro/n_1.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("August 01, 1970"),
        title: "“CRÓNICA DE UNA MAÑANA VIOLENTA”",
        description:
          "... los sediciosos desataron en la mañana de ayer una nueva oleada de violencia. Intentaron, en efecto, un total de cuatro secuestros, aunque finalmente consiguieron sus propósitos en sólo dos de los casos. En efecto, lograron raptar al Cónsul General de Brasil en nuestro País Sr. Aloiso Días y al “empleado de la Embajada de los Estados Unidos de América”... Sr. Dan Mitrione. Otros dos funcionarios diplomáticos norteamericanos-Gordon Jones, Segundo Secretario de la Embajada y Nathan Rosenfeld, Agregado Cultural-resistieron a sus captores y en circunstancias distintas... lograron liberarse. El siguiente es un resumen cronológico de los hechos protagonizados. Aparece plano.",
        title1: "“MITRIONE HERIDO”",
        description1:
          "... “El funcionario de U.S.A. recibió una herida de bala durante la acción...”...",
        title2: "“RÉCORD: DIECISÉIS HURTOS DE VEHÍCULOS”",
        description2:
          "... Concretamente, las denuncias de hurtos o de participación de vehículos en procedimientos, llegaron a un total de 16, según se enumeran:...",
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione-secuestro/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione-secuestro/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 15)',
        date: new Date("August 07, 1970"),
        title: "“ESTA NOCHE A LAS 24 VENCE EL PLAZO: CRECE LA ANGUSTIA”",
        description:
          "Esta medianoche vence el siniestro plazo dado por los conspiradores...",
        title1: "“LA ESPOSA DEL CÓNSUL ESTÁ AL BORDE DEL SHOCK”",
        description1:
          "... la esposa del cónsul brasilero, María Apparecida de Días Gomide, sufría hoy una profunda crisis de imprevistas proyecciones, como consecuencia de la agravación de la situación... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/dan-mitrione-secuestro/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/dan-mitrione-secuestro/n_7.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("February 22, 1971"),
        title: "“EL DÍA QUE RAPTARON AL CÓNSUL DÍAS GOMIDE”",
        description:
          "La mañana del 31 de julio de 1970 estaba destinada a inscribirse en los anales del terrorismo como la “mañana violenta”. En ella fueron secuestrados el entonces Cónsul del Brasil en el Uruguay Aloysio Mares Días Gomide...",
        title1: "“GEOFFREY JACKSON Y CLAUDE FLY AÚN EN PODER DE SUS RAPTORES”",
        description1:
          "Con la liberación del Cónsul brasileño Días Gomide son dos ahora los ciudadanos que permanecen en manos de los secuestradores: Claude Fly... y Geoffrey Jackson... Fly hacen 199 días que su familia fue sumida en la desesperación... Aparecen foto",
        images: [
          {
            type: "noticia publicada",
            src: "/aloysio-dias-gomide/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/aloysio-dias-gomide/n_1.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("February 22, 1971"),
        title:
          "“DEMACRADO, DELGADO Y VESTIDO CON TRAJE DE ALPACA GRIS, SIN CORBATA”",
        description:
          "A las 23.07 se reencontró con su abnegada esposa... tras una separación de exactamente 203 días... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/aloysio-dias-gomide/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/aloysio-dias-gomide/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("February 23, 1971"),
        title:
          "“DÍAS GOMIDE SE ENTERÓ DE QUE LO LIBERARÍAN SÓLO 10 MINUTOS ANTES”",
        description:
          "...ANSA...Días Gomide habría sido envuelto en una sábana momentos después del secuestro,... permaneció-sostiene ANSA-durante los casi siete meses de su cautiverio sin ver la luz del sol... suponiéndose estuvo escondido “en corredores o subterráneos”... no sabía si iba a vivir o no”...",
        title1: "“PERÚ: UNÁNIME CONDENA PARA LOS SEDICIOSOS”",
        description1: "Días Gomide y la prensa...",
        images: [
          {
            type: "noticia publicada",
            src: "/aloysio-dias-gomide/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/aloysio-dias-gomide/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("February 26, 1971"),
        title: "“TRAS SU SECUESTRO FUE DROGADO Y MANTENIDO EN “UN CUBÍCULO”",
        description:
          "Días Gomide... El diplomático condenó los métodos de los tupamaros uruguayos, a los que calificó de “minorías desesperadas” y que en “nombre de un supuesto deseo de justicia, pretenden imponer sus convicciones a través de los medios violentos...”... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/aloysio-dias-gomide/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/aloysio-dias-gomide/n_5.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p class="font-bold">“Viernes 31 de julio Los secuestros de Mitrione, Días Gomide y Gordon Jones</p>

          <p class="font-bold mt-4">7.00 horas. Rambla de Pocitos</p>
          <p>Amanece. Una Tupamara de 28 años, “Beatriz”, responsable del grupo militar que debe secuestrar a Mitrione, se apresta a salir de su casa en la rambla de Pocitos, donde vive con otro militante clandestino, Andrés Cultelli... Beatriz había caído presa en octubre de 1969... el 8 de marzo de 1970 logró fugar de la cárcel de mujeres...</p>
          <p>La indicación de secuestrar a Mitrione se la entregó personalmente Héctor Amodio el 30 de junio de 1970...</p>

          <p class="font-bold mt-4">8.15 Malvín Este</p>
          <p>Como todas las mañanas, el sargento Manuel Emilio González, chofer de Mitrione, partió de la Jefatura de Policía de Montevideo, conduciendo el Opel Rekord... al llegar encontró a Mitrione aguardando en la puerta de su casa...</p>
          <p>Mitrione se sentó junto a González en el asiento delantero... doblaron a la izquierda por Alejandro Gallinal...</p>
          <p>Antes de llegar a la intersección con Aconcagua, una camioneta pick-up International que se encontraba estacionada junto a la vereda este de Alejandro Gallinal, emprendió la marcha en sentido sur-norte hacia el automóvil policial, chocándolo violentamente del lado del conductor y desviándolo hacia la vereda. La conducía Andrés Cultelli. A su lado Jorge Torres, funcionario del Ministerio de Educación y Cultura.</p>
          <p>En la vereda oeste de Alejandro Gallinal... una pareja aparentaba esperar el ómnibus: Beatriz armada con una metralleta que ocultaba bajo un poncho de lana, y “Darío” que portaba un revólver calibre 38.</p>
          <p>Inmediatamente después del impacto, el sargento González los vio aparecer por el lado derecho de su automóvil. Seguida por Darío, Beatriz se acercó sin titubeos, rompió el vidrio con la metralleta, encañonó a Mitrione y le ordenó salir del auto.</p>
          <p>Mirando hacia el sur por Alejandro Gallinal,..., se hallaba estacionada una camioneta Ford con toldo, ocupada por Hugo Dermit y Carlos Julián Hernández Machado...</p>
          <p>Mientras Torres desarmaba al sargento González, Beatriz, acompañada por Darío condujo a Mitrione hasta la Ford, que se había acercado al lugar de los hechos. Le ordenó subir a la caja y tenderse en el piso. Tras el subió Darío; pero en ese momento, tal vez por la brusquedad del salto, se le escapó accidentalmente un disparo que hirió a Mitrione en la parte superior del pecho...</p>

          <p class="font-bold mt-4">9.00 horas. Rambla de Pocitos y barrio de la Unión</p>
          <p>Entretanto, aproximadamente a las 9.00 de la mañana, otros grupos del MLN secuestraban en el garaje de su vivienda a Michael Gordon Jones, segundo secretario de la embajada de Estados Unidos... En el mismo lugar vivía el agregado cultural Nathan Rosenfeld...</p>
          <p>El secuestro fue ejecutado por la columna Cuarenta...</p>
          <p>En el secuestro de Jones participaron siete tupamaros...</p>
          <p>El chofer del vehículo oficial se aprestaba a recoger en su vivienda de Juan Benito Blanco 1255 al ministro de Obras Públicas Walter Pintos Risso. Cuando encendió el motor dos hombres y una mujer lo encañonaron... Lo obligaron a descender del vehículo y lo dejaron en compañía de un tercer tupamaro...</p>
          <p>Dentro de esta camioneta se apostaría el “grupo de apoyo”, tres hombres con armas largas...</p>
          <p>Poco antes de la hora en que los dos funcionarios estadounidenses acostumbraban salir para el trabajo, cuatro tupamaros ingresaron al garaje... Bajaron del ascensor algunos habitantes del edificio...: los tupamaros los agruparon contra una pared...</p>
          <p>Cuando apareció Nathan Rosenfeld, dos integrantes del comando lo sujetaron...</p>
          <p>A los pocos minutos apareció Gordon Jones... El responsable le preguntó si era Jones. Al responder que sí, le pegó con el caño de la pistola en la nuca. Cayó al suelo, le atamos las manos con alambre y lo metimos en una gran bolsa... Le dimos un fierrazo también a Rosenfeld, metimos a Jones en el Impala y nos fuimos los cinco.</p>
          <p>En un descampado Jones fue trasladado a la caja de una camioneta Austin de color verde, sin toldo... “Fernando” y “Jorge” se dirigieron hacia el lugar donde los esperaba el vehículo de la “cárcel del pueblo”: la esquina de Gauna y Rafael Pérez...</p>
          <p>Pero el automóvil de la cárcel del pueblo nunca llegó... Jorge bajó de la caja de la Austin...</p>
          <p>En ese momento Jones advirtió que había quedado solo... comenzó a gritar pidiendo auxilio, Jorge volvió a la caja, le dio un golpe en la cabeza con el caño de la pistola y subió a la cabina. Jones se fingió inconsciente.</p>
          <p>Los dos tupamaros se preguntaron que hacer... En el instante que la Austin se puso en movimiento, Jones decidió arriesgarse: tomó impulso y se arrojó al suelo...</p>

          <p class="font-bold mt-4">8.50 horas Carrasco Norte</p>
          <p>Poco antes de las 9.00 de la mañana, un hombre que se identificó como técnico de UTE llamó a la puerta de un chalet ubicado en Potosí 2031..., donde vivía Aloysio Días Gomide, cónsul y primer secretario de la embajada de Brasil... La mucama le abrió la puerta y en ese momento se introdujeron cinco tupamaros –cuatro hombres y una mujer– armados con pistolas y una metralleta. Integraban el comando el estudiante de Derecho Adolfo Wassen y el obrero Luis Heber Correa Díaz... En una camioneta estacionada sobre Potosí esperaban otros cuatro tupamaros: tres estudiantes avanzados de Medicina (entre ellos Aurelio Sergio Fernández Peña) y el cuarto un conocido intelectual. Portaban armas largas que escondían en la funda de una máquina de tejer.</p>
          <p>En la lujosa residencia se encontraban la esposa del cónsul María Aparecida Leal y los seis hijos de la pareja, cuyas edades oscilaban entre los dos y quince años...</p>
          <p>Días Gomide, que aún se encontraba en piyama, fue obligado a acompañarlos en su propio automóvil... Wassen condujo hasta el lugar del trasbordo...</p>
          <p>... El grupo que realizó este secuestro pertenecía a la columna Quince. La acción fue planificada y supervisada por Alicia Rey, que no participó.</p>

          <p class="font-bold mt-4">9.15 horas. Curva de Maroñas</p>
          <p>A varios kilómetros de Malvín, en la Curva de Maroñas, Mitrione fue trasladado a una camioneta Volkswagen Kombi de color morado. En la parte trasera se hallaba “Felipe”, un estudiante avanzado de Medicina de 25 años, encargado de asistir e inyectar un sedante a los secuestrados... Felipe fue el responsable de la custodia de Mitrione durante los diez días de su cautiverio.</p>

          <p class="font-bold mt-4">9.30 horas. Cárcel del Pueblo</p>
          <p>Aunque el secuestro lo hizo la Uno, fue la Quince la columna encargada de mantener en cautiverio a Mitrione. La casa de Espinosa estaba ubicada en la Avenida Centenario 4115, entre las calles Juan Sebastián Elcano y El Cairo...</p>
          <p>Espinosa y su mujer eran enfermeros del Hospital de Clínicas y tenían una hija de dos años... Durante un breve período Fly estuvo en la misma habitación que había permanecido Mitrione...</p>

          <p class="font-bold mt-4">16.00 Barrio de la Unión</p>
          <p>Pese a estar atado y envuelto en una frazada, Gordon Jones no había perdido detalle de lo que sucedía a su alrededor.</p>
          <p>Logró describir a la policía tan precisamente la camioneta Austin..., que poco después una patrulla la reconoció estacionada en el mismo lugar de la Unión donde había sido dejada... los investigadores concluyeron que su propietario debía ser un guerrillero... la camioneta había sido comprada con documento falso por Manuel Marx Menéndez...</p>
          <p>... Por la tarde Sergio Emigidio da Rosa decidió arriesgarse y pasar a recuperarla. Desde la ventana de una casa en la que se hallaban ocultos, los policías lo vieron llegar... Cuando estaba por subir al automóvil cayeron sobre él y lo arrestaron...”.</p>
          `,
          year: new Date("2007-1-1"),
          name: "El caso Mitrione,",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Trilce",
          pages: "págs. 37-44, 47-48, 53-54",
          author: "Aldrighi",
        },
        {
          fragment: `<p>“... El 31 de julio –tres días después de haber secuestrado al juez Pereira Manelli–, los tupamaros esperaban a Mitrione muy cerca de su casa..., una camioneta pick-up Internacional –conducida por Andrés Cultelli, quien iba acompañado por Jorge Torres– se fue de frente contra el auto de Mitrione y lo chocó con violencia del lado de la puerta del conductor.</p>
          <p>Otros dos tupamaros, “Beatriz” y “Darío”, estaban parados en la esquina y se fueron encima del vehículo chocado. Beatriz rompió el vidrio con la metralleta, encañonó a Mitrione y lo hizo salir. Torres redujo al Sargento González y lo desarmó... Mitrione fue conducido hasta una camioneta Ford con toldo-donde esperaban Hugo Dermit y Carlos Hernández Machado-, que se encontraba estacionada a pocos metros. Le ordenaron subirse a la caja y acostarse bocarriba. Y en ese momento a Darío se le escapó un tiro que dio en el pecho del agente estadounidense...</p>
          <p>En la Curva de Maroñas -...- trasladaron a Mitrione a una camioneta Kombi camuflada como ambulancia, donde “Felipe”, estudiante de Medicina, le prestó los primeros auxilios al herido. Recorrieron otros cuatro kilómetros... donde levantaron a otro secuestrado: el cónsul brasileño Aloysio Marés Días Gomide,..., sorprendido en su casa del barrio Carrasco Norte por un comando de la columna 15, en el que participaban el Nepo Adolfo Wasem, y Henry Engler, alias Octavio...</p>
          <p>La “ambulancia” se dirigió entonces a un local del barrio Pérez Castellano.</p>
          <p>La Kombi con los secuestrados bajó por la rampa y se introdujo en el garaje hasta quedar dentro de la vivienda... Mitrione y Días Gomide permanecieron cautivos en el apartamento de Centenario 4115, entre Juan Sebastián Elcano y El Cairo...”. ”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "págs. 466-467",
          author: "Pernas",
        },
        {
          fragment: `<p>“... El 31 de julio varios comandos del MLN, en una operación combinada, capturaron a Dan A. Mitrione..., y a Aloysio Mares Días Gomide...</p>
          <p>Michael Gordon Jones..., logró fugar mientras que... fracasaba el operativo destinado a capturar a Nathan Rosenfeld...”.</p>`,
          // year: new Date("1990-1-1"),
          name: "La tregua armada",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "pág. 28",
          author: "Fernández Huidobro",
        },
      ],
    },
  },
  {
    date: new Date("August 07, 1970"),
    title: "Claude Fly",
    slug: "claude-fly",
    type: "secuestros",
    fact: "SECUESTRO Y LIBERACIÓN DEL TÉCNICO AGRARIO CLAUDE FLY",
    victims: [
      {
        info: {
          name: "Ingeniero Agrónomo Claude Fly",
          age: 65,
          marital: "casado",
          childs: 3,
          // childsDescription: "5 menores de edad",
          nationality: "Norteamericano",
          avatar: {
            src: "/claude-fly/a.png",
            alt: "imagen de Claude Fly",
          },
          kidnapping: {
            init: new Date("August 07, 1970"),
            end: new Date("March 02, 1971"),
            days: 207,
            description: "días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("August 07, 1970"),
        title: "“SECUESTRARON HOY A OTRO AMERICANO”",
        description: "... Aparecen fotos de ...",
        images: [
          {
            type: "noticia publicada",
            src: "/claude-fly/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/claude-fly/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("August 08, 1970"),
        title: "“GRAN CONMOCIÓN: FUE SECUESTRADO OTRO NORTEAMERICANO”",
        description:
          "... elementos conspiradores habían vuelto a secuestrar a un ciudadano norteamericano. Se trataba, esta vez, de  un calificado técnico agrario, ajeno por completo a cualquier tipo de vinculaciones o connotaciones políticas, contratado por el Ministerio de Ganadería y Agricultura y que apenas llevaba tres meses de radicación en el Uruguay. Su nombre es Claude L. Fly, tiene 65 años de edad y actúa como especialista en investigaciones de suelos... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/claude-fly/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/claude-fly/n_3.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 8)',
        date: new Date("August 08, 1970"),
        title:
          "“EN AUDAZ OPERACIÓN TUVIERON INMOVILIZADO A UN TÉCNICO AGRÓNOMO”",
        description:
          "... El Ing. Agr. Luis De León, uno de los más destacados técnicos del Departamento de Investigación de suelos del Ministerio de Ganadería relataba así a nuestros cronistas las alternativas del secuestro...",
        title1: "“EL SECUESTRADO DR. FLY ERA UN TÉCNICO AGRARIO”",
        description1:
          "... llegó al Uruguay el 15 de enero del corriente año... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/claude-fly/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/claude-fly/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (en Portada)',
        date: new Date("August 08, 1970"),
        title: "“OTRO FUNCIONARIO NORTEAMERICANO DE LA AID FUE SECUESTRADO”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/claude-fly/n_5.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/claude-fly/n_6.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 4)',
        date: new Date("August 08, 1970"),
        title: "“OTRO FUNCIONARIO YANKI DE LA AID FUE SECUESTRADO”",
        description:
          "... la organización llevó a cabo exitosamente otro operativo: el secuestro del norteamericano Claude L. Fly. Este funcionario, también de AID, se encontraba trabajando como asesor del Ministerio de Ganadería y Agricultura... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/claude-fly/n_7.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/claude-fly/n_7.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("March 03, 1971"),
        title:
          "“VÍCTIMA DE UN INFARTO ABANDONARON HOY A FLY ANTE EL HOSPITAL BRITÁNICO”",
        description:
          "... El anciano está bajo carpa de oxígeno y seguirá en observación por varios días... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/claude-fly/n_8.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/claude-fly/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("March 03, 1971"),
        title: "“LIBERADO A LAS 23:15”",
        description:
          "Claude Fly, sabio norteamericano secuestrado por los “tupamaros” el 7 de agosto del año pasado, fue liberado anoche en sorpresivas y dramáticas circunstancias... Aparece foto.",
        title1: "“TAMBIÉN ESTE FINAL ES IGNOMINIOSO”",
        description1:
          "... Días Gomide pagó su actual libertad con dinero. Fly lo pagó con salud...",
        images: [
          {
            type: "noticia publicada",
            src: "/claude-fly/n_9.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/claude-fly/n_9.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 5)',
        date: new Date("March 03, 1971"),
        title: "“208 DÍAS INSUMIÓ EL BÁRBARO SECUESTRO”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/claude-fly/n_10.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/claude-fly/n_10.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("March 03, 1971"),
        title: "“SUFRIÓ EL INFARTO 10 DÍAS ANTES QUE LO LIBERARAN”",
        description:
          "A tiempo que el Dr. Claude Fly permanece bajo rigurosa atención médica... un inesperado comunicado de la organización sediciosa señala... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/claude-fly/n_12.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/claude-fly/n_12.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 22)',
        date: new Date("March 03, 1971"),
        title: "“FUE UNA LOCURA TENERLO EN ESE ESTADO”, AFIRMÓ DIGHIERO”",
        description:
          "... El diálogo fue mantenido en inglés, anoche..., por el agrónomo... Claude Fly, y el Dr. Jorge Dighiero... Ambos estaban con los ojos vendados,... estaban secuestrados por los tupamaros... Aparecen fotos y croquis...",
        images: [
          {
            type: "noticia publicada",
            src: "/claude-fly/n_13.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/claude-fly/n_14.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 2)',
        date: new Date("March 03, 1971"),
        title:
          "“SORPRESIVA LIBERACIÓN DE C. FLY TRAS HABER SUFRIDO UN INFARTO”",
        description:
          "Sorpresivamente los Tupamaros liberaron anoche a las 22 y 55 horas al norteamericano Claude Fly, de 65 años-después de 208 días-... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/claude-fly/n_15.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/claude-fly/n_16.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p class="font-bold">“9.15 horas Sayago</p>
          <p>En la periferia de la ciudad, en el barrio obrero de Sayago, un comando formado por cuatro tupamaros de la columna Uno ingresó a la Dirección de Suelos y Fertilizantes del Ministerio de Ganadería y Agricultura en Garzón y Carlos María de Pena. Se identificaron como policías y secuestraron a Claude L. Fly, ciudadano estadounidense especialista en agricultura... contratado por el gobierno uruguayo con fondos de la AID.</p>
          <p>En el momento del secuestro Fly estaba conversando con el ingeniero agrónomo Luis de León... Uno de los secuestradores, Jorge Torres describe la dinámica del episodio: “En una camioneta entramos a la explanada... Éramos cuatro hombres, el que conducía era Andrés Cultelli. Bajamos tres: dos se adelantaron y entraron a la oficina mientras yo me acercaba. En eso Cultelli hace marcha atrás con la camioneta y embiste unos tubos de oxígeno... Mientras tanto los compañeros le explicaban a Fly que eran policías y que por su seguridad debía acompañarlos. Fly respondió que no entendía bien el español y que debía llamar a su secretaria... Entonces entré y saqué el arma: “Señores, basta de conversaciones, somos tupamaros, esto es un secuestro y usted debe acompañarnos”.</p>
          <p>Torres, Cultelli y los otros dos integrantes del comando subieron con Fly a una camioneta Chevrolet Apache de 1962 robada y con chapas falsas...</p>
          <p>Fuera de la explanada, en otro automóvil, aguardaban “Beatriz” y Jorge Blanco, que como se recordará también habían participado, junto a Cultelli y Torres, en el secuestro de Mitrione. Los dos vehículos partieron hacia el lugar de trasbordo, donde los esperaban Candán y una mujer de la columna Uno.</p>
          <p>Beatriz llevó transitoriamente al secuestrado a una vivienda donde se estaban realizando reformas. “Resultó ser un sótano sin puerta, sin cama, si nada. Lo dejamos ahí al pobre viejo vendado, sentado y atado a una silla con un compañero que esperaba el relevo. Después de algunas horas y viendo que no llegaba nadie y que los dos estaban muertos de hambre, el compañero le dijo: “quédese aquí que ya vuelvo”. Fue al almacén de la esquina y compró fiambre, pan y Coca Cola. Lo desató y merendaron unos refuerzos.</p>
          <p>Durante su cautiverio –que se prolongó hasta el 2 de marzo de 1971– Fly fue llevado a otras dos casas del MLN, entre ellas la de Espinosa... Cuando le dijimos que lo íbamos a liberar, pidió una torta con cerezas y vino. De la emoción, al otro día de madrugada, le vino un infarto.”</p>
          `,
          year: new Date("2007-1-1"),
          name: "El caso Mitrione,",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Trilce",
          pages: "págs. 188-190",
          author: "Aldrighi",
        },
        {
          fragment: `<p>“En la mañana del viernes 7, los guerrilleros secuestraron a Claude Fly, un estadounidense asesor del Ministerio de Ganadería”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 470",
          author: "Pernas",
        },
        {
          fragment: `<p>“7 de agosto. Día decisivo. Por la mañana -...- el MLN toma un nuevo prisionero: Claude Fly, técnico agrícola norteamericano”.</p>`,
          // year: new Date("1990-1-1"),
          name: "La tregua armada",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "págs. 35-36",
          author: "Fernández Huidobro",
        },
        {
          fragment: `<p>“... El 21, el MLN libera a Días Gomide; el 1o. de marzo, a Fly, quien había tenido un problema cardíaco. Fly fue dejado por un comando del MLN dentro del Hospital Británico, acompañado por un médico detenido a esos efectos y con una historia clínica...”.</p>`,
          // year: new Date("1990-1-1"),
          name: "La tregua armada",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "págs. 81-82",
          author: "Fernández Huidobro",
        },
      ],
    },
  },
  {
    date: new Date("January 08, 1971"),
    title: "Geoffrey Jackson",
    slug: "geoffrey-jackson",
    type: "secuestros",
    fact: "SECUESTRAN Y LIBERAN AL EMBAJADOR BRITÁNICO GEOFFREY JACKSON",
    victims: [
      {
        info: {
          name: "Embajador Británico Geoffrey Jackson",
          age: 55,
          marital: "casado",
          childs: 1,
          // childsDescription: "5 menores de edad",
          nationality: "Británico",
          avatar: {
            src: "/geoffrey-jackson/a.png",
            alt: "imagen de Geoffrey Jackson",
          },
          kidnapping: {
            init: new Date("January 08, 1971"),
            end: new Date("September 09, 1971"),
            days: 244,
            description: "días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("January 08, 1971"),
        title: "“TUPAMAROS RAPTAN EMBAJADOR INGLÉS”",
        description:
          "El chofer y dos custodias heridos al resistir. Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/geoffrey-jackson/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/geoffrey-jackson/n_1.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("January 08, 1971"),
        title:
          "“EL EMBAJADOR FUE LLEVADO EN SU AUTO Y TRASBORDADO LUEGO A OTRO VEHÍCULO”",
        description:
          "En el barrio Sur, los conspiradores trasbordaron al embajador de su propio automóvil-...- a otro vehículo (robado)... Aparece croquis.",
        title1: "“EL OCTAVO SECUESTRO QUE SE REALIZA EN NUESTRO MEDIO”",
        description1:
          "Entre los meses de agosto de los dos últimos años, en el Uruguay fueron secuestrados ocho hombres, dos de los cuales, Jones y Rosenfeld, lograron frustrar la acción de sus captores...",
        images: [
          {
            type: "noticia publicada",
            src: "/geoffrey-jackson/n_2.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/geoffrey-jackson/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 17)',
        date: new Date("January 08, 1971"),
        title:
          "“TENSOS INSTANTES VIVIÓ UNA FAMILIA A LA QUE LE ROBARON EL PEUGEOT VERDE”",
        description:
          "Cuando estaban en pleno operativo para concretar el secuestro del embajador inglés Mr. Geoffrey Holt Seymour Jackson, fueron capturados dos tupamaros que habían quedado de custodia en una finca de Carrasco... el hurto del vehículo... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/geoffrey-jackson/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/geoffrey-jackson/n_3.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("January 08, 1971"),
        title: "“DOS COCHES CORTARON EL PASO DEL DIPLOMÁTICO BRITÁNICO”",
        description:
          "Cayeron dos ladrones del auto usado en el secuestro. Emboscándolo en una concurrida esquina de la Ciudad Vieja,... comandos tupamaros armados hasta los dientes secuestraron esta mañana al embajador de la Reina... casi medio centenar de hombres participó en el operativo destinado a lograr para la organización... Aparece dibujo y foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/geoffrey-jackson/n_4.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/geoffrey-jackson/n_5.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("January 08, 1971"),
        title: "“SECUESTRARON AL EMBAJADOR INGLÉS”",
        description:
          "Terroristas que apoyan al Frente Amplio. Capturaron a dos terroristas que participaron en el rapto. Aparecen fotos.",
        title1: "“LA PRUEBA”",
        description1:
          "“Mantenemos nuestras diferencias de método con las organizaciones que forman el frente y con la valoración táctica del evidente objetivo del mismo:...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/geoffrey-jackson/n_6.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/geoffrey-jackson/n_6.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("January 09, 1971"),
        title:
          "“CASI MEDIO CENTENAR DE TUPAMAROS SECUESTRA AL EMBAJADOR BRITÁNICO”",
        description: "... Aparecen fotos.",
        title1: "“ESTUPOR ANTE OTRO ACTO QUE LESIONA LA DIGNIDAD HUMANA”",
        description1:
          "Ante el estupor de testigos presenciales... fue secuestrado ayer de mañana en plena zona céntrica, el Embajador de Gran Bretaña, Sr. Geoffrey Jackson. La vituperable acción fue perpetrada por un grupo de individuos pertenecientes al autodenominado M.L.N. “Tupamaros” que,...",
        images: [
          {
            type: "noticia publicada",
            src: "/geoffrey-jackson/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/geoffrey-jackson/n_7.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("January 09, 1971"),
        title: "“ACTUARON CERCA DE 50 FACCIOSOS”",
        description:
          "... por los menos veinte personas intervinieron en el robo, manejo y ocupación de los autos; otras diez por lo menos en la custodia de los dueños de los vehículos... y otras quince cumplieron funciones de “vigilancia” y enlace. En total, aparte de los “cerebros”... cerca de 50 personas entre hombres y mujeres son los que intervinieron...",
        title1:
          "“LOS EXTREMISTAS APROVECHARON EL RUTINARIO RECORRIDO DEL EMBAJADOR”",
        description1:
          "... Cuando los dos custodias-...- se apearon de sus vehículos... fueron taimadamente golpeados por los dos terroristas, quedando semidesvanecidos... Aparecen croquis.",
        title2: "“UN MENSAJE”",
        description2:
          "... en el interior de la camioneta VW que los secuestradores abandonaron... figura el símbolo del grupo sedicioso... y finalizaría con las palabras “Hasta la victoria siempre”...",
        images: [
          {
            type: "noticia publicada",
            src: "/geoffrey-jackson/n_8.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/geoffrey-jackson/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 2)',
        date: new Date("January 09, 1971"),
        title:
          "“EL EMBAJADOR BRITÁNICO JACKSON FUE LLEVADO EN SU PROPIO COCHE”",
        description:
          "... El Embajador de Gran Bretaña, Geoffrey Molt Seymour Jackson, 55 años, fue secuestrado... Los dos choferes y un custodio, que opusieron resistencia, fueron reducidos a golpes de cachiporras de madera... Aparecen fotos.",
        title1: "“SÉPTIMO DE UNA SERIE DE SECUESTROS”",
        description1:
          "... es el séptimo realizado por comandos tupamaros desde que Pereira Reverbel estuvo retenido entre el 7 y el 11 de agosto de 1968...",
        images: [
          {
            type: "noticia publicada",
            src: "/geoffrey-jackson/n_9.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/geoffrey-jackson/n_9.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 3)',
        date: new Date("January 09, 1971"),
        title: "“PARTICIPARON TREINTA COMANDOS “TUPAMAROS”",
        description:
          "Viene de página 2... La policía calcula que en ese lugar actuaron directamente unos diez miembros del M.L.N... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/geoffrey-jackson/n_10.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/geoffrey-jackson/n_10.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 4)',
        date: new Date("September 10, 1971"),
        title: "“CAUTIVO, CUMPLIÓ 56 AÑOS”",
        description:
          "Cuando llevaba 59 días en poder de los tupamaros, el Embajador de Gran Bretaña en el Uruguay, Sr. Geoffrey Jackson, cumplía 56 años de edad... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/geoffrey-jackson/n_13.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/geoffrey-jackson/n_13.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 6)',
        date: new Date("September 10, 1971"),
        title: "“CINCO PERSONAS PERMANECEN EN PODER DE LOS SEDICIOSOS”",
        description:
          "Concretada anoche la liberación del embajador británico Geoffrey Jackson, permanecen aún sufriendo el ominoso cautiverio, en manos de los integrantes de la criminal organización de antisociales, cinco ciudadanos... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/geoffrey-jackson/n_14.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/geoffrey-jackson/n_15.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 27)',
        date: new Date("September 10, 1971"),
        title: "“JACKSON FUE LIBERADO DESPUÉS DE 244 DÍAS EN EL CAUTIVERIO”",
        description:
          "... con el triste privilegio de ser el hombre que más ha estado en cautiverio, quedó libre anoche en el barrio Nuevo París, el embajador de Su Majestad Británica Sir Geoffrey Jackson... Doscientos cuarenta y cuatro días y once horas después de ser secuestrado por un comando de tupamaros... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/geoffrey-jackson/n_16.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/geoffrey-jackson/n_17.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 6)',
        date: new Date("June 16, 1972"),
        title: "“LA JUSTICIA MILITAR REMITIÓ A UN CANCERBERO DE SECUESTRADOS”",
        description:
          "... el procesamiento y remisión a la cárcel de uno de los cancerberos del ex embajador británico en nuestro país Geoffrey Jackson, del ex Fiscal de Corte Dr. Guido Berro Oribe... y Ricardo Ferrés Terra... El sujeto aludido de nombre... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/geoffrey-jackson/n_11.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/geoffrey-jackson/n_12.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p class="font-bold">“Custodios</p>
          <p>Pocas semanas después de instalarnos en nuestro nuevo hogar de Carrasco, la Orga nos informó que habíamos sido designados como custodios de la cárcel del pueblo... El movimiento intentó crear una justicia paralela a la del Estado, la Justicia Revolucionaria, y como expresión de ese objetivo se construyeron varias cárceles del pueblo donde se encerraban a los secuestrados,...</p>
          <p>... No recuerdo exactamente las dimensiones del sótano pero creo que debía tener unos ocho metros por cuatro. Las tres cuartas partes del espacio estaban ocupadas por las camas y utensillos de los guardias y en uno de los extremos, contra la pared, se habían construido dos jaulas de hierro y malla metálica, cada una no más de cuatro metros cuadrados, ubicadas en forma de ele y rodeadas por cortinas... entre ambas quedaba el espacio suficiente para un guardia sentado. En cada una de estas jaulas estaba encerrado un hombre. Uno se llamaba Ricardo Ferrés y el otro Sir Geoffrey Jakcson...</p>
          <p>... No había ni excusado ni ducha, aquella gente debía hacer sus necesidades en un tobo y asearse en una batea metálica... La luz del espacio de guardia debía estar siempre encendida, incluso cuando los prisioneros dormían... Una música permanente ocultaba los sonidos exteriores.</p>
          <p>... A esa alarma debíamos responder ipso facto apagando los extractores y las luces, acostando a los prisioneros boca abajo en sus camastros con las cabezas cubiertas por capuchas con orejeras, guardar total silencio y empuñar las armas... aproveché una de las misteriosas visitas del misterioso compañero que había dado la charla inicial a quien suponíamos del comando de Columna o de la Dirección Nacional y, sin mirar su rostro, lo consulté al respecto.</p>
          <p>-Hay que resistirse a la entrega y enfrentar la cana con las armas –respondió-. La cárcel del pueblo no puede entregarse sin resistencia –agregó enfáticamente.</p>
          <p>-¿Y los prisioneros? –pregunté con cierto temor.</p>
          <p>-Los chanchos no pueden ser entregados vivos –respondió ya molesto por tanta insistencia...<p>
          <p>... ante los prisioneros utilizábamos permanentemente una capucha que, por razones obvias de seguridad, solo (sic) dejaba los ojos al descubierto...</p>
          <p>Aquellos hombres no veían nunca la luz el sol durante sus meses o años de encierro...</p>
          `,
          year: new Date("2015-1-1"),
          name: "Un ex tupamaro en el trópico, Memorias,",
          place: "Montevideo - Uruguay",
          edition: "Penguin Randon House Grupo Editorial",
          pages: "págs. 87, 90-92",
          author: "Cabrera",
        },
        {
          fragment: `<p>“... “Como siempre, me sentí aliviado cuando abandonando la Corniche (rambla) abierta, nos internamos por las estrechas y atestadas calles laterales (Ciudad Vieja)... no le presté especial atención a un gran furgón rojo -...- hasta que se separó de la orilla en el momento que lo alcanzábamos. Había poco espacio como para que mi chófer (sic) se desviara bruscamente, pero sí mucho tiempo para que el conductor del camión advirtiera su error y retrocediera... a pesar de las señales de mi chófer (sic) hundió implacablemente nuestro guardabarro delantero izquierdo... Hugo abrió la puerta y se bajó para tomar datos.</p>
          <p>Mientras se abría la puerta de la cabina y el conductor se bajaba de un salto, un hombre joven se adelantó y golpeó a Hugo salvajemente en la cabeza. Simultáneamente se produjo un violento tableteo de armas automáticas...; uno de los principales componentes provenía de una metralleta escondida en una cesta de frutas que llevaba un espectador aparentemente inofensivo...”.</p>
          <p>Así cuenta el embajador británico Jackson, en su libro Secuestrado por el pueblo, el momento concreto de su captura por el Comando Roberto Rohn del MLN”.</p>`,
          // year: new Date("1990-1-1"),
          name: "La tregua armada",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "pág. 77",
          author: "Fernández Huidobro",
        },
        {
          fragment: `<p>“El 5 de enero estaban prontos los secuestros de los embajadores inglés, francés y argentino. El golpe iba a ser decisivo, y si bien la situación había cambiado con relación a la que se dio cuando se secuestró a Días Gomide, Mitrione y Fly -las elecciones le creaba un respiro al gobierno- ... Pero el secuestro falló en el caso de los embajadores argentino y francés, y sólo se capturó a Geoffrey Jackson,...,. Pero el secuestro de Jackson se encabalga con los de Frick Davis y Pereira Reverbel, y también el del fiscal Berro Oribe, cuando se pone en marcha el plan de “Justicia Revolucionaria”.”.</p>`,
          year: new Date("2013-1-1"),
          name: "Autobiografía de Amodio Pérez",
          place: "Montevideo - Uruguay",
          edition: "Editorial Arca",
          pages: "pág. 59",
          author: "Pérez",
        },
      ],
    },
  },
  {
    date: new Date("March 10, 1971"),
    title: "Doctor Guido Berro",
    slug: "guido-berro",
    type: "secuestros",
    fact: "SECUESTRAN AL FISCAL DE CORTE DR. GUIDO BERRO ORIBE",
    victims: [
      {
        info: {
          name: "Fiscal de Corte Dr. Guido Berro",
          age: 58,
          marital: "casado",
          childs: 4,
          // childsDescription: "5 menores de edad",
          // nationality: "Británico",
          avatar: {
            src: "/guido-berro/a.png",
            alt: "imagen de Dr. Guido Berro",
          },
          kidnapping: {
            init: new Date("March 10, 1971"),
            end: new Date("March 23, 1971"),
            days: 13,
            description: "días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("March 10, 1971"),
        title: "“SECUESTRARON AL FISCAL DE CORTE”",
        description:
          "La esposa de Berro Oribe vio, con terror, el rapto. Lo soltamos esta tarde afirmaron... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/guido-berro/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/guido-berro/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El País" (en Portada)',
        date: new Date("March 11, 1971"),
        title: "“FUE SECUESTRADO EL FISCAL BERRO”",
        description:
          "Los facciosos anuncian insólito juicio. Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/guido-berro/n_3.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/guido-berro/n_3.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("March 11, 1971"),
        title: "“EL SECUESTRO DEL “FISCAL” ES UNA AFRENTA PARA EL PAÍS”",
        description:
          "Comunicado 18: Berro Oribe: ... interrogado. Ayer,..., el Fiscal de Corte, Dr. Guido Berro Oribe fue secuestrado por tres hombres y una mujer, que a punta de revólver lo hicieron abandonar su residencia... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/guido-berro/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/guido-berro/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 5)',
        date: new Date("March 11, 1971"),
        title: "“OCTAVO SECUESTRO SÓLO EN 20 MESES”",
        description:
          "Con el de ayer, es el octavo secuestro que en el corto lapso de 20 meses consumaron en forma hasta ahora impune, los conspiradores... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/guido-berro/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/guido-berro/n_5.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 7)',
        date: new Date("March 11, 1971"),
        title: "“PROLONGARÍASE SECUESTRO DEL FISCAL DE CORTE”",
        description:
          "... el MLN divulgó su comunicado Nº 18, responsabilizándose de la acción... 4) La Justicia Revolucionaria dará a conocer, a través de las actuaciones del Tribunal del Pueblo... Habrá patria para todos o no habrá patria para nadie. Libertad o muerte... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/guido-berro/n_6.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/guido-berro/n_7.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 15)',
        date: new Date("March 12, 1971"),
        title: "“REPUDIO UNÁNIME ANTE SECUESTRO DE BERRO”",
        description: "... ",
        title1:
          "“JUNTA: LOS EDILES DEL FRENTE AMPLIO NO CONDENARON EL SECUESTRO DEL FISCAL”",
        description1:
          "Los ediles del Frente Amplio se retiraron de sala ayer para no votar una moción de rechazo ante el secuestro... días atrás esos mismos ediles se negaron a votar un pedido de clemencia ante el anuncio de que algunos condenados serían fusilados por el régimen de Fidel Castro...",
        images: [
          {
            type: "noticia publicada",
            src: "/guido-berro/n_8.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/guido-berro/n_9.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("March 24, 1971"),
        title: "“CREE QUE ESTUVO EN UNA ZONA RURAL OCULTO BAJO TIERRA”",
        description:
          "El Fiscal conversó con Jackson: el Embajador vestía tan sólo un slip... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/guido-berro/n_10.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/guido-berro/n_11.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("March 24, 1971"),
        title: "“HACÍA MUCHO CALOR EN EL LOCAL Y FALTABA EL AIRE”",
        description:
          "“Estuve con el embajador inglés toda una semana, en el segundo lugar de secuestro que los tupamaros llaman la cárcel del pueblo. Ocupamos celdas contiguas separados por un tejido de alambre... el señor Jackson... tenía sólo in slip que era una especie de taparrabo”... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/guido-berro/n_12.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/guido-berro/n_13.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("March 24, 1971"),
        title:
          "“LLORANDO, EL DOCTOR BERRO ORIBE PREGUNTÓ ANOCHE QUE DÍA VIVÍA”",
        description:
          "Con las ropas sucias de tierra y maniatado dentro de un taxímetro fue abandonado en el colegio “San Carlos” don Orione, en Millán. Anoche… Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/guido-berro/n_14.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/guido-berro/n_14.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“El 10 de marzo el MLN captura al Procurador General de la Nación y Fiscal de Corte, Guido Berro Oribe, quien se había manifestado partidario de la justicia militar para los tupamaros.”.</p>`,
          // year: new Date("1990-1-1"),
          name: "La tregua armada",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "pág. 82",
          author: "Fernández Huidobro",
        },
      ],
    },
  },
  {
    date: new Date("March 30, 1971"),
    title: "Doctor Ulysses Pereira Reverbel - segundo secuestro",
    slug: "ulysses-pereira-segundo-secuestro",
    type: "secuestros",
    fact: "SECUESTRAN NUEVAMENTE AL DR. ULYSSES PEREIRA REVERBEL",
    victims: [
      {
        info: {
          name: "Doctor Ulysses Pereira Reverbel",
          age: 54,
          // marital: "casado",
          // childs: 3,
          // childsDescription: " menores de edad (1 de 11 meses)",
          avatar: {
            src: "/ulysses-pereira-reverbel-primer-secuestro/a.png",
            alt: "imagen de Doctor Ulysses Pereira Reverbe",
          },
          kidnapping: {
            init: new Date("March 31, 1971"),
            end: new Date("May 27, 1972"),
            days: 424,
            description: " días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 3)',
        date: new Date("March 30, 1971"),
        title:
          "“PEREIRA REVERBEL HABÍA SIDO RAPTADO ANTERIORMENTE EL 7 DE AGOSTO DE 1968”",
        description:
          "A las 9 y 5 horas del 7 de agosto de 1968, un comando tupamaro secuestró al Dr. Ulysses Pereira Reverbel... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-segundo-secuestro/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-segundo-secuestro/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("March 30, 1971"),
        title: "“EN MENOS DE TRES AÑOS FUE SECUESTRADO DOS VECES”",
        description:
          "... Pereira Reverbel, que fue secuestrado por primera vez, el miércoles 7 de agosto de 1968...",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-segundo-secuestro/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-segundo-secuestro/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("March 31, 1971"),
        title:
          "“BRUTALIDAD Y ENSAÑAMIENTO SIN PAR. REPITEN VERGONZOSO SECUESTRO TRAS CRUEL AGRESIÓN A PEREIRA REVERBEL”",
        description: "Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-segundo-secuestro/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-segundo-secuestro/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("March 31, 1971"),
        title: "“30 SEDICIOSOS Y 6 VEHÍCULOS”",
        description: "... Aparecen fotos.",
        title1: "“REPUDIO”",
        description1:
          "Ante el cobarde atentado de que fuera objeto el Presidente del Directorio de UTE, Dr. Ulysses Pereira Reverbel… la Asociación de Funcionarios de UTE (AFUTE) hace público su más profundo repudio… Montevideo, marzo 30/971-Comité Ejecutivo Nacional de AFUTE.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-segundo-secuestro/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-segundo-secuestro/n_7.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 4)',
        date: new Date("March 31, 1971"),
        title: "“DURANTE EL SECUESTRO DE 1968 DOS HOMBRES RESULTARON HERIDOS”",
        description: "...",
        title1: "RELATO DE PEREIRA REVERBEL SOBRE SU PRIMER CAUTIVERIO”",
        description1: "Refinada crueldad... Aparecen fotos",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-segundo-secuestro/n_8.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-segundo-secuestro/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("March 31, 1971"),
        title: "“PEREIRA REVERBEL RESISTIÓ A LOS TUPAMAROS HASTA QUE CAYÓ”",
        description:
          "... Lo que más llamó la atención fue la existencia de un impresionante charco de sangre en el lugar de la agresión... Aparece foto y dibujo.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-segundo-secuestro/n_9.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-segundo-secuestro/n_10.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (en Portada)',
        date: new Date("March 31, 1971"),
        title: "“SIN RASTROS DE PEREIRA REVERBEL”",
        description:
          "Fue herido en la cabeza al resistirse y quedó sangre en tres coches... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-segundo-secuestro/n_11.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-segundo-secuestro/n_12.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 7)',
        date: new Date("March 31, 1971"),
        title: "“PEREIRA REVERBEL YA HABÍA SIDO SECUESTRADO EN AGOSTO DE 1968”",
        description: "... Aparece foto.",
        title1: "“TUPAMAROS MANTIENEN DOS SECUESTRADOS”",
        description1:
          "Desde ayer, son dos los secuestrados por los tupamaros, uno de ellos desde hace 82 días. Al Embajador de Gran Bretaña Geoffrey Jackson... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-segundo-secuestro/n_13.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-segundo-secuestro/n_14.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("April 02, 1971"),
        title:
          "“TRAS EL CRUEL GOLPE HABRÍAN DROGADO AL DR. PEREIRA REVERBEL; VARIAS DUDAS”",
        description:
          "... La versión dada por el odontólogo, Dr. Bontempi ratifica la información... uno de los intrusos lo golpeó en la cabeza con un hierro... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-segundo-secuestro/n_15.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-segundo-secuestro/n_16.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 7)',
        date: new Date("April 02, 1971"),
        title: "“PEREIRA REVERBEL SUFRIÓ LESIONES LEVES”",
        description:
          "“SUFRIÓ heridas leves al intentar ofrecer resistencia. Fue atendido en el Hospital del Pueblo Nº 2,... términos del “Comunicado Nº 21” que anoche... hizo llegar el MLN a El Popular...",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-segundo-secuestro/n_17.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-segundo-secuestro/n_18.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("June 21, 1971"),
        title: "“SOLIDARIDAD CON PEREIRA REVERBEL”",
        description:
          "Artigas. En un fervoroso acto realizado ayer en la plaza principal de esta capital,... la ocasión fue propicia para que, pueblo y autoridades nacionales ratificaran su adhesión y solidaridad con el Dr. Ulysses Pereira Reverbel... Aparece foto",
        images: [
          {
            type: "noticia publicada",
            src: "/ulysses-pereira-segundo-secuestro/n_19.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ulysses-pereira-segundo-secuestro/n_20.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“–Fui a dar a la que sería más tarde la Cárcel del Pueblo... Al otro día nomás me puse a trabajar con dos compañeros para dejar pronto ese lugar, donde pocos días más tarde, sería encerrado Pereyra Reverbel. Entre otros y yo la construimos, bien construida, con tejido, con varilla y todo eso. Allí estuvo Pereyra Reverbel dos veces. Entre uno y otro secuestro estuvo Días Gomide.”.</p>`,
          year: new Date("2004-1-1"),
          name: "El Cholo González. Un cañero de Bella Unión",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Trilce",
          pages: "pág. 87",
          author: "Gilio",
        },
        {
          fragment: `<p>“... El 30 de marzo... Pocas horas después, otro comando del MLN captura y encarcela por segunda vez, a Ulises Pereira Reverbel...”.</p>`,
          // year: new Date("1990-1-1"),
          name: "La tregua armada",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "pág. 82",
          author: "Fernández Huidobro",
        },
      ],
    },
    apologyForCrimeInImages: [
      {
        title: "Presidente de UTE secuestrado por sediciosos.",
        description:
          "El Dr. Ulysses Pereira Reverbel fue llevado por la fuerza del consultorio odontológico donde se atendía.",
        images: [
          {
            src: "/ulysses-pereira-segundo-secuestro/i_1.jpg",
            alt: "Sediciosos copan consultorio odontológico.",
          },
          {
            src: "/ulysses-pereira-segundo-secuestro/i_2.jpg",
            alt: "El Dr. Pereira Reverbel es reducido violentamente por los sediciosos.",
          },
          {
            src: "/ulysses-pereira-segundo-secuestro/i_3.jpg",
            alt: "El Dr. Pereira Reverbel es golpeado en la cabeza y sedado",
          },
          {
            src: "/ulysses-pereira-segundo-secuestro/i_4.jpg",
            alt: "El Dr. Pereira Reverbel es conducido a un cautiverio envuelto en una frazada.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/ulysses-pereira-segundo-secuestro/placa_virtual.jpg",
        alt: "Aquí, en plena democracia, el 30/03/71 fue secuestrado violentamente por un comando del MLN-T, el Dr. Ulysses Pereira Reverbel, Presidente de la Usina y Teléfonos del Estado (UTE) de 54 años de edad.",
      },
    ],
  },
  {
    date: new Date("April 13, 1971"),
    title: "Ricardo Ferrés",
    slug: "ricardo-ferres",
    type: "secuestros",
    fact: "SECUESTRAN Y LIBERAN A RICARDO FERRÉS",
    victims: [
      {
        info: {
          name: "Ricardo Ferrés",
          age: 52,
          marital: "casado",
          childs: 9,
          // childsDescription: " menores de edad (1 de 11 meses)",
          avatar: {
            src: "/ricardo-ferres/a.png",
            alt: "imagen de Ricardo Ferrés",
          },
          kidnapping: {
            init: new Date("April 13, 1971"),
            end: new Date("January 27, 1972"),
            days: 289,
            description: " días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("April 13, 1971"),
        title: "“SECUESTRARON A RICARDO FERRÉS”",
        description:
          "El conocido industrial viajaba solo en su auto que apareció en Burdeos y Camino Ferrés. Aparece foto.",
        title1: "“ENCUENTRAN 2 BALAS JUNTO AL AUTOMÓVIL”",
        description1: "... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/ricardo-ferres/n_1.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/ricardo-ferres/n_2.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 7)',
        date: new Date("April 13, 1971"),
        title: "“FERRÉS IBA SOLO Y DESARMADO; ENCUENTRAN BALAS EN EL AUTO”",
        description:
          "Esta mañana cuando se dirigía a una reunión del Directorio de “Molinos Arroceros del Uruguay”,..., fue secuestrado por un conocido comando extremista... Aparecen fotos.",
        title1: "“EL DÉCIMO SECUESTRO”",
        description1:
          "Con el secuestro del Sr. Ricardo Ferrés Terra, llega a diez el número de secuestros concretados por los conspiradores... La triste historia comenzó con uno de los hombres que precisamente está ahora en poder de los terroristas, luego de ser capturado por segunda vez. El 7 de agosto de 1968 un comando sedicioso secuestró...",
        images: [
          {
            type: "noticia publicada",
            src: "/ricardo-ferres/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/ricardo-ferres/n_3.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("January 28, 1972"),
        title: "“LIBERAN A FERRÉS”",
        description:
          "Después de 289 días de horroroso cautiverio. Perdió más de 15 kilos de peso;... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/ricardo-ferres/n_4.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/ricardo-ferres/n_5.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 17)',
        date: new Date("January 28, 1972"),
        title:
          "“LO HABÍAN SECUESTRADO EL 13 DE ABRIL DE 1971, HACE 289 DÍAS, SIN TESTIGOS”",
        description:
          "Hace hoy 289 días la población se conmovía a temprana hora con el secuestro del industrial Ricardo Ferrés Terra... Durante su prolongado cautiverio... perdió un hijo en un accidente de tránsito y en esa aciaga ocasión fracasaron los desesperados intentos de sus familiares para que lo dejaran en libertad... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/ricardo-ferres/n_6.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ricardo-ferres/n_7.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("May 15, 1971"),
    title: "Doctor Carlos Frick Davie",
    slug: "carlos-frick",
    type: "secuestros",
    fact: "SECUESTRAN A CARLOS FRICK DAVIE",
    victims: [
      {
        info: {
          name: "Doctor Carlos Frick Davie",
          age: 63,
          marital: "casado",
          childs: 1,
          // childsDescription: " menores de edad (1 de 11 meses)",
          avatar: {
            src: "/carlos-frick/a.png",
            alt: "imagen de Doctor Carlos Frick Davie",
          },
          kidnapping: {
            init: new Date("May 15, 1971"),
            end: new Date("May 27, 1972"),
            days: 378,
            description: " días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("May 15, 1971"),
        title: "“FRICK FUE DESVANECIDO A GOLPES”",
        description:
          "... Carlos Frick Davie..., de 63 años,... le fue interceptado el paso por dos hombres y una mujer..., le golpearon para reducirlo... Un testigo-...- ... Vio frente a su casa-calle por medio- a un hombre que sangraba profusamente de la cabeza... era Frick Davie, un antiguo vecino suyo... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/carlos-frick/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/carlos-frick/n_1.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Acción" (Página 8)',
        date: new Date("May 15, 1971"),
        title:
          "“FRICK, 63 AÑOS, FUE BRUTALMENTE GOLPEADO; SANGRE EN SU VEHÍCULO”",
        description:
          "Brutalmente golpeado en la cabeza por varios de sus captores, desvanecido a culatazos y posiblemente herido de un balazo, el Dr. Carlos Frick Davie se transformó ayer en la décimo primera personalidad secuestrada por los sediciosos y cuarta que mantienen en su poder... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/carlos-frick/n_2.jpg",
            alt: "noticia publicada por el diario El Acción",
          },
          {
            type: "página diario completa",
            src: "/carlos-frick/n_3.jpg",
            alt: "página diario completa publicada por el diario El Acción",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 2)',
        date: new Date("May 15, 1971"),
        title: "“FRICK DAVIE FUE SECUESTRADO”",
        description: "... Frick Davies...",
        images: [
          {
            type: "noticia publicada",
            src: "/carlos-frick/n_4.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/carlos-frick/n_5.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“... El 14 de mayo el MLN captura y encarcela al ex-ministro de Ganadería y Agricultura, Carlos Frick Davies...”.</p>`,
          // year: new Date("1990-1-1"),
          name: "La tregua armada",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "pág. 82",
          author: "Fernández Huidobro",
        },
      ],
    },
  },
  {
    date: new Date("June 23, 1971"),
    title: "Doctor Alfredo Cambón",
    slug: "alfredo-cambon",
    type: "secuestros",
    fact: "SECUESTRAN AL DR. ALFREDO CAMBÓN",
    victims: [
      {
        info: {
          name: "Doctor Alfredo Cambón",
          age: 47,
          marital: "casado",
          childs: 1,
          // childsDescription: " menores de edad (1 de 11 meses)",
          avatar: {
            src: "/alfredo-cambon/a.png",
            alt: "imagen de Alfredo Cambón",
          },
          kidnapping: {
            init: new Date("June 23, 1971"),
            end: new Date("June 25, 1971"),
            days: 2,
            description: " días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("June 23, 1971"),
        title: "“SECUESTRAN A CONOCIDO ABOGADO”",
        description:
          "El Dr. Alfredo Cambón en manos facciosas... cuatro personas, tres del sexo masculino y una femenina concurren a la finca de la calle Guayaquí 3337, domicilio de Alfredo Cambón Porto,... proceden a llevarse consigo al principal habitante de la finca...Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/alfredo-cambon/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/alfredo-cambon/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("June 25, 1971"),
        title:
          "“ALFREDO CAMBÓN FUE INTERROGADO POR SUJETOS DE LARGAS CAPUCHAS”",
        description:
          "... miembros de la autodenominada “Organización Popular Revolucionaria 33”, liberaron al abogado Alfredo Cambón... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/alfredo-cambon/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/alfredo-cambon/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("June 25, 1971"),
        title: "“FUE LIBERADO ESTA MAÑANA EL ABOGADO ALFREDO CAMBÓN”",
        description:
          "4 encapuchados lo vigilaban en un sótano inhóspito. Esta mañana... fue liberado por sus captores el Dr. Alfredo Cambón Porto... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/alfredo-cambon/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/alfredo-cambon/n_6.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Era el 23 de junio de 1971, la Organización decide secuestrar al Dr. Alfredo Cambón Porto...</p>
          <p>En Fomento se plantea la posibilidad de levantar a Cambón. Llega la resolución a Aguilar...</p>
          <p>El trasbordo de Cambón hay que hacerlo en la calle...</p>
          <p>... llamaría la atención de cualquiera que transitara por el lugar el pasaje de un hombre atado y amordazado de un coche a otro...</p>
          <p>Aguilar mandó confeccionar un cajón como de mudanza, con buenas piolas en los extremos...</p>
          <p>El equipo estaba integrado por Juan, Vargas y Seferino. Martín estaría en la camioneta para el trasbordo. Rogelio y Arturo esperarían en la casa para <p>arreglar el inmediato traslado al lugar donde estaba el “pozo”.</p?
          <p>Cuando los compañeros entraron a la casa, Cambón estaba en cama... La mucama entró con el desayuno y un poco más atrás... aparecieron los caños de una <p>escopeta recortada y una pistola 9 mm...</p>
          <p>Se le ubica en el “pozo”... ”.</p>`,
          // year: new Date("1990-1-1"),
          name: "Acción directa anarquista. Una historia de FAU",
          place: "Montevideo - Uruguay",
          edition: "Editorial Recortes",
          pages: "págs. 381-383",
          author: "Mechoso",
        },
      ],
    },
  },
  {
    date: new Date("July 12, 1971"),
    title: "Jorge Berenbau",
    slug: "jorge-berenbau",
    type: "secuestros",
    fact: "SECUESTRAN Y LIBERAN A JORGE BERENBAU",
    victims: [
      {
        info: {
          name: "Jorge Berenbau",
          age: 23,
          marital: "soltero",
          nationality: "Argentino",
          // childs: 1,
          // childsDescription: " menores de edad (1 de 11 meses)",
          avatar: {
            src: "/jorge-berenbau/a.png",
            alt: "imagen de Jorge Berenbau",
          },
          kidnapping: {
            init: new Date("July 12, 1971"),
            end: new Date("November 26, 1971"),
            days: 137,
            description: " días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("July 13, 1971"),
        title: "“SECUESTRARON A JORGE BEREMBAU”",
        description:
          "“... el señor Jorge Berembau Méndez... fue interceptado el paso por dos vehículos que habían sido rapiñados horas antes... lo obligaron a ascender a uno de estos vehículos... otros efectivos policiales localizaban en la Rambla Costanera a la altura de la calle Reyes a una pareja... comprobando que uno de ellos era un ciudadano al que le habían rapiñado el vehículo... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/jorge-berenbau/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/jorge-berenbau/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("July 13, 1971"),
        title: "“HACE CINCO MESES INTENTARON DESTRUIR LA CASA DE BEREMBAU”",
        description:
          "La familia Berembau ya había sido víctima de un atentado por parte de elementos conspiradores... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/jorge-berenbau/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/jorge-berenbau/n_4.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("November 27, 1971"),
        title: "“BERENBAU LIBRE, SEGÚN AFIRMAN TRES TESTIGOS”",
        description:
          "Jorge Berenbau, el industrial llevado a humillante encierro el 12 de julio del corriente año, fue liberado... tenía los ojos cubiertos con vendas aseguradas a la nuca en tanto una cinta adhesiva sellaba sus labios... se trataba de Jorge Berenbau. Con gruesa barba, sucio y cansado... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/jorge-berenbau/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/jorge-berenbau/n_5.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("November 27, 1971"),
        title: "“HABÍA SIDO SECUESTRADO CON DESPLIEGUE VIOLENTO”",
        description:
          "Al mediodía del lunes 12 de julio de este año fue secuestrado Jorge Berenbau, argentino de 24 años... tres meses después de haber llegado desde Francia... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/jorge-berenbau/n_6.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/jorge-berenbau/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("April 28, 1972"),
        title: "“CAYÓ UN SEDICIOSO IMPLICADO EN EL SECUESTRO DE BEREMBAU”",
        description:
          "Un sedicioso evadido del penal de Punta Carretas, que estuvo directamente involucrado en el secuestro del industrial Berembau... intervino en el secuestro de Jorge Berembau Méndez, siendo el encargado del robo de uno de los vehículos utilizados...",
        images: [
          {
            type: "noticia publicada",
            src: "/jorge-berenbau/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/jorge-berenbau/n_8.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("August 18, 1971"),
    title: "Luis Fernández Lladó",
    slug: "luis-fernandez",
    type: "secuestros",
    fact: "SECUESTRAN AL DR. LUIS FERNÁNDEZ LLADÓ",
    victims: [
      {
        info: {
          name: "Luis Fernández Lladó",
          age: 54,
          marital: "casado",
          // nationality: "Argentino",
          childs: 6,
          childsDescription: " (4 menores de edad)",
          avatar: {
            src: "/luis-fernandez/a.png",
            alt: "imagen de Luis Fernández Lladó",
          },
          kidnapping: {
            init: new Date("August 18, 1971"),
            end: new Date("October 08, 1971"),
            days: 51,
            description: " días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("August 19, 1971"),
        title:
          "“... LUIS FERNÁNDEZ LLADÓ SE HALLA EN PODER DE UN GRUPO DELICTIVO”",
        description:
          "El Vicepresidente del Frigorífico Modelo, Sr. Luis Fernández Lladó, fue secuestrado por cinco desconocidos... de 54 años, padre de seis hijos... se retiraba en su auto..., que apenas arrancó fue interceptado por un coche “remise”... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/luis-fernandez/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/luis-fernandez/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("August 19, 1971"),
        title: "“RAPTARON AL VICEPRESIDENTE DEL FRIGORÍFICO MODELO AYER”",
        description:
          "Otra canallesca acción... N. de R... El secuestro se produjo a las 15 horas... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/luis-fernandez/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/luis-fernandez/n_3.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("August 19, 1971"),
        title: "“EN FULMINANTE ACCIÓN SECUESTRAN A JERARCA”",
        description:
          "Luis Fernández Lladó (... casado de 54 años, padre de seis hijos, Vicepresidente del Frigorífico Modelo...) pasó a ser ayer de tarde la sexta persona en poder de los conspiradores... la denominada “Organización Popular Revolucionaria 33” se atribuyó el golpe... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/luis-fernandez/n_4.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/luis-fernandez/n_5.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("October 09, 1971"),
        title: "“LIBERARON A FERNÁNDEZ LLADÓ; CRISIS CARDÍACA”",
        description:
          "Después de 51 días del más cruel e inhumano cautiverio al que lo sometiera un tenebroso grupo de sediciosos, fue liberado anoche, hallándose al borde de una crisis cardíaca... el Señor Luis Fernández Lladó... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/luis-fernandez/n_6.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/luis-fernandez/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("October 09, 1971"),
        title:
          "“EL INDUSTRIAL FUE LIBERADO EN LA ESQUINA DE LA IGLESIA DEL CERRITO, A LA HORA 20,05”",
        description:
          "... fue liberado ayer a las 20.15 aproximadamente... Demacrado... y sufriendo un principio de ataque cardíaco, fue liberado en la esquina de Bruno Méndez y Basilio Araújo en el Cerrito de la Victoria... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/luis-fernandez/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/luis-fernandez/n_7.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("October 09, 1971"),
        title: "“VÍCTIMA DE UNA CRISIS CARDÍACA LIBERARON A FERNÁNDEZ LLADÓ”",
        description:
          "Con la salud seriamente quebrantada y profundamente abatido tras enterarse del deceso de su madre-que le fue comunicado esta madrugada-... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/luis-fernandez/n_8.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/luis-fernandez/n_9.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("October 14, 1971"),
        title: "“CAUTIVO EN UN HÚMEDO SÓTANO”",
        description:
          "Fernández Lladó: detallado relato de un penoso cautiverio... Ratificó que no le explicaron los motivos por los que fue privado de su libertad,... que tuvo ante sí sólo encapuchados, y que la inhóspita “habitación” que le sirvió de prisión por 51 días estaría bajo tierra por la humedad reinante y sus escasas dimensiones... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/luis-fernandez/n_10.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/luis-fernandez/n_11.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“El 18 de agosto de 1971 se realiza el levante de Fernández Lladó...</p>
        <p>Se había resuelto mantenerlo en la pollería. Era éste un lugar apartado con buena cobertura. Se trataba de un galpón con casa donde se había montado un criadero de pollos...</p>
        <p>La prioridad económica de este objetivo era para asegurar buenas finanzas por un tiempo...</p>
        <p>... Esta vez se pedirían 200 mil dólares...</p>
        <p>La etapa inicial, la del levante en sí, correría a cargo de 4 compañeros. Se hizo prolijamente y sin dificultades...</p>
        <p>Tenía problemas cardíacos y precisaba medicamentos permanentes... Incluso un técnico lo examinó más de una vez.</p>
        <p>Martín estaba parte del tiempo en la pollería... Gallo, Lola entre otros estaban también casi todo el tiempo cubriendo el cuidado de Fernández Lladó en la pollería.</p>
        <p>La boca de la pieza-pozo se mantenía semi-abierta para que hubiese más aire. Se estaba alerta, ante cualquier movimiento raro en la zona, se cerraba.</p>
        <p>En una de esas cerradas a Luis Fernández le faltó un poco el aire... llamaron inmediatamente a Marcelo, que vino y le dio una inyección, un tranquilizante.</p>
        <p>En el medio de la retención de Fernández Lladó se dieron dos hechos. Uno de ellos fue la muerte de la madre del retenido...</p>
        <p>El hombre tenía problemas cardíacos... Se resolvió finalmente no comunicarle esta ingrata noticia...</p>
        <p>Se montó el cobro, tres compañeros participaron directamente... Campos es el responsable del operativo. El (sic) recepciona el dinero...</p>
        <p>... Ahora hay que largar al hombre.</p>
        <p>Se tomaron las precauciones correspondientes para realizar el traslado y largada del retenido... Ahí quedó Fernández Lladó quien en conferencia de prensa y en los interrogatorios con la policía se mantuvo discreto. Ya lo había dicho en oportunidad de que se le advirtiera que pusiera cuidado en lo que decía... ”.</p>`,
          // year: new Date("1990-1-1"),
          name: "Acción directa anarquista. Una historia de FAU",
          place: "Montevideo - Uruguay",
          edition: "Editorial Recortes",
          pages: "págs. 383-389",
          author: "Mechoso",
        },
      ],
    },
  },
  {
    date: new Date("October 22, 1971"),
    title: "José Pereyra",
    slug: "jose-pereyra",
    type: "secuestros",
    fact: "SECUESTRAN A JOSÉ PEREYRA, REDACTOR DE EL DÍA",
    victims: [
      {
        info: {
          name: "José Pereyra",
          age: 66,
          marital: "casado",
          // nationality: "Argentino",
          childs: 2,
          // childsDescription: " (4 menores de edad)",
          avatar: {
            src: "/jose-pereyra/a.png",
            alt: "imagen de José Pereyra",
          },
          kidnapping: {
            init: new Date("October 22, 1971"),
            end: new Date("October 28, 1971"),
            days: 6,
            description: " días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("October 23, 1971"),
        title: "“SECUESTRAN A NUESTRO REDACTOR RESPONSABLE”",
        description:
          "El Sr. José Pereyra González víctima del vandalismo... Co-Director, Redactor Responsable y Secretario de Redacción de El Día, fue secuestrado... por integrantes de uno de los grupos sediciosos... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/jose-pereyra/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/jose-pereyra/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("October 23, 1971"),
        title: "“TRES HOMBRES Y UNA MUJER CONSUMARON LA ACCIÓN VANDÁLICA”",
        description:
          "Sobre la hora 13 de ayer fue secuestrado en la puerta de su residencia en... Rambla Mahatma Ghandi 517... Previamente habían amenazado a otra persona, que salía del mismo edificio, pero, ante una orden de su jefe, (“...”) cambiaron de objetivo... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/jose-pereyra/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/jose-pereyra/n_3.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("October 23, 1971"),
        title:
          "“EL SECUESTRO DEL PERIODISTA FUE COPIA FIEL DEL DE PEREIRA REVERBEL”",
        description:
          "Criminal acción de la auto-denominada “Organización Popular Revolucionaria 33”. La misma organización anarquista que secuestró al doctor Alfredo Cambón y al industrial Luis Fernández Lladó, se atribuye la autoría del secuestro del periodista José Pereyra González... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/jose-pereyra/n_4.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/jose-pereyra/n_5.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("October 29, 1971"),
        title: "“LIBERARON A PEREYRA GONZÁLEZ LUEGO DE 6 DÍAS DE SECUESTRO”",
        description: "... Aparecen fotos y plano.",
        images: [
          {
            type: "noticia publicada",
            src: "/jose-pereyra/n_6.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/jose-pereyra/n_7.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Pereyra González, redactor responsable del diario “El Día” fue levantado por nuestra Organización el 23 de octubre de 1971.</p>
          <p>Este diario había estado atacando alevosamente a la OPR por el levante y retención de Fernández Lladó...</p>
          <p>-Hay que hacer un escarmiento... se comentó...</p>
          <p>Aguilar comenzó la preparación de este operativo apenas se dejó en libertad a Fernández Lladó...</p>
          <p>El operativo se concretó el día 23 de octubre, 15 días después de la largada de Fernández Lladó.</p>
          <p>... La acción de levante no resultó complicada...</p>
          <p>Llegó la camioneta con Pereyra González a la casa que usaba regularmente Aguilar, la casa donde vivía uno de sus integrantes: Campos. Se le condujo a la pieza-pozo... ”.</p>`,
          // year: new Date("1990-1-1"),
          name: "Acción directa anarquista. Una historia de FAU",
          place: "Montevideo - Uruguay",
          edition: "Editorial Recortes",
          pages: "págs. 383-389",
          author: "Mechoso",
        },
      ],
    },
  },
  {
    date: new Date("November 29, 1971"),
    title: "Michelle Ray",
    slug: "michelle-ray",
    type: "secuestros",
    fact: "SECUESTRAN A LA PERIODISTA FRANCESA MICHELLE RAY",
    victims: [
      {
        info: {
          name: "Michelle Ray",
          age: 34,
          marital: "casada",
          nationality: "Francesa",
          // childs: 6,
          // childsDescription: " (4 menores de edad)",
          avatar: {
            src: "/michelle-ray/a.png",
            alt: "imagen de Michelle Ray",
          },
          kidnapping: {
            init: new Date("November 29, 1971"),
            end: new Date("December 01, 1971"),
            days: 2,
            description: " días secuestro simulado",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("November 30, 1971"),
        title: "“SIN NOTICIAS DE LA SECUESTRADA”",
        description:
          "... “De acuerdo a lo denunciado en la mañana de hoy por la señora Ester Gilio de Quegeiro,... a la hora a las 10 y 30 aproximadamente, en su domicilio de Golfarini Nº 4029 irrumpieron tres hombres y una mujer que se llevaron secuestrada a su huésped... eran integrantes de la “OPR 33”... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/michelle-ray/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/michelle-ray/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 11)',
        date: new Date("December 02, 1971"),
        title: "“MICHELEN RAY EN LIBERTAD”",
        description:
          "A las 36 horas de ser secuestrada, fue liberada el martes a las 22.30 en el Parque Batlle la periodista francesa Michele Ray. Sus captores, miembros del “OPR 33”, la llevaron en un automóvil hasta la puerta del Sanatorio Americano...",
        images: [
          {
            type: "noticia publicada",
            src: "/michelle-ray/n_3.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/michelle-ray/n_4.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“... Fomento decide hacer una declaración pública sobre la problemática electoral... el levante de periodistas para publicar nuestra posición al respecto. Se acuerda invitar-retener a dos periodistas. Uno nacional y uno internacional.</p>
          <p>El de acá sería Antonio Mercader... El internacional sería, Michelle Ray que estaba de visita en Uruguay y que antes había estado secuestrada por el Viet Cong, también con la intención de difundir ideas...</p>
          <p>... Sin embargo en el momento de la operación Mercader no aparece en el lugar...</p>
          <p>... el levante de Michelle Ray ya está en marcha. Se golpea la casa donde está parando... La dueña de casa, María Ester Gilio, se enoja un poco... </p>
          <p>Los compañeros, en especial el “Gaucho” Idilio, amplían las explicaciones y acto seguido se hacen acompañar por la periodista.</p>
          <p>... Ray fue encapuchada, trasladada al lugar establecido donde se le mantiene todo el tiempo: en el (sic) “pieza-pozo”...</p>
          <p>... La conversación la realizarán Nando y Rogelio.</p>
          <p>Michelle Ray fue una secuestrada de lujo. Se retuvo a esta elegante y simpática periodista sólo un par de días. Después de lo que formalmente era la declaración de prensa se conversó con ella por varias horas... se interesó por detalles acerca de la militancia, de cómo transcurría nuestra vida en estas condiciones especiales... ”.</p>`,
          // year: new Date("1990-1-1"),
          name: "Acción directa anarquista. Una historia de FAU",
          place: "Montevideo - Uruguay",
          edition: "Editorial Recortes",
          pages: "págs. 402-405",
          author: "Mechoso",
        },
      ],
    },
  },
  {
    date: new Date("Febrary 12, 1972"),
    title: "Homero Fariña",
    slug: "homero-farina",
    type: "secuestros",
    fact: "SECUESTRAN A HOMERO FARIÑA, REDACTOR DEL DIARIO ACCIÓN",
    victims: [
      {
        info: {
          name: "Homero Fariña",
          age: 45,
          marital: "casado",
          // nationality: "Francesa",
          childs: 4,
          childsDescription: " (1 hijo menor de edad)",
          avatar: {
            src: "/homero-farina/a.png",
            alt: "imagen de Homero Fariña",
          },
          kidnapping: {
            init: new Date("Febrary 12, 1972"),
            end: new Date("March 03, 1972"),
            days: 20,
            description: " días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("Febrary 12, 1972"),
        title: "“UN GRUPO DE TUPAMAROS LO SACÓ POR LA FUERZA DE SU DOMICILIO”",
        description:
          "... Un comando sedicioso, cuyos integrantes se identificaron como tupamaros, secuestró esta mañana al Redactor Responsable de ACCIÓN y..., Sr. Homero Fariña, a quien se llevaron de su domicilio tras copar su residencia... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/homero-farina/n_1.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/homero-farina/n_1.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("Febrary 13, 1972"),
        title: "“DISFRAZADOS DE MILITARES CONSUMARON EL SECUESTRO”",
        description:
          "..., un grupo tupamaro secuestró al Sr. Homero Fariña Gianecchini (Redactor Responsable de nuestro colega “Acción” y...)... Para ello los sediciosos inmovilizaron a la esposa del periodista y una empleada, así como al jardinero de una finca vecina... Aparecen fotos.",
        title1: "“CONSECUENCIAS DE LOS ATENTADOS CRIMINALES”",
        description1:
          "... el comisario José Pedro Macchi... sufrirá el resto de sus días la terrible secuela del bestial atentado... perdió el ojo izquierdo y una parte de la lengua... Esas lesiones, las más graves, le fueron provocadas por los dos proyectiles que le atravesaron el cráneo...",
        images: [
          {
            type: "noticia publicada",
            src: "/homero-farina/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/homero-farina/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 2)',
        date: new Date("March 03, 1972"),
        title: "“ESTOY EN PRINCIPIO CONTRA LA VIOLENCIA”",
        description:
          "Homero Fariña relató su secuestro y cautiverio... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/homero-farina/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/homero-farina/n_4.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
  },
  {
    date: new Date("May 11, 1972"),
    title: "Sergio Molaguero",
    slug: "sergio-molaguero",
    type: "secuestros",
    fact: "SECUESTRAN Y LIBERAN A SERGIO MOLAGUERO",
    victims: [
      {
        info: {
          name: "Sergio Molaguero",
          age: 23,
          marital: "soltero",
          // nationality: "Francesa",
          // childs: 4,
          // childsDescription: " (1 hijo menore de edad)",
          avatar: {
            src: "/sergio-molaguero/a.png",
            alt: "imagen de Sergio Molaguero",
          },
          kidnapping: {
            init: new Date("May 11, 1972"),
            end: new Date("July 19, 1972"),
            days: 69,
            description: " días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("May 12, 1972"),
        title: "“SECUESTRAN AL HIJO DE CONOCIDO INDUSTRIAL”",
        description:
          "... fue secuestrado por integrantes de la organización delictiva el Sr. Sergio Hugo Molaguero Brescia... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/sergio-molaguero/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/sergio-molaguero/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 11)',
        date: new Date("May 13, 1972"),
        title:
          "“¿EL SECUESTRO DE MOLAGUERO ES UNA ACCIÓN DIRECTA DE APOYATURA?”",
        description:
          "Para los conspiradores los paros, huelgas y ocupaciones, no son suficientes... “Acción violenta de apoyatura conflictos gremiales y movilizaciones de masas”... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/sergio-molaguero/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/sergio-molaguero/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El País" (en Portada)',
        date: new Date("July 21, 1972"),
        title: "“MOLAGUERO: “ESTUVE UN MES ENCADENADO Y HAMBRIENTO...”",
        description:
          "En deplorable estado habló ayer para los periodistas... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/sergio-molaguero/n_5.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/sergio-molaguero/n_6.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 19)',
        date: new Date("July 21, 1972"),
        title:
          "“MOLAGUERO: SUS RAPTORES LE ANUNCIARON QUE SU CONDENA ERA A CADENA PERPETUA”",
        description: "Sergio Molaguero fue liberado...",
        images: [
          {
            type: "noticia publicada",
            src: "/sergio-molaguero/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/sergio-molaguero/n_8.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("July 21, 1972"),
        title: "“EL JOVEN MOLAGUERO FUE TORTURADO CON SADISMO”",
        description:
          "En un sillón de ruedas, con doce quilos y un diente de menos, numerosas cicatrices en el cuerpo, “un estado de confusión mental” y la dolorosa convicción de haber sido torturado con increíble sadismo, Sergio Molaguero Brescia, de 23 años... relató ayer...",
        images: [
          {
            type: "noticia publicada",
            src: "/sergio-molaguero/n_9.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/sergio-molaguero/n_10.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 13)',
        date: new Date("July 30, 1972"),
        title: "“EL MÉDICO CERTIFICÓ TORTURAS A MOLAGUERO”",
        description: "... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/sergio-molaguero/n_11.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/sergio-molaguero/n_12.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 3)',
        date: new Date("August 07, 1972"),
        title: "“DESCUBRIERON UN CUBIL DONDE ESTUVO MOLAGUERO”",
        description:
          "En un húmedo y asfixiante subterráneo en la zona del Cerro lo estuvieron cautivo 50 días... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/sergio-molaguero/n_13.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/sergio-molaguero/n_14.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 6)',
        date: new Date("August 07, 1972"),
        title: "“UBICAN LA “CÁRCEL” DEL OPR 33 DONDE FUE TORTURADO MOLAGUERO”",
        description:
          "La “cárcel del pueblo” donde estuvo recluido 50 días el Sr. Sergio Hugo Molaguero y en la que fuera objeto de un tratamiento brutal por parte de la “O.P.R.33”, fue descubierta... Aparecen fotos.",
        title1: "“TRATAMIENTO INFRAHUMANO”",
        description1:
          "... En ese lugar -... -fue donde Molaguero estuvo amarrado a un palo, con alambre de púas, durante 17 días... cuando le daban de comer -lo que como se sabe, no ocurría todos los días -el menú consistía en arroz mezclado con yerba...",
        images: [
          {
            type: "noticia publicada",
            src: "/sergio-molaguero/n_15.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/sergio-molaguero/n_16.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El País" (en Portada)',
        date: new Date("August 22, 1972"),
        title: "“CAEN SECUESTRADORES DE SERGIO MOLAGUERO”",
        description:
          "Se descubre todo el plan: habían fracasado 4 veces.... Los detenidos son el jefe de toda la operación -... Marcelo -el jefe de uno de los equipos -... “Greco -... Aparecen croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/sergio-molaguero/n_17.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/sergio-molaguero/n_18.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Aguilar, era el organismo responsable de toda la actividad armada de FAU.</p>
          <p>La integraron todo este período los siguientes compañeros: Martín, Marcelo, Campos y Rogelio.</p>
          <p>... después de cerca 20 días, se ubican un par de lugares donde se podía hacer el “levante” de Sergio Molaguero... Se opta al final por hacer el operativo en la propia carretera en aquel lugar por donde determinados días y horas regresaba Molaguero a Santa Lucía.</p>
          <p>Aguilar se aboca de lleno a la tarea... Marcelo y Campos realizan también tareas de información...</p>
          <p>- ¿Está todo pronto para el levante de Molaguero?-, pregunta Gerardo Gatti en una reunión de Fomento...</p>
          <p>... -Acá se puede hacer el trabajo, éste es el punto, mientras no llega nos esconderemos en ese zanjón a la espera que el compañero del walkie talkie nos avise que viene-...</p>
          <p>En otro momento se preparaban las vestimentas de policías que usarían los que tenían que estar en la carretera en actitud de parar vehículos, de estar haciendo una “pinza”...</p>
          <p>En el equipo de aprete inicial estarían: Ruben, Aníbal, Víctor, en el traslado intervendrían Marcelo y Martín. Abriendo camino, con una moto poderosa, vendría Santana. Molaguero quedaría unos días en una casa de Nuevo París. Lo cuidarían permanentemente 3 compañeros: Lola, la Topito y Santana.</p>
          <p>Después sería trasladado a la casa de Campos. Sede de Aguilar, que tenía una pieza camuflada de cierta amplitud debajo de la cocina...</p>
          <p>... Había surgido un dato... la visita regular de Sergio Molaguero a su novia... una ruta lateral que pasaba por un puente.</p>
          <p>Se decidió montar la operación justamente en ese puente...</p>
          <p>...-Llegamos al puente...- nos dice Víctor.</p>
          <p>Agrega - llegó esta vez finalmente con su auto..., me paré con la baliza y se detuvo, le pedí documentos e inmediatamente se arrimó Greco y dijo: “éste es Bidegain”, compañero del MLN... Molaguero miró con asombro y después con indignación salió del coche... Apenas salió lo empujamos hacia afuera de la carretera... intentó correr... un compañero lo tenía agarrado de un brazo y otro le aplicó un golpe para reducirlo y acallar sus gritos...</p>
          <p>Acto seguido, para no tener que pegarle nuevamente, también para cedarlo (sic) y dormirlo Marcelo le aplica una inyección y lo suben a la camioneta...
          <p>... La camioneta y la moto se trasladaron hasta la casa que ya estaba condicionada para recibir esta “visita”.
          <p>... Sergio Molaguero es liberado poco después.</p>

          <p class="font-bold">Conversación con compañeros que participaron en este episodio</p>
          <p>Víctor... Lo dejamos con auriculares en los oídos y atado...</p>
          <p>R. Greco, vos tomaste parte de la retención y largada de Molaguero, ¿qué te acordás?</p>
          <p>G. Me acuerdo que cuando la largada de Molaguero el que va adelante con la moto soy yo... Marcelo va adelante con un VW, después yo en la moto y más atrás la camioneta...</p>
          <p>R. Cuando estás en el pozo cuidando a Molaguero, ¿cómo está constituido el grupo?</p>
          <p>G. En ese lugar están: Juan, el gaucho Idilio, el Acrata y la compañera, el gitano y yo...</p>
          <p>R. Vos Agripita...</p>
          <p>A... Nosotros lo tuvimos unos cuantos días, dos semanas aproximadamente, después fue a un lugar con pozo...</p>
          <p>R. Ahí, en Nuevo París, lo cuidan...</p>
          <p>A. La Negra, Carlitos, Plomito, Lola y yo, nos turnábamos...”.</p>
          <p>R.... Ahí hubo un episodio preocupante. Te acordás que llegan los allanamientos hasta una cuadra de la casa.</p>
          <p>A.... El operativo rastrillo como lo llamaban, llega hasta la esquina. En ese momento hubo que empezar a evacuar un poco la casa. Se sacan los niños, se decide quienes quedan, si venían a la casa se iba a resistir. Estaba completamente decidido...”.</p>`,
          // year: new Date("1990-1-1"),
          name: "Acción directa anarquista. Una historia de FAU",
          place: "Montevideo - Uruguay",
          edition: "Editorial Recortes",
          pages: "págs. 285, 391-400",
          author: "Mechoso",
        },
        {
          fragment: `<p>“... En ese momento, Mechoso integra la dirección de la FAU y al mismo tiempo “Aguilar” que era el organismo responsable de toda su actividad armada. Juan Carlos señala: “... continuamos actuando políticamente desde la ROE y operando militarmente desde la OPR 33...”.</p>
          <p>El 11 de mayo se concretó un secuestro en la ruta 11, próximo al Paso Margat...</p>
          <p>Días antes de la caída de la Cárcel del Pueblo del MLN secuestramos a Sergio Molaguero...</p>
          <p>... El 19 de julio, a casi setenta días de su secuestro, Sergio Molaguero fue liberado en Montevideo por la OPR 33.</p>
          <p>Mechoso afirma: “Molaguero no fue maltratado. Existía un criterio en la organización: se actuaba con firmeza pero con mucho respeto para las personas secuestradas...</p>
          <p>A Molaguero lo entrevisté tres veces. La primera vez lo hice solo y las siguientes con Silva (Raúl Cariboni)...”. ”.</p>`,
          year: new Date("2006-1-1"),
          name: "Juan Carlos Mechoso anarquista",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Trilce",
          pages: "págs. 75-77",
          author: "Jung, Rodríguez",
        },
      ],
    },
    apologyForCrimeInImages: [
      {
        title: "Empresario encarcelado en condiciones inhumanas.",
        description:
          "Un comando terrorista armado secuestró violentamente a Sergio Molaguero, hijo de un industrial, interceptando el vehículo en que viajaba. Permaneció cautivo del grupo sedicioso OPR-33 durante 69 días habiendo sido liberado en deplorable estado de salud luego de sufrir torturas físicas y sicológicas.",
        images: [
          {
            src: "/sergio-molaguero/i_1.jpg",
            alt: "Sediciosos con uniforme militar esperan bajo un puente.",
          },
          {
            src: "/sergio-molaguero/i_2.jpg",
            alt: "Molaguero es reconocido y perseguido.",
          },
          {
            src: "/sergio-molaguero/i_3.jpg",
            alt: "Molaguero es detenido y golpeado por sediciosos con uniforme militar.",
          },
          {
            src: "/sergio-molaguero/i_4.jpg",
            alt: "Sediciosos con uniforme militar, atan con alambre e inyectan a Molaguero.",
          },
          {
            src: "/sergio-molaguero/i_5.jpg",
            alt: "Condiciones inhumanas de reclusión.",
          },
        ],
      },
    ],
    virtualMemorial: [
      {
        src: "/sergio-molaguero/placa_virtual.jpg",
        alt: "Aquí, en plena democracia, el 11/05/72 permaneció secuestrado y fue torturado física y socológicamente por Terroristas, Sergio Molaguero, de 23 años de edad.",
      },
    ],
  },
  {
    date: new Date("July 28, 1972"),
    title: "Héctor Menoni",
    slug: "hector-menoni",
    type: "secuestros",
    fact: "SECUESTRAN AL PERIODISTA HÉCTOR MENONI",
    victims: [
      {
        info: {
          name: "Héctor Menoni",
          age: 47,
          marital: "casado",
          daughter: 1,
          avatar: {
            src: "/hector-menoni/a.png",
            alt: "imagen de Héctor Menoni",
          },
          kidnapping: {
            init: new Date("July 28, 1972"),
            end: new Date("July 30, 1972"),
            days: 2,
            description: " días en cautiverio",
          },
        },
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("July 29, 1972"),
        title: "“SECUESTRARON A GERENTE DE UPI”",
        description:
          "... Un núcleo terrorista de la “Organización Popular Revolucionaria 33 Orientales”, secuestró ayer... al Gerente de las Oficina local de la agencia noticiosa “United Press International” Sr. Héctor Nicolás Menoni,... el sexto de la serie perpetrada por la organización conocida bajo la denominación de “OPR 33”... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/hector-menoni/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/hector-menoni/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("July 29, 1972"),
        title: "“SECUESTRO: LA OPR 33 TIENE AL PERIODISTA”",
        description: "... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/hector-menoni/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/hector-menoni/n_4.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("July 29, 1972"),
        title: "“EL CORRESPONSAL DE UPI FUE SECUESTRADO POR LA OPR 33”",
        description:
          "Dos integrantes de la Organización Popular Revolucionaria 33 (OPR 33) secuestraron ayer..., al gerente de la oficina local de la agencia de noticias United Press International (UPI) Sr. Héctor Nicolás Menoni... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/hector-menoni/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/hector-menoni/n_6.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 12)',
        date: new Date("July 31, 1972"),
        title: "“SOLTARON A MENONI”",
        description:
          "36 horas de cautiverio... Tras permanecer recluido durante 36 horas en una habitación de reducidas dimensiones fue liberado por sus secuestradores... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/hector-menoni/n_7.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/hector-menoni/n_8.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“... Era la reunión ordinaria de Fomento, habían pasado tres días de la largada de Molaguero. Uno de los temas a tratar era el efecto negativo para nosotros que la propaganda parecía haber logrado con el teatro deliberado que éste había hecho.</p>
          <p>En Aguilar nos pareció,..., que era posible levantar a un periodista destacado y darle la verdadera versión...</p>
          <p>El operativo se hace sobre la base de la Unidad 10. Martín es el encargado general. Todo se hace con gran rapidez. A los nueve días de la largada de Molaguero se concreta el levante de Héctor Menoni, gerente de la Agencia United Press International (UPI).</p>
          <p>Waldemar y Sergio son los encargados de sacar de la casa a Menoni y llevarlo hasta el Volkswagen que está cerca de su casa. Nos cuenta Waldemar:
          <p>Atendió la puerta Menoni, Sergio hablaba con él...</p>
          <p>De repente Menoni nos dice: “¿Y si me niego?”. Mirá, a nosotros nos dijeron que te tenemos que llevar a como de (sic) lugar...</p>
          <p>El furgón con Martín y Batlle esperaban cerca de 8 de Octubre y Propios, en él se llevaría al periodista hasta la casa establecida. Se hizo el trasbordo... Batlle iba manejando, Martín lo acompañaba, detrás iba Waldemar con Menoni, a quien se le habían colocado parches en los ojos... ”.</p>`,
          // year: new Date("1990-1-1"),
          name: "Acción directa anarquista. Una historia de FAU",
          place: "Montevideo - Uruguay",
          edition: "Editorial Recortes",
          pages: "págs. 400-402",
          author: "Mechoso",
        },
        {
          fragment: `<p>“Las declaraciones públicas del liberado acusando a sus custodias de malos tratos molestó y preocupó al OPR. “Consideramos que esas declaraciones dejaban una imagen negativa en la organización... Optamos por Héctor Menoni de la Agencia UPI, por ser alguien de responsabilidad y trayectoria periodística...”.</p>
          <p>Menoni recuerda que esa mañana del 28 de julio de 1972 “estaba durmiendo cuando sonó el timbre... Abrí la puerta, se aparecen dos jóvenes que muestran armas de fuego y señalan pertenecer a un “comando revolucionario”... Me llevaron a un volkswagen (sic) estacionado en Tristán Narvaja casi Colonia, me pusieron algodón en los ojos y lentes negros... hasta que llegamos a un lugar. Entré agachado a una pieza con las paredes cubiertas con bolsas de arpillera... me invitaron a jugar al truco...”.</p>
          <p>Como integrante de la dirección de la OPR 33 Mechoso conversó con el periodista “retenido”...</p>
          <p>Menoni fue liberado en horas de la noche en Coronel Raíz esquina Propios...</p>
          <p>Treinta años después, con más de ochenta años, jubilado y siendo un destacado militante frenteamplista en la Costa de Oro de Canelones, reconoce que durante su secuestro se sintió muy angustiado... ”.</p>`,
          year: new Date("2006-1-1"),
          name: "Juan Carlos Mechoso anarquista",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Trilce",
          pages: "págs. 77-80",
          author: "Jung, Rodríguez",
        },
      ],
    },
  },
  {
    date: new Date("July 31, 1963"),
    title: "Armamento Club de Tiro Suizo - Colonia",
    slug: "robo-armas-club-de-tiro-suizo",
    type: "robo-armamento-explosivos",
    fact: "ROBAN ARMAS EN EL CLUB DE TIRO SUIZO (COLONIA)",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 10)',
        date: new Date("September 06, 1963"),
        title:
          "“FUERON APRESADOS EN PAYSANDÚ, DONDE SE INCAUTARON 21 CARABINAS Y 3.000 PROYECTILES, TRES EXTREMISTAS QUE ROBARON AL CLUB TIRO SUIZO”",
        description:
          "Paysandú. Tras una intensa jornada... una investigación de la que pueden surgir consecuencias imprevisibles, que tendrán gran resonancia en el ámbito nacional. La pista seguía a posibles autores del robo de armas registrado semanas atrás en Nueva Helvecia... De acuerdo a lo investigado los autores del robo, presumiblemente, respondan a una organización subversiva de filiación totalitaria. La importancia de la pesquisa policial radica, más que en el robo en sí, en los oscuros propósitos de que podría estar rodeado el hecho, pues se presume que pudo haber sido un primer paso para promover una sublevación contra nuestras instituciones... la noticia causará estupor a muchos que nunca pensaron en los peligros que acechan a nuestra democracia y a la libertad que disfrutamos todos, incluso los que atenten contra ella.",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armas-club-de-tiro-suizo/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/robo-armas-club-de-tiro-suizo/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 10)',
        date: new Date("September 07, 1963"),
        title: "“EXTREMISTAS CONFESARON”",
        description:
          "Paysandú... Terminaron las actuaciones que se venían realizando por el caso del robo de armas del Club de Tiro Suizo de Nueva Helvecia. Todo comenzó cuando el 1º de agosto una camioneta volcó en el km. 234 de la Ruta 3. Obreros de Vialidad vieron una actitud sospechosa de los accidentados cuando, horas más tarde, con la llegada de otro vehículo comenzaron a trasbordar la carga que, envueltas en lonas, parecían armas. La policía detuvo a..., dueño de la camioneta, quien confesó que recibió un llamado de su amigo... para que lo auxilie en la carretera. Más tarde, acompañado por..., aceptó traer las armas a Paysandú y las descargaron en la sede del Centro Socialista. Se pudo saber que allí las armas fueron acondicionadas y transportadas al Arroyo Negro, donde fueron encontradas por la policía, en un monte tupido, 25 carabinas y 3210 balas.",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armas-club-de-tiro-suizo/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/robo-armas-club-de-tiro-suizo/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("September 07, 1963"),
        title:
          '“CON LAS ARMAS ROBADAS PENSABAN "RESISTIR" EN UN INGENIO CAÑERO"',
        description:
          'Aparecen fotos a cuyo pie dicen: “Cinco personas detenidas en Paysandú y trasladadas a Colonia, prestaron declaración sobre el espectacular robo al Tiro de Nueva Helvecia” y aparecen sus nombres. Aparece foto de... a cuyo pie entre otras cosas dice:... "En 1962... fue procesado por protagonizar un ataque a la Confederación Sindical dirigiendo a cañeros en huelga". Aparece foto a cuyo pie dice: “Examinando las armas recuperadas en Paysandú y un cinturón con balas que no pertenece al Club de Tiro damnificado". Otra foto a cuyo pie dice:... "Las armas que fueron encontradas bajo tierra en las márgenes del arroyo Negro, Paysandú..."',
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armas-club-de-tiro-suizo/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-armas-club-de-tiro-suizo/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 14)',
        date: new Date("September 08, 1963"),
        title:
          "“EXTREMISTAS PLANEABAN SERIE DE ACTOS SUBVERSIVOS EN NUESTRO PAÍS”",
        description:
          "Colonia... Con relación al robo de armas al Tiro Suizo en Nueva Helvecia... los autores del hecho pertenecen a una organización extremista que pretendía realizar una serie de actos subversivos, el primero de los cuales... consistía en el apoderamiento de tierras de productores cañeros de Bella Unión, con la colaboración de U.T.A.A. (Unión de Trabajadores Azucareros de Artigas) con la intención de ocupar la refinería de azúcar y hacerse fuertes en esas instalaciones merced a las armas que obrarían en su poder... Ha surgido el nombre del principal cabecilla de la organización, un activista de gran influencia entre los obreros y trabajadores de las zonas norteñas del país... que así se llama el dirigente terrorista,... quien proporcionó el dato del escondite donde se encuentran los cuatro cerrojos de fusil Máuser modelo 1908, que faltaban de las armas recuperadas, como así también datos complementarios...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armas-club-de-tiro-suizo/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/robo-armas-club-de-tiro-suizo/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("September 08, 1963"),
        title: "“BUSCAN A... EN SORIANO”",
        description:
          "Las últimas actuaciones policiales indican que..., el cerebro del robo de armas en Colonia, ayer se encontraba en Soriano...",
        subtitle: "“Los Procesados”",
        subDescription: "La nómina de procesados hasta hoy es la siguiente:...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armas-club-de-tiro-suizo/n_9.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-armas-club-de-tiro-suizo/n_10.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("September 16, 1963"),
        title: '“ESTÁ DETENIDO... EN MONTECASEROS (R.A.)"',
        description:
          "... es acusado allí de “tenencia de armas” y de “no pasar por lugares habilitados” encontrándose a disposición de la Justicia...",
        subtitle: "“El Caso de la C.S.U.”",
        subDescription:
          "... fue procesado en el año 1962, a raíz del asalto contra el local de la Confederación Sindical del Uruguay-en la calle Paraguay-por parte de cañeros artiguenses, suceso que por trágica derivación costara la vida a una señora...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armas-club-de-tiro-suizo/n_11.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-armas-club-de-tiro-suizo/n_12.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Hubo, durante todo el período que venimos relatando, muchas reuniones de este tipo entre militantes con inquietudes similares. Sería exagerar decir que el denominador común de esas inquietudes era la lucha armada.</p>
          <p>... A esas reuniones no iba cualquiera... En ellas nos vimos, en muchos casos por primera vez, con Cultelli, con Mujica, con Beletti, con Jorge Torres, con Gerardo Gatti, con Vivián Trías...</p>
          <p>En el transcurso de ese verano, Eduardo Pinela logró volver a reunir a nuestro grupo y nos lanzóa (sic) una campaña de finanzas para reunir los fondos necesarios para comprar algunas armas.</p> <p>Salimos a vender juguetes: -que no logramos vender- llegamos a la conclusión de que para tener armas en las cantidades que necesitábamos teníamos que ir a buscarlas a donde estaban... Nos habían hablado de un juzgado...</p>
          <p>El negocio de los juguetes no había marchado como para financiar la revolución y no teníamos las llaves del juzgado donde estaban las armas en depósito. Era necesario, imprescindible, actuar como delincuentes comunes y hacer creer a todos que eran los amigos de lo ajeno quienes intentaban llevárselas.</p>
          <p>El intento del juzgado se había enmarcado dentro de los compromisos que para tal proyecto habíamos contraído. Al fallarnos, fue que se nos ocurrió ir a reconocer el Tiro Suizo...</p>
          <p>Nos pusimos en contacto con Raúl y lo invitamos a visitar el lugar. Así fue que una mañana, bien temprano, salimos en su moto con rumbo a Colonia... Y una vez visto el “objetivo” nos encargaríamos de conseguir las armas, Raúl de llevarlas junto a dos compañeros nuestros...</p>
          <p>Las puntas de varios fusiles asomaban por la puerta de un VW que corría por la Ruta 1 rumbo a Montevideo la madrugada del 1 de agosto de 1963...</p>
          <p>... cuando la camioneta volcó en la noche del 31 de julio, algunos rastros claves quedaron en el lugar y la policía de Colonia desarrolló una discreta y brillante pesquisa que la condujo a Paysandú...</p>
          <p>... El Tiro Suizo, la primera acción, el primer intento, el primer paso modesto y vacilante...”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 1: los orígenes",
          place: "Montevideo - Uruguay",
          edition: "Editorial TAE",
          pages: "págs. 63-64, 76-85, 90-91",
          author: "Fernández Huidobro",
        },
        {
          fragment: `<p>“En las tertulias del grupo de Pinela –y en la peluquería del Loco Rivera Yic– se mencionó un par de veces que la Sociedad Tiro Suizo de Nueva Helvecia, en el departamento de Colonia, guardaba una buena cantidad de armas en su local... El dato certero pertenecía al médico Mario Naviliat... cuyo padre había sido presidente del Tiro Suizo ... En uno de esos encuentros, se le planteó a Sendic el asunto del Tiro Suizo, que ya había sido estudiado a fondo-con viajes al lugar, mapeo, horarios, rutinas-...</p>
          <p>Poco después, el Ñato Huidobro y Sendic viajaban rumbo a Colonia...</p>
          <p>... Intervienen en la acción ejecutiva miembros del grupo de Pinela, Sendic, Jorge Abellá y un argentino que ha llegado a Uruguay... Su nombre es Joe Baxter...</p>
          <p>El ingreso al Tiro Suizo se hace en la madrugada, luego de verificar que ya no quedaba nadie adentro... Empaquetan unos treinta fusiles Maúser-...- un par de carabinas de precisión, un fusil <p>Martini y cerca de cuatro mil proyectiles calibre 7 milímetros... Se introduce la mayor parte del cargamento en un Renault pero el joven argentino se pierde con un paquete en la oscuridad.</p> <p>Mientras Rivera Yic, Leonel Vidal y Huidobro parten en el Renault con el grueso de las armas, Pinela sale en busca del porteño Baxter y lo encuentra exhausto... Logran subir todo en el Fusca de Naviliat y salen rumbo a Montevideo.</p>
          <p>El Renault llega al contacto a cuatro kilómetros donde esperan Sendic y Abellá. Traspasan los paquetes a una camioneta... y las armas parten rumbo al norte. Vidal se va con Sendic y Abellá... Mientras el Loco Rivera Yic y Huidobro vuelven a Montevideo.</p>
          <p>Con la explosión de un neumático, la camioneta dio varias vueltas... y cayó en el campo.... Sendic caminó unos kilómetros hasta un almacén rural... y le prestaron un teléfono para comunicarse con Paysandú. Así logró que su amigo, el odontólogo Humberto González Perla, saliera a auxiliarlo.</p>
          <p>Las armas transportadas por Sendic y González Perla quedaron escondidas en el local del Partido Socialista de Paysandú...</p>
          <p>Al otro día le pidió ayuda a sus amigos sanduceros Raúl Cavillón y Ricardo Volpe, y dos días más tarde... en las inmediaciones del paso (sic) de la Bolsa, sobre el arroyo Negro, enterraron, envueltos en nailon, diez fusiles con cerrojos y municiones”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "págs. 253-257",
          author: "Pernas",
        },
        {
          fragment: `<p>“El último día de julio, el heterogéneo sector de la izquierda que integraba al Coordinador, rompe con la todavía sagrada “legalidad” del régimen uruguayo y se produce el asalto al Tiro Suizo.</p>
          <p>Allí estábamos todos los integrantes del Coordinador, hombro con hombro. Un fracaso hubiera significado el derrumbe de todo lo que recién comenzábamos a construir, y seguramente el final prematuro de la aventura política más impresionante de la historia contemporánea de nuestro país.</p>
          <p>El operativo, a pesar de nuestra comprensible inseguridad, en líneas generales resultó exitoso; no obstante un accidente protagonizado por uno de los automóviles que participaran en la acción, proporcionaría nuestra primera pista a la Policía, que meses después ya comenzaría a hablar de un “grupo subversivo” y daría orden de captura contra Raúl Sendic...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Autobiografía de Amodio Pérez",
          place: "Montevideo - Uruguay",
          edition: "Editorial ARCA",
          pages: "pág. 10",
          author: "Pérez",
        },
        {
          fragment: `<p>“En ese mismo 1963 en que Lucía comienza su carrera universitaria, camino sin retorno donde aprendió a manejar armas y efectuar disparos, se disparó El Tiro Suizo, primera acción armada del Coordinador germen Tupamaro. Veinticinco fusiles, casi todos incompletos, algunos modelo 1908, más de tres mil quinientas balas; un botín aparatoso, casi inútil militarmente, pero sin dudas de un gran poder simbólico. Dos de tres rifles escruchados, eran calibre 22...”.</p>`,
          year: new Date("2011-1-1"),
          name: "Ana la guerrillera. Una historia de Lucía Topolanski",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Uruguay B S.A",
          pages: "pág. 5",
          author: "Caula y Silva",
        },
      ],
    },
  },
  {
    date: new Date("January 01, 1964"),
    title: "Armamento Aduana Bella Unión - Artigas",
    slug: "robo-armas-aduana-bella-union",
    type: "robo-armamento-explosivos",
    fact: "ROBAN ARMAS EN LA ADUANA DE BELLA UNIÓN (ARTIGAS)",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 15)',
        date: new Date("January 12, 1964"),
        title:
          '“ROBARON DE LA RECEPTORÍA DE BELLA UNIÓN 11 RIFLES Y 7 BAYONETAS"',
        description:
          "Artigas... Mediante la ruptura de un candado, habían sido robados de la receptoría aduanera, los once fusiles Maúser que componían el armamento de ese destacamento... El hurto se perpetró entre la 1 y 30 y las 4 de la madrugada de hoy, descubriéndolo el guarda-aduanero que concurrió a abrir la receptoría. Comunicada la anormalidad a la policía local y al receptor encargado,... que se encontraba en Salto, se comprobó que habían sido robados 11 fusiles Maúser, modelo 1908, de repetición, calibre 7 mm y 7 bayonetas, estando intactas..., ruta 3, donde se encontraron dos tapabocas de fusil,...",
        subtitle: "“Quienes Serían los Autores”",
        subDescription:
          "... se establecieron dos posibilidades en cuanto a quienes pueden haber cometido el hurto. La primera de ellas se relaciona al mismo grupo de agitadores que meses atrás robara las armas del Club de Tiro de Nueva Helvecia. La segunda...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armas-aduana-bella-union/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/robo-armas-aduana-bella-union/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 7)',
        date: new Date("January 12, 1964"),
        title:
          "“ESPERAN ACLARAR A BREVE TÉRMINO EL ROBO DE ARMAS EN BELLA UNIÓN”",
        description:
          "...Todas las pesquisas llevan a presumir que fue-... el hombre afanosamente buscado por el anterior robo de armas- quien planeó el descubierto ayer e incluso vieron compinches del prófugo merodeando por los alrededores del galpón de AFE, que oficia de receptoría. Además el suceso se vincula a un paro de obreros cañeros, unos 120, que reclamaban el pago de jornales...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armas-aduana-bella-union/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-armas-aduana-bella-union/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 5)',
        date: new Date("January 13, 1964"),
        title: '"MISTERIO A DOS PUNTAS: LAS ARMAS, ¿PARA QUÉ?"',
        description:
          "Sigue el misterio del robo de armas en Bella Unión donde sustrajeron 11 fusiles Máuser con sus respectivas bayonetas. Según opinión de los expertos los cartuchos 7 mm. robados en el Club de Tiro Suizo encajan perfectamente en las recámaras de estos fusiles. Se ha mencionado nuevamente a.., dirigente sindical y socialista, quien sigue prófugo de la justicia.",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armas-aduana-bella-union/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/robo-armas-aduana-bella-union/n_6.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Seiscientos kilómetros más al norte otro grupo cumplió, la noche de año nuevo, su compromiso con el Coordinador llevándose los fusiles de la aduana de Bella Unión, una especie de Tiro Suizo, pero esta vez sin fallas…”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 1: los orígenes",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "pág. 109",
          author: "Fernández Huidobro",
        },
        {
          fragment: `<p>“Y el primer día de 1964 también celebraron todos -algunos con vino en Montevideo, Sendic con caña brasilera más allá de la frontera- el robo de armas de la Aduana de Bella Unión por parte de algunos muchachos de la dirigencia de UTAA: once fusiles y siete bayonetas.”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 260",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("April 20, 1964"),
    title: "Armamento Casa Ribel S.A. - Minas",
    slug: "robo-armas-ciudad-de-minas",
    type: "robo-armamento-explosivos",
    fact: "ROBAN ARMAS EN LA CIUDAD DE MINAS (LAVALLEJA)",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("April 21, 1964"),
        title:
          '“HAY SEIS DETENIDOS EN LA CIUDAD DE MINAS POR EL ROBO DE ARMAS"',
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armas-ciudad-de-minas/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-armas-ciudad-de-minas/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Pagina 22)',
        date: new Date("April 21, 1964"),
        title: "“HAY SEIS PERSONAS QUE SON INDAGADAS”",
        description:
          "Minas. En la Jefatura de policía local se indaga esta tarde a seis personas por el robo de cinco rifles alemanes, seis revólveres de igual procedencia y mil proyectiles calibre 22, sustraídos el pasado domingo en el local de ”Casa Ribel S.A.” ubicada en 18 de Julio y Rodó...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armas-ciudad-de-minas/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-armas-ciudad-de-minas/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Pagina 8)',
        date: new Date("April 21, 1964"),
        title: "“ROBO DE ARMAS EN MINAS: 12 FUSILES Y REVÓLVERES”",
        description:
          "La lista de robos continúa engrosando el caudal de extraños episodios. Primero fue en el Club de Tiro Suizo en Nueva Helvecia. Al descubrirse que los Maúser y los proyectiles pudieran haber caído en manos de extremistas políticos, una suerte de alarma, conjeturas y premoniciones invadió el país. Después fue el robo en la receptoría de Aduanas de Bella Unión. Ahí, el misterio más profundo silenció el caso, pero los Maúser nunca aparecieron. Más tarde fue en Las Piedras, una armería fue saqueada por ladrones que despreciaron otros artículos, también valiosos, para llevarse únicamente armas. Ahora es en Minas y esta vez también despreciaron artículos muy valiosos... para llevarse revólveres, rifles y cantidad de proyectiles para ambos tipo de armas.",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armas-ciudad-de-minas/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/robo-armas-ciudad-de-minas/n_6.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
  },
  {
    date: new Date("April 25, 1964"),
    title: "Explosivos Nueva Carrara - Maldonado",
    slug: "robo-explosivos-maldonado",
    type: "robo-armamento-explosivos",
    fact: "ROBAN EXPLOSIVOS EN MALDONADO Y DETONANTES EN MINAS (LAVALLEJA)",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("April 26, 1964"),
        title:
          "“TRESCIENTOS KILOS DE DINAMITA FUERON ROBADOS DE UNA CANTERA EN MALDONADO”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-explosivos-maldonado/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-explosivos-maldonado/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 13)',
        date: new Date("April 26, 1964"),
        title:
          "“MALDONADO: LA POLICÍA INVESTIGA EL ROBO DE 300 KILOS DE DINAMITA”",
        description:
          "Maldonado... La lista de robos continúa. 300 kilos de dinamita fueron robadas de una cantera cerca de Pan de Azúcar, unos 4250 cartuchos en 17 cajones. Los ladrones se llevaron los explosivos de mayor poder, lo que indicaría que son personas habituadas a manejar dinamita...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-explosivos-maldonado/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-explosivos-maldonado/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("April 27, 1964"),
        title:
          "“NUEVA ESTIMACIÓN DE LA CANTIDAD DE EXPLOSIVOS ROBADOS: 540 KILOS. El Móvil Aún Se Desconoce”",
        description:
          "Pan de Azúcar... Si bien el móvil aún se desconoce, las últimas comprobaciones dan que al final fueron 540 kilos de dinamita los robados en la cantera de Pan de Azúcar perteneciente a la Compañía Nacional de Cemento S.A. El hurto inquieta a las autoridades ya que en principio se descarta que sea comercializado clandestinamente en otras canteras y que otros propósitos, ajenos a su valor, los llevaran a consumar el robo.",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-explosivos-maldonado/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-explosivos-maldonado/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      // {
      //   name: 'Diario "El Diario" (en Portada)',
      //   date: new Date("May 02, 1964"),
      //   title: "“DINAMITA : PREOCUPA AHORA EL ROBO DE DETONANTES EN MINAS”",
      //   description: "...",
      //   images: [
      //     {
      //       type: "noticia publicada",
      //       src: "/robo-explosivos-maldonado-y-detonantes-minas/n_7.jpg",
      //       alt: "noticia publicada por el diario El Diario",
      //     },
      //     {
      //       type: "página diario completa",
      //       src: "/robo-explosivos-maldonado-y-detonantes-minas/n_8.jpg",
      //       alt: "página diario completa publicada por el diario El Diario",
      //     },
      //   ],
      // },
      // {
      //   name: 'Diario "El Diario" (Página 18)',
      //   date: new Date("May 02, 1964"),
      //   title: "“EN MINAS ROBARON DETONANTES”",
      //   description:
      //     "El robo de 100 fulminantes y 10 metros de mecha, a un vecino de Cerro Blanco a 12 kilómetros de Minas, abre una nueva interrogante con respecto a los 540 kilos de dinamita sustraída en Pan de Azúcar, ya que estos materiales son los indicados para detonar la dinamita.",
      //   images: [
      //     {
      //       type: "noticia publicada",
      //       src: "/robo-explosivos-maldonado-y-detonantes-minas/n_9.jpg",
      //       alt: "noticia publicada por el diario El Diario",
      //     },
      //     {
      //       type: "página diario completa",
      //       src: "/robo-explosivos-maldonado-y-detonantes-minas/n_10.jpg",
      //       alt: "página diario completa publicada por el diario El Diario",
      //     },
      //   ],
      // },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“... Fue durante esas reuniones de abril que pidió ingreso al Coordinador, formalmente, un nuevo grupo. Provenía de Montevideo. Del Partido Socialista. Aquel raro de la pipa, el ingeniero, había sido el chofer que no perdió la serenidad en Melilla. En base a ello se pedía el ingreso. El Coordinador no consideró suficiente acción como para ap obarlo (sic). Entonces, para ingresar, aquel grupo se llevó 540 kgs. de gelignita en 24 cajones de una cantera de Pan de Azúcar. El 25 de abril de 1964 ese grupo ingresó al Coordinador. Con él estaban todos los que pondrían manos a la obra en la construcción del MLN”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 1: los orígenes",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "págs. 129-130",
          author: "Fernández Huidobro",
        },
        {
          fragment: `<p>“Además, Manera, Rivero Cedrés, Amodio Pérez y Rodríguez Recalde-es decir, parte del grupo de socialistas- habían robado, el 24 de abril, unos quinientos cuarenta kilos de dinamita de la cantera Nueva Carrara de Pan de Azúcar, en el departamento de Maldonado. Eran unos dos mil quinientos cartuchos colocados en veinticuatros cajas, que cargaron en un jeep Land Rover y luego enterraron en las arenas del balneario Bella Vista, bajo unos tamarices, que servían de referencia para cuando debían desenterrarlos… La acción fue realizada con pleno conocimiento de Sendic”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 267",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("May 01, 1964"),
    title: "Detonantes Cerro Blanco - Minas",
    slug: "robo-detonantes-minas",
    type: "robo-armamento-explosivos",
    fact: "ROBAN EXPLOSIVOS EN MALDONADO Y DETONANTES EN MINAS (LAVALLEJA)",
    newsPapers: [
      // {
      //   name: 'Diario "El Diario" (en Portada)',
      //   date: new Date("April 26, 1964"),
      //   title:
      //     "“TRESCIENTOS KILOS DE DINAMITA FUERON ROBADOS DE UNA CANTERA EN MALDONADO”",
      //   description: "...",
      //   images: [
      //     {
      //       type: "noticia publicada",
      //       src: "/robo-explosivos-maldonado-y-detonantes-minas/n_1.jpg",
      //       alt: "noticia publicada por el diario El Diario",
      //     },
      //     {
      //       type: "página diario completa",
      //       src: "/robo-explosivos-maldonado-y-detonantes-minas/n_2.jpg",
      //       alt: "página diario completa publicada por el diario El Diario",
      //     },
      //   ],
      // },
      // {
      //   name: 'Diario "El Diario" (Página 13)',
      //   date: new Date("April 26, 1964"),
      //   title:
      //     "“MALDONADO: LA POLICÍA INVESTIGA EL ROBO DE 300 KILOS DE DINAMITA”",
      //   description:
      //     "Maldonado... La lista de robos continúa. 300 kilos de dinamita fueron robadas de una cantera cerca de Pan de Azúcar, unos 4250 cartuchos en 17 cajones. Los ladrones se llevaron los explosivos de mayor poder, lo que indicaría que son personas habituadas a manejar dinamita...",
      //   images: [
      //     {
      //       type: "noticia publicada",
      //       src: "/robo-explosivos-maldonado-y-detonantes-minas/n_3.jpg",
      //       alt: "noticia publicada por el diario El Diario",
      //     },
      //     {
      //       type: "página diario completa",
      //       src: "/robo-explosivos-maldonado-y-detonantes-minas/n_4.jpg",
      //       alt: "página diario completa publicada por el diario El Diario",
      //     },
      //   ],
      // },
      // {
      //   name: 'Diario "El Diario" (Página 18)',
      //   date: new Date("April 27, 1964"),
      //   title:
      //     "“NUEVA ESTIMACIÓN DE LA CANTIDAD DE EXPLOSIVOS ROBADOS: 540 KILOS. El Móvil Aún Se Desconoce”",
      //   description:
      //     "Pan de Azúcar... Si bien el móvil aún se desconoce, las últimas comprobaciones dan que al final fueron 540 kilos de dinamita los robados en la cantera de Pan de Azúcar perteneciente a la Compañía Nacional de Cemento S.A. El hurto inquieta a las autoridades ya que en principio se descarta que sea comercializado clandestinamente en otras canteras y que otros propósitos, ajenos a su valor, los llevaran a consumar el robo.",
      //   images: [
      //     {
      //       type: "noticia publicada",
      //       src: "/robo-explosivos-maldonado-y-detonantes-minas/n_5.jpg",
      //       alt: "noticia publicada por el diario El Diario",
      //     },
      //     {
      //       type: "página diario completa",
      //       src: "/robo-explosivos-maldonado-y-detonantes-minas/n_6.jpg",
      //       alt: "página diario completa publicada por el diario El Diario",
      //     },
      //   ],
      // },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("May 02, 1964"),
        title: "“DINAMITA : PREOCUPA AHORA EL ROBO DE DETONANTES EN MINAS”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-detonantes-minas/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-detonantes-minas/n_8.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("May 02, 1964"),
        title: "“EN MINAS ROBARON DETONANTES”",
        description:
          "El robo de 100 fulminantes y 10 metros de mecha, a un vecino de Cerro Blanco a 12 kilómetros de Minas, abre una nueva interrogante con respecto a los 540 kilos de dinamita sustraída en Pan de Azúcar, ya que estos materiales son los indicados para detonar la dinamita.",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-detonantes-minas/n_9.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-detonantes-minas/n_10.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("February 18, 1966"),
    title: "Armamento F.U.T.I. - Montevideo",
    slug: "robo-armamento-carpa-futi",
    type: "robo-armamento-explosivos",
    fact: "ROBAN ARMAMENTO DE LA CARPA FUTI, FEDERACIÓN URUGUAYA DE TEATRO INDEPENDIENTE",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("February 18, 1966"),
        title: "“EXTREMISTAS ROBARON ARMAS DE LA AVIACIÓN”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armamento-carpa-futi/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-armamento-carpa-futi/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("February 18, 1966"),
        body: {
          title: "“TUPAMAROS EN ACCIÓN”",
          // titledescription: '',
          subtitle: "“De la Línea de Pekín”",
          subtitledescription:
            "... conoce perfectamente las actividades de estos “Tupamaros” representantes de la ideología comunista de Pekín en su línea más dura. Esta agrupación clandestina es fervorosa defensora de la guerra total para lograr la implantación del comunismo a escala mundial. En las filas de los “Tupamaros” militan personas...",
          subtitle1: "“Peligrosos y Organizados”",
          subtitledescription1:
            "Algunos de los “Tupamaros” que actúan en la clandestinidad están individualizados...",
          subtitle2: "“Anteriores Atentados”",
          subtitledescription2:
            "... los “Tupamaros” quienes arrojaron una bomba contra los depósitos de la firma Bayer... también... contra el frente del edificio de Moore MacCormick Line... Hubo por entonces..., varias sedes de firmas norteamericanas dañadas con bombas.",
        },
        title1: "“FUSILES CON BAYONETAS PRESTADOS A UN TEATRO”",
        description1: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armamento-carpa-futi/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-armamento-carpa-futi/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("February 19, 1966"),
        title: "“ROBARON DE UN TEATRO UNIFORMES Y 10 ARMAS”",
        description:
          "Un atraco desacostumbrado en nuestro medio acaeció ayer a las 10, en la carpa del Teatro Independiente ubicado en Sierra y Hocquart. Dos individuos jóvenes cuyas edades oscilarían entre 20 y 25 años llegaron hasta el teatro, los desconocidos arremetieron contra el sereno, Antonio Anuedo Ugati, reduciéndolo y atándolo en una silla y dirigiéndose donde se guardaban los uniformes y las armas, procediendo a cargarlas en una camioneta. Antes de retirarse esparcieron por las butacas del Teatro numerosos panfletos firmados con la sigla “Tupamaros”...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armamento-carpa-futi/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/robo-armamento-carpa-futi/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 6)',
        date: new Date("February 20, 1966"),
        title: "“LOCALIZADA LA CAMIONETA USADA POR LOS “TUPAMAROS”",
        description:
          "... se encontró abandonada ayer la camioneta utilizada por los “Tupamaros” en el extraño atraco a la carpa del Teatro Independiente del FUTI. El rodado de referencia había sido hurtado el 16 del corriente en Pocitos. Los delincuentes para utilizarla adulteraron el número de la cifra de la matrícula.",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armamento-carpa-futi/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/robo-armamento-carpa-futi/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Mientras bajábamos por la calle 26 de Marzo al puertito del Buceo, alta ya la noche, íbamos comentando la reciente “operación” de la Organización en la carpa, que sobre el Palacio Legislativo, había levantado la Federación Uruguaya de Teatros Independientes; allí se había dado la obra de Rosencof “Las Ranas” y más tarde “Papas Fritas con Todo” de Arnold Wesker. Para esta obra era necesario utilizar fusiles, y la Fuerza Aérea había prestado diez; nosotros sabíamos que no tenían la aguja percutora en sus cerrojos, pero también sabíamos cómo hacerla en nuestros talleres. De modo que un día, en febrero habíamos ido en su busca y dejado un volante que decía: “El pueblo confisca para sí estos instrumentos como única garantía de ser respetado… TUPAMAROS”. Nos llevamos también 18 uniformes...”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 3: el MLN",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "pág. 16",
          author: "Fernández Huidobro",
        },
      ],
    },
  },
  {
    date: new Date("November 27, 1966"),
    title: "Armamento Armería El Cazador - Montevideo",
    slug: "robo-armamento-uniformes-armeria-el-cazador",
    type: "robo-armamento-explosivos",
    fact: "“ROBAN LA ARMERÍA “EL CAZADOR”",
    newsPapers: [
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("November 27, 1966"),
        title:
          "“ROBAN ARMAS POR UN MILLÓN DE PESOS Y UNIFORMES POLICIALES, DEJAN DINERO. CUMPLIERON UN PLAN CIENTÍFICO ¿QUÉ PASARÁ?”",
        description:
          "... Aparecen fotos del escenario y detalles del robo millonario.",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armamento-uniformes-armeria-el-cazador/n_1.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/robo-armamento-uniformes-armeria-el-cazador/n_2.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 12)',
        date: new Date("November 28, 1966"),
        title: "“BOQUETEROS HURTARON AYER ARMAS Y UNIFORMES”",
        description: "...",
        subtitle: "“Segundo Asalto”",
        subDescription:
          "... Desde allí realizan un segundo boquete llegando a la armería “El Cazador” de la Avenida Uruguay 808; en la armería robaron armas y proyectiles sustrayendo 30 pistolas... marca Beretta. De otro lugar hurtan 20 carabinas calibre 22 de repetición y automáticas marca “Brno” y “Browning” y 200 cajas de proyectiles de calibre de guerra.",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armamento-uniformes-armeria-el-cazador/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/robo-armamento-uniformes-armeria-el-cazador/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 11)',
        date: new Date("November 28, 1966"),
        title: "“ROBARON UNIFORMES Y ARMAS POR $ 800.000”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armamento-uniformes-armeria-el-cazador/n_5.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/robo-armamento-uniformes-armeria-el-cazador/n_6.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“...Ocho hombres y dos mujeres brindaríamos apoyo desde afuera en diversas misiones. Encabezados por Marenales, entrarían cinco... Un local para alquilar en el edificio de apartamentos contiguo nos ofrecía, providencialmente, el camino de entrada con sólo hacer un boquete...
          Aprovechando un momento en que la puerta quedó abierta, a eso de la hora 19, los cinco compañeros entraron al edificio...
          Amanecía el 27 de noviembre de 1966: 63 armas de diverso calibre, más de 10.000 proyectiles, herramientas, uniformes policiales, etc., iban en una camioneta custodiada por otra, hacia el taller de José L. Terra...”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 3: el MLN",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "págs. 40-44",
          author: "Fernández Huidobro",
        },
        {
          fragment: `<p>“La noche de la elección nacional, el 27 de noviembre, aprovechando la distracción de las fuerzas de seguridad a cargo de la custodia del acto cívico, los tupamaros lograron desvalijar la Armería El Cazador, en pleno centro de Montevideo: diez bultos que contenían unas veinte armas largas –rifles y escopetas– , casi cincuenta revólveres, cerca de diez mil municiones y más de quince uniformes policiales se escurrieron en la madrugada del domingo”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 307",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("January 01, 1968"),
    title: "Explosivos Cantera Blanca - Maldonado",
    slug: "robo-explosivos-polvorin-maldonado",
    type: "robo-armamento-explosivos",
    fact: "ROBAN 500 KILOS DE EXPLOSIVOS DE UN POLVORÍN DE LA INDUSTRIA DE CEMENTO (MALDONADO)",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("January 03, 1968"),
        title: "“TUPAMAROS ROBAN 500 KILOS DE EXPLOSIVOS”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-explosivos-polvorín-maldonado/n_1.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/robo-explosivos-polvorín-maldonado/n_2.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("January 03, 1968"),
        title:
          "“APROVISIONARÍAN A GUERRILLEROS DE OTROS PAÍSES CON LA GELINITA”",
        description:
          "Pan de Azúcar. Los Tupamaros robaron días pasados 500 kilos de gelinita del polvorín ubicado en la Cantera Blanca, con el propósito, según fuentes informadas, de enviar tan importante cantidad de explosivos a guerrilleros que operan en otros países de América y a los que resulta muy difícil aprovisionarse de tal elemento. El explosivo era propiedad de la fábrica de portland que se encuentra sobre la Ruta 9 a la altura del kilómetro 110 de la ciudad de Pan de Azúcar. Los autores de la sustracción se individualizaron dejando en el lugar unos volantes donde indican que son los “Tupamaros”.",
        subtitle: "“Más de Veinte Prófugos”",
        subDescription:
          "Mientras se produce otra incursión de los “Tupamaros” que ya protagonizaron actos de terrorismo contra edificios de empresas extranjeras, asaltaron bancos, se tirotearon con la policía en varias circunstancias y atracaron la carpa de FUTI llevándose fusiles y uniformes, más de veinte de estos terroristas identificados por la policía cuando los sonados sucesos de diciembre de 1966, se mantienen prófugos. Algunos de estos “Tupamaros” se encuentran en Cuba...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-explosivos-polvorín-maldonado/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-explosivos-polvorín-maldonado/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("January 03, 1968"),
        title: "“MALDONADO. ROBARON POLVORÍN DE INDUSTRIA DE CEMENTO”",
        description:
          "Pan de Azúcar. A las 10 y 15 de esta mañana se denunció a las autoridades de la seccional 3º, por parte de la Compañía Nacional de Cemento Portland con asiento en kilómetro 110 del ferrocarril al este, que mediante violación del techo del polvorín existente en la cantera “Nueva Carrara”, que explota dicha empresa, se había perpetrado la sustracción de importante cantidad de explosivos... El material sustraído de dicha cantera consiste en 27 cajones de dinamita de kg. 22,500 cada uno, con un total de kilogramos 607,500.",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-explosivos-polvorín-maldonado/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/robo-explosivos-polvorín-maldonado/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“La noche de fin de año de 1967 se ven los clásicos fuegos artificiales en el cielo, suenan las “bombas y otros tipos de petardos en los barrios y poblados. Esa noche lo último que deseaban los tupamaros era que algo de lo que llevaban en la caja les explotara. Salían desde el kilómetro 110 de la Ruta 9 con más de quinientos kilos de gelignita que habían extraído de la Cantera Blanca, en las afueras de Pan de Azúcar. La estrella de cinco puntas quedó pintada en la pared del polvorín y los volantes dispersos por el lugar llevaban la firma del Comando Carlos Flores.
          El material quedó enterrado en las arenas del balneario Bella Vista hasta mejor oportunidad de trasladarlo a Marquetalia”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 327",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("May 07, 1968"),
    title: "Armamento Armería Botta - Montevideo",
    slug: "robo-revolveres-y-pistolas-armeria-botta",
    type: "robo-armamento-explosivos",
    fact: "ASALTAN LA ARMERÍA BOTTA",
    newsPapers: [
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("May 07, 1968"),
        title:
          "“ARMERÍA ATRACADA EN EL REDUCTO: LLEVAN 25 REVÓLVERES Y 200 BALAS”",
        description:
          "... Esta mañana, a la armería sita en San Martín 2328... llegaron tres desconocidos, los que, revólver en mano... intimaron al dueño de la casa... procedieron a atarle las manos a la espalda colocándole una ancha tira emplástica en la boca, mientras... se entregaban a la tarea de sacar de las vitrinas alrededor de veinticinco armas cortas -revólveres y pistolas- de las marcas Smith Wesson, Colt, Astra, Llama y Bernardelli... estimados en unos seiscientos mil pesos, incluyendo doscientas balas de calibre surtidos... en el cajón del mostrador, los delincuentes se apoderaron de seis mil pesos en efectivo.",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-revolveres-y-pistolas-armeria-botta/n_1.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/robo-revolveres-y-pistolas-armeria-botta/n_2.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
  },
  {
    date: new Date("January 01, 1969"),
    title: "Armamento en Juzgado - Montevideo",
    slug: "robo-armas-de-un-juzgado",
    type: "robo-armamento-explosivos",
    fact: "ROBAN ARMAS DE UN JUZGADO",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("January 01, 1969"),
        title: "“AUDAZ GOLPE DIERON AYER LOS TUPAMAROS”",
        description:
          "Mientras la ciudad festejaba el comienzo de un nuevo año, los Tupamaros reaparecieron en la madrugada del día miércoles 1º y dieron un golpe... Procurando armas violentaron la puerta de un juzgado y robaron un verdadero arsenal que incluye hasta metralletas y carabinas... Aparece plano de las dependencias del Juzgado.",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armas-de-un-juzgado/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-armas-de-un-juzgado/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“... 1969 se inicia con perspectivas más auspiciosas. En los últimos días de diciembre se tuvo la información de que en el Juzgado de Instrucción de Primer Turno estaban depositadas las armas que la policía había incautado en los procedimientos contra el MLN-T.</p>
          <p>La acción se realiza bajo la responsabilidad de Tabaré Rivero, participando gente de su columna que no tenía experiencia anterior...”.</p>`,
          year: new Date("2015-1-1"),
          name: "Palabra de Amodio. La otra historia de los Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Plaza",
          pages: "pág. 269",
          author: "Marius",
        },
      ],
    },
  },
  {
    date: new Date("September 26, 1969"),
    title: "Armamento en domicilio Luis Bruzzone - Montevideo",
    slug: "robo-a-coleccionista-de-armas",
    type: "robo-armamento-explosivos",
    fact: "ROBO A UN COLECCIONISTA DE ARMAS",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("September 26, 1969 03:24:00"),
        title: "LO ACRIBILLARON AL NO ENTREGAR EL ARMAMENTO",
        description:
          "Un coleccionista de armas... fue acribillado a balazos por un grupo de extremistas cuando intentaban robarle valiosas pistolas, revólveres y municiones... se produjo esta mañana pasada las 6.30 horas en el comercio de la Avda. General Flores 2687 esquina Vilardebó, propiedad de la víctima Rafael César Guidet Piotti. Aparece croquis de...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-a-coleccionista-de-armas/n_1.jpg",
            alt: "noticia publicada por el diario el diario",
          },
          {
            type: "página diario completa",
            src: "/robo-a-coleccionista-de-armas/n_2.jpg",
            alt: "pagina publicada por el diario el diario",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>Al mediodía, otro grupo actúo con distinta planificación: averiguó que el coleccionista de armas y empresario Luis Alberto Bruzzone no estaba en su casa de la calle Luis de la Torre 468. Uno telefoneó a la hija, y haciéndose pasar por funcionario de una empresa, le comunicó a la joven que le llevarían unos papeles para su padre. Al llegar, ella les abrió la puerta y terminó encañonada.</p>
            <p>– ¡Quedate tranquila y no te va a pasar nada!</p>
            <p>Lo mismo le dijeron a la madre de la joven, cuando la encontraron en la cocina.</p>
            <p>En veinte minutos se llevaron carabinas, rifles, escopetas, revólveres, pistolas y municiones...</p>
            <p>Salieron, abordaron un taxi –el Mercedes Benz, negro, matrícula 350.910–..."</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 403",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("May 29, 1970"),
    title: "Armamento Centro de Instrucción de la Marina - Montevideo",
    slug: "robo-armamento-centro-instruccion-de-la-marina",
    type: "robo-armamento-explosivos",
    fact: "ROBO DE ARSENAL EN  EL CENTRO DE INSTRUCCIÓN DE LA MARINA",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 11)',
        date: new Date("May 31, 1970"),
        title: "“EL TRAIDOR...,  ERA EL “CABO DE GUARDIA”",
        description:
          "...en sus funciones de Cabo de Guardia salió de la Oficina para realizar, al parecer, una de las rondas de rutina. Subió hasta la azotea donde estaba su compañero centinela... en determinado momento, extrajo su pistola de reglamento y apuntándole lo redujo, obligándolo a entregar el arma así como a acostarse boca abajo... desde allí arriba y con el “M-16” apuntó al “puerta” ubicado abajo... La nómina completa de armas... El numeroso arsenal estaba compuesto por 4 sub ametralladoras “Thompsom”..., 90 fusiles..., 150 fusiles semiautomáticos “Garand M-1”, 4 fusiles “M-16”..., 4 metralletas “Raissing”..., seis radio-transmisores de mochila... El total de proyectiles es... 7000...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armamento-centro-instruccion-de-la-marina/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/robo-armamento-centro-instruccion-de-la-marina/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("June 03, 1970"),
        title: "“RECONOCEN A 4 ASALTANTES DE LA MARINA; 2 REMITIDOS”",
        description: "El Juez de Instrucción...",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armamento-centro-instruccion-de-la-marina/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/robo-armamento-centro-instruccion-de-la-marina/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 7)',
        date: new Date("August 01, 1970"),
        title: "“UNO DE LOS APRESADOS RECONOCIDO  COMO ASALTANTE A LA MARINA”",
        description: "Tres sediciosos... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/robo-armamento-centro-instruccion-de-la-marina/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/robo-armamento-centro-instruccion-de-la-marina/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Cuatro días después los tupamaros festejan el gran golpe del Bebe Sendic y su columna del interior con el apoyo de otros revolucionarios en especial del marinero Fernando Garín. Habían irrumpido en el Centro de Instrucción de la Marina, redujeron a los efectivos navales...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 460",
          author: "Pernas",
        },
        {
          fragment: `<p>“... -En varias cosas. En la Marina...</p>
          <p>- Si, yo con otros peludos fuimos al mando de Raúl...</p>
          <p>-Raúl estaba sí. El que más aparecía era Bidegain, pero Raúl estaba. De aquellos cuatro peludos que fuimos bajo las órdenes de Raúl hoy sólo quedamos Bandera Lima y yo.</p>
          <p>... Las armas fueron muchas y se escondieron en varios lugares. No me extrañaría que cualquier día aparezca por ahí un pequeño arsenal, con las armas ya ferruginosas...”.</p>`,
          year: new Date("2014-1-1"),
          name: "El Cholo González. Un cañero de Bella Unión",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Trilce",
          pages: "pág. 82",
          author: "Gilio",
        },
        {
          fragment: `<p>“... En la madrugada del día 29 de mayo de 1970, un comando del Movimiento de Liberación Nacional copó, sin una gota de sangre derramada, un cuartel de la Marina, llevándose todo el armamento.
          Junto al parte de guerra, el MLN difundió la siguiente carta de Fernando Garín, militar y tupamaro que participó en dicho copamiento:...”.</p>`,
          name: "La tregua armada",
          place: "Montevideo - Uruguay",
          edition: "TAE Ediciones",
          pages: "pág. 17",
          author: "Fernández Huidobro",
        },
        {
          fragment: `<p>“... Mayo se invirtió en la preparación de la acción del Centro de Instrucción de la Marina (CIM) y que fue realizada por la Columna del Interior y dirigida por Mansilla, quien había reclutado tiempo antes a un marinero, Fernando Garín, que prestaba servicios en esa unidad, y que jugó un papel fundamental antes y durante la realización del operativo...”.</p>`,
          year: new Date("2015-1-1"),
          name: "Palabra de Amodio. La otra historia de los Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Plaza",
          pages: "págs. 277-278",
          author: "Marius",
        },
      ],
    },
  },
  {
    date: new Date("January 11, 1965"),
    title: "Bomba en Consulado de Brasil",
    slug: "bomba-consulado-brasil",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("January 11, 1965"),
        title: "“ARROJARON UNA BOMBA AL CONSULADO DE BRASIL”",
        description:
          "Una bomba explotó ayer en el local de Servicio de Propaganda y Expansión Brasileña dependiente de la Embajada de Brasil, causó daños en ventanas y puertas de la oficina de Catastro. Los terroristas dejaron inscripta en la pared la palabra “Tupamaros”, grupo extremista nuevo.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-consulado-brasil/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bomba-consulado-brasil/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“...En aquel último TUPAMAROS con el que firmamos una bomba puesta en el Servicio de Propaganda de la Embajada Brasilera el 12 de enero....”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 1: los orígenes",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "pág. 166",
          author: "Fernández Huidobro",
        },
      ],
    },
  },
  {
    date: new Date("May 06, 1965"),
    title: "Bomba en Compañía telegráfica norteamericana",
    slug: "bomba-compania-telegrafica-norteamericana",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("May 06, 1965"),
        title: "“ARROJARON UNA BOMBA CONTRA COMPAÑÍA AMERICANA”",
        description:
          "Esta madrugada se confirmó un atentado contra la compañía telegráfica norteamericana “All American Cable and Radio”, ubicada en la calle Zabala 1451. Una bomba de alto poder arrojada allí, destrozó vidrios del edificio de esta compañía y otros contiguos. Integrantes de un grupo estudiantil efectuaron también anoche una manifestación relámpago, en las adyacencias del Palacio Legislativo y quemaron una bandera estadounidense.",
        subtitle: "“Otro Frustrado”",
        subDescription:
          "En la madrugada de la víspera también arrojaron una bomba contra la sede de la compañía norteamericana “Werstern Telegraph Co.”, ubicada en Rondeau 1968, pero ésta no explotó. Allí también están ubicadas las oficinas de la Cámara Mercantil. Personal de dichas instituciones logró arrebatar el artefacto desde las llamas...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-compania-telegrafica-norteamericana/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bomba-compania-telegrafica-norteamericana/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("August 09, 1965"),
    title: "Bomba en Empresa Bayer",
    slug: "bomba-empresa-bayer",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("August 09, 1965"),
        title: "“VIOLENTA EXPLOSIÓN”",
        description:
          "A las 23:30 del 9 de agosto se produjo una violentísima explosión en el portón de entrada de la empresa Bayer ubicada en la calle Yaguarón casi Paysandú. Una pareja que llegó en moto colocó una bomba que ocasionó roturas de vidrios en esa firma así como en otros negocios de la zona. Se encontraron panfletos con la siguiente leyenda: “Mueran los yanquis asesinos del Vietnam frente a la intervención asesina en Vietnam. Los pueblos oprimidos se unen para aplastar al enemigo común. La Bayer empresa nazi ayuda con gases tóxicos a la intervención de los gringos. Fuera los gringos liberticidas. Viva el Vietcong. Viva la revolución: TUPAMAROS”.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-empresa-bayer/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bomba-empresa-bayer/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 8)',
        date: new Date("August 11, 1965"),
        title: "“UNA MENOR HERIDA EN EL ATENTADO DE AYER”",
        description:
          "Como consecuencia de la colocación de una bomba en la Bayer, en el día de ayer, una menor resultó herida debido a la voladura de vidrios y una chapa metálica en la puerta de acceso. La menor de 13 años,... , presentaba heridas cortantes en el pie izquierdo.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-empresa-bayer/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bomba-empresa-bayer/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 20)',
        date: new Date("August 11, 1965"),
        title: "“ES INMINENTE LA CAPTURA DE LA CÉLULA TERRORISTA”",
        description:
          "Por lo menos dos miembros de la organización terrorista “Tupamaros” iban a ser detenidos en las próximas horas por personal del Departamento de Inteligencia y Enlace. Se obtuvieron pistas de sumo interés para llegar hasta los autores de varios atentados contra edificios de firmas norteamericanas y los depósitos Bayer. En diversas esferas de grupos clandestinos, que se indican como nacionalistas de izquierda, se investiga con el objeto de establecer si los “Tupamaros” están entre ellos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-empresa-bayer/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bomba-empresa-bayer/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("October 18, 1965"),
    title: "Bombas en domicilios de Consejero Nacional de Gobierno y Diputado",
    slug: "bomba-domicilios-consejero-nacional-de-gobierno-y-diputado",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("October 19, 1965"),
        title: "“ATENTADOS TERRORISTAS CONTRA LOS HEBER HUBO EN LA MADRUGADA”",
        description:
          "Aparecen fotos a cuyo pie mencionan los atentados contra las residencias del Consejero Nacional Alberto Heber y el Diputado Señor Mario Heber.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-domicilios-consejero-nacional-de-gobierno-y-diputado/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bomba-domicilios-consejero-nacional-de-gobierno-y-diputado/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("October 18, 1965"),
        title: "“ARROJARON EXPLOSIVOS CONTRA LAS RESIDENCIAS DE LOS HEBER”",
        description:
          "Esta madrugada fueron arrojados petardos contra las residencias del Consejero Nacional Sr. Alberto Heber y del Diputado Mario Heber...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-domicilios-consejero-nacional-de-gobierno-y-diputado/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bomba-domicilios-consejero-nacional-de-gobierno-y-diputado/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("December 08, 1965"),
    title: "Bomba en Gremial Exportadores de Lana",
    slug: "bomba-en-gremial-exportadores-de-lana",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("December 09, 1965"),
        title: "“ATENTADOS TERRORISTAS”",
        description:
          "Aparecen fotos que documentan aspectos de los atentados dinamiteros contra la residencia del Sr. Mayer y la Cámara Mercantil.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-gremial-exportadores-de-lana/n_1.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-gremial-exportadores-de-lana/n_2.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 7)',
        date: new Date("December 09, 1965"),
        title:
          '““FIRMAN" LOS TUPAMAROS: ATENTADOS CONTRA LA GREMIAL DE EXPORTADORES DE LANA Y LA RESIDENCIA DE SU PRESIDENTE"',
        description:
          "Pasada la medianoche del día de ayer se registraron atentados con dinamita en la casa del Sr. Mayer, en la calle Blanes Viale, y en la sede de la Cámara Mercantil, Rondeau 1908. La potencia de los estruendos fue de tal magnitud que se escucharon a doce cuadras. Dejaron volantes en el lugar firmados por los “Tupamaros” cuyo texto era el siguiente: “Tupamaros. Señalamos a la Cámara Mercantil de Productos del País y a Helmut Mayer su testaferro aliados al gobierno vendido y traidor junto al latifundio y los banqueros como principales responsables de la situación. Ellos se han enriquecido a expensas de la desgracia del pueblo. Ellos son los que imponen la violencia contra los reclamos del público. Nuestra violencia de hoy, de una pequeña parte de lo que el pueblo en el momento oportuno realizará contra quienes lo han engañado y explotado sistemáticamente”.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-gremial-exportadores-de-lana/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-gremial-exportadores-de-lana/n_4.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 13)',
        date: new Date("December 09, 1965"),
        title: "“HUBO DOS ATENTADOS TERRORISTAS”",
        description:
          "Dos atentados con bombas se registraron en la madrugada. Uno frente al domicilio del presidente de la Cámara Mercantil, causando daños a la casa, vidrios, etc. Poco después, desde un Volkswagen, arrojaron otra bomba contra la sede de la Cámara Mercantil, en la calle Rondeau.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-gremial-exportadores-de-lana/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-gremial-exportadores-de-lana/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“El 9 de diciembre estallaron bombas en la Cámara Mercantil y en la Cámara de Exportadores.”</p>`,
          year: new Date("1995-1-1"),
          name: "Historia de los Tupamaros. Tomo 2: el nacimiento",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "pág. 136",
          author: "Fernández Huidobro",
        },
      ],
    },
  },
  {
    date: new Date("January 19, 1967"),
    title: "Policía baleado",
    slug: "policia-baleado",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("January 19, 1967"),
        title: "“TIROTEAN A UN AGENTE EN UN LUGAR ALLANADO”",
        description:
          "El caso de los Tupamaros,... adquieren nuevamente espectacularidad por dos hechos ocurridos en las últimas horas. Uno se refiere a la captura anoche en el Aeropuerto de Carrasco, de un argentino izquierdista, según informa la policía que pretendía introducir bajo su pilot una poderosa metralleta PAM dos cargadores para esta arma y 150 proyectiles. El detenido, que además pertenece a un grupo peronista, es..., argentino, soltero de 24 años. Una hora después del referido procedimiento efectuado por personal de la Aduana del Aeropuerto y el Jefe de Investigaciones de Carrasco,... se producía un atentado contra un agente de la Seccional 12a. quien estaba de guardia en una finca de la calle José L. Terra 3461, que fuera allanada días atrás...",
        images: [
          {
            type: "noticia publicada",
            src: "/policia-baleado/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/policia-baleado/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("April 12, 1967"),
    title: "Bomba en empresa norteamericana",
    slug: "bomba-en-empresa-norteamericana",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("April 12, 1967"),
        title: "“ATENTADO”",
        description:
          "El caso de los Tupamaros,... adquieren nuevamente espectacularidad por dos hechos ocurridos en las últimas horas. Uno se refiere a la captura anoche en el Aeropuerto de Carrasco, de un argentino izquierdista, según informa la policía que pretendía introducir bajo su pilot una poderosa metralleta PAM dos cargadores para esta arma y 150 proyectiles. El detenido, que además pertenece a un grupo peronista, es..., argentino, soltero de 24 años. Una hora después del referido procedimiento efectuado por personal de la Aduana del Aeropuerto y el Jefe de Investigaciones de Carrasco,... se producía un atentado contra un agente de la Seccional 12a. quien estaba de guardia en una finca de la calle José L. Terra 3461, que fuera allanada días atrás...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-empresa-norteamericana/n_1.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-empresa-norteamericana/n_2.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("April 12, 1967"),
        title: "“ATENTADO CONTRA UNA FIRMA YANQUI”",
        description:
          "Un fuerte estampido dio la seguridad de un nuevo atentado terrorista. La explosión había tenido lugar en Andes y Cerro Largo en el frente de la casa ocupada por la compañía Bourroughs de Máquinas Limitada en Cerro Largo 847, había sido colocada una bomba de gran poder explosivo, la que al reventar había causado grandes daños, arrancando una cortina metálica, quebrando vidrios y dañando máquinas que se hallaban en el interior del local. El poder explosivo de la bomba alcanzó hasta el lugar que ocupa, pasando Andes, la firma Ernesto Quincke S.A. en el 851 de Cerro Largo, donde resultaron destrozados...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-empresa-norteamericana/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-empresa-norteamericana/n_4.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
  },
  {
    date: new Date("November 29, 1967"),
    title: "Policías baleados",
    slug: "policias-baleados-en-el-pinar",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("November 30, 1967"),
        title: "“POLICÍAS HERIDOS”",
        description:
          "Balneario El Pinar... Cuatro “Tupamaros” que se encuentran ocultos en los bosques existentes entre la Ruta 8 y Avenida Italia, tras un intento fallido de robo a un matrimonio de turistas argentinos, lograron huir hiriendo de gravedad a dos policías. Los terroristas se ocultaban en una choza rústica recientemente construída y ocultan dentro de ella armas y municiones. Una motoneta en que dos de ellos pretendieron huir fue alcanzada por un disparo.",
        images: [
          {
            type: "noticia publicada",
            src: "/policias-baleados-en-el-pinar/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/policias-baleados-en-el-pinar/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 8)',
        date: new Date("November 30, 1967"),
        title: "“GAVILLA DE “TUPAMAROS” BALEÓ A DOS POLICÍAS”",
        description:
          "Balneario El Pinar... el Sargento Suárez De Lima recibió una herida sobre el hombro izquierdo y el tórax y el agente Bentancor un balazo en el tórax... Dos personas, más una pareja que se encontraba oculta en el interior de la cabaña, se alejaron rápidamente, portando todos armas; la mujer una escopeta de dos caños calibre 16. Al allanarse la finca, de construcción reciente a base de madera y paja, se encontraron en su interior cuatro granadas de mano, 200 cartuchos cargados con plomo, todo de fabricación casera, dos revólveres calibre 38 Smith & Wesson, una pistola calibre 45, una camioneta Ford F 100 último modelo, manuales de lucha de guerrilla, importante documentación y una cédula de identidad a nombre de...",
        images: [
          {
            type: "noticia publicada",
            src: "/policias-baleados-en-el-pinar/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/policias-baleados-en-el-pinar/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("November 30, 1967"),
        title:
          "“TUPAMAROS: A QUEMARROPA BALEARON A DOS POLICÍAS. Cubrieron a Balazos su Rápida Fuga”",
        description:
          "Aparecen fotos una de las cuales dice: “He aquí los cuatro “Tupamaros” que huyeron de la cabaña ubicada en “El Pinar” donde tras un dramático tiroteo hirieron a dos policías de Shangrilá. De izquierda a derecha... Este último es el único sujeto no identificado perfectamente, pues se sospecha también que el cuarto prófugo pueda ser…, hermano del extremista que cobijó ..., un “Tupamaro” recluído actualmente en la cárcel”.",
        images: [
          {
            type: "noticia publicada",
            src: "/policias-baleados-en-el-pinar/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/policias-baleados-en-el-pinar/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("November 30, 1967"),
        title:
          "“LOS POLICÍAS PENSABAN DETENER A DOS RATEROS. Se Toparon con los Terroristas”",
        description:
          "Dos funcionarios policiales... fueron baleados... por Tupamaros al intentar detenerlos en una cabaña del Balneario El Pinar, creyendo que se trataba simplemente de vulgares rateros. Los policías andaban tras dos motonetistas que habían desvalijado el interior de un vehículo, propiedad de un matrimonio argentino...",
        subtitle: "“Camioneta Blindada”",
        subDescription:
          "Dentro de la cabaña había una camioneta blindada con una plancha al mismo estilo que la otra donde cayó un “Tupamaro” en el tiroteo de diciembre de 1966… El vehículo... se comprobó que fue robado en octubre pasado... la vivienda tenía una ventana blindada con una chapa de hierro y la otra estaba... la cabaña fue construída con la camioneta en su interior...en síntesis el camuflaje era perfecto.",
        images: [
          {
            type: "noticia publicada",
            src: "/policias-baleados-en-el-pinar/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/policias-baleados-en-el-pinar/n_8.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 8)',
        date: new Date("December 01, 1967"),
        title:
          "“EN PINAMAR HUBO NUEVO TIROTEO CON TERRORISTAS: PESE A TODO FUGARON”",
        description:
          "La policía controlaba la zona costera donde se presume puedan encontrarse ocultos dos de los terroristas, que ayer protagonizaron el espectacular incidente baleando a dos policías tras ser sorprendidos luego que habían hurtado del interior de un auto de un matrimonio argentino, joyas y dinero por un monto de medio millón de pesos uruguayos.",
        images: [
          {
            type: "noticia publicada",
            src: "/policias-baleados-en-el-pinar/n_9.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/policias-baleados-en-el-pinar/n_10.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("December 01, 1967"),
        title: "“TIROTEO EN NEPTUNIA: UNO DE LOS FUGITIVOS HERIDO”",
        description:
          "Entre los detalles del episodio y su desarrollo precisa que los cuatro hombres adquirieron el predio de la Ruta Interbalnearia a una inmobiliaria de plaza donde dieron nombres ficticios. La cabaña fue construída por ellos mismos y allí empezaron a vivir en octubre del año en curso… procurando en lo posible no establecer relaciones de ningún tipo con los vecinos. Culmina el artículo periodístico diciendo “otras indagaciones demostrarían que los integrantes de la células habían establecido contactos con organizaciones similares de Argentina, Paraguay y Brasil”. Aparecen las fotos de los cuatro terroristas.",
        images: [
          {
            type: "noticia publicada",
            src: "/policias-baleados-en-el-pinar/n_11.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/policias-baleados-en-el-pinar/n_12.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 8)',
        date: new Date("December 02, 1967"),
        title: "“LOS TERRORISTAS HABRÍAN FUGADO”",
        description:
          "Shangrilá... Se confirma versión de que ya no caben dudas que la pareja integrada por... o... y..., logró eludir el cerco policial el mismo día miércoles. Tal circunstancia fue comprobada al interrogarse al chofer del camión que condujo a la pareja. Ratificó que el día citado recogió a la altura del kilómetro 28 de la Ruta Interbalnearia a una mujer que aparentemente estaba desmayada junto con su compañero, y que al ingresar ambos a la cabina, el hombre le encañonó con un arma y lo obligó a seguir... la pareja descendió en Avenida Italia a la altura del Balneario Lagomar. Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/policias-baleados-en-el-pinar/n_13.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/policias-baleados-en-el-pinar/n_14.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Volvíamos en la moto desde un contacto... Recorrimos un tramo de la ruta 101, luego un camino vecinal y desembocamos en la Interbalnearia a la altura de El Pinar...</p>
          <p>... En una de las callecitas pasamos frente a un policía que charlaba con un matrimonio...</p>
          <p>... dos ladrones en una moto similar a la nuestra habían robado en la playa las joyas de una pareja de turistas...</p>
          <p>Pronto vimos rondar una camioneta particular, lentamente, por las cercanías de nuestra base...</p>
          <p>...los vimos bajar y aproximarse... Habían visto la moto estacionada...</p>
          <p>... decidimos que el único compañero legal que estaba allí saliera y hablara con ellos.</p>
          <p>El compañero salió y los otros tres nos quedamos adentro...</p>
          <p>Emprendieron el camino hacia la puerta, mientras uno quedaba custodiando al detenido. No hubo más remedio que salir- también arma en mano-...</p>
          <p>Un policía, herido,....”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 3: el MLN",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "págs. 194-196",
          author: "Fernández Huidobro",
        },
        {
          fragment: `<p>“Efraín Martinez Platero...</p>
          <p>.Estuve en la semiclandestinidad desde diciembre de 1966, cuando pasó a la clandestinidad mi hermano Leonel: Yo tenía 22 años. En 1967 quedé “clande”, después de un tiroteo que hubo en un rancho de El Pinar, donde quedó mi cédula de identidad...”.</p>`,
          year: new Date("2009-1-1"),
          name: "Memorias de insurgencia. Historias de vida y militancia en el MLN-Tupamaros. 1965-1975",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Banda Oriental",
          pages: "pág. 361",
          author: "Aldrighi",
        },
      ],
    },
  },
  {
    date: new Date("July 01, 1968"),
    title: "Bomba en Radio Ariel",
    slug: "bomba-en-radio-ariel",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 10)',
        date: new Date("July 03, 1968"),
        title: "“ATENTADO CONTRA PLANTA EMISORA DE RADIO ARIEL”",
        description:
          "El Ministerio del Interior a través de la Jefatura de Policía comunica que aproximadamente a la hora 21 y 30 se cometió un atentado contra la planta emisora de Radio Ariel, ubicada en Simón Martínez y Camino de las Tropas, paralizando su transmisión. No hubo que lamentar desgracias personales y los daños aún no han sido avaluados. Nota de redacción:... Como se comprenderá, casos de violencia como éste que -causan ingentes daños materiales y ponen en peligro, incluso, vidas humanas- merecen la más enérgica repulsa. Se trata de un método terrorista, reñido en absoluto con nuestros usos y costumbres y las prácticas democráticas de dirimir las diferencias en el terreno de la libre discusión. En cuanto al episodio en sí, trascendió que unos minutos después de las 21 del lunes, cuatro individuos -procurando, con sus ropas, dificultar la identificación- penetraron armados en la planta emisora. Uno de ellos, posiblemente, portaba una metralleta y los otros, revólveres o pistolas de gran calibre. Obligaron al encargado de la planta a salir al exterior, colocando tres poderosas bombas explosivas, dos de ellas junto a las bases que sostienen las columnas, y la restante en el local que fue la que estalló.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-radio-ariel/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-radio-ariel/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("July 03, 1968"),
        title:
          "“HUBO SABOTAJE EN LA ESTACIÓN DE UTE. SILENCIAN A RADIO ARIEL CON BOMBAS”",
        description:
          "Aparecen fotos donde se observan algunos de los daños causados por los terroristas en la planta emisora de CX 10 Radio Ariel... Cuatro individuos fuertemente armados y vistiendo uniformes, sacaron del local al encargado, colocando cuatro bombas, de las que estallaron dos. Se dañaron transmisores paralizando la salida al aire de la emisora y muy levemente una antena junto a cuya base había sido instalado uno de los artefactos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-radio-ariel/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-radio-ariel/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("July 03, 1968"),
        title: "“SIGUEN INDAGANDO EL ATENTADO TERRORISTA”",
        description:
          "... la planta emisora de Radio Ariel, cuyas transmisiones siguen interrumpidas no se reanudarían hasta la semana próxima. La explosión no sólo destruyó los equipos de funcionamiento, sino que además afectó lámparas y otros materiales de repuestos depositados en el local donde se produjo la explosión...",
        subtitle: "“Podrán Interferir Radios”",
        description1:
          "Los registros posteriores, permitieron establecer que faltaron varios aparatos utilizados para transmisiones de exteriores y onda corta, que tienen múltiples aplicaciones. Según se informó, con ellos es posible interferir las transmisiones radiales y telefónicas, lo que da una idea de la significación e importancia que pueden tener dichos aparatos...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-radio-ariel/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-radio-ariel/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“En el Paso de la Arena también se escucharon explosiones pero bastante más poderosas. Las bombas destrozaron el transmisor y dañaron la torre de emisión de radio Ariel. La planta emisora ubicada en Camino de Las Tropas y Simón Martínez, dejó de transmitir la voz oficial.</p>
          <p>Los tupamaros lograron llevarse varios aparatos de transmisión de exteriores, con los que se podía interferir comunicaciones radiales y posiblemente telefónicas. La voladura dejaría a radio Ariel sin transmitir por varios días”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 340",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("September 12, 1968"),
    title: "Bombas en sucursales bancarias",
    slug: "bombas-en-sucursales-bancarias",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 10)',
        date: new Date("September 12, 1968"),
        title: "“EXPLOTARON TRES BOMBAS EN SUCURSALES BANCARIAS”",
        description:
          "... Bombas de bastante poder explosivo detonaron frente a los locales del Banco de Crédito y La Caja Obrera ubicados en Duvimioso Terra y Colonia, haciendo caer las rejas protectoras , así como también los vidrios del local. La tercera explosión se produjo en Burgues y Br. Artigas donde está la sucursal del Banco Popular. Aquí los daños fueron grandes, apareciendo los gruesos cristales de las vidrieras esparcidos en el centro de la calzada...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-sucursales-bancarias/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-sucursales-bancarias/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("September 12, 1968"),
        title: "“EXPLOTARON BOMBAS EN CUATRO BANCOS”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-sucursales-bancarias/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-sucursales-bancarias/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("September 12, 1968"),
        title:
          "“LANZARON BOMBAS CONTRA CUATRO SEDES BANCARIAS. Se Perpetraron los Atentados de Madrugada”",
        description:
          "... Tres zonas de Montevideo vivieron momentos de pánico esta madrugada al producirse las explosiones de los artefactos dejados por los miembros del “CAP” (Comando de Autodefensa del Pueblo). A la hora 2 y 15 y en forma casi simultánea se oyeron fuertes detonaciones en las cercanías del Obelisco, comprobando posteriormente los vecinos que se había atentado contra las sucursales, del Banco Mercantil ubicada en Avenida 8 de Octubre y Colonia y la del Banco La Caja Obrera establecida en la Avenida 18 de Julio esquina Duvimioso Terra. Las bombas dañaron cristales, puertas, rejas, paredes y mobiliario en tales locales. Quince minutos después estalló otro petardo en la Agencia del Banco Popular instalada en el cruce de Br. Artigas y Burgues y casi a la misma hora se produjo la cuarta explosión en la sucursal Malvín del Banco de Crédito, que se encuentra en el cruce de las calles Amazonas y Orinoco...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-sucursales-bancarias/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-sucursales-bancarias/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 12)',
        date: new Date("September 13, 1968"),
        title:
          "“FUERON DETENIDOS DOS EXTREMISTAS DEL CAP”. Merodeaban en Torno a una Región Militar”",
        description:
          "Cuando se hallaban merodeando en las inmediaciones de la Región Militar No. 1 (Avda. Agraciada y Capurro) fueron detenidos dos integrantes del “Comando de Autodefensa del Pueblo”, que perpetró los atentados contra cuatro sucursales bancarias en la víspera... De acuerdo a las primeras indagaciones tales hombres de 28 y 37 años de edad estarían vinculados al Movimiento de Liberación Nacional (Tupamaros).",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-sucursales-bancarias/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-sucursales-bancarias/n_8.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("October 24, 1968"),
    title: "Policía baleado",
    slug: "agente-edmundo-correa",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("October 24, 1968"),
        title: "“PRESUNTOS TUPAMAROS BALEARON A UN AGENTE DE LA SECCIONAL 20ª”",
        description:
          "... cuando regresaba a su domicilio un agente de la Seccional 20º, Edmundo Correa Sosa, fue interceptado por dos desconocidos que portaban armas de grueso calibre los que, luego de insultarlo, le hicieron varios disparos que fueron repelidos por el Policía con su arma de reglamento. El agente Correa Sosa fue alcanzado por cuatro disparos... las balas eran de calibre 45 y también hallaron cápsulas de calibre 9 mm. En medio de la agresión el policía tomó de la muñeca al que llevaba la 45, logrando despojarla de ella. Al parecer uno de los atacantes fue herido por el policía. Posteriormente fue localizada la motoneta en que ellos se fugaron, la que aparece con manchas de sangre lo que confirma la herida del maleante... después del atentado, en la Seccional 24º se recibieron tres llamadas telefónicas anónimas, por las que se aseguraba que los autores del mismo eran “Tupamaros” y que el hecho señalaba el principio de una serie de atentados similares.",
        images: [
          {
            type: "noticia publicada",
            src: "/agente-edmundo-correa/n_1.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/agente-edmundo-correa/n_2.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
  },
  {
    date: new Date("December 13, 1968"),
    title: "Bombas en domicilios jerarcas de gobierno y sucursales bancarias",
    slug: "bombas-en-domicilios-jerarcas-de-gobierno-y-sucursales-bancarias",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("December 13, 1968"),
        title: "“SE REGISTRARON SIETE ATENTADOS CON EXPLOSIVOS”",
        description:
          "Aparecen fotos con el siguiente texto: “Los artefactos estallaron entre las 3.45 y las 4.15 horas y a ellos se le agregaron dos apagones de escasos minutos en los alrededores de los edificios del Banco de Seguros y el Ministerio de Hacienda, oportunidad en que se inscribieron en muros leyendas contra las medidas de seguridad”. “Una sucesión de atentados contra sedes bancarias, domicilios de autoridades nacionales, la finca de un jerarca de la banca privada y el local de una institución particular, se consumaron esta madrugada. Los terroristas arrojaron bombas explosivas ocasionando diversos daños, como registra esta nota gráfica de el frente de un banco”.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-domicilios-jerarcas-de-gobierno-y-sucursales-bancarias/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-domicilios-jerarcas-de-gobierno-y-sucursales-bancarias/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 11)',
        date: new Date("December 13, 1968"),
        title:
          "SIETE ATENTADOS CON BOMBAS PERPETRARON ESTA MADRUGADA CONTRA DOMICILIOS E INSTITUTOS DE BANCA”",
        description:
          "... Las bombas causaron daños de cierta consideración en algunos lugares...",
        subtitle: "“La Serie de Atentados”",
        description1:
          "La primera explosión ocurrió a las 3.45 en el local del Banco de Crédito ubicado en Colonia 2503 esquina Duvimioso Terra… El segundo atentado tuvo por escenario a las 3.40 en el domicilio del Ministro de Ganadería y Agricultura Dr. Frick Davie ubicado en José Martí 3233. A las 4 de la madrugada explotaron otras dos bombas en la agencia de Avenida Italia 3571 del Banco Territorial y Español del Uruguay (UBUR) y en la finca de Cartagena 1576,... Simultáneamente… hubo otro atentado en el domicilio del Vicepresidente del Banco Central, Sr. José Guntín García, ubicado en Echevarriarza 3478. Diez minutos después a las 4.10 fue arrojada otra bomba contra la agencia Paso Molino del Banco Popular del Uruguay en Agraciada 4049 esquina Pilar Costa. A las 4.15 hizo explosión el último artefacto de la serie que fue colocado en la sede de la Cámara Comercial Italiana del Uruguay y Centro Comercial de Italia sito en Paysandú Nº 816.",
        subtitle1: "“También Dos Apagones”",
        description2:
          "Al producirse el último atentado que indicamos, se produjeron en la zona dos apagones consecutivos, cada uno de 3 minutos... También se comprobó que en el edificio del Sanatorio del Banco de Seguros del Estado, Agencia Banco de Cobranzas en Colonia y Julio Herrera y Ministerio de Hacienda, habían pintado la siguiente leyenda: “Seis meses de Medidas. Basta ya”.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-domicilios-jerarcas-de-gobierno-y-sucursales-bancarias/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-domicilios-jerarcas-de-gobierno-y-sucursales-bancarias/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("December 13, 1968"),
        title: "“SIETE ATENTADOS EN ZONAS DIFERENTES DE LA CAPITAL”",
        description:
          "Aparecen fotos que muestran los daños causados por los artefactos explosivos en diferentes lugares.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-domicilios-jerarcas-de-gobierno-y-sucursales-bancarias/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-domicilios-jerarcas-de-gobierno-y-sucursales-bancarias/n_6.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("December 13, 1968"),
        title: "“SIETE ATENTADOS HUBO EN LA MADRUGADA: DESTROZOS”",
        description:
          "... Siete atentados se perpetraron esta madrugada en nuestra Capital. Una bomba explosiva, fue colocada en...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-domicilios-jerarcas-de-gobierno-y-sucursales-bancarias/n_7.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-domicilios-jerarcas-de-gobierno-y-sucursales-bancarias/n_8.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
  },
  {
    date: new Date("January 03, 1969"),
    title: "Niños heridos en explosión. Hallan armamento y explosivos",
    slug: "ninos-herido-en-explosion-hallan-armamento-y-explosivos",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("January 03, 1969"),
        title: "“LA POLICÍA UBICÓ UNA GUARIDA DE TUPAMAROS EN EL CERRO”",
        description:
          "Metralletas, gelinita y un transmisor de onda corta… Las fotos muestran aspectos del procedimiento policial retirando gelinita y armas largas existentes en el lugar.",
        images: [
          {
            type: "noticia publicada",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("January 03, 1969"),
        title: "“ASESTAN OTRO GOLPE CONTRA TERRORISTAS”",
        description: "... fueron hallados...",
        subtitle: "“El Hombre de los Paquetes”",
        description1:
          "... pudieron determinar que, antes de ser depositadas en China 1737, las metralletas, la radio y los explosivos habían sido entregados por un tal “Pepe” en la florería “La Orquídea”. Según se supo, “Pepe”, llegó al negocio el domingo de noche, con los paquetes que contenían esos materiales...",
        images: [
          {
            type: "noticia publicada",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 16)',
        date: new Date("January 04, 1969"),
        title: "“ESPECTACULAR DESPLIEGUE EN EL CERRO: 2 MUJERES DETENIDAS”",
        description:
          "... Se trataría de indagaciones por los “Tupamaros”. Habríanse incautado armas, explosivos y un transmisor...",
        images: [
          {
            type: "noticia publicada",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_5.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_6.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("January 04, 1969"),
        title: "“CUATRO HERIDOS EN UN GOLPE DE LOS TUPAMAROS”",
        description:
          "La policía trabajaba hoy febrilmente, realizando un procedimiento tras otro, para desbaratar células extremistas, mientras dedicaba una parte considerable de ese empeñoso esfuerzo a la localización de... y... (a) “Pepe”, por considerarlos responsables de la tenencia ilegal de las armas y explosivos ubicados ayer en una finca del Cerro...",
        subtitle: "“Identifican a Pepe”",
        description1:
          "... se habría identificado al individuo como... quien tiene antecedentes por intento de rapiña... luego de revisarse minuciosamente el local, se habrían ubicado documentos que permitirían establecer la vinculación de... con una de las células terroristas de la organización tupamara... El estallido de un artefacto explosivo en 8 de Octubre y Gobernador Viana, causó anoche lesiones diversas a un vendedor ambulante y a tres menores de edad... ",
        images: [
          {
            type: "noticia publicada",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_8.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("January 04, 1969"),
        title: " “ESTALLÓ UN PETARDO DE LOS TUPAMAROS, DOS HERIDOS LEVES”",
        description:
          "Un petardo, presumiblemente colocado por “tupamaros”, o arrojado en un lugar de intensa concentración de público, dio, como resultado,... dos personas heridas...",
        title1: "“TERRORISTAS FUGAN EN EL CERRO; HALLAN ARMAS”",
        description1:
          "... En una de las habitaciones, cuidadosamente enfundadas, se encontraron tres ametralladoras PAM, calibre 9 mm., de fabricación argentina... Estas armas, poderosas, son las que usan las unidades ligeras del ejército argentino... en otra dependencia se encontró... Aparece foto a cuyo pie dice: “Este es el frente de la florería “La Orquídea”, de la calle Grecia, propiedad de... Allí fueron llevadas las armas robadas por...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_9.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_10.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("January 08, 1969"),
        title: "“UBICARON LA DINAMITA ROBADA EN TACUAREMBÓ”",
        description:
          "... Aparecen fotos a cuyo pie dicen: “... requeridos por el hallazgo de las metralletas y explosivos en la finca de la calle China, en el Cerro, continúan prófugos...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_11.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_12.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("January 08, 1969"),
        title: "“APARECIÓ...; PRESO DE TUPAMAROS”",
        description:
          "..., que se presentó ayer diciendo que lo secuestraron los “Tupamaros”... quien acompañó a... hasta la guarida de los “tupamaros”. No ha aparecido todavía...",
        images: [
          {
            type: "noticia publicada",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_13.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ninos-herido-en-explosion-hallan-armamento-y-explosivos/n_14.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“El viernes 3 de enero dos autos de Inteligencia y Enlace y uno de la Metropolitana estacionaron frente a la casa del florista... encontraron el berretín: tres ametralladoras PAM, con municiones, seis kilos de gelignita y un transmisor de onda corta del Ejército...</p>
          <p>Refreschini tomaba y apoyaba el pocillo en el plato, una y otra vez, lejos del barrio, en un sucucho amigo, entre el humo del cigarrillo. Así, afloró el recuerdo:</p>
          <p>-No creo que sea el lugar más seguro, Pepe.</p>
          <p>-Te lo pido por favor, hermano. Son unos pocos fierros -dijo Mujica a su amigo. Refreschini caminaba de un lado a otro, sabía que se estaba metiendo en un lío más complicado que el de esconder algún matute menor –bolsos o paquetes con algunos productos contrabandeados– como los que ya le había guardado a su amigo...</p>
          <p>... las armas quedaron escondidas en la casa de la calle China... Hasta que la policía dio con el berretín...</p>
          <p>-Eso no es de mi esposo, es de un conocido de la zona...</p>
          <p>-Le dicen Pepe...</p>
          <p>-Pepe Mujica, creo”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 373-375",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("January 13, 1969"),
    title: "Bomba en Asociación Rural",
    slug: "bomba-en-asociacion-rural",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("January 13, 1969"),
        title: "“COLOCARON UNA BOMBA EN PLENO CENTRO”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-asociacion-rural/n_1.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-asociacion-rural/n_2.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("January 13, 1969"),
        title: '"HABRÍA CONFESADO SER TUPAMARO INDAGADO"',
        description: "...",
        subtitle: "“Bomba Casera”",
        description1:
          "Una bomba de fabricación casera, que no llegó a estallar, fue colocada... frente al local que ocupa la Asociación Rural, en la avenida Uruguay Nº 864,...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-asociacion-rural/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-asociacion-rural/n_4.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
  },
  {
    date: new Date("February 15, 1969"),
    title: "Bomba explota accidentalmente. Muere terrorista",
    slug: "bomba-explota-accidentalmente",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("January 15, 1969"),
        title: "“BOMBA: ESTALLÓ ANTES Y MATÓ AL TERRORISTA”",
        description:
          "... Todos los indicios llevan a suponer que... se aprestaba a colocar la bomba en la comisaría de la calle Prusia... Aparece foto de...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-explota-accidentalmente/n_1.jpg",
            alt: "noticia publicada por el diario Diario",
          },
          {
            type: "página diario completa",
            src: "/bomba-explota-accidentalmente/n_2.jpg",
            alt: "página diario completa publicada por el diario Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("January 15, 1969"),
        title: "“LA BOMBA NO LLEGÓ A DESTINO: LE EXPLOTÓ EN LA MANO Y MURIÓ”",
        description:
          "... por causas que se ignoran le explotó en sus manos una bomba que posiblemente pensaba colocar en algún lugar de las inmediaciones. El cuerpo horriblemente mutilado del joven fue hallado frente al 1933 de Prusia, en Villa del Cerro, siendo inútil toda asistencia ya que su deceso se produjo en forma casi instantánea...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-explota-accidentalmente/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/bomba-explota-accidentalmente/n_4.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("January 16, 1969"),
        title: "“APARECIÓ EXTREMISTA HERIDO POR LA BOMBA”",
        description:
          "Preparaban una serie de atentados... Aparece foto de... a cuyo pie dice: “... Un segundo joven fue internado...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-explota-accidentalmente/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/bomba-explota-accidentalmente/n_6.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("January 16, 1969"),
        title: "“APARECIÓ EXTREMISTA HERIDO POR LA BOMBA”",
        description:
          "Un funcionario bancario... se halla incomunicado... del sanatorio de la Asociación Española Primera de Socorros Mutuos donde ingresó... presentando politraumatismos y múltiples heridas...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-explota-accidentalmente/n_7.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/bomba-explota-accidentalmente/n_8.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 5)',
        date: new Date("January 16, 1969"),
        title: "“HORRIBLE MUERTE AL ESTALLARLE UNA BOMBA”",
        description:
          "... Al estallarle un artefacto con poderoso explosivo un joven resultó muerto... El occiso era... la Jefatura vincula al occiso al grupo “Tupamaros”... Aparece foto de...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-explota-accidentalmente/n_9.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/bomba-explota-accidentalmente/n_10.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 5)',
        date: new Date("January 16, 1969"),
        title: "“TRÁGICA MUERTE DE UN TERRORISTA; OTRO HERIDO”",
        description:
          "... Un joven que portaba una bomba de alto poder,... sufrió una muerte instantánea, prácticamente mutilado, cuando el artefacto estalló en sus propias manos... Las averiguaciones practicadas... han probado que desdichadamente..., en los últimos tiempos, había demostrado una afinidad ostensible y creciente por las ideas extremistas, habiéndose vinculado a algunos grupos... Y, la circunstancias en que ocurre su trágica muerte, demuestra que había pasado del terreno teórico a la acción... Aparece foto de...",
        title1: "“ESTUDIANTE DE ARQUITECTURA PROCESADO POR TUPAMARO”",
        description1:
          "... un estudiante de Arquitectura,... fue procesado ayer... bajo la grave imputación de “Atentado contra la Constitución en el grado de conspiración”... a raíz del hallazgo,... de escritos y documentos... que actuaba como “correo” de varios grupos de “tupamaros”...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-explota-accidentalmente/n_11.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bomba-explota-accidentalmente/n_12.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("April 26, 1969"),
    title: "Niños heridos en explosión en refugio terrorista",
    slug: "ninos-heridos-en-explosion-en-refugio-terrorista",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("April 26, 1969"),
        title: "“DETONÓ UN ARTEFACTO DE ELEVADA POTENCIA”",
        description:
          "Una explosión accidental puso al descubierto un nuevo cuartel Tupamaro... Allí hallaron armas, municiones, documentos, pólvora, gelinita, una camioneta robada y dinero. Dos niños resultaron heridos... también un hombre y una mujer. Aparecen fotos de uno de los menores y...",
        images: [
          {
            type: "noticia publicada",
            src: "/ninos-heridos-en-explosion-en-refugio-terrorista/n_1.jpg",
            alt: "noticia publicada por el diario Diario",
          },
          {
            type: "página diario completa",
            src: "/ninos-heridos-en-explosion-en-refugio-terrorista/n_2.jpg",
            alt: "página diario completa publicada por el diario Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("April 27, 1969"),
        title:
          "“DESESPERADA BÚSQUEDA DE LOS DOS TUPAMAROS GRAVEMENTE QUEMADOS”",
        description:
          "... de 3 años como su hermanito sufrió graves quemaduras al producirse una explosión en una finca de Paso del Andaluz... Aparecen fotos del menor y de la finca.",
        images: [
          {
            type: "noticia publicada",
            src: "/ninos-heridos-en-explosion-en-refugio-terrorista/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ninos-heridos-en-explosion-en-refugio-terrorista/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 6)',
        date: new Date("April 27, 1969"),
        title: "“EXPLOSIÓN EN REFUGIO DE TUPAMAROS: CUATRO HERIDOS”",
        description:
          "... busca a dos integrantes del MLN con graves quemaduras... al explotar una bomba que manipulaban... quemaduras en dos niños de tres y cinco años internados en el Hospital Pereyra Rossel. Aparecen fotos del armamento hallado, 4 bombas, de la finca y de uno de los ocupantes.",
        images: [
          {
            type: "noticia publicada",
            src: "/ninos-heridos-en-explosion-en-refugio-terrorista/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/ninos-heridos-en-explosion-en-refugio-terrorista/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 8)',
        date: new Date("April 27, 1969"),
        title: "“EXPLOSIÓN ACCIDENTAL: SINDICAN A “TUPAMAROS”",
        description:
          "Dos niños recibieron quemaduras. Una pareja también fue afectada,... habría permitido a la policía obtener referencias de personas sindicadas como “Tupamaros” que lograron fugar. Al mediodía se produjo una explosión en una finca de Manga. Dos pequeños niños resultaron con quemaduras... salió una pareja que había sufrido quemaduras y al parecer algunas heridas.",
        images: [
          {
            type: "noticia publicada",
            src: "/ninos-heridos-en-explosion-en-refugio-terrorista/n_7.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/ninos-heridos-en-explosion-en-refugio-terrorista/n_8.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“-Carlos, ocurrió una tragedia, explotó la pieza del fondo y Carlitos y Enriquito están quemados.</p>
          <p>Era la voz de mi suegro, del querido viejo Daniel… Me venía la imagen de mis gurises... Tal vez sea más acertado decir solamente: un dolor que me lastimaba.</p>
          <p>No pude llorar. Recién lloré durante horas sobre la madrugada en la casa “El Tropero” adonde fui a pasar la noche...</p>
          <p>Mi casa estaba totalmente embagayada, yo tenía responsabilidades militantes y mis hijos ya estaban en el hospital...</p>
          <p>Llamé a Mauricio… Me dijo que fuera enseguida para “El Tropero”...</p>
          <p>No había pasado ni una hora y llegó Cariboni.</p>
          <p>Era la medianoche, estábamos los tres sentados... Repasábamos problemas de seguridad. ¿Podía “salpicar” para algún lado? Sí, algo sí...</p>
          <p>Mi compañera en ese momento: China, sí podía quedar implicada.</p>
          <p>Seguimos conversando, un tema principal era sobre pasos inmediatos a dar. La Organización era también mi Familia...”.</p>`,
          name: "Acción directa anarquista. Una historia de FAU",
          place: "Montevideo - Uruguay",
          edition: "Editorial Recortes",
          pages: "págs. 151-154, 156",
          author: "Mechoso",
        },
        {
          fragment: `<p>“-Carlos, ocurrió una tragedia, explotó la pieza del fondo y Carlitos y Enriquito están quemados.</p>
          <p>Era la voz de mi suegro, del querido viejo Daniel… Me venía la imagen de mis gurises... Tal vez sea más acertado decir solamente: un dolor que me lastimaba.</p>
          <p>No pude llorar. Recién lloré durante horas sobre la madrugada en la casa “El Tropero” adonde fui a pasar la noche...</p>
          <p>Mi casa estaba totalmente embagayada, yo tenía responsabilidades militantes y mis hijos ya estaban en el hospital...</p>
          <p>Llamé a Mauricio… Me dijo que fuera enseguida para “El Tropero”...</p>
          <p>No había pasado ni una hora y llegó Cariboni.</p>
          <p>Era la medianoche, estábamos los tres sentados... Repasábamos problemas de seguridad. ¿Podía “salpicar” para algún lado? Sí, algo sí...</p>
          <p>Mi compañera en ese momento: China, sí podía quedar implicada.</p>
          <p>Seguimos conversando, un tema principal era sobre pasos inmediatos a dar. La Organización era también mi Familia...”.</p>`,
          year: new Date("2006-1-1"),
          name: "Juan Carlos Mechoso anarquista",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Trilce",
          pages: "págs. 68-71",
          author: "Jung y Rodríguez",
        },
      ],
    },
  },
  {
    date: new Date("July 15, 1969"),
    title: "Descubren laboratorio de bombas",
    slug: "descubren-laboratorio-de-bombas",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 22)',
        date: new Date("July 15, 1969"),
        title:
          "“LA POLICÍA UBICÓ UN LABORATORIO PARA FABRICAR BOMBAS Y PETARDOS”",
        description:
          "Tres mujeres y un hombre fueron detenidos en una finca de la calle Joaquín Requena donde habían montado una fábrica de explosivos...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-laboratorio-de-bombas/n_1.jpg",
            alt: "noticia publicada por el diario Diario",
          },
          {
            type: "página diario completa",
            src: "/descubren-laboratorio-de-bombas/n_2.jpg",
            alt: "página diario completa publicada por el diario Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 22)',
        date: new Date("July 17, 1969"),
        title: "“REMITIERON A FABRICANTES DE BOMBAS Y ANULAN UN ATENTADO”",
        description:
          "Cinco personas fueron remitidas a la cárcel-ayer de tarde-por dedicarse a la fabricación de artefactos explosivos. En efecto los detenidos son... estudiante de 4º año de Arquitectura,... estudiante de 5º año de Medicina,... estudiante de 3er. de Medicina y... estudiante del último año de Medicina...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-laboratorio-de-bombas/n_3.jpg",
            alt: "noticia publicada por el diario Día",
          },
          {
            type: "página diario completa",
            src: "/descubren-laboratorio-de-bombas/n_4.jpg",
            alt: "página diario completa publicada por el diario Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("July 26, 1969"),
    title: "Descubren laboratorio de bombas",
    slug: "descubren-otro-laboratorio-de-bombas",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 22)',
        date: new Date("July 27, 1969"),
        title: "“DETIENEN A TERRORISTAS FABRICANTES DE BOMBAS”",
        description:
          "Le hallan uniformes policiales: hay un herido... hay ocho personas detenidas, jóvenes y estudiantes en su mayoría-entre ellas dos mujeres-y un extranjero... apareció en la finca una elevada cantidad de dinero... de que se disponía, “en la célula” para financiar las operaciones terroristas...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otro-laboratorio-de-bombas/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/descubren-otro-laboratorio-de-bombas/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 5)',
        date: new Date("July 28, 1969"),
        title:
          "“SEIS DETENIDOS POR FABRICAR BOMBAS; UNO ES HIJO DE UN SENADOR”",
        description:
          "... se encontraron,... seis chaquetas, correajes y revólveres robados a funcionarios policiales en el curso de sucesivos atracos... varias bombas, panfletos, documentos en clave y otros elementos que, agregados a las declaraciones de los detenidos, pueden motivar... espectaculares procedimientos. Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otro-laboratorio-de-bombas/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/descubren-otro-laboratorio-de-bombas/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("July 31, 1969"),
        title: "“LOS TERRORISTAS ANTE LA JUSTICIA”",
        description:
          "... de izquierda a derecha... procesó a los tres primeros por delitos gravísimos que incluyen... El Profesor y el brasileño fueron procesados por delitos menores... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otro-laboratorio-de-bombas/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/descubren-otro-laboratorio-de-bombas/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 6)',
        date: new Date("July 31, 1969"),
        title:
          "“PROCESADOS POR GRAVÍSIMOS CARGOS HOY SE LES PODRÍA AGREGAR EL DE HOMICIDIO”",
        description:
          "... fue remitido por “Asociación para delinquir”, “Atentado contra la Constitución”, “Tenencia de explosivos”, “Uso de documentos falsos”, “Usurpación de funciones públicas” y “violencia privada”. Los mismos delitos ligeramente agravados se configuraron para..., el ex cañero... y admitieron ser los autores de la invasión en Radio Sarandí; de haber penetrado en el domicilio del Senador Flores Mora, del robo de una camioneta en la ciudad de Minas (la misma usada en el atraco a Radio Sarandí), de fabricar explosivos en el galpón..., y de haber atracado a dos agentes frente al diario “Acción”... niegan tenazmente haber integrado el grupo de terroristas... atracaron a los agentes Garay Dama y Urriola...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otro-laboratorio-de-bombas/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/descubren-otro-laboratorio-de-bombas/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("October 21, 1969"),
    title: "Descubren laboratorio de bombas",
    slug: "descubren-otro-laboratorio-de-bombas-mas",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("October 22, 1969"),
        title: "“CAEN EXTREMISTAS EN COLÓN”",
        description:
          "... los movimientos observados en la finca-además del alto alquiler pagado por los extremistas- tenía que necesariamente que llamar la atención... habían comenzado a construir un doble muro y un galpón en los costados de la finca. El galpón hacía las veces de depósito... comunica por una pequeña puerta con una cocina ubicada en la planta baja, donde se encuentran además dos habitaciones y un pequeña hall; en la planta alta se hallan otras dos habitaciones a las que se llega por una pequeña escalera, una de las cuales comunica con un balcón: en esta pieza se halló un laboratorio de explosivos... Se hallaron también material subversivo, cuatro armas cortas... y diversos planos de instituciones bancarias conteniendo datos e informes que demuestran que su atraco estaba siendo planeado por la organización...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otro-laboratorio-de-bombas-mas/n_1.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/descubren-otro-laboratorio-de-bombas-mas/n_2.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("October 23, 1969"),
        title: "“ATRACOS Y SECUESTROS: PLANES DE LOS EXTREMISTAS PRESOS”",
        description:
          "... ha permitido establecer que los extremistas proyectaban nuevos secuestros... y varios atracos contra diversas instituciones (sede de OSE, Banco de la Nación Argentina,... Caja Nacional de Ahorros y Descuentos y Banco La Caja Obrera). Se hallaron también informes sobre el movimiento de diversos automóviles policiales, entre ellos el Jefe de Policía... admitió haber cometido diversos atentados desde 1964 a la fecha: el 8 de setiembre de ese año colocó bombas incendiarias... y poco después arrojó bombas incendiarias contra el local de Coca Cola...; el 9 de agosto de 1965 colocó una bomba de alto poder explosivo frente a los depósitos de la firma Bayer... y este año,... planificó el atentado perpetrado contra la Sucursal Cordón del Banco Comercial...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otro-laboratorio-de-bombas-mas/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/descubren-otro-laboratorio-de-bombas-mas/n_4.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 11)',
        date: new Date("October 23, 1969"),
        title: "“EXTREMISTAS PLANEABAN GRANDES VARIOS ASALTOS”",
        description:
          "... que en un apartamento de Calderón de la Barca... una pareja pagaba $ 28.000 de alquiler... La finca no valía ese precio... hubo un allanamiento y dio por resultado la detención de la pareja y de... Posteriormente... fue detenido... Habría sido quien planeó y dirigió el acto de sabotaje contra el Banco Comercial, sucursal Cordón, donde se destruyeron las máquinas electrónicas y se produjo un incendio con pérdidas por valor de 250 millones de pesos. También habría sido quien dirigió la operación por la cual se robó la bandera de los “33 Orientales”...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otro-laboratorio-de-bombas-mas/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/descubren-otro-laboratorio-de-bombas-mas/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("January 02, 1970"),
    title: "Comisario baleado",
    slug: "comisario-baleado",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("January 02, 1970"),
        title: "“LUCAS: TIENE ALOJADA UNA BALA EN LA GARGANTA”",
        description:
          "Se cree lo emboscó un grupo conspirador... Comisario Juan María Lucas, permanecía internado esta tarde en estado delicado... con una bala alojada en la tráquea, después del atentado... los agresores efectuaron cuatro disparos. Sólo uno... entrándole por la espalda, alojándose junto a la tráquea después de pasar entre la carótida y la yugular... la herida es grave,...",
        images: [
          {
            type: "noticia publicada",
            src: "/comisario-baleado/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/comisario-baleado/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("January 03, 1970"),
        title: "“BALEARON E HIRIERON AL COMISARIO LUCAS”",
        description:
          "Anoche..., se produjo un criminal atentado contra el Comisario Juan María Lucas,... fue herido...  El proyectil pasó entre la carótida y la yugular y quedó alojado finalmente junto a la tráquea... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/comisario-baleado/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/comisario-baleado/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>... el 2 de enero había fallado un atentado contra el comisario Juan María Lucas,... Sobrevivió al disparo de un francotirador del MLN</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 439",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("March 12, 1970"),
    title: "Explosión en refugio terrorista",
    slug: "explosion-en-refugio-terrorista",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("March 13, 1970"),
        title: "“EXPLOTÓ UNA BOMBA EN GUARIDA DE CONSPIRADORES”",
        description:
          "...La explosión ocurrió en Yaro 973..., se vio salir... a dos jóvenes y una mujer... en dirección a la rambla... Llega la Policía... rompió la puerta de entrada... había numerosas bombas... armas cortas... medicamentos y material de enfermería... estaba montado un laboratorio... más de veinte bombas... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/explosion-en-refugio-terrorista/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/explosion-en-refugio-terrorista/n_1.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 8)',
        date: new Date("March 18, 1970"),
        title: "“HABÍAN PLANEADO GRANDES ASALTOS”",
        description:
          "Explosión de Yaro: revelaciones... planos de tres lugares... del Hipódromo de Maroñas... firma Crocker ubicada en la calle Rincón 418... “Laboratorio Galien” de la calle Arroyo Grande 2832... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/explosion-en-refugio-terrorista/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/explosion-en-refugio-terrorista/n_3.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("March 20, 1970"),
        title: "“LOS SEDICIOSOS MANIATARON AL AGENTE QUE VIGILABA EL GARAGE”",
        description:
          "Tres conspiradores incursionaron anoche... en la calle Yaro... luego de maniatar al policía... se llevaron once millones de pesos... ignoraban que en el lugar los maleantes habían dejado dinero...",
        images: [
          {
            type: "noticia publicada",
            src: "/explosion-en-refugio-terrorista/n_4.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/explosion-en-refugio-terrorista/n_5.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("May 17, 1970"),
    title: "Bombas en laboratorios, sucursales bancarias y puesto policial",
    slug: "bombas-en-laboratorios-sucursales-bancarias-y-puesto-policial",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("May 17, 1970"),
        title: "“NUEVE ATENTADOS CON BOMBAS EXPLOSIVAS EN LA MADRUGADA”",
        description: "... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-laboratorios-sucursales-bancarias-y-puesto-policial/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-laboratorios-sucursales-bancarias-y-puesto-policial/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("May 18, 1970"),
        title: "“BOMBAS CONTRA LABORATORIOS, BANCOS Y UN PUESTO POLICIAL”",
        description:
          "Un total de diez atentados con bombas (cuatro contra entidades bancarias, cinco contra laboratorios y uno contra una garita policial ubicada en la zona del Prado)... se produjeron en la madrugada... sumándose a los ocurridos el día 29 de abril, con acciones similares que sobrepasaron en esa instancia, una docena de casos... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-laboratorios-sucursales-bancarias-y-puesto-policial/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-laboratorios-sucursales-bancarias-y-puesto-policial/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("June 01, 1970"),
    title: "Policía y civiles baleados",
    slug: "policia-y-civiles-baleados",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("June 01, 1970"),
        title:
          "“AMETRALLARON A 3 POLICÍAS Y UNO DE ELLOS SE HALLA GRAVE”. “DESDE UN AUTO EN MARCHA SE CONSUMARON AMBOS ATENTADOS. “OCURRIERON FRENTE AL CANAL 4 Y A SANIDAD POLICIAL”",
        description: "... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/policia-y-civiles-baleados/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/policia-y-civiles-baleados/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 24)',
        date: new Date("June 01, 1970"),
        title: "“PRIMERO ROBARON LOS AUTOS”",
        description:
          "Un grupo de sediciosos robó.... dos automóviles secuestrando al sereno del garaje.... y luego varios asociados para delinquir protagonizaron una sucesión de hechos violentos en el barrio de Cordón....",
        title1: "“AMETRALLAN A POLICÍAS: HUBO UN HERIDO DE CONSIDERACIÓN”",
        description1:
          "En lo que seguramente fue un concertado contragolpe, grupos de sediciosos.... ametrallaron esta mañana a varios funcionarios policiales afectados a la vigilancia de edificios, hiriendo a tres de ellos en el curso de dos acciones.... Los sediciosos dispararon ráfagas de metralleta en un caso y cartuchos de perdigones en otros. Los policías heridos se hallaban apostados en el edificio de la Sanidad Policial.... y frente al Canal 4 de Televisión.... Aparecen fotos y croquis de....",
        images: [
          {
            type: "noticia publicada",
            src: "/policia-y-civiles-baleados/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/policia-y-civiles-baleados/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("June 02, 1970"),
        title: "“COBARDE ATAQUE: HERIDOS 3 AGENTES Y DOS PEATONES”",
        description:
          "Cruel “venganza” sediciosa”... atacaron a balazos a varios funcionarios policiales en una actitud que debe calificarse cruel y vandálica, mucho más cuando las víctimas elegidas son ajenas a los hechos ocurridos... la indiscriminada balacera de los sediciosos puso, en grave riesgo, la vida de inocentes peatones... Alcanzados directamente por los proyectiles y también al rebotar algunos en la pared de mármol, cayeron Hilario Crossa Aguilar y César Bulgarelli Silvera... Los dos, en grave estado, se encuentran en el Hospital Militar. Un tercer agente, Juan Zenén Sosa, fue rozado en una pantorrilla. Un joven de 16 años... también fue alcanzado por una bala en una pierna y la Srta. Beatriz Oviedo,... salvó la vida por milagro... una bala la rozó en la región occipital... ... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/policia-y-civiles-baleados/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/policia-y-civiles-baleados/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("June 02, 1970"),
        title: "“HABRÍA SIDO UNA ABSURDA “VENGANZA”",
        description:
          "... se especula... actúo en el episodio, ocurrido hace ya dos meses, que permitió la aprehensión de tres sediciosos en el café “La Vía”, de Larrañaga y Monte Caseros, suceso en el que también resultó herido el conspirador... que acaba de ser procesado por el magistrado actuante... Aparecen fotos.",
        title1: "“ATENTARON CONTRA POLICÍAS DESDE AUTOMÓVILES ROBADOS”",
        description1:
          "Tras asaltar un garaje del cual fueron hurtados dos autos...",
        images: [
          {
            type: "noticia publicada",
            src: "/policia-y-civiles-baleados/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/policia-y-civiles-baleados/n_7.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“El 1 de junio,..., los tupamaros ametrallaron por debajo de la cintura a policías que se encontraban en la puerta del canal 4...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 461",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("June 11, 1970"),
    title: "Policía baleado",
    slug: "policia-baleado-espino",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 22)',
        date: new Date("June 11, 1970"),
        title:
          "“BALEARON UN POLICÍA PARA ROBAR CASI 5 MILLONES EN UN BANCO DE LA TEJA”",
        description:
          "Casi cinco millones de pesos se llevaron a primera hora de esta tarde cuatro individuos que asaltaron la agencia La Teja del Banco Español y Territorial. Al penetrar al local, asaltado por primera vez un año atrás, lucharon encarnizadamente con un funcionario policial de guardia, sobre quien tiraron a quemarropa hiriéndolo... tras lo cual lo castigaron con la culata de sus armas...",
        images: [
          {
            type: "noticia publicada",
            src: "/policia-baleado-espino/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/policia-baleado-espino/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("August 24, 1970"),
    title: "Bombas en Radio Montecarlo",
    slug: "bombas-en-radio-montecarlo",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("August 25, 1970"),
        title: '"COPARON PLANTA EMISORA COLOCANDO CINCO BOMBAS”',
        description:
          "Un atentado... perpetraron integrantes de la organización sediciosa más antigua en perjuicio de la planta emisora de CX 20, Radio Montecarlo,... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-radio-montecarlo/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-radio-montecarlo/n_1.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("August 26, 1970"),
        title: "“FUERON A VOLAR LA PLANTA Y NO A PASAR UNA PROCLAMA”",
        description:
          "...  los sediciosos, en su acción de ayer de tarde, pretendieron volar la planta de dicha emisora y en ningún momento evidenciaron el propósito de irradiar una proclama...",
        title1: "“FRACASÓ EL OPERATIVO: SÓLO DESTROZOS LEVES EN LA RADIO”",
        description1:
          "Por segunda vez en cuatro días, los conspiradores fracasaron estrepitosamente al incursionar en una radio emisora, al intentar ayer sin éxito volar la planta transmisora de Radio Montecarlo, tras coparla durante 12 minutos… El de ayer fue el séptimo golpe de los conspiradores contra una radio emisora. El 10 de setiembre de 1964 se atentó contra Radio Carve, donde volvieron a incursionar...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-radio-montecarlo/n_2.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-radio-montecarlo/n_3.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("September 04, 1970"),
    title: "Bombas en comercios y domicilios particulares",
    slug: "bombas-en-comercios-y-domicilios-particulares",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("September 04, 1970"),
        title: "“UNA BRUSCA SEGUIDILLA DE 18 ATENTADOS”",
        description:
          "Esta mañana se consumaron 18 atentados contra domicilios particulares, de bancarios, funcionarios del Estado, policías y locales comerciales así como en perjuicio de ómnibus del servicio de transporte colectivo urbano...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-comercios-y-domicilios-particulares/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-comercios-y-domicilios-particulares/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Carta del 7 de setiembre de 1970.</p>
          <p>14 VECES LA MISMA NOCHE tuvieron que trabajar los bomberos y el personal de radio patrulla. En 14 lugares distintos y en escasos minutos, volvían a operar las organizaciones de combate.</p>
          <p>... venía una extensa y detallada nómina de las acciones realizadas. Figuraban en ella: los banqueros Juan Carlos Peirano Facio, Enrique Martín y Luis Mario Limido, la agencia Publicidad Oriental y el comentarista radial Omar de Feo; los delatores Gualberto Cuenca, RubenYaffé, Hugo Molca, Marco Esteva Sureda y Elisa Lupo; un ómnibus de CUTCSA...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Acción directa anarquista. Una historia de FAU",
          place: "Montevideo - Uruguay",
          edition: "Editorial Recortes",
          pages: "págs. 264-265",
          author: "Mechoso",
        },
      ],
    },
  },
  {
    date: new Date("September 10, 1970"),
    title: "Bomba en planta de Coca Cola",
    slug: "bomba-en-planta-de-coca-cola",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 17)',
        date: new Date("September 11, 1970"),
        title: "“UNO DE LOS ASALTANTES DE COCA COLA SE HIRIÓ CON SU REVÓLVER”",
        description:
          "Un grupo de delincuentes intentó anoche volar la planta embotelladora Nº 2 de Coca Cola... pero sus proyectos se frustraron y sólo estalló una bomba que arrojaron en el interior de una oficina, la que causó importantes daños... uno de los delincuentes... fue a colocar su revólver en la cartuchera y, al estar el arma sin seguro, se le escapó un disparo que fue a herirlo en la región glútea. Enseguida cayó al suelo...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-planta-de-coca-cola/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-planta-de-coca-cola/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("September 14, 1970"),
    title: "Bombas en empresas Sudamtex y Carlos Sicco",
    slug: "bombas-en-empresas-sudamtex-y-carlos-sicco",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("September 15, 1970"),
        title: "“PUDO DESTRUIR LA MANZANA EL CRIMINAL ATENTADO DE ANOCHE”",
        description: "... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("September 15, 1970"),
        title: "“PÁNICO EN LA NOCHE”",
        description:
          "Dos atentados, simultáneamente ejecutados, sacudieron ayer a la población de Montevideo. El de más impresionantes características fue el que afectó de manera fundamental a la empresa Sudamtex cuyas instalaciones de la calle Lavalleja quedaron virtualmente arrasadas. El fuego puso en riesgo a la manzana entera... y destruyó también la cochería Sicco de la calle Rivera... En otro lado de la ciudad,... los criminales dinamitaron la planta transmisora de la compañía Press Wireless... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_3.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("September 15, 1970"),
        title: "“PÉRDIDAS POR MÁS DE MIL MILLONES”",
        description:
          "Criminales atentados. Pánico: 50 familias evacuadas... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_4.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_5.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("September 15, 1970"),
        title: "“ATENTADO SEDICIOSO HIZO ARDER CASI TODA UNA MANZANA ANOCHE”",
        description:
          "Un numeroso grupo de sediciosos entre los que se contaba por lo menos una mujer,  asaltó e incendió ayer el depósito que la empresa “Sudamtex”  posee en Montevideo,... El siniestro, de espectaculares características,... en pocos minutos las llamas fueron extendiéndose hacia las fincas linderas,... invadiendo poco después la cochería Carlos Sicco... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_6.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 3)',
        date: new Date("September 16, 1970"),
        title: "“UNA MANZANA EN JAQUE POR EL FUEGO”",
        description:
          "Uno de los siniestros de mayores proporciones que se haya producido en nuestro país... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_7.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_8.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("September 16, 1970"),
        title: "“PERJUDICARÁ A LOS SECTORES MODESTOS EL DAÑO A SUDAMTEX”",
        description:
          "Tres mil kilómetros de telas quemados: toda la producción. Sector terciario perjudicado. Es del caso consignar que la horripilante salvajada que cometieron los sediciosos perjudicará en extremo a los sectores populares denominados terciarios dentro de la industria del vestido. Ellos sufrirán las consecuencias más directas de la falta de las telas consumidas por las llamas. Las modistas tendrán menos que hacer...",
        subtitle: "“Más de 3:000.000 de Metros”",
        description1: "... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_9.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_9.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("October 01, 1970"),
        title: "“... INTERVINO EN ATENTADO A SUDAMTEX”",
        description:
          "...el conspirador muerto bajo las ruinas del “bowling” que dinamitara y cuyo cadáver fuera rescatado el martes por los bomberos, fue reconocido... como participante del atentado contra el depósito de “Sudamtex”... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_10.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_10.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("November 02, 1970"),
        title:
          "“UNA FAMILIA EN LA CALLE POR OBRA DE LOS DESTRUCTIVOS “TUPAMAROS”",
        description:
          "A los catorce meses de una catástrofe provocada por los “tupamaros”, una familia sigue pagando las consecuencias de una acción vandálica, que no estaba dirigida contra ellos, pero da la que resultaron víctimas inocentes, perdiendo todas sus pertenencias... El Sr. Washington Bonilla con su esposa y tres hijos menores (14 y 12 años los varones y 7 años la niña) viven en una dependencia de la congregación de Hermanas Domínicas...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_11.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-empresas-sudamtex-y-carlos-sicco/n_12.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“... De ellas salió el “Plan Cacao”,... Consistía en una serie de sabotajes en puntos neurálgicos de la maquinaria económica del país, como ser voladuras de líneas de alta tensión, y de algunos puentes claves en el sistema de comunicaciones y de tramos de vía férrea, y atentados de importancia en empresas extranjeras de negocios oligárquicas... El primer objetivo de la serie fue un incendio prolijamente planeado, de los depósitos de Sudamtex, una empresa textil de capitales extranjeros y de inmediato, como era previsible, sobrevino el rechazo popular a la medida...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Autobiografía de Amodio Pérez",
          place: "Montevideo - Uruguay",
          edition: "Editorial Arca",
          pages: "pág. 52",
          author: "Pérez",
        },
      ],
    },
  },
  {
    date: new Date("September 19, 1970"),
    title: "Bombas en centro de diversión y restaurante",
    slug: "bombas-en-centro-de-diversion-y-restaurante",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("September 20, 1970"),
        title:
          "“DAÑOS MILLONARIOS OCASIONÓ ATENTADO CONTRA UNA BOITE, QUE SÓLO POR MILAGRO NO SE INCENDIÓ”",
        description: "... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-centro-de-diversion-y-restaurante/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-centro-de-diversion-y-restaurante/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 3)',
        date: new Date("September 20, 1970"),
        title: "“INCENDIARON CON BOMBAS TRANSMISOR DE ZUM ZUM”",
        description:
          "Dos hombres y una mujer... luego de secuestrar un taxímetro y retener por un espacio de dos horas a su conductor, atentaron contra la boite “Zum-Zum” ubicada abajo del Edificio Panamericano, causando graves daños... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-centro-de-diversion-y-restaurante/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-centro-de-diversion-y-restaurante/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 22)',
        date: new Date("September 20, 1970"),
        title: "“APLASTADO BAJO TONELADAS DE ESCOMBROS MURIÓ UN SEDICIOSO”",
        description:
          "La mañana neblinosa de hoy en Carrasco fue conmocionada por la explosión casi simultánea de dos locales de diversión: el “Carrasco Bowl” y “La Rochelle”. Las pérdidas ocasionadas por la acción de un grupo de delincuentes pertenecientes a una organización sediciosa...",
        title1: "“LA ROCHELLE FUE TAMBIÉN VOLADA”",
        description1:
          "...“La Rochelle” fue objeto de la devastadora acción de un grupo de delincuentes pertenecientes a una organización sediciosa... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-centro-de-diversion-y-restaurante/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-centro-de-diversion-y-restaurante/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Mario Teti Izquierdo...</p>
          <p>El Cacao se viene luego de Almería. Habían ajusticiado a Mitrione. Evidentemente lo que se tenía pensado no marchaba: el canje de los compañeros presos por los secuestrados. Se dijo: aténganse a las consecuencias, ahora les espera el Cacao. Vamos a golpear a la burguesía y a la oligarquía donde se divierta, donde se les encuentre... Era volar los lugares de diversión cuando no había gente. Como se hizo con La Rochelle en Carrasco o como se pretendió hacer en el Bowling... ”.</p>`,
          year: new Date("2009-1-1"),
          name: "Memorias de insurgencia. Historias de vida y militancia en el MLN-Tupamaros. 1965-1975",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Banda Oriental S.R.L.",
          pages: "págs. 195, 209",
          author: "Aldrighi",
        },
      ],
    },
  },
  {
    date: new Date("September 29, 1970"),
    title: "Bombas en Club Bowling de carrasco. Funcionaria queda inválida",
    slug: "bombas-en-club-bowling-de-carrasco",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("September 29, 1970"),
        title: "“VUELAN EL CARRASCO BOWLING: DINAMITERO MURIÓ APLASTADO”",
        description:
          "Sangriento atentado. Una limpiadora quedó con heridas de consideración. ... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-club-bowling-de-carrasco/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-club-bowling-de-carrasco/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("September 29, 1970"),
        title: "“UTILIZARON TRES AUTOMÓVILES ROBADOS”",
        description:
          "Los sediciosos que cometieron hoy en Carrasco los graves atentados dinamiteros utilizaron para movilizarse, antes y después del “operativo”, tres automóviles robados... Aparece croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-club-bowling-de-carrasco/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-club-bowling-de-carrasco/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 21)',
        date: new Date("September 29, 1970"),
        title: "“DETONARON GELINITA ROBADA EN LA CANTERA”",
        description:
          "La voladura esta mañana del “Carrasco Bowling Automático” en el cruce de Figari y Río de la Plata, es el atentado con explosivos de mayor entidad que han cometido hasta ahora los sediciosos... El local quedó destruido como si hubiese sido sometido a un bombardeo y para ello los conspiradores hicieron detonar simultáneamente varios atados de cartuchos de plastingelinita de la robada por ellos el 8 del cte., durante el asalto a la cantera Montevideo S.A... ubicada en Camino Pavia 3112. Pérdidas por 40 millones... allí pudo haber más personas que las que se encontraban en el lugar en el momento de la explosión, una de las cuales halló la muerte... la infortunada limpiadora, a la que los vecinos rescataron de entre vigas y mampostería que le cayó encima. Esta víctima recibió heridas de entidad... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-club-bowling-de-carrasco/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-club-bowling-de-carrasco/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 22)',
        date: new Date("September 29, 1970"),
        title: "“APLASTADO BAJO TONELADAS DE ESCOMBROS MURIÓ UN SEDICIOSO”",
        description:
          "... Un hombre con el rostro y manos cortadas, una mujer con la pierna destrozada y fractura de columna vertebral y un sedicioso muerto aprisionado bajo las estructuras de hormigón del edificio dedicado al bowling es el saldo en personas del atentado realizado. Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-club-bowling-de-carrasco/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-club-bowling-de-carrasco/n_8.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("September 30, 1970"),
        title: "“ÚNICO SOSTÉN DE SUS CUATRO HIJOS PUEDE QUEDAR INVÁLIDA”",
        description:
          "En el interior de un box del Hospital Militar se debatía hoy... la empleada del “Bowling”, doña Hilaria Quirino de Monteagudo, sacudida por terribles dolores, mientras una pesa colgaba de sus extremidades fracturadas...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-club-bowling-de-carrasco/n_18.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-club-bowling-de-carrasco/n_19.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (en Portada)',
        date: new Date("September 30, 1970"),
        title:
          "“ATENTADOS: IDENTIFICAN UN CUERPO Y BUSCAN OTRO; UNA SEÑORA HERIDA”",
        description:
          "Simultáneamente a la voladura se provocó incendio en “La Rochelle.-..., de 21 Años, es uno de los dinamiteros muertos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-club-bowling-de-carrasco/n_9.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-club-bowling-de-carrasco/n_10.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 7)',
        date: new Date("September 30, 1970"),
        title: "“BOWLING: RESCATARON UN CADÁVER Y BUSCAN OTRO”",
        description:
          "... los bomberos lograron ubicar el cadáver calcinado... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-club-bowling-de-carrasco/n_11.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-club-bowling-de-carrasco/n_12.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 7)',
        date: new Date("October 03, 1970"),
        title: "“IDENTIFICARON EL CADÁVER”",
        description:
          "Recién el lunes se podrá rescatarlo;... Aparece foto. Presunta bomba... nunca llegó a establecerse con exactitud cuántas fueron las bombas colocadas... colocaron tres bombas en las pistas...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-club-bowling-de-carrasco/n_13.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-club-bowling-de-carrasco/n_14.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 10)',
        date: new Date("October 04, 1970"),
        title: "“HABRÍA SIDO IDENTIFICADO EL SEDICIOSO MUERTO”",
        description: "Mañana o pasado lo extraen... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-club-bowling-de-carrasco/n_15.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-club-bowling-de-carrasco/n_16.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("October 06, 1970"),
        title: "“APRESADO BAJO UNA VIGA YACE EL DINAMITERO MUERTO”",
        description:
          "... Tras practicar un boquete en la planchada caída, los soldados del fuego llegaron…Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-club-bowling-de-carrasco/n_17.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-club-bowling-de-carrasco/n_17.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“El 29 de setiembre (sic), una bomba del MLN detonó en el Club de Bowling de Carrasco, uno de los lugares donde se reunía la juventud adinerada. En el atentado murieron los dos tupamaros que maniobraban el explosivo y varias personas quedaron heridas, entre estas (sic), la más grave, con su cuerpo quemado al extremo, la cuidadora, Hilaria Quirino Ibarra, una trabajadora de cuarenta y ocho años, con cuerpo y mente en ruinas, para siempre”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 476",
          author: "Pernas",
        },
        {
          fragment: `<p>“Mauricio Rosencof</p>
          <p>En el caso del Bowling de Carrasco, por ejemplo, se quería demostrar que estábamos en contra de los privilegios de la oligarquía, en el momento en que nos perseguían. La operación tuvo sus trágicos inconvenientes. Murieron allí los compañeros Carlos López y Roberto Rhon. Este último quedó bajo los escombros de una explosión precipitada… Los estudiantes de Química le pusieron su nombre a la plaza que está frente a la Facultad...”.</p>`,
          year: new Date("2009-1-1"),
          name: "Memorias de insurgencia. Historias de vida y militancia en el MLN-Tupamaros. 1965-1975",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Banda Oriental S.R.L.",
          pages: "págs. 23 y 39-41",
          author: "Aldrighi",
        },
      ],
    },
  },
  {
    date: new Date("October 13, 1970"),
    title: "Bombas en empresa Domingo Basso",
    slug: "bombas-en-empresa-domingo-basso",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 13)',
        date: new Date("October 14, 1970"),
        title: "“SETENTA MILLONES DE PÉRDIDAS EN ATENTADO”",
        description:
          "Tres bombas destruyeron dos secciones del local y una avioneta en Basso. Más de 70 millones de pesos en daños causó el martes un grupo de conspiradores que provocó un siniestro en el local de “Domingo Basso” en la Avda. Rondeau Nº 1921... Aparece foto y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-empresa-domingo-basso/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-empresa-domingo-basso/n_1.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>““El 8 el MLN ataca dependencias de Domingo Basso,...”. </p>`,
          // year: new Date("2013-1-1"),
          name: "La tregua armada",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "pág. 73",
          author: "Fernández Huidobro",
        },
      ],
    },
  },
  {
    date: new Date("December 03, 1970"),
    title: "Bombas en Saeta TV Canal 10",
    slug: "bombas-en-saeta-tv-canal-10",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("December 04, 1970"),
        title: "“SEDICIOSOS ATACARON EMISORA DE TELEVISIÓN”",
        description:
          "Un grupo sedicioso, integrado por siete jóvenes y una mujer, atentó ayer contra el Canal 10 de televisión-Saeta-fracasando en su intento de destruir la planta emisora...  Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 7)',
        date: new Date("December 04, 1970"),
        title: "“HICIERON ESTALLAR 3 BOMBAS EN CANAL 10”",
        description:
          "... La Jefatura dio cuenta  ayer de cuatro hechos protagonizados por integrantes de una organización, el más significativo de los cuales consistió en el estallido de tres bombas en los estudios de canal 10...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_3.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_4.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("December 11, 1970"),
        title: "“DETENIDA UNA ESTUDIANTE QUE DIRIGIÓ ATAQUE A SAETA”",
        description:
          "... estaría reconocida como integrante del grupo de sediciosos que hizo detonar tres bombas causando ingentes daños, en local de Canal 10 SAETA, ubicada en la calle Tacuarembó...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("December 11, 1970"),
    title: "Bombas en la Sede del Banco Interamericano de Desarrollo (BID)",
    slug: "bombas-en-sede-del-bid",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("December 12, 1970"),
        title: "“SEDICIOSOS ATENTAN CONTRA EL BID Y CAUSAN SERIOS DESTROZOS”",
        description:
          "Mediante atraco... un grupo de conspiradores atentó ayer contra la sede del Banco Interamericano de Desarrollo (BID) ubicada en el edificio Banco de Crédito en 18 de Julio esquina Barrios Amorín. El hecho fue precedido por el secuestro de un médico...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 12)',
        date: new Date("January 08, 1971"),
        title: "“PROCESAN A DOS ESTUDIANTES SEDICIOSOS”",
        description:
          "Habían atentado contra el BID y se les imputó graves cargos... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_9.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_10.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("December 13, 1970"),
    title: "Bombas en el Parador del Cerro",
    slug: "bombas-en-el-parador-del-cerro",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("December 14, 1970"),
        title: "“SECUESTRAN A PROFESIONAL PARA ATENTAR CONTRA BOITE”",
        description:
          "Un grupo de por lo menos diez conspiradores atentó ayer de mañana contra el Parador del Cerro-centro nocturno de señalado éxito últimamente-causando graves destrozos... Los hechos dieron comienzo con el hurto de un automóvil a cuyo propietario mantuvieron secuestrado... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_11.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_12.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("December 16, 1970"),
    title: "Bombas en Radio Universal",
    slug: "bombas-en-radio-universal",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("December 16, 1970"),
        title: "““EXPLOSIÓN EN EMISORA PROVOCÓ GRAVES DAÑOS”",
        description:
          "... un grupo de sediciosos-se vio actuar a dos hombres y dos mujeres-redujo por la fuerza de las armas a operadores y custodios de la planta emisora de la estación CX 22 Universal, y luego hizo estallar una bomba de alto poder que causó cuantiosos daños. Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_13.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_14.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("December 17, 1970"),
    title: "Bombas en la Boite Chez Carlos y Residencia Particular",
    slug: "bombas-en-la-boite-chez-carlos-y-residencia-particular",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 10)',
        date: new Date("December 18, 1970"),
        title: "“DAÑOS ELEVADOS EN “CHEZ CARLOS”",
        description:
          "Un grupo de cinco conspiradores atentó en la madrugada de ayer contra la boite “Chez Carlos” ubicada en Rambla República de México 5521, sobre Punta Gorda tras inmovilizar a las tres personas que allí se encontraban procedieron a romper muebles e incendiar diversos elementos del alhajamiento, causando graves daños... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_15.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_16.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 2)',
        date: new Date("December 18, 1970"),
        title: "“INCURSIONARON AYER EN UNA BOITE Y UN DOMICILIO”",
        description:
          "Cuatro hombres y una mujer, que dijeron pertenecer a una organización, incursionaron... en la boite “Chez Carlos” y  provocaron un incendio dejando un artefacto explosivo... En un domicilio. Un grupo similar (cuatro hombres y una mujer) penetró ayer...",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_17.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_18.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("December 19, 1970"),
        title: "“SEDICIOSOS ATENTARON CONTRA UNA RESIDENCIA”",
        description:
          "Cinco conspiradores, entre los que se encontraba una mujer, tomaron por asalto ayer la residencia del Sr. Francisco Abal ubicada en A. Larrañaga 4611. Tras dominar a la dueña de casa, su hijo, su madre y una cocinera procedieron a pintarrajear frases características de su organización en las paredes... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_19.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bombas-en-medios-de-comunicacion-banco-interamericano-de-desarrollo-y-restaurantes/n_20.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("March 30, 1971"),
    title: "Fábrica copada",
    slug: "fabrica-copada",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 22)',
        date: new Date("March 30, 1971"),
        title: "“COPAN UNA FÁBRICA Y DESPUÉS DE INTENSO TIROTEO LOS APRESAN”",
        description:
          "Quince personas, la mayoría de ellos tupamaros, fueron detenidas… durante un espectacular tiroteo..., en la fábrica de plásticos “NiboPlast S.A.C.I.” de Chiávari 2865... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/fabrica-copada/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/fabrica-copada/n_1.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 5)',
        date: new Date("March 31, 1971"),
        title: "“NIBO PLAST: TOTAL FRACASO TUPAMARO”",
        description:
          "Catorce “tupamaros” fueron apresados ayer por la Policía cuando intentaban realizar una proclama en la planta de “Nibo-Plast Uruguaya, SAIC”... un sereno que allí se encontraba vio la pareja... “De inmediato llamé al 890…”... Aparece foto y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/fabrica-copada/n_2.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/fabrica-copada/n_3.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 7)',
        date: new Date("March 31, 1971"),
        title: "“INFERNAL TIROTEO: CAEN 8 TUPAMAROS”",
        description:
          "Entre los detenidos figura una facciosa que huyó de la cárcel.... Ocho integrantes de la organización clandestina que opera en nuestro país, fueron detenidos en la mañana de ayer,... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/fabrica-copada/n_4.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/fabrica-copada/n_5.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 2)',
        date: new Date("March 31, 1971"),
        title: "“NIBOPLAST: DETUVIERON 8 TUPAMAROS; DOS HERIDOS”",
        description:
          "... Ocho detenidos, tres prófugos y un recio intercambio de decenas de balazos disparados... fue el saldo de un suceso... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/fabrica-copada/n_6.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/fabrica-copada/n_7.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El País" (Página 6)',
        date: new Date("April 03, 1971"),
        title: "“TIROTEO EN NIBOPLAST: REMITEN A LOS FACCIOSOS”",
        description:
          "Les fueron incautadas armas que habían sustraído del Centro de Instrucción de la Marina el año pasado... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/fabrica-copada/n_8.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/fabrica-copada/n_9.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
    ],
  },
  {
    date: new Date("April 18, 1971"),
    title: "Teniente de la Policía baleado",
    slug: "teniente-de-la-policia-baleado",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 12)',
        date: new Date("April 18, 1971"),
        title:
          "“FUERON REPELIDOS Y ACORRALADOS TRAS ATACAR A UN TENIENTE DE LA METROPOLITANA”",
        description:
          "... teniente de la Metropolitana Carlos Jesús Dos Santos, quien pese a estar herido (...), pudo abatir a uno de los que le emboscara al salir de su casa… La “bazuca” incautada por la policía,... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/teniente-de-la-policia-baleado/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/teniente-de-la-policia-baleado/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("April 19, 1971"),
        title:
          "“SEIS DETENIDOS; SEDICIOSO MUERTO Y OTROS DOS A PRISIÓN; POLICÍA HERIDO”",
        description:
          "Un oficial de la Metropolitana resultó baleado ayer de mañana... Un sedicioso resultó muerto y otros dos detenidos… Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/teniente-de-la-policia-baleado/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/teniente-de-la-policia-baleado/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("December 22, 1971"),
    title: "Bomba en Club de Golf",
    slug: "bomba-en-club-de-golf",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 22)',
        date: new Date("December 22, 1971"),
        title: "“PÉRDIDAS MILLONARIAS: SÓLO LOS VESTUARIOS SE SALVARON”",
        description:
          "Un grupo de sediciosos incendió esta mañana... ocasionando pérdidas por un monto de 60 millones de pesos... Aparecen foto y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-club-de-golf/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-club-de-golf/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Acción" (Página 8)',
        date: new Date("December 22, 1971"),
        title: "“VOLARON EL GOLF: PÉRDIDAS SUPERAN LOS 70 MILLONES”",
        description:
          "Seis hombres y una mujer fuertemente armados. Sólo ruinas humeantes quedan de lo que hasta las 6 de la mañana de hoy fuera el edificio que ocupaba el Club de Golf del Uruguay... en Punta Carreta... un grupo armado-seis hombres y una mujer-incendió el confortable edificio... Las pérdidas son multimillonarias... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-club-de-golf/n_3.jpg",
            alt: "noticia publicada por el diario El Acción",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-club-de-golf/n_3.jpg",
            alt: "página diario completa publicada por el diario El Acción",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 8)',
        date: new Date("December 23, 1971"),
        title: "“PÉRDIDAS POR MÁS DE 60 MILLONES EN EL CLUB DE GOLF”",
        description:
          "En las primeras horas de la mañana de ayer, un comando incendió el lujoso edificio que el Club de Golf del Uruguay tiene instalado en Punta Carretas... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-club-de-golf/n_4.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-club-de-golf/n_5.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("December 23, 1971"),
        title:
          "“NO LES BASTÓ CON QUEMAR EL CLUB DE GOLF: TAMBIÉN INCENDIARON COMERCIO”",
        description:
          "Quedan 165 trabajadores desocupados... Aparecen fotos, una a cuyo pie dice: “En medio del dolor y la incredulidad de niños... el Mago Ariel improvisó el escenario para cumplir con su labor. Debía actuar en el acto organizado por el Club que culminaría con el reparto de juguetes a los hijos de los funcionarios...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-club-de-golf/n_6.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-club-de-golf/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 5)',
        date: new Date("December 23, 1971"),
        title: "“ATENTADOS ANTERIORES”",
        description: "... Cronológicamente... fueron los siguientes:...",
        images: [
          {
            type: "noticia publicada",
            src: "/bomba-en-club-de-golf/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/bomba-en-club-de-golf/n_7.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("December 22, 1971"),
    title: "Incendio en Casa Sanz",
    slug: "incendio-en-casa-sanz",
    type: "atentados",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 6)',
        date: new Date("December 23, 1971"),
        title: "“PÉRDIDAS TOTALES POR 10 MILLONES”",
        description:
          "Criminal. Otro bárbaro atentado, sin justificación ni explicación posible fue perpetrado en las últimas horas de la tarde de ayer contra “Casa Sanz”... Unos quince individuos, jóvenes en su mayoría-...- fueron los autores del vandálico atentado... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/incendio-en-casa-sanz/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/incendio-en-casa-sanz/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("December 24, 1971"),
        title: "“CASA SANZ: LOS INCENDIARIOS ERAN EMPLEADOS DE “SERAL””",
        description:
          "Fueron reconocidos por tres testigos: los interroga el Juez. Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/incendio-en-casa-sanz/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/incendio-en-casa-sanz/n_4.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
  },
  {
    date: new Date("June 11, 1964"),
    title: "Banco de Cobranzas sucursal Buceo",
    slug: "banco-de-cobranzas-sucursal-buceo",
    type: "robo-dinero",
    moneyTheft: { uyu: 100000, usd: 4700 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("June 11, 1964"),
        title:
          '“FUE ASALTADO UN BANCO EN EL BUCEO: DESPUÉS HUBO TIROTEO. Fueron Capturados Tres Individuos. Un Policía Herido"',
        description:
          "... Tres individuos ingresaron a la Sucursal Buceo del Banco de Cobranzas y robaron $100.000. Al entrar, uno de los pistoleros, hizo fuego contra la puerta de entrada. Con el dinero en su poder huyeron en un Volkswagen robado que los esperaba en la puerta. Minutos después son interceptados por un patrullero y, tras un intenso tiroteo en el que cae herido un policía, fueron capturados. Dos de los asaltantes pertenecen al grupo de los cañeros de Artigas que están acampando frente al Mercado Municipal, el tercero aún no fue identificado.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-cobranzas-sucursal-buceo/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-de-cobranzas-sucursal-buceo/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 11)',
        date: new Date("June 12, 1964"),
        title:
          "“ASALTO A UN BANCO, TIROTEO, FUGA Y CAPTURA DE LOS RESPONSABLES, QUE SON CAÑEROS DE ARTIGAS”",
        description:
          "Integrantes del campamento de cañeros de Artigas, realizaron ayer un atraco contra un banco en la esquina de Rivera y Arrascaeta. Tras tirotearse con la policía fueron capturados tres asaltantes. Un policía y un atracador resultaron heridos tras el intenso tiroteo. En pleno asalto entró un menor, vecino de la zona, al banco y tras ser apuntado con un arma quedó en estado de shock... Gran sorpresa se llevó la policía al interrogarlos y descubrir que se trataba de tres cañeros de Artigas, acampantes en el Palacio Legislativo, ellos son:...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-cobranzas-sucursal-buceo/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-de-cobranzas-sucursal-buceo/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 11)',
        date: new Date("June 12, 1964"),
        title: "“TRES CAÑEROS ASALTANTES”",
        description:
          "Tres integrantes del campamento de cañeros de Artigas realizaron ayer un atraco contra el Banco de Cobranzas. En plena fuga, tras un intenso tiroteo con la policía, cayeron detenidos en la Plaza de los Olímpicos, no sin antes pelear cuerpo a cuerpo con los agentes. Resultaron heridos, un delincuente y un agente de policía. Los asaltantes fueron identificados y pertenecen a la agrupación UTAA, uno de ellos,..., estuvo involucrado en incidentes anteriores con los agentes del orden. Queda por identificar al cerebro del robo que sigue prófugo.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-cobranzas-sucursal-buceo/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/banco-de-cobranzas-sucursal-buceo/n_6.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“... Sendic se quedó en el local de Melilla, pero siempre tenía ganas de volver al apartamento de Violeta… Ahí se hacían las reuniones del coordinador, que estaba funcionando a pleno. Además del MIR, MAC, UTAA, FAU –cuyos representantes son los hermanos Gerardo y Mauricio Gatti, Juan Carlos Mechoso y León Duarte –, ya son varios los jóvenes socialistas que han llegado con Manera: Julio Marenales, Tabaré Rivero Cedrés, Jesús Rodríguez Recalde, Héctor Amodio Pérez, Alicia Rey, Edith Moraes, Elsa Garreiro, Pedro Lerena, Ismael Bassini.</p>
          <p>Y una tarde, la del 11 de junio de 1964 -mientras la marcha de peludos acampaba-, desde el balcón de aquel apartamento, ubicado en un edificio de la esquina de Arrascaeta y Rivera, Sendic supervisó a los tiros el robo al Banco de Cobranzas, que había en planta baja, cuando sus compañeros Julio Vique, Nelson Santana y Ataliva Castillo se vieron con problemas al retirarse con el dinero.</p>
          <p>... A Vique se le disparó el arma antes de entrar al banco… Los peludos exigieron las llaves de la caja fuerte –tenían un cóctel molotov por si había que usarlo–...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "págs. 263-265",
          author: "Pernas",
        },
        {
          fragment: `<p>“... - Mear en Picitos (sic) es un perjuicio burgués le dijo en tono cansino Santana a Vique... Faltaban pocos días para que ellos dos, junto con Castillo se metieran el 11 de junio de 1964, en el banco de Arrascaeta y Rivera a llevarse un poco de lo que allí se robaba. Los tres eran dirigentes de U.T.A.A... el grupo de los cañeros intentó el asalto... y fracasó desatando dos tempestades: la represiva desde afuera y la polémica desde adentro...</p>
          <p>-¡Y justo debajo de lo de Violeta! (Violeta Setelich vivía en apartamento del mismo edificio y allí solía reunirse el Coordinador)...”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 1: los orígenes",
          place: "Montevideo - Uruguay",
          edition: "TAE Editoria",
          pages: "págs. 143-144",
          author: "Fernández Huidobro",
        },
        {
          fragment: `<p>“... Raúl Sendic, dirigente socialista, actuaba con total autonomía, tanto en el plano sindical como en la realización de acciones armadas (por ejemplo, el asalto de la sucursal Buceo del Banco de Cobranzas en 1964, con la participación de los dirigentes de la Unión de Trabajadores Azucareros de Artigas (UTAA) Julio Vique, Nelson Santana y Ataliva Castillo)...”</p>`,
          year: new Date("2001-1-1"),
          name: "La izquierda armada. Ideología, ética e identidad en el MLN-Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Trilce,",
          pages: "pág. 74",
          author: "Aldrighi",
        },
      ],
    },
  },
  {
    date: new Date("October 14, 1964"),
    title: "Banco de Cobranzas sucursal San Martín",
    slug: "banco-de-cobranzas-sucursal-san-martin",
    type: "robo-dinero",
    moneyTheft: { uyu: 93000, usd: 4400 },
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("October 15, 1964"),
        title: "“ASALTARON OTRO BANCO PERO NO TARDARON EN CAER LOS LADRONES”",
        description:
          "Dos delincuentes penetraron a una sucursal bancaria de Larrañaga y San Martín portando metralletas se apropiaron de $ 93.900. Fueron detenidos... cuando trataban de escapar en un taxímetro... siendo recuperado íntegro el dinero hurtado luego de estéril intento de resistencia por parte de uno de los pillos. Fueron detenidos...",
        subtitle: "“De Profesor a Asaltante”",
        description1:
          "... Uno de los asaltantes... a quien se le trabara la metralleta cuando intentó enfrentar a los funcionarios policiales que iban a detenerlo es nada menos que un profesor de la Escuela Nacional de Bellas Artes. El profesor “metido” a delincuente viene, con su participación, a darle tal vez un nuevo cariz a los hechos por cuanto parecería bien definida su ideología... Del asalto a la sucursal Buceo, del mismo banco, fueron autores elementos “cañeros” que acamparan en Montevideo entonces.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-cobranzas-sucursal-san-martin/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-de-cobranzas-sucursal-san-martin/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 8)',
        date: new Date("October 16, 1964"),
        title: "“HAY MÁS CÓMPLICES EN EL ATRACO FRUSTRADO”",
        description:
          "... De lo que expusieron surgió que tres personas les ayudaron a realizar el robo y dos de ellos permanecían aún prófugos esta madrugada... dijeron, al ser detenidos, que los animó, principalmente, la idea de ayudar a cierto grupo extremista a pesar de creerse en el móvil del robo simple... se les indica como afiliados a cierto sector ideológico de política extremista...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-cobranzas-sucursal-san-martin/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-de-cobranzas-sucursal-san-martin/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("October 17, 1964"),
        title:
          '“EL INGENIERO DETENIDO, "CEREBRO" DEL GRUPO IZQUIERDISTA Y DEL ASALTO”',
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-cobranzas-sucursal-san-martin/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-de-cobranzas-sucursal-san-martin/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("October 17, 1964"),
        title: "“ADMITIÓ EL INGENIERO CIVIL SER PROMOTOR DEL ATRACO FRUSTRADO”",
        description:
          "Dos autores materiales del delito, procesados, con él por rapiña. Mantiénense prófugos otros dos individuos que oficiaron de “campana”. Aquellos ratificaron su ideología izquierdista... El bien pertrechado grupo centraba sus actividades en la Escuela de Bellas Artes... En el piso 5º de UTE prestaba funciones de alguna importancia, el Ingeniero Civil..., uruguayo, casado de 34 años de edad... Esta persona conoció en la Escuela Nacional de Bellas Artes a los que luego resultaron asaltantes,... uruguayo, casado de 34 años… y profesor del aludido centro docente, y... uruguayo, soltero de 27 años..., ex -alumno de la misma escuela, artista, pintor , etc... siendo los tres-según aseguraron-adictos al socialismo...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-cobranzas-sucursal-san-martin/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-de-cobranzas-sucursal-san-martin/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("October 17, 1964"),
        title:
          "EL INGENIERO DE UTE PLANEÓ EL ATRACO: RECOGERÍA A LOS AUTORES Y SE RETRASÓ!. Los Dos Noveles Asaltantes Esperaron en Vano el “Jeep”",
        description:
          "... fueron procesados y remitidos a la cárcel… Quedó perfectamente establecida la responsabilidad del profesional, en principio acusado de ser el que facilitó las armas, como uno de los integrantes de la banda, conocido como “Julio” restan aún detener a otros dos conocidos por “Jorge” y por “Alberto”. Serían también personas sin antecedentes, de ideología “socialista” como señalaron los tres remitidos, que actúan en ambientes profesionales o estudiantiles...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-cobranzas-sucursal-san-martin/n_9.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/banco-de-cobranzas-sucursal-san-martin/n_10.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
  },
  {
    date: new Date("May 13, 1966"),
    title: "Banco Caja Obrera sucursal Bella Vista",
    slug: "banco-caja-obrera-sucursal-bella-vista",
    type: "robo-dinero",
    moneyTheft: { uyu: 93000, usd: 4400 },
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 5)',
        date: new Date("May 14, 1966"),
        title:
          '"ASALTANTE DISFRAZADO DE POLICÍA Y CUATRO CÓMPLICES ROBARON $ 301.343”',
        description:
          "Un atraco... se registró en la Sucursal Bella Vista del Banco la Caja Obrera ubicada en Uruguayana 3101 esquina Sitio Grande. El agente comisionado para la vigilancia... Fue inmediatamente reducido por los intrusos que lo maniataron usando un grueso y herrumbrado alambre... que fue amenazada de muerte si intentaba resistir o llamar la atención... Al Jefe de Oficina Jorge Domínguez Salvanach lo trataron con violencia,... uno de los delincuentes le propinó dos fuertes golpes de puño en el estómago mientras que el otro le aplicaba un puñal en la nuca. Posteriormente logran el acceso al dinero...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-caja-obrera-sucursal-bella-vista/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-caja-obrera-sucursal-bella-vista/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("May 14, 1966"),
        title: "“FUE LARGAMENTE PREMEDITADO EL ATRACO A LA CAJA OBRERA”",
        subtitle: "“La Camioneta Está Blindada”",
        subDescription:
          "Lucía las chapas de Montevideo Nº 408-354 pero rápidamente se comprobó que esas chapas correspondían a una camioneta de la Tienda Caubarrere... En el interior de la camioneta empleada por los atracadores se hallaron trozos de alambre en un todo iguales, que utilizaron para atar al guardia metropolitano y al portero del banco. Además se comprobó en la parte posterior una chapa de hierro, de buen grueso, destinada sin duda a proteger los delincuentes de posibles balazos descargados desde atrás al emprender la fuga. Aparece foto de una chapa usada como protección dentro de la camioneta.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-caja-obrera-sucursal-bella-vista/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/banco-caja-obrera-sucursal-bella-vista/n_4.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 11)',
        date: new Date("May 15, 1966"),
        title: "“PISTOLEROS: SURGE VALIOSA PISTA”",
        description:
          "... Todos los detalles de la forma en que se concretó el asalto así como otros posteriores deducido al inspeccionar la camioneta VW que incluso estaba acorazada para enfrentar un tiroteo, viene a demostrar que quienes cometieron el golpe contra la agencia bancaria, son maleantes experimentados y seguramente entre ellos hay un pistolero argentino.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-caja-obrera-sucursal-bella-vista/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-caja-obrera-sucursal-bella-vista/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“El 13 de mayo, catorce compañeros, utilizando cuatro vehículos, nos llevamos cerca de 5.000 dólares de la sucursal del Banco la Caja Obrera sita en Uruguayana y Arroyo Grande...”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 3: el MLN",
          place: "Montevideo - Uruguay",
          edition: "TAE Editoria",
          pages: "pág. 20",
          author: "Fernández Huidobro",
        },
      ],
    },
  },
  {
    date: new Date("November 22, 1966"),
    title: "Banco Popular del Uruguay sucursal Paso de la Arena",
    slug: "banco-popular-del-uruguay-sucursal-paso-de-la-arena",
    type: "robo-dinero",
    moneyTheft: { uyu: 450000, usd: 7600 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 21)',
        date: new Date("November 22, 1966"),
        title:
          "“UN BANCO FUE ASALTADO HOY. ROBARON $ 300.000 4 HOMBRES ARMADOS”",
        description:
          "A punta de pistolas y revólveres de grueso calibre, cuatro hombres jóvenes, asaltaron esta tarde... la Sucursal Paso de la Arena del Banco Popular del Uruguay, llevándose $ 300.000 de la institución y $ 50.000 que estaba depositando un cliente...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-popular-del-uruguay-sucursal-paso-de-la-arena/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-popular-del-uruguay-sucursal-paso-de-la-arena/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("November 23, 1966"),
        title: "“UN ASALTO MÁS. $ 470.642 ROBADOS DE UNA SUCURSAL BANCARIA”",
        description:
          "... Los desconocidos llegaron en un auto Volkswagen,... que posteriormente había sido robado el 27 de mayo ppdo... El primer paso de los desconocidos al descender del vehículo fue dominar al agente, a quien le sacaron el revólver de reglamento, penetrando en la Sucursal Bancaria intimando a los presentes. Los asaltantes iban armados: 2 con pistolas de grueso calibre; uno con un revólver 38 y otro con un 22...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-popular-del-uruguay-sucursal-paso-de-la-arena/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-popular-del-uruguay-sucursal-paso-de-la-arena/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 11)',
        date: new Date("November 23, 1966"),
        title:
          "“LOS TRES ATRACADORES DEL PASO DE LA ARENA TRASBORDARON DE VEHÍCULO EN AIRES PUROS. LLEVARON $ 470.000 DEL BANCO ASALTADO EN LA TARDE DE AYER”",
        description:
          "... La noticia conmovió a los vecinos de Paso de la Arena...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-popular-del-uruguay-sucursal-paso-de-la-arena/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/banco-popular-del-uruguay-sucursal-paso-de-la-arena/n_6.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“... se decidió realizar antes una operación de finanzas “pequeña” que dotara a la Organización de recursos para el caso de una derrota en la “grande”. Fue por ello y para ello que el 22 de noviembre de 1966, cinco días antes de las elecciones, asaltamos el Banco Popular en Paso de la Arena, llevándonos 7270 dólares de aquel tiempo”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 3: el MLN",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "pág. 38",
          author: "Fernández Huidobro",
        },
      ],
    },
  },
  {
    date: new Date("June 27, 1968"),
    title: "Banco Caja Obrera sucursal Villa Muñoz",
    slug: "banco-caja-obrera-sucursal-villa-munoz",
    type: "robo-dinero",
    moneyTheft: { uyu: 1500000, usd: 6420 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("June 27, 1968"),
        title: "“ASALTARON UN BANCO Y HUYERON CON UN MILLÓN Y MEDIO”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-caja-obrera-sucursal-villa-munoz/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-caja-obrera-sucursal-villa-munoz/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("June 27, 1968"),
        title: "“LA POLICÍA CREE QUE LOS PISTOLEROS SON TUPAMAROS”",
        description:
          "Cuatro sujetos armados con metralletas asaltaron esta tarde la agencia del Banco La Caja Obrera de Villa Muñoz, llevándose un millón y medio de pesos. El hecho se produjo en la dependencia ubicada en Justicia y Nicaragua y los maleantes encerraron en un baño a los ocho empleados del banco y dos clientes, entre ellos una señora...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-caja-obrera-sucursal-villa-munoz/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-caja-obrera-sucursal-villa-munoz/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("June 27, 1968"),
        title: "“RECONOCEN A 2 “TUPAMAROS” COMO ASALTANTES DEL BANCO”",
        description:
          "Según el testimonio de los ocho empleados de la Agencia del Banco La Caja Obrera que ayer fue asaltada por cuatro sujetos,... dos de los delincuentes serían integrantes de la organización terrorista conocida por “Los Tupamaros”… Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-caja-obrera-sucursal-villa-munoz/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/banco-caja-obrera-sucursal-villa-munoz/n_6.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
  },
  {
    date: new Date("June 28, 1968"),
    title: "Banco Cobranzas sucursal La Paz",
    slug: "banco-cobranzas-sucursal-la-paz",
    type: "robo-dinero",
    moneyTheft: { uyu: 4900000, usd: 19700 },
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("June 29, 1968"),
        title:
          "“ASALTO RÉCORD: DE UN BANCO DE LA PAZ SE LLEVARON AYER CASI CINCO MILLONES”",
        description:
          "La Paz. Cinco delincuentes... fueron autores en la tarde de hoy, del robo más importante que registra la historia de los atracos a entidades bancarias... se llevaron la suma de $ 4:973.160, batiendo el récord que ostentaba otro asalto en la misma ciudad contra una sucursal del Banco Comercial el 27 de Julio de 1967... oportunidad en que los atracadores,... huyeron con pesos 2:350.000 en efectivo...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-cobranzas-sucursal-la-paz/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-cobranzas-sucursal-la-paz/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("June 29, 1968"),
        title: "“TENEMOS YA EL ASALTO RÉCORD”",
        description:
          "Cinco sujetos-al parecer “Tupamaros”-asaltaron ayer el Banco de La Paz... A punta de armas, encerraron tras la reja de Tesoros a veinticuatro personas, y se llevaron casi cinco millones de pesos. Uno de los autos, fue logrado robándoselo a su chofer al que encerraron en una finca de Pocitos mientras cometían el atraco...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-cobranzas-sucursal-la-paz/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/banco-cobranzas-sucursal-la-paz/n_4.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("June 30, 1968"),
        title: "“REUNIÓN SUBVERSIVA EN ESCUELA PÚBLICA: INTERNAN 52 DETENIDOS”",
        description:
          "El plan: salir a la lucha; paralizar el país; renuncia del Presidente Pacheco Areco y expulsión de Jorge Batlle; boicot a ACCIÓN...",
        title1: "“TEXTO DEL DOCUMENTO”",
        description1:
          "1) Salir a la lucha. 2) Paralizar el país por tiempo indeterminado...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-cobranzas-sucursal-la-paz/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/banco-cobranzas-sucursal-la-paz/n_6.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("June 30, 1968"),
        title: "“ATRACO A BANCOS ¿SEIS MILLONES PARA LA SUBVERSIÓN?”",
        description:
          "... Se señala que el dinero robado puede ser destinado a planes subversivos, ya que entre los Tupamaros se comprobó antes la militancia de empleados bancarios y ayer fueron detenidos cincuenta y uno de estos en reunión ilegal...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-cobranzas-sucursal-la-paz/n_7.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/banco-cobranzas-sucursal-la-paz/n_8.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Se expropió entonces, el Banco de La Paz. Había ahí una buena guita. Cerrábamos el ´68 (sic) con buenas perspectivas de futuro”.</p>`,
          // year: new Date("1994-1-1"),
          name: "Acción directa anarquista. Una historia de FAU",
          place: "Montevideo - Uruguay",
          edition: "Editorial Recortes",
          pages: "pág. 120",
          author: "Mechoso",
        },
      ],
    },
  },
  {
    date: new Date("October 4, 1968"),
    title: "Banco de Crédito sucursal Malvín",
    slug: "banco-de-credito-sucursal-malvin",
    type: "robo-dinero",
    moneyTheft: { uyu: 260000, usd: 1050 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("October 4, 1968"),
        title:
          "“CUATRO DÍAS DE OCTUBRE Y CUATRO ASALTOS A BANCOS: HOY EN MALVÍN”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-credito-sucursal-malvin/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-de-credito-sucursal-malvin/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("October 4, 1968"),
        title:
          "“SE COMETIÓ EL ASALTO DEL DÍA CONTRA UNA SUCURSAL DE MALVÍN. Tres Hombres Se Llevaron 262 Mil Pesos.”",
        description:
          "Un nuevo asalto, el cuarto consecutivo en lo que va de este mes, fue perpetrado esta tarde por tres hombres armados, contra la sucursal del Banco de Crédito ubicada en Orinoco 5004 esquina Amazonas...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-credito-sucursal-malvin/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-de-credito-sucursal-malvin/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("October 7, 1968"),
    title: "Banco de Londres y América del Sud sucursal Carrasco",
    slug: "banco-de-londres-y-america-del-sud-sucursal-carrasco",
    type: "robo-dinero",
    moneyTheft: { uyu: 10000000, usd: 44130 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("October 7, 1968"),
        title:
          "“CINCO DÍAS HÁBILES DE OCTUBRE: CINCO ASALTOS. DOS ENMASCARADOS SE LLEVARON DIEZ MILLONES DE UNA SUCURSAL”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-londres-y-america-del-sud-sucursal-carrasco/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-de-londres-y-america-del-sud-sucursal-carrasco/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("October 7, 1968"),
        title: "“¿AVEZADOS PISTOLEROS O COMANDOS EXTREMISTAS?”",
        description:
          "Por varias e importantes razones, este último asalto del presente mes de octubre sale de lo común y plantea una serie de enigmas, entre ellos, el más importante es establecer si sus autores son pistoleros avezados o integrantes de un comando extremista...",
        title1: "“SUMA RÉCORD: 10 MILLONES SE LLEVAN LOS PISTOLEROS”",
        description1:
          "Tras la obligada pausa del fin de semana, los asaltantes reanudaron su actividad alcanzando un doble récord: quinto día hábil del mes, quinto asalto consecutivo a sucursales bancarias y la suma más elevada registrada en los anales policiales del país en hechos de esta índole: diez millones de pesos.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-londres-y-america-del-sud-sucursal-carrasco/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-de-londres-y-america-del-sud-sucursal-carrasco/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("October 8, 1968"),
        title:
          "“RÉCORD. DIEZ MILLONES SE LLEVARON AYER DE UN BANCO DE CARRASCO, A PUNTA DE PISTOLA, DOS ENMASCARADOS”",
        description:
          "El asalto más espectacular, en lo que refiere al monto, fue perpetrado ayer. Dos enmascarados con los rostros pintados y cubiertos con medias de seda negra penetraron con llaves “apropiadas” a la Agencia Carrasco del Banco de Londres y América del Sud...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-londres-y-america-del-sud-sucursal-carrasco/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-de-londres-y-america-del-sud-sucursal-carrasco/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("October 8, 1968"),
        title: "“NO HAY PISTAS DE LOS ASALTANTES Y SE PIENSA EN UN ENTREGADOR”",
        description:
          "El asalto más importante en la historia ilícita del Uruguay...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-londres-y-america-del-sud-sucursal-carrasco/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-de-londres-y-america-del-sud-sucursal-carrasco/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("October 8, 1968"),
        title: "“NO HAY NINGUNA PISTA DE LOS PISTOLEROS DE AYER”",
        description:
          "... Y van más de 44 millones. En el curso de 14 meses ya se cometieron 18 asaltos a sucursales bancarias montevideanas y de Canelones por un monto que alcanza, hasta ahora los $ 43.658.000 aproximadamente...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-londres-y-america-del-sud-sucursal-carrasco/n_9.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-de-londres-y-america-del-sud-sucursal-carrasco/n_10.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("October 24, 1968"),
    title: "Banco Comercial sucursal La Paz",
    slug: "banco-comercial-sucursal-la-paz",
    type: "robo-dinero",
    moneyTheft: { uyu: 3400000, usd: 13750 },
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("October 25, 1968"),
        title: "“OTRO ASALTO A UN BANCO”",
        description:
          "Un nuevo asalto perpetrado en la tarde de ayer contra una institución bancaria reportó a los delincuentes, la suma de 3.427.400 pesos. Resultó afectada en la oportunidad la sucursal del Banco Comercial ubicada en la Avda. José Batlle y Ordoñez 286 de la ciudad de La Paz, Departamento de Canelones, la cual ya había sido asaltada en 28 de Julio de 1967, oportunidad en que cinco individuos llevaron la suma de 2.400.00 pesos, delito que hasta el presente no ha sido aclarado... sorpresivamente irrumpieron en el local dos desconocidos, quienes actuando a cara descubierta mientras anunciaban en voz alta “esto es un asalto, nadie se mueva”, encañonaron con sendos revólveres, a los presentes.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-comercial-sucursal-la-paz/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-comercial-sucursal-la-paz/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("October 25, 1968"),
        title: "“ATRACO AL BANCO DE LA PAZ: SE LLEVARON TRES MILLONES Y MEDIO”",
        description:
          "Utilizando un coche robado - en el que llevaron y trajeron al dueño del mismo - llegaron hasta el Banco Comercial de La Paz, los tres delincuentes del atraco. Poco después el coche era localizado en General Flores y Pozzolo, donde a un funcionario le hicieron un disparo desde otro vehículo...",
        subtitle: "“Raro Atentado”",
        description1:
          "Uno de los integrantes de la Comisión de Hurtos y Rapiñas, el Sargento Ayton Correa, se dirigía a un comercio para comunicar telefónicamente a sus superiores el hallazgo del vehículo. De pronto, pasó por allí un auto marca Austin, pintado de negro, en el que viajaban tres hombres, uno de los cuales hizo un disparo contra el funcionario que sintió “silbar” la bala junto a su cabeza, comprobándose luego que el proyectil había penetrado por la puerta abierta de un taller cercano, quedando incrustada en una pared de madera...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-comercial-sucursal-la-paz/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/banco-comercial-sucursal-la-paz/n_4.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("October 25, 1968"),
        title: "“TRES PISTOLEROS ASALTARON UN BANCO: HUYERON CON 3 MILLONES”",
        description:
          "Una gavilla de pistoleros, que ya habría cometido algún asalto anterior, atracó ayer de tarde la sucursal La Paz del Banco Comercial, apoderándose de $ 3.427.000 en contados minutos. Los maleantes eran tres: dos de ellos actuaron en el interior del local, asumiendo el rol ejecutivo, y un tercero oficiaba de chofer y “campana”... los atracadores robaron el vehículo secuestrando a su chofer, Manuel Pintos Fuentes, oriental casado de 54 años, con quien realizaron el recorrido desde Montevideo a la ciudad de La Paz,... El chofer quedó en el coche, junto a Pintos, mientras sus cómplices se dirigían a la sucursal… El chofer había dicho: “si alguien se opone, métanle bala...”.",
        subtitle: "“Huyen a Toda Velocidad”",
        description1:
          "... Al llegar a Piedras Blancas, pararon y obligaron a Pintos a descender en Cuchilla Grande y Teniente Rinaldi... Pintos formuló la denuncia correspondiente en la seccional 16ª, relatando los hechos y haciendo la descripción de los tres delincuentes.",
        subtitle1: "“Atentado Contra Un Sargento”",
        description2:
          "Poco después, el auto era ubicado en Pozzolo y Gral. Flores, abandonado. Un funcionario de Investigaciones...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-comercial-sucursal-la-paz/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-comercial-sucursal-la-paz/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("November 29, 1968"),
    title: "Casino Hotel Carrasco Montevideo",
    slug: "casino-hotel-carrasco-montevideo",
    type: "robo-dinero",
    moneyTheft: { uyu: 6000000, usd: 25280 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("November 29, 1968"),
        title:
          "“USARON METRALLETAS LOS PISTOLEROS DEL CASINO DE CARRASCO. El Asalto del Siglo. Pudieron Huir con más de 6 Millones”",
        description: "Aparece dibujo reconstruyendo escenas de dicho asalto.",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-hotel-carrasco-montevideo/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/casino-hotel-carrasco-montevideo/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("November 29, 1968"),
        content: [
          {
            title: "“ASALTARON EL CASINO DEL HOTEL CARRASCO”",
            description:
              "Tres cuartos de hora después que unas trescientas personas abandonaron la sala de juego del Casino Carrasco, seis pistoleros dieron allí esta madrugada, uno de los golpes más espectaculares de los últimos tiempos. Habiendo llegado hasta el lugar en un vehículo robado, dominaron a dos policías, orientaron todos sus movimientos con absoluta precisión y, finalmente, atracaron la tesorería, apoderándose de una suma superior a los seis millones de pesos, exactamente $ 6.301.531.",
            subtitle: "“El Robo de una Camioneta”",
            subdescription:
              "... los malvivientes huyeron en una camioneta “Volkswagen”. Este vehículo había sido hurtado a la 1.45 de la madrugada del garaje ubicado en la calle Blanes 1080. Allí, tres desconocidos secuestraron al sereno del local, Césare Ricardo Felice, lo maniataron, y luego, colocándolo en la parte trasera de la camioneta, lo llevaron consigo hasta unos montes próximos al matadero Fylsa, en Carrasco. En esos montes el sereno del garaje permaneció prisionero de dos individuos, encañonado por revólveres,... Uno de los rapiñeros se fue con la camioneta, para usarla en la comisión del asalto al Casino.",
          },
          {
            title: "“DICE LA POLICÍA QUE ENTREGARON EL GOLPE”",
            description:
              "Nadie duda que la banda que consumó el espectacular asalto de esta madrugada, estaba integrada por experimentados pistoleros. Tampoco se discute que el golpe fue planeado a la perfección, incluso disponiendo previamente de planos del Hotel Carrasco; además existe la certeza de que los maleantes era gente decidida a todo... “fue entregado por alguien desde adentro del Casino de Carrasco”.",
            subtitle: "“¿Otra Vez los Tupamaros?”",
            subdescription:
              "En los primeros días de este mes el gerente de los Casinos Municipales recibió una extraña llamada telefónica anónima. La persona que habló con dicho jerarca dijo que los tupamaros iban a asaltar una de las casas de juego. El comunicado provocó evidente alarma y se tomaron las correspondientes medidas de vigilancia. Personal fuertemente armado de la Guardia Metropolitana fue destacado en los Casinos del Parque Hotel y Hotel Carrasco. Posteriormente, la vigilancia fue levantada y el golpe ocurrió tal como fue anunciado... hay más con respecto a la posible participación del Movimiento de Liberación Nacional en este golpe. En el curso de procedimientos llevados a cabo tiempo atrás... se allanó la finca de un posible miembro del grupo extremista y entre la documentación incautada allí estaba una fotografía del Hotel de Carrasco. La misma tenía varias flechas, indicando determinados accesos al edificio.",
          },
        ],
        images: [
          {
            type: "noticia publicada",
            src: "/casino-hotel-carrasco-montevideo/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/casino-hotel-carrasco-montevideo/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("November 29, 1968"),
        title: "“ATRACO “ENTREGADO” AL CASINO DE CARRASCO: 6.300.000 PESOS”",
        description:
          "Aparecen fotos mostrando por donde entraron y como se encaminaron hasta ponerse en contacto con la gran suma.",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-hotel-carrasco-montevideo/n_5.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/casino-hotel-carrasco-montevideo/n_6.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("November 29, 1968"),
        title:
          "“HABÍAN ROBADO UN VW DE UN GARAGE Y SECUESTRADO AL SERENO. SERÍAN NUEVE”",
        description:
          "... Poco antes de sucederse estas escenas, tres hombres llegaron hasta el garage sito en Juan Manuel Blanes 1132, que se hallaba a cargo del sereno César Riccardi... sorpresivamente, los tres desconocidos, desenfundando revólveres le encañonaron y le dijeron secamente-ni grites, ni te resistas viejo, que no te va a pasar nada. Si te retobás te matamos- Acto seguido lo hicieron retroceder hasta la camioneta Volkswagen... que se hallaba guardada allí, obligándole a entrar al vehículo. Una vez en el interior le ataron firmemente tobillos y muñecas... no pudiendo ver hacia donde era llevado por sus secuestradores... Proporciona información sobre el secuestro del sereno y vehículo y detalles del asalto.",
        title1: "“¿UN GOLPE ENTREGADO?”",
        description1:
          "... Las características del golpe indicarían que el mismo fue planeado con la colaboración de personas que conocen perfectamente el funcionamiento interno del Casino. El hecho de que se haya violentado la puerta interior y que los atracadores arribaran en el preciso momento que se realizaba el arqueo cuando el público ya se había retirado, indicarían que alguien participó desde adentro en la preparación del golpe.",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-hotel-carrasco-montevideo/n_7.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/casino-hotel-carrasco-montevideo/n_8.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("December 9, 1968"),
        title: "FUERON LOS TUPAMAROS QUIENES ASALTARON EL CASINO CARRASCO”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-hotel-carrasco-montevideo/n_9.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/casino-hotel-carrasco-montevideo/n_10.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("December 9, 1968"),
        title: "“FUERON TUPAMAROS LOS ASALTANTES DEL CASINO”",
        description:
          "Un comando tupamaro cometió el asalto al Casino del Hotel Carrasco... En primer término en la finca de Bompland, donde también estuvieron guarecidos varios tupamaros, se incautó documentación que irreversiblemente prueba la presencia de gente del MLN en tal lugar y a ello se añade que allí estaba uno de los bolsos en que los asaltantes cargaron varios de los millones arrebatados de la tesorería del casino.",
        title1: "“Muchas Dudas Disipadas”",
        description1:
          "En el apresuramiento de la huida de..., que se enteró... ésta no pudo destruir ciertas pruebas, que ahora podemos señalar disiparon muchas dudas acerca de para quienes colaboró en el estudio del asalto del Casino,... El M.L.N. no puede salir en estos momentos a librar una lucha armada, que sería reducida rápidamente, por ello prefieren: 1º) acrecentar el número de integrantes de las células; 2º) obtener la mayor cantidad de armamento poderoso; 3º) estudiar minuciosamente la estrategia de una futura acción; 4º) consumar las consabidas “expropiaciones” que le aportan dinero para mantener en la clandestinidad a los grupos de acción directa y realizar viajes de estudio y contactos al extranjero; 5º) recoger la mayor cantidad de información sobre todo en lo que tiene que ver con nuestro país; 6º) ir colocando infiltrados en instituciones y lugares claves; 7º) realizar ciertas acciones espectaculares que, aunque no tengan finalidades directas dentro de sus planes terroristas, permitan promover el movimiento para que la población considere que los tupamaros están por todos lados y que su operar no decae en ningún momento.",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-hotel-carrasco-montevideo/n_11.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/casino-hotel-carrasco-montevideo/n_12.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("December 13, 1968"),
        title:
          "“ACLARADO EL ATRACO DEL CASINO CARRASCO. TRES DETENIDOS DECLARARON QUE EN LA CHACRA HABÍA UN PORTAFOLIOS CON $ 750.000”",
        description:
          "Procesados ya siete de los ocho Tupamaros capturados en una modesta chacra ubicada en los alrededores de Pando... Los propios detenidos, que denunciaron ayer la existencia en los ranchos 750.000 pesos, han señalado que en el curso de los últimos meses hurtaron a la policía siete metralletas, de las cuales se recuperaron dos de la chacra de Pando… habría confesado su participación en el atraco al Casino Carrasco, manifestando que fue él la persona encargada de organizar el “comando” y planificar la acción. El mismo se habría encargado de desarmar al Guardia de la Metropolitana y también a él se le habría disparado accidentalmente la metralleta quitada a dicho funcionario. Posteriormente se habrían alejado del lugar en el automóvil hurtado, cambiando de vehículo luego de algunos minutos de marcha.",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-hotel-carrasco-montevideo/n_13.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/casino-hotel-carrasco-montevideo/n_14.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“A fines de noviembre el MLN asalta el Casino de Carrasco, a mí me correspondió la planificación y organización del asalto, y decidí tomar personalmente la dirección del operativo, que se desarrolla en forma impecable. Luego de dificultades iniciales, surgidas cuando la Policía descubre unas semanas antes un relevamiento fotográfico del Casino en un local allanado, y la medida debe diferirse hasta que la guardia policial desaparece nuevamente, fue posible cumplir impecablemente el objetivo. Habíamos hecho un exhaustivo relevamiento de la zona, control de horarios y movimientos de empleados y de guardia.</p>
          <p>El asalto rindió un fruto de seis millones de pesos, que se repartieron $ 700.000 a cada columna, y el resto va para el Ejecutivo...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Autobiografía de Amodio Pérez",
          place: "Montevideo - Uruguay",
          edition: "Editorial Arca",
          pages: "pág. 35",
          author: "Pérez",
        },
        {
          fragment: `<p>“A principios de ese año, las finanzas del MLN estaban en rojo: En noviembre del 68 se había hecho el asalto al Hotel Casino Carrasco, de donde se llevaron 6.300.000 pesos que no dieron para nada...”.</p>
          <p>El asalto rindió un fruto de seis millones de pesos, que se repartieron $ 700.000 a cada columna, y el resto va para el Ejecutivo…”.</p>`,
          year: new Date("2007-1-1"),
          name: "Cero a la izquierda. Una biografía de Jorge Zabalza",
          place: "Montevideo - Uruguay",
          edition: "Letraeñe Ediciones",
          pages: "pág. 69",
          author: "Leicht",
        },
        {
          fragment: `<p>“... J .M. –.... ¿Quién era o es en realidad Nannete?.</p>
          <p>H. A. P. -Es Teresa Labrocca, la compañera Lía... Ya me habían integrado al Ejecutivo y con Gavino Beto Falero decidimos que el estudio de la zona lo haría yo. Tenemos que ir al Casino de Carrasco...</p>
          <p>... Estuvimos horas en su casa hasta que hicimos un horario que cubría las posibles llegadas de los tiras al casino, horarios que nos dividimos entre Lía y dos colaboradores de Alicia, Julia Armand Ugón,..., y yo. Lía era muy audaz..., consiguió ubicar la escalera que conducía al garaje por el que teníamos prevista la entrada al edificio y después la escalera que nos llevaría a la sala del recuento de dinero...</p>
          <p>Lía pasó a la clandestinidad a raíz del asalto al Casino...”.</p>`,
          year: new Date("2015-1-1"),
          name: "Palabra de Amodio. La otra historia de los Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Plazas",
          pages: "págs. 189-191",
          author: "Marius",
        },
      ],
    },
  },
  {
    date: new Date("February 18, 1969"),
    title: "Casino San Rafael Maldonado",
    slug: "casino-san-rafael-maldonado",
    type: "robo-dinero",
    moneyTheft: { uyu: 50000000, usd: 200800 },
    newsPapers: [
      {
        name: 'Diario "El País" (Página 6)',
        date: new Date("February 19, 1969"),
        title: "“CASINO: EN PLENO DÍA OPERARON LOS ASALTANTES”",
        description:
          "... Actuando con rapidez, pero sin nervios los siete individuos redujeron enseguida al personal. Todos fueron maniatados con alambre y encerrados, mientras el tesorero... era obligado a dirigirse a la “Caja de Conversión” y abrir las puertas del tesoro. Del mismo, los atracadores retiraron una enorme cantidad de dinero, que en los primeros momentos se estimó en cuarenta millones de pesos... Aparece una foto a cuyo pie dice: “La caja: de aquí salió gran parte del dinero robado”.",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-san-rafael-maldonado/n_1.jpg",
            alt: "noticia publicada por el diario El País",
          },
          {
            type: "página diario completa",
            src: "/casino-san-rafael-maldonado/n_2.jpg",
            alt: "página diario completa publicada por el diario El País",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("February 19, 1969"),
        title:
          "“ROBARON 50 MILLONES. LLEVABAN GRANADAS DE MANO EN LA CAMIONETA. BORRARON LOS RASTROS”",
        description:
          "Funcionarios del Casino sindican a 2 tupamaros. Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-san-rafael-maldonado/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/casino-san-rafael-maldonado/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 13)',
        date: new Date("February 19, 1969"),
        title: "“UN MISMO TUPAMARO EN LOS ASALTOS”",
        description:
          "... (“Ernesto”) y... (“Jaime”) fueron identificados como dos de los integrantes del comando tupamaro que consumó el atraco millonario contra una financiera del Banco de Crédito,... Los dos pertenecen al “Comando Líber Arce”... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-san-rafael-maldonado/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/casino-san-rafael-maldonado/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("February 19, 1969"),
        title: "“COMANDO TUPAMARO”",
        description:
          "Punta del Este... Varios fundamentales elementos de juicio permiten presumir que el fabuloso asalto contra el Casino de San Rafael fue consumado por un comando del Movimiento de Liberación Nacional (Tupamaros)... Aparece dibujo con el siguiente comentario: “... el instante en que los pistoleros roban los casi 50 millones de pesos en el Casino...”.",
        title1: "“SIETE HOMBRES EN 10’¬ ROBARON 50 MILLONES”",
        description1:
          "Portaban poderosas armas automáticas. Punta del Este... Casi cincuenta millones de pesos fue la suma total de lo robado ayer en el Casino del Hotel San Rafael por los siete audaces pistoleros que cometieron en ese establecimiento el asalto récord en los anales policiales del país... Aparece croquis a cuyo pie dice: “... muestra la disposición de los distintos ambientes en que se desarrolló el espectacular golpe...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-san-rafael-maldonado/n_7.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/casino-san-rafael-maldonado/n_7.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("February 19, 1969"),
        title: "“PERPETRÓSE AYER EL MAYOR ASALTO DE NUESTRA HISTORIA”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-san-rafael-maldonado/n_8.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/casino-san-rafael-maldonado/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (en Portada)',
        date: new Date("February 19, 1969"),
        title: "“ASALTO RÉCORD: SE LLEVARON 43 MILLONES DEL CASINO SAN RAFAEL”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-san-rafael-maldonado/n_9.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/casino-san-rafael-maldonado/n_10.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 5)',
        date: new Date("February 19, 1969"),
        title: "“¿EL ASALTO FUE ENTREGADO?”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-san-rafael-maldonado/n_11.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/casino-san-rafael-maldonado/n_12.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("February 22, 1969"),
        title: "“COMANDO DE TUPAMAROS SE ATRIBUYEN EL ASALTO”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-san-rafael-maldonado/n_13.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/casino-san-rafael-maldonado/n_14.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("March 16, 1969"),
        title: "“CONFESÓ AMPLIAMENTE EL ENTREGADOR DEL CASINO”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-san-rafael-maldonado/n_15.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/casino-san-rafael-maldonado/n_16.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“El presupuesto del MLN terminó por equilibrarse cuatro días después, cuando el 18 de febrero siete tupamaros, desde entonces conocidos por la prensa como “los siete hombres de oro” se alzaron con el equivalente a 220 mil dólares... Sus nombres: Raúl Sendic, Nicolás Estévez, Lucas Mansilla, César Long, Félix Bentín, Ataliva Castillos y Jorge Zabalza.
          Cerca de las 5 de la tarde, el tesorero del casino San Rafael, Manuel Sunhary, caminaba hacia su casa acompañado por dos amigos…. se les apersonaron un policía uniformado y otro de particular que se identificó como agente de Investigaciones. Eran Ataliva y Mansilla...</p>
          <p>... Sunhary viajaba en la cabina de la camioneta junto a siete tupamaros. El tesorero tardó poco tiempo en percatarse de que la camioneta no iba hacia la seccional… y ahí nomás empezaron las quejas, acalladas con una Luger 7.65 que Jorge sacó a relucir mientras un manotazo de Bentín surgía desde atrás...</p>
          A todo esto Jorge -... -estacionó la camioneta en la puerta lateral del San Rafael. Bajaron Mansilla, Ataliva y Sendic que golpearon la puerta insistentemente hasta que apareció el sereno…, una limpiadora, Tomasa Méndez, aseaba el local… Mansilla,..., puso el pie contra la puerta y lo encañonó… la limpiadora, presa de una crisis nerviosa, se puso a pedir por sus hijos. Entonces habló Sendic.</p>
          <p>- Por favor Doña Tomasa, serénese… esto lo hacemos por sus hijos, por nuestros hijos y por todos.</p>
          ... Con tranquilidad, mientras uno quedaba vigilando a los empleados, los otros se dirigieron hasta la caja, que fue abierta sin dificultad, y comenzaron a cargar el dinero en bolsas de arpillera...</p>
          <p>... El 14 de marzo fue procesado Horacio Griecco, subjefe de sala del casino San Rafael, quien confesó haber oficiado de entregador...</p>
          <p>... Los 54 millones de pesos del San Rafael se repartieron entre las distintas columnas del MLN. Se comenzó así a montar una compleja y eficiente infraestructura de guerra. Una verdadera red de locales en la periferia de Montevideo, que iban desde “cárceles del pueblo”, hasta hospitales de campaña, enterraderos, laboratorios, fábricas de explosivos, talleres, sistemas de comunicación, así como imprentas y mimeógrafos...”.</p>`,
          year: new Date("2007-1-1"),
          name: "Cero a la izquierda. Una biografía de Jorge Zabalza",
          place: "Montevideo - Uruguay",
          edition: "Letraeñe Ediciones",
          pages: "págs. 70-73",
          author: "Leicht",
        },
        {
          fragment: `<p>“El 18 de febrero se había concretado el plan diseñado en la casa balnearia El Limbo, donde Mujica y el Flaco David habían pasado unos días de veraneo clandestino: Sendic, el joven Jorge Zabalza, Nicolás Estévez, Lucas Mansilla, César Long, Félix Bentín y Ataliva Castillos se habían llevado doscientos veinte mil dólares del casino San Rafael, de Punta del Este... actuaron en complicidad con el subjefe del casino, Horacio Griecco.</p>
          <p>El dinero que se repartió entre las distintas columnas del MLN dio un gran respiro financiero a la organización y sirvió para montar una buena infraestructura de base para la lucha revolucionaria”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "págs. 383-384",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("October 08, 1969"),
    title:
      "Ciudad de Pando: Banco de la República Oriental del Uruguay - Caja Obrera - Pan de Azúcar e Ítalo Americano",
    slug: "ciudad-de-pando",
    type: "robo-dinero",
    moneyTheft: { uyu: 50000000, usd: 200800 },
    seeAlso: [
      {
        href: "/asesinatos/agente-ruben-zembrano-y-chofer-julio-techera",
        text: "Carlos Burgeño y Sgto. (RP) Enrique Fernández",
      },
    ],
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("October 09, 1969"),
        title: "“VENDAVAL DE SANGRE Y FUEGO SE ABATIÓ AYER SOBRE PANDO”",
        description:
          "Durante veinticinco minutos un vendaval de fuego se abatió ayer sobre Pando... es el relato cronológico... en el que se consumó “el asalto a la ciudad”. Pando...",
        images: [
          {
            type: "noticia publicada",
            src: "/ciudad-de-pando/n_6.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/ciudad-de-pando/n_7.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("March 09, 1970"),
    title: "Unión de Bancos del Uruguay sucursal Maroñas",
    slug: "union-de-bancos-del-uruguay-sucursal-maronas",
    type: "robo-dinero",
    moneyTheft: { uyu: 11000000, usd: 44100 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("March 09, 1970"),
        title: "“SIMULARON REALIZAR UN ALLANAMIENTO”",
        description:
          "...logrando apoderarse de... once millones de pesos... Desvalijan el Tesoro... Los tres individuos sacaron a relucir armas de fuego... amenazaron de muerte a los dos bancarios... obligaron al gerente a abrir el tesoro... maniataron al gerente general y al gerente con esposas metálicas de fabricación casera... Aparece foto de...",
        images: [
          {
            type: "noticia publicada",
            src: "/union-de-bancos-del-uruguay-sucursal-maronas/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/union-de-bancos-del-uruguay-sucursal-maronas/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("March 09, 1970"),
        title:
          "“SACARON DE SU CASA AL GERENTE Y AL CONTADOR PARA ABRIR EL TESORO”",
        description:
          "...expresan a Marín Durán que debe acompañarlos hasta la sucursal bancaria, ya que se está haciendo una investigación... le indican que debe dirigirse primero, a la casa del contador jefe de la misma institución bancaria, Carlos Coitiño Gavay… emprenden viaje directo a la Sucursal del Banco Español y Territorial en 8 de Octubre y Gobernador Vigodet... una vez adentro sacaron armas. La “investigación” se había transformado en un asalto...",
        images: [
          {
            type: "noticia publicada",
            src: "/union-de-bancos-del-uruguay-sucursal-maronas/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/union-de-bancos-del-uruguay-sucursal-maronas/n_4.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“El aparato armado, Chola, ha tenido cierto desarrollo y se ha reestructurado.</p>
          <p>El presupuesto regular ha subido.</p>
          <p>Hay que encarar nuevamente el problema de las finanzas generales. Queda dinero para pocos meses. Es necesario realizar en breve una nueva expropiación...</p>
          <p>Las llaves están en manos del gerente General y del Cajero...</p>
          <p>Durante el análisis del operativo Aguilar consideró distintas posibilidades y llegó finalmente a la conclusión de que la manera más sencilla era tomar las casas respectivas y hacerse acompañar hasta el Banco por las personas poseedoras de las llaves.</p>
          <p>Martín y Arturo se encargarán de cubrir la parte que corresponde al Cajero.</p>
          <p>Batlle, Adam, Pablo, Gringa, cubrirán la parte correspondiente al Gerente.</p>
          <p>El equipo que comienza la acción, el Nº 1, avisa al Centro que ya están en marcha. Van cuatro compañeros en el coche, dos quedarán en la casa y dos vendrán con el bancario.</p>
          <p>... se le hace abrir al Gerente la puerta… asegurándose que tiene las llaves correspondientes, se le sube al auto...</p>
          <p>Los que han quedado en la casa tranquilizan a la familia… La mujer está un poco nerviosa...</p>
          <p>El otro equipo, el Nº 2, recibe la indicación de comenzar su parte...</p>
          <p>El Cajero tras un pretexto sale y cuando ve de qué se trata comienza a protestar, se le dice que no hay alternativa, que tiene que ir con la llave...</p>
          <p>Entra un compañero con el Gerente...</p>
          <p>Casi enseguida llegan los otros dos compañeros con el Cajero,...</p>
          <p>Dos compañeros se abocan a atar a los bancarios y otros dos, ya con las llaves en su poder, abren la caja y comienzan a llenar los bolsos...”.</p>`,
          year: new Date("2004-1-1"),
          name: "Acción directa anarquista. Una historia de FAU",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Recortes",
          pages: "págs. 336-339",
          author: "Mechoso",
        },
      ],
    },
  },
  {
    date: new Date("March 30, 1970"),
    title: "Banco Francés e Italiano sucursal Tres Cruces",
    slug: "banco-frances-e-italiano-sucursal-tres-cruces",
    type: "robo-dinero",
    moneyTheft: { uyu: 5000000, usd: 20050 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("March 30, 1970"),
        title: "“ROBARON DOS AUTOS PARA DAR EL GOLPE”",
        description:
          "Recio tiroteo tras el asalto. Una suma superior a los cinco millones en efectivo... atracaron esta mañana la sucursal Tres Cruces del Banco Francés e Italiano... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-frances-e-italiano-sucursal-tres-cruces/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-frances-e-italiano-sucursal-tres-cruces/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 8)',
        date: new Date("March 30, 1970"),
        title:
          "“CONSPIRADORES ATRACAN UN BANCO ANTES DE ABRIR: QUINCE MILLONES”",
        description:
          "Ayer de mañana-más o menos a las 9 y 30-a la sucursal “Tres Cruces” del Banco Francés-Italiano, ubicada en... 18 de Julio y Duvimioso Terra… se pusieron los mazos... en los bolsillos... huyeron y cruzaron la calle... una señorita había estacionado, adelante, una camioneta... el motor fallaba. Uno de los delincuentes empujó la camioneta... el agente Silva-salió del banco...-le hizo unos cinco disparos… los delincuentes respondieron con tres armas... la camioneta arrancó… Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-frances-e-italiano-sucursal-tres-cruces/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-frances-e-italiano-sucursal-tres-cruces/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("April 07, 1970"),
    title: "Frigorífico Carrasco",
    slug: "frigorifico-carrasco",
    type: "robo-dinero",
    moneyTheft: { uyu: 300000, usd: 1200 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 17)',
        date: new Date("April 07, 1970"),
        title: "“GRUPO SEDICIOSO LLAMADO “FARO” ASALTÓ EL FRIGORÍFICO “CASTRO”",
        description:
          "...pertenecientes a una organización ilegal no muy conocida en el país habrían sido los autores del asalto a las oficinas del frigorífico Castro... se llevaron 300.000 pesos y documentación... luego de reducir con metralletas y revólveres a seis empleados y el propietario... Mario Castro Cerdeiro... cinco hombres y una mujer... al local ubicado en Agraciada y Galicia...",
        images: [
          {
            type: "noticia publicada",
            src: "/frigorifico-carrasco/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/frigorifico-carrasco/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("June 06, 1970"),
    title: "Unión de Bancos del Uruguay sucursal Cordón",
    slug: "union-de-bancos-del-uruguay-sucursal-cordon",
    type: "robo-dinero",
    moneyTheft: { uyu: 300000, usd: 20070 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 22)',
        date: new Date("June 16, 1970"),
        title: "“SECUESTRARON A DOS EMPLEADOS PARA QUE ABRIERAN EL TESORO”",
        description:
          "Usaban fusiles automáticos de los robados a la Marina. Casi siete millones de pesos constituyeron el botín de los elementos sediciosos que... asaltaron la sucursal Cordón de UBUR luego de secuestrar en sus respectivos domicilios a un gerente y al subtesorero de esa dependencia bancaria... Una vez en el banco, con sus rehenes, dominaron a éstos y a otros dos empleados, con fusiles automáticos M-15... Aparece plano y foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/union-de-bancos-del-uruguay-sucursal-cordon/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/union-de-bancos-del-uruguay-sucursal-cordon/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 22)',
        date: new Date("June 16, 1970"),
        title: "“CONSPIRADORES ROBARON CASI 7 MILLONES: DOS SECUESTROS”",
        description:
          "... habrían participado unas diez personas, entre hombre y mujeres, elementos integrantes de una conocida asociación para atentar contra la Constitución, secuestraron a dos jerarcas bancarios y robaron de la entidad de la que ambos son funcionarios, una suma cercana a los siete millones de pesos... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/union-de-bancos-del-uruguay-sucursal-cordon/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/union-de-bancos-del-uruguay-sucursal-cordon/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("June 22, 1970"),
    title: "Banco Palestino sucursal Andes",
    slug: "banco-palestino-sucursal-andes",
    type: "robo-dinero",
    moneyTheft: { uyu: 18000000, usd: 72180 },
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("June 23, 1970"),
        title: "“ROBARON 18 MILLONES DEL BANCO PALESTINO”",
        description:
          "... Anoche se consumó un sensacional robo de dieciocho millones de pesos a la sucursal Andes del Banco Palestino... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-palestino-sucursal-andes/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-palestino-sucursal-andes/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("June 16, 1970"),
        title: "“SECUESTRAN AL GERENTE Y ÉSTE ABRIÓ LA CAJA”",
        description:
          "Un grupo de sediciosos se llevó anoche del Banco Palestino Uruguayo de la calle Andes y San José, $16.546.750, tras secuestrar cuando se dirigía a su domicilio, al Gerente Julio Gril... Golpe totalmente “entregado”... es evidente que el golpe fue entregado ya que los atracadores hasta poseían llaves del banco que sólo pudieron lograr mediante el concurso de un “entregador” que además brindó detalles minuciosos a los conspiradores para consumar el golpe con total éxito... Este asalto permitió confirmar, una vez más, que los sediciosos poseen perfectos medios de comunicaciones...",
        title1: "“EL NEGOCIO DE LA SEDICIÓN: 200 MILLONES EN SEIS MESES”",
        description1:
          "La sedición es el mejor negocio del país: con el golpe de ayer en el Banco Palestino los sediciosos alcanzaron un envidiable superávit de 200 millones de pesos en el primer semestre de 1970. Esta suma incluye tan sólo los golpes en metálico; si se añaden los hurtos de armas y automóviles… la cifra sobrepasa con creces los 250 millones de pesos...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-palestino-sucursal-andes/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-palestino-sucursal-andes/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("June 30, 1970"),
    title: "Banco de Londres y América del Sud sucursal Sayago",
    slug: "banco-de-londres-y-america-del-sud-sucursal-sayago",
    type: "robo-dinero",
    moneyTheft: { uyu: 14000000, usd: 56150 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 22)',
        date: new Date("June 30, 1970"),
        title: "“SE LLEVAN 14 MILLONES SIN DEJARLOS NI ABRIR”",
        description:
          "Casi catorce millones de pesos consiguieron robar hoy seis sediciosos que dieron un audaz golpe en el Banco de Londres y América del Sud sucursal Sayago... Secuestran… Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-londres-y-america-del-sud-sucursal-sayago/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-de-londres-y-america-del-sud-sucursal-sayago/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("July 01, 1970"),
        title: "“AUDAZ ROBO A BANCO: CASI 13 MILLONES”",
        description:
          "Cerca de trece millones de pesos fueron robados antes del mediodía de ayer, de la sucursal Sayago del Banco de Londres y América del Sur (Camino Ariel 4801, esquina Av. Sayago)... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-londres-y-america-del-sud-sucursal-sayago/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-de-londres-y-america-del-sud-sucursal-sayago/n_3.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("June 26, 1970"),
    title: "Foto Martín",
    slug: "foto-martin",
    type: "robo-dinero",
    moneyTheft: { uyu: 0, usd: 4000 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("June 26, 1970"),
        title:
          "“CINCO SEDICIOSOS ASALTARON HOY UN COMERCIO DE FOTOGRAFÍA Y HURTARON VALIOSO EQUIPO TÉCNICO”",
        description:
          "Máquinas fotográficas, proyectores de dispositivos y filmadoras por un valor superior al millón de pesos constituyeron el botín de los cinco sediciosos que asaltaron esta mañana una firma comercial ubicada en la proa de Agraciada, Uruguay y Paraguay...",
        images: [
          {
            type: "noticia publicada",
            src: "/foto-martin/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/foto-martin/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("July 20, 1970"),
    title: "Otonello S. A.",
    slug: "otonello-sa",
    type: "robo-dinero",
    moneyTheft: { uyu: 2000000, usd: 8020 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("July 20, 1970"),
        title:
          "“LOS DIEZ DELINCUENTES ARENGARON A LOS VEINTITRÉS EMPLEADOS MIENTRAS ROBABAN”",
        description:
          "Diez sediciosos..., entre éstos, dos mujeres, asaltaron esta tarde la fábrica de productos porcinos Ottonello Hnos. S.A.,... Los integrantes del movimiento clandestino se apoderaron de 2 millones de pesos de varias cajas de la empresa y una pistola “Luger”, calibre 9 milímetros...",
        images: [
          {
            type: "noticia publicada",
            src: "/otonello-sa/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/otonello-sa/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 14)',
        date: new Date("July 21, 1970"),
        title: "“FACCIOSOS ROBAN EN UNA FÁBRICA DOS MILLONES”",
        description:
          "... ocho hombres y dos mujeres integrantes de una organización ilegal asaltaron la fábrica de productos porcinos Ottonello Hnos., (Avda.Gral. Flores 3715) y huyeron con una suma aproximada a los dos millones de pesos... Robaron vehículos. El golpe,... fue llevado a cabo con la participación de por lo menos dos automotores robados... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/otonello-sa/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/otonello-sa/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("July 22, 1970"),
    title: "Sociedad de Bancos sucursal Reducto",
    slug: "sociedad-de-bancos-sucursal-reducto",
    type: "robo-dinero",
    moneyTheft: { uyu: 2500000, usd: 10050 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("July 22, 1970"),
        title: "“DOS MILLONES Y MEDIO SE LLEVAN LOS ASALTANTES”",
        description:
          "En momentos de abrir sus puertas al público fue asaltada la sucursal de la Sociedad de Bancos ubicada en Bella Vista 1605... se llevaron $ 2.500.000 y tras dominar al policía de guardia, le arrebataron su arma de reglamento, la gorra y la chapa de identificación...",
        images: [
          {
            type: "noticia publicada",
            src: "/sociedad-de-bancos-sucursal-reducto/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/sociedad-de-bancos-sucursal-reducto/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 11)',
        date: new Date("July 23, 1970"),
        title: "“FACCIOSOS ASALTARON BANCO: $ 2.200.000”",
        description:
          "... fue asaltada, ayer, la sucursal Reducto de la Sociedad de Bancos, ex Banco del Trabajo Ítalo-Americano y de Galicia, ubicada en Bella Vista 1605 esquina San Martín... se identificaron como miembros de una conocida organización ilegal, robaron la suma aproximada a los $ 2.200.000... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/sociedad-de-bancos-sucursal-reducto/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/sociedad-de-bancos-sucursal-reducto/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("July 23, 1970"),
    title: "Electro Confort S. A.",
    slug: "electro-confort",
    type: "robo-dinero",
    moneyTheft: { uyu: 60000, usd: 250 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("July 22, 1970"),
        title: "“FACCIOSOS CONSUMARON EN LA TARDE UN AUDAZ GOLPE”",
        description:
          "Aumentó la impresionante serie de hurtos y rapiñas en toda la ciudad. De entre ocho y diez personas que se dieron a conocer como conspiradores, asaltaron ayer de tarde la firma Electro Confort S.A. de San Martín 3723 y huyeron tras robar $ 60.000, documentos comerciales... y otros efectos diversos...",
        images: [
          {
            type: "noticia publicada",
            src: "/electro-confort/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/electro-confort/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("July 25, 1970"),
    title: "CUOPAR S.A.",
    slug: "cuopar-sa",
    type: "robo-dinero",
    moneyTheft: { uyu: 4700000, usd: 19050 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 19)',
        date: new Date("July 31, 1970"),
        title:
          "“SEDICIOSOS DE FARO ASALTARON CUOPAR LLEVÁNDOSE $ 4.700.000 DE LOS SUELDOS”",
        description:
          "... dos jóvenes adolescentes-apoyados por otro cuatro delincuentes-asaltaron esta mañana a la textil CUOPAR S.A. de donde se llevaron $ 4.700.000. Luego de reducir al portero y un cuidador, los atracadores se dirigieron a las Oficinas de la fábrica encañonando a 15 funcionarios-entre ellas dos mujeres-... A fin de intimidarles les hicieron dos disparos... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/cuopar-sa/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/cuopar-sa/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("August 20, 1970"),
    title: "Banco de Cobranzas sucursal Colón",
    slug: "banco-de-cobranzas-sucursal-colon",
    type: "robo-dinero",
    moneyTheft: { uyu: 2000000, usd: 8020 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("August 20, 1970"),
        title: "“EL ASALTO DE HOY TAMBIÉN FUE PERPETRADO POR CONSPIRADORES”",
        description:
          "Cinco conspiradores asaltaron en las primeras horas de esta tarde la sucursal Colón del Banco de Cobranzas, llevándose dos millones de pesos...",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-cobranzas-sucursal-colon/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-de-cobranzas-sucursal-colon/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("August 21, 1970"),
        title: "“DOS MILLONES MÁS EL REVÓLVER DEL POLICÍA”",
        description: "Asaltan otro banco... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-cobranzas-sucursal-colon/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-de-cobranzas-sucursal-colon/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("August 24, 1970"),
    title: "El Mago S. A.",
    slug: "el-mago",
    type: "robo-dinero",
    moneyTheft: { uyu: 17200000, usd: 32080 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 22)',
        date: new Date("August 24, 1970"),
        title: "“MÁS DE SIETE MILLONES SE LLEVARON HOY DE EL MAGO”",
        description:
          "Entre siete y ocho millones de pesos se llevaron los conspiradores, de los escritorios de la firma  “El Mago S.A.” de Colonia 936 que fueron asaltados pasados al mediodía de hoy por cinco integrantes de la conocida organización ilegal... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/el-mago/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/el-mago/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("November 12, 1970"),
    title: "Caja Nacional de Préstamos Pignoraticios",
    slug: "caja-nacional-de-prestamos-pignoraticios",
    type: "robo-dinero",
    moneyTheft: { uyu: 2000000000, usd: 8020000 },
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("November 13, 1970"),
        title:
          "“TRIPLE SECUESTRO Y ROBO DE JOYAS A CAJA DE EMPEÑOS POR SUMA FABULOSA”",
        description:
          "En una gigantesca operación en la que está relacionado el secuestro y hurto, desconocidos asaltaron la Caja Nacional de Préstamos Pignoraticios ubicada en Uruguay y Julio Herrera y Obes de donde sustrajeron alhajas y efectos por una suma que se calcula multimillonaria. Autores del gigantesco robo 8 individuos y cuatro mujeres, quienes se dirigieron hacia los domicilios del Subgerente de la Caja... del Jefe del Tesoro... y del Adscripto a la Gerencia... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/caja-nacional-de-prestamos-pignoraticios/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/caja-nacional-de-prestamos-pignoraticios/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("November 14, 1970"),
        title: "“EL ROBADO ES EXCLUSIVAMENTE EL PUEBLO”",
        description:
          "Miles, decenas de miles de personas, sufrirán las consecuencias del fácil, aunque fabuloso robo de alhajas y dinero, al departamento Pignoraticio de la Caja Nacional de Ahorros y Descuentos... Aparece foto a cuyo pie dice: “... el grueso de la gente perjudicada por el robo “Prestamos Pignoraticios”, es de condición modesta…...",
        images: [
          {
            type: "noticia publicada",
            src: "/caja-nacional-de-prestamos-pignoraticios/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/caja-nacional-de-prestamos-pignoraticios/n_4.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 3)',
        date: new Date("November 14, 1970"),
        title: "“ASCIENDE A 2.000 MILLONES EL BOTÍN QUE SE LLEVARON”",
        description: "... Desarrollo del golpe... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/caja-nacional-de-prestamos-pignoraticios/n_5.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/caja-nacional-de-prestamos-pignoraticios/n_6.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("July 05, 1971"),
        title: "“ESTÁ PRESO EL ENTREGADOR DEL ROBO A LA CAJA DE EMPEÑOS”",
        description:
          "Es el sedicioso capturado el miércoles... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/caja-nacional-de-prestamos-pignoraticios/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/caja-nacional-de-prestamos-pignoraticios/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("November 28, 1971"),
        title:
          "“CAYÓ LA MUJER DEL ENTREGADOR DEL ROBO A LA CAJA DE PRÉSTAMOS PIGNORATICIOS”",
        description:
          "En la ciudad de Minas fue capturada..., la esposa de... el entregador del multimillonario asalto contra el Departamento de Préstamos Pignoraticios... la tupamara capturada... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/caja-nacional-de-prestamos-pignoraticios/n_9.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/caja-nacional-de-prestamos-pignoraticios/n_10.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("November 30, 1970"),
    title: "Acodike S. A.",
    slug: "acodike",
    type: "robo-dinero",
    moneyTheft: { uyu: 0, usd: 8020 },
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 8)',
        date: new Date("November 30, 1970"),
        title: "“ATRACAN “ACODIKE” Y ATENTAN CONTRA EMPRESARIOS Y BOITES”",
        description: "Comunicado... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/acodike/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/acodike/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("July 15, 1971"),
    title: "Banco de la República Oriental del Uruguay sucursal Tacuarembó",
    slug: "banco-de-la-republica-oriental-del-uruguay-sucursal-tacuarembo",
    type: "robo-dinero",
    moneyTheft: { uyu: 82000000, usd: 339750 },
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("July 16, 1971"),
        title:
          "“HAY SEIS DETENIDOS EN RELACIÓN AL FABULOSOS ROBO DE LOS 82 MILLONES”",
        description:
          "... Seis hombres armados hasta los dientes con metralletas y pistolas de grueso calibre, coparon... el moderno edificio... dominaron a una treintena de empleados y se alzaron con 82 millones de pesos. Fugaron en una camioneta propiedad de uno de los funcionarios del Banco... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-la-republica-oriental-del-uruguay-sucursal-tacuarembo/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/banco-de-la-republica-oriental-del-uruguay-sucursal-tacuarembo/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("July 20, 1971"),
        title:
          "“UN SUBGERENTE BANCARIO ENTREGÓ EL FABULOSO ROBO DE TACUAREMBÓ”",
        description:
          "..., estudiante de Medicina... se confesó cerebro y autor material del robo perpetrado el último jueves contra la sucursal local del Banco de la República... fue detenido en el domicilio de... Subgerente de la sucursal del Banco Hipotecario… quien admitió... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-la-republica-oriental-del-uruguay-sucursal-tacuarembo/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-de-la-republica-oriental-del-uruguay-sucursal-tacuarembo/n_3.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("July 20, 1971"),
        title: "“RECUPERARON $ 3.572.500 DE LO ROBADO DEL BANCO DE TACUAREMBÓ”",
        description:
          "Tacuarembó. Del fabuloso monto de dinero robado... la policía logró recuperar la suma de $ 3:572.500... se encontraba dentro de un portafolio oculto debajo de un piso de madera... de la finca que residía... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-la-republica-oriental-del-uruguay-sucursal-tacuarembo/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-de-la-republica-oriental-del-uruguay-sucursal-tacuarembo/n_5.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 4)',
        date: new Date("June 24, 1972"),
        title: "“ACLARARON EL ROBO DEL BROU DE TACUAREMBÓ”",
        description:
          "Caen más sediciosos. El robo del que fue objeto el 15 de julio de 1971 la sucursal del Banco República de Tacuarembó ha quedado totalmente esclarecido... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "/banco-de-la-republica-oriental-del-uruguay-sucursal-tacuarembo/n_6.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/banco-de-la-republica-oriental-del-uruguay-sucursal-tacuarembo/n_7.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("November 15, 1971"),
    title: "Casino Parque Hotel Montevideo",
    slug: "casino-parque-hotel-montevideo",
    type: "robo-dinero",
    moneyTheft: { uyu: 17250000, usd: 69150 },
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("November 16, 1971"),
        title: "“ASALTO ENTREGADO AL CASINO: $ 17:250.000”",
        description:
          "Cinco delincuentes asaltaron ayer el Casino Municipal del Parque Hotel y lograron huir tras reducir uno a uno a más de cien funcionarios, con un suculento botín de pesos 17:250.000... uno de los asaltantes le golpeó de improviso en la boca con la culata de su revólver... Aparecen fotos y croquis.",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-parque-hotel-montevideo/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/casino-parque-hotel-montevideo/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Acción" (Página 7)',
        date: new Date("November 16, 1971"),
        title:
          "“ESPECTACULAR ASALTO AL CASINO PARQUE HOTEL: USARON DISFRACES; GOLPE ENTREGADO”",
        description:
          "Una suma ligeramente superior a los 17 millones de pesos fue el botín obtenido... por media docena de desconocidos que penetraron al Casino Municipal del Parque Hotel... Aparece foto.",
        images: [
          {
            type: "noticia publicada",
            src: "/casino-parque-hotel-montevideo/n_3.jpg",
            alt: "noticia publicada por el diario El Acción",
          },
          {
            type: "página diario completa",
            src: "/casino-parque-hotel-montevideo/n_4.jpg",
            alt: "página diario completa publicada por el diario El Acción",
          },
        ],
      },
    ],
  },
  {
    date: new Date("January 3, 1966"),
    title: "Conferencia marxista en La Habana, Cuba",
    slug: "conferencia-marxista-en-la-habana-cuba",
    type: "otras-acciones",
    newsPapers: [
      {
        name: 'Diario "El Popular" (Página 10)',
        date: new Date("January 4, 1966"),
        title:
          "“ACTO CONCRETO DE SOLIDARIDAD DE LOS PUEBLOS DE TRES CONTINENTES. ESCRIBE LUIS PEDRO BONAVITA PRESIDENTE DE LA DELEGACIÓN URUGUAYA A LA TRICONTINENTAL”",
        description:
          "En la izquierda nacional uruguaya a través del Frente Izquierda de Liberación, la convocatoria para la Conferencia de la Tricontinental a realizarse en La Habana en el correr de la primera semana de enero, encontró desde el primer momento, la más calurosa acogida. Aparece foto a cuyo pie dice: “...: lo que hemos visto es como el extraordinario hecho internacional de la Conferencia Tricontinental se proyecta sobre nuestra problemática nacional”.",
        images: [
          {
            type: "noticia publicada",
            src: "/conferencia-marxista-en-la-habana-cuba/n_1.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/conferencia-marxista-en-la-habana-cuba/n_2.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 10)',
        date: new Date("January 8, 1966"),
        title:
          "“URUGUAY OCUPA LA SECRETARÍA DE LA COMISIÓN POLÍTICA. CUBA: UN SOLO ORGANISMO Y PRESIDIDO POR VIETNAM. VIBRANTE INTERVENCIÓN DEL CAPITÁN CIENFUEGOS EN LA PLENARIA”",
        description:
          "La revolución es posible. Ejemplo de Cuba. Favorable situación para la liberación...",
        title1: "“COMO SE INTEGRAN LAS COMISIONES”",
        description1:
          "Tres subcomisiones trabajarán con la Comisión Política... las cuatro comisiones integradas son: 1. Política, cuya presidencia ocupa la República Árabe Unida; la Vice Presidencia corresponde a la República Democrática de Vietnam y la Secretaría a Uruguay;...",
        images: [
          {
            type: "noticia publicada",
            src: "/conferencia-marxista-en-la-habana-cuba/n_3.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/conferencia-marxista-en-la-habana-cuba/n_3.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 10)',
        date: new Date("January 10, 1966"),
        title: "“BONAVITA: APROVECHAR TODA FORMA DE LUCHA”",
        description:
          "La Habana. En su intervención en la sesión plenaria de la Conferencia Tricontinental, el Presidente de la delegación uruguaya Luis P. Bonavita - quien es también Presidente del Frente Izquierda de Liberación de su país- manifestó que en la lucha contra el imperialismo es necesario aprovechar todas las formas que los pueblos crean convenientes para liberarse de su enemigo principal. Y que cada pueblo adopta la forma de lucha que considere más apropiada para lograr sus fines de liberación...",
        images: [
          {
            type: "noticia publicada",
            src: "/conferencia-marxista-en-la-habana-cuba/n_4.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/conferencia-marxista-en-la-habana-cuba/n_5.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (en Portada)',
        date: new Date("January 16, 1966"),
        title:
          "“SE APROBÓ LA RESOLUCIÓN FINAL Y SE CREÓ EL ORGANISMO PERMANENTE DE LA TRICONTINENTAL”",
        description:
          "Cuba fue designada sede hasta 1968, en que una nueva reunión de las fuerzas liberadoras de Asia, África y América Latina se efectuará en El Cairo. Se estrecharon vínculos de solidaridad con las fuerzas revolucionarias de 82 países... El derecho de los pueblos a oponer, a la violencia imperialista, la violencia revolucionaria. El socialismo, ejemplo y ayuda a los pueblos oprimidos... El derecho de los pueblos a recurrir a todas las formas de lucha que sean necesarias incluyendo la lucha armada. La fusión de las tres corrientes revolucionarias mundiales.",
        images: [
          {
            type: "noticia publicada",
            src: "/conferencia-marxista-en-la-habana-cuba/n_6.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/conferencia-marxista-en-la-habana-cuba/n_7.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 10)',
        date: new Date("January 16, 1966"),
        title: "“LA RESOLUCIÓN FINAL DE LA TRICONTINENTAL APROBÓSE AYER”",
        subtitle: "“El Derecho a la Liberación Política”",
        description1:
          "... La lucha revolucionaria y patriótica de cada pueblo es un aporte a la liberación de los otros países. La conferencia proclama el derecho de los pueblos a obtener su liberación política, económica y social por las vías que estime necesaria incluyendo la lucha armada para conseguir tal objetivo.",
        images: [
          {
            type: "noticia publicada",
            src: "/conferencia-marxista-en-la-habana-cuba/n_8.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/conferencia-marxista-en-la-habana-cuba/n_9.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
    ],
  },
  {
    date: new Date("December 22, 1966"),
    title:
      "Terrorista muerto en tiroteo. Descubren actividades y planes terroristas",
    slug: "terrorista-muerto-en-tiroteo-descubren-actividades-y-planes-terroristas",
    type: "otras-acciones",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("December 22, 1966"),
        title: "“METRALLETA EN MANO RESISTEN A POLICÍAS”",
        description:
          "Aparece foto a cuyo pie, dice: “He aquí el escenario donde culminó el trágico enfrentamiento entre delincuentes y policías, el cruce de Burgues y Bella Vista. A la izquierda vemos la camioneta Chevrolet robada a un carnicero el pasado sábado, en el interior del cual halló la muerte uno de los malhechores”. Aparece otra foto a cuyo pie, dice: “El Sargento Carlos Vega y el Subcomisario José Carlos Banandi, muestran las metralletas con que fueron baleados, cuando desde su patrullero siguieron la camioneta donde iban los cinco maleantes... se pretendió detener la marcha del vehículo policial, arrojándole poderosas granadas”.",
        images: [
          {
            type: "noticia publicada",
            src: "/terrorista-muerto-en-tiroteo-descubren-actividades-y-planes-terroristas/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/terrorista-muerto-en-tiroteo-descubren-actividades-y-planes-terroristas/n_1.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("December 22, 1966"),
        title: "“BOMBAS Y BALAZOS EN LA 12ª : DEJARON UN COMPAÑERO MUERTO”",
        description:
          "... Aparecen fotos a cuyo pie dice: “Nuevamente hoy, delincuentes han resistido a la Policía...”",
        images: [
          {
            type: "noticia publicada",
            src: "/terrorista-muerto-en-tiroteo-descubren-actividades-y-planes-terroristas/n_2.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/terrorista-muerto-en-tiroteo-descubren-actividades-y-planes-terroristas/n_2.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("December 22, 1966"),
        title:
          "“PISTOLEROS TERRORISTAS CUBREN SU RETIRADA CON BOMBAS Y TIROS ABANDONAN UN COMPAÑERO MUERTO”",
        description:
          "El Subcomisario José Carlos Banandi... Dice: “... de inmediato, fue digno de una serie del viejo Chicago. Desde la parte posterior de la camioneta se inició un fuego cerrado contra el patrullero, con armas automáticas. Y de pronto, en el camino del coche policial, cayó y estalló una bomba incendiaria que fue la primera de una serie de once que los fugitivos arrojaban para detener la persecución, sin lograr su objetivo. Los policías, a su vez, abrieron fuego con sus armas de reglamento contra la camioneta y el vecindario fue alarmado por un tiroteo en el curso del cual se hicieron alrededor de doscientos disparos”.",
        subtitle: "“Señorita Herida”",
        subDescription:
          "... La señorita Damiana Tejera Suárez,... se hallaba al borde de la acera, esperando el ómnibus para ir a sus ocupaciones, cuando fue alcanzada por una bala de los delincuentes en la rodilla izquierda,... por lo que fue llevada con toda urgencia... al Hospital Español, donde quedó en asistencia... Al mismo nosocomio se llevó al pistolero que apareciera dentro de la Chevrolet con un balazo en la frente y otro en la ingle y sin vida... Testigos afirmaron que vieron huir al resto de los delincuentes, y a uno en una motoneta”.",
        title1: "“IDENTIFICAN AL MUERTO; UN ARSENAL EN SU CASA”",
        subDescription1:
          "... la Policía logró la identificación del hombre muerto en el tiroteo de esta mañana. Resultó ser..., uruguayo, casado de 22 años, padre de dos criaturas, que se domiciliaba en Carlos de la Vega 3982 Apto. 2. Un rápido allanamiento efectuado en la finca, permitió el secuestro de regular cantidad de armas, las que al parecer son parte de las robadas en la Armería “Del Cazador” en la Av. Uruguay… Aparece foto a cuyo pie dice: “Walter Zigalotti, el motonetista cuya máquina aparece también en la nota, que fue obligado por el conductor de la camioneta bajo amenaza de pistola, a llevarlo hasta Rondeau y Panamá.”",
        images: [
          {
            type: "noticia publicada",
            src: "/terrorista-muerto-en-tiroteo-descubren-actividades-y-planes-terroristas/n_3.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/terrorista-muerto-en-tiroteo-descubren-actividades-y-planes-terroristas/n_3.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 5)',
        date: new Date("December 23, 1966"),
        title:
          "“INTENSA BÚSQUEDA POLICIAL DE LOS CÓMPLICES DEL TERRORISTA MUERTO”",
        description: "...",
        subtitle: "“Lo que Abandonaron. El Muerto”",
        subtitle1: "“Se Descubre la Célula Extremista”",
        subDescription:
          "Mientras uno, pues, caía muerto, los cuatro restantes se perdían de vista. Tres corriendo a pie por el baldío salieron a la calle vecina. El que fugó por Burgues detuvo al Sr. Walter Zigalatti... que llegaba en una motoneta, lo amenazó con la metralleta y se hizo conducir hasta Rondeau y Panamá...",
        subDescription1: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/terrorista-muerto-en-tiroteo-descubren-actividades-y-planes-terroristas/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/terrorista-muerto-en-tiroteo-descubren-actividades-y-planes-terroristas/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("December 23, 1966"),
        subtitle: "“Intensa Búsqueda”",
        subDescription: "...",
        images: [
          {
            type: "noticia publicada",
            src: "terrorista-muerto-en-tiroteo-descubren-actividades-y-planes-terroristas/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "terrorista-muerto-en-tiroteo-descubren-actividades-y-planes-terroristas/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 10)',
        date: new Date("December 23, 1966"),
        title:
          "“ESPECTACULAR TIROTEO EN BARRIO BRAZO ORIENTAL: UN JOVEN RESULTÓ MUERTO”",
        description: "... Aparecen fotos.",
        images: [
          {
            type: "noticia publicada",
            src: "terrorista-muerto-en-tiroteo-descubren-actividades-y-planes-terroristas/n_9.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "terrorista-muerto-en-tiroteo-descubren-actividades-y-planes-terroristas/n_10.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p class='font-bold'>“JUEVES 22 DE DICIEMBRE DE 1966</p>
          <p>Estaba todo pronto. Varios equipos de acción se iban concentrando al caer la noche del 21...</p>
          <p>En el apartamento de Arrascaeta y Rivera funcionaba el comando para la operación...</p>
          <p>... Uno de ellos era una gran camioneta en excelentes condiciones, incautada unas semanas antes y bastante bien camuflada… camioneta “No 1”...</p>
          <p>Poco antes del amanecer comienza el despliegue, cronometrado...</p>
          <p>Otra tripulación llega al taller mecánico de José L. Terra. Sacan con toda naturalidad una camioneta (la “No. 2”)... Su color original era celeste… Ha sido levemente camuflada y se ha construido con hormigón un blindaje en la parte trasera...</p>
          <p>... La camioneta 1, en la que van dos hombres, sigue muy discretamente a la 2 en que van cuatro… La camioneta 2 debe recoger a su quinto tripulante.</p>
          <p>El quinto tripulante no llega a la hora a la cita...</p>
         <p> Al fin, el tripulante inpuntual aparece caminando velozmente; Carlos Flores… Sobre su pecho, una camiseta blanca con el símbolo de la Asociación Cristiana de Jóvenes… La camioneta 2 se le acerca y apenas detiene su marcha para que suba a la parte trasera donde ya están dos compañeros...</p>
         <p> ... de pronto el chofer ve que un patrullero avanza lentamente por Gral. Flores bordeando la rotonda, se estaciona con la franca intención de cortar el paso...</p>
          <p>Ya cerca del patrullero la camioneta acelera sorpresivamente...</p>
          <p>... los compañeros de la caja arrojan varias granadas al patrullero...</p>
          <p>Al llegar nuevamente a Burgues, viniendo por Antonio Machado, los de la cabina ven el baldío… El chofer y el acompañante -ya la camioneta prácticamente detenida- corren hacia el campito donde ya está, parado y en calma, apuntando con su Máuser, de pie, uno de los compañeros de la caja cubriéndolos. Otro de los compañeros de la caja baja disparando la Uzi en ráfagas cortas… detiene una motoneta que se entrepara no pudiendo su chofer creer lo que está viendo, encañona a éste, se sube atrás y le ordena dirigirse hacia el Centro.</p>
          <p>...- Un compañero, por lo menos, murió.</.p>
          <p>El mismo apartamento de Arrascaeta y Rivera era centro para el caso de repliegue… Quedamos a la espera de los otros dos: Carlos Flores o Neill Tachi…</p>
          <p>Por el repecho abajo, cansino, lo vimos venir a Neill… Se había bajado de aquella motoneta solo para subirse a un taxi...</p>
          <p>Supimos luego como habían sido todas las cosas. Un amigo del dueño de la camioneta recientemente incautada por nosotros la identificó en Gral. Flores y Propios y dio aviso a Radiopatrulla…
          ... el buzo de Carlos Flores… permitió identificarlo por sus actividades en la Asociación Cristiana. Conducida a su casa por la rápida pesquisa, la policía encuentra allí 10 armas cortas y material escrito que la condujo,..., a la Base Eduardo Pinela...”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 3: el MLN",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "págs. 55-64",
          author: "Fernández Huidobro",
        },
        {
          fragment: `<p>“El 14 de diciembre los tupamaros se robaron una camioneta Chevrolet, celeste, con caja cerrada del jardín de una casona ubicada en Yaguaneses y la rambla de Punta Gorda,... La llevaron al tallercito de José L Tera, para acondicionarla se preocuparon de blindar la puerta trasera con hormigón… la economía del MLN venía de mal en peor y había que usar el vehículo en un operativo de finanzas: el pago de salarios y aguinaldos de Funsa...</p>
          <p?>La camioneta servía de apoyo en la operación -con cinco hombres dentro-, junto con otra muy bien camuflada, en la que iban dos tupamaros. También actuaban en el plan un auto legal, una moto,...</p>
          <p>Cuando se dirigía hacia su puesto de espera -de acuerdo con el plan-, la camioneta fue identificada por uno de los invitados a aquel asado de Punta Gorda, que avisó de inmediato a la policía.
          ... Circulaban por Propios hacia el norte, rumbo a la rotonda que hay en Gral. Flores. Allí, un patrullero con las puertas abiertas, se había atravesado en el camino:...</p>
          <p>Y la camioneta acelera de frente, esquiva la patrulla… ya con el patrullero detrás, al que los tupamaros arrojan granadas… La otra camioneta y la moto de los revolucionarios comienzan a perseguir al patrullero. Una caravana avanza a los balazos cruzados… -los tupamaros usan pistolas Mauser (sic) 7.63 y una Uzi 9 milímetros-... sigue una cuadra hasta la avenida Burgues donde se divisa un baldío...</p>
          <p>Un frenazo. Algunos tupamaros saltan de la caja...</p>
          <p>Varios guerrilleros corren por el campo... Carlos Flores y el argentino Nell Tacchi son los que quedan resistiendo los balazos para permitir el escape. Como una invasión de langostas de plomo, viajan rectas y mortales las municiones de los policías... da en la cabeza de Flores… tenía veintitrés años, era casado y padre de tres niños.</p>
          <p>Nell logró huir.</p>
          <p>Paró una moto enseñando su Uzi... Unas horas después llegó al apartamento de Arrascaeta y Rivera, el mismo en que habían vivido Setelich con Sendic hasta poco después del asalto al Banco de Cobranzas en la planta baja...</p>
          <p>La policía allana la casa de Flores, en La Teja, y encuentran diez armas cortas y documentación del MLN. Cae la Base Pinela y el local de José L Terra: descubren explosivos, armamento y mapas de la red de cloacas montevideana que los guerrilleros vienen estudiando como posibles caminos para movimientos seguros y eventuales escapes por medios subterráneos.”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "págs. 308-310",
          author: "Pernas",
        },
        {
          fragment: `<p>“... En la mañana del 22 de diciembre se inicia una nueva e importante etapa en la organización. A las 7:00 de la mañana se pone en movimiento todo un complejo mecanismo que culminaría con el asalto de los funcionarios de FUNSA que pasaban a pocos metros de un portón abierto, sin armas y sin custodia. La camioneta Chevrolet se dirigió a Propios y Gral. Flores a recoger el equipo operativo, cuando es detectada por un amigo del dueño (la camioneta era robada), quien llama a la policía. Se dirige al lugar un coche patrullero, iniciándose un intenso tiroteo, que culmina en Burgues y Bella Vista con la muerte de Carlos Flores, que había empuñado una pistola Mauser (sic) 7.63 con culatín y que se encasquilló cuando le tiró el tercer balazo al patrullero y que rozó la cabeza del conductor policial.</p>
          <p>Los otros dos artilleros tenían otra Mauser (sic) que también se trabó y una pistola subametralladora Uzi calibre 9 mm… Un párrafo aparte merece el uso de las granadas; al arrojarlas con el vehículo en movimiento impidió que fueran colocadas en zonas vulnerables del patrullero,...</p>
          <p>Cuando la policía identifica al muerto, comienza a detener a sus vinculaciones familiares. Su esposa... denuncia a varios amigos, los que son detenidos.</p>
          <p>Dos de ellos (Héctor Nieves y Araquel Saradanian)... Se producen entonces las detenciones de Raúl Rodríguez y Rivera Yic al ser señalados por Nieves y Saradanian...”.</p>`,
          year: new Date("2015-1-1"),
          name: "Palabra de Amodio. La otra historia de los Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Plaza",
          pages: "págs. 250-251",
          author: "Marius",
        },
      ],
    },
  },
  {
    date: new Date("December 22, 1966"),
    title: "Ubican una fábrica de bombas en el Club “Eduardo Pinela”",
    slug: "",
    type: "otras-acciones",
  },
  {
    date: new Date("December 28, 1966"),
    title: "Experto en bombas argentino detenido",
    slug: "experto-en-bombas-argentino-detenido",
    type: "otras-acciones",
    newsPapers: [
      {
        name: 'Diario "El Diario" (Página 8)',
        date: new Date("December 28, 1966"),
        title: "“TUPAMAROS: CAYÓ UN EXPERTO EN BOMBAS”",
        description:
          "Aparece foto a cuyo pie dice: “Este sujeto es..., el ciudadano argentino, operario del diario “Época”, que fue capturado por la policía, en un procedimiento en la calle Urquiza. Según las autoridades, se trata de un experto en la fabricación de explosivos y está vinculado a los extremistas tupamaros”.",
        images: [
          {
            type: "noticia publicada",
            src: "/experto-en-bombas-argentino-detenido/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/experto-en-bombas-argentino-detenido/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("December 28, 1966"),
        title: "“DETIENEN A UN EXPERTO EN EXPLOSIVOS”",
        description:
          "... un ciudadano argentino, radicado en nuestro país,... determina que es experto en la fabricación de bombas. Este individuo, que pese a ser cordobés se le conoce bajo el alias de “El Porteño”, fue capturado durante un procedimiento “relámpago” que realizó la policía en las inmediaciones del Parque Central. Aparecen subtítulos “Un técnico petardista”, “Quien es El Porteño”, “Incidente y detención”, “Las batidas de ayer” y bajo el título... “Allí Estaría el Armamento”… son decenas los miembros del Movimiento de Liberación Nacional.",
        images: [
          {
            type: "noticia publicada",
            src: "/experto-en-bombas-argentino-detenido/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/experto-en-bombas-argentino-detenido/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("December 29, 1966"),
        title: "“CAPTURAN OTRO IMPORTANTE TUPAMARO: ALLANAMIENTOS”",
        description:
          "... “el argentino... es técnico en construcción de bombas, tiene experiencia en células de choque en Argentina, allanan su vivienda y encuentra material impreso para fabricar bombas,... presumen que son docenas de hombres y mujeres de diferentes profesiones y oficios que integran la organización”.",
        images: [
          {
            type: "noticia publicada",
            src: "/experto-en-bombas-argentino-detenido/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/experto-en-bombas-argentino-detenido/n_5.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("January 5, 1967"),
    title: "Terroristas identificados",
    slug: "terroristas-identificados",
    type: "otras-acciones",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 6)',
        date: new Date("January 5, 1967"),
        title: "“IDENTIFICAN A TODO EL GRUPO DE TERRORISTAS”",
        description:
          "Aquel episodio (tiroteo con los ocupantes de un patrullero donde perdiera la vida… cuando intentaba, metralleta en mano, cubrir la fuga de sus compañeros) reveló la existencia de células “terroristas” que mediante asaltos a bancos (se probó que consumaron, por lo menos, dos de ellos), procuraban munirse de dinero y por robo en armerías, de armas para sus fines. También robaban vehículos para movilizarse... Agrega “Desde ese momento los sucesos se precipitaron. Se reveló que la organización era vasta y compleja y numerosas personas, todas de ideología comunista y extremista, participaban del movimiento. Los indicados como figuras principales desaparecieron y no han sido hallados...”.",
        images: [
          {
            type: "noticia publicada",
            src: "/terroristas-identificados/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/terroristas-identificados/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("January 5, 1967"),
        title: "“UN CABECILLA DE LOS TERRORISTAS ESTÁ DETENIDO”",
        description:
          "... sería uno de los hombres claves en todo este plan subversivo que se venía gestando en nuestro país, con objetivos orientados por el ideario del viejo líder chino Mao Tse Tung.",
        subtitle: "“Conectados con Cubanos”",
        subDescription:
          "..., verdadero jefe de la organización extremista desbaratada, y se ha podido comprobar que fue adoctrinado en la lucha revolucionaria por líderes cubanos, con los que mantiene estrecha vinculación… viajó a La Habana en más de una oportunidad a entrevistarse con fidelistas y allí recibió directivas precisas, para aplicar luego en la guerra de guerrillas y acciones de terrorismo en el Uruguay... Hay pruebas en su contra entre ellas la del porteño... que afirma haber entregado explosivos y otros elementos para la práctica del terrorismo a...",
        images: [
          {
            type: "noticia publicada",
            src: "/terroristas-identificados/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/terroristas-identificados/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 5)',
        date: new Date("January 6, 1967"),
        title: "“IDENTIFICAN A OTROS 4 CABECILLAS TERRORISTAS”",
        description:
          "Aparecen fotos de… se completa con otros nombres. Todos ellos… forman parte del grupo activista que orientó, imaginó y participó, en distintos grados, en los asaltos y robos, así como atentados terroristas. Los nuevos sindicados son:...",
        subtitle: "“Nuevas Revelaciones”",
        subDescription:
          "De acuerdo a nuestras informaciones, la policía habría llegado a individualizar a los citados, por las confesiones de varios de los detenidos y remitidos. Incluso, tendría datos bastante exactos sobre la personalidad de cada uno..., una estudiante de Derecho, de tendencia comunista extremista, de especiales condiciones..., era ella la encargada de “instrucciones de tiro”, enseñando a los demás el manejo de las armas, tiro rápido, etc. Sería la mejor tiradora de todos... Es de señalar que varios de los citados son estudiantes y sus edades oscilan entre 23 y 28 años.",
        images: [
          {
            type: "noticia publicada",
            src: "/terroristas-identificados/n_5.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/terroristas-identificados/n_6.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("January 11, 1967"),
    title: "Actividades terroristas desarrolladas. Vínculos internacionales",
    slug: "actividades-terroristas-desarrolladas-vinculos-internacionales",
    type: "otras-acciones",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("January 12, 1967"),
        title: "“ALLANAN OTRO CENTRO DE ACTIVIDAD TERRORISTA”",
        description:
          "... en la Avenida Agraciada 1632 casi esquina Galicia, reunía..., gran profusión de material de propaganda extremista; folletos impresos a mimeógrafo, literatura comunista, etc... también en gran cantidad, formularios conteniendo los test que hacían a los integrantes del grupo; cuestionarios de los cursos que se realizaban en dicho local y otros detalles de las clases. Igualmente, se encontró una amplia lista de personas de actividad pública y contrarias a los extremistas, constando los nombres, domicilios, funciones y todo lo relativo a ellas. Folletos del Frente de Liberación Nacional, libros de adoctrinamiento, estudios sobre “La Estrategia de la guerra urbana”, explicando al final de los mismos que la misma era de consumo interno, especificando las indicaciones establecidas.",
        subtitle: "“Fabricación de Bombas”",
        subDescription:
          "En otra de las habitaciones se halló una gran cantidad de folletos a mimeógrafo en los que se daban los más completos detalles para la fabricación de bombas...",
        subtitle1: "“Otros Elementos”",
        subDescription1:
          "Otro estudio se refería y se explicaba la forma en que se toma un cuartel...",
        images: [
          {
            type: "noticia publicada",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("January 12, 1967"),
        title:
          "“ALLANARON OTRA SEDE TERRORISTA: SE ENCONTRARON MATERIALES EXPLOSIVOS”",
        description: "...",
        subtitle: '"Un Plan Sedicioso"',
        subDescription:
          "Consideraban como debían operar en las ciudades tanto en Montevideo como en las principales localidades del Interior, sin preocuparse demasiado por el medio rural. Su revolución, pues, sería urbana. “Inicialmente-dicen los planes- un ejército revolucionario debe ser empleado en dar cobertura armada a huelgas, actos de protesta, castigo de represores y traidores, secuestros políticos, atentados y sabotajes”... podrían formarse guerrillas rurales y que las dos formas de lucha constituirían la estrategia correcta, “de guerra prolongada que culminaría con una insurrección urbana”... se proyectaban otras medidas violentas, como asaltos a las plantas de radio y televisión, golpe de mano a los bancos y sociedades financieras, toma de rehenes y voladuras de puentes... inutilizar los sistemas de combustibles y las fuentes de energía... los tupamaros, creen posible dividir al poder militar provocando divergencias entre los distintos sectores de las Fuerzas Armadas...",
        title1: "“QUE SE SABE DE LOS TUPAMAROS”",
        subDescription1:
          "... que ideología profesan los Tupamaros, como están organizados, que delitos se probaron a los Tupamaros, quienes ocupaban la camioneta cuando el tiroteo con la policía además de..., el argentino... y quien le arrendaba un altillo que tienen que ver con la organización, que función cumplía en las células..., las detenciones tan prolongadas de sospechosos las autorizó la Justicia, con que fundamento legal, hay una jefatura central de Tupamaros, con archivos, arsenales, etc., cuantas células forman el movimiento en general, cuantos hombres pueden integrar el movimiento en Montevideo y cuantos en el interior, los Tupamaros tienen contacto en el exterior, los exiliados brasileños pueden estar vinculados a los Tupamaros, los cañeros forman parte de los Tupamaros, fueron encontrados campamentos de práctica para los guerrilleros, existen arsenales de los Tupamaros, hay algún cabecilla detenido...",
        images: [
          {
            type: "noticia publicada",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_3.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("January 13, 1967"),
        title: "“GRAVES VINCULACIONES DE LA BANDA TERRORISTA”",
        description:
          "No tienen duda ninguna los investigadores de que en ese lugar (guarida abandonada por los terroristas, en un aparente escritorio comercial de la Avenida Agraciada) se adoctrinaba a elementos de mayor categoría dentro de las células...",
        subtitle: "“Vinculación con el Exterior”",
        subDescription:
          "... creada para un fin muy especial... se necesitó la capacitación de los elementos dentro de la delincuencia común, robo de vehículos, rapiñas, asaltos a bancos, etc. con el objeto de reunir los fondos necesarios para llegar a sus fines. En el escritorio de la Avenida Agraciada… había algo más importante dentro de la lucha ideológica, eran los diez mandamientos para un revolucionario detallando el comportamiento que debían seguir, la manera de actuar, como se debía utilizar a la “clase obrera” o al “pueblo”- como ellos lo denominaban despectivamente- planes de dirección y otras instrucciones... se desprende de todo lo estudiado que este Movimiento tendría muy estrechas vinculaciones con otros tipos de organizaciones terroristas internacionales, ya que al aparecer todo el material y los trabajos dentro de las células necesitaban la aprobación de un comité y éste a su vez lo emitía al exterior para el conforme definitivo.",
        images: [
          {
            type: "noticia publicada",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_4.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_5.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("January 14, 1967"),
        title: "“IMPORTANCIA DEL PLAN TERRORISTA”",
        description:
          "... cada día que pasa va quedando en claro la gravedad de las intenciones del grupo extremista para nuestra seguridad pública, al ir preparando secretamente a los grupos de extremistas que merced a un profundo adoctrinamiento se iban capacitando para realizar un atentado cuando las circunstancias así lo requirieran.",
        subtitle: "“Claves Militares”",
        subDescription:
          "Los estudios de toda clase de explosivos, el material para la preparación de toda clase de bombas, la enseñanza de la forma de violentar cerraduras..., la forma en que debían actuar los llamados “revolucionarios”, la manera de aprovechar a los gremios, la lista de personas de relevante actuación pública con nombre, direcciones, forma de vida, etc... los estudios de los Cuarteles, Regiones Militares, Regimientos, donde constaba los nombres de los Jefes, Oficiales de jerarquía, clases y soldados. Además contaban con la información secreta de las Fuerzas Armadas.",
        images: [
          {
            type: "noticia publicada",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_6.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_7.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 4)',
        date: new Date("January 15, 1967"),
        title:
          "“¿PROYECTABAN ROBAR UN CAMIÓN BLINDADO DE TRANSPORTE DE DINERO?”",
        description:
          "Hace referencia a informaciones que tendría la policía sobre planes documentados detallando minuto a minuto los movimientos de un camión blindado de conducir dinero, señalando las horas, los recorridos, la forma en que se bajan los valores, la actitud “confiada” de los dos policías que armados de metralletas custodiaban la carga y todo aquello que bien estudiado podría facilitar un audaz golpe para apoderarse de ese dinero.",
        images: [
          {
            type: "noticia publicada",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_10.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_11.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 15)',
        date: new Date("January 16, 1967"),
        title: "“TERRORISTAS: EXAMINAN DOCUMENTOS APRESADOS”",
        description:
          "Hace referencia a la exhibición de material literario, documentos y profuso material subversivo incautados y presentado en el Salón de Honor de la Jefatura de Policía de Montevideo.",
        subtitle: "“Diferentes Materiales”",
        subDescription:
          "Realizan en forma detallada una descripción de como está montada la muestra del material.",
        subtitle1: "“Nuevos Identificados”",
        subDescription1:
          "Menciona nombres de miembros de las células terroristas identificados y confirmados como integrantes de la célula tupamara.",
        images: [
          {
            type: "noticia publicada",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_10.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_11.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("January 17, 1967"),
        title: "“IDENTIFICAN A OTROS 4 ELEMENTOS TERRORISTAS”",
        description: "",
        subtitle: "“La Organización”",
        subDescription:
          "... empezaron a organizarse hace ya unos años,... entendieron que la subversión debía estallar en el Uruguay, considerándola una revolución latinoamericana. Para ello realizaban la preparación del guerrillero en el orden intelectual, de capacitación física y por medio de los test ya mencionados en la oportunidad.",
        subtitle1: "“En la Avenida Agraciada”",
        subDescription1:
          "Se comprobó que allí hacían ejercicios de tiro con armas de aire comprimido y en un cuadro hecho a mimeógrafo se constató el resultado de estas prácticas, donde intervenían las referidas mujeres... Se halló... un manual con las instrucciones en caso de detención de los elementos, manera de actuar ante los interrogatorios, como debían proceder en caso que la policía los arrestara.",
        images: [
          {
            type: "noticia publicada",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_12.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/actividades-terroristas-desarrolladas-vinculos-internacionales/n_13.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
  },
  {
    date: new Date("January 19, 1967"),
    title: "Vínculo internacional terrorista",
    slug: "vinculo-internacional-terrorista",
    type: "otras-acciones",
    newsPapers: [
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("January 19, 1967"),
        title: "“DETENIDO HOY, PASAJERO PORTANDO ARMAMENTO”",
        description:
          "Informa de la detención del argentino... y su traslado a dependencias de la Jefatura de Policía de Montevideo.",
        images: [
          {
            type: "noticia publicada",
            src: "/vinculo-internacional-terrorista/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/vinculo-internacional-terrorista/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("January 21, 1967"),
        title: "“PROCESAN AL PORTEÑO”",
        description:
          "Entre otras informaciones dice “así como cayó... con un arma de gran poder, se estima que otros contrabandistas habrían podido tener mejor fortuna que él, y tal vez consiguieron pasar metralletas por Carrasco, como parte de un plan para introducir ese tipo de efectos en el país… trascendió de fuentes autorizadas que, hasta el momento, pudieron lograrse ciertos indicios que probarían la vinculación directa de... con algunos cabecillas de las células terroristas descubiertas por nuestras autoridades... incluso, hay detalles que señalan en... la categoría y funciones de un correo clandestino, al que, quizá, alguna organización bonaerense de izquierda encargaría traer materiales diversos para otros grupos, del mismo carácter, que operan en nuestro país”...",
        images: [
          {
            type: "noticia publicada",
            src: "/vinculo-internacional-terrorista/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/vinculo-internacional-terrorista/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("January 27, 1967"),
        title: "“TUPAMAROS: ¿CABECILLAS ARGENTINOS?”",
        description:
          "Cuatro agitadores argentinos, de conocida militancia en organizaciones de izquierda, estuvieron vinculados directamente a los tupamaros, orientando sus actividades subversivas. Los sujetos en cuestión son:... de 26 años,... de 29 años,... de 25 años y...",
        images: [
          {
            type: "noticia publicada",
            src: "/vinculo-internacional-terrorista/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/vinculo-internacional-terrorista/n_6.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 7)',
        date: new Date("January 27, 1967"),
        title: "“VINCULACIÓN EXTERIOR DEL GRUPO TERRORISTA”",
        description: "...",
        subtitle: "“Vinculación Internacional”",
        subDescription:
          "... nuevas e importantísimas pruebas... vinculan a estos grupos terroristas con elementos del exterior. A continuación se dan nombres, alias, edades y actividades subversivas que estas personas tendrían en su haber. Menciona que participaron directamente en diferentes asaltos a sucursales bancarias en Montevideo. En cuanto a... era el principal inquilino del apartamento 17 de la Avenida Rivera 4316, finca que estaba arrendada a nombre de... en enero de 1963, pasaron al denominado “Movimiento Nacionalista Revolucionario Tacuara”, tildado de grupo de extrema izquierda y marxista.",
        subtitle1: "...",
        subDescription1:
          "... comienzan sus actividades en una forma casi similar con el movimiento subversivo del Uruguay. Forman células y se dedican a obtener armas, dinero, equipos de transmisiones, etc... ya en el año 1963 realiza una larga gira por España, Argelia, Angola, Congo, Egipto, Suiza e Italia. En España entra en contacto con un ex mandatario argentino y procura el ingreso de su movimiento Tacuara a la juventud peronista. Viaja luego a Praga y La Habana, invitado por el gobierno cubano. En 1964 visita Hanoi y el Vietnam del Norte, donde asiste a una gran convención partidaria, luego a China, y en 1965 llega a Montevideo. Su papel en nuestro país se considera de enorme gravitación, en especial con el movimiento terrorista, lo que indica la peligrosidad de su persona y de la importancia de sus directivas.",
        images: [
          {
            type: "noticia publicada",
            src: "/vinculo-internacional-terrorista/n_7.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/vinculo-internacional-terrorista/n_8.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Luego Baxter habló de su pasaje por China, de la medalla al valor que le había otorgado Ho Chi Minh por su combate en Vietnam...</p>
          <p.>... el argentino no era un improvisado en el combate ni en la estrategia revolucionaria: sus viajes le habían permitido foguearse en entrenamiento a sangre y fuego en campos de batalla que para los muchachos tupamaros eran desconocidos.</p>
          <p?>... Los integrantes del grupo de “los porteños”,..., también estaban siendo buscados: Nell, Baxter, Jorge Andrés el Pata Cataldo, Ruben Daniel Rodríguez Primón y Patricio Errecalde...</p>
          <p?>El primero en salir del país fue Baxter, hacia Cuba: luego otros.</p>
          <p>Nell Tacchi, primer jefe de Milicias del Movimiento Nacionalista Revolucionario Tacuara, y Jorge Rulli... se quedaron en Montevideo como contactos de las fuerzas revolucionarias entre Uruguay y Argentina... La ayuda de algún otro guerrillero peronista también buscó llegar desde el otro lado del estuario. El primer intento resultó fallido: el argentino Silvio Halperin fue detenido en el aeropuerto de Carrasco cuando pretendía ingresar con una metralleta PAM, dos cargadores y municiones de diverso calibre”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 295-313",
          author: "Pernas",
        },
        {
          fragment: `<p>“Pocos días antes, un compañero argentino fue detenido en el Aeropuerto de Carrasco cuando intentaba pasar entre sus ropas una subametralladora Pam con dos cargadores y 160 proyectiles, solidaridad concreta que nos enviaban luchadores hermanos”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 3: el MLN",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "pág. 98",
          author: "Fernández Huidobro",
        },
        {
          fragment: `<p>“El Peronismo tenía un brazo armado que era el Tacuara. Uno de izquierda y el otro de derecha; antes de los Montoneros.</p>
          <p>Aquí vinieron del Tacuara de izquierda. Habían hecho un asalto importante en el Policlínico Bancario en Argentina… mataron a un montón de gente. Y a raíz de eso quedaron requeridos Nell Tacci -que cayó conmigo acá, después- y tres compañeros más. Requeridos en la Argentina, se van para la China de Mao Tse Tung, hacen un entrenamiento y se vuelven para Uruguay y ahí toman contacto con el MLN, un poco antes del 22 de diciembre.</p>
          <p>El 22 de diciembre, nosotros tenemos ahí a Nieves, el primer traidor, el que canta todo; lo detienen; él dice que hay cuatro porteños y le muestran fotos de estos (sic) y salen como Tupamaros en la prensa: (José Luis) Nell Tacci, (José) Joe Baxter, (Jorge) Andrés Cataldo y (Ruben) Eduardo Rodríguez...”.</p>`,
          year: new Date("2011-1-1"),
          name: "Ana la guerrillera. Una historia de Lucía Topolanski",
          place: "Montevideo - Uruguay",
          edition: "Ediciones B Uruguay S.A.",
          pages: "págs. 77-78",
          author: "Caula y Silva",
        },
        {
          fragment: `<p>“Nuestro primer contacto con grupos guerrilleros argentinos habían sido hecho poco tiempo antes de la Convención gracias a la intermediación de Abraham Guillén, quien nos puso en comunicación con cuatro integrantes de Tacuara, que luego se trasladaron a Montevideo a colaborar con nosotros: Joe Baxter, Rodríguez Primón, André Cataldo y Nell Tachi”.</p>`,
          year: new Date("2013-1-1"),
          name: "Autobiografía de Amodio Pérez",
          place: "Montevideo - Uruguay",
          edition: "Editorial Arca",
          pages: "págs. 15-16",
          author: "Pérez",
        },
        {
          fragment: `<p>“En cuanto a la vinculación con los argentinos de Tacuara, esta (sic) culminó con su integración efectiva a mediados de 1966, pero manteniendo ellos la posibilidad de conexión con su organización en la argentina (sic). En el movimiento Tupamaro su integración se dio en distintos encuadres: Baxter funcionaba en el coordinador político; Nell Tacci y Cataldo en grupos de acción y Rodríguez Primón en el laboratorio de explosivos...”.</p>`,
          year: new Date("2015-1-1"),
          name: "Palabra de Amodio. La otra historia de los Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Plaza",
          pages: "pág. 247",
          author: "Marius",
        },
      ],
    },
  },
  {
    date: new Date("July 31, 1967"),
    title:
      "Conferencia OLAS. Proclaman lucha armada para la conquista del poder",
    slug: "conferencia-olas-proclaman-lucha-armada-para-la-conquista-del-poder",
    type: "otras-acciones",
    newsPapers: [
      {
        name: 'Diario "El Popular" (Página 3)',
        date: new Date("August 11, 1967"),
        title:
          "“OLAS: PROPICIAR E IMPULSAR LA UNIDAD DEL MOVIMIENTO Y ORGANIZACIONES ANTIIMPERIALISTAS. APOYAR POR TODOS LOS MEDIOS A LOS PUEBLOS DE A. LATINA EN LUCHA, ESPECIALMENTE A LOS QUE SE ENCUENTRAN EN LUCHA ARMADA”",
        description: "",
        subtitle: "“Texto de la Resolución”",
        subDescription:
          "La Habana. “Para nosotros la patria es América”... En su texto de once carillas se han expresado de modo cabal estos seis conceptos: “La lucha armada es la línea fundamental. Las formas no armadas deben ayudar y no entorpecer a la lucha armada. Es necesario unificar la dirección política y militar en la guerra revolucionaria. En la mayoría de los países de América, organizar, iniciar y desarrollar la guerra revolucionaria es la tarea inmediata más importante. Nadie puede proclamarse de por sí vanguardia”.",
        images: [
          {
            type: "noticia publicada",
            src: "/conferencia-olas-proclaman-lucha-armada-para-la-conquista-del-poder/n_1.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/conferencia-olas-proclaman-lucha-armada-para-la-conquista-del-poder/n_2.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Popular" (Página 4)',
        date: new Date("August 11, 1967"),
        title:
          "“CÁLIDA RECEPCIÓN TUVIERON AYER ARISMENDI, BRUERA Y J. J. MARTÍNEZ”",
        description: "",
        subtitle: "“La Palabra de Arismendi”",
        subDescription:
          "... a la victoria y en la solidaridad con los que luchan con las armas en la mano en la clandestinidad...",
        images: [
          {
            type: "noticia publicada",
            src: "/conferencia-olas-proclaman-lucha-armada-para-la-conquista-del-poder/n_3.jpg",
            alt: "noticia publicada por el diario El Popular",
          },
          {
            type: "página diario completa",
            src: "/conferencia-olas-proclaman-lucha-armada-para-la-conquista-del-poder/n_4.jpg",
            alt: "página diario completa publicada por el diario El Popular",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Por entonces tenía lugar en La Habana la conferencia de la Organización Latinoamericana de Solidaridad (OLAS), que pretendía coordinar los movimientos revolucionarios del continente, como una especie de internacional revolucionaria de América Latina.</p>
          <p>Grandes problemas suscitó entre los grupos de izquierda uruguayos este encuentro, sobre todo respecto a quienes participarían de la delegación. El FIDEL acaparó el Comité Nacional, y quedaron fuera de la convocatoria la FAU, el MIR, el Movimiento de Unificación Socialista Proletaria (MUSP) y el propio MLN-T. Por gestiones del chileno Salvador Allende, logró viajar a último momento el Partido Socialista, que junto con el MRO y el movimiento Batllista 26 de octubre..., eran los únicos grupos uruguayos proclives a la lucha armada en el continente. Fue esa la decisión de fondo que se adoptó en la conferencia”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 320-321",
          author: "Pernas",
        },
        {
          fragment: `<p class='font-bold'>“LA TRICONTINENTAL</p>
          <p>Nada, mejor a nuestro juicio, que comenzar este tramo de la “Historia de los Tupamaros” con una cita del teórico que más influencia tuvo en esos años.</p>
          <p>Con un total de 483 representantes provenientes de los tres continentes, 82 delegaciones inician en La Habana el 3 de enero de 1966 las sesiones de la Primera Conferencia de Solidaridad de los Pueblos de Asia, Africa (sic) y América Latina.</p>
          <p>El evento culmina creando la Organización de Solidaridad entre los Pueblos de Africa (sic) y América Latina (OSPAAL)... Y con una Declaración General en la que, entre otras cosas, se afirma: el derecho de los pueblos a obtener su liberación política, económica y social por las vías que estimen necesarias, incluyendo la lucha armada...”.</p>
          <p>La delegación uruguaya que suscribe esta declaración (Luis Pedro Bonavita, Rodney Arismendi, Edmundo Soares Netto, Blanca Silvia Collazo, Luis Echave y César Reyes Daglio) estaba integrada por el Fidel... dejando de lado al Partido Socialista, a la Federación Anarquista, al Grupo de Independientes de “Marcha”, al MUSP, al MIR, al FAR...</p>
          <p>El 16 de enero,..., por iniciativa de Salvador Allende las 27 delegaciones latinoamericanas deciden crear la Organización Latinoamericana de Solidaridad (OLAS)...”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 3: el MLN",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "págs. 7-8",
          author: "Fernández Huidobro",
        },
      ],
    },
  },
  {
    date: new Date("August 24, 1968"),
    title: "Terrorista herido huye del Hospital de Clínicas",
    slug: "terrorista-herido-huye-del-hospital-de-clinicas",
    type: "otras-acciones",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("August 29, 1968"),
        title: "“BUSCAN A UN TUPAMARO QUE PUDO HUIR DEL HOSPITAL DE CLÍNICAS”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/terrorista-herido-huye-del-hospital-de-clinicas/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/terrorista-herido-huye-del-hospital-de-clinicas/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("August 29, 1968"),
        title:
          "“UN ACCIDENTE DELATÓ AL JOVEN EXTREMISTA. Lo Buscan en Todo el País”",
        description:
          'Un común accidente de tránsito ocurrido el domingo pasado puso al descubierto a un Tupamaro en cuyo poder se hallaron pruebas irrefutables de que era miembro de la organización extremista auto denominada "Movimiento de Liberación Nacional". Hace cinco días circulaba por Camino Maldonado una camioneta la que chocó con una motoneta ocupada sólo por quien la piloteaba. El accidente tuvo alguna entidad y el motonetista, con diversas lesiones, debió ser trasladado al Hospital de Clínicas para su atención... pero cuando la policía revisó los efectos que se hallaban en la motoneta de la víctima fue que surgió la sensacional revelación..., el conductor del rodado era un tupamaro... Fueron detenidos un practicante y otros tres estudiantes de Medicina sobre los que recaen sospechas acumuladas a través de una ardua tarea indagatoria.',
        subtitle: "“Quien Es ...”",
        subDescription:
          "El tupamaro... es hijo de quien fuera Diputado del Partido Socialista, grupo político del que luego se separó... no se le conocía ninguna actividad... durante cierto tiempo estuvo dedicado en el interior del país a las tareas rurales. Quizás este silencio que rodeó en los últimos años a... explica su vinculación con los miembros de Movimiento de Liberación Nacional.",
        subtitle1: "“Muchos Confidentes”",
        subDescription1:
          "Se ha llegado a la conclusión de que los Tupamaros poseen confidentes en las más diversas esferas ya sea oficiales como privadas y ello les facilita tomar todas las providencias para impedir que la policía llegue hasta sus guaridas. Hay muchas conjeturas en cuanto a los centros de reunión de las células que están conectadas entre sí apenas por uno de sus miembros quien a su vez se comunica con el comando central, que es desconocido por los demás extremistas. Los grupos de Tupamaros se integran a diversos niveles y así como están los encargados de las acciones directas, hay instructores, correos y hasta simples colaboracionistas. Estos últimos, aunque fueran individualizados, muy poco o nada podrían aportar sobre la organización, salvo su solidaridad con los planes que se ejecutan.",
        images: [
          {
            type: "noticia publicada",
            src: "/terrorista-herido-huye-del-hospital-de-clinicas/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/terrorista-herido-huye-del-hospital-de-clinicas/n_3.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
    ],
  },
  {
    date: new Date("October 8, 1968"),
    title: "Procesan a jefe terrorista y su célula",
    slug: "procesan-a-jefe-terrorista-y-su-celula",
    type: "otras-acciones",
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("October 9, 1968"),
        title:
          "“... ERA EL JEFE DE LA CÉLULA TERRORISTA CAPTURADA”. “UN TUPAMARO TRABAJÓ EN EL ESTADO MAYOR DEL EJÉRCITO”. “ESTÁ HERIDO UNO DE LOS TERRORISTAS. CAYERON 7 HOMBRES Y UNA MUJER. CONFESARON EL ASALTO A UN BANCO”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 7)',
        date: new Date("October 9, 1968"),
        title: "“CINCO AÑOS DE VIOLENTA HISTORIA”",
        description:
          "Por vez primera, una célula terrorista del movimiento tupamaro es apresada por la policía... Hasta finales del año 1966 el movimiento continuó actuando en las sombras sin llegar nunca a un choque con las fuerzas policiales. En el período que va desde el robo de armas en el Tiro Suizo de Colonia hasta el encuentro en el barrio Brazo Oriental, donde murió el tupamaro..., son numerosos los actos terroristas que el movimiento se adjudica en sus revelaciones a la prensa, preferentemente extranjera. Es así, que en las tantas veces citada revista chilena “Punto Final” al igual que en publicaciones de Argentina, una larga lista de acciones se atribuye a los comandos tupamaros, en ese lapso de cinco años que comienza en julio de 1963...",
        title1:
          "“CREEN A ..., UNO DE LOS DETENIDOS, PIEZA CLAVE. ESTÁ IDENTIFICADO HACE TIEMPO”",
        description1:
          "..., ex estudiante de Arquitectura, de 26 años, es considerado por la Policía importante pieza dentro de uno de los comandos Tupamaros,... Fue identificado cuando la policía detuvo en su domicilio a... (actualmente en prisión) y se volvió a tener noticias de él cuando se tiroteó con una patrulla el 29 de noviembre de 1967 en el balneario “San Cristóbal”, junto a otros dos Tupamaros… viajaba (con... y otro Tupamaro) en la camioneta cuya detención, anoche, posibilitó el procedimiento que culminó con la captura de otros tres integrantes de la organización.",
        subtitle1: "“El Tiroteo de San Cristóbal”",
        subDescription1:
          "... cobró notoriedad en oportunidad del tiroteo que mantuvo con la policía en el balneario “San Cristóbal” (Canelones) luego de haber robado alhajas, una pistola y dinero por valor de medio millón de pesos, del interior de un automóvil de turistas argentinos estacionado en el balneario “El Pinar”...",
        title2: "“IDEOLOGÍA Y ACCIÓN PRÁCTICA DE LA ORGANIZACIÓN TUPAMARA”",
        description2:
          "Algunos miembros del Partido Socialista, desilusionados por el fracaso de la Unión Popular en 1962, se nuclean en torno a este movimiento tupamaro que desde julio de 1963 (cuando el robo de armas en Colonia), optó definitivamente por la violencia como vía de acceso al poder político. Tal es el origen del movimiento cuyas actividades vuelven hoy al primer plano de la opinión pública. Veamos cómo explica un tupamaro en el suplemento a la edición Nº 58 de la revista chilena “Punto Final” la posición del grupo dentro de la izquierda uruguaya. “Creo que todo aparato armado debe formar parte de un aparato político de masas a determinada altura del proceso revolucionario… Hay que combatir la mezquina idea en boga de Partido, que lo identifica con una sede, reuniones, un periódico y posiciones sobre todo lo que lo rodea...”.",
        subtitle2: "“Guerrilla Urbana”",
        subDescription2:
          "Influidos por el proceso revolucionario de Cuba y por los intentos repetidos en varios países latinoamericanos, los tupamaros parecen haber construído una teoría de guerrilla totalmente propia, pensada en exclusividad para nuestro país... Dice el tupamaro entrevistado por “Punto Final”: “Otro factor estratégico a tener en cuenta es el factor geográfico. No tenemos lugares inexpugnables en el territorio como para instalar un foco guerrillero que perdure. En compensación tenemos una gran ciudad con más de 300 kms. cuadrados de edificios que permite el desarrollo de la lucha urbana. Esto quiere decir que no podemos copiar estrategias de otros países. Por el contrario, tenemos que elaborar una estrategia autóctona adecuada a una realidad diferente a la de otros países latinoamericanos”. Señala más adelante el terrorista que “Montevideo es una ciudad suficientemente grande y polarizada por las luchas sociales como para dar cobijamiento a un vasto contingente de comando en actividad. Desde luego, agrega, toda organización que pretenda perdurar en la lucha urbana debe construir pacientemente sus bases materiales y el vasto movimiento de apoyo y cobertura que necesita un contingente armado para operar o subsistir en la ciudad”.",
        subtitle3: "“Se Están Fortaleciendo”",
        subDescription3:
          "Consultado sobre la actividad que desenvuelven en la actualidad dijo que estaban en la fase de “crear una fuerza armada con la mayor premura posible... y echar bases materiales para poder desarrollar la lucha urbana y la lucha en el campo”. En la carta abierta difundida cuando el secuestro del Dr. Pereira Reverbel puedan extraerse las siguientes conclusiones:... 3) Los tupamaros buscan atraer al pueblo a su línea de violencia, mediante un aparato de captación organizado a tales efectos. 4) Parecen dispuestos a proseguir la lucha armada hasta sus últimas consecuencias.",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_3.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("October 9, 1968"),
        title:
          "“TUPAMAROS: YA SON OCHO LOS DETENIDOS-UN HERIDO. PROCURAN DESPISTAR A LA POLICÍA PARA CUBRIR LA FUGA DE LOS OTROS”",
        description: "Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_4.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_5.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("October 9, 1968"),
        title: "“8 TUPAMAROS DETENIDOS: UNO HERIDO”",
        description:
          "... Se supo extraoficialmente que una ambulancia había venido a levantar a uno de los ocupantes del vehículo detenido en Avenida Garzón... siendo llevado al Hospital de Clínicas...",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_6.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_7.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("October 9, 1968"),
        title: "“APRESAN TUPAMAROS”",
        description: "Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_8.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_9.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 9)',
        date: new Date("October 9, 1968"),
        title: "“TRAS UN TIROTEO DETUVIERON ANOCHE AL JEFE TUPAMARO PROF...”",
        description:
          "Publican detalles del proceso que realizó y viene realizando la policía.",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_10.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_11.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("October 10, 1968"),
        title: "“TUPAMAROS: SE REÚNEN ELEMENTOS DE PRUEBA”",
        description: "...",
        subtitle: "“Fotógrafo que Logró Huir”",
        subDescription:
          "Durante las actuaciones que desbarataron una célula del MLN logró eludir a los policías el fotógrafo... que tenía su estudio en la finca de Ganaderos 4898 donde apresaron a otras personas. Allí... tomaba fotografías a los tupamaros para confeccionar los documentos falsificados que todos ellos tienen. Cabe señalar que las cédulas de identidad apócrifas son casi perfectas y es muy difícil hacer el reconocimiento.",
        subtitle1: "“Unos Mil Simpatizantes”",
        subDescription1:
          "... Se estima que por lo menos mil personas integran el engranaje que impulsa al Movimiento de Liberación Nacional... El material de adoctrinamiento que se emplea proviene del extranjero y varios textos de uso estrictamente interno redactado por algunos sectores intelectuales que actúan en las células. La base de los estudios de acción se refiere a preparar cuerpos de guerrilleros urbanos ya que evidentemente la actividad subversiva en la ciudad es el fuerte de los tupamaros.",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_12.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_13.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("October 10, 1968"),
        title: "“MÉDICO NOTORIO SERÍA EL CEREBRO TUPAMARO”",
        description:
          "Un prestigioso médico especialista..., resultaría ser uno de los cerebros de la organización armada que se autodenomina Movimiento de Liberación Nacional (“Tupamaros”). De acuerdo con esa misma versión integrarían el movimiento un elevado número de profesores, profesionales y estudiantes de cursos superiores. Entre estos intelectuales, que constituirían el treinta por ciento del total de sus integrantes, el Movimiento de Liberación Nacional reclutaría a sus más caracterizados dirigentes, entre los cuales el médico de referencia y otras dos personas podrían integrar una especie de Triunvirato encargado de orientarlo ideológica y militarmente. En torno suyo se nuclearían no sólo la veintena de Tupamaros prófugos, sino también 110 personas ya identificadas, y a los cuales se sindica como vinculados de una manera u otra al grupo de acción directa...",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_14.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_15.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("October 10, 1968"),
        title: "“PRESOS: 7 HOMBRES Y UNA MUJER; SIGUE UNA AFIEBRADA BÚSQUEDA”",
        description:
          "Hace un detalle de los detenidos y referente a uno de ellos dice: “Otro de los presos, que estaría levemente herido en la cabeza (luego de curado, con dos puntos de sutura, pasó a Jefatura), se trata de una persona que tiene documento a nombre de...; pero puede ser un documento falso... No hay dudas de que también es un decidido “tupamaro”.",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_16.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_17.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 11)',
        date: new Date("October 10, 1968"),
        title: "“LLEVABAN UNA GRANADA DE ALTO PODER; HOY IRÁN ANTE EL JUEZ”",
        description:
          "Aparecen fotos de... Precisa las detenciones y detalles específicos de los detenidos.",
        title1: "“UN VERDADERO HISTORIAL DE MUERTE Y VIOLENCIA”",
        description1:
          "Aparecen fotos de… Detallan y confirman robos, muertes y secuestros realizados durante los tres años anteriores.",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_18.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_19.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("October 11, 1968"),
        title:
          "“CONTINUABAN DECLARANDO ANTE EL JUEZ, ESTA MADRUGADA LOS TRES CABECILLAS TUPAMAROS QUE SERÍAN PROCESADOS COMO MÍNIMO POR 10 AÑOS”",
        description: "Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_20.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_21.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 10)',
        date: new Date("October 11, 1968"),
        title:
          "“HABRÍAN IMPLICADOS DENTRO DE LA PROPIA JEFATURA; VARIAS LIBERTADES”",
        description: "Aparecen fotos de...",
        subtitle: "“Hallazgos e Interrogatorio”",
        subDescription:
          "En la camioneta ”Volkswagen”, de tipo furgón que había sido robada meses atrás en Colonia y reempadronada, con una chapa falsa, que corresponde a La Paz, se encontró una granada de mano. Este artefacto está en manos de los técnicos del Ejército y se le presume de alto poder explosivo... Alguno de los detenidos “admitió haber intervenido en el asalto a una sucursal bancaria del Reducto de donde se llevaron un millón de pesos”...",
        subtitle1: "“Infiltración en el Ejército”",
        subDescription1:
          "Uno de los detenidos (presumiblemente...) hace dos años y medio, estuvo vinculado al Estado Mayor del Ejército y, en su calidad de militar o asimilado a una jerarquía, tuvo acceso a noticias que permitieron alertar a muchos “tupamaros” o simpatizantes que pretendieron ser indagados al iniciarse la operación de captura, luego de los trágicos sucesos que siguieron a la muerte de... y el Comisario Silveira Regalado en los finales del año 1966… Un militar, que ahora ocupa un alto cargo en Jefatura, lo habría reconocido como uno de los que actuaban cerca del Estado Mayor y el Servicio de Inteligencia del Ejército en aquella época.",
        subtitle2: "“Gente Importante”",
        subDescription2:
          "De un jerarca policial: “Según los datos reunidos por Inteligencia y Enlace a través de tres años de labor, hay cientos de personas vinculadas al “Movimiento de Liberación Nacional”... Y, entre ellos, figuran profesionales de distintas profesiones (médicos, ingenieros, arquitectos, abogados, periodistas) que lo son, decididamente o simpatizan y ayudan sin estar enrolados en el movimiento...”.",
        subtitle3: "“Dentro de la Jefatura”",
        subDescription3:
          "Del mismo jerarca dice que: “El material incautado en la casa del fotógrafo... demostró que éste usaba, para fabricar documentos falsos, muchos papeles legítimos. Es decir sobres, cubiertas de plástico, tarjetas, etc. que provienen realmente de los talleres policiales… Se desprende que habían logrado corromper mediante dinero a funcionarios o tenían tupamaros infiltrados en la propia Jefatura”.",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_22.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_23.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("October 11, 1968"),
        title: "“FUERON PROCESADOS YA TRES TUPAMAROS”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_24.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_25.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("October 11, 1968"),
        title: "“INDAGAN COMO LOS TUPAMAROS SE APODERARON DE CÉDULAS VÁLIDAS”",
        description: "...",
        title1: "“COMO ESTÁN ORGANIZADAS LAS CÉLULAS”",
        description1:
          "Quienes participan en ella, describen a la organización de los Tupamaros como una pirámide trunca. En la base absoluta de esa pirámide, están los que se inician recién en el movimiento y están a prueba, los que reciben comisiones concretas a través de algún miembro de la célula. Por encima de ellos están las células. Las células son integradas por tres o cuatro individuos, y se comunican con otras a través de su jefe. Los principios sobre los cuales se asienta la organización suponen la compartimentación de tareas y la limitación de los conocimientos. Salvo aquellas personas que estén en la cúspide de la pirámide puede saber algo más de lo que tienen inmediatamente próximo. Cada uno de los miembros de una célula conoce a los otros por su nombre de tupamaros (alias), pero prescinde de los nombres verdaderos, y en algún caso puede hasta haberlo desconocido. El principio de compartimentación y el secreto rigen las actividades de los miembros, y cuando éstos declaran enfatizan esa circunstancia… Por encima de las células estaban dos comandos: el comando político y el militar. El comando político determinaba si una operación dada era conveniente; este tipo de opciones se votaba dentro del comando respectivo. El principio de la votación rige los actos de la organización, a veces a un nivel más general y más alto: el de una asamblea plenaria, que por lo menos debe existir una vez por año, y a la que llega con un voto un representante por célula. Decidido, en los casos más frecuentes, que una operación era conveniente se pasaba al comando militar, el cual determinaba si era técnicamente posible… Recogidos esos dos elementos previa decisión, si una operación se lleva a cabo y como se lleva a cabo, todo pasa a la cúspide de la pirámide, y desde allí se irradian las órdenes para su ejecución... Dos de los principales declarantes de ayer coincidieron en definir la organización, en su funcionamiento habitual como una pirámide trunca. En lo alto del corte de esa pirámide, figuran los dos comandos; más abajo las células y más abajo aún los ingresados a prueba.",
        title2: "“LA LARGA NOCHE EN EL JUZGADO”",
        description2:
          "... el magistrado decidió los tres procesamientos... admitió: formar parte del comando político, haber votado allí la planeada operación del secuestro del Presidente de UTE, pero no haber participado en ella ni saber como y donde se albergó al secuestrado. Así mismo, tenía noticia de algunos asaltos a bancos. En la jerga de la organización se le llamaba “confiscación”. El código moral que rige a la organización permite tomar, para los fines del Movimiento, el dinero cuyo origen se tenga por espurio; no se ataca los bienes que son fruto del trabajo ni se ataca a las personas... En cuanto a las armas, su origen sería el mercado negro; excepcionalmente, algún arma puede haber sido comprada en Brasil. Los declarantes conocen los fines de la organización, de transformar por todos los medios, incluso los violentos, el orden institucional existente, que consideran injusto. Operaciones como la privación del Dr. Pereira Reverbel, la bomba en las instalaciones de Radio Ariel, y el asalto en busca de armas a la carpa de FUTI, fueron reconocidas como obras del movimiento..., formula declaraciones que no difieren de las de... parece ser el “Tupamaro” de menor importancia de los tres, fue apalabrado por... y aceptó entrar en la organización. No estaba en célula alguna, teniéndose a prueba. Reparó un VW del que después se enteró que había sido utilizado en el asalto de una sucursal bancaria e intervino en un hurto de vehículo de que... había sido “campana”... vivían en la clandestinidad... todavía no.",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_26.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_27.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("October 11, 1968"),
        title:
          "“TRES PROCESADOS: SIGUEN INTERROGANDO A CINCO. POR DELITOS CONTRA LA PATRIA LE TOCARÍAN ENTRE 10 Y 30 AÑOS”",
        description:
          "Tres tupamaros procesados inculpados de asociación para delinquir, y cinco personas más emplazadas para declarar esta tarde ante el Juez de Instrucción de 1er. turno Dr. Daniel Pereyra Maneli, por presumible complicidad con aquellos, es el saldo positivo que ha dejado el procedimiento policial cumplido en Avda. Garzón y San Quintín... Continúa el desarrollo de la noticia con comentarios sobre las acciones delictivas y responsabilidades de algunos de sus integrantes sin mencionar nombres.",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_28.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_29.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 7)',
        date: new Date("October 11, 1968"),
        title: "“-LE PERDONAMOS LA VIDA-” DICEN AL COMISARIO OTERO”",
        description:
          "... A raíz de los prolijos detalles reunidos por Inteligencia y Enlace y de sus propias declaraciones, la justicia decretó los procesamientos de..., quedando los cinco restantes en calidad de detenidos para volver esta tarde a prestar declaración... el peligro de los “tupamaros” lejos de ser una fantasía, como muchos creen, es una realidad a la que hay que dar el valor real que tiene. No debe olvidarse que una pequeña cantidad de hombres disciplinados y bien armados son una fuerza temible ya que se mueven en la clandestinidad y no se puede atacarlos de frente, lo que los llevaría a la destrucción. Ya en Inteligencia y Enlace,... dijo al Comisario Otero: “Estaba vivo por que le habían perdonado la vida”... que había pasado casualmente por allí (una heladería de la Avda. Rivera) con un amigo y que, al verlo pensaron en disparar a sangre fría contra él. Luego desistieron de tal acto”. En realidad, no hubo generosidad por parte de los terroristas. Es que, personas de clara inteligencia, comprendieron que matar a Alejandro Otero, era decretar la guerra a muerte contra su organización. Y, a pesar de sus grandes deseos de eliminar a su peor enemigo, prefirieron no desafiar tan a fondo a la sociedad”.",
        images: [
          {
            type: "noticia publicada",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_30.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/procesan-a-jefe-terrorista-y-su-celula/n_31.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
  },
  {
    date: new Date("October 12, 1968"),
    title: "Descubren base de operaciones terrorista",
    slug: "descubren-base-de-operaciones-terrorista",
    type: "otras-acciones",
    newsPapers: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("October 14, 1968"),
        title: "“HALLARON UNA BASE DE LOS “TUPAMAROS””",
        description:
          "En Cno. Pajas Blancas, el grupo extremista conocido como “Tupamaros” había asentado una importante base de operaciones, disimulando su actividad en lo que parecía ser para ojos extraños, una simple chacra. En su interior se pudo establecer, se procedía al armado de vehículos y armado de nuevas unidades, utilizando para ello los rodados que venían hurtando desde tiempo atrás. Además, era campo de tiro y taller en general. Producido el incendio, al remover los bomberos los restos del material, se encontraron armas, dinero, restos de automotores y unidades para terminar, lo que confirmaba el uso que los extremistas daban al lugar... Aparece foto de la mencionada base.",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-base-de-operaciones-terrorista/n_1.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/descubren-base-de-operaciones-terrorista/n_2.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 4)',
        date: new Date("October 14, 1968"),
        title: "“NUEVO GRAN GOLPE A LOS TUPAMAROS”",
        description:
          "Realiza una descripción del lugar y del material encontrado... Comunicada la novedad a las autoridades de Jefatura, se hicieron presentes... Dichos jerarcas pudieron comprobar de inmediato que en efecto el material hallado pertenecía al Movimiento de Liberación Nacional conocido como “Tupamaros” y que el local era una de las bases de operaciones del grupo.",
        subtitle: "“Atalayas”",
        subDescription:
          "... Desde los locales tenían un campo visual fabuloso, ya que se podía observar a kilómetros de distancia. Pero, para evitar cualquier entorpecimiento, los extremistas habían instalado en la copa de los árboles y en la construcción, puestos de observación, que permitía una mayor visual y facilitaba una urgente fuga por varias de las salidas con que se contaba...",
        subtitle1: "“Remisión de los Tres “Tupamaros”",
        subDescription1:
          "Finalmente, el Juez Dr. Pereyra Manelli emitió la sentencia... fueron remitidos por: Asociación Ilícita para delinquir; atentado contra la Constitución; rapiña; privación de libertad, daños y hurtos... por: Asociación Ilícita para delinquir; atentado contra la Constitución y hurto. Aparecen fotos a cuyo pie dicen: “..., en instantes que procede a examinar parte del material que utilizaban para la confección de explosivos, hallados”. “Las armas halladas, muestran los efectos causados por el siniestro”. “Al removerse los escombros por parte de los bomberos, se logró descubrir enorme cantidad de publicaciones extranjeras y nacionales, medio chamuscadas, que contenían importante material que se referían a actividades de los “Tupamaros”.",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-base-de-operaciones-terrorista/n_3.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/descubren-base-de-operaciones-terrorista/n_3.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("October 14, 1968"),
        title:
          "“FUSILES DEL EJÉRCITO EN EL CUARTEL QUE SE QUEMÓ”. OTRO TUPAMARO CAPTURADO POR LA POLICÍA”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-base-de-operaciones-terrorista/n_4.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/descubren-base-de-operaciones-terrorista/n_5.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 18)',
        date: new Date("October 14, 1968"),
        title:
          "“UN JOVEN TUPAMARO CAPTURADO EL SÁBADO DEPUSO HOY ANTE EL JUEZ”",
        description:
          "... Según trascendió el nuevo detenido sería una pieza clave dentro de la organización extremista y se hallaría muy vinculado al comando de los tupamaros... Lo único concreto que se sabe es que el detenido habría desempeñado un papel importante en el MLN y así lo reconoció ante la policía...",
        subtitle: "“Habría Más Revelaciones”",
        subDescription:
          "... se supo que en las próximas horas las pesquisas podían dar lugar tal vez a revelaciones de corte sensacional. Como ya lo adelantamos, los tupamaros suman en conjunto unas mil personas jóvenes, de ambos sexos. De esa cantidad, solamente una minoría forman las células que se aplican a la acción directa. El resto constituye la base del movimiento subversivo. Los militantes del M.L.N. acatan una férrea disciplina...",
        title1: "“HALLARON FUSILES ROBADOS AL EJÉRCITO, EN LA GRANJA”",
        description1:
          "En el cuartel de los tupamaros descubierto en Pajas Blancas había, entre las armas carbonizadas en el incendio, por lo menos cuatro fusiles robados al Ejército... Existe un croquis a cuyo pie dice: “Este plano muestra detalladamente las instalaciones que componían el cuartel de los tupamaros descubierto en Pajas Blancas merced a un siniestro cuyas causas se investigan. Allí las autoridades hallaron fusiles robados al Ejército Nacional”.",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-base-de-operaciones-terrorista/n_6.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/descubren-base-de-operaciones-terrorista/n_7.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("October 14, 1968"),
        title: "“BASE TUPA: INCENDIO NO ESTABA PLANEADO”",
        description:
          'Aparecen fotos a cuyo pie dicen: "Armas largas y cortas semidestruídas por el fuego, entre los muchos materiales extraños de hallar en una chacra. En uno de los árboles más altos, un mirador, desde el cual se divisaba largo trecho del Camino Pajas Blancas, y vehículos de procedencia delictiva, en proceso de disfraz para ser utilizado por los tupamaros".',
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-base-de-operaciones-terrorista/n_8.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/descubren-base-de-operaciones-terrorista/n_9.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("October 14, 1968"),
        title: "“TUPAMAROS: INCENDIO ACCIDENTAL”",
        description:
          "... Grande fue la sorpresa de los hombres del Cuartel Centenario cuando hallaron restos de armas quemadas, monedas, billetes semi quemados y herramientas que no se justificaban en una chacra... Y hallaron nuevas “cosas raras en una chacra”, como una camioneta Commer, una Volkswagen, un Land Rover y una motoneta, todo ello en vías de reparación o transformación... fue hallado en la chacra el esqueleto de un transmisor portátil que fuera robado con otros elementos técnicos en la planta emisora de Radio Ariel...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-base-de-operaciones-terrorista/n_10.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/descubren-base-de-operaciones-terrorista/n_11.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“La persona que lo había alquilado con documentos falsos era Marenales, conmigo, que habíamos pasado como si fuera una pareja”, nos dice María Elía.</p>
          <p>“Esa chacra que teníamos en Camino Pajas Blancas entre Tomkinson y López, era el Cantón principal del MLN. Ahí estaban todos los documentos, absolutamente todo, y entrábamos gente también.</p>
          <p>Ahí se armaron todas las acciones que se hicieron en ese momento. Se hizo la 2ª Convención. Ese fue un lugar muy importante mientras existió.</p>
          <p>Estaba el taller de armas, el de explosivos, se camuflaban los autos, se reunía la Dirección.</p>
          <p>Vivían Manera y Marenales; y el Ñato (Fernández Huidobro) y el Bebe (Sendic) iban constantemente.</p>
          <p>Montamos todo un cerco al lugar para ver si ellos llegaban y no llegaron, ni el primero ni el segundo día. Después que logramos evacuar, yo propuse incendiar todo.</p>
          <p>Quemamos el lugar porque teníamos un montón de dinamita que estaba cristalizada...</p>
          <p>Juntamos todo lo que encontramos, lo rodeamos con dinamita pusimos una mecha larga, la prendimos y nos fuimos...”.</p>`,
          year: new Date("2011-1-1"),
          name: "Ana la guerrillera. Una historia de Lucía Topolanski",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Uruguay B S.A.",
          pages: "págs. 126-128",
          author: "Caula y Silva",
        },
        {
          fragment: `<p>“Entrevista a Julio Marenales</p>
          <p>“... Por ejemplo, en el cantón que llamábamos “Marquetalia”, cuando tuvimos una evacuación –porque se produjo una especie de cerco– una de las personas que tuvo la cabeza más fría fue la Parda Topolanski... Como responsable del cantón, resolví entonces que cuando yo no estuviera, fuera ella la responsable...</p>
          <p>Marquetalia, una chacra que teníamos en la entrada de Pajas Blancas, era nuestra base operativa. Yo era responsable de ese local, en un principio junto a Manera”.”.</p>`,
          year: new Date("2001-1-1"),
          name: "La izquierda armada. Ideología, ética e identidad en el MLN-Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones Trilce",
          pages: "págs. 226-231",
          author: "Aldrighi",
        },
        {
          fragment: `<p>“Pero antes de comenzar a relatarlos, describamos el “Siete”, principal base de operaciones de la columna 2, conocida en la jerga interna, ya se verá porqué, como, “Marquetalia”.</p>
          “Marquetalia” era refugio, depósito, base de operaciones, taller, escuela de cuadros, lugar de grandes reuniones... En ella, tres meses después realizaríamos la II Convención Nacional.</p>
          <p>Un taller de armería y uno de vehículos, que a la vez se utilizaba como taller para todo servicio, funcionaban allí.</p>
          <p>Con los recientemente evacuados, y mientras provisoriamente permanecen allí, se montó el laboratorio de explosivos...</p>
          <p>Varios vehículos, a veces hasta tres o cuatro, de distinto tipo, eran disfrazados y mantenidos allí...</p>
          <p>... La guardia, que debía vigilar también otros puntos, contaba con una atalaya disimulada en las copas de unos altos árboles, a la que se subía por una delgada escalerilla.”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 3: el MLN",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "págs. 201-203",
          author: "Fernández Huidobro",
        },
        {
          fragment: `<p>“A esa chacra de tres hectáreas los tupamaros comenzaron a llamarla Marquetalia, como la zona liberada por las fuerzas revolucionarias colombianas: allí entrenaban, formaban a los nuevos guerrilleros, practicaban tiro, montaron un taller de armería, un laboratorio de explosivos y otro de documentos de identidad, camuflaban vehículos y servía de refugio a decenas de clandestinos. Era como el gran “berretín” de la organización...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 324",
          author: "Pernas",
        },
      ],
    },
  },
  {
    date: new Date("October 18, 1968"),
    title: "Documento terrorista sobre el movimiento obrero-estudiantil",
    slug: "documento-terrorista-sobre-el-movimiento-obrero-estudiantil",
    type: "otras-acciones",
    newsPapers: [
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("October 18, 1968"),
        title: "“TUPAMAROS: ADMITEN DESVALIDEZ POPULAR”",
        description:
          "...se halló un documento cuya propiedad fue admitida, donde se analiza la situación obrero estudiantil... En él se pone de manifiesto: La injerencia de los Tupamaros en la acción estudiantil, a la que se le considera como “punta de lanza”. El pasaje del trabajo sindical a otras formas de lucha “revolucionaria”. La debilidad del movimiento y su desvalidez popular. La actividad del proceso en ese momento, así como las tendencias imperantes: la burocracia bolche y M.A.P.U. (Movimiento de Acción Popular Uruguayo), así como las que están “para ir para adelante (Bellas Artes ampliada como dijera algún compañero)”. Los centros del movimiento Bellas Artes, Agronomía, Arquitectura, Medicina, así como su filiación ideológica. Las etapas previstas para la acción de futuro... organizativa, acciones callejeras y acciones militares (robo de armas). 1) Etapa organizativa: organizar a la gente dispuesta a meter para adelante, en pequeños comandos con el fin de realizar: 2) Etapa. Acciones Callejeras: esto sería de unos 100 tipos con objetivos concretos y apoyo militar, de carácter esencialmente propagandístico… 3) Etapas Acciones Militares: esta… etapa... consiste en organizar militarmente, robar armas, abastecerse... Hay participación de todo el mundo y mucha combatividad. En general hay unos 500 tipos seguros radicalizados, entre universitarios y secundarios. Se da el caso de que esta última está radicalizada en mayor grado por los universitarios...",
        subtitle: "“En Buenos Aires”",
        subDescription:
          "... algunos elementos tupamaros que habrían logrado escapar a la Argentina, saliendo por la costa de Colonia, en lancha, para llegar al Delta del Tigre, donde serían esperados y auxiliados por miembros de la organización argentina “Tacuara”, en muchos aspectos similar a los “Tupamaros”, con los que se sabía mantenían contacto.",
        images: [
          {
            type: "noticia publicada",
            src: "/documento-terrorista-sobre-el-movimiento-obrero-estudiantil/n_1.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/documento-terrorista-sobre-el-movimiento-obrero-estudiantil/n_2.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
  },
  {
    date: new Date("December 10, 1968"),
    title: "Descubren otra base de operaciones terrorista",
    slug: "descubren-otra-base-de-operaciones-terrorista",
    type: "otras-acciones",
    vindicatedActions: {
      books: [
        {
          fragment: `<p>“Pocos días después, indiscutibles errores de Sendic provocan la caída de un importante reducto. La Policía llegó hasta una chacra que el MLN poseía en Pando, y fueron detenidos ocho compañeros, casi todos de alto rango en el Movimiento, entre los que se encuentran Falero Montes de Oca, Bassini, De Lucía y Pedro Dubra...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Autobiografía de Amodio Pérez",
          place: "Montevideo - Uruguay",
          edition: "Arca Editorial",
          pages: "págs. 35-36",
          author: "Pérez",
        },
        {
          fragment: `<p>“Raúl, con su paupérrima credencial cívica, había logrado arrendar un terrenito en la Ruta 75, más allá de Pando.</p>
          <p>Era una muy pequeña chacrita descampada, en pronunciado declive... Al fondo la cruzaba una cañada cuyos cauces daban la única cobertura...</p>
          <p>Lo primero que hicimos fue montar una carpa contra la cañada. Luego comenzamos a clavar los piques del futuro rancho de fajina… Un tumulto de herramientas, armas y materiales de todo tipo, metidos allí...</p>
          <p>En poco más de una semana los compañeros plantaron un rancho... Pronto sería mejorado y ampliado, pero ya teníamos nueva base...”.</p>`,
          year: new Date("1994-1-1"),
          name: "Historia de los Tupamaros. Tomo 3: el MLN",
          place: "Montevideo - Uruguay",
          edition: "TAE Editorial",
          pages: "págs. 163-164",
          author: "Fernández Huidobro",
        },
        {
          fragment: `<p>“... A mediados de diciembre cae una chacra en Pando, donde son detenidos Falero, Bassini y Pedro Dubra que constituían el comando de una de las columnas recientemente formadas...</p>
          <p>... Se perdía un comando íntegro, en el que estaba Falero, un hombre con una gran experiencia militar y seguro tanto en la planificación como en la ejecución, Bassini, en ese momento único experto en explosivos y gran cantidad de materiales...”.</p>`,
          year: new Date("2015-1-1"),
          name: "Palabra de Amodio. La otra historia de los Tupamaros",
          place: "Montevideo - Uruguay",
          edition: "Ediciones de la Plaza",
          pages: "pág. 268",
          author: "Marius",
        },
      ],
    },
    newsPapers: [
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("December 10, 1968"),
        title:
          "“OCHO TUPAMAROS CAYERON LUEGO DE SOSTENER UN VIOLENTO TIROTEO”. “HABÍA UN LABORATORIO PARA FABRICAR BOMBAS”. “SE INCAUTÓ UN ARSENAL MUY VALIOSO”. “POSEÍAN UN TALLER PARA AUTOS”",
        description:
          "... Aparecen fotos de tupamaros capturados y uno de los ranchos descubiertos.",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_2.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 19)',
        date: new Date("December 10, 1968"),
        title: "“DOS RANCHOS ERAN LA BASE TUPAMARA”",
        description:
          "Dos grandes ranchos situados a menos de dos cuadras de la carretera, eran al mismo tiempo la vivienda, el arsenal y la base de operaciones del comando tupamaro que hoy desbarató, sorpresivamente, la policía. Esas edificaciones, levantadas por los extremistas con sus propias manos, están frente a la Ruta 75, en el kilómetro 36,800 y a corta distancia de Pando.",
        subtitle: "“12 Armas y 700 Proyectiles”",
        subDescription:
          "La policía encontró dos ametralladoras de la Guardia Metropolitana, una metralleta PAM de fabricación argentina, una pistola de señales, un revólver 32 niquelado, un Smith & Wesson 38 de la policía, dos metralletas de marca no especificada, un fusil “Máuser”, una escopeta de caza de dos caños, otra de aire comprimido, un matagatos y más de 700 proyectiles para armas de calibre 7.65, 32, 38 y 45.",
        subtitle1: "“Material Quirúrgico y Uniformes”",
        subDescription1:
          "Los tupamaros tenían también, en el rancho, instrumental quirúrgico, cajas de gasas esterilizadas, frascos de suero fisiológico, medicamentos principalmente, sulfas y antibióticos y un tubo de oxígeno con su correspondiente manómetro, para atender a los terroristas que pudieran resultar heridos durante sus incursiones. Esos materiales le permitirían, eventualmente, realizar intervenciones quirúrgicas. Con esos efectos había dos uniformes, una túnica del Hospital Pasteur y un saco y un pantalón de brin con el distintivo de UTE. La policía secuestró, así mismo, 14 cédulas de identidad y un número no identificado de libretas de chofer falsificadas...",
        subtitle2: "“Laboratorio y Taller Mecánico”",
        subDescription2:
          "... los tupamaros habían instalado un taller mecánico y un laboratorio. En el taller, trabajaban con un coche “Volkswagen” de matrícula falsa... En esa dependencia empleada obviamente para desmontar y camuflar automóviles robados, la policía se incautó de juegos de chapas con diferentes características. En el laboratorio, había granadas de mano, bombas de comparador, detonantes para artefactos de efecto retardado, tubos de ensayo, pinzas, elementos para la fabricación de explosivos y varios caños de revólveres de calibre 38.",
        subtitle3: "“Libros, Manuales, Correspondencia”",
        subDescription3:
          "Se encontraron numerosos libros sobre guerrilla urbana, numerosas fotos del “Che” Guevara y de Fidel Castro “figuras inspiradoras de la acción terrorista” y manuales para la fabricación de explosivos y manejo de armas… un volumen apreciable de cartas, anotaciones y misivas correspondientes a los enlaces y contactos de la organización... En un folleto que distribuían entre sus pares, constan los números de matrículas y las características de todos los automóviles particulares que actualmente emplea la policía. Aparecen 10 fotos de Tupamaros nombrándolos:...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_3.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_4.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 20)',
        date: new Date("December 10, 1968"),
        title: "“LA GUARIDA DE LOS TUPAMAROS QUEDABA MUY PRÓXIMA A PANDO”",
        description:
          "Ocho tupamaros, siete hombres y una mujer, fueron capturados tras violento tiroteo en torno a unos ranchos enclavados en medio de un monte a la altura del kilómetro 36,800 de la Ruta 75, a corta distancia de la ciudad de Pando. Los extremistas se entregaron después de ser herido uno de ellos. El primer dato que dio la pista para apresar a los tupamaros fue tomar conocimiento de que en los referidos ranchos de la Ruta 75 de Canelones había un grupo de hombres que se dedicaban allí a desmontar automotores. Una discreta pesquisa en los alrededores de los ranchos permitió establecer que aquellos individuos eran extremistas. En la zona el asunto era muy notorio ya que incluso los vecinos llamaban a las viviendas “ranchos de los tupamaros”.",
        subtitle: "“Lista de los Detenidos”",
        subDescription:
          "Los tupamaros fueron llevados a la Comisaría 7ª donde... se procedió a la identificación de los detenidos estableciéndose que entre ellos había varios de los tupamaros que vienen siendo buscados desde hace varios años, por la comisión de innumerables delitos, atentados terroristas, tiroteos con la policía, asaltos a bancos, robos en armerías y en la Intendencia de Policía, secuestro del Presidente interventor de UTE y últimamente por el asalto al Casino del Hotel Carrasco y el secuestro de tres transportistas de vehículos taxi flet. Los integrantes del M.L.N. capturados son los siguientes:... El octavo está internado en el Hospital Pasteur y no había trascendido su identificación. Uno de los apresados presenta dos cicatrices de heridas de bala en una pierna",
        title1: "“CAYERON ... ”",
        description1:
          "Entre los “tupamaros” detenidos hoy figuran tres elementos identificados por la policía desde tiempo atrás... Cabe señalar además que la base de operaciones en donde los “tupamaros” fueron ubicados en la jornada, presenta caracteres similares a la que fuera descubierta tiempo atrás en Pajas Blancas luego de un incendio ocurrido en lo que aparentemente era un rancho común...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_5.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_5.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("December 10, 1968"),
        title:
          "“CAPTURARON A 8 TUPAMAROS EN UNA CHACRA DE PANDO. Tras Nutrido Tiroteo Cayeron esta Mañana 7 Hombres y una Mujer”",
        description: "Aparece foto del arsenal incautado...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_6.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_7.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("December 10, 1968"),
        title: "“HALLAN VERDADERO ARSENAL”",
        description:
          "... En la granja se observaba desusados movimientos. El predio, que perteneciera a la sucesión del gran escritor compatriota Filisberto Hernández y que actualmente es propiedad de una persona de apellido Rodríguez, a la que se procura localizar, ... Según informaciones proporcionadas por la policía se halló en el lugar un verdadero arsenal, armas cortas y largas de origen nacional y extranjero, dos metralletas que en el curso de otras tantas acciones habían sido hurtadas a funcionarios de la Guardia Metropolitana, balas de todo calibre, municiones, materiales para fabricar explosivos y bombas caseras, así como un laboratorio para la recarga de proyectiles... Aparecen fotos de... y de...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_8.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_9.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("December 11, 1968"),
        title: "“HOY DECLARAN ANTE EL JUEZ”",
        description:
          "... Los detenidos han sido interrogados..., estimándose que de dichos interrogatorios pueden surgir valiosos elementos para efectuar nuevos e importantes procedimientos...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_10.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_11.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("December 11, 1968"),
        title: "“QUIEREN EL “PARAÍSO” A BOMBAS Y BALAS”",
        description:
          "Aparecen fotos de... Aparece foto a cuyo pie dice: “La mesa del laboratorio, así como la estantería que se aprecia en el fondo, estaba cubierta de explosivos armados y elementos para su fabricación”. Aparece otra foto a cuyo pie dice: “Una “bomba” del tipo que los tupamaros fabricaban en el refugio cercano a Pando”... Atrás, sobre la mesa, granadas y bombas de gas del tipo que utiliza la Guardia Metropolitana. Aparece otra foto a cuyo pie dice: “Una máquina de armar y rellenar bombas, cartuchos y balas. Los terroristas tenían todo dispuesto para autoabastecerse de este tipo de elementos de los que se sorprendió un gran depósito.” Aparece croquis a cuyo pie dice: “El plano de la chacra a la que la Policía llegó por ladrones de autos y se fue con tupamaros”.",
        title1: "“EL CÍRCULO DE LA AUTODESTRUCCIÓN”",
        description1:
          "... surgieron en América los imitadores de Fidel y su guerrilla. En casi una década de intento en distintas latitudes del Continente, se ha demostrado que por lo menos hasta ahora las circunstancias no se dan para reeditar nuevas Cubas. Pero en el tiempo, esos frustrados guerrilleros, esos Tupamaros nuestros, se han profesionalizado. En el círculo vicioso de la actividad terrorista y la clandestinidad, se ven acorralados. Alrededor, una realidad que no se hace eco de su postura. Adentro, vivencias desubicadas que se autodestruyen o mueren destruyendo gratuitamente, en medio de la desaprobación colectiva de una sociedad que no concibe las bombas y las balas, el fuego y la sangre, con factores de su felicidad.",
        title2:
          "“LA VIDA EN LA CHACRA: COSECHABAN EXPLOSIVOS Y PRACTICABAN TIRO”",
        description2: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_12.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_12.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("December 11, 1968"),
        title:
          "“OCHO TUPAMAROS FUERON DETENIDOS CERCA DE PANDO. UN HERIDO TRAS BREVE RESISTENCIA; LAS VIVIENDAS OCULTABAN UNA FÁBRICA DE EXPLOSIVOS”",
        description: "Aparecen fotos de los tupamaros detenidos...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_13.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_13.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 2)',
        date: new Date("December 11, 1968"),
        title: "“DIERON CON LA GUARIDA AL SEGUIR UN AUTO ROBADO”",
        description:
          "Un rudo golpe asestó ayer la policía a uno de los comandos del denominado Movimiento de Liberación Nacional “Tupamaros”, al detener en una granja ubicada a cinco kilómetros de la ciudad de Pando, a ocho integrantes de una de sus células...",
        title1: "“TENÍAN UNA CLÍNICA MÓVIL PARA SER USADA EN LAS EMERGENCIAS”",
        description1:
          "... Sorprendió la gran cantidad de material sanitario encontrado, que lo hace apto para instalar una tienda de campaña de primeros auxilios. Una caja de acero con numerosos instrumentos de cirugía, un tubo de oxígeno con medidor Nº 1002, una túnica de enfermero perteneciente al Hospital Pasteur según el sello que tiene impreso, jeringas para inyectables y numerosos medicamentos...",
        title2: "“DINAMITA: ROBO EN TACUAREMBÓ QUEDA ACLARADO”",
        description2:
          "Tacuarembó... El Día publicó la primicia del robo de 225 kilos de dinamita, perteneciente a la Empresa Techin,... han permitido..., y confirmar versiones, determinar totalmente que quienes hurtaron el peligroso explosivo fueron los Tupamaros...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_14.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_14.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("December 11, 1968"),
        title: "“ENTRE LOS DETENIDOS HAY CABECILLAS”",
        description:
          "... Las detenciones dieron por resultado, desde el punto de vista policial, el ubicar a por lo menos tres de los hombres sindicados como cabecillas o cerebros de la organización... Aparece foto de las viviendas que servían como enterradero.",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_15.jpg",
            alt: "noticia publicada por el diario El Día",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_15.jpg",
            alt: "página diario completa publicada por el diario El Día",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("December 11, 1968"),
        title: "“TUPAMAROS: PODÍAN HACER ALTA CIRUGÍA”",
        description: "...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_16.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_17.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("December 11, 1968"),
        title:
          "“SE PREPARABA EN PANDO A LOS NUEVOS TUPAMAROS. Centro de Formación, Arsenal y Sanatorio”",
        description:
          "Trascendió que las dos ametralladoras de la Guardia Metropolitana incautadas en la guarida de Canelones donde cayeron ayer ocho tupamaros, son las arrebatadas a los funcionarios de aquella unidad, cuando el asalto al Casino Hotel Carrasco y durante el golpe en el supermercado de Scosería contra el remesero del Banco Mercantil. El internado en el Hospital Maciel es...",
        subtitle: "“Hospital de Campaña”",
        subDescription:
          "... además de ser uno de los ideólogos del movimiento se desempeña como médico de los miembros de las células... domina la cirugía lo que además está acreditado por las altas calificaciones que obtuvo cuando brindó los exámenes correspondientes. Tiempo atrás debió practicar una difícil intervención quirúrgica a uno de los hermanos... en oportunidad en que un compañero lo hirió de bala en el abdomen accidentalmente. Una eficaz colaboradora del extremista es la estudiante de Medicina...",
        subtitle1: "“El Dinero de “Expropiaciones”",
        subDescription1:
          "... el dinero de las “expropiaciones” (asaltos) que realizan los tupamaros lo administra el estado mayor del MLN que distribuye a las diferentes células, unas 35, las sumas necesarias para los gastos diarios de cada una de ellas que no puede estar integrada por más de diez personas. Aparece croquis con la ubicación de los policías durante el tiroteo con los tupamaros.",
        subtitle2: "“También en Tacuarembó”",
        subDescription2:
          "Según datos oficiosos, un comando tupamaro había robado 225 kilos de dinamita, cuando promediaba el pasado mes de noviembre, en el campamento de la empresa que construye la Ruta 26 en Tacuarembó… el hurto de los explosivos fue cometido el 16 de noviembre en la madrugada. Los ladrones violentaron el candado del polvorín, llevaron 10 de los 59 cajones de dinamita que allí se guardaban, y luego pintaron en una de las paredes del local la leyenda: “Tierra Tupamaros”, junto a una gran estrella en rojo.",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_19.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_20.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (en Portada)',
        date: new Date("December 12, 1968"),
        title:
          '"... NARCOTIZÓ AL PRESIDENTE DE UTE. RECONOCIERON A... EMPLEADOS DEL CASINO”',
        description: "",
        subtitle1: '"Al Juzgado"',
        subDescription1:
          "Aparecen fotos de... y... cuando llegan a la sede judicial.",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_21.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_21.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 14)',
        date: new Date("December 12, 1968"),
        title: "“FUERON PROCESADOS OTROS 7 TUPAMAROS”",
        description:
          "Siete de los ocho tupamaros capturados el martes en la chacra de Canelones, fueron procesados por la Justicia de Instrucción de 1er. Turno… Sólo no hay dictamen judicial sobre el extremista..., pues permanece en asistencia en un Hospital por el balazo que recibió durante el enfrentamiento...",
        subtitle1: "“Los Delitos Tipificados”",
        subDescription1:
          "Menciona los nombres de los procesados y los delitos que a cada uno se les tipificaron...",
        subtitle2: "“Larga Serie de Asaltos”",
        subDescription2:
          "De acuerdo a lo que trascendió, además del asalto al Casino, que sólo admitió haberlo cometido..., los tupamaros recientemente capturados aceptaron la responsabilidad del movimiento en otros golpes... Una de las metralletas de la Guardia Metropolitana y un revólver de reglamento incautado en los ranchos de Canelones, pertenecen al policía que cumplía funciones de vigilancia cuando el asalto al casino. Además, este funcionario reconoció a... y también a... como integrantes de la banda que llegó en la madrugada del 29 de noviembre a la casa de juego de Carrasco. Aparece foto de... al salir del juzgado.",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_22.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_23.jpg",
            alt: "página diario completa publicada por el diario El Diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 8)',
        date: new Date("December 12, 1968"),
        title: "“SIETE TUPAMAROS PROCESADOS”",
        description:
          "Los interrogatorios duraron 16 hs... Los reconocieron como atracadores del Casino y uno de ellos habría confesado... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_24.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_25.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
      {
        name: 'Diario "Acción" (Página 6)',
        date: new Date("December 13, 1968"),
        title:
          "“ACLARADO EL ATRACO DEL CASINO DE CARRASCO”. “TRES DETENIDOS DECLARARON QUE EN LA CHACRA HABÍA UN PORTAFOLIOS CON $ 750.000”",
        description:
          "... y un tercer integrante del grupo cuyo nombre no ha sido proporcionado, denunciaron ayer que en el interior de uno de los ranchos allanados por la policía se encontraba además de todos los objetos encontrados, un portafolios que contenía 750.000 pesos, dos revólveres y una pistola. La denuncia, que tomó de sorpresa a la policía y a los funcionarios policiales actuantes, habría sido formulada por los tres hombres por separado en el curso de sus declaraciones ante el Juez Dr. Pereira Manelli. Habrían señalado al mismo que el dinero era producto del atraco al Casino de Carrasco...",
        images: [
          {
            type: "noticia publicada",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_26.jpg",
            alt: "noticia publicada por el diario Acción",
          },
          {
            type: "página diario completa",
            src: "/descubren-otra-base-de-operaciones-terrorista/n_27.jpg",
            alt: "página diario completa publicada por el diario Acción",
          },
        ],
      },
    ],
  },
];
