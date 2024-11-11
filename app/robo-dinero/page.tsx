import { Icons } from "@/components/icons";
import TerroristActionListItem from "@/components/terrorist-action-list-item";
import { Badge } from "@/components/ui/badge";
import { api, TerroristActionDefinition } from "@/db/data";
import { Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "medium" }).format(
    new Date(date)
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

export default async function page({}: Props) {
  const actions = await api.getAllMoneyTheft();
  const totalAmount = await api.getTotalAmountMoneyTheft();

  const actionsMoneyTheftDates = actions.map((date) => date.date);

  const initDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(actionsMoneyTheftDates[0]);
  const endDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(actionsMoneyTheftDates[actionsMoneyTheftDates.length - 1]);

  return (
    <section className="container mx-auto py-4">
      <h1 className="uppercase text-3xl text-center font-extrabold text-orange-950">
        robo de dinero
      </h1>

      <p className="text-center font-bold text-xl text-orange-500">
        entre el <time dateTime={initDate}>{initDate}</time> y el{" "}
        <time dateTime={endDate}>{endDate}</time>{" "}
      </p>

      <p className="text-center text-xl font-extrabold">
        {formatCurrency(totalAmount)} a valor del dólar desde 1964 a 1971
      </p>

      <ul className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-6">
        {actions.map((action) => (
          <TerroristActionListItem action={action} key={action.slug} />
        ))}
      </ul>
    </section>
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
