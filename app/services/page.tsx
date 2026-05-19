import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Close protection, VIP and armed escort, K9 units, executive protection and risk assessment, event security and residential security — across London.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: siteConfig.services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${siteConfig.seo.siteUrl}/services/${s.slug}`,
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero
        eyebrow="Capabilities"
        title="Seven disciplines, one standard."
        image={siteConfig.pageHeroes.services}
        intro="Every Sentinel service is delivered to the same assessed, planned and accountable standard — whether it is a single officer for one evening or a standing protective programme."
      />
      <ServicesGrid />
      <Process />
      <CtaBand />
    </main>
  );
}
