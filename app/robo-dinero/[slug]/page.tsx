import TableOfContet from "@/components/common/table-of-content";
import NewspapersNotices from "@/components/newspapers-notices";
import ActionVindicated from "@/components/action-vindicated";
import { api } from "@/db/data";
import { Metadata } from "next/types";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const action = await api.getActionBySlug(slug);
  return {
    title: action.title,
  };
}

export async function generateStaticParams() {
  const actions = await api.getAllMoneyTheft();

  return actions.map((action) => ({ slug: action.slug }));
}

import { Newsreader } from "next/font/google";
const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
    new Date(date),
  );
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("es-UY", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    currencyDisplay: "code",
  }).format(amount);
}

export default async function page({ params }: Props) {
  const action = await api.getActionBySlug(params.slug);
  const formattedDate = getFormattedDateToString(action.date);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-12 border-b-4 border-foreground pb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-primary text-white text-[10px] lg:text-[12px] px-2 lg:px-4 py-0.5 lg:py-1 font-black uppercase tracking-widest">
            ROBO DE DINERO / Uruguay
          </span>
          {/* <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            ROBO DE DINERO / Uruguay
          </span> */}
        </div>
        <h1
          className={`${newsreader.className} text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6`}
        >
          {action.title}
        </h1>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest italic">
              Fecha del Suceso: {formattedDate}
            </span>
            {action.moneyTheft?.usd && (
              <span className="text-sm font-black text-primary mt-1">
                Monto Expropiado: {formatCurrency(action.moneyTheft.usd)}
              </span>
            )}
          </div>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Hermoteca Digital
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-16">
        {/* Evidencias de Prensa */}
        {action.newsPapers && (
          <section id="notices" className="scroll-mt-20">
            <NewspapersNotices notices={action.newsPapers} />
          </section>
        )}

        {/* Imágenes y Reivindicaciones */}
        <div className="grid grid-cols-1 gap-16">
          {action.vindicatedActions && (
            <ActionVindicated actionVidicated={action.vindicatedActions} />
          )}
        </div>
      </div>

      <div className="mt-20 pt-12 border-t-2 border-foreground flex justify-between items-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
          Archivo General <br /> del Pasado Reciente
        </div>
        <a
          href="#"
          className="text-xs font-black uppercase tracking-widest hover:text-primary transition-colors"
        >
          Volver Arriba ↑
        </a>
      </div>
    </main>
  );
}
