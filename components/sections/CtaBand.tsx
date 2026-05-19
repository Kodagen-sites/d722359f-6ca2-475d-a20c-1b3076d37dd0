"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeUp, MagneticButton } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export default function CtaBand() {
  const cta = siteConfig.cta;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-ink"
    >
      <motion.img
        src={cta.image}
        alt=""
        aria-hidden
        style={{ y }}
        className="absolute inset-0 h-[124%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/72" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />

      <div className="relative z-10 mx-auto max-w-[820px] px-5 text-center">
        <FadeUp>
          <div className="mb-7 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
            <span className="h-px w-10 bg-primary/60" />
            {cta.eyebrow}
            <span className="h-px w-10 bg-primary/60" />
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display text-[clamp(32px,5.4vw,76px)] font-semibold uppercase leading-[1.0] tracking-[-0.02em] text-fg">
            {cta.h2}
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mx-auto mt-7 max-w-[560px] font-body text-base leading-relaxed text-fg/75">
            {cta.body}
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="mt-10">
            <MagneticButton
              as="a"
              href={cta.ctaHref}
              className="bg-primary px-9 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-bg transition-shadow hover:shadow-[0_0_44px_-8px_rgba(201,162,75,0.75)]"
            >
              {cta.ctaLabel}
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
