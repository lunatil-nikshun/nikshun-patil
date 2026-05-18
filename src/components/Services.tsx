import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { Code2, ShoppingBag, Megaphone, Bot, Wand2, LineChart } from "lucide-react";

const services = [
  { Icon: Code2, title: "Full Stack Development", desc: "Production-grade web apps in React, Next.js, and modern backends." },
  { Icon: ShoppingBag, title: "E-commerce Builds", desc: "Shopify, Wix, WooCommerce — custom themes, headless, and apps." },
  { Icon: Wand2, title: "WordPress Engineering", desc: "Bespoke themes, plugins, and performance overhauls." },
  { Icon: Bot, title: "AI Integration", desc: "Embed GPT, RAG, and intelligent agents into your product." },
  { Icon: Megaphone, title: "Digital Marketing", desc: "SEO, paid acquisition, and conversion strategy that compounds." },
  { Icon: LineChart, title: "Automation Systems", desc: "n8n, Make, and Zapier flows that replace manual work." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Services" title={<>What I <span className="text-gradient">deliver</span>.</>}
          description="Engagements scoped to your stage — whether you need an MVP, a storefront, or a growth system." />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.06 }}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_var(--glow)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--glow)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" />
              <div className="glass grid h-12 w-12 place-items-center rounded-2xl text-[var(--glow)] transition-transform group-hover:scale-110">
                <s.Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-[var(--glow)] opacity-0 transition-opacity group-hover:opacity-100">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
