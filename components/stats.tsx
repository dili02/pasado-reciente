"use client";

import React from "react";
import CountUp from "react-countup";

export default function Stats() {
  return (
    // <div className="col-span-2 self-center p-4 mt-8 lg:mt-8 border border-primary text-[#f40] rounded-lg transition duration-500 ease-in-out hover:-translate-y-1 bg-orange-100">
    <div className="col-span-2 self-center p-4 rounded transition duration-500 ease-in-out hover:-translate-y-1 bg-orange-50">
      <div className="flex justify-center flex-col text-center lg:flex-row items-center gap-8">
        <p className="font-semibold text-orange-500 text-xl md:text-2xl lg:text-xl xl:text-2xl">
          RECOPILACIÓN DE ALREDEDOR DE
        </p>
        <CountUp
          end={200}
          duration={2}
          delay={1}
          className="font-extrabold text-5xl text-orange-500"
        />

        {/* TODO: get years automatically */}
        <p className="font-semibold text-orange-500 text-xl md:text-2xl lg:text-xl xl:text-2xl">
          ACCIONES TERRORISTAS DESDE 1963 A 1976
        </p>
      </div>
    </div>
  );
}
