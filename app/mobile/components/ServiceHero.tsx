"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MagicButton from "@/components/ui/MagicButton";

interface HeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const ServiceHero: React.FC<HeroProps> = ({
  title,
  description,
  backgroundImage,
 

}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full h-screen md:h-screen flex items-center justify-center text-center text-white overflow-hidden pt-40"
    >
      {/* Background with 3D Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>


      {/* Animated Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 max-w-3xl px-6 h-full"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-1xl drop-shadow-md">{description}</p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-3"
        >
     <Link href="https://wa.me/918129686484" target="_blank" rel="noopener noreferrer">
           <MagicButton title="Free Consultation" position="center"/>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceHero;
