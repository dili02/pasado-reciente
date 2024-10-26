"use client";

import { TerroristActionDefinition } from "@/db/data";
import {
  BookOpenCheck,
  Calendar,
  Image,
  MapPin,
  MonitorPlay,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Icons } from "../icons";

type Props = {
  action: TerroristActionDefinition;
};

export default function TableOfContet({ action }: Props) {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const content = [{}];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    document.querySelectorAll("h2[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isScrolling]);

  const scrollToSection = (id: string) => {
    setIsScrolling(true);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Ajusta este valor según el espacio que necesites en la parte superior
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };
  return (
    <nav className="p-6">
      <h2 className="font-semibold mb-4 border-b-2 py-2 border-b-primary-foreground text-center">
        En esta página
      </h2>

      {action.newsPapers && (
        <Link
          href={`#notices`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("notices");
          }}
          className={`flex items-center py-2 rounded transition-all duration-300 ease-in-out flex-row gap-2 text-sm`}
        >
          <span className="flex items-center gap-2">
            <Icons.newspaper className="w-9 h-9" /> Noticias publicadas por
            diarios de la época.
          </span>
        </Link>
      )}

      {action.apologyForCrimeInImages && (
        <Link
          href={`#apology`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("apology");
          }}
          className={`flex py-2 rounded transition-all duration-300 ease-in-out flex-row gap-2 text-sm`}
        >
          <span className="flex items-center gap-2">
            <Image className="w-6 h-6" /> Apología del delito en imágenes.
          </span>
        </Link>
      )}

      {action.virtualMemorial && (
        <Link
          href={`#virtual-memorial`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("virtual-memorial");
          }}
          className={`flex py-2 rounded transition-all duration-300 ease-in-out flex-row gap-2 text-sm`}
        >
          <MapPin className="w-5 h-5" />
          <span>Memoria Virtual.</span>
        </Link>
      )}

      {action.vindicatedActions && (
        <Link
          href={`#vindicated`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("vindicated");
          }}
          className={`flex py-2 rounded transition-all duration-300 ease-in-out flex-row gap-2 text-sm`}
        >
          <span className="flex items-center gap-2">
            <BookOpenCheck className="w-11 h-11" /> Acciones reivindicadas por
            los movimientos terroristas.
          </span>
        </Link>
      )}

      {action.videos && (
        <Link
          href={`#testimonies`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("testimonies");
          }}
          className={`flex py-2 rounded transition-all duration-300 ease-in-out flex-row gap-2 text-sm`}
        >
          <span className="flex items-center gap-2">
            <MonitorPlay className="w-10 h-10" /> Relatos de familiares de
            víctimas del terrorismo.
          </span>
        </Link>
      )}

      {action.seeAlso && <SeeAlso seeAlso={action.seeAlso} />}
    </nav>
  );
}

// TODO: link asesintato fernandez
function SeeAlso({ seeAlso }: { seeAlso: { href: string; text: string }[] }) {
  return (
    <div>
      <h2 className="font-semibold mb-4 border-b-2 py-2 border-b-primary-foreground text-center">
        Ver también
      </h2>
      {seeAlso.map((item) => (
        <Link
          className={`flex py-2 rounded transition-all duration-300 ease-in-out flex-row gap-2 text-sm`}
          href={item.href}
        >
          &#187; {item.text}
        </Link>
      ))}
    </div>
  );
}
