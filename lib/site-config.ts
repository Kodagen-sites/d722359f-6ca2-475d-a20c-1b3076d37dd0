/**
 * Re-export of the site content config. Legal pages and some components
 * import from "@/lib/site-config"; the source of truth lives in
 * content/site-config.ts (which merges content/asset-manifest.json).
 */
export { siteConfig, default } from "@/content/site-config";
export type { SiteConfig, Service } from "@/content/site-config";
