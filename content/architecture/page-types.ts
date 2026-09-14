/**
 * Page types.
 *
 * A page type is not a page implementation. It is a contract:
 *   - which section kinds a page of that type may use, in which orders (recipes)
 *   - what the page must accomplish (purpose), its search intent and schema.org types
 *
 * Every type has 2-4 recipes. The inventory rotates recipes within a category so neighbouring
 * pages never share a layout, and authored content can pick a different recipe when the topic
 * calls for it (`PageContent.recipeOverride`, with a reason).
 *
 * Rhythm rule: no recipe places two dense sections back to back, and `capabilities` (the card-grid
 * pattern) appears at most once per recipe.
 */
import type { PageTypeId, SearchIntent, SectionKind } from "../../types/content.ts";

export interface Recipe {
  id: string;
  /** When this recipe suits the topic better than the others. */
  bestFor: string;
  /** Topic-specific recipes are assigned only through RECIPE_PINS, never by rotation. */
  pinOnly?: true;
  sections: SectionKind[];
}

export interface PageTypeDef {
  id: PageTypeId;
  letter: string;
  label: string;
  intent: SearchIntent;
  purpose: string;
  schemaTypes: string[];
  recipes: Recipe[];
  /** Sections the renderer appends when data exists, regardless of recipe. */
  appendWhenAvailable: SectionKind[];
}

