"use client";
import Navbar from "@/components/Navbar";

import "@/app/globals.css";

import ServiceHero from "./components/ServiceHero";
import WhyChooseUs from "./components/whyChoose";

import ServiceFeatures from "./components/ServiceFeature";


import Footer from "../about/components/AboutFooter";
import CTABanner from "./components/BOOK";






export default function AboutPage() {
  return (
<main>
  <Navbar />

<div>
  <ServiceHero 
   title="UI/UX Design "
   description="In today's digital world, design isn't just about aesthetics—it’s about experience. We build intuitive, engaging, and high-performing UI/UX designs that enhance usability, boost conversions, and create meaningful interactions. "
   backgroundImage="/img/service/bg/ui.jpg"
   ctaText="Get a Free Consultation"
   ctaLink="/contac"
  />
</div>


<div>
  <WhyChooseUs />
</div>

<div>
<ServiceFeatures/>
</div>

<div>
  <CTABanner/>
</div>

<Footer/>

</main>
  );

}