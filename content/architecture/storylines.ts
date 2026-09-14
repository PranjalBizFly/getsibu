/**
 * Storylines: curated sets of PDF pages that tell a sequence, a stack, a timeline or a contrast.
 *
 * Page composition (scripts/compose-pages.ts) uses them to give every page type its visual story
 * without inventing copy:
 *   - every item points at a PDF page; its body is that page's own statement, shown only when the
 *     page's claims are publishable (items that are not are dropped)
 *   - labels are short terms taken from the PDF (usually the page title or the phrase the PDF uses)
 *   - the page being viewed is marked `current` when it is part of the set
 *
 * Selection: the first set whose `pages` include the page wins; then the first set sharing one of
 * the page's clusters; then the first set for the page's category.
 *
 * Comparison, matrix and before/after sets carry literal cell text. Each is a close paraphrase of
 * the cited PDF pages and must stay claim-free (the validator scans the generated output).
 */
import type { CategoryId, DiagramId, SectionKind } from "../../types/content.ts";

export interface StoryItem {
  label: string;
  page: number;
  /** Diagram focus for this step (story sections only). */
  focus?: string;
}

interface Applies {
  pages?: number[];
  clusters?: string[];
  categories?: CategoryId[];
}

export interface Storyline extends Applies {
  id: string;
  kind: Extract<SectionKind, "layers" | "workflow" | "process" | "timeline" | "story">;
  heading: string;
  /** Claim-free sentence under the heading, or omitted. */
  intro?: string;
  /** PDF pages the heading or intro paraphrase. */
  sourcePages: number[];
  items: StoryItem[];
  /** Story sections: the diagram every step lights up. */
  diagram?: DiagramId;
}

