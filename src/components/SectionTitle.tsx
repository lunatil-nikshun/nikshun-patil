import { motion } from "framer-motion";

export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
        className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-[var(--glow)]" /> {eyebrow}
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }}
        className="mt-5 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
        {title}
      </motion.h2>
      {description && (
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }}
          className="mt-5 text-base text-muted-foreground sm:text-lg">
          {description}
        </motion.p>
      )}
    </div>
  );
}
