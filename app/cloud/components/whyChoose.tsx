"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaCloud, FaLock, FaChartLine, FaMoneyBillWave } from "react-icons/fa";
import { gsap } from "gsap"; // Import GSAP

const features = [
  {
    icon: <FaCloud size={50} />,
    title: "Reliable Infrastructure",
    description:
      "Leverage cutting-edge cloud technology to ensure 99.9% uptime, keeping your business online and accessible at all times.",
  },
  {
    icon: <FaChartLine size={50} />,
    title: "Scalability",
    description:
      "Easily scale your resources up or down to meet growing demands, whether you're launching a startup or expanding your enterprise.",
  },
  {
    icon: <FaLock size={50} />,
    title: "Data Security",
    description:
      "Benefit from advanced encryption, regular backups, and compliance with industry standards to safeguard your sensitive information against threats.",
  },
  {
    icon: <FaMoneyBillWave size={50} />,
    title: "Cost Efficiency",
    description:
      "Enjoy a pay-as-you-go pricing model that eliminates upfront costs, allowing you to optimize your IT budget effectively.",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null); // Ref for the section
  const titleRef = useRef<HTMLHeadingElement | null>(null); // Ref for the title
  const descRef = useRef<HTMLParagraphElement | null>(null); // Ref for the description
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]); // Ref array for feature cards

  useEffect(() => {
    // GSAP Animation for Section Entrance
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
    );

    // Animate Feature Cards with Stagger
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-950 text-white text-center w-screen px-10"
    >
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-4xl md:text-4xl font-bold mb-8">
          Why Choose Us?
        </h2>
        <p ref={descRef} className="text-gray-400 max-w-2xl mx-auto mb-12">
          Discover the key benefits that set us apart and drive your business forward.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="relative p-8 rounded-2xl shadow-xl transition-all duration-300 
                        bg-gradient-to-br from-indigo-600 via-purple-700 to-black-100 overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 opacity-50"
                animate={{
                  background: [
                    "linear-gradient(to right, #2563EB, #000000)",
                    "linear-gradient(to right, #000000, #2563EB)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
              />

              {/* Content Wrapper */}
              <motion.div
                whileHover={{ scale: 1.05, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 text-white"
              >
                <div className="flex justify-center items-center text-center w-30 h-20 rounded-full bg-gradient-to-r from-black-300 shadow-xl mb-4">
                  <span className="text-5xl text-white">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-extrabold mt-4">{feature.title}</h3>
                <p className="mt-2 text-gray-200">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
