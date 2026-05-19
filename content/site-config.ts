/**
 * ─────────────────────────────────────────────────────────────────────────
 * GENERATION FINGERPRINT — Variation Manifest (rolled Step 2.5)
 * ─────────────────────────────────────────────────────────────────────────
 *   generation_id : gen-2026-05-19-sentinel-protective-group
 *   company       : Sentinel Protective Group
 *   archetype     : G — Structured Hybrid (premium tier, T1 8s Veo hero loop)
 *                   reason: multi-service London protective-security firm;
 *                   conservative industry-fit default. Not single-product (B),
 *                   not a transformation brand (D), not a 3D product (H).
 *   style         : S2 — Luxury Dark (elite, tactical, bold, high-contrast)
 *   voice         : disciplined / authoritative / discreet
 *   header_variant: glass-plasma   (hash of slug, V1 premium filter)
 *   footer        : giant-wordmark institutional, dark
 *   card_variant  : CV6 — Brutalist (S2 → CV6 per card-banks picking tree)
 *   hero_overlay  : HO1 — centered (authority / institutional symmetry)
 *   color_variant : elite-gold on near-black, tactical-steel secondary
 *   asset_mode    : live-generate (Nano Banana keyframes → Veo loop)
 *   build_mode    : landing (public site only — no admin)
 *   rolled_at     : 2026-05-19
 * ─────────────────────────────────────────────────────────────────────────
 */
import manifest from "./asset-manifest.json";

const img = (slot: string): string =>
  (manifest.images as Record<string, string>)[slot] ?? `/${slot}.jpg`;
const vid = (slot: string): string =>
  (manifest.videos as Record<string, string>)[slot] ?? `/hero.mp4`;

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  detail: string[];
  capabilities: string[];
  imageSrc: string;
};

