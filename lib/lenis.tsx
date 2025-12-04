"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

/**
 * LenisProvider - Provides smooth scrolling functionality across the entire app
 * Using Lenis library for Apple-like smooth scroll behavior
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize Lenis with smooth scroll configuration
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Request animation frame loop for smooth scrolling
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
