import Link from "next/link";
import type { RichText as RichTextValue } from "@/types/content";
import { pageSummary } from "@/lib/content/links";

/** Text with inline links to pages (by PDF number). The link text is always the phrase itself. */
export function RichText({ value }: { value: RichTextValue }) {
  if (typeof value === "string") return value;
  return value.map((part, i) =>
    typeof part === "string" ? (
      part
    ) : (
      <Link key={i} href={pageSummary(part.page).href} className="underline decoration-line-strong decoration-1 underline-offset-[0.2em] transition-colors hover:text-accent hover:decoration-accent">
        {part.text}
      </Link>
    ),
  );
}
