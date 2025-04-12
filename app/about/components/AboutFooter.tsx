"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <footer className="w-full text-white py-6 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center md:flex-row md:items-center md:justify-between px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-0">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-2">
          <Image src="/img/in-ta.png" alt="Logo" width={50} height={50} className="object-contain" />
          <span className="text-lg font-bold">IN-TA Solutions</span>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6 text-sm">
          <Link href="/" className="hover:text-gray-400 transition-all duration-300">Home</Link>
          <Link href="/about" className="hover:text-gray-400 transition-all duration-300">About</Link>
          <Link href="/services" className="hover:text-gray-400 transition-all duration-300">Services</Link>
          <Link href="/contact" className="hover:text-gray-400 transition-all duration-300">Contact</Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          {[
            { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/share/1BvsEu4y98/" },
            { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/company/in-ta-solutions/" },
            { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/intasolutions?igsh=MTdjYTNpc3ltNnd1eg==" }
          ].map(({ name, icon: Icon, link }) => (
            <div key={name} className="relative group">
              <Link 
                href={link}
                target="_blank"
                className="flex items-center justify-center p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                onMouseEnter={() => setHovered(name)}
                onMouseLeave={() => setHovered(null)}
              >
                <Icon className="text-xl text-white group-hover:text-blue-400 transition-all duration-300" />
                {hovered === name && (
                  <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-semibold py-1 px-3 rounded-md shadow-md opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {name}
                  </span>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
