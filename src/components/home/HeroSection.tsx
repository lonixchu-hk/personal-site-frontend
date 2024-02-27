"use client";

import React, { use } from "react";
import { Poppins } from "next/font/google";
import { SectionTitle } from "@/components/SectionTitle";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

interface Props {
  underMaintenance: boolean;
}

export const HeroSection = (props: Props) => {
  return (
    <section className="h-full flex flex-col items-center justify-center relative px-10 bg-[url('/main-bg.jpg')] bg-cover bg-center">
      <div className="flex flex-col justify-center items-center drop-shadow-lg xl2:px-10 z-[2]">
        <SectionTitle classname="text-5xl sm:text-5xl lg:text-8xl text-center">
          {props.underMaintenance ? `` : `LONIX CHU`}
        </SectionTitle>
        <h5 className="text-white text-center mb-4 text-xl md:text-2xl leading-6 tracking-wider">
          {props.underMaintenance
            ? `UNDER DEVELOPMENT...`
            : `SOFTWARE ENGINEER, FULL STACK DEVELOPER.`}
        </h5>
      </div>
    </section>
  );
};