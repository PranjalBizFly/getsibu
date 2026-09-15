/**
 * 147 · Streaming Media Preview — /storage/streaming-media-preview
 *
 * Angle (cluster: previews-delivery, primary): in the library — inspecting large media quickly without waiting
 * for complete downloads, and the everyday decisions that inspection settles before anyone fetches a file.
 * Streaming Previews (306) owns how streaming works architecturally; Media Preview Performance (313) owns review
 * friction; Asset Thumbnail Generation (146) owns the lightest preview; CDN Asset Delivery (304) owns delivery.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how teams inspect large media in a library; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 147,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Check whether a long recording, a delivered master or an archive clip is the one you need before committing to a download, and see which everyday library decisions a streaming preview can settle.",
      visual: { diagram: "ingest-pipeline", focus: "preview" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 147 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Look first, and download only what the work needs",
      body: [
        "Streaming previews in GetSibu help users inspect large media files quickly, without waiting for complete downloads. Inside a library, that changes the order of work: people look at the material first and decide afterwards whether they need the file itself.",
        "Heavy media makes simple questions expensive. When the only way to see what a file holds is to fetch all of it first, people guess from filenames or download several candidates and keep whichever proves right.",
        "The benefit grows with the size of the files and the number of candidates. A short clip costs little to fetch however it is checked; a set of long recordings, each a large transfer, is where looking first saves the most.",
        [
          "How the media reaches the viewer is an architecture question, explained under ",
          { text: "streaming previews", page: 306 },
          ", while ",
          { text: "media preview performance", page: 313 },
          " considers how preview generation and streaming reduce the friction of reviewing large assets.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Inspect before downloading", "Large media checked quickly", "Most useful with many heavy candidates", "Fewer speculative downloads", "Decisions made in the library"],
      },
      glance: {
        heading: "Streaming media preview in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Helps", value: "Inspect large media files quickly" },
          { label: "Avoids", value: "Waiting for complete downloads" },
          { label: "Architecture", value: "Streaming Previews", page: 306 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 147 }, { kind: "pdf", page: 306 }, { kind: "pdf", page: 313 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "find-and-check",
      eyebrow: "Step by step",
      heading: "Finding and checking footage without fetching every file",
      steps: [
        { heading: "Search for candidates", body: "Because videos can be indexed and enriched with AI-generated information, a search can narrow a large footage library before anyone watches a frame.", icon: "search", page: 25 },
        { heading: "Set aside obvious misses", body: "Thumbnails give a visual preview without a download, which is often enough to rule out the clearly wrong candidates.", icon: "image", page: 146 },
        { heading: "Watch the likely ones", body: "The remaining candidates are played in the library for as long as it takes to confirm whether each holds what is needed.", icon: "video" },
        { heading: "Bring in a colleague", body: "When someone else should look too, users can mention a teammate in the asset’s discussion, and folder-aware autocomplete helps ensure the person mentioned has appropriate visibility.", icon: "mention", page: 66 },
        { heading: "Fetch only the keeper", body: "The one file the edit or delivery needs is downloaded by someone permitted to do so, since governance defines who can download assets.", icon: "download", page: 114 },
      ],
      sources: [{ kind: "pdf", page: 25 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 114 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "decisions",
      eyebrow: "Who it helps",
      heading: "Decisions a streaming preview settles for different people",
      tabs: [
        {
          label: "Editors",
          heading: "Picking material for a cut",
          icon: "film",
          body: [
            "Editors often know exactly what they need but not which file contains it. Watching candidates in the library confirms the right take, angle or answer before anything enters an edit, so the project is not cluttered with media that was only being checked.",
          ],
          points: ["The right take confirmed first", "Projects free of trial downloads"],
        },
        {
          label: "Producers",
          heading: "Confirming a delivery is the right version",
          icon: "check",
          body: [
            ["When a crew or agency delivers a heavy file, the producer’s first question is whether it is the corrected version. Because ", { text: "video version management", page: 97 }, " keeps cuts and revisions in the history of the asset, the producer can look over the newest cut knowing the earlier ones are still on record."],
          ],
          points: ["Changes checked on arrival", "Earlier cuts kept on record"],
        },
        {
          label: "Marketing",
          heading: "Finding a clip that suits a new use",
          icon: "megaphone",
          body: [
            "Marketers reusing footage need to see whether a clip fits a new purpose: its framing, its pace and whether the product shown is still current. Seeing it before asking for it avoids a round of downloads followed by a round of emails requesting “the other one”.",
          ],
          points: ["Fit judged before it is requested", "Fewer wrong clips sent"],
        },
      ],
      sources: [{ kind: "pdf", page: 97 }, { kind: "pdf", page: 147 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A partner’s event film checked before a campaign reuses it",
      team: "A brand team",
      situation: "A brand team is asked whether a partner’s event film from two years ago can open a new campaign. The film is long, and nobody on the team remembers exactly what appears in it.",
      steps: [
        { heading: "Dates are checked first", body: ["The team looks at the film’s ", { text: "expiry information", page: 104 }, ", which can help identify content that should no longer be used after a specified period, and finds nothing that rules the film out."] },
        { heading: "The film is watched where it is kept", body: "Rather than waiting for a very large download, the brand manager watches the film in the library from start to finish, since dates cannot show what is on screen." },
        { heading: "Problems are marked where they occur", body: ["At two points an old logo appears on stage banners, and the manager ", { text: "attaches a comment at each point on the timeline", page: 64 }, ", giving the feedback a precise location."] },
        { heading: "A usable stretch is agreed", body: "With the concerns marked, the team agrees which part of the film can open the campaign and which moments the edit has to avoid." },
      ],
      outcome: "The campaign opens with footage the team has actually watched, and the outdated branding is caught in the library rather than after launch.",
      link: { page: 214, label: "GetSibu for Brand Teams" },
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 214 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about streaming media preview",
      items: [
        {
          question: "Why check large media with a streaming preview instead of asking whoever uploaded it?",
          answer: "Memory is a weak record of what long media contains. The person who added a recording may have moved on, may recall a different take or may never have watched all of it, so looking settles the question more reliably than asking.",
        },
        {
          question: "Can a streaming media preview help decide what to archive?",
          answer: ["It can inform that decision. Watching a long, vaguely named recording shows whether it holds anything worth keeping in view, and ", { text: "asset archiving", page: 108 }, " provides a way to retain historical content without letting old material interfere with everyday discovery."],
        },
        {
          question: "When is downloading still the better first step than a streaming media preview?",
          answer: "When there is no doubt about which file is needed and the next step is to work on it. Looking first then saves nothing, because the file has to travel anyway.",
        },
      ],
      sources: [{ kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on inspecting large media",
      variant: "compact",
      pages: [306, 146, 313, 25, 64, 97],
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
