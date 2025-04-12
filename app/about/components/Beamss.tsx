"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/app/about/components/ui/beams";
import Navbar from "@/components/Navbar";

export function Beamss() {
  return (
    <main>
      <div>
        <Navbar />
      </div>

      <motion.div
        className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-10">
          {/* Heading Section */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-left md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>

          {/* Content Section */}
          <motion.div
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-base sm:text-lg text-neutral-400 mb-2 font-bold">
              IN-TA Solutions Pvt Ltd
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-neutral-500 mb-4">
              At IN-TA Solutions, we believe technology is more than just a tool—it’s the key to unlocking success.
              Our expert team delivers custom, scalable digital solutions tailored to empower businesses and drive
              innovation. From cloud solutions to software development, we transform challenges into opportunities.
            </p>
          </motion.div>
        </div>

        <BackgroundBeams />
      </motion.div>
    </main>
  );
}
