import { Icons } from "@/components/icons";
import { SubTitle, Title, TitleDate } from "@/components/typograpy";
import {
  api,
  ApologyForCrimeInImagesDefinition,
  Book,
  IlustrationActionDefinition,
  ImageDefinition,
  NewsPaperDefinition,
  TerrorActionsVicitmDefinition,
  VideosTerroristActionDefinition,
} from "@/db/api";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { act } from "react";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const actions = await api.getAll();

  return actions.map((action) => ({ slug: action.slug }));
}

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
    new Date(date)
  );
}

export default async function page({ params }: Props) {
  const action = await api.getActionBySlug(params.slug);
  //   console.log(action.vindicated?.description.split("\n")[0]);
  //   const actionVindicatedDescriptionSplited =
  //     action.vindicated?.description.split("\n");
  //   console.log(actionVindicatedDescriptionSplited);
  // console.log(action.videos);

  return (
    <section className="container mx-auto text-primary py-10">
      <div>
        {/* <h1 className="text-center font-extrabold tracking-wide uppercase text-2xl md:text-4xl lg:text-5xl">
          {action.title}
        </h1>
        <time className="text-lg md:text-2xl text-center text-secondary-foreground font-medium w-full flex items-center justify-center">
          {getFormattedDateToString(action.date)}
        </time> */}
        <h1 className="uppercase text-6xl text-primary text-center font-extrabold">
          {action.title}
        </h1>
        <TitleDate>
          <time>{getFormattedDateToString(action.date)}</time>
        </TitleDate>
      </div>

      {/* info */}
      {action.victims && <Info victims={action.victims} />}

      {/*  1. diarios */}
      {action.notice && <Notice notices={action.notice} />}

      {/*  2. ilustraciones */}
      {/* {action.ilustration && <Ilustration ilustration={action.ilustration} />} */}
      {action.apologyForCrimeInImages && (
        <ApologyForCrimeInImages
          apologyForCrimeInImages={action.apologyForCrimeInImages}
        />
      )}

      {/*  3. Lugar del Hecho */}
      {action.placeOfOccurrence && (
        <PlaceOfOccurrence placeOfOccurrence={action.placeOfOccurrence} />
      )}
      {action.virtualMemorial && (
        <VirtualMemorial virtualMemorial={action.virtualMemorial} />
      )}

      {/*  4. acciones reinvidicadas */}
      {action.vindicated && (
        <ActionVindicated actionVidicated={action.vindicated} />
      )}

      {/*  5. testimonios */}
      {action.videos && <Testimonials testimonal={action.videos} />}
    </section>
  );
}

type NoticeDefeinition = {
  notices: NewsPaperDefinition[];
};
// function News({ notices }: NoticeDefeinition) {
//   return (
//     <div className="py-8">
//       <h2 className="text-center uppercase underline text-2xl md:text-4xl font-bold">
//         noticias publicadas por diarios de la época
//       </h2>

//       {notices.map((notice) => (
//         <div key={notice.title} className="flex my-12 gap-6">
//           <div className="md:w-2/3">
//             <div className="pb-2">
//               <h3 className="md:text-3xl text-xl font-bold">{notice.name}</h3>

//               <div className="flex items-center justify-between">
//                 <div>
//                   {notice.date && (
//                     <p className="text-base md:text-xl text-primary-foreground">
//                       <time>{getFormattedDateToString(notice.date)}</time>
//                     </p>
//                   )}

//                   {notice.dateInit && (
//                     <p className="text-base md:text-xl text-primary-foreground">
//                       <time>{getFormattedDateToString(notice.dateInit)}</time>{" "}
//                       al{" "}
//                       <time>{getFormattedDateToString(notice.dateEnd!)}</time>
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//             {notice.title && (
//               <h4 className="text-base md:text-xl font-bold py-2">
//                 TITULO: {notice.title}
//               </h4>
//             )}

//             {notice.description && (
//               <p className="py-2 text-justify">{notice.description}</p>
//             )}