export const PAGE_TYPES: PageTypeDef[] = [
  {
    id: "home",
    letter: "—",
    label: "Home",
    intent: "navigational",
    purpose: "Establish what GetSibu is and route each audience to the right part of the site.",
    schemaTypes: ["WebPage", "Organization", "WebSite"],
    recipes: [
      {
        id: "home",
        bestFor: "The homepage only. Composed in Prompt 2; sections are indicative.",
        sections: ["hero", "statement", "workflow", "alternating", "capabilities", "split", "related", "cta"],
      },
    ],
    appendWhenAvailable: [],
  },
  {
    id: "platform",
    letter: "A",
    label: "Product / Platform",
    intent: "commercial",
    purpose: "Explain a platform-level idea of GetSibu and show how its parts combine into one creative library.",
    schemaTypes: ["WebPage"],
    recipes: [
      { id: "platform-statement", bestFor: "Positioning ideas (operating system, one source of truth).", sections: ["hero", "statement", "layers", "split", "related", "cta"] },
      { id: "platform-contrast", bestFor: "Pages that contrast scattered storage with a central library.", sections: ["hero", "before-after", "alternating", "related", "cta"] },
      { id: "platform-story", bestFor: "Pages describing how the library is organised or understood.", sections: ["hero", "story", "media", "related", "cta"] },
    ],
    appendWhenAvailable: ["faq"],
  },
  {
    id: "feature",
    letter: "B",
    label: "Feature",
    intent: "commercial",
    purpose: "Explain one capability: what it does, how it works in the library, and where it fits in the team's workflow.",
    schemaTypes: ["WebPage"],
    recipes: [
      { id: "feature-split", bestFor: "Capabilities best shown with one clear visual.", sections: ["hero", "split", "process", "related", "cta"] },
      { id: "feature-story", bestFor: "Capabilities that unfold over steps (discovery workflow, review).", sections: ["hero", "story", "editorial", "related", "cta"] },
      { id: "feature-media", bestFor: "Visual capabilities (timeline comments, previews, filters).", sections: ["hero", "media", "capabilities", "related", "cta"] },
    ],
    appendWhenAvailable: ["faq"],
  },
  {
    id: "ai-feature",
    letter: "C",
    label: "AI Feature",
    intent: "commercial",
    purpose: "Show what GetSibu's AI analyses, what becomes searchable as a result, and how people stay in control of it.",
    schemaTypes: ["WebPage"],
    recipes: [
      { id: "ai-input-output", bestFor: "Detection capabilities (scene, object, mood, colour, faces, OCR).", sections: ["hero", "workflow", "split", "editorial", "related", "cta"] },
      { id: "ai-detection-overlay", bestFor: "Detection capabilities shown as one annotated asset.", pinOnly: true, sections: ["hero", "media", "before-after", "related", "cta"] },
      { id: "ai-control", bestFor: "Tag confidence, approval and override; AI-aware management.", pinOnly: true, sections: ["hero", "statement", "process", "split", "related", "cta"] },
      { id: "ai-discovery", bestFor: "AI search and discovery pages.", pinOnly: true, sections: ["hero", "before-after", "media", "related", "cta"] },
      { id: "ai-operations", bestFor: "AI as an operational layer (automation, creative operations, intelligence).", sections: ["hero", "editorial", "layers", "related", "cta"] },
    ],
    appendWhenAvailable: ["faq"],
  },
  {
    id: "workflow",
    letter: "E",
    label: "Governance / Lifecycle",
    intent: "commercial",
    purpose: "Explain how an asset moves through versions, statuses and lifecycle stages, and what record is kept.",
    schemaTypes: ["WebPage"],
    recipes: [
      { id: "workflow-timeline", bestFor: "Versioning, history, lifecycle.", sections: ["hero", "timeline", "split", "related", "cta"] },
      { id: "workflow-states", bestFor: "Statuses, approvals, expiry, archiving.", sections: ["hero", "workflow", "editorial", "related", "cta"] },
      { id: "workflow-record", bestFor: "Version and history records shown beside the asset.", pinOnly: true, sections: ["hero", "split", "timeline", "related", "cta"] },
      { id: "workflow-governance", bestFor: "Governance, ownership, audit trail.", pinOnly: true, sections: ["hero", "statement", "matrix", "related", "cta"] },
    ],
    appendWhenAvailable: ["faq"],
  },
  {
    id: "storage",
    letter: "D",
    label: "Storage / Ingestion",
    intent: "commercial",
    purpose: "Explain how content gets into GetSibu and becomes searchable: sources, uploads, processing and previews.",
    schemaTypes: ["WebPage"],
    recipes: [
      { id: "storage-pipeline", bestFor: "Ingestion, processing, status pages.", sections: ["hero", "workflow", "split", "related", "cta"] },
      { id: "storage-reliability", bestFor: "Upload mechanics (resumable, chunked, parallel, large files).", pinOnly: true, sections: ["hero", "process", "editorial", "related", "cta"] },
      { id: "storage-transfer", bestFor: "Upload mechanics shown as a transfer lifecycle.", pinOnly: true, sections: ["hero", "split", "timeline", "related", "cta"] },
      { id: "storage-overview", bestFor: "Storage management and analytics.", sections: ["hero", "media", "capabilities", "related", "cta"] },
    ],
    appendWhenAvailable: ["faq"],
  },
  {
    id: "integration",
    letter: "M",
    label: "Integration",
    intent: "commercial",
    purpose: "Explain what connecting a specific tool or storage source to GetSibu does and what flows between them.",
    schemaTypes: ["WebPage"],
    recipes: [
      { id: "integration-connection", bestFor: "Storage sources and connected tools.", sections: ["hero", "workflow", "editorial", "related", "cta"] },
      { id: "integration-context", bestFor: "Creative tools (Figma, Premiere Pro, After Effects, Frame.io).", sections: ["hero", "split", "process", "related", "cta"] },
    ],
    appendWhenAvailable: ["faq"],
  },
  {
    id: "access-security",
    letter: "F",
    label: "Permissions / Security",
    intent: "commercial",
    purpose: "Explain a control precisely: who it applies to, what it restricts or protects, and how it is recorded.",
    schemaTypes: ["WebPage"],
    recipes: [
      { id: "access-model", bestFor: "Roles, folder permissions, hierarchies.", sections: ["hero", "matrix", "split", "related", "cta"] },
      { id: "access-boundaries", bestFor: "Tenant isolation, default-deny, client workspaces.", sections: ["hero", "layers", "editorial", "related", "cta"] },
      { id: "access-assurance", bestFor: "Encryption, identity, compliance, audit, backups.", pinOnly: true, sections: ["hero", "statement", "checklist", "related", "cta"] },
      { id: "access-assurance-detail", bestFor: "A single control explained with one precise diagram.", pinOnly: true, sections: ["hero", "split", "editorial", "related", "cta"] },
    ],
    appendWhenAvailable: ["faq"],
  },
  {
    id: "analytics",
    letter: "G",
    label: "Analytics",
    intent: "commercial",
    purpose: "Explain what a view of library activity shows and which decision it supports — without inventing figures.",
    schemaTypes: ["WebPage"],
    recipes: [
      { id: "analytics-view", bestFor: "A specific metric or dashboard.", sections: ["hero", "media", "editorial", "related", "cta"] },
      { id: "analytics-questions", bestFor: "Audience analytics (marketing, production, agency, executive).", sections: ["hero", "split", "checklist", "related", "cta"] },
      { id: "analytics-trend", bestFor: "Trends, cadence and growth reporting.", pinOnly: true, sections: ["hero", "timeline", "split", "related", "cta"] },
    ],
    appendWhenAvailable: ["faq"],
  },
  {
    id: "developer",
    letter: "H",
    label: "API / Developer",
    intent: "commercial",
    purpose: "Explain a developer capability for technical evaluators, linking to API documentation for specifics.",
    schemaTypes: ["WebPage", "TechArticle"],
    recipes: [
      { id: "developer-flow", bestFor: "API surfaces (upload, search, metadata, tags, comments, approvals).", sections: ["hero", "workflow", "editorial", "related", "cta"] },
      { id: "developer-events", bestFor: "Webhooks and events.", pinOnly: true, sections: ["hero", "event-list", "split", "related", "cta"] },
      { id: "developer-event-flow", bestFor: "A single webhook event traced from trigger to receiver.", pinOnly: true, sections: ["hero", "workflow", "event-list", "related", "cta"] },
      { id: "developer-foundation", bestFor: "API-first, authentication, security, SDKs, OpenAPI.", sections: ["hero", "statement", "layers", "related", "cta"] },
    ],
    appendWhenAvailable: ["faq"],
  },
  {
    id: "migration",
    letter: "I",
    label: "Migration",
    intent: "commercial",
    purpose: "Explain a part of moving an existing library into GetSibu and what is preserved, mapped or verified.",
    schemaTypes: ["WebPage"],
    recipes: [
      { id: "migration-phases", bestFor: "Planning, strategy, implementation, onboarding.", sections: ["hero", "timeline", "checklist", "related", "cta"] },
      { id: "migration-mapping", bestFor: "Metadata, folder and permission mapping.", sections: ["hero", "comparison", "split", "related", "cta"] },
      { id: "migration-source", bestFor: "Source-specific migration (Google Drive, Dropbox, S3).", pinOnly: true, sections: ["hero", "workflow", "editorial", "related", "cta"] },
    ],
    appendWhenAvailable: ["faq"],
  },
  {
    id: "architecture",
    letter: "N",
    label: "Architecture / Performance",
    intent: "commercial",
    purpose: "Explain how the platform is built to keep search, previews and uploads responsive as libraries grow.",
    schemaTypes: ["WebPage", "TechArticle"],
    recipes: [
      { id: "architecture-layers", bestFor: "Architecture, infrastructure, storage, search infrastructure.", sections: ["hero", "layers", "editorial", "related", "cta"] },
      { id: "architecture-path", bestFor: "Delivery and performance (CDN, edge, streaming, uploads).", sections: ["hero", "workflow", "split", "related", "cta"] },
    ],
    appendWhenAvailable: [],
  },
  {
    id: "use-case",
    letter: "O",
    label: "Use Case",
    intent: "commercial",
    purpose: "Show a specific team how GetSibu fits the material they manage, using only capabilities the PDF names for them.",
    schemaTypes: ["WebPage"],
    recipes: [
      { id: "use-case-material", bestFor: "Teams defined by the media they handle (video, photography, newsroom).", sections: ["hero", "split", "story", "related", "cta"] },
      { id: "use-case-workflow", bestFor: "Teams defined by their process (agencies, brand, marketing).", sections: ["hero", "workflow", "alternating", "related", "cta"] },
      { id: "use-case-organisation", bestFor: "Organisation types (nonprofits, education, communications).", sections: ["hero", "editorial", "capabilities", "related", "cta"] },
    ],
    appendWhenAvailable: ["faq"],
  },
  {
    id: "pricing",
    letter: "P",
    label: "Pricing",
    intent: "commercial",
    purpose: "Help a buyer choose a plan using only plan details confirmed on the official site.",
    schemaTypes: ["WebPage"],
    recipes: [
      { id: "pricing-plans", bestFor: "The pricing root and plan pages.", pinOnly: true, sections: ["hero", "plans", "matrix", "faq", "cta"] },
      { id: "pricing-guidance", bestFor: "Pricing for a team type or cost considerations.", pinOnly: true, sections: ["hero", "editorial", "checklist", "related", "cta"] },
    ],
    appendWhenAvailable: [],
  },
  {
    id: "business-value",
    letter: "Q",
    label: "Business Value",
    intent: "commercial",
    purpose: "Make a qualitative case for where GetSibu saves time, storage or confusion — no invented ROI figures.",
    schemaTypes: ["WebPage"],
    recipes: [
      { id: "value-contrast", bestFor: "ROI and efficiency arguments.", sections: ["hero", "before-after", "editorial", "related", "cta"] },
      { id: "value-team", bestFor: "Productivity for a specific team.", sections: ["hero", "split", "checklist", "related", "cta"] },
    ],
    appendWhenAvailable: [],
  },
  {
    id: "resource",
    letter: "J",
    label: "Resource / Education",
    intent: "informational",
    purpose: "Answer the question in the title directly, then explain it with structure a reader and an answer engine can both use.",
    schemaTypes: ["Article", "DefinedTerm"],
    recipes: [
      { id: "resource-definition", bestFor: "\"What is\" explainers.", sections: ["definition", "editorial", "process", "faq", "related"] },
      { id: "resource-visual", bestFor: "'What is' explainers whose concept is clearer drawn than described.", sections: ["definition", "split", "layers", "faq", "related"] },
      { id: "resource-essay", bestFor: "How AI changes DAM; the future of DAM and collaboration.", pinOnly: true, sections: ["hero", "editorial", "timeline", "editorial", "related"] },
    ],
    appendWhenAvailable: ["cta"],
  },
  {
    id: "faq",
    letter: "K",
    label: "FAQ",
    intent: "informational",
    purpose: "Give a direct, sourced answer in the first sentence, then link to the page that explains it fully.",
    schemaTypes: ["FAQPage"],
    recipes: [
      { id: "faq-answer", bestFor: "Answers that point to one explaining page.", sections: ["definition", "related", "cta"] },
      { id: "faq-answer-visual", bestFor: "Answers a single product visual makes obvious.", sections: ["definition", "media", "related", "cta"] },
    ],
    appendWhenAvailable: [],
  },
  {
    id: "conversion",
    letter: "L",
    label: "CTA / Conversion",
    intent: "transactional",
    purpose: "Make one promise from the PDF concrete and ask for one action.",
    schemaTypes: ["WebPage"],
    recipes: [
      { id: "conversion-statement", bestFor: "Short emotional promises.", sections: ["hero", "before-after", "cta"] },
      { id: "conversion-proof", bestFor: "Promises that list capabilities.", sections: ["hero", "alternating", "cta"] },
    ],
    appendWhenAvailable: [],
  },
  {
    id: "section-index",
    letter: "—",
    label: "Section Index",
    intent: "navigational",
    purpose: "List every page in a section, grouped by topic cluster, so readers and crawlers can reach all of them.",
    schemaTypes: ["CollectionPage", "ItemList"],
    recipes: [{ id: "index", bestFor: "Generated hubs.", sections: ["hero", "related"] }],
    appendWhenAvailable: [],
  },
];

