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
              I am Precious Abuo, a driven professional with a diverse
              background in mechanical engineering and a passion for the oil and
              gas industry. My journey began with a strong academic foundation
              in mechanical engineering, where I developed a keen eye for
              detail, problem-solving skills, and a deep understanding of
              technical concepts.
            </p>

            <p className="mt-8 ">
              Transitioning into the role of a product manager, I bring a unique
              blend of technical expertise and strategic thinking to the table.
              My key responsibilities revolve around defining product
              strategies, creating roadmaps, overseeing product development
              lifecycles, and collaborating effectively with cross-functional
              teams.
            </p>

            <p className="mt-8 ">
              As an oil and gas enthusiast, I am deeply interested in leveraging
              innovative technologies and sustainable practices to drive
              efficiency, safety, and environmental responsibility within the
              industry. I thrive in dynamic environments where I can apply my
              skills in project management, user experience design, and Agile
              methodologies to deliver impactful solutions.
            </p>

            <p className="mt-8 ">
              I am committed to continuous learning, staying updated on industry
              trends, and building strong relationships with stakeholders to
              achieve mutual success. I am excited about the opportunities to
              contribute meaningfully to the oil and gas sector while embracing
              new challenges and driving
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
