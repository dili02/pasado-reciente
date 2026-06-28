import NewspapersNotices from "@/components/newspapers-notices";
import ActionVindicated from "@/components/action-vindicated";
import JsonLdArticle from "@/components/json-ld-article";
import { api } from "@/db/data";
import { Metadata } from "next/types";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
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
      url: `https://www.pasadoreciente.com/robo-dinero/${slug}`,
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
      canonical: `https://www.pasadoreciente.com/robo-dinero/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const actions = await api.getAllMoneyTheft();

  return actions.map((action) => ({ slug: action.slug }));
}



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
    <>
      <JsonLdArticle
        title={action.title}
        description={`${action.type} ocurrido el ${formattedDate}. Museo de la Memoria del Pasado Reciente - Hemeroteca digital con noticias escaneadas de prensa de los años 60 y 70.`}
        date={action.date}
        url={`https://www.pasadoreciente.com/robo-dinero/${params.slug}`}
        type={action.type}
      />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12 border-b-4 border-foreground pb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary text-white text-xs lg:text-[12px] px-2 lg:px-4 py-0.5 lg:py-1 font-black uppercase tracking-widest">
              ROBO DE DINERO / Uruguay
            </span>
            {/* <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            ROBO DE DINERO / Uruguay
          </span> */}
          </div>
          <h1
            className="font-[family-name:var(--font-newsreader)] text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6"
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
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Archivo General <br /> del Pasado Reciente
          </div>
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
