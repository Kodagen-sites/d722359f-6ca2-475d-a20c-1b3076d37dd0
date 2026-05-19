"use client";

import { Marquee } from "@/components/motion";

const CREDENTIALS = [
  "SIA Approved Contractor",
  "ISO 9001 Quality Managed",
  "ISO 18788 Security Operations",
  "Vetted & Licensed Officers",
  "24 / 7 Operations Room",
  "Fully Insured",
  "GDPR Compliant",
  "Former Military & Police Specialists",
];

export default function CredentialMarquee() {
  return (
    <div className="border-y border-fg/10 bg-steel py-5">
      <Marquee speed={42}>
        {CREDENTIALS.map((c) => (
          <span
            key={c}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fg/55"
          >
            <span className="h-1 w-1 rounded-full bg-primary" />
            {c}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
