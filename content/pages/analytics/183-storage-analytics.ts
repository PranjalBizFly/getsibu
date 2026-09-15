/**
 * 183 · Storage Analytics — /analytics/storage-analytics
 *
 * Angle (cluster: storage-analytics, primary): the analytics view of how much space different asset categories
 * consume — why a single total hides the story, what drives consumption in creative libraries, and the decisions
 * the view informs. Storage by Category (192) owns the four categories themselves, Storage Growth Analytics (149)
 * historical growth, Library Growth Reporting (209) planning ahead, Storage Efficiency (357) consumption and duplicates.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative libraries consume storage; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 183,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Understand how much space each kind of creative asset takes up, why storage in a creative library grows unevenly, and how a view by category helps a team manage capacity on purpose rather than by surprise.",
      visual: { diagram: "library-activity", focus: "storage" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 183 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Where a creative library’s space really goes",
      body: [
        "Storage analytics in GetSibu provide a view of how much space different asset categories consume. Rather than one total for the whole library, a team can see which kinds of content account for its storage.",
        "Creative storage is uneven by nature. A single camera original can outweigh a whole folder of product stills, and a presentation with embedded video can be larger than the photographs it describes. The number of assets, people or projects is a poor guide to capacity, so a library that looks modest by count can still need far more space than anyone planned for.",
        [
          "The category view is one part of managing storage well. ",
          { text: "Storage by category", page: 192 },
          " breaks the picture down across video, image, document and audio, ",
          { text: "storage growth analytics", page: 149 },
          " add historical context about how quickly the library is expanding, and ",
          { text: "storage efficiency", page: 357 },
          " looks at how duplicate detection and storage analytics can help a team understand consumption.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Space consumed per asset category", "Size and count tell different stories", "Duplicates as avoidable consumption", "Imports as one-off steps", "Capacity planned, not discovered"],
      },
      highlight: {
        heading: "In practice",
        body: "When storage use rises, an operations lead checks which categories hold the most space before anyone starts deleting files, so the response targets the right kind of content.",
        tags: ["Operations", "Video", "Capacity"],
      },
      glance: {
        heading: "Storage analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "Space consumed by each asset category" },
          { label: "Breakdown", value: "Storage by Category", page: 192 },
          { label: "Planning", value: "Library Growth Reporting", page: 209 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 183 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 357 }, { kind: "pdf", page: 209 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "total-versus-category",
      eyebrow: "Why categories matter",
      heading: "One storage total compared with a view by category",
      columns: ["A single storage total", "Storage analytics by category"],
      emphasis: 1,
      rows: [
        ["Question answered", "How much space the library uses", "Which kinds of asset use that space"],
        ["When space runs short", "Only that the total is high", "Which categories hold the most"],
        ["Looking for waste", "Guesswork about what to clear", "A category to investigate first"],
        ["Explaining consumption", "A figure without a breakdown", "A share for each kind of asset"],
        ["Planning ahead", "One number projected forward", "Plans that reflect the content mix"],
      ],
      sources: [{ kind: "pdf", page: 183 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 209 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "drivers",
      eyebrow: "What drives consumption",
      heading: "Why storage grows faster than expected",
      items: [
        {
          heading: "Footage and its many cuts",
          summary: "Moving images are among the heaviest material a library holds.",
          icon: "video",
          body: [
            "Footage arrives as camera originals, then multiplies into assemblies, edits and exports for different channels, and each delivered file carries a size of its own.",
            "Knowing how many deliverables a typical production leaves behind helps explain why the video category behaves so differently from the rest.",
          ],
        },
        {
          heading: "Copies nobody meant to keep",
          summary: "Files copied for safety or sharing quietly add up.",
          icon: "copy",
          body: [
            "Files are duplicated to send to a colleague, re-exported under new names or uploaded twice by different people who each thought the other had not.",
            [{ text: "Duplicate asset management", page: 112 }, " helps identify unnecessary copies and can support storage optimisation, which is why ", { text: "duplicate reduction", page: 350 }, " is one of the more direct ways to curb unnecessary consumption."],
          ],
        },
        {
          heading: "Imports that arrive all at once",
          summary: "Bringing an existing collection in changes storage in a single step.",
          icon: "upload",
          body: [
            "A migration can move more material in a short period than routine production adds over a long one.",
            ["Reading storage analytics either side of a ", { text: "bulk asset import", page: 130 }, " separates that one-off step from ongoing growth, so the import is not mistaken for a new pace of expansion."],
          ],
        },
        {
          heading: "History kept for good reason",
          summary: "Finished work has lasting value, and it occupies space too.",
          icon: "archive",
          body: [
            "Past campaigns, completed films and superseded brand material are often worth keeping for reference, reuse or record.",
            [{ text: "Asset archiving", page: 108 }, " retains historical content without letting it interfere with everyday discovery. How much history to keep is a policy question that storage analytics can inform but not decide."],
          ],
        },
        {
          heading: "Several client libraries side by side",
          summary: "Agencies manage capacity for each client as well as for themselves.",
          icon: "building",
          body: [
            ["In a multi-tenant setup, each ", { text: "client environment can have its own storage allocation", page: 163 }, " and asset boundaries, so capacity becomes a conversation per client as much as a question for the agency as a whole."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 112 }, { kind: "pdf", page: 350 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 163 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A studio explains a jump in storage before it plans ahead",
      team: "A creative studio",
      situation: ["A creative studio’s operations lead sees from ", { text: "storage growth analytics", page: 149 }, " that the library has expanded faster this season than before, and needs to explain why before agreeing next year’s storage plan."],
      steps: [
        {
          heading: "The categories are compared",
          body: "Storage analytics show video consuming far more space than images, documents and audio together, which points the investigation straight at footage.",
        },
        {
          heading: "The cause is traced",
          body: "The lead links the rise to a documentary project whose rushes were imported in bulk, followed by several rounds of re-exports during the edit.",
        },
        {
          heading: "Copies are identified",
          body: [{ text: "AI duplicate detection", page: 40 }, " finds re-encoded copies of the same clips uploaded by different editors, and authorised users remove the ones the studio’s policy says it does not need."],
        },
        {
          heading: "Finished work is archived",
          body: "Material from projects that have closed is archived, so it stays available without crowding the searches of current productions.",
        },
        {
          heading: "Growth is planned from the right baseline",
          body: ["With the one-off import understood as separate from routine work, the studio uses ", { text: "library growth reporting", page: 209 }, " to anticipate its storage requirements."],
        },
      ],
      outcome: "The storage conversation moves from surprise to explanation, with a clear line between one large project and the library’s normal growth.",
      link: { page: 220, label: "GetSibu for Creative Studios" },
      sources: [{ kind: "pdf", page: 183 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 209 }, { kind: "pdf", page: 220 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about storage analytics",
      items: [
        {
          question: "How do storage analytics help when a storage budget is being agreed?",
          answer: "They let a request be explained rather than asserted. The categories consuming the most space, set against the work the organisation expects to produce, make a stronger case than a single total ever can.",
        },
        {
          question: "Do storage analytics show how quickly a library is growing?",
          answer: ["Storage analytics focus on how much space each category consumes. For historical context on the pace of expansion, ", { text: "storage growth analytics", page: 149 }, " are the closer fit."],
        },
        {
          question: "How do storage analytics relate to creative storage management?",
          answer: ["They are closely linked. Within ", { text: "creative storage management", page: 148 }, ", storage analytics help organisations understand how a library is distributed across videos, images, documents and audio, and that understanding informs decisions about where content lives."],
        },
        {
          question: "Who in a creative organisation should review storage analytics?",
          answer: "Whoever plans capacity, ideally alongside a library manager who knows the projects behind the change. Together they can turn consumption into an explanation that others are able to act on.",
        },
      ],
      sources: [{ kind: "pdf", page: 183 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 148 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on storage and capacity",
      variant: "compact",
      pages: [192, 149, 357, 209, 148, 112],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Scale Your Creative Library",
      conversionPage: 397,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 397 }],
    },
  ],
};

export default page;
