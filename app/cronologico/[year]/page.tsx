import { api as API } from "@/db/data";
import Link from "next/link";
import {
  BookOpenCheck,
  Calendar,
  Image,
  Info,
  MapPin,
  MonitorPlay,
  Newspaper,
} from "lucide-react";
import { Metadata } from "next/types";
import TerroristActionListItem from "@/components/terrorist-action-list-item";

type Props = { params: { year: string } };

export const metadata: Metadata = {
  title: "Cronológico",
};

export async function generateStaticParams() {
  const actions = await API.getAllAcitions();

  const years = actions.map((action) => action.date.getFullYear());

  // const arrayFrom = Array.from(new Set(years.sort((a, b) => a - b))).toString();

  return years.map((year) => ({
    year: year.toString(),
  }));

  // return Array.from(new Set(years.sort((a, b) => a - b))).toString();
  // return Array.from(new Set(years.sort((a, b) => a - b)));
}

export default async function page({ params }: Props) {
  const actions = await API.getActionsByYear(params.year);

  function formatCurrency(amount: number) {
    return new Intl.NumberFormat("es-UY", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
      currencyDisplay: "code",
    }).format(amount);
  }

  function getFormattedDateToString(date: Date): string {
    return new Intl.DateTimeFormat("es-UY", { dateStyle: "medium" }).format(
      new Date(date),
    );
  }

  const sortedActions = actions
    .map((action) => action)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <section className="max-w-7xl mx-auto px-2 xs:px-4 py-6 xs:py-12 overflow-x-hidden">
      <header className="mb-6 xs:mb-12 border-b-4 border-foreground pb-2 xs:pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h1
          className={`text-2xl xs:text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none`}
        >
          {params.year}
        </h1>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-8">
        {actions.map((action) => (
          <TerroristActionListItem action={action} key={action.slug} />
        ))}
      </ul>
    </section>
  );
}
