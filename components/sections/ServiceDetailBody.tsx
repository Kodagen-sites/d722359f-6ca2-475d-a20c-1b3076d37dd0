"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { FadeUp, StaggerChildren, MagneticButton } from "@/components/motion";
import type { Service } from "@/content/site-config";
import { siteConfig } from "@/content/site-config";

export default function ServiceDetailBody({ service }: { service: Service }) {
  const others = siteConfig.services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="section-pad bg-surface">
        <div className="shell grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div>
            <FadeUp>
              <div className="eyebrow mb-6">Service brief</div>
            </FadeUp>
            <FadeUp delay={0.06}>
              <p className="mb-8 font-display text-[clamp(22px,2.6vw,34px)] font-medium leading-[1.2] text-fg">
                {service.description}
              </p>
            </FadeUp>
            <div className="space-y-6">
              {service.detail.map((para, i) => (
                <FadeUp key={i} delay={0.12 + i * 0.08}>
                  <p className="font-body text-base leading-relaxed text-fg/70">
                    {para}
                  </p>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={0.16}>
            <div className="border border-fg/10 bg-bg p-8">
              <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                What this includes
              </div>
              <ul className="space-y-4">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="font-body text-sm leading-relaxed text-fg/80">
                      {cap}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-fg/10 pt-6">
                <MagneticButton
                  as="a"
                  href="/contact"
                  className="w-full bg-primary px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-bg"
                >
                  Discuss this service
                </MagneticButton>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="shell">
          <FadeUp>
            <div className="eyebrow mb-8">Other capabilities</div>
          </FadeUp>
          <StaggerChildren
            staggerDelay={0.05}
            className="grid grid-cols-1 gap-px border border-fg/10 bg-fg/10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between gap-4 bg-bg p-7 transition-colors hover:bg-surface"
              >
                <span className="font-display text-lg font-semibold uppercase tracking-tight text-fg">
                  {s.name}
                </span>
                <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-fg/40 transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
