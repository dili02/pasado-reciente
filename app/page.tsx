import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";
import { api as API, VideosTerroristActionDefinition } from "@/db/data";
import MemorialClient, { EfemeridesClient } from "@/components/memorial-client";

type Props = {};

const navItems = [
  {
    name: "Asesinatos",
    icon: <Icons.shot className="w-7 h-7" />,
    href: "/asesinatos",
  },
  {
    name: "Secuestros",
    icon: <Icons.prisoner className="w-7 h-7" />,
    href: "/secuestros",
  },
  {
    name: "Atentados",
    icon: <Icons.timeDinamite className="w-7 h-7" />,
    href: "/atentados",
  },
  {
    name: "Robo Dinero",
    icon: <Icons.heist className="w-7 h-7" />,
    href: "/robo-dinero",
  },
  {
    name: "Robo Armas/Explosivos",
    icon: <Icons.gun className="w-6 h-6" />,
    href: "/robo-armamento-explosivos",
  },
  {
    name: "Otras Acciones",
    icon: <Icons.punch className="w-7 h-7" />,
    href: "/otras-acciones",
  },
];

export default async function page({}: Props) {
  const terroristActionWithVideos = await API.getAllWithVideo();

  const actions = await API.getAllAcitions();

  const years = actions.map((action) => action.date.getFullYear());

  const chronological = Array.from(new Set(years.sort((a, b) => a - b)));

  return (
    <div className="container">
      <div className="mb-8 lg:mb-2">
        <p className="font-bold text-orange-600 text-center mb-4 xl:text-lg">
          Bienvenidos/as
        </p>

        <p className="text-center xl:text-lg">
          La presente hemeroteca fue confeccionada exclusivamente con noticias
          periodísticas de las décadas del 60 y 70 escaneadas de las páginas
          originales de los diarios. De esta manera se podrá acceder al relato
          cronológico documentado exento de opiniones y/o relatos alejados en el
          tiempo y contexto en que sucedieron los hechos. En virtud del tiempo
          transcurrido, es necesario precisar que el inicio de los hechos se
          dieron en el marco de un gobierno democrático surgido de elecciones
          libres, el cual, al igual que la sociedad de la época, se vieron
          sorprendidos ante los embates de una situación ajena a los hábitos de
          convivencia, como lo demuestran estas publicaciones.
        </p>

        <div className="my-12">
          <p className="text-4xl sm:text-5xl text-center font-extrabold bg-gradient-to-br from-orange-700 via-orange-300 to-orange-600 bg-clip-text tracking-tighter text-transparent lg:mb-0">
            RECOPILACIÓN DE ALREDEDOR DE 230 ACCIONES TERRORISTAS DESDE 1963 A
            1976
          </p>
        </div>
      </div>

      {/* ACCOINES TERRORISTAS  & RESUMEN CRONOLOGICO  */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 xl:mt-8">
        {/* ACCOINES TERRORISTAS */}
        <div className="bg-orange-300 rounded-lg p-4 shadow-lg">
          <h2 className="text-center uppercase text-4xl lg:text-xl xl:text-2xl font-extrabold">
            acciones terroristas
          </h2>
          <nav>
            <ul className="mt-8 grid gap-6 lg:gap-6 xl:gap-7 place-items-center md:grid md:grid-cols-2 lg:flex lg:flex-col lg:justify-around">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="bg-black rounded-md w-full lg:w-72 py-3 transition-transform duration-300 hover:scale-105"
                >
                  <Link
                    href={`${item.href}`}
                    className="flex items-center justify-center gap-2 text-orange-100 font-bold"
                  >
                    {item.icon}
                    <span className="">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* RESUMEN CRONOLOGICO */}
        <div className="bg-orange-300 rounded-lg p-4 shadow-lg">
          <div className="mt-8 lg:mt-0">
            <h2 className="text-center uppercase text-4xl lg:text-xl xl:text-2xl font-extrabold">
              resumen cronológico
            </h2>
            <div className="mt-8 grid gap-4 lg:gap-4 xl:gap-6 grid-cols-3 md:grid-cols-3 lg:grid-cols-3 place-items-center">
              {chronological.map((year, index) => (
                <Link href={`/cronologico/${year}`} key={index}>
                  <div className="relative overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-105">
                    <CalendarSVG />

                    <div
                      className="absolute z-10 font-bold text-black text-lg"
                      style={{
                        left: "20%",
                        top: "47.5%",
                        width: "87.5%",
                        height: "88%",
                      }}
                    >
                      {year}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* EFEMERIDES */}
        <div className="mt-8 lg:mt-0">
          <div className="bg-orange-300 rounded-lg p-4 shadow-lg">
            <EfemeridesClient actions={actions} />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-center uppercase text-xl xl:text-3xl font-extrabold text-orange-600">
          testimonios
        </h2>
        <p className="text-center xl:text-lg text-orange-600">
          Relatos de familiares de víctimas del terrorismo.
        </p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 py-4">
          {terroristActionWithVideos.map((video) => (
            <div
              className="shadow-lg bg-orange-50 transition-transform duration-300 hover:scale-105 rounded-xl"
              key={video.src}
            >
              <iframe
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-44 lg:h-44 rounded-t-xl"
              ></iframe>
              <div className="p-2 text-sm text-black text-center">
                <Link href={video.slug}>{video.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CalendarSVG() {
  return (
    <svg
      width="72"
      height="72"
      // className="2xl:w-20 2xl:h-20"
      viewBox="0 0 26 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 26H24V10H2V26ZM8 7V2.5C8 2.35417 7.95312 2.23438 7.85938 2.14062C7.76562 2.04688 7.64583 2 7.5 2H6.5C6.35417 2 6.23438 2.04688 6.14062 2.14062C6.04688 2.23438 6 2.35417 6 2.5V7C6 7.14583 6.04688 7.26562 6.14062 7.35938C6.23438 7.45312 6.35417 7.5 6.5 7.5H7.5C7.64583 7.5 7.76562 7.45312 7.85938 7.35938C7.95312 7.26562 8 7.14583 8 7ZM20 7V2.5C20 2.35417 19.9531 2.23438 19.8594 2.14062C19.7656 2.04688 19.6458 2 19.5 2H18.5C18.3542 2 18.2344 2.04688 18.1406 2.14062C18.0469 2.23438 18 2.35417 18 2.5V7C18 7.14583 18.0469 7.26562 18.1406 7.35938C18.2344 7.45312 18.3542 7.5 18.5 7.5H19.5C19.6458 7.5 19.7656 7.45312 19.8594 7.35938C19.9531 7.26562 20 7.14583 20 7ZM26 6V26C26 26.5417 25.8021 27.0104 25.4062 27.4062C25.0104 27.8021 24.5417 28 24 28H2C1.45833 28 0.989583 27.8021 0.59375 27.4062C0.197917 27.0104 0 26.5417 0 26V6C0 5.45833 0.197917 4.98958 0.59375 4.59375C0.989583 4.19792 1.45833 4 2 4H4V2.5C4 1.8125 4.24479 1.22396 4.73438 0.734375C5.22396 0.244792 5.8125 0 6.5 0H7.5C8.1875 0 8.77604 0.244792 9.26562 0.734375C9.75521 1.22396 10 1.8125 10 2.5V4H16V2.5C16 1.8125 16.2448 1.22396 16.7344 0.734375C17.224 0.244792 17.8125 0 18.5 0H19.5C20.1875 0 20.776 0.244792 21.2656 0.734375C21.7552 1.22396 22 1.8125 22 2.5V4H24C24.5417 4 25.0104 4.19792 25.4062 4.59375C25.8021 4.98958 26 5.45833 26 6Z"
        fill="black"
      />
    </svg>
  );
}
