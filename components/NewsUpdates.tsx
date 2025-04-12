"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite";

export function InfiniteMoving() {
  return (
      <div className="h-[20rem] w-full flex flex-col items-center justify-center text-right relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="w-fulln text-left"
        />
      </div>
  );
}


  const testimonials = [
    {
      quote: "AI is transforming business operations globally.",
      name: "Tech Analyst",
      title: "AI Technology Revolutionizing the IT Industry",
    },
    {
      quote: "Cloud computing is the future of scalable solutions.",
      name: "Cloud Expert",
      title: "Cloud Computing Market Growth Expected to Surge",
    },
    {
      quote: "Cybersecurity advancements are key to protecting data.",
      name: "Security Researcher",
      title: "Cybersecurity Advancements and New Threats",
    },
    {
      quote: "5G promises to revolutionize connectivity.",
      name: "Telecom Expert",
      title: "5G Technology: The Next Big Thing for IT and Communication",
    },
  ];
  