export const STORYLINES: Storyline[] = [
  /* Layers -------------------------------------------------------------------------------------- */
  {
    id: "platform-layers",
    kind: "layers",
    heading: "What the platform brings together",
    intro: "GetSibu brings storage, organisation, AI tagging, search, collaboration, permissions and analytics into one platform.",
    sourcePages: [2],
    clusters: ["platform-positioning", "centralisation", "library-organisation"],
    categories: ["platform", "conversion"],
    items: [
      { label: "Storage", page: 150 },
      { label: "Organisation", page: 8 },
      { label: "AI tagging", page: 31 },
      { label: "Search", page: 11 },
      { label: "Collaboration", page: 61 },
      { label: "Permissions", page: 151 },
      { label: "Analytics", page: 181 },
    ],
  },
  {
    id: "architecture-layers",
    kind: "layers",
    heading: "How the platform is layered",
    intro: "GetSibu is built around clients, edge services, APIs, search infrastructure and storage.",
    sourcePages: [301],
    // API-First DAM: the API as the layer between clients and storage (the developer hub keeps "The developer surface").
    pages: [254],
    categories: ["architecture-performance"],
    items: [
      { label: "Clients", page: 303 },
      { label: "Edge services", page: 305 },
      { label: "APIs", page: 315 },
      { label: "Search infrastructure", page: 317 },
      { label: "Storage", page: 318 },
    ],
  },
  {
    id: "security-layers",
    kind: "layers",
    heading: "Security built into the architecture",
    intro: "Encryption, authentication, access control, tenant isolation and audit logging are part of how GetSibu is built.",
    sourcePages: [321],
    clusters: ["security-foundations", "identity", "compliance", "resilience", "secure-collaboration"],
    categories: ["security-compliance"],
    items: [
      { label: "Encryption", page: 323 },
      { label: "Authentication", page: 336 },
      { label: "Access control", page: 325 },
      { label: "Tenant isolation", page: 324 },
      { label: "Audit logging", page: 326 },
    ],
  },
  {
    id: "tenant-layers",
    kind: "layers",
    heading: "What each client environment keeps separate",
    sourcePages: [160, 161],
    clusters: ["multi-tenancy"],
    items: [
      { label: "Client isolation", page: 161 },
      { label: "Storage", page: 163 },
      { label: "AI keys", page: 164 },
      { label: "Authentication", page: 165 },
      { label: "White-label", page: 166 },
    ],
  },
  {
    id: "developer-layers",
    kind: "layers",
    heading: "The developer surface",
    sourcePages: [254, 261],
    categories: ["developers"],
    items: [
      { label: "API access", page: 261 },
      { label: "Authentication", page: 256 },
      { label: "Tenant context", page: 276 },
      { label: "Documentation", page: 273 },
      { label: "Automation", page: 278 },
    ],
  },
  {
    id: "ai-layers",
    kind: "layers",
    heading: "AI as a layer across the library",
    intro: "AI is part of the asset workflow from ingestion through organisation and discovery.",
    sourcePages: [54],
    categories: ["ai"],
    items: [
      { label: "Processing", page: 143 },
      { label: "AI indexing", page: 50 },
      { label: "Organisation", page: 57 },
      { label: "Discovery", page: 12 },
    ],
  },

  /* Workflows (horizontal stages) --------------------------------------------------------------- */
  {
    id: "ingest-stages",
    kind: "workflow",
    heading: "From source to searchable",
    intro: "Assets enter from connected sources or direct uploads, then move through processing until they can be found.",
    sourcePages: [121, 143, 145],
    pages: [269],
    clusters: ["storage-connectors", "ingestion", "processing", "integrations-overview", "migration-sources"],
    categories: ["storage-ingestion", "integrations"],
    items: [
      { label: "Connect", page: 121 },
      { label: "Upload", page: 127 },
      { label: "Process", page: 143 },
      { label: "Index", page: 21 },
      { label: "Preview", page: 147 },
    ],
  },
  {
    id: "ai-stages",
    kind: "workflow",
    heading: "What happens to an asset",
    sourcePages: [54, 143, 31, 47],
    clusters: ["ai-vision", "ai-tagging", "ai-discovery", "ai-intelligence", "duplicate-detection", "ai-collections"],
    categories: ["ai"],
    items: [
      { label: "Process", page: 143 },
      { label: "Understand", page: 43 },
      { label: "Suggest tags", page: 31 },
      { label: "Review", page: 47 },
      { label: "Discover", page: 12 },
    ],
  },
  {
    id: "approval-stages",
    kind: "workflow",
    heading: "From draft to approved",
    sourcePages: [67, 68, 103],
    pages: [271],
    clusters: ["approvals", "brand-control"],
    items: [
      { label: "Request review", page: 67 },
      { label: "Review status", page: 76 },
      { label: "Approve", page: 68 },
      { label: "Approved library", page: 103 },
      { label: "Record", page: 77 },
    ],
  },
  {
    id: "collaboration-stages",
    kind: "workflow",
    heading: "Feedback that stays with the asset",
    sourcePages: [61, 62, 63, 64, 67],
    pages: [270],
    clusters: ["comments-feedback", "mentions", "video-review", "team-collaboration", "sharing-views", "creative-workflow"],
    categories: ["collaboration"],
    items: [
      { label: "Comment", page: 62 },
      { label: "Discuss", page: 63 },
      { label: "Mention", page: 66 },
      { label: "Pinpoint", page: 64 },
      { label: "Approve", page: 67 },
    ],
  },
  {
    id: "lifecycle-stages",
    kind: "workflow",
    heading: "The lifecycle of an asset",
    intro: "An asset's lifecycle can include ingestion, metadata processing, AI tagging, review, approval, distribution and archival.",
    sourcePages: [107],
    clusters: ["asset-lifecycle", "library-maintenance", "usage-tracking"],
    categories: ["asset-management"],
    items: [
      { label: "Ingestion", page: 121 },
      { label: "Metadata", page: 21 },
      { label: "AI tagging", page: 31 },
      { label: "Review", page: 69 },
      { label: "Approval", page: 68 },
      { label: "Archival", page: 108 },
    ],
  },
  {
    id: "developer-stages",
    kind: "workflow",
    heading: "Building on the API",
    sourcePages: [255, 256, 262, 263, 278],
    pages: [252, 268],
    clusters: ["api-endpoints", "api-platform", "api-security", "workflow-automation"],
    categories: ["developers"],
    items: [
      { label: "Authenticate", page: 256 },
      { label: "Upload", page: 262 },
      { label: "Search", page: 263 },
      { label: "Metadata", page: 264 },
      { label: "Automate", page: 278 },
    ],
  },
  {
    id: "migration-stages",
    kind: "workflow",
    heading: "Moving a library into GetSibu",
    sourcePages: [281, 290, 286, 287, 291, 296],
    clusters: ["migration-sources", "migration-overview", "metadata-preservation", "folder-mapping", "bulk-import"],
    categories: ["migration"],
    items: [
      { label: "Plan", page: 290 },
      { label: "Metadata", page: 286 },
      { label: "Folders", page: 287 },
      { label: "Import", page: 291 },
      { label: "Verify", page: 296 },
    ],
  },
  {
    id: "delivery-stages",
    kind: "workflow",
    heading: "How media reaches your team",
    sourcePages: [304, 305, 306],
    clusters: ["previews-delivery", "performance"],
    categories: ["architecture-performance"],
    items: [
      { label: "Storage", page: 308 },
      { label: "Edge cache", page: 305 },
      { label: "CDN", page: 304 },
      { label: "Streaming", page: 306 },
      { label: "Global access", page: 314 },
    ],
  },
  {
    id: "discovery-stages",
    kind: "workflow",
    heading: "How teams find the right asset",
    intro: "Discovery begins with a search, continues through filtering and previewing, and ends with the right asset.",
    sourcePages: [30],
    clusters: ["creative-search", "semantic-search", "ocr-search", "filters-saved-searches", "indexing-metadata", "media-libraries", "discovery-workflow", "search-speed"],
    categories: ["search-discovery"],
    items: [
      { label: "Search", page: 11 },
      { label: "Describe", page: 18 },
      { label: "Filter", page: 19 },
      { label: "Preview", page: 147 },
      { label: "Save", page: 17 },
    ],
  },
  {
    id: "value-stages",
    kind: "workflow",
    heading: "Where the time goes back",
    sourcePages: [348, 349, 351],
    categories: ["business-value", "pricing-plans"],
    items: [
      { label: "Find", page: 349 },
      { label: "Reuse", page: 348 },
      { label: "Organise", page: 356 },
      { label: "Collaborate", page: 358 },
    ],
  },

  /* Processes (numbered steps) ------------------------------------------------------------------ */
  {
    id: "ai-control-process",
    kind: "process",
    heading: "People stay in control of AI",
    sourcePages: [9, 45],
    clusters: ["ai-tagging", "ai-approach", "ai-collections"],
    categories: ["ai"],
    items: [
      { label: "Suggest", page: 31 },
      { label: "Check confidence", page: 46 },
      { label: "Approve in bulk", page: 47 },
      { label: "Override", page: 48 },
    ],
  },
  {
    id: "version-process",
    kind: "process",
    heading: "Replace without losing history",
    sourcePages: [91],
    clusters: ["versioning", "resilience"],
    items: [
      { label: "Replace", page: 93 },
      { label: "Keep history", page: 92 },
      { label: "Track revisions", page: 100 },
      { label: "Restore", page: 94 },
    ],
  },
  {
    id: "upload-process",
    kind: "process",
    heading: "Reliable transfers for large files",
    sourcePages: [136],
    clusters: ["uploads"],
    categories: ["storage-ingestion"],
    items: [
      { label: "Chunked transfer", page: 138 },
      { label: "Resume", page: 137 },
      { label: "Parallel uploads", page: 142 },
      { label: "Progress", page: 141 },
    ],
  },
  {
    id: "access-process",
    kind: "process",
    heading: "Access, from organisation to individual",
    sourcePages: [151, 178],
    clusters: ["access-control", "secure-collaboration", "governance"],
    categories: ["permissions-multi-tenancy"],
    items: [
      { label: "Organisation", page: 158 },
      { label: "Teams", page: 175 },
      { label: "Folders", page: 152 },
      { label: "Individuals", page: 157 },
      { label: "Private by default", page: 154 },
    ],
  },
  {
    id: "review-process",
    kind: "process",
    heading: "Reviewing video precisely",
    sourcePages: [64, 65],
    clusters: ["video-review", "uc-video-production"],
    items: [
      { label: "Comment", page: 62 },
      { label: "Pin to the timeline", page: 64 },
      { label: "Discuss the frame", page: 65 },
      { label: "Approve", page: 67 },
    ],
  },
  {
    id: "discovery-process",
    kind: "process",
    heading: "Searching the way people remember",
    sourcePages: [18, 30],
    categories: ["search-discovery", "resources", "faq"],
    items: [
      { label: "Search", page: 11 },
      { label: "Filter", page: 19 },
      { label: "Preview", page: 147 },
      { label: "Save", page: 17 },
    ],
  },
  {
    id: "connect-process",
    kind: "process",
    heading: "Connecting existing storage",
    sourcePages: [121, 241],
    // Not creative-tool-integrations: the app lists those tools as not supported (see claims.ts).
    clusters: ["storage-connectors", "integrations-overview", "migration-sources"],
    categories: ["integrations"],
    items: [
      { label: "Connect", page: 121 },
      { label: "Index", page: 21 },
      { label: "Discover", page: 24 },
    ],
  },
  {
    id: "migration-process",
    kind: "process",
    heading: "A planned move",
    sourcePages: [289, 290],
    clusters: ["migration-planning"],
    categories: ["migration"],
    items: [
      { label: "Strategy", page: 289 },
      { label: "Planning", page: 290 },
      { label: "Implementation", page: 299 },
      { label: "Verification", page: 296 },
    ],
  },
  {
    id: "value-process",
    kind: "process",
    heading: "Building the business case",
    sourcePages: [359],
    categories: ["business-value", "pricing-plans"],
    items: [
      { label: "Discovery", page: 349 },
      { label: "Organisation", page: 356 },
      { label: "Governance", page: 355 },
      { label: "Collaboration", page: 358 },
    ],
  },

  /* Timelines (vertical) ------------------------------------------------------------------------ */
  {
    id: "version-timeline",
    kind: "timeline",
    heading: "An asset's history",
    sourcePages: [91, 95],
    clusters: ["versioning", "audit-history", "resilience"],
    categories: ["asset-management"],
    items: [
      { label: "Versioning", page: 91 },
      { label: "Replacement", page: 93 },
      { label: "Version history", page: 92 },
      { label: "Revision tracking", page: 100 },
      { label: "Restore", page: 94 },
    ],
  },
  {
    id: "lifecycle-timeline",
    kind: "timeline",
    heading: "From upload to archive",
    sourcePages: [101, 107],
    clusters: ["asset-lifecycle", "brand-control", "library-maintenance"],
    items: [
      { label: "Status", page: 102 },
      { label: "Approved library", page: 103 },
      { label: "Expiry", page: 104 },
      { label: "Archiving", page: 108 },
      { label: "Deletion", page: 109 },
    ],
  },
  {
    id: "cadence-timeline",
    kind: "timeline",
    heading: "Library activity over time",
    sourcePages: [187],
    clusters: ["analytics-cadence", "storage-analytics", "reporting", "library-analytics", "team-analytics", "usage-tracking", "access-audit"],
    categories: ["analytics"],
    items: [
      { label: "Daily", page: 188 },
      { label: "Weekly", page: 189 },
      { label: "Monthly", page: 190 },
      { label: "Trends", page: 187 },
      { label: "Growth", page: 209 },
    ],
  },
  {
    id: "migration-timeline",
    kind: "timeline",
    heading: "The phases of a migration",
    sourcePages: [289, 290, 299],
    clusters: ["migration-planning", "migration-overview", "metadata-preservation", "folder-mapping", "bulk-import", "migration-sources"],
    categories: ["migration"],
    items: [
      { label: "Strategy", page: 289 },
      { label: "Planning", page: 290 },
      { label: "Import in the background", page: 292 },
      { label: "Verification", page: 296 },
      { label: "Implementation", page: 299 },
    ],
  },
  {
    id: "upload-timeline",
    kind: "timeline",
    heading: "What happens during an upload",
    sourcePages: [136, 143, 145],
    clusters: ["uploads", "processing"],
    categories: ["storage-ingestion"],
    items: [
      { label: "Upload management", page: 136 },
      { label: "Chunked transfer", page: 138 },
      { label: "Resumable", page: 137 },
      { label: "Processing", page: 143 },
      { label: "Ready to search", page: 145 },
    ],
  },
  {
    id: "future-timeline",
    kind: "timeline",
    heading: "Where creative libraries are heading",
    sourcePages: [377, 378, 379, 380],
    clusters: ["future-of-dam"],
    categories: ["resources"],
    items: [
      { label: "AI changes DAM", page: 377 },
      { label: "Digital asset management", page: 378 },
      { label: "Creative collaboration", page: 379 },
      { label: "AI-powered libraries", page: 380 },
    ],
  },
  {
    id: "delivery-timeline",
    kind: "timeline",
    heading: "From storage to screen",
    sourcePages: [304, 305, 306],
    categories: ["architecture-performance"],
    items: [
      { label: "Scalable storage", page: 308 },
      { label: "Edge caching", page: 305 },
      { label: "CDN delivery", page: 304 },
      { label: "Streaming previews", page: 306 },
    ],
  },

  /* Stories (sticky visual, stepping text) ------------------------------------------------------ */
  {
    id: "search-story",
    kind: "story",
    heading: "Every way an asset can be found",
    sourcePages: [11],
    diagram: "search-signals",
    clusters: ["creative-search", "semantic-search", "ocr-search", "indexing-metadata", "filters-saved-searches", "discovery-workflow", "search-speed", "media-libraries"],
    categories: ["search-discovery", "platform"],
    items: [
      { label: "Metadata", page: 23, focus: "metadata" },
      { label: "Text inside files", page: 15, focus: "ocr" },
      { label: "AI-generated tags", page: 31, focus: "tags" },
      { label: "Plain language", page: 18, focus: "semantic" },
      { label: "Saved searches", page: 17, focus: "comments" },
    ],
  },
  {
    id: "collaboration-story",
    kind: "story",
    heading: "Review where the work is",
    sourcePages: [61],
    diagram: "timeline-review",
    categories: ["collaboration"],
    items: [
      { label: "Comments on the asset", page: 62, focus: "comments" },
      { label: "Threads by issue", page: 63, focus: "comments" },
      { label: "Timeline comments", page: 64, focus: "timeline" },
      { label: "Review status", page: 76, focus: "status" },
    ],
  },
  {
    id: "ai-story",
    kind: "story",
    heading: "What AI notices in an asset",
    sourcePages: [32],
    diagram: "ai-review",
    categories: ["ai"],
    items: [
      { label: "Objects", page: 34, focus: "object" },
      { label: "Colour", page: 36, focus: "colour" },
      { label: "Mood", page: 35, focus: "mood" },
      { label: "Confidence", page: 46, focus: "confidence" },
      { label: "Approval", page: 47, focus: "approve" },
    ],
  },
  {
    id: "library-story",
    kind: "story",
    heading: "One library for every format",
    sourcePages: [24],
    diagram: "media-library",
    clusters: ["media-libraries", "centralisation", "library-organisation"],
    categories: ["platform", "use-cases"],
    items: [
      { label: "Video", page: 25, focus: "video" },
      { label: "Images", page: 26, focus: "image" },
      { label: "Documents", page: 27, focus: "document" },
      { label: "Audio", page: 28, focus: "audio" },
    ],
  },
];

