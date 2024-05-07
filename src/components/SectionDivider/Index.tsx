"use client";
import { motion } from "framer-motion";
import React from "react";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-200 my-24 h-40 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    ></motion.div>
  );
}
