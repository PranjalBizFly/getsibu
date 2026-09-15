/**
 * 134 · Creative Migration — /storage/creative-migration
 *
 * Angle (cluster: migration-overview): leaving fragmented storage systems — the different kinds of
 * fragment a team holds, a route out for each, a sensible order, and why fragmented storage is hard to
 * leave. Creative Team Migration (298) owns the people side; Centralised Creative Asset Library (6) owns
 * the destination.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative storage fragments and how teams leave it; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 134,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Plan a migration path away from fragmented storage systems, with a route into GetSibu for each kind of fragment, from busy shared drives to finals that only exist in someone’s inbox.",
      visual: { diagram: "migration-map" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 134 }, { kind: "pdf", page: 127 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Leaving storage that grew in pieces",
      body: [
        "GetSibu provides a migration path for teams moving away from fragmented storage systems. The starting point is wherever the material sits today; the destination is a single, searchable creative library.",
        "Fragmentation is rarely a decision. It accumulates: a shared drive for the office, cloud folders for people working remotely, external disks for footage that would not fit anywhere else, transfer links from agencies and an older asset system that one department never stopped using. Each piece was reasonable when it appeared. Together they turn every search into a guess about location.",
        "Leaving is hard because the fragments differ. Some are live and written to every day, some are archives nobody has opened in years, and some exist only in people’s inboxes. One migration method seldom suits all of them, so a migration path is really a set of decisions, one for each kind of fragment.",
        [
          "Migration into GetSibu is intended for creative libraries held ",
          { text: "on shared drives, in cloud storage or in other asset management systems", page: 281 },
          ". Seen from the storage side, the result is ",
          { text: "centralised media storage", page: 150 },
          ": one environment for content from multiple storage sources that retains organisational structure and access controls.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Storage that accumulated in pieces", "Live locations and dormant archives", "One decision per kind of fragment", "A single library as the destination", "Old locations retired once verified"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketing department finds its brand photography split across a shared drive, several cloud folders and a former agency’s transfer links, and plans a separate route in for each.",
        tags: ["Marketing", "Shared drives", "Cloud folders"],
      },
      glance: {
        heading: "Creative migration in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Moves away from", value: "Fragmented storage systems" },
          { label: "Arrives in", value: "Centralised Creative Asset Library", page: 6 },
          { label: "People side", value: "Creative Team Migration", page: 298 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 134 }, { kind: "pdf", page: 281 }, { kind: "pdf", page: 150 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 298 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "fragments",
      eyebrow: "Where files are today",
      heading: "Each kind of fragment needs its own route out",
      tabs: [
        {
          label: "Shared drives",
          heading: "The office drive everyone half understands",
          icon: "server",
          body: [
            "Shared network drives usually hold the largest and oldest share of a team’s work, arranged by several generations of conventions. They are the natural candidate for a single large import with a folder map agreed beforehand.",
            [{ text: "Bulk asset import", page: 130 }, " can move a large existing library without anyone uploading each file, and the structure can be mirrored or remapped during import."],
          ],
          points: ["The largest and oldest material", "Moved in bulk with a folder map"],
        },
        {
          label: "Cloud folders",
          heading: "Storage that is still in daily use",
          icon: "cloud",
          body: [
            "Cloud folders are often live: people save into them and share links from them every day, so an abrupt stop disrupts work that has nothing to do with the migration.",
            ["GetSibu’s ", { text: "migration workflow", page: 292 }, " is designed to let organisations continue using existing storage while content is indexed in the background, which suits locations that cannot simply be frozen. Agree a date when saving there stops, so the folder and the library do not drift apart."],
          ],
          points: ["Locations still in daily use", "A date agreed for saving to stop"],
        },
        {
          label: "Local disks",
          heading: "Footage on drives sitting on a desk",
          icon: "database",
          body: [
            "External disks and workstation drives hold material that was too large or awkward for shared storage, often camera originals and finished project archives. They are the fragment most easily forgotten, because nobody but their owner can see them.",
            ["Their contents are often large files, and if one is uploaded over an unreliable connection, ", { text: "resumable uploads", page: 137 }, " help prevent the transfer from having to restart from the beginning after a network interruption."],
          ],
          points: ["Material only its owner can see", "Large files on uncertain connections"],
        },
        {
          label: "Inboxes and links",
          heading: "Deliveries that never reached shared storage",
          icon: "message",
          body: [
            "Finals from agencies, freelancers and photographers often exist only as email attachments or transfer links that will soon expire. The practical step is to ask people to gather the deliveries they still depend on before anything else is retired.",
            ["For those individual files and small batches, ", { text: "drag and drop upload", page: 127 }, " needs no integration to be configured."],
          ],
          points: ["Finals held in personal inboxes", "Added directly in small batches"],
        },
        {
          label: "Older systems",
          heading: "An asset system one department still uses",
          icon: "archive",
          body: [
            "A previous asset management system brings its own records: keywords, creators and descriptions held alongside the files. Leaving it is less about the files than about that accumulated context.",
            ["Metadata such as EXIF, XMP, creators and custom keywords ", { text: "can be retained during migration", page: 286 }, ", so an early task is finding out which of the old system’s records live inside the files and which exist only in its own database."],
          ],
          points: ["Records beyond the files", "Where each record lives, found out early"],
        },
      ],
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 286 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "order",
      eyebrow: "Sequence",
      heading: "A sensible order for leaving fragmented storage",
      surface: "muted",
      items: [
        { label: "Find every fragment", body: "Ask each team where its files really are, including disks, inboxes and personal cloud folders, and record who depends on each location." },
        { label: "Rank by risk and value", body: "Deal first with material that is valuable and exposed, such as finals on a single disk or deliveries in one person’s inbox, ahead of tidy archives." },
        { label: "Start with live locations", body: "Bring in the storage people use daily early on, so the library begins to reflect current work rather than only the past." },
        { label: "Gather the loose files", body: "Collect the deliveries and one-off files that never reached shared storage before the people holding them move on to other projects." },
        { label: "Verify and retire", body: "Confirm that important content and metadata transferred correctly, then retire each old location to discourage new work from drifting back into it.", page: 296 },
      ],
      sources: [{ kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "obstacles",
      eyebrow: "What gets in the way",
      heading: "Why fragmented storage is hard to leave",
      items: [
        {
          heading: "Nobody knows every location",
          summary: "The full list of storage exists only in pieces, in different people’s heads.",
          icon: "compass",
          body: [
            "Each person knows their own corner: the producer’s disks, the designer’s cloud folder, the manager’s inbox. A migration planned only from the storage an IT team manages will miss the fragments that matter most to individuals.",
          ],
        },
        {
          heading: "Copies that disagree",
          summary: "Fragments often hold different versions of the same asset.",
          icon: "copy",
          body: [
            ["The same logo may sit in several places, each slightly different. Deciding which is authoritative is a human judgement, but finding the candidates does not have to be: ", { text: "duplicate detection", page: 40 }, " identifies identical files and visually equivalent copies, including renamed or re-encoded ones."],
          ],
        },
        {
          heading: "Trust has to be earned",
          summary: "People keep private copies until the library shows it has what they need.",
          icon: "users",
          body: [
            ["If an early search in the new library fails, colleagues return to their drives and the fragments come back. Making sure the most-used assets are present before announcing the switch builds confidence, and once people can ", { text: "search across the entire creative library", page: 16 }, " instead of opening folders one at a time, the reason to keep private copies weakens."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 40 }, { kind: "pdf", page: 16 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative migration",
      items: [
        {
          question: "What if a fragment sits in storage belonging to a freelancer or agency?",
          answer: "Ask for the deliverables the team depends on to be handed over while the working relationship is still active. Storage the team does not control cannot be relied on to stay available, however long it has been used.",
        },
        {
          question: "How does creative migration relate to moving the team itself?",
          answer: ["Creative migration concerns the storage being left behind. ", { text: "Creative team migration", page: 298 }, " concerns the people making the same transition from fragmented folders into a structured creative library."],
        },
        {
          question: "How can a team tell whether a creative migration has reduced fragmentation?",
          answer: ["Watch where new work goes afterwards. ", { text: "Upload analytics", page: 184 }, " show how much new content is entering the library over time, which helps show whether work is arriving in the library or drifting back to the old locations."],
        },
      ],
      sources: [{ kind: "pdf", page: 298 }, { kind: "pdf", page: 184 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on leaving scattered storage",
      variant: "compact",
      pages: [281, 298, 6, 150, 130, 296],
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
