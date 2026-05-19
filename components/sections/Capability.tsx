"use client";

import { FadeUp } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export default function Capability() {
  const cap = siteConfig.capability;
  return (
    <section className="section-pad bg-surface2">
      <div className="shell">
        <div className="mb-14 max-w-[640px]">
          <FadeUp>
            <div className="eyebrow mb-6">{cap.eyebrow}</div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-semibold uppercase leading-[1.05] tracking-[-0.015em] text-fg">
              {cap.h2}
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="mt-6 font-body text-base leading-relaxed text-fg/65">
              {cap.body}
            </p>
          </FadeUp>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cap.items.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.12}>
              <article className="group h-full overflow-hidden border border-fg/10 bg-bg">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                    style={{ filter: "contrast(1.08) saturate(0.9) brightness(0.9)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
                  <span className="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                    0{i + 1}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-fg/65">
                    {item.text}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
