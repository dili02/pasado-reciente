import TerroristActionListItem from "@/components/terrorist-action-list-item";
import { api } from "@/db/data";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Atentados",
  description:
    "Ataques con bombas, y atentados contra la integridad física y la propiedad pública y privada documentados en la prensa nacional de la época. Museo de la Memoria del Pasado Reciente.",
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: "https://www.pasadoreciente.com/atentados",
    siteName: "Pasado Reciente",
    title: "Atentados - Pasado Reciente",
    description:
      "Atentados documentados en la prensa nacional de los años 60 y 70.",
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
    title: "Atentados - Pasado Reciente",
    description:
      "Atentados documentados en la prensa nacional de los años 60 y 70.",
  },
};



export default async function page({}: Props) {
  const terrorstActionsAttacks = await api.getAllAtacks();

  const terrorstActionsAttackstDates = terrorstActionsAttacks.map(
    (date) => date.date,
  );

  const initDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "long",
  }).format(terrorstActionsAttackstDates[0]);
  const endDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "long",
  }).format(
    terrorstActionsAttackstDates[terrorstActionsAttackstDates.length - 1],
  );

  return (
    <main className="max-w-7xl mx-auto px-2 xs:px-4 py-6 xs:py-12 overflow-x-hidden">
      <header className="mb-6 xs:mb-12 border-b-4 border-foreground pb-2 xs:pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        {/* <div>
           <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary text-white text-xs px-2 py-0.5 font-black uppercase tracking-widest">
              Suplemento Especial
            </span>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Uruguay / Hemeroteca
            </span>
          </div>
          <h1 className={`${newsreader.className} text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none`}>
            Atentados
          </h1>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
            Periodo de Investigación
          </p>
          <p className="text-sm font-black italic">
            {initDate} — {endDate}
          </p>
        </div> */}

        <h1
          className="font-[family-name:var(--font-newsreader)] text-2xl xs:text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none"
        >
          Atentados
        </h1>
      </header>

      <div className="mb-4 xs:mb-8 border-b border-border pb-4 xs:pb-8 flex flex-col items-end justify-end">
        <p className="text-right max-w-full xs:max-w-2xl text-xs xs:text-base md:text-lg text-muted-foreground leading-relaxed italic">
          Ataques con bombas, y atentados contra la integridad física y la
          propiedad pública y privada documentados en la prensa nacional de la
          época.
        </p>
        <p className="mt-2 flex gap-2 xs:gap-4 text-[10px] xs:text-xs md:text-sm font-black uppercase tracking-widest text-muted-foreground">
          Periodo: {initDate} — {endDate}
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-8">
        {terrorstActionsAttacks.map((action) => (
          <TerroristActionListItem action={action} key={action.slug} />
        ))}
      </ul>
    </main>
  );
}
