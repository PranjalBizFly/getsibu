/**
 * Visual assignment: which diagram each page shows, and which part of it the page is about.
 *
 * A category shares one system diagram, but every page lights up its own part of it ("focus"), so
 * thirty AI pages do not repeat one identical image. Focus never points at a concept whose claim is
 * not publishable (scene detection and face grouping have no focus key anywhere).
 */
import type { CategoryId, VisualRef } from "../../types/content.ts";

interface VisualPage {
  number: number;
  title: string;
  category: CategoryId;
  clusters: string[];
  sourceText: string;
}

const inCluster = (page: VisualPage, ...ids: string[]) => ids.some((id) => page.clusters.includes(id));
const titleHas = (page: VisualPage, pattern: RegExp) => pattern.test(page.title);

/** Media types a paragraph talks about, for the media-library diagram. */
export function mediaTypesIn(text: string): string | undefined {
  const types = [
    /\b(video|videos|footage|film|recordings?)\b/i.test(text) ? "video" : null,
    /\b(images?|photos?|photography|imagery|thumbnails?|product shots?)\b/i.test(text) ? "image" : null,
    /\b(documents?|presentations?|PDFs?)\b/i.test(text) ? "document" : null,
    /\baudio\b/i.test(text) ? "audio" : null,
  ].filter(Boolean);
  return types.length && types.length < 4 ? types.join(",") : undefined;
}

/** The default system diagram for a category (hub pages, and pages without a specific rule). */
export const CATEGORY_VISUAL: Partial<Record<CategoryId, VisualRef>> = {
  home: { diagram: "library-search" },
  platform: { diagram: "library-search" },
  "search-discovery": { diagram: "search-signals" },
  ai: { diagram: "ai-review" },
  collaboration: { diagram: "timeline-review" },
  "asset-management": { diagram: "version-record" },
  "storage-ingestion": { diagram: "ingest-pipeline" },
  "permissions-multi-tenancy": { diagram: "folder-access" },
  analytics: { diagram: "library-activity" },
  "use-cases": { diagram: "media-library" },
  integrations: { diagram: "connector-flow", label: "Your tools" },
  developers: { diagram: "api-flow" },
  migration: { diagram: "migration-map" },
  "architecture-performance": { diagram: "architecture-stack" },
  "security-compliance": { diagram: "control-map" },
  conversion: { diagram: "library-search" },
};

