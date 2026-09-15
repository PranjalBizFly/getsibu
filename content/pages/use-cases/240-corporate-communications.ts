/**
 * 240 · GetSibu for Corporate Communications — /use-cases/corporate-communications
 *
 * Angle (cluster: uc-communications): outward-facing — one central source of truth for the presentations, photography,
 * videos and public-facing assets through which many presenters across a company describe it to the outside world, and
 * a record of what was approved and changed. Internal Communications (239) addresses employees; PR Teams (235) own press
 * requests; Brand Teams (214) own identity control.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how corporate communications teams typically keep a company's public story consistent; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 240,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a corporate communications team can keep the presentations, photography, videos and public-facing assets that represent the company in one place, so every department presents the organisation from the same approved material.",
      visual: { diagram: "media-library", focus: "video,image,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 240 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One company story, wherever it is presented",
      body: [
        "GetSibu lets a corporate communications team keep a central source of truth for the presentations, photography, videos and other assets the public sees.",
        "A company is presented in public by far more people than its communications team. Sales staff pitch with the corporate deck, recruiters play the company film at careers fairs, executives speak at conferences and partners describe the business in their own materials. Each of those moments uses a version of the company’s story, and the versions drift: an old description of the business, a photograph of an office that has since closed, a film that still features a former leader.",
        [
          "Keeping the story consistent means making the approved version the easiest one to use. ",
          { text: "Approval gates", page: 71 },
          " separate approved creative from drafts and work in progress, and ",
          { text: "creative asset governance", page: 114 },
          " defines who can upload, edit, approve, download and manage assets, so changes to the public-facing set rest with the people responsible for it.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["The corporate deck kept in one record", "Photography approved for public use", "Outdated statements found and corrected", "A record of what was approved", "Every department presenting the same story"],
      },
      highlight: {
        heading: "In practice",
        body: "Before a conference keynote, the executive office takes the corporate presentation from the approved set rather than editing the copy saved after last year’s event.",
        tags: ["Corporate communications", "Executive offices", "Investor relations"],
      },
      glance: {
        heading: "Corporate communications in brief",
        facts: [
          { label: "Team", value: "Corporate and external communications teams" },
          { label: "Typical material", value: "Corporate presentations, leadership and office photography, corporate films, public documents" },
          { label: "Builds on", value: "Approved Asset Library", page: 103 },
          { label: "Supports", value: "Document Version Management", page: 99 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 240 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 99 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "comparison",
      eyebrow: "Why one source matters",
      heading: "Copies around the company versus one source of truth",
      columns: ["Copies in circulation", "A central GetSibu library"],
      emphasis: 1,
      rows: [
        ["Public photography", "Whatever was last emailed round", "Approved-only views of reviewed images"],
        ["Finding the right image", "Asking whoever commissioned it", "Search through metadata, tags and visual characteristics"],
        ["Unannounced material", "Drafts in widely shared folders", "Folders private until access is granted"],
        ["Corporate films", "Large files downloaded just to check", "Streaming previews before any download"],
        ["Who signed off what", "Reconstructed from old emails", "Approval history on each asset"],
      ],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A new company description carried into public materials",
      team: "A corporate communications team",
      situation: "A company completes an acquisition and adopts a new description of what it does. Its corporate communications team needs every public-facing presentation, fact sheet and film to reflect the change before a series of investor and press events.",
      steps: [
        {
          heading: "Files with the old wording are found",
          body: ["The team searches for a phrase from the old description, and ", { text: "AI document discovery", page: 53 }, " surfaces the presentations and fact sheets that contain it."],
        },
        {
          heading: "Corrected files replace the old ones",
          body: ["Each corrected presentation ", { text: "replaces the previous file in place", page: 93 }, ", so colleagues who return to the asset find the updated version, with the earlier one kept in its record."],
        },
        {
          heading: "The corporate film gets its notes",
          body: ["The closing section of the corporate film needs a new line, so the team leaves ", { text: "comments at points on the timeline", page: 64 }, " for the in-house video editor."],
        },
        {
          heading: "Legal and investor relations sign off",
          body: ["Legal and investor relations review the revised materials, and each is ", { text: "marked as approved", page: 67 }, " once their requested changes are in."],
        },
        {
          heading: "The change stays on record",
          body: ["Weeks later, when a journalist asks when the description changed, the ", { text: "asset audit trail", page: 119 }, " gives visibility into the actions performed on each file."],
        },
      ],
      outcome: "The new description appears consistently across the company’s public materials, and the team has a record of the changes and approvals behind each file.",
      link: { page: 53, label: "AI Document Discovery" },
      sources: [{ kind: "pdf", page: 53 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 119 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What corporate comms uses",
      heading: "What a corporate communications team relies on",
      items: [
        {
          heading: "Brand asset analytics",
          body: "Analytics on which approved assets are accessed and reused help show whether the central set is the material colleagues actually present from.",
          icon: "chart",
          points: ["Reuse of approved assets", "A signal of adoption beyond the team"],
          page: 203,
        },
        {
          heading: "Global asset access",
          body: "CDN-based delivery can support colleagues in offices across different geographical regions who present the same company material.",
          icon: "globe",
          points: ["Offices in many regions", "The same material for all of them"],
          page: 314,
        },
        {
          heading: "Executive asset analytics",
          body: "A higher-level view of the organisation’s creative library and its usage suits the reporting a communications director gives leadership.",
          icon: "trend",
          points: ["Library use for leaders", "Evidence for communications reviews"],
          page: 210,
        },
        {
          heading: "Asset attribution",
          body: "Creators and contributors can remain associated with assets, which keeps photographers and film-makers identifiable when their work is chosen for public use.",
          icon: "user",
          points: ["Credit information kept", "Commissioning context preserved"],
          page: 116,
        },
        {
          heading: "Creative library reporting",
          body: "Library reporting turns analytics into information that can support operational decisions, such as which public-facing assets to refresh first.",
          icon: "document",
          points: ["Analytics shaped into decisions", "Priorities for refreshing material"],
          page: 205,
        },
      ],
      sources: [{ kind: "pdf", page: 203 }, { kind: "pdf", page: 314 }, { kind: "pdf", page: 210 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "presenters",
      eyebrow: "By presenter",
      heading: "How different presenters draw on the company’s source of truth",
      tabs: [
        {
          label: "Executives",
          heading: "Keynotes, briefings and interviews",
          icon: "user",
          body: [
            "Executives present the company at conferences, briefings and interviews, often with little time to prepare. They need the current presentation and a portrait that still looks like them.",
            [{ text: "Image version management", page: 98 }, " keeps different versions of a visual in one structured record, so a refreshed portrait sits with the one it replaces instead of beside it as a stray file."],
          ],
          points: ["Current portraits for public use", "Older portraits kept in the record"],
        },
        {
          label: "Sales",
          heading: "The corporate deck in every pitch",
          icon: "briefcase",
          body: [
            "Sales teams open the corporate deck more often than anyone, and they are the first to save a copy and adapt it. Pointing them at the source each time keeps their pitches in step with the company.",
            [{ text: "Shared creative views", page: 79 }, " let a recurring set of assets, such as the approved corporate slides and photography, be shared through a URL."],
          ],
          points: ["One link to the approved slides", "Fewer adapted copies in circulation"],
        },
        {
          label: "Recruitment",
          heading: "Films and imagery for careers events",
          icon: "film",
          body: [
            "Recruitment teams show the company to candidates through films and photography of offices and teams, material that dates quickly as people and places change.",
            ["Corporate and culture films can be ", { text: "indexed and enriched with AI-generated information", page: 25 }, ", which helps recruiters find the right clip without reviewing every video."],
          ],
          points: ["The right film for the event", "Dated material easier to spot"],
        },
      ],
      sources: [{ kind: "pdf", page: 98 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 25 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for corporate communications",
      items: [
        {
          question: "Can corporate communications limit a results presentation to investor relations before release?",
          answer: [{ text: "Folder-level permissions", page: 152 }, " control access more finely than organisation-wide settings, so a results presentation can stay with investor relations and the executive office until it is ready."],
        },
        {
          question: "Can a corporate communications team manage public assets for several brands or subsidiaries?",
          answer: [{ text: "Brand collaboration", page: 83 }, " includes maintaining approved assets and organising them by campaign, region or market, an approach a group with several brands can apply to each of them."],
        },
        {
          question: "Can annual reports and fact sheets sit in the same library as corporate photography?",
          answer: ["Yes. A ", { text: "searchable document library", page: 27 }, " indexes documents by extracted text, metadata and organisational tags alongside the company’s images and films."],
        },
        {
          question: "Can a corporate communications team find public-facing assets nobody uses any more?",
          answer: [{ text: "Library health analytics", page: 196 }, " can reveal inactive content along with growth and duplicates, a practical starting point for deciding which public material to refresh or retire."],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 83 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 196 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping public material consistent",
      variant: "compact",
      pages: [103, 71, 53, 119, 235, 239],
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
