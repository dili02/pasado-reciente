"use client";

import React from "react";
import { TitleSkeleton } from "./skeletons";
import { Loader2 } from "lucide-react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

function getCurrentMonth() {
  const montFormatter = new Intl.DateTimeFormat("es-UY", { month: "long" });

  return montFormatter.format(new Date());
}

export default function TitlePageClient({ children }: Props) {
  const [currentMonth, setCurrentMonth] = React.useState<string>("");
  const [dateTime, setDateTime] = React.useState<string>("");

  React.useEffect(() => {
    const now = new Date();
    setDateTime(now.toLocaleString());

    const monthFormatter = new Intl.DateTimeFormat("es-UY", { month: "long" });
    const getCurrentMonth = monthFormatter.format(new Date()).toLowerCase();
    setCurrentMonth(getCurrentMonth);
  }, []);

  return (
    <>
      {!currentMonth ? (
        <div className="flex items-center justify-center h-screen">
          <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
        </div>
      ) : (
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter uppercase text-orange-900 text-center underline">
          {children} {currentMonth}
        </h1>
      )}
    </>
  );
}
