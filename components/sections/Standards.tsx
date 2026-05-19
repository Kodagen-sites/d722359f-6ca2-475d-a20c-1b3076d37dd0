"use client";

import { FadeUp, StaggerChildren } from "@/components/motion";
import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/content/site-config";

export default function Standards() {
  const s = siteConfig.standards;
  return (
    <section className="section-pad bg-surface">
      <div className="shell">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <FadeUp>
              <div className="eyebrow mb-6">{s.eyebrow}</div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="max-w-[14ch] font-display text-[clamp(28px,4vw,52px)] font-semibold uppercase leading-[1.05] tracking-[-0.015em] text-fg">
                {s.h2}
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.16}>
            <p className="font-body text-base leading-relaxed text-fg/65 md:pb-2">
              {s.body}
            </p>
          </FadeUp>
        </div>

        <StaggerChildren
          staggerDelay={0.06}
          className="grid grid-cols-1 gap-px border border-fg/10 bg-fg/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {s.items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 bg-surface p-7 transition-colors hover:bg-surface2"
            >
              <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <span className="font-body text-sm leading-relaxed text-fg/80">
                {item}
              </span>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
