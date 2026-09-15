/**
 * 116 · Asset Attribution — /features/asset-attribution
 *
 * Angle (cluster: audit-history): creators and contributors staying associated with assets, preserving context
 * through collaboration (many hands on one asset) and migration (details lost in a move). Asset Ownership (115) owns
 * who created or uploaded; Contributor Analytics (185) owns participation across the library.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of attribution in collaborative creative work and library migration; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 116,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "Where credits for creative work tend to go missing, how an agency can assemble a campaign’s credits from its library rather than its invoices, and the steps that protect contributor details during a migration.",
      visual: { diagram: "migration-map", focus: "metadata" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 116 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Keeping the people behind the work attached to it",
      body: [
        "With GetSibu, creators and contributors can remain associated with assets, which preserves context as work passes between collaborators and moves between systems.",
        "Most finished creative assets are the work of several people. A campaign image may carry a photographer’s shot, a retoucher’s finish, a designer’s layout and a copywriter’s line, and the person who uploads the final file is often simply the last to touch it. Attribution comes under most pressure at two moments: while many hands are shaping an asset, and when a library is moved and the details that recorded those hands are easily left behind.",
        [
          "Attribution also feeds wider views of a library. ",
          { text: "Contributor analytics", page: 185 },
          " help organisations understand who is adding content and taking part in library activity, and ",
          { text: "asset history", page: 117 },
          " gives users a record of relevant changes and interactions.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Creators kept with their work", "Contributors beyond the uploader", "Context through collaboration", "Context through migration", "Credits and terms traceable later"],
      },
      highlight: {
        heading: "In practice",
        body: "A press office needs a credit for a photograph it is about to publish. The photographer is named on the asset, even though a designer was the one who uploaded the cropped version everyone uses.",
        tags: ["PR", "Photography", "Credits"],
      },
      glance: {
        heading: "Attribution in brief",
        facts: [
          { label: "Keeps", value: "Creators and contributors associated with assets" },
          { label: "Matters most during", value: "Collaboration and migration" },
          { label: "Starting point", value: "Asset Ownership", page: 115 },
          { label: "Moving a library", value: "Migrate to GetSibu", page: 281 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 116 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 117 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 281 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "where-lost",
      eyebrow: "Where attribution goes missing",
      heading: "Three ways the people behind an asset drop out of sight",
      tabs: [
        {
          label: "Many hands",
          heading: "The last person to touch a file is not its author",
          icon: "users",
          body: [
            "Collaboration blurs authorship. By the time a visual is final, it may have passed through a shoot, a retouch, a layout and a copy change, and each hand-over is a chance for earlier names to drop away.",
            ["The information that survives best is the information held in the asset record. Details such as ", { text: "creators and custom keywords", page: 22 }, " can become part of that record, so contributors noted there travel with the asset rather than living in a project email."],
          ],
          points: ["Each hand-over risks losing a name", "Contributors noted on the asset itself"],
        },
        {
          label: "A move",
          heading: "Details that do not survive being copied",
          icon: "database",
          body: [
            "Copying files between systems can leave embedded credit fields behind, and credits that lived only in folder names, such as an agency or a photographer’s shoot folder, disappear when folders are flattened.",
            "Nobody notices at the time, because the images look exactly the same. The loss surfaces much later, when someone needs a name and finds only a file.",
          ],
          points: ["Embedded fields dropped in transfer", "Credits held in folder names"],
          link: { page: 281, label: "Migrate to GetSibu" },
        },
        {
          label: "Time",
          heading: "Contributors who move on",
          icon: "clock",
          body: [
            "Freelancers finish their contracts, agencies change, and staff join other teams. Their work stays in the library long after they have gone, and a name on the asset is often the only thread leading back to the terms or the thinking behind it.",
            "Attribution recorded at the time costs a moment; reconstructing it years later can be impossible.",
          ],
          points: ["Freelancers and agencies change", "A name as the thread back to the terms"],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 281 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A campaign’s credits assembled from the assets, not from invoices",
      team: "An advertising agency",
      situation: "An agency produced a print and social campaign with a freelance photographer, an external retouching studio and its own designers and copywriters. Months later, the client asks for a full list of credits.",
      steps: [
        {
          heading: "The shoot arrived with its details",
          body: "The photographer’s selects were added to the library with the photographer named on every asset from the first day.",
        },
        {
          heading: "Contributors were noted as work changed hands",
          body: "When the retouching studio delivered its finished files, the account team added them with both the studio and the photographer named as keywords.",
        },
        {
          heading: "Layouts were kept as assets of their own",
          body: "The designers’ layouts combining those images were added as separate assets, naming the designer and copywriter responsible.",
        },
        {
          heading: "The credits were read from the library",
          body: "When the client asked, the account lead gathered names from the assets themselves rather than piecing them together from invoices and old email threads.",
        },
      ],
      outcome: "The client receives an accurate list, and the photographer and retouching studio are credited for work that might otherwise have been attributed to the agency alone.",
      link: { page: 219, label: "GetSibu for Advertising Agencies" },
      sources: [{ kind: "pdf", page: 116 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 219 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "process",
      id: "migration-steps",
      eyebrow: "Step by step",
      heading: "Protecting attribution before, during and after a library move",
      intro: "Attribution is cheapest to protect before the move and most expensive to rebuild afterwards.",
      steps: [
        { heading: "Find where credits live", body: "Before transferring anything, list where contributor information sits today: embedded file metadata, folder names, spreadsheets and people’s memories.", icon: "search", page: 289 },
        { heading: "Keep the embedded details", body: "Metadata such as EXIF, XMP, creators and custom keywords can be preserved during migration, so credit fields travel with the files.", icon: "tag", page: 132 },
        { heading: "Choose the folder structure knowingly", body: "Folder mapping lets a team keep its existing organisation or create a new one; if folder names carry credits, record them before any restructuring.", icon: "folder", page: 294 },
        { heading: "Check a sample afterwards", body: "Migration verification helps confirm that important content and metadata transferred correctly, and contributor details deserve a place in what is checked.", icon: "check", page: 296 },
        { heading: "Fill the gaps that matter", body: "For high-value assets still missing names, ask the people who commissioned the work while they remember it.", icon: "users" },
      ],
      sources: [{ kind: "pdf", page: 289 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 294 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset attribution",
      items: [
        {
          question: "How is asset attribution different from asset ownership?",
          answer: [{ text: "Asset ownership", page: 115 }, " provides context about who created or uploaded content. Attribution reaches further, to the retoucher, copywriter or studio whose names appear nowhere in the upload itself."],
        },
        {
          question: "Should in-house contributors be attributed as well as external ones?",
          answer: "Yes. In-house work is questioned later just as often as commissioned work, and recognising the designers, editors and writers behind it matters to the teams who produce it.",
        },
        {
          question: "Is asset attribution the same as a published credit line?",
          answer: "Not quite. Attribution in the library can record everyone who contributed, while a published credit follows the terms agreed with the creator and the conventions of the channel, and may name only some of them. A full record lets whoever writes the credit choose correctly.",
        },
      ],
      sources: [{ kind: "pdf", page: 115 }, { kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on credits, contributors and migration",
      variant: "compact",
      pages: [115, 185, 281, 132, 296, 219],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
