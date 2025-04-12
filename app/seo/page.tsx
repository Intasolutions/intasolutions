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
   title="Search Engine Optimization"
   description="Supercharge your website with our SEO services—skyrocketing rankings, boosting traffic, and captivating users, all in one go! "
   backgroundImage="/img/service/bg/seo.jpg"
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

<div>
  <CTABanner/>
</div>

<Footer/>

</main>
  );

}