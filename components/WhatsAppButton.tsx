"use client";

import React, { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";

const WhatsAppButton = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.8,
      }
    );
  }, []);

  return (
    <div ref={wrapperRef} className="flex justify-center mt-4">
      <a
        href="https://wa.me/918129686484" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <span className="font-medium text-white">Chat with us</span>
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
