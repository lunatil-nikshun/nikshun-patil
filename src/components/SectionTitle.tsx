import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 sm:mb-14 lg:mb-16 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="glass inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground"
      >
        <span className="h-1 w-1 rounded-full bg-[var(--glow)]" />
        {eyebrow}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.1 }}
        className="mt-4 sm:mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2 }}
          className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}