function focusFor(page: VisualPage): VisualRef | null {
  const n = page.number;
  switch (page.category) {
    case "platform":
      if (n === 3 || n === 9) return { diagram: "ai-review", focus: n === 9 ? "approve" : "tags" };
      if (n === 4 || n === 8) return { diagram: "media-library" };
      if (n === 5) return { diagram: "search-signals", focus: "semantic" };
      if (n === 6) return { diagram: "ingest-pipeline", focus: "sources" };
      if (n === 10) return { diagram: "folder-access", focus: "team" };
      return { diagram: "library-search" };

    case "search-discovery":
      if (inCluster(page, "media-libraries")) return { diagram: "media-library", focus: mediaTypesIn(page.title) ?? mediaTypesIn(page.sourceText) };
      if (inCluster(page, "ocr-search")) return { diagram: "search-signals", focus: "ocr" };
      if (inCluster(page, "semantic-search")) return { diagram: "search-signals", focus: "semantic" };
      if (inCluster(page, "indexing-metadata")) return { diagram: "search-signals", focus: "metadata" };
      if (inCluster(page, "filters-saved-searches")) return { diagram: "search-signals", focus: n === 17 ? "comments" : "metadata" };
      if (inCluster(page, "discovery-workflow")) return { diagram: "library-search" };
      return { diagram: "search-signals" };

    case "ai":
      if (titleHas(page, /Object/)) return { diagram: "ai-review", focus: "object" };
      if (titleHas(page, /Colour/)) return { diagram: "ai-review", focus: "colour" };
      if (titleHas(page, /Mood/)) return { diagram: "ai-review", focus: "mood" };
      if (titleHas(page, /Confidence/)) return { diagram: "ai-review", focus: "confidence" };
      if (titleHas(page, /Approval/)) return { diagram: "ai-review", focus: "approve" };
      if (titleHas(page, /Override/)) return { diagram: "ai-review", focus: "override" };
      if (inCluster(page, "ocr-search")) return { diagram: "search-signals", focus: "ocr" };
      if (inCluster(page, "semantic-search")) return { diagram: "search-signals", focus: "semantic" };
      if (inCluster(page, "ai-discovery")) return { diagram: "media-library", focus: mediaTypesIn(page.title) };
      if (inCluster(page, "ai-collections", "duplicate-detection")) return { diagram: "media-library" };
      if (inCluster(page, "ai-intelligence", "ai-approach")) return { diagram: "ingest-pipeline", focus: "processing" };
      return { diagram: "ai-review", focus: inCluster(page, "ai-tagging") ? "tags" : undefined };

    case "collaboration":
      if (inCluster(page, "approvals")) return { diagram: "timeline-review", focus: "status" };
      if (inCluster(page, "video-review")) return { diagram: "timeline-review", focus: "timeline" };
      if (inCluster(page, "sharing-views")) return { diagram: "search-signals", focus: "comments" };
      if (inCluster(page, "multi-tenancy")) return { diagram: "tenant-boundaries", focus: "tenants" };
      return { diagram: "timeline-review", focus: "comments" };

    case "asset-management":
      if (inCluster(page, "audit-history")) return { diagram: "version-record", focus: "audit" };
      if (titleHas(page, /Restore|Recovery/)) return { diagram: "version-record", focus: "restore" };
      if (inCluster(page, "versioning")) return { diagram: "version-record", focus: "versions" };
      if (inCluster(page, "usage-tracking")) return { diagram: "library-activity", focus: "uploads" };
      if (inCluster(page, "governance", "brand-control")) return { diagram: "folder-access", focus: "folders" };
      if (inCluster(page, "library-maintenance", "duplicate-detection")) return { diagram: "media-library" };
      return { diagram: "version-record", focus: "lifecycle" };

    case "storage-ingestion":
      if (inCluster(page, "storage-analytics")) return { diagram: "library-activity", focus: "storage" };
      if (inCluster(page, "migration-overview", "metadata-preservation", "folder-mapping")) {
        return { diagram: "migration-map", focus: inCluster(page, "metadata-preservation") ? "metadata" : inCluster(page, "folder-mapping") ? "folders" : undefined };
      }
      if (inCluster(page, "storage-connectors")) return { diagram: "connector-flow", label: page.title.replace(/ Integration$/, "") };
      if (inCluster(page, "previews-delivery")) return { diagram: "ingest-pipeline", focus: "preview" };
      if (inCluster(page, "processing")) return { diagram: "ingest-pipeline", focus: "processing" };
      return { diagram: "ingest-pipeline", focus: "upload" };

    case "permissions-multi-tenancy":
      if (inCluster(page, "multi-tenancy")) return { diagram: "tenant-boundaries", focus: "tenants" };
      if (inCluster(page, "access-audit")) return n === 173 ? { diagram: "library-activity" } : { diagram: "tenant-boundaries", focus: "audit" };
      if (titleHas(page, /Default-Deny/)) return { diagram: "folder-access", focus: "private" };
      if (titleHas(page, /Individual|Editor|Manager/)) return { diagram: "folder-access", focus: "individual" };
      if (titleHas(page, /Team|Department/)) return { diagram: "folder-access", focus: "team" };
      return { diagram: "folder-access", focus: "folders" };

    case "analytics":
      if (titleHas(page, /Storage|Growth/)) return { diagram: "library-activity", focus: "storage" };
      if (titleHas(page, /Tag/)) return { diagram: "library-activity", focus: "tags" };
      if (inCluster(page, "analytics-cadence")) return { diagram: "library-activity", focus: "cadence" };
      if (inCluster(page, "access-audit")) return { diagram: "folder-access", focus: "team" };
      return { diagram: "library-activity", focus: "uploads" };

    case "use-cases":
      return { diagram: "media-library", focus: mediaTypesIn(page.sourceText) };

    case "integrations":
      if (n === 241 || n === 260) return { diagram: "connector-flow", label: "Your tools" };
      return { diagram: "connector-flow", label: page.title.replace(/ Integration$/, "") };

    case "developers":
      if (titleHas(page, /Upload/)) return { diagram: "api-flow", focus: "upload" };
      if (titleHas(page, /Search/)) return { diagram: "api-flow", focus: "search" };
      if (titleHas(page, /Metadata/)) return { diagram: "api-flow", focus: "metadata" };
      if (titleHas(page, /Tags/)) return { diagram: "api-flow", focus: "tags" };
      if (titleHas(page, /Comment/)) return { diagram: "api-flow", focus: "comments" };
      if (titleHas(page, /Approval/)) return { diagram: "api-flow", focus: "approvals" };
      if (inCluster(page, "webhooks")) return { diagram: "api-flow", focus: "webhooks" };
      if (inCluster(page, "api-security")) return { diagram: "api-flow", focus: "auth" };
      return { diagram: "api-flow" };

    case "migration":
      if (inCluster(page, "metadata-preservation")) return { diagram: "migration-map", focus: "metadata" };
      if (inCluster(page, "folder-mapping")) return { diagram: "migration-map", focus: "folders" };
      if (inCluster(page, "bulk-import")) return { diagram: "migration-map", focus: "import" };
      if (inCluster(page, "migration-sources")) return { diagram: "connector-flow", label: page.title.replace(/ Migration$/, "") };
      if (titleHas(page, /Permission/)) return { diagram: "migration-map", focus: "permissions" };
      if (titleHas(page, /Verification/)) return { diagram: "migration-map", focus: "verify" };
      return { diagram: "migration-map" };

    case "architecture-performance":
      if (titleHas(page, /Edge|CDN|Global/)) return { diagram: "architecture-stack", focus: "edge" };
      if (titleHas(page, /API/)) return { diagram: "architecture-stack", focus: "api" };
      if (titleHas(page, /Search/)) return { diagram: "architecture-stack", focus: "search" };
      if (titleHas(page, /Storage/)) return { diagram: "architecture-stack", focus: "storage" };
      if (titleHas(page, /Cloud/)) return { diagram: "architecture-stack", focus: "clients" };
      if (titleHas(page, /Preview|Streaming/)) return { diagram: "ingest-pipeline", focus: "preview" };
      if (titleHas(page, /Upload|Large File|Processing/)) return { diagram: "ingest-pipeline", focus: titleHas(page, /Processing/) ? "processing" : "upload" };
      return { diagram: "architecture-stack" };

    case "security-compliance":
      if (titleHas(page, /Encryption/)) return { diagram: "control-map", focus: "encryption" };
      if (titleHas(page, /SSO|SCIM|MFA/)) return { diagram: "control-map", focus: "authentication" };
      if (titleHas(page, /RBAC|Default-Deny/)) return { diagram: "control-map", focus: "access" };
      if (titleHas(page, /Tenant/)) return { diagram: "control-map", focus: "tenant" };
      if (titleHas(page, /Audit/)) return { diagram: "control-map", focus: "audit" };
      if (titleHas(page, /Backup|Restore|Replication/)) return { diagram: "architecture-stack", focus: "storage" };
      return { diagram: "control-map" };

    case "conversion":
      return (
        {
          391: { diagram: "ingest-pipeline", focus: "sources" },
          392: { diagram: "media-library" },
          393: { diagram: "search-signals", focus: "semantic" },
          395: { diagram: "folder-access", focus: "team" },
          396: { diagram: "timeline-review", focus: "status" },
          397: { diagram: "library-activity", focus: "storage" },
          398: { diagram: "ai-review", focus: "tags" },
          399: { diagram: "version-record", focus: "files" },
        } as Record<number, VisualRef>
      )[n] ?? { diagram: "library-search" };

    default:
      // Pricing, business value, resources and FAQs are typographic; visuals appear in sections only.
      return null;
  }
}

