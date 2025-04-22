"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Hsparkles } from "./Hsparkels";
import MagicButton from "./ui/MagicButton";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      // Smooth fade-in + slide-up for the main content
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power3.out", // 💎 Changed ease to make it feel natural
          duration: 1.2,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
            onEnter: () => setKey((prev) => prev + 1),
          },
        }
      );

      // Button animation
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          { autoAlpha: 0, y: 20, scale: 0.9 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: "power3.out",
            duration: 0.9,
            scrollTrigger: {
              trigger: buttonRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Sparkles gentle parallax
      if (sparklesRef.current) {
        gsap.to(sparklesRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert(); // Cleanup for gsap context
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-20 py-16 sm:py-20 -mt-10 max-w-screen-xl mx-auto overflow-hidden"
    >
      {/* ⭐ Sparkles background */}
      <div ref={sparklesRef} className="absolute inset-0 pointer-events-none z-0">
        <Hsparkles />
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl relative z-10">
        <TextGenerateEffect
          key={key}
          className="capitalize text-[14px] sm:text-[20px] md:text-[22px] lg:text-[20px] leading-relaxed sm:leading-loose"
          words="At IN-TA Solutions, we believe technology is more than just a tool—it’s the key to unlocking success.
              Our expert team delivers custom, scalable digital solutions tailored to empower businesses and drive
              innovation. From cloud solutions to software development, we transform challenges into opportunities."
        />
      </div>

      {/* Button */}
      <div ref={buttonRef} className="mt-8 sm:mt-10 relative z-10">
        <Link href="/about" passHref legacyBehavior>
          <a>
            <MagicButton title="Read More" position="center" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default About;
