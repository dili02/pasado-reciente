import { ImageDefinition } from "@/db/data";
import { MapPin } from "lucide-react";
import React from "react";
import SectionTitle from "./section-title";

type Props = {
  virtualMemorial: ImageDefinition[];
};

export default function VirtualMemorial({ virtualMemorial }: Props) {
  return (
    <div className="py-8">
      {/* <h2
        className="uppercase text-3xl text-center font-extrabold text-orange-950 scroll-mt-6 flex items-center justify-center gap-2"
        id="virtual-memorial"
      >
        <MapPin className="w-8 h-8" /> Memoria Virtual
      </h2> */}

      <SectionTitle id="virtual-memorial">
        <MapPin className="hidden lg:block w-7 h-7 2xl:w-8 2xl:h-8" />
        memoria Virtual
      </SectionTitle>

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