/* ---------------------------------------------------------------------------------------------- */
/* Literal sets: comparisons, matrices, before/after                                                 */
/* ---------------------------------------------------------------------------------------------- */

export interface ComparisonSet extends Applies {
  id: string;
  heading: string;
  intro?: string;
  columns: [string, string];
  emphasis: 0 | 1;
  rows: Array<[string, string, string]>;
  sourcePages: number[];
}

export const COMPARISONS: ComparisonSet[] = [
  {
    id: "search-comparison",
    heading: "More ways to find an asset than its filename",
    intro: "Instead of searching only by filenames, users can search descriptions, visual characteristics, extracted text, tags and other available metadata.",
    columns: ["Filename-only search", "Search in GetSibu"],
    emphasis: 1,
    rows: [
      ["Filenames", "Yes", "Yes"],
      ["Metadata", "—", "Yes"],
      ["Text inside images and documents", "—", "Yes"],
      ["AI-generated tags", "—", "Yes"],
      ["Comments", "—", "Yes"],
      ["Meaning, described in plain language", "—", "Yes"],
    ],
    sourcePages: [5, 11, 18],
    clusters: ["creative-search", "semantic-search", "ocr-search", "indexing-metadata", "discovery-workflow", "filters-saved-searches", "search-speed"],
    categories: ["search-discovery"],
  },
  {
    id: "storage-comparison",
    heading: "Beyond keeping files available",
    intro: "Traditional file storage focuses on keeping files available. GetSibu extends that for creative workflows.",
    columns: ["Traditional file storage", "GetSibu"],
    emphasis: 1,
    rows: [
      ["Keeping files available", "Primary focus", "Included"],
      ["AI-assisted organisation", "—", "Added"],
      ["Contextual search", "—", "Added"],
      ["Collaboration and approvals", "—", "Added"],
      ["Version history", "—", "Added"],
      ["Analytics and permission controls", "—", "Added"],
    ],
    sourcePages: [7],
    clusters: ["platform-positioning", "centralisation", "dam-fundamentals", "roi", "productivity"],
    categories: ["platform", "resources", "business-value", "pricing-plans"],
  },
  {
    id: "folder-comparison",
    heading: "Keep your structure, or design a new one",
    intro: "Existing folder structures can be mirrored or remapped during import and migration.",
    columns: ["Mirror", "Remap"],
    emphasis: 1,
    rows: [
      ["Existing folder structure", "Mirrored", "Remapped"],
      ["Previous organisation", "Maintained", "Replaced by a new structure"],
    ],
    sourcePages: [133, 287, 294],
    clusters: ["folder-mapping", "migration-overview", "bulk-import", "migration-sources"],
    categories: ["migration"],
  },
  {
    id: "duplicate-comparison",
    heading: "Two ways duplicates are recognised",
    intro: "Duplicate detection combines exact and perceptual hashing.",
    columns: ["Exact hashing", "Perceptual hashing"],
    emphasis: 1,
    rows: [["Identifies", "Identical files", "Visually equivalent copies"]],
    sourcePages: [40],
    clusters: ["duplicate-detection"],
  },
];

