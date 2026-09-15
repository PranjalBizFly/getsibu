/**
 * 264 · Asset Metadata API — /developers/asset-metadata-api
 *
 * Angle (cluster api-endpoints): asset information exposed so external systems can work with metadata
 * programmatically — which kinds of information other systems use, and how meaning survives the crossing.
 * Never claims which fields the API returns; that is confirmed in documentation.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of metadata exchange between systems in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 264,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "How exposing GetSibu asset information lets external systems work with metadata programmatically, which kinds of information those systems tend to need, and how to keep its meaning intact as it moves between them.",
      visual: { diagram: "api-flow", focus: "metadata" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 264 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Details the library holds, used by the systems around it",
      body: [
        "The API can expose asset information so that external systems can work with metadata programmatically. A catalogue, a website or a records system can then draw on details the library already keeps, instead of maintaining its own slightly different account of them.",
        "Much of a file’s usefulness outside the creative team lies in its metadata. A picture on a website needs a credit and a description; a product page needs to know which images belong to which item; a legal team needs to know who made something. When those details are retyped into every system, they drift apart and nobody can say which version is right.",
        [
          "Any connection is only as good as the record behind it. GetSibu provides ",
          { text: "a structured environment", page: 4 },
          " where assets can be organised through folders, tags, collections, metadata and permissions, and the care a library team puts into that record benefits every system that later draws on it.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Asset information exposed to other systems", "Metadata handled programmatically", "One record rather than many copies", "Meaning kept intact between systems", "Fields confirmed before building"],
      },
      highlight: {
        heading: "In practice",
        body: "Before connecting a product catalogue, a developer lists every detail the catalogue currently has retyped by hand and checks which of them the library already keeps.",
        tags: ["E-commerce", "Catalogues", "Developers"],
      },
      glance: {
        heading: "Asset metadata by API in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Exposes", value: "Asset information for external systems" },
          { label: "Record built by", value: "Media Metadata Management", page: 22 },
          { label: "Part of", value: "GetSibu API", page: 261 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 264 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 261 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "information-kinds",
      eyebrow: "What a record can hold",
      heading: "Kinds of asset information and where other systems use them",
      intro: "The left column describes the library record; which details a particular integration can read is confirmed in API documentation.",
      columns: ["Examples in the library", "Typical use in another system"],
      rows: [
        { label: "Technical details", cells: ["EXIF and XMP metadata", "Choosing a suitable file for a web page or a print layout"], page: 22 },
        { label: "Creators and contributors", cells: ["The people associated with an asset", "Credit lines and rights records"], page: 116 },
        { label: "Location in the library", cells: ["File paths carried across from earlier storage", "Tracing where material came from after a move"], page: 132 },
        { label: "Workflow state", cells: ["Drafts, approved content and other statuses", "Keeping unfinished work away from publishing systems"], page: 102 },
        { label: "Lifecycle", cells: ["Expiry information", "Withdrawing material that should no longer be used"], page: 104 },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 104 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "meaning",
      eyebrow: "Considerations",
      heading: "Keeping metadata meaningful as it crosses between systems",
      items: [
        {
          heading: "Map fields by meaning, not by name",
          summary: "Two systems can use the same label for different things.",
          icon: "map",
          body: [
            "“Date” might mean when a photograph was taken, when it was uploaded or when it may first be published. “Owner” might mean the person who made a file or the manager who paid for it.",
            "Write a short mapping stating what each field means on each side before any code is written.",
          ],
        },
        {
          heading: "Keep vocabularies aligned",
          summary: "Free text in one system rarely matches the controlled terms of another.",
          icon: "tag",
          body: [
            ["An ", { text: "asset taxonomy", page: 375 }, " is a structured classification system that defines how content is grouped and labelled. When another system invents its own words for the same subjects, the two soon describe identical material differently, so decide early whether it should adopt the library’s terms."],
          ],
        },
        {
          heading: "Decide what an empty field means",
          summary: "Missing information carries a message of its own.",
          icon: "help",
          body: [
            "A blank credit might mean the creator is unknown, that no credit is required or that nobody has filled it in yet. The receiving system should treat those cases differently, and it can only do that if someone has decided how each one is recorded.",
          ],
        },
        {
          heading: "Read when needed or keep a copy",
          summary: "Copies are convenient to use, but they go stale.",
          icon: "refresh",
          body: [
            "A system that reads asset information at the moment it needs it always shows the current state. One that stores a copy is quicker to use but can quietly fall behind the library. If you keep copies, record when each was taken and set a rule for refreshing it.",
          ],
        },
        {
          heading: "Treat some details as sensitive",
          summary: "Metadata can reveal more than its label suggests.",
          icon: "shield",
          body: [
            "File paths can contain client names or unannounced project titles, and creator fields name real people. Decide which fields a public-facing system should ever display, and keep the rest inside systems whose audience is known.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 375 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An intranet that credits photographers from the library record",
      team: "An internal communications team",
      situation: "An internal communications team publishes photography on the company intranet. Credits and descriptions are retyped from emails, and names are regularly misspelt or missing.",
      steps: [
        { heading: "The record lives in the library", body: "Photographers’ names are kept with their images in the library rather than in the communications team’s inbox." },
        { heading: "Available fields are confirmed", body: "The intranet’s developers check the API documentation to establish which asset information the intranet can read before designing anything around it." },
        { heading: "Meanings are agreed", body: "Communications and development agree that the library’s creator becomes the intranet’s credit line, and that a blank creator shows no credit rather than a guess." },
        { heading: "Descriptions follow shared terms", body: "Communications agrees to describe subjects with the words the library team already uses instead of free-text captions, so the same subject reads the same way in both places." },
        { heading: "Selection stays in the library", body: ["Images for the intranet are chosen from ", { text: "approved-only views", page: 103 }, " in GetSibu, so only content that has completed review is considered for publishing."] },
      ],
      outcome: "Credits on the intranet come from the same record the library keeps, and the communications team no longer retypes photographers’ names from emails.",
      link: { page: 239, label: "GetSibu for Internal Communications" },
      sources: [{ kind: "pdf", page: 264 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 273 }, { kind: "pdf", page: 103 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the asset metadata API",
      items: [
        {
          question: "Does the asset metadata API replace a product information system?",
          answer: "No. A product information system describes products, while the library describes the assets made for them. Connecting the two can let a product system use what the library knows about its images without keeping a second account of it.",
        },
        {
          question: "Who should own the mapping between GetSibu metadata and another system?",
          answer: "Both sides together. The library team knows what each field means in practice, and the owners of the other system know how it will be used; a mapping written by only one of them tends to go wrong in the details.",
        },
        {
          question: "How do asset tags differ from other asset metadata for developers?",
          answer: ["Tags are one kind of descriptive metadata, applied to classify assets, whereas metadata also covers technical details, creators and status. Tagging inside custom applications belongs to the ", { text: "Asset Tags API", page: 265 }, "."],
        },
      ],
      sources: [{ kind: "pdf", page: 264 }, { kind: "pdf", page: 265 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on asset information and the API",
      variant: "compact",
      pages: [261, 22, 375, 116, 265, 103],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Build a Smarter Creative Workflow",
      conversionPage: 396,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 396 }],
    },
  ],
};

export default page;
