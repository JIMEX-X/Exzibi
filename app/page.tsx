import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center flex-col">
      <Hero />
      {/* <Intro /> */}
    </main>
  );
}
