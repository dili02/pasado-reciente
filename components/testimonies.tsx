import { VideosTerroristActionDefinition } from "@/db/data";
import { MonitorPlay } from "lucide-react";
import React from "react";
import SectionTitle from "./section-title";
import { Newsreader } from "next/font/google";

type Props = {
  videos: VideosTerroristActionDefinition[];
};

const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

export default function Testimonies({ videos }: Props) {
  return (
    <div>
      <header className="flex items-center gap-4 border-b border-foreground pb-2 mb-8">
        <MonitorPlay className="w-8 h-8 text-primary hidden lg:block" />
        <h2
          id="testimonies"
          className={`${newsreader.className} text-3xl font-black uppercase tracking-tighter`}
        >
          Relatos de familiares de víctimas del terrorismo.
        </h2>
      </header>

      {videos.map((video) => (
        <div className="rounded shadow-lg py-2" key={video.src}>
          <h3 className="font-bold text-center uppercase text-lg py-2 scroll-mt-6">
            {video.title}
          </h3>

          <iframe
            src={video.src}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-[550px]"
          ></iframe>
        </div>
      ))}
    </div>
  );
}
