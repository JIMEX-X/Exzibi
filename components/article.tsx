"use client";

import { useEffect, useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
//@ts-expect-error
import MetaTags from "react-meta-tags";
//@ts-expect-error
import { Helmet } from "react-helmet";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type Props = {
  url: string;
};

type LinkMetadata = {
  author: string;
  title: string;
  publisher: string;
  image: {
    url: string;
    type: string;
    // Add more properties if needed
  };
  date: string;
  description: string;
  url: string;
  logo: {
    url: string;
    type: string;
    size: number;
    height: number;
    width: number;
    size_pretty: string;
    // Add more properties if needed
  };
};

export default function Article({ url }: Props) {
  const [metadata, setMetadata] = useState<LinkMetadata | null>(null);

  
  const fetchMetaData = async () => {
    try {
      const response = await fetch(`https://api.microlink.io/?url=${url}`);
      const data = await response.json();
      setMetadata(data.data);
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMetaData();
  }, [url, fetchMetaData]);
  let newDate = null;
  if (metadata) {
    const date = metadata.date;
    newDate = new Date(date);
  }

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
      <section className="md:bg-gray-100 max-w-[42rem] border  flex items-center border-black/5 rounded-lg overflow-hidden sm:pr-8 pl-3 relative sm:h-[20rem] h-[19rem] md:hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:md:hover:bg-white/20">
        {metadata && (
          <div className="w-full h-full">
            <div className="flex items-center w-full h-full">
              <div className="flex flex-col">
                <h2 className="font-bold mb-1  leading-6 tracking-wide">
                  {metadata.title}
                </h2>
                <Separator />
                <div className="flex mt-3 gap-3 items-center">
                  <span className="text-xs font-medium tracking-tighter">
                    @{metadata.author}
                  </span>
                  <small className="text-xs">|</small>
                  <span className="text-xs font-medium tracking-tighter">
                    {newDate?.toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-6 font-normal">{metadata.description}</p>
                <div className="flex items-center gap-3 mt-3">
                  <Link
                    href={metadata.url}
                    target="_blank"
                    className="flex gap-2 items-center "
                  >
                    <Image
                      src={metadata?.logo?.url || '/placeholder.jpg'}
                      alt="Publisher"
                      height={24}
                      width={24}
                      className=""
                    />
                    <span>{metadata.publisher}</span>
                  </Link>
                  <Link href={url} target="_blank" className="hover:text-blue-500 transition-all duration-200 flex items-center text-foreground"> Read More<ExternalLink size={10}/></Link>
                </div>
              </div>
              <Image
                width={200}
                height={350}
                src={metadata?.image?.url || '/placeholder.jpg'}
                alt="Link Preview"
                className="rounded h-48 hidden sm:block object-cover"
              />
              {/* Display more metadata information if needed */}
            </div>
          </div>
        )}
      </section>
    </motion.div>
  );
}
