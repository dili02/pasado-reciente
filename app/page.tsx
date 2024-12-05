import Stats from "@/components/stats";
import { api as API, VideosTerroristActionDefinition } from "@/db/data";
import Link from "next/link";
import Memorial from "@/components/memorial";
import Satistics from "@/components/statistics";

export default async function Home() {
  const terroristActionWithVideos = await API.getAllWithVideo();
  const actions = await API.getAllAcitions();

  return (
    <section className="container grid grid-cols-1 lg:grid-cols-6 w-full lg:gap-4">
      <div className="my-4 col-span-6 lg:col-span-4 lg:bg-orange-400 lg:p-4 lg:rounded-xl lg:text-orange-50">
        <p className="text-xl capitalize tracking-tight">bienvenidos</p>

        <p className="my-8 text-5xl uppercase font-bold lg:text-6xl lg:text-orange-50 lg:tracking-tight xl:text-7xl xl:tracking-tighter">
          nunca más <br className="hidden lg:block" /> terrorismo
        </p>

        <p className="text-lg mt-4 lg:text-orange-50">
          La presente hemeroteca fue confeccionada exclusivamente con noticias
          periodísticas de las décadas del 60 y 70 escaneadas de las páginas
          originales de los diarios. De esta manera se podrá acceder al relato
          cronológico documentado exento de opiniones y/o relatos alejados en el
          tiempo y contexto en que sucedieron los hechos. En virtud del tiempo
          transcurrido, es necesario precisar que el inicio de los hechos se
          dieron en el marco de un gobierno democrático surgido de elecciones
          libres, el cual, al igual que la sociedad de la época, se vieron
          sorprendidos ante los embates de una situación ajena a los hábitos de
          convivencia, como lo demuestran estas publicaciones.
        </p>
      </div>

      <Memorial actions={actions} />

      <div className="bg-orange-200 col-span-6 lg:p-4 lg:rounded-xl">
        <h2 className="p-4 text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter uppercase lg:p-0">
          testimonios
        </h2>

        <p className="text-lg py-2 text-orange-500 p-4 lg:p-0">
          Relatos de familiares de víctimas del terrorismo.
        </p>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 py-4">
          {terroristActionWithVideos.map((video) => (
            <div
              className="rounded shadow-lg hover:shadow-xl bg-orange-50"
              key={video.src}
            >
              <iframe
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-96 lg:h-52"
              ></iframe>
              <div className="p-2 text-base text-primary-foreground">
                <Link href={video.slug}>{video.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-50 col-span-6 lg:p-4 lg:rounded-xl p-4">
        <Satistics />
      </div>
    </section>

    // <section className="container mx-auto flex flex-col items-center justify-center">
    //   <div className="mt-16">
    //     <p className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter uppercase text-orange-500">
    //       nunca más terrorismo
    //     </p>
    //     <p className="text-lg mt-4 text-center">
    //       La presente hemeroteca fue confeccionada exclusivamente con noticias
    //       periodísticas de las décadas del 60 y 70 escaneadas de las páginas
    //       originales de los diarios. De esta manera se podrá acceder al relato
    //       cronológico documentado exento de opiniones y/o relatos alejados en el
    //       tiempo y contexto en que sucedieron los hechos. En virtud del tiempo
    //       transcurrido, es necesario precisar que el inicio de los hechos se
    //       dieron en el marco de un gobierno democrático surgido de elecciones
    //       libres, el cual, al igual que la sociedad de la época, se vieron
    //       sorprendidos ante los embates de una situación ajena a los hábitos de
    //       convivencia, como lo demuestran estas publicaciones.
    //     </p>
    //   </div>

    //   <div className="my-16">
    //     <Memorial actions={actions} />
    //   </div>

    //   <div className="my-16">
    //     <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter uppercase">
    //       testimonios
    //     </h2>
    //     <p className="text-lg py-2 text-orange-500">
    //       Relatos de familiares de víctimas del terrorismo.
    //     </p>

    //     <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 py-4">
    //       {terroristActionWithVideos.map((video) => (
    //         <div className="rounded shadow-lg bg-orange-50" key={video.src}>
    //           <iframe
    //             src={video.src}
    //             title={video.title}
    //             frameBorder="0"
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //             referrerPolicy="strict-origin-when-cross-origin"
    //             allowFullScreen
    //             className="w-full h-96 lg:h-52"
    //           ></iframe>
    //           <div className="p-2 text-base text-primary-foreground">
    //             <Link href={video.slug}>{video.title}</Link>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   <div className="my-8 w-full">
    //     <Satistics />
    //   </div>
    // </section>

    // <section className="grid lg:grid-cols-2 place-items-center pt-8 pb-8 container">
    //   <div>
    //     <p className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
    //       nunca mas terrorismo
    //     </p>
    //     <p className="text-lg mt-4 text-slate-600 max-w-2xl">
    //       La presente hemeroteca fue confeccionada exclusivamente con noticias
    //       periodísticas de las décadas del 60 y 70 escaneadas de las páginas
    //       originales de los diarios. De esta manera se podrá acceder al relato
    //       cronológico documentado exento de opiniones y/o relatos alejados en el
    //       tiempo y contexto en que sucedieron los hechos. En virtud del tiempo
    //       transcurrido, es necesario precisar que el inicio de los hechos se
    //       dieron en el marco de un gobierno democrático surgido de elecciones
    //       libres, el cual, al igual que la sociedad de la época, se vieron
    //       sorprendidos ante los embates de una situación ajena a los hábitos de
    //       convivencia, como lo demuestran estas publicaciones.
    //     </p>
    //   </div>

    //   <div className="py-6 bg-gray-200 flex items-end justify-center">
    //     <Memorial />
    //   </div>
    // </section>
  );
}

// function IntroPage({
//   terroristActionWithVideos,
// }: {
//   terroristActionWithVideos: VideosTerroristActionDefinition[];
// }) {
//   return (
//     <section className="w-full">
//       <div className="container flex flex-col items-center justify-center py-14 gap-4 lg:flex-row">
//         <div className="w-2/3">
//           <h1 className="mb-6 text-center uppercase text-orange-950 text-3xl font-extrabold leading-snug sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2] lg:text-start xl:text-6xl">
//             nunca mas terrorismo
//           </h1>
//           <p className="mx-auto mb-9 ext-base font-medium sm:text-lg sm:leading-[1.44] text-center lg:text-start">
//             La presente hemeroteca fue confeccionada exclusivamente con noticias
//             periodísticas de las décadas del 60 y 70 escaneadas de las páginas
//             originales de los diarios. De esta manera se podrá acceder al relato
//             cronológico documentado exento de opiniones y/o relatos alejados en
//             el tiempo y contexto en que sucedieron los hechos. En virtud del
//             tiempo transcurrido, es necesario precisar que el inicio de los
//             hechos se dieron en el marco de un gobierno democrático surgido de
//             elecciones libres, el cual, al igual que la sociedad de la época, se
//             vieron sorprendidos ante los embates de una situación ajena a los
//             hábitos de convivencia, como lo demuestran estas publicaciones.
//           </p>
//         </div>
//         <div className="w-full lg:w-1/3">
//           <Memorial />
//         </div>
//       </div>

//       <Stats />

//       <div className="mt-8">
//         <div className="container">
//           <h2 className="text-3xl lg:text-4xl capitalize font-extrabold py-2">
//             testimonios
//           </h2>
//           <p className="text-base sm:text-lg text-orange-500">
//             Relatos de familiares de víctimas del terrorismo.
//           </p>

//           <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 py-4">
//             {terroristActionWithVideos.map((video) => (
//               <div className="rounded shadow-lg bg-orange-50" key={video.src}>
//                 <iframe
//                   src={video.src}
//                   title={video.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   referrerPolicy="strict-origin-when-cross-origin"
//                   allowFullScreen
//                   className="w-full h-96 lg:h-52"
//                 ></iframe>
//                 <div className="p-2 text-base text-primary-foreground">
//                   <Link href={video.slug}>{video.title}</Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
