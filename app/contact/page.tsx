import type { Metadata } from "next";
import { Mail, Phone, PhoneCall, Clock, MapPin } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sentinel Protective Group in London for a confidential, no-obligation consultation. Office line, 24/7 protection hotline and secure enquiry form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const c = siteConfig.contact;
  const details = [
    { icon: Mail, label: "Email", value: c.email, href: `mailto:${c.email}` },
    {
      icon: Phone,
      label: "Office",
      value: c.phone,
      href: `tel:${c.phone.replace(/\s/g, "")}`,
    },
    { icon: Clock, label: "Hours", value: c.hours },
    { icon: MapPin, label: "Address", value: c.addressLines.join(", ") },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Contact Sentinel"
        title="Begin a confidential conversation."
        image={siteConfig.pageHeroes.contact}
        intro="Whether you need a single officer for one evening or a standing protective programme, the first step is the same — a discreet, no-obligation conversation."
      />

      <section className="section-pad bg-surface">
        <div className="shell grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <div className="eyebrow mb-6">Make an enquiry</div>
            <h2 className="mb-8 font-display text-[clamp(26px,3.4vw,44px)] font-semibold uppercase leading-[1.06] tracking-[-0.015em] text-fg">
              Tell us what you need to protect.
            </h2>
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-6">
            <a
              href={`tel:${c.hotline.replace(/\s/g, "")}`}
              className="flex items-center gap-4 border border-primary/40 bg-primary/[0.07] p-6 transition-colors hover:bg-primary/12"
            >
              <PhoneCall className="h-7 w-7 flex-shrink-0 text-primary" />
              <span className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                  24 / 7 Protection Hotline
                </span>
                <span className="font-display text-2xl tracking-wide text-fg">
                  {c.hotline}
                </span>
              </span>
            </a>

            <div className="border border-fg/10 bg-bg">
              <ul>
                {details.map((d) => {
                  const Icon = d.icon;
                  const inner = (
                    <>
                      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="flex flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg/45">
                          {d.label}
                        </span>
                        <span className="font-body text-sm text-fg/85">
                          {d.value}
                        </span>
                      </span>
                    </>
                  );
                  return (
                    <li key={d.label} className="border-b border-fg/10 last:border-b-0">
                      {d.href ? (
                        <a
                          href={d.href}
                          className="flex items-start gap-4 p-6 transition-colors hover:bg-surface"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 p-6">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="overflow-hidden border border-fg/10">
              <iframe
                title="Sentinel Protective Group — London"
                src="https://www.google.com/maps?q=Mayfair,London,UK&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: "grayscale(0.7) invert(0.92) hue-rotate(180deg) contrast(0.9)" }}
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
