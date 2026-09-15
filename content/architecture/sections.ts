/**
 * Site sections (URL namespaces) and categories (groupings inside a section).
 *
 * Categories map 1:1 onto the PDF's page groups, except:
 *   - "Pricing, Plans and Business Value" (341-360) is split into two categories, because plan
 *     pages and ROI arguments serve different intents and live under different URLs.
 *   - "Core Product Pages" (11-30) is labelled "Search & Discovery": every page in that group is
 *     about search and discovery, and "Core Product Pages" is a document heading, not a
 *     reader-facing label.
 *
 * Per-page exceptions (pages that live outside their PDF group's section) are in url-rules.ts.
 * The Analytics section's path follows the app-topology decision in route-decisions.ts.
 */
import { analyticsPath } from "./route-decisions.ts";
import type { CategoryDef, IndexPageDef, SectionDef } from "../../types/content.ts";

export const SECTIONS: SectionDef[] = [
  { id: "home", basePath: "/", label: "Home", rootPage: 1, categories: ["home"] },
  { id: "platform", basePath: "/platform", label: "Platform", rootPage: 2, categories: ["platform"] },
  {
    id: "features",
    basePath: "/features",
    label: "Features",
    categories: ["search-discovery", "ai", "collaboration", "asset-management"],
  },
  { id: "storage", basePath: "/storage", label: "Storage & Ingestion", categories: ["storage-ingestion"] },
  { id: "permissions", basePath: "/permissions", label: "Permissions & Multi-Tenancy", categories: ["permissions-multi-tenancy"] },
  { id: "analytics", basePath: analyticsPath(), label: "Analytics", categories: ["analytics"] },
  { id: "use-cases", basePath: "/use-cases", label: "Use Cases", categories: ["use-cases"] },
  { id: "integrations", basePath: "/integrations", label: "Integrations", rootPage: 241, categories: ["integrations"] },
  { id: "developers", basePath: "/developers", label: "Developers", rootPage: 280, categories: ["developers"] },
  { id: "migration", basePath: "/migration", label: "Migration", rootPage: 281, categories: ["migration"] },
  { id: "architecture", basePath: "/architecture", label: "Architecture & Performance", rootPage: 301, categories: ["architecture-performance"] },
  { id: "security", basePath: "/security", label: "Security & Compliance", rootPage: 321, categories: ["security-compliance"] },
  { id: "pricing", basePath: "/pricing", label: "Pricing", rootPage: 341, categories: ["pricing-plans"] },
  { id: "business-value", basePath: "/business-value", label: "Business Value", categories: ["business-value"] },
  { id: "resources", basePath: "/resources", label: "Resources", categories: ["resources"] },
  { id: "faq", basePath: "/faq", label: "FAQs", categories: ["faq"] },
  { id: "get-started", basePath: "/get-started", label: "Get Started", rootPage: 391, categories: ["conversion"] },
];

