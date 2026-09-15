/**
 * 184 · Upload Analytics — /analytics/upload-analytics
 *
 * Angle (cluster: library-analytics): new content entering the library over time — the inflow, how each route
 * of entry shapes it, how it changes over a library's life and how to read it without misreading it.
 * Daily Library Analytics (188) owns uploads as one short-term signal, Contributor Analytics (185) who adds
 * content, Storage Growth Analytics (149) growth in storage terms, Production Analytics (201) media workflows.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how new content flows into creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 184,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Follow how much new content is entering your library over time, how the different ways material enters shape that inflow, and how to tell a one-off import from the steady rhythm of production.",
      visual: { diagram: "library-activity", focus: "uploads" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 184 }, { kind: "pdf", page: 130 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The flow of new material into a library",
      body: [
        "Upload analytics show how much new content is entering the library over time. They describe the inflow: the pace at which shoots, projects, imports and handovers become part of a shared collection.",
        "Inflow comes before almost everything else that happens to a library. More material arriving means more to describe, more to review, more space occupied and more for search to cover. When uploads rise faster than a team’s capacity to organise them, the consequence surfaces later as assets that exist but cannot be found.",
        [
          "Uploads connect to the rest of the picture. ",
          { text: "Contributor analytics", page: 185 },
          " help show who is adding the content, ",
          { text: "storage analytics", page: 183 },
          " give a view of the space it occupies, and ",
          { text: "library growth reporting", page: 209 },
          " helps organisations anticipate storage and operational requirements as that inflow continues.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["New content entering over time", "Routes into the library", "One-off imports versus steady production", "Inflow ahead of organisation", "Arrival before readiness"],
      },
      highlight: {
        heading: "In practice",
        body: "A library manager sees uploads climb as a campaign moves into production and sets aside time for tag review before the new material has a chance to pile up.",
        tags: ["Library managers", "Production", "Campaigns"],
      },
      glance: {
        heading: "Upload analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "How much new content enters the library over time" },
          { label: "Who adds it", value: "Contributor Analytics", page: 185 },
          { label: "Space it takes", value: "Storage Analytics", page: 183 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 184 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 183 }, { kind: "pdf", page: 209 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "routes",
      eyebrow: "Routes into the library",
      heading: "How each route of entry shapes the inflow",
      tabs: [
        {
          label: "Direct uploads",
          heading: "Small, frequent additions from everyday work",
          icon: "upload",
          body: [
            [{ text: "Drag and drop upload", page: 127 }, " lets people add individual assets or small batches without configuring an integration."],
            "Inflow from this route tends to follow the working week: a background of additions from designers, editors and marketers that slows when people are away and quickens as deadlines approach.",
          ],
          points: ["Individual files and small batches", "A rhythm set by the working week"],
        },
        {
          label: "Watch folders",
          heading: "Content that arrives as it is saved",
          icon: "folder",
          body: [
            [{ text: "Watch folders", page: 128 }, " can be scanned continuously, so newly added content can enter the GetSibu workflow automatically."],
            "Because arrival follows the source folder rather than a person choosing to upload, this inflow mirrors whatever feeds that folder, such as an export process or a shared delivery location.",
          ],
          points: ["Arrivals that track the source folder", "Fewer files moved by hand"],
        },
        {
          label: "Bulk imports",
          heading: "Large collections in a single movement",
          icon: "layers",
          body: [
            [{ text: "Bulk asset import", page: 130 }, " helps organisations move large existing libraries into GetSibu without uploading each file by hand."],
            "An import produces a surge that has nothing to do with the pace of creative work, however large it looks at the time.",
          ],
          points: ["A surge, not a trend", "Worth noting as an event"],
        },
        {
          label: "Connected sources",
          heading: "Existing storage feeding the library",
          icon: "plug",
          body: [
            ["Assets can also enter through ", { text: "connected storage sources", page: 121 }, ", which lets teams bring existing libraries into the platform without rebuilding their storage workflow manually."],
            "Inflow from this route reflects activity in the connected storage itself, so a rise in uploads may begin with a change somewhere outside the library.",
          ],
          points: ["Existing storage workflows kept", "Changes that start at the source"],
        },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 121 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "life-stages",
      eyebrow: "Over a library’s life",
      heading: "How the inflow changes as a library matures",
      items: [
        {
          label: "Migration",
          body: "Existing collections move in and uploads reach a level the library may never see again. The priority at this stage is confirming that content and metadata transferred correctly, not reading the pace.",
          page: 296,
        },
        {
          label: "Adoption",
          body: "Teams begin adding new work to the library instead of saving it elsewhere. A slow start here says more about habits than about how much work is being produced.",
        },
        {
          label: "Steady production",
          body: "Uploads settle into a rhythm set by shoots, campaigns and projects. This is the baseline worth learning, because every later change is judged against it.",
        },
        {
          label: "Peaks",
          body: "Launches, events and busy seasons lift inflow above the baseline for a while. Planning tagging and review capacity around them keeps new material from arriving faster than it can be organised.",
        },
        {
          label: "Consolidation",
          body: "As older work is archived and duplicates are cleared, the question shifts from how much arrives to how much of the library stays useful, which is where library health comes in.",
          page: 196,
        },
      ],
      sources: [{ kind: "pdf", page: 296 }, { kind: "pdf", page: 298 }, { kind: "pdf", page: 196 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 112 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reading",
      eyebrow: "Considerations",
      heading: "Reading the inflow without misreading it",
      items: [
        {
          heading: "Uploads create organisation work",
          summary: "A rising inflow brings tagging and review effort with it.",
          icon: "tag",
          body: [
            "Every new file needs enough description to be found later. When uploads outpace that effort, a library grows in size without growing in usefulness.",
            ["Suggested tags from ", { text: "AI-assisted tagging", page: 31 }, " reduce the need to classify every file by hand, and AI-assisted organisation helps teams maintain order as the library grows rather than facing a major clean-up after each campaign."],
          ],
        },
        {
          heading: "Not every upload is new material",
          summary: "Repeat uploads swell the inflow without adding anything to the library.",
          icon: "copy",
          body: [
            "The same photograph uploaded by two colleagues, or a delivery sent again after a failed handover, adds to the inflow without adding anything new. A sudden rise is worth checking for repeats before it is read as a burst of fresh work.",
            [{ text: "Duplicate detection", page: 40 }, " identifies identical files and visually equivalent copies, including files that have been renamed or re-encoded."],
          ],
        },
        {
          heading: "A quiet inflow can be a warning",
          summary: "Falling uploads may mean content is being kept somewhere else.",
          icon: "flag",
          body: [
            "After a library is introduced, a drop in uploads sometimes means people have drifted back to personal drives or old shared folders, not that less work is being made. Ask the teams involved before concluding that production has slowed.",
            [{ text: "Creative team migration", page: 298 }, " is about moving teams from fragmented folders into a structured library, and the inflow is one way to see whether that move has lasted."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 57 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 298 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about upload analytics",
      items: [
        {
          question: "Is a rising upload count always good news for a library?",
          answer: ["Not by itself. More material arriving helps only if it can be found and used, so read the inflow alongside ", { text: "asset usage analytics", page: 182 }, ", which help teams understand which assets receive attention."],
        },
        {
          question: "How are upload analytics different from storage growth analytics?",
          answer: ["One looks at incoming work, the other at capacity. ", { text: "Storage growth analytics", page: 149 }, " provide historical context around how quickly the library is expanding, which matters for planning space rather than for handling new material."],
        },
        {
          question: "How do upload analytics relate to daily library analytics?",
          answer: [{ text: "Daily library analytics", page: 188 }, " include uploads in a short-term view alongside comments and storage activity. Upload analytics concentrate on the inflow itself and how it develops over time."],
        },
      ],
      sources: [{ kind: "pdf", page: 182 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 188 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on new content entering the library",
      variant: "compact",
      pages: [185, 183, 149, 130, 188, 209],
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
