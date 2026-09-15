import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FloatingScroll } from "@/components/layout/FloatingScroll";
import { MOTION_BOOT, MotionRuntime } from "@/components/motion/MotionRuntime";
import { IS_PRODUCTION, SITE_LOCALE, SITE_NAME, SITE_URL } from "@/lib/site";

/** Inter is GetSibu's declared brand face; the optical-size axis gives headings a display cut. */
const inter = Inter({ subsets: ["latin"], axes: ["opsz"], display: "swap", variable: "--font-inter" });
/** One mono weight for step numbers and technical detail. */
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: "500", display: "swap", variable: "--font-plex-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  robots: IS_PRODUCTION ? undefined : { index: false, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={SITE_LOCALE} className={`${inter.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Decides html[data-motion] before first paint, so entrances never flash (MotionRuntime). */}
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOT }} />
      </head>
      <body className="bg-bg text-fg">
        <a href="#main" className="type-button sr-only z-[80] rounded-lg bg-accent px-4 py-3 text-accent-fg focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <FloatingScroll />
        <MotionRuntime />
      </body>
    </html>
  );
}
