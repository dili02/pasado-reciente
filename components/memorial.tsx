"use client";

import { useState, useEffect } from "react";

// import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {};

export default function Memorial({}: Props) {
  const [dateTime, setDateTime] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    setDateTime(now.toLocaleString());

    const monthFormatter = new Intl.DateTimeFormat("es-UY", { month: "long" });
    const getCurrentMonth = monthFormatter.format(new Date()).toLowerCase();
    setCurrentMonth(getCurrentMonth);
  }, []);

  // TODO: delete console.log
  console.log(dateTime);
  // console.log(month);

  return (
    <div className="flex flex-col justify-center items-center gap-y-4 lg:max-w-[450px]">
      <h2 className="uppercase text-center font-semibold text-lg">
        <span className="pr-2"> Memorial del Mes de</span>
        <time dateTime={getCurrentMonth()}>{currentMonth}</time>
      </h2>

      {/* TODO: get years automatically */}
      <h4 className="text-center lg:text-sm text-gray-500">
        Acciones terroristas llevadas a cabo por los movimientos subversivos
        durante el período 1965-1972
      </h4>

      <span className="text-xs hidden">{dateTime}</span>

      <img
        src={`/efemerides/${currentMonth}.png`}
        className=""
        alt={`memorial del mes de ${getCurrentMonth()}`}
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

function getCurrentMonth() {
  const montFormatter = new Intl.DateTimeFormat("es-UY", { month: "long" });

  return montFormatter.format(new Date());
}

// TODO: delete functions
async function getToday() {
  const date = new Date();

  return new Intl.DateTimeFormat("es-UY", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
  // const today = new Intl.DateTimeFormat("es-UY", {
  //   dateStyle: "full",
  //   timeStyle: "long",
  //   timeZone: "Montevideo/Uruguay",
  // });

  // return today.format(new Date());

  // return new Date();
}

export function getMonth(): string {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Usamos new Date() para obtener la fecha actual del servidor
  const currentDate = new Date();

  // Obtenemos el índice del mes (0-11) y lo usamos para obtener el nombre del mes
  return months[currentDate.getMonth()];
}
