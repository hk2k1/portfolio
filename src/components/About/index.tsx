"use client";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.9);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        After graduating with a degree in
        <span className="font-medium">Eat</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p> */}
      <p className="mb-4">
        <span className="font-medium">Enthusiastic</span>{" "}
        <span className="italic mb-4">Computer Engineering graduate</span>{" "}
        <span className="font-medium">with a passion to grow and learn.</span>
      </p>
      <p className="mb-4">
        <span className="font-medium">
          Driven by curiosity, I chose my undergraduate in Computer Engineering
          to learn and explore both worlds of software and hardware.
        </span>{" "}
        <span className="font-medium">
          With the varied skills acquired throughout my work experience, I
          deepened my understanding and experience in various industries.
        </span>
      </p>
      {/* <p className="mb-2">
        <span className="font-medium">
          As an{" "}
          <span className="font-semibold">
            Embedded Systems intern at Continental Automotive
          </span>
          , I contributed to refining a project that detects driver movements
          using sensors and firmware, enhancing software performance by{" "}
          <span className="italic">40%</span>. The project received approval for
          industry-wide release.
        </span>
      </p> */}
      {/* <p className=" mb-4">
        <span className="font-medium">
          As a{" "}
          <span className="font-semibold">
            Full Stack Software Intern at MediaTek
          </span>
          , I enhanced engineering workflows by developing user-friendly
          interfaces and automation tools within a software team thats focused
          on a traditionally hardware industry.
        </span>{" "}
      </p> */}
      <p>
        <span className="font-medium">
          Eager to apply my technical skills in a dynamic environment, I am
          currently seeking a full-time position as a{" "}
        </span>{" "}
        <span className="font-bold">Software Developer</span>.
      </p>
    </motion.section>
  );
}
