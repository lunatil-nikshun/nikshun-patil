import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { Code2, Rocket, Brain, Bot } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Shipped" },
  { value: "6+", label: "Years Experience" },
  { value: "40+", label: "Happy Clients" },
  { value: "12", label: "Industries Served" },
];

const facets = [
  { Icon: Code2, label: "Full Stack" },
  { Icon: Rocket, label: "Marketing" },
  { Icon: Brain, label: "AI-Assisted" },
  { Icon: Bot, label: "Automation" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="About" title={<>A craftsman of <span className="text-gradient">code & growth</span>.</>}
          description="I help founders and brands turn ambitious ideas into measurable digital products — engineered with care and marketed with intent." />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="glass relative aspect-square overflow-hidden rounded-3xl p-1">
            <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[var(--glow)]/20 via-card to-[var(--glow-soft)]/20">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-48 w-48 place-items-center rounded-full bg-gradient-to-br from-[var(--glow)] to-[var(--glow-soft)] font-display text-7xl font-bold text-primary-foreground shadow-[0_0_80px_-10px_var(--glow)] animate-float">
                  JD
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4">
                <p className="font-mono text-xs text-muted-foreground">// currently_building</p>
                <p className="mt-1 text-sm">An AI agent platform for e-commerce growth.</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I've spent the last <span className="text-foreground">six years</span> at the intersection of engineering and marketing — shipping
              full-stack apps, scaling Shopify and WordPress storefronts, and weaving AI agents into the workflows that move businesses forward.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My obsession is precision. Every pixel earns its place. Every line of code earns its load time.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {facets.map((f) => (
                <div key={f.label} className="glass group flex flex-col items-center gap-2 rounded-2xl p-4 transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_var(--glow)]">
                  <f.Icon className="h-5 w-5 text-[var(--glow)] transition-transform group-hover:scale-110" />
                  <span className="text-xs text-muted-foreground">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
