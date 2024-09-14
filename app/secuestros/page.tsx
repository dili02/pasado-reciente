import { Icons } from "@/components/icons";
import TerroristActionListItem from "@/components/terrorist-action-list-item";
import { api } from "@/db/data";
import Link from "next/link";
import React from "react";

type Props = {};

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "medium" }).format(
    new Date(date)
  );
}

export default async function page({}: Props) {
  const terroristActionKidnapped = await api.getAllKidnappings();
  //   console.log(terroristActionKidnapped);

  const terroristActionKidnappedDates = terroristActionKidnapped.map(
    (date) => date.date
  );
  const initDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(terroristActionKidnappedDates[0]);
  const endDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(
    terroristActionKidnappedDates[terroristActionKidnappedDates.length - 1]
  );
  return (
    <section className="container mx-auto py-8">
      <h1 className="flex justify-center items-center">
        <span className="uppercase text-2xl md:text-4xl 2xl:text-5xl text-center font-extrabold text-primary relative inline-block">
          secuestros
          <span className="absolute -top-2 -right-12 inline-flex items-center justify-center px-[0.4rem] py-1 text-xl font-semibold leading-none text-orange-100 bg-primary rounded-full w-10 h-10">
            {terroristActionKidnapped.length}
          </span>
        </span>
      </h1>

      <p className="text-muted-foreground text-center font-bold text-xl">
        entre el <time dateTime={initDate}>{initDate}</time> y el{" "}
        <time dateTime={endDate}>{endDate}</time>{" "}
      </p>

      <div className="grid grid-cols-1 py-8 gap-6">
        {terroristActionKidnapped.map((action) => (
          <TerroristActionListItem action={action} key={action.slug} />
        ))}
      </div>
    </section>
  );
}
