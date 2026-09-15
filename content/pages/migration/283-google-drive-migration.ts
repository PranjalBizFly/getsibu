/**
 * 283 · Google Drive Migration — /migration/google-drive-migration
 *
 * HELD draft (claim: storage-sources). Angle: moving a team’s creative work from Google Drive into GetSibu
 * without a complete manual reorganisation first: connect and index, then refine structure where it matters.
 * page 122 owns connecting the drive as an ongoing source; this page owns the move.
 * Nothing about permission translation, setup, duration or migration support.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how long-used shared drives shape a migration; states no GetSibu or Google Drive capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 283,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Plan a move of creative work from Google Drive into GetSibu that does not begin with tidying every folder by hand, and settle what a long-used shared drive brings with it before the team switches over.",
      visual: { diagram: "migration-map", focus: "folders" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 283 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A move that does not start with tidying every folder",
      body: [
        "Existing Google Drive content can be connected and indexed without requiring a complete manual reorganisation. For a team making GetSibu the home of its creative work, that changes the usual order of a migration.",
        "Drive migrations often stall before they begin. Someone decides the folders are too messy to move as they are, a clean-up project starts, and months later people are still sorting files in the old location with nothing to show in the new one. Reorganising everything first feels responsible, yet it spends the most effort on material nobody may ever look for.",
        "Indexing changes where order comes from. When content can be found by what it contains and what is recorded about it, the folder tree no longer has to carry every way of finding a file. Structure still matters for browsing and access, but it can be improved where people feel the need instead of everywhere at once.",
        [
          "Existing folder structures ",
          { text: "can be mirrored or remapped", page: 287 },
          " during migration, which lets a team keep the drive’s arrangement where it works. Details such as creators, file paths and custom keywords ",
          { text: "can be retained", page: 286 },
          ", so leaving old folders alone does not mean losing the context they held.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Connected and indexed, not reorganised first", "No complete manual reorganisation", "Order from search as well as folders", "Structure refined where it matters", "Context kept with each asset"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketing department with a decade of campaign folders makes GetSibu its creative library without a clean-up project first, and later remaps only the areas colleagues actually struggle with.",
        tags: ["Marketing", "Shared drives", "Migration"],
      },
      glance: {
        heading: "Google Drive migration in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Starts from", value: "Existing Google Drive content" },
          { label: "Avoids", value: "A complete manual reorganisation" },
          { label: "Wider guide", value: "Migrate to GetSibu", page: 281 },
        ],
      },
      sources: [{ kind: "pdf", page: 283 }, { kind: "pdf", page: 287 }, { kind: "pdf", page: 286 }, { kind: "pdf", page: 281 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "two-ways-to-begin",
      eyebrow: "Two ways to begin",
      heading: "Reorganising the drive first compared with indexing it first",
      beforeLabel: "Reorganise, then move",
      afterLabel: "Connect and index, then refine",
      before: ["A clean-up project before anything moves", "Effort spread evenly across every folder", "The old drive still the only place to look", "Structure decided without seeing how people search", "Momentum lost before the switch"],
      after: ["Existing content connected and indexed", "No complete manual reorganisation required", "Effort aimed at the folders people use", "Structure shaped by what people search for", "Improvements made area by area"],
      sources: [{ kind: "pdf", page: 283 }, { kind: "pdf", page: 287 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "what-the-drive-brings",
      eyebrow: "Before the switch",
      heading: "What a long-used shared drive brings to a migration",
      items: [
        {
          heading: "Copies made to share, not to keep",
          summary: "Drive users often duplicate a file to adapt or hand over, leaving many near-identical versions behind.",
          icon: "copy",
          body: [
            [
              "Copying a deck to adapt it for another audience, or a folder to give to a colleague, takes seconds and leaves a trail of near-identical files. In the library, ",
              { text: "duplicate detection", page: 40 },
              " can identify identical files and visually equivalent copies, so the team can decide which of them represent the work.",
            ],
          ],
        },
        {
          heading: "Links already in circulation",
          summary: "Briefs, emails and project plans point at files in the drive.",
          icon: "network",
          body: [
            "Years of documents and messages contain links to drive files, and those links still lead into the drive once the team starts looking for work in GetSibu. Tell colleagues where frequently requested material should now be found, so an old link is not mistaken for the route in.",
            ["In the library, saved searches can be ", { text: "shared through a URL", page: 79 }, ", which gives colleagues a lasting way into sets of assets they return to."],
          ],
        },
        {
          heading: "Access that grew one share at a time",
          summary: "A drive’s sharing reflects years of individual decisions rather than a plan.",
          icon: "lock",
          body: [
            "Files in a long-used drive are often shared with former colleagues, agencies and whole departments for reasons nobody remembers. Before that material becomes easier to find, review who should reach it and why, rather than assuming the drive’s history of shares was ever a plan.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 40 }, { kind: "pdf", page: 79 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A decade of campaign folders moved without a clean-up project",
      team: "A marketing department",
      situation: "A marketing department has kept a decade of campaign material in a shared Google Drive. An earlier attempt to reorganise the drive before moving it was abandoned halfway through.",
      steps: [
        {
          heading: "The drive is connected and indexed",
          body: "This time the team connects its existing Google Drive content and has it indexed, without first rebuilding the folder tree by hand.",
        },
        {
          heading: "Campaigns carry on during the move",
          body: ["Colleagues keep using existing storage while ", { text: "content is indexed in the background", page: 292 }, ", so live campaigns are not paused for the migration."],
        },
        {
          heading: "Searches show where structure is missing",
          body: ["The library owner looks at the ", { text: "most-searched tags", page: 193 }, " and sees people repeatedly looking for regional material that the old folders scattered."],
        },
        {
          heading: "Only those areas are remapped",
          body: "The team remaps the regional folders into a clearer structure and leaves the rest of the drive’s arrangement as it was.",
        },
        {
          heading: "The switch is confirmed",
          body: ["Before the drive stops being the place people look, ", { text: "migration verification", page: 296 }, " helps confirm that important content and metadata have come across correctly."],
        },
      ],
      outcome: "The department works from GetSibu without spending months tidying files it may never use, and structure improves where colleagues actually needed it.",
      link: { page: 213, label: "GetSibu for Marketing Teams" },
      sources: [{ kind: "pdf", page: 283 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 193 }, { kind: "pdf", page: 287 }, { kind: "pdf", page: 296 }, { kind: "pdf", page: 213 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about Google Drive migration",
      items: [
        {
          question: "Is a Google Drive migration a good moment to delete old creative files?",
          answer: ["It is a good moment to decide, not necessarily to delete. Material nobody can judge yet can be kept out of everyday results through ", { text: "asset archiving", page: 108 }, ", which retains historical content without letting it interfere with discovery."],
        },
        {
          question: "Who should lead a Google Drive migration for a creative team?",
          answer: "Someone who understands how the team finds material today, such as a library owner or operations lead, working with whoever administers the drive. One knows what matters; the other knows where it is and who can reach it.",
        },
        {
          question: "How is a Google Drive migration different from simply connecting the drive?",
          answer: "Connecting treats the drive as one source among others. A migration is the decision that GetSibu becomes the place the team works from, which raises questions about links, access and what the drive is for afterwards.",
        },
      ],
      sources: [{ kind: "pdf", page: 283 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on moving a shared drive",
      variant: "compact",
      pages: [281, 292, 287, 286, 296, 213],
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