//             {notice.subtitle && (
//               <h4 className="text-base md:text-xl font-bold text-justify">
//                 SUB TITULO: {notice.subtitle}
//               </h4>
//             )}

//             {notice.subDescription && (
//               <p className="md:text-lg text-base text-justify">
//                 {notice.subDescription}
//               </p>
//             )}

//             {notice.title1 && (
//               <h4 className="text-base md:text-xl font-bold text-justify">
//                 TITULO: {notice.title1}
//               </h4>
//             )}

//             {notice.description1 && (
//               <p className="md:text-lg text-base text-justify">
//                 {notice.description1}
//               </p>
//             )}

//             {notice.subtitle1 && (
//               <h4 className="text-base md:text-xl font-bold text-justify">
//                 SUB TITULO: {notice.subtitle1}
//               </h4>
//             )}

//             {notice.subDescription1 && (
//               <p className="md:text-lg text-base text-justify">
//                 {notice.subDescription1}
//               </p>
//             )}

//             {notice.title2 && (
//               <h4 className="text-base md:text-xl font-bold text-justify">
//                 TITULO: {notice.title2}
//               </h4>
//             )}

//             {notice.description2 && (
//               <p className="md:text-lg text-base text-justify">
//                 {notice.description2}
//               </p>
//             )}

//             {notice.title3 && (
//               <h4 className="text-base md:text-xl font-bold text-justify">
//                 TITULO: {notice.title3}
//               </h4>
//             )}

//             {notice.description3 && (
//               <p className="md:text-lg text-base text-justify">
//                 {notice.description3}
//               </p>
//             )}

