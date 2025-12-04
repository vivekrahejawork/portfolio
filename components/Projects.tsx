"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/**
 * Projects/Experience Section - Apple-style cards with parallax and animations
 * Features:
 * - Large image cards for each company
 * - Enhanced parallax effect on scroll (logo and content move independently)
 * - Hover elevation animations
 * - Staggered entrance animations
 * - Scroll progress bar
 */

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo: string;
  index: number;
}

// Custom parallax hook for creating depth
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ExperienceCard({
  company,
  role,
  period,
  description,
  logo,
  index,
}: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Enhanced parallax effect for the card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create subtle parallax effect on content only (logo stays stable)
  const contentY = useParallax(scrollYProgress, -40);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
      >
        {/* Horizontal layout - Logo left, Content right with parallax */}
        <div className="flex flex-col md:flex-row">
          {/* Logo/Image area - Left side (stable, no parallax) */}
          <div className="relative w-full md:w-48 h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0 overflow-hidden">
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              className="object-cover"
            />
          </div>

          {/* Content - Right side with parallax */}
          <motion.div style={{ y: contentY }} className="p-6 md:p-8 flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
              {role}
            </h3>
            <p className="text-sm text-gray-500 mb-3 font-medium">{period}</p>

            <ul className="space-y-2">
              {description.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-600 leading-relaxed flex items-start"
                >
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);

  // Scroll progress for the entire experience section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animation for progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const experiences = [
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

  return (
    <section
      ref={containerRef}
      id="experience"
      className="py-32 px-6 bg-gray-50 relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-20 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} {...exp} index={index} />
          ))}
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-gray-200 rounded-full overflow-hidden z-50"
        style={{ opacity: scrollYProgress }}
      >
        <motion.div
          className="h-full bg-gray-900 origin-left rounded-full"
          style={{ scaleX }}
        />
      </motion.div>
    </section>
  );
}
