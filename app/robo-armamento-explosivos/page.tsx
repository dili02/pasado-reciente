import TerroristActionListItem from "@/components/terrorist-action-list-item";
import { api } from "@/db/data";
import { Metadata } from "next/types";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Robo Armamento y Explosivos",
};

import { Newsreader } from "next/font/google";
const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

export default async function page({}: Props) {
  const terrorstActionsExplosiveWeaponsTheft =
    await api.getAllExplosiveWeaponsTheft();

  const terrorstActionsExplosiveWeaponsTheftDates =
    terrorstActionsExplosiveWeaponsTheft.map((date) => date.date);

  const initDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "long",
  }).format(terrorstActionsExplosiveWeaponsTheftDates[0]);
  const endDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "long",
  }).format(
    terrorstActionsExplosiveWeaponsTheftDates[
      terrorstActionsExplosiveWeaponsTheftDates.length - 1
    ],
  );

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
            className={`${newsreader.className} text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none`}
          >
            Robo de Armamento <br /> y Explosivos
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
        <p className="text-right max-w-3xl text-lg text-muted-foreground leading-relaxed italic">
          Robo de armamento y explosivos a particulares, empresas y organismos
          oficiales documentados en la prensa nacional de la época.
        </p>
        <p className="mt-2 flex gap-4 text-[10px] lg:text-[12px] font-black uppercase tracking-widest text-muted-foreground">
          Periodo: {initDate} — {endDate}
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {terrorstActionsExplosiveWeaponsTheft.map((action) => (
          <TerroristActionListItem action={action} key={action.slug} />
        ))}
      </ul>
    </main>
  );
}
