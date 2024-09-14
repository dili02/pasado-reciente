import { ImageDefinition } from "@/db/data";
import React from "react";

type Props = {
  virtualMemorial: ImageDefinition[];
};

export default function VirtualMemorial({ virtualMemorial }: Props) {
  return (
    <div className="py-8">
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
