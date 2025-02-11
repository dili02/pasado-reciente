import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";
import { api as API, VideosTerroristActionDefinition } from "@/db/data";
import { MemorialClientBento } from "@/components/memorial-client";

type Props = {};

const navItems = [
  {
    name: "Asesinatos",
    icon: <Icons.shot className="w-5 h-5" />,
    href: "/asesinatos",
  },
  {
    name: "Secuestros",
    icon: <Icons.prisoner className="w-5 h-5" />,
    href: "/secuestros",
  },
  {
    name: "Atentados",
    icon: <Icons.timeDinamite className="w-5 h-5" />,
    href: "/atentados",
  },
  {
    name: "Robo Dinero",
    icon: <Icons.heist className="w-5 h-5" />,
    href: "/robo-dinero",
  },
  {
    name: "Robo Armas/Explosivos",
    icon: <Icons.gun className="w-5 h-5" />,
    href: "/robo-armamento-explosivos",
  },
  {
    name: "Otras Acciones",
    icon: <Icons.punch className="w-5 h-5" />,
    href: "/otras-acciones",
  },
];

export default async function page({}: Props) {
  const actions = await API.getAllAcitions();

  const years = actions.map((action) => action.date.getFullYear());

  const chronological = Array.from(new Set(years.sort((a, b) => a - b)));

  const terroristActionWithVideos = await API.getAllWithVideo();

  return (
    <>
      <div className="container lg:min-h-[90vh]">
        <p className="bg-orange-300 text-3xl font-extrabold text-center p-4 rounded-lg shadow-lg lg:text-xl lg:flex items-center justify-center gap-2 lg:h-[10vh] xl:text-2xl 2xl:text-3xl">
          RECOPILACIÓN DE ALREDEDOR DE{" "}
          <span className="text-orange-900">230</span> ACCIONES TERRORISTAS
          DESDE 1963 A 1976
        </p>

        <p className="bg-orange-300 rounded-lg p-4 shadow-lg text-center font-bold mt-8 lg:mt-6 lg:h-[25vh] xl:text-lg 2xl:text-xl">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 lg:mt-6 gap-8 lg:h-[45vh]">
          <div className="bg-orange-300 p-4 rounded-lg shadow-lg h-full">
            <h2 className="text-center uppercase text-2xl lg:text-lg xl:text-2xl 2xl:text-3xl font-extrabold">
              acciones terroristas
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 lg:gap-6 xl:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="bg-black rounded-md py-4 lg:py-2.5 transition-transform duration-300 hover:scale-105"
                >
                  <Link
                    href={`${item.href}`}
                    className="flex items-center justify-center gap-2 text-orange-100 lg:text-xs xl:text-sm"
                  >
                    {item.icon}
                    <span className="">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-orange-300 p-4 rounded-lg shadow-lg h-full">
            <h2 className="text-center uppercase text-2xl lg:text-lg xl:text-2xl 2xl:text-3xl font-extrabold">
              resumen cronológico
            </h2>
            <div className="mt-4 grid place-items-center gap-4 grid-cols-3 md:grid-cols-5 lg:grid-cols-4 lg:gap-y-11 xl:grid-cols-4 xl:gap-y-2 xl:h-[90%]">
              {chronological.map((year, index) => (
                <Link href={`/${year}`} key={index}>
                  <div className="relative overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-105">
                    <CalendarSVG />

                    <div
                      className="absolute z-10 font-bold text-black text-sm"
                      style={{
                        left: "20%",
                        top: "50%",
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

          <div className="bg-orange-300 p-4 rounded-lg shadow-lg">
            <MemorialClientBento actions={actions} />
          </div>
        </div>
      </div>

      <div className="container mt-8 lg:mt-6">
        <div className="bg-orange-300 p-4 rounded-xl shadow-lg">
          <h2 className="text-center uppercase text-2xl 2xl:text-3xl font-extrabold">
            testimonios
          </h2>
          <p className="text-center">
            Relatos de familiares de víctimas del terrorismo.
          </p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 py-4">
            {terroristActionWithVideos.map((video) => (
              <div
                className="rounded shadow-lg bg-orange-100 transition-transform duration-300 hover:scale-105"
                key={video.src}
              >
                <iframe
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-44 lg:h-44"
                ></iframe>
                <div className="p-2 text-sm text-center">
                  <Link href={video.slug}>{video.title}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function CalendarSVG() {
  return (
    <svg
      width="55"
      height="55"
      // className="lg:w-14 lg:h-14"
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
