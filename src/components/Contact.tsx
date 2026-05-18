import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight, Github, Linkedin, Twitter, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass relative overflow-hidden rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 lg:p-16"
        >
          {/* Glow orbs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 sm:h-80 sm:w-80 rounded-full bg-[var(--glow)] opacity-20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 sm:h-80 sm:w-80 rounded-full bg-[var(--glow-soft)] opacity-20 blur-[120px]" />
          <div className="absolute inset-0 bg-grid opacity-20" />

          <div className="relative text-center">
            {/* Badge */}
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-[var(--glow)]" /> Let's collaborate
            </div>

            {/* Heading */}
            <h2 className="mt-5 sm:mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl">
              Have a <span className="text-gradient text-glow">vision</span>?
              <br />Let's build it.
            </h2>

            <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-sm sm:text-base text-muted-foreground">
              I take on select projects each quarter. Tell me what you're building — I'll reply within 24 hours.
            </p>

            {/* CTA Button */}
            <a
              href="mailto:nikshunpatil3803@gmail.com"
              className="group mt-8 sm:mt-10 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-soft)] px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-primary-foreground shadow-[0_0_50px_-5px_var(--glow)] transition-transform hover:scale-105 break-all sm:break-normal"
            >
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span>nikshunpatil3803@gmail.com</span>
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:rotate-45 shrink-0" />
            </a>

            {/* Meta row */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--glow)] shrink-0" />
                Navi Mumbai, India · Remote Worldwide
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                {[
                  { Icon: Github, href: "https://github.com/lunatil-nikshun", label: "GitHub" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/nikshun-patil-5a0492250/", label: "LinkedIn" },
                  { Icon: Twitter, href: "#", label: "Twitter" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="glass grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full transition-colors hover:text-[var(--glow)]"
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-3 sm:gap-4 border-t border-border pt-6 sm:pt-8 text-[11px] sm:text-xs text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
            <p>© {new Date().getFullYear()} Nikshun Patil — Crafted with obsession.</p>
            <p className="font-mono">v1.0 · React · Framer Motion · GSAP</p>
          </div>
        </footer>
      </div>
    </section>
  );
}