import Link from "next/link";
import { getNavModel } from "@/lib/navigation";
import { Logo } from "./Logo";
import { HeaderNavigation } from "./HeaderNavigation";

/**
 * Global header (Sky9 pattern): fixed, translucent with a blur, a hairline and a soft shadow, and a
 * scroll progress bar along its top edge. The logo renders on the server; navigation, menus and
 * search are one client island.
 *
 * The translucent blur sits on a pseudo-element, not on the header: an element with a backdrop
 * filter becomes the backdrop root for everything inside it, which would stop the dropdown panels'
 * own frosted glass from blurring the page behind them.
 */
export function SiteHeader() {
  const model = getNavModel();
  return (
    <>
      <div aria-hidden="true" className="scroll-progress pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] bg-linear-to-r from-indigo via-indigo-500 to-olive" />
      <header className="site-header fixed inset-x-0 top-0 z-50 h-(--header-height) border-b border-line/80 shadow-md shadow-navy/5 transition duration-300 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-white/85 before:backdrop-blur-xl">
        <div className="container-wide flex h-full items-center justify-between gap-3 xs:gap-6">
          <Link href="/" aria-label="GetSibu home" className="shrink-0 rounded-xs">
            <Logo priority height={28} />
          </Link>
          <HeaderNavigation model={model} />
        </div>
      </header>
    </>
  );
}
