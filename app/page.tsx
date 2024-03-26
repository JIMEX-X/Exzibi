import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/section-divider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex pt-24 items-center flex-col">
      <Hero />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <About/>
      <SectionDivider/>
      <Contact />
    </main>
  );
}