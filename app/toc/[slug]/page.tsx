// "use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { api } from "@/db/data";
import TableOfContet from "./toc";

type Props = { params: { slug: string } };

import Victim from "@/components/victim-info";
import Notice from "@/components/notice";

export async function generateStaticParams() {
  const actions = await api.getAllKidnappings();

  return actions.map((action) => ({ slug: action.slug }));
}

function getFormattedDateToString(date: Date): string {
  return new Intl.DateTimeFormat("es-UY", { dateStyle: "long" }).format(
    new Date(date)
  );
}

export default async function PageWithFixedTableOfContents({ params }: Props) {
  const action = await api.getActionBySlug(params.slug);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl text-primary-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">
        HECHO: {action.fact}
      </h1>

      <div className="lg:flex lg:gap-8">
        <div className="lg:w-3/4 text-primary-foreground">
          {action.victims?.map((victim, index) => (
            <Victim key={index} victim={victim} date={action.date} />
          ))}

          {action.newsPapers && <Notice notices={action.newsPapers} />}

          {["seccion1", "seccion2", "seccion3", "seccion4"].map((id, index) => (
            <section
              key={id}
              id={id}
              className={`mb-12 transition-all duration-500 ease-in-out `}
            >
              <h2 className="text-3xl font-bold mb-4">Sección {index + 1}</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit.
                Sed aliquam dictum sapien, id sagittis augue malesuada eu.
              </p>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </section>
          ))}
        </div>

        <TableOfContet action={action} />
      </div>
    </div>
  );
}
