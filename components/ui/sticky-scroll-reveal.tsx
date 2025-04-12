"use client";

import React, { useEffect, useMemo, useState,useRef } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Utility function for class merging

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / (cardLength - 0.5));
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });
  const linearGradients = useMemo(
    () => [
      "linear-gradient(to bottom right, #06b6d4, #10b981)",
      "linear-gradient(to bottom right, #ec4899, #6366f1)",
      "linear-gradient(to bottom right, #f97316, #eab308)",
    ],
    [] // Empty dependency array ensures it's only created once
  );

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      className="relative flex h-[20rem] justify-center space-x-10 overflow-y-auto no-scrollbar rounded-md "
      ref={ref}
    >
      {/* LEFT SIDE - PREMIUM SMOOTH SCROLLING CONTENT */}
      <div className="relative flex items-start px-10">
        <div className="max-w-2xl">
          {content.map((item, index) => {
            const isActive = activeCard === index;

            return (
              <motion.div
                key={item.title + index}
                className="my-32" // Reduced space for smoother flow
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isActive ? 1 : 0.4, // Inactive items are more visible
                  y: isActive ? 0 : 10, // Subtle movement instead of jumping
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                exit={{ opacity: 0, y: 10 }}
              >
                <motion.h2
                  className="text-3xl font-bold text-slate-100"
                  animate={{ scale: isActive ? 1.1 : 1 }} // Slight zoom for the active title
                >
                  {item.title}
                </motion.h2>

                <motion.p className="text-lg mt-4 max-w-sm text-slate-300">{item.description}</motion.p>
              </motion.div>
            );
          })}
          <div className="h-[10vh]" />
        </div>
      </div>

      {/* RIGHT SIDE - STICKY IMAGE WITH 3D EFFECT */}
   {/* RIGHT SIDE - STICKY IMAGE WITH 3D EFFECT */}
<div
  className={cn(
    "sticky top-0 self-start h-[350px] w-[25rem] overflow-hidden rounded-xl shadow-2xl p-5 hidden lg:block",
    contentClassName
  )}
>
  {/* Background Gradient */}
  <motion.div
    key={`background-${activeCard}`}
    className="absolute inset-0 z-0 rounded-xl blur-3xl opacity-50"
    initial={{ opacity: 0 }}
    animate={{
      opacity: 0.7,
      transition: { duration: 0.3 },
    }}
    style={{ background: backgroundGradient }}
  />

  {/* Animated Image/Content with Next-Level Transition */}
  <AnimatePresence mode="wait">
    <motion.div
      key={`image-${activeCard}`}
      className="relative z-10 flex items-center justify-center h-full w-full px-0"
      initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: { duration: 0.5, type: "spring", stiffness: 120, damping: 15 },
      }}
      exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
    >
      <motion.div className="relative h-[300px] w-[350px] rounded-md overflow-hidden shadow-2xl flex items-center justify-center">
        {content[activeCard]?.content ?? (
          <div className="flex items-center justify-center h-full w-full text-white">
            No content available.
          </div>
        )}
      </motion.div>
    </motion.div>
  </AnimatePresence>
</div>

    </motion.div>
  );
};