const services: Service[] = [
  {
    slug: "vip-escort",
    name: "VIP Escort",
    short: "Seamless, low-profile movement for principals who cannot afford to be exposed.",
    description:
      "Discreet point-to-point protection for high-profile principals — planned, rehearsed and quietly delivered.",
    detail: [
      "Every VIP movement begins with a route study and a contingency plan, not a guess. Our escort teams pair a protective driver with on-foot officers so the principal is covered from door to door.",
      "We work in plain sight or invisibly, depending on the brief. The objective is constant: the principal arrives on time, unbothered and unremarked.",
    ],
    capabilities: [
      "Advance route reconnaissance",
      "Protective driving & vehicle teams",
      "Arrival and departure choreography",
      "Liaison with venues and local authorities",
    ],
    imageSrc: img("service-vip-escort"),
  },
  {
    slug: "armed-escort",
    name: "Armed Escort",
    short: "Lawfully armed protection where the threat picture demands it.",
    description:
      "Fully licensed armed protection officers for elevated-risk assignments and hostile environments.",
    detail: [
      "When a risk assessment identifies a credible armed threat, an unarmed response is not enough. Our armed escort capability is delivered only by officers vetted, trained and licensed to the standard the jurisdiction requires.",
      "Armed deployment is always proportionate, always documented and always subordinate to a wider protective plan — never a substitute for sound planning.",
    ],
    capabilities: [
      "Licensed armed protection officers",
      "Hostile-environment deployment",
      "Threat-matched force posture",
      "Full compliance and incident reporting",
    ],
    imageSrc: img("service-armed-escort"),
  },
  {
    slug: "k9-units",
    name: "K9 Units",
    short: "Detection and patrol dogs that read a situation before people can.",
    description:
      "Accredited explosive-detection and patrol K9 teams for venues, residences and high-value assets.",
    detail: [
      "A trained dog is a deterrent, a sensor and a force multiplier in one. Our K9 units handle explosive detection, area sweeps and visible patrol — covering ground a human team cannot.",
      "Every dog works with a single accredited handler. The pairing is consistent, the training is continuous, and the welfare standards are non-negotiable.",
    ],
    capabilities: [
      "Explosive-detection sweeps",
      "Pre-event venue clearance",
      "Visible deterrent patrol",
      "Single accredited handler per dog",
    ],
    imageSrc: img("service-k9-units"),
  },
  {
    slug: "close-protection",
    name: "Close Protection",
    short: "Dedicated bodyguards who stay one decision ahead of the threat.",
    description:
      "SIA-licensed close protection officers for individuals and families requiring a constant protective presence.",
    detail: [
      "Close protection is not about standing nearby. It is about reading a room, planning an exit and removing problems before the principal ever notices them.",
      "We match officers to the assignment by temperament as much as training — the right CPO blends into a boardroom, a school run or a state dinner without friction.",
    ],
    capabilities: [
      "SIA-licensed CPOs",
      "Family and residential coverage",
      "Discreet, profile-matched officers",
      "24/7 rotational protective teams",
    ],
    imageSrc: img("service-close-protection"),
  },
  {
    slug: "executive-protection",
    name: "Executive Protection & Risk Assessment",
    short: "The intelligence and planning that makes every other service work.",
    description:
      "Structured threat and risk assessment, travel security planning and executive protection programmes.",
    detail: [
      "Protection without assessment is theatre. We begin with a documented threat and risk assessment — who, why, how likely and how serious — then build a protective programme proportionate to it.",
      "For travelling executives we plan routes, brief on local risk, secure accommodation and stay on call. The principal makes decisions; we make sure those decisions are informed.",
    ],
    capabilities: [
      "Documented threat & risk assessment",
      "Secure travel and itinerary planning",
      "Country and venue risk briefings",
      "Ongoing programme review",
    ],
    imageSrc: img("service-executive-protection"),
  },
  {
    slug: "event-security",
    name: "Event Security",
    short: "Controlled, calm security for events where the guest list matters.",
    description:
      "End-to-end security for private functions, corporate events and high-profile gatherings.",
    detail: [
      "An event is a moving target: a fixed venue, a known time and a published guest list. We treat that as a planning problem — access control, crowd flow, VIP handling and a clear emergency plan.",
      "Our officers manage entrances without making the evening feel like an airport. Security should be felt as reassurance, not as friction.",
    ],
    capabilities: [
      "Accreditation and access control",
      "VIP and talent handling",
      "Crowd-flow and emergency planning",
      "Discreet, presentable event officers",
    ],
    imageSrc: img("service-event-security"),
  },
  {
    slug: "residential-security",
    name: "Residential & Estate Security",
    short: "A protective ring around the home, around the clock.",
    description:
      "Manned guarding, patrol and systems oversight for private residences and country estates.",
    detail: [
      "A residence is where a principal is least guarded and most predictable. We close that gap with manned guarding, scheduled patrol, access control and oversight of alarm and CCTV systems.",
      "Estate teams are briefed on the family routine, the grounds and the contingency plan — so a quiet night stays quiet, and an incident meets a trained response.",
    ],
    capabilities: [
      "Static manned guarding",
      "Scheduled grounds patrol",
      "Access control and visitor screening",
      "Alarm and CCTV oversight",
    ],
    imageSrc: img("service-residential-security"),
  },
];

