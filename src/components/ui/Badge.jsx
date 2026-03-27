import { cn } from "../../utils/cn";

export default function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70",
        className,
      )}
    >
      {children}
    </span>
  );
}
