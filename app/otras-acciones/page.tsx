import TerroristActionListItem from "@/components/terrorist-action-list-item";
import { api } from "@/db/data";
import Link from "next/link";
import { Metadata } from "next/types";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Otras Acciones",
};

import { Newsreader } from "next/font/google";
const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

export default async function page({}: Props) {
  const actions = await api.getAllOtherAcctions();

  const actionsDates = actions.map((date) => date.date);

  const initDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "long",
  }).format(actionsDates[0]);

  const endDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "long",
  }).format(actionsDates[actionsDates.length - 1]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-12 border-b-4 border-foreground pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          {/* <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary text-white text-[10px] px-2 py-0.5 font-black uppercase tracking-widest">
              Suplemento Especial
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Uruguay / Hemeroteca
            </span>
          </div> */}
          <h1
            className={`${newsreader.className} text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none`}
          >
            Otras Acciones
          </h1>
        </div>
        {/* <div className="text-right">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
            Periodo de Investigación
          </p>
          <p className="text-sm font-black italic">
            {initDate} — {endDate}
          </p>
        </div> */}
      </header>

      <div className="mb-8 border-b border-border pb-8 flex flex-col items-end justify-end">
        <p className="text-right max-w-xl text-lg text-muted-foreground leading-relaxed italic">
          Recopilación de operativos diversos, interferencias, ocupaciones y
          otras acciones realizadas por terroristas que no entran en las
          categorías principales, documentados en la prensa nacional.
        </p>
        <p className="mt-2 flex gap-4 text-[10px] lg:text-[12px] font-black uppercase tracking-widest text-muted-foreground">
          Periodo: {initDate} — {endDate}
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {actions.map((action) => (
          <TerroristActionListItem action={action} key={action.slug} />
        ))}
      </ul>
    </main>
  );
}
