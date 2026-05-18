import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { Quote } from "lucide-react";

const items = [
  { quote: "Single-handedly took our Shopify store from idea to seven figures in eight months. The polish is unmatched.", name: "Amelia Chen", role: "Founder, North Atelier" },
  { quote: "A rare hybrid — engineer with the brain of a marketer. Everything he ships is calibrated for outcomes.", name: "David Okafor", role: "CMO, Loopwave" },
  { quote: "We rebuilt our entire platform with him. Faster, cleaner, and finally something our team is proud to demo.", name: "Sara Lindqvist", role: "CTO, Pendulum AI" },
  { quote: "Automations he built save us 30+ hours every week. The ROI was visible in the first month.", name: "Marcus Reed", role: "Ops Lead, Verdant Co" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Testimonials" title={<>Trusted by <span className="text-gradient">founders</span>.</>}
          description="A few words from the people I've shipped alongside." />

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.08 }}
              className="glass relative overflow-hidden rounded-3xl p-8">
              <Quote className="absolute right-6 top-6 h-12 w-12 text-[var(--glow)]/15" />
              <p className="text-lg leading-relaxed text-foreground/90">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[var(--glow)] to-[var(--glow-soft)] font-display font-bold text-primary-foreground">
                  {t.name.split(" ").map(w => w[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
