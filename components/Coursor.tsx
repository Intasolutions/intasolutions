"use client";

import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringLink, setHoveringLink] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Detect if the device uses a fine pointer (like a mouse)
    const isMouse = window.matchMedia("(pointer: fine)").matches;
    setShowCursor(isMouse);

    if (!isMouse) return;

    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkIfHoveringLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHoveringLink(target.tagName === "A");
    };

    const handleClick = () => {
      if (hoveringLink) {
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", checkIfHoveringLink);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", checkIfHoveringLink);
      window.removeEventListener("click", handleClick);
    };
  }, [hoveringLink]);

  if (!showCursor) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 ease-out
          ${
            hoveringLink
              ? "bg-white text-black text-xs font-bold scale-125 text-center"
              : "bg-white-200 mix-blend-difference"
          }
          ${clicked ? "scale-150 bg-blue-500 text-white" : ""}
        `}
      >
        {hoveringLink && "Click Me"}
      </div>
    </div>
  );
};

export default Cursor;
