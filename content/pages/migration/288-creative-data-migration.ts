/**
 * 288 · Creative Data Migration — /migration/creative-data-migration
 *
 * Angle (cluster: migration-overview): preserving valuable context while moving large libraries — what context
 * means for creative data, where it sits in different kinds of material and what helps it survive at scale.
 * Metadata Migration (286) owns field decisions, Migration Metadata Preservation (293) why metadata must not vanish,
 * Large Library Migration (131) the storage view of scale, Creative Library Migration (282) the destination.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of the context that surrounds creative files and how it is lost or kept in large moves; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 288,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Understand what context means for creative data, where it sits in footage, photography, documents and audio, and which parts of it a large library cannot afford to lose on the way into GetSibu.",
      visual: { diagram: "migration-map" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 288 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Moving the meaning along with the media",
      body: [
        "Creative data migration helps organisations move large libraries while preserving valuable context. In a creative collection, context is what turns a file into something a colleague can use: who made it, what it was made for, what it belongs with and where it has been.",
        "Scale is what puts that context at risk. In a small shared folder, a person can repair a missing credit or rebuild a project from memory. Across a collection assembled over many years by many teams, anything that fails to arrive is effectively gone, because nobody has the time to reconstruct it file by file.",
        [
          "Separate pieces of that context carry their own decisions: ",
          { text: "metadata migration", page: 286 },
          " chooses which fields come across, and ",
          { text: "folder structure migration", page: 287 },
          " decides the fate of the tree. Creative data migration looks across all of them and asks what a large collection needs in order to still make sense once it has arrived.",
        ],
      ],
      keyPoints: {
        heading: "Kinds of context",
        items: ["Authorship and credit", "Purpose: campaign, client or brief", "Relationships between files", "Origin and previous location", "Descriptions built up over years", "Structure that groups related work"],
      },
      highlight: {
        heading: "In practice",
        body: "A studio discovers that a whole period of older images carries its photographer credit only in the folder name. Retyping those credits afterwards would take longer than anyone can give, so keeping that folder grouping intact becomes a requirement of the move.",
        tags: ["Studios", "Credits", "Large libraries"],
      },
      glance: {
        heading: "Creative data migration in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Protects", value: "The context around large collections" },
          { label: "Scale in storage terms", value: "Large Library Migration", page: 131 },
          { label: "Context carried", value: "Metadata, credits, origins and groupings" },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 288 }, { kind: "pdf", page: 286 }, { kind: "pdf", page: 287 }, { kind: "pdf", page: 131 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "by-material",
      eyebrow: "By material",
      heading: "Where the valuable context sits in each kind of creative data",
      tabs: [
        {
          label: "Footage",
          heading: "Context spread across many related files",
          icon: "film",
          body: [
            "Video rarely lives as one file. Rushes, selects, graded masters, channel exports and the music licensed for a cut all belong to one piece of work, often tied together only by a project folder and naming habits. The relationship between those files is the context most worth protecting, together with who shot and edited the material.",
            "Those ties are often understood by an editor or two and nobody else, so write them down before the project folders are touched.",
          ],
          points: ["Masters and exports kept recognisably together", "Credits for shooting and editing"],
        },
        {
          label: "Photography",
          heading: "Credits, captions and capture details",
          icon: "camera",
          body: [
            "A photograph’s context is dense and mostly embedded: capture details from the camera, captions and keywords added in cataloguing software, a credit line and sometimes usage restrictions. Much of it is invisible until somebody goes looking, which is why it is so easily stripped by a careless export.",
            ["Most of it sits in the kinds of metadata that ", { text: "can be preserved during migration", page: 132 }, ": EXIF, XMP, creators, file paths and custom keywords."],
          ],
          points: ["Embedded details that travel inside files", "Credit lines that protect rights"],
        },
        {
          label: "Documents",
          heading: "Which file was the one that went out",
          icon: "document",
          body: [
            "Presentations, layouts and brand documents gather context through revision: which file was approved, which was the working source, which was sent to a client. Filenames often tell that story with words like “final” and “sent”. Deciding before the move which files are the record and which are working clutter keeps the story without importing the confusion.",
          ],
          points: ["The approved file told apart from drafts", "Naming habits read before they are lost"],
        },
        {
          label: "Audio",
          heading: "Licences and the work a sound belongs to",
          icon: "audio",
          body: [
            ["Music beds, voiceovers and sound effects are often licensed for a particular use and stored away from the video they serve. Their context is that licence and that link. Because ", { text: "audio can be managed alongside other creative formats", page: 28 }, ", a migration can bring sound into the same library as the pictures it accompanies."],
          ],
          points: ["Licence terms planned for explicitly", "Sound kept close to the work it serves"],
        },
      ],
      sources: [{ kind: "pdf", page: 132 }, { kind: "pdf", page: 28 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "what-helps",
      eyebrow: "In GetSibu",
      heading: "What helps context survive a large move",
      items: [
        {
          heading: "Groupings that stay together",
          body: "A large library can be migrated with its existing folder relationships preserved, so work that sat together for years can still be found together.",
          icon: "folder",
          page: 131,
          points: ["Project folders kept as groups", "Related files near each other"],
        },
        {
          heading: "Credit that stays attached",
          body: "Creators and contributors can remain associated with assets during migration, so a credit recorded years ago still sits with the work it describes.",
          icon: "user",
          page: 116,
          points: ["Credits kept with the work", "A lead for questions about it"],
        },
        {
          heading: "A trace of where files lived",
          body: "File paths can become part of the asset record, keeping evidence of each file’s previous location after the collection has moved.",
          icon: "history",
          page: 22,
          points: ["Old locations kept as information", "Useful when the tree changes"],
        },
        {
          heading: "Copies recognised as copies",
          body: "Duplicate detection can identify identical files and visually equivalent copies, including renamed or re-encoded ones, which matters when one copy of a piece of work carries its credit and another its keywords.",
          icon: "copy",
          page: 40,
          points: ["Context scattered across copies spotted", "Renamed copies included"],
        },
      ],
      sources: [{ kind: "pdf", page: 131 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 40 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An events archive moved as events, not as folders",
      team: "An event company’s content team",
      situation: "An event company is moving years of photography, presentations and recordings that different teams filed in their own ways. Much of the archive’s value lies in knowing which items came from the same event, who captured them and how they may be reused.",
      steps: [
        { heading: "The teams agree what must survive", body: "Producers and marketers settle the context that has to arrive: the event each item belongs to, the photographer or speaker involved and any limits on reuse." },
        { heading: "Scattered events are traced", body: "Where one event’s photographs, slides and recordings sit in different teams’ folders, the shared references in folder and file names are noted before anything moves." },
        { heading: "The archive arrives in bulk", body: ["The collection comes across through ", { text: "bulk import", page: 291 }, " rather than through anyone uploading individual files."] },
        { heading: "Events become shared tags", body: ["Event and series references are organised as ", { text: "hierarchical tags", page: 8 }, ", so material that different teams filed separately can be gathered under one event."] },
        { heading: "Long-finished events step aside", body: ["Material from past events that nobody expects to reuse is ", { text: "archived", page: 108 }, ", which keeps it available without letting it interfere with everyday discovery."] },
      ],
      outcome: "The archive arrives organised around the events it records rather than around whoever filed each folder, and the team can gather past coverage of an event together with the credits and reuse limits it needs.",
      link: { page: 236, label: "GetSibu for Event Companies" },
      sources: [{ kind: "pdf", page: 291 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 236 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative data migration",
      items: [
        {
          question: "Can AI analysis make up for context lost in a creative data migration?",
          answer: ["Only in part. ", { text: "AI media understanding", page: 43 }, " can interpret the content of visual assets and make it searchable, but no analysis of an image reveals who commissioned it or which licence applies."],
        },
        {
          question: "Is context worth preserving for material that will be archived after a creative data migration?",
          answer: "Often more so than for current work. Archived material is consulted rarely and usually by people who had no part in making it, so its credits, purpose and relationships may be all they have to go on.",
        },
        {
          question: "What if the person who understands a collection is leaving before the creative data migration?",
          answer: "Move their collections up the plan and spend time with them before they go, walking through the material and writing down the projects, credits and relationships they can explain. Once they have left, that context rarely survives in the files alone.",
        },
      ],
      sources: [{ kind: "pdf", page: 43 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping context through a move",
      variant: "compact",
      pages: [131, 132, 116, 286, 287, 108],
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
