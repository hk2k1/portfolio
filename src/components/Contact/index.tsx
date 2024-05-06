"use client";
import React from "react";
import SectionHeading from "../SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import SubmitButton from "../SubmitButton";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      id="Contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        Please contat me directly at{" "}
        <a className="underline" href="mailto:m.harshakeerthan@gmail.com">
          m.harshakeerthan@gmail.com
        </a>{" "}
        or use the form below.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          console.log("Running on Client");
          console.log("Client Printing: ", formData.get("senderEmail"));
          console.log("Client Printing: ", formData.get("message"));

          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-90 transition-all dark:outline-none"
          type="email"
          name="senderEmail"
          required={true}
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required={true}
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
