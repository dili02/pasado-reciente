import Link from "next/link";
import React from "react";
import { Icons } from "./icons";
import { TerroristActionDefinition } from "@/db/data";
import {
  ArrowRight,
  BookOpenCheck,
  Calendar,
  Image,
  Info,
  MapPin,
  MonitorPlay,
  Newspaper,
} from "lucide-react";

type Props = {
  action: TerroristActionDefinition;
};

export default function TerroristActionListItem({ action }: Props) {
  function getFormattedDateToString(date: Date): string {
    return new Intl.DateTimeFormat("es-UY", { dateStyle: "medium" }).format(
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
        className="flex flex-col h-full p-3 xs:p-6 overflow-hidden"
      >
        <header className="flex items-center justify-between mb-2 xs:mb-4">
          <div className="flex items-center gap-1 xs:gap-2 text-[10px] xs:text-xs md:text-sm font-black uppercase tracking-widest text-muted-foreground">
            <Calendar className="w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 text-primary" />
            <time className="truncate max-w-[120px] xs:max-w-none">
              {getFormattedDateToString(action.date)}
            </time>
          </div>

          {action.moneyTheft?.usd && (
            <span className="text-[10px] xs:text-xs md:text-sm font-black bg-foreground text-background px-1 xs:px-2 py-0.5 rounded-sm whitespace-nowrap">
              {formatCurrency(action.moneyTheft?.usd)}
            </span>
          )}
        </header>

        <h2 className="font-[family-name:var(--font-newsreader)] text-base xs:text-xl md:text-2xl font-black leading-tight mb-2 xs:mb-4 group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem] xs:min-h-[3.5rem] md:min-h-[3.5rem] flex-1">
          {action.title}
        </h2>

        <footer className="flex items-center justify-between pt-2 xs:pt-4 border-t border-border/50">
          <div className="flex gap-1 xs:gap-2 md:gap-3">
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
                  className="w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 text-muted-foreground/60 group-hover:text-primary transition-colors flex-shrink-0"
                />
              ))}
          </div>
          <span className="text-[10px] xs:text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex items-center whitespace-nowrap">
            <span>
              Abrir <span className="sr-only">{action.title}</span>
            </span>
            <ArrowRight className="inline w-2.5 h-2.5 xs:w-3 xs:h-3 ml-1 md:w-4 md:h-4 flex-shrink-0" />
          </span>
        </footer>
      </Link>
    </li>
  );
}
