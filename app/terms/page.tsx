import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of the Sentinel Protective Group website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const updated = "May 2026";

export default function TermsPage() {
  const c = siteConfig.contact;
  const sections: { h: string; p: string[] }[] = [
    {
      h: "1. Acceptance of terms",
      p: [
        `These terms govern your use of the ${siteConfig.company.name} website. By accessing or using this site you agree to them. If you do not agree, please do not use the site.`,
      ],
    },
    {
      h: "2. Use of this website",
      p: [
        "This website is provided for general information about our services. You agree to use it lawfully and not to attempt to disrupt, probe or gain unauthorised access to it or any connected system.",
      ],
    },
    {
      h: "3. No engagement formed",
      p: [
        "Submitting an enquiry through this website does not create a contract for services. Any engagement of Sentinel Protective Group is governed by a separate written agreement following a risk assessment and proposal.",
      ],
    },
    {
      h: "4. Information accuracy",
      p: [
        "We take care to keep the information on this site accurate and current, but provide it without warranty. Service descriptions are illustrative; the precise scope of any protective programme is defined in your written agreement.",
      ],
    },
    {
      h: "5. Intellectual property",
      p: [
        "All content on this website — text, imagery, branding and design — is owned by or licensed to Sentinel Protective Group and may not be reproduced without written permission.",
      ],
    },
    {
      h: "6. Limitation of liability",
      p: [
        "To the fullest extent permitted by law, Sentinel Protective Group is not liable for any loss arising from use of, or reliance on, this website. Nothing in these terms excludes liability that cannot lawfully be excluded.",
      ],
    },
    {
      h: "7. Governing law",
      p: [
        "These terms are governed by the laws of England and Wales, and disputes are subject to the exclusive jurisdiction of its courts.",
      ],
    },
    {
      h: "8. Contact",
      p: [`Questions about these terms can be sent to ${c.email}.`],
    },
  ];

  return (
    <main>
      <section className="bg-surface px-5 pb-14 pt-40 md:px-10 md:pt-48">
        <div className="mx-auto max-w-[820px]">
          <div className="eyebrow mb-5">Legal</div>
          <h1 className="font-display text-[clamp(36px,6vw,72px)] font-semibold uppercase leading-[1.0] tracking-[-0.02em] text-fg">
            Terms of Service
          </h1>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-fg/45">
            Last updated · {updated}
          </p>
        </div>
      </section>
      <section className="section-pad bg-bg">
        <div className="mx-auto max-w-[820px] px-5 md:px-10">
          {sections.map((s) => (
            <div key={s.h} className="mb-10 border-b border-fg/10 pb-10 last:border-b-0">
              <h2 className="mb-4 font-display text-xl font-semibold uppercase tracking-tight text-fg">
                {s.h}
              </h2>
              {s.p.map((para, i) => (
                <p
                  key={i}
                  className="mb-3 font-body text-[15px] leading-relaxed text-fg/70 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
