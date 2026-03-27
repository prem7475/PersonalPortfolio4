import { motion } from "framer-motion";
import { testimonials } from "../../data/siteContent";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="relative py-28" id="testimonials">
      <div className="container-x">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="Client-style feedback — premium & believable"
          subtitle="Designed like a digital agency site, written like real feedback: clarity, structure, and decision value." 
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlowCard className="group h-full p-7">
                <div className="text-gold-200/80">“</div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {t.quote}
                </p>

                <div className="mt-8 h-px w-full bg-white/10" />

                <div className="mt-5">
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="mt-1 text-xs tracking-[0.18em] text-white/50">
                    {t.role}
                  </div>
                </div>

                <div className="mt-6 h-10 w-10 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(200,168,90,0.18),transparent_70%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
