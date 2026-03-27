import { Link } from "react-router-dom";
import PageShell from "../components/ui/PageShell";

export default function NotFound() {
  return (
    <PageShell className="pt-32 pb-24">
      <div className="container-x">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="text-xs tracking-[0.26em] text-white/45">404</div>
          <h1 className="mt-3 font-display text-4xl tracking-wide text-white">
            Page not found
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            The page you’re looking for doesn’t exist — or it moved.
          </p>
          <Link to="/" className="btn-primary mt-8" data-cursor="hover">
            Back to Home
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
