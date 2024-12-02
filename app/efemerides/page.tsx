import Efemerides from "@/components/efemerides";
import { Icons } from "@/components/icons";
import TitlePageClient from "@/components/title-page-client";
import { Button } from "@/components/ui/button";
import { api as API } from "@/db/data";
import Link from "next/link";
import React from "react";

type Props = {};

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
