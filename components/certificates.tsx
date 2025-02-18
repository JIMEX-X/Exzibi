"use client";

import React from "react";
import { certificateLink } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Certification from "./certificate";

const Certifications = () => {
  const { ref } = useSectionInView("Certifications", 0.5);
  return (
    <section id="Certifications" ref={ref}>
      <SectionHeading>Featured Certificates</SectionHeading>
      <div className="">
        {certificateLink.map((project, index) => (
          <React.Fragment key={index}>
            <Certification url={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
