"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "../styles/css/app.scss";

import HelloName from "@/components/HelloName";

import animation from "../styles/css/animation.module.scss";
import Grainy from "@/components/Grainy";

export default function Home() {
  return (
    <main>
      <div className="container-main">
        <div className="wrapper-grain">
          <div className="container-grain">
            <div className="components">
              <HelloName />
            </div>
          </div>
        </div>
      </div>
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
