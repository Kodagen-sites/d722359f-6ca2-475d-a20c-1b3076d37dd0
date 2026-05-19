"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { NAV_LINKS } from "./nav-links";
import { useIsMobile, useScrollState } from "./hooks";

/**
 * Header variant: GLASS PLASMA CAPSULE — animated conic-gradient border,
 * glass backdrop, glow halo. Reads as a tactical scanner ring for a dark
 * elite security brand. (Variation Manifest: header_variant = glass-plasma.)
 */
export default function HeaderGlassPlasma() {
  const scrolled = useScrollState(20);
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-5 inset-x-4 md:inset-x-0 z-40 flex justify-center pointer-events-none"
      >
        <div className="relative pointer-events-auto">
          {/* Rotating conic-gradient border — gold/steel scanner ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[1.5px] rounded-full opacity-70"
            style={{
              background:
                "conic-gradient(from 0deg, var(--primary-color), var(--accent-color), var(--primary-color), var(--accent-color), var(--primary-color))",
              filter: "blur(4px)",
            }}
          />
          <div
            className="absolute -inset-3 rounded-full opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--primary-color) 0%, transparent 60%)",
              filter: "blur(20px)",
            }}
          />

          <div
            className={`relative flex items-center gap-1 md:gap-2 rounded-full backdrop-blur-3xl transition-all duration-500 ${
              scrolled
                ? "bg-bg/90 border border-fg/15"
                : "bg-bg/65 border border-fg/10"
            }`}
            style={{ padding: "6px 8px" }}
          >
            <Link
              href="/"
              className="px-3 md:px-4 py-2 font-display font-semibold tracking-[0.18em] uppercase text-xs md:text-sm bg-gradient-to-r from-fg via-fg to-primary bg-clip-text text-transparent"
            >
              {siteConfig.company.wordmark}
            </Link>

            {!isMobile && (
              <nav className="flex items-center gap-1 mx-2">
                {NAV_LINKS.slice(1).map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-[0.16em] transition-colors ${
                        active ? "text-fg" : "text-fg/65 hover:text-fg"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="plasma-active"
                          className="absolute inset-0 rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, rgba(201,162,75,0.16), rgba(124,139,156,0.16))",
                            border: "1px solid rgba(244,242,236,0.12)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative">{link.label}</span>
                    </Link>
                  );
                })}
              </nav>
            )}

            {!isMobile ? (
              <Link
                href="/contact"
                className="relative px-4 py-2 rounded-full text-xs font-display font-semibold uppercase tracking-[0.14em] text-bg overflow-hidden"
                style={{
                  background:
                    "linear-gradient(90deg, var(--primary-color), #e0bd6a)",
                }}
              >
                <span className="relative">Enquire</span>
              </Link>
            ) : (
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="w-9 h-9 rounded-full flex items-center justify-center text-fg hover:bg-fg/10"
              >
                <Menu size={18} />
              </button>
            )}
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileOverlay onClose={() => setMenuOpen(false)} pathname={pathname} />}
      </AnimatePresence>
    </>
  );
}

function MobileOverlay({
  onClose,
  pathname,
}: {
  onClose: () => void;
  pathname: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-bg md:hidden"
    >
      <div className="flex items-center justify-between p-6">
        <div className="font-display font-semibold tracking-[0.18em] uppercase text-sm bg-gradient-to-r from-fg to-primary bg-clip-text text-transparent">
          {siteConfig.company.wordmark}
        </div>
        <button onClick={onClose} className="text-fg" aria-label="Close menu">
          <X size={22} />
        </button>
      </div>
      <ul className="flex flex-col gap-6 p-6">
        {NAV_LINKS.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + i * 0.05 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className={`font-display text-3xl uppercase tracking-wide transition-colors ${
                pathname === link.href ? "text-primary" : "text-fg hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pt-4"
        >
          <a
            href={`tel:${siteConfig.contact.hotline.replace(/\s/g, "")}`}
            className="font-mono text-xs uppercase tracking-[0.2em] text-primary"
          >
            24/7 Hotline · {siteConfig.contact.hotline}
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
}
