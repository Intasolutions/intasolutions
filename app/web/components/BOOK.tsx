"use client";

import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";

const CTABanner = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-10 px-6 rounded-xl shadow-lg overflow-hidden text-center">
        {/* Floating Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 blur-3xl"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto py-5">
          <motion.h2
            className="text-4xl font-extrabold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Take Your Business to the Next Level 🚀
          </motion.h2>

          <p className="text-lg text-gray-200 mb-6">
            Get a customized web solution tailored to your business needs. Contact us today!
          </p>
        </div>
        <WhatsAppButton />
      </section>

      {/* WhatsApp Floating Button (always on screen) */}
      
    </>
  );
};

export default CTABanner;
