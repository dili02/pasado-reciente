import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { api } from "@/db/api";
import Link from "next/link";
import React from "react";

type Props = {};

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "medium" }).format(
    new Date(date)
  );
}

export default async function page({}: Props) {
  const month = new Intl.DateTimeFormat("es-ES", { month: "long" });
  // console.log(month.format(new Date()));

  const actions = await api.getMemorial();
  console.log(actions);

  const terroristActionDates = actions
    .map((date) => date.date)
    .sort((a, b) => a.getTime() - b.getTime());
  const initDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "long",
  }).format(terroristActionDates[0]);
  const endDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "long",
  }).format(terroristActionDates[terroristActionDates.length - 1]);

  return (
    <div className="bg-background min-h-screen container py-8">
      <h1 className="text-4xl font-medium tracking-wide uppercase md:text-6xl text-center text-[#f60]">
        memorial del mes de{" "}
        <time dateTime={month.format(new Date())} className="uppercase">
          {month.format(new Date())}
        </time>
      </h1>

      <h3 className="text-[#f60]/40 text-center font-bold text-2xl md:text-3xl">
        Acciones terroristas llevadas a cabo por los movimientos subversivos
        durante el período <time>{initDate}</time> - <time>{endDate}</time>.
      </h3>

      <div className="relative min-h-screen flex flex-col overflow-hidden antialiased">
        {/* w-full max-w-6xl mx-auto px-4 md:px-6 bg-black */}
        <div className="w-full mx-auto px-4 md:px-6">
          <div className="flex flex-col justify-center divide-y divide-black [&>*]:py-16">
            {/* w-full max-w-5xl mx-auto bg-black */}
            <div className="w-full mx-auto flex justify-center items-center">
              {/* <!-- Vertical Timeline #3 --> */}
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent mt-4">
                {/* <!-- Item #1 --> */}
                {actions.map((action) => (
                  <div className="relative">
                    <div className="md:flex items-center md:space-x-4 mb-3">
                      <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                        {/* <!-- Icon --> */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f60] shadow md:order-1">
                          {/* <Icons.gun /> */}
                          {action.type === "asesinato" && (
                            <Icons.shot
                              width={25}
                              height={25}
                              className="text-red-900"
                            />
                          )}
                          {/* <svg
                            // className="fill-emerald-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            className="fill-[#f60]"
                          >
                            <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                          </svg> */}
                        </div>

                        {/* <!-- Date --> */}
                        <time className="text-sm font-medium md:w-28 text-primary">
                          {getFormattedDateToString(action.date)}
                        </time>
                      </div>

                      {/* <!-- Title --> */}
                      <h2 className="font-bold ml-14 text-primary">
                        <Link href={`/asesinatos/${action.slug}`}>
                          {action.type.toUpperCase()} {action.title}
                        </Link>
                      </h2>
                    </div>

                    {/* <!-- Card --> */}
                    {/* <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                      Various versions have evolved over the years, sometimes by
                      accident, sometimes on purpose injected humour and the
                      like.
                    </div> */}

                    {/* <!-- Link --> */}
                    {/* <div className="flex">
                      <Button asChild className="justify-end" variant="link">
                        <Link href="/login">Leer más</Link>
                      </Button>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
