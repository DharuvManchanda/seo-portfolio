import React from 'react'
import { FloatingDock } from './ui/floating-dock'
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { LinkPreview } from "@/components/ui/link-preview";
import { motion } from "framer-motion";

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
            <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/projects",
        },
        {
          title: "About Me",
          icon: (
            <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "/about",
        },
        {
          title: "LinkedIn",
          icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://github.com/",
        },
        {
          title: "Instagram",
          icon: (
            <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
      ];
  return (
<div className="z-50 bottom-24 absolute right-1 transform -translate-x-1/2">
  <FloatingDock 
    mobileClassName="translate-y-20" // only for demo, remove for production
    items={links}
  />
</div>

  )
}

export default Navbar
