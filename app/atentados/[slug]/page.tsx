import ActionVindicated from "@/components/action-vindicated";
import ApologyForCrimeInImages from "@/components/apology-for-crime-images";
import TableOfContet from "@/components/common/table-of-content";
import NewspapersNotices from "@/components/newspapers-notices";
import Testimonies from "@/components/testimonies";
import Victim from "@/components/victim-info";
import VirtualMemorial from "@/components/virtual-memorial";
import { api } from "@/db/data";
import { Metadata } from "next/types";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const actions = await api.getAllAtacks();

  return actions.map((action) => ({ slug: action.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const action = await api.getActionBySlug(params.slug);
  return {
    title: action.title,
    // description: "",
  };
}

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
    new Date(date)
  );
}

import { Newsreader } from "next/font/google";
const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

export default async function page({ params }: Props) {
  const action = await api.getActionBySlug(params.slug);
  const formattedDate = getFormattedDateToString(action.date);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12 border-b-4 border-foreground pb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-primary text-white text-[10px] px-2 py-0.5 font-black uppercase tracking-widest">
             Documento de Archivo
          </span>
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            ATENTADOS / Uruguay
          </span>
        </div>
        <h1 className={`${newsreader.className} text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6`}>
          {action.title}
        </h1>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs font-black uppercase tracking-widest italic">
            Fecha del Suceso: {formattedDate}
          </span>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Expediente Digital
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-16">
        {/* Sección de Víctimas/Afectados */}
        {action.victims && action.victims.length > 0 && (
          <section id="victims" className="scroll-mt-20">
            <h2 className={`${newsreader.className} text-3xl font-black uppercase border-b border-foreground mb-8 pb-2`}>
              Víctimas y Afectados
            </h2>
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
            <ApologyForCrimeInImages crimeImages={action.apologyForCrimeInImages} />
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
         <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Archivo General <br/> del Pasado Reciente
         </div>
         <a href="#" className="text-xs font-black uppercase tracking-widest hover:text-primary transition-colors">
            Volver Arriba ↑
         </a>
      </div>
    </main>
  );
}
