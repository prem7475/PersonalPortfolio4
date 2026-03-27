import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <div className="font-display text-lg tracking-wide text-gradient-gold">
            Nishika Sadane
          </div>
          <div className="mt-2 text-xs tracking-[0.22em] text-white/45">
            FINANCE • STRATEGY • CLARITY
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-white/60">
          <Link to="/work" className="hover:text-white" data-cursor="hover">
            Work
          </Link>
          <Link
            to="/resume"
            className="hover:text-white"
            data-cursor="hover"
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className="hover:text-white"
            data-cursor="hover"
          >
            Contact
          </Link>
        </div>

        <div className="text-xs text-white/40">
          © {new Date().getFullYear()} Nishika Sadane
        </div>
      </div>
    </footer>
  );
}
