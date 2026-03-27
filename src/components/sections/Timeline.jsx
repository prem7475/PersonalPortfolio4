import { motion } from "framer-motion";
import { timeline } from "../../data/siteContent";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

export default function Timeline() {
  return (
    <section className="relative py-28" id="journey">
      <div className="container-x">
        <SectionHeading
          eyebrow="EXPERIENCE / EDUCATION"
          title="A timeline built for credibility"
          subtitle="A vertical journey reveal — designed like a premium agency case study, but anchored in finance."
        />

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 sm:left-1/2" />
          <div
            data-timeline-progress
            className="absolute left-4 top-0 h-full w-px origin-top scale-y-0 bg-gradient-to-b from-gold-200/80 via-gold-400/70 to-transparent sm:left-1/2"
          />

          <div className="space-y-8">
            {timeline.map((item, idx) => {
              const left = idx % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  className={
                    "relative grid gap-6 sm:grid-cols-2 " +
                    (left ? "sm:pr-10" : "sm:pl-10")
                  }
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={
                      "hidden sm:block " +
                      (left ? "sm:order-1" : "sm:order-2")
                    }
                  />

                  <div className={left ? "sm:order-2" : "sm:order-1"}>
                    <div className="absolute left-4 top-7 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-400 shadow-gold sm:left-1/2" />

                    <GlowCard className="p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="text-xs tracking-[0.26em] text-white/45">
                          {item.time}
                        </div>
                        <div className="text-xs tracking-[0.26em] text-gold-200/80">
                          JOURNEY
                        </div>
                      </div>
                      <div className="mt-3 text-xl font-semibold text-white">
                        {item.title}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-white/70">
                        {item.desc}
                      </p>
                    </GlowCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
