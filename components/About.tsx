"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * About Section - Clean bio section with scroll-triggered animations
 * Features:
 * - Centered content with ample whitespace
 * - Fade-in animation when scrolling into view
 * - Information about education and expertise
 */
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center justify-center py-32 px-6 bg-stone-50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center">
            About
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>Hey, I'm Vivek.</p>

            <p>
              I'm a{" "}
              <span className="font-semibold text-gray-900">
                full-stack developer
              </span>{" "}
              with a knack for product. I've worked at multiple YC-backed
              startups building AI agents, developer tools, and early-stage
              products. I like solving real problems with fast, simple
              solutions.
            </p>

            <p>
              I graduated with a Bachelors degree in Applied & Computational
              Math and a specialization in AI applications from the{" "}
              <span className="font-semibold text-gray-900">
                University of Southern California
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
