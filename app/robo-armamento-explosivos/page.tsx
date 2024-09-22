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
    <section className="container mx-auto py-8">
      <h1 className="uppercase text-2xl md:text-4xl text-center font-extrabold text-primary-foreground">
        robo armamento y explosivos
      </h1>

      <p className="text-muted-foreground text-center font-bold text-xl">
        entre el <time dateTime={initDate}>{initDate}</time> y el{" "}
        <time dateTime={endDate}>{endDate}</time>{" "}
      </p>

      <div className="grid grid-cols-1 py-8 gap-6">
        {terrorstActionsExplosiveWeaponsTheft.map((action) => (
          <TerroristActionListItem action={action} key={action.slug} />
        ))}
      </div>
    </section>
  );
}
