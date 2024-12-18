import TerroristActionListItem from "@/components/terrorist-action-list-item";
import { api } from "@/db/data";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const terrorstActionsAttacks = await api.getAllAtacks();

  const terrorstActionsAttackstDates = terrorstActionsAttacks.map(
    (date) => date.date
  );

  const initDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(terrorstActionsAttackstDates[0]);
  const endDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(
    terrorstActionsAttackstDates[terrorstActionsAttackstDates.length - 1]
  );

  return (
    <section className="container mx-auto py-8">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter uppercase text-orange-900 text-center">
        atentados
      </h1>

      <p className="text-center font-bold text-xl text-orange-500">
        entre el <time dateTime={initDate}>{initDate}</time> y el{" "}
        <time dateTime={endDate}>{endDate}</time>{" "}
      </p>

      <ul className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-6">
        {terrorstActionsAttacks.map((action) => (
          <TerroristActionListItem action={action} key={action.slug} />
        ))}
      </ul>
    </section>
  );
}
