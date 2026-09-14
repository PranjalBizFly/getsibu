import Link from "next/link";
import { getNavModel } from "@/lib/navigation";
import { Logo } from "./Logo";
import { HeaderNavigation } from "./HeaderNavigation";

/** Global header. The logo renders on the server; navigation, menus and search are one client island. */
export function SiteHeader() {
  const model = getNavModel();
  return (
    <header className="site-header sticky top-0 z-50 bg-bg">
      <div className="container-wide flex h-(--header-height) items-center gap-3 xs:gap-6 xl:gap-10">
        <Link href="/" aria-label="GetSibu home" className="shrink-0 rounded-xs">
          <Logo priority height={28} />
        </Link>
        <HeaderNavigation model={model} />
      </div>
    </header>
  );
}
