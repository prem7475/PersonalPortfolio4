import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profile } from "../../data/siteContent";
import Badge from "../ui/Badge";
import Particles from "../ui/Particles";

export default function Hero() {
  return (
    <section
      className="relative grid min-h-[110svh] place-items-center overflow-hidden"
      id="top"
    >
      <div className="absolute inset-0">
        <div
          data-parallax="-28"
          className="absolute -top-48 left-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,168,90,0.26),transparent_60%)] blur-3xl animate-aurora"
        />
        <div
          data-parallax="-18"
          className="absolute -top-40 right-[-15%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_60%)] blur-3xl animate-aurora"
        />
        <div
          data-parallax="-14"
          className="absolute bottom-[-40%] left-[25%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,168,90,0.18),transparent_60%)] blur-3xl animate-aurora"
        />
        <Particles className="opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />
      </div>

      <div className="container-x relative z-10 pt-16 pb-24 sm:pt-24 md:pt-36 md:pb-40">
        <motion.div
          data-hero-content
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{profile.headline.toUpperCase()}</Badge>
            <span className="text-xs tracking-[0.22em] text-white/45">
              {profile.education}
            </span>
          </div>

          <h1 className="mt-6 sm:mt-8 font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-wide">
            <span className="block text-white">{profile.name.split(" ")[0]}</span>
            <span className="block text-gradient-gold">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-white/70 md:text-lg">
            {profile.subheadline}
          </p>

          <div className="mt-6 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Link to="/work" className="btn-primary" data-cursor="hover">
              View Portfolio
            </Link>
            <Link to="/contact" className="btn-ghost" data-cursor="hover">
              Contact
            </Link>
          </div>

          <div className="mt-6 sm:mt-10 flex items-center gap-4">
            <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/15 shadow-xl hidden sm:block">
              <img src="/photo.png" alt="Nishika Sadane" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="mt-8 sm:mt-14 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
            <div className="glass rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-5 shadow-glow">
              <div className="text-xs tracking-[0.26em] text-white/45">FOCUS</div>
              <div className="mt-2 text-xs sm:text-sm text-white/80">
                Financial decision-making
              </div>
            </div>
            <div className="glass rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-5 shadow-glow">
              <div className="text-xs tracking-[0.26em] text-white/45">STYLE</div>
              <div className="mt-2 text-xs sm:text-sm text-white/80">
                Clean analysis • clear narrative
              </div>
            </div>
            <div className="glass rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-5 shadow-glow">
              <div className="text-xs tracking-[0.26em] text-white/45">OUTPUT</div>
              <div className="mt-2 text-xs sm:text-sm text-white/80">
                Reports, dashboards, briefs
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 sm:mt-20 flex items-center gap-3 text-xs tracking-[0.28em] text-white/40"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <span className="h-px w-10 bg-white/15" />
          SCROLL
        </motion.div>
      </div>
    </section>
  );
}
