"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Suspense } from "react";
import { ImageSkeleton, TitleSkeleton } from "./skeletons";
import { TerroristActionDefinition } from "@/db/data";

type Props = {
  actions: TerroristActionDefinition[];
};

function getCurrentMonth() {
  const montFormatter = new Intl.DateTimeFormat("es-UY", { month: "long" });

  return montFormatter.format(new Date());
}

export default function Memorial({ actions }: Props) {
  const [dateTime, setDateTime] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState<string>("");
  const [terroristActions, setTerroristActions] = useState<
    [] | TerroristActionDefinition[]
  >([]);
  const [currentMonthNumber, setCurrentMonthNumber] = useState<number>(
    new Date().getMonth()
  );

  useEffect(() => {
    const now = new Date();
    setDateTime(now.toLocaleString());

    const monthFormatter = new Intl.DateTimeFormat("es-UY", { month: "long" });
    const getCurrentMonth = monthFormatter.format(new Date()).toLowerCase();
    setCurrentMonth(getCurrentMonth);

    listActions(currentMonthNumber);
  }, []);

  const listActions = (month: number) => {
    const actionsToList = actions
      .filter((action) => action.date.getMonth() === month)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
    setTerroristActions(actionsToList);
  };

  const actionsDates = terroristActions.map((date) => date.date);
  const initDate = new Date(actionsDates[0]).getFullYear();
  const endDate = new Date(actionsDates[actionsDates.length - 1]).getFullYear();

  return (
    <div className="my-4 flex flex-col items-center justify-center lg:col-span-2 lg:bg-orange-300 lg:p-4 lg:rounded-xl lg:text-black">
      {!currentMonth && <TitleSkeleton />}
      {currentMonth && (
        <h2 className="text-4xl font-bold uppercase text-center lg:text-xl lg:tracking-tight">
          Memorial del Mes de{" "}
          <time dateTime={getCurrentMonth()}>{currentMonth}</time>
        </h2>
      )}

      {/* <p>{initDate}</p>
      <p>{endDate}</p> */}

      {!initDate && !endDate ? (
        <TitleSkeleton />
      ) : (
        <p className="text-center py-4 lg:text-sm">
          Acciones terroristas llevadas a cabo por los movimientos subversivos
          durante el período{" "}
          <time
            dateTime={initDate.toString()}
            aria-label={`Año ${initDate.toString()}`}
          >
            {initDate}
          </time>
          -
          <time
            dateTime={endDate.toString()}
            aria-label={`Año ${endDate.toString()}`}
          >
            {endDate}
          </time>
        </p>
      )}

      {/* <span className="text-xs">{dateTime}</span> */}

      <div className="">
        {!currentMonth && <ImageSkeleton />}
        {currentMonth && (
          <img
            src={`/efemerides/${currentMonth}.png`}
            className=""
            alt={`memorial del mes de ${currentMonth}`}
            // width={318}
            // height={350}
          />
        )}
      </div>

      <Link
        href="/efemerides"
        className="flex items-center justify-center gap-2 mt-2"
      >
        <span>Ir a Efemérides</span> <ChevronRight className="h-5 w-5" />
      </Link>

      {/* <Button
        className="bg-orange-500 text-orange-50 hover:bg-orange-400 w-52 lg:w-[320px]"
        asChild
      >
        <Link
          href="/efemerides"
          className="flex items-center justify-center gap-2"
        >
          <span>Ir a Efemérides</span> <ChevronRight className="h-5 w-5" />
        </Link>
      </Button> */}
    </div>
  );
}
