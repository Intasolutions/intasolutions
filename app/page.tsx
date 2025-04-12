
import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";

import Services from "@/components/Services";
import Cursor from "@/components/Coursor";

import { BackgroundBeams } from "@/components/collisionbg";
import Footer from "@/components/Footer";
import { BEams } from "./seo/components/BEams";
import { HeroParallaxDemo } from "./about/components/SecondAbout";
import { AnimatedListDemo } from "@/components/Tech";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden  ">
      <Cursor />
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

      {/* Parallax Section */}
      <section className="w-full overflow-hidden">
        <HeroParallaxDemo />
      </section>

      {/* Services Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl relative z-10 p-4 sm:p-6">
          <Services />
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-16 sm:py-20">
        <AnimatedListDemo />
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
