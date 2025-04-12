// components/TransitionOverlay.tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export const TransitionOverlay = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(overlayRef.current, { scaleY: 0, transformOrigin: "bottom" });
    tl.to(overlayRef.current, {
      scaleY: 1,
      duration: 0.5,
      ease: "power1.inOut",
    });
    tl.to(overlayRef.current, {
      scaleY: 0,
      duration: 0.5,
      transformOrigin: "top",
      ease: "power1.inOut",
      delay: 0.1,
    });
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-full z-[9999] bg-black origin-bottom pointer-events-none"
    />
  );
};
