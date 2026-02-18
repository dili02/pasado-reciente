import Link from "next/link";
import React from "react";
import { Icons } from "./icons";
import { TerroristActionDefinition } from "@/db/data";
import {
  BookOpenCheck,
  Calendar,
  Image,
  Info,
  MapPin,
  MonitorPlay,
  Newspaper,
} from "lucide-react";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

type Props = {
  action: TerroristActionDefinition;
};

export default function TerroristActionListItem({ action }: Props) {
  function getFormattedDateToString(date: Date): string {
    return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
      new Date(date),
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

  return (
    <li
      key={action.slug}
      className="group bg-card border border-border border-l-4 border-l-primary shadow-sm hover:shadow-md transition-all duration-300 rounded-sm"
    >
      <Link
        href={`/${action.type}/${action.slug}`}
        className="flex flex-col h-full p-6"
      >
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
            <time className="lg:text-sm">
              {getFormattedDateToString(action.date)}
            </time>
          </div>

          {action.moneyTheft?.usd && (
            <span className="text-[10px] lg:text-[12px] font-black bg-foreground text-background px-2 py-0.5 rounded-sm">
              {formatCurrency(action.moneyTheft?.usd)}
            </span>
          )}
        </header>

        <h2
          className={`${newsreader.className} text-2xl font-black leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem] flex-1`}
        >
          {action.title}
        </h2>

        <footer className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex gap-3">
            {[
              { icon: Info, shown: action.victims },
              { icon: Newspaper, shown: action.newsPapers },
              { icon: Image, shown: action.apologyForCrimeInImages },
              { icon: MapPin, shown: action.virtualMemorial },
              { icon: BookOpenCheck, shown: action.vindicatedActions },
              { icon: MonitorPlay, shown: action.videos },
            ]
              .filter((i) => i.shown)
              .map((item, idx) => (
                <item.icon
                  key={idx}
                  className="w-4 h-4 lg:w-6 lg:h-6 text-muted-foreground/60 group-hover:text-primary transition-colors"
                />
              ))}
          </div>
          <span className="text-[9px] lg:text-[12px] font-bold uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            Abrir documento{" "}
            <ArrowRight className="inline w-3 h-3 ml-1 lg:w-6 lg:h-6" />
          </span>
        </footer>
      </Link>
    </li>
  );
}

import { ArrowRight } from "lucide-react";

/*

 <Link
      href={`/${action.type}/${action.slug}`}
      key={action.slug}
      className={`border border-primary p-4 rounded-md transition duration-500 ease-in-out hover:-translate-y-1 bg-orange-100 flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start text-primary-foreground xl:text-lg`}
      className={`rounded-lg transition duration-500 ease-in-out hover:-translate-y-1 bg-orange-50 flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start p-4`}
    >
      <div className="flex items-center gap-4 md:min-w-[200px] text-gray-500 h-full">
        <Icons.calendar className="w-5 h-5" />
        <time className="text-base">
          {getFormattedDateToString(action.date)}
        </time>
      </div>
      <p className="font-bold text-center md:text-left">
        {/* <p className="font-bold text-textPrimary xl:text-lg 2xl:text-xl text-center md:text-left">
        {action.title}
      </p>
    </Link>

*/