export const siteConfig = {
  company: {
    name: "Sentinel Protective Group",
    short: "Sentinel",
    wordmark: "SENTINEL",
    legalName: "Sentinel Protective Group Ltd",
  },
  headerVariant: "glass-plasma",
  tagline: "Discreet protection, decisively delivered.",
  description:
    "Sentinel Protective Group is a London-based private security firm providing executive protection, close protection, armed and VIP escort, K9, event and residential security.",
  serviceArea: "London, United Kingdom",
  hero: {
    eyebrow: "London · Executive Protection",
    h1: "Protection that is felt, never seen.",
    sub: "Sentinel Protective Group safeguards principals, families and assets across London with disciplined planning and a calm, deliberate presence.",
    ctaLabel: "Request a confidential consultation",
    ctaHref: "/contact",
    secondaryLabel: "Our services",
    secondaryHref: "/services",
    videoUrl: vid("scene-1"),
    poster: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/d722359f-6ca2-475d-a20c-1b3076d37dd0/images/hero-poster.jpg",
  },
  valueProp: {
    eyebrow: "The Sentinel standard",
    statement:
      "We do not improvise safety. Every assignment is assessed, planned and rehearsed before a principal is ever in the open.",
    body: "Founded by former military and police protection specialists, Sentinel operates on a single principle — that genuine security is quiet, prepared and proportionate. We assess the threat honestly, build a protective plan around it, and deliver it with officers chosen for judgement as much as for presence.",
  },
  servicesIntro: {
    eyebrow: "Capabilities",
    h2: "Seven disciplines. One protective standard.",
    body: "From a single close-protection officer to a full estate programme, every Sentinel service is delivered to the same assessed, planned and accountable standard.",
  },
  capability: {
    eyebrow: "How we operate",
    h2: "Trained judgement, applied with discipline.",
    body: "Equipment and credentials matter. Judgement matters more. Our officers are selected, vetted and continuously trained so that the right decision is made before a situation becomes an incident.",
    items: [
      {
        title: "Vetted officers",
        text: "Every officer is background-screened, SIA-licensed where required and selected for temperament, not just track record.",
        image: img("section-capability-1"),
      },
      {
        title: "Specialist K9",
        text: "Accredited detection and patrol dogs extend our coverage, reading a venue or route before a team commits to it.",
        image: img("section-capability-2"),
      },
      {
        title: "Protective mobility",
        text: "Armored vehicles and trained protective drivers keep principals moving safely between the points a plan cannot control.",
        image: img("section-capability-3"),
      },
    ],
  },
  process: {
    eyebrow: "Engagement",
    h2: "A protective programme, built in four stages.",
    steps: [
      {
        n: "01",
        title: "Confidential consultation",
        text: "We listen first. A discreet conversation establishes the principal, the concerns and the constraints — with no obligation and complete confidentiality.",
      },
      {
        n: "02",
        title: "Threat & risk assessment",
        text: "We document who poses a risk, why, how likely it is and how serious. The assessment, not assumption, defines the response.",
      },
      {
        n: "03",
        title: "Protective plan",
        text: "Officers, vehicles, routes, K9 and contingencies are matched to the assessment — proportionate, costed and clearly briefed.",
      },
      {
        n: "04",
        title: "Deployment & review",
        text: "Teams deploy under a named operations lead, with reporting throughout and a structured review as the threat picture evolves.",
      },
    ],
  },
  stats: {
    eyebrow: "By the numbers",
    h2: "A standard you can measure.",
    items: [
      { value: 18, prefix: "", suffix: "+", decimals: 0, label: "Years of protective operations" },
      { value: 120, prefix: "", suffix: "+", decimals: 0, label: "Vetted officers on call" },
      { value: 15, prefix: "<", suffix: " min", decimals: 0, label: "Average London response time" },
      { value: 100, prefix: "", suffix: "%", decimals: 0, label: "Client confidentiality, without exception" },
    ],
  },
  standards: {
    eyebrow: "Accreditation",
    h2: "Held to the standards that matter.",
    body: "Sentinel operates within a clear regulatory and professional framework. We hold our own conduct to a higher bar than compliance alone requires.",
    items: [
      "SIA-approved contractor standard",
      "ISO 9001 quality-managed operations",
      "ISO 18788 security-operations management",
      "Fully insured, vetted and licensed officers",
      "GDPR-compliant handling of all client data",
      "Members of professional protection associations",
    ],
  },
  cta: {
    eyebrow: "Speak to Sentinel",
    h2: "Your security should not wait for an incident.",
    body: "Whether you need a single officer for one evening or a standing protective programme, the first step is the same — a confidential, no-obligation conversation.",
    ctaLabel: "Request a confidential consultation",
    ctaHref: "/contact",
    image: img("section-cta"),
  },
  contact: {
    eyebrow: "Contact",
    h2: "Reach Sentinel.",
    intro:
      "For new enquiries, use the form below or call our office. If you have an urgent protection need, the 24/7 hotline is staffed at all times.",
    email: "info@sentinelprotective.co.uk",
    phone: "+44 20 7946 0142",
    hotline: "+44 20 7946 0999",
    addressLines: ["Sentinel Protective Group", "Mayfair, London", "United Kingdom"],
    location: "London, United Kingdom",
    hours: "Office: Mon–Fri, 09:00–18:00 · Hotline: 24/7",
  },
  pageHeroes: {
    services: img("section-services"),
    about: img("section-about"),
    contact: img("section-contact"),
    serviceDetail: img("section-services"),
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/sentinel-protective-group",
    x: "https://x.com/sentinelprotect",
    instagram: "https://www.instagram.com/sentinelprotectivegroup",
  },
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  seo: {
    siteUrl: "https://sentinelprotective.co.uk",
  },
  services,
};

export type SiteConfig = typeof siteConfig;
export default siteConfig;
