import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import asapApp from "@/public/asap.jpg";
import asapWeb from "@/public/asapweb.jpg";
import plito from "@/public/plito.jpg";

export const projectsData = [
  {
    title: "Asap Website",
    description:
      "A local delivery and marketplace website sought to streamline commerce, enabling users to order from local businesses conveniently.",
    tags: ["Website"],
    imageUrl: asapWeb,
  },
  {
    title: "Asap App",
    description:
      "In a world where convenience reigns supreme, ASAP embarked on a mission to transform local commerce.",
    tags: ["Google store", "App store", "App"],
    imageUrl: asapApp,
  },
  {
    title: "Plito ",
    description:
      "Empowering Freelancers: A Case Study from UI to Completion   In a rapidly evolving gig economy, the need for a seamless freelance gig and personal banking platform became evident.",
    tags: ["Google store", "App store", "App"],
    imageUrl: plito,
  },
] as const;

export const articleData = [
  'https://medium.com/@abuopearl/embracing-diversity-and-inclusion-in-engineering-management-fb5c6ec7f22a',
  'https://medium.com/@abuopearl/the-troubling-saga-of-property-mismanagement-in-nigeria-19498ecd6d6f',
  'https://medium.com/@abuopearl/adopting-sustainable-practices-in-engineering-management-for-long-term-success-fdf2ef8ccd8b',
  'https://medium.com/@abuopearl/the-evolution-of-agile-product-management-from-theory-to-practice-c007a630060a',
] as const

export const links = [
  {
    name: "Home",
    hash: "#Home",
  },
  {
    name: "Projects",
    hash: "#Projects",
  },
  {
    name: "Certifications",
    hash: "#Certifications",
  },
  {
    name: "Articles",
    hash: "#Articles",
  },
  {
    name: "About",
    hash: "#About",
  },
  {
    name: "Contact",
    hash: "#Contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Roicomsat, EA",
//     description:
//       "I graduated after 6 months of studying. I immediately got a Jnr. developer and Educator on JavaScript.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Freelancing",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Cipherplus, remote",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

// export const projectsData = [
//   {
//     title: "Birthmate chat",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can chat with each other.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: birthmirthImg,
//   },
//   {
//     title: "Naijaflix",
//     description:
//       "Movie site for searching popular, trending movies and more. I was the front-end developer. It has features like liking, watching traillers (Youtube), filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "clerk"],
//     imageUrl: naijaflixImg,
//   },
//   {
//     title: "web messenger",
//     description:
//       "A public web app for quick conversation with friends. It shows active status of a user.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: webMessengerImg,
//   },
// ] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const socialLinks = [
  {
    name: "X (Twitter)",
    url: "https://x.com/p_abuo/",
    icon: FaTwitter,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/juju__hephaestus?igsh=bnVoNmI2a3l1N3p4&utm_source=qr",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    url: "XXXXXXXXXXXXXXXXXXXXXXXXXX",
    icon: FaFacebook,
  },
  {
    name: "LinkedIn",
    url: "http://linkedin.com/in/precious-abuo-3064aa1a1",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "abuopearl@gmail.com",
    icon: FaEnvelope,
  },
] as const;

