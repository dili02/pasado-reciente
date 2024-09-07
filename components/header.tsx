"use client";
import Link from "next/link";
import React from "react";

import { Icons } from "./icons";
import { AlertTriangle, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

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
  { name: "Atentados", icon: <Icons.timeDinamite className="w-7 h-7" /> },
  { name: "Robo Dinero", icon: <Icons.heist className="w-7 h-7" /> },
  {
    name: "Robo Armas/Explosivos",
    icon: <Icons.gun className="w-6 h-6" />,
  },
  { name: "Otras Acciones", icon: <Icons.punch className="w-7 h-7" /> },
];

export default function Header({}: Props) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="text-textPrimary md:bg-[#f90]/60 lg:bg-orange-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center lg:justify-center">
            <Link
              href={`/`}
              className="hidden md:flex flex-col justify-center items-center"
            >
              <h1 className="font-extrabold text-xl">
                Museo de la Memoria del Pasado Reciente
              </h1>
              <p className="flex justify-center items-center gap-2">
                <Icons.uruguay className="w-7 h-7 md:w-9 md:h-9" />

                <span className="text-xl">Uruguay</span>
              </p>
            </Link>

            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle navigation menu"
            >
              {isNavOpen === false && <Menu className="w-6 h-6 text-black" />}
              {isNavOpen === true && <X className="w-6 h-6 text-background" />}
            </button>
          </div>
        </div>
      </header>

      <nav
        className={`bg-[#f90]/60 ${isNavOpen ? "block" : "hidden"} lg:block`}
      >
        <div className="container mx-auto px-4">
          <ul className="flex flex-col lg:flex-row justify-center py-2">
            {navItems.map((item, index) => (
              <li key={index} className="my-1 md:my-0 md:mx-2">
                <Link
                  href={`${item.href}`}
                  className={`flex items-center font-bold text-xl lg:text-sm xl:text-xl text-textPrimary hover:text-textPrimary/60 transition-colors duration-200 py-4 lg:py-1 ${
                    item.href?.split("/")[1] === pathname.split("/")[1] &&
                    "textPrimary/40"
                  }`}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

{
  /* <header className="text-primary bg-primary border-b-2 border-b-[#f60] text-white">
      <div className="flex lg:flex-col justify-end lg:justify-between items-center gap-2 xl:gap-5 py-4">
        <Link
          href={`/`}
          className="hidden lg:flex flex-col justify-center items-center"
        >
          <h1 className="font-extrabold text-xl">
            Museo de la Memoria del Pasado Reciente
          </h1>
          <p className="flex justify-center items-center gap-2">
            <Icons.uruguay className="w-7 h-7 md:w-9 md:h-9" />

            <span className="text-xl">Uruguay</span>
          </p>
        </Link>

        <div className="hidden lg:flex items-center w-full justify-around">
          <NavigationDesktop />
        </div>

        <div className="lg:hidden">
          <NavigationMobile />
        </div>
      </div>
    </header> */
}
