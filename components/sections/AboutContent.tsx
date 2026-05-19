"use client";

import { FadeUp, TextReveal, StaggerChildren } from "@/components/motion";

const PRINCIPLES = [
  {
    n: "01",
    title: "Assess honestly",
    text: "We tell principals what the threat actually is — not what is easiest to sell. The risk assessment is the foundation of everything that follows.",
  },
  {
    n: "02",
    title: "Plan everything",
    text: "No movement, venue or residence is covered without a documented plan and a worked contingency. Improvisation is the failure we plan to avoid.",
  },
  {
    n: "03",
    title: "Stay discreet",
    text: "Protection should reassure, never perform. Our presence is calibrated to the brief — visible when it deters, invisible when it should be.",
  },
  {
    n: "04",
    title: "Remain accountable",
    text: "One named operations lead, clear reporting throughout, and a structured review on every engagement. The principal always knows who is responsible.",
  },
];

export default function AboutContent() {
  return (
    <>
      <section className="section-pad bg-surface">
        <div className="shell grid gap-12 md:grid-cols-[1fr_1.25fr] md:gap-16">
          <div>
            <FadeUp>
              <div className="eyebrow mb-6">Our background</div>
            </FadeUp>
            <TextReveal
              as="h2"
              stagger={0.025}
              className="font-display text-[clamp(28px,3.8vw,52px)] font-semibold uppercase leading-[1.05] tracking-[-0.015em] text-fg"
            >
              Built on the discipline of those who served.
            </TextReveal>
          </div>
          <div className="space-y-6 md:pt-2">
            <FadeUp delay={0.1}>
              <p className="font-body text-base leading-relaxed text-fg/70 md:text-lg">
                Sentinel Protective Group was founded by former military and
                police protection specialists who had seen, first-hand, the
                difference between security that is improvised and security
                that is planned. London gave them a clear brief: protect
                principals, families and assets in one of the world&apos;s most
                scrutinised cities — without ever making a spectacle of it.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="font-body text-base leading-relaxed text-fg/70">
                Today Sentinel operates as a single, accountable team. We do not
                subcontract our standards. Every officer who carries the
                Sentinel name has been vetted, trained and chosen by us — and is
                answerable to a named operations lead on every assignment.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="shell">
          <FadeUp>
            <div className="eyebrow mb-6">What we hold to</div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="mb-12 max-w-[16ch] font-display text-[clamp(28px,4vw,52px)] font-semibold uppercase leading-[1.05] tracking-[-0.015em] text-fg">
              Four principles, on every assignment.
            </h2>
          </FadeUp>
          <StaggerChildren
            staggerDelay={0.08}
            className="grid grid-cols-1 gap-px border border-fg/10 bg-fg/10 sm:grid-cols-2"
          >
            {PRINCIPLES.map((p) => (
              <div
                key={p.n}
                className="bg-bg p-8 transition-colors hover:bg-surface md:p-10"
              >
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-display text-4xl font-semibold text-primary">
                    {p.n}
                  </span>
                  <span className="h-px flex-1 bg-fg/15" />
                </div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-fg">
                  {p.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-fg/65">
                  {p.text}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
