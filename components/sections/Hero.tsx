"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal, MagneticButton, ScrollHint } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export default function Hero() {
  const h = siteConfig.hero;

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink">
      {/* Cinematic video hero — T1 8s Veo loop */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={h.videoUrl}
        poster={h.poster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      {/* Legibility overlays */}
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/30 to-ink" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(8,9,11,0.7) 100%)",
        }}
      />

      {/* HO1 — centered overlay (authority / institutional symmetry) */}
      <div className="relative z-10 mx-auto max-w-[940px] px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary"
        >
          <span className="h-px w-10 bg-primary/60" />
          {h.eyebrow}
          <span className="h-px w-10 bg-primary/60" />
        </motion.div>

        <TextReveal
          as="h1"
          delay={0.15}
          className="font-display text-[clamp(44px,8vw,108px)] font-semibold uppercase leading-[0.98] tracking-[-0.02em] text-fg"
        >
          {h.h1}
        </TextReveal>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-[620px] font-body text-base leading-relaxed text-fg/75 md:text-lg"
        >
          {h.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton
            as="a"
            href={h.ctaHref}
            className="bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-bg transition-shadow hover:shadow-[0_0_40px_-8px_rgba(201,162,75,0.7)]"
          >
            {h.ctaLabel}
          </MagneticButton>
          <Link
            href={h.secondaryHref}
            className="border border-fg/25 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-fg/85 transition-colors hover:border-primary hover:text-primary"
          >
            {h.secondaryLabel}
          </Link>
        </motion.div>
      </div>

      <ScrollHint label="Scroll" accentColor="#c9a24b" />
    </section>
  );
}
