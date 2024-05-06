"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HelloName from "@/components/HelloName";

import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider/Index";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      {/* <HelloName /> */}
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
