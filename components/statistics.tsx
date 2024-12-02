import { ChartPie } from "lucide-react";
import React from "react";
import { Icons } from "./icons";
import { api as API } from "@/db/data";

type Props = {};

function calculatePercentage(total: number, cantidad: number) {
  const porcentaje = (cantidad / total) * 100;
  return Math.round(porcentaje); // Redondear al entero más cercano
}

export default async function Satistics({}: Props) {
  const actions = await API.countTotalTerroristActions();
  const murders = await API.countAllMurders();
  const kidnappings = await API.countAllKidnappings();
  const attcks = await API.countAtacks();
  const explosiveWeaponsTheft = await API.countExplosiveWeaponsTheft();
  const moneyThef = await API.countMoneyThef();
  const otherAcctions = await API.countAllOtherAcctions();

  // console.log(calculatePercentage())

  return (
    <div className="my-8">
      <div className="flex items-center gap-2">
        <ChartPie className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter uppercase">
          Estadísticas
        </h2>
      </div>

      <p className="text-lg py-2 text-orange-500">
        RECOPILACIÓN DE ALREDEDOR DE {actions} ACCIONES TERRORISTAS DESDE 1963 A
        1976.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center my-8">
        <div className="flex items-center py-3 w-full">
          <span className="w-12 h-12 shrink-0 mr-4 rounded-full bg-orange-500 flex items-center justify-center">
            <Icons.shot className="w-8 h-8 text-orange-50" />
          </span>
          <div className="space-y-3 flex-1">
            <div className="flex flex-col items-start gap-1 md:flex-row md:justify-between">
              <h4 className="font-medium mr-autoflex items-center text-lg">
                Asesinatos
              </h4>
              <span className="px-2 py-1 rounded-lg bg-orange-50 text-orange-500 text-lg">
                {murders} / {actions}
              </span>
            </div>
            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                className="h-full bg-orange-500 w-full block rounded-full"
                style={{
                  width: `${calculatePercentage(actions, murders)}%`,
                }}
              ></span>
            </div>
          </div>
        </div>

        <div className="flex items-center py-3 w-full">
          <span className="w-12 h-12 shrink-0 mr-4 rounded-full bg-orange-500 flex items-center justify-center">
            <Icons.prisoner className="w-8 h-8 text-orange-50" />
          </span>
          <div className="space-y-3 flex-1">
            <div className="flex flex-col items-start gap-1 md:flex-row md:justify-between">
              <h4 className="font-medium mr-autoflex items-center text-lg">
                Secuestros
              </h4>
              <span className="px-2 py-1 rounded-lg bg-orange-50 text-orange-500 text-lg">
                {kidnappings} / {actions}
              </span>
            </div>
            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                className="h-full bg-orange-500 w-full block rounded-full"
                style={{
                  width: `${calculatePercentage(actions, kidnappings)}%`,
                }}
              ></span>
            </div>
          </div>
        </div>

        <div className="flex items-center py-3 w-full">
          <span className="w-12 h-12 shrink-0 mr-4 rounded-full bg-orange-500 flex items-center justify-center">
            <Icons.timeDinamite className="w-8 h-8 text-orange-50" />
          </span>
          <div className="space-y-3 flex-1">
            <div className="flex flex-col items-start gap-1 md:flex-row md:justify-between">
              <h4 className="font-medium mr-autoflex items-center text-lg">
                Atentados
              </h4>
              <span className="px-2 py-1 rounded-lg bg-orange-50 text-orange-500 text-lg">
                {attcks} / {actions}
              </span>
            </div>
            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                className="h-full bg-orange-500 w-full block rounded-full"
                style={{
                  width: `${calculatePercentage(actions, attcks)}%`,
                }}
              ></span>
            </div>
          </div>
        </div>

        <div className="flex items-center py-3 w-full">
          <span className="w-12 h-12 shrink-0 mr-4 rounded-full bg-orange-500 flex items-center justify-center">
            <Icons.heist className="w-8 h-8 text-orange-50" />
          </span>
          <div className="space-y-3 flex-1">
            <div className="flex flex-col items-start gap-1 md:flex-row md:justify-between">
              <h4 className="font-medium mr-autoflex items-center text-lg">
                Robo Dinero
              </h4>
              <span className="px-2 py-1 rounded-lg bg-orange-50 text-orange-500 text-lg">
                {moneyThef} / {actions}
              </span>
            </div>
            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                className="h-full bg-orange-500 w-full block rounded-full"
                style={{
                  width: `${calculatePercentage(actions, moneyThef)}%`,
                }}
              ></span>
            </div>
          </div>
        </div>

        <div className="flex items-center py-3 w-full">
          <span className="w-12 h-12 shrink-0 mr-4 rounded-full bg-orange-500 flex items-center justify-center">
            <Icons.gun className="w-8 h-8 text-orange-50" />
          </span>
          <div className="space-y-3 flex-1">
            <div className="flex flex-col items-start gap-1 md:flex-row md:justify-between">
              <h4 className="font-medium mr-autoflex items-center text-lg">
                Robo Armas / Explosivos
              </h4>
              <span className="px-2 py-1 rounded-lg bg-orange-50 text-orange-500 text-lg">
                {explosiveWeaponsTheft} / {actions}
              </span>
            </div>
            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                className="h-full bg-orange-500 w-full block rounded-full"
                style={{
                  width: `${calculatePercentage(
                    actions,
                    explosiveWeaponsTheft
                  )}%`,
                }}
              ></span>
            </div>
          </div>
        </div>

        <div className="flex items-center py-3 w-full">
          <span className="w-12 h-12 shrink-0 mr-4 rounded-full bg-orange-500 flex items-center justify-center">
            <Icons.punch className="w-8 h-8 text-orange-50" />
          </span>
          <div className="space-y-3 flex-1">
            <div className="flex flex-col items-start gap-1 md:flex-row md:justify-between">
              <h4 className="font-medium mr-autoflex items-center text-lg">
                Otras Acciones
              </h4>
              <span className="px-2 py-1 rounded-lg bg-orange-50 text-orange-500 text-lg">
                {otherAcctions} / {actions}
              </span>
            </div>
            <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                className="h-full bg-orange-500 w-full block rounded-full"
                style={{
                  width: `${calculatePercentage(actions, otherAcctions)}%`,
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <h3 className="font-medium text-lg">Area Liveability Score</h3>; */
}
