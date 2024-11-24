import React from 'react'
import { FloatingDock } from './ui/floating-dock'
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconHome,
  IconNewSection,
} from "@tabler/icons-react";
import { FaPaintbrush } from "react-icons/fa6";
import { GiLipstick } from "react-icons/gi";
import { GiMirrorMirror } from "react-icons/gi";

const Navbar = () => {
    const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/",
        },
    
        {
          title: "Projects",
          icon: (
            <FaPaintbrush className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/projects",
        },
        {
          title: "LinkedIn",
          icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.instagram.com/hairandmakeupbyanjali/",
        },
        {
          title: "Instagram",
          icon: (
            <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.instagram.com/hairandmakeupbyanjali/",
        },
        {
          title: "About Me",
          icon: (
            <GiMirrorMirror className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/about",
        },
      ];
  return (
    <div className="z-50 fixed bottom-4 w-full md:right-4 md:w-auto md:translate-x-0">
    <FloatingDock
      desktopClassName="mx-auto md:bottom-4"
      mobileClassName="fixed bottom-4 right-4"
      items={links}
    />
  </div>
  )
}

export default Navbar
