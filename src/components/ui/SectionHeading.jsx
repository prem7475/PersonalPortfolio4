import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className="text-xs tracking-[0.28em] text-gold-200/80">
          {eyebrow}
        </div>
      ) : null}
      <motion.h2
        className="mt-3 font-display text-4xl leading-[1.05] tracking-wide sm:text-5xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
