import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", to: "/#about" },
  { label: "Expertise", to: "/#expertise" },
  { label: "Work", to: "/#work" },
  { label: "Journey", to: "/#journey" },
  { label: "Testimonials", to: "/#testimonials" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mt-2 sm:mt-4 flex items-center justify-between rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-xl">
            <Link to="/" className="flex items-baseline gap-2" data-cursor="hover">
              <span className="font-display text-lg sm:text-xl tracking-wide text-gradient-gold">
                Nishika
              </span>
              <span className="hidden text-xs tracking-[0.25em] text-white/45 sm:inline">
                SADANE
              </span>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "text-xs tracking-[0.22em] transition-colors",
                      isActive && location.pathname !== "/"
                        ? "text-gold"
                        : "text-white/70 hover:text-white",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/resume" className="btn-ghost" data-cursor="hover">
                Resume
              </Link>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 md:hidden">
              <Link to="/contact" className="btn-ghost text-xs sm:text-sm" data-cursor="hover">
                Contact
              </Link>

              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className="grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-lg sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
                data-cursor="hover"
              >
                <div className="relative h-4 w-5 sm:h-5 sm:w-6">
                  <motion.span
                    className="absolute left-0 top-0 h-0.5 w-5 sm:w-6 bg-white"
                    animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute left-0 top-[8px] sm:top-[9px] h-0.5 w-5 sm:w-6 bg-white"
                    animate={{ opacity: open ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute left-0 top-4 sm:top-[18px] h-0.5 w-5 sm:w-6 bg-white"
                    animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[65] bg-black/80 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-x flex min-h-screen flex-col items-center justify-center gap-4 sm:gap-7 pt-16 sm:pt-24 pb-20">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={item.to}
                    className="font-display text-2xl sm:text-3xl tracking-wide text-white/90 hover:text-gold-200 transition-colors"
                    data-cursor-hover
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ delay: navItems.length * 0.08 + 0.1, duration: 0.4 }}
                className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3"
              >
                <Link to="/resume" className="btn-primary text-xs sm:text-sm" data-cursor-hover>
                  Resume
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="btn-ghost text-xs sm:text-sm"
                  data-cursor-hover
                >
                  Close
                </button>
              </motion.div>

              <div className="mt-8 sm:mt-10 text-xs tracking-[0.28em] text-white/40">
                FINANCE • STRATEGY • CLARITY
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
