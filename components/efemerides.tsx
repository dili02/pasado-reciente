"use client";

import { TerroristActionDefinition } from "@/db/data";
import {
  Newspaper,
  Image as ImageIcon,
  MapPin,
  MonitorPlay,
  BookOpenCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { Newsreader } from "next/font/google";
import { Skeleton, CardSkeleton } from "./skeletons";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

type Props = {
  actions: TerroristActionDefinition[];
};

export default function Efemerides({ actions = [] }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 10);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
      return (
          <div className="space-y-8 animate-in fade-in duration-500">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
          </div>
      )
  }

  return (
    <div className="space-y-4 animate-in fade-in duration-700">
      {actions.map((action, index) => (
        <TimelineItem action={action} key={action.slug || index} />
      ))}
      {(!actions || actions.length === 0) && (
        <div className="text-center py-20 border border-dashed border-border rounded-sm">
          <p className="text-muted-foreground italic mb-2">
            No hay efemérides registradas para este mes.
          </p>
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">
            Hemeroteca Digital | Uruguay
          </p>
        </div>
      )}
    </div>
  );
}

function TimelineItem({ action }: { action: TerroristActionDefinition }) {
  const dateObj = new Date(action.date);
  const day = dateObj.getDate().toString().padStart(2, "0");
  const monthName = new Intl.DateTimeFormat("es-UY", { month: "short" }).format(dateObj).toUpperCase().replace('.', '');
  const year = dateObj.getFullYear();

  return (
    <article className="group relative border-b border-border/50 pb-8 pt-8 first:pt-0 last:border-0 transition-all hover:bg-muted/30 px-4 -mx-4 rounded-sm">
      <Link href={`/${action.type}/${action.slug}`} className="flex flex-col md:flex-row gap-6 items-start">
        
        {/* Date Stamp Style */}
        <div className="flex-shrink-0 flex md:flex-col items-center justify-center w-full md:w-20 py-2 border-2 border-primary/20 rounded-sm bg-muted/50 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
           <span className="text-2xl font-black leading-none group-hover:text-white transition-colors">{day}</span>
           <span className="text-[10px] font-black uppercase tracking-widest mt-1 opacity-60 group-hover:text-white group-hover:opacity-100 transition-all">{monthName}</span>
           <div className="h-px w-8 bg-primary/20 group-hover:bg-white/40 my-1 hidden md:block" />
           <span className="text-[12px] font-black group-hover:text-white transition-colors">{year}</span>
         </div>

        <div className="flex-1 space-y-3">
          <header className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">
              {action.type.replace(/-/g, " ")}
            </span>
            <div className="h-px flex-1 min-w-[50px] bg-border/50" />
            {action.moneyTheft?.usd && (
              <span className="text-xs font-black text-foreground/80 bg-muted px-2 py-0.5 rounded-full">
                {formatCurrency(action.moneyTheft.usd)}
              </span>
            )}
          </header>

          <h3 className={`${newsreader.className} text-3xl font-black leading-tight tracking-tighter group-hover:text-primary transition-colors`}>
            {action.title}
          </h3>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            {/* Metadata Icons */}
            <div className="flex items-center gap-3">
              {action.newsPapers && <Newspaper className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />}
              {action.apologyForCrimeInImages && <ImageIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />}
              {action.virtualMemorial && <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />}
              {action.vindicatedActions && <BookOpenCheck className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />}
              {action.videos && <MonitorPlay className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />}
            </div>
            
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors ml-auto">
              Ver Expediente <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("es-UY", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    currencyDisplay: "code",
  }).format(amount);
}
