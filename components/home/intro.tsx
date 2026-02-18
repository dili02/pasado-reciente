import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"] });
const newsreaderItalic = Newsreader({ subsets: ["latin"], style: "italic" });

type Props = {};

export default function Intro({}: Props) {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <header className="mb-12 w-full">
          {/* <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-foreground pb-2 mb-12">
            <span>Volumen I / No. 001</span>
            <span>Edición Digital</span>
            <span>
              Uruguay,{" "}
              {new Date().toLocaleDateString("es-UY", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div> */}

          <h2
            className={`${newsreaderItalic.className} text-2xl md:text-3xl text-primary font-medium mb-4`}
          >
            Bienvenidos al Museo Digital del Pasado Reciente
          </h2>
          <div className="h-0.5 w-1/3 bg-foreground/10 mx-auto" />
        </header>

        <article className="max-w-4xl columns-1 md:columns-2 gap-12 text-left">
          <p
            className={`${newsreader.className} text-lg md:text-xl leading-relaxed text-foreground/90 tracking-tight text-justify`}
          >
            <span className="text-6xl md:text-8xl font-black float-left mr-4 mt-2 leading-[0.7] text-foreground">
              L
            </span>
            a presente hemeroteca fue confeccionada exclusivamente con noticias
            periodísticas de las décadas del 60 y 70 escaneadas de las páginas
            originales de los diarios. De esta manera se podrá acceder al relato
            cronológico documentado exento de opiniones y/o relatos alejados en
            el tiempo y contexto en que sucedieron los hechos.
          </p>
          <p
            className={`${newsreader.className} text-lg md:text-xl leading-relaxed text-foreground/90 tracking-tight text-justify mt-6 md:mt-0`}
          >
            En virtud del tiempo transcurrido, es necesario precisar que el
            inicio de los hechos se dieron en el marco de un gobierno
            democrático surgido de elecciones libres, el cual, al igual que la
            sociedad de la época, se vieron sorprendidos ante los embates de una
            situación ajena a los hábitos de convivencia, como lo demuestran
            estas publicaciones.
          </p>
        </article>

        <div className="w-full mt-16 border-y-4 border-primary py-8 group">
          <div className="flex flex-col items-center relative">
            {/* <span className="absolute -top-11 left-1/2 -translate-x-1/2 bg-background px-4 text-[10px] font-black uppercase tracking-widest text-primary">
              Titular del día
            </span> */}
            <p className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none text-center">
              RECOPILACIÓN HISTÓRICA
            </p>
            <p
              className={`${newsreaderItalic.className} text-xl md:text-3xl mt-4 text-muted-foreground`}
            >
              Más de 230 acciones terroristas documentadas (1963 - 1976)
            </p>
          </div>
        </div>

        {/* <footer className="mt-16 w-full flex justify-center">
          <div className="max-w-2xl text-center relative px-12">
            <span className="absolute top-0 left-0 text-6xl text-primary/20 font-serif leading-none">
              &ldquo;
            </span>
            <p
              className={`${newsreaderItalic.className} text-xl md:text-2xl text-foreground leading-snug`}
            >
              El inicio de los hechos se dio en el marco de un gobierno
              democrático surgido de elecciones libres, sorprendiendo a la
              sociedad ante una situación ajena a los hábitos de convivencia.
            </p>
            <span className="absolute bottom-0 right-0 text-6xl text-primary/20 font-serif leading-none rotate-180">
              &rdquo;
            </span>
          </div>
        </footer> */}
      </div>
    </section>
  );
}
