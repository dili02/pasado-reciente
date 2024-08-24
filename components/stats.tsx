"use client";

import React from "react";
import CountUp from "react-countup";
import { Icons } from "./icons";

type Props = {};

const stats = [
  {
    label: "victimas asesinatos",
    count: 50,
    icon: <Icons.shot className="h-6 w-6" />,
  },
  {
    label: "atentados",
    count: 50,
    icon: <Icons.timeDinamite className="h-6 w-6" />,
  },
  {
    label: "robo dinero",
    count: 50,
    icon: <Icons.heist className="h-6 w-6" />,
  },
  {
    label: "robo armas / dinero",
    count: 50,
    icon: <Icons.gun className="h-6 w-6" />,
  },
  {
    label: "secuestros",
    count: 50,
    icon: <Icons.prisoner className="h-6 w-6" />,
  },
  {
    label: "otras acciones",
    count: 50,
    icon: <Icons.punch className="h-6 w-6" />,
  },
];

export default function Stats({}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {/* flex flex-wrap gap-6 mx-auto max-w-[80vh] xl:max-w-none text-[#007664] */}
      {stats.map((stat, index) => (
        <div
          key={index}
          // flex-1 flex gap-4 items-center justify-center xl:justify-start text-primary bg-red-400 p-6 rounded-md
          className="flex items-center justify-between p-3 border border-primary text-[#f40]  rounded-md transition duration-500 ease-in-out hover:-translate-y-1 bg-orange-100"
        >
          <div className="flex items-center gap-3 ">
            <span>{stat.icon}</span>
            <CountUp
              end={stat.count}
              duration={5}
              delay={1}
              className="font-extrabold text-2xl text-[#f40]"
            />
          </div>
          <p className="text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
