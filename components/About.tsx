"use client";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import image from "@/public/exi.jpg";
import SectionHeading from "./section-heading";
import Image from "next/image";
const About = () => {
  const { ref } = useSectionInView("About", 0.5);
  return (
    <motion.section
      ref={ref}
      id="About"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="w-full bg-gray-950/5 overflow-hidden rounded-md relative h-60">
        <Image
          src={image}
          alt="about"
          width={300}
          height={200}
          className=" bg-cover absolute w-full object-cover"
        ></Image>
        <div className="absolute inset-0 backdrop-blur-lg flex items-center justify-center">
          <h1 className="text-3xl font-medium capitalize text-center !z-50 text-gray-50">
            About me
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-9 about min-h-[200px] about mt-14">
        <div className="flex flex-col items-center font-medium">
          <div className="content flex flex-col text-left items-center max-w-3xl ml-auto bg-gray-950/5 h-[100%] p-9 rounded-md shadow-sm dark:bg-gray-100/5 overflow-hidden">
            <p className="">
              I am a Mechanical Engineering graduate turned Product Manager with
              a passion for sustainability and climate change advocacy. Holding
              unto my technical background and strategic expertise, I create
              customer centric products that drive business success and
              environmental impact.
            </p>

            <p className="mt-8 ">
              I am committed to community engagement and volunteering, I strive
              to empower others and promote sustainable practices.
            </p>

            <p className="mt-8 ">
              I am committed to community engagement and volunteering, I strive
              to empower others and promote sustainable practices.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
