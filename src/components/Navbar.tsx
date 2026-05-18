import { useEffect, useState, useCallback } from "react";
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNavClick = useCallback((href: string) => {
    setOpen(false);
    setActiveSection(href);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2.5 sm:py-3" : "py-4 sm:py-5"}`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-5 transition-all duration-500 ${
            scrolled
              ? "glass rounded-full px-4 sm:px-6 py-2 sm:py-2.5 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.5)]"
              : ""
          }`}
          style={{ width: scrolled ? "min(64rem, calc(100% - 1.5rem))" : undefined }}
        >
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2 font-display text-base sm:text-lg font-bold shrink-0">
            <span className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)] to-[var(--glow-soft)] text-primary-foreground shadow-[0_0_30px_-5px_var(--glow)] text-sm font-bold">
              NP
            </span>
            <span className="hidden sm:inline">
              Nikshun<span className="text-gradient">Patil</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => handleNavClick(l.href)}
                className={`rounded-full px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm transition-colors ${
                  activeSection === l.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-soft)] px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-primary-foreground shadow-[0_0_30px_-5px_var(--glow)] transition-transform hover:scale-105 md:inline-block"
            >
              Hire Me
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden glass grid h-9 w-9 place-items-center rounded-full touch-manipulation"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden flex flex-col"
          >
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border">
              <a href="#hero" onClick={() => setOpen(false)} className="flex items-center gap-2 font-display font-bold">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)] to-[var(--glow-soft)] text-primary-foreground text-sm font-bold">
                  NP
                </span>
                <span>Nikshun<span className="text-gradient">Patil</span></span>
              </a>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="glass grid h-9 w-9 place-items-center rounded-full touch-manipulation"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile nav links */}
            <nav className="flex flex-col gap-1 p-4 sm:p-6 flex-1 overflow-y-auto">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => handleNavClick(l.href)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="flex items-center justify-between border-b border-border py-4 sm:py-5 font-display text-xl sm:text-2xl touch-manipulation active:text-[var(--glow)] transition-colors"
                >
                  <span>{l.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </motion.a>
              ))}
            </nav>

            {/* Mobile menu footer CTA */}
            <div className="p-4 sm:p-6 border-t border-border">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-soft)] px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-5px_var(--glow)]"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
