import { Icons } from "@/components/icons";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { api as API } from "@/db/api";
import { api } from "@/db/data";
import Link from "next/link";
// import { unstable_noStore as noStore } from "next/cache";
import { ChevronRight } from "lucide-react";
import Memorial from "@/components/memorial";

// export const dynamic = "force-dynamic";

export default async function Home() {
  // noStore();
  // const month = new Intl.DateTimeFormat("es-ES", { month: "long" });
  // console.log(month);

  const terroristActionWithVideos = await API.getAllWithVideo();
  // console.log(
  //   "terroristActionWithVideos",
  //   terroristActionWithVideos.map((video) => console.log("video", video.title))
  // );
  // console.log(terroristActionWithVideos);

  // const numberOfMurderedVictims = (await API.getKills()).reduce(
  //   (acc, incident) => acc + (incident.totalOfVictims ?? 0),
  //   0
  // );
  // console.log(Number(numberOfMurderedVictims));

  // const countTotalActionsTerrorist = await api.countTotalTerroristActions();

  return (
    <section className="container w-full py-4 space-y-2">
      {/* TODO: preguntar feature */}
      {/* <div className="flex items-center justify-between text-sm bg-red-300 w-full">
        <div>resumen cronologico</div>
        <div>
          acciones terroristas reivindicadas por los movimientos subersivos
        </div>
        <div className="bg-yellow-300">apologia del delito en imagenes</div>
      </div> */}

      <div className="flex flex-col lg:flex-row gap-10 min-h-[600px]">
        <div className="flex flex-col justify-center gap-8 text-center lg:text-left">
          <p className="uppercase text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-extrabold text-orange-950">
            nunca más terrorismo
          </p>
          <p className="">
            La presente hemeroteca fue confeccionada exclusivamente con noticias
            periodísticas de las décadas del 60 y 70 escaneadas de las páginas
            originales de los diarios. De esta manera se podrá acceder al relato
            cronológico documentado exento de opiniones y/o relatos alejados en
            el tiempo y contexto en que sucedieron los hechos. En virtud del
            tiempo transcurrido, es necesario precisar que el inicio de los
            hechos se dieron en el marco de un gobierno democrático surgido de
            elecciones libres, el cual, al igual que la sociedad de la época, se
            vieron sorprendidos ante los embates de una situación ajena a los
            hábitos de convivencia, como lo demuestran estas publicaciones.
          </p>
        </div>

        <Memorial />
      </div>

      <Stats />

      <div className="mt-8">
        <div className="">
          <h2 className="text-3xl lg:text-4xl capitalize font-extrabold py-2">
            testimonios
          </h2>
          <p className="text-base sm:text-lg text-orange-500">
            Relatos de familiares de víctimas del terrorismo.
          </p>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 py-4">
            {terroristActionWithVideos.map((video) => (
              <div className="rounded shadow-lg bg-orange-50" key={video.src}>
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
      </div>
    </section>
    // <section className="min-h-screen text-primary-foreground container py-8">
    //   <div className="flex flex-col lg:flex-row">
    //     <div className="lg:w-5/6">
    //       <p className="uppercase text-2xl md:text-4xl xl:text-6xl font-extrabold py-8 text-primary">
    //         nunca más terrorismo
    //       </p>
    //       <p className="text-primary-foreground lg:leading-relaxed 2xl:leading-loose">
    //         La presente hemeroteca fue confeccionada exclusivamente con noticias
    //         periodísticas de las décadas del 60 y 70 escaneadas de las páginas
    //         originales de los diarios. De esta manera se podrá acceder al relato
    //         cronológico documentado exento de opiniones y/o relatos alejados en
    //         el tiempo y contexto en que sucedieron los hechos. En virtud del
    //         tiempo transcurrido, es necesario precisar que el inicio de los
    //         hechos se dieron en el marco de un gobierno democrático surgido de
    //         elecciones libres, el cual, al igual que la sociedad de la época, se
    //         vieron sorprendidos ante los embates de una situación ajena a los
    //         hábitos de convivencia, como lo demuestran estas publicaciones.
    //       </p>
    //     </div>

    //     <Memorial />
    //   </div>

    //   <Stats tototalActionsTerrorist={countTotalActionsTerrorist} />

    //   {/* <div className="text-textPrimary container">
    //     <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 relative py-8"> */}
    //   {/* <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px] md:gap-4 relative"> */}
    //   {/* <div className="flex flex-col justify-center">
    //         <div className="text-center md:text-left space-y-4">
    //           <h1 className="text-5xl xl:text-6xl font-extrabold leading-relaxed xl:leading-tight uppercase text-[#f40]">
    //             nunca más terrorismo
    //           </h1>
    //           <p className="text-textSecondary xl:max-w-[850px]">
    //             La presente hemeroteca fue confeccionada exclusivamente con
    //             noticias periodísticas de las décadas del 60 y 70 escaneadas de
    //             las páginas originales de los diarios. De esta manera se podrá
    //             acceder al relato cronológico documentado exento de opiniones
    //             y/o relatos alejados en el tiempo y contexto en que sucedieron
    //             los hechos. En virtud del tiempo transcurrido, es necesario
    //             precisar que el inicio de los hechos se dieron en el marco de un
    //             gobierno democrático surgido de elecciones libres, el cual, al
    //             igual que la sociedad de la época, se vieron sorprendidos ante
    //             los embates de una situación ajena a los hábitos de convivencia,
    //             como lo demuestran estas publicaciones.
    //           </p>
    //         </div>
    //       </div> */}

    //   {/* MEMORIal */}
    //   {/* <div className="flex flex-col justify-center items-center">
    //         <div className="flex items-center justify-center gap-3 py-2">
    //           <Icons.museum className="w-6 h-6 hidden lg:block" />
    //           <h2 className="text-2xl uppercase text-center font-extrabold text-textPrimary">
    //             Memorial del Mes de{" "}
    //             <time dateTime={month.format(new Date())} className="">
    //               {month.format(new Date())}
    //             </time>
    //           </h2>
    //         </div>

    //         <img
    //           src={`/efemerides/${month.format(new Date())}.png`}
    //           className="w-[350px] md:w-[550px] xl:w-[350px] drop-shadow py-4"
    //           // className="object-cover w-full py-4"
    //           alt={`memorial del mes de ${month.format(new Date())}`}
    //         />

    //         <Button
    //           className="bg-[#f60] hover:bg-[#f90]/90 w-full xl:w-80"
    //           asChild
    //         >
    //           <Link href="/efemerides" className="text-orange-50">
    //             Ver Efemérides <ChevronRight className="ml-2 h-4 w-4" />
    //           </Link>
    //         </Button>
    //       </div> */}
    //   {/* <Memorial />
    //     </div> */}

    //   {/* <Stats /> */}

    //   {/* <div className="mx-auto max-w-7xl px-4 sm:px-6">
    //     <div className="py-12 md:py-20">
    //       <div className="mx-auto pb-10 text-center md:pb-16">
    //         <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl uppercase text-primary">
    //           nunca más terrorismo
    //         </h1>

    //         <div className="mx-auto">
    //           <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">
    //             La presente hemeroteca fue confeccionada exclusivamente con
    //             noticias periodísticas de las décadas del 60 y 70 escaneadas de
    //             las páginas originales de los diarios. De esta manera se podrá
    //             acceder al relato cronológico documentado exento de opiniones
    //             y/o relatos alejados en el tiempo y contexto en que sucedieron
    //             los hechos. En virtud del tiempo transcurrido, es necesario
    //             precisar que el inicio de los hechos se dieron en el marco de un
    //             gobierno democrático surgido de elecciones libres, el cual, al
    //             igual que la sociedad de la época, se vieron sorprendidos ante
    //             los embates de una situación ajena a los hábitos de convivencia,
    //             como lo demuestran estas publicaciones.
    //           </p>
    //         </div>

    //         <Stats />
    //       </div>

    //       <div className="relative m-auto flex items-center justify-center">
    //         <div className="text-primary w-full flex items-center justify-center flex-col gap-4">
    //           <div className="flex items-center justify-center gap-3">
    //             <Icons.museum className="w-10 h-10 hidden lg:block" />
    //             <h2 className="text-4xl uppercase text-center font-extrabold text-primary">
    //               Memorial del Mes de{" "}
    //               <time dateTime={month.format(new Date())} className="">
    //                 {month.format(new Date())}
    //               </time>
    //             </h2>
    //           </div>

    //           <p className="mb-4 text-textSecondary text-2xl text-center">
    //             Acciones terroristas llevadas a cabo por los movimientos
    //             subversivos durante el período 1965-1972.
    //           </p>

    //           <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
    //             <img
    //               src={`/efemerides/${month.format(new Date())}.png`}
    //               className="object-cover w-full py-4"
    //               alt={`memorial del mes de ${month.format(new Date())}`}
    //             />
    //             <Button className="w-full bg-[#f60] hover:bg-[#f90]/90" asChild>
    //               <Link href="/efemerides">
    //                 Ver Efemérides <ChevronRight className="ml-2 h-4 w-4" />
    //               </Link>
    //             </Button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}

    //   {/* <div>
    //     <h2 className="uppercase font-extrabold py-2 text-4xl text-center text-primary">
    //       testimonios
    //     </h2>

    //     <p className="text-textSecondary text-2xl text-center">
    //       Relatos de familiares de víctimas del terrorismo revolucionario.
    //     </p>

    //     <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 py-4">
    //       {terroristActionWithVideos.map((video) => (
    //         <div className="rounded shadow-lg bg-white" key={video.src}>
    //           <iframe
    //             src={video.src}
    //             title={video.title}
    //             frameBorder="0"
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //             referrerPolicy="strict-origin-when-cross-origin"
    //             allowFullScreen
    //             className="w-full h-96 lg:h-52"
    //           ></iframe>
    //           <div className="p-2 text-textPrimary">
    //             <Link href={video.slug}>{video.title}</Link>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div> */}
    //   {/* </div> */}

    //   {/* <Stats /> */}

    //   <div className="mt-8">
    //     <div className="">
    //       <h2 className="text-3xl capitalize font-extrabold py-2 text-textPrimary">
    //         testimonios
    //       </h2>
    //       <p className="text-muted-foreground text-lg">
    //         Relatos de familiares de víctimas del terrorismo.
    //       </p>

    //       <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 py-4">
    //         {terroristActionWithVideos.map((video) => (
    //           <div className="rounded shadow-lg" key={video.src}>
    //             <iframe
    //               src={video.src}
    //               title={video.title}
    //               // frameBorder="0"
    //               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //               referrerPolicy="strict-origin-when-cross-origin"
    //               allowFullScreen
    //               className="w-full h-96 lg:h-52"
    //             ></iframe>
    //             <div className="p-2 text-base text-primary-foreground">
    //               <Link href={video.slug}>{video.title}</Link>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
