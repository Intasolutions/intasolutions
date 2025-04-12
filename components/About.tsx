"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Link from 'next/link';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Hsparkles } from "./Hsparkels";
import MagicButton from "./ui/MagicButton";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    // GSAP animation for main content
    gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
          onEnter: () => setKey((prev) => prev + 1),
        },
      }
    );

    // GSAP animation for button
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { autoAlpha: 0, y: 30, scale: 0.85 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          duration: 0.8,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-20 py-16 sm:py-20 -mt-10 max-w-screen-xl mx-auto"
    >
      <Hsparkles />

      <div className="w-full max-w-4xl">
        <TextGenerateEffect
          key={key}
          className="capitalize text-[14px] sm:text-[20px] md:text-[22px] lg:text-[20px] leading-relaxed sm:leading-loose"
          words="At IN-TA Solutions, we believe technology is more than just a tool—it’s the key to unlocking success.
              Our expert team delivers custom, scalable digital solutions tailored to empower businesses and drive
              innovation. From cloud solutions to software development, we transform challenges into opportunities."
        />
      </div>

      <div ref={buttonRef} className="mt-8 sm:mt-10">
      <Link href="/about">
     
          <MagicButton
            title="Read More"
            position="center"
            // Optional: add other props as needed
          />
       
      </Link>
    </div>
    </div>
  );
};

export default About;
