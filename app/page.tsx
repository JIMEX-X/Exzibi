import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Articles from "@/components/articles";
import Certifications from "@/components/certificates";
import SectionDivider from "@/components/section-divider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex pt-24 items-center flex-col">
      <Hero />
      <SectionDivider />
      <Projects />
      {/* <SectionDivider /> */}
      {/* <Certifications/> */}
      {/* <SectionDivider />
      <Articles /> */}
      <SectionDivider />
      <About />
      <SectionDivider />
      <Contact />
    </main>
  );
}
