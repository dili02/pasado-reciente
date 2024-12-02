import ApologyForCrimeInImages from "@/components/apology-for-crime-images";
import TableOfContet from "@/components/common/table-of-content";
import { Icons } from "@/components/icons";
import NewspapersNotices from "@/components/newspapers-notices";
import ActionVindicated from "@/components/action-vindicated";
import Notice from "@/components/notice";
import Victim from "@/components/victim-info";
import VirtualMemorial from "@/components/virtual-memorial";
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

export async function generateStaticParams() {
  const actions = await api.getAllAtacks();

  return actions.map((action) => ({ slug: action.slug }));
}

// function getFormattedDateToString(date: Date): string {
//   return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
//     new Date(date)
//   );
// }

export default async function page({ params }: Props) {
  const action = await api.getActionBySlug(params.slug);

  return (
    <section className="px-8 w-full lg:px-4 flex flex-row 2xl:container 2xl:px-0">
      <div className="w-full lg:w-9/12 xl:w-9.5/12">
        {action.newsPapers && <NewspapersNotices notices={action.newsPapers} />}

        {action.vindicatedActions && (
          <ActionVindicated actionVidicated={action.vindicatedActions} />
        )}
      </div>

      <div className="hidden lg:flex lg:w-3/12 xl:w-2.5/12 lg:mb-0 lg:sticky lg:top-0 lg:self-start">
        <TableOfContet action={action} />
      </div>
      {/* {action.fact && (
        <h1 className="text-center uppercase text-2xl md:text-4xl font-extrabold text-[#f40] mt-8">
          HECHO: {action.fact}
        </h1>
      )} */}

      {/* {action.victims?.map((victim, index) => (
        <Victim key={index} victim={victim} date={action.date} />
      ))} */}

      {/* {action.newsPapers && <Notice notices={action.newsPapers} />} */}

      {/* {action.apologyForCrimeInImages && (
        <ApologyForCrimeInImages crimeImages={action.apologyForCrimeInImages} />
      )} */}

      {/* {action.virtualMemorial && (
        <VirtualMemorial virtualMemorial={action.virtualMemorial} />
      )} */}

      {/* {action.vindicatedActions && (
        <ActionVindicated actionVidicated={action.vindicatedActions} />
      )} */}

      {/* {action.videos && <Testimonials videos={action.videos} />} */}
    </section>
  );
}

// function Notices({ notices }: { notices: NewsPaperDefinition[] }) {
//   return (
//     <div className="py-8 text-base">
//       <h3
//         className="uppercase text-3xl text-center font-extrabold text-orange-950"
//         id="notices"
//       >
//         noticias publicadas por diarios de la época
//       </h3>

//       {notices?.map((notice) => (
//         <div key={notice.name} className="py-6">
//           <p className="text-center text-lg font-bold">{notice.name}</p>

//           {notice.date && (
//             <p className="text-center text-lg font-bold">
//               <time>{getFormattedDateToString(notice.date)}</time>
//             </p>
//           )}

//           {notice.dateInit && (
//             <p className="text-center text-lg font-bold">
//               <time>{getFormattedDateToString(notice.dateInit)}</time> al{" "}
//               <time>{getFormattedDateToString(notice.dateEnd!)}</time>
//             </p>
//           )}

//           {notice.content &&
//             notice.content.map((content, index) => (
//               <div key={index}>
//                 <h4 className="text-center font-bold text-lg">
//                   TÍTULO: {content.title}
//                 </h4>

//                 <p className="">{content.description}</p>

//                 <h4 className="text-center font-bold text-lg">
//                   SUB TÍTULO: {content.subtitle}
//                 </h4>

//                 <p className="">{content.subdescription}</p>
//               </div>
//             ))}

//           {notice.body && (
//             <div>
//               <h4 className="text-center font-bold">
//                 TÍTULO: {notice.body.title}
//               </h4>

//               {notice.body.titledescription && (
//                 <p className="">{notice.body.titledescription}</p>
//               )}

