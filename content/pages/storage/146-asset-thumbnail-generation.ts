/**
 * 146 · Asset Thumbnail Generation — /storage/asset-thumbnail-generation
 *
 * Angle (clusters: processing; previews-delivery): thumbnails as the lightest preview — recognising an asset
 * without downloading the original, where that saves effort, and what a small preview cannot show. Asset
 * Processing (143) owns the stages; Streaming Media Preview (147) owns inspecting large media; Streaming
 * Previews (306) and Media Preview Performance (313) own the architecture and review-friction views.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how previews help people recognise creative files; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 146,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "See why a small generated preview is often the quickest way to recognise the right asset, where it spares a download in everyday library work, and which judgements still call for a closer look.",
      visual: { diagram: "ingest-pipeline", focus: "preview" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 146 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The lightest way to see what a file is",
      body: [
        [
          "Thumbnails in GetSibu provide fast visual previews without requiring users to download the original file. Thumbnail generation is one of the ",
          { text: "asset processing", page: 143 },
          " stages after upload, so an asset can be represented by a small image of itself.",
        ],
        "People recognise pictures far more readily than they decode filenames. A list reading “IMG_4471”, “hero_final” and “hero_final_v2” tells a searcher very little, whereas a set of small images lets them rule out most candidates at a glance and concentrate on the few that might be right.",
        "Without a preview, the alternative is costly in small, repeated ways. Identifying a file means downloading it, opening it in an application that reads its format and often discovering it was the wrong one. With large originals, each wrong guess wastes a transfer and local disk space.",
        [
          "A thumbnail is modest by nature, made for recognising and choosing rather than scrutiny. Where large media needs a closer look, ",
          { text: "streaming media preview", page: 147 },
          " can be the next step before anyone reaches for the original.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Fast visual previews", "No download to recognise a file", "Generated as part of processing", "Recognition rather than fine detail", "Fewer stray local copies"],
      },
      highlight: {
        heading: "In practice",
        body: "Hunting for last spring’s hero shot, a designer scans the previews in her search results and recognises it straight away, without downloading a single original.",
        tags: ["Designers", "Photography", "Finding assets"],
      },
      glance: {
        heading: "Thumbnails in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Provide", value: "Fast visual previews" },
          { label: "Avoid", value: "Downloading the original just to see it" },
          { label: "Produced during", value: "Asset Processing", page: 143 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 146 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 147 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "which-view",
      eyebrow: "Choosing a view",
      heading: "Which view suits which judgement about an asset",
      intro: "Thumbnails, streaming previews and originals each answer different questions, and using the lightest one that will do saves time.",
      columns: ["Thumbnail", "Streaming preview", "Original file"],
      rows: [
        { label: "Is this the asset I want?", cells: ["Usually enough", "Seldom needed", "More than the question requires"] },
        { label: "Which similar shot is best?", cells: ["A first shortlist", "Useful for time-based media", "The final pick when detail decides"] },
        { label: "Does the moment I need come later on?", cells: ["A single image says little", "Suited to the question", "Only after a full download"] },
        { label: "Is colour or sharpness right?", cells: ["Too small to judge", "Not the reference", "The reference"] },
      ],
      sources: [{ kind: "pdf", page: 146 }, { kind: "pdf", page: 147 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "daily-use",
      eyebrow: "In daily use",
      heading: "Where a thumbnail spares a download in everyday work",
      tabs: [
        {
          label: "Finding",
          heading: "Choosing among what a search returns",
          icon: "search",
          body: [
            ["The ", { text: "asset discovery workflow", page: 30 }, " moves from searching to filtering and previewing before someone locates the right asset. A thumbnail is one of the quickest forms that previewing step can take."],
          ],
          points: ["Candidates ruled out by eye", "Previewing without a transfer"],
        },
        {
          label: "Copies",
          heading: "Deciding which of several copies to keep",
          icon: "copy",
          body: [
            ["Re-exports, resized versions and renamed files collect in any busy library, and ", { text: "duplicate detection", page: 40 }, " identifies identical files and visually equivalent copies. Deciding which copy to keep is quicker when the candidates can be compared by sight rather than downloaded one by one."],
          ],
          points: ["Copies compared by sight", "Clean-up without a pile of downloads"],
        },
        {
          label: "Browsing",
          heading: "Recognising material in poorly named folders",
          icon: "folder",
          body: [
            "Folders inherited from earlier storage are often full of files whose names explain nothing. Browsing them by eye depends on having something to look at, and a preview that needs no download provides exactly that, so much of a folder can be understood before anyone opens a file.",
          ],
          points: ["Meaning where names fail", "Folders understood at a glance"],
        },
        {
          label: "Distance",
          heading: "Looking without pulling large files across the world",
          icon: "globe",
          body: [
            ["For colleagues far from where assets are kept, downloading originals just to identify them is especially wasteful. ", { text: "CDN delivery", page: 304 }, " helps provide fast access to previews and media around the world, and a small preview is the least a distant colleague needs to receive to know what an asset is."],
          ],
          points: ["Recognition without a heavy transfer", "Useful across regions"],
        },
      ],
      sources: [{ kind: "pdf", page: 30 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 304 }, { kind: "pdf", page: 146 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "What to keep in mind about generated thumbnails",
      items: [
        {
          heading: "Similar images look more alike when small",
          summary: "Shrinking an image makes near-identical frames harder to tell apart.",
          icon: "image",
          body: [
            ["Bracketed exposures, burst sequences and colourway variants can look the same at thumbnail size. When the difference matters, look more closely or use recorded details to separate them; capture information such as EXIF ", { text: "can become part of the asset record", page: 22 }, "."],
          ],
        },
        {
          heading: "Some files have little to picture",
          summary: "Not every asset looks like what makes it useful.",
          icon: "document",
          body: [
            "A sound recording has nothing to picture, and a text-heavy document tends to look much like any other page when shrunk. With material like that, titles, tags and descriptions carry more of the work of recognition than a small image can.",
          ],
        },
        {
          heading: "A new asset may not have its preview yet",
          summary: "Thumbnail generation is a processing stage that follows upload.",
          icon: "clock",
          body: [
            "An asset added moments ago may still be waiting for its thumbnail, because the preview is produced after the file arrives. A missing preview on a brand-new asset can simply be a matter of timing, so it is worth a little patience before assuming anything is wrong.",
          ],
        },
        {
          heading: "Every avoided download is one less stray copy",
          summary: "Checking by download is how many unofficial copies begin.",
          icon: "download",
          body: [
            "A file downloaded only to see what it is tends to stay in a downloads folder, where it is later mistaken for the approved version. Previews that make those downloads unnecessary help keep the library, rather than personal folders, as the place where assets actually live.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 146 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset thumbnail generation",
      items: [
        {
          question: "Does a generated thumbnail replace the original asset file?",
          answer: "No. A generated thumbnail is an additional small image made for previewing, and the original remains the asset people edit and deliver.",
        },
        {
          question: "Are generated asset thumbnails the same as the thumbnails creators design for videos?",
          answer: ["No. A designed video thumbnail is a piece of creative work, and ", { text: "content creators can organise", page: 227 }, " videos, thumbnails, images and documents as assets in their own right. A generated thumbnail is a preview produced from an asset so that people can recognise it."],
        },
        {
          question: "Do generated thumbnails make careful file naming unnecessary?",
          answer: ["No. A thumbnail helps someone recognise an asset once it is in front of them, but getting it there usually depends on what search can use, and ", { text: "metadata can be searched", page: 23 }, " alongside tags and extracted content. Clear names and descriptions still do that finding work."],
        },
      ],
      sources: [{ kind: "pdf", page: 227 }, { kind: "pdf", page: 23 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on previewing assets",
      variant: "compact",
      pages: [147, 143, 22, 30, 40, 304],
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
