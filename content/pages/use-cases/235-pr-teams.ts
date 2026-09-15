/**
 * 235 · GetSibu for PR Teams — /use-cases/pr-teams
 *
 * Angle (cluster: uc-communications): request-driven work at short notice — approved images, executive photos, brand
 * resources and campaign materials handed to journalists, partners and organisers, with the risk of sending something
 * outdated or never cleared. Executive photos are organised by tags and metadata the team records, never by
 * recognition. Corporate Communications (240) owns the public-facing source of truth; Internal Communications (239)
 * addresses employees; Newsrooms (233) own archive search under deadline.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how PR teams and press offices typically handle requests; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 235,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a PR team can answer requests for press images, executive photos, logos and campaign packs at short notice, from a library where approval status, tags and end dates are recorded before anyone asks.",
      visual: { diagram: "media-library", focus: "image,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 235 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Ready for the request that arrives at short notice",
      body: [
        "With GetSibu, a PR team can quickly put its hands on approved images, executive photos, brand resources and campaign materials.",
        "Public relations runs on other people’s deadlines. A journalist wants a high-resolution photograph of the chief executive within the hour, an event organiser needs a logo and a speaker biography, a partner is preparing a joint announcement. Each request is small; the risk lies in answering it with an outdated headshot, a superseded logo or an image that was never cleared for external use.",
        [
          "What helps is a library in which the right version is easy to identify. An ",
          { text: "approved asset library", page: 103 },
          " gives colleagues views of content that has completed the required review, and ",
          { text: "creative access governance", page: 159 },
          " helps keep control over sensitive material, such as images shared with the team in confidence and never meant for release.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Approved material separated from drafts", "Executive photos tagged by name and role", "Logos and boilerplate in one place", "Out-of-date portraits identified", "Embargoed material kept private"],
      },
      highlight: {
        heading: "In practice",
        body: "Asked for a recent photograph of the finance director, a press officer searches the name tag within the approved set and replies with a file that has been through review.",
        tags: ["Press officers", "PR managers", "Agency partners"],
      },
      glance: {
        heading: "PR teams in brief",
        facts: [
          { label: "Team", value: "In-house PR teams and press offices" },
          { label: "Typical material", value: "Executive photos, press images, logos, boilerplate and campaign packs" },
          { label: "Builds on", value: "Brand Asset Approval", page: 71 },
          { label: "Supports", value: "Secure Asset Sharing", page: 172 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 235 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 159 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 172 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A morning of press requests on launch day",
      team: "A PR team",
      situation: "On the morning a company announces a new product, its PR team fields a stream of requests: a newspaper wants an executive portrait, a trade title wants product photography and a reporter follows up about a quote in the release.",
      steps: [
        {
          heading: "The portrait is found by its tag",
          body: ["The press officer searches for the chief executive’s name, which the team applied as a tag to each approved portrait, then ", { text: "filters by resolution", page: 19 }, " so the file is fit for print."],
        },
        {
          heading: "An outdated portrait is set aside",
          body: ["One of the results carries ", { text: "expiry information", page: 104 }, " showing it should no longer be used, so the officer picks a more recent portrait instead."],
        },
        {
          heading: "Product images come with clearance",
          body: ["The trade title’s request is met from product photographs carrying the team’s cleared-for-press ", { text: "guardrail tag", page: 105 }, ", which records that they meet the company’s requirements for external use."],
        },
        {
          heading: "A quote is confirmed on the release",
          body: ["Before answering a follow-up, the press officer ", { text: "mentions the communications director", page: 66 }, " on the press release to confirm a quote, and the reply stays with the document."],
        },
      ],
      outcome: "Every request is answered with files the team has checked against their approval status and end dates, and the discussion about the quote stays with the release rather than in one officer’s inbox.",
      link: { page: 103, label: "Approved Asset Library" },
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 66 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What PR teams use",
      heading: "What a PR team relies on between requests",
      items: [
        {
          heading: "Default-deny folders",
          body: "Material for an announcement under embargo can sit in folders that stay private until access is explicitly granted.",
          icon: "lock",
          points: ["Embargoed material kept back", "Access granted deliberately"],
          page: 154,
        },
        {
          heading: "Controlled sharing",
          body: "Asset sharing can be governed by permissions instead of depending only on unrestricted links.",
          icon: "shield",
          points: ["Sharing decided by permissions", "Less reliance on open links"],
          page: 172,
        },
        {
          heading: "Searchable press documents",
          body: "Press releases, fact sheets and boilerplate can be indexed by extracted text, metadata and tags, so an earlier release can be found by a phrase from it.",
          icon: "document",
          points: ["Past releases found by their wording", "Boilerplate beside the images"],
          page: 27,
        },
        {
          heading: "Document versions",
          body: "When the company description changes, the document can be replaced while its earlier versions are retained.",
          icon: "history",
          points: ["Latest wording easy to reach", "Earlier wording on record"],
          page: 99,
        },
        {
          heading: "Approval history",
          body: "A record of review activity shows which version of an image or release was accepted, which helps when a detail is questioned later.",
          icon: "approval",
          points: ["The accepted version on record", "Context when a detail is queried"],
          page: 77,
        },
        {
          heading: "Asset access analytics",
          body: "Information about how content is viewed or used shows which press images colleagues lean on most.",
          icon: "chart",
          points: ["Heavily used press images", "Input for the next photoshoot"],
          page: 197,
        },
      ],
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 197 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "requests",
      eyebrow: "By request",
      heading: "The four kinds of material a PR team is asked for",
      tabs: [
        {
          label: "Press images",
          heading: "Photography that is cleared to use",
          icon: "camera",
          body: [
            "Press images must be approved for external use, correctly credited and good enough for print as well as screen. A photograph that looks right but was taken for internal use can cause trouble once it appears in print.",
            [{ text: "Brand asset approval", page: 71 }, " uses approval gates to keep signed-off creative apart from drafts and work in progress."],
          ],
          points: ["Approved for external use", "Kept apart from drafts"],
        },
        {
          label: "Executive photos",
          heading: "Portraits organised by name and role",
          icon: "user",
          body: [
            "Executive portraits are requested constantly and go out of date whenever someone changes role or title. They are organised entirely through the tags and metadata the team records: name, role and the date of the shoot.",
            [{ text: "Asset metadata search", page: 23 }, " then reaches them through that recorded information, alongside tags and extracted content."],
          ],
          points: ["Name and role recorded as tags", "Shoot dates kept in metadata"],
        },
        {
          label: "Brand resources",
          heading: "Logos, boilerplate and fact sheets",
          icon: "folder",
          body: [
            "Organisers, partners and journalists often ask for logos and company descriptions rather than anything creative. Supplying an old logo or an outdated description undermines everything else the team does.",
            [{ text: "Brand collaboration", page: 83 }, " lets brand teams maintain approved assets and organise them by campaign, region or market, which gives PR a dependable place to take logo files from."],
          ],
          points: ["Logos from the brand team’s approved set", "Company descriptions kept with them"],
        },
        {
          label: "Campaign packs",
          heading: "Announcement packs and campaign imagery",
          icon: "megaphone",
          body: [
            "Announcements come as a pack: the release, images, video and sometimes a presentation. Keeping the pack together makes follow-up requests days later easy to answer.",
            [{ text: "Campaign review", page: 70 }, " allows campaign materials to be checked through asset-level discussions and approvals before they are distributed."],
          ],
          points: ["Release, images and video together", "Checked before distribution"],
        },
      ],
      sources: [{ kind: "pdf", page: 71 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 83 }, { kind: "pdf", page: 70 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for PR teams",
      items: [
        {
          question: "Can a PR team check whether an image has completed approval before sending it?",
          answer: [{ text: "Review status", page: 76 }, " gives a clear indication of whether an asset still needs attention or has already completed the approval process, which is the check worth making before a file leaves the team."],
        },
        {
          question: "Can a PR team tell which version of the company logo is current?",
          answer: [{ text: "Revision tracking", page: 100 }, " helps teams understand what changed between versions and which version is currently active, so a superseded logo is easier to avoid."],
        },
        {
          question: "Can a PR team see how a press image has been handled?",
          answer: ["Views, downloads, edits and approvals can become part of an ", { text: "asset’s activity history", page: 118 }, ", which helps when the team needs to understand how an image has been used."],
        },
        {
          question: "Can a PR team keep broadcast interviews alongside press photography?",
          answer: ["Yes. Video and audio are managed with images and documents in the same library, and ", { text: "streaming previews", page: 147 }, " let the team check a long interview clip without downloading it first."],
        },
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 118 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 147 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for teams handling press requests",
      variant: "compact",
      pages: [103, 71, 104, 172, 233, 240],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Give Your Creative Team One Source of Truth",
      conversionPage: 395,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 395 }],
    },
  ],
};

export default page;