export const CATEGORIES: CategoryDef[] = [
  {
    id: "home",
    section: "home",
    label: "Home",
    shortLabel: "Home",
    pdfRanges: [[1, 1]],
    hubPath: "/",
    pageType: "home",
    searchGroup: "Platform",
    visual: {
      medium: ["product-ui", "diagram"],
      concept: "One central creative library: videos, images, documents and audio arriving from connected sources and becoming searchable.",
      avoid: ["generic dashboard mock-ups", "abstract gradient blobs", "stock photos of people pointing at screens"],
    },
  },
  {
    id: "platform",
    section: "platform",
    label: "Platform",
    shortLabel: "Platform",
    pdfRanges: [[2, 10]],
    hubPath: "/platform",
    pageType: "platform",
    searchGroup: "Platform",
    visual: {
      medium: ["diagram", "product-ui"],
      concept: "The library as a system: storage, organisation, AI tagging, search, collaboration, permissions and analytics as connected layers (PDF p.2).",
      avoid: ["feature icon grids standing in for explanation", "fake metrics"],
    },
  },
  {
    id: "search-discovery",
    section: "features",
    label: "Search & Discovery",
    shortLabel: "Search & Discovery",
    pdfRanges: [[11, 30]],
    hubPath: "/features/search-and-discovery",
    pageType: "feature",
    searchGroup: "Search & Discovery",
    visual: {
      medium: ["product-ui", "diagram"],
      concept: "A query resolving against a large creative library: filters narrowing results, previews, the matched signal (filename, metadata, OCR text, tag) made visible.",
      avoid: ["magnifying-glass clip art", "search bars with lorem ipsum results"],
    },
  },
  {
    id: "ai",
    section: "features",
    label: "AI",
    shortLabel: "AI",
    pdfRanges: [[31, 60]],
    hubPath: "/features/ai",
    pageType: "ai-feature",
    searchGroup: "AI",
    visual: {
      medium: ["diagram", "product-ui"],
      concept: "Media in, understanding out: an asset with the detected signal overlaid (objects, scenes, moods, colours, faces, text) and the resulting tag with its approval state.",
      avoid: ["glowing brains", "robot imagery", "neural-network wallpaper", "implying accuracy numbers"],
    },
  },
  {
    id: "collaboration",
    section: "features",
    label: "Collaboration",
    shortLabel: "Collaboration",
    pdfRanges: [[61, 90]],
    hubPath: "/features/collaboration",
    pageType: "feature",
    searchGroup: "Collaboration",
    visual: {
      medium: ["product-ui", "diagram"],
      concept: "Feedback attached to the work itself: a comment pinned to a timeline frame, a thread beside an image, an approval state changing.",
      avoid: ["chat-bubble icon collages", "stock photos of meetings"],
    },
  },
  {
    id: "asset-management",
    section: "features",
    label: "Versioning & Asset Management",
    shortLabel: "Asset Management",
    pdfRanges: [[91, 120]],
    hubPath: "/features/asset-management",
    pageType: "workflow",
    searchGroup: "Versioning & Asset Management",
    visual: {
      medium: ["diagram", "product-ui"],
      concept: "An asset record over time: stacked versions, status changes, lifecycle stages from upload to archive, and the audit trail beside it.",
      avoid: ["filing-cabinet metaphors", "clock icons"],
    },
  },
  {
    id: "storage-ingestion",
    section: "storage",
    label: "Storage & Ingestion",
    shortLabel: "Storage & Ingestion",
    pdfRanges: [[121, 150]],
    hubPath: "/storage",
    pageType: "storage",
    searchGroup: "Storage & Ingestion",
    visual: {
      medium: ["diagram", "product-ui"],
      concept: "Content entering the library: sources (drives, S3, NAS, uploads) flowing through upload, processing and indexing into a searchable state.",
      avoid: ["server-rack stock photography", "cloud icons raining files"],
    },
  },
  {
    id: "permissions-multi-tenancy",
    section: "permissions",
    label: "Permissions & Multi-Tenancy",
    shortLabel: "Permissions",
    pdfRanges: [[151, 180]],
    hubPath: "/permissions",
    pageType: "access-security",
    searchGroup: "Permissions & Multi-Tenancy",
    visual: {
      medium: ["diagram"],
      concept: "Who can see what: a folder tree with role scopes applied, private-by-default folders, and client tenants as separated boundaries.",
      avoid: ["padlock and shield icons as the main visual", "hacker imagery"],
    },
  },
  {
    id: "analytics",
    section: "analytics",
    label: "Analytics",
    shortLabel: "Analytics",
    pdfRanges: [[181, 210]],
    hubPath: analyticsPath(),
    pageType: "analytics",
    searchGroup: "Analytics",
    visual: {
      medium: ["data-visual", "product-ui"],
      concept: "Library activity as evidence: uploads, storage by category, top tags and contributors over daily/weekly/monthly windows — with illustrative, clearly unlabelled scales.",
      avoid: ["invented numbers or percentages", "KPI tiles with fake growth figures"],
    },
  },
  {
    id: "use-cases",
    section: "use-cases",
    label: "Use Cases",
    shortLabel: "Use Cases",
    pdfRanges: [[211, 240]],
    hubPath: "/use-cases",
    pageType: "use-case",
    searchGroup: "Use Cases",
    visual: {
      medium: ["photography", "product-ui"],
      concept: "The team's real material and environment (footage on an edit timeline, a product shoot, a newsroom archive) paired with the GetSibu capabilities the PDF names for that team.",
      avoid: ["customer logos", "testimonials", "people-smiling-at-laptop stock"],
    },
  },
  {
    id: "integrations",
    section: "integrations",
    label: "Integrations",
    shortLabel: "Integrations",
    pdfRanges: [[241, 260]],
    hubPath: "/integrations",
    pageType: "integration",
    searchGroup: "Integrations",
    visual: {
      medium: ["diagram"],
      concept: "The connection itself: the external tool and GetSibu, and what flows between them (assets, events, notifications). Third-party marks only per each vendor's brand guidelines.",
      avoid: ["logo walls implying partnerships", "spaghetti connector diagrams"],
    },
  },
  {
    id: "developers",
    section: "developers",
    label: "API & Developers",
    shortLabel: "Developers",
    pdfRanges: [[261, 280]],
    hubPath: "/developers",
    pageType: "developer",
    searchGroup: "API & Developers",
    visual: {
      medium: ["code-concept", "diagram"],
      concept: "Request and event flow between an external application and the GetSibu API. Code is shown only where it matches published API documentation.",
      avoid: ["invented endpoint paths or payloads", "matrix-style code rain"],
    },
  },
  {
    id: "migration",
    section: "migration",
    label: "Migration",
    shortLabel: "Migration",
    pdfRanges: [[281, 300]],
    hubPath: "/migration",
    pageType: "migration",
    searchGroup: "Migration",
    visual: {
      medium: ["diagram"],
      concept: "A structured transfer: an existing folder tree and its metadata mapped into the new library, with verification checkpoints.",
      avoid: ["moving-truck metaphors", "rocket launches"],
    },
  },
  {
    id: "architecture-performance",
    section: "architecture",
    label: "Architecture & Performance",
    shortLabel: "Architecture",
    pdfRanges: [[301, 320]],
    hubPath: "/architecture",
    pageType: "architecture",
    searchGroup: "Architecture & Performance",
    visual: {
      medium: ["diagram"],
      concept: "The layered architecture named in the PDF — clients, edge services, APIs, search infrastructure, storage — as a precise technical drawing.",
      avoid: ["speed lines", "stopwatch imagery", "benchmark charts without published data"],
    },
  },
  {
    id: "security-compliance",
    section: "security",
    label: "Security & Compliance",
    shortLabel: "Security",
    pdfRanges: [[321, 340]],
    hubPath: "/security",
    pageType: "access-security",
    searchGroup: "Security & Compliance",
    visual: {
      medium: ["diagram", "typographic"],
      concept: "Controls shown as structure: tenant boundaries, encryption at rest, identity (SSO/SCIM/MFA), audit history — clear labels over decoration.",
      avoid: ["certification badges not confirmed on the official site", "padlock stock art"],
    },
  },
  {
    id: "pricing-plans",
    section: "pricing",
    label: "Pricing & Plans",
    shortLabel: "Pricing",
    pdfRanges: [[341, 347]],
    hubPath: "/pricing",
    pageType: "pricing",
    searchGroup: "Pricing & Plans",
    visual: {
      medium: ["typographic"],
      concept: "Plans compared plainly: what each plan includes, in the words and figures confirmed on the official site.",
      avoid: ["decorative illustration", "fake 'most popular' badges without basis"],
    },
  },
  {
    id: "business-value",
    section: "business-value",
    label: "Business Value",
    shortLabel: "Business Value",
    pdfRanges: [[348, 360]],
    hubPath: "/business-value",
    pageType: "business-value",
    searchGroup: "Business Value",
    visual: {
      medium: ["diagram", "photography"],
      concept: "Where time and storage go without a central library (searching, recreating, version confusion) versus with one — described qualitatively.",
      avoid: ["ROI percentages", "calculator widgets with invented defaults"],
    },
  },
  {
    id: "resources",
    section: "resources",
    label: "Resources",
    shortLabel: "Resources",
    pdfRanges: [[361, 380]],
    hubPath: "/resources",
    pageType: "resource",
    searchGroup: "Resources",
    visual: {
      medium: ["diagram", "typographic"],
      concept: "Explanatory figures that teach the concept (what metadata is, how a taxonomy nests, what a scene boundary is) — vendor-neutral where the article is.",
      avoid: ["decorative hero photography unrelated to the concept"],
    },
  },
  {
    id: "faq",
    section: "faq",
    label: "FAQs",
    shortLabel: "FAQs",
    pdfRanges: [[381, 390]],
    hubPath: "/faq",
    pageType: "faq",
    searchGroup: "FAQs",
    visual: {
      medium: ["typographic"],
      concept: "Answer-first typography; a small supporting product visual only where it shows the answer.",
      avoid: ["question-mark illustrations"],
    },
  },
  {
    id: "conversion",
    section: "get-started",
    label: "Get Started",
    shortLabel: "Get Started",
    pdfRanges: [[391, 400]],
    hubPath: "/get-started",
    pageType: "conversion",
    searchGroup: "Get Started",
    visual: {
      medium: ["product-ui", "photography", "typographic"],
      concept: "A single strong statement with one visual of the promised outcome (scattered sources becoming one library, a search that finds the asset).",
      avoid: ["countdown timers", "urgency banners", "fake social proof"],
    },
  },
];

