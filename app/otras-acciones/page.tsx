import TerroristActionListItem from "@/components/terrorist-action-list-item";
import { api } from "@/db/data";
import Link from "next/link";
import { Metadata } from "next/types";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Otras Acciones",
};

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
    <section className="container mx-auto py-4">
      <h1 className="text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight uppercase text-orange-700">
        otras acciones
      </h1>

      <p className="text-center font-bold text-xl text-black">
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
