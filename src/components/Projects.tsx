import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Nimbus Commerce", tag: "Shopify · Headless", desc: "Headless storefront with a 0.8s LCP and 38% conversion lift.", tone: "from-cyan-500/30 to-blue-600/30", year: "2025" },
  { title: "Atelier AI", tag: "SaaS · AI", desc: "GPT-powered content studio for boutique marketing agencies.", tone: "from-fuchsia-500/30 to-purple-600/30", year: "2025" },
  { title: "Orbit Analytics", tag: "Dashboard · React", desc: "Realtime KPI cockpit unifying ads, CRM, and store metrics.", tone: "from-emerald-500/30 to-teal-600/30", year: "2024" },
  { title: "Luma WP Theme", tag: "WordPress · Editorial", desc: "Award-shortlisted theme used by 12k+ publishers globally.", tone: "from-amber-500/30 to-orange-600/30", year: "2024" },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Selected Work" title={<>Recent <span className="text-gradient">projects</span>.</>}
          description="A small slice — measured by outcomes, not pixel count." />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a key={p.title} href="#" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.08 }}
              className="glass group relative block overflow-hidden rounded-3xl p-1.5 transition-all hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_var(--glow)]">
              <div className={`relative aspect-[16/10] overflow-hidden rounded-[22px] bg-gradient-to-br ${p.tone}`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-noise opacity-[0.04]" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="font-display text-5xl font-bold tracking-tight text-white/90 mix-blend-overlay sm:text-6xl">{p.title}</div>
                </div>
                <div className="absolute right-4 top-4 glass grid h-11 w-11 place-items-center rounded-full transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--glow)]">{p.tag}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
