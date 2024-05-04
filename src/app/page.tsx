"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "../styles/css/app.scss";

import HelloName from "@/components/HelloName";

import animation from "../styles/css/animation.module.scss";

export default function Home() {
  return (
    <main>
      <div className="container-main">
        <div className="container-grain">
          <div className="components">
            <HelloName />
          </div>
        </div>
      </div>
    </main>
  );
}
