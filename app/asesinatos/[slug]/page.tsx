import { Icons } from "@/components/icons";
import { SubTitle, Title, TitleDate } from "@/components/typograpy";
// import {
//   api,
//   ApologyForCrimeInImagesDefinition,
//   Book,
//   IlustrationActionDefinition,
//   ImageDefinition,
//   NewsPaperDefinition,
//   TerrorActionsVicitmDefinition,
//   VideosTerroristActionDefinition,
// } from "@/db/api";
import {
  api,
  ApologyForCrimeInImagesDefinition,
  Book,
  ImageDefinition,
  NewPapeImageDefinition,
  NewsPaperDefinition,
  VictimsDefinition,
  VictimsInfoDefinition,
  VideosTerroristActionDefinition,
} from "@/db/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = { params: { slug: string } };

// export async function generateStaticParams() {
//   const actions = await api.getAll();

//   return actions.map((action) => ({ slug: action.slug }));
// }

export async function generateStaticParams() {
  const actions = await api.getAllMurders();

  return actions.map((action) => ({ slug: action.slug }));
}

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
    new Date(date)
  );
}

export default async function page({ params }: Props) {
  const action = await api.getActionBySlug(params.slug);
  // console.log("ACTION", action);

  // const victimsTotal = action.victims?.length ?? 0;
  // const victims = action.victims?.map((victim) => victim);
  // console.log("VICTIMS", victims);
  //   console.log(action.vindicated?.description.split("\n")[0]);
  //   const actionVindicatedDescriptionSplited =
  //     action.vindicated?.description.split("\n");
  //   console.log(actionVindicatedDescriptionSplited);
  // console.log(action.videos);

  return (
    <section className="container mx-auto text-primary">
      {action.victims?.map((victim, index) => (
        <Victim key={index} victim={victim} date={action.date} />
      ))}

      {action.newsPapers && <Notices notices={action.newsPapers} />}

      {action.apologyForCrimeInImages && (
        <ApologyForCrimeInImages crimeImages={action.apologyForCrimeInImages} />
      )}

      {action.virtualMemorial && (
        <VirtualMemorial virtualMemorial={action.virtualMemorial} />
      )}
      {action.vindicatedActions && (
        <ActionVindicated actionVidicated={action.vindicatedActions} />
      )}

      {action.videos && <Testimonials videos={action.videos} />}
    </section>
  );
}

function Victim({ victim, date }: { victim: VictimsDefinition; date: Date }) {
  // console.log("VICTIM", victim);
  return (
    <div className="py-10">
      {/* victim info */}
      {victim.info && <VictimInfo info={victim.info} date={date} />}
    </div>
  );
}

