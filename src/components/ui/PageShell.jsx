import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function PageShell({ className, children }) {
  return (
    <motion.main
      className={cn("min-h-screen", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
