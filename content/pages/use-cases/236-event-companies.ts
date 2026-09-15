/**
 * 236 · GetSibu for Event Companies — /use-cases/event-companies
 *
 * Angle (cluster: uc-communications): material that arrives in bursts around each event — promotional material and
 * changing presentations before, photography and recordings during, and a quick sort afterwards so the next edition
 * can be promoted. Education Teams (237) own teaching material; Nonprofits (238) own campaign and event content for a
 * cause; Corporate Communications (240) owns the public-facing source of truth.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how event teams typically produce and reuse event material; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 236,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How an event company can organise the promotional material, presentations, photography and recordings each event produces, from the first announcement to promoting the next edition.",
      visual: { diagram: "media-library", focus: "video,image,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 236 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Before, during and after every event",
      body: [
        "Event companies can use GetSibu to organise the photography, promotional material, presentations and recordings that their events generate.",
        "An event creates material in three bursts. Beforehand come posters, speaker announcements, sponsor logos and presentations that keep changing until the last minute. On the day, photographers and video crews produce a flood of files over whatever connection the venue offers. Afterwards, all of it has to be sorted quickly enough to promote the next edition while the event is still fresh in people’s minds.",
        [
          "Each burst asks something different of the library. ",
          { text: "High-volume media uploads", page: 139 },
          " are designed for teams handling large amounts of video and imagery, and ",
          { text: "creative workflow management", page: 80 },
          " supports the movement of assets from upload through organisation, review and approval to final use.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Material grouped event by event", "Speaker decks kept in version history", "Heavy uploads from the venue", "Recordings checked without downloads", "Past editions reused for promotion"],
      },
      highlight: {
        heading: "In practice",
        body: "Before venue signage goes to print, a production manager checks that each sponsor logo in the pack has completed approval, rather than trusting whichever file arrived last.",
        tags: ["Production managers", "Sponsors", "Signage"],
      },
      glance: {
        heading: "Event companies in brief",
        facts: [
          { label: "Team", value: "Event organisers and event agencies" },
          { label: "Typical material", value: "Event photography, promotional material, presentations and recordings" },
          { label: "Builds on", value: "Media Upload Management", page: 136 },
          { label: "Supports", value: "Streaming Media Preview", page: 147 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 236 }, { kind: "pdf", page: 139 }, { kind: "pdf", page: 80 }, { kind: "pdf", page: 136 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "event-cycle",
      eyebrow: "Event by event",
      heading: "What an event adds to the library at each stage",
      items: [
        { label: "Announcement", body: "Posters, banners and speaker graphics are updated as the line-up fills. Campaign teams can maintain versions of those files without creating separate disconnected copies.", page: 96 },
        { label: "Programme build", body: "Speakers send presentations, then send them again. Documents and presentations can be replaced while their historical versions are retained, so the version shown on stage is not lost among drafts.", page: 99 },
        { label: "Event day", body: "Photographers and crews upload from the venue, over connections that are rarely as dependable as an office network. Upload workflows that support resumable transfers are intended for unreliable networks of that kind.", page: 136 },
        { label: "Wrap-up", body: "Session recordings are long and heavy. Streaming previews let the team inspect them quickly, without waiting for complete downloads, before deciding what to cut into highlights.", page: 147 },
        { label: "Next edition", body: "The best material feeds the next event’s promotion. AI-assisted organisation helps keep the library in order as it grows, rather than demanding a large manual clean-up after every event.", page: 57 },
      ],
      sources: [{ kind: "pdf", page: 96 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 136 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 57 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Turning a conference into next year’s promotion",
      team: "An event company",
      situation: "An event company has just run a large conference with several stages and a sponsor exhibition. It wants a highlights reel and a set of photographs ready for next year’s early announcement while interest is still high.",
      steps: [
        {
          heading: "Photographs from every stage arrive",
          body: ["Each photographer uploads their selects in batches, and ", { text: "upload progress", page: 141 }, " shows the event manager how many files are still being processed."],
        },
        {
          heading: "Suggested tags do the first sort",
          body: ["Rather than labelling each image, the team ", { text: "approves suggested tags in bulk", page: 47 }, " and turns to choosing photographs instead of describing them."],
        },
        {
          heading: "A sponsor’s request is answered",
          body: ["A sponsor asks for photographs of its stand. Where the stand’s name is clearly legible in a photograph, ", { text: "OCR", page: 38 }, ", which extracts text from images, may make it searchable; otherwise the stand tag added at upload does the job."],
        },
        {
          heading: "The keynote is marked up",
          body: ["The marketing lead watches the keynote recording and leaves ", { text: "comments at points on the timeline", page: 64 }, " for the moments that belong in the highlights reel."],
        },
        {
          heading: "The reel is approved",
          body: ["The edited reel goes through the ", { text: "creative approval workflow", page: 67 }, ", with changes requested and made before it is marked as approved."],
        },
        {
          heading: "Picks are tagged for next year",
          body: "The team applies a tag for next year’s announcement to the photographs it has chosen, so event marketing can find them by that tag when planning begins.",
        },
      ],
      outcome: "The conference’s best material is sorted, approved and ready for the next edition while interest is high, and the full set of photographs and recordings stays in the library for later use.",
      link: { page: 136, label: "Media Upload Management" },
      sources: [{ kind: "pdf", page: 141 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 8 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What event teams use",
      heading: "What an event company relies on across its calendar",
      items: [
        {
          heading: "Contributor analytics",
          body: "Contributor analytics help show who is adding content, which is useful for an organisation whose material comes from many photographers and crews.",
          icon: "users",
          points: ["Participation across crews", "Contributors beyond the core team"],
          page: 185,
        },
        {
          heading: "Audio beside video",
          body: "Session audio can be managed alongside photographs, recordings and slides, rather than in a separate archive of its own.",
          icon: "audio",
          points: ["Talks kept with their slides", "One library for every format"],
          page: 28,
        },
        {
          heading: "Colour in discovery",
          body: "Colour information extracted from images can support discovery, which helps when next year’s branding calls for photographs in a particular palette.",
          icon: "palette",
          points: ["Photographs matched to new branding", "Palette as a starting point"],
          page: 36,
        },
        {
          heading: "Remote collaboration",
          body: "Organisers, producers and marketing colleagues in different places can work around the same assets through comments, mentions, approvals and shared searches.",
          icon: "globe",
          points: ["Venue teams and office teams together", "Decisions kept on the asset"],
          page: 88,
        },
        {
          heading: "Storage by category",
          body: "Storage can be analysed across video, image, document and audio, which shows how much of the library’s footprint comes from recordings.",
          icon: "chart",
          points: ["Recordings weighed against photography", "Planning for bigger editions"],
          page: 192,
        },
        {
          heading: "Archiving past editions",
          body: "Material from past editions can be archived, retained for reference without cluttering the searches for this year’s event.",
          icon: "archive",
          points: ["Earlier editions kept", "This year’s material easier to reach"],
          page: 108,
        },
      ],
      sources: [{ kind: "pdf", page: 185 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 88 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for event companies",
      items: [
        {
          question: "Can an event company tag photographs by session and speaker?",
          answer: ["Yes, through tags the team applies, such as session titles and speaker names taken from the programme. ", { text: "Hierarchical tags", page: 8 }, " suit an event’s natural structure of days, stages and sessions."],
        },
        {
          question: "Can an event company keep each event’s material to its own team?",
          answer: [{ text: "Folder-level permissions", page: 152 }, " control access below the organisation level, so the folders for one event can be open to the people working on it and closed to everyone else."],
        },
        {
          question: "Can an event company bring in material from earlier editions?",
          answer: ["GetSibu provides a ", { text: "migration path", page: 134 }, " for teams moving away from fragmented storage, which suits years of event material spread across drives and shared folders."],
        },
        {
          question: "Can an event company see how its library changes across a season of events?",
          answer: [{ text: "Monthly library analytics", page: 190 }, " help identify longer-term trends, which a season of events is more likely to show than any single week."],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 134 }, { kind: "pdf", page: 190 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for teams handling event material",
      variant: "compact",
      pages: [136, 147, 99, 64, 237, 240],
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
