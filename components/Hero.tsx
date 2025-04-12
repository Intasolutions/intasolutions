"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const videoOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);


  

  const { ref: inViewRef, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (inView) {
        videoRef.current.play().catch((err) => console.error("Autoplay error:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView, isMuted]);

  const handleToggleSound = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted);
      videoRef.current.muted = !isMuted;
    }
  };

  const setRefs = (node: HTMLDivElement) => {
    ref.current = node;
    inViewRef(node);
  };

  return (
    <section
    ref={setRefs}
    className="relative w-full h-[100dvh] flex items-center justify-start   overflow-hidden"
  >
    {/* ✅ Responsive Video */}
    <motion.video
      ref={videoRef}
    className="absolute  w-full object-fill sm:object-cover"
      loop
      playsInline
      muted
      style={{ opacity: videoOpacity }}
      aria-hidden="true"
    >
      <source src="/videos/intaintro.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </motion.video>
  
    {/* ✅ Toggle Button */}
    <button
      onClick={handleToggleSound}
      className="absolute bottom-5 right-5 bg-white p-3 rounded-full shadow-md text-xl z-10"
      aria-label={isMuted ? "Unmute video" : "Mute video"}
    >
      {isMuted ? "🔇" : "🔊"}
    </button>
  </section>

  );
};

export default Hero;
