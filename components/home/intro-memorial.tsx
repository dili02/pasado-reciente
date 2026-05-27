"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { Skeleton } from "../skeletons";
import { Button } from "@/components/ui/button";

// Define a safe type for actions coming from the server
type SafeAction = {
  date: string | Date;
  title: string;
  slug: string;
  type: string;
};

type Props = {
  actions: SafeAction[] | any[];
};

export default function IntroMemorial({ actions = [] }: Props) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const data = useMemo(() => {
    if (!actions || actions.length === 0) {
      return {
        currentMonth: "",
        initDate: null,
        endDate: null,
        displayedActions: [],
      };
    }

    try {
      const now = new Date();
      const monthFormatter = new Intl.DateTimeFormat("es-UY", {
        month: "long",
      });
      let monthName = monthFormatter.format(now).toLowerCase();
      if (monthName === "setiembre") monthName = "septiembre";

      const actionsWithDates = actions.map((a) => ({
        ...a,
        parsedDate: new Date(a.date),
      }));

      const startYear =
        actionsWithDates.length > 0
          ? actionsWithDates[0].parsedDate.getFullYear()
          : null;
      const endYear =
        actionsWithDates.length > 0
          ? actionsWithDates[
              actionsWithDates.length - 1
            ].parsedDate.getFullYear()
          : null;

      return {
        currentMonth: monthName,
        initDate: startYear,
        endDate: endYear,
        displayedActions: actionsWithDates,
      };
    } catch (e) {
      console.error("Error in IntroMemorial calculation:", e);
      return {
        currentMonth: "",
        initDate: null,
        endDate: null,
        displayedActions: [],
      };
    }
  }, [actions]);

  // If not mounted, ALWAYS show something fast - but let's try to avoid the skeleton if it hangs
  if (!hasMounted) {
    return <IntroMemeorialSkeleton />;
  }

  if (data.displayedActions.length === 0) {
    return (
      <article className="flex flex-col bg-background border border-border/50 p-8 rounded-sm h-full justify-center">
        <div className="flex flex-col items-center text-center">
          <AlertTriangle className="w-12 h-12 text-muted-foreground/30 mb-4" />
          <h3 className="font-[family-name:var(--font-newsreader)] text-xl font-bold uppercase mb-2">
            Sin Registros este mes
          </h3>
          <p className="text-sm text-muted-foreground italic mb-6">
            No se han encontrado acciones documentadas para este mes. Te
            invitamos a explorar el archivo completo.
          </p>
          <Link
            href="/efemerides"
            className="inline-flex items-center gap-4 border-2 border-foreground hover:bg-foreground hover:text-background transition-all px-8 py-3 rounded-sm font-black uppercase tracking-widest text-xs"
          >
            <span>ir a efemérides</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col bg-background animate-in fade-in duration-700">
      <header className="mb-6 border-b-4 border-foreground pb-2 flex justify-between items-end">
        <h2 className="font-[family-name:var(--font-newsreader)] text-2xl text-primary uppercase tracking-tighter font-bold">
          Memorial del mes de {data.currentMonth}
        </h2>
      </header>

      <figure className="mb-8 relative group">
        <div className="overflow-hidden bg-black grayscale group-hover:grayscale-0 transition-all duration-1000 flex items-center justify-center border border-border shadow-sm min-h-[300px]">
          <img
            src={`/efemerides/${data.currentMonth}.png`}
            key={data.currentMonth}
            className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
            alt={`memorial de ${data.currentMonth}`}
            loading="lazy"
            decoding="async"
            onLoad={(e) => {
              (e.target as HTMLImageElement).parentElement?.classList.remove(
                "animate-pulse",
              );
            }}
          />
        </div>
        <figcaption className="font-[family-name:var(--font-newsreader)] mt-4 text-sm text-muted-foreground border-l-2 border-primary pl-4 italic">
          <p className="text-xs lg:text-[12px] font-black uppercase tracking-widest italic opacity-60">
            Acciones terroristas llevadas a cabo por los movimientos subversivos
            durante el período {data.initDate} — {data.endDate}
          </p>
        </figcaption>
      </figure>

      <div className="mt-auto">
        <Button
          asChild
          variant="outline"
          className="border-2 border-foreground hover:bg-foreground hover:text-background font-black uppercase tracking-widest text-sm"
        >
          <Link
            href="/efemerides"
            className="inline-flex items-center gap-4 px-8 py-4"
          >
            <span>ir a efemérides</span>
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </article>
  );
}

export function IntroMemeorialSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <header className="border-b-4 border-foreground pb-2 flex justify-between items-end">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-3 w-20 mb-1" />
      </header>

      <div className="flex justify-between border-b border-border py-4 mb-4">
        <Skeleton className="h-3 w-40" />
        <Skeleton className="h-3 w-32" />
      </div>

      <div className="space-y-4">
        <Skeleton className="w-full h-[400px] rounded-sm" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>

      <div className="mt-8">
        <Skeleton className="h-12 w-48 rounded-sm" />
      </div>
    </div>
  );
}
