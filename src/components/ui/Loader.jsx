import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setOpen(false), 1450);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-md px-10 text-center">
            <div className="absolute -inset-20 rounded-full bg-[radial-gradient(circle_at_center,rgba(200,168,90,0.22),transparent_55%)] blur-3xl" />
            <div className="relative">
              <div className="font-display text-4xl tracking-wide text-gradient-gold">
                Nishika
              </div>
              <div className="mt-2 text-sm tracking-[0.25em] text-white/60">
                FINANCE • STRATEGY • CLARITY
              </div>

              <div className="mt-8 h-px w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-px w-1/2 bg-gradient-to-r from-transparent via-gold-200 to-transparent"
                  initial={{ x: "-120%" }}
                  animate={{ x: "220%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </div>

              <motion.div
                className="mt-6 text-xs text-white/55"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Loading experience…
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
