/**
 * 221 · GetSibu for Brand Consultancies — /use-cases/brand-consultancies
 *
 * Angle (cluster: uc-agencies): the consultancy's knowledge work — research, reference material and strategy presentations
 * kept beside the identity and campaign assets they explain, across engagements that end and return. Creative Agencies
 * (215) owns client tenancy; Advertising Agencies (219) owns campaign revision rounds; Brand Teams (214) owns an in-house
 * brand's controls; Creative Studios (220) owns mixed-format studio production.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how brand consultancies typically work; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 221,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a brand consultancy can keep the brand assets, strategy presentations, reference material and campaign work behind each engagement in one searchable place, and draw on past thinking without rebuilding it.",
      visual: { diagram: "media-library", focus: "document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 221 }, { kind: "pdf", page: 27 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The thinking behind a brand, kept with the brand itself",
      body: [
        "GetSibu gives brand consultancies one place to centralise what an engagement gathers and produces: brand assets, presentations, reference material and campaign materials.",
        "Much of a consultancy’s value sits in documents rather than artwork. Audits, research findings, workshop outputs and strategy decks explain why an identity looks the way it does, and reference images show where an idea came from. When those live in email attachments and personal folders, the reasoning behind a brand disappears as soon as the engagement ends or the strategist moves on.",
        [
          "Documents therefore deserve the same care as visual assets. A ",
          { text: "searchable document library", page: 27 },
          " indexes presentations and PDFs by extracted text, metadata and tags, and ",
          { text: "document version management", page: 99 },
          " keeps earlier versions when a strategy deck is replaced, so the version presented to a client’s board can still be found after later edits.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Strategy documents searchable by content", "Reference material kept distinct", "Presented versions retained", "Identity assets beside their rationale", "Past engagements as a resource"],
      },
      highlight: {
        heading: "In practice",
        body: "A strategist preparing a workshop searches for a phrase from a positioning statement written years earlier and finds the deck it first appeared in.",
        tags: ["Strategists", "Designers", "Client leads"],
      },
      glance: {
        heading: "Brand consultancies in brief",
        facts: [
          { label: "Team", value: "Brand consultancies" },
          { label: "Typical material", value: "Brand assets, presentations, references, campaign materials" },
          { label: "Builds on", value: "AI Document Discovery", page: 53 },
          { label: "Supports", value: "Client Review", page: 72 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 221 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 53 }, { kind: "pdf", page: 72 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "challenges",
      eyebrow: "Recurring challenges",
      heading: "Challenges particular to a consultancy’s library",
      items: [
        {
          heading: "References are not your own work",
          summary: "Inspiration imagery and third-party examples must stay distinguishable from deliverables.",
          icon: "image",
          body: [
            "Consultancies collect competitor examples, cultural references and inspiration imagery during research. None of it belongs to the consultancy or the client, and it should never be mistaken for approved brand material.",
            [{ text: "Structured folders and scalable taxonomies", page: 8 }, " make it practical to classify reference material separately from work the consultancy has produced itself."],
          ],
        },
        {
          heading: "Knowledge leaves with people",
          summary: "Strategists move between engagements, and their understanding of the files moves with them.",
          icon: "user",
          body: [
            "The person who ran the original audit knows which interviews mattered and which decks were superseded. When that person moves on, the files remain but their meaning does not.",
            [{ text: "Asset attribution", page: 116 }, " keeps creators and contributors associated with assets, so a newcomer at least knows whose work they are reading."],
          ],
        },
        {
          heading: "Engagements end, relationships continue",
          summary: "Clients often come back for a refresh or an extension.",
          icon: "archive",
          body: [
            "Brand work comes in cycles: an identity, then a refresh, then an extension into a new product line. A consultancy that can find its own earlier rationale starts the next cycle well ahead.",
            [{ text: "Asset archiving", page: 108 }, " keeps completed engagements on record without cluttering the library for current work."],
          ],
        },
        {
          heading: "Confidential client material",
          summary: "Strategy work often involves unannounced plans and sensitive research.",
          icon: "lock",
          body: [
            "A consultancy may hold a client’s unannounced product plans or research findings that must not travel beyond the engagement team.",
            [{ text: "Secure creative collaboration", page: 180 }, " combines collaboration with permissions, so people can work together without giving up control over sensitive assets."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 180 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A returning client asks for a new sub-brand",
      team: "A brand consultancy",
      situation: "A consultancy that created a client’s identity some years ago is asked to develop a sub-brand for a new product line. The strategist who led the original work has since left.",
      steps: [
        {
          heading: "The original rationale is found",
          body: ["A new strategist locates the original positioning deck by the words inside it, since ", { text: "AI document discovery", page: 53 }, " combines OCR and metadata."],
        },
        {
          heading: "Earlier references are revisited",
          body: ["Reference imagery from the first project is retrieved by describing its mood, because ", { text: "AI mood detection", page: 35 }, " makes visual feeling searchable."],
        },
        {
          heading: "The master identity is pulled",
          body: ["The designers work from the approved master logo files in an ", { text: "approved-only view", page: 103 }, ", not from exports saved in old email threads."],
        },
        {
          heading: "The new deck goes to the client",
          body: ["The sub-brand presentation is shared for ", { text: "client review", page: 72 }, ", and the marketing director’s feedback is recorded on the deck itself."],
        },
        {
          heading: "Workshop outputs join the library",
          body: ["Photographs of the workshop walls and the notes typed up afterwards are ", { text: "added by drag and drop", page: 127 }, ", so the next strategist finds them beside the deck."],
        },
      ],
      outcome: "The consultancy picks the brand up where it left off, with the original thinking, references and identity files found in the library rather than reconstructed from memory.",
      link: { page: 53, label: "AI Document Discovery" },
      sources: [{ kind: "pdf", page: 53 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 127 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the consultancy uses",
      heading: "What a brand consultancy draws on in GetSibu",
      items: [
        {
          heading: "Saved searches for an engagement",
          body: "A search a team runs repeatedly for one client or project can be saved and shared through a URL, giving everyone on the engagement the same starting view.",
          icon: "search",
          points: ["Reusable views per client", "Shared by link"],
          page: 17,
        },
        {
          heading: "Colour detection",
          body: "Colour information from visual assets supports discovery by palette, which is useful when auditing how a brand’s colours are really used.",
          icon: "palette",
          points: ["Search imagery by colour", "Helpful in brand audits"],
          page: 36,
        },
        {
          heading: "Semantic search",
          body: "Search that interprets meaning lets a strategist look for concepts and visual descriptions rather than exact words.",
          icon: "search",
          points: ["Ideas as search terms", "No need for the exact title"],
          page: 39,
        },
        {
          heading: "AI-assisted tagging",
          body: "Tags can be suggested while assets are processed, so a large collection of research imagery does not have to be classified entirely by hand.",
          icon: "sparkles",
          points: ["Suggestions reviewed by the team", "Less manual classification"],
          page: 31,
        },
        {
          heading: "Remote collaboration",
          body: "Comments, mentions, approvals and shared searches let consultants in different offices work around the same assets.",
          icon: "globe",
          points: ["Workshops prepared across offices", "Feedback kept on the asset"],
          page: 88,
        },
        {
          heading: "Campaign asset versioning",
          body: "Campaign materials that grow out of a strategy keep their revisions in one record rather than in separate copies.",
          icon: "history",
          points: ["Activation work revised in one record", "No disconnected copies"],
          page: 96,
        },
      ],
      sources: [{ kind: "pdf", page: 17 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 88 }, { kind: "pdf", page: 96 }],
    },
    {
      kind: "tabs",
      id: "phases",
      eyebrow: "By stage",
      heading: "Material from each stage of an engagement",
      tabs: [
        {
          label: "Discovery",
          heading: "Research that stays with the brand",
          icon: "compass",
          body: [
            "Audits, interviews and market scans produce notes, recordings and collected examples that inform every later decision, yet they are usually the first material to go missing.",
            ["Interview recordings can sit with the research they informed, because ", { text: "audio is managed alongside", page: 28 }, " documents and images rather than in a separate archive."],
          ],
          points: ["Audit material in one place", "Recordings beside the notes"],
          link: { page: 23, label: "Asset Metadata Search" },
        },
        {
          label: "Strategy",
          heading: "Decks with a traceable draft history",
          icon: "document",
          body: [
            "Positioning, brand architecture and messaging decks go through several drafts before a client sees one, and a later workshop often asks what changed.",
            [{ text: "Creative revision tracking", page: 100 }, " helps show what changed between versions and which version is currently active."],
          ],
          points: ["Draft history kept", "The current deck identified"],
          link: { page: 95, label: "Creative File History" },
        },
        {
          label: "Identity",
          heading: "Identity artwork kept with its status",
          icon: "palette",
          body: [
            "Identity work produces logo families, colour systems and typography rules, and early explorations can look very like finished artwork.",
            [{ text: "Asset statuses", page: 102 }, " distinguish drafts from approved content, so an unused exploration is not mistaken for the chosen mark."],
          ],
          points: ["Explorations marked as drafts", "Approved marks clearly identified"],
          link: { page: 71, label: "Brand Asset Approval" },
        },
      ],
      sources: [{ kind: "pdf", page: 28 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 95 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 71 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for brand consultancies",
      items: [
        {
          question: "Can a brand consultancy bring in material from past engagements?",
          answer: [{ text: "Bulk asset import", page: 130 }, " helps move large existing collections in without uploading each file by hand, and ", { text: "metadata preservation", page: 132 }, " means details such as creators and custom keywords can be kept during the move."],
        },
        {
          question: "Can a consultancy restore an earlier version of a strategy deck?",
          answer: ["Yes. ", { text: "Version restore", page: 94 }, " lets a team return to a previous creative state, which helps when a client decides the earlier positioning was the stronger one."],
        },
        {
          question: "Can a designer ask a strategist about the rationale behind a piece of artwork?",
          answer: [{ text: "Asset mentions", page: 86 }, " make it easier to bring the right collaborator into an asset-specific discussion, so the question can be asked on the artwork itself."],
        },
        {
          question: "Can a brand consultancy keep separate libraries for different clients?",
          answer: ["GetSibu’s ", { text: "multi-tenant design", page: 160 }, " is intended for organisations that need multiple isolated environments, such as agencies managing multiple clients. Whether a consultancy needs that separation depends on how confidential its engagements are."],
        },
      ],
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 160 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for consultancy and brand work",
      variant: "compact",
      pages: [27, 53, 99, 72, 215, 214],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the closest agency and brand use cases." }],
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
