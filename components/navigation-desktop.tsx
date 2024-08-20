"use client";

import React from "react";
import { Icons } from "./icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

const links = [
  {
    label: "asesinatos",
    href: "/asesinatos",
    icon: <Icons.shot className="h-8 w-8" />,
  },
  {
    label: "secuestros",
    href: "/secuestros",

    icon: <Icons.prisoner className="h-8 w-8" />,
  },
  {
    label: "atentados",
    href: "/atentados",
    icon: <Icons.timeDinamite className="h-8 w-8" />,
  },
  {
    label: "robo dinero",
    href: "/robos",
    icon: <Icons.heist className="h-8 w-8" />,
  },
  {
    label: "robo armas",
    href: "/robos",
    icon: <Icons.gun className="h-8 w-8" />,
  },
  {
    label: "otras acciones",
    href: "/otras-acciones",
    icon: <Icons.punch className="h-8 w-8" />,
  },
];

export default function NavigationDesktop({}: Props) {
  const pathname = usePathname();

  //   TODO: => fix transition all by transition opacity
  return (
    <nav className="flex gap-10 w-full items-center justify-center">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={`flex items-center gap-2 capitalize hover:text-[#b98900] font-bold transition-opacity py-2 ${
            link.href === pathname && "text-[#b98900]"
          }`}
        >
          <span>{link.icon}</span>
          <span className="">{link.label}</span>
        </Link>
      ))}
    </nav>
  );
}
