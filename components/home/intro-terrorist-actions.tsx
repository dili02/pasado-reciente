import React from "react";
import { Icons } from "../icons";
import Link from "next/link";

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

export default function IntroTerroristActions({}: Props) {
  return (
    <div className="bg-[#FF6600] rounded-lg p-4 shadow-lg">
      <h2 className="text-center text-[#e4d8b4] uppercase text-4xl lg:text-xl xl:text-2xl font-extrabold">
        acciones terroristas
      </h2>
      <nav>
        <ul className="mt-8 grid gap-6 lg:gap-6 xl:gap-7 place-items-center md:grid md:grid-cols-2 lg:flex lg:flex-col lg:justify-around">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="bg-red-950 text-[#e4d8b4] rounded-md w-full lg:w-72 py-3 transition-transform duration-300 hover:scale-105"
            >
              <Link
                href={`${item.href}`}
                className="flex items-center justify-center gap-2 text-[#e4d8b4] font-bold"
              >
                {item.icon}
                <span className="">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
