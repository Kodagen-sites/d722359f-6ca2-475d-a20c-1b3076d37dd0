"use client";

import HeaderGlassPlasma from "./HeaderGlassPlasma";

export const HEADER_VARIANTS = {
  "glass-plasma": HeaderGlassPlasma,
} as const;

export type HeaderVariantId = keyof typeof HEADER_VARIANTS;

export default function Header() {
  return <HeaderGlassPlasma />;
}