/**
 * Generated index pages: section and category hubs that are not PDF pages.
 * Ledes are verbatim PDF sentences (with the page cited) or claim-free editorial copy; meta
 * descriptions are written from PDF terminology so they never duplicate a page's own description.
 */
export const INDEX_PAGES: IndexPageDef[] = [
  {
    id: "features",
    path: "/features",
    section: "features",
    title: "Features",
    h1: "GetSibu features",
    lede:
      "GetSibu combines organisation, metadata, AI analysis, collaboration, versioning, approvals and auditability into one asset management workflow.",
    ledeSource: [{ kind: "pdf", page: 120 }],
    description:
      "Search and discovery, AI, collaboration, versioning and asset management features in GetSibu, the creative asset management platform.",
    groupBy: [],
  },
  {
    id: "search-discovery",
    path: "/features/search-and-discovery",
    section: "features",
    category: "search-discovery",
    title: "Search & Discovery",
    h1: "Search & Discovery",
    lede:
      "GetSibu makes creative assets searchable through filenames, metadata, OCR, AI-generated tags, comments and semantic information.",
    ledeSource: [{ kind: "pdf", page: 11 }],
    description:
      "GetSibu search and discovery: creative asset search, semantic search, OCR-powered search, advanced media filters, saved searches and metadata indexing.",
    groupBy: ["creative-search", "semantic-search", "ocr-search", "filters-saved-searches", "indexing-metadata", "media-libraries", "search-speed"],
  },
  {
    id: "ai",
    path: "/features/ai",
    section: "features",
    category: "ai",
    title: "AI Features",
    h1: "AI Features",
    lede:
      "GetSibu focuses AI capabilities on practical library problems such as discovery, organisation, tagging, OCR, duplicate detection and media analysis rather than adding AI features without a workflow purpose.",
    ledeSource: [{ kind: "pdf", page: 60 }],
    description:
      "GetSibu AI features: AI-assisted tagging, vision analysis, object, mood and colour detection, OCR, duplicate detection and AI-assisted discovery.",
    groupBy: ["ai-tagging", "ai-vision", "face-grouping", "duplicate-detection", "ai-collections", "ai-discovery", "ai-intelligence", "ai-approach"],
  },
  {
    id: "collaboration",
    path: "/features/collaboration",
    section: "features",
    category: "collaboration",
    title: "Collaboration",
    h1: "Collaboration",
    lede:
      "GetSibu provides collaboration features directly inside the asset library so teams can discuss files without moving conversations into disconnected tools.",
    ledeSource: [{ kind: "pdf", page: 61 }],
    description:
      "Collaboration in GetSibu: asset comments, threaded discussions, video timeline comments, frame-accurate review, mentions, approval workflows and shared views.",
    groupBy: ["comments-feedback", "video-review", "approvals", "sharing-views", "team-collaboration"],
  },
  {
    id: "asset-management",
    path: "/features/asset-management",
    section: "features",
    category: "asset-management",
    title: "Versioning & Asset Management",
    h1: "Versioning & Asset Management",
    lede:
      "GetSibu allows teams to replace assets in place while retaining previous versions. This helps prevent confusion caused by filenames such as \"final\", \"final-v2\" and \"final-final\".",
    ledeSource: [{ kind: "pdf", page: 91 }],
    description:
      "Versioning and asset management in GetSibu: version history, asset lifecycle and status, approved asset libraries, archiving, governance and audit trail.",
    groupBy: ["versioning", "asset-lifecycle", "brand-control", "library-maintenance", "governance", "audit-history"],
  },
  {
    id: "storage",
    path: "/storage",
    section: "storage",
    category: "storage-ingestion",
    title: "Storage & Ingestion",
    h1: "Storage & Ingestion",
    lede:
      "GetSibu supports asset ingestion from connected storage sources and direct uploads. This allows teams to bring existing libraries into the platform without rebuilding their entire storage workflow manually.",
    ledeSource: [{ kind: "pdf", page: 121 }],
    description:
      "Storage and ingestion in GetSibu: connected storage sources, drag and drop and bulk uploads, asset processing, streaming previews and storage analytics.",
    groupBy: ["storage-connectors", "ingestion", "uploads", "processing", "previews-delivery", "storage-analytics", "migration-overview"],
  },
  {
    id: "permissions",
    path: "/permissions",
    section: "permissions",
    category: "permissions-multi-tenancy",
    title: "Permissions & Multi-Tenancy",
    h1: "Permissions & Multi-Tenancy",
    lede:
      "GetSibu provides granular permissions so organisations can control who can access different areas of their creative library.",
    ledeSource: [{ kind: "pdf", page: 151 }],
    description:
      "Permissions and multi-tenancy in GetSibu: role-based access control, folder-level permissions, default-deny access and client tenant isolation.",
    groupBy: ["access-control", "multi-tenancy", "access-audit", "secure-collaboration", "governance"],
  },
  {
    id: "analytics",
    path: analyticsPath(),
    section: "analytics",
    category: "analytics",
    title: "Analytics",
    h1: "Analytics",
    lede:
      "GetSibu analytics provide visibility into uploads, comments, storage, contributors, tags and other library activity.",
    ledeSource: [{ kind: "pdf", page: 181 }],
    description:
      "GetSibu analytics: creative asset, usage, storage, upload, contributor and tag analytics, with daily, weekly and monthly views of library activity.",
    groupBy: ["library-analytics", "analytics-cadence", "usage-tracking", "access-audit", "storage-analytics", "team-analytics", "reporting"],
  },
  {
    id: "use-cases",
    path: "/use-cases",
    section: "use-cases",
    category: "use-cases",
    title: "Use Cases",
    h1: "Who GetSibu is for",
    lede:
      "GetSibu is designed for production teams, marketing teams, agencies, brand teams, creative studios and other organisations managing large creative libraries.",
    ledeSource: [{ kind: "pdf", page: 382 }],
    description:
      "How production studios, video, marketing and brand teams, agencies, creators and communications teams can use GetSibu to manage creative libraries.",
    groupBy: ["uc-video-production", "uc-marketing-brand", "uc-agencies", "uc-studios-creators", "uc-communications"],
  },
  {
    id: "business-value",
    path: "/business-value",
    section: "business-value",
    category: "business-value",
    title: "Business Value",
    h1: "The business value of GetSibu",
    lede:
      "The business case for GetSibu can be built around faster discovery, improved organisation, stronger governance and more efficient collaboration.",
    ledeSource: [{ kind: "pdf", page: 359 }],
    description:
      "The business value of GetSibu: asset discovery ROI, creative workflow ROI, duplicate reduction and productivity for creative, marketing and production teams.",
    groupBy: ["roi", "productivity"],
  },
  {
    id: "resources",
    path: "/resources",
    section: "resources",
    category: "resources",
    title: "Resources",
    h1: "Resources",
    lede: "Explanations of digital asset management concepts, AI capabilities and where creative libraries are heading.",
    ledeSource: [{ kind: "editorial", note: "Claim-free index description; no product facts." }],
    description:
      "Guides to digital asset management: what DAM, AI tagging, semantic search, OCR, versioning, metadata and taxonomy are, and where creative libraries are heading.",
    groupBy: ["dam-fundamentals", "ai-explainers", "workflow-explainers", "future-of-dam"],
    crossListings: [],
  },
  {
    id: "faq",
    path: "/faq",
    section: "faq",
    category: "faq",
    title: "FAQs",
    h1: "Frequently asked questions",
    lede: "Direct answers to common questions about GetSibu.",
    ledeSource: [{ kind: "editorial", note: "Claim-free index description; answers carry their own PDF sources." }],
    description:
      "Answers to common questions about GetSibu: who it is for, AI tagging, document search, video comments, versioning, multiple clients, the API and integrations.",
    groupBy: [],
  },
];

