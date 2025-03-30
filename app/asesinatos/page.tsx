import TerroristActionListItem from "@/components/terrorist-action-list-item";
import { api } from "@/db/data";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Asesinatos",
};

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
      <h1 className="text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight uppercase text-orange-700">
        asesinatos
      </h1>

      <p className="text-center font-bold text-xl text-black">
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
