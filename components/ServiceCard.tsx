import Link from "next/link";

/**
 * CV6 — Brutalist (Variation Manifest: card_variant = CV6, per S2 → CV6).
 * Remapped to S2 Luxury Dark: dark surface card, thick hairline border,
 * hard-offset GOLD shadow (no blur), monospace type. The shadow snaps
 * closer on hover — the card "pushes" toward the cursor.
 */
type Props = {
  service: { slug: string; name: string; short: string };
  index: number;
  imageSrc?: string;
};

export default function ServiceCard({ service, index, imageSrc }: Props) {
  const num = String((index ?? 0) + 1).padStart(2, "0");

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative block h-full bg-surface2 transition-transform duration-150 ease-out hover:-translate-x-1 hover:-translate-y-1"
      style={{
        color: "#f4f2ec",
        border: "2px solid rgba(244,242,236,0.14)",
        boxShadow: "9px 9px 0 0 #c9a24b",
      }}
    >
      {imageSrc && (
        <div
          className="relative aspect-[4/3] overflow-hidden"
          style={{ borderBottom: "2px solid rgba(244,242,236,0.14)" }}
        >
          <img
            src={imageSrc}
            alt={service.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            style={{ filter: "contrast(1.08) saturate(0.92) brightness(0.92)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface2/85 via-surface2/10 to-transparent" />
        </div>
      )}

      <div className="p-6 md:p-7">
        <div className="flex items-baseline justify-between mb-5">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-primary">
            Capability / {num}
          </div>
          <div className="font-mono text-xs text-primary transition-transform duration-200 group-hover:translate-x-1">
            →
          </div>
        </div>

        <h3 className="font-display text-xl md:text-2xl font-semibold uppercase tracking-tight leading-[1.05] mb-4">
          {service.name}
        </h3>

        <p className="font-body text-sm leading-relaxed text-fg/65">
          {service.short}
        </p>

        <div
          className="mt-6 pt-4 font-mono text-[11px] tracking-[0.22em] uppercase font-semibold text-fg/55 group-hover:text-primary transition-colors"
          style={{ borderTop: "1px solid rgba(244,242,236,0.1)" }}
        >
          Read brief
        </div>
      </div>
    </Link>
  );
}
