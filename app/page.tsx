import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CredentialMarquee from "@/components/sections/CredentialMarquee";
import ValueProp from "@/components/sections/ValueProp";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Capability from "@/components/sections/Capability";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Standards from "@/components/sections/Standards";
import CtaBand from "@/components/sections/CtaBand";
import ContactPreview from "@/components/sections/ContactPreview";

export const metadata: Metadata = {
  title: "Executive Protection & Private Security in London",
  description:
    "Sentinel Protective Group provides discreet executive protection, close protection, VIP and armed escort, K9, event and residential security across London.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CredentialMarquee />
      <ValueProp />
      <ServicesGrid />
      <Capability />
      <Process />
      <Stats />
      <Standards />
      <CtaBand />
      <ContactPreview />
    </main>
  );
}
