import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";

/**
 * Main Landing Page
 * Orchestrates all sections with Apple-inspired design
 * Sections: Nav, Hero, About, Experience Timeline (GSAP), Contact
 * Features smooth scrolling via Lenis and GSAP scroll-triggered animations
 * Interactive cursor spotlight effect
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <ExperienceTimeline />
      <Contact />
    </main>
  );
}
