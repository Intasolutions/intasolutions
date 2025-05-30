"use client";
import Navbar from "@/components/Navbar";

import "@/app/globals.css";
import { motion } from "framer-motion";
import ServiceHero from "./components/ServiceHero";
import WhyChooseUs from "./components/whyChoose";

import ServiceFeatures from "./components/ServiceFeature";


import { BEams } from "./components/BEams";
import Footer from "../about/components/AboutFooter";
import CTABanner from "./components/BOOK";






export default function AboutPage() {
  return (
<main className="overflow-x-hidden">
  <Navbar />

<div>
  <ServiceHero 
   title="Mobile App Development "
   description="Mobile App Development is the process of creating high-performance apps for Android and iOS, enhancing user engagement, efficiency, and business growth."
   backgroundImage="/img/service/bg/mobile.jpg"
   ctaText="Get a Free Consultation"
   ctaLink="/contact"
  />
</div>


<div>
  <WhyChooseUs />
</div>

<div>
<ServiceFeatures/>
</div>
<div className="flex flex-col items-center justify-center text-center mt-10">
  <motion.h1
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="py-5 text-6xl font-extrabold bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text drop-shadow-lg"
  >
    AI Integration
  </motion.h1>
  <BEams />
</div>

<div>
  <CTABanner/>
</div>

<Footer/>

</main>
  );

}