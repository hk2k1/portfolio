"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
// import "../styles/css/app.scss";

import HelloName from "@/components/HelloName";

import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider/Index";

export default function Home() {
  return (
    <main className="flex flex-col items:center px-4">
      <Intro />
      <SectionDivider />
      <HelloName />
      {/* <svg viewBox="0 0 243 243">
        <filter id="noiseFilter">
          <feTurbulence
            type="franctalNoise"
            baseFrequency="2.3"
            numOctaves="1"
            result="turbulence"
          />
        </filter>
        <rect width="100%" height="100%" fill="url(#noiseFilter)" />
      </svg> */}
      {/* <Grainy /> */}
    </main>
  );
}
