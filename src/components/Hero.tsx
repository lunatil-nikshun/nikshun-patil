import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const socialLinks = [
  { Icon: Github, href: "https://github.com/", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/nikshunpatil", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
];

const roles = [
  "Full Stack Developer",
  "Shopify & Wix Expert",
  "AI-Assisted Builder",
  "Digital Marketing Specialist",
];

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".orb-1", { x: 70, y: -50, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-2", { x: -80, y: 70, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-3", { x: 50, y: 80, duration: 12, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, orbRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16">
      {/* Animated orbs */}
      <div ref={orbRef} className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb-1 absolute left-[5%] sm:left-[10%] top-[15%] sm:top-[20%] h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full bg-[var(--glow)] opacity-15 sm:opacity-20 blur-[80px] sm:blur-[120px]" />
        <div className="orb-2 absolute right-[5%] sm:right-[10%] top-[25%] sm:top-[30%] h-56 w-56 sm:h-72 sm:w-72 lg:h-96 lg:w-96 rounded-full bg-[var(--glow-soft)] opacity-15 sm:opacity-20 blur-[100px] sm:blur-[140px]" />
        <div className="orb-3 absolute bottom-[5%] sm:bottom-[10%] left-[30%] sm:left-[40%] h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-[var(--glow)] opacity-10 sm:opacity-15 blur-[80px] sm:blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 sm:opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--glow)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--glow)]" />
          </span>
          Available for freelance projects
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 sm:mt-8 font-display text-4xl font-bold leading-[1.08] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafting <span className="text-gradient text-glow">digital</span>
          <br />
          experiences that{" "}
          <span className="italic font-light text-muted-foreground">scale.</span>
        </motion.h1>

        {/* Roles marquee chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          {roles.map((role, i) => (
            <span
              key={role}
              className="glass rounded-full px-3 sm:px-4 py-1 text-[11px] sm:text-xs font-mono text-muted-foreground"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed"
        >
          Based in Navi Mumbai — I build fast, beautiful digital products powered by
          AI, sharp engineering, and intent-driven marketing.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-soft)] px-6 sm:px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-5px_var(--glow)] transition-transform hover:scale-105 w-full sm:w-auto text-center"
          >
            <span className="relative z-10 inline-flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4" /> View My Work
            </span>
          </a>
          <a
            href="https://adsnex.io"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-full px-6 sm:px-7 py-3 text-sm font-semibold transition-colors hover:bg-white/10 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <ExternalLink className="h-4 w-4" /> Adsnex.io
          </a>
          <a
            href="#contact"
            className="glass rounded-full px-6 sm:px-7 py-3 text-sm font-semibold transition-colors hover:bg-white/10 w-full sm:w-auto text-center"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 sm:mt-12 flex items-center gap-3 sm:gap-4 text-muted-foreground"
        >
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="glass grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full transition-all hover:scale-110 hover:text-[var(--glow)]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 sm:mt-20 text-muted-foreground"
        >
          <ArrowDown className="h-5 w-5 animate-bounce mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
