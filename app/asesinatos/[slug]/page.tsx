import { api, VictimsDefinition } from "@/db/data";
import React from "react";
import ActionVindicated from "@/components/action-vindicated";
import ApologyForCrimeInImages from "@/components/apology-for-crime-images";
import Victim from "@/components/victim-info";
import VirtualMemorial from "@/components/virtual-memorial";
import NewspapersNotices from "@/components/newspapers-notices";
import Testimonies from "@/components/testimonies";
import JsonLdArticle from "@/components/json-ld-article";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const action = await api.getActionBySlug(slug);
  const formattedDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "long",
  }).format(new Date(action.date));

  return {
    title: action.title,
    description: `${action.type} ocurrido el ${formattedDate}. Museo de la Memoria del Pasado Reciente - Hemeroteca digital con noticias escaneadas de prensa de los años 60 y 70.`,
    openGraph: {
      type: "article",
      locale: "es_UY",
      url: `https://www.pasadoreciente.com/asesinatos/${slug}`,
      siteName: "Pasado Reciente",
      title: action.title,
      description: `${action.type} ocurrido el ${formattedDate}. Museo de la Memoria del Pasado Reciente.`,
      images: [
        {
          url: "https://www.pasadoreciente.com/opengraph-image.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: action.title,
      description: `${action.type} - ${formattedDate}`,
    },
    alternates: {
      canonical: `https://www.pasadoreciente.com/asesinatos/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const actions = await api.getAllMurders();

  return actions.map((action) => ({ slug: action.slug }));
}

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
    new Date(date),
  );
}

import { Newsreader } from "next/font/google";
const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

export default async function page({ params }: Props) {
  const action = await api.getActionBySlug((await params).slug);
  const formattedDate = getFormattedDateToString(action.date);
  const slug = (await params).slug;

  return (
    <>
      <JsonLdArticle
        title={action.title}
        description={`${action.type} ocurrido el ${formattedDate}. Museo de la Memoria del Pasado Reciente - Hemeroteca digital con noticias escaneadas de prensa de los años 60 y 70.`}
        date={action.date}
        url={`https://www.pasadoreciente.com/asesinatos/${slug}`}
        type={action.type}
      />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <header className="pb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary text-white text-xs lg:text-xs px-2 lg:px-4 py-0.5 lg:py-1 font-black uppercase tracking-widest">
              {action.type} / Uruguay
            </span>
            {/* <span className="text-xs lg:text-[24px] font-bold text-muted-foreground uppercase tracking-widest">
            {action.type} / Uruguay
          </span> */}
          </div>
          <h1
            className={`${newsreader.className} text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6`}
          >
            {action.title}
          </h1>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-xs font-black uppercase tracking-widest italic">
              Fecha del Suceso: {formattedDate}
            </span>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Hermoteca Digital
            </span>
          </div>
        </header>

        <div className="flex flex-col gap-16">
          {/* Sección de Víctimas */}
          {action.victims && action.victims.length > 0 && (
            <section
              id="victims"
              className="scroll-mt-20 border-b-4 border-t-4 border-foreground"
            >
              {/* <h2
              className={`${newsreader.className} text-3xl font-black uppercase border-b border-foreground mb-8 pb-2`}
            >
              Víctimas y Sujetos del Hecho
            </h2> */}
              <div className="flex flex-col gap-8">
                {action.victims.map((victim, index) => (
                  <Victim key={index} victim={victim} date={action.date} />
                ))}
              </div>
            </section>
          )}

          {/* Evidencias de Prensa */}
          {action.newsPapers && (
            <section id="notices" className="scroll-mt-20">
              <NewspapersNotices notices={action.newsPapers} />
            </section>
          )}

          {/* Imágenes y Reivindicaciones */}
          <div className="grid grid-cols-1 gap-16">
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
        </div>

        <div className="mt-20 pt-12 border-t-2 border-foreground flex justify-between items-center">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground"></div>
          <a
            href="#main-content"
            className="text-xs font-black uppercase tracking-widest hover:text-primary transition-colors"
          >
            Volver Arriba ↑
          </a>
        </div>
      </main>
    </>
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
          loading="lazy"
          decoding="async"
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
    </div>
  );
}
