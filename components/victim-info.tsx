import { VictimsDefinition, VictimsInfoDefinition } from "@/db/data";
import React from "react";
import { cn } from "@/lib/utils";
import { ImageOff } from "lucide-react";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Baby, Cake } from "lucide-react";
// import { Icons } from "./icons";

type Props = {};

export default function Victim({
  victim,
  date,
}: {
  victim: VictimsDefinition;
  date: Date;
}) {
  return (
    <div className="pt-4">
      {victim.info && <VictimInfo info={victim.info} date={date} />}
    </div>
  );
}

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
    new Date(date)
  );
}

export function VictimInfo({
  info,
  date,
}: {
  info: VictimsInfoDefinition;
  date: Date;
}) {
  function getFormattedDateToString(date: Date): string {
    return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
      new Date(date)
    );
  }
  return (
    <div className="flex flex-col w-[250px] h-full rounded-xl">
      <div className="relative w-[250px]">
        {info?.avatar ? (
          <img
            src={info?.avatar?.src}
            alt={info?.avatar?.alt}
            className="w-[250px] h-[250px] rounded-xl"
          />
        ) : (
          <div className="w-[250px] h-[250px] bg-orange-200 flex items-center justify-center rounded-xl">
            <ImageOff className="text-orange-100 w-32 h-32" />
          </div>
        )}
        {/* <img
          src={info?.avatar?.src}
          alt={info?.avatar?.alt}
          className="w-[250px] h-[250px] rounded-xl"
        /> */}
      </div>
      <div className="flex-grow p-1">
        <h2 className="font-extrabold text-center text-orange-700">
          {info.name}
        </h2>

        <div>
          {info?.deceased && (
            <p className="text-sm">
              <time>{getFormattedDateToString(info?.deceased)}</time>
            </p>
          )}

          {!info?.deceased && !info?.kidnapping && (
            <p className="text-center text-sm">
              <time>{getFormattedDateToString(date)}</time>
            </p>
          )}

          {info?.kidnapping && (
            <p className="text-center text-sm">
              <time>{getFormattedDateToString(info.kidnapping.init)}</time>
              <span className="mx-2">al</span>
              <time className="">
                {getFormattedDateToString(info.kidnapping.end)}
              </time>
              <span className="ml-2">
                ({info?.kidnapping.days} {info?.kidnapping.description})
              </span>
            </p>
          )}
        </div>

        <div className="text-center text-gray-500 text-sm py-1">
          {info?.nationality && (
            <p className="text-sm">Nacionalidad: {info?.nationality}</p>
          )}

          {info?.age && <p className="">Edad: {info?.age} años</p>}

          {info?.marital && <p className="">Estado civil: {info?.marital}</p>}

          {info.childs && (
            <p className="">
              Hijos:
              {info.childs === 1 ? ` ${info.childs}` : ` ${info.childs}`}
              {info.childsDescription && (
                <span className="pl-2">{info.childsDescription}</span>
              )}
              <span className="">{info.otherDescription}</span>
            </p>
          )}

          {info.daughter && (
            <p className="">
              Hijos:
              {info.daughter === 1 ? ` ${info.daughter}` : ` ${info.daughter}`}
              {info.childsDescription && (
                <span className="">{info.childsDescription}</span>
              )}
              <span className="">{info.otherDescription}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
