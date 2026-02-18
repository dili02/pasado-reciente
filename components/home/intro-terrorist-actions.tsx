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

import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

export default function IntroTerroristActions({}: Props) {
  return (
    <div className="flex flex-col h-full bg-background">
      <header className="mb-6 border-b-4 border-foreground pb-2 flex justify-between items-end">
        <h2
          className={`${newsreader.className} text-2xl text-primary uppercase tracking-tighter`}
        >
          Acciones
        </h2>
        {/* <span className="text-[10px] font-bold text-primary mb-1">LIVE DATA</span> */}
      </header>

      {/* <p className="text-xs text-muted-foreground mb-8 italic">
        Categorización técnica de los operativos documentados en prensa.
      </p> */}

      <nav className="flex-1">
        <ul className="flex flex-col gap-0 border-t border-border">
          {navItems.map((item, index) => (
            <li key={index} className="border-b border-border group">
              <Link
                href={`${item.href}`}
                className="flex items-center justify-between py-4 group-hover:bg-primary/5 transition-colors px-2"
              >
                <div className="flex items-center gap-4">
                  <div className="text-primary opacity-50 group-hover:opacity-100 transition-opacity">
                    {React.cloneElement(item.icon as React.ReactElement, {
                      className: "w-5 h-5",
                    })}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* <footer className="mt-8 pt-6 border-t border-border">
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground leading-relaxed">
          Uruguay / Hemeroteca <br /> Digital 1963-1976
        </p>
      </footer> */}
    </div>
  );
}

import { ArrowRight } from "lucide-react";
