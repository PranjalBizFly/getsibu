/**
 * 293 · Migration Metadata Preservation — /migration/migration-metadata-preservation
 *
 * Angle (cluster: metadata-preservation): why metadata must not disappear in a move — where it slips away, what a
 * library loses and who notices. Metadata Migration (286) owns which fields to keep; Metadata Preservation (132) owns
 * the ingestion view; Creative Data Migration (288) owns context beyond metadata.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how metadata is lost in migrations and what that costs; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 293,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Why the information attached to original files has to survive a migration, the points in a move where it tends to slip away, and what a library loses, and who notices, when it does.",
      visual: { diagram: "migration-map", focus: "metadata" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 293 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The information that cannot simply be copied back",
      body: [
        "Preserving metadata ensures that valuable information associated with original files does not disappear during the move. A file can often be exported again or requested from whoever made it; the knowledge recorded around it usually exists in a single place.",
        "Losing metadata is quiet. A migrated image still opens, still looks right and still sits in a sensible folder, and nothing signals that its photographer, caption or campaign reference was dropped along the way. The damage surfaces later, when a search returns less than it should, a credit is missing from published work or nobody can say whether an image may be reused.",
        [
          "In GetSibu, metadata such as EXIF, XMP, file paths, creators and custom keywords ",
          { text: "can be preserved during migration", page: 132 },
          ". Choosing which of an organisation’s own fields deserve that care belongs to ",
          { text: "metadata migration", page: 286 },
          "; preservation is about making sure the chosen information actually arrives.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Knowledge held in one place only", "Loss that nobody notices at first", "Findability rests on metadata", "Credit and rights travel with it", "Risk at every hand-off", "Arrival checked, not assumed"],
      },
      highlight: {
        heading: "In practice",
        body: "Some time after a move, a brand team realises that images from its retired system no longer show their usage notes. The files are intact, but nobody can now tell which ones were cleared for advertising.",
        tags: ["Brand", "Rights", "Retired systems"],
      },
      glance: {
        heading: "Metadata preservation in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Protects", value: "Information attached to original files" },
          { label: "Choosing fields", value: "Metadata Migration", page: 286 },
          { label: "Everyday use", value: "Media Metadata Management", page: 22 },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 293 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 286 }, { kind: "pdf", page: 22 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "where-it-slips",
      eyebrow: "Hand-offs",
      heading: "Where responsibility for metadata changes hands in a move",
      stages: [
        { label: "Leaving the old system", body: "Whoever looks after the previous location knows which information lives outside the files. If that knowledge is not written down before they move on to other work, nobody later knows what to look for." },
        { label: "Preparing the transfer", body: "The person assembling each collection decides what actually travels, and every shortcut taken here, such as sending convenient copies in place of originals, removes information no later step can restore." },
        { label: "Arriving in the library", body: "The import is when the agreed information should come across, and the moment to note anything the plan expected that the source no longer held." },
        { label: "Checking the result", body: "Missing details do not show in a quick look at thumbnails, so the people who know the material need a deliberate check while the source still exists.", page: 296 },
        { label: "Everyday use", body: "The library’s keepers inherit whatever arrived. Gaps they were told about can be explained to colleagues and filled over time; gaps nobody recorded simply wait to be discovered." },
      ],
      sources: [{ kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "at-stake",
      eyebrow: "What is at stake",
      heading: "A migrated library with and without its metadata",
      beforeLabel: "Metadata lost in the move",
      afterLabel: "Metadata preserved",
      before: ["Searches that find only part of the collection", "Photographers and illustrators left uncredited", "Usage notes and restrictions gone", "No trace of where a file came from", "Keywords rebuilt by hand, if at all"],
      after: ["Carried-over details available to search", "Creators still associated with their work", "EXIF and XMP details kept with the files", "Old file paths kept as evidence of origin", "Custom keywords arriving with the files"],
      sources: [{ kind: "pdf", page: 132 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "who-notices",
      eyebrow: "Who notices",
      heading: "Who feels it when migrated metadata disappears",
      tabs: [
        {
          label: "Searchers",
          heading: "Results that quietly shrink",
          icon: "search",
          body: [
            "A search that once found every image from a campaign now returns the few that someone happened to name well. People rarely suspect the results are incomplete; they conclude the asset does not exist and make it again.",
            "The cost is paid in duplicated work rather than in any visible error, which is why it can continue for a long time before anyone connects it to the migration.",
          ],
          points: ["Incomplete results mistaken for absence", "Work recreated that already existed"],
        },
        {
          label: "Creators",
          heading: "Credit that no longer follows the work",
          icon: "user",
          body: [
            "When creator details vanish, authorship collapses to whoever ran the import. Photographers, illustrators and agencies lose visible credit, and colleagues lose the person they would ask about a shoot.",
            [{ text: "Asset ownership", page: 115 }, " provides context about who created or uploaded content, and that context is only as complete as the details that survived the move."],
          ],
          points: ["Credit lines lost", "Nobody left to ask about the work"],
        },
        {
          label: "Rights and legal",
          heading: "Restrictions nobody can see",
          icon: "shield",
          body: [
            "Usage notes, licence terms and embargo details often live in keywords or descriptions. Once they are gone, an image cleared for one market looks exactly like one cleared for every use. It can be the most costly loss of all, because it tends to be discovered after the asset has already been published.",
          ],
          points: ["Licence terms hidden in descriptions", "Misuse discovered too late"],
        },
        {
          label: "Library managers",
          heading: "Trust that is slow to rebuild",
          icon: "database",
          body: [
            "When colleagues find a few assets missing their details, they stop trusting the new library and start keeping private copies again. Preservation protects the library’s reputation as much as its data, and that reputation is formed in the early days of use.",
          ],
          points: ["Private copies creeping back", "Confidence lost early returns slowly"],
        },
      ],
      sources: [{ kind: "pdf", page: 115 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about migration metadata preservation",
      items: [
        {
          question: "Which metadata is hardest to recover if a migration loses it?",
          answer: "Anything people typed rather than devices recorded: keywords, captions, credits and usage notes. Capture dates and camera details can sometimes be read again from originals, whereas years of human description rarely can.",
        },
        {
          question: "Does preserving metadata make a migration more work?",
          answer: "It moves effort earlier more than it adds to the total. Time spent confirming what will travel is small beside the time needed to rebuild descriptions once they have gone.",
        },
        {
          question: "Can metadata lost in a migration be added back afterwards?",
          answer: "Some of it, if the original source still exists and someone knows what went missing. Credits and usage notes that lived only in a system that has since been switched off are usually gone for good.",
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping metadata intact",
      variant: "compact",
      pages: [286, 132, 22, 115, 296],
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
