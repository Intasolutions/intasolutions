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
   title="Digital Marketing"
   description="Digital Marketing is the key to growing your brand online. It includes SEO, social media marketing, targeted ads, content marketing, and email campaigns to attract and engage customers. With data-driven strategies, we help businesses boost visibility, drive traffic, and increase conversions for long-term success.  "
   backgroundImage="/img/service/bg/digital.png"
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