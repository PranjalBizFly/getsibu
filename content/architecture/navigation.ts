/**
 * Navigation model.
 *
 * Derived from the PDF's 18 groups, compressed to 7 primary items so the header stays scannable.
 * Every PDF page is reachable in at most three clicks: header → section/category hub → page.
 *
 * Labels use PDF terminology. Column descriptions paraphrase the cited PDF page closely and must not
 * state a claim that is not publishable (validate-inventory scans them). Featured links prefer pages
 * whose claims are publishable; the validator warns about any that are not.
 */
import { analyticsPath } from "./route-decisions.ts";

export interface NavLink {
  label: string;
  href: string;
  /** Required when the target is a framed page (needs verification, safe title): why the link is safe. */
  framedReason?: string;
  /**
   * Rendered only while the target page is live. For links to pages that are held until GetSibu
   * confirms their claim: they appear automatically when the claims register publishes the page.
   */
  onlyWhenLive?: boolean;
}

export interface NavColumn {
  heading: string;
  /** One line under the heading, written from the cited PDF page. */
  description: string;
  /** PDF page(s) the description is written from. */
  descriptionSource: number[];
  /** The column's hub; rendered as the "Explore all" link. */
  hub: NavLink;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  /** "mega" = multi-column panel, "list" = single column, "link" = no panel. */
  kind: "mega" | "list" | "link";
  columns?: NavColumn[];
  /** Required when the target is a framed page: why the link is safe. */
  framedReason?: string;
}

export interface GlobalCta {
  label: string;
  href: string;
  verified: boolean;
  /** False until the destination offers a real, confirmed channel (a demo booking, a contact form). */
  channelConfirmed?: boolean;
  note?: string;
}

/**
 * Global CTAs, worded as on the official site (header, hero, pricing; audited 2026-09-14).
 * The app currently serves /signup and /login from getsibu.com (verified 2026-09-14). If the app moves
 * to its own origin (route-decisions.ts), set NEXT_PUBLIC_APP_ORIGIN and every CTA follows.
 */
export const APP_ORIGIN = (typeof process !== "undefined" && process.env.NEXT_PUBLIC_APP_ORIGIN ? process.env.NEXT_PUBLIC_APP_ORIGIN : "https://getsibu.com").replace(/\/$/, "");

export const GLOBAL_CTAS: Record<"primary" | "secondary" | "signIn", GlobalCta> = {
  primary: { label: "Start free", href: `${APP_ORIGIN}/signup`, verified: true, note: "Official header, hero, pricing and footer CTA." },
  secondary: { label: "Book a demo", href: "/contact", verified: true, channelConfirmed: false, note: "Official CTA → /contact. Not rendered until GetSibu confirms a demo or contact channel: /contact currently only routes to verified pages." },
  signIn: { label: "Sign In", href: `${APP_ORIGIN}/login`, verified: true },
};

