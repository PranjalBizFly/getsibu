import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { IS_PRODUCTION, SITE_LOCALE, SITE_NAME, SITE_URL } from "@/lib/site";

/** Inter is GetSibu's declared brand face; the optical-size axis gives headings a display cut. */
const inter = Inter({ subsets: ["latin"], axes: ["opsz"], display: "swap", variable: "--font-inter" });
/** One mono weight for eyebrows, labels and technical detail. */
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: "500", display: "swap", variable: "--font-plex-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  robots: IS_PRODUCTION ? undefined : { index: false, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f7fa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={SITE_LOCALE} className={`${inter.variable} ${plexMono.variable}`}>
      <body className="bg-bg text-fg">
        <a
          href="#main"
          className="type-button sr-only z-[60] rounded-sm bg-accent px-4 py-3 text-accent-fg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
