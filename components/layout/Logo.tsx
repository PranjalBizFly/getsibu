import Image from "next/image";
import logo from "@/public/brand/getsibu-logo.webp";
import logoWhite from "@/public/brand/getsibu-logo-white.webp";

/** Official GetSibu logo files (docs/source/official-site-2026-09-14/brand), as lossless WebP. */
export function Logo({ tone = "brand", height = 28, priority = false }: { tone?: "brand" | "white"; height?: number; priority?: boolean }) {
  const source = tone === "white" ? logoWhite : logo;
  const width = Math.round((source.width / source.height) * height);
  return <Image src={source} alt="GetSibu creative asset management platform logo" width={width} height={height} preload={priority} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} className="block h-auto" style={{ width, height }} />;
}