function VictimInfo({
  info,
  date,
}: {
  info: VictimsInfoDefinition;
  date: Date;
}) {
  // console.log("INFO", info);
  return (
    <div className="text-textPrimary flex flex-col md:flex-row items-center justify-between gap-4 bg-orange-200 rounded-2xl p-4">
      <img
        src={info.avatar?.src}
        alt={info.avatar?.alt}
        className="h-60 rounded-2xl row-span-1"
      />
      <div className="py-4 flex items-center flex-col h-full text-center row-span-2 w-full">
        <h1 className="uppercase text-2xl md:text-4xl 2xl:text-5xl text-center font-extrabold">
          {info.name}
        </h1>
        {/* <p className="text-center text-2xl 2xl:text-4xl font-bold">
          <time>{getFormattedDateToString(date)}</time>
        </p> */}

        {/* {!info.kidnapping && (
          <p className="text-center text-2xl 2xl:text-4xl font-bold">
            <time>{getFormattedDateToString(date)}</time>
          </p>
        )} */}

        {info.deceased ? (
          <p className="text-center text-2xl 2xl:text-4xl font-bold">
            <time>{getFormattedDateToString(info.deceased)}</time>
          </p>
        ) : (
          <p className="text-center text-2xl 2xl:text-4xl font-bold">
            <time>{getFormattedDateToString(date)}</time>
          </p>
        )}

        {info.kidnapping && (
          <p>
            <time>{getFormattedDateToString(info.kidnapping.init)}</time>
            <span>al</span>
            <time>{getFormattedDateToString(info.kidnapping.end)}</time>
            <span>{info.kidnapping.days} en cuativerio</span>
          </p>
        )}

        {info.nationality && (
          <p className="text-xl md:text-2xl flex flex-col gap-1 pt-2">
            {info.nationality}
          </p>
        )}

        <div className="text-xl md:text-2xl flex flex-col gap-1 py-2">
          {info.age && <p>{info.age} años</p>}
          <p>{info.marital}</p>
          {info.childs && (
            <div>
              <p>
                {info.childs === 1
                  ? `${info.childs} hijo`
                  : `${info.childs} hijos `}
                {info.childsDescription && (
                  <span>{info.childsDescription}</span>
                )}
              </p>
              <p className="font-bold">{info.otherDescription}</p>
            </div>
          )}
          {info.daughter && (
            <p>
              {info.daughter === 1
                ? `${info.daughter} hija`
                : `${info.daughter} hijas `}
              {info.childsDescription && (
                <span className="py-2">{info.childsDescription}</span>
              )}
            </p>
          )}
        </div>

        {/* <div className="flex items-center gap-3"> */}
        {/* <img
            src={info.avatar?.src}
            alt={info.avatar?.alt}
            className="h-60 rounded-2xl"
          /> */}
        {/* <div className="text-xl md:text-2xl">
            {info.age && <p className="">{info.age} años</p>}
            <p className="py-2">{info.marital}</p>
            {info.childs && (
              <>
                <p>
                  {info.childs === 1
                    ? `${info.childs} hijo`
                    : `${info.childs} hijos `}
                  {info.childsDescription && (
                    <span className="py-2">{info.childsDescription}</span>
                  )}
                </p>
                <p className="font-bold">{info.otherDescription}</p>
              </>
            )}
            {info.daughter && (
              <p>
                {info.daughter === 1
                  ? `${info.daughter} hija`
                  : `${info.daughter} hijas `}
                {info.childsDescription && (
                  <span className="py-2">{info.childsDescription}</span>
                )}
              </p>
            )}
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

function Notices({ notices }: { notices: NewsPaperDefinition[] }) {
  // console.log("NOTICES: ", notices);
  return (
    <div className="py-8">
      <h2 className="text-center uppercase underline text-2xl md:text-4xl 2xl:text-5xl font-bold text-[#f40]">
        noticias publicadas por diarios de la época
      </h2>

      {notices?.map((notice) => (
        <div key={notice.name} className="py-6 border-b-2 ">
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

function ApologyForCrimeInImages({
  crimeImages,
}: {
  crimeImages: ApologyForCrimeInImagesDefinition[];
}) {
  return (
    <div>
      <h2 className="text-center uppercase underline text-2xl md:text-4xl 2xl:text-5xl font-bold text-[#f40]">
        Apología del delito en imágenes
      </h2>

      <div className="py-8">
        {crimeImages.map((apology) => (
          <div key={apology.title}>
            <h3 className="font-bold text-center text-xl md:text-3xl text-textPrimary uppercase">
              {apology.title}
            </h3>

            <p className="md:text-2xl text-textSecondary">
              {apology.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6">
              {apology.images.map((image) => (
                <div key={image.src}>
                  <img src={image.src} alt={image.alt} />
                  <p className="text-base md:text-xl text-textSecondary">
                    {image.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VirtualMemorial({
  virtualMemorial,
}: {
  virtualMemorial: ImageDefinition[];
}) {
  return (
    <div className="py-8">
      {virtualMemorial.map((memorial) => (
        <img
          src={memorial.src}
          alt={memorial.alt}
          className="py-3 w-full"
          key={memorial.src}
        />
      ))}
    </div>
  );
}

function ActionVindicated({
  actionVidicated,
}: {
  actionVidicated: { books: Book[] };
}) {
  return (
    <div className="py-10">
      <h2 className="text-center uppercase underline text-2xl md:text-4xl 2xl:text-5xl font-bold text-[#f40]">
        acciones reivindicadas por los movimientos terroristas
      </h2>

      {/* {actionVidicated.description.split("\n").map((p) => (
          <p className="text-base md:text-xl py-2">{p}</p>
        ))} */}

      <p className="text-base md:text-xl py-6 text-textPrimary">
        Las acciones terroristas del llamado Pasado Reciente son reconocidas y
        reivindicadas por los autores décadas después en libros de circulación
        pública.
      </p>

      {actionVidicated.books.map((book) => (
        <div
          key={book.name}
          className="text-base md:text-xl py-2 text-textPrimary bg-orange-100"
        >
          {/* <p>{book.fragment}</p> */}
          <div
            className="text-justify pt-8 bg-orange-100"
            dangerouslySetInnerHTML={{ __html: book.fragment }}
          />
          <p className="bg-orange-100">
            {book.author}, <time>{book.year?.getFullYear()}</time>,{" "}
            <b>{book.name}</b>, {book.place}, {book.edition}, {book.pages}
          </p>
        </div>
      ))}
    </div>
  );
}

function Testimonials({
  videos,
}: {
  videos: VideosTerroristActionDefinition[];
}) {
  return (
    <div className="py-10">
      <h2 className="text-center uppercase underline text-2xl md:text-4xl 2xl:text-5xl font-bold text-[#f40]">
        testimonios
      </h2>
      <h3 className="font-bold text-center text-xl md:text-2xl py-2 md:py-3 text-[#f40]/60">
        Videos con relatos de familiares de víctimas del terrorismo
        revolucionario
      </h3>

      {videos.map((video) => (
        <div key={video.id}>
          <h3 className="uppercase text-xl font-bold text-center py-3 text-textPrimary">
            {video.title}
          </h3>
          <iframe
            // width="300"
            // height="200"
            src={video.src}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-[800px]"
          ></iframe>
        </div>
      ))}
    </div>
  );
}
