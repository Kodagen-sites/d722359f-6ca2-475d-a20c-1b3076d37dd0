"use client";

import { FadeUp, StaggerChildren, CardTiltLayer } from "@/components/motion";
import ServiceCard from "@/components/ServiceCard";
import { siteConfig } from "@/content/site-config";

export default function ServicesGrid() {
  const intro = siteConfig.servicesIntro;
  return (
    <section className="section-pad bg-bg">
      <div className="shell">
        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <FadeUp>
              <div className="eyebrow mb-6">{intro.eyebrow}</div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="max-w-[14ch] font-display text-[clamp(28px,4vw,52px)] font-semibold uppercase leading-[1.05] tracking-[-0.015em] text-fg">
                {intro.h2}
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.16}>
            <p className="font-body text-base leading-relaxed text-fg/65 md:pb-2">
              {intro.body}
            </p>
          </FadeUp>
        </div>

        <StaggerChildren
          staggerDelay={0.07}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.services.map((service, i) => (
            <CardTiltLayer key={service.slug} intensity={0.14} lift={6}>
              <ServiceCard service={service} index={i} imageSrc={service.imageSrc} />
            </CardTiltLayer>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
