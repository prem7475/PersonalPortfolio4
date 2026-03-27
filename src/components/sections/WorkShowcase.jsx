import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/siteContent";
import Badge from "../ui/Badge";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";
import TiltCard from "../ui/TiltCard";

export default function WorkShowcase() {
  return (
    <section className="relative py-28" id="work">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="PORTFOLIO / WORK"
            title="Finance work — presented like a product"
            subtitle="Clean visuals, strong hierarchy, and believable finance deliverables. Hover for tilt + glow."
          />

          <Link to="/work" className="btn-ghost" data-cursor="hover">
            Explore all work
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="rounded-3xl">
                <GlowCard className="group overflow-hidden p-0">
                  <div className="relative">
                    <img
                      src={p.image}
                      alt="Project cover"
                      className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute left-5 top-5">
                      <Badge className="bg-black/30">FEATURED</Badge>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {p.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t}>{t.toUpperCase()}</Badge>
                      ))}
                    </div>

                    <div className="mt-7 h-px w-full bg-white/10" />

                    <div className="mt-5 flex items-center justify-between text-xs tracking-[0.22em] text-white/50">
                      <span>CASE STUDY FORMAT</span>
                      <span className="text-gold-200/80">VIEW</span>
                    </div>
                  </div>
                </GlowCard>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
