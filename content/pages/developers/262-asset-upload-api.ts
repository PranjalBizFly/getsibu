/**
 * 262 · Asset Upload API — /developers/asset-upload-api
 *
 * Angle (cluster api-endpoints, primary): external applications sending files into GetSibu — how that route compares
 * with the other ways files enter the library, and what an upload integration must settle before the first send.
 * No endpoints, payloads, limits or transfer mechanics.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of automated file intake in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 262,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "For files that should reach GetSibu from another application rather than from someone’s desktop: how sending by API compares with the other routes into the library, and what an upload integration needs to decide first.",
      visual: { diagram: "api-flow", focus: "upload" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 262 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 130 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Files that arrive as part of another system’s process",
      body: [
        "The asset upload API allows external applications to send files into the GetSibu environment. The sender is software, such as a render queue, a capture station in a studio or a portal where suppliers deliver work, and the file reaches the library as a step in that system’s own process rather than as a separate chore for a person.",
        "Uploading by hand works well when files turn up now and then. It becomes a weak point once a steady stream of output has to reach the library: exports are saved to a desktop and forgotten, the wrong render is picked up, or material waits until somebody has a spare moment. The longer that gap lasts, the more likely colleagues are to work from a copy kept somewhere else.",
        [
          "Sending is only the beginning of an asset’s life in the library. ",
          { text: "After upload", page: 143 },
          ", assets move through processing stages such as metadata extraction, thumbnail generation and AI-related processing. Treating a send as finished the moment a file leaves the other system is a common source of confusion for the people waiting on it.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Files sent by external applications", "Output that needs no manual step", "One of several routes in", "Processing after the file lands", "Decisions made before the first send"],
      },
      highlight: {
        heading: "In practice",
        body: "A render queue hands each finished render to the library as its final step, so nobody has to remember a second job at the end of a long day.",
        tags: ["Production", "Studios", "Developers"],
      },
      glance: {
        heading: "Sending files by API in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Sends", value: "Files from external applications" },
          { label: "Manual route", value: "Drag and Drop Upload", page: 127 },
          { label: "Part of", value: "GetSibu API", page: 261 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 262 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 261 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "routes-in",
      eyebrow: "Routes into the library",
      heading: "Where the asset upload API sits among the ways files arrive",
      intro: "Each route has a different sender, so the right one depends on where files come from and how often they appear.",
      columns: ["Who or what sends", "Suits"],
      rows: [
        { label: "Drag and drop upload", cells: ["A person at their computer", "Individual assets or small batches, with no integration to configure"], page: 127 },
        { label: "Watch folder ingestion", cells: ["A folder that is scanned continuously", "Newly added content entering the workflow automatically"], page: 128 },
        { label: "Connected storage sources", cells: ["Storage a team already uses", "Existing libraries brought in without rebuilding the storage workflow"], page: 121 },
        { label: "Bulk asset import", cells: ["An organisation moving what it already holds", "Large existing libraries, without uploading each file"], page: 130 },
        { label: "Asset upload API", cells: ["An external application", "Files produced within another system’s own process"], page: 262, current: true },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 262 }],
    },
    {
      kind: "accordion",
      id: "before-sending",
      eyebrow: "Considerations",
      heading: "What to settle before an application starts sending files",
      items: [
        {
          heading: "Which output counts as finished",
          summary: "An automated sender needs a rule for what belongs in the library.",
          icon: "filter",
          body: [
            "Creative software produces far more than final files: proxies, test renders, temporary exports and rejected selects. A sender that passes on everything fills the library with material nobody wants to find.",
            ["Write the rule down before building. It is far easier than tidying up later, and ", { text: "creative library maintenance", page: 111 }, " exists precisely to keep libraries free of duplicate, obsolete or poorly classified content."],
          ],
        },
        {
          heading: "What context should travel with a file",
          summary: "A file that arrives without context is harder for colleagues to find.",
          icon: "tag",
          body: [
            "The system that produced a file usually knows things the file name does not: the project, the product, the person who made it. Losing that on the way in means someone has to add it again by hand.",
            ["Decide which details matter, then check in ", { text: "API documentation", page: 273 }, " whether an integration can supply them, and how."],
          ],
        },
        {
          heading: "Sending the same file twice",
          summary: "Automated senders repeat themselves more often than people do.",
          icon: "copy",
          body: [
            "A job that fails halfway and runs again, or two systems configured to send the same output, can deliver duplicates without anyone noticing. Design the sender to keep track of what it has already delivered.",
            ["Across the library as a whole, ", { text: "duplicate asset management", page: 112 }, " helps identify unnecessary copies and can support storage optimisation."],
          ],
        },
        {
          heading: "Large files and fragile connections",
          summary: "A long transfer from a busy location is more likely to be interrupted.",
          icon: "upload",
          body: [
            "Video and high-resolution imagery take time to move, and connections on set, on location or at a supplier’s office are not always dependable. The sending application should know for certain whether each file arrived, and say so clearly when one did not.",
            "Silent failure is the real danger: a file that never arrived looks exactly like a file nobody sent.",
          ],
        },
        {
          heading: "Who should see what arrives",
          summary: "Access is easier to decide before files start flowing than after.",
          icon: "lock",
          body: [
            ["Agree which colleagues need the incoming material before the first send. In GetSibu, ", { text: "new folders can remain private", page: 154 }, " until access is explicitly granted, rather than exposing new content automatically."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 111 }, { kind: "pdf", page: 273 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 154 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Product photography that reaches marketing without a second step",
      team: "A photography team",
      situation: "An in-house photography team shoots products every day. Retouchers export final images to a shared folder, and marketing often waits until someone finds time to upload them.",
      steps: [
        { heading: "Finished means retouched", body: "The team agrees that only retouched exports marked as final should reach the library, while proxies and rejected selects stay on the studio’s own storage." },
        { heading: "The export step sends the file", body: "The studio’s developers extend the export application so that it sends each final file into the GetSibu environment through the asset upload API once retouching is done." },
        { heading: "Product details are embedded", body: ["Retouchers keep the product reference in each file’s embedded metadata, since metadata such as XMP ", { text: "can become part of the asset record", page: 22 }, " in GetSibu."] },
        { heading: "Access is agreed first", body: ["Before launch, the team and IT decide who should reach new product imagery, using ", { text: "creative asset permissions", page: 151 }, " to control access to that area of the library."] },
        { heading: "Marketing searches by product", body: "Once processing has finished, a marketer searches for the product reference and finds the day’s images without asking the studio." },
      ],
      outcome: "Finished product photography reaches the library as part of the studio’s normal export, and marketing no longer chases the studio to ask whether today’s images have arrived.",
      link: { page: 228, label: "GetSibu for Photography Teams" },
      sources: [{ kind: "pdf", page: 262 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 23 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the asset upload API",
      items: [
        {
          question: "When is the asset upload API a better choice than drag and drop upload?",
          answer: ["When software produces files on a regular basis, rather than a person handing them over now and then. ", { text: "Drag and drop upload", page: 127 }, " remains the simple route for adding a few assets by hand."],
        },
        {
          question: "Should an existing library be moved into GetSibu with the asset upload API?",
          answer: ["A one-off move is usually better treated as a migration than as an upload integration. ", { text: "Bulk import", page: 291 }, " allows organisations to move large quantities of media without manually uploading individual files."],
        },
        {
          question: "Is the asset upload API only worth using for video and other large files?",
          answer: "No. What decides it is where files come from rather than what kind of file they are: a publishing system that generates documents is as much a candidate as an editing system exporting footage.",
        },
        {
          question: "Who should look after an upload integration once it is running?",
          answer: "The team whose process produces the files, with support from the developers who built the integration. That team is the first to notice when output stops arriving or the wrong files start to appear.",
        },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 291 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on getting files into GetSibu",
      variant: "compact",
      pages: [261, 127, 128, 130, 143, 264],
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