export const pageTypeById = new Map(PAGE_TYPES.map((t) => [t.id, t]));

/**
 * Per-page type overrides where a page's content shape differs from its category default.
 * Keyed by PDF page number.
 */
export const PAGE_TYPE_OVERRIDES: Record<number, PageTypeId> = {
  // Collaboration pages that are really approval/lifecycle state workflows.
  67: "workflow", 68: "workflow", 71: "workflow", 76: "workflow", 77: "workflow", 89: "workflow",
  // Storage sources are connectors.
  122: "integration", 123: "integration", 124: "integration", 125: "integration", 126: "integration",
  // Migration topics inside Storage & Ingestion.
  131: "migration", 132: "migration", 133: "migration", 134: "migration",
  // Analytics inside Storage & Ingestion.
  148: "analytics", 149: "analytics",
  // Analytics inside Permissions.
  173: "analytics",
  // Governance pages inside Permissions read as governance, not access matrices.
  159: "workflow", 179: "workflow",
  // Performance topics inside Architecture keep the architecture type (explicit for clarity).
  // Security root and plans keep category defaults.
  // Developer pages moved from Integrations (see url-rules.ts) take the developer type.
  252: "developer", 253: "developer", 254: "developer", 255: "developer", 256: "developer", 257: "developer", 258: "developer", 259: "developer",
  // Migration root / onboarding are phase-based.
  // Business value: "Why Invest in GetSibu" is a positioning page.
  360: "platform",
  // Pricing guidance pages (345-347) keep the pricing type with the guidance recipe.
};

