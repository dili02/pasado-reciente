export interface TerroristActionDefinition {
  date: Date;
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
}

export type TypeTerroristActionDefinition =
  | "asesinatos"
  | "atentado"
  | "secuestros"
  | "robo-armamento-explosivos"
  | "otras acciones";

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
  title4?: string;
  description4?: string;
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

  getAllExplosiveWeaponsTheft: async (): Promise<
    TerroristActionDefinition[]
  > => {
    return TerroristActions.filter(
      (action) => action.type === "robo-armamento-explosivos"
    ) // Filtrar acciones por tipo
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
        description: `... El infortunado agente había nacido…confesó su directa participación en la muerte del agente de Shangrilá Antonio Fernández... sería el autor del enfrentamiento... provocaría la muerte del agente Pallas...`,
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
        description: `Vendado, recibió dos balazos en la sien… apareció el cuerpo del infortunado Dan A. Mitrione, asesinado de un balazo en la cabeza... en el interior de un automóvil hurtado anoche.. Aparecen fotos.`,
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
          <p>Veinticuatro horas después de las capturas de Almería, los tupamaros del nuevo ejecutivo y las direcciones intermedias se reunieron en una casa del barrio Jacinto Vera… La suerte de Mitrione se decidió allí, a pocas cuadras de la Escuela MiIlitar...<p>
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
          <p>… el secuestro de Peirano Facio fracasó porque el chofer de uno de los vehículos no controló y venía siendo seguido por un coche policial (en el tiroteo murió el cadete Castiglioni)...”.</p>`,
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
          // marital: "casado",
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
          childsDescription: " (1 hijo menore de edad)",
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
    title:
      "Armamento en domicilios de Rafael Guidet y Luis Bruzzone - Montevideo",
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
];
