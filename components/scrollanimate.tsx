"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const imageUrls = [
  "img/",
  "https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?ga=GA1.1.2030075610.1697991259&semt=ais_hybrid-rr-similar",
  "https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg?ga=GA1.1.2030075610.1697991259&semt=ais_hybrid-rr-similar",
  "https://img.freepik.com/premium-photo/blazing-sun-vast-savanna_1272857-120118.jpg?ga=GA1.1.2030075610.1697991259&semt=ais_hybrid-rr-similar",
  "https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?ga=GA1.1.2030075610.1697991259&semt=ais_hybrid-rr-similar",
];

const ScrollAnimation = () => {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const images = imagesRef.current.filter((img): img is HTMLDivElement => img !== null);

    images.forEach((panel, i) => {
      let scale = 1;

      if (i !== images.length - 1) {
        scale = 0.9 + 0.025 * i;
      }

      gsap.to(panel, {
        scale: scale,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: panel,
          start: "top " + (80 + 40 * i),
          end: "bottom +=650px",
          endTrigger: ".end",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-12 mx-auto max-w-2xl py-5">
      {imageUrls.map((image, index) => (
        <div
          key={index}
          ref={(el) => {
            imagesRef.current[index] = el;
          }}
          className=""
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
      <div className="end"></div>
    </div>
  );
};

export default ScrollAnimation;
