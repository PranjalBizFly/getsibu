/**
 * 238 · GetSibu for Nonprofits — /use-cases/nonprofits
 *
 * Angle (cluster: uc-communications): a small communications team whose campaign imagery, event content, documents and
 * communications assets come from many hands (field staff, volunteers, partners), and whose imagery carries
 * obligations such as consent and time-limited use. Event Companies (236) own the event cycle; Internal
 * Communications (239) addresses employees; Corporate Communications (240) addresses the public for a company.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how nonprofit communications teams typically gather and use material; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 238,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a nonprofit can bring campaign imagery, event content, documents and communications assets into one library, so a small team can find material, use it responsibly and draw on it again for the next appeal.",
      visual: { diagram: "media-library", focus: "image,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 238 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A cause’s story, kept where a small team can find it",
      body: [
        "With GetSibu, a nonprofit can bring its campaign imagery, event content, documents and communications assets together in one place.",
        "Nonprofit communications teams are usually small, and their material comes from many hands. Field staff take photographs on projects, volunteers film fundraising events, partner organisations send reports and a designer on a short contract builds the appeal. Photographs of the communities a charity works with also carry obligations: consent, dignity and how long an image may be used. When those details live in an email thread, a well-meant reuse can break a promise.",
        [
          "A library helps most when it records those obligations alongside the files. ",
          { text: "Brand guardrail tags", page: 105 },
          " can identify assets that comply with specific organisational requirements, such as consent being on file, and ",
          { text: "expiry information", page: 104 },
          " can help identify images whose permitted use ends after a specified period.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Material from staff, volunteers and partners", "Consent recorded as a tag", "End dates for time-limited imagery", "Reports searchable by their contents", "Appeals built from past campaigns"],
      },
      highlight: {
        heading: "In practice",
        body: "When a trustee asks for a photograph from last year’s project visit, the communications officer finds it by the project’s name instead of searching a former colleague’s inbox.",
        tags: ["Communications officers", "Fundraising teams", "Programme staff"],
      },
      glance: {
        heading: "Nonprofits in brief",
        facts: [
          { label: "Team", value: "Charities, foundations and community organisations" },
          { label: "Typical material", value: "Campaign imagery, event photos and video, reports and templates" },
          { label: "Builds on", value: "Centralised Creative Asset Library", page: 6 },
          { label: "Supports", value: "Creative Access Governance", page: 159 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 238 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 159 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A year-end appeal built from a year of material",
      team: "A charity communications team",
      situation: "A small charity communications team is preparing its year-end fundraising appeal. The photographs, event footage and project reports it needs were produced over the year by field staff, volunteers and a partner organisation.",
      steps: [
        {
          heading: "The year’s material is gathered",
          body: ["The communications officer adds the photographs and clips that volunteers and field staff sent in, a batch at a time, through ", { text: "drag and drop upload", page: 127 }, "."],
        },
        {
          heading: "Copies from several phones are cleared",
          body: ["Several volunteers sent the same shots, and ", { text: "duplicate detection", page: 40 }, " identifies the identical copies so the team keeps one of each."],
        },
        {
          heading: "Imagery is chosen by its feel",
          body: ["The designer looks for photographs with a hopeful, bright feel through ", { text: "mood detection", page: 35 }, ", then keeps only those carrying the charity’s consent tag."],
        },
        {
          heading: "A claim is checked in the impact report",
          body: ["A result quoted in the appeal copy is checked against the annual impact report, found by searching for a phrase inside the PDF with ", { text: "OCR-powered search", page: 15 }, "."],
        },
        {
          heading: "The appeal is signed off",
          body: ["The director reviews the appeal materials, and each piece is ", { text: "marked as approved", page: 68 }, " before it goes to print."],
        },
      ],
      outcome: "The appeal draws on a whole year of material from many contributors, and the images chosen were checked against the consent the charity had recorded.",
      link: { page: 105, label: "Brand Guardrail Tags" },
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 68 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "What a nonprofit should weigh in a shared library",
      items: [
        {
          heading: "Material that arrives from outside the team",
          summary: "Files from volunteers and partners come in many ways, and not all of them should be widely visible.",
          icon: "users",
          body: [
            "Event photographs, partner reports and volunteer footage arrive by email, messaging apps and shared links. Collecting them in one place is the first job; deciding which colleagues should see them is the second, because images of beneficiaries and internal documents need tighter handling than photographs from a fun run.",
            ["With ", { text: "default-deny access", page: 154 }, ", new folders can remain private until access is explicitly granted, so opening sensitive material to colleagues is a deliberate decision."],
          ],
        },
        {
          heading: "Reports that change every year",
          summary: "Impact and funder reports hold the facts campaigns rely on.",
          icon: "document",
          body: [
            "Impact reports, evaluations and funder reports are where a charity’s results and stories are written down. Campaign copy needs to match them, and each year brings a new edition that supersedes the last.",
            [{ text: "Creative file history", page: 95 }, " provides context around how an asset has changed over time, which helps when an older figure turns up in a draft."],
          ],
        },
        {
          heading: "People moving on",
          summary: "Staff and volunteers change often, and their knowledge goes with them.",
          icon: "history",
          body: [
            "Contract roles end, volunteers move away and the person who knew which photographs had consent leaves. What they knew needs to be recorded with the assets, not in their inbox.",
            [{ text: "Asset history", page: 117 }, " gives users a record of relevant changes and interactions, so the story of an asset outlasts the people who handled it."],
          ],
        },
        {
          heading: "Consistency across many hands",
          summary: "Partners and volunteers produce material carrying the charity’s name.",
          icon: "check",
          body: [
            "Local groups, event volunteers and partner organisations all make posters and posts. Without an obvious source for logos and templates, each improvises its own version.",
            ["A ", { text: "shared source of truth", page: 10 }, " lets the charity’s own teams work from the same organised library, while permissions and approval workflows help ensure the right content is used, so there is one dependable place to take files from when a partner asks."],
          ],
        },
        {
          heading: "Limited time for administration",
          summary: "A small team cannot spend days tagging photographs.",
          icon: "sparkles",
          body: [
            "Every hour spent organising files is an hour not spent on the cause. The library has to stay usable without a dedicated archivist.",
            [{ text: "AI-powered asset management", page: 45 }, " combines automated analysis with human approval, so the team keeps control while repetitive library administration shrinks."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 95 }, { kind: "pdf", page: 117 }, { kind: "pdf", page: 10 }, { kind: "pdf", page: 45 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What nonprofits use",
      heading: "What a nonprofit relies on in GetSibu",
      items: [
        {
          heading: "Several ways in",
          body: "Assets can enter GetSibu through multiple sources, which suits a team receiving files from staff, volunteers and partners in different ways.",
          icon: "upload",
          points: ["Files from many contributors", "Flexibility in how material arrives"],
          page: 135,
        },
        {
          heading: "Navigation for occasional users",
          body: "Library views, folders, tags, collections and search let someone move from browsing broadly to finding one specific asset.",
          icon: "compass",
          points: ["Browsing for newcomers", "Precise search for regulars"],
          page: 29,
        },
        {
          heading: "Searchable event video",
          body: "Footage from fundraisers and community events can be indexed and enriched with AI-generated information, so a clip can be found without watching every recording.",
          icon: "video",
          points: ["Event footage discoverable", "Less time spent reviewing clips"],
          page: 25,
        },
        {
          heading: "Shared views",
          body: "Saved searches and library views can be shared with colleagues in fundraising and services without making duplicate copies of the files.",
          icon: "collection",
          points: ["One campaign view for every team", "No duplicate copies"],
          page: 78,
        },
        {
          heading: "Tag analytics",
          body: "Tag analytics identify frequently used or searched tags, showing how colleagues actually look for material.",
          icon: "chart",
          points: ["Popular tags revealed", "Clues to terms people expect"],
          page: 186,
        },
        {
          heading: "Multi-factor authentication",
          body: "MFA adds another layer of account protection, which is worth having when many people with different roles use the library.",
          icon: "key",
          points: ["Another layer on every account", "Worth it for shared-use libraries"],
          page: 336,
        },
      ],
      sources: [{ kind: "pdf", page: 135 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 336 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for nonprofits",
      items: [
        {
          question: "Can a nonprofit keep funder reports in the same library as its campaign imagery?",
          answer: ["Yes. ", { text: "Creative library management", page: 4 }, " covers videos, images, documents and audio, organised through folders, tags, collections, metadata and permissions."],
        },
        {
          question: "Can a nonprofit go back to last year’s version of an appeal template?",
          answer: ["Yes. ", { text: "Version restore", page: 94 }, " brings back an older version when a team needs to return to a previous creative state, which helps when a redesigned template loses something the old one did well."],
        },
        {
          question: "Can a nonprofit bring its existing photo archive into GetSibu?",
          answer: [{ text: "Large library migration", page: 131 }, " is designed to move existing collections while preserving important metadata and folder relationships, so years of project photography keep their context."],
        },
        {
          question: "Can a nonprofit see how much storage its event video takes up?",
          answer: [{ text: "Storage analytics", page: 183 }, " give a view of how much space each asset category consumes, so the weight of event footage is visible next to photographs and documents."],
        },
      ],
      sources: [{ kind: "pdf", page: 4 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 131 }, { kind: "pdf", page: 183 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for small teams with many contributors",
      variant: "compact",
      pages: [105, 104, 45, 10, 236, 239],
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
