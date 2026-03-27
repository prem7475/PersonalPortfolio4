import { motion } from "framer-motion";
import { about, stats } from "../../data/siteContent";
import GlowCard from "../ui/GlowCard";
import ProfilePortrait from "../ui/ProfilePortrait";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section className="relative py-28" id="about">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlowCard className="relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
            <div className="relative">
              <div className="flex items-center justify-center">
                <ProfilePortrait />
              </div>

              <motion.div
                className="absolute -bottom-5 -right-5 hidden h-24 w-24 rounded-2xl border border-gold-400/20 bg-white/5 md:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />

              <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="text-xs tracking-[0.26em] text-white/55">
                  ABOUT THE APPROACH
                </div>
                <div className="mt-2 text-sm leading-relaxed text-white/75">
                  Premium visuals, calm hierarchy — and finance work that reads
                  like a real deliverable.
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="ABOUT"
            title={about.title}
            subtitle="A premium portfolio should feel like an agency site — but the work must still be finance-first: structured, clear, decision-ready."
          />

          <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/70 sm:text-base">
            {about.body.map((p) => (
              <motion.p
                key={p}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <GlowCard key={s.label} className="p-5">
                <div className="text-xs tracking-[0.26em] text-white/45">
                  {s.label}
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/60">{s.hint}</div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
