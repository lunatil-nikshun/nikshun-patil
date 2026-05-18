import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!orbRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".orb-1", { x: 80, y: -60, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-2", { x: -100, y: 80, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-3", { x: 60, y: 100, duration: 12, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, orbRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-32">
      <div ref={orbRef} className="pointer-events-none absolute inset-0">
        <div className="orb-1 absolute left-[10%] top-[20%] h-80 w-80 rounded-full bg-[var(--glow)] opacity-20 blur-[120px]" />
        <div className="orb-2 absolute right-[10%] top-[30%] h-96 w-96 rounded-full bg-[var(--glow-soft)] opacity-20 blur-[140px]" />
        <div className="orb-3 absolute bottom-[10%] left-[40%] h-72 w-72 rounded-full bg-[var(--glow)] opacity-15 blur-[100px]" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--glow)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--glow)]" />
          </span>
          Available for freelance projects
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 font-display text-5xl font-bold leading-[1.05] sm:text-7xl md:text-8xl">
          Crafting <span className="text-gradient text-glow">digital</span>
          <br />
          experiences that <span className="italic font-light text-muted-foreground">scale.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Full Stack Developer · Digital Marketing Specialist · Shopify, Wix & WordPress Expert · AI-assisted Builder · Automation Architect.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-soft)] px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-5px_var(--glow)] transition-transform hover:scale-105">
            <span className="relative z-10 inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> View My Work</span>
          </a>
          <a href="#contact" className="glass rounded-full px-7 py-3 text-sm font-semibold transition-colors hover:bg-white/10">
            Let's Talk
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="mt-12 flex items-center gap-4 text-muted-foreground">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="glass grid h-11 w-11 place-items-center rounded-full transition-all hover:scale-110 hover:text-[var(--glow)]">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground">
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
