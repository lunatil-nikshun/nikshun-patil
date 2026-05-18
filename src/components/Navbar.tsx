import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 ${scrolled ? "glass rounded-full px-6 py-2.5 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.5)]" : ""}`} style={{ width: scrolled ? "min(64rem, calc(100% - 2rem))" : undefined }}>
        <a href="#hero" className="group flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)] to-[var(--glow-soft)] text-primary-foreground shadow-[0_0_30px_-5px_var(--glow)]">JD</span>
          <span className="hidden sm:inline">Dev<span className="text-gradient">.folio</span></span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-soft)] px-5 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-5px_var(--glow)] transition-transform hover:scale-105 md:inline-block">
          Hire Me
        </a>
        <button onClick={() => setOpen(true)} className="md:hidden" aria-label="Open menu"><Menu className="h-6 w-6" /></button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden">
            <div className="flex items-center justify-between p-5">
              <span className="font-display font-bold">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu"><X className="h-6 w-6" /></button>
            </div>
            <nav className="flex flex-col gap-2 p-6">
              {links.map((l, i) => (
                <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  className="border-b border-border py-4 font-display text-2xl">
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
