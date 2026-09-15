/**
 * 232 · GetSibu for Media Companies — /use-cases/media-companies
 *
 * Angle (cluster: uc-communications): archive-scale collections across video, image, audio and documents, where past
 * output is future raw material and live work, approved output, licensed material and archive must stay distinct.
 * Newsrooms (233) own fast archive search by topic, person and event metadata; Corporate Communications (240) owns a
 * company's public-facing source of truth.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how media companies typically produce, license and reuse content; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 232,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a media company can keep very large collections of video, images, audio and documents in one library built for scale, with work in progress, licensed material and past output kept distinct.",
      visual: { diagram: "media-library", focus: "video,image,audio,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 232 }, { kind: "pdf", page: 302 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "An archive that keeps earning its place",
      body: [
        "GetSibu gives media companies a way to manage large collections that span video, images, audio and documents.",
        "For a media company, yesterday’s output is tomorrow’s raw material. Programmes are re-cut, photographs return on anniversaries, interviews resurface as podcast episodes and old reports inform new investigations. That value depends on finding material years later, across formats that different desks produced in different systems, while licences quietly limit what may be reused.",
        [
          "Scale is the first test. GetSibu’s ",
          { text: "creative asset infrastructure", page: 302 },
          " is designed to support large collections of creative content while maintaining search and preview performance, and its architecture ",
          { text: "supports storage growth", page: 308 },
          ", which matters for an archive that expands every day the company publishes.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Four formats in one archive", "Work in progress kept apart from output", "Raw material kept beside output", "Indexing in the background", "Archive growth kept in view"],
      },
      highlight: {
        heading: "In practice",
        body: "When an anniversary feature needs photographs, audio and footage from one story, a producer searches a single archive instead of asking three desks what they kept.",
        tags: ["Archivists", "Producers", "Editors"],
      },
      glance: {
        heading: "Media companies in brief",
        facts: [
          { label: "Team", value: "Broadcasters, publishers and digital media companies" },
          { label: "Typical material", value: "Video, photography, audio and documents" },
          { label: "Builds on", value: "Large Library Performance", page: 309 },
          { label: "Supports", value: "Creative Library Trends", page: 187 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 232 }, { kind: "pdf", page: 302 }, { kind: "pdf", page: 308 }, { kind: "pdf", page: 309 }, { kind: "pdf", page: 187 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "library-layers",
      eyebrow: "Structure",
      heading: "The layers of a media company’s library",
      layers: [
        { label: "Work in progress", body: "Material for stories and programmes still in production can sit in folders that stay private until access is explicitly granted, so unpublished work is not exposed by default.", page: 154 },
        { label: "Approved output", body: "Content that has completed the required review can be gathered in approved-only views, which is what colleagues elsewhere in the company should reuse.", page: 103 },
        { label: "Raw material", body: "Interview rushes, unused takes and outtakes often prove more valuable later than anyone expects, and videos can be indexed and enriched with AI-generated information so that footage is discoverable without reviewing every file.", page: 25 },
        { label: "Archive", body: "Older output is archived, retained for future reuse without getting in the way of everyday discovery on current work.", page: 108 },
        { label: "Rules across every layer", body: "Data governance establishes rules around access, retention, usage and asset management that hold whichever layer an asset sits in.", page: 339 },
      ],
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 339 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "Built for volume",
      heading: "What a media company needs at archive scale",
      items: [
        {
          heading: "Parallel uploads",
          body: "Parallel upload workflows can make batch ingestion more efficient when a day’s output arrives from several desks at once.",
          icon: "upload",
          points: ["Batches moved side by side", "Suited to heavy daily intake"],
          page: 142,
        },
        {
          heading: "Background processing",
          body: "Assets can be indexed in the background, so nobody has to perform metadata or AI processing by hand before material becomes useful.",
          icon: "refresh",
          points: ["No manual indexing step", "Processing kept out of the way"],
          page: 311,
        },
        {
          heading: "Processing status",
          body: "Status information separates an asset that has uploaded from one that is fully indexed and searchable, which matters when large volumes arrive together.",
          icon: "clock",
          points: ["Uploaded versus searchable", "Clarity during big intakes"],
          page: 145,
        },
        {
          heading: "Audio in the same archive",
          body: "Audio assets are managed alongside the rest of the collection, so podcasts, interviews and music beds are not split off into a separate system.",
          icon: "audio",
          points: ["Audio beside video and print", "One archive to search"],
          page: 28,
        },
        {
          heading: "Storage growth analytics",
          body: "Historical context on how quickly the library is expanding helps plan the storage that future output will need.",
          icon: "trend",
          points: ["Growth tracked over time", "An input to planning"],
          page: 149,
        },
        {
          heading: "Library health analytics",
          body: "Library health analytics can reveal growth, duplicates, inactive content and other organisational patterns across a very large collection.",
          icon: "gauge",
          points: ["Duplicates brought to light", "Inactive content identified"],
          page: 196,
        },
      ],
      sources: [{ kind: "pdf", page: 142 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 196 }],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Merging the archives of two titles",
      team: "A media company",
      situation: "A media company brings two of its titles under one editorial team. Each has years of photography, video, audio and documents in its own storage, organised its own way, and neither can stop publishing while the archives are combined.",
      steps: [
        {
          heading: "Publishing carries on during the move",
          body: ["GetSibu’s migration workflow is ", { text: "designed to let organisations keep using existing storage", page: 292 }, " while content is indexed in the background, so both titles go on publishing during the move."],
        },
        {
          heading: "Two folder trees become one",
          body: ["During the migration, the titles’ structures are ", { text: "remapped", page: 294 }, " into a single arrangement the joint team has agreed."],
        },
        {
          heading: "Credits stay with the material",
          body: ["Creators, custom keywords and other ", { text: "metadata can be retained", page: 286 }, ", so each title’s credits and keywords can stay attached to its photographs and recordings."],
        },
        {
          heading: "The transfer is checked",
          body: ["Before the old storage is retired, ", { text: "migration verification", page: 296 }, " helps the team confirm that important content and metadata transferred correctly."],
        },
        {
          heading: "Shared coverage turns up twice",
          body: ["Both titles covered many of the same stories, so ", { text: "duplicate detection", page: 40 }, " identifies identical and visually equivalent photographs held by each."],
        },
      ],
      outcome: "The joint team works from one archive with a structure it chose and both titles’ history intact, without having to stop publishing to make the move.",
      link: { page: 292, label: "Migration Without Downtime" },
      sources: [{ kind: "pdf", page: 292 }, { kind: "pdf", page: 294 }, { kind: "pdf", page: 286 }, { kind: "pdf", page: 296 }, { kind: "pdf", page: 40 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "Questions of scale to answer before the archive moves",
      items: [
        {
          heading: "Which desks share what",
          summary: "A shared archive does not mean every desk sees every folder.",
          icon: "users",
          body: [
            "News, features, video and audio teams may share an archive while keeping current work apart, particularly where investigations or embargoed material are involved. The structure should follow how desks actually work, not an organisation chart that will change.",
            [{ text: "Folder access maps", page: 173 }, " help an organisation understand how folders are accessed across its teams, which shows whether the arrangement matches real use."],
          ],
        },
        {
          heading: "Where credits and conditions are recorded",
          summary: "A licence nobody wrote down is a licence nobody can respect.",
          icon: "flag",
          body: [
            "Agency photographs, syndicated clips and commissioned music arrive with credits and conditions. They are easiest to capture when material enters the library, not years later when someone wants to reuse it.",
            [{ text: "Asset attribution", page: 116 }, " keeps creators and contributors associated with assets, so a credit is still there when the material is picked up again."],
          ],
        },
        {
          heading: "How much of the back catalogue to bring in",
          summary: "Not every item in an old archive justifies the storage it would use.",
          icon: "archive",
          body: [
            "Some archive material is reused constantly; some has not been opened in years. Bringing everything in is simple to plan but fills storage with material nobody opens; selecting first takes editorial judgement the archive team may not have time for.",
            [{ text: "Migration planning", page: 290 }, " is where that choice belongs: assets, metadata and permissions are considered before the transfer begins, not sorted out afterwards."],
          ],
        },
        {
          heading: "Search for people who did not catalogue it",
          summary: "Producers on deadline search differently from the archivists who described the material.",
          icon: "search",
          body: [
            "Archivists describe material precisely; a producer in a hurry types whatever they remember. An archive that only answers precise queries serves the first group and frustrates the second.",
            [{ text: "Semantic creative search", page: 14 }, " lets someone describe the asset they want in natural language, interpreted through available embeddings and AI-generated media information rather than exact keyword matches alone."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 173 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 290 }, { kind: "pdf", page: 14 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for media companies",
      items: [
        {
          question: "Can a media company search the text inside scanned cuttings and page proofs?",
          answer: ["Where OCR can read it, ", { text: "text extracted from images and documents", page: 38 }, " becomes part of an asset’s searchable information, which suits scanned cuttings and page proofs."],
        },
        {
          question: "Can a media company work with its asset library from its own software?",
          answer: ["The ", { text: "GetSibu API", page: 261 }, " provides programmatic access to the platform, and organisations can ", { text: "build custom applications", page: 279 }, " around it. Whether a particular system can be connected is worth confirming during an evaluation."],
        },
        {
          question: "Can a media company protect its archive with multi-factor authentication?",
          answer: ["Yes. ", { text: "MFA", page: 336 }, " adds another layer of account protection, which is worth having on an archive that also holds unpublished material."],
        },
        {
          question: "Can a media company see which kinds of archive material get reused?",
          answer: [{ text: "Asset performance insights", page: 204 }, " help teams identify patterns in asset usage, a starting point for seeing which parts of the archive earn a second life."],
        },
      ],
      sources: [{ kind: "pdf", page: 38 }, { kind: "pdf", page: 261 }, { kind: "pdf", page: 279 }, { kind: "pdf", page: 336 }, { kind: "pdf", page: 204 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for media archives at scale",
      variant: "compact",
      pages: [302, 292, 25, 149, 233, 240],
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
