"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Phone } from "lucide-react";

/**
 * Contact Section - Minimal contact information with social links
 * Features:
 * - Clean centered layout
 * - Email, LinkedIn, and phone contact info
 * - Smooth fade-in animation
 * - Hover effects on links
 */
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "vivekraheja.work@gmail.com",
      href: "mailto:vivekraheja.work@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vivek-raheja",
      href: "https://www.linkedin.com/in/vivek-raheja",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "630-995-5891",
      href: "tel:+16309955891",
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-32 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's connect
          </h2>

          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities,
            projects, or just to chat.
          </p>

          <div className="space-y-8">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label === "LinkedIn" ? "_blank" : undefined}
                  rel={
                    link.label === "LinkedIn"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group flex items-center justify-center gap-4 p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
                  <div className="text-left">
                    <div className="text-sm text-gray-500 font-medium">
                      {link.label}
                    </div>
                    <div className="text-lg text-gray-900 font-semibold">
                      {link.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 text-center text-gray-500 text-sm"
      >
        <p>© {new Date().getFullYear()} Vivek Raheja. All rights reserved.</p>
      </motion.div>
    </section>
  );
}
