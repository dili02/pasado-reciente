import ActionVindicated from "@/components/action-vindicated";
import Notice from "@/components/notice";
import Victim from "@/components/victim-info";
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
  const actions = await api.getAllKidnappings();

  return actions.map((action) => ({ slug: action.slug }));
}

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
    new Date(date)
  );
}

export default async function page({ params }: Props) {
  const action = await api.getActionBySlug(params.slug);
  // console.log("ACTION", action);

  // const victimsTotal = action.victims?.length ?? 0;
  // const victims = action.victims?.map((victim) => victim);
  // console.log("VICTIMS", victims);
  //   console.log(action.vindicated?.description.split("\n")[0]);
  //   const actionVindicatedDescriptionSplited =
  //     action.vindicated?.description.split("\n");
  //   console.log(actionVindicatedDescriptionSplited);
  // console.log(action.videos);

  return (
    <section className="container mx-auto text-textPrimary">
      {action.victims?.map((victim, index) => (
        <Victim key={index} victim={victim} date={action.date} />
      ))}

      {action.fact && (
        <h2 className="text-center uppercase text-2xl md:text-4xl 2xl:text-5xl font-bold text-[#f40]">
          {action.fact}
        </h2>
      )}

      {action.newsPapers && <Notice notices={action.newsPapers} />}

      {/* {action.apologyForCrimeInImages && (
          <ApologyForCrimeInImages crimeImages={action.apologyForCrimeInImages} />
        )} */}

      {/* {action.virtualMemorial && (
          <VirtualMemorial virtualMemorial={action.virtualMemorial} />
        )} */}

      {action.vindicatedActions && (
        <ActionVindicated actionVidicated={action.vindicatedActions} />
      )}

      {/* {action.videos && <Testimonials videos={action.videos} />} */}
    </section>
  );
}