/**
 * Recipe pins: pages whose topic calls for particular recipes. A string pins one recipe; an array
 * pins a family the builder alternates through, so runs of similar topics (AI detections, security
 * controls, webhook events) keep a topical layout without every neighbour looking the same.
 * Everything unpinned rotates through the type's non-pinOnly recipes.
 */
const AI_DETECTION = ["ai-input-output", "ai-detection-overlay"];
const AI_CONTROL = ["ai-control", "ai-input-output"];
const AI_DISCOVERY = ["ai-discovery", "ai-operations"];
const AI_OPERATIONS = ["ai-operations", "ai-input-output"];
const VERSION_RECORD = ["workflow-timeline", "workflow-record"];
const STATES = ["workflow-states", "workflow-record"];
const GOVERNANCE = ["workflow-governance", "workflow-states"];
const UPLOAD_MECHANICS = ["storage-reliability", "storage-transfer"];
const PIPELINE = ["storage-pipeline", "storage-transfer"];
const ACCESS_MODEL = ["access-model", "access-boundaries"];
const BOUNDARIES = ["access-boundaries", "access-model"];
const ASSURANCE = ["access-assurance", "access-assurance-detail"];
const TREND = ["analytics-trend", "analytics-view"];
const EVENTS = ["developer-events", "developer-event-flow"];
const DEV_FOUNDATION = ["developer-foundation", "developer-flow"];
const MIGRATION_SOURCE = ["migration-source", "migration-mapping"];
const MAPPING = ["migration-mapping", "migration-phases"];
const PHASES = ["migration-phases", "migration-mapping"];
const DELIVERY = ["architecture-path", "architecture-layers"];
const ESSAY = ["resource-essay", "resource-visual"];

