import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[80svh] items-center justify-center bg-ink px-5">
      <div className="mx-auto max-w-[560px] text-center">
        <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
          Error · 404
        </div>
        <h1 className="font-display text-[clamp(48px,10vw,120px)] font-semibold uppercase leading-none tracking-[-0.02em] text-fg">
          Off route
        </h1>
        <p className="mx-auto mt-6 max-w-[400px] font-body text-base leading-relaxed text-fg/65">
          The page you requested could not be located. Let us guide you back to
          secured ground.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-bg"
          >
            Return home
          </Link>
          <Link
            href="/contact"
            className="border border-fg/25 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-fg/85 transition-colors hover:border-primary hover:text-primary"
          >
            Contact Sentinel
          </Link>
        </div>
      </div>
    </main>
  );
}
