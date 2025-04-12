"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUserCheck, FaChartLine, FaMobileAlt } from "react-icons/fa";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <FaUserCheck size={50} />,
    title: "User-Centered Approach",
    description: "Designs focused on usability, engagement, and seamless navigation.",
  },
  {
    icon: <FaChartLine size={50} />,
    title: "Data-Driven Insights",
    description: "Leverage analytics to refine strategies and boost conversions.",
  },
  {
    icon: <FaMobileAlt size={50} />,
    title: "Mobile-First Optimization",
    description: "Optimized experiences for seamless browsing on any device.",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !titleRef.current ||
      !descRef.current ||
      featureRefs.current.some((ref) => !ref) ||
      bgRefs.current.some((ref) => !ref) ||
      iconRefs.current.some((ref) => !ref)
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none none reset",
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "bounce.out",
      },
      0,
    );

    tl.fromTo(
      descRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      0.2,
    );
    featureRefs.current.forEach((feature, index) => {
      if (!feature || !bgRefs.current[index] || !iconRefs.current[index]) return;
    
      // ... (existing animation code)
    
      // Hover effects
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl.to(feature, {
        scale: 1.1,
        y: -10,
        duration: 0.3,
        ease: "power1.inOut",
      });
    
      const playHover = () => hoverTl.play();
      const reverseHover = () => hoverTl.reverse();
    
      // ✅ Add this check to satisfy TypeScript
      feature.addEventListener("mouseenter", playHover);
      feature.addEventListener("mouseleave", reverseHover);
    
      // Cleanup listeners
      return () => {
        feature.removeEventListener("mouseenter", playHover);
        feature.removeEventListener("mouseleave", reverseHover);
      };
    });
    

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-950 text-white text-center w-screen px-10"
    >
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-4xl md:text-4xl font-bold mb-8">
          Why Choose Us?
        </h2>
        <p ref={descRef} className="text-gray-400 max-w-2xl mx-auto mb-12">
          Discover the key benefits that set our SEO services apart and drive your online success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              className="relative p-8 rounded-2xl shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-600 via-purple-700 to-black-100 overflow-hidden"
            >
              {/* Animated Gradient Overlay */}
              <div
               ref={(el) => {
                featureRefs.current[index] = el;
              }}
                className="absolute inset-0 opacity-50"
              />

              <div className="relative z-10 text-white">
                <div className="flex justify-center items-center text-center w-30 h-20 rounded-full bg-gradient-to-r from-black-300 shadow-xl mb-4">
                <span
  ref={(el) => {
    iconRefs.current[index] = el;
  }}
  className="text-5xl text-white"
>
  {feature.icon}
</span>

                </div>
                <h3 className="text-2xl font-extrabold mt-4">{feature.title}</h3>
                <p className="mt-2 text-gray-200">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
