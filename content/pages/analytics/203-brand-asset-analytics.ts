/**
 * 203 · Brand Asset Analytics — /analytics/brand-asset-analytics
 *
 * Angle (clusters: team-analytics, brand-control): whether the approved library does its job — which approved
 * assets are accessed and reused, and what gaps in reuse reveal about the approved set. GetSibu for Brand Teams (214)
 * owns the team's controls; Asset Access Analytics (197) owns viewing versus using; 182 owns under-use in general.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of brand management practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 203,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Find out which approved brand assets colleagues access and reuse, and whether your approved library is the source the brand is really built from or a correct collection that people work around.",
      visual: { diagram: "library-activity", focus: "tags" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 203 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Is the approved library the one colleagues rely on?",
      body: [
        "Brand teams can use analytics in GetSibu to understand which approved assets are being accessed and reused. That narrows the familiar usage question to the material a brand team has signed off, which is where consistency is either won or quietly lost.",
        "Approving an asset is only half of brand control. The other half is whether colleagues choose it over the logo saved on their desktop, the image in last year’s deck or a picture found in a hurry. An approved library that nobody draws on offers false comfort: everything in it is correct, while the brand people encounter is assembled from something else.",
        [
          "Analytics complete a set of brand controls rather than replacing them. ",
          { text: "Brand asset approval", page: 71 },
          " uses approval gates to separate approved creative from drafts and work in progress, and an ",
          { text: "approved asset library", page: 103 },
          " lets teams create approved-only views of content that has completed the required review.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Approved assets accessed", "Approved assets reused", "Gaps in the approved set", "Unofficial copies competing", "Consistency in everyday material"],
      },
      highlight: {
        heading: "In practice",
        body: "Before updating the brand guidelines, a brand lead checks which approved templates are being reused, so the update starts with the files that shape everyday material.",
        tags: ["Brand leads", "Templates", "Guidelines"],
      },
      glance: {
        heading: "Brand analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "Which approved assets are accessed and reused" },
          { label: "Approved set", value: "Approved Asset Library", page: 103 },
          { label: "Use case", value: "GetSibu for Brand Teams", page: 214 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 203 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 214 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "access-and-reuse",
      eyebrow: "Reading the signal",
      heading: "What the reuse of an approved asset can suggest",
      columns: ["What it suggests", "A brand team’s response"],
      rows: [
        { label: "Widely reused", cells: ["A dependable part of the brand toolkit", "Keep it current and its approval clear"] },
        { label: "Reused less than its purpose suggests", cells: ["Doubt about its currency, fit or approval", "Check its version, formats and review status"] },
        { label: "Seldom reached at all", cells: ["Unknown, hard to find or past its moment", "Review its tags, placement and expiry"] },
        { label: "Newly approved", cells: ["Too early to draw any conclusion", "Announce it and look again later"] },
      ],
      sources: [{ kind: "pdf", page: 203 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 104 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Regional teams rebuilding templates the brand already approved",
      team: "A global brand team",
      situation: "A global brand team supplies approved key visuals and presentation templates to marketing teams in many countries. Local material keeps appearing that looks almost, but not quite, on brand.",
      steps: [
        { heading: "Reuse is examined", body: "Brand asset analytics show the approved key visuals being reused widely, while the approved templates see little reuse." },
        { heading: "Markets explain", body: "Regional marketers say the templates lack the local formats and layouts they need, so they rebuild similar files themselves and drift from the guidelines as they go." },
        { heading: "Missing formats are approved", body: ["The brand team produces the missing variations and moves them from draft to approved status through ", { text: "creative approval management", page: 89 }, "."] },
        { heading: "Updated templates keep their history", body: ["Where an existing template gains new layouts, the update replaces it in place and ", { text: "earlier versions are retained", page: 91 }, ", so markets return to the same asset rather than to a new copy."] },
        { heading: "Reuse is read again", body: "Some months later, brand asset analytics help show whether the updated templates are being reused, and the brand team asks markets whose local files still drift what is missing." },
      ],
      outcome: "Regional teams begin reusing approved templates rather than recreating them, and local material looks more consistent because the approved set now covers what markets need.",
      link: { page: 224, label: "GetSibu for Global Brands" },
      sources: [{ kind: "pdf", page: 203 }, { kind: "pdf", page: 89 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 224 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "fair-reading",
      eyebrow: "Considerations",
      heading: "Reading the reuse of approved assets fairly",
      items: [
        {
          heading: "Downstream use is mostly out of sight",
          summary: "What happens after a file leaves the library is usually beyond the library’s view.",
          icon: "download",
          body: [
            "A single file taken from the library can feed a whole print run, a season of social posts or nothing at all. Treat reuse as evidence that approved material is being chosen, and keep reviewing finished work in market as its own part of brand governance.",
          ],
        },
        {
          heading: "Low reuse can reveal a gap in the set",
          summary: "When approved assets go unused, the approved library may simply be incomplete.",
          icon: "search",
          body: [
            "Colleagues rarely avoid approved material out of defiance. More often the right size, language, format or subject is missing, and improvising is faster than asking. Look for what the approved set lacks before assuming colleagues ignore it.",
          ],
        },
        {
          heading: "Some approved assets should be used sparingly",
          summary: "Heavy reuse is not always the goal.",
          icon: "clock",
          body: [
            [
              "Licensed campaign photography, time-limited partnership logos and embargoed visuals may be approved yet meant for narrow or temporary use. ",
              { text: "Expiring creative assets", page: 104 },
              " carry information that can help teams identify content that should no longer be used after a specified period.",
            ],
          ],
        },
        {
          heading: "Unofficial copies compete with the original",
          summary: "Approved files re-uploaded under new names split the picture of reuse.",
          icon: "copy",
          body: [
            [
              "When colleagues save an approved logo locally and upload it again under a different name, reuse of the original looks lower than it is. ",
              { text: "AI duplicate detection", page: 40 },
              " can identify visually equivalent copies, including renamed or re-encoded files, which can help the team find them and point colleagues back to the approved original.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 40 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about brand asset analytics",
      items: [
        {
          question: "Do brand asset analytics take the place of brand approval?",
          answer: [
            "No. Approval decides what enters the approved set, and analytics describe what becomes of it afterwards. ",
            { text: "Review status", page: 76 },
            " still gives colleagues a clear indication of whether an asset needs attention or has completed the approval process.",
          ],
        },
        {
          question: "How do brand asset analytics differ from general asset usage analytics?",
          answer: [
            { text: "Asset usage analytics", page: 182 },
            " consider the whole library, asking what receives attention and what is left underused. Brand asset analytics start from the approved set, so an unused asset there points to a gap in brand control rather than to general clutter.",
          ],
        },
        {
          question: "When is it most useful for a brand team to review brand asset analytics?",
          answer: [
            "After a refreshed identity, when the question is whether colleagues have moved to the new material, and before the approved toolkit is next reviewed. ",
            { text: "The use case for brand teams", page: 214 },
            " sets out the wider controls those moments involve.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 203 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 214 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on approved assets and brand control",
      variant: "compact",
      pages: [214, 103, 71, 89, 224, 182],
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
