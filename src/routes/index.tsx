import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dev.folio — Full Stack Developer, Marketer & AI Specialist" },
      { name: "description", content: "Premium portfolio of a Full Stack Developer, Shopify/Wix/WordPress expert, AI-assisted builder, and automation architect. Crafting digital experiences that scale." },
      { property: "og:title", content: "Dev.folio — Premium Developer Portfolio" },
      { property: "og:description", content: "Full Stack · Marketing · Shopify · Wix · WordPress · AI · Automation." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
