/**
 * 91 · Creative Asset Versioning — /features/creative-asset-versioning
 *
 * Angle (cluster: versioning, primary): replacing an asset in place while earlier versions are retained, and why
 * that ends “final-final” filenames. File Version History (92) owns the record itself, Asset Replacement (93) what
 * replacement keeps, Version Restore (94) going back, and 97–99 the habits of each medium.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams name and revise files; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 91,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "Why creative files end up named “final-final”, and how replacing an asset in place, with its earlier versions retained, lets a revision take the current file’s place without throwing away the rounds before it.",
      visual: { diagram: "version-record", focus: "files" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 91 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One asset updated in place instead of a trail of “final” files",
      body: [
        "GetSibu allows a team to replace an asset in place while its previous versions are kept. The purpose is practical: it helps prevent the muddle that names such as “final”, “final-v2” and “final-final” leave behind.",
        "Those names are a symptom of how folders work rather than a sign of carelessness. In a folder, the only way to keep an earlier file while adding a new one is to save a second copy beside it, and the only way to tell the two apart is what they are called. Each round of feedback adds another suffix, until nobody can say with confidence whether “final-v3” came before or after “final-final-approved”.",
        [
          "Replacing in place removes the need for that naming scheme. The piece of work stays a single item in the library, and the files it replaced sit in its ",
          { text: "file version history", page: 92 },
          " rather than in the folder next to it. If a replacement turns out to be a step backwards, ",
          { text: "version restore", page: 94 },
          " covers returning to an earlier state.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Replace the asset, not the folder copy", "Earlier versions retained", "Filenames without round numbers", "One item per piece of work", "Versions, not variants"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer uploads the corrected poster over the current one. Colleagues who open the asset later get the corrected file, without choosing between three similarly named copies.",
        tags: ["Designers", "Marketing", "Production"],
      },
      glance: {
        heading: "Where versioning fits",
        facts: [
          { label: "Area", value: "Versioning & Asset Management" },
          { label: "Works on", value: "Video, images, documents and presentations" },
          { label: "Record kept", value: "File Version History" },
          { label: "Going back", value: "Version Restore" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 91 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 386 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 98 }, { kind: "pdf", page: 99 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "copies-or-versions",
      eyebrow: "The difference",
      heading: "What changes when a revision replaces the file",
      beforeLabel: "Saving a new copy for every round",
      afterLabel: "Replacing the asset in place",
      before: [
        "Several files with near-identical names",
        "The current file identified by a suffix",
        "Old rounds deleted to reduce clutter, or kept and confused",
        "Colleagues asking which copy is the real one",
      ],
      after: [
        "One asset for one piece of work",
        "The revision takes the current file’s place",
        "Previous versions held within the asset record",
        "Names that describe the content, not the round",
      ],
      sources: [{ kind: "pdf", page: 91 }, { kind: "pdf", page: 93 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "revision-rounds",
      eyebrow: "Step by step",
      heading: "A revision cycle without renamed copies",
      intro: "From the first draft to the round that is signed off, the work stays one asset.",
      steps: [
        { heading: "Add the first draft", body: "The draft enters the library under a plain, descriptive name, with no version suffix and no date of the edit.", icon: "upload" },
        { heading: "Collect the feedback", body: "Notes on the draft stay connected to the asset instead of being spread across email, chat and project tools.", icon: "message" },
        { heading: "Replace with the revision", body: "The designer puts the revised file in place of the draft, and the draft moves into the asset’s earlier versions rather than being lost.", icon: "refresh", page: 93 },
        { heading: "Repeat for later rounds", body: "Every further round follows the same pattern, adding a version to one record instead of another file to a folder.", icon: "history" },
        { heading: "Sign off the result", body: "The approval workflow lets the team mark the asset as approved once the changes are made.", icon: "approval", page: 67 },
      ],
      sources: [{ kind: "pdf", page: 73 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "What to consider",
      heading: "Versioning decisions worth making early",
      items: [
        {
          heading: "A new version or a new asset?",
          summary: "Versioning suits changes to the same piece of work, not different pieces that happen to look alike.",
          icon: "layers",
          body: [
            "A corrected headline, a colour fix or a tightened edit of the same film are versions: each supersedes something that should no longer be used. A translated brochure or a second edition made for a different audience usually sits beside the original, because both are needed at the same time.",
            "Treating those as versions would bury a file someone still needs behind a newer one, which is the opposite of what versioning is for.",
          ],
          points: ["Supersedes the old file: a version", "Needed alongside it: a separate asset"],
        },
        {
          heading: "What filenames are still for",
          summary: "Once rounds live in the asset record, a filename only has to say what the file is.",
          icon: "text",
          body: [
            "Names such as “spring-launch-hero” or “product-demo-cutdown” stay useful, particularly when a file is downloaded and travels outside the library. What they no longer need to carry is the round number, the edit date or the initials of whoever touched it last.",
            ["Plain, descriptive names also work well with ", { text: "creative asset search", page: 11 }, ", where the filename is one of several kinds of information a query can match."],
          ],
        },
        {
          heading: "Old copies you already have",
          summary: "Existing “final” variants do not tidy themselves up when a team starts versioning.",
          icon: "copy",
          body: [
            ["Libraries moved from shared drives often arrive with several copies of one piece. ", { text: "Duplicate detection", page: 40 }, " can identify identical files and visually equivalent copies, including renamed ones, which gives the team somewhere to start."],
            "Deciding which copy becomes the asset, and which are clutter, stays a human judgement, best made by someone who knows the history of the work.",
          ],
        },
        {
          heading: "A shared habit, not a personal one",
          summary: "The naming problem returns as soon as one person adds a revision beside the asset instead of replacing it.",
          icon: "users",
          body: [
            "Versioning only ends “final-final” files if everyone who revises a piece of work follows the same rule. When one designer replaces the asset and a colleague uploads “poster-v2” next to it, the team is back to two candidates and a filename to decode.",
            "Agreeing that a revision to an existing piece of work always replaces its asset, and saying so when people join a project, keeps the habit from splitting.",
          ],
          points: ["One rule for everyone who revises", "Explained to newcomers at the start"],
        },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative asset versioning",
      items: [
        {
          question: "What does replacing a creative asset in place actually involve?",
          answer: "A revised file takes the current file’s place within the same asset, and the file it replaced is retained as a previous version instead of being discarded.",
        },
        {
          question: "Does creative asset versioning work the same way for video, images and documents?",
          answer: [
            "The principle is the same, but each medium revises differently: editors deal in cuts, designers in retouches and layout changes, presentation owners in slides that change often. ",
            { text: "Video version management", page: 97 },
            ", ",
            { text: "image version management", page: 98 },
            " and ",
            { text: "document version management", page: 99 },
            " look at each in turn.",
          ],
        },
        {
          question: "When should a team start versioning its creative assets?",
          answer: "With the next revision of any piece of work. From that round on, the revised file replaces the current one and the earlier file is retained as a version, so the habit can begin without reorganising the whole library first.",
        },
      ],
      sources: [{ kind: "pdf", page: 91 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 98 }, { kind: "pdf", page: 99 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on versions and replacement",
      variant: "compact",
      pages: [92, 93, 94, 97, 369],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the vendor-neutral versioning explainer." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Order to Creative Chaos",
      conversionPage: 399,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 399 }],
    },
  ],
};

export default page;
