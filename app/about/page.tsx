"use client";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import { Beamss } from "./components/Beamss";
import { TimelineDemo } from "./components/History";
import AboutFooter from "./components/AboutFooter";

import Grid from "@/components/Grid";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-black text-neutral-900 dark:text-white overflow-x-hidden">
      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🌈 Background Beam */}
      <Beamss />

      {/* ✅ Main Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
          Why Choose Us
        </h1>
        <Grid />
      </section>

      {/* 🕰️ Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-10">
        <TimelineDemo />
      </section>

      {/* 👣 Footer */}
      <section className="mt-12">
        <AboutFooter />
      </section>
    </main>
  );
}
