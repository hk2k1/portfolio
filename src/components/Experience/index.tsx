"use client";

import React from "react";
import SectionHeading from "../SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/providers/theme-context";
import { useInView } from "react-intersection-observer";
import TimelineElement from "./TimelineElement";

export default function Experience() {
  const { theme } = useTheme();
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 w-full">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline
        lineColor={theme === "light" ? "#9ca3af" : "rgba(255, 255, 255, 0.15)"}
      >
        {experiencesData.map((experience, index) => {
          return (
            <TimelineElement
              key={index}
              experience={experience}
              theme={theme}
            />
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
