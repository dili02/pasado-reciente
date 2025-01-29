// "use client";

import { TerroristActionDefinition } from "@/db/data";
import {
  BookOpenCheck,
  Calendar,
  Image,
  MapPin,
  MonitorPlay,
  Newspaper,
  ScrollText,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Icons } from "../icons";
import { Button } from "../ui/button";

type Props = {
  action: TerroristActionDefinition;
};

export default function TableOfContet({ action }: Props) {
  // const [activeSection, setActiveSection] = useState("");
  // const [isScrolling, setIsScrolling] = useState(false);
  // const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // const content = [{}];

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting && !isScrolling) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     { rootMargin: "-50% 0px -50% 0px" }
  //   );

  //   document.querySelectorAll("h2[id]").forEach((section) => {
  //     observer.observe(section);
  //   });

  //   return () => observer.disconnect();
  // }, [isScrolling]);

  // const scrollToSection = (id: string) => {
  //   setIsScrolling(true);
  //   const element = document.getElementById(id);
  //   console.log(element);
  //   if (element) {
  //     const yOffset = -20;
  //     const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  //     console.log(y);
  //     window.scrollTo({ top: y, behavior: "smooth" });
  //     setActiveSection(id);

  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current);
  //     }

  //     timeoutRef.current = setTimeout(() => {
  //       setIsScrolling(false);
  //     }, 1000);
  //   }
  // };

  return (
    <nav className="p-6">
      <div className="flex items-start gap-2 border-b-2 mb-4">
        <ScrollText className="w-5 h-5" />
        <h2 className="font-semibold mb-4 text-center text-sm xl:text-base">
          Tabla de Contenido
        </h2>
      </div>

      {action.newsPapers && (
        <Link
          href="#notices"
          className="flex gap-1 py-1 text-xs xl:text-base items-center text-gray-500"
        >
          <Newspaper className="w-4 h-4 xl:w-5 xl:h-5 text-gray-500" />
          <span className="">Noticias Diarios.</span>
        </Link>
      )}

      {action.apologyForCrimeInImages && (
        <Link
          href="#apology"
          className="flex gap-1 py-1 text-xs xl:text-base items-center text-gray-500"
        >
          {/* <Image className="w-6 h-6 -mt-0.5" /> */}
          <Image className="w-4 h-4 xl:w-5 xl:h-5 text-gray-500" />
          <span className="">Delito en Imágenes.</span>
        </Link>
      )}

      {action.virtualMemorial && (
        <Link
          href="#virtual-memorial"
          className="flex gap-1 py-1 text-xs xl:text-base items-center text-gray-500"
        >
          <MapPin className="w-4 h-5 xl:w-5 xl:h-5 text-gray-500" />
          <span className="">Memoria Virtual.</span>
        </Link>
      )}

      {action.vindicatedActions && (
        <Link
          href="#vindicated"
          className="flex gap-1 py-1 text-xs xl:text-base items-center text-gray-500"
        >
          <BookOpenCheck className="w-4 h-4 xl:w-5 xl:h-5 text-gray-500" />
          <span className="">Acciones Reivindicadas.</span>
        </Link>
      )}

      {action.videos && (
        <Link
          href="#testimonies"
          className="flex gap-1 py-1 text-xs xl:text-base items-center text-gray-500"
        >
          <MonitorPlay className="w-4 h-4 xl:w-5 xl:h-5 text-gray-500" />
          <span className="">Relatos familiares.</span>
        </Link>
      )}

      {action.seeAlso && <SeeAlso seeAlso={action.seeAlso} />}
    </nav>
  );
}

function SeeAlso({ seeAlso }: { seeAlso: { href: string; text: string }[] }) {
  return (
    <div className="mt-4">
      <h2 className="font-semibold mb-4 border-b-2 py-2 border-black text-base">
        Ver también
      </h2>
      {seeAlso.map((item) => (
        <Link
          className={`flex py-2 rounded transition-all duration-300 ease-in-out flex-row gap-2 text-xs xl:text-base text-gray-500`}
          href={item.href}
          key={item.href}
        >
          &#187; {item.text}
        </Link>
      ))}
    </div>
  );
}
