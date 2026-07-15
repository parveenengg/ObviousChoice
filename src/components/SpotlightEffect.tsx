"use client";

import { useEffect, useCallback } from "react";

export default function SpotlightEffect() {
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    document.documentElement.style.setProperty("--spotlight-x", `${x}px`);
    document.documentElement.style.setProperty("--spotlight-y", `${y}px`);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        background:
          "radial-gradient(800px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(47, 106, 255, 0.18), transparent 50%)",
        transition: "background 0.3s ease",
      }}
    />
  );
}
