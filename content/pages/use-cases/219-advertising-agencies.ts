/**
 * 219 · GetSibu for Advertising Agencies — /use-cases/advertising-agencies
 *
 * Angle (cluster: uc-agencies): the campaign revision cycle inside client-specific libraries — rounds of client and
 * internal feedback on multi-format work, keeping track of the version the client accepted, and building adaptations
 * and the next brief from approved assets. Creative Agencies (215) owns the tenancy set-up; Brand Consultancies (221)
 * owns strategy material; Video Agencies (229) owns client footage.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how advertising agencies typically run campaign revisions; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 219,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How an advertising agency can organise each client’s campaign assets, take the work through rounds of revisions with feedback attached, and keep a clear record of what the client approved.",
      visual: { diagram: "media-library", focus: "image,video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 219 }, { kind: "pdf", page: 77 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Campaigns, revisions and client libraries kept in step",
      body: [
        "For advertising agencies, GetSibu brings together three things that usually live apart: the campaign assets themselves, the collaboration on their revisions, and a separate library for each client.",
        "A campaign rarely reaches approval in one pass. A key visual goes through internal critique, then client feedback, then legal comments; a film goes through several cuts before the client is happy; and every change ripples into banners, social formats and print adaptations. A few rounds in, the account team is reconciling feedback from emails, calls and marked-up PDFs against files whose names no longer mean anything.",
        [
          "The history matters as much as the final file. ",
          { text: "Campaign asset versioning", page: 96 },
          " keeps revisions without disconnected copies, ",
          { text: "threaded comments", page: 63 },
          " organise each point of feedback around its own issue, and ",
          { text: "client asset isolation", page: 167 },
          " keeps one client’s campaigns out of another client’s workflow.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Campaign assets organised per client", "Revisions without disconnected copies", "A thread for each piece of feedback", "The accepted version on record", "Adaptations built from approved work"],
      },
      highlight: {
        heading: "In practice",
        body: "When a client asks to see the headline from two rounds ago, the account team opens the earlier version of the asset instead of searching sent emails.",
        tags: ["Account teams", "Creatives", "Producers"],
      },
      glance: {
        heading: "Advertising agencies in brief",
        facts: [
          { label: "Team", value: "Advertising agencies" },
          { label: "Typical material", value: "Key visuals, films, adaptations, scripts" },
          { label: "Builds on", value: "Client Review", page: 72 },
          { label: "Supports", value: "Creative Revision Tracking", page: 100 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 219 }, { kind: "pdf", page: 96 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 167 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 100 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "roles",
      eyebrow: "By role",
      heading: "How each agency role works with campaign revisions",
      tabs: [
        {
          label: "Creatives",
          heading: "Revise the work, not the filename",
          icon: "palette",
          body: [
            "Art directors and copywriters produce many iterations of a concept, and the one the client liked is not always the latest.",
            [{ text: "Image version management", page: 98 }, " keeps different versions of a visual in one structured record, so an earlier direction can be revisited without a folder of near-identical exports."],
          ],
          points: ["Iterations held in one record", "Earlier directions still available"],
          link: { page: 94, label: "Version Restore" },
        },
        {
          label: "Account teams",
          heading: "Keep client feedback in one place",
          icon: "briefcase",
          body: [
            "Account managers translate client comments into instructions for the studio. The risk is feedback that arrives through several channels and contradicts itself.",
            [{ text: "Creative feedback management", page: 74 }, " attaches discussions directly to the relevant asset, and ", { text: "team mentions", page: 66 }, " bring the creative who owns a change into the conversation."],
          ],
          points: ["Feedback attached to the asset", "Owners brought in by mention"],
          link: { page: 73, label: "Team Feedback" },
        },
        {
          label: "Producers",
          heading: "Track every adaptation of a campaign",
          icon: "workflow",
          body: [
            "Once a master is approved, producers manage adaptations for each format and channel, and every one needs checking against the approved original.",
            [{ text: "Review status", page: 76 }, " shows which assets still need attention, and ", { text: "video timeline comments", page: 64 }, " let producers attach notes on a film edit to specific points."],
          ],
          points: ["Outstanding work visible by status", "Film notes at exact points"],
          link: { page: 70, label: "Campaign Review" },
        },
        {
          label: "Clients",
          heading: "A record of what was asked for",
          icon: "user",
          body: [
            "Clients give feedback through marketing, legal and senior stakeholders, and each expects its points to be acted on. When a request is questioned later, the agency needs to show how it was handled.",
            [{ text: "Asset discussion history", page: 75 }, " allows teams to understand how feedback evolved over time, so an account team can trace a request from the first comment to the change that answered it."],
          ],
          points: ["Requests traceable over time", "Answers without searching email"],
        },
      ],
      sources: [{ kind: "pdf", page: 98 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 74 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 68 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A key visual through rounds of client feedback",
      team: "An advertising agency",
      situation: "An advertising agency is developing a campaign for a long-standing client: a key visual, a short film and a set of digital adaptations. The client’s marketing and legal teams both give feedback, often on different days.",
      steps: [
        {
          heading: "The first round is shared",
          body: ["The creative team adds the key visual and the first cut of the film to the client’s library for review, and feedback is ", { text: "left directly on each asset", page: 62 }, "."],
        },
        {
          heading: "Legal opens its own thread",
          body: "A legal query about a line of copy goes into a separate thread, so the point is not lost among comments about colour and type.",
        },
        {
          heading: "Revisions replace earlier rounds",
          body: "Each revised visual replaces the previous version in place, and revision tracking helps show the account team which version is currently active.",
        },
        {
          heading: "The client approves",
          body: ["Once both teams are satisfied, the asset is approved and ", { text: "approval history", page: 77 }, " keeps a record of the review activity that led to the accepted version."],
        },
        {
          heading: "Adaptations start from the master",
          body: ["The production team builds the digital adaptations from the approved visual, taken from an ", { text: "approved-only view", page: 103 }, " rather than from a folder of earlier rounds."],
        },
      ],
      outcome: "The agency moves through every round with one record per asset, and the client’s approved work is ready to build on when the next brief arrives.",
      link: { page: 96, label: "Campaign Asset Versioning" },
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 103 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the agency uses",
      heading: "What an advertising agency relies on in GetSibu",
      items: [
        {
          heading: "Duplicate detection",
          body: "Exports of the same adaptation saved under different names can be identified as copies, even when a file has been re-encoded.",
          icon: "copy",
          points: ["Fewer near-identical deliverables", "Supports storage optimisation"],
          page: 40,
        },
        {
          heading: "Text inside layouts",
          body: "Text is extracted from images, PDFs and presentations, so a print layout can be found by the headline set in it.",
          icon: "text",
          points: ["Find work by its copy", "Scripts and decks included"],
          page: 15,
        },
        {
          heading: "Searchable campaign imagery",
          body: "Key visuals and campaign photography become searchable through metadata, tags, visual characteristics and extracted information, which helps them be reused on later briefs.",
          icon: "image",
          points: ["Past campaigns easy to revisit", "Imagery reused across briefs"],
          page: 26,
        },
        {
          heading: "Tag approval in bulk",
          body: "After a large shoot, AI-suggested tags can be approved in bulk rather than checked file by file.",
          icon: "sparkles",
          points: ["Big shoots organised faster", "Suggestions still reviewed"],
          page: 47,
        },
        {
          heading: "Expiry for limited usage terms",
          body: "Talent, music and stock imagery in advertising often come with usage terms, and expiry information can help teams identify content that should no longer be used after a specified period.",
          icon: "calendar",
          points: ["Usage terms noted on the asset", "Out-of-term material easier to spot"],
          page: 104,
        },
        {
          heading: "Mood and colour in search",
          body: "Visual mood characteristics and colour information can both be used in discovery, which helps when a brief asks for a particular feeling or palette.",
          icon: "palette",
          points: ["Mood as searchable information", "Colour-based discovery"],
          page: 35,
        },
      ],
      sources: [{ kind: "pdf", page: 40 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }],
    },
    {
      kind: "before-after",
      id: "before-after",
      eyebrow: "Before and after",
      heading: "Revision rounds before and after a shared record",
      beforeLabel: "Rounds run over email",
      afterLabel: "Rounds run on the asset",
      before: ["Feedback split across emails and calls", "“v6_final_clientedits” files", "Unclear which version the client approved", "Adaptations made from the wrong round"],
      after: ["Comments and threads on each asset", "Revisions held in one version history", "Approval history shows the accepted version", "Adaptations taken from approved work"],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 103 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for advertising agencies",
      items: [
        {
          question: "What should an advertising agency do with rejected concepts once a campaign is approved?",
          answer: ["Keep the ones worth revisiting and let the rest go. ", { text: "Asset archiving", page: 108 }, " retains historical content without letting it interfere with everyday discovery, and ", { text: "asset deletion", page: 109 }, " lets authorised users remove assets according to organisational policies."],
        },
        {
          question: "Does an advertising agency need separate systems for film, print and digital work?",
          answer: ["No. ", { text: "Creative file discovery", page: 24 }, " covers images, video, audio and documents through a unified search experience, so a campaign’s film, key visuals and print layouts can be found together."],
        },
        {
          question: "Can an advertising agency reuse a client’s approved assets on the next campaign?",
          answer: ["Yes. Saved views allow a recurring collection of assets to be ", { text: "shared through a URL", page: 79 }, ", so a creative team can start the next brief from work the client has already approved."],
        },
      ],
      sources: [{ kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 79 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for agencies running campaigns",
      variant: "compact",
      pages: [96, 72, 100, 77, 215, 221],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the closest agency use cases." }],
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
