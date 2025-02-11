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
import { Badge } from "./ui/badge";

type Props = {
  action: TerroristActionDefinition;
};

export default function TerroristActionListItem({ action }: Props) {
  function getFormattedDateToString(date: Date): string {
    return new Intl.DateTimeFormat("es-UY", { dateStyle: "medium" }).format(
      new Date(date)
    );
  }
  //   console.log("TerroristActionListItem", action);

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
      className="rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition ease-in-out duration-500 bg-orange-50 border border-orange-600"
    >
      <Link href={`/${action.type}/${action.slug}`} className="block p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-orange-900">
            <Calendar className="w-4 h-4" />
            <time className="text-sm">
              {getFormattedDateToString(action.date)}
            </time>
          </div>

          {action.moneyTheft?.usd && (
            <Badge className="text-sm text-orange-600 bg-orange-100 py-2 px-4 rounded-xl font-extrabold hover:bg-orange-100">
              {formatCurrency(action.moneyTheft?.usd)}
            </Badge>
          )}
        </div>

        <h2 className="font-semibold line-clamp-2">{action.title}</h2>

        <div className="py-2 flex flex-col sm:flex-row sm:items-center sm:gap-2 sm:py-0">
          <span className="text-gray-500">Contenido:</span>
          <div className="flex items-center gap-2 py-2">
            {action.victims && (
              <span className="bg-orange-100 text-orange-600 p-2 rounded-md">
                <Info className="w-5 h-5" />
              </span>
            )}
            {action.newsPapers && (
              <span className="bg-orange-100 text-orange-600 p-2 rounded-md">
                <Newspaper className="w-5 h-5" />
              </span>
            )}
            {action.apologyForCrimeInImages && (
              <span className="bg-orange-100 text-orange-600 p-2 rounded-md">
                <Image className="w-5 h-5" />
              </span>
            )}
            {action.virtualMemorial && (
              <span className="bg-orange-100 text-orange-600 p-2 rounded-md">
                <MapPin className="w-5 h-5" />
              </span>
            )}
            {action.vindicatedActions && (
              <span className="bg-orange-100 text-orange-600 p-2 rounded-md">
                <BookOpenCheck className="w-5 h-5" />
              </span>
            )}
            {action.videos && (
              <span className="bg-orange-100 text-orange-600 p-2 rounded-md">
                <MonitorPlay className="w-5 h-5" />
              </span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}

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
