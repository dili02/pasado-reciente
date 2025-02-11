"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
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
    // <div className="my-4 flex flex-col items-center justify-center lg:col-span-2 p-4 rounded-xl lg:text-black">
    <div className=" mt-8">
      {!currentMonth && <TitleSkeleton />}
      {currentMonth && (
        // <h2 className="text-3xl font-bold uppercase text-center">
        <h2 className="font-heading text-3xl font-bold tracking-wide uppercase text-orange-500 text-center lg:text-left">
          Memorial del Mes de{" "}
          <time dateTime={getCurrentMonth()}>{currentMonth}</time>
        </h2>
      )}

      {/* <p>{initDate}</p>
      <p>{endDate}</p> */}

      {!initDate && !endDate ? (
        <TitleSkeleton />
      ) : (
        // <p className="text-center py-4 lg:text-sm">
        <p className="text-center text-lg">
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

      <div className="flex justify-center items-center mt-2">
        {!currentMonth && <ImageSkeleton />}
        {currentMonth && (
          <img
            src={`/efemerides/${currentMonth}.png`}
            className=""
            alt={`memorial del mes de ${currentMonth}`}
            // width={258}
            // height={290}
          />
        )}
      </div>

      <Link
        href="/efemerides"
        className="mx-3.5 flex items-center justify-center gap-2 mt-2 hover:bg-orange-200/85 hover:duration-500 hover:ease-out bg-orange-100 py-2 px-4 rounded-md text-orange-500 mb-2 transition-transform duration-300 hover:scale-125"
      >
        <span>Ir a efemérides</span> <ArrowRight size={18} />
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
