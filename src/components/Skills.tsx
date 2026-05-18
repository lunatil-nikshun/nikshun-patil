import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const groups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"] },
  { title: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Supabase", "REST", "GraphQL"] },
  { title: "Commerce & CMS", items: ["Shopify", "Wix", "WordPress", "WooCommerce", "Liquid", "Headless"] },
  { title: "AI & Automation", items: ["OpenAI", "LangChain", "n8n", "Zapier", "Make", "Cursor"] },
  { title: "Marketing", items: ["SEO", "Google Ads", "Meta Ads", "Analytics", "CRO", "Email"] },
  { title: "Tooling", items: ["Git", "Docker", "Figma", "Vercel", "Cloudflare", "AWS"] },
];

const marquee = ["React", "TypeScript", "Shopify", "WordPress", "AI", "Automation", "Tailwind", "Framer Motion", "GSAP", "Node.js", "Next.js", "Supabase"];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Skills" title={<>The <span className="text-gradient">toolbox</span>.</>}
          description="Battle-tested technologies and disciplines used across hundreds of shipped projects." />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: gi * 0.07 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1">
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--glow)] opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                <span className="font-mono text-[10px] text-muted-foreground">0{gi + 1}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-[var(--glow)]/50 hover:text-foreground">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-12">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="font-display text-3xl font-light text-muted-foreground/40 sm:text-5xl">{m} <span className="text-[var(--glow)]/60">✦</span></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
