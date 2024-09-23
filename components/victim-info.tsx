import { VictimsDefinition, VictimsInfoDefinition } from "@/db/data";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Baby, Cake } from "lucide-react";
import { Icons } from "./icons";

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
    <div className="text-primary-foreground flex flex-col lg:flex-row items-center justify-between gap-4 rounded-2xl p-4 border border-b-2 border-primary-foreground shadow-[4px_4px] shadow-popover-foreground border-solid bg-orange-100">
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-start md:gap-4">
        <img
          src={info.avatar?.src}
          alt={info.avatar?.alt}
          className="h-32 w-32 rounded-2xl"
        />
        <div>
          <p className="uppercase text-xl md:text-2xl 2xl:text-4xl text-center font-extrabold md:text-start">
            {info.name}
          </p>

          {info.deceased && (
            <p className="text-muted-foreground text-xl md:text-xl text-center font-extrabold md:text-start">
              <time>{getFormattedDateToString(info.deceased)}</time>
            </p>
          )}

          {!info.deceased && !info.kidnapping && (
            <p className="text-muted-foreground text-xl md:text-xl text-center font-extrabold md:text-start">
              <time>{getFormattedDateToString(date)}</time>
            </p>
          )}

          {info.kidnapping && (
            <p className="text-muted-foreground text-xl md:text-xl text-center font-extrabold md:text-start">
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

          <div className="flex flex-col items-center justify-center gap-2 lg:flex-row md:items-start md:justify-start md:gap-4 md:text-xl py-4">
            {info.nationality && (
              <p className="text-primary-foreground md:text-xl text-center">
                {info.nationality}
              </p>
            )}

            {info.age && (
              <p className="text-primary-foreground md:text-xl">
                {info.age} años
              </p>
            )}

            {info.marital && (
              <p className="text-primary-foreground capitalize md:text-xl">
                {info.marital}
              </p>
            )}

            {info.childs && (
              <p className="text-primary-foreground md:text-xl">
                {info.childs === 1
                  ? `${info.childs} hijo`
                  : `${info.childs} hijos `}
                {info.childsDescription && (
                  <span className="">{info.childsDescription}</span>
                )}
                <span className="px-2">{info.otherDescription}</span>
              </p>
            )}

            {info.daughter && (
              <p className="text-primary-foreground md:text-xl">
                {info.daughter === 1
                  ? `${info.daughter} hija`
                  : `${info.daughter} hijas `}
                {info.childsDescription && (
                  <span className="">{info.childsDescription}</span>
                )}
                <span className="">{info.otherDescription}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
