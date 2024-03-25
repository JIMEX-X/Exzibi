"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useActiveSection } from "@/context/active-section-context";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();
  // hydration trick with useEffect
  const [ismounted, setIsMounted] = useState(false);
  const [isTablet, setIsTablet] = useState(false);


  useEffect(() => {
    // setIsTablet(window.innerWidth < 1024);
    const handleResize = () => {
      window.addEventListener("resize", () => {
        setIsTablet(window.innerWidth < 1024);
      });
    };

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [
    isTablet,
    setIsTablet,
  ]);

  useEffect(() => {
    if (!ismounted) {
      setIsMounted(true);
    }
  }, [ismounted]);

  if (!ismounted) {
    return null;
  }
  return (
    <header className="z-[999] relative w-full">
      <motion.div
        className="fixed top-0 left-1/2 h-[6.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] lg:w-[56rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.slice(
            isTablet ? 0 : undefined,
            isTablet ? 5 : undefined
          ).map((link, index) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={index}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-200 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {activeSection === link.name && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
