import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import { FilmGrain, Vignette } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

const display = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default:
      "Sentinel Protective Group — Executive Protection & Private Security in London",
    template: "%s · Sentinel Protective Group",
  },
  description: siteConfig.description,
  keywords: [
    "executive protection London",
    "close protection",
    "bodyguards London",
    "VIP escort",
    "private security",
    "K9 security",
    "event security London",
  ],
  openGraph: {
    type: "website",
    siteName: "Sentinel Protective Group",
    title:
      "Sentinel Protective Group — Executive Protection & Private Security",
    description: siteConfig.description,
    url: siteConfig.seo.siteUrl,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentinel Protective Group",
    description: siteConfig.description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: siteConfig.company.name,
    legalName: siteConfig.company.legalName,
    description: siteConfig.description,
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    areaServed: siteConfig.serviceArea,
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    sameAs: Object.values(siteConfig.socials),
  };

  return (
    <html
      lang="en-GB"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-bg text-fg antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <FilmGrain opacity={0.035} />
        <Vignette strength={0.55} color="#0a0b0d" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
