import { VideosTerroristActionDefinition } from "@/db/data";
import React from "react";

type Props = {
  videos: VideosTerroristActionDefinition[];
};

export default function Testimonies({ videos }: Props) {
  return (
    <div>
      <h2
        className="uppercase text-3xl text-center font-extrabold text-orange-950"
        id="testimonies"
      >
        Relatos de familiares de víctimas del terrorismo.
      </h2>

      {videos.map((video) => (
        <div className="rounded shadow-lg py-2" key={video.src}>
          <h3 className="font-bold text-center uppercase text-xl text-orange-500 py-2">
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