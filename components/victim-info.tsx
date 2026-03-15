import { VictimsDefinition, VictimsInfoDefinition } from "@/db/data";
import React from "react";
import { cn } from "@/lib/utils";
import { ImageOff } from "lucide-react";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Baby, Cake } from "lucide-react";
// import { Icons } from "./icons";

type Props = {};

export default function Victim({
  victim,
  date,
}: {
  victim: VictimsDefinition;
  date: Date;
}) {
  return (
    <div className="pt-4">
      {victim.info && <VictimInfo info={victim.info} date={date} />}
    </div>
  );
}

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
    new Date(date),
  );
}

import { Newsreader } from "next/font/google";
const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

export function VictimInfo({
  info,
  date,
}: {
  info: VictimsInfoDefinition;
  date: Date;
}) {
  function getFormattedDateToString(date: Date): string {
    return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
      new Date(date),
    );
  }
  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto gap-8 py-8 border-b border-border/50 last:border-0">
      <div className="w-full md:w-64 flex-shrink-0">
        <div className="relative group">
          {info?.avatar ? (
            <img
              src={info?.avatar?.src}
              alt={info?.avatar?.alt}
              className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700 rounded-sm shadow-md"
            />
          ) : (
            <div className="w-full aspect-square bg-muted flex items-center justify-center rounded-sm">
              <ImageOff className="text-muted-foreground/30 w-16 h-16" />
            </div>
          )}
          <div className="absolute top-0 left-0 w-full h-full border border-black/5 pointer-events-none" />
        </div>
      </div>

      <div className="flex-1">
        <h3
          className={`${newsreader.className} text-3xl font-black mb-4 tracking-tighter`}
        >
          {info.name}
        </h3>

        <div className="grid grid-cols-1 gap-y-1 gap-x-8 mb-6">
          <div className="space-y-1">
            <span className="text-[10px] lg:text-[12px] font-black uppercase tracking-widest text-primary">
              Fecha
            </span>
            <div className="text-sm lg:text-base font-bold leading-tight">
              {info?.deceased ? (
                <p>
                  Fallecido el{" "}
                  <time>{getFormattedDateToString(info?.deceased)}</time>
                </p>
              ) : info?.kidnapping ? (
                <div className="space-y-1">
                  <p>
                    Secuestro:{" "}
                    <time>
                      {getFormattedDateToString(info.kidnapping.init)}
                    </time>
                  </p>
                  <p>
                    Liberación:{" "}
                    <time>{getFormattedDateToString(info.kidnapping.end)}</time>
                  </p>
                  <p className="text-xs lg:text-sm text-primary/80 font-black uppercase tracking-tighter italic">
                    <span>{info.kidnapping.days}</span>
                    <span className="ml-1">{info.kidnapping.description}</span>
                  </p>
                </div>
              ) : (
                <p>
                  <time>{getFormattedDateToString(date)}</time>
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1">
            {/* <span className="text-[10px] lg:text-[12px] font-black uppercase tracking-widest text-primary">
              Información Personal
            </span> */}
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm lg:text-base font-medium text-muted-foreground">
              {info?.nationality && <span>{info?.nationality}</span>}
              {info?.age && <span>{info?.age} años</span>}
              {info?.marital && <span>{info?.marital}</span>}
            </div>
          </div>
        </div>

        {(info.childs || info.daughter) && (
          <div className="px-4 py-3 bg-muted/30 border-l-2 border-primary rounded-r-sm">
            <span className="text-[10px] lg:text-[12px] font-black uppercase tracking-widest text-muted-foreground block mb-1">
              Hijos
            </span>
            <p className="text-xs lg:text-base leading-relaxed font-medium">
              {info.childs || info.daughter} {info.childsDescription}{" "}
              {info.otherDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
