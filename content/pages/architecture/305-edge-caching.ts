/**
 * 305 · Edge Caching — /architecture/edge-caching
 *
 * Angle (clusters: previews-delivery, performance): reducing the distance between users and frequently accessed
 * content — cache hits and misses, what suits an edge cache in a creative library, and keeping copies correct
 * (lifetimes, revalidation, purging, versioned addresses, cache keys). CDN Asset Delivery (304) owns the network and
 * routing; Streaming Previews (306) owns partial transfer; Global Asset Access (314) owns teams across regions. No
 * providers, figures or claims about how GetSibu configures its caches.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how edge caches work in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 305,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "Learn how edge caching keeps frequently accessed previews and media a short distance from the people who open them, what happens on a cache hit and a cache miss, and why the uneven way creative libraries are used suits it.",
      visual: { diagram: "architecture-stack", focus: "edge" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 305 }, { kind: "pdf", page: 304 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Keeping popular content a short distance away",
      body: [
        [
          "Edge caching reduces the distance between users and frequently accessed content. In GetSibu it sits alongside ",
          { text: "CDN delivery", page: 304 },
          " in the edge services layer of the architecture.",
        ],
        "An edge cache is a store of copies held at locations near the people requesting them. Whether it helps depends on repetition: content requested again and again gains the most, while content requested once gains nothing.",
        "Requests in a creative library are rarely even. The approved logo pack, the key visuals of a live campaign and the latest cut awaiting sign-off are opened again and again, while years of finished projects sit largely untouched. That unevenness is exactly the pattern an edge cache is built to take advantage of.",
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Copies held near viewers", "Hits answered nearby", "Misses fetched from the origin", "Freshness through expiry and invalidation", "Repetition decides the benefit"],
      },
      highlight: {
        heading: "In practice",
        body: "A producer reopens the same cut several times in one morning while colleagues in the same office do the same. Repeated demand of that kind, concentrated in one place, is what an edge cache is suited to.",
        tags: ["Review", "Repeat viewing", "Offices"],
      },
      glance: {
        heading: "Edge caching in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Keeps close", value: "Frequently accessed content" },
          { label: "Layer", value: "Edge services" },
          { label: "Supports", value: "Large Library Performance", page: 309 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 305 }, { kind: "pdf", page: 304 }, { kind: "pdf", page: 301 }, { kind: "pdf", page: 309 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "hit-and-miss",
      eyebrow: "Hit and miss",
      heading: "The life of a cached copy at one edge location",
      stages: [
        { label: "First request: a miss", body: "Nobody near this location has asked for the item recently, so there is no copy. The request goes on to the origin, and the response is passed back to the viewer." },
        { label: "Stored for next time", body: "If the response may be cached, the edge keeps a copy together with how long it can be served before it counts as stale." },
        { label: "Repeat requests: hits", body: "Further requests for the same item at that location are answered from the copy without a trip to the origin, which is where the shorter distance comes from." },
        { label: "Expiry and revalidation", body: "When the copy’s lifetime ends, the edge checks with the origin; an unchanged item can be marked fresh again without being transferred in full." },
        { label: "Eviction", body: "Edge storage is finite, so copies that have not been requested for a while are removed to make room for content people are opening now." },
      ],
      sources: [{ kind: "pdf", page: 305 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "fit",
      eyebrow: "What caches well",
      heading: "How well different library content suits an edge cache",
      columns: ["How often it is requested", "How often it changes", "Fit for edge caching"],
      rows: [
        { label: "Brand staples such as logos and templates", cells: ["Constantly, by many teams", "Rarely", "Strong: long-lived and widely shared"] },
        { label: "Previews for a live campaign", cells: ["Heavily for a period", "Occasionally, when corrected", "Good, provided changes reach the edge"] },
        { label: "Work in progress under review", cells: ["Repeatedly, by a small group", "Often, with each new version", "Mixed: freshness matters more than reach"] },
        { label: "Archived projects", cells: ["Seldom", "Almost never", "Weak: most requests will be misses"] },
        { label: "A brand-new upload", cells: ["Once or twice at first", "Not yet", "Weak until people start opening it"] },
      ],
      sources: [{ kind: "pdf", page: 305 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "freshness",
      eyebrow: "Freshness",
      heading: "Keeping cached copies correct as the library changes",
      intro: "These are general caching techniques; which of them any particular platform uses is a question for that platform.",
      items: [
        {
          heading: "Stale copies are the central risk",
          summary: "A cache that serves an out-of-date preview is fast and wrong.",
          icon: "refresh",
          body: [
            "Creative libraries change constantly: an image is corrected, a preview regenerated, a cut updated before review. A copy held at the edge has no way of knowing the original changed unless the caching design provides one.",
            "The more often content is corrected or replaced, the more a caching design has to account for change as well as for distance.",
          ],
        },
        {
          heading: "Lifetimes decide how long a copy is served",
          summary: "Every cached response carries a period for which it is treated as fresh.",
          icon: "clock",
          body: [
            "Long lifetimes produce the most hits and the least load on the origin, but they widen the window in which an outdated copy can be served. Short lifetimes keep content current at the cost of more trips back to the origin.",
            "Choosing a lifetime is therefore a judgement about how quickly a change must be seen, weighed against how much traffic the origin should carry.",
          ],
        },
        {
          heading: "Purging removes copies on purpose",
          summary: "When content changes, copies can be discarded rather than left to expire.",
          icon: "trash",
          body: [
            "A purge tells the network to drop its copies of an item, so the next request fetches the current version from the origin. It is precise, but only as dependable as the process that signals each change.",
            "Purges spread across locations quickly but not all at the same moment, which is worth remembering when a correction is checked from several places at once.",
          ],
        },
        {
          heading: "Versioned addresses sidestep the problem",
          summary: "When each version has its own address, an old copy can never be mistaken for a new one.",
          icon: "history",
          body: [
            "If a corrected preview is published under a new address, requests for it cannot be answered with the earlier copy, because that copy is stored under a different key. The old copy simply stops being requested and is eventually evicted.",
            "The approach suits content that is replaced rather than edited in place, because each replacement can simply be given an address of its own.",
          ],
        },
        {
          heading: "Cache keys define what counts as the same item",
          summary: "The edge treats two requests as identical only when their keys match.",
          icon: "key",
          body: [
            "A cache key is usually built from the request address plus selected details of the request. A key that includes details which vary needlessly stores identical content many times and makes hits rare; a key that leaves out details which matter can serve the wrong content.",
            "For previews delivered in several sizes or formats, the key has to tell those variants apart while still grouping requests that are genuinely the same.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about edge caching",
      items: [
        {
          question: "Is an edge cache the same as a browser cache?",
          answer: "No, although both keep copies to avoid fetching content again. A browser cache holds copies on one person’s device for that person alone; an edge cache holds them at a network location, where a single stored copy can answer many different people nearby.",
        },
        {
          question: "What is a cache hit ratio, and what does a low one suggest?",
          answer: "It is the share of requests answered from cached copies rather than by the origin. A low ratio usually means content is rarely repeated, lifetimes are short, or cache keys vary more than they should.",
        },
        {
          question: "Should thumbnails and previews be cached differently from original files?",
          answer: "Often, yes. Previews are small, requested repeatedly and replaced when regenerated, which makes them strong candidates. Originals are large, requested less often and may carry stricter access expectations, so caching designs tend to treat them more cautiously.",
        },
        {
          question: "How does edge caching relate to large library performance in GetSibu?",
          answer: [
            "Edge caching is one of the considerations, together with chunked I/O and indexing, that help ",
            { text: "support larger creative environments", page: 309 },
            ". It addresses repeated requests for popular content, while the other two concern moving large files and finding assets.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 309 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on delivering content close to users",
      variant: "compact",
      pages: [304, 309, 306, 313, 314],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Scale Your Creative Library",
      conversionPage: 397,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 397 }],
    },
  ],
};

export default page;
