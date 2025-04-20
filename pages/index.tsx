"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Head from "next/head";
import React from "react";

const hero = () => {
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail: "/images/Hero/Hero1-min.jpg",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/images/Hero/Hero2-min.jpg",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail: "/images/Hero/Hero3-min.jpg",
    },
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail: "/images/Hero/Hero4-min.jpg",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail: "/images/Hero/Hero5-min.jpeg",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail: "/images/Hero/Hero6-min.jpg",
    },
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail: "/images/Hero/Hero7-min.jpg",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail: "/images/Hero/Hero8-min.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: "/images/Hero/Hero9-min.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: "/images/Hero/Hero10-min.jpeg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: "/images/Hero/Hero11-min.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: "/images/Hero/Hero12-min.jpeg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: "/images/Hero/Hero13-min.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: "/images/Hero/Hero15-min.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: "/images/Hero/Hero14-min.jpg",
    },
  ];
  return <>
    <Head>
      <title>Bridal & Party Makeup | Anjali Bhutani - Best Makeup Artist</title>
      <meta name="description" content="Get professional makeup services by Anjali Bhutani. Bridal, HD, and Airbrush makeup available. Book now!" />
    </Head>
    <HeroParallax products={products} />
  </>
}

export default hero
