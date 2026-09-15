/**
 * 140 · 10 GB File Uploads — /storage/10-gb-file-uploads
 *
 * HELD draft (claim: upload-10gb). Angle: large file size positioning. Keeps the PDF hedge: GetSibu’s stated
 * performance positioning includes resumable uploads for files up to 10 GB. Says nothing about chunking of
 * those uploads, speeds, what happens to larger files, batch sizes or formats. Siblings own resuming (137),
 * chunking (138), volume (139), progress (141), parallel sending (142) and the architecture view (312).
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of why individual creative files become very large and how teams plan for them; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 140,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Understand what GetSibu’s stated positioning on resumable uploads for files up to 10 GB means for the heaviest material a creative team produces, and what to plan for when very large files have to move.",
      visual: { diagram: "ingest-pipeline", focus: "upload" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 140 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A stated file size for the heaviest creative media",
      body: [
        "GetSibu’s stated performance positioning includes resumable uploads for files up to 10 GB, helping support large creative media files. The figure concerns single files of the kind that email and everyday sharing tools were never meant to carry.",
        "Creative work produces very large individual files as a matter of course. A finished film exported in a high-quality format, a long take from a high-resolution camera, a large-format print file with many layers or a project packaged into one archive can each outgrow a casual transfer. Teams without a dependable route for them fall back on couriered drives and deliveries split by hand.",
        "Size and recovery belong together. The larger a file, the longer it spends in transit and the more chances a connection has to drop before it finishes, so a stated size is most meaningful alongside a way of continuing after an interruption.",
        [
          "Resumable uploads help ",
          { text: "prevent large transfers from restarting", page: 137 },
          " from the beginning, and they belong to ",
          { text: "media upload management", page: 136 },
          ", which also provides progress information for transfers on unreliable networks.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Resumable uploads for files up to 10 GB", "Stated performance positioning", "Support for large creative media files", "Transit time grows with file size", "Masters, originals and packaged projects"],
      },
      highlight: {
        heading: "In practice",
        body: "A producer planning a remote shoot asks how large a typical day’s longest take will be and how fast the location connection sends, then builds upload time into the schedule.",
        tags: ["Editors", "Deliveries", "Large files"],
      },
      glance: {
        heading: "Large file uploads in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Stated positioning", value: "Resumable uploads for files up to 10 GB" },
          { label: "Helps support", value: "Large creative media files" },
          { label: "Architecture view", value: "Large File Performance", page: 312 },
        ],
      },
      sources: [{ kind: "pdf", page: 140 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 136 }, { kind: "pdf", page: 312 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "heavy-files",
      eyebrow: "By kind of file",
      heading: "Where single files grow very large in creative work",
      tabs: [
        {
          label: "Masters",
          heading: "Finished films in delivery quality",
          icon: "film",
          body: [
            "A master is exported with as little compression as the delivery allows, because every later version is made from it. It is far larger than the compressed copy people watch online.",
            "Whether the master belongs in a shared library is a genuine decision. Reviewers and marketers usually need a high-quality viewing copy, while the master matters most to whoever produces the next version.",
          ],
          points: ["Often the heaviest file in a project", "A viewing copy serves most people"],
          link: { page: 97, label: "Video Version Management" },
        },
        {
          label: "Camera originals",
          heading: "Long takes from high-resolution cameras",
          icon: "camera",
          body: [
            "Original files from a long interview or a continuous event recording can be very large, especially in raw or lightly compressed formats. They are also irreplaceable, because nobody can reshoot the moment.",
            "Because they cannot be recreated, originals are usually kept exactly as the camera wrote them, however large that makes them.",
          ],
          points: ["Irreplaceable material", "Kept as the camera wrote them"],
        },
        {
          label: "Artwork",
          heading: "Large-format and heavily layered design files",
          icon: "palette",
          body: [
            "Packaging, outdoor advertising and retouched campaign imagery can produce design files of considerable size, with many layers kept editable for later changes. Flattened exports of the same work weigh a small fraction as much.",
            ["Where the layered file is the one worth keeping, ", { text: "image version management", page: 98 }, " lets marketing and design teams maintain different versions of visual assets in one structured record."],
          ],
          points: ["Editable layers add weight", "Exports far lighter than their sources"],
        },
        {
          label: "Packages",
          heading: "Whole projects bundled into one archive",
          icon: "archive",
          body: [
            "Teams often compress an entire project folder into a single archive for delivery or safekeeping. It travels as one large file, which is convenient, but everything inside it is hidden from view.",
            "Unpacked, the same images can each be described and found in their own right, so adding them individually usually serves reuse better, with bundles kept for handover.",
          ],
          points: ["One file, hidden contents", "Bundles for handover, assets for reuse"],
        },
      ],
      sources: [{ kind: "pdf", page: 97 }, { kind: "pdf", page: 98 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "size-changes",
      eyebrow: "Size and transfer",
      heading: "What changes as a single file gets larger",
      columns: ["An everyday image", "A very large media file"],
      rows: [
        ["Time in transit", "Over before anyone notices", "Long enough for conditions to change"],
        ["Cost of a failed attempt", "A moment’s delay", "Everything sent so far, unless it resumes"],
        ["Knowing where it stands", "Rarely matters", "Progress indicators worth following"],
        ["Checking what arrived", "Open it and look", "Streaming previews instead of a full download"],
        ["Planning involved", "None to speak of", "Connection, timing and fallback considered"],
      ],
      sources: [{ kind: "pdf", page: 140 }, { kind: "pdf", page: 141 }, { kind: "pdf", page: 147 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reading-the-figure",
      eyebrow: "What to consider",
      heading: "Planning around a stated file size",
      items: [
        {
          heading: "Your own heaviest files are what count",
          summary: "Formats, resolutions and running times vary so much that general rules of thumb mislead.",
          icon: "gauge",
          body: [
            "Two films of the same length can differ enormously in size depending on how they were exported. Export a representative example of your heaviest deliverable and note its size, so that choices about uploading start from facts about your own work.",
          ],
        },
        {
          heading: "Upload capacity, not download speed",
          summary: "How long a very large upload takes depends on how fast the connection can send.",
          icon: "clock",
          body: [
            "Many connections, particularly in homes and small offices, send data far more slowly than they receive it, so a file that downloads in moments can take much longer to send. Plan large deliveries around the upload capacity of the connection you will actually be using.",
          ],
        },
        {
          heading: "Shrinking a file to fit has a cost",
          summary: "Re-exporting at lower quality to reduce size can take away something that matters later.",
          icon: "layers",
          body: [
            "When a transfer looks slow or awkward, the temptation is to export the file again with more compression. For a master or an original that is a lasting loss, because everything derived from it inherits the compromise. Keep reductions for viewing copies and handle originals on their own terms.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 140 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about 10 GB file uploads",
      items: [
        {
          question: "Does the 10 GB positioning describe each file or a whole upload?",
          answer: ["It is stated in terms of files up to that size, so it describes individual files rather than the total of a batch. Sending many files together is a question of volume, which ", { text: "high-volume media uploads", page: 139 }, " and ", { text: "parallel uploads", page: 142 }, " address."],
        },
        {
          question: "How do 10 GB file uploads relate to chunked uploads?",
          answer: ["The 10 GB positioning is stated in terms of resumable uploads, and ", { text: "chunked upload workflows", page: 138 }, " are designed for transferring large files reliably. Both concern keeping very large transfers dependable."],
        },
        {
          question: "Who in a creative team needs to know about the 10 GB positioning?",
          answer: "Producers, editors and anyone who plans deliveries of heavy files, since it bears on how they plan the transfer of heavy material. It is also useful context for whoever advises on connections at shoots and studios.",
        },
      ],
      sources: [{ kind: "pdf", page: 140 }, { kind: "pdf", page: 139 }, { kind: "pdf", page: 142 }, { kind: "pdf", page: 138 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on getting heavy files into the library",
      variant: "compact",
      pages: [137, 136, 138, 139, 312, 147],
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
