import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sentinel Protective Group collects, uses and protects personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const updated = "May 2026";

export default function PrivacyPage() {
  const c = siteConfig.contact;
  const sections: { h: string; p: string[] }[] = [
    {
      h: "1. Who we are",
      p: [
        `${siteConfig.company.legalName} ("Sentinel", "we", "us") is a private security firm operating in ${siteConfig.serviceArea}. We are the data controller for personal information processed through this website and in the course of our services.`,
      ],
    },
    {
      h: "2. Information we collect",
      p: [
        "When you contact us we collect the details you provide — typically your name, email address, telephone number and the content of your enquiry. Our website also records standard technical data such as IP address, browser type and pages visited, used only to keep the site secure and functioning.",
        "Given the nature of our work, we ask that you do not include highly sensitive operational detail in website forms. We will arrange a secure channel for any such conversation.",
      ],
    },
    {
      h: "3. How we use information",
      p: [
        "We use the information you provide to respond to your enquiry, to prepare and deliver protective services where engaged, and to meet our legal and regulatory obligations. We do not sell personal information, and we do not use it for unrelated marketing without your consent.",
      ],
    },
    {
      h: "4. Lawful basis",
      p: [
        "We process personal data on the basis of your consent, our legitimate interest in responding to enquiries and operating our business, and where applicable the performance of a contract and compliance with legal obligations.",
      ],
    },
    {
      h: "5. Sharing and retention",
      p: [
        "Personal information is accessed only by Sentinel personnel who need it, and by trusted service providers acting on our instructions under appropriate confidentiality terms. We retain personal data only as long as necessary for the purpose it was collected or as required by law, after which it is securely deleted.",
      ],
    },
    {
      h: "6. Your rights",
      p: [
        "Subject to applicable law, you may request access to, correction of, or deletion of your personal data, and may object to or restrict certain processing. To exercise any right, contact us using the details below. You also have the right to complain to the relevant data protection authority.",
      ],
    },
    {
      h: "7. Contact",
      p: [
        `For any privacy question or request, contact us at ${c.email} or by telephone on ${c.phone}.`,
      ],
    },
  ];

  return (
    <main>
      <section className="bg-surface px-5 pb-14 pt-40 md:px-10 md:pt-48">
        <div className="mx-auto max-w-[820px]">
          <div className="eyebrow mb-5">Legal</div>
          <h1 className="font-display text-[clamp(36px,6vw,72px)] font-semibold uppercase leading-[1.0] tracking-[-0.02em] text-fg">
            Privacy Policy
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
