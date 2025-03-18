import React from "react";

type Props = {};

export default function Intro({}: Props) {
  return (
    <section className="mb-8 lg:mb-2">
      <p className="font-bold text-orange-600 text-center mb-4 xl:text-lg">
        Bienvenidos
      </p>

      <p className="text-center xl:text-lg">
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

      <div className="my-12">
        <p className="text-4xl sm:text-5xl text-center font-extrabold bg-gradient-to-br from-orange-700 via-orange-300 to-orange-600 bg-clip-text tracking-tighter text-transparent lg:mb-0">
          RECOPILACIÓN DE ALREDEDOR DE 230 ACCIONES TERRORISTAS DESDE 1963 A
          1976
        </p>
      </div>
    </section>
  );
}
