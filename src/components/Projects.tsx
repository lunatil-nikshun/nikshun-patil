import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Adsnex",
    tag: "AI · Ad Intelligence",
    desc: "AI-powered advertising intelligence platform. Contributed frontend & partial backend development using Claude AI assistance.",
    tone: "from-violet-500/30 to-purple-700/30",
    year: "2024",
    href: "https://adsnex.io",
    live: true,
  },
  {
    title: "Shopify Storefronts",
    tag: "E-Commerce · Shopify",
    desc: "Custom Shopify themes and headless storefronts for clients — optimized for conversions, speed, and mobile UX.",
    tone: "from-cyan-500/30 to-blue-600/30",
    year: "2024",
    href: "#",
    live: false,
  },
  {
    title: "WhatsApp Automation",
    tag: "Automation · WATI",
    desc: "End-to-end WhatsApp business automation flows via WATI — lead capture, follow-ups, and CRM sync with Bigin CRM.",
    tone: "from-emerald-500/30 to-teal-600/30",
    year: "2024",
    href: "#",
    live: false,
  },
  {
    title: "WordPress & Wix Sites",
    tag: "WordPress · Wix · CMS",
    desc: "Custom themes, plugins, and performance-optimized Wix/WordPress builds for businesses across multiple industries.",
    tone: "from-amber-500/30 to-orange-600/30",
    year: "2023–24",
    href: "#",
    live: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Selected Work"
          title={<>Recent <span className="text-gradient">projects</span>.</>}
          description="A snapshot of client work and personal builds — measured by outcomes."
        />

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target={p.live ? "_blank" : undefined}
              rel={p.live ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="glass group relative block overflow-hidden rounded-2xl sm:rounded-3xl p-1.5 transition-all hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_var(--glow)] touch-manipulation"
            >
              {/* Project visual */}
              <div className={`relative aspect-[16/10] overflow-hidden rounded-[18px] sm:rounded-[22px] bg-gradient-to-br ${p.tone}`}>
                <div className="absolute inset-0 bg-grid opacity-30" />

                {/* Live badge */}
                {p.live && (
                  <div className="absolute left-4 top-4 glass flex items-center gap-1.5 rounded-full px-3 py-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="font-mono text-[10px] text-foreground/80">Live</span>
                  </div>
                )}

                <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/90 mix-blend-overlay leading-tight">
                    {p.title}
                  </div>
                </div>

                <div className="absolute right-3 sm:right-4 top-3 sm:top-4 glass grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-full transition-transform group-hover:rotate-45">
                  {p.live ? <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                </div>
              </div>

              {/* Project meta */}
              <div className="flex items-start justify-between gap-3 p-3 sm:p-5">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[var(--glow)]">
                    {p.tag}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-snug">{p.desc}</p>
                </div>
                <span className="font-mono text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">
                  {p.year}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Portfolio link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 text-center"
        >
          <a
            href="https://nikshun-patil.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View full portfolio →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