export const PRIMARY_NAV: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    kind: "mega",
    columns: [
      {
        heading: "Platform",
        description: "Storage, organisation, AI tagging, search, collaboration, permissions and analytics in one platform.",
        descriptionSource: [2],
        hub: { label: "The Operating System for Creative Libraries", href: "/platform" },
        links: [
          { label: "Centralised Creative Asset Library", href: "/platform/centralised-creative-asset-library" },
          { label: "Creative Asset Organisation", href: "/platform/creative-asset-organisation" },
          { label: "One Source of Truth for Creative Teams", href: "/platform/one-source-of-truth-for-creative-teams" },
        ],
      },
      {
        heading: "Architecture & Performance",
        description: "Infrastructure designed to keep search and previews responsive as libraries grow.",
        descriptionSource: [302],
        hub: { label: "GetSibu Architecture", href: "/architecture" },
        links: [
          { label: "High-Performance DAM", href: "/architecture/high-performance-dam" },
          { label: "Scalable Asset Storage", href: "/architecture/scalable-asset-storage" },
          { label: "Stateless API Architecture", href: "/architecture/stateless-api-architecture" },
        ],
      },
      {
        heading: "Security & Compliance",
        description: "Authentication, access control, tenant isolation and audit logging built into the architecture.",
        descriptionSource: [321],
        hub: { label: "GetSibu Security", href: "/security" },
        links: [
          { label: "Tenant Isolation", href: "/security/tenant-isolation" },
          { label: "Default-Deny Security", href: "/security/default-deny-security" },
          { label: "Secret Encryption", href: "/security/secret-encryption" },
        ],
      },
      {
        heading: "Migration",
        description: "Move existing libraries in while keeping their metadata and folder structures.",
        descriptionSource: [131, 281],
        hub: { label: "Migrate to GetSibu", href: "/migration" },
        links: [
          { label: "DAM Migration Strategy", href: "/migration/dam-migration-strategy" },
          { label: "Metadata Migration", href: "/migration/metadata-migration" },
          { label: "Migration Verification", href: "/migration/migration-verification" },
        ],
      },
    ],
  },
  {
    label: "Features",
    href: "/features",
    kind: "mega",
    columns: [
      {
        heading: "Search & Discovery",
        description: "Find assets by filename, metadata, extracted text, tags or a description in plain language.",
        descriptionSource: [11, 18],
        hub: { label: "All search & discovery", href: "/features/search-and-discovery" },
        links: [
          { label: "Creative Asset Search", href: "/features/creative-asset-search" },
          { label: "Semantic Creative Search", href: "/features/semantic-creative-search" },
          { label: "OCR-Powered Asset Search", href: "/features/ocr-powered-asset-search" },
          { label: "Saved Asset Searches", href: "/features/saved-asset-searches" },
        ],
      },
      {
        heading: "AI",
        description: "Suggested tags, OCR and duplicate detection that your team reviews, approves or overrides.",
        descriptionSource: [31, 38, 40, 47, 48],
        hub: { label: "All AI features", href: "/features/ai" },
        links: [
          { label: "AI-Assisted Tagging", href: "/features/ai-assisted-tagging" },
          { label: "AI Tag Approval", href: "/features/ai-tag-approval" },
          { label: "AI OCR", href: "/features/ai-ocr" },
          { label: "AI Duplicate Detection", href: "/features/ai-duplicate-detection" },
        ],
      },
      {
        heading: "Collaboration",
        description: "Comments, reviews and approvals attached to the asset instead of scattered across tools.",
        descriptionSource: [61, 73, 67],
        hub: { label: "All collaboration", href: "/features/collaboration" },
        links: [
          { label: "Video Timeline Comments", href: "/features/video-timeline-comments" },
          { label: "Threaded Comments", href: "/features/threaded-comments" },
          { label: "Creative Approval Workflow", href: "/features/creative-approval-workflow" },
        ],
      },
      {
        heading: "Versioning & Asset Management",
        description: "Versions, statuses, lifecycle and the audit trail kept together in one asset record.",
        descriptionSource: [91, 101, 119],
        hub: { label: "All versioning & asset management", href: "/features/asset-management" },
        links: [
          { label: "Creative Asset Versioning", href: "/features/creative-asset-versioning" },
          { label: "Approved Asset Library", href: "/features/approved-asset-library" },
          { label: "Asset Audit Trail", href: "/features/asset-audit-trail" },
        ],
      },
      {
        heading: "Storage & Ingestion",
        description: "Bring content in from connected storage sources and direct uploads, then process it for search.",
        descriptionSource: [121, 143],
        hub: { label: "All storage & ingestion", href: "/storage" },
        links: [
          { label: "Automated Asset Ingestion", href: "/storage/automated-asset-ingestion" },
          { label: "Resumable Uploads", href: "/storage/resumable-uploads" },
          { label: "Streaming Media Preview", href: "/storage/streaming-media-preview" },
        ],
      },
      {
        heading: "Permissions & Multi-Tenancy",
        description: "Folder-level access control and isolated environments for every client.",
        descriptionSource: [152, 160, 161],
        hub: { label: "All permissions & multi-tenancy", href: "/permissions" },
        links: [
          { label: "Folder-Level Permissions", href: "/permissions/folder-level-permissions" },
          { label: "Default-Deny Access", href: "/permissions/default-deny-access" },
          { label: "Client Tenant Isolation", href: "/permissions/client-tenant-isolation" },
        ],
      },
      {
        heading: "Analytics",
        description: "Visibility into uploads, storage, contributors, tags and activity across the library.",
        descriptionSource: [181],
        hub: { label: "All analytics", href: analyticsPath() },
        links: [
          { label: "Creative Asset Analytics", href: analyticsPath("creative-asset-analytics") },
          { label: "Asset Usage Analytics", href: analyticsPath("asset-usage-analytics") },
          { label: "Storage Analytics", href: analyticsPath("storage-analytics") },
        ],
      },
    ],
  },
  {
    label: "Use Cases",
    href: "/use-cases",
    kind: "mega",
    columns: [
      {
        heading: "Video & Production",
        description: "Organise footage, review video and manage versions without scattered storage folders.",
        descriptionSource: [211],
        hub: { label: "All use cases", href: "/use-cases" },
        links: [
          { label: "Production Studios", href: "/use-cases/production-studios" },
          { label: "Film Production", href: "/use-cases/film-production" },
          { label: "Video Agencies", href: "/use-cases/video-agencies" },
        ],
      },
      {
        heading: "Marketing & Brand",
        description: "A central library for campaign assets, with approved content kept separate from drafts.",
        descriptionSource: [213, 71],
        hub: { label: "Marketing Teams", href: "/use-cases/marketing-teams" },
        links: [
          { label: "Brand Teams", href: "/use-cases/brand-teams" },
          { label: "Enterprise Marketing", href: "/use-cases/enterprise-marketing" },
          { label: "E-Commerce Brands", href: "/use-cases/e-commerce-brands" },
        ],
      },
      {
        heading: "Agencies",
        description: "Manage many client libraries from one platform while keeping them separated.",
        descriptionSource: [162],
        hub: { label: "Creative Agencies", href: "/use-cases/creative-agencies" },
        links: [
          { label: "Advertising Agencies", href: "/use-cases/advertising-agencies" },
          { label: "Brand Consultancies", href: "/use-cases/brand-consultancies" },
          { label: "Creative Studios", href: "/use-cases/creative-studios" },
        ],
      },
      {
        heading: "Organisations",
        description: "One source of truth for presentations, photography, videos and public-facing assets.",
        descriptionSource: [240],
        hub: { label: "Corporate Communications", href: "/use-cases/corporate-communications" },
        links: [
          { label: "Media Companies", href: "/use-cases/media-companies" },
          { label: "Education Teams", href: "/use-cases/education-teams" },
          { label: "Nonprofits", href: "/use-cases/nonprofits" },
        ],
      },
    ],
  },
  {
    label: "Integrations",
    href: "/integrations",
    kind: "list",
    columns: [
      {
        heading: "Integrations",
        description: "Connect GetSibu with the tools and storage your teams already use.",
        descriptionSource: [241],
        hub: { label: "GetSibu Integrations", href: "/integrations" },
        links: [
          // Named storage sources stay out of navigation until GetSibu confirms them (claim storage-sources).
          { label: "Automated Asset Ingestion", href: "/storage/automated-asset-ingestion" },
          { label: "Watch Folder Ingestion", href: "/storage/watch-folder-ingestion" },
          { label: "Webhook Automation", href: "/developers/webhook-automation" },
          { label: "REST API", href: "/developers/rest-api" },
          { label: "Custom Integrations", href: "/integrations/custom-integrations" },
          // Held until claim storage-sources is confirmed; shown automatically when their pages publish.
          { label: "Google Drive", href: "/storage/google-drive", onlyWhenLive: true },
          { label: "Dropbox", href: "/storage/dropbox", onlyWhenLive: true },
          { label: "AWS S3", href: "/storage/aws-s3", onlyWhenLive: true },
        ],
      },
    ],
  },
  {
    label: "Developers",
    href: "/developers",
    kind: "list",
    columns: [
      {
        heading: "API & Developers",
        description: "An API-first platform: build upload, search and collaboration into your own applications.",
        descriptionSource: [254, 255],
        hub: { label: "GetSibu for Developers", href: "/developers" },
        links: [
          { label: "GetSibu API", href: "/developers/api" },
          { label: "Asset Upload API", href: "/developers/asset-upload-api" },
          { label: "Asset Search API", href: "/developers/asset-search-api" },
          { label: "API Authentication", href: "/developers/api-authentication" },
          { label: "API Tenant Isolation", href: "/developers/api-tenant-isolation" },
          { label: "Developer Automation", href: "/developers/developer-automation" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    kind: "mega",
    columns: [
      {
        heading: "Learn",
        description: "Digital asset management concepts, explained without jargon.",
        descriptionSource: [361],
        hub: { label: "All resources", href: "/resources" },
        links: [
          { label: "What Is Digital Asset Management?", href: "/resources/what-is-digital-asset-management" },
          { label: "What Is AI Asset Management?", href: "/resources/what-is-ai-asset-management" },
          { label: "What Is Semantic Search?", href: "/resources/what-is-semantic-search" },
        ],
      },
      {
        heading: "Business Value",
        description: "Where a central creative library reduces searching, recreating files and version confusion.",
        descriptionSource: [348],
        hub: { label: "The business value of GetSibu", href: "/business-value" },
        links: [
          { label: "DAM Business Case", href: "/business-value/dam-business-case" },
          { label: "Asset Discovery ROI", href: "/business-value/asset-discovery-roi" },
          { label: "Creative Productivity", href: "/business-value/creative-productivity" },
        ],
      },
      {
        heading: "FAQs",
        description: "Direct answers to common questions about GetSibu.",
        descriptionSource: [381],
        hub: { label: "All FAQs", href: "/faq" },
        links: [
          { label: "What Is GetSibu?", href: "/faq/what-is-getsibu" },
          { label: "Who Is GetSibu For?", href: "/faq/who-is-getsibu-for" },
          { label: "Does GetSibu Have an API?", href: "/faq/does-getsibu-have-an-api" },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
    kind: "link",
    framedReason: "The official site has a pricing page. /pricing publishes with verified context only; plan names and prices stay unpublished until GetSibu confirms them.",
  },
];

/** Footer: every hub, so all hubs (and through them all pages) are one click from any page. */
export const FOOTER_NAV: Array<{ heading: string; links: NavLink[] }> = [
  {
    heading: "Platform",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Architecture & Performance", href: "/architecture" },
      { label: "Security & Compliance", href: "/security" },
      { label: "Migration", href: "/migration" },
      { label: "Pricing", href: "/pricing", framedReason: "Plan names and prices stay unpublished until confirmed; the page is framed by verified context." },
    ],
  },
  {
    heading: "Features",
    links: [
      { label: "Search & Discovery", href: "/features/search-and-discovery" },
      { label: "AI", href: "/features/ai" },
      { label: "Collaboration", href: "/features/collaboration" },
      { label: "Versioning & Asset Management", href: "/features/asset-management" },
      { label: "Storage & Ingestion", href: "/storage" },
      { label: "Permissions & Multi-Tenancy", href: "/permissions" },
      { label: "Analytics", href: analyticsPath() },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Use Cases", href: "/use-cases" },
      { label: "Integrations", href: "/integrations" },
      { label: "Developers", href: "/developers" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About GetSibu", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "Business Value", href: "/business-value" },
      { label: "FAQs", href: "/faq" },
      { label: "Get Started", href: "/get-started" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

/** One-line brand statement for the footer, from PDF p.1. */
export const FOOTER_STATEMENT = {
  text: "A searchable creative library for videos, images, documents and audio — in one central workspace.",
  source: [1],
};
