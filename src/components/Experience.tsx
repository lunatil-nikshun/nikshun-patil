import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const items = [
  { year: "2024 — Now", role: "Independent Full Stack Developer", org: "Freelance / Studio", text: "Building bespoke SaaS, AI agents, and high-converting storefronts for global clients." },
  { year: "2022 — 2024", role: "Senior Engineer & Growth Lead", org: "Northwind Digital", text: "Led a cross-functional pod of devs and marketers, scaled 9 e-commerce brands past $1M ARR." },
  { year: "2020 — 2022", role: "Shopify & WordPress Specialist", org: "Helix Agency", text: "Delivered 60+ custom themes and headless integrations, mentored a team of 5." },
  { year: "2018 — 2020", role: "Frontend Developer", org: "Bluebird Labs", text: "Shipped product interfaces in React and built the company's first design system." },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionTitle eyebrow="Experience" title={<>A <span className="text-gradient">timeline</span> of work.</>}
          description="From early frontend roles to leading product and growth — the throughline is craft." />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2" />
          <div className="space-y-12">
            {items.map((it, i) => (
              <motion.div key={it.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
                className={`relative flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--glow)]">{it.year}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{it.role}</h3>
                  <p className="text-sm text-muted-foreground">{it.org}</p>
                </div>
                <div className="pl-12 md:pl-0">
                  <div className="glass rounded-2xl p-5 text-sm text-muted-foreground">{it.text}</div>
                </div>
                <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2">
                  <div className="grid h-4 w-4 place-items-center rounded-full bg-background ring-1 ring-border">
                    <div className="h-2 w-2 rounded-full bg-[var(--glow)] shadow-[0_0_15px_var(--glow)]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
