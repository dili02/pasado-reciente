"use client";

import Link from "next/link";
import React from "react";

import { Icons } from "./icons";
import { AlertTriangle, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"] });

type Props = {};

const navItems = [
  {
    name: "Asesinatos",
    icon: <Icons.shot className="w-7 h-7 lg:w-5 lg:h-5" />,
    href: "/asesinatos",
  },
  {
    name: "Secuestros",
    icon: <Icons.prisoner className="w-7 h-7 lg:w-5 lg:h-5" />,
    href: "/secuestros",
  },
  {
    name: "Atentados",
    icon: <Icons.timeDinamite className="w-7 h-7 lg:w-5 lg:h-5" />,
    href: "/atentados",
  },
  {
    name: "Robo Dinero",
    icon: <Icons.heist className="w-7 h-7 lg:w-5 lg:h-5" />,
    href: "/robo-dinero",
  },
  {
    name: "Robo Armas/Explosivos",
    icon: <Icons.gun className="w-6 h-6 lg:w-5 lg:h-5" />,
    href: "/robo-armamento-explosivos",
  },
  {
    name: "Otras Acciones",
    icon: <Icons.punch className="w-7 h-7 lg:w-5 lg:h-5" />,
    href: "/otras-acciones",
  },
];

// TODO: bg-color navigation
// TODO: color active funconality when active link
export default function Header({}: Props) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-orange-500 lg:bg-orange-50 w-full">
      <div className="container mx-auto flex justify-between items-center lg:justify-center">
        <Link href="/">
          <div className="lg:hidden flex items-center gap-4">
            {/* <Icons.uruguay className="h-8 w-8" /> */}
            <h1
              className={`${newsreader.className} text-lg tracking-widest text-orange-50 font-extrabold`}
            >
              Museo de la Memoria del Pasado Reciente
            </h1>
          </div>

          <div className="hidden lg:block py-4">
            {/* <h1 className="font-extrabold lg:text-2xl"> */}
            <h1
              className={`${newsreader.className} font-extrabold lg:text-4xl tracking-wider`}
            >
              Museo de la Memoria del Pasado Reciente
            </h1>

            <p className="flex items-center gap-2 md:w-full md:justify-center">
              {/* <Icons.uruguay className="h-8 w-8 hidden lg:block" /> */}
              {/* <span className="hidden lg:block lg:text-xl">Uruguay</span> */}
              <span
                className={`${newsreader.className} hidden lg:block lg:text-3xl tracking-wider`}
              >
                Uruguay
              </span>
            </p>
          </div>
        </Link>

        <button
          onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}
          className="lg:hidden p-2 text-orange-50"
          aria-label="Toggle navigation menu"
        >
          {isNavOpen === false && <Menu className="w-14 h-14" />}
          {isNavOpen === true && <X className="w-14 h-14" />}
        </button>
      </div>

      <nav
        className={`bg-orange-600 ${isNavOpen ? "block" : "hidden"} lg:block`}
      >
        <div className="px-4 text-sm xl:text-base 2xl:container 2xl:mx-auto">
          <ul className="flex flex-col items-center lg:flex-row justify-center py-2 xl:gap-4 2xl:gap-6">
            {navItems.map((item, index) => (
              <li key={index} className="my-1 md:my-0 md:mx-2">
                <Link
                  href={`${item.href}`}
                  // hover:text-orange-900 transition-colors hover:duration-500 hover:ease-out
                  className={`text-orange-50 hover:text-black hover:transition-colors hover:duration-500 hover:ease-out flex items-center font-bold py-4 lg:py-1 ${
                    item.href?.split("/")[1] === pathname.split("/")[1] &&
                    "text-black/95"
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
    </header>
  );
}

/*

<div className="py-4 text-lg md:text-xl">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center lg:justify-center">
            <Link
              href={`/`}
              className="flex justify-center items-center gap-2 sm:text-xl md:text-2xl bg-red-400"
            >
              <div className="flex lg:flex-col justify-center items-center gap-2">
                <Icons.uruguay className="h-8 w-8 lg:hidden" />
                <h1 className="font-extrabold lg:text-2xl">
                  Museo de la Memoria del Pasado Reciente
                </h1>

                <p className="flex items-center gap-2 md:w-full md:justify-center">
                  <Icons.uruguay className="h-8 w-8 hidden lg:block" />
                  <span className="hidden lg:block">Uruguay</span>
                </p>
              </div>
            </Link>

            <button
              onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle navigation menu"
            >
              {isNavOpen === false && <Menu className="w-14 h-14" />}
              {isNavOpen === true && <X className="w-14 h-14" />}
            </button>
          </div>
        </div>
      </div>

      <nav className={`bg-primary ${isNavOpen ? "block" : "hidden"} lg:block`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col items-center lg:flex-row justify-center py-2">
            {navItems.map((item, index) => (
              <li key={index} className="my-1 md:my-0 md:mx-2">
                <Link
                  href={`${item.href}`}
                  className={`flex items-center font-bold text-xl lg:text-sm xl:text-base text-primary-foreground hover:text-muted-foreground transition-colors duration-200 py-4 lg:py-1 ${
                    item.href?.split("/")[1] === pathname.split("/")[1] &&
                    "text-muted-foreground"
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

*/
