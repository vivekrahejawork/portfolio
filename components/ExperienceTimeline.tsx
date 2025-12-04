"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

/**
 * ExperienceTimeline - GSAP scroll-triggered timeline slideshow
 * Features:
 * - Pins section while scrolling through experiences
 * - Auto-advances through timeline based on scroll position
 * - Smooth transitions between cards
 * - Progress indicator
 */

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo: string;
}

export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const experiences: Experience[] = [
    {
      company: "HappyRobot",
      role: "Software Engineer (Growth)",
      period: "February 2025 - August 2025",
      logo: "/logos/happyrobot.jpeg",
      description: [
        "Built and deployed RAG-based voice AI agents for $1B+ logistics and supply chain customers, enabling natural language queries over SOPs via vector search and S3-backed processing.",
        "Scaled company ARR from $1M to $7M as core IC (24th employee) in 4 months, delivering AI use cases to 10+ Fortune 500 enterprise customers leading up to Series B ($XXm).",
        "Led technical discovery for enterprise prospects by running custom demos, adapting architecture diagrams for each use case, and identifying blockers during evaluation.",
      ],
    },
    {
      company: "Scale AI",
      role: "QA Engineer",
      period: "September 2024 - February 2025",
      logo: "/logos/scale.jpeg",
      description: [
        "Solved 50+ numerical methods and machine learning problems, providing high-quality labeled solutions that improved LLM accuracy by 20%.",
        "Designed and tested 100+ math-focused coding prompts and test cases, reducing code error rates by 15% and enhancing model performance in applications such as ChatGPT.",
      ],
    },
    {
      company: "Whatnot",
      role: "Growth Strategy Associate",
      period: "August 2023 - September 2024",
      logo: "/logos/whatnot.jpeg",
      description: [
        "Drove $7M in revenue by activating 10,000+ new sellers and championing a community-focused growth strategy, differentiating the platform in a crowded marketplace.",
        "Conducted A/B testing on outreach strategies to potential new sellers, leveraging Python (Pandas, SciPy) and SQL to find trends in engagement data, optimizing for higher engagement and increasing response rates by 23%.",
      ],
    },
    {
      company: "Cher Real Estate",
      role: "Software Engineer Intern",
      period: "January 2023 - August 2023",
      logo: "/logos/cher.jpeg",
      description: [
        "Boosted cherahome.com website visits by 487% in 4 months by leading development with HTML, CSS, JavaScript, PHP, and Python. Conducted usability testing, user interviews, and SEO improvements.",
        "Individually developed an AI-powered chat-bot using Python, GPT4 API, and NLP that managed 5000+ chat interactions, enhancing user experience with real-time mortgage data and assistance.",
      ],
    },
    {
      company: "Trojan Marketing Group",
      role: "Account Manager & Software Engineer",
      period: "January 2022 - December 2024",
      logo: "/logos/trojan.jpeg",
      description: [
        "Enhanced client acquisition and product strategy for 4 teams by driving brand development and execution.",
        "Led an 18-person team to create a $10k marketing campaign for Dailmodo, a Y-Combinator-backed email startup with $2M+ in funding, contributing to mobile app mockup, TV ad (500k views), and UX-research.",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const totalWidth = cards.length * 100; // 100vw per card

      // Horizontal scroll animation
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => `+=${totalWidth}%`,
        },
      });
    });

    return () => ctx.revert();
  }, [experiences.length]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative h-screen overflow-hidden bg-amber-50"
    >
      <div className="absolute top-32 left-0 right-0 z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 text-center">
          Experience
        </h2>
      </div>

      <div className="flex h-full items-center">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="min-w-full h-full flex items-center justify-center px-6 md:px-20"
          >
            <div className="flex items-center gap-6 md:gap-8 max-w-5xl w-full">
              {/* Logo - Rounded and smaller */}
              <div className="relative w-40 h-40 md:w-44 md:h-44 flex-shrink-0 rounded-2xl overflow-hidden">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content Card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 flex-1 p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-500 mb-6 font-medium">
                  {exp.period}
                </p>

                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 leading-relaxed flex items-start"
                    >
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {experiences.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-stone-400 transition-all"
          />
        ))}
      </div>
    </section>
  );
}
