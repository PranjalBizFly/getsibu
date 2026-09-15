/**
 * 143 · Asset Processing — /storage/asset-processing
 *
 * Angle (cluster: processing, primary): the processing stages after upload — metadata extraction, thumbnail
 * generation and AI-related processing — what each contributes to an asset and what the results depend on.
 * Creative Asset Indexing (21) owns the indexed outcome; Asset Processing Performance (311) owns background
 * processing as a design; AI Processing Queue (144) owns queue states; Media Processing Status (145) owns
 * uploaded versus searchable; Asset Thumbnail Generation (146) owns previews.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of what processing derives from creative files; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 143,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Find out what happens to a file once it has been uploaded, what each processing stage adds to the asset, and why the results depend partly on how the file was prepared before it arrived.",
      visual: { diagram: "ingest-pipeline", focus: "processing" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 143 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The work that turns an upload into a usable asset",
      body: [
        "After upload, assets in GetSibu move through processing stages such as metadata extraction, thumbnail generation and AI-related processing. A file arrives with little more than a name and its contents; processing gives the library something to show, describe and search.",
        "The difference between a file and an asset explains why this stage exists. Storage only has to keep a file intact. A library has to answer questions about it: what it looks like, who made it, what it contains and where it belongs. Every one of those answers is information derived from the file, and deriving it once the file has arrived spares each later visitor from opening the original to find out.",
        "Processing is a family of tasks rather than a single routine, and what each task can yield depends on the file in front of it. A photograph straight from a camera carries far more recorded detail than a screenshot, and a scanned brochure holds printed words that a landscape photograph does not.",
        [
          "Its results feed the rest of the library. ",
          { text: "Creative asset indexing", page: 21 },
          " describes the indexed representation of the library that supports discovery, which is where much of that work ends up.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Metadata extraction", "Thumbnail generation", "AI-related processing", "A file becomes a described asset", "Results depend on the file", "Suggestions open to human review"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer uploads a folder of campaign visuals and returns to her work. Meanwhile the new assets can gain previews, recorded details and suggested tags without her filling in a single field.",
        tags: ["Designers", "Campaign visuals", "New uploads"],
      },
      glance: {
        heading: "Asset processing in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Happens", value: "After upload" },
          { label: "Stages include", value: "Metadata extraction, thumbnails, AI-related processing" },
          { label: "Leads to", value: "Creative Asset Indexing", page: 21 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 143 }, { kind: "pdf", page: 21 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "stages",
      eyebrow: "The stages",
      heading: "What each kind of processing contributes to an asset",
      items: [
        {
          heading: "Recorded details read",
          body: "Available metadata is processed as assets enter, so details such as EXIF, XMP, file paths, creators and custom keywords can become part of the asset record instead of being retyped.",
          icon: "database",
          points: ["Capture and credit details", "Context carried from earlier tools"],
          page: 22,
        },
        {
          heading: "Previews generated",
          body: "A thumbnail gives an asset a small image people can recognise, providing a fast visual preview without anyone needing to download the original.",
          icon: "image",
          points: ["A picture to recognise", "No download just to look"],
          page: 146,
        },
        {
          heading: "Tags suggested",
          body: "GetSibu can suggest tags during asset processing, so that a team is not left to classify every file entirely by hand.",
          icon: "sparkles",
          points: ["Classification started for the team", "Suggestions rather than final labels"],
          page: 31,
        },
        {
          heading: "Text made searchable",
          body: "OCR extracts text from images, documents, presentations and screenshots, and once processed, that text becomes part of the searchable information about the asset.",
          icon: "text",
          points: ["Words on slides, scans and screenshots", "Found by what a file says"],
          page: 38,
        },
        {
          heading: "Content prepared for discovery",
          body: "AI media indexing prepares creative content for intelligent discovery by processing supported visual, textual and metadata signals.",
          icon: "scan",
          points: ["Signals nobody typed in", "Applies to supported media"],
          page: 50,
        },
      ],
      sources: [{ kind: "pdf", page: 143 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 50 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Why some uploads arrived better described than others",
      team: "An in-house creative team",
      situation: "An in-house creative team notices that some new assets arrive with rich records while others arrive almost bare. The library manager sets out to find out why before the difference spreads through the library.",
      steps: [
        { heading: "Two uploads are compared", body: "One set came from the photographer’s original files; the other had been forwarded through a messaging app. The originals carried capture details and credits, while the forwarded copies had lost most of theirs before they were ever uploaded." },
        { heading: "An export preset is found", body: "The retoucher’s preset for smaller files was discarding embedded information, so credits added during editing never reached the library at all." },
        { heading: "The fix happens upstream", body: "The studio changes the preset and asks agencies to deliver originals, which gives metadata extraction something worth reading from then on." },
        { heading: "Older material gets a human pass", body: ["For assets already uploaded without descriptions, the team turns to suggested tags, ", { text: "approving the fitting ones in bulk", page: 47 }, " rather than describing each file from scratch."] },
        { heading: "Search is used as the test", body: ["The manager searches for a photographer’s name and a campaign keyword, since ", { text: "metadata can be searched", page: 23 }, " alongside tags and extracted content, and confirms that the corrected uploads turn up."] },
      ],
      outcome: "New uploads now arrive with records worth searching, and the team has learned that the quality of processing results is partly settled before a file reaches the library.",
      link: { page: 222, label: "GetSibu for In-House Creative Teams" },
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 222 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "depends-on",
      eyebrow: "Considerations",
      heading: "What processing results depend on",
      items: [
        {
          heading: "Supported media",
          summary: "AI capabilities are described in terms of supported media, and that qualification deserves attention.",
          icon: "scan",
          body: [
            "Before a team relies on AI results for a particular kind of file, such as a specialist image format or a proprietary project file, it is sensible to upload a few representative examples and look at what comes back. A short test answers the question with the team’s own material instead of assumptions.",
          ],
        },
        {
          heading: "The quality of the original",
          summary: "A small or heavily compressed file offers less to read and analyse.",
          icon: "image",
          body: [
            "A blurred photograph of a poster holds less legible text than the poster’s own artwork file, and a small web image shows less detail than the full-resolution original. Where a better version of a file exists, uploading that version gives every processing stage more to work with.",
          ],
        },
        {
          heading: "Time to finish",
          summary: "An asset can be in the library before all of its processing is complete.",
          icon: "clock",
          body: [
            ["Processing follows upload, so there is a period in which a new asset has arrived but its stages are still under way. For AI work, ", { text: "status information", page: 144 }, " shows whether an asset is queued, processing or ready."],
          ],
        },
        {
          heading: "Capacity to review",
          summary: "Every suggestion is a decision waiting for someone.",
          icon: "users",
          body: [
            "A large upload can create a sizeable review task, because suggested classifications are best relied on once somebody has looked at them. Agreeing who reviews new material, and when, is part of adopting automated processing rather than something to sort out after a backlog forms.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 50 }, { kind: "pdf", page: 144 }, { kind: "pdf", page: 31 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset processing",
      items: [
        {
          question: "Which asset processing stage matters most for finding files later?",
          answer: "That depends on how people search. Colleagues who look for a creator or campaign lean on recorded metadata, people who recognise work by sight lean on previews, and people who describe what a file shows lean on AI-related processing, so a library usually benefits from all three.",
        },
        {
          question: "Can other systems use an asset’s metadata once it is in the library?",
          answer: ["Yes, programmatically. The ", { text: "asset metadata API", page: 264 }, " can expose asset information so external systems can work with metadata, instead of someone copying details from one tool to another."],
        },
        {
          question: "Does someone have to start asset processing for each upload?",
          answer: ["Not for indexing. ", { text: "Background processing", page: 311 }, " allows assets to be indexed without requiring users to perform metadata or AI processing by hand."],
        },
      ],
      sources: [{ kind: "pdf", page: 264 }, { kind: "pdf", page: 311 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on preparing assets after upload",
      variant: "compact",
      pages: [146, 144, 145, 21, 311, 22],
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
