import React from "react";
import SectionHeading from "../SectionHeading";
import { skillsData } from "../../lib/data";
import { useSectionInView } from "@/lib/hooks";
import { animate, motion } from "framer-motion";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      // duration: 0.22,
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.25);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-base text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            // viewport={{ once: true }}
            custom={index} // pass index into the variant
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
