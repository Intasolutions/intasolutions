"use client";
import React from "react";
import { HeroParallax } from "@/app/about/components/ui/parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "",
    link: "#",
    thumbnail: "/img/5.jpg",
  },
  {
    title: "Expert Team",
    link: "#",
    thumbnail: "/img/whychoose/team.jpg",
  },
  {
    title: "Custom Solutions",
    link: "#",
    thumbnail: "/img/whychoose/solutions.jpg",
  },
  {
    title: "Editorially",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Tursted By Govt & Bussiness",
    link: "#",
    thumbnail: "/img/whychoose/ex.png",
  },
  {
    title: "Affordable Price",
    link: "#",
    thumbnail: "/img/whychoose/price.jpg",
  },
  {
    title: "24/7 Support",
    link: "#",
    thumbnail: "/img/whychoose/101.jpg",
  },
  {
    title: "Secure & Reliable",
    link: "#",
    thumbnail: "/img/whychoose/11.jpg",
  },
  {
    title: "SmartBridge",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
];

