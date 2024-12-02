import TerroristActionListItem from "@/components/terrorist-action-list-item";
import { api } from "@/db/data";
import Link from "next/link";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const actions = await api.getAllOtherAcctions();

  const actionsDates = actions.map((date) => date.date);

  const initDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(actionsDates[0]);

  const endDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(actionsDates[actionsDates.length - 1]);

  return (
    <section className="container mx-auto py-8">
      <h1 className="utext-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter uppercase text-orange-900 text-center">
        otras acciones
      </h1>

      <p className="text-center font-bold text-xl text-orange-500">
        entre el <time dateTime={initDate}>{initDate}</time> y el{" "}
        <time dateTime={endDate}>{endDate}</time>{" "}
      </p>

      <ul className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-6">
        {actions.map((action) => (
          <TerroristActionListItem action={action} key={action.slug} />
        ))}
      </ul>
    </section>
  );
}
