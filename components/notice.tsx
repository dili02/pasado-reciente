import { NewsPaperDefinition } from "@/db/data";
import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

type Props = {
  notices: NewsPaperDefinition[];
};

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
    new Date(date)
  );
}

export default function Notice({ notices }: Props) {
  return (
    <div className="py-8">
      <h3 className="uppercase text-xl md:text-4xl 2xl:text-4xl text-center font-extrabold">
        noticias publicadas por diarios de la época
      </h3>

      {notices?.map((notice) => (
        <div key={notice.name} className="py-6">
          <p className="text-center text-xl md:text-3xl font-bold pt-4 text-textPrimary">
            {notice.name}
          </p>

          {notice.date && (
            <p className="text-center text-lg md:text-2xl font-bold text-textPrimary">
              <time>{getFormattedDateToString(notice.date)}</time>
            </p>
          )}

          {notice.dateInit && (
            <p className="text-center text-lg md:text-2xl font-bold text-textPrimary">
              <time>{getFormattedDateToString(notice.dateInit)}</time> al{" "}
              <time>{getFormattedDateToString(notice.dateEnd!)}</time>
            </p>
          )}

          {notice.title && (
            <h4 className="text-center text-base md:text-xl font-bold text-textPrimary">
              TÍTULO: {notice.title}
            </h4>
          )}

          {notice.description && (
            <p className="text-base md:text-xl text-textSecondary">
              {notice.description}
            </p>
          )}

          {notice.subtitle && (
            <h4 className="text-center text-base md:text-xl font-bold text-textPrimary">
              SUB TÍTULO: {notice.subtitle}
            </h4>
          )}

          {notice.subDescription && (
            <p className="text-base md:text-xl text-textSecondary">
              {notice.subDescription}
            </p>
          )}

          {notice.title1 && (
            <h4 className="text-center text-base md:text-xl font-bold text-textPrimary">
              TÍTULO: {notice.title1}
            </h4>
          )}

          {notice.description1 && (
            <p className="text-base md:text-xl text-textSecondary">
              {notice.description1}
            </p>
          )}

          {notice.subtitle1 && (
            <h4 className="text-center text-base md:text-xl font-bold text-textPrimary">
              SUB TÍTULO: {notice.subtitle1}
            </h4>
          )}

          {notice.subDescription1 && (
            <p className="text-base md:text-xl text-textSecondary">
              {notice.subDescription1}
            </p>
          )}

          {notice.title2 && (
            <h4 className="text-center text-base md:text-xl font-bold text-textPrimary">
              TÍTULO: {notice.title2}
            </h4>
          )}

          {notice.description2 && (
            <p className="text-base md:text-xl text-textSecondary">
              {notice.description2}
            </p>
          )}

          {notice.title3 && (
            <h4 className="text-center text-base md:text-xl font-bold text-textPrimary">
              TÍTULO: {notice.title3}
            </h4>
          )}

          {notice.description3 && (
            <p className="text-base md:text-xl text-textSecondary">
              {notice.description3}
            </p>
          )}

          {notice.title4 && (
            <h4 className="text-center text-base md:text-xl font-bold text-textPrimary">
              TÍTULO: {notice.title4}
            </h4>
          )}

          {notice.description4 && (
            <p className="text-base md:text-xl text-textSecondary">
              {notice.description4}
            </p>
          )}

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between py-6">
            {notice.images?.map((image) => (
              <Link
                href={image.src}
                target="_blank"
                className="flex items-center gap-2 font-bold text-[#007664] py-2"
                key={image.src}
              >
                <p className=" text-xs md:text-lg lg:text-2xl uppercase underline">
                  IR A LA {image.type}
                </p>
                <Icons.newspaper className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                <span></span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
