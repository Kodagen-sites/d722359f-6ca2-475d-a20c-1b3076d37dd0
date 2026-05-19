import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import ServiceDetailBody from "@/components/sections/ServiceDetailBody";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/content/site-config";

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.name,
    areaServed: siteConfig.serviceArea,
    provider: {
      "@type": "SecurityService",
      name: siteConfig.company.name,
      url: siteConfig.seo.siteUrl,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Sentinel Capability"
        title={service.name}
        image={service.imageSrc}
        intro={service.short}
      />
      <ServiceDetailBody service={service} />
      <CtaBand />
    </main>
  );
}
