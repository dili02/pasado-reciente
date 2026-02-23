"use client";

import { useState, useEffect } from "react";
import { api } from "@/db/data";
import { Newsreader } from "next/font/google";
import { TerroristActionDefinition } from "@/db/data";
import Efemerides from "@/components/efemerides";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

export default function EfemeridesPage() {
  const [memorialActions, setMemorialActions] = useState<
    TerroristActionDefinition[]
  >([]);
  const [currentMonthName, setCurrentMonthName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const currentMonthNumber = new Date().getMonth();
        const monthName = new Intl.DateTimeFormat("es-UY", {
          month: "long",
        }).format(new Date());

        const actions = await api.getMemorialActions(currentMonthNumber);

        setMemorialActions(actions);
        setCurrentMonthName(monthName);
      } catch (error) {
        console.error("Error loading efemerides:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-16 bg-gray-200 rounded mb-8"></div>
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-12 border-b-4 border-foreground pb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-primary text-white text-[10px] lg:text-[12px] px-2 lg:px-4 py-0.5 lg:py-1 font-black uppercase tracking-widest">
            Efemérides / Uruguay
          </span>
          {/* <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Efemérides / Uruguay
          </span> */}
        </div>
        <h1
          className={`${newsreader.className} text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6 capitalize`}
        >
          Efemérides del mes de {currentMonthName}
        </h1>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs font-black uppercase tracking-widest italic text-primary">
            Memoria Histórica Documentada
          </span>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Archivo General
          </span>
        </div>
      </header>

      <Efemerides actions={memorialActions} />

      <footer className="mt-20 pt-12 border-t-2 border-foreground flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
        <div>
          Pasado Reciente <br /> Hemeroteca Digital
        </div>
        <div>Uruguay — {currentMonthName}</div>
      </footer>
    </main>
  );
}
