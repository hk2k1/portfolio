import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";

export default function TimelineElement({ experience, theme }: any) {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background:
            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          borderRadius: "0.5rem",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light"
              ? "0.4rem solid #9ca3af"
              : "0.4rem solid rgba(255, 255, 255, 0.5)",
        }}
        date={experience.date}
        icon={experience.icon}
        iconStyle={{
          background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.35)",
          backdropFilter: "blur(10px)",
          fontSize: "1.5rem",
        }}
        visible={inView}
      >
        <h3 className="vertical-timeline-element-title font-semibold capitalize">
          {experience.title}
        </h3>
        <p className="vertical-timeline-element-subtitle font-normal !mt-0">
          {experience.company}
        </p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 py-2">
          {experience.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}
