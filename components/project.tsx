"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="md:bg-gray-100 max-w-[42rem] border  flex flex-col border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] h-[15rem] md:hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:md:hover:bg-white/20">
        <div className="absolute w-full md:hidden -z-50">
          <Image
            src={imageUrl}
            width={200}
            height={200}
            alt="Project  I worked on"
            className="w-full brightness-50"
            quality={95}
          />
        </div>
        <div className="pt-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl mt-auto text-gray-50 md:text-gray-700 dark:text-white/70 -mb-16 sm:mb-0 font-semibold">
            {title}
          </h3>
          <p className="mt-auto line-clamp-2 sm:line-clamp-none -mb-12 sm:mb-0 leading-relaxed text-gray-50 md:text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 pb-2 mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider  text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          width={1920}
          height={1080}
          alt="Project I worked on"
          quality={95}
          className={`absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40`}
        />
      </section>
    </motion.div>
  );
}
