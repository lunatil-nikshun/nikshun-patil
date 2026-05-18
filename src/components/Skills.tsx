import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "HTML/CSS"],
  },
  {
    title: "CMS & Commerce",
    items: ["Shopify", "Wix", "WordPress", "WooCommerce", "Liquid", "Elementor"],
  },
  {
    title: "AI & No-Code",
    items: ["Claude AI", "ChatGPT", "Gemini", "Perplexity", "Lovable.dev", "Cursor AI", "Bubble.io"],
  },
  {
    title: "Marketing",
    items: ["Meta Ads", "Google Ads", "LinkedIn Ads", "SEO", "Analytics", "CRO"],
  },
  {
    title: "Automation & CRM",
    items: ["WATI", "Bigin CRM", "WhatsApp API", "Zapier", "n8n", "Make"],
  },
  {
    title: "Tooling",
    items: ["Git", "Figma", "Vercel", "Supabase", "REST APIs", "Cloudflare"],
  },
];

const marquee = [
  "React", "Shopify", "WordPress", "Wix", "Claude AI", "Meta Ads",
  "Automation", "Tailwind", "Framer Motion", "WATI", "Bigin CRM", "Next.js",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Skills"
          title={<>The <span className="text-gradient">toolbox</span>.</>}
          description="Battle-tested technologies and disciplines across development, marketing, AI, and automation."
        />

        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: gi * 0.07, duration: 0.5 }}
              className="glass group relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all hover:-translate-y-1"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-[var(--glow)] opacity-0 blur-3xl transition-opacity group-hover:opacity-25" />

              <div className="flex items-center justify-between">
                <h3 className="font-display text-base sm:text-lg lg:text-xl font-semibold">{g.title}</h3>
                <span className="font-mono text-[10px] text-muted-foreground">0{gi + 1}</span>
              </div>

              <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-border bg-white/[0.03] px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs text-muted-foreground transition-colors hover:border-[var(--glow)]/50 hover:text-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="relative mt-12 sm:mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-8 sm:gap-12">
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={i}
                className="font-display text-2xl sm:text-3xl lg:text-5xl font-light text-muted-foreground/40 whitespace-nowrap"
              >
                {m} <span className="text-[var(--glow)]/60">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
