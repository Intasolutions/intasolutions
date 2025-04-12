"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }} // Fades out when scrolling out
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl px-4 md:text-2xl lg:text-3xl mb-5 font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        IN-TA Solutions
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }} // Fades out when scrolling out
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
       <div className="w-full flex justify-center">
       <Highlight className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl text-center">
  {"Let's connect with us!"}
</Highlight>


</div>

      </motion.div>
    </HeroHighlight>
  );
}