export const sectionById = new Map(SECTIONS.map((s) => [s.id, s]));
export const categoryById = new Map(CATEGORIES.map((c) => [c.id, c]));

/**
 * Listing config for sections whose root is a PDF page (rather than a generated index).
 * The root page renders its children grouped by these clusters, plus cross-listed pages that
 * live in other sections but belong on this hub.
 */
export const ROOT_LISTINGS: Record<number, { groupBy: string[]; crossListings?: number[] }> = {
  2: { groupBy: ["platform-positioning", "centralisation", "library-organisation", "ai-approach", "creative-search"] },
  241: {
    groupBy: ["storage-connectors", "creative-tool-integrations", "workflow-automation", "webhooks", "api-platform", "integrations-overview"],
    crossListings: [122, 123, 124, 125, 126, 252, 253],
  },
  280: { groupBy: ["api-platform", "api-endpoints", "webhooks", "api-security", "workflow-automation"] },
  281: {
    groupBy: ["migration-overview", "migration-sources", "migration-planning", "metadata-preservation", "folder-mapping", "bulk-import"],
    crossListings: [130, 131, 132, 133, 134],
  },
  301: { groupBy: ["architecture-infrastructure", "performance", "previews-delivery", "search-speed", "processing", "uploads"] },
  321: {
    groupBy: ["security-foundations", "identity", "compliance", "resilience", "audit-history", "governance", "access-control", "multi-tenancy"],
    crossListings: [153, 160, 172],
  },
  341: { groupBy: ["pricing-plans", "roi"], crossListings: [359, 360] },
  391: { groupBy: ["conversion"] },
};

