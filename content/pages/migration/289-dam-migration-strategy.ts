/**
 * 289 · DAM Migration Strategy — /migration/dam-migration-strategy
 *
 * Angle (cluster: migration-planning, primary): strategy as understanding what exists first — existing storage,
 * metadata, permissions and organisational requirements — and the principles that follow. Digital Asset Migration
 * Planning (290) owns turning that into a plan for assets, metadata and permissions; the section root (281) owns the
 * phases and the decisions to settle.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how organisations prepare a DAM migration strategy; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 289,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Base a DAM migration strategy on an honest picture of the starting point: where your assets are stored, what metadata they carry, who can reach them and what the organisation needs its new library to do.",
      visual: { diagram: "migration-map" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 289 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A strategy starts with what exists, not with the transfer",
      body: [
        "A successful DAM migration begins with understanding existing storage, metadata, permissions and organisational requirements. Strategy is that understanding, condensed into a few principles the whole project can follow when choices get difficult.",
        "Migrations that begin with the transfer tend to meet their real problems halfway through: a storage location nobody listed, a keyword field that turns out to hold licensing notes, a folder shared with an agency long ago, a department whose approval process nobody had written down. Each discovery forces a decision under pressure, often after some content has already moved.",
        [
          "Everything later in a migration leans on this groundwork. The checks that ",
          { text: "migration verification", page: 296 },
          " eventually has to pass can only be as good as the understanding of what existed before anything moved.",
        ],
      ],
      keyPoints: {
        heading: "What a strategy understands",
        items: ["Every place assets are stored", "Metadata as it really exists", "Who has access, and why", "What the organisation requires", "Principles agreed before transfer", "What success will mean"],
      },
      highlight: {
        heading: "In practice",
        body: "Before choosing an approach, an agency’s operations lead maps every location holding client work and finds an old project drive one account team still saves to. Including it now avoids a second, smaller migration later.",
        tags: ["Agencies", "Operations", "Discovery"],
      },
      glance: {
        heading: "Migration strategy in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Understands", value: "Storage, metadata, permissions and requirements" },
          { label: "Comes before", value: "Any transfer of content" },
          { label: "Leads to", value: "Digital Asset Migration Planning", page: 290 },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 289 }, { kind: "pdf", page: 296 }, { kind: "pdf", page: 290 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "four-areas",
      eyebrow: "Four areas",
      heading: "What to understand before a DAM migration begins",
      tabs: [
        {
          label: "Storage",
          heading: "Every place the assets live",
          icon: "server",
          body: [
            "List each location that holds creative work: shared drives, cloud storage, an older asset management system, archive disks and the personal folders where finished files quietly end up. For each one, note who still saves to it, what it holds and whether it keeps the only copy of anything.",
            "GetSibu’s migration capabilities are intended for teams moving from shared drives, cloud storage or other asset management systems, so knowing which of those you have shapes the rest of the approach.",
          ],
          points: ["Active locations separated from archives", "Only copies identified early"],
        },
        {
          label: "Metadata",
          heading: "What the files already know",
          icon: "tag",
          body: [
            "Sample assets from each location and period to see what metadata exists in practice rather than what a field list promises. Note the details people rely on and those that were abandoned.",
            "That picture decides how much of the new library’s search will rest on carried-over information and how much will have to come from description added after the move.",
          ],
          points: ["Evidence from real files", "Details people actually use"],
        },
        {
          label: "Permissions",
          heading: "Who can reach what today, and why",
          icon: "lock",
          body: [
            "Record how access works now: which areas are open to everyone, which are restricted and which were shared beyond a team for a reason nobody remembers. At this stage the aim is understanding, not redesign.",
            ["The strategy can then set that picture beside GetSibu’s ", { text: "creative asset permissions", page: 151 }, ", which let organisations control who can access different areas of their library."],
          ],
          points: ["Open, restricted and forgotten areas", "Reasons recorded as well as rules"],
        },
        {
          label: "Requirements",
          heading: "What the organisation needs the library to do",
          icon: "building",
          body: [
            "Requirements come from outside the files: brand rules, client confidentiality, material that must be kept for legal reasons, approval steps, other systems that need to connect and the people who will look after the library. They are easy to overlook precisely because no storage location records them.",
          ],
          points: ["Obligations attached to content", "Processes the library must support"],
        },
      ],
      sources: [{ kind: "pdf", page: 289 }, { kind: "pdf", page: 281 }, { kind: "pdf", page: 151 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "copy-or-understand",
      eyebrow: "Why it matters",
      heading: "A copy-first migration compared with a strategy-led one",
      columns: ["Copy first, sort it out later", "Understand first, then move"],
      emphasis: 1,
      rows: [
        ["When problems surface", "Midway through the transfer", "During discovery, before content moves"],
        ["Metadata decisions", "Made file by file as issues appear", "Made once, from a view of the whole"],
        ["Access on arrival", "Whatever was quickest to set", "Considered deliberately from the start"],
        ["Scope", "Grows as forgotten locations appear", "Agreed before the transfer"],
        ["What counts as done", "Everything copied somewhere", "Agreed checks on content, metadata and access"],
      ],
      sources: [{ kind: "pdf", page: 289 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "requirements",
      eyebrow: "Organisational requirements",
      heading: "Requirements a migration strategy should bring out early",
      items: [
        {
          heading: "Who governs the library",
          summary: "Rights to upload, approve and download are policy before they are configuration.",
          icon: "shield",
          body: [
            ["Decide early who may add, change, approve and remove material, because the answers shape folders and access. ", { text: "Creative asset governance", page: 114 }, " is the framework that sets out who can upload, edit, approve, download and manage assets."],
          ],
        },
        {
          heading: "Separation between clients or brands",
          summary: "Some content must never mix, whatever the folder structure.",
          icon: "building",
          body: [
            ["Agencies and groups with several brands often need boundaries stronger than a folder. Where that applies, the strategy should weigh a ", { text: "multi-tenant environment", page: 160 }, ", which GetSibu is designed to provide for organisations that need multiple isolated environments, before any content is placed."],
          ],
        },
        {
          heading: "Approvals that must carry on",
          summary: "Work under review does not pause because the library is moving.",
          icon: "approval",
          body: [
            ["List the approval steps each team depends on and the material currently in review, then state in the strategy when each team will begin using ", { text: "GetSibu’s approval workflows", page: 67 }, " in place of its current process."],
          ],
        },
        {
          heading: "Material to archive or leave out",
          summary: "Not every historical file belongs in daily discovery.",
          icon: "archive",
          body: [
            ["Legal, brand and archive owners should agree what is kept for reference, for how long and what stays behind. ", { text: "Creative data governance", page: 339 }, " establishes rules around access, retention, usage and asset management, and a migration is when those rules first meet the whole collection."],
          ],
        },
        {
          heading: "Tools the library must work with",
          summary: "Creative work passes through other systems before and after the library.",
          icon: "plug",
          body: [
            ["Note which tools send files into the library or take them out, and which of those connections matter from the first day. ", { text: "GetSibu integrations", page: 241 }, " are meant to connect with the tools teams already use, so an existing creative workflow does not have to be completely rebuilt."],
          ],
        },
        {
          heading: "Who owns the library afterwards",
          summary: "A strategy without a future owner stops at the switch-over.",
          icon: "user",
          body: [
            "Name the people who will look after structure, vocabulary and access once the migration is finished. Their judgement should shape the strategy, since they will live with its consequences longest.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 339 }, { kind: "pdf", page: 241 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about DAM migration strategy",
      items: [
        {
          question: "How is a DAM migration strategy different from a migration plan?",
          answer: ["A strategy establishes what exists and the principles the move will follow. ", { text: "Digital asset migration planning", page: 290 }, " then applies those principles to assets, metadata and permissions in enough detail to carry out the transfer."],
        },
        {
          question: "Who should contribute to a DAM migration strategy?",
          answer: "The people who look after the library, leads from the teams that use it most, whoever answers for rights and brand, and someone who knows the current storage. Each holds part of the picture the others cannot see.",
        },
        {
          question: "Why include current permissions in a DAM migration strategy if access will be redesigned?",
          answer: ["Because a redesign still has to serve the needs the old access was meeting, including needs nobody recorded. How audiences are then worked out for the new library is the focus of ", { text: "Migration Permission Mapping", page: 295 }, "."],
        },
        {
          question: "What should a DAM migration strategy produce?",
          answer: "A short, shared document rather than a detailed schedule. Its value shows when the project meets a hard choice, such as an unexpected location or a disputed field, because the decision can then point back to principles everyone has already agreed.",
        },
      ],
      sources: [{ kind: "pdf", page: 290 }, { kind: "pdf", page: 295 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on preparing a migration",
      variant: "compact",
      pages: [290, 296, 295, 151, 114, 339],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Your Creative Assets Together",
      conversionPage: 392,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 392 }],
    },
  ],
};

export default page;
