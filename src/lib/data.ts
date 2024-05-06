import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/corpcomment.png";
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/Word.png";
import PoptradeImg from "../../public/Poptrade.png";
import MoviestopImg from "../../public/Moviestop33.jpeg";
import DataImg from "../../public/Plotly.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     // icon: <LuGraduationCap />,
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     // icon: <CgWorkAlt />,
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     // icon: <FaReact />,
//     date: "2021 - present",
//   },
// ] as const;

export const experiencesData = [
  {
    title: "Embedded Software Intern",
    company: "Continental Automotive",
    description:
      "Engineered UART interfaces in python to execute sensor-firmware communication.",
    date: "May 2021 - Aug 2021",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Full Stack Software Developer Intern",
    company: "MediaTek",
    description:
      "Developed Internal websites and scripts to support chip design workflows.",
    date: "Apr 2023 - Dec 2023",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Graduation",
    company: "Singapore Institute of Technology",
    description:
      "Graduated from Singapore Institute of Technology with a Bachelor's degree in Computer Engineering.",
    date: "2024",
    icon: React.createElement(LuGraduationCap),
  },
] as const;

export const projectsData = [
  {
    title: "PopTrade",
    description:
      "Website developed to facilitate a web-based consumer marketplace for buying/selling products.",
    tags: ["Flask", "HTML", "CSS", "JavaScript"],
    imageUrl: PoptradeImg,
  },
  {
    title: "MovieStop Database",
    description:
      "Maintained a backend database of movies and implemented queries for users to parse through.",
    tags: ["MySQL", "MongoDB", "Datagrip"],
    imageUrl: MoviestopImg,
  },
  {
    title: "Data Analysis Program",
    description:
      "Analyzed dataset of Bus drivers to compute a safety score by programming on python. Proved a reliable theoretical case that can be used as a real-life application.",
    tags: ["Python", "Plotly", "Dash"],
    imageUrl: DataImg,
  },
  {
    title: "Transport Schedule Program",
    description:
      "Collaborated with a team to produce a scheduling system that simulates a solution for bus bunching.",
    tags: ["C++", "OOPS Concepts", "Data Structures"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "SITAtlas",
    description:
      "Developed a web-based map to address Singapore Institute of Technology's new campus challenges.",
    tags: ["NextJS", "PayloadCMS", "MongoDB", "Mapbox", "SCSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Portfolio Website",
    description:
      "A portfolio website developed using Next.js, Tailwind CSS, and Framer Motion.",
    tags: ["NextJS", "TailwindCSS", "Framer Motion"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "SCSS",
  "MongoDB",
  "MySQL",
  "REST API",
  "JSON API",
  "GraphQL",
  "Framer Motion",
  "CMS",
  "PayloadCMS",
  "Drupal",
  "Git",
  "Docker",
  "Linux",
  "Python",
  "C++",
] as const;
