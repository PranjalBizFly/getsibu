/**
 * 281 · Migrate to GetSibu — /migration (section root)
 *
 * Angle (cluster: migration-overview, primary): the migration category itself — moving a library from shared
 * drives, cloud storage or another asset management system, what the move involves from audit to everyday use,
 * and the decisions to settle first. The template adds the section's areas and the list of child topics, so this
 * page has no capabilities grid of children and no related strip. Framed children (295 Migration Permission
 * Mapping, 297 DAM Onboarding) and held pages (283–285) are never linked or paraphrased.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how library migrations typically run; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 281,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Plan and carry out a move from shared drives, cloud storage or another asset management system into GetSibu, keeping the metadata and folder structure that still serve your team.",
      visual: { diagram: "migration-map" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 281 }, { kind: "pdf", page: 131 }, { kind: "pdf", page: 133 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Moving a library without losing what makes it useful",
      body: [
        "GetSibu provides migration capabilities for teams moving existing creative libraries from shared drives, cloud storage or other asset management systems. The aim is to arrive in an environment that is more searchable and structured than the one left behind, not simply to copy files across.",
        "The files themselves are rarely the hard part of a migration. What teams fear losing is everything around them: keywords someone spent years adding, the folder logic that tells a producer where a campaign lives, the record of who created what, and the confidence that nothing went missing on the way.",
        [
          { text: "Metadata such as EXIF, XMP, creators and custom keywords", page: 286 },
          " can be retained when a library moves to GetSibu, and the ",
          { text: "migration workflow", page: 292 },
          " is designed to let organisations continue using existing storage while content is indexed in the background, so the switch does not have to wait for a quiet period.",
        ],
      ],
      keyPoints: {
        heading: "What a migration involves",
        items: ["Strategy before any transfer", "Bulk import of existing media", "Metadata carried across", "Folders mirrored or remapped", "Indexing in the background", "Verification of the result"],
      },
      highlight: {
        heading: "In practice",
        body: "A team leaving shared drives can keep working from its old folders while the new library is indexed, then switch over once verification confirms the transfer.",
        tags: ["Shared drives", "Cloud storage", "Other DAM systems"],
      },
      glance: {
        heading: "Migration in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Moves from", value: "Shared drives, cloud storage, other asset management systems" },
          { label: "Starts with", value: "DAM Migration Strategy", page: 289 },
          { label: "Confirmed by", value: "Migration Verification", page: 296 },
        ],
      },
      sources: [{ kind: "pdf", page: 281 }, { kind: "pdf", page: 282 }, { kind: "pdf", page: 286 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 291 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 289 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "phases",
      eyebrow: "Step by step",
      heading: "Phases of a migration, from audit to everyday use",
      intro: "Each phase has its own topic in this section; together they describe one move.",
      steps: [
        { heading: "Take stock", body: "Start with what exists today: where files are stored, which metadata matters, who has access and what the organisation needs from the new library.", icon: "compass", page: 289 },
        { heading: "Plan the transfer", body: "Decide how assets, metadata and permissions will be handled before anything moves, so those choices are made once rather than halfway through.", icon: "map", page: 290 },
        { heading: "Import in bulk", body: "Bulk import moves large quantities of existing media into the library without anyone uploading files one at a time.", icon: "upload", page: 291 },
        { heading: "Process and index", body: "Imported assets move through stages such as metadata extraction, thumbnail generation and AI-related processing until they are fully indexed and searchable.", icon: "refresh" },
        { heading: "Verify the result", body: "Confirm that the content and metadata the team relies on have transferred correctly before the old location is retired.", icon: "check", page: 296 },
        { heading: "Configure and move the team", body: "Implementation sets up users, folders, permissions, integrations, metadata and workflows, so the team starts in a library arranged around how it works.", icon: "users", page: 299 },
      ],
      sources: [{ kind: "pdf", page: 289 }, { kind: "pdf", page: 290 }, { kind: "pdf", page: 291 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 296 }, { kind: "pdf", page: 299 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Considerations",
      heading: "Decisions to settle before the first file moves",
      items: [
        {
          heading: "What belongs in the new library",
          summary: "Not everything in the old location needs to come across.",
          icon: "filter",
          body: [
            "Shared drives and older systems collect abandoned drafts, personal folders and exports nobody uses. Deciding what to leave behind, archive or bring across keeps the new library from inheriting the clutter of the old one.",
            ["Once material has arrived, ", { text: "duplicate asset management", page: 112 }, " can help identify unnecessary copies, and archiving keeps historical content without letting it interfere with everyday discovery."],
          ],
        },
        {
          heading: "Which metadata the team really uses",
          summary: "Some fields hold a great deal of careful work; others are noise.",
          icon: "tag",
          body: [
            "Before moving, list the fields your team actually searches or relies on, such as creators, keywords and campaign references. That list doubles as the checklist for verification later.",
            ["Metadata that comes across ", { text: "can become part of the asset record", page: 22 }, ", which preserves context and makes a migrated library more useful than a copied folder."],
          ],
        },
        {
          heading: "Keep the folder structure or redesign it",
          summary: "A move is the easiest moment to fix an organisation system that no longer fits.",
          icon: "folder",
          body: [
            ["Mirroring the old folders is familiar and low-risk for the team. Remapping takes more planning but can retire structures that only made sense to someone who has since left, and ", { text: "migration folder mapping", page: 294 }, " allows either choice."],
            ["Whichever route you take, ", { text: "hierarchical tags", page: 8 }, " can carry classifications that folders handle poorly, such as a product that appears across several campaigns."],
          ],
        },
        {
          heading: "Who should see what",
          summary: "Access belongs in the plan, not in a clean-up afterwards.",
          icon: "lock",
          body: [
            "Old shared drives often grant broad access because it was the easiest option at the time. A migration is a chance to decide deliberately which teams need which areas of the library.",
            ["In GetSibu, ", { text: "folder-level permissions", page: 152 }, " control access in more detail than organisation-wide access, and new folders can stay private until access is explicitly granted."],
          ],
        },
        {
          heading: "How you will know it worked",
          summary: "Define what a successful transfer looks like before it starts.",
          icon: "audit",
          body: [
            "Totals of files are the easy check. The harder ones are whether keywords survived, whether folders landed where colleagues expect them and whether the assets people use most can be found in search.",
            ["Processing status helps separate assets that have merely uploaded from those that are ", { text: "fully indexed and searchable", page: 145 }, ", which is the state that matters to the people who will use the library."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 112 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 294 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 290 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 296 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about migrating to GetSibu",
      items: [
        {
          question: "Which existing libraries can be migrated to GetSibu?",
          answer: ["Migration is intended for creative libraries currently held in shared drives, cloud storage or other asset management systems. Beyond migration, assets can also enter GetSibu through ", { text: "connected storage sources and direct uploads", page: 121 }, "."],
        },
        {
          question: "Do creators stay associated with their assets after a migration to GetSibu?",
          answer: ["Creators are among the metadata that can be preserved during migration, and ", { text: "asset attribution", page: 116 }, " means creators and contributors can stay linked to their assets once the move is complete."],
        },
        {
          question: "Can the team keep using its current storage while a migration runs?",
          answer: "Yes. The migration workflow is designed so that existing storage stays in use while GetSibu indexes content in the background.",
        },
        {
          question: "How long does a migration to GetSibu take?",
          answer: "There is no single answer. It depends on the size of the library, how much metadata and folder structure needs to come across, and how much time the team gives to planning and verification.",
        },
        {
          question: "Where should someone new to DAM migration start?",
          answer: ["The explainer ", { text: "What Is a DAM Migration?", page: 376 }, " covers the process in general terms, and the strategy and planning topics in this section cover what to settle before any transfer begins."],
        },
      ],
      sources: [{ kind: "pdf", page: 281 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 376 }, { kind: "pdf", page: 289 }, { kind: "pdf", page: 290 }, EXPLAINS],
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
