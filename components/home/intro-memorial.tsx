"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TerroristActionDefinition } from "@/db/data";
import { ImageSkeleton, TitleSkeleton } from "../skeletons";

type Props = {
  actions: TerroristActionDefinition[];
};

function getCurrentMonth() {
  const montFormatter = new Intl.DateTimeFormat("es-UY", { month: "long" });

  return montFormatter.format(new Date());
}

export default function IntroMemorial({ actions }: Props) {
  const [currentMonth, setCurrentMonth] = React.useState<string>("");

  const [terroristActions, setTerroristActions] = React.useState<
    [] | TerroristActionDefinition[]
  >([]);

  const [dateTime, setDateTime] = React.useState<string>("");

  const [currentMonthNumber, setCurrentMonthNumber] = React.useState<number>(
    new Date().getMonth()
  );

  const listActions = (month: number) => {
    const actionsToList = actions
      .filter((action) => action.date.getMonth() === month)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
    setTerroristActions(actionsToList);
  };

  React.useEffect(() => {
    const now = new Date();
    setDateTime(now.toLocaleString());

    const monthFormatter = new Intl.DateTimeFormat("es-UY", { month: "long" });
    const getCurrentMonth = monthFormatter.format(new Date()).toLowerCase();
    setCurrentMonth(getCurrentMonth);

    listActions(currentMonthNumber);
  }, []);

  const actionsDates = terroristActions.map((date) => date.date);
  const initDate = new Date(actionsDates[0]).getFullYear();
  const endDate = new Date(actionsDates[actionsDates.length - 1]).getFullYear();

  if (!currentMonth || !initDate || !endDate) return <IntroMemeorialSkeleton />;

  return (
    <div className="bg-[#FF6600] rounded-lg p-4 shadow-lg">
      {/* {!currentMonth && <TitleSkeleton />} */}

      {currentMonth && (
        <h2 className="text-center text-[#e4d8b4] uppercase text-4xl lg:text-xl xl:text-2xl font-extrabold">
          Memorial de <time dateTime={getCurrentMonth()}>{currentMonth}</time>
        </h2>
      )}

      {!initDate && !endDate ? (
        <TitleSkeleton />
      ) : (
        <p className="text-center py-4 max-w-2xl text-[#e4d8b4] ">
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

      <div className="flex justify-center items-center mt-2">
        {/* {!currentMonth && <ImageSkeleton />} */}
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
        className="flex items-center justify-center gap-2 mt-2 text-black hover:duration-500 hover:ease-out bg-yellow-300 py-2 px-4 rounded-md font-bold mb-2 transition-transform duration-300 hover:scale-105 md:w-72 lg:w-full"
      >
        <span>Ir a efemérides</span> <ArrowRight size={18} />
      </Link>
    </div>
  );
}

function IntroMemeorialSkeleton() {
  return (
    <div className="bg-[#FF6600] rounded-lg p-4 shadow-lg flex flex-col items-center">
      <div className="h-7 w-full bg-[#e4d8b4] rounded-md mb-2" />
      <div className="h-4 w-full bg-[#e4d8b4] rounded-md my-1" />
      <div className="h-4 w-full bg-[#e4d8b4] rounded-md my-1" />
      <div className="h-4 w-[50%] bg-[#e4d8b4] rounded-md my-1" />
      <ImageSkeleton />
    </div>
  );
}
