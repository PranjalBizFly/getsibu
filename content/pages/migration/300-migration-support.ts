/**
 * 300 · GetSibu Migration Support — /migration/migration-support
 *
 * Angle (cluster: migration-overview): reducing operational disruption while moving from existing storage
 * environments. Only PDF 300's wording describes the support itself: the page never says what support includes, how
 * long it takes or who provides it. Everything else explains disruption and the decisions an organisation owns.
 * Migration Without Downtime (292) owns the overlap between old and new storage.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of operational disruption in migrations; states nothing about the content, duration or provider of migration support." } as const;

const page: PageContent = {
  page: 300,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Understand what operational disruption means when a creative organisation leaves its existing storage, where it tends to come from, and which decisions keep daily work running while the move happens.",
      visual: { diagram: "migration-map" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 300 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Moving storage without stopping the work it holds",
      body: [
        "Migration support helps organisations move from existing storage environments while reducing operational disruption. Disruption, in this sense, is anything a move does to the everyday running of creative work: requests that cannot be met, reviews that stall, deliveries that slip.",
        "Creative operations are unusually sensitive to it. Work runs to dates set by launches, broadcasts and clients, and a library is consulted many times a day by people who are not thinking about storage at all. A move that is technically sound can still feel like a failure if it lands in the week a campaign goes live.",
        [
          "Part of the answer lies in how the move is designed: GetSibu’s ",
          { text: "migration workflow", page: 292 },
          " is designed to let organisations continue using existing storage while content is indexed in the background. Other parts rest on knowledge held inside the organisation: its calendar, its most critical material and the way its teams communicate.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Disruption measured in everyday work", "Dates that cannot move", "Existing storage kept usable", "Critical material identified first", "One route for reporting problems", "Changes introduced one at a time"],
      },
      highlight: {
        heading: "In practice",
        body: "For a broadcast team, the disruption that matters most is a programme missing its slot, so before deciding anything else it lists every collection that feeds a programme due to air.",
        tags: ["Broadcast", "Scheduling", "Continuity"],
      },
      glance: {
        heading: "Migration support in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Helps organisations", value: "Move from existing storage environments" },
          { label: "Aims to reduce", value: "Operational disruption" },
          { label: "Where a move begins", value: "Migrate to GetSibu", page: 281 },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 300 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 281 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "where-it-shows",
      eyebrow: "Where disruption appears",
      heading: "Four places a move can interrupt creative operations",
      tabs: [
        {
          label: "Production",
          heading: "Projects that rely on files staying put",
          icon: "film",
          body: [
            "Editors and designers in the middle of a project depend on files being where their tools and colleagues expect. Disruption here is quiet: a project that needs relinking, a layout with a missing element, an afternoon spent working out what moved and when.",
            "The practical defence is knowing which projects are live before anything is scheduled, and treating their files as the last material to be touched.",
          ],
          points: ["Live projects listed in advance", "Working files touched last"],
        },
        {
          label: "Distribution",
          heading: "Approved material other people are waiting for",
          icon: "megaphone",
          body: [
            "Marketing, brand and communications teams hand approved assets to agencies, partners and channels constantly. If a move leaves approved work hard to find even briefly, the disruption travels outside the organisation, where it is noticed most.",
            ["Once that material is in the library, ", { text: "approved asset library", page: 103 }, " views let users reach content that has completed the required review process, which gives outside requests a clear place to be answered from."],
          ],
          points: ["Outside requests kept flowing", "Approved work easy to point to"],
        },
        {
          label: "Connected systems",
          heading: "Software that expects files in a particular place",
          icon: "code",
          body: [
            "Websites, product catalogues and internal tools often point at storage locations directly. When those locations change, pages can break without anyone being told, and the first report may come from a customer.",
            ["Listing those dependencies belongs early in any move. Where software will work with the library afterwards, the API allows organisations to build ", { text: "custom asset applications", page: 279 }, " around the GetSibu asset infrastructure."],
          ],
          points: ["Dependencies found before they break", "Reconnection planned, not improvised"],
        },
        {
          label: "Everyday finding",
          heading: "Small failures repeated across a day",
          icon: "search",
          body: [
            "The most common disruption is also the smallest: someone cannot find a file they opened last week. Each moment is minor, but multiplied across a department it costs more attention than any planned interruption.",
            "Making the material people request most often available early, and telling them where to look, prevents many of those moments.",
          ],
          points: ["Most-requested material moved early", "People told where to look"],
        },
      ],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 279 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "practices",
      eyebrow: "Keeping work running",
      heading: "Practices that stop a move from interrupting the organisation",
      items: [
        {
          heading: "Identify what must never be unavailable",
          summary: "Not every collection is equally critical to daily work.",
          icon: "flag",
          body: [
            "List the material whose absence would stop work almost immediately: current brand assets, live campaign files, anything a client or channel collects on a schedule. Those collections need the most careful timing and the most thorough checks.",
          ],
        },
        {
          heading: "Schedule around the calendar, not the archive",
          summary: "Order the move by the organisation’s busy periods as well as by what is technically convenient.",
          icon: "calendar",
          body: [
            "Moves are often sequenced by what is easiest to transfer. Sequencing around launches, peak seasons and reporting deadlines prevents a migration step from colliding with the moments that matter most to the business.",
          ],
        },
        {
          heading: "Keep a fallback until the result is confirmed",
          summary: "Retiring old storage early removes the safety net.",
          icon: "restore",
          body: [
            ["If something turns out to be missing after the old location has gone, the repair becomes a search for backups and personal copies. ", { text: "Migration verification", page: 296 }, " helps organisations confirm that important content and metadata have transferred correctly, and that confirmation is the sensible trigger for letting the fallback go."],
          ],
        },
        {
          heading: "Give people one route for reporting problems",
          summary: "Problems reported to whoever happens to be nearby tend to get lost.",
          icon: "message",
          body: [
            "During a move, reports of missing or misplaced files arrive through every channel at once. A single agreed route, with each report acknowledged, lets related problems be recognised as a pattern and fixed together rather than one frustrated message at a time.",
          ],
        },
        {
          heading: "Introduce one change at a time",
          summary: "Several reasonable changes in the same week add up to an unreasonable one.",
          icon: "layers",
          body: [
            "A new library, a new folder structure, new naming conventions and a new approval process can each be sensible. Arriving together, they compound. Staging them lets people absorb one change before meeting the next, and makes the cause of any problem much easier to find.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "own-decisions",
      eyebrow: "Before the move",
      heading: "Decisions to settle before anything moves",
      variant: "chips",
      items: [
        "Collections that must stay available",
        "Dates the move has to avoid",
        "Live projects left until last",
        "Connected systems needing new links",
        "Who approves each team’s switch",
        "Where people report missing files",
        "When old storage stops taking new work",
        "Who checks the migrated material",
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu migration support",
      items: [
        {
          question: "Should a migration pause when it starts disrupting work?",
          answer: "Not necessarily all of it. Pause the part causing the problem, such as a collection whose timing clashes with a deadline, and let unaffected work continue, since stopping everything tends to create a second disruption when the move restarts.",
        },
        {
          question: "How should a migration be explained to colleagues outside the creative team?",
          answer: "People in sales, web and customer teams often depend on creative material without ever working in the library. Tell them what is changing, when, and whom to contact if something they rely on goes missing, because they tend to notice disruption before anyone thinks to inform them.",
        },
        {
          question: "How can a team tell early that a migration is disrupting work?",
          answer: "Watch for signals that appear before complaints do: repeated requests for files that used to be easy to find, private copies reappearing, reviews drifting back to email. Each is an early sign that part of the move needs attention.",
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on moving without disrupting work",
      variant: "compact",
      pages: [281, 292, 296, 290, 298, 376],
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