/** Common alternative URLs for supporting pages, redirected permanently. */
export const SUPPORTING_REDIRECTS: Array<{ source: string; destination: string }> = [
  { source: "/about-us", destination: "/about" },
  { source: "/contact-us", destination: "/contact" },
];

/**
 * Supporting pages that are not in the PDF but a working site needs. They are not generated
 * until their content exists: GetSibu must supply it, because the official site's versions are
 * placeholders (stock-photo team, "Lumen" emails, fictional phone number) or dead links.
 */
export const SUPPORTING_PAGES: Array<{
  path: string;
  title: string;
  purpose: string;
  /** generated: built from the inventory; source-safe: built from verified statements only (content/architecture/company-pages.ts). */
  contentStatus: "needs-client-content" | "generated" | "source-safe" | "not-built";
  indexable: boolean;
}> = [
  { path: "/contact", title: "Contact GetSibu", purpose: "Routes to verified pages and the official sign-up and sign-in. Needs a real contact channel before it is indexed or the \"Book a demo\" CTA returns.", contentStatus: "source-safe", indexable: false },
  { path: "/about", title: "About GetSibu", purpose: "What GetSibu is and who it is for, from verified PDF statements. Needs real company information (team, history) from GetSibu to go further.", contentStatus: "source-safe", indexable: true },
  { path: "/legal/privacy", title: "Privacy Policy", purpose: "Required legal page; official footer link is dead.", contentStatus: "needs-client-content", indexable: true },
  { path: "/legal/terms", title: "Terms of Service", purpose: "Required legal page; official footer link is dead.", contentStatus: "needs-client-content", indexable: true },
  { path: "/legal/dpa", title: "Data Processing Addendum", purpose: "Legal DPA document (distinct from the PDF's marketing page /security/data-processing-agreement).", contentStatus: "needs-client-content", indexable: false },
  { path: "/sitemap", title: "Sitemap", purpose: "Human-readable directory of every live route, grouped by category, with a filter (Mengo sitemap structure; lib/content/directory.ts). The search dialog's \"Explore all pages\" destination. Titles and links only.", contentStatus: "generated", indexable: true },
  { path: "/site-search", title: "Search results", purpose: "\"Explore all results\" target for global search. Not /search, which the app uses.", contentStatus: "generated", indexable: false },
];