//             <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-2">
//               {notice.images?.map((image) => (
//                 <Link
//                   href={image.src}
//                   target="_blank"
//                   className="flex items-center gap-1 font-bold"
//                   key={image.src}
//                 >
//                   <p className="text-lg uppercase underline">
//                     IR A LA {image.type}
//                   </p>
//                   <span>
//                     <ArrowRight />
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {notice.images?.length === 1 &&
//             notice.images.map((image) => (
//               <Link
//                 href={image.src}
//                 target="_blank"
//                 className="md:w-1/3 flex flex-col items-stretch relative"
//                 key={image.src}
//               >
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-full object-cover absolute inset-0"
//                 />
//               </Link>
//             ))}

//           {notice.images?.length === 2 &&
//             notice.images.map((image) => (
//               <Link
//                 href={image.src}
//                 target="_blank"
//                 className="md:w-1/4 flex flex-col items-stretch relative"
//                 key={image.src}
//               >
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-full object-cover absolute inset-0"
//                 />
//               </Link>
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// }
// function NoticeSection({ notices }: NoticeDefeinition) {
//   return (
//     <div>
//       <h2 className="text-center uppercase underline text-2xl md:text-4xl font-bold">
//         noticias publicadas por diarios de la época
//       </h2>

//       {notices.map((notice) => (
//         <div className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl my-8 text-justify">
//           {/* grid grid-cols-2 place-items-start gap-4 h-96 p-2 */}
//           <div className="w-full md:w-1/3">
//             {/* {notice.images?.map((image) => (
//                 <div className="py-2" key={image.src}>
//                   <p className="text-sm uppercase underline text-center pb-2">
//                     {image.type}
//                   </p>
//                   <Link href={image.src} target="_blank">
//                     <img
//                       src={image.src}
//                       alt={image.alt}
//                       className="rounded-xl"
//                     />
//                   </Link>
//                 </div>
//               ))} */}

//             {notice.images &&
//               (notice.images.length === 1 ? (
//                 <div className="grid grid-cols-1 place-items-start">
//                   {notice.images?.map((image) => (
//                     <div className="py-2 overflow-y-hidden" key={image.src}>
//                       <p className="text-md uppercase underline text-center pb-2">
//                         {image.type}
//                       </p>
//                       <Link href={image.src} target="_blank">
//                         <img
//                           src={image.src}
//                           alt={image.alt}
//                           className="rounded-xl"
//                         />
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                   {notice.images?.map((image) => (
//                     <div
//                       className="py-2 h-96 overflow-y-hidden"
//                       key={image.src}
//                     >
//                       <p className="text-md uppercase underline text-center pb-2">
//                         {image.type}
//                       </p>
//                       <Link href={image.src} target="_blank">
//                         <img
//                           src={image.src}
//                           alt={image.alt}
//                           className="rounded-xl"
//                         />
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               ))}

//             {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//               {notice.imgSrc.map((src: string) => (
//                 <Link href={src} target="_blank">
//                   <img src={src} className="w-full h-[800px]" />
//                 </Link>
//               ))}
//             </div> */}
//           </div>

//           <div className="w-full md:w-2/3 flex flex-col space-y-2 p-3">
//             <h3 className="md:text-3xl text-xl font-bold">{notice.name}</h3>

//             {notice.date && (
//               <p className="text-base md:text-xl text-primary-foreground">
//                 <time>{getFormattedDateToString(notice.date)}</time>
//               </p>
//             )}

//             {notice.dateInit && (
//               <p className="text-base md:text-xl text-primary-foreground">
//                 <time>{getFormattedDateToString(notice.dateInit)}</time> al{" "}
//                 <time>{getFormattedDateToString(notice.dateEnd!)}</time>
//               </p>
//             )}

//             {notice.title && (
//               <h4 className="text-base md:text-xl font-bold">
//                 TITULO: {notice.title}
//               </h4>
//             )}

//             {notice.description && (
//               <p className="md:text-lg text-base">{notice.description}</p>
//             )}

//             {notice.subtitle && (
//               <h4 className="text-base md:text-xl font-bold">
//                 SUB TITULO: {notice.subtitle}
//               </h4>
//             )}

//             {notice.subDescription && (
//               <p className="md:text-lg text-base">{notice.subDescription}</p>
//             )}

//             {notice.title1 && (
//               <h4 className="text-base md:text-xl font-bold">
//                 TITULO: {notice.title1}
//               </h4>
//             )}

//             {notice.description1 && (
//               <p className="md:text-lg text-base">{notice.description1}</p>
//             )}

//             {notice.subtitle1 && (
//               <h4 className="text-base md:text-xl font-bold">
//                 SUB TITULO: {notice.subtitle1}
//               </h4>
//             )}

//             {notice.subDescription1 && (
//               <p className="md:text-lg text-base">{notice.subDescription1}</p>
//             )}

//             {notice.title2 && (
//               <h4 className="text-base md:text-xl font-bold">
//                 TITULO: {notice.title2}
//               </h4>
//             )}

//             {notice.description2 && (
//               <p className="md:text-lg text-base">{notice.description2}</p>
//             )}

//             {notice.title3 && (
//               <h4 className="text-base md:text-xl font-bold">
//                 TITULO: {notice.title3}
//               </h4>
//             )}

//             {notice.description3 && (
//               <p className="md:text-lg text-base">{notice.description3}</p>
//             )}

//             {/* <p className="md:text-lg text-gray-500 text-base">
//                 The best kept secret of The Bahamas is the country’s sheer size
//                 and diversity. With 16 major islands, The Bahamas is an
//                 unmatched destination
//               </p> */}
//           </div>
//           {/* <p>{notice.title}</p> */}
//         </div>
//       ))}
//     </div>
//   );
// }
function Notice({ notices }: NoticeDefeinition) {
  return (
    <div className="py-8">
      <h2 className="text-center uppercase underline text-2xl md:text-4xl font-extrabold">
        noticias publicadas por diarios de la época
      </h2>

      <div className="">
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
                TITULO: {notice.title}
              </h4>
            )}

            {notice.description && (
              <p className="text-base md:text-xl text-textSecondary">
                {notice.description}
              </p>
            )}

            {notice.subtitle && (
              <h4 className="text-center text-base md:text-xl font-bold text-textPrimary">
                SUB TITULO: {notice.subtitle}
              </h4>
            )}

            {notice.subDescription && (
              <p className="text-base md:text-xl text-textSecondary">
                {notice.subDescription}
              </p>
            )}

            {notice.title1 && (
              <h4 className="text-center text-base md:text-xl font-bold text-textPrimary">
                TITULO: {notice.title1}
              </h4>
            )}

            {notice.description1 && (
              <p className="text-base md:text-xl text-textSecondary">
                {notice.description1}
              </p>
            )}

            {notice.subtitle1 && (
              <h4 className="text-center text-base md:text-xl font-bold text-textPrimary">
                SUB TITULO: {notice.subtitle1}
              </h4>
            )}

            {notice.subDescription1 && (
              <p className="text-base md:text-xl text-textSecondary">
                {notice.subDescription1}
              </p>
            )}

            {notice.title2 && (
              <h4 className="text-center text-base md:text-xl font-bold text-textPrimary">
                TITULO: {notice.title2}
              </h4>
            )}

            {notice.description2 && (
              <p className="text-base md:text-xl text-textSecondary">
                {notice.description2}
              </p>
            )}

            {notice.title3 && (
              <h4 className="text-center text-base md:text-xl font-bold text-textPrimary">
                TITULO: {notice.title3}
              </h4>
            )}

            {notice.description3 && (
              <p className="text-base md:text-xl text-textSecondary">
                {notice.description3}
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

            {/* {notice.images &&
              (notice.images.length === 1 ? (
                <div className="flex justify-center items-center">
                  {notice.images?.map((image) => (
                    <div className="py-2" key={image.src}>
                      <p className="text-base md:text-xl uppercase underline text-center">
                        {image.type}
                      </p>
                      <Link href={image.src} target="_blank">
                        <img
                          src={image.src}
                          alt={image.alt}
                          // h-[800px] object-fill
                          className="w-full"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {notice.images?.map((image) => (
                    <div className="py-2">
                      <p className="text-base md:text-xl uppercase underline text-center">
                        {image.type}
                      </p>
                      <Link href={image.src} target="_blank">
                        <img
                          src={image.src}
                          alt={image.alt}
                          // h-[800px] object-fill
                          className="w-full"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              ))} */}

            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {notice.imgSrc.map((src: string) => (
                <Link href={src} target="_blank">
                  <img src={src} className="w-full h-[800px]" />
                </Link>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

// TODO: chek this is used
// type IlustrationeDefeinition = {
//   ilustration: IlustrationActionDefinition;
// };
// function Ilustration({ ilustration }: IlustrationeDefeinition) {
//   return (
//     <div>
//       {/* Apología del delito en imágenes: <time>1964</time> - <time>1972</time> */}
//       <h2 className="text-center uppercase underline text-2xl md:text-4xl font-bold text-primary">
//         Apología del delito en imágenes
//       </h2>

//       <h3 className="font-bold text-center text-xl md:text-3xl text-textPrimary mb-4">
//         {ilustration.title}
//       </h3>

//       {/* <h5 className="font-bold text-center text-xl md:text-3xl py-2 md:py-3">
//         {ilustration.subTitle}
//       </h5> */}

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//         {ilustration.images.map((image) => (
//           <div key={image.src}>
//             <img src={image.src} alt={image.alt} />
//             <p className="text-base md:text-xl">{image.alt}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
type ApologyForCrimeInImagesProps = {
  apologyForCrimeInImages: ApologyForCrimeInImagesDefinition[];
};
function ApologyForCrimeInImages({
  apologyForCrimeInImages,
}: ApologyForCrimeInImagesProps) {
  return (
    <div>
      <h2 className="text-center uppercase underline text-2xl md:text-4xl font-extrabold text-primary">
        Apología del delito en imágenes
      </h2>

      <div className="py-8">
        {apologyForCrimeInImages.map((apology) => (
          <div key={apology.title}>
            <h3 className="font-bold text-center text-xl md:text-3xl text-textPrimary uppercase">
              {apology.title}
            </h3>

            <p className="md:text-2xl text-textSecondary">
              {apology.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-6">
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

// TODO: chek this is used
type PlaceOfOccurrenceDefinition = {
  placeOfOccurrence: ImageDefinition;
};
function PlaceOfOccurrence({ placeOfOccurrence }: PlaceOfOccurrenceDefinition) {
  return (
    <div className="py-4">
      {/* <h2 className="font-extrabold uppercase text-center text-xl md:text-3xl py-2 md:py-3">
        lugar del hecho
      </h2> */}
      <img
        src={placeOfOccurrence.src}
        alt={placeOfOccurrence.alt}
        className="py-3 w-full"
      />
    </div>
  );
}

type VirtualMemorialProps = {
  virtualMemorial: ImageDefinition[];
};
function VirtualMemorial({ virtualMemorial }: VirtualMemorialProps) {
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

type ActionVindicatedDefinition = {
  actionVidicated: {
    description?: string;
    books: Book[];
  };
};
function ActionVindicated({ actionVidicated }: ActionVindicatedDefinition) {
  return (
    <div>
      <h2 className="text-center uppercase underline text-2xl md:text-4xl font-extrabold text-primary">
        acciones reinvidicadas por los movimientos terroristas
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
          className="text-base md:text-xl py-2 text-textPrimary"
        >
          {/* <p>{book.fragment}</p> */}
          <div
            className="text-justify pt-8"
            dangerouslySetInnerHTML={{ __html: book.fragment }}
          />
          <p className="">
            {book.author}, <time>{book.year.getFullYear()}</time>,{" "}
            <b>{book.name}</b>, {book.place}, {book.edition}, {book.pages}
          </p>
        </div>
      ))}
    </div>
  );
}

type TestimonialsDefinition = {
  testimonal: VideosTerroristActionDefinition[];
};
function Testimonials({ testimonal }: TestimonialsDefinition) {
  return (
    <div>
      <h2 className="text-center uppercase underline text-2xl md:text-4xl font-bold text-[#f60]">
        testimonios
      </h2>
      <h3 className="font-bold text-center text-xl md:text-2xl py-2 md:py-3 text-[#f60]/60">
        Videos con relatos de familiares de víctimas del terrorismo
        revolucionario
      </h3>

      {testimonal.map((video) => (
        <div key={video.id}>
          <h3 className="uppercase text-xl font-bold text-center py-3">
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

type VictimsDefinition = {
  victims: TerrorActionsVicitmDefinition[];
};
function Info({ victims }: VictimsDefinition) {
  return (
    //
    // flex items-center justify-center md:grid md:grid-cols-2 xl:grid-cols-4
    <div className="py-8 flex flex-wrap justify-center items-center gap-6 mx-auto max-w-[80vh] xl:max-w-none">
      {victims.map((victim) => (
        <div
          className="flex items-center gap-2 text-textPrimary"
          key={victim.name}
        >
          <img
            src={victim.avatar?.src}
            alt={victim.avatar?.alt}
            className="h-60 rounded-2xl"
          />
          <div className="text-base md:text-xl">
            <p className="py-2">{victim.name}.</p>
            <p className="py-2">{victim.age} años.</p>
            <p className="py-2">{victim.marital}</p>
            {victim.childs && (
              <p>
                {victim.childs === 1
                  ? `${victim.childs} hijo`
                  : `${victim.childs} hijos `}
                {victim.childsDescription && (
                  <span className="py-2">{victim.childsDescription}</span>
                )}
              </p>
            )}
            {victim.daughter && (
              <p>
                {victim.daughter === 1
                  ? `${victim.daughter} hija`
                  : `${victim.daughter} hijas `}
                {victim.childsDescription && (
                  <span className="py-2">{victim.childsDescription}</span>
                )}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
