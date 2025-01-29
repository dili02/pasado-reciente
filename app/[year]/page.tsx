import React from "react";
import { api as API, VideosTerroristActionDefinition } from "@/db/data";
import Link from "next/link";
import {
  BookOpenCheck,
  Calendar,
  Image,
  MapPin,
  MonitorPlay,
  Newspaper,
} from "lucide-react";

type Props = { params: { year: string } };

export async function generateStaticParams() {
  const actions = await API.getAllAcitions();

  const years = actions.map((action) => action.date.getFullYear());

  return Array.from(new Set(years.sort((a, b) => a - b))).toString();
}

export default async function page({ params }: Props) {
  const actions = await API.getActionsByYear(params.year);

  function formatCurrency(amount: number) {
    return new Intl.NumberFormat("es-UY", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
      currencyDisplay: "code",
    }).format(amount);
  }

  function getFormattedDateToString(date: Date): string {
    return new Intl.DateTimeFormat("es-UY", { dateStyle: "medium" }).format(
      new Date(date)
    );
  }

  return (
    <div className="container mt-4">
      <ul className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-6">
        {actions.map((action, index) => (
          <li
            key={index}
            className="border border-orange-400 p-2 bg-orange-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition ease-in-out duration-500"
          >
            <Link href={`/${action.type}/${action.slug}`}>
              <div className="flex items-center justify-between my-2">
                <div className="font-bold text-orange-500">
                  {action.type === "atentados" && <span>ATENTADOS</span>}
                  {action.type === "otras-acciones" && (
                    <span>OTRAS ACCIONES</span>
                  )}
                  {action.type === "asesinatos" && <span>ASESINATOS</span>}
                  {action.type === "robo-armamento-explosivos" && (
                    <span>ROBO ARMAMENTO / EXPLOSIVOS</span>
                  )}
                  {action.type === "robo-dinero" && <span>ROBO DINERO</span>}
                  {action.type === "secuestros" && <span>SECUESTROS</span>}
                </div>

                {action.moneyTheft?.usd && (
                  <span className="text-sm text-orange-500 bg-orange-100 py-2 px-4 rounded-xl font-extrabold hover:bg-orange-100">
                    {formatCurrency(action.moneyTheft?.usd)}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-orange-500 mb-2">
                <Calendar className="w-5 h-5" />
                <time className="text-sm">
                  {getFormattedDateToString(action.date)}
                </time>
              </div>

              <h2 className="text-base font-semibold">{action.title}</h2>

              <div className="py-2 flex flex-col sm:flex-row sm:items-center sm:gap-2 sm:py-0">
                <span className="text-gray-500">Contenido:</span>
                <div className="flex items-center gap-2 py-2">
                  {action.newsPapers && (
                    <span className="bg-orange-100 text-orange-500 p-2 rounded-md">
                      <Newspaper className="w-5 h-5" />
                    </span>
                  )}
                  {action.apologyForCrimeInImages && (
                    <span className="bg-orange-100 text-orange-500 p-2 rounded-md">
                      <Image className="w-5 h-5" />
                    </span>
                  )}
                  {action.virtualMemorial && (
                    <span className="bg-orange-100 text-orange-500 p-2 rounded-md">
                      <MapPin className="w-5 h-5" />
                    </span>
                  )}
                  {action.vindicatedActions && (
                    <span className="bg-orange-100 text-orange-500 p-2 rounded-md">
                      <BookOpenCheck className="w-5 h-5" />
                    </span>
                  )}
                  {action.videos && (
                    <span className="bg-orange-100 text-orange-500 p-2 rounded-md">
                      <MonitorPlay className="w-5 h-5" />
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
