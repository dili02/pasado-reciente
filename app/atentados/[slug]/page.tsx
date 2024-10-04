import ActionVindicated from "@/components/action-vindicated";
import ApologyForCrimeInImages from "@/components/apology-for-crime-images";
import Notice from "@/components/notice";
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
  const actions = await api.getAllAtacks();

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
    <section className="container mx-auto text-textPrimary">
      {/* {action.fact && (
        <h1 className="text-center uppercase text-2xl md:text-4xl font-extrabold text-[#f40] mt-8">
          HECHO: {action.fact}
        </h1>
      )} */}

      {action.victims?.map((victim, index) => (
        <Victim key={index} victim={victim} date={action.date} />
      ))}

      {action.newsPapers && <Notice notices={action.newsPapers} />}

      {action.apologyForCrimeInImages && (
        <ApologyForCrimeInImages crimeImages={action.apologyForCrimeInImages} />
      )}

      {action.virtualMemorial && (
        <VirtualMemorial virtualMemorial={action.virtualMemorial} />
      )}

      {action.vindicatedActions && (
        <ActionVindicated actionVidicated={action.vindicatedActions} />
      )}

      {/* {action.videos && <Testimonials videos={action.videos} />} */}
    </section>
  );
}

// type NewsPapersProps = {
//   notices: NewPapersNoticesProps[];
// };

// type NewPapersNoticesProps = {
//   name?: string;
//   date?: Date;
//   title: string;
//   description?: string;
// };
// function NewPapers({ notices }: NewsPapersProps) {
//   console.log(notices);
//   return (
//     <div className="py-8 text-primary-foreground 2xl:text-lg">
//       <h3 className="uppercase text-xl md:text-2xl 2xl:text-4xl text-center font-extrabold">
//         noticias publicadas por diarios de la época
//       </h3>
//     </div>
//   );
// }
