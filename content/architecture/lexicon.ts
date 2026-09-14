/**
 * Concept lexicon: phrases in PDF paragraphs → the page that explains that concept.
 *
 * `scripts/build-inventory.ts` scans every source paragraph with these patterns to produce
 * `mentions` — links that exist because the source text names the concept, not because a page
 * is nearby. Patterns are case-insensitive and matched on word boundaries. Order matters only for
 * readability; each page links to a concept at most once, and never to itself.
 */
export const LEXICON: Array<{ terms: string[]; page: number }> = [
  // Search & discovery
  { terms: ["semantic search", "semantic retrieval", "semantic information"], page: 39 },
  { terms: ["natural language"], page: 18 },
  { terms: ["OCR", "extracted text"], page: 38 },
  { terms: ["saved searches", "shared searches", "saved search"], page: 17 },
  { terms: ["filters", "filtering"], page: 19 },
  { terms: ["metadata"], page: 22 },
  { terms: ["search indexing", "indexed"], page: 21 },
  { terms: ["embeddings"], page: 317 },
  { terms: ["asset discovery"], page: 30 },

  // AI
  { terms: ["AI-assisted tagging", "AI tagging", "AI-generated tags", "suggested tags", "AI suggestions"], page: 31 },
  { terms: ["scene detection", "scenes", "scene identification"], page: 33 },
  { terms: ["objects"], page: 34 },
  { terms: ["moods", "mood"], page: 35 },
  { terms: ["colours", "colour"], page: 36 },
  { terms: ["face grouping", "people"], page: 37 },
  { terms: ["duplicate detection", "duplicates", "duplicate"], page: 40 },
  { terms: ["collections", "collection creation"], page: 41 },
  { terms: ["classification", "classifications"], page: 42 },
  { terms: ["confidence"], page: 46 },
  { terms: ["taxonomy", "taxonomies"], page: 375 },

  // Collaboration
  { terms: ["comments", "asset comments", "contextual comments"], page: 62 },
  { terms: ["timeline"], page: 64 },
  { terms: ["frame-specific feedback", "frame-accurate"], page: 65 },
  { terms: ["mentions", "mention"], page: 66 },
  { terms: ["approval workflows", "approvals", "approval gates", "approval process", "approval"], page: 67 },
  { terms: ["status history", "statuses"], page: 102 },

  // Versioning & asset management
  { terms: ["versioning", "version history", "versions", "version control"], page: 91 },
  { terms: ["expiry"], page: 104 },
  { terms: ["brand-specific tags", "structured tags"], page: 105 },
  { terms: ["usage analytics"], page: 182 },
  { terms: ["archival", "archiving"], page: 108 },
  { terms: ["governance"], page: 114 },
  { terms: ["audit history", "audit logs", "audit logging", "auditability"], page: 326 },

  // Storage & ingestion
  { terms: ["Google Drive"], page: 122 },
  { terms: ["Dropbox"], page: 123 },
  { terms: ["OneDrive"], page: 124 },
  { terms: ["AWS S3", "S3"], page: 125 },
  { terms: ["NAS", "local network storage"], page: 126 },
  { terms: ["drag and drop", "drag-and-drop", "direct uploads", "upload files directly"], page: 127 },
  { terms: ["watch folders"], page: 128 },
  { terms: ["bulk import"], page: 130 },
  { terms: ["folder structures", "folder relationships"], page: 133 },
  { terms: ["resumable uploads", "resumable transfers", "resumable"], page: 137 },
  { terms: ["chunked"], page: 138 },
  { terms: ["thumbnail generation", "thumbnails"], page: 146 },
  { terms: ["streaming previews", "streaming"], page: 147 },
  { terms: ["storage analytics"], page: 183 },

  // Permissions & security
  { terms: ["permissions", "permission controls", "granular permissions"], page: 151 },
  { terms: ["folder permissions", "folder-level controls", "folder-level"], page: 152 },
  { terms: ["role-based access control", "roles"], page: 153 },
  { terms: ["default-deny"], page: 154 },
  { terms: ["multi-tenant", "tenants"], page: 160 },
  { terms: ["tenant isolation", "tenant-scoped", "isolated client environments"], page: 324 },
  { terms: ["white-label"], page: 166 },
  { terms: ["encryption"], page: 322 },
  { terms: ["authentication"], page: 256 },
  { terms: ["SSO", "single sign-on"], page: 334 },
  { terms: ["SCIM"], page: 335 },
  { terms: ["backups"], page: 331 },

  // Analytics
  { terms: ["analytics"], page: 181 },
  { terms: ["contributors"], page: 185 },

  // Integrations & developers
  { terms: ["Slack"], page: 246 },
  { terms: ["Figma"], page: 247 },
  { terms: ["Premiere Pro"], page: 248 },
  { terms: ["After Effects"], page: 249 },
  { terms: ["Frame.io"], page: 250 },
  { terms: ["Zapier"], page: 251 },
  { terms: ["webhooks", "webhook"], page: 252 },
  { terms: ["API-first"], page: 254 },
  { terms: ["REST API"], page: 253 },
  { terms: ["API", "APIs"], page: 261 },
  { terms: ["OpenAPI"], page: 274 },
  { terms: ["SDKs"], page: 259 },
  { terms: ["integrations"], page: 241 },

  // Migration & architecture
  { terms: ["migration", "migrated"], page: 281 },
  { terms: ["CDN"], page: 304 },
  { terms: ["edge caching"], page: 305 },

  // Pricing
  { terms: ["free plan"], page: 342 },
  { terms: ["Business plan"], page: 344 },
];
