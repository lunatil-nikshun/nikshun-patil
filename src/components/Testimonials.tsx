import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { Quote } from "lucide-react";

/**
 * IMPORTANT FOR NIKSHUN:
 * Replace these placeholder testimonials with real ones from actual clients.
 * You can collect them via LinkedIn recommendations or direct messages.
 * Until then, you may prefer to hide this section or replace with a "Kind Words" section.
 */
const items = [
  {
    quote: "Nikshun delivered a complete Shopify store that was clean, fast, and exactly what our brand needed. The attention to detail was exceptional.",
    name: "Client A",
    role: "E-Commerce Founder",
    initials: "CA",
  },
  {
    quote: "He built our WhatsApp automation flow in record time. The WATI integration with our CRM now saves our team hours every single day.",
    name: "Client B",
    role: "Operations Manager",
    initials: "CB",
  },
  {
    quote: "The Meta Ads campaigns he ran were well-structured and data-driven. We saw a clear improvement in lead quality within the first month.",
    name: "Client C",
    role: "Marketing Head",
    initials: "CC",
  },
  {
    quote: "A rare combo of technical skill and marketing understanding. He rebuilt our Shopify site and it's been the best investment we've made.",
    name: "Client D",
    role: "Business Owner",
    initials: "CD",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Testimonials"
          title={<>Trusted by <span className="text-gradient">clients</span>.</>}
          description="A few words from the people I've worked alongside."
        />

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
          {items.map((t, i) => (
            <motion.div
              key={t.initials + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8"
            >
              <Quote className="absolute right-4 sm:right-6 top-4 sm:top-6 h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[var(--glow)]/12" />

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-foreground/90 pr-6">
                "{t.quote}"
              </p>

              <div className="mt-5 sm:mt-6 flex items-center gap-3">
                <div className="grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-full bg-gradient-to-br from-[var(--glow)] to-[var(--glow-soft)] font-display text-sm font-bold text-primary-foreground shrink-0">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-semibold truncate">{t.name}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground truncate">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
