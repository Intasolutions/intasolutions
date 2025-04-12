import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLightbulb, FaRocket, FaHandshake } from "react-icons/fa";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const whyChooseUs = [
  {
    icon: <FaLightbulb size={50} />, 
    title: "Proven Strategies", 
    description: "We use data-driven techniques and industry insights to maximize your ROI."
  },
  {
    icon: <FaRocket size={50} />, 
    title: "Growth-Focused Approach", 
    description: "Our campaigns are designed to scale your business and boost brand awareness."
  },
  {
    icon: <FaHandshake size={50} />, 
    title: "Personalized Solutions", 
    description: "Tailored marketing strategies to fit your unique business goals."
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]); // Ensure this is an array of div elements or null
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const features = featureRefs.current;
    const backgrounds = bgRefs.current;
    const icons = iconRefs.current;

    if (
      !sectionRef.current ||
      !titleRef.current ||
      !descRef.current ||
      features.some((ref) => !ref) ||
      backgrounds.some((ref) => !ref) ||
      icons.some((ref) => !ref)
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
      0
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
      0.2
    );

    const hoverTimelines: gsap.core.Timeline[] = [];
    const enterListeners: ((this: HTMLDivElement, ev: MouseEvent) => void)[] = [];
    const leaveListeners: ((this: HTMLDivElement, ev: MouseEvent) => void)[] = [];

    features.forEach((feature, index) => {
      if (!feature || !backgrounds[index] || !icons[index]) return;

      tl.fromTo(
        feature,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        0.4 + index * 0.2
      );

      gsap.to(backgrounds[index], {
        keyframes: [
          { background: "linear-gradient(to right, #2563EB, #000000)", duration: 1 },
          { background: "linear-gradient(to right, #000000, #2563EB)", duration: 1 },
          { background: "linear-gradient(to right, #2563EB, #000000)", duration: 1 },
        ],
        ease: "sine.inOut",
        repeat: -1,
        scrollTrigger: {
          trigger: feature,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      });

      gsap.fromTo(
        icons[index],
        { scale: 1 },
        {
          scale: 1.2,
          duration: 1,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          scrollTrigger: {
            trigger: feature,
            start: "top 80%",
            toggleActions: "restart none none reset",
          },
        }
      );

      // Hover timeline
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl.to(feature, {
        scale: 1.1,
        y: -10,
        duration: 0.3,
        ease: "power1.inOut",
      });
      hoverTimelines.push(hoverTl);

      const onEnter = () => hoverTl.play();
      const onLeave = () => hoverTl.reverse();
      enterListeners.push(onEnter);
      leaveListeners.push(onLeave);

      feature.addEventListener("mouseenter", onEnter);
      feature.addEventListener("mouseleave", onLeave);
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      features.forEach((feature, index) => {
        if (!feature) return;
        feature.removeEventListener("mouseenter", enterListeners[index]);
        feature.removeEventListener("mouseleave", leaveListeners[index]);
      });

      hoverTimelines.forEach((tl) => tl.kill());
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
          {whyChooseUs.map((feature, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null): void => {
                featureRefs.current[index] = el;
              }}
              className="relative p-8 rounded-2xl shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-600 via-purple-700 to-black-100 overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <div
               ref={(el: HTMLDivElement | null): void => {
                featureRefs.current[index] = el;
              }}
                className="absolute inset-0 opacity-50"
              />

              {/* Content Wrapper */}
              <div className="relative z-10 text-white">
                <div className="flex justify-center items-center text-center w-30 h-20 rounded-full bg-gradient-to-r from-black-300 shadow-xl mb-4">
                  <span className="text-5xl text-white">
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
