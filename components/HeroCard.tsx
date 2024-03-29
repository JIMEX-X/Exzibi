import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import { BiMapPin } from "react-icons/bi";
import { Button } from "./ui/button";
import { LuHardDriveDownload } from "react-icons/lu";
import ButtonLink from "./ButtonLink";
import { Separator } from "./ui/separator";
import { PiEnvelopeOpen, PiSignatureBold } from "react-icons/pi";
import { TiDocumentDelete } from "react-icons/ti";
import { links, socialLinks } from "@/lib/data";
import Link from "next/link";
import StarGrid from "./StarGrid";
import { useActiveSection } from "@/context/active-section-context";

type Props = {};

const HeroCard = (props: Props) => {
    const {setActiveSection,setTimeOfLastClick} = useActiveSection()
  return (
    <div className="w-full h-full">
      <Card className="pt-4 relative w-full h-full dark:bg-gray-900 bg-gray-50">
        {/* <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader> */}
        <div className="absolute">
            <StarGrid />
        </div>
        <CardContent className="w-full h-full">
          <div className="flex w-full h-full flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col justify-between w-full h-full items-center ">
                <Image
                  src={"/exi.jpg"}
                  alt="user"
                  width={200}
                  height={200}
                  className="rounded-full h-40 w-40 object-cover "
                />

              <div className="flex gap-3 items-center flex-col mt-3">
                <h1 className="font-bold">Precious Abuo</h1>
                <p className="flex items-center gap-2 font-medium text-foreground opacity-80">
                  <MapPin size={20} /> NIGERIA
                </p>

                <div className="flex justify-between flex-col sm:flex-row text-center items-center gap-3">
                  <Link href={"#Contact"} onClick={() => {
                    setActiveSection("Contact")
                    setTimeOfLastClick(Date.now())
                  }} className="bg-gray-900  text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105  transition">
                    Contact
                  </Link>
                  <a
                    className=" bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/CV.pdf"
                    download
                  >
                    Download CV&nbsp;
                    <LuHardDriveDownload className="opacity-60 group-hover:translate-y-1 transition" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full flex-col items-center border rounded-md p-2">
              <div className="flex gap-3 w-full h-full justify-between items-center flex-col mt-3">
                <h1 className="font-bold border-b w-full pb-2 text-left">
                  Hire Precious
                </h1>
                <p className="flex border-b w-full pb-2  items-center gap-2 font-medium text-foreground opacity-80">
                  <PiSignatureBold size={20} /> Full Time Job{" "}
                  <ChevronRight className="ml-auto" />
                </p>
                <p className="flex border-b w-full pb-2  items-center gap-2 font-medium text-foreground opacity-80">
                  <TiDocumentDelete size={20} /> Freelancer/Project{" "}
                  <ChevronRight className="ml-auto" />
                </p>
                {socialLinks.slice(3).map((link, index) => {
                  const Icon = link.icon;
                  const isMail = link.name === "Email";
                  return (
                    <Link
                      target="_blank"
                      href={
                        isMail
                          ? `mailto:${link.url}`
                          : link.url
                      }
                      className="flex group border-b w-full pb-2  items-center gap-2 font-medium text-foreground opacity-80"
                      key={index}
                    >
                      <Icon size={20} /> <span className="group-hover:text-blue-500"> {link.name}</span>{" "}
                      <ChevronRight className="ml-auto group-hover:opacity-100 opacity-50 text-blue-600" />
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex w-full h-full  flex-col items-center border rounded-md p-2">
              <div className="flex gap-3 w-full h-full justify-between items-center flex-col mt-3">
                <h1 className="font-bold border-b w-full pb-2 text-left">
                  Social links
                </h1>
                {socialLinks.slice(0, 3).map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      href={link.url}
                      className="flex group border-b w-full pb-2  items-center gap-2 font-medium text-foreground opacity-80"
                      key={index}
                    >
                      <Icon size={20} /> <span className="group-hover:text-blue-500">{link.name}</span>{" "}
                      <ChevronRight className="ml-auto group-hover:opacity-100 opacity-50 text-blue-600" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default HeroCard;
