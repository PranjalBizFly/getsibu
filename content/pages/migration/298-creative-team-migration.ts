/**
 * 298 · Creative Team Migration — /migration/creative-team-migration
 *
 * Angle (cluster: migration-overview): the people side of moving from fragmented folders — the needs those folders
 * met, what the change asks of each role, and how trust in a structured library is earned. Creative Migration (134)
 * owns leaving the storage; DAM Onboarding (297) owns the onboarding sequence and first habits.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams experience a move away from scattered folders; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 298,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Help a creative team leave its scattered folders behind: why people hold on to private copies and memorised paths, what the change asks of each role, and how a structured library can meet the needs those folders quietly served.",
      visual: { diagram: "migration-map" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 298 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Moving people, not only files",
      body: [
        "Teams can transition from fragmented folders into a structured creative library. Files can be moved through a planned import; the ways of working built around those folders take longer to change, because they belong to people rather than to storage.",
        "Fragmented folders persist for reasons. Each personal stash of finals, each desktop folder of favourite shots and each carefully named drive answered a real need: speed, certainty, privacy or insurance against someone else’s mistake. Telling a team to stop using them without meeting those needs tends to produce a tidy new library sitting beside the same private folders as before.",
        [
          "Leaving the storage itself is the subject of ",
          { text: "creative migration", page: 134 },
          ". The team’s side is about what changes in each person’s working week as they begin to work from ",
          { text: "a shared source of truth", page: 10 },
          " instead of their own corner of a drive.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Folders that met real needs", "Knowledge held by a few people", "Private copies as insurance", "What each role gains and gives up", "Trust built by early successes", "Old habits retired deliberately"],
      },
      highlight: {
        heading: "In practice",
        body: "A senior designer keeps a desktop folder of every approved logo because the shared drive once served an outdated one. The move succeeds for her only once the library, rather than her desktop, is where she trusts the current logo to be.",
        tags: ["Designers", "Approved assets", "Trust"],
      },
      glance: {
        heading: "Team migration in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Moves from", value: "Fragmented folders" },
          { label: "Moves into", value: "A structured creative library" },
          { label: "First steps in the library", value: "DAM Onboarding", page: 297 },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 298 }, { kind: "pdf", page: 134 }, { kind: "pdf", page: 10 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "roles",
      eyebrow: "Who it changes",
      heading: "What the transition asks of each role, and what it gives back",
      tabs: [
        {
          label: "Designers",
          heading: "From favourite folders to searches they trust",
          icon: "palette",
          body: [
            "Designers often keep the most personal folders: references, approved logos, past campaign layouts, the shot they always reuse. Giving those up feels risky until the library proves it can return the same material just as quickly.",
            ["Finding work by what it contains narrows that gap, because ", { text: "creative asset search", page: 11 }, " draws on filenames, metadata, OCR, AI-generated tags, comments and semantic information rather than on a remembered path."],
          ],
          points: ["Reference folders given up last", "Search built on what people remember"],
        },
        {
          label: "Editors",
          heading: "From versions in filenames to versions in one record",
          icon: "film",
          body: [
            "Editors track cuts through naming habits and dated folders, and they worry about anyone touching a working file. For them the change is trusting that a replacement does not erase what came before.",
            ["With ", { text: "video version management", page: 97 }, ", teams can manage different cuts and revisions while the version history stays associated with the asset."],
          ],
          points: ["Naming habits replaced by history", "Earlier cuts kept within reach"],
        },
        {
          label: "Marketers",
          heading: "From asking around to finding approved material",
          icon: "megaphone",
          body: [
            "Marketers are frequently the people asking others where things are, so their gain is the largest and the most immediate: fewer messages chasing files, fewer outdated assets sent to partners.",
            ["Their risk is picking whatever appears first. ", { text: "Approved-only views", page: 103 }, " let teams give people access to content that has completed the required review process."],
          ],
          points: ["Fewer messages chasing files", "Finished work told apart from drafts"],
        },
        {
          label: "The keeper",
          heading: "From the person who knows to one of many who can find",
          icon: "user",
          body: [
            "Most teams have someone who knows where everything is. That person is interrupted constantly and holds an informal authority the transition will change. Involve them early, because their endorsement persuades colleagues more than any announcement.",
            ["What they know should shape the structure and end up in the library itself, for instance as the vocabulary behind a ", { text: "scalable taxonomy", page: 8 }, " of hierarchical tags and synonyms."],
          ],
          points: ["Knowledge moved onto the assets", "An endorsement that persuades others"],
        },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "why-folders-persist",
      eyebrow: "Why old folders linger",
      heading: "Needs that scattered folders met, and how a library can meet them",
      items: [
        {
          heading: "“I know exactly where it is”",
          summary: "A memorised path feels faster than any search.",
          icon: "compass",
          body: [
            "For familiar material, a path someone knows by heart really is quick. The library wins on everything else: work made by colleagues, material from before someone joined, anything filed by a person who has since left.",
            ["People who prefer to browse lose nothing either. ", { text: "Creative library navigation", page: 29 }, " lets users move between broad exploration through library views, folders, tags and collections and highly specific discovery."],
          ],
        },
        {
          heading: "“My copy is safe”",
          summary: "Private copies are insurance against changes someone else might make.",
          icon: "restore",
          body: [
            "People keep their own copies because shared files have been overwritten, moved or deleted before. The insurance is rational; it simply multiplies versions and hides which one is current.",
            ["A library earns that trust when a change can be undone: ", { text: "older versions can be restored", page: 94 }, " when a team needs to return to a previous creative state."],
          ],
        },
        {
          heading: "“Nobody else should see this yet”",
          summary: "Work in progress often sits in personal folders to keep it private.",
          icon: "lock",
          body: [
            ["Drafts, pitches and unreleased products are kept away from shared drives because shared usually meant visible to everyone. In GetSibu, ", { text: "new folders can stay private", page: 154 }, " until access is explicitly granted, so sensitive work can happen inside the library rather than beside it."],
          ],
        },
        {
          heading: "“It is already on my machine”",
          summary: "Local files open without waiting.",
          icon: "image",
          body: [
            "Local copies are quick to open, which matters most for heavy media. Removing that advantage without an alternative sends people straight back to their disks.",
            ["Lighter ways of looking help: ", { text: "thumbnails", page: 146 }, " provide fast visual previews without anyone downloading the original file."],
          ],
        },
        {
          heading: "“There is no time to change”",
          summary: "Deadlines make any new habit feel like a cost.",
          icon: "calendar",
          body: [
            "A transition timed against a launch tends to lose. Agree with each team when the change happens, keep that period clear of avoidable deadlines where possible, and make the first library tasks ones that save time straight away, such as finding approved material for a live request.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 29 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 146 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An in-house team retires its desktop folders",
      team: "An in-house creative team",
      situation: "An in-house team of designers, a video editor and a marketing lead has worked for years from a shared drive plus personal desktop folders. One long-serving designer is the person everyone asks.",
      steps: [
        { heading: "The keeper shapes the structure", body: "The long-serving designer walks the library lead through how work is really organised, and the new folders and vocabulary are built around those explanations." },
        { heading: "Private folders are gathered, not confiscated", body: "Each person lists what their desktop folders hold. Finals that exist nowhere else go into the library; personal references stay personal for now." },
        { heading: "Review moves in with the files", body: ["The video editor places a new cut in the library, and colleagues leave ", { text: "asset comments", page: 62 }, " on it instead of replying to an email thread."] },
        { heading: "Old paths lose their purpose", body: "Once everyday requests are answered from the library, the shared drive stops receiving new work, and the designer is asked where things are far less often." },
      ],
      outcome: "The team works from one structured library in which the keeper’s knowledge now lives in folders, tags and asset records, and nobody needs a desktop folder to find approved work.",
      link: { page: 222, label: "GetSibu for In-House Creative Teams" },
      sources: [{ kind: "pdf", page: 298 }, { kind: "pdf", page: 62 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative team migration",
      items: [
        {
          question: "Should people be asked to delete their personal copies during a creative team migration?",
          answer: "Rarely at the start. Deleting copies before the library has earned trust tends to push them somewhere less visible; it works better to let copies fall out of use and ask people to clear them once they have gone unopened for a while.",
        },
        {
          question: "What if the most experienced person resists a creative team migration?",
          answer: "Treat the objections as design input. Experienced colleagues usually object to specific losses, such as a structure they understand or a quick route to favourite material, and addressing those losses directly tends to turn critics into advocates.",
        },
        {
          question: "How can a creative team migration keep its momentum after the first weeks?",
          answer: "Return to the private folders people listed at the start and ask which are still in use. Each one retired shows the library now meets that need, and each one still open points to a gap worth fixing.",
        },
        {
          question: "Is a creative team migration different for a very small team?",
          answer: "The steps are the same, only lighter. In a small team the keeper of knowledge and the library lead may be one person, and the risk shifts from resistance to drift: with nobody looking after the library, private folders creep back quietly.",
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on moving a team into the library",
      variant: "compact",
      pages: [134, 297, 282, 103, 94, 222],
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
