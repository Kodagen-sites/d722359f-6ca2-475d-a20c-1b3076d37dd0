import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import AboutContent from "@/components/sections/AboutContent";
import Stats from "@/components/sections/Stats";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sentinel Protective Group is a London private security firm founded by former military and police protection specialists — assessed, planned and accountable protection.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Sentinel"
        title="Quiet, prepared, accountable."
        image={siteConfig.pageHeroes.about}
        intro="A London protective-security firm built on military and police discipline — and on the conviction that real security is planned long before it is needed."
      />
      <AboutContent />
      <Stats />
      <CtaBand />
    </main>
  );
}
