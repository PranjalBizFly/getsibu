/**
 * 372 · What Is Multi-Tenant DAM? — /resources/what-is-multi-tenant-dam
 *
 * Angle (cluster: workflow-explainers; multi-tenancy): vendor-neutral explainer of tenancy — what a tenant is, how
 * separate tenants differ from folders in one library, which organisations tend to need it and what to ask about
 * any multi-tenant setup. The multi-tenancy feature pages (160–168, 177, 276, 324) own GetSibu's capabilities,
 * Creative Agencies (215) the use case and FAQ 387 the yes answer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of multi-tenancy in asset management; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 372,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "What a multi-tenant DAM is, how separate tenants differ from folders in one shared library, which organisations tend to need tenancy, what to ask about any setup, and how GetSibu keeps client environments apart.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 372 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 161 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "Multi-tenant DAM",
      answer: "Multi-tenant DAM allows one platform to support multiple isolated organisations or clients. Each tenant works in its own environment while the software underneath is shared.",
      detail: "The term borrows from property: one building, many tenants, each behind a separate front door. In software, a tenant is a distinct organisational space with its own users, content and configuration. Tenants run on the same platform, but the system is designed so that nothing passes from one to another unless it is meant to.",
      sources: [{ kind: "pdf", page: 372 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Separation built into the structure, not added by rules",
      body: [
        "A multi-tenant DAM lets a single platform host many independent libraries. For an agency, each client can have its own tenant; for a group of companies, each brand or subsidiary; for a business offering asset management to its customers, each customer.",
        "The alternatives both carry a cost. Putting every client into one shared library and separating them with folders depends on permissions being set correctly every time, and one mistake can expose a client’s unreleased work to another. Running an entirely separate system per client removes that risk but multiplies administration, accounts and updates. Multi-tenancy sits between the two: separation is part of the architecture, while operations stay in one place.",
        [
          "Tenancy is a governance decision as much as a technical one. It sets the outermost boundary of ",
          { text: "creative governance", page: 371 },
          ", inside which each tenant still needs its own permissions, approvals and ",
          { text: "creative library", page: 373 },
          " structure.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A tenant as an isolated environment", "One platform, many organisations", "Separation by architecture", "Configuration that differs per tenant", "Permissions inside each tenant"],
      },
      highlight: {
        heading: "In practice",
        body: "An agency works for two competing retailers. Each retailer’s campaign imagery lives in its own tenant, so searches in one environment return only that retailer’s material.",
        tags: ["Agencies", "Brand groups", "Service providers"],
      },
      glance: {
        heading: "Multi-tenant DAM in brief",
        facts: [
          { label: "Area", value: "Permissions and multi-tenancy" },
          { label: "Unit of separation", value: "The tenant" },
          { label: "Suits", value: "Agencies and multi-organisation groups" },
          { label: "In GetSibu", value: "Multi-Tenant Digital Asset Management", page: 160 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 372 }, { kind: "pdf", page: 371 }, { kind: "pdf", page: 373 }, { kind: "pdf", page: 160 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "folders-vs-tenants",
      eyebrow: "The difference",
      heading: "Folders in one library versus separate tenants",
      intro: "Both approaches keep content apart; they differ in how the separation is enforced.",
      columns: ["Folders in one shared library", "Separate tenants on one platform"],
      emphasis: 1,
      rows: [
        ["What keeps content apart", "Permission settings on each folder", "The boundary between environments"],
        ["A permission mistake", "Can expose content across clients", "Usually limited to one tenant"],
        ["Users and administrators", "One shared set for everyone", "Typically managed per tenant"],
        ["Configuration and branding", "The same for every client", "Can differ from tenant to tenant"],
        ["Working across clients", "Easy, since everything is together", "Deliberate, since each tenant stands apart"],
      ],
      sources: [{ kind: "pdf", page: 372 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "who-needs-it",
      eyebrow: "Who it suits",
      heading: "Organisations that tend to need tenancy",
      tabs: [
        {
          label: "Agencies",
          heading: "Many clients, one operation",
          icon: "briefcase",
          body: [
            "Agencies hold work for competing clients side by side, often under confidentiality agreements. Tenancy lets them run every client from one platform while each client’s assets, users and reviews stay apart.",
            "It also means a client-facing library holds that client’s material and nothing from anyone else.",
          ],
          points: ["Confidential client work", "No other client’s material inside"],
          link: { page: 162, label: "Agency Multi-Tenancy" },
        },
        {
          label: "Brand groups",
          heading: "Brands that share an owner, not a library",
          icon: "building",
          body: [
            "Holding companies, franchises and groups with distinct brands often want central operation without merging libraries. Each brand keeps its own taxonomy, approvals and users, and the group avoids maintaining a separate system for every brand.",
            "The trade-off is that sharing an asset between brands becomes a deliberate act rather than an accident.",
          ],
          points: ["Independent brand libraries", "Operated from one platform"],
        },
        {
          label: "Service providers",
          heading: "Asset libraries offered to customers",
          icon: "store",
          body: [
            "Some organisations provide an asset library as part of their own service, such as a studio delivering footage to its customers or a platform serving many small businesses. Each customer expects a space of its own, often presented under the provider’s brand.",
            "Tenancy is what makes that practical without a separate installation for each customer.",
          ],
          points: ["A space for each customer", "Presented under the provider’s brand"],
          link: { page: 166, label: "White-Label Asset Management" },
        },
      ],
      sources: [{ kind: "pdf", page: 162 }, { kind: "pdf", page: 166 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "questions-to-ask",
      eyebrow: "Considerations",
      heading: "What to ask about any multi-tenant setup",
      items: [
        {
          heading: "What exactly is isolated?",
          summary: "Files are the obvious part; users, search, settings and records matter too.",
          icon: "lock",
          body: [
            "Ask whether assets, metadata, search indexes, user accounts, activity records and configuration are all scoped to the tenant. Isolation that covers files but not search, for example, is weaker than it sounds.",
          ],
        },
        {
          heading: "How storage is divided",
          summary: "Tenants may need their own allocation and clear boundaries.",
          icon: "database",
          body: [
            ["Separate allocations make it easier to see what each client consumes and to plan for growth. In GetSibu, ", { text: "client environments can have their own storage allocation", page: 163 }, " and asset boundaries."],
          ],
        },
        {
          heading: "Whether integrations respect the boundary",
          summary: "Automated access must stay inside the same walls as people.",
          icon: "api",
          body: [
            ["An API that ignores tenancy can undo careful separation. With ", { text: "API tenant isolation", page: 276 }, ", API access can include tenant context, so multi-tenant environments remain properly separated."],
          ],
        },
        {
          heading: "People who work across tenants",
          summary: "Account managers and shared studio teams often work for more than one client.",
          icon: "users",
          body: [
            "Ask how the setup treats someone whose work spans several tenants, and whether that arrangement is visible to the people responsible for each one. Any route between tenants deserves as much scrutiny as the boundary itself.",
          ],
        },
        {
          heading: "Endings and overall reporting",
          summary: "Client relationships end, and leaders still want a combined view.",
          icon: "chart",
          body: [
            "Ask what happens to a tenant’s assets and records when a client relationship ends, and settle the answer before the first upload rather than at the end. Leaders will also want a view across tenants that does not expose one client’s information to another.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 163 }, { kind: "pdf", page: 276 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu applies multi-tenancy",
      items: [
        {
          heading: "Logically isolated client environments",
          body: "Each client environment can remain logically isolated, so that one client’s assets are not mixed with another client’s library.",
          icon: "layers",
          page: 161,
        },
        {
          heading: "Tenant-scoped data access",
          body: "GetSibu’s architecture is designed around tenant-scoped data access, reflecting the strict separation multi-tenant organisations require.",
          icon: "shield",
          page: 324,
        },
        {
          heading: "Per-client AI keys",
          body: "Multi-tenant configurations can support client-specific AI key management where required.",
          icon: "key",
          page: 164,
        },
        {
          heading: "Per-client authentication",
          body: "Client-specific authentication options can support organisations that require separate access controls for different customers.",
          icon: "lock",
          page: 165,
        },
        {
          heading: "Client review kept apart",
          body: "Agencies can maintain client-specific libraries and review workflows while keeping different clients isolated.",
          icon: "approval",
          page: 72,
        },
        {
          heading: "Activity across client environments",
          body: "Agencies can use analytics to understand asset activity across their client environments.",
          icon: "chart",
          page: 202,
        },
      ],
      sources: [{ kind: "pdf", page: 161 }, { kind: "pdf", page: 324 }, { kind: "pdf", page: 164 }, { kind: "pdf", page: 165 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 202 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about multi-tenant DAM",
      items: [
        {
          question: "How is a multi-tenant DAM different from a separate installation for each client?",
          answer: "A separate installation, often called single-tenant hosting, gives each client its own copy of the software and infrastructure. A multi-tenant platform runs one installation and keeps tenants apart logically, by scoping data access to each tenant. The first offers physical separation; the second is simpler to operate and depends on how carefully that logical separation is designed.",
        },
        {
          question: "Do tenants in a multi-tenant DAM share each other’s content?",
          answer: ["No; they share the underlying platform, not one another’s libraries. In GetSibu, ", { text: "client asset isolation", page: 167 }, " prevents unrelated customer libraries from being mixed within the same workflow."],
        },
        {
          question: "When does an organisation need a multi-tenant DAM rather than one library?",
          answer: "When the groups it serves must not see each other’s work, or need their own administrators or configuration. If everyone belongs to one organisation and follows its rules, folders and permissions are usually enough.",
        },
      ],
      sources: [{ kind: "pdf", page: 167 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on multi-tenancy",
      variant: "compact",
      pages: [160, 162, 161, 324, 215, 387],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, the agency use case and the matching FAQ." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Make Every Asset Discoverable",
      conversionPage: 394,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 394 }],
    },
  ],
};

export default page;
