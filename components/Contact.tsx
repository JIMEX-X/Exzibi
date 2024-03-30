"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import ButtonLink from "./ButtonLink";
import { MdEmail } from "react-icons/md";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {} from 'react-dom'

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [data, setData] = React.useState<any>({ input: "", textArea: "" });

  return (
    <motion.section
      id="Contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <div className="text-gray-700 flex items-center justify-center gap-2 -mt-6 dark:text-white/80">
        <div className="">
          <MdEmail size={20} />
        </div>
        <a className="underline" href="mailto:preciousabou@gmail.com">
          abuopearl@gmail.com
        </a>{" "}
      </div>

      <form
        className="mt-10 flex flex-col dark:text-black"
        //@ts-ignore
        action={async (formData: any) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          setData({input: "", textArea: ""});
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          value={data.input}
          onChange={(e) => setData({ ...data, input: e.target.value })}
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          value={data.textArea}
          onChange={(e) => setData({ ...data, textArea: e.target.value })}
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <Button className="relative inline-flex h-fit w-fit cursor-pointer rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2" type="submit">Submit</Button>
      </form>
    </motion.section>
  );
}
