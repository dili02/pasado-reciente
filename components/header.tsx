"use client";

import Link from "next/link";
import React, { useState } from "react";

import { Icons } from "@/components/icons";
import { AlertTriangle, Menu, X, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Newsreader } from "next/font/google";
import SearchModal from "@/components/search-modal";

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

export default function Header({}: Props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Branding Section */}
        <div className="flex flex-col items-center justify-center py-6 border-b border-muted/50">
          <Link href="/" className="group text-center">
            <h1
              className={`${newsreader.className} text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500`}
            >
              Museo de la Memoria <br /> del Pasado Reciente
            </h1>
            <div className="flex items-center justify-center gap-4 mt-2">
              <div className="h-px w-10 md:w-20 bg-primary/40" />
              <span
                className={`${newsreader.className} text-lg md:text-xl font-medium italic text-muted-foreground uppercase tracking-[0.2em]`}
              >
                Uruguay
              </span>
              <div className="h-px w-10 md:w-20 bg-primary/40" />
            </div>
          </Link>
        </div>

        {/* Navigation Row */}
        <div className="flex h-12 md:h-14 items-center justify-between lg:justify-center relative">
          {/* Persistent Search Icon for Mobile/Tablet (Visible until Desktop Nav takes over) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
              aria-label="Buscar"
            >
              <Search size={22} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item, index) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`relative py-1 text-xs xl:text-sm font-bold uppercase tracking-widest transition-all duration-300
                    ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-in fade-in slide-in-from-left-2" />
                  )}
                </Link>
              );
            })}

            {/* Desktop Search Button */}
            <div className="flex items-center ml-2 pl-4 border-l border-border/50">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-1 text-muted-foreground hover:text-primary transition-all duration-300 group flex items-center gap-2"
                aria-label="Buscar"
              >
                <Search
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-black uppercase tracking-widest hidden xl:block">
                  Buscar
                </span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Trigger (Right side) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
              aria-label="Menú"
            >
              {isNavOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isNavOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="bg-card border-t border-border p-6 flex flex-col gap-4">
          {navItems.map((item, index) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsNavOpen(false)}
                className={`text-lg font-black uppercase tracking-tighter py-2 border-b border-border/50
                  ${isActive ? "text-primary" : "text-foreground"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
}
