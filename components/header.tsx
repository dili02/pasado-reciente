import Link from "next/link";
import React from "react";

import NavigationDesktop from "./navigation-desktop";
import NavigationMobile from "./navigation-mobile";
import { Icons } from "./icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="text-primary container bg-background">
      <div className="flex lg:flex-col justify-end lg:justify-between items-center gap-2 xl:gap-5 bg-background py-4">
        <Link
          href={`/`}
          className="hidden lg:flex flex-col justify-center items-center"
        >
          <h1 className="font-extrabold text-2xl">
            {/* text-base md:text-xl xl:text-3xl 2xl:text-5xl text-center font-extrabold */}
            Museo de la Memoria del Pasado Reciente
          </h1>
          <p className="flex justify-center items-center gap-2">
            <Icons.uruguay className="w-7 h-7 md:w-9 md:h-9" />
            {/* text-sm md:text-lg xl:text-2xl 2xl:text-3xl */}
            <span className="text-2xl">Uruguay</span>
          </p>
        </Link>

        <div className="hidden lg:flex items-center w-full justify-around">
          <NavigationDesktop />
        </div>

        <div className="lg:hidden">
          <NavigationMobile />
        </div>
      </div>
    </header>
  );
}
