"use client";

import { motion } from "framer-motion";
import RippleButton from "@/components/RippleButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Navigation Header - Apple-inspired minimal nav bar
 * Features:
 * - Persistent sticky navigation at top of page
 * - Smooth scroll to sections with ripple effect
 * - Initial fade-in animation
 * - Clean minimal design
 */
export default function Nav() {
  const scrollToSection = (sectionId: string) => {
    // For Experience section, reset to the beginning
    if (sectionId === "experience") {
      // Kill all ScrollTriggers temporarily to reset position
      ScrollTrigger.getAll().forEach((trigger) =>
        trigger.scroll(trigger.start)
      );

      // Then scroll to the section
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-100/90 backdrop-blur-md border-b border-gray-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          {/* Nav Links - Centered with ripple effect */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <RippleButton
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                variant="nav"
              >
                {item.label}
              </RippleButton>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
