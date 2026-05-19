"use client";

import Link from "next/link";
import { Mail, Phone, Clock, MapPin, PhoneCall } from "lucide-react";
import { FadeUp } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export default function ContactPreview() {
  const c = siteConfig.contact;
  const rows = [
    { icon: Mail, label: "Email", value: c.email, href: `mailto:${c.email}` },
    {
      icon: Phone,
      label: "Office",
      value: c.phone,
      href: `tel:${c.phone.replace(/\s/g, "")}`,
    },
    { icon: Clock, label: "Hours", value: c.hours },
    { icon: MapPin, label: "Based in", value: c.location },
  ];

  return (
    <section className="section-pad bg-bg">
      <div className="shell grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
        <div>
          <FadeUp>
            <div className="eyebrow mb-6">{c.eyebrow}</div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-semibold uppercase leading-[1.05] tracking-[-0.015em] text-fg">
              Speak to Sentinel, in confidence.
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="mt-6 max-w-[460px] font-body text-base leading-relaxed text-fg/65">
              {c.intro}
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-primary px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-bg transition-shadow hover:shadow-[0_0_40px_-8px_rgba(201,162,75,0.7)]"
            >
              Make an enquiry
              <span aria-hidden>→</span>
            </Link>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="border border-fg/10 bg-surface2">
            <a
              href={`tel:${c.hotline.replace(/\s/g, "")}`}
              className="flex items-center gap-4 border-b border-fg/10 bg-primary/[0.07] p-6 transition-colors hover:bg-primary/12"
            >
              <PhoneCall className="h-6 w-6 flex-shrink-0 text-primary" />
              <span className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                  24 / 7 Protection Hotline
                </span>
                <span className="font-display text-2xl tracking-wide text-fg">
                  {c.hotline}
                </span>
              </span>
            </a>
            <ul>
              {rows.map((r) => {
                const Icon = r.icon;
                const inner = (
                  <>
                    <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="flex flex-col">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg/45">
                        {r.label}
                      </span>
                      <span className="font-body text-sm text-fg/85">
                        {r.value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li
                    key={r.label}
                    className="border-b border-fg/10 last:border-b-0"
                  >
                    {r.href ? (
                      <a
                        href={r.href}
                        className="flex items-start gap-4 p-6 transition-colors hover:bg-surface"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-6">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
