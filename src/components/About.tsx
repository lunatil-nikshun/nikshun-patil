import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { Code2, Rocket, Brain, Bot, Zap, Palette } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Happy Clients" },
  { value: "8+", label: "Industries Served" },
];

const facets = [
  { Icon: Code2, label: "Full Stack" },
  { Icon: Rocket, label: "Marketing" },
  { Icon: Brain, label: "AI-Assisted" },
  { Icon: Bot, label: "Automation" },
  { Icon: Palette, label: "UI/UX" },
  { Icon: Zap, label: "E-Commerce" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="About"
          title={<>AI-powered craftsman of <span className="text-gradient">code & growth</span>.</>}
          description="I help founders and brands turn ambitious ideas into measurable digital products — engineered with precision, marketed with intent, and amplified by AI."
        />

        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass relative overflow-hidden rounded-2xl sm:rounded-3xl p-1"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-[18px] sm:rounded-[22px] bg-gradient-to-br from-[var(--glow)]/20 via-card to-[var(--glow-soft)]/20">
              <div className="absolute inset-0 bg-grid opacity-40" />
              {/* Floating orbs inside card */}
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[var(--glow)] opacity-20 blur-[80px]" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[var(--glow-soft)] opacity-20 blur-[80px]" />

              <div className="absolute inset-0 grid place-items-center">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="grid h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 place-items-center rounded-full bg-gradient-to-br from-[var(--glow)] to-[var(--glow-soft)] font-display text-5xl sm:text-6xl md:text-7xl font-bold text-primary-foreground shadow-[0_0_80px_-10px_var(--glow)]"
                >
                  NP
                </motion.div>
              </div>

              {/* Status chip */}
              <div className="absolute top-4 right-4">
                <div className="glass flex items-center gap-1.5 rounded-full px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">Available</span>
                </div>
              </div>

              {/* Bottom info card */}
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl sm:rounded-2xl p-3 sm:p-4">
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground">// currently_building</p>
                <p className="mt-1 text-xs sm:text-sm leading-snug">
                  AI-powered digital solutions for e-commerce & SaaS growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Based in <span className="text-foreground">Navi Mumbai</span>, I've spent the last{" "}
              <span className="text-foreground">3+ years</span> at the intersection of engineering,
              design, and marketing — shipping Shopify, Wix & WordPress storefronts, building
              full-stack web apps, and weaving AI agents into workflows that move businesses forward.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              My work on <span className="text-foreground">Adsnex</span> — an AI-assisted ad
              intelligence platform — reflects my ability to blend technical depth with product
              thinking. Every pixel earns its place. Every line of code earns its load time.
            </p>

            {/* Facets */}
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {facets.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="glass group flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl p-3 sm:p-4 transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_var(--glow)]"
                >
                  <f.Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--glow)] transition-transform group-hover:scale-110" />
                  <span className="text-[10px] sm:text-xs text-muted-foreground text-center leading-tight">{f.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-muted-foreground leading-snug">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
