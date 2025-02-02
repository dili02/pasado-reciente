import { Icons } from "@/components/icons";
import TerroristActionListItem from "@/components/terrorist-action-list-item";
import { Title, TitleDate } from "@/components/typograpy";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
// import { api } from "@/db/api";
import { api } from "@/db/data";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type Props = {};

// export const metadata: Metadata = {
//   title: "Asesinatos",
// };

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "medium" }).format(
    new Date(date)
  );
}

export default async function page({}: Props) {
  const terroristActionMurders = await api.getAllMurders();

  const terroristActionMurdersDates = terroristActionMurders.map(
    (date) => date.date
  );
  const initDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(terroristActionMurdersDates[0]);
  const endDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(
    terroristActionMurdersDates[terroristActionMurdersDates.length - 1]
  );

  return (
    <section className="container mx-auto py-4">
      <h1 className="text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight uppercase text-orange-500">
        asesinatos
      </h1>

      <p className="text-center font-bold text-xl text-black/50">
        entre el <time dateTime={initDate}>{initDate}</time> y el{" "}
        <time dateTime={endDate}>{endDate}</time>{" "}
      </p>

      <ul className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-6">
        {terroristActionMurders.map((action) => (
          <TerroristActionListItem action={action} key={action.slug} />
        ))}
      </ul>
    </section>
  );
}
