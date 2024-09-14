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

async function getToday() {
  const today = new Date().toLocaleDateString();
  return today;
}

// TODO: <p>Acciones terroristas llevadas a cabo por los movimientos subversivos durante el período 1965-1972.</p>
// TODO: DELETE =>  <span className="hidden">{today}</span>
export default async function Memorial({}: Props) {
  const month = await getMonth();
  const today = await getToday();
  return (
    <div className="flex flex-col justify-center items-center w-full lg:w-1/6">
      <p className="text-lg uppercase text-center font-extrabold text-muted-foreground">
        Memorial del Mes de{" "}
        <time dateTime={month} className="">
          {month}
        </time>
      </p>

      <img
        src={`/efemerides/${month}.png`}
        className="w-[350px] drop-shadow py-4"
        // className="object-cover w-full py-4"
        // alt={`memorial del mes de ${month.format(new Date())}`}
      />

      {/* <div className="flex items-center justify-center gap-3 py-2">
        <Icons.museum className="w-6 h-6 hidden lg:block" />
        <h2 className="text-lg uppercase text-center font-extrabold text-textPrimary">
          Memorial del Mes de{" "}
          <time dateTime={month} className="">
            {month}
          </time>
        </h2>
        <span className="hidden">{today}</span>
      </div> */}

      {/* <img
        src={`/efemerides/${month}.png`}
        className="w-[350px] md:w-[550px] xl:w-[350px] drop-shadow py-4"
        className="object-cover w-full py-4"
        alt={`memorial del mes de ${month.format(new Date())}`}
      /> */}

      <Button variant="default" className="w-80 lg:w-full" asChild>
        <Link
          href="/efemerides"
          className="text-primary-foreground hover:bg-primary"
        >
          Ver Efemérides <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
