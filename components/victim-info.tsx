import { VictimsDefinition, VictimsInfoDefinition } from "@/db/data";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

export default function Victim({
  victim,
  date,
}: {
  victim: VictimsDefinition;
  date: Date;
}) {
  // console.log("VICTIM", victim);
  return (
    <div className="py-10">
      {/* victim info */}
      {victim.info && <VictimInfo info={victim.info} date={date} />}
    </div>
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
    <div className="text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl p-4 border border-b-2 border-primary-foreground shadow-[4px_4px] shadow-popover-foreground border-solid bg-orange-100">
      <img
        src={info.avatar?.src}
        alt={info.avatar?.alt}
        className="h-60 w-48 rounded-2xl row-span-1"
      />
      <div className="py-4 flex items-center flex-col h-full text-center row-span-2 w-full">
        <h1 className="uppercase text-2xl md:text-4xl 2xl:text-5xl text-center font-extrabold">
          {info.name}
        </h1>

        <div className="w-full mb-4">
          {!info.kidnapping && (
            <p className="text-center font-bold">
              <time>{getFormattedDateToString(date)}</time>
            </p>
          )}

          {info.kidnapping && (
            <p className="font-bold text-center md:text-lg xl:text-2xl 2xl:text-2xl">
              <time>{getFormattedDateToString(info.kidnapping.init)}</time>
              <span className="mx-2">al</span>
              <time className="mx-2">
                {getFormattedDateToString(info.kidnapping.end)}
              </time>
              <span>
                ({info.kidnapping.days} {info.kidnapping.description})
              </span>
            </p>
          )}
        </div>

        {info.nationality && (
          <div className="flex gap-2 xl:text-xl">
            <p className="text-muted-foreground">Nacionalidad</p>
            <p className="text-primary-foreground">{info.nationality}</p>
          </div>
        )}

        <div className="flex gap-2 xl:text-xl">
          <p className="text-muted-foreground">Edad</p>
          <p className="text-primary-foreground">{info.age} años</p>
        </div>

        {info.marital && (
          <div className="flex gap-2 xl:text-xl">
            <p className="text-muted-foreground">Estado Civil</p>
            <p className="text-primary-foreground">{info.marital}</p>
          </div>
        )}

        {info.childs && (
          <div className="flex gap-2 xl:text-xl">
            <p className="text-muted-foreground">Hijos</p>
            <p className="text-primary-foreground">
              {info.childs === 1
                ? `${info.childs} hijo`
                : `${info.childs} hijos `}
              {info.childsDescription && (
                <span className="">{info.childsDescription}</span>
              )}
              <span className="">{info.otherDescription}</span>
            </p>
          </div>
        )}
        {info.daughter && (
          <div className="flex gap-2 flex-col xl:text-xl">
            <p className="">Hijos</p>
            <p className="text-primary-foreground">
              {info.daughter === 1
                ? `${info.daughter} hija`
                : `${info.daughter} hijas `}
              {info.childsDescription && (
                <span className="">{info.childsDescription}</span>
              )}
              <span className="">{info.otherDescription}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
