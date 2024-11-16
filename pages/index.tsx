"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import React from "react";

const hero = () => {
    const products = [
        {
          title: "Moonbeam",
          link: "https://gomoonbeam.com",
          thumbnail: "/images/Hero/Hero1.jpg",
        },
        {
          title: "Cursor",
          link: "https://cursor.so",
          thumbnail: "/images/Hero/Hero2.jpg",
        },
        {
          title: "Rogue",
          link: "https://userogue.com",
          thumbnail: "/images/Hero/Hero3.jpg",
        },
        {
          title: "Editorially",
          link: "https://editorially.org",
          thumbnail: "/images/Hero/Hero4.jpg",
        },
        {
          title: "Editrix AI",
          link: "https://editrix.ai",
          thumbnail: "/images/Hero/Hero5.jpeg",
        },
        {
          title: "Pixel Perfect",
          link: "https://app.pixelperfect.quest",
          thumbnail: "/images/Hero/Hero6.jpg",
        },
        {
          title: "Algochurn",
          link: "https://algochurn.com",
          thumbnail: "/images/Hero/Hero7.jpg",
        },
        {
          title: "Aceternity UI",
          link: "https://ui.aceternity.com",
          thumbnail: "/images/Hero/Hero8.jpg",
        },
        {
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail: "/images/Hero/Hero9.jpg",
        },{
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail: "/images/Hero/Hero10.jpeg",
        },{
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail: "/images/Hero/Hero11.jpg",
        },{
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail: "/images/Hero/Hero12.jpg",
        },{
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail: "/images/Hero/Hero13.jpg",
        },{
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail: "/images/Hero/Hero15.jpeg",
        },{
            title: "Tailwind Master Kit",
            link: "https://tailwindmasterkit.com",
            thumbnail: "/images/Hero/Hero14.jpg",
        }
      ];
      
    return <HeroParallax products={products} />;
}

export default hero
