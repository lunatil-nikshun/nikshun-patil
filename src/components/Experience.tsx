import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const items = [
  {
    year: "2024 — Present",
    role: "AI-Powered Full Stack Developer",
    org: "Freelance / Independent Studio",
    text: "Building bespoke web apps, Shopify & Wix storefronts, and AI-assisted workflows for startups and SMBs across India and globally. Contributed frontend & partial backend to Adsnex — an AI ad intelligence platform.",
    tags: ["Shopify", "Wix", "AI Agents", "React"],
  },
  {
    year: "2023 — 2024",
    role: "Digital Solutions Specialist",
    org: "Freelance Clients",
    text: "Delivered end-to-end digital projects including WordPress sites, Meta & Google Ads campaigns, landing pages, and WhatsApp automation workflows via WATI. Managed CRM integrations with Bigin CRM.",
    tags: ["WordPress", "Meta Ads", "WATI", "CRM"],
  },
  {
    year: "2022 — 2023",
    role: "Frontend Developer & Marketing Associate",
    org: "Early Career / Internships",
    text: "Gained hands-on experience in frontend development, e-commerce store setup, and digital marketing strategy. Worked with platforms including Shopify, WordPress, and various no-code/low-code tools.",
    tags: ["HTML/CSS", "JavaScript", "SEO", "E-commerce"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Experience"
          title={<>A <span className="text-gradient">timeline</span> of work.</>}
          description="From early frontend roles to AI-assisted full stack development — the throughline is craft and outcomes."
        />

        <div className="relative">
          {/* Vertical line — left on mobile, center on md+ */}
          <div className="absolute left-4 sm:left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={it.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className={`relative flex flex-col gap-4 pl-10 sm:pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-10 lg:gap-16 ${
                  i % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Left column: year + role */}
                <div className={`${i % 2 ? "md:text-left md:pl-6" : "md:text-right md:pr-6"}`}>
                  <p className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[var(--glow)]">
                    {it.year}
                  </p>
                  <h3 className="mt-1.5 sm:mt-2 font-display text-lg sm:text-xl lg:text-2xl font-semibold leading-snug">
                    {it.role}
                  </h3>
                  <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground">{it.org}</p>
                </div>

                {/* Right column: description + tags */}
                <div className={`${i % 2 ? "md:pr-6" : "md:pl-6"}`}>
                  <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{it.text}</p>
                    <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
                      {it.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-5 top-1.5 -translate-x-1/2 md:left-1/2">
                  <div className="grid h-4 w-4 place-items-center rounded-full bg-background ring-1 ring-border">
                    <div className="h-1.5 w-1.5 rounded-full bg-[var(--glow)] shadow-[0_0_10px_var(--glow)]" />
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
