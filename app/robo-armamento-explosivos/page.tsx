import TerroristActionListItem from "@/components/terrorist-action-list-item";
import { api } from "@/db/data";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const terrorstActionsExplosiveWeaponsTheft =
    await api.getAllExplosiveWeaponsTheft();

  const terrorstActionsExplosiveWeaponsTheftDates =
    terrorstActionsExplosiveWeaponsTheft.map((date) => date.date);

  const initDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(terrorstActionsExplosiveWeaponsTheftDates[0]);
  const endDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(
    terrorstActionsExplosiveWeaponsTheftDates[
      terrorstActionsExplosiveWeaponsTheftDates.length - 1
    ]
  );

  return (
    <section className="container mx-auto py-4">
      <h1 className="text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight uppercase text-orange-500">
        robo armamento y explosivos
      </h1>

      <p className="text-center font-bold text-xl text-black/50">
        entre el <time dateTime={initDate}>{initDate}</time> y el{" "}
        <time dateTime={endDate}>{endDate}</time>{" "}
      </p>

      <ul className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-6">
        {terrorstActionsExplosiveWeaponsTheft.map((action) => (
          <TerroristActionListItem action={action} key={action.slug} />
        ))}
      </ul>
    </section>
  );
}
