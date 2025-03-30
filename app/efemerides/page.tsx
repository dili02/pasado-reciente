import Efemerides from "@/components/efemerides";
import TitlePageClient from "@/components/title-page-client";
import { api as API } from "@/db/data";
import { Metadata } from "next/types";

type Props = {};

export const metadata: Metadata = {
  title: "Efemérides",
};

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "medium" }).format(
    new Date(date)
  );
}

export default async function page({}: Props) {
  const actions = await API.getAllAcitions();

  return (
    <div className="bg-background min-h-screen container py-8">
      <TitlePageClient>EFEMÉRIDES del mes de</TitlePageClient>

      <Efemerides actions={actions} />
    </div>
  );
}
