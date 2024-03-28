"use client"

import React from "react";
import { articleData } from "@/lib/data"
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/hooks";
import Article from "./article";

const Articles = () => {
    const { ref } = useSectionInView("Articles", 0.5)
  return (
    <section id="Articles" ref={ref}>
        <SectionHeading>Articles</SectionHeading>
        <div className="">
            {
                articleData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Article url={project} />
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}

export default Articles