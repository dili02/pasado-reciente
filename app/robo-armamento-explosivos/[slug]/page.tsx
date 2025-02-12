import ActionVindicated from "@/components/action-vindicated";
import ApologyForCrimeInImages from "@/components/apology-for-crime-images";
import TableOfContet from "@/components/common/table-of-content";
import NewspapersNotices from "@/components/newspapers-notices";
import Notice from "@/components/notice";
import Testimonies from "@/components/testimonies";
import Victim from "@/components/victim-info";
import VirtualMemorial from "@/components/virtual-memorial";
import {
  api,
  ApologyForCrimeInImagesDefinition,
  Book,
  ImageDefinition,
  NewPapeImageDefinition,
  NewsPaperDefinition,
  VictimsDefinition,
  VictimsInfoDefinition,
  VideosTerroristActionDefinition,
} from "@/db/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const actions = await api.getAllExplosiveWeaponsTheft();

  return actions.map((action) => ({ slug: action.slug }));
}

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
    new Date(date)
  );
}

export default async function page({ params }: Props) {
  const action = await api.getActionBySlug(params.slug);

  return (
    <section className="px-8 w-full lg:px-4 flex flex-row 2xl:container 2xl:px-0">
      <div className="w-full lg:w-9/12 xl:w-9.5/12">
        {action.victims?.map((victim, index) => (
          <Victim key={index} victim={victim} date={action.date} />
        ))}

        {action.newsPapers && <NewspapersNotices notices={action.newsPapers} />}

        {action.apologyForCrimeInImages && (
          <ApologyForCrimeInImages
            crimeImages={action.apologyForCrimeInImages}
          />
        )}

        {action.virtualMemorial && (
          <VirtualMemorial virtualMemorial={action.virtualMemorial} />
        )}

        {action.vindicatedActions && (
          <ActionVindicated actionVidicated={action.vindicatedActions} />
        )}

        {action.videos && <Testimonies videos={action.videos} />}
      </div>

      <div className="hidden lg:flex lg:w-3/12 xl:w-2.5/12 lg:mb-0 lg:sticky lg:top-0 lg:self-start">
        <TableOfContet action={action} />
      </div>
    </section>
  );
}
