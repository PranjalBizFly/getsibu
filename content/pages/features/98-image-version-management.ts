/**
 * 98 · Image Version Management — /features/image-version-management
 *
 * Angle (cluster: versioning): visual assets for design and marketing teams — retouches, layout changes and updated
 * product shots kept in one structured record, and telling a version from a variant, an alternative select or a
 * duplicate. Video (97) and Document (99) Version Management own their media.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how design, photography and marketing teams revise images; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 98,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "How design and marketing teams can keep retouches, layout changes and updated product shots as versions of one visual asset, and how to tell a version from a variant or a duplicate.",
      visual: { diagram: "media-library", focus: "image" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 98 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One structured record for each visual through its rounds of change",
      body: [
        "In GetSibu, marketing and design teams can maintain the different versions of a visual asset in one structured record, rather than as a cluster of similar image files.",
        "Images are deceptively hard to version. Two retouches of a product shot can look identical at a glance yet differ in a reflection or a stray thread; a banner can change only in its offer line; an updated logo can go unnoticed until it is placed beside the old one. Visual similarity makes it easy to pick the wrong file and hard to notice that you have.",
        [
          "The difficulty grows with near-copies that are not versions at all: crops, colourways and resized exports. Deciding what each one is remains a team judgement, and settling the rules before those files accumulate is far easier than sorting them out afterwards.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Versions of a visual in one record", "Design and marketing on the same asset", "Crops and colourways as variants", "Duplicates are not versions", "Retouching rounds kept with the shot"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketer needs the product shot for a retailer. Instead of choosing between “hero_retouch_final” and “hero_retouch_final_KM”, they open the single asset and use its current image.",
        tags: ["Designers", "Retouchers", "Marketers"],
      },
      glance: {
        heading: "Image versioning in brief",
        facts: [
          { label: "Works on", value: "Photographs, product shots, campaign visuals" },
          { label: "Keeps", value: "Versions in one structured record" },
          { label: "Used by", value: "Marketing and design teams" },
          { label: "Finding images", value: "Searchable Image Library" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 98 }, { kind: "pdf", page: 26 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "version-variant-duplicate",
      eyebrow: "Telling them apart",
      heading: "Version, variant or duplicate?",
      intro: "Similar-looking image files do different jobs, so they belong in different places.",
      columns: ["What it is", "Where it belongs", "Typical example"],
      rows: [
        { label: "Version", cells: ["A revision that supersedes the current image", "A new version in the same asset record", "A retouch that removes a reflection"] },
        { label: "Variant", cells: ["A sibling needed at the same time as the original", "An asset of its own, tagged to the same work", "A square crop or another colourway"] },
        { label: "Alternative select", cells: ["A different frame from the same shoot", "An asset of its own", "A second angle of the product"] },
        { label: "Duplicate", cells: ["The same image saved or exported again", "Not a separate asset; duplicate detection can help find it", "A renamed web export of the hero shot"] },
      ],
      sources: [{ kind: "pdf", page: 98 }, { kind: "pdf", page: 40 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "teams",
      eyebrow: "Who it helps",
      heading: "How image versions serve each part of the team",
      tabs: [
        {
          label: "Design teams",
          heading: "Keep the exported visual current while the layout evolves",
          icon: "palette",
          body: [
            "Designers usually work in a layered source file and export an image for others to use. The asset in the library is that export, so each new export replaces it while the earlier exports stay in the record.",
            "Agreeing whether source files live as separate assets, or outside the library altogether, avoids a record that mixes working files with finished visuals.",
          ],
          points: ["The export others use stays current", "Source files handled by agreement"],
        },
        {
          label: "Photo and retouch",
          heading: "Follow retouching passes on a single shot",
          icon: "camera",
          body: [
            "Retouching moves in small steps: fabric and surfaces, then colour, then a client’s last request. Keeping each pass as a version of the same shot helps stop the approved retouch being confused with the pass before it.",
            ["Embedded information such as ", { text: "EXIF and XMP metadata", page: 22 }, " can become part of the asset record, keeping camera and caption details with the image rather than in a separate spreadsheet."],
          ],
          points: ["Each pass kept with its shot", "Camera details held in the record"],
        },
        {
          label: "Marketing teams",
          heading: "Use the current visual without comparing near-identical files",
          icon: "megaphone",
          body: [
            "Marketers rarely need the retouching story; they need the right image for the brief in front of them. With one record per visual, the current file is the one they reach.",
            ["Reaching that record in a large collection is a search question: in a ", { text: "searchable image library", page: 26 }, ", images become findable through metadata, tags, visual characteristics and extracted information."],
          ],
          points: ["The current image, not a lookalike", "Found through search, not folder memory"],
        },
      ],
      sources: [{ kind: "pdf", page: 98 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 26 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A hero product shot through a retouching round",
      team: "A design team",
      situation: "A design team is preparing the hero shot for a product page. The brand lead wants two fixes before the image goes to the marketing team.",
      steps: [
        { heading: "The retouched select goes in", body: "The retoucher adds the chosen frame, already retouched once, as the product’s hero asset." },
        { heading: "Brand leaves its notes", body: ["The brand lead ", { text: "comments on the asset", page: 62 }, " about a reflection on the lid and a white balance that reads slightly warm."] },
        { heading: "The fix replaces the image", body: "The retoucher replaces the asset with the corrected file, and the earlier retouch remains among its versions." },
        { heading: "Marketing asks for a square crop", body: "Because the crop is needed alongside the hero shot, the designer adds it as its own asset rather than as a version." },
        { heading: "The hero shot is approved", body: ["The brand team uses an ", { text: "approval gate", page: 71 }, " so that the approved image stays separate from drafts and work-in-progress material."] },
      ],
      outcome: "Marketing receives one current hero image and one crop, each with its own record, and the retouching passes stay with the shot they belong to.",
      link: { page: 228, label: "GetSibu for Photography Teams" },
      sources: [{ kind: "pdf", page: 98 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 228 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about image version management",
      items: [
        {
          question: "When should an updated product photograph become a new asset rather than a version?",
          answer: "When the product itself has changed and the old photograph is still needed, for instance while the earlier model remains on sale in some markets. A retouch or correction of the same shot of the same product is a version.",
        },
        {
          question: "How is image version management different from duplicate detection?",
          answer: ["Versioning keeps intended revisions of a visual together. ", { text: "Duplicate detection", page: 40 }, " finds unintended copies, combining exact and perceptual hashing to catch identical files and visually equivalent ones, even when renamed or re-encoded."],
        },
        {
          question: "How can similar-looking images be told apart without downloading them?",
          answer: [{ text: "Thumbnails", page: 146 }, " provide fast visual previews without requiring users to download the original file, which helps when choosing between a variant, an alternative select and the hero shot itself."],
        },
      ],
      sources: [{ kind: "pdf", page: 98 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 146 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on managing visual assets",
      variant: "compact",
      pages: [26, 40, 71, 146, 228, 91],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the versioning overview." }],
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
