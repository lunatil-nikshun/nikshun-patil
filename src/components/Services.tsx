import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import {
  Code2, ShoppingBag, Megaphone, Bot, Wand2, LineChart, Globe, Smartphone,
} from "lucide-react";

const services = [
  {
    Icon: Code2,
    title: "Full Stack Development",
    desc: "Modern web apps built with React, Next.js, and robust backends — fast, scalable, and production-ready.",
  },
  {
    Icon: ShoppingBag,
    title: "E-Commerce Builds",
    desc: "Shopify, Wix & WooCommerce — custom themes, conversion-optimized layouts, and seamless checkout flows.",
  },
  {
    Icon: Globe,
    title: "WordPress Engineering",
    desc: "Bespoke WordPress themes, custom plugins, and performance-tuned sites for agencies and businesses.",
  },
  {
    Icon: Bot,
    title: "AI Integration & Agents",
    desc: "Embed Claude, ChatGPT, and intelligent agents into your product or workflow using modern AI tooling.",
  },
  {
    Icon: Megaphone,
    title: "Digital Marketing",
    desc: "Meta Ads, Google Ads, and LinkedIn Ads — data-driven campaigns that generate real ROI.",
  },
  {
    Icon: LineChart,
    title: "Automation Systems",
    desc: "WhatsApp automation via WATI, CRM integrations with Bigin, and no-code flows on Bubble.io.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Services"
          title={<>What I <span className="text-gradient">deliver</span>.</>}
          description="Engagements scoped to your stage — whether you need an MVP, a storefront, or a full growth system."
        />

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="glass group relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_var(--glow)]"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-[var(--glow)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

              {/* Icon */}
              <div className="glass grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl text-[var(--glow)] transition-transform group-hover:scale-110 shrink-0">
                <s.Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              <h3 className="mt-4 sm:mt-5 font-display text-lg sm:text-xl font-semibold leading-snug">
                {s.title}
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>

              <div className="mt-5 sm:mt-6 inline-flex items-center gap-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[var(--glow)] opacity-0 transition-opacity group-hover:opacity-100">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
