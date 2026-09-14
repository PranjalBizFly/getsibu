/**
 * Parse Getsibu.pdf (as extracted text) into content/source/pdf-pages.json.
 *
 *   pdftotext -layout docs/source/Getsibu.pdf docs/source/Getsibu.txt
 *   npm run source:extract
 *
 * The PDF is the master blueprint: this script only splits it into records. It does not
 * rewrite, summarise or reorder anything. It fails loudly if the numbering is not exactly 1..400.
 */
import { readFileSync, writeFileSync } from "node:fs";
import type { PdfGroup, SourcePage } from "../types/content.ts";

const INPUT = process.argv[2] ?? "docs/source/Getsibu.txt";
const OUTPUT = "content/source/pdf-pages.json";
const EXPECTED_PAGES = 400;

const lines = readFileSync(INPUT, "utf8")
  .replace(/\r/g, "")
  .split("\n")
  .map((line) => line.replace(/\f/g, "").trim());

const GROUP_RE = /^(\d{1,3})-(\d{1,3})\.\s+(.+)$/;
const ENTRY_RE = /^(\d{1,3})\.\s+(.+)$/;

// Pages 1-10 precede the first group heading in the PDF.
let group: PdfGroup = { range: "1-10", start: 1, end: 10, label: "Platform", headingInSource: false };
let expected = 1;
let current: { number: number; sourceTitle: string; body: string[]; group: PdfGroup } | null = null;
const pages: SourcePage[] = [];

const flush = () => {
  if (!current) return;
  const text = current.body.join(" ").replace(/\s+/g, " ").trim();
  if (!text) throw new Error(`Page ${current.number} has no body text`);
  pages.push({
    number: current.number,
    sourceTitle: current.sourceTitle,
    title: current.sourceTitle.replace(/\s--\s/g, " — "),
    text,
    group: current.group,
  });
  current = null;
};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line === ":::") break; // Everything after is a closing note from the document's author, not a page.

  const groupMatch = GROUP_RE.exec(line);
  if (groupMatch && Number(groupMatch[1]) === expected) {
    flush();
    let label = groupMatch[3];
    // Headings such as "91-120. Versioning and Asset" wrap onto the next line.
    const nextLine = lines[i + 1];
    if (nextLine && !ENTRY_RE.test(nextLine)) {
      label = `${label} ${nextLine}`;
      i++;
    }
    group = {
      range: `${groupMatch[1]}-${groupMatch[2]}`,
      start: Number(groupMatch[1]),
      end: Number(groupMatch[2]),
      label,
      headingInSource: true,
    };
    continue;
  }

  const entryMatch = ENTRY_RE.exec(line);
  if (entryMatch && Number(entryMatch[1]) === expected) {
    flush();
    current = { number: expected, sourceTitle: entryMatch[2].trim(), body: [], group };
    expected++;
    continue;
  }

  if (current && line) current.body.push(line);
}
flush();

if (pages.length !== EXPECTED_PAGES) {
  throw new Error(`Expected ${EXPECTED_PAGES} pages, parsed ${pages.length} (stopped before page ${expected})`);
}
for (const page of pages) {
  if (page.number < page.group.start || page.number > page.group.end) {
    throw new Error(`Page ${page.number} falls outside its group ${page.group.range}`);
  }
}

writeFileSync(OUTPUT, `${JSON.stringify(pages, null, 2)}\n`);
const groups = [...new Map(pages.map((p) => [p.group.range, p.group])).values()];
console.log(`Extracted ${pages.length} pages in ${groups.length} groups → ${OUTPUT}`);
for (const g of groups) console.log(`  ${g.range.padEnd(8)} ${g.label}${g.headingInSource ? "" : " (no heading in PDF)"}`);
