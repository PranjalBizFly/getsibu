/**
 * 129 · Automated Media Import — /storage/automated-media-import
 *
 * Angle (cluster: ingestion): reducing the manual movement of files between storage locations; why each
 * hand-made move creates copies and confusion, and where handling can be taken out of intake. Watch
 * folders (128) and connected sources (121) are described only as their own pages state them.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how files move between locations in creative teams; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 129,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Cut down the downloading, re-uploading and copying that carries files from one storage location to another, and see why each manual move can leave a library harder to trust.",
      visual: { diagram: "ingest-pipeline", focus: "sources" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 129 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Fewer hands carrying files between locations",
      body: [
        "Automated media import reduces the manual movement of files between storage locations. The aim is for files to reach the library without a person downloading them from one place and uploading them to another along the way.",
        "Manual movement is rarely one step. A file may be copied from a camera card to a laptop, from the laptop to a shared drive, then downloaded, edited and saved again before anyone adds it to a library. Each move is a chance to rename it, strip its embedded information or leave a slightly different copy behind, and each extra copy weakens the answer to a simple question: which one is right?",
        [
          "The cost is less the minutes spent moving than the confusion afterwards. That is the reasoning behind a ",
          { text: "centralised creative asset library", page: 6 },
          ": one location for assets from connected drives, local infrastructure and direct uploads reduces the confusion caused by disconnected versions of the same file.",
        ],
        [
          "Automated import is one strand of ",
          { text: "automated asset ingestion", page: 121 },
          ", the wider account of how assets reach GetSibu.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Fewer manual moves between locations", "Every move risks another copy", "Content imported from where it sits", "Handling taken out of routine intake", "Less doubt about the right version"],
      },
      highlight: {
        heading: "In practice",
        body: "An in-house studio stops downloading approved files from its shared drive only to upload them to the library again, and fewer stray copies collect on people’s desktops.",
        tags: ["In-house studios", "Operations", "Shared drives"],
      },
      glance: {
        heading: "Automated import in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Reduces", value: "Manual movement of files between storage locations" },
          { label: "Related route", value: "Watch Folder Ingestion", page: 128 },
          { label: "Wider goal", value: "Centralised Creative Asset Library", page: 6 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 129 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 6 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "journey",
      eyebrow: "Why it matters",
      heading: "One file’s journey when every move is made by hand",
      items: [
        { label: "Capture", body: "Footage or photographs are copied from a card to a laptop so editing can begin, and the card is kept just in case." },
        { label: "Shared drive", body: "A second copy goes to shared storage so colleagues can reach it, usually renamed to match somebody’s convention." },
        { label: "Handover", body: "Selected files are downloaded and sent to an agency or another department, creating copies outside the team’s own storage." },
        { label: "Revision", body: "Edited versions come back and are saved beside the originals under new names, with the old ones left in place." },
        { label: "Library", body: "Someone eventually uploads what they believe are the right files, by which time several copies disagree about what is current." },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "tabs",
      id: "removing-moves",
      eyebrow: "Where handling drops out",
      heading: "Moves that no longer need a person to make them",
      surface: "muted",
      tabs: [
        {
          label: "Watched locations",
          heading: "Saving a file instead of carrying it",
          icon: "refresh",
          body: [
            "A familiar manual move is also the smallest: saving a file in one location and then uploading it somewhere else. Where material lands in a predictable place, a watch folder scanned continuously lets newly added content enter the GetSibu workflow without that second step.",
          ],
          points: ["The separate upload removed", "Suited to predictable destinations"],
          link: { page: 128, label: "Watch Folder Ingestion" },
        },
        {
          label: "Existing storage",
          heading: "Importing from storage rather than rebuilding it",
          icon: "database",
          body: [
            "When a library already lives in cloud storage or on local infrastructure, the manual alternative is a long session of downloading and re-uploading, often combined with an attempt to recreate the old folders by hand.",
            ["Ingestion from connected storage sources is intended to spare teams that loop, and existing folder structures ", { text: "can be mirrored or remapped during import", page: 133 }, ", so the organisation work does not have to be repeated file by file."],
          ],
          points: ["No download-and-upload loop", "Previous folders mirrored or remapped"],
        },
        {
          label: "Other applications",
          heading: "Letting software hand files over",
          icon: "api",
          body: [
            ["Some assets are produced by systems rather than people, such as a rendering service, a product information tool or an in-house app. Exporting from those and uploading by hand is exactly the kind of repetitive task that ", { text: "developer automation", page: 278 }, " addresses with APIs and webhooks."],
            "The asset upload API allows external applications to send files into the GetSibu environment, so a system that creates assets can also deliver them.",
          ],
          points: ["Files sent by applications", "Repetitive exports automated"],
          link: { page: 262, label: "Asset Upload API" },
        },
        {
          label: "After import",
          heading: "Fewer reasons to move files again",
          icon: "copy",
          body: [
            ["Manual movement does not stop at the library. People copy files out to share them and save new copies whenever something changes. Teams can share ", { text: "saved searches and library views", page: 78 }, " without creating duplicate copies of the same files."],
            ["When work is revised, the asset can be ", { text: "replaced in place", page: 91 }, " while its previous versions are retained, instead of a new file joining the old one."],
          ],
          points: ["Views shared instead of files copied", "Revisions kept in one asset record"],
        },
      ],
      sources: [{ kind: "pdf", page: 128 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 278 }, { kind: "pdf", page: 262 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "hand-or-import",
      eyebrow: "What changes",
      heading: "Carrying files by hand compared with importing them",
      beforeLabel: "Moved by hand",
      afterLabel: "Imported into GetSibu",
      before: ["A copy left behind at every handover", "Files renamed on each move", "Embedded details lost in re-saves", "Uploads that depend on memory", "Old storage switched off before the new is ready"],
      after: ["Fewer copies to reconcile", "Media processed without anyone starting it", "Status that shows what is ready to search", "Existing storage still usable during a migration", "One environment spanning several sources"],
      sources: [{ kind: "pdf", page: 2 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 150 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about automated media import",
      items: [
        {
          question: "Does automated media import mean nobody checks what arrives?",
          answer: ["No. Automation takes over the carrying, not the judgement: someone still decides which locations feed the library, and tags suggested during processing can be ", { text: "reviewed, approved or overridden", page: 31 }, " by authorised users."],
        },
        {
          question: "What about copies that earlier manual moves already left in the library?",
          answer: ["They can be found. ", { text: "Duplicate detection", page: 40 }, " combines exact and perceptual hashing to identify identical files and visually equivalent copies, even where a copy was renamed or re-encoded along the way."],
        },
        {
          question: "Does automated media import keep a record of where each file came from?",
          answer: ["File paths are among the metadata that ", { text: "can become part of an asset record", page: 22 }, ", which can keep a file’s previous location with it after it arrives."],
        },
        {
          question: "When is moving a file by hand still the right choice?",
          answer: ["For a genuinely one-off file, such as a single delivery from a partner, adding it by ", { text: "drag and drop upload", page: 127 }, " is simpler than arranging anything automatic."],
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 127 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reducing manual file handling",
      variant: "compact",
      pages: [128, 121, 6, 130, 150, 127],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
