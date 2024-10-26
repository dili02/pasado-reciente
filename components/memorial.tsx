import React from "react";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {};

async function getMonth() {
  const monthFormatter = new Intl.DateTimeFormat("es-ES", { month: "long" });
  const currentMonth = monthFormatter.format(new Date());
  return currentMonth;
}

export default async function Memorial({}: Props) {
  const month = await getMonth();

  return (
    <div className="flex flex-col justify-center items-center gap-y-4 lg:max-w-[450px]">
      <h2 className="uppercase text-center font-semibold text-lg">
        <span className="pr-2"> Memorial del Mes de</span>
        <time dateTime={month} className="">
          {month}
        </time>
      </h2>

      {/* TODO: get years automatically */}
      <h4 className="text-center lg:text-sm text-gray-500">
        Acciones terroristas llevadas a cabo por los movimientos subversivos
        durante el período 1965-1972
      </h4>

      <img
        src={`/efemerides/${month}.png`}
        className=""
        alt={`memorial del mes de ${month}`}
      />

      <Button
        className="bg-orange-500 hover:bg-orange-400 w-52 lg:w-[320px]"
        asChild
      >
        <Link
          href="/efemerides"
          className="flex items-center justify-center gap-2"
        >
          <span>Ver Efemérides</span> <ChevronRight className="h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}
