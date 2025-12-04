"use client";

import { motion } from "framer-motion";
import RippleButton from "@/components/RippleButton";
import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * Hero Section - Apple-inspired split layout hero
 * Features:
 * - Split layout: Photo on left, name on right
 * - Typing animation for name
 * - Subtle gradient background
 * - Smooth fade-in animations
 * - CTA button for contact
 */
export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Vivek Raheja";
  const typingSpeed = 120; // milliseconds per character

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Radial gradient background - Apple style */}
      <div className="absolute inset-0 bg-gradient-radial from-white/50 via-amber-50/30 to-stone-200/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/vivek-photo.jpeg"
                alt="Vivek Raheja"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right side - Name and CTA */}
          <div className="flex flex-col justify-center items-center">
            {/* Animated headline with typing effect */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4"
            >
              {displayedText}
              <span className="cursor-blink">|</span>
            </motion.h1>

            {/* Animated subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-600 mb-8 text-center"
            >
              Software Engineer
            </motion.p>

            {/* CTA Button with animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <RippleButton onClick={scrollToContact} variant="cta">
                Get in touch
              </RippleButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
