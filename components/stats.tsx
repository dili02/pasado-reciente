"use client";

import React from "react";
import CountUp from "react-countup";
import { Icons } from "./icons";

type Props = {};

const stats = [
  {
    label: "asesinatos",
    count: 50,
    icon: <Icons.gun className="h-8 w-8 md:w-18 md:h-18 lg:h-20 lg:w-20" />,
  },
  {
    label: "atentados",
    count: 50,
    icon: (
      <Icons.timeDinamite className="h-8 w-8 md:w-18 md:h-18 lg:h-20 lg:w-20" />
    ),
  },
  {
    label: "robos",
    count: 50,
    icon: <Icons.heist className="h-8 w-8 md:w-18 md:h-18 lg:h-20 lg:w-20" />,
  },
  {
    label: "secuestros",
    count: 50,
    icon: (
      <Icons.prisoner className="h-8 w-8 md:w-18 md:h-18 lg:h-20 lg:w-20" />
    ),
  },
  {
    label: "otras acciones",
    count: 50,
    icon: <Icons.punch className="h-8 w-8 md:w-18 md:h-18 lg:h-20 lg:w-20" />,
  },
];

export default function Stats({}: Props) {
  return (
    <section className="w-full">
      <div className="p-8 bg-destructive text-red-200">
        <div className="flex flex-wrap gap-6 mx-auto max-w-[80vh] xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start text-primary"
            >
              <CountUp
                end={stat.count}
                duration={5}
                delay={1}
                className="text-red-200 text-4xl xl:text-6xl font-extrabold"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="text-red-200">{stat.icon}</p>
                {/* <p
                  className="font-bold uppercase text-red-200"
                >
                 {stat.label}
                </p>  */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
