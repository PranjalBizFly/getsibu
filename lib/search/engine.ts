/**
 * Global search over content/generated/search-index.json.
 *
 * No service and no library: 408 documents are scored in the browser in well under a millisecond.
 * Scoring favours title matches, then topic-cluster keywords, then section and summary. Every query
 * term must match somewhere (one may miss for queries of three or more terms). Results are grouped
 * by the PDF hierarchy (a page's category), and groups are ordered by their best match so the most
 * relevant group leads.
 */

import type { SearchGroup } from "@/types/content";
export type { SearchGroup };

export interface SearchDocument {
  id: string;
  title: string;
  path: string;
  group: SearchGroup;
  type: string;
  section: string;
  summary: string;
  keywords: string[];
  /** False when the summary contains a claim that is not confirmed; the UI hides the summary. */
  publishable: boolean;
  /** Cluster primary or hub: preferred over other pages with the same match. */
  pillar: boolean;
}

export interface SearchIndex {
  groups: SearchGroup[];
  documents: SearchDocument[];
}

export interface SearchHit {
  doc: SearchDocument;
  score: number;
  /**
   * Match quality: 3 title equals/starts with the query, 2 every term is in the title,
   * 1 some term matches the title or topic keywords, 0 section or summary only.
   */
  tier: 0 | 1 | 2 | 3;
}

export interface SearchResultGroup {
  group: SearchGroup;
  hits: SearchHit[];
}

const STOPWORDS = new Set(["a", "an", "and", "the", "of", "for", "to", "in", "on", "with", "is", "are", "what", "how", "does", "do", "can", "my", "your", "i"]);

export function normalise(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/** Light English stemmer: enough to match tag / tags / tagging, organise / organisation stays separate. */
export function stem(token: string): string {
  if (token.length <= 3) return token;
  let t = token;
  if (t.endsWith("ies") && t.length > 4) t = `${t.slice(0, -3)}y`;
  else if (t.endsWith("ing") && t.length > 5) t = t.slice(0, -3);
  else if (t.endsWith("ed") && t.length > 4) t = t.slice(0, -2);
  else if (t.endsWith("es") && t.length > 4 && /(ch|sh|ss|x|z)es$/.test(t)) t = t.slice(0, -2);
  else if (t.endsWith("s") && !t.endsWith("ss") && t.length > 3) t = t.slice(0, -1);
  // "tagg" → "tag", "mapp" → "map" (but keep "ll", "ss")
  if (/([b-df-hj-km-np-rtv-z])\1$/.test(t) && !/(ll|ss|zz)$/.test(t)) t = t.slice(0, -1);
  return t;
}

const tokenise = (value: string) => normalise(value).split(" ").filter(Boolean).map(stem);

interface Prepared {
  doc: SearchDocument;
  titleNorm: string;
  /** Title with "digital asset management" written as "dam", so both phrasings match. */
  aliasNorm: string;
  title: string[];
  keywords: string[];
  section: string[];
  summary: Set<string>;
}

const prepared = new WeakMap<SearchIndex, Prepared[]>();

function prepare(index: SearchIndex): Prepared[] {
  let docs = prepared.get(index);
  if (!docs) {
    docs = index.documents.map((doc) => ({
      doc,
      titleNorm: normalise(doc.title),
      aliasNorm: normalise(doc.title).replace(/digital asset management/g, "dam"),
      title: [...new Set([...tokenise(doc.title), ...tokenise(doc.title.replace(/digital asset management/gi, "DAM"))])],
      keywords: tokenise(doc.keywords.filter((k) => !k.startsWith("/")).join(" ")),
      section: tokenise(doc.section),
      // Hubs describe whole sections; matching their summaries only adds noise.
      summary: new Set(doc.type === "section-index" ? [] : tokenise(doc.summary)),
    }));
    prepared.set(index, docs);
  }
  return docs;
}

const prefixMatch = (tokens: string[], term: string) => term.length >= 2 && tokens.some((t) => t.startsWith(term));

export function search(index: SearchIndex, query: string): SearchHit[] {
  const queryNorm = normalise(query);
  if (!queryNorm) return [];
  const all = tokenise(query);
  const meaningful = all.filter((t) => !STOPWORDS.has(t));
  const terms = meaningful.length ? meaningful : all;
  // "GetSibu" appears in many titles; it only counts when it is the whole query.
  const scoredTerms = terms.length > 1 ? terms.filter((t) => t !== "getsibu") : terms;
  const allowedMisses = scoredTerms.length >= 3 ? 1 : 0;

  const hits: SearchHit[] = [];
  for (const p of prepare(index)) {
    let score = 0;
    let misses = 0;
    let titleTerms = 0;
    let keywordTerms = 0;
    for (const term of scoredTerms) {
      let termScore = 0;
      if (p.title.includes(term)) termScore = 60;
      else if (prefixMatch(p.title, term)) termScore = 36;
      else if (p.keywords.includes(term)) termScore = 18;
      else if (prefixMatch(p.keywords, term)) termScore = 10;
      else if (p.section.includes(term)) termScore = 8;
      else if (p.summary.has(term)) termScore = 6;
      if (termScore >= 36) titleTerms++;
      else if (termScore >= 10) keywordTerms++;
      if (termScore === 0) misses++;
      score += termScore;
    }
    if (misses > allowedMisses || score === 0) continue;

    let tier: SearchHit["tier"] = titleTerms === scoredTerms.length ? 2 : titleTerms + keywordTerms > 0 ? 1 : 0;
    if (p.titleNorm === queryNorm || p.aliasNorm === queryNorm) {
      score += 1000;
      tier = 3;
    } else if (p.titleNorm.startsWith(queryNorm) || p.aliasNorm.startsWith(queryNorm)) {
      score += 300;
      tier = 3;
    } else if (p.titleNorm.includes(queryNorm) || p.aliasNorm.includes(queryNorm)) {
      score += 120;
    }
    if (p.doc.pillar && tier >= 1) score += 25;
    // Shorter titles are more specific matches for the same terms.
    score -= p.title.length * 4;
    hits.push({ doc: p.doc, score, tier });
  }
  return hits.sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title));
}

/**
 * Groups hits by content type. Groups are ordered by the quality of their best hit, then by the
 * index's fixed group order, so the most relevant kind of page leads and placement stays predictable.
 */
export function groupHits(hits: SearchHit[], order: SearchGroup[], perGroup = Infinity): SearchResultGroup[] {
  const groups = new Map<SearchGroup, SearchHit[]>();
  for (const hit of hits) {
    const list = groups.get(hit.doc.group) ?? [];
    list.push(hit);
    groups.set(hit.doc.group, list);
  }
  const rank = (group: SearchGroup) => order.indexOf(group);
  // Hits are already sorted, so each group's first hit is its best match.
  return [...groups.entries()]
    .sort(([ga, a], [gb, b]) => b[0].tier - a[0].tier || rank(ga) - rank(gb))
    .map(([group, list]) => ({ group, hits: list.slice(0, perGroup) }));
}

let indexPromise: Promise<SearchIndex> | null = null;

/** Loads the static index once per page view, on first use. */
export function loadSearchIndex(): Promise<SearchIndex> {
  indexPromise ??= fetch("/search-index.json")
    .then((response) => {
      if (!response.ok) throw new Error(`Search index returned ${response.status}`);
      return response.json() as Promise<SearchIndex>;
    })
    .catch((error) => {
      indexPromise = null;
      throw error;
    });
  return indexPromise;
}