//               <h4 className="text-center font-bold">
//                 SUB TÍTULO: {notice.body.subtitle}
//               </h4>

//               {notice.body.subtitledescription && (
//                 <p className="">{notice.body.subtitledescription}</p>
//               )}

//               {notice.body.subtitle1 && (
//                 <h4 className="text-center font-bold text-lg">
//                   SUB TÍTULO: {notice.body.subtitle1}
//                 </h4>
//               )}

//               {notice.body.subtitledescription1 && (
//                 <p className="">{notice.body.subtitledescription1}</p>
//               )}

//               {notice.body.subtitle2 && (
//                 <h4 className="text-center font-bold text-lg">
//                   SUB TÍTULO: {notice.body.subtitle2}
//                 </h4>
//               )}

//               {notice.body.subtitledescription2 && (
//                 <p className="">{notice.body.subtitledescription2}</p>
//               )}
//             </div>
//           )}

//           {notice.title && (
//             <h4 className="text-center font-bold text-lg">
//               TÍTULO: {notice.title}
//             </h4>
//           )}

//           {notice.description && <p className="">{notice.description}</p>}

//           {notice.subtitle && (
//             <h4 className="text-center font-bold text-lg">
//               SUB TÍTULO: {notice.subtitle}
//             </h4>
//           )}

//           {notice.subDescription && <p className="">{notice.subDescription}</p>}

//           {notice.title1 && (
//             <h4 className="text-center font-bold">TÍTULO: {notice.title1}</h4>
//           )}

//           {notice.description1 && <p className="">{notice.description1}</p>}

//           {notice.subtitle1 && (
//             <h4 className="text-center font-bold text-lg">
//               SUB TÍTULO: {notice.subtitle1}
//             </h4>
//           )}

//           {notice.subDescription1 && (
//             <p className="">{notice.subDescription1}</p>
//           )}

//           {notice.title2 && (
//             <h4 className="text-center font-bold text-lg">
//               TÍTULO: {notice.title2}
//             </h4>
//           )}

//           {notice.description2 && <p className="">{notice.description2}</p>}

//           {notice.title3 && (
//             <h4 className="text-center font-bold text-lg">
//               TÍTULO: {notice.title3}
//             </h4>
//           )}

//           {notice.description3 && <p className="">{notice.description3}</p>}

//           {notice.title4 && (
//             <h4 className="text-center font-bold text-lg">
//               TÍTULO: {notice.title4}
//             </h4>
//           )}

//           {notice.description4 && <p className="">{notice.description4}</p>}

//           <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between py-6">
//             {notice.images?.map((image) => (
//               <Link
//                 href={image.src}
//                 target="_blank"
//                 className="flex items-center gap-2 font-bold text-[#007664] py-2"
//                 key={image.src}
//               >
//                 <p className=" text-base uppercase underline">
//                   IR A LA {image.type}
//                 </p>
//                 <Icons.newspaper className="h-6 w-6" />
//               </Link>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function ActionsVindicated({ vindicated }: { vindicated: { books: Book[] } }) {
//   return (
//     <div className="my-10 text-primary-foreground">
//       <h3
//         className="uppercase text-3xl text-center font-extrabold text-orange-950"
//         id="vindicated"
//       >
//         acciones reivindicadas por los movimientos terroristas
//       </h3>

//       <p className="py-4">
//         Las acciones terroristas del llamado Pasado Reciente son reconocidas y
//         reivindicadas por los autores décadas después en libros de circulación
//         pública.
//       </p>

//       {vindicated.books.map((book) => (
//         <div key={book.name} className="text-base py-2 px-8 bg-orange-50">
//           <div
//             className="pt-8 bg-orange-50"
//             dangerouslySetInnerHTML={{ __html: book.fragment }}
//           />
//           <p className="bg-orange-50 py-4">
//             {book.author},{" "}
//             {book.year && <time>{`${book.year?.getFullYear()},`}</time>}{" "}
//             <b>{book.name}</b>, {book.place}, {book.edition}, {book.pages}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }
