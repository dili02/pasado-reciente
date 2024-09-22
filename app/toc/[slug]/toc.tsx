"use client";

import { TerroristActionDefinition } from "@/db/data";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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
    <nav className="lg:w-1/4 mb-8 lg:mb-0 lg:sticky lg:top-4 lg:self-start hidden lg:flex">
      <div className="p-4 ">
        <h2 className="text-lg font-semibold mb-4 border-b-2 py-2 border-b-primary-foreground">
          Tabla de Contenido
        </h2>

        {action.newsPapers && (
          <Link
            href={`#notices`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("notices");
            }}
            className={`block p-2 rounded transition-all duration-300 ease-in-out ${
              activeSection === "notices"
                ? "text-primary transform scale-105"
                : "hover:bg-primary/50  hover:shadow-sm hover:scale-102"
            }`}
          >
            Noticias
          </Link>
        )}

        {action.vindicatedActions && (
          <Link
            href={`#notices`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("notices");
            }}
            className={`block p-2 rounded transition-all duration-300 ease-in-out `}
          >
            Vindicated
          </Link>
        )}

        {/* <ul className="space-y-2">
          {["notices", "seccion2", "seccion3", "seccion4"].map((id) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                className={`block p-2 rounded transition-all duration-300 ease-in-out ${
                  activeSection === id
                    ? "bg-primary text-primary-foreground transform scale-105"
                    : "hover:bg-blue-100 hover:shadow-sm hover:scale-102"
                }`}
              >
                Sección {id.charAt(id.length - 1)}
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    </nav>
  );
}
