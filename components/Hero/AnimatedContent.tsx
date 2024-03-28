"use client";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import Image from "next/image";
import HeroCard from "../HeroCard";
import { useActiveSection } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function AnimatedContent() {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(
          ".hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow",
          { opacity: 1 }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        ".hero__heading",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.4 }
      );

      tl.fromTo(
        ".hero__body",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.6"
      );

      tl.fromTo(
        ".hero__button",
        { scale: 1.5 },
        { scale: 1, opacity: 1, duration: 1.3 },
        "-=0.8"
      );
      tl.fromTo(
        ".hero__image",
        { y: 100 },
        { y: 0, opacity: 1, duration: 1.3 },
        "+=0.3"
      );
      tl.fromTo(
        ".hero__glow",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.8 },
        "-=1"
      );
    },
    { scope: container }
  );

  const {setActiveSection,activeSection,setTimeOfLastClick} = useActiveSection()
  const { ref } = useSectionInView("Home", 0.5)

  return (
    <div id="Home" className="relative" ref={container}>
      <StarGrid />
      <h1 className="hero__heading flex flex-col items-center gap-3 text-balance text-5xl font-medium opacity-0 md:text-6xl">
        Precious Abuo
        <span className="text-sm max-w-xl md:text-xl lg:text-2xl gold">
          A skilled Project Manager, guides complex projects with a
          hands-on, collaborative approach, fostering innovation and excellence
          while ensuring stakeholder alignment and transparency.
        </span>
      </h1>

      <div className="hero__body mx-auto mt-6 max-w-md text-balance font-medium text-gray-600 dark:text-gray-300 opacity-0">
        Product Manager
      </div>

      {/* <ButtonLink className="hero__button mt-8 opacity-0" href="/about">
        Learn more
      </ButtonLink> */}

      <div ref={ref}  className="hero__image glass-container mt-16 w-full lg:w-[69rem] lg:h-96 opacity-0">
        <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 opacity-0 blur-2xl filter" />
          <HeroCard />
      </div>
    </div>
  );
}
