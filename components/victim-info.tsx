import { VictimsDefinition, VictimsInfoDefinition } from "@/db/data";
import React from "react";

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
    <div className="text-textPrimary flex flex-col md:flex-row items-center justify-between gap-4 bg-orange-200 rounded-2xl p-4">
      <img
        src={info.avatar?.src}
        alt={info.avatar?.alt}
        className="h-60 rounded-2xl row-span-1"
      />
      <div className="py-4 flex items-center flex-col h-full text-center row-span-2 w-full">
        <h1 className="uppercase text-2xl md:text-4xl 2xl:text-5xl text-center font-extrabold">
          {info.name}
        </h1>
        {/* <p className="text-center text-2xl 2xl:text-4xl font-bold">
          <time>{getFormattedDateToString(date)}</time>
        </p> */}

        {!info.kidnapping && (
          <p className="text-center text-2xl 2xl:text-4xl font-bold">
            <time>{getFormattedDateToString(date)}</time>
          </p>
        )}

        {info.kidnapping && (
          <p className="flex flex-col lg:flex-row items-center gap-2  text-xl md:text-2xl font-bold">
            <time>{getFormattedDateToString(info.kidnapping.init)}</time>
            <span>al</span>
            <time>{getFormattedDateToString(info.kidnapping.end)}</time>
            <strong>({info.kidnapping.days} días en cuativerio)</strong>
          </p>
        )}

        {info.nationality && (
          <p className="text-xl md:text-2xl flex flex-col gap-1 pt-2">
            {info.nationality}
          </p>
        )}

        <div className="text-xl md:text-2xl flex flex-col gap-1 py-2">
          {info.age && <p>{info.age} años</p>}
          <p>{info.marital}</p>
          {info.childs && (
            <div>
              <p>
                {info.childs === 1
                  ? `${info.childs} hijo`
                  : `${info.childs} hijos `}
                {info.childsDescription && (
                  <span>{info.childsDescription}</span>
                )}
              </p>
              <p className="font-bold">{info.otherDescription}</p>
            </div>
          )}
          {info.daughter && (
            <p>
              {info.daughter === 1
                ? `${info.daughter} hija`
                : `${info.daughter} hijas `}
              {info.childsDescription && (
                <span className="py-2">{info.childsDescription}</span>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
