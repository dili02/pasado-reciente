import Link from "next/link";
import React from "react";
import { Icons } from "./icons";
import { TerroristActionDefinition } from "@/db/data";

type Props = {
  action: TerroristActionDefinition;
};

export default function TerroristActionListItem({ action }: Props) {
  function getFormattedDateToString(date: Date): string {
    return new Intl.DateTimeFormat("es-UY", { dateStyle: "medium" }).format(
      new Date(date)
    );
  }
  //   console.log("TerroristActionListItem", action);
  return (
    <Link
      href={`/${action.type}/${action.slug}`}
      key={action.slug}
      className={`border border-primary text-[#f40] p-4 rounded-md transition duration-500 ease-in-out hover:-translate-y-1 bg-orange-100 flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start`}
    >
      <div className="flex items-center gap-2 md:min-w-[200px]">
        <Icons.calendar className="w-6 h-6 text-textPrimary" />
        <time className="text-textPrimary xl:text-lg 2xl:text-xl">
          {getFormattedDateToString(action.date)}
        </time>
      </div>
      <p className="font-bold text-textPrimary xl:text-lg 2xl:text-xl text-center md:text-left">
        {action.title}
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4"></div>
    </Link>
  );
}
