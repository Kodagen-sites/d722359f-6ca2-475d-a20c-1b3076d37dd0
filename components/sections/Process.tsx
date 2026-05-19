"use client";

import { FadeUp } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export default function Process() {
  const p = siteConfig.process;
  return (
    <section className="section-pad relative overflow-hidden bg-steel">
      <div className="absolute inset-0 grid-noise opacity-40" aria-hidden />
      <div className="shell relative">
        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <FadeUp>
              <div className="eyebrow mb-6">{p.eyebrow}</div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="max-w-[16ch] font-display text-[clamp(28px,4vw,52px)] font-semibold uppercase leading-[1.05] tracking-[-0.015em] text-fg">
                {p.h2}
              </h2>
            </FadeUp>
          </div>
        </div>

        <div className="grid gap-px border border-fg/10 bg-fg/10 md:grid-cols-2 lg:grid-cols-4">
          {p.steps.map((step, i) => (
            <FadeUp key={step.n} delay={i * 0.1}>
              <div className="h-full bg-steel p-8 transition-colors duration-300 hover:bg-surface">
                <div className="mb-8 flex items-baseline gap-3">
                  <span className="font-display text-5xl font-semibold text-primary">
                    {step.n}
                  </span>
                  <span className="h-px flex-1 bg-fg/15" />
                </div>
                <h3 className="font-display text-lg font-semibold uppercase tracking-tight text-fg">
                  {step.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-fg/65">
                  {step.text}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
