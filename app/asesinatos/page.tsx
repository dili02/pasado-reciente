import { Icons } from "@/components/icons";
import { Title, TitleDate } from "@/components/typograpy";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  const terroristActionKills = await api.getKills();
  // console.log(terroristActionKills);

  const terroristActionDates = terroristActionKills.map((date) => date.date);
  const initDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(terroristActionDates[0]);
  // console.log(initDate);
  const endDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(terroristActionDates[terroristActionDates.length - 1]);
  // console.log(endDate);

  return (
    <section className="container mx-auto bg-background">
      <h1 className="uppercase text-5xl text-primary text-center font-extrabold">
        asesinatos
        <span className="text-destructive hidden md:inline-block px-4">
          {/* rounded-full bg-primary text-secondary px-6 */}(
          {terroristActionKills.length})
        </span>
      </h1>

      <p className="text-primary-foreground text-center font-bold text-xl">
        entre el <time dateTime={initDate}>{initDate}</time> y el{" "}
        <time dateTime={endDate}>{endDate}</time>{" "}
      </p>
      {/* <p className="text-primary-foreground text-center font-bold text-md md:text-3xl"></p> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {terroristActionKills.map((action) => (
          <Link
            href={`/asesinatos/${action.slug}`}
            key={action.slug}
            className="shadow-[4px_4px] shadow-primary flex flex-col justify-start gap-2.5 p-5 rounded-[5px] border-2 border-solid border-primary h-36 bg-[#f90]"
          >
            {/* <div>
              {action.victims?.map((victim) => (
                <Avatar>
                  <AvatarImage
                    src={victim.avatar?.src}
                    alt={victim.avatar?.alt}
                  />
                  <AvatarFallback>No Image</AvatarFallback>
                </Avatar>
              ))}
            </div> */}
            <div className="flex items-center gap-2">
              <Icons.calendar className="w-6 h-6 text-primary" />
              <time className="font-medium text-primary">
                {/* md:w-28 */}
                {getFormattedDateToString(action.date)}
              </time>
              {/* <span>
              </span> */}
            </div>
            <p className="font-bold text-primary">{action.title}</p>
          </Link>
        ))}
      </div>

      {/* <h2 className="uppercase text-xl text-center font-bold py-4">
        acciones terroristas reinvidicadas por los movimientos subersivos
      </h2> */}

      {/* <div className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden antialiased"> */}
      {/* <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24"> */}
      {/* <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16"> */}
      {/* <div className="w-full max-w-3xl mx-auto"> */}
      {/* <!-- Vertical Timeline #3 --> */}
      {/* <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent mt-4"> */}
      {/* <!-- Item #1 --> */}
      {/* {terroristActionKills.map((action) => (
          <div className="relative">
            <div className="md:flex items-center md:space-x-4 mb-3">
              <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse"> */}
      {/* <!-- Icon --> */}
      {/* <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                  <Icons.gun /> */}
      {/* <svg
                    className="fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg> */}
      {/* </div> */}

      {/* <!-- Date --> */}
      {/* <time className="text-sm font-medium md:w-28">
                  {getFormattedDateToString(action.date)}
                </time>
              </div> */}

      {/* <!-- Title --> */}
      {/* <h2 className="font-bold ml-14">
                <Link href={`/asesinatos/${action.slug}`}>{action.title}</Link>
              </h2>
            </div> */}

      {/* <!-- Card --> */}
      {/* <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose injected humour and the like.
            </div> */}

      {/* <!-- Link --> */}
      {/* <div className="flex"> */}
      {/* <Button asChild className="justify-end" variant="link">
                <Link href="/login">Leer más</Link>
              </Button>
            </div> */}
      {/* </div>
        ))}
      </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </section>
  );
}
