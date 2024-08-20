import { title } from "process";

export type TerroristActionDefinition = {
  // id: string;
  totalOfVictims?: number;
  date: Date;
  title: string;
  slug: string;
  type: TypeTerroristActionDefinition;
  videos?: VideosTerroristActionDefinition[];
  vindicated?: {
    description: string;
    books: Book[];
  };
  notice?: NewsPaperDefinition[];
  ilustration?: IlustrationActionDefinition;
  apologyForCrimeInImages?: ApologyForCrimeInImagesDefinition[];
  placeOfOccurrence?: ImageDefinition;
  virtualMemorial?: ImageDefinition[];
  victims?: TerrorActionsVicitmDefinition[];
};

// export type VirtualMemorialDefinition = {
// };

export type TerrorActionsVicitmDefinition = {
  name: string;
  age?: number;
  childs?: number;
  daughter?: number;
  childsDescription?: string;
  marital?: string;
  avatar?: ImageDefinition;
};

export type ApologyForCrimeInImagesDefinition = {
  title: string;
  description: string;
  images: ImageDefinition[];
};

export type IlustrationActionDefinition = {
  title: string;
  subTitle: string;
  description: string;
  images: ImageDefinition[];
};

export type ImageDefinition = {
  src: string;
  alt: string;
};

export type NewsPaperDefinition = {
  name: string;
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
  title2?: string;
  description2?: string;
  title3?: string;
  description3?: string;
  imgSrc?: string[];
  images?: NoticeImageDefinition[];
};

export type NoticeImageDefinition = {
  src: string;
  alt: string;
  type: string;
};

export type TypeTerroristActionDefinition =
  | "asesinato"
  | "atentado"
  | "secuestro"
  | "robo"
  | "otras acciones";

export type VideosTerroristActionDefinition = {
  id: string;
  title: string;
  src: string;
  slug: string;
  date: Date;
};

export type Book = {
  fragment: string;
  year: Date;
  name: string;
  place: string;
  edition: string;
  pages: string;
};

export const api = {
  getAll: async (): Promise<TerroristActionDefinition[]> => {
    return TerrorActions;
  },
  getAllWithVideo: async () => {
    const terroristActionsWithVideo = TerrorActions.filter(
      (action) => action.videos
    ).flatMap((action) =>
      action.videos!.map((video) => ({
        id: video.id,
        title: video.title,
        src: video.src,
        slug: video.slug,
        date: video.date,
      }))
    );

    // const terroristActionsWithVideo = TerrorActions.filter(
    //   (action) => action.videos
    // );

    return terroristActionsWithVideo;
  },

  getKills: async (): Promise<TerroristActionDefinition[]> => {
    // return TerrorActions.filter((action) => action.type === "asensinato").sort(
    //   (a, b) => b.date.getTime() - a.date.getTime()
    // );
    // sort ascendente
    return TerrorActions.filter((action) => action.type === "asesinato") // Filtrar acciones por tipo
      .sort((a, b) => a.date.getTime() - b.date.getTime()); // Ordenar por fecha ascendente
  },

  getActionBySlug: async (slug: string): Promise<TerroristActionDefinition> => {
    const action = TerrorActions.find((action) => action.slug === slug);

    if (!action) throw new Error(`Accion Terrorista no encontrada`);

    return action;
  },
};

