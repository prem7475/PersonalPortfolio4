import { useRef } from "react";
import { cn } from "../../utils/cn";

export default function GlowCard({ className, children, ...props }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 100;
    const my = ((e.clientY - r.top) / r.height) * 100;

    el.style.setProperty("--mx", `${mx}%`);
    el.style.setProperty("--my", `${my}%`);
    el.style.setProperty("--glow", "0.9");
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--glow", "0.6");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "glow-border glass rounded-3xl border border-white/10",
        "transition-transform duration-300 will-change-transform",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
