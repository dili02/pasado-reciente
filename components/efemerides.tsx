"use client";

import { TerroristActionDefinition } from "@/db/data";
import {
  Newspaper,
  Image,
  MapPin,
  MonitorPlay,
  BookOpenCheck,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

type Props = {
  actions: TerroristActionDefinition[];
};

export default function Efemerides({ actions }: Props) {
  const [currentMonth, setCurrentMonth] = React.useState<number>(
    new Date().getMonth()
  );
  const [terroristActions, setTerroristActions] = React.useState<
    [] | TerroristActionDefinition[]
  >([]);

  React.useEffect(() => {
    setCurrentMonth(new Date().getMonth());

    listActions(currentMonth);
  }, []);

  const listActions = (month: number) => {
    const actionsToList = actions
      .filter((action) => action.date.getMonth() === month)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
    setTerroristActions(actionsToList);
  };

  return (
    <section>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-center divide-y divide-orange-500 [&>*]:py-8">
          <div className="w-full max-w-3xl mx-auto">
            <div className="-my-2">
              <ul className="">
                {terroristActions.map((action, index) => (
                  <TimelineItem action={action} key={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
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

function TimelineItem({ action }: { action: TerroristActionDefinition }) {
  return (
    <li className="relative pl-8 sm:pl-32 py-6 group">
      <Link href={`/${action.type}/${action.slug}`} className="">
        {/* <!-- Label --> */}
        <div className="flex items-center justify-between">
          <div className="font-medium text-orange-500 mb-1 sm:mb-0">
            {action.type === "atentados" && <span>ATENTADOS</span>}
            {action.type === "otras-acciones" && <span>OTRAS ACCIONES</span>}
            {action.type === "asesinatos" && <span>ASESINATOS</span>}
            {action.type === "robo-armamento-explosivos" && (
              <span>ROBO ARMAMENTO / EXPLOSIVOS</span>
            )}
            {action.type === "robo-dinero" && <span>ROBO DINERO</span>}
            {action.type === "secuestros" && <span>SECUESTROS</span>}

            {/* {action.type} */}
          </div>
          {action.moneyTheft?.usd && (
            <Badge className="text-sm text-orange-500 bg-orange-100 py-2 px-4 rounded-3xl font-extrabold hover:bg-orange-100">
              {formatCurrency(action.moneyTheft?.usd)}
            </Badge>
          )}
        </div>

        {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-orange-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-50 after:border-4 after:box-content after:border-orange-500 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-orange-50 bg-orange-500 rounded-full">
            {action.date.toLocaleDateString()}
          </time>
          <div className="text-xl font-bold text-slate-900">{action.title}</div>
        </div>

        <div className="mt-[-0.5rem] flex flex-col sm:flex-row sm:items-center sm:gap-2 sm:py-0">
          <span className="text-gray-500">Contenido:</span>
          <div className="flex items-center gap-2 py-2">
            {action.newsPapers && (
              <span className="bg-orange-50 text-orange-500 p-2 rounded-md">
                <Newspaper className="w-5 h-5" />
              </span>
            )}
            {action.apologyForCrimeInImages && (
              <span className="bg-orange-50 text-orange-500 p-2 rounded-md">
                <Image className="w-5 h-5" />
              </span>
            )}
            {action.virtualMemorial && (
              <span className="bg-orange-50 text-orange-500 p-2 rounded-md">
                <MapPin className="w-5 h-5" />
              </span>
            )}
            {action.vindicatedActions && (
              <span className="bg-orange-50 text-orange-500 p-2 rounded-md">
                <BookOpenCheck className="w-5 h-5" />
              </span>
            )}
            {action.videos && (
              <span className="bg-orange-50 text-orange-500 p-2 rounded-md">
                <MonitorPlay className="w-5 h-5" />
              </span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}
