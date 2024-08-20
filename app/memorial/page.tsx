import React from "react";

type Props = {};

export default function page({}: Props) {
  const month = new Intl.DateTimeFormat("es-ES", { month: "long" });

  return (
    <div>
      <h1 className="text-4xl font-medium tracking-wide uppercase md:text-6xl text-center py-4">
        memorial del mes de{" "}
        <time dateTime={month.format(new Date())} className="uppercase">
          {month.format(new Date())}
        </time>
      </h1>

      <h3 className="text-muted-foreground text-center font-bold text-2xl md:text-3xl">
        Acciones terroristas llevadas a cabo por los movimientos subversivos
        durante el período 1965-1972.
      </h3>
    </div>
  );
}
