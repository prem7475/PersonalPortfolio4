import { profile } from "../data/siteContent";
import PageShell from "../components/ui/PageShell";
import SectionHeading from "../components/ui/SectionHeading";

export default function Resume() {
  return (
    <PageShell className="pt-32 pb-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="RESUME"
          title="Resume / Profile"
          subtitle="View the PDF directly in the site, or download it." 
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <iframe
            title="Resume PDF"
            src="/Profile.pdf"
            className="h-[78vh] w-full"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="/Profile.pdf"
            className="btn-primary"
            download
            data-cursor="hover"
          >
            Download PDF
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="btn-ghost"
            data-cursor="hover"
          >
            Email
          </a>
        </div>

        <div className="mt-4 text-xs text-white/45">
          Source: LinkedIn-generated profile PDF.
        </div>
      </div>
    </PageShell>
  );
}