export const RECIPE_PINS: Record<number, string | string[]> = {
  2: "platform-statement", 6: "platform-contrast", 8: "platform-story", 9: "platform-contrast", 10: "platform-statement",
  17: "feature-media", 19: "feature-media", 30: "feature-story", 64: "feature-media", 65: "feature-split",
  33: AI_DETECTION, 34: AI_DETECTION, 35: AI_DETECTION, 36: AI_DETECTION, 37: AI_DETECTION, 38: AI_DETECTION, 40: AI_DETECTION,
  45: AI_CONTROL, 46: AI_CONTROL, 47: AI_CONTROL, 48: AI_CONTROL,
  49: AI_DISCOVERY, 51: AI_DISCOVERY, 52: AI_DISCOVERY, 53: AI_DISCOVERY,
  54: AI_OPERATIONS, 55: AI_OPERATIONS, 58: AI_OPERATIONS, 59: AI_OPERATIONS,
  91: VERSION_RECORD, 92: VERSION_RECORD, 95: VERSION_RECORD, 100: VERSION_RECORD, 101: VERSION_RECORD, 107: VERSION_RECORD,
  68: STATES, 76: STATES, 102: STATES, 104: STATES, 108: STATES,
  114: GOVERNANCE, 115: GOVERNANCE, 116: GOVERNANCE, 119: GOVERNANCE, 159: GOVERNANCE, 179: GOVERNANCE,
  136: UPLOAD_MECHANICS, 137: UPLOAD_MECHANICS, 138: UPLOAD_MECHANICS, 139: UPLOAD_MECHANICS, 140: UPLOAD_MECHANICS, 141: UPLOAD_MECHANICS, 142: UPLOAD_MECHANICS,
  143: PIPELINE, 144: PIPELINE, 145: PIPELINE,
  152: ACCESS_MODEL, 153: ACCESS_MODEL, 178: ACCESS_MODEL,
  154: BOUNDARIES, 161: BOUNDARIES, 167: BOUNDARIES, 172: BOUNDARIES, 324: BOUNDARIES, 337: BOUNDARIES,
  174: ASSURANCE, 321: ASSURANCE, 322: ASSURANCE, 323: ASSURANCE, 326: ASSURANCE, 327: ASSURANCE, 328: ASSURANCE, 329: ASSURANCE,
  330: ASSURANCE, 331: ASSURANCE, 332: ASSURANCE, 333: ASSURANCE, 334: ASSURANCE, 335: ASSURANCE, 336: ASSURANCE, 338: ASSURANCE,
  339: ASSURANCE, 340: ASSURANCE,
  149: TREND, 187: TREND, 188: TREND, 189: TREND, 190: TREND, 209: TREND,
  252: EVENTS, 257: EVENTS, 268: EVENTS, 269: EVENTS, 270: EVENTS, 271: EVENTS, 272: EVENTS,
  254: DEV_FOUNDATION, 256: DEV_FOUNDATION, 259: DEV_FOUNDATION, 274: DEV_FOUNDATION, 275: DEV_FOUNDATION, 277: DEV_FOUNDATION,
  283: MIGRATION_SOURCE, 284: MIGRATION_SOURCE, 285: MIGRATION_SOURCE,
  132: MAPPING, 133: MAPPING, 286: MAPPING, 287: MAPPING, 293: MAPPING, 294: MAPPING, 295: MAPPING,
  289: PHASES, 290: PHASES, 297: PHASES, 299: PHASES,
  301: "architecture-layers", 304: DELIVERY, 305: DELIVERY, 306: DELIVERY, 314: DELIVERY,
  341: "pricing-plans", 342: "pricing-plans", 343: "pricing-plans", 344: "pricing-plans",
  345: "pricing-guidance", 346: "pricing-guidance", 347: "pricing-guidance",
  377: ESSAY, 378: ESSAY, 379: ESSAY, 380: ESSAY,
};
