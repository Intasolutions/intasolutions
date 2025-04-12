"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Hide preloader after animation
        gsap.to(preloaderRef.current, {
          duration: 0.5,
          opacity: 0,
          pointerEvents: "none",
          display: "none",
        });
      },
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      }
    )
      .to(logoRef.current, {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1,
      })
      .to(logoRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed top-0 left-0 w-full h-full bg-black-100 flex items-center justify-center z-[9999]"
    >
      <Image
        ref={logoRef}
        src="/img/in-ta.png" // Change this to your logo path
        alt="IN-TA Logo"
        width={150}
        height={150}
        className="object-contain"
      />
    </div>
  );
};

export default Preloader;