export interface MatrixSet extends Applies {
  id: string;
  heading: string;
  intro?: string;
  /** Column headings after the row label. A cell of null takes the row page's statement. */
  columns: string[];
  rows: Array<{ label: string; page: number; cells: Array<string | null> }>;
  sourcePages: number[];
}

export const MATRICES: MatrixSet[] = [
  {
    id: "metadata-matrix",
    heading: "Metadata that travels with the asset",
    columns: ["Part of the asset record", "Kept during migration"],
    rows: [
      { label: "EXIF", page: 22, cells: ["Yes", "Yes"] },
      { label: "XMP", page: 22, cells: ["Yes", "Yes"] },
      { label: "Creators", page: 116, cells: ["Yes", "Yes"] },
      { label: "File paths", page: 132, cells: ["Yes", "Yes"] },
      { label: "Custom keywords", page: 286, cells: ["Yes", "Yes"] },
    ],
    sourcePages: [22, 132, 286],
    clusters: ["metadata-preservation", "indexing-metadata"],
  },
  {
    id: "access-matrix",
    heading: "Who access applies to",
    columns: ["What it controls"],
    rows: [
      { label: "Organisation admins", page: 158, cells: [null] },
      { label: "Departments", page: 176, cells: [null] },
      { label: "Teams", page: 175, cells: [null] },
      { label: "Managers", page: 155, cells: [null] },
      { label: "Editors", page: 156, cells: [null] },
      { label: "Individuals", page: 157, cells: [null] },
      { label: "Folders", page: 152, cells: [null] },
    ],
    sourcePages: [151, 178],
    clusters: ["access-control", "governance", "secure-collaboration"],
    categories: ["permissions-multi-tenancy", "security-compliance"],
  },
  {
    id: "analytics-matrix",
    heading: "What each view shows",
    columns: ["What it shows"],
    rows: [
      { label: "Uploads", page: 184, cells: [null] },
      { label: "Storage", page: 183, cells: [null] },
      { label: "Contributors", page: 185, cells: [null] },
      { label: "Tags", page: 186, cells: [null] },
      { label: "Usage", page: 182, cells: [null] },
      { label: "Access", page: 197, cells: [null] },
    ],
    sourcePages: [181],
    categories: ["analytics"],
    clusters: ["library-analytics", "team-analytics", "reporting", "usage-tracking", "storage-analytics", "analytics-cadence"],
  },
  {
    id: "record-matrix",
    heading: "What the asset record keeps",
    columns: ["What is recorded"],
    rows: [
      { label: "Ownership", page: 115, cells: [null] },
      { label: "Attribution", page: 116, cells: [null] },
      { label: "History", page: 117, cells: [null] },
      { label: "Activity", page: 118, cells: [null] },
      { label: "Audit trail", page: 119, cells: [null] },
    ],
    sourcePages: [114, 119],
    clusters: ["audit-history", "governance"],
    categories: ["asset-management"],
  },
  {
    id: "tenant-matrix",
    heading: "Configured per client",
    columns: ["What it separates"],
    rows: [
      { label: "Storage", page: 163, cells: [null] },
      { label: "AI keys", page: 164, cells: [null] },
      { label: "Authentication", page: 165, cells: [null] },
      { label: "Client-facing experience", page: 166, cells: [null] },
    ],
    sourcePages: [160],
    clusters: ["multi-tenancy"],
  },
];

