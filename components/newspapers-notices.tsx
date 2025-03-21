import { NewsPaperDefinition } from "@/db/data";
import Link from "next/link";
import React from "react";
import { Icons } from "./icons";
import { Newspaper } from "lucide-react";
import SectionTitle from "./section-title";

type Props = {};

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
    new Date(date)
  );
}

export default function NewspapersNotices({
  notices,
}: {
  notices: NewsPaperDefinition[];
}) {
  return (
    <div className="py-8">
      {/* text-3xl */}
      {/* <h3
        className="uppercase text-xl md:text-2xl text-center font-extrabold text-orange-950 scroll-mt-6 flex items-center justify-center gap-2"
        id="notices"
      >
        <Newspaper className="hidden sm:block sm:w-5 sm:h-5 md:w-7 md:h-7 w-8 h-8" />
        noticias publicadas por diarios de la época
      </h3> */}

      <SectionTitle id="notices">
        <Newspaper className="hidden lg:block w-7 h-7 2xl:w-8 2xl:h-8" />
        noticias publicadas por diarios de la época
      </SectionTitle>

      {notices?.map((notice, index) => (
        <div key={index} className="py-6">
          <p className="text-center text-lg font-bold">{notice.name}</p>

          {notice.date && (
            <p className="text-center text-lg font-bold">
              <time>{getFormattedDateToString(notice.date)}</time>
            </p>
          )}

          {notice.dateInit && (
            <p className="text-center text-lg font-bold">
              <time>{getFormattedDateToString(notice.dateInit)}</time> al{" "}
              <time>{getFormattedDateToString(notice.dateEnd!)}</time>
            </p>
          )}

          {notice.content &&
            notice.content.map((content, index) => (
              <div key={index}>
                <h4 className="text-center font-bold text-lg">
                  TÍTULO: {content.title}
                </h4>

                <p className="">{content.description}</p>

                <h4 className="text-center font-bold text-lg">
                  SUB TÍTULO: {content.subtitle}
                </h4>

                <p className="">{content.subdescription}</p>
              </div>
            ))}

          {notice.body && (
            <div>
              <h4 className="text-center font-bold">
                TÍTULO: {notice.body.title}
              </h4>

              {notice.body.titledescription && (
                <p className="">{notice.body.titledescription}</p>
              )}

              <h4 className="text-center font-bold text-lg">
                SUB TÍTULO: {notice.body.subtitle}
              </h4>

              {notice.body.subtitledescription && (
                <p className="">{notice.body.subtitledescription}</p>
              )}

              {notice.body.subtitle1 && (
                <h4 className="text-center font-bold text-lg">
                  SUB TÍTULO: {notice.body.subtitle1}
                </h4>
              )}

              {notice.body.subtitledescription1 && (
                <p className="">{notice.body.subtitledescription1}</p>
              )}

              {notice.body.subtitle2 && (
                <h4 className="text-center font-bold text-lg">
                  SUB TÍTULO: {notice.body.subtitle2}
                </h4>
              )}

              {notice.body.subtitledescription2 && (
                <p className="">{notice.body.subtitledescription2}</p>
              )}
            </div>
          )}

          {notice.title && (
            <h4 className="text-center font-bold text-lg">
              TÍTULO: {notice.title}
            </h4>
          )}

          {notice.description && <p className="">{notice.description}</p>}

          {notice.subtitle && (
            <h4 className="text-center font-bold text-lg">
              SUB TÍTULO: {notice.subtitle}
            </h4>
          )}

          {notice.subDescription && <p className="">{notice.subDescription}</p>}

          {notice.title1 && (
            <h4 className="text-center font-bold text-lg">
              TÍTULO: {notice.title1}
            </h4>
          )}

          {notice.description1 && <p className="">{notice.description1}</p>}

          {notice.subtitle1 && (
            <h4 className="text-center font-bold text-lg">
              SUB TÍTULO: {notice.subtitle1}
            </h4>
          )}

          {notice.subDescription1 && (
            <p className="">{notice.subDescription1}</p>
          )}

          {notice.title2 && (
            <h4 className="text-center font-bold text-lg">
              TÍTULO: {notice.title2}
            </h4>
          )}

          {notice.description2 && <p className="">{notice.description2}</p>}

          {notice.subtitle2 && (
            <h4 className="text-center font-bold text-lg">
              SUB TÍTULO: {notice.subtitle2}
            </h4>
          )}

          {notice.subDescription2 && (
            <p className="">{notice.subDescription2}</p>
          )}

          {notice.title3 && (
            <h4 className="text-center font-bold text-lg">
              TÍTULO: {notice.title3}
            </h4>
          )}

          {notice.description3 && <p className="">{notice.description3}</p>}

          {notice.subtitle3 && (
            <h4 className="text-center font-bold text-lg">
              SUB TÍTULO: {notice.subtitle3}
            </h4>
          )}

          {notice.subDescription3 && (
            <p className="">{notice.subDescription3}</p>
          )}

          {notice.title4 && (
            <h4 className="text-center font-bold text-lg">
              TÍTULO: {notice.title4}
            </h4>
          )}

          {notice.description4 && <p className="">{notice.description4}</p>}

          {notice.subtitle4 && (
            <h4 className="text-center font-bold text-lg">
              SUB TÍTULO: {notice.subtitle4}
            </h4>
          )}

          {notice.subDescription4 && (
            <p className="">{notice.subDescription4}</p>
          )}

          {notice.title5 && (
            <h4 className="text-center font-bold text-lg">
              TÍTULO: {notice.title5}
            </h4>
          )}

          {notice.description5 && <p className="">{notice.description5}</p>}

          {notice.title6 && (
            <h4 className="text-center font-bold text-lg">
              TÍTULO: {notice.title6}
            </h4>
          )}

          {notice.description4 && <p className="">{notice.description6}</p>}

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between py-6">
            {notice.images?.map((image) => (
              <Link
                href={image.src}
                target="_blank"
                className="flex items-center gap-2 font-bold text-black py-2 transition-transform duration-300 hover:scale-105"
                key={image.type}
              >
                <p className=" text-base uppercase underline">
                  IR A LA {image.type}
                </p>
                <Icons.newspaper className="hidden sm:block h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
