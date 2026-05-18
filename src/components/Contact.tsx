import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-5xl px-5">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="glass relative overflow-hidden rounded-[2rem] p-10 sm:p-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[var(--glow)] opacity-20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[var(--glow-soft)] opacity-20 blur-[120px]" />
          <div className="absolute inset-0 bg-grid opacity-20" />

          <div className="relative text-center">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-[var(--glow)]" /> Let's collaborate
            </div>
            <h2 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-7xl">
              Have a <span className="text-gradient text-glow">vision</span>?
              <br />Let's build it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              I take on a handful of projects each quarter. Tell me what you're building — I'll reply within 24 hours.
            </p>

            <a href="mailto:hello@yourdomain.com" className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-soft)] px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_50px_-5px_var(--glow)] transition-transform hover:scale-105">
              <Mail className="h-4 w-4" /> hello@yourdomain.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--glow)]" /> Remote · Worldwide</span>
              <div className="flex items-center gap-3">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="glass grid h-10 w-10 place-items-center rounded-full transition-colors hover:text-[var(--glow)]"><Icon className="h-4 w-4" /></a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Dev.folio — Crafted with obsession.</p>
          <p className="font-mono">v.1.0 · built with React + Framer Motion + GSAP</p>
        </footer>
      </div>
    </section>
  );
}
