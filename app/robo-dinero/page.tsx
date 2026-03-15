import TerroristActionListItem from "@/components/terrorist-action-list-item";
import { api, TerroristActionDefinition } from "@/db/data";
import { Metadata } from "next/types";

type Props = {};

export const metadata: Metadata = {
  title: "Robo Dinero",
};

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "medium" }).format(
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

import { Newsreader } from "next/font/google";
const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

export default async function page({}: Props) {
  const actions = await api.getAllMoneyTheft();
  const totalAmount = await api.getTotalAmountMoneyTheft();

  const actionsMoneyTheftDates = actions.map((date) => date.date);

  const initDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "long",
  }).format(actionsMoneyTheftDates[0]);
  const endDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "long",
  }).format(actionsMoneyTheftDates[actionsMoneyTheftDates.length - 1]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-12 border-b-4 border-foreground pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          {/* <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary text-white text-[10px] px-2 py-0.5 font-black uppercase tracking-widest">
              Suplemento Especial
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Uruguay / Hemeroteca
            </span>
          </div> */}
          <h1
            className={`${newsreader.className} text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none`}
          >
            Robo de Dinero
          </h1>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
            Monto Total Documentado
          </p>
          <p className="text-2xl font-black text-primary italic">
            {formatCurrency(totalAmount)}
          </p>
        </div>
      </header>

      <div className="mb-8 border-b border-border pb-8 flex flex-col items-end justify-end">
        <p className="text-right max-w-3xl text-lg text-muted-foreground leading-relaxed italic">
          Asaltos a bancos y empresas privadas documentados en la prensa
          nacional de la época.
        </p>
        <p className="mt-2 flex gap-4 text-[10px] lg:text-[12px] font-black uppercase tracking-widest text-muted-foreground">
          Periodo: {initDate} — {endDate}
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {actions.map((action) => (
          <TerroristActionListItem action={action} key={action.slug} />
        ))}
      </ul>
    </main>
  );
}

// type MoneyTheftTerroristActionProps = {
//   action: TerroristActionDefinition;
// };

// function MoneyTheftTerroristAction({ action }: MoneyTheftTerroristActionProps) {
//   return (
//     <li
//       key={action.slug}
//       className="rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition ease-in-out duration-500 bg-orange-50"
//     >
//       <Link href={`/${action.type}/${action.slug}`} className="block p-4">
//         <div className="flex items-center justify-between mb-2">
//           <div className="flex items-center gap-2 text-orange-500">
//             <Calendar className="w-4 h-4" />
//             <time className="text-sm">
//               {getFormattedDateToString(action.date)}
//             </time>
//           </div>

//           {action.moneyTheft?.usd && (
//             <Badge className="text-xs text-orange-100">
//               {formatCurrency(action.moneyTheft?.usd)}
//             </Badge>
//           )}
//         </div>

//         <h2 className="text-base font-semibold line-clamp-2">{action.title}</h2>

//         {/* <div className="text-xs text-gray-500 flex gap-2">
//           {action.newsPapers && <span>Noticias |</span>}
//           {action.vindicatedActions && <span>Acciones reinvidicadas |</span>}
//         </div> */}
//       </Link>
//     </li>
//   );
// }

/*







    <Link
      href={`/${action.type}/${action.slug}`}
      key={action.slug}
      className="group border border-primary p-4 rounded-lg bg-orange-100 flex flex-col md:flex-row items-center justify-between gap-4 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <div className="flex items-center gap-2">
        <Icons.calendar className="w-6 h-6 text-primary-foreground group-hover:text-secondary-foreground transition-colors duration-300" />
        <time className="text-sm text-secondary-foreground group-hover:text-secondary transition-colors duration-300">
          {getFormattedDateToString(action.date)}
        </time>
      </div>

      <span className="bg-white text-primary font-semibold px-3 py-1 rounded-full shadow-md text-sm md:text-base">
        U$D {action.moneyTheft?.usd}
      </span>

      <p className="font-bold text-primary-foreground text-center md:text-left text-lg md:text-xl">
        {action.title}
      </p>
    </Link>
*/
