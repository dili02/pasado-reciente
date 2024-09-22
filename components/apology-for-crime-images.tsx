import { ApologyForCrimeInImagesDefinition } from "@/db/data";
import React from "react";

type Props = {
  crimeImages: ApologyForCrimeInImagesDefinition[];
};

export default function ApologyForCrimeInImages({ crimeImages }: Props) {
  return (
    <div>
      <h2 className="uppercase text-xl md:text-2xl 2xl:text-4xl text-center font-extrabold text-primary-foreground">
        Apología del delito en imágenes
      </h2>

      <div className="py-8">
        {crimeImages.map((apology) => (
          <div key={apology.title}>
            <h3 className="font-bold text-center text-xl md:text-3xl text-primary-foreground uppercase">
              {apology.title}
            </h3>

            <p className="text-xl text-center text-muted-foreground">
              {apology.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6 text-primary-foreground">
              {apology.images.map((image) => (
                <div key={image.src}>
                  <img src={image.src} alt={image.alt} />
                  <p className="text-base xl:text-lg">{image.alt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
