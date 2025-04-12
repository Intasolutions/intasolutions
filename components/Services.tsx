"use client";

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Web Development",
    description: "We build modern and responsive web applications tailored to your needs.",
    content: (
      <div className="relative w-full h-full cursor-pointer">
        <Image
          src="/img/service/web.png"
          alt="Web Development"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    )
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions with stunning UI/UX.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/img/mobile.png"
          alt="Mobile Apps"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    )
  },
  {
    title: "Cloud Services",
    description: "Reliable and scalable cloud solutions for businesses of all sizes.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/img/service/cloud1.png"
          alt="Cloud Services"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    )
  },
  {
    title: "AI Solutions",
    description: "Powerful AI-driven solutions for automation and insights.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/img/service/ai.png"
          alt="AI Solutions"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    )
  },
  {
    title: "Data Analytics & Security",
    description: "Unlock powerful insights while ensuring top-level protection.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/img/service/data.png"
          alt="Data Analytics & Security"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    )
  },
  {
    title: "UI/UX Design",
    description: "Creating visually stunning and user-friendly experiences that enhance engagement and usability.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/img/service/ui.png"
          alt="UI/UX Design"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    )
  },
  {
    title: "Digital Marketing",
    description: "Boost your brand with smart strategies, SEO, social media, and targeted campaigns to drive growth and engagement.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/img/service/digital.png"
          alt="Digital Marketing"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    )
  },
  {
    title: "SEO",
    description: "Improve your website’s ranking, attract more visitors, and grow your business with strategic optimization.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/img/service/seo.png"
          alt="SEO"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    )
  },
];

const Services = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 text-white overflow-hidden">
      {/* ✅ Services Section Heading */}
      <div className="text-center mb-12 z-10 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
        <h2 className="text-4xl md:text-5xl font-bold capitalize tracking-widem py-5 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
          Our Services
        </h2>
      </div>

      {/* 🔥 Services List */}
      <div className="relative z-10 w-full">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Services;
