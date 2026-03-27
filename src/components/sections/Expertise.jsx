import { motion } from "framer-motion";
import { expertise } from "../../data/siteContent";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

function Icon({ i }) {
  const common = "h-5 w-5";

  if (i === 0)
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 19V5m0 14h16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7 15l3-3 3 2 6-7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

  if (i === 1)
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 7h16M4 12h10M4 17h16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M18 10v4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );

  if (i === 2)
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3v18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7 8l5-5 5 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 16l5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

  return (
    <svg
      className={common}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 5h16v14H4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7 9h10M7 12h6M7 15h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Expertise() {
  return (
    <section className="relative py-28" id="expertise">
      <div className="container-x">
        <SectionHeading
          eyebrow="SERVICES / EXPERTISE"
          title="Agency‑style. Finance‑first."
          subtitle="Positioned like a business website — because your value is the deliverable. Each card is designed to feel premium, with glow interactions and crisp hierarchy."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlowCard className="group p-7 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-gold-200 shadow-gold">
                        <Icon i={i} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      {item.desc}
                    </p>

                    <ul className="mt-6 space-y-2 text-sm text-white/65">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-400/80" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hidden h-16 w-16 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(200,168,90,0.20),transparent_70%)] blur-xl md:block" />
                </div>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />

                <div className="mt-5 text-xs tracking-[0.25em] text-white/50 group-hover:text-gold-200/80">
                  DELIVERABLE-READY OUTPUT
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
