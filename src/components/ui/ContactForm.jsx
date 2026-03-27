import { useMemo, useState } from "react";
import { profile } from "../../data/siteContent";
import GlowCard from "./GlowCard";

function Field({ label, as = "input", ...props }) {
  const Comp = as;

  return (
    <div className="relative">
      <Comp
        className={
          "peer w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/90 outline-none transition focus:border-gold-400/50 focus:ring-2 focus:ring-gold-400/15"
        }
        placeholder=" "
        {...props}
      />
      <label className="pointer-events-none absolute left-4 top-3 text-xs tracking-[0.18em] text-white/55 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-gold-200/90">
        {label}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Portfolio inquiry — Nishika Sadane");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [email, message, name]);

  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = mailto;
  };

  return (
    <GlowCard className="p-7">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Field
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Field
          label="Message"
          as="textarea"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <button type="submit" className="btn-primary" data-cursor="hover">
            Send Message
          </button>

          <div className="flex items-center gap-4 text-xs tracking-[0.22em] text-white/55">
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-white"
              data-cursor="hover"
            >
              EMAIL
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
              data-cursor="hover"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        <div className="text-xs text-white/45">
          Tip: This opens your email client with a pre-filled message.
        </div>
      </form>
    </GlowCard>
  );
}
