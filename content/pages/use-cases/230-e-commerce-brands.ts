/**
 * 230 · GetSibu for E-Commerce Brands — /use-cases/e-commerce-brands
 *
 * Angle (cluster: uc-marketing-brand): assets organised around products and their listings — many angles and
 * colourways per product, product videos, short-lived campaign creative and the documents behind a listing, all
 * changing as products are corrected, updated and discontinued. Marketing Teams (213) owns campaigns; Retail Brands
 * (231) owns promotional creative across a retail organisation; Multi-Market Teams (225) owns regions.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how online brands typically manage product content; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 230,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How an e-commerce brand can keep each product’s images, videos, campaign assets and marketing documents organised around the product itself, so the people maintaining listings are not hunting through shoot folders.",
      visual: { diagram: "media-library", focus: "image,video,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 230 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Every product’s assets, organised around the product",
      body: [
        "E-commerce brands can use GetSibu to centralise the product images, videos, campaign assets and marketing documents that surround what they sell.",
        "An online catalogue multiplies assets quickly. Each product needs images from several angles, often repeated for every colourway, plus lifestyle photography, a short video and a size guide or specification sheet. Products are updated, re-photographed and withdrawn all the time, and every change has to reach the listing. When the files sit in shoot folders named by date, the team maintaining listings spends its effort matching photographs to products instead of improving the pages.",
        [
          "Tying assets to products starts with information the team can rely on. ",
          { text: "Custom keywords and other metadata", page: 22 },
          " can become part of each asset record, so a product code can travel with its photographs, while ",
          { text: "AI asset classification", page: 42 },
          " helps categorise assets by their content and available metadata, reducing the repetitive sorting a large catalogue creates.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Assets grouped by product and range", "Colourways told apart", "Corrected images replacing old ones", "Product documents found by content", "Withdrawn lines archived"],
      },
      highlight: {
        heading: "In practice",
        body: "When a product gains a new colourway, its photographs are keyworded with the same product code as the existing images, rather than starting a separate folder somewhere else.",
        tags: ["E-commerce managers", "Content teams", "Photographers"],
      },
      glance: {
        heading: "E-commerce brands in brief",
        facts: [
          { label: "Team", value: "Online retail and direct-to-consumer brands" },
          { label: "Typical material", value: "Product images, product videos, campaign assets, specification sheets" },
          { label: "Builds on", value: "AI-Powered Image Discovery", page: 52 },
          { label: "Supports", value: "Duplicate Asset Management", page: 112 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 230 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 52 }, { kind: "pdf", page: 112 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "asset-types",
      eyebrow: "By asset type",
      heading: "The four kinds of asset behind a product listing",
      tabs: [
        {
          label: "Product images",
          heading: "Many angles, many colourways",
          icon: "image",
          body: [
            "Product photography is the heart of a listing and the most numerous kind of asset an online brand owns. The hard part is rarely finding a photograph of the product; it is finding the right angle, in the right colourway, at the right stage of retouching.",
            [{ text: "AI-powered image discovery", page: 52 }, " helps locate product shots through AI-generated metadata, and ", { text: "colour detection", page: 36 }, " can help separate colourways when colour is what distinguishes them."],
          ],
          points: ["Product shots located by content", "Colourways separated by colour"],
        },
        {
          label: "Product videos",
          heading: "Short films that show the product in use",
          icon: "video",
          body: [
            "Product videos are fewer than photographs but heavier, and they tend to be revised whenever packaging or features change.",
            [{ text: "Video version management", page: 97 }, " keeps each cut and revision associated with the asset, and ", { text: "streaming previews", page: 306 }, " let the team inspect a clip without waiting for a full download."],
          ],
          points: ["Revisions kept with the video", "Clips checked without downloading"],
        },
        {
          label: "Campaign assets",
          heading: "Lifestyle imagery and seasonal creative",
          icon: "megaphone",
          body: [
            "Campaign photography and seasonal banners feature the same products but serve marketing rather than the listing itself. They are also the assets with the shortest useful life.",
            [{ text: "Expiry information", page: 104 }, " can help identify campaign content that should no longer be used after a specified period, and ", { text: "campaign asset versioning", page: 96 }, " maintains versions of creative files without disconnected copies."],
          ],
          points: ["End dates noted for seasonal work", "Campaign files without stray copies"],
        },
        {
          label: "Documents",
          heading: "Specification sheets, size guides and copy",
          icon: "document",
          body: [
            "Behind many listings sit documents: specification sheets from suppliers, size guides, care instructions and approved product descriptions. They change less often than images but cause just as much trouble when they are wrong.",
            [{ text: "AI document discovery", page: 53 }, " combines OCR and metadata, so a specification sheet can be found by a phrase inside it, and ", { text: "document version management", page: 99 }, " retains earlier versions when a size guide is replaced."],
          ],
          points: ["Found by the words inside", "Earlier versions retained"],
        },
      ],
      sources: [{ kind: "pdf", page: 52 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 306 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 96 }, { kind: "pdf", page: 53 }, { kind: "pdf", page: 99 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Correcting product photographs that show the wrong shade",
      team: "An e-commerce brand",
      situation: "Customers tell an online brand that one colourway of a jacket looks noticeably different in real life from its photographs. The content team needs to find every affected image, correct it and keep the old files from being reused.",
      steps: [
        {
          heading: "Every image of the product is gathered",
          body: ["The team searches for the jacket’s product code, which was recorded as a keyword, because ", { text: "available metadata can be searched", page: 23 }, " alongside tags and extracted content."],
        },
        {
          heading: "The faulty shoot is isolated",
          body: [{ text: "Filtering the results by date", page: 19 }, " narrows them to the shoot where the colour went wrong, leaving earlier photography of the jacket untouched."],
        },
        {
          heading: "Stray copies are tracked down",
          body: "Copies of those photographs saved under other names are identified, so the team can remove the ones a correction would otherwise miss.",
        },
        {
          heading: "Retouched files replace the originals",
          body: ["The retoucher’s corrected images ", { text: "replace each asset in place", page: 93 }, ", with the earlier versions kept within the asset record."],
        },
        {
          heading: "The listings team gets a product view",
          body: ["A ", { text: "shared view", page: 79 }, " of the jacket’s assets goes to the colleagues who update the listing, so they take images from the corrected set."],
        },
      ],
      outcome: "The jacket’s photographs show the right shade again, the earlier images remain on record if questions arise, and the listings team works from the corrected files rather than from copies saved before the fix.",
      link: { page: 98, label: "Image Version Management" },
      sources: [{ kind: "pdf", page: 23 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 79 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "challenges",
      eyebrow: "Recurring challenges",
      heading: "What an e-commerce brand has to settle about product assets",
      items: [
        {
          heading: "How assets are tied to products",
          summary: "A product code recorded consistently does more than a perfect folder tree.",
          icon: "tag",
          body: [
            "Folders by range or season suit the photographers who shoot them, but listings are organised by product. Recording product codes and ranges consistently, whether as tags or keywords, lets the same image be found from either direction.",
            [{ text: "Hierarchical tags", page: 8 }, " fit the shape of a catalogue, with ranges above products and products above colourways."],
          ],
        },
        {
          heading: "Products that leave the catalogue",
          summary: "A withdrawn product’s assets can still be needed long after it stops selling.",
          icon: "archive",
          body: [
            "Photographs of a discontinued product still matter for customer service and the occasional revival, yet they clutter every search for current stock. Deleting them loses history; leaving them where they are confuses the team.",
            [{ text: "Asset archiving", page: 108 }, " retains that content without letting it get in the way of everyday discovery."],
          ],
        },
        {
          heading: "Imagery that arrives from suppliers",
          summary: "Supplier photographs vary in quality and in what they may be used for.",
          icon: "store",
          body: [
            "Brands that sell other makers’ products often receive packshots from suppliers alongside their own photography. Those images differ in background, resolution and colour accuracy, and they can arrive with conditions attached.",
            ["Checking them before they reach a listing keeps the catalogue consistent. Teams can use approval and metadata workflows to maintain ", { text: "higher-quality libraries", page: 113 }, ", recording where each image came from and whether it has passed review."],
          ],
        },
        {
          heading: "Knowing which product images are used",
          summary: "A catalogue can hold far more photography than its listings show.",
          icon: "chart",
          body: [
            "Many product images are shot and never chosen. Knowing which ones colleagues actually open helps decide what to re-shoot and what to retire.",
            [{ text: "Asset access analytics", page: 197 }, " provide information about how content is being viewed or used."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 113 }, { kind: "pdf", page: 197 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for e-commerce brands",
      items: [
        {
          question: "Can an e-commerce brand move its existing product photography in bulk?",
          answer: [{ text: "Bulk import", page: 291 }, " allows organisations to move large quantities of media without uploading files individually, and ", { text: "folder structure migration", page: 287 }, " lets existing folders be mirrored or remapped along the way."],
        },
        {
          question: "Can an e-commerce brand organise a large product shoot without tagging it all by hand?",
          answer: [{ text: "AI-assisted tagging", page: 31 }, " can suggest tags during processing, and suggested tags can be approved in bulk rather than one file at a time."],
        },
        {
          question: "Can an e-commerce brand keep photography of unlaunched products private?",
          answer: ["Yes. ", { text: "Folder-level permissions", page: 152 }, " control access more precisely than organisation-wide access, so imagery of a product that has not launched can be limited to the people working on it."],
        },
        {
          question: "Can an e-commerce brand approve product imagery before it is used on a listing?",
          answer: ["Product imagery can go through an ", { text: "approval workflow", page: 67 }, " in which review is requested, changes are made and the asset is marked as approved before the team uses it."],
        },
      ],
      sources: [{ kind: "pdf", page: 291 }, { kind: "pdf", page: 287 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 67 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for brands managing product content",
      variant: "compact",
      pages: [52, 36, 93, 79, 213, 231],
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
