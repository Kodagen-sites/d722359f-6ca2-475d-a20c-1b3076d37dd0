import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";

/**
 * Footer — FT3-style giant-wordmark institutional, S2 Luxury Dark.
 * Ships on every page: nav, contact, 24/7 hotline, socials, legal, © year.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const c = siteConfig.contact;

  return (
    <footer className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 grid-noise opacity-40" aria-hidden />
      {/* Aurora glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[120%] -translate-x-1/2 opacity-30"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,162,75,0.35) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative shell">
        {/* Upper grid */}
        <div className="grid gap-12 pt-16 pb-12 md:grid-cols-[1.4fr_1fr_1fr] md:pt-20">
          <div>
            <div className="eyebrow mb-5">{siteConfig.serviceArea}</div>
            <p className="max-w-sm font-body text-base leading-relaxed text-fg/65">
              {siteConfig.tagline} Sentinel Protective Group delivers assessed,
              planned and accountable protection across London and beyond.
            </p>
            <a
              href={`tel:${c.hotline.replace(/\s/g, "")}`}
              className="mt-7 inline-flex flex-col gap-1 border border-primary/40 bg-primary/[0.06] px-5 py-4 transition-colors hover:bg-primary/10"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                24 / 7 Protection Hotline
              </span>
              <span className="font-display text-xl tracking-wide text-fg">
                {c.hotline}
              </span>
            </a>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-fg/40">
              Navigate
            </div>
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="w-fit font-body text-sm text-fg/70 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-fg/40">
              Contact
            </div>
            <a
              href={`mailto:${c.email}`}
              className="w-fit font-body text-sm text-fg/70 transition-colors hover:text-primary"
            >
              {c.email}
            </a>
            <a
              href={`tel:${c.phone.replace(/\s/g, "")}`}
              className="w-fit font-body text-sm text-fg/70 transition-colors hover:text-primary"
            >
              {c.phone}
            </a>
            <p className="font-body text-sm leading-relaxed text-fg/55">
              {c.addressLines.join(", ")}
            </p>
            <SocialLinks
              socials={siteConfig.socials}
              className="mt-3 text-fg/55"
            />
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="relative select-none border-t border-fg/10 pt-10">
          <div
            className="font-display font-semibold uppercase leading-[0.82] tracking-[-0.02em] text-transparent"
            style={{
              fontSize: "clamp(64px, 19vw, 280px)",
              WebkitTextStroke: "1px rgba(244,242,236,0.16)",
              backgroundImage:
                "linear-gradient(180deg, rgba(201,162,75,0.22) 0%, transparent 80%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            {siteConfig.company.wordmark}
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col gap-4 border-t border-fg/10 py-7 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg/45">
            © {year} {siteConfig.company.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {siteConfig.legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg/55 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