export const TerrorActions: TerroristActionDefinition[] = [
  {
    //   id: "1",
    date: new Date("1972-5-4"),
    title: "Asesinato del Doctor Julio Morató",
    slug: "doctor-julio-morato",
    type: "asesinato",
    videos: [
      {
        id: "rdTEayWgJxE",
        title:
          "Raquel Morató, hija del Dr. Julio Morató, asesinado por el MLN-Tupamaros.",
        src: "https://www.youtube.com/embed/rdTEayWgJxE",
        slug: "asesinato-doctor-julio-morato",
        date: new Date("1972-5-4"),
      },
    ],
    notice: [
      {
        name: 'Diario "El Día"',
        date: new Date("1972-5-5"),
        title: "“ALEVOSÍA SIN PAR: MATAN A UN CIENTÍFICO EMINENTE”",
        description:
          "Un eminente científico compatriota, el Dr. Julio Federico Morató Manaro, fue brutalmente asesinado por los sediciosos... Aparecen fotos y croquis.",
        imgSrc: ["/julio-morato/noticia-1.jpg", "/julio-morato/noticia-2.jpg"],
      },
      {
        name: 'Diario "El Diario"',
        date: new Date("1972-5-5"),
        title: "“LOS TUPAMAROS ASESINARON A UN EMINENTE CIENTÍFICO”",
        description:
          "La violencia cobró ayer otra víctima civil, cuando un grupo tupamaro con la aparente misión de robarle armas a un coleccionista, terminó por eliminar su sorpresiva resistencia. Con cinco heridas de balas calibre 45... Aparecen fotos..",
        imgSrc: ["/julio-morato/noticia-3.jpg", "/julio-morato/noticia-4.jpg"],
      },
    ],
  },
  {
    //   id: "2",
    date: new Date("1965-1-11"),
    title: "Bomba al Consulado de Brasil",
    slug: "bomba-consulado-brasil",
    type: "atentado",
  },
  {
    // id: "3",
    date: new Date("1972-8-7"),
    title: "Asesinan en local del Frente Aamplio a Alfonso Aranchet",
    slug: "asesinan-en-local-del-frente-amplio-a-alfonso-aranchet",
    type: "asesinato",
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
  },
  {
    //   id: "4",
    date: new Date("1971-6-22"),
    title: "Asesinato del Sargento (G.M.) Walter Custodio",
    slug: "sesinato-sargento-walter-custodio",
    type: "asesinato",
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
    notice: [
      {
        name: 'Diario "El Día"',
        date: new Date("1971-6-23"),
        title:
          "TÍTULO: “POLICÍA Y ESTUDIANTE MUEREN EN NUEVA ACCIÓN EXTREMISTA”",
        description:
          "... un funcionario transitaba franco y ropas de civil… advirtió que en la sucursal de la firma Manzanares S.A. se estaba perpetrando un atraco… siendo baleado por los delincuentes resultando con una herida de bala en la espalda ... Aparecen fotos.",
        imgSrc: [
          "/walter-custodio/el-dia-1.jpg",
          "/walter-custodio/el-dia-2.jpg",
        ],
      },
      {
        name: 'Diario "El Diario"',
        date: new Date("1971-7-5"),
        title: "“ATRAPAN A UNA TUPAMARA QUE ASESINÓ A UN POLICÍA”",
        description:
          "Cinco sediciosos detenidos recientemente por la Policía, fueron procesados... una de tales personas (concretamente una joven estudiante de Medicina), ha sido identificada como autora de los disparos que causaron la muerte de un funcionario policial... La mujer... fue reconocida como... Además los delincuentes... y... fueron reconocidos también como participantes del referido asalto... Aparecen fotos.",
        imgSrc: [
          "/walter-custodio/el-diario-1.jpg",
          "/walter-custodio/el-diario-2.jpg",
        ],
      },
      {
        name: 'Diario "Acción"',
        date: new Date("1971-6-23"),
        title: "“ASESINARON POR LA ESPALDA AL POLICÍA (TENÍA CINCO HIJOS)”",
        description:
          "... Volvía con la leche para sus múltiples hijos cuando vio que un grupo de facciosos asaltaba la vecina sucursal de Manzanares... La responsabilidad y arrojo del Sgto. de la “Metro” Walter Custodio Rodríguez lo encaminaron hacia la muerte al enfrentar solo a varios conspiradores... Aparece foto.",
        imgSrc: [
          "/walter-custodio/accion-1.jpg",
          "/walter-custodio/accion-2.jpg",
        ],
      },
    ],
  },
  {
    // id: "5",
    date: new Date("1969-7-7"),
    title: "Agente Germán Garay",
    slug: "asesinato-agente-german-garay",
    type: "asesinato",
    totalOfVictims: 1,
    vindicated: {
      description: `Medios periodísticos destacaron este episodio aportando la noticia del momento. Nuevamente un policía fue la víctima de un ataque terrorista, el asesinato del Agente Germán Garay se produjo en momentos que los subversivos protagonizaban cinco operativos, este documento dice que este agente, próximo a su retiro, fue ultimado el 7 de julio de 1969, y fueron 76 los policías, militares y civiles víctimas mortales de las acciones terroristas en este período de la llamada historia reciente.
Los protagonistas, participantes y/o autores brindan mayor información confirmando los registros periodísticos de la época, entre ellas se señalan:
      `,
      books: [
        {
          fragment:
            "'... El 7 de julio, en cinco operativos, los tupamaros lograron desarmar a ocho policías. Si bien en la columna 10 estaba muy presente lo de entrenarse para no herir a nadie, un grupo de otra columna no siguió -o no pudo seguir- las recomendaciones: Germán Garay, un viejo policía, terminó muerto ...'",
          year: new Date("2017-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 397",
        },
        {
          fragment:
            "'... En las primeras horas de la mañana del 7 de julio, y en el lapso de una hora, se hicieron cinco desarmes, de los cuales fueron víctimas ocho agentes de Policía. En todos los casos los atacantes actuaron en grupos de tres o cuatro personas. En uno de los ataques dieron muerte a un veterano agente llamado Germán Garay ...'",
          year: new Date("2007-1-1"),
          name: "Cero a la izquierda. Una biografía de Jorge Zabalza",
          place: "Montevideo - Uruguay",
          edition: "Letraeñe Ediciones",
          pages: "pág. 76",
        },
      ],
    },
    notice: [
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
            type: "página diario completa",
            src: "/german-garay/14A-1-2-3-4-18-Jul-69-port,1001.jpg",
            alt: "portada publicada por el diario el día",
          },
          {
            type: "noticia publicada",
            src: "/german-garay/14A-1-2-3-4-18-Jul-69-port,1001B.jpg",
            alt: "noticia publicada por el diario el día",
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
            type: "página en diario completa",
            src: "/german-garay/14B-1-2-3-4-07-Jul-69-port,1001.jpg",
            alt: "portada publicada por el diario el diario",
          },
          {
            type: "noticia publicada",
            src: "/german-garay/14B-1-2-3-4-07-Jul-69-port,1001B.jpg",
            alt: "noticia publicada por el diario el diario",
          },
        ],
      },
      {
        name: 'Diario "Acción" (en Portada)',
        date: new Date("1969-7-7"),
        title: "“TUPAMAROS ASESINARON POR LA ESPALDA A UN POLICÍA”",
        description:
          "Es uno de los cinco atentados contra ocho funcionarios. El doloroso episodio fue uno de los cinco que conmovieron hoy a la ciudad… Aparecen fotos de ...",
        imgSrc: [
          "/german-garay/14C-1-2-3-4-07-Jul-69-port,1002.jpg",
          "/german-garay/14C-1-2-3-4-07-Jul-69-port,1002B.jpg",
        ],
        images: [
          {
            type: "página de dairio completa",
            src: "/german-garay/14C-1-2-3-4-07-Jul-69-port,1002.jpg",
            alt: "portada publicada por el diario la accion",
          },
          {
            type: "noticia publicada",
            src: "/german-garay/14C-1-2-3-4-07-Jul-69-port,1002B.jpg",
            alt: "noticia publicada por el diario la accion",
          },
        ],
      },
    ],
    ilustration: {
      title: "Policía es asesinado por Terroristas en la vía pública",
      subTitle: "Germán Garay, 52 años, casado, cinco hijos",
      description:
        "Germán Garay, Agente de la Policía Nacional fue asesinado por Terroristas por la espalda",
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
          alt: "Terroristas armados atacan al Agente Germán Garay",
        },
      ],
    },
    virtualMemorial: [
      {
        src: "/german-garay/placeOfOccurrence.jpg",
        alt: "Aquí, en plena democracia, el 07/07/69 fue asesinado por Terroristas, Germán Garay perteneciene a la Policía Nacional, de 52 años de edad, casado, 5 hijos",
      },
    ],
    victims: [
      {
        name: "Agente Germán Garay",
        age: 52,
        childs: 5,
        marital: "casado",
        avatar: {
          src: "/german-garay/avatar.png",
          alt: "imagen de german garay",
        },
      },
    ],
  },
  {
    date: new Date("December 27, 1966 03:24:00"),
    title: "Comisario Antonio Silveira Regalado",
    slug: "comisario-antonio-silveira-regalado",
    type: "asesinato",
    totalOfVictims: 1,
    notice: [
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
          "Realiza un detallado relato del asesinato y de los acontecimientos. Un criadero de aves se utilizaba para reuniones secretas, ejercicios de tiro y refugio. Aparecen armas y un libro “50 preguntas a un guerrillero” con dedicatoria a Jorge durante su estadía en La Habana. El Tupamaro… había participado en el asalto al Banco La Caja Obrera Agencia Bella Vista. Identifican alias:...",
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
    title: "Comerciante Rafael Guidet",
    slug: "comerciante-rafael-guidet",
    type: "asesinato",
    totalOfVictims: 1,
    notice: [
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
          "Un coleccionista de armas… fue acribillado a balazos por un grupo de extremistas cuando intentaban robarle valiosas pistolas, revólveres y municiones… se produjo esta mañana pasada las 6.30 horas en el comercio de la Avda. General Flores 2687 esquina Vilardebó, propiedad de la víctima Rafael César Guidet Piotti. Aparece croquis de...",
        images: [
          {
            type: "página diario completa",
            src: "/rafael-guidet/noticia_3.jpg",
            alt: "pagina publicada por el diario el diario",
          },
          {
            type: "noticia publicada",
            src: "/rafael-guidet/noticia_4.jpg",
            alt: "noticia publicada por el diario el diario",
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
            type: "página diario completa",
            src: "/rafael-guidet/noticia_6.jpg",
            alt: "portada publicada por el diario el popular",
          },
          {
            type: "noticia publicada",
            src: "/rafael-guidet/noticia_5.jpg",
            alt: "noticia publicada por el diario el diario",
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
        name: "Rafael Guidet",
        age: 54,
        childs: 1,
        marital: "casado",
        avatar: {
          src: "/rafael-guidet/avatar.jpg",
          alt: "imagen de rafael guidet",
        },
      },
    ],
    ilustration: {
      title: "Sediciosos asesinan a un comerciante y coleccionista de armas",
      subTitle: "Germán Garay, 52 años, casado, cinco hijos",
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
          alt: "Terroristas exigen a Rafael Guidet entrega de armas.",
        },
      ],
    },
    virtualMemorial: [
      {
        src: "/rafael-guidet/placa_virtual.jpg",
        alt: "Aquí, en plena democracia, el 26/09/69 fue asesinado por Terroristas, Rafael Guidet, de 54 años de edad, casado, 1 hijo",
      },
    ],
    vindicated: {
      description: `Medios periodísticos destacaron este episodio aportando la noticia del momento. Nuevamente un policía fue la víctima de un ataque terrorista, el asesinato del Agente Germán Garay se produjo en momentos que los subversivos protagonizaban cinco operativos, este documento dice que este agente, próximo a su retiro, fue ultimado el 7 de julio de 1969, y fueron 76 los policías, militares y civiles víctimas mortales de las acciones terroristas en este período de la llamada historia reciente.
Los protagonistas, participantes y/o autores brindan mayor información confirmando los registros periodísticos de la época, entre ellas se señalan:
      `,
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
        },
      ],
    },
  },
  {
    date: new Date("October 08, 1969 03:24:00"),
    title: "Carlos Burgueño y Sgto. Radio Patrulla Enrique Fernández",
    slug: "acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando",
    type: "asesinato",
    totalOfVictims: 2,
    notice: [
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("October 08, 1969 03:24:00"),
        title: "ETREMENDO GOLPE LE ASESTÓ LA POLICÍA AL GRUPO EXTREMISTA",
        description:
          "...quedaban cinco elementos subversivos prófugos… se encuentran dos mujeres jóvenes, una de las cuales,… hirió accidentalmente a uno de sus compinches extremistas...",
        subtitle: "Otro Extremista Muerto",
        subDescription:
          "... eran dos los extremistas muertos y no uno… Con el deceso también de Carlos Burgueño, llegan a tres los fallecidos en las dramáticas instancias de esta tarde... Así mismo se pudo saber que 2 funcionarios policiales... habían resultado heridos de bala..., en el lugar de los hechos, que habían sido incautadas a los extremistas numerosas armas, largas y cortas, así como bombas de mano y uniformes que habían hurtado aparentemente en la comisaría de Pando. Aparece foto de...",
        images: [
          {
            type: "noticia",
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
            alt: "pagina publicada por el diario el dia",
          },
          // {
          //   type: "noticia",
          //   src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_4.jpg",
          //   alt: "noticia publicada por el diario el dia",
          // },
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
            alt: "noticia publicada por el diario el dia",
          },
          // {
          //   type: "noticia",
          //   src: "/rafael-guidet/noticia_5.jpg",
          //   alt: "noticia publicada por el diario el diario",
          // },
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
          // {
          //   type: "página",
          //   src: "/rafael-guidet/noticia_8.jpg",
          //   alt: "noticia publicada por el diario el diario",
          // },
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
            type: "página diraio completa",
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
            type: "página diraio completa",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_9.jpg",
            alt: "pagina diario completa publicada por el diario El Popular",
          },
        ],
      },
      {
        name: 'Diario "El Diario" (Página 16)',
        date: new Date("October 10, 1969 03:24:00"),
        title: "HUYEN PARA NO CAER EN LAS REDADAS POLICIALES",
        description:
          "Como consecuencia del operativo de Pando, los extremistas además de haber sufrido tres bajas en sus filas, y más de una veintena de detenciones de los integrantes de los comandos, están experimentando pérdidas millonarias en dinero, por que debieron hacer un abandono de guaridas arrendadas, adelantándose a revelaciones que pudieran hacer los presos… La organización cuando arrienda casas,... no pone garantías al formalizar los contratos. Esto lo sustituye por depósitos de dinero en efectivo...",
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
            type: "página diraio completa",
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
            type: "página diraio completa",
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
          "... Es decir: 16 detenidos en Pando... los tres detenidos posteriormente en la calle Santiago Gadea... Casi todos los detenidos en Pando... admitieron... su intervención en los hechos. Los más claros fueron… enumeraron los episodios como “secuencias de una batalla”... Otros... incluidos los que fueron apresados en la calle Santiago Gadea admitieron... ser integrantes de grupos de células extremistas... Aparecen fotos de...",
        images: [
          {
            type: "noticia publicada",
            src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/noticia_15.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          {
            type: "página diraio completa",
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
            type: "página diraio completa",
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
            type: "página diraio completa",
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
            type: "página diraio completa",
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
            type: "página diraio completa",
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
    victims: [
      {
        name: "Carlos Burgueño",
        age: 29,
        childs: 2,
        childsDescription: "menores de edad (uno de tan solo un día).",
        // marital: "casado",
        avatar: {
          src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/avatar_1.png",
          alt: "imagen de Carlos Burgeño",
        },
      },
      {
        name: "Enrique Fernández",
        age: 44,
        childs: 2,
        childsDescription: "menores de edad.",
        marital: "casado",
        avatar: {
          src: "/acciones-terroristas-y-robos-a-sedes-bancarias-en-la-ciudad-de-pando/avatar_2.png",
          alt: "imagen de Enrique Fernández",
        },
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
  },
  {
    date: new Date("November 12, 1969 03:24:00"),
    title: "Agente Juan Viera",
    slug: "agente-juan-viera",
    type: "asesinato",
    totalOfVictims: 1,
    notice: [
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
          "... Entre las ropas del herido que quedó en Clínicas, apareció un plano, muy completo de una residencia de Carrasco donde vive un conocido coleccionista de armas que tiene comercio en… Es evidente que se planeaba asaltar esta casa y, posiblemente, las palabras del que habló por teléfono (suspendida operación Bentancur), se refieren, justamente, al asalto a la casa del coleccionista… El cura párroco... fue reconocido en el Hospital de Clínicas por Monseñor Rubio quien concurrió especialmente para establecer su identidad. Como dijimos, al ingresar había dado un nombre falso...",
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
          // {
          //   type: "página diario completa",
          //   src: "/juan-viera/noticia_7.jpg",
          //   alt: "noticia publicada por el diario El Diario",
          // },
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
        title: "EL MATADOR DEL AGENTE ESTÁ YA IDENTIFICADO",
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
    victims: [
      {
        name: "Juan Viera",
        age: 26,
        childs: 2,
        childsDescription: "menores de edad.",
        marital: "casado",
        avatar: {
          src: "/juan-viera/avatar.png",
          alt: "imagen de Juan Viera",
        },
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
    type: "asesinato",
    totalOfVictims: 2,
    notice: [
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
          // {
          //   type: "página diario completa",
          //   src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_6.jpg",
          //   alt: "noticia publicada por el diario Acción",
          // },
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
          "... se encuentra detenido en la Comisaría de la localidad 25 de Agosto… un profesor de la Escuela Industrial de Canelones… Esta persona figuraba en la libreta de anotaciones que hallaron en poder del sacerdote saleciano… muerto con el agente Viera Piazza, durante el tiroteo días atrás entre este funcionario y extremistas...",
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
        title1: "CHEQUES FALSOS",
        description1:
          "Integrantes de una organización subversiva, están incursionando en un delito nuevo para ellos, destinado a llegar fondos a su movimiento. Utilizando cheques falsos han logrado cobrar importantes sumas en algunos bancos de la capital. Hasta el momento lograron apoderarse por este medio de unos tres millones de pesos...",
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
            src: "/agente-ruben-zembrano-y-chofer-julio-techera/i_3.jpg",
            alt: "Roban metralleta y huyen.",
          },
        ],
      },
    ],
    victims: [
      {
        name: "Agente Carlos Ruben Zembrano Rivero",
        age: 24,
        avatar: {
          src: "/agente-ruben-zembrano-y-chofer-julio-techera/a.png",
          alt: "imagen de Agente Carlos Ruben Zembrano Rivero",
        },
      },
    ],
    virtualMemorial: [
      {
        src: "/agente-ruben-zembrano-y-chofer-julio-techera/virtual.jpg",
        alt: "Aquí, en plena democracia, el 15/09/69 fue asesinado por Terroristas, Carlos Zembrano perteneciente a la Policía Nacional, de 24 años de edad",
      },
    ],
    vindicated: {
      description: `Medios periodísticos destacaron este episodio aportando la noticia del momento. Nuevamente un policía fue la víctima de un ataque terrorista, el asesinato del Agente Germán Garay se produjo en momentos que los subversivos protagonizaban cinco operativos, este documento dice que este agente, próximo a su retiro, fue ultimado el 7 de julio de 1969, y fueron 76 los policías, militares y civiles víctimas mortales de las acciones terroristas en este período de la llamada historia reciente.
Los protagonistas, participantes y/o autores brindan mayor información confirmando los registros periodísticos de la época, entre ellas se señalan:
      `,
      books: [
        {
          fragment: `... El 15 de noviembre los tupamaros mataron al integrante de la Guardia Metropolitana Carlos Zembrano...`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 431",
        },
      ],
    },
  },
  {
    date: new Date("November 26, 1969 03:24:00"),
    title: "Agente Antonio Fernández",
    slug: "antonio-fernandez",
    type: "asesinato",
    totalOfVictims: 1,
    notice: [
      {
        name: 'Diario "El Diario" (Página 19)',
        date: new Date("November 26, 1969 03:24:00"),
        title: "FUE BALEADO DE MUERTE HOY UN POLICÍA: CAYÓ UN EXTREMISTA",
        description: `Un agente de la Seccional 18ª de Canelones fue asesinado esta tarde de seis balazos… en la Avda. de las Playas en El Pinar... la víctima es el agente Antonio Fernández (oriental, 40 años, casado, 5 hijos)... Veinte minutos después del alevoso crimen, el patrullero de la Caminera... detuvo en la Ruta Interbalnearia a un sospechoso que en un primer momento dijo llamarse... cuya vinculación con el homicidio parecía confusa en primera instancia... conocida la afiliación del mismo circuló la versión de que... había dado una identidad falsa y que era, en realidad, un extremista buscado por la policía... Aparecen fotos.`,
        images: [
          {
            type: "noticia publicada",
            src: "/antonio-fernandez/n_1.jpg",
            alt: "noticia publicada por el diario El Diario",
          },
          // {
          //   type: "página diario completa",
          //   src: "/agente-ruben-zembrano-y-chofer-julio-techera/n_2.jpg",
          //   alt: "noticia publicada por el diario El Día",
          // },
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
          // {
          //   type: "página diario completa",
          //   src: "/antonio-fernandez/n_3.jpg",
          //   alt: "noticia publicada por el diario El Día",
          // },
        ],
      },
      {
        name: 'Diario "El Día" (Página 3)',
        date: new Date("November 27, 1969 03:24:00"),
        title: "QUIEN ES Y QUE HIZO...",
        description: `... Fue detenido, se verificó su identidad y en la valija de la motoneta se encontraron un revólver, una cachiporra y varios panfletos editados por los “extremistas”... Al ser interrogado,... no negó su vinculación con el movimiento… Aparece foto de...`,
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
    title: "Guardia de Seguridad Manuel Tejera",
    slug: "manuel-tejera",
    type: "asesinato",
    totalOfVictims: 1,
    notice: [
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
        name: "Manuel Tejera",
        age: 61,
        marital: "casado",
        avatar: {
          src: "/manuel-tejera/a.png",
          alt: "imagen de Manuel Tejera",
        },
      },
    ],
  },
  {
    date: new Date("February 12, 1970 03:24:00"),
    title: "Agente Alfredo Pallas",
    slug: "alfredo-pallas",
    type: "asesinato",
    totalOfVictims: 1,
    notice: [
      {
        name: 'Diario "El Día" (en Portada)',
        date: new Date("February 13, 1970 03:24:00"),
        title: "CAEN 4 PELIGROSOS “REOS”; UN POLICÍA SUFRIÓ GRAVE HERIDA",
        description: `La detención, totalmente casual, se produjo en Cuchilla Alta, encontraron armas y explosivos. Tras un intenso… cruento tiroteo-cayó herido de gravedad un funcionario policial-fueron detenidos cuatro conspiradores, entre ellos una mujer... otro apareció repentinamente armado de una metralleta, hiriendo de un tiro a Pallas Cardozo... El que agredió al policía... se llama... sindicado como el que mató... al agente Fernández en El Pinar... estaban construyendo un túnel, poseían armas y bombas... Aparecen fotos de...`,
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
          // {
          //   type: "página diario completa",
          //   src: "/alfredo-pallas/n_2.jpg",
          //   alt: "noticia publicada por el diario El Día",
          // },
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
        name: "Alfredo Pallas",
        age: 25,
        childs: 1,
        childsDescription: "menor de edad",
        marital: "casado",
        avatar: {
          src: "/alfredo-pallas/a.png",
          alt: "imagen de Agente Alfredo Pallas",
        },
      },
    ],
    vindicated: {
      description: `Medios periodísticos destacaron este episodio aportando la noticia del momento. Nuevamente un policía fue la víctima de un ataque terrorista, el asesinato del Agente Germán Garay se produjo en momentos que los subversivos protagonizaban cinco operativos, este documento dice que este agente, próximo a su retiro, fue ultimado el 7 de julio de 1969, y fueron 76 los policías, militares y civiles víctimas mortales de las acciones terroristas en este período de la llamada historia reciente.
Los protagonistas, participantes y/o autores brindan mayor información confirmando los registros periodísticos de la época, entre ellas se señalan:
      `,
      books: [
        {
          fragment: `“Tras un tiroteo que tuvo lugar el 12 de febrero en el balneario Cuchilla Alta, fue capturado otro de los viejos miembros de la organización, Tabaré Rivero Cedrés, el Ismael tupamaro. Fue detenido junto a su compañera, también integrante del MLN, Ana María Castagneto, y otros dos militantes, Yamandú Cabrera y Marcos Suárez. El agente Alfredo Pallas resultó muerto en el enfrentamiento...”.`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 441",
        },
      ],
    },
  },
  {
    date: new Date("April 13, 1970 03:24:00"),
    title: "Inspector Héctor Morán Charquero",
    slug: "hector-moran-charquero",
    type: "asesinato",
    totalOfVictims: 1,
    notice: [
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
          // {
          //   type: "página diario completa",
          //   src: "/hector-moran-charquero/n_2.jpg",
          //   alt: "noticia publicada por el diario El Día",
          // },
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
          // {
          //   type: "página diario completa",
          //   src: "/hector-moran-charquero/n_2.jpg",
          //   alt: "noticia publicada por el diario El Día",
          // },
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
          // {
          //   type: "página diario completa",
          //   src: "/hector-moran-charquero/n_2.jpg",
          //   alt: "noticia publicada por el diario El Día",
          // },
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
          // {
          //   type: "página diario completa",
          //   src: "/hector-moran-charquero/n_2.jpg",
          //   alt: "noticia publicada por el diario El Día",
          // },
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
          // {
          //   type: "página diario completa",
          //   src: "/hector-moran-charquero/n_2.jpg",
          //   alt: "noticia publicada por el diario El Día",
          // },
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
        name: "Héctor Morán Charquero",
        age: 47,
        daughter: 1,
        marital: "casado",
        avatar: {
          src: "/hector-moran-charquero/a.png",
          alt: "imagen de Inspector Héctor Morán Charquero",
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
    type: "asesinato",
    totalOfVictims: 1,
    notice: [
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
        name: "Nelson Sosa",
        age: 28,
        marital: "soltero",
        avatar: {
          src: "/nelson-sosa/a.png",
          alt: "imagen del Agente Nelson Sosa",
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
    type: "asesinato",
    totalOfVictims: 1,
    notice: [
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
          // {
          //   type: "página diario completa",
          //   src: "/nelson-sosa/n_6.jpg",
          //   alt: "noticia publicada por el diario El Diario",
          // },
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
        name: 'Diario "El Popular" (en Portada)',
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
        name: "Armando Leses",
        age: 38,
        marital: "casado",
        childs: 2,
        childsDescription: "menores de edad",
        avatar: {
          src: "/armando-leses/a.png",
          alt: "imagen del Agente Armando Leses",
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
    type: "asesinato",
    totalOfVictims: 1,
    notice: [
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
          // {
          //   type: "página diario completa",
          //   src: "/armando-leses/n_2.jpg",
          //   alt: "noticia publicada por el diario El Día",
          // },
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
          // {
          //   type: "página diario completa",
          //   src: "/armando-leses/n_2.jpg",
          //   alt: "noticia publicada por el diario El Día",
          // },
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
          // {
          //   type: "página diario completa",
          //   src: "/armando-leses/n_2.jpg",
          //   alt: "noticia publicada por el diario El Día",
          // },
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
          // {
          //   type: "página diario completa",
          //   src: "/armando-leses/n_2.jpg",
          //   alt: "noticia publicada por el diario El Diario",
          // },
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
          // {
          //   type: "página diario completa",
          //   src: "/armando-leses/n_2.jpg",
          //   alt: "noticia publicada por el diario El Diario",
          // },
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
        name: "Daniel (Dan) A. Mitrione",
        age: 50,
        marital: "casado",
        childs: 9,
        childsDescription: "(5 menores de edad)",
        avatar: {
          src: "/dan-mitrione/a.png",
          alt: "imagen del Agente Armando Leses",
        },
      },
    ],
    vindicated: {
      description: `Medios periodísticos destacaron este episodio aportando la noticia del momento. Nuevamente un policía fue la víctima de un ataque terrorista, el asesinato del Agente Germán Garay se produjo en momentos que los subversivos protagonizaban cinco operativos, este documento dice que este agente, próximo a su retiro, fue ultimado el 7 de julio de 1969, y fueron 76 los policías, militares y civiles víctimas mortales de las acciones terroristas en este período de la llamada historia reciente.
Los protagonistas, participantes y/o autores brindan mayor información confirmando los registros periodísticos de la época, entre ellas se señalan:
      `,
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
        },
        {
          fragment: `<p>En la noche de ese domingo 9, los guerrilleros aplicaron un potente sedante al agente estadounidense, que lo durmió. Luego lo metieron en un auto, abrieron las puertas del garaje y subieron la rampa. Se internaron en las calles del muy oscuro barrio Puerto Nuevo: “Por América Latina, por sus muertos y torturados, por su liberación, su independencia”, proclamaron, y lo ejecutaron de cuatro balazos.</p>
          <p>Su cuerpo apareció al otro día en el interior de un Buick celeste y blanco, estacionado en la calle Lucas Moreno, a un kilómetro y medio de la “cárcel del pueblo” de la avenida Centenario...”.</p>`,
          year: new Date("2013-1-1"),
          name: "Comandante Facundo. El revolucionario Pepe Mujica",
          place: "Montevideo - Uruguay",
          edition: "Prisa Ediciones",
          pages: "pág. 472",
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
        },
        {
          fragment: `<p>“Pero con Mitrione no hubo acuerdo. Fue ejecutado y abandonado en un auto pocos días después. Su ejecución era parte del Plan Satán, que junto con las cárceles del pueblo implicaba la instalación de un sistema de justicia popular por el MLN en nombre del pueblo asalariado...”.</p>`,
          year: new Date("2007-1-1"),
          name: " Cero a la izquierda. Una biografía de Jorge Zabalza.",
          place: "Montevideo - Uruguay",
          edition: "Letraeñe Ediciones",
          pages: "pág. 93",
        },
      ],
    },
  },
  {
    date: new Date("August 19, 1970 03:24:00"),
    title: "Agente Nelson Machado",
    slug: "nelson-machado",
    type: "asesinato",
    totalOfVictims: 1,
    notice: [
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
        name: "Esteban Machado",
        age: 34,
        marital: "casado",
        childs: 4,
        childsDescription: "menores de edad",
        avatar: {
          src: "/nelson-machado/a.png",
          alt: "imagen del Agente Esteban Machado",
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
];
