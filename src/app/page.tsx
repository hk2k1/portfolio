"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HelloName from "@/components/HelloName";
import { headers } from "next/headers";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider/Index";
import Skills from "@/components/Skills";
import { useEffect } from "react";

const UmamiTracker = () => {
  useEffect(() => {
    const trackIP = async () => {
      try {
        const response = await fetch("/api/trackip");
        const data = await response.json();
        // console.log("Visitor IP:", data.ip);

        if (window.location.hash === "##resume") {
          const payload = {
            hostname: "portfolio-harshakeerthan.vercel.app",
            language: "en-US",
            referrer: "https://harshakeerthan.com/##resume",
            screen: "1920x1080",
            title: "portfolio",
            url: "/##resume",
            website: "2ec4d13f-0c1d-4e4b-8058-47281381a801",
            name: "RESUME_REFERENCE",
            data: { ip: data.ip },
          };
          const API_KEY = process.env.UMAMI_API_KEY;

          const umamiResponse = await fetch("https://eu.umami.is/api/send", {
            mode: "no-cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + API_KEY,
            },
            body: JSON.stringify({
              type: "event",
              payload,
            }),
          });
          // if (!umamiResponse.ok) {
          //   throw new Error("Network response was not ok", error);
          // }
          // console.log("Event tracked successfully");
        }
      } catch (error) {
        console.error("Error tracking event:", error);
      }
    };

    trackIP();
  }, []);

  return null;
};

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <UmamiTracker />
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
