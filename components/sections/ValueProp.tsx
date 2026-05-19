"use client";

import { FadeUp, TextReveal } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export default function ValueProp() {
  const v = siteConfig.valueProp;
  return (
    <section className="section-pad relative overflow-hidden bg-surface">
      <div className="absolute inset-0 grid-noise opacity-50" aria-hidden />
      <div className="shell relative">
        <FadeUp>
          <div className="eyebrow mb-10">{v.eyebrow}</div>
        </FadeUp>
        <TextReveal
          as="h2"
          stagger={0.02}
          className="max-w-[18ch] font-display text-[clamp(30px,4.6vw,62px)] font-semibold uppercase leading-[1.04] tracking-[-0.015em] text-fg"
        >
          {v.statement}
        </TextReveal>
        <FadeUp delay={0.2}>
          <div className="mt-10 grid gap-8 border-t border-fg/10 pt-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              Established · {siteConfig.serviceArea}
            </div>
            <p className="font-body text-base leading-relaxed text-fg/70 md:text-lg">
              {v.body}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
