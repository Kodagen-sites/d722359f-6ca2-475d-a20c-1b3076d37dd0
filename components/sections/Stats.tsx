"use client";

import { FadeUp, NumberCounter } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export default function Stats() {
  const s = siteConfig.stats;
  return (
    <section className="section-pad bg-accent">
      <div className="shell">
        <FadeUp>
          <div className="eyebrow mb-6">{s.eyebrow}</div>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2 className="mb-12 max-w-[16ch] font-display text-[clamp(28px,4vw,52px)] font-semibold uppercase leading-[1.05] tracking-[-0.015em] text-fg">
            {s.h2}
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 gap-px border border-fg/10 bg-fg/10 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.1}>
              <div className="h-full bg-accent p-8">
                <div className="font-display text-[clamp(40px,5vw,68px)] font-semibold leading-none text-primary">
                  <NumberCounter
                    to={item.value}
                    prefix={item.prefix ?? ""}
                    suffix={item.suffix ?? ""}
                    decimals={item.decimals ?? 0}
                  />
                </div>
                <p className="mt-5 font-body text-sm leading-relaxed text-fg/65">
                  {item.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
