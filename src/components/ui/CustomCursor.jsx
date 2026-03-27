import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const variants = {
  default: { outer: 34, inner: 6, ring: "rgba(255,255,255,0.28)" },
  hover: { outer: 52, inner: 8, ring: "rgba(200,168,90,0.55)" },
};

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState("default");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const left = useSpring(x, { stiffness: 700, damping: 55, mass: 0.18 });
  const top = useSpring(y, { stiffness: 700, damping: 55, mass: 0.18 });

  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    const sync = () => setEnabled(Boolean(mql.matches));
    sync();

    mql.addEventListener?.("change", sync);
    return () => mql.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  useEffect(() => {
    if (!enabled) return;

    const shouldHover = (el) =>
      Boolean(
        el?.closest?.("a, button, [data-cursor='hover'], [data-cursor-hover]"),
      );

    const onOver = (e) => {
      if (shouldHover(e.target)) setMode("hover");
    };

    const onOut = (e) => {
      if (shouldHover(e.relatedTarget)) return;
      setMode("default");
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [enabled]);

  const v = useMemo(() => variants[mode] ?? variants.default, [mode]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[90] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ left, top }}
        animate={{
          width: v.outer,
          height: v.outer,
          borderColor: v.ring,
          boxShadow:
            mode === "hover"
              ? "0 0 0 1px rgba(200,168,90,.35), 0 0 60px rgba(200,168,90,.18)"
              : "0 0 0 1px rgba(255,255,255,.12), 0 0 40px rgba(255,255,255,.06)",
          opacity: 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      <motion.div
        className="pointer-events-none fixed z-[91] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ left, top }}
        animate={{
          width: v.inner,
          height: v.inner,
          backgroundColor:
            mode === "hover" ? "rgba(233,216,166,.95)" : "rgba(255,255,255,.9)",
          opacity: 0.95,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}
