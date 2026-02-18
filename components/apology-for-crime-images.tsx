import { ApologyForCrimeInImagesDefinition } from "@/db/data";
import React from "react";
import { Image, ImageIcon } from "lucide-react";
import SectionTitle from "./section-title";
import { Newsreader } from "next/font/google";

type Props = {
  crimeImages: ApologyForCrimeInImagesDefinition[];
};

const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

export default function ApologyForCrimeInImages({ crimeImages }: Props) {
  return (
    <div className="">
      {/* <h2
        className="uppercase text-3xl text-center font-extrabold text-orange-950 scroll-mt-6 flex items-center justify-center gap-2"
        id="apology"
      >
        <Image className="w-8 h-8" /> Apología del delito en imágenes
      </h2> */}

      {/* <SectionTitle id="apology">
        <img className="hidden lg:block w-7 h-7 2xl:w-8 2xl:h-8" />
        Apología del delito en imágenes
      </SectionTitle> */}

      <header className="flex items-center gap-4 border-b border-foreground pb-2 mb-8">
        {/* <Image className="w-8 h-8 text-primary hidden lg:block" /> */}
        <ImageIcon className="w-8 h-8 text-primary hidden lg:block" />
        <h2
          className={`${newsreader.className} text-3xl font-black uppercase tracking-tighter`}
        >
          Apología del delito en imágenes
        </h2>
      </header>

      <div className="py-4">
        {crimeImages.map((apology) => (
          <div key={apology.title}>
            <h3 className="font-bold text-center uppercase text-xl lg:text-2xl text-black">
              {apology.title}
            </h3>

            <p className="text-base lg:text-lg text-center py-4">
              {apology.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
              {apology.images.map((image) => (
                <div key={image.src} className="bg-white">
                  <img src={image.src} alt={image.alt} />
                  <p className="text-base lg:text-lg px-4">{image.alt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
