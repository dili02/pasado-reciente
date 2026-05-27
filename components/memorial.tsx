"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { Skeleton } from "./skeletons";
import { TerroristActionDefinition } from "@/db/data";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });
const newsreaderItalic = Newsreader({ subsets: ["latin"], style: "italic" });

type Props = {
  actions: TerroristActionDefinition[];
};

export default function Memorial({ actions = [] }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { currentMonth, terroristActions, initDate, endDate } = useMemo(() => {
    if (!isMounted) {
      return {
        currentMonth: "",
        terroristActions: [],
        initDate: null,
        endDate: null,
      };
    }

    const now = new Date();
    const currentMonthNumber = now.getMonth();
    const monthFormatter = new Intl.DateTimeFormat("es-UY", { month: "long" });
    let monthName = monthFormatter.format(now).toLowerCase();

    // Normalize variants
    if (monthName === "setiembre") monthName = "septiembre";

    const filtered = actions
      .filter((action) => {
        if (!action || !action.date) return false;
        const date = new Date(action.date);
        return date.getMonth() === currentMonthNumber;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const actionsDates = filtered.map((action) => new Date(action.date));
    const startYear =
      actionsDates.length > 0 ? actionsDates[0].getFullYear() : null;
    const endYear =
      actionsDates.length > 0
        ? actionsDates[actionsDates.length - 1].getFullYear()
        : null;

    return {
      currentMonth: monthName,
      terroristActions: filtered,
      initDate: startYear,
      endDate: endYear,
    };
  }, [isMounted, actions]);

  if (!isMounted) {
    return (
      <div className="mt-8 space-y-6 animate-in fade-in duration-700">
        <Skeleton className="h-10 w-3/4 mx-auto lg:mx-0" />
        <Skeleton className="h-6 w-1/2 mx-auto lg:mx-0" />
        <Skeleton className="w-full h-[500px] mx-auto" />
        <Skeleton className="h-12 w-44 mx-auto lg:mx-0" />
      </div>
    );
  }

  if (terroristActions.length === 0) {
    return (
      <div className="mt-8 border border-border/50 p-12 rounded-sm text-center lg:text-left animate-in fade-in duration-700">
        <AlertTriangle className="w-12 h-12 text-muted-foreground/30 mb-6 mx-auto lg:mx-0" />
        <h3
          className={`${newsreader.className} text-2xl font-bold uppercase mb-4`}
        >
          Sin efemérides para {currentMonth}
        </h3>
        <p className="text-muted-foreground italic mb-8 max-w-md">
          No hay registros documentados para este mes en particular. Te
          invitamos a consultar el archivo cronológico completo.
        </p>
        <Link
          href="/efemerides"
          className="inline-flex items-center gap-4 border-2 border-foreground hover:bg-foreground hover:text-background transition-all px-8 py-4 rounded-sm font-black uppercase tracking-widest text-xs"
        >
          <span>Ver Archivo Completo</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8 animate-in fade-in duration-700">
      <header className="mb-6 border-b-2 border-primary/20 pb-4">
        <h2
          className={`${newsreader.className} text-3xl md:text-4xl font-black uppercase tracking-tighter text-center lg:text-left`}
        >
          Memorial del Mes de{" "}
          <span className="text-primary italic">{currentMonth}</span>
        </h2>
        <p
          className={`${newsreaderItalic.className} text-lg text-muted-foreground mt-2 text-center lg:text-left`}
        >
          Registro de acciones documentadas entre {initDate} y {endDate}
        </p>
      </header>

      <div className="flex flex-col items-center lg:items-start gap-8">
        <figure className="relative group w-full">
          <div className="overflow-hidden bg-black grayscale group-hover:grayscale-0 transition-all duration-1000 border border-border shadow-2xl">
            <img
              src={`/efemerides/${currentMonth}.png`}
              key={currentMonth}
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
              alt={`memorial del mes de ${currentMonth}`}
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mt-4 border-l-2 border-primary pl-3">
            Hemeroteca Digital | Uruguay
          </figcaption>
        </figure>

        <Link
          href="/efemerides"
          className="inline-flex items-center gap-4 border-2 border-foreground hover:bg-foreground hover:text-background transition-all px-8 py-4 rounded-sm font-black uppercase tracking-widest text-xs"
        >
          <span>Ir a Efemérides</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
