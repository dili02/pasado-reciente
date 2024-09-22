import { Icons } from "@/components/icons";
import TerroristActionListItem from "@/components/terrorist-action-list-item";
import { api } from "@/db/data";
import Link from "next/link";
import React from "react";

type Props = {};

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "medium" }).format(
    new Date(date)
  );
}

export default async function page({}: Props) {
  const terroristActionKidnapped = await api.getAllKidnappings();
  //   console.log(terroristActionKidnapped);

  const terroristActionKidnappedDates = terroristActionKidnapped.map(
    (date) => date.date
  );
  const initDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(terroristActionKidnappedDates[0]);
  const endDate = new Intl.DateTimeFormat("es-UY", {
    dateStyle: "medium",
  }).format(
    terroristActionKidnappedDates[terroristActionKidnappedDates.length - 1]
  );
  return (
    <section className="container mx-auto py-8">
      <h1 className="flex justify-center items-center">
        <span className="uppercase text-2xl md:text-4xl 2xl:text-5xl text-center font-extrabold text-primary relative inline-block">
          toc
          <span className="absolute -top-2 -right-12 inline-flex items-center justify-center px-[0.4rem] py-1 text-xl font-semibold leading-none text-orange-100 bg-primary rounded-full w-10 h-10">
            {terroristActionKidnapped.length}
          </span>
        </span>
      </h1>

      <p className="text-muted-foreground text-center font-bold text-xl">
        entre el <time dateTime={initDate}>{initDate}</time> y el{" "}
        <time dateTime={endDate}>{endDate}</time>{" "}
      </p>

      <div className="grid grid-cols-1 py-8 gap-6">
        {terroristActionKidnapped.map((action) => (
          <Link
            href={`/toc/${action.slug}`}
            key={action.slug}
            className={`border border-primary p-4 rounded-md transition duration-500 ease-in-out hover:-translate-y-1 bg-orange-100 flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start text-primary-foreground xl:text-lg`}
          >
            <div className="flex items-center gap-4 md:min-w-[200px]">
              <Icons.calendar className="w-5 h-5 text-primary-foreground" />
              <time className="text-secondary-foreground">
                {getFormattedDateToString(action.date)}
              </time>
            </div>
            <p className="font-bold text-center md:text-left">
              {/* <p className="font-bold text-textPrimary xl:text-lg 2xl:text-xl text-center md:text-left"> */}
              {action.title}
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4"></div>
          </Link>
          //   <TerroristActionListItem action={action} key={action.slug} />
        ))}
      </div>
    </section>
  );
}
