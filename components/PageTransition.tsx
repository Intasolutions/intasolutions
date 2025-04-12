// components/PageTransitionWrapper.tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, [pathname]);

  return <div ref={containerRef}>{children}</div>;
}