export interface BeforeAfterSet extends Applies {
  id: string;
  heading: string;
  intro?: string;
  beforeLabel: string;
  afterLabel: string;
  before: string[];
  after: string[];
  sourcePages: number[];
}

export const BEFORE_AFTER: BeforeAfterSet[] = [
  {
    id: "centralise",
    heading: "Different asset types, one environment",
    beforeLabel: "Scattered",
    afterLabel: "In GetSibu",
    before: ["Videos in one drive", "Images in another folder", "Documents somewhere else"],
    after: ["One central environment", "Every asset type searchable together", "Organisational structure and access controls retained"],
    sourcePages: [392, 6, 10],
    pages: [392, 6, 10, 150, 373],
    clusters: ["centralisation"],
  },
  {
    id: "folders-to-search",
    heading: "Search by what you remember",
    beforeLabel: "Folder by folder",
    afterLabel: "In GetSibu",
    before: ["Remembering complicated folder structures", "Knowing the exact filename", "Asking whoever stored the file"],
    after: ["Search the whole library at once", "Describe colour, subject, location or campaign", "Find assets through metadata and tags"],
    sourcePages: [393, 18, 24, 16],
    pages: [393, 394],
    clusters: ["creative-search", "discovery-workflow"],
  },
  {
    id: "chaos-to-order",
    heading: "Bring order to creative chaos",
    beforeLabel: "Creative chaos",
    afterLabel: "With GetSibu",
    before: ["Scattered storage", "Inconsistent filenames", "Duplicate files", "Unclear versions"],
    after: ["One structured library", "Search that does not depend on filenames", "Duplicates identified", "Previous versions kept with the asset"],
    sourcePages: [399, 16, 40, 91],
    pages: [399, 397, 396, 391],
    categories: ["conversion"],
  },
  {
    id: "value",
    heading: "Where time and storage go",
    beforeLabel: "Without a central library",
    afterLabel: "With GetSibu",
    before: ["Time spent searching through folders", "Files recreated because they cannot be found", "Confusion over which version is current", "Unnecessary copies consuming storage"],
    after: ["Faster discovery across one library", "Existing assets found and reused", "Version history on each asset", "Duplicates identified and understood"],
    sourcePages: [348, 349, 350, 357],
    categories: ["business-value", "pricing-plans"],
    clusters: ["roi", "productivity"],
  },
  {
    id: "feedback",
    heading: "Feedback that stays with the work",
    beforeLabel: "Scattered feedback",
    afterLabel: "In GetSibu",
    before: ["Comments in email and chat", "Approximate descriptions of a moment in a video", "Unclear which version was approved"],
    after: ["Comments attached to the asset", "Comments on points in the timeline", "Approval history on the record"],
    sourcePages: [73, 65, 77],
    categories: ["collaboration"],
  },
];
