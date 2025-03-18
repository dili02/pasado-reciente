import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";
import { api as API, VideosTerroristActionDefinition } from "@/db/data";
import Intro from "@/components/home/intro";
import IntroTerroristActions from "@/components/home/intro-terrorist-actions";
import IntroChronologicalSummary from "@/components/home/intro-chronological-summary";
import IntroMemorial from "@/components/home/intro-memorial";

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

  return (
    <div className="container">
      <Intro />

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 xl:mt-8">
        <IntroTerroristActions />

        <IntroChronologicalSummary />

        <IntroMemorial actions={actions} />
      </div>

      <div className="mt-8">
        <h2 className="text-center uppercase text-xl xl:text-3xl font-extrabold text-black">
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