/** The hero figure for a page, or null for typographic page types. */
export function heroVisual(page: VisualPage): VisualRef | null {
  return focusFor(page);
}

/**
 * A second figure for split, media and alternating sections: a different diagram from the hero,
 * chosen from the system the page belongs to, so a page never shows the same figure twice.
 */
export function secondaryVisual(page: VisualPage, hero: VisualRef | null): VisualRef | null {
  const candidates: VisualRef[] = [];
  const add = (visual: VisualRef | null | undefined) => {
    if (visual && visual.diagram !== hero?.diagram && !candidates.some((c) => c.diagram === visual.diagram)) candidates.push(visual);
  };
  switch (page.category) {
    case "search-discovery":
      add({ diagram: "library-search" });
      break;
    case "ai":
      add({ diagram: "ingest-pipeline", focus: "processing" });
      add({ diagram: "search-signals", focus: "tags" });
      break;
    case "collaboration":
      add({ diagram: "version-record", focus: "lifecycle" });
      break;
    case "asset-management":
      add({ diagram: "timeline-review", focus: "status" });
      add({ diagram: "folder-access", focus: "folders" });
      break;
    case "storage-ingestion":
      add({ diagram: "library-activity", focus: "storage" });
      add({ diagram: "architecture-stack", focus: "storage" });
      break;
    case "permissions-multi-tenancy":
      add({ diagram: "control-map", focus: "access" });
      add({ diagram: "tenant-boundaries", focus: "audit" });
      break;
    case "analytics":
      add({ diagram: "media-library" });
      break;
    case "use-cases":
      add({ diagram: "search-signals" });
      add({ diagram: "timeline-review", focus: "comments" });
      break;
    case "integrations":
      add({ diagram: "ingest-pipeline", focus: "sources" });
      add({ diagram: "api-flow", focus: "webhooks" });
      break;
    case "developers":
      add({ diagram: "architecture-stack", focus: "api" });
      add({ diagram: "tenant-boundaries", focus: "tenants" });
      break;
    case "migration":
      add({ diagram: "ingest-pipeline", focus: "upload" });
      add({ diagram: "folder-access", focus: "folders" });
      break;
    case "architecture-performance":
      add({ diagram: "ingest-pipeline", focus: "preview" });
      add({ diagram: "architecture-stack" });
      break;
    case "security-compliance":
      add({ diagram: "tenant-boundaries", focus: "audit" });
      add({ diagram: "folder-access", focus: "private" });
      break;
    case "platform":
    case "conversion":
      add({ diagram: "media-library" });
      add({ diagram: "ingest-pipeline", focus: "sources" });
      break;
    case "business-value":
    case "pricing-plans":
      add({ diagram: "library-activity", focus: "storage" });
      break;
    case "resources":
    case "faq":
      if (inCluster(page, "ai-explainers", "ai-tagging", "ai-approach")) add({ diagram: "ai-review", focus: "tags" });
      if (inCluster(page, "semantic-search", "ocr-search", "indexing-metadata")) add({ diagram: "search-signals", focus: inCluster(page, "ocr-search") ? "ocr" : inCluster(page, "semantic-search") ? "semantic" : "metadata" });
      if (inCluster(page, "workflow-explainers", "versioning", "approvals")) add({ diagram: "version-record", focus: "versions" });
      if (inCluster(page, "multi-tenancy")) add({ diagram: "tenant-boundaries", focus: "tenants" });
      if (inCluster(page, "migration-overview")) add({ diagram: "migration-map" });
      if (inCluster(page, "video-review")) add({ diagram: "timeline-review", focus: "timeline" });
      if (inCluster(page, "api-platform")) add({ diagram: "api-flow" });
      if (inCluster(page, "integrations-overview")) add({ diagram: "connector-flow", label: "Your tools" });
      add({ diagram: "library-search" });
      break;
  }
  add(CATEGORY_VISUAL[page.category]);
  return candidates[0] ?? null;
}
