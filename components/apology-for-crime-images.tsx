import { ApologyForCrimeInImagesDefinition } from "@/db/data";
import React from "react";
import { Image } from "lucide-react";
import SectionTitle from "./section-title";

type Props = {
  crimeImages: ApologyForCrimeInImagesDefinition[];
};

export default function ApologyForCrimeInImages({ crimeImages }: Props) {
  return (
    <div>
      {/* <h2
        className="uppercase text-3xl text-center font-extrabold text-orange-950 scroll-mt-6 flex items-center justify-center gap-2"
        id="apology"
      >
        <Image className="w-8 h-8" /> Apología del delito en imágenes
      </h2> */}

      <SectionTitle id="apology">
        <Image className="hidden lg:block w-7 h-7 2xl:w-8 2xl:h-8" />
        Apología del delito en imágenes
      </SectionTitle>

      <div className="py-8">
        {crimeImages.map((apology) => (
          <div key={apology.title}>
            <h3 className="font-bold text-center uppercase text-xl text-orange-500">
              {apology.title}
            </h3>

            <p className="text-base text-center py-4">{apology.description}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
              {apology.images.map((image) => (
                <div key={image.src}>
                  <img src={image.src} alt={image.alt} />
                  <p className="text-base py-2">{image.alt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
