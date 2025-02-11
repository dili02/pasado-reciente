import { VictimsDefinition, VictimsInfoDefinition } from "@/db/data";
import React from "react";
import { cn } from "@/lib/utils";
import { ImageOff } from "lucide-react";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Baby, Cake } from "lucide-react";
// import { Icons } from "./icons";

type Props = {};

export default function Victim({
  victim,
  date,
}: {
  victim: VictimsDefinition;
  date: Date;
}) {
  // console.log("VICTIM", victim);
  return (
    <div className="pt-4">
      {/* victim info */}
      {victim.info && <VictimInfo info={victim.info} date={date} />}
      {/* {victim.info && <VictimCard info={victim.info} date={date} />} */}
    </div>
  );
}

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
    new Date(date)
  );
}

export function VictimInfo({
  info,
  date,
}: {
  info: VictimsInfoDefinition;
  date: Date;
}) {
  function getFormattedDateToString(date: Date): string {
    return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
      new Date(date)
    );
  }
  return (
    <div className="flex flex-col w-[250px] h-full rounded-xl">
      <div className="relative w-[250px]">
        {info?.avatar ? (
          <img
            src={info?.avatar?.src}
            alt={info?.avatar?.alt}
            className="w-[250px] h-[250px] rounded-xl"
          />
        ) : (
          <div className="w-[250px] h-[250px] bg-orange-200 flex items-center justify-center rounded-xl">
            <ImageOff className="text-orange-100 w-32 h-32" />
          </div>
        )}
        {/* <img
          src={info?.avatar?.src}
          alt={info?.avatar?.alt}
          className="w-[250px] h-[250px] rounded-xl"
        /> */}
      </div>
      <div className="flex-grow p-1">
        <h2 className="font-extrabold text-center text-orange-500">
          {info.name}
        </h2>

        <div>
          {info?.deceased && (
            <p className="text-sm">
              <time>{getFormattedDateToString(info?.deceased)}</time>
            </p>
          )}

          {!info?.deceased && !info?.kidnapping && (
            <p className="text-center text-sm">
              <time>{getFormattedDateToString(date)}</time>
            </p>
          )}

          {info?.kidnapping && (
            <p className="text-center text-sm">
              <time>{getFormattedDateToString(info.kidnapping.init)}</time>
              <span className="mx-2">al</span>
              <time className="">
                {getFormattedDateToString(info.kidnapping.end)}
              </time>
              <span className="ml-2">
                ({info?.kidnapping.days} {info?.kidnapping.description})
              </span>
            </p>
          )}
        </div>

        <div className="text-center text-gray-500 text-sm py-1">
          {info?.nationality && (
            <p className="text-sm">Nacionalidad: {info?.nationality}</p>
          )}

          {info?.age && <p className="">Edad: {info?.age} años</p>}

          {info?.marital && <p className="">Estado civil: {info?.marital}</p>}

          {info.childs && (
            <p className="">
              Hijos:
              {info.childs === 1 ? ` ${info.childs}` : ` ${info.childs}`}
              {info.childsDescription && (
                <span className="pl-2">{info.childsDescription}</span>
              )}
              <span className="">{info.otherDescription}</span>
            </p>
          )}

          {info.daughter && (
            <p className="">
              Hijos:
              {info.daughter === 1 ? ` ${info.daughter}` : ` ${info.daughter}`}
              {info.childsDescription && (
                <span className="">{info.childsDescription}</span>
              )}
              <span className="">{info.otherDescription}</span>
            </p>
          )}
        </div>
      </div>
    </div>
    // <div className="flex p-4 ml-5 md:p-10 w-full bg-orange-400">
    // <div className="bg-orange-50 w-full">
    //   <div className="flex">
    //     <img
    //       src={info?.avatar?.src}
    //       alt={info?.avatar?.alt}
    //       className="w-16 h-16 rounded-l-lg"
    //     />

    //     <div className="px-2">
    //       <p className="text-orange-500 font-bold text-sm">{info?.name}</p>

    //       {info?.deceased && (
    //         <p className="text-gray-500 text-xs">
    //           <time>{getFormattedDateToString(info?.deceased)}</time>
    //         </p>
    //       )}

    //       {!info?.deceased && !info?.kidnapping && (
    //         <p className="text-gray-500 text-xs">
    //           <time>{getFormattedDateToString(date)}</time>
    //         </p>
    //       )}

    //       {info?.kidnapping && (
    //         <p className="text-gray-500 text-xs">
    //           <time>{getFormattedDateToString(info.kidnapping.init)}</time>
    //           <span className="mx-2">al</span>
    //           <time className="mx-2">
    //             {getFormattedDateToString(info.kidnapping.end)}
    //           </time>
    //           <span>
    //             ({info?.kidnapping.days} {info?.kidnapping.description})
    //           </span>
    //         </p>
    //       )}
    //     </div>
    //   </div>
    //   <div className="py-2">
    //     <div className="my-2 flex flex-col items-center justify-center sm:items-start sm:justify-start sm:flex-row sm:flex-wrap sm:gap-2">
    //       {info?.nationality && (
    //         <p className="bg-orange-100 text-orange-500 px-1 rounded-md text-sm">
    //           {info?.nationality}
    //         </p>
    //       )}

    //       {info?.age && (
    //         <p className="bg-orange-100 text-orange-500 px-1 rounded-md text-sm">
    //           {info?.age} años
    //         </p>
    //       )}

    //       {info?.marital && (
    //         <p className="bg-orange-100 text-orange-500 px-1 rounded-md text-sm">
    //           {info?.marital}
    //         </p>
    //       )}

    //       {info.childs && (
    //         <p className=" bg-orange-100 text-orange-500 px-1 rounded-md text-sm">
    //           {info.childs === 1
    //             ? `${info.childs} hijo`
    //             : `${info.childs} hijos  `}
    //           {info.childsDescription && (
    //             <span className="px-2">{info.childsDescription}</span>
    //           )}
    //           <span className="px-2">{info.otherDescription}</span>
    //         </p>
    //       )}

    //       {info.daughter && (
    //         <p className="bg-orange-100 text-orange-500 px-1 rounded-md text-sm">
    //           {info.daughter === 1
    //             ? `${info.daughter} hija`
    //             : `${info.daughter} hijas `}
    //           {info.childsDescription && (
    //             <span className="px-2">{info.childsDescription}</span>
    //           )}
    //           <span className="px-2">{info.otherDescription}</span>
    //         </p>
    //       )}
    //     </div>
    //   </div>
    //   {/* </div> */}
    //   {/* <div className="w-full flex items-center justify-center bg-transparent">
    //     <div className="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 bg-gradient-to-r from-purple-700 to-purple-900 rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
    //       <div className="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition ">
    //         <div className="rounded-full bg-black w-16 sm:w-18 md:w-20 overflow-auto">
    //           <img
    //             src={victim.info?.avatar?.src}
    //             alt={victim.info?.avatar?.alt}
    //             className="h-16 w-16"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex flex-col space-y-2 md:space-y-4">
    //         <label className="absolute font-bold text-gray-100 text-md text-start top-1 left-8 sm:left-10">
    //           Julia Simpson
    //         </label>
    //         <p className="absolute text-gray-200 text-sm mt-1 leading-relaxed left-8  sm:left-10">
    //           Project Manager
    //         </p>
    //       </div>
    //     </div>
    //   </div> */}
    // </div>
    // <div className="flex w-full items-center justify-center">
    //   <div className="shadow-xs  shadow-orange-500 rounded-lg overflow-hidden bg-white text-base p-4 space-y-2 hover:shadow-lg transition-shadow w-full border border-amber-500">
    //     <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:gap-4">
    //       <img
    //         className="h-24 w-24 rounded-lg"
    //         src={info.avatar?.src}
    //         alt={info.avatar?.alt}
    //       />

    //       <div>
    //         <p className="text-2xl font-extrabold text-center lg:text-left text-orange-500 py-1 md:text-[1.65rem] xl:text-3xl 2xl:text-4xl">
    //           {info.name}
    //         </p>

    //         {info.deceased && (
    //           <p className="text-slate-500 text-center lg:text-left text-base lg:text-lg">
    //             <time>{getFormattedDateToString(info.deceased)}</time>
    //           </p>
    //         )}

    //         {!info.deceased && !info.kidnapping && (
    //           <p className="text-slate-500 text-center lg:text-left text-base md:text-xl lg:text-2xl">
    //             <time>{getFormattedDateToString(date)}</time>
    //           </p>
    //         )}

    //         {info.kidnapping && (
    //           <p className="text-slate-500 text-center lg:text-left text-base md:text-lg">
    //             <time>{getFormattedDateToString(info.kidnapping.init)}</time>
    //             <span className="mx-2">al</span>
    //             <time className="mx-2">
    //               {getFormattedDateToString(info.kidnapping.end)}
    //             </time>
    //             <span>
    //               ({info.kidnapping.days} {info.kidnapping.description})
    //             </span>
    //           </p>
    //         )}
    //       </div>
    //     </div>

    //     <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:items-start lg:justify-start lg:gap-4">
    //       {info.nationality && (
    //         <p className="md:text-lg xl:text-xl bg-orange-100 text-orange-500 p-2 rounded-md">
    //           {info.nationality}
    //         </p>
    //       )}

    //       {info.age && (
    //         <p className="md:text-lg xl:text-xl bg-orange-100 text-orange-500 p-2 rounded-md">
    //           {info.age} años
    //         </p>
    //       )}

    //       {info.marital && (
    //         <p className="capitalize md:text-lg xl:text-xl bg-orange-100 text-orange-500 p-2 rounded-md">
    //           {info.marital}
    //         </p>
    //       )}

    //       {info.childs && (
    //         <p className="md:text-lg xl:text-xl bg-orange-100 text-orange-500 p-2 rounded-md">
    //           {info.childs === 1
    //             ? `${info.childs} hijo`
    //             : `${info.childs} hijos `}
    //           {info.childsDescription && (
    //             <span className="">{info.childsDescription}</span>
    //           )}
    //           <span className="px-2">{info.otherDescription}</span>
    //         </p>
    //       )}

    //       {info.daughter && (
    //         <p className="md:text-lg xl:text-xl bg-orange-100 text-orange-500 p-2 rounded-md">
    //           {info.daughter === 1
    //             ? `${info.daughter} hija`
    //             : `${info.daughter} hijas `}
    //           {info.childsDescription && (
    //             <span className="">{info.childsDescription}</span>
    //           )}
    //           <span className="">{info.otherDescription}</span>
    //         </p>
    //       )}
    //     </div>

    //     {/* <img
    //       className="block mx-auto h-28 w-28 rounded-lg lg:mx-0 lg:shrink-0"
    //       src={info.avatar?.src}
    //       alt={info.avatar?.alt}
    //     /> */}

    //     {/* <div className="space-y-0.5">
    //       <p className="text-2xl font-extrabold text-center lg:text-left text-orange-500">
    //         {info.name}
    //       </p>

    //       {info.deceased && (
    //         <p className="text-slate-500 text-center lg:text-lef text-base lg:text-lg">
    //           <time>{getFormattedDateToString(info.deceased)}</time>
    //         </p>
    //       )}

    //       {!info.deceased && !info.kidnapping && (
    //         <p className="text-slate-500 text-center lg:text-left text-base lg:text-lg">
    //           <time>{getFormattedDateToString(date)}</time>
    //         </p>
    //       )}

    //       {info.kidnapping && (
    //         <p className="text-slate-500 text-center lg:text-left text-base lg:text-lg">
    //           <time>{getFormattedDateToString(info.kidnapping.init)}</time>
    //           <span className="mx-2">al</span>
    //           <time className="mx-2">
    //             {getFormattedDateToString(info.kidnapping.end)}
    //           </time>
    //           <span>
    //             ({info.kidnapping.days} {info.kidnapping.description})
    //           </span>
    //         </p>
    //       )}

    //       <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:items-start lg:justify-start lg:gap-4">
    //         {info.nationality && <p className="">{info.nationality}</p>}

    //         {info.age && <p className="">{info.age} años</p>}

    //         {info.marital && <p className="capitalize">{info.marital}</p>}

    //         {info.childs && (
    //           <p className="">
    //             {info.childs === 1
    //               ? `${info.childs} hijo`
    //               : `${info.childs} hijos `}
    //             {info.childsDescription && (
    //               <span className="">{info.childsDescription}</span>
    //             )}
    //             <span className="px-2">{info.otherDescription}</span>
    //           </p>
    //         )}

    //         {info.daughter && (
    //           <p className="">
    //             {info.daughter === 1
    //               ? `${info.daughter} hija`
    //               : `${info.daughter} hijas `}
    //             {info.childsDescription && (
    //               <span className="">{info.childsDescription}</span>
    //             )}
    //             <span className="">{info.otherDescription}</span>
    //           </p>
    //         )}
    //       </div>
    //     </div> */}
    //   </div>
    // </div>
  );
}
