"use client";

import { TerroristActionDefinition } from "@/db/data";
import React from "react";
import { ImageSkeleton, TitleSkeleton } from "./skeletons";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  actions: TerroristActionDefinition[];
};

function getCurrentMonth() {
  const montFormatter = new Intl.DateTimeFormat("es-UY", { month: "long" });

  return montFormatter.format(new Date());
}

export default function MemorialClient({ actions }: Props) {
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

  return (
    <div className="py-4 px-8 flex flex-col md:flex-row md:justify-between">
      <div className="flex flex-col justify-center items-center md:items-start">
        {!currentMonth && <TitleSkeleton />}
        {currentMonth && (
          <h2 className="text-center uppercase text-2xl xl:text-3xl font-extrabold md:text-left">
            Memorial del Mes de{" "}
            <time dateTime={getCurrentMonth()}>{currentMonth}</time>
          </h2>
        )}

        {!initDate && !endDate ? (
          <TitleSkeleton />
        ) : (
          <p className="text-center md:text-left py-4 max-w-2xl">
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

        <Link
          href="/efemerides"
          className="flex items-center justify-center gap-2 mt-2 text-orange-500 hover:duration-500 hover:ease-out bg-black py-2 px-4 rounded-md font-bold mb-2 transition-transform duration-300 hover:scale-105 md:w-72"
        >
          <span>Ir a efemérides</span> <ArrowRight size={18} />
        </Link>
      </div>

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
    </div>
  );
}

export function MemorialClientBento({ actions }: Props) {
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

  return (
    <div className="">
      {!currentMonth && <TitleSkeleton />}
      {currentMonth && (
        <h2 className="text-center uppercase text-2xl lg:text-lg xl:text-2xl 2xl:text-3xl font-extrabold flex items-center gap-2 justify-center">
          Memorial
          <time dateTime={getCurrentMonth()}>{currentMonth}</time>
        </h2>
      )}

      {!initDate && !endDate ? (
        <TitleSkeleton />
      ) : (
        <p className="text-center mt-4 text-base lg:text-xs xl:text-base">
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

      <div className="my-2 flex justify-center items-center">
        {!currentMonth && <ImageSkeleton />}
        {currentMonth && (
          <img
            src={`/efemerides/${currentMonth}.png`}
            className="h-full w-full lg:w-60 lg:h-60"
            alt={`memorial del mes de ${currentMonth}`}
          />
        )}
      </div>

      <Link
        href="/efemerides"
        className="text-lg lg:text-xs flex items-center justify-center gap-2 text-orange-100 bg-black hover:duration-500 hover:ease-out py-2 px-4 rounded-md transition-transform duration-300 hover:scale-105"
      >
        <span>Ir a efemérides</span> <ArrowRight size={18} />
      </Link>

      {/* <div className="lg:w-2/3 flex flex-col justify-between items-center"> */}
      {/* {!currentMonth && <TitleSkeleton />} */}
      {/* {currentMonth && (
          <h2 className="ttext-center uppercase text-2xl lg:text-lg font-extrabold">
            Memorial del Mes de{" "}
            <time dateTime={getCurrentMonth()}>{currentMonth}</time>
          </h2>
        )} */}

      {/* {!initDate && !endDate ? (
          <TitleSkeleton />
        ) : (
          <p className="text-center py-4 lg:py-0 lg:text-xs">
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

        <Link
          href="/efemerides"
          className="mt-2 xl:mt-1 text-lg lg:text-xs flex items-center justify-center gap-2 text-orange-50 bg-orange-900 hover:duration-500 hover:ease-out py-2 px-4 rounded-md transition-transform duration-300 hover:scale-105"
        >
          <span>Ir a efemérides</span> <ArrowRight size={18} />
        </Link>
      </div>
      <div className="lg:w-1/3 h-full flex items-center justify-center">
        {!currentMonth && <ImageSkeleton />}
        {currentMonth && (
          <img
            src={`/efemerides/${currentMonth}.png`}
            className="h-full"
            // height={200}
            alt={`memorial del mes de ${currentMonth}`}
          />
        )}
      </div> */}

      {/* <div className="h-full flex flex-col justify-between">
        {!currentMonth && <TitleSkeleton />}
        {currentMonth && (
          <h2 className="text-center uppercase">
            Memorial del Mes de{" "}
            <time dateTime={getCurrentMonth()}>{currentMonth}</time>
          </h2>
        )}

        {!initDate && !endDate ? (
          <TitleSkeleton />
        ) : (
          <p className="text-sm">
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

        <Link
          href="/efemerides"
          className="text-sm flex items-center justify-center gap-2 bg-orange-100 hover:duration-500 hover:ease-out  py-2 px-4 rounded-md transition-transform duration-300 hover:scale-105"
        >
          <span>Ir a efemérides</span> <ArrowRight size={18} />
        </Link>
      </div>

      <div className="flex justify-center items-center h-full w-[80%]">
        {!currentMonth && <ImageSkeleton />}
        {currentMonth && (
          <img
            src={`/efemerides/${currentMonth}.png`}
            className="h-full"
            alt={`memorial del mes de ${currentMonth}`}
          />
        )}
      </div> */}

      {/* <div className="flex flex-col justify-center"> */}
      {/* {!currentMonth && <TitleSkeleton />}
        {currentMonth && (
          <h2 className="text-center uppercase">
            Memorial del Mes de{" "}
            <time dateTime={getCurrentMonth()}>{currentMonth}</time>
          </h2>
        )} */}

      {/* {!initDate && !endDate ? (
          <TitleSkeleton />
        ) : (
          <p className="">
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
        )} */}

      {/* <Link
          href="/efemerides"
          className="flex items-center justify-center gap-2 mt-2 hover:bg-orange-500/85 hover:duration-500 hover:ease-out bg-orange-500 py-2 px-4 rounded-md text-orange-100 mb-2 md:w-96 text-xl transition-transform duration-300 hover:scale-110"
        >
          <span>Ir a efemérides</span> <ArrowRight size={18} />
        </Link>
      </div> */}

      {/* <div className="flex justify-center items-center mt-2">
        {!currentMonth && <ImageSkeleton />}
        {currentMonth && (
          <img
            src={`/efemerides/${currentMonth}.png`}
            className="h-full"
            alt={`memorial del mes de ${currentMonth}`}

          />
        )}
      </div> */}
    </div>
  );
}

export function EfemeridesClient({ actions }: Props) {
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

  return (
    <div className="flex flex-col items-center justify-center">
      {!currentMonth && <TitleSkeleton />}
      {currentMonth && (
        <h2 className="text-center text-white uppercase text-4xl lg:text-xl xl:text-2xl font-extrabold flex items-center gap-2">
          Memorial
          <time dateTime={getCurrentMonth()}>{currentMonth}</time>
        </h2>
      )}

      {!initDate && !endDate ? (
        <TitleSkeleton />
      ) : (
        <p className="text-sm lg:text-xs xl:text-base text-center text-white">
          Acciones terroristas llevadas a cabo por los movimientos terroristas
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

      {!currentMonth && <ImageSkeleton />}
      {currentMonth && (
        <img
          src={`/efemerides/${currentMonth}.png`}
          className="my-2"
          alt={`memorial del mes de ${currentMonth}`}
        />
      )}

      <Link
        href="/efemerides"
        className="flex items-center justify-center gap-2 text-black hover:duration-500 hover:ease-out bg-yellow-200 py-3 px-4 rounded-md font-bold transition-transform duration-300 hover:scale-105 w-full md:w-80 lg:w-72"
      >
        <span>Ir a efemérides</span> <ArrowRight size={18} />
      </Link>
    </div>
  );
}
