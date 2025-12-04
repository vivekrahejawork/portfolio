"use client";

import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * RippleButton - Button wrapper with ripple hover effect
 * Features:
 * - Smooth ripple animation on hover
 * - Apple-inspired interaction
 * - Customizable styling
 */

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "nav" | "cta";
}

export default function RippleButton({
  children,
  onClick,
  className = "",
  variant = "nav",
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples([newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  const baseClasses =
    variant === "nav"
      ? "relative overflow-hidden text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium px-4 py-2 rounded-lg"
      : "relative overflow-hidden bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg";

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {/* Ripple effect */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`absolute rounded-full pointer-events-none ${
              variant === "nav" ? "bg-gray-200" : "bg-white"
            }`}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: "100px",
              height: "100px",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
