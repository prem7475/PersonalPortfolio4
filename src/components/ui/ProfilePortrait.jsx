import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import fallbackPortrait from "../../assets/portrait.svg";
import { cn } from "../../utils/cn";

const sizeMap = {
  sm: "h-32 w-32",
  md: "h-44 w-44",
  lg: "h-60 w-60",
};

export default function ProfilePortrait({
  className,
  size = "lg",
  src = "/profile.png",
  label = "OPEN TO WORK",
}) {
  const classes = useMemo(() => sizeMap[size] ?? sizeMap.lg, [size]);
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className={cn("relative grid place-items-center", classes, className)}>
      <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(200,168,90,0.22),transparent_60%)] blur-3xl" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-200 via-gold-400 to-gold-700 opacity-80" />
      <div className="absolute inset-[2px] rounded-full bg-ink-950" />

      <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-white/5">
        <img
          src={imgSrc}
          alt="Nishika Sadane"
          className="h-full w-full object-cover"
          onError={() => setImgSrc(fallbackPortrait)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      </div>

      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-[10px] tracking-[0.26em] text-emerald-200 backdrop-blur-xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.div>
    </div>
  );
}
