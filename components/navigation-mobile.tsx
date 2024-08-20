"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X, AlignJustify } from "lucide-react";
import { Icons } from "./icons";

type Props = {};

const links = [
  {
    label: "asesinatos",
    href: "/asesinatos",
    icon: <Icons.gun className="h-8 w-8 md:w-18 md:h-18" />,
  },
  {
    label: "secuestros",
    href: "/secuestros",

    icon: <Icons.prisoner className="h-8 w-8 md:w-18 md:h-18" />,
  },
  {
    label: "atentados",
    href: "/atentados",
    icon: <Icons.timeDinamite className="h-8 w-8 md:w-18 md:h-18" />,
  },
  {
    label: "robos",
    href: "/robos",
    icon: <Icons.heist className="h-8 w-8 md:w-18 md:h-18" />,
  },
  {
    label: "otras acciones",
    href: "/otras-acciones",
    icon: <Icons.punch className="h-8 w-8 md:w-18 md:h-18" />,
  },
];

export default function NavigationMobile({}: Props) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <AlignJustify className="w-14 h-14 md:w-18 md:h-18" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className=" mt-20 text-center text-primary font-extrabold uppercase">
          <Link href={`/`}>
            <h1>Museo de la Memoria del Pasado Reciente</h1>
            <p className="flex justify-center gap-2">
              <Icons.uruguay className="w-8 h-8" />
              <span className="font-normal">Uruguay</span>
            </p>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center mt-4 gap-12 text-primary">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`text-xl flex items-center gap-2 capitalize hover:text-white transition-all ${
                link.href === pathname && "text-white border-b-2 border-white"
              }`}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
