"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const images = [
  "/img/img1.jpeg",
  "/img/img.jpg",
  "/img/web.jpg",
  "/img/img2.jpeg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const controls = useAnimation();

  return (
    <div className="relative w-full flex flex-col items-center p-10 px-20">
      {/* Heading */}
      <h2 className="text-white text-6xl font-bold mb-4 py-10">Gallery</h2>

      {/* Auto Sliding Row */}
      <div
        className="relative w-full overflow-hidden flex justify-center"
        onMouseEnter={() => controls.stop()} // Freeze on hover
        onMouseLeave={() => {
          setHoveredIndex(null);
          controls.start({ x: ["0%", "-100%"], transition: { repeat: Infinity, duration: 10, ease: "linear" } });
        }} // Resume sliding
      >
        <motion.div className="flex gap-4" animate={controls}>
          {[...images, ...images].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`w-[400px] h-[250px] object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
                hoveredIndex !== null && hoveredIndex !== index ? "blur-[2px] brightness-75" : ""
              }`}
              onClick={() => setSelectedImage(src)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ rotateY: 10, rotateX: 10, scale: 1.05 }} // 3D Hover Effect
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Fullscreen Image"
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          />
        </div>
      )}
    </div>
  );
}
