// app/page.tsx
"use client";

import Grid from "@/components/Grid";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const Services = dynamic(() => import("@/components/Services"));
const BackgroundBeams = dynamic(() =>
  import("@/components/collisionbg").then((mod) => mod.BackgroundBeams)
);
const Footer = dynamic(() => import("@/components/Footer"));
const BEams = dynamic(() =>
  import("./seo/components/BEams").then((mod) => mod.BEams)
);


export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex justify-center items-center min-h-screen">
        <Hero />
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center relative z-20">
        <div className="w-full max-w-7xl p-4 sm:p-10">
          <About />
        </div>
      </section>

 <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
          Why Choose Us
        </h1>
        <Grid />
      </section>
      {/* Services Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl relative z-10 p-4 sm:p-6">
          <Services />
        </div>
      </section>

  

     

      {/* AI Integration Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="py-10 text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
          AI Integration
        </h1>
        <BEams />
      </section>

      {/* Background Beams */}
      <section className="min-h-full flex items-center justify-center">
        <BackgroundBeams />
      </section>

      {/* Footer */}
      <section className="relative z-20">
        <Footer />
      </section>
    </main>
  );
}
