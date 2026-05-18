import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on true pointer devices (not touch)
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const isInteractive = t.closest("a, button, [data-cursor], input, textarea");
      ringRef.current?.classList.toggle("scale-[2.2]", !!isInteractive);
      ringRef.current?.classList.toggle("opacity-60", !!isInteractive);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px,${my - 4}px,0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 20}px,${ry - 20}px,0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-[var(--glow)] mix-blend-screen will-change-transform"
        style={{ boxShadow: "0 0 12px var(--glow), 0 0 24px var(--glow)" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[99] h-10 w-10 rounded-full border border-[color:var(--glow)]/40 opacity-40 transition-[transform,opacity,scale] duration-300 ease-out mix-blend-screen will-change-transform"
      />
    </>
  );
}
