"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaShoppingCart, FaRocket, FaMobileAlt, FaSearch, FaCloud } from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode size={50} />,
    title: "Custom Web Development",
    description: "Tailored web solutions built to match your business needs.",
  },
  {
    icon: <FaShoppingCart size={50} />,
    title: "E-Commerce Integration",
    description: "Seamless online store setup with secure payment gateways.",
  },
  {
    icon: <FaRocket size={50} />,
    title: "High-Speed Optimization",
    description: "Fast-loading websites with optimized performance.",
  },
  {
    icon: <FaMobileAlt size={50} />,
    title: "Mobile-Responsive Design",
    description: "Ensuring a flawless experience on all devices.",
  },
  {
    icon: <FaSearch size={50} />,
    title: "SEO-Optimized Structure",
    description: "Built with SEO best practices for better rankings.",
  },
  {
    icon: <FaCloud size={50} />,
    title: "Cloud Hosting & Security",
    description: "Secure cloud-based hosting with data protection.",
  },
];

const ServiceFeatures = () => {
  return (
    <section className="py-20  text-white text-center relative overflow-hidden">
      {/* Floating Background Gradient Effect */}
      <motion.div
        className="absolute inset-0 from-blue-900 via-purple-900 to-black opacity-50"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Service Features & Deliverables
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our core services ensure your business stands out in the digital world.
        </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-xl shadow-lg backdrop-blur-xl border border-white/20 
                         transition-all duration-300 overflow-hidden flex flex-col items-center"
            >
                 <motion.div
          whileHover={{ scale: 1.3}}
          whileTap={{ scale: 0.9 }}
          className="mt-3 rounded-full  w-20 h-20"
        >
              {/* Floating Glow Effect */}
              <motion.div
                className="absolute inset-0 opacity-20 rounded-xl"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(0, 150, 255, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
                   
                    "radial-gradient(circle, rgba(150, 50, 255, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
                  ],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
              />

              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 text-white flex flex-col items-center"
              >
                
                {/* Centered Icon with Gradient */}
                <div className="flex justify-center items-center w-20 h-20 rounded-full mb-4 bg-gradient-to-r text-5xl shadow-xl">
                  <span className=" bg-clip-text bg-gradient-to-r text-white-100">
                    {feature.icon}
                  </span>
                </div>
              </motion.div>
              </motion.div>
             
              <h3 className="text-2xl font-extrabold mt-4">{feature.title}</h3>
              <p className="mt-2 text-gray-200">{feature.description}</p>
            </motion.div>
         
          ))}
        </div>
     

      </div>
    </section>
  );
};

export default ServiceFeatures;
