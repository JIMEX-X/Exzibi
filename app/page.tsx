import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/section-divider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center flex-col">
      <Hero />
      <SectionDivider/>
      <Projects />
      <SectionDivider/>
      <Contact />

    </main>
  );
}
