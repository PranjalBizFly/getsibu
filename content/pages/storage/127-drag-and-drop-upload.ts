/**
 * 127 · Drag and Drop Upload — /storage/drag-and-drop-upload
 *
 * Angle (clusters: ingestion, uploads): the direct route for individual assets and small batches, with no
 * integration to configure; when it is the right route, what follows the upload, and when a batch has
 * outgrown it. Automated Asset Ingestion (121) owns the overview of routes.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of everyday upload practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 127,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Learn when dragging files straight into GetSibu is the right way to add them, what happens between the drop and finding them again, and the habits that keep small uploads tidy.",
      visual: { diagram: "ingest-pipeline", focus: "upload" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 143 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The shortest route from a desktop into the library",
      body: [
        "Drag and drop lets users upload files to GetSibu directly. It makes adding an individual asset or a small batch easy, because no integration has to be configured before the files can go in.",
        "Every library needs a way in for material that belongs to no system. A freelancer’s finished illustration, a few product shots picked from a larger shoot and the signed-off version of a pitch deck all sit on somebody’s computer. If adding them means asking a colleague or completing a setup step, they stay where they are, and the library quietly falls behind the work.",
        "Small is the operative word. Drag and drop works best when the person adding the files has chosen them, knows what they are and can check afterwards that they are there. Moving the contents of an entire drive, or keeping pace with a location that fills up every day, is a different job with different tools.",
        [
          "For those jobs, ",
          { text: "bulk asset import", page: 130 },
          " moves an existing collection and ",
          { text: "watch folders", page: 128 },
          " can be scanned continuously for new content. Both sit beside direct uploads among the routes of ",
          { text: "automated asset ingestion", page: 121 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Direct upload from your computer", "Individual assets or small batches", "No integration to configure", "Files the uploader has chosen", "Processing once files arrive"],
      },
      highlight: {
        heading: "In practice",
        body: "At the end of an edit, a social media editor adds the finished cut-downs of a launch video from their laptop, with nothing to set up first.",
        tags: ["Social media", "Video", "Small batches"],
      },
      glance: {
        heading: "Drag and drop in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Suits", value: "Individual assets and small batches" },
          { label: "Setup", value: "No integration to configure" },
          { label: "Progress shown by", value: "Upload Progress", page: 141 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 141 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "moments",
      eyebrow: "When to use it",
      heading: "Moments when a direct upload is the right route",
      tabs: [
        {
          label: "Partner deliveries",
          heading: "A finished file from outside the team",
          icon: "briefcase",
          body: [
            "Work from freelancers, agencies and suppliers usually arrives as an attachment or a transfer link rather than in storage the team controls. There is no source to connect, and a one-off delivery would not justify connecting one.",
            "The moment of least effort is straight after the delivery lands, before the download is buried under the next one. Dragging the files in then turns a personal download into a shared asset.",
          ],
          points: ["No shared storage to connect", "Added while the delivery is still to hand"],
        },
        {
          label: "Shoot selects",
          heading: "The chosen frames rather than the whole card",
          icon: "camera",
          body: [
            "After a shoot, a photographer or art director often picks a small set of images for a campaign while the full take stays in production storage. Uploading only the selects keeps the shared library focused on material people will actually reuse.",
            ["Capture details written into the images do not have to be retyped: EXIF and similar information ", { text: "can become part of each asset’s record", page: 22 }, ", so the chosen frames keep their technical context."],
          ],
          points: ["A curated set, not everything", "Embedded details kept on the record"],
        },
        {
          label: "Drafts for review",
          heading: "Putting work where reviewers can respond",
          icon: "message",
          body: [
            ["A designer with a couple of drafts needs them somewhere colleagues can react. Once the files are uploaded, reviewers can ", { text: "leave comments directly on the assets", page: 62 }, ", and the team can request review through its ", { text: "approval workflow", page: 67 }, "."],
            "Adding drafts this way is a small action with a clear purpose, which is exactly the kind of job drag and drop suits.",
          ],
          points: ["Feedback attached to the files", "Review requested on the uploaded work"],
        },
        {
          label: "A trial sample",
          heading: "Testing the library with a few typical files",
          icon: "check",
          body: [
            "Before connecting storage or planning a large import, it is sensible to see how a handful of representative files behave once they are in: what their records show, which tags are suggested and how easily they can be found again.",
            "A small sample dragged in answers those questions with real material and commits the team to nothing larger.",
          ],
          points: ["Real files, not a demonstration", "No commitment to a larger route"],
        },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 31 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "after-the-drop",
      eyebrow: "Step by step",
      heading: "What happens after files are dropped in",
      intro: "The route is short, but each step between choosing files and finding them again has its own job.",
      surface: "muted",
      steps: [
        { heading: "Pick the files", body: "Choose the finished or reviewable versions and give them names a colleague would understand, since the filename is the first thing anyone sees.", icon: "check" },
        { heading: "Drag the selection in", body: "Drop the chosen files in and the upload starts from your own computer, with no shared location to arrange beforehand.", icon: "upload" },
        { heading: "Follow the progress", body: "Upload progress indicators show how many files are currently being processed, so nobody has to guess whether the batch is still moving.", icon: "gauge", page: 141 },
        { heading: "Processing takes over", body: "Each uploaded asset moves through stages such as metadata extraction, thumbnail generation and AI-related processing.", icon: "workflow", page: 143 },
        { heading: "Confirm it can be found", body: "Processing status separates a file that has uploaded successfully from one that is fully indexed and searchable.", icon: "search", page: 145 },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 141 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "habits",
      eyebrow: "Worth knowing",
      heading: "Habits that keep small uploads tidy",
      items: [
        {
          heading: "Search before adding",
          summary: "The file you are about to upload may already be in the library.",
          icon: "copy",
          body: [
            "Small uploads are a steady source of copies: two colleagues add the same image from the same email, or someone uploads a file again because they could not find it. A quick search first prevents much of that.",
            ["Where copies do slip in, ", { text: "duplicate asset management", page: 112 }, " helps identify unnecessary copies and can support storage optimisation."],
          ],
        },
        {
          heading: "Upload the file as delivered",
          summary: "What a file already records is worth more than anything typed in afterwards.",
          icon: "document",
          body: [
            "Screenshots of images, pictures re-saved through messaging apps and exports made with metadata switched off can all lose their embedded information before they reach the library. Adding the original file, rather than a re-saved copy of it, gives the asset record more to start from.",
          ],
        },
        {
          heading: "Keep within the upload rules",
          summary: "An easy route in still sits inside the organisation’s governance.",
          icon: "shield",
          body: [
            ["A simple way to add files is not an open door. ", { text: "Creative asset governance", page: 114 }, " defines who can upload, edit, approve, download and manage assets, so the people who can drag files in are the people the organisation intends."],
          ],
        },
        {
          heading: "Notice when a batch stops being small",
          summary: "Repeated upload sessions are a sign that another route would serve better.",
          icon: "layers",
          body: [
            "If one person spends an afternoon dragging in folder after folder, the job has outgrown direct uploads, and the handling itself becomes the risk: a folder gets missed, another goes in twice, and nobody can say afterwards what was covered.",
            ["Teams producing large amounts of video and imagery can use ", { text: "ingestion workflows designed around high-volume environments", page: 139 }, " instead of relying on individual effort."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 112 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 139 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about drag and drop upload",
      items: [
        {
          question: "Who can see files once they have been added by drag and drop?",
          answer: ["That depends on access to the place they were added. Where the folder is new, it ", { text: "can remain private", page: 154 }, " until access is explicitly granted, and ", { text: "folder-level permissions", page: 152 }, " allow that access to be set more precisely than across the whole organisation."],
        },
        {
          question: "What should happen to the copy still on my computer after a drag and drop upload?",
          answer: "Follow your team’s own practice for local copies. Once the library holds the file, treating that copy as the one colleagues use avoids a personal duplicate drifting away from it as edits are made.",
        },
        {
          question: "Who is credited for an asset added by drag and drop?",
          answer: ["Asset ownership provides context about who created or uploaded content, and ", { text: "asset attribution", page: 116 }, " lets creators and contributors stay associated with their work, so the person who uploaded a file need not be mistaken for the person who made it."],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on adding files to the library",
      variant: "compact",
      pages: [121, 141, 143, 130, 128, 136],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
