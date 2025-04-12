"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaReact, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

interface Item {
  name: string;
  icon: React.ReactNode;
  color: string;
  time?: string;
}

let notifications: Item[] = [
  { name: "React Js", icon: <FaReact className="text-white" />, color: "#00C9A7" },
  { name: "MongoDB", icon: <SiMongodb className="text-white" />, color: "#FFB800" },
  { name: "MySQL", icon: <FaDatabase className="text-white" />, color: "#FF3D71" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-white" />, color: "#1E86FF" },
];

// Duplicate items to create a seamless loop effect
notifications = [...notifications, ...notifications];

const Notification = ({ name, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 hover:scale-[103%]",
        "bg-white shadow-lg dark:bg-transparent dark:backdrop-blur-md dark:border dark:border-gray-700"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            {time && <span className="mx-1">·</span>}
            {time && <span className="text-xs text-gray-500">{time}</span>}
          </figcaption>
        </div>
        <div className="flex size-10 items-center justify-center rounded-2xl" style={{ backgroundColor: color }}>
          {icon}
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-10 px-5", className)}>
      {/* Left Column - Technologies Used */}
      <div className="flex flex-col justify-center text-center md:text-left">
        <h2 className="text-4xl pl-0 sm:text-4xl sm:h-20 sm:pl-20 text-center justify-center font-extrabold bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text drop-shadow-lg">
          Technologies We Used
        </h2>
      </div>

      {/* Right Column - Infinite Animated List */}
      <div className="relative h-[500px] w-full overflow-hidden p-2">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <motion.div
          className="flex flex-col gap-4"
          animate={{ y: ["0%", "-100%"] }} // Scroll from top to bottom
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // Infinite loop
        >
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </motion.div>

        {/* Bottom Blur Effect */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      </div>
    </div>
  );
}
