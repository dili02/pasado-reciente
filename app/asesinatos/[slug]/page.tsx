import { Icons } from "@/components/icons";
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
import ActionVindicated from "@/components/action-vindicated";
import ApologyForCrimeInImages from "@/components/apology-for-crime-images";
import Notice from "@/components/notice";
import Victim from "@/components/victim-info";
import VirtualMemorial from "@/components/virtual-memorial";
import NewspapersNotices from "@/components/newspapers-notices";
import TableOfContet from "@/components/common/table-of-content";
import Testimonies from "@/components/testimonies";

type Props = { params: { slug: string } };

// export async function generateStaticParams() {
//   const actions = await api.getAll();

//   return actions.map((action) => ({ slug: action.slug }));
// }

export async function generateStaticParams() {
  const actions = await api.getAllMurders();

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

  // flex flex-wrap justify-center gap-4 p-4
  // flex flex-col justify-center gap-x-4 md:flex-row md:flex-wrap md:justify-self-auto
  return (
    <section className="px-8 w-full lg:px-4 flex flex-row 2xl:container 2xl:px-0">
      <div className="w-full lg:w-9/12 xl:w-9.5/12 flex flex-wrap justify-center gap-4 p-4">
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

function VictimInfo({
  victim,
  date,
}: {
  victim: VictimsDefinition;
  date: Date;
}) {
  return (
    <div className="flex p-4 ml-5 md:p-10 bg-orange-400">
      <div className="w-full bg-orange-50 flex gap-2 pr-2">
        <img
          src={victim.info?.avatar?.src}
          alt={victim.info?.avatar?.alt}
          className="w-24 h-24"
        />
        <div>
          <p>{victim.info?.name}</p>
          {victim.info?.deceased && (
            <p className="">
              <time>{getFormattedDateToString(victim.info?.deceased)}</time>
            </p>
          )}

          {!victim?.info?.deceased && !victim?.info?.kidnapping && (
            <p className="">
              <time>{getFormattedDateToString(date)}</time>
            </p>
          )}

          {victim.info?.kidnapping && (
            <p className="">
              <time>
                {getFormattedDateToString(victim.info.kidnapping.init)}
              </time>
              <span className="mx-2">al</span>
              <time className="mx-2">
                {getFormattedDateToString(victim.info.kidnapping.end)}
              </time>
              <span>
                ({victim.info.kidnapping.days}{" "}
                {victim.info.kidnapping.description})
              </span>
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {victim.info?.nationality && (
              <p className="">{victim.info?.nationality}</p>
            )}

            {victim.info?.age && <p className="">{victim.info?.age} años</p>}

            {victim.info?.marital && <p className="">{victim.info?.marital}</p>}
          </div>
        </div>
      </div>
      {/* <div className="w-full flex items-center justify-center bg-transparent">
        <div className="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 bg-gradient-to-r from-purple-700 to-purple-900 rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
          <div className="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition ">
            <div className="rounded-full bg-black w-16 sm:w-18 md:w-20 overflow-auto">
              <img
                src={victim.info?.avatar?.src}
                alt={victim.info?.avatar?.alt}
                className="h-16 w-16"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 md:space-y-4">
            <label className="absolute font-bold text-gray-100 text-md text-start top-1 left-8 sm:left-10">
              Julia Simpson
            </label>
            <p className="absolute text-gray-200 text-sm mt-1 leading-relaxed left-8  sm:left-10">
              Project Manager
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
