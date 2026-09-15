/**
 * 69 · Creative Review — /features/creative-review
 *
 * Angle (clusters: video-review, approvals): the review space — one central location to inspect work, discuss
 * changes and confirm final assets, and what that location needs for video, images and documents.
 * Creative Approval Workflow (67) owns the request–change–approve loop, Frame-Accurate Review (65) precise video
 * feedback, Collaborative Asset Review (87) distributed teams, Creative Team Workspace (90) the workspace itself.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative review is typically carried out; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 69,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "Why review tends to scatter across downloads, messages and meetings, what changes when it has a single home in the library, and what reviewers need from video, images and documents.",
      visual: { diagram: "media-library", focus: "video,image,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 69 }, { kind: "pdf", page: 1 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Inspect, discuss and confirm in the same place",
      body: [
        "Creative review in GetSibu provides a central location for teams to inspect work, discuss changes and confirm final assets. All three activities can happen around the same asset rather than in three different places.",
        "Review has a habit of spreading out. A reviewer downloads a file to look at it properly, types feedback into whichever tool happens to be open, and later confirms “the final one” in a conversation nobody writes down. Each step is reasonable on its own, yet together they leave a team unsure whether everyone looked at the same file, and which file was finally agreed.",
        [
          "A central location gives each activity a settled home: previews for inspecting, ",
          { text: "comments on the asset", page: 62 },
          " for discussing and approval for confirming. ",
          { text: "Revision tracking", page: 100 },
          " adds the missing piece by helping teams understand what changed between versions and which version is currently active.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Inspect work where it is stored", "Discuss changes on the asset", "Confirm final assets", "Everyone looking at the same file", "Review across asset types"],
      },
      highlight: {
        heading: "In practice",
        body: "A creative lead opens a new product video in the library, raises two changes on it, and a day later confirms the revised version as final, without a downloaded copy on anyone’s desktop.",
        tags: ["Creative leads", "Reviewers", "Producers"],
      },
      glance: {
        heading: "Where creative review fits",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Covers", value: "Inspecting work, discussing changes, confirming finals" },
          { label: "Works on", value: "Video, images and documents" },
          { label: "Formalised by", value: "Creative Approval Workflow", page: 67 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 69 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "review-location",
      eyebrow: "What it includes",
      heading: "What a central review location brings together",
      items: [
        {
          heading: "Quick visual checks",
          body: "Thumbnails give a fast visual preview of each asset, so nobody has to download the original to see what it is.",
          icon: "image",
          points: ["A set of drafts scanned quickly", "No local copies to keep track of"],
          page: 146,
        },
        {
          heading: "Large media without the wait",
          body: "Preview generation and streaming reduce the friction of reviewing large assets, which matters most for long or high-resolution footage.",
          icon: "video",
          points: ["Inspection without a full download", "Useful for heavy video files"],
          page: 313,
        },
        {
          heading: "Feedback on the work itself",
          body: "Remarks sit directly on the asset under review, and replies gather in threads around specific issues.",
          icon: "message",
          points: ["The discussion stays with the file", "A separate thread for each concern"],
        },
        {
          heading: "The people the review needs",
          body: "Colleagues whose view is needed can be mentioned in the discussion, and the autocomplete that offers them is aware of folder visibility.",
          icon: "mention",
          points: ["Specialists brought in when required", "Visibility taken into account"],
          page: 66,
        },
        {
          heading: "Revisions in one record",
          body: "Replacing an asset keeps its previous versions within the record, which helps stop revisions multiplying into files named final, final-v2 and final-final.",
          icon: "history",
          points: ["One asset, many versions", "No guessing at filenames"],
          page: 91,
        },
        {
          heading: "Finals that are easy to find",
          body: "After approval, approved-only views let colleagues reach the assets that have completed the required review process.",
          icon: "check",
          points: ["Confirmed work located quickly", "Drafts not mistaken for finished pieces"],
          page: 103,
        },
      ],
      sources: [{ kind: "pdf", page: 146 }, { kind: "pdf", page: 313 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 103 }],
    },
    {
      kind: "before-after",
      id: "spread-or-central",
      eyebrow: "The difference",
      heading: "Review with and without a central location",
      beforeLabel: "Review spread across places",
      afterLabel: "Review in one location",
      before: ["Files downloaded before anyone can look properly", "Reviewers commenting on different exports", "Several copies each called final", "The final choice agreed aloud and never recorded"],
      after: ["Work inspected through previews in the library", "Everyone discussing the same asset", "Versions held within one asset record", "Final assets confirmed through approval"],
      sources: [{ kind: "pdf", page: 69 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "asset-types",
      eyebrow: "By asset type",
      heading: "What review needs for different kinds of creative work",
      tabs: [
        {
          label: "Video",
          heading: "Review moments, not just whole files",
          icon: "video",
          body: [
            "Video review is about time. Reviewers need to watch at a sensible pace, stop at the moments that need work and say precisely where those moments are.",
            ["Comments can be attached to specific points on the timeline, and different cuts can be managed while the ", { text: "version history stays associated with the video", page: 97 }, ", so successive cuts belong to one asset rather than to a folder of separate files."],
          ],
          points: ["Notes at points on the timeline", "Cuts kept in one version history"],
          link: { page: 65, label: "Frame-Accurate Review" },
        },
        {
          label: "Images",
          heading: "Judge detail and consistency",
          icon: "image",
          body: [
            "Image review often turns on detail: a retouch that went too far, a crop that cuts into a product, colour that drifts away from the rest of a set. Reviewers need to see each image clearly and against its neighbours.",
            ["", { text: "Image version management", page: 98 }, " lets marketing and design teams keep different versions of a visual in one structured record rather than as scattered exports."],
          ],
          points: ["Detail and consistency across a set", "Versions of a visual in one record"],
        },
        {
          label: "Documents",
          heading: "Review what the pages actually say",
          icon: "document",
          body: [
            "Presentations, brochures and reports are reviewed for content as much as for design: figures, claims, names and the order of the argument. Reviewers checking facts often work with the source material open beside the draft, so what a comment says matters as much as where it points.",
            ["When a document is revised, ", { text: "document version management", page: 99 }, " allows it to be replaced while its historical versions are retained, so earlier drafts remain available for comparison."],
          ],
          points: ["Content checked as closely as design", "Earlier drafts retained on replacement"],
        },
      ],
      sources: [{ kind: "pdf", page: 64 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 98 }, { kind: "pdf", page: 99 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative review",
      items: [
        {
          question: "Is creative review in GetSibu limited to one type of asset?",
          answer: "No. GetSibu is designed for reviewing videos, images, documents and audio, although what reviewers look for differs: timing in video, detail in images and content in documents.",
        },
        {
          question: "How does creative review differ from the creative approval workflow?",
          answer: ["Creative review is where work is inspected, discussed and confirmed. The ", { text: "creative approval workflow", page: 67 }, " gives that confirmation a formal shape: request review, make changes and mark the asset as approved."],
        },
        {
          question: "How can a team be sure it is confirming the right version as final?",
          answer: ["Keep revisions on the same asset rather than uploading new files, then confirm through approval. ", { text: "Approval history", page: 77 }, " provides a record of review activity that reduces confusion around which version was accepted."],
        },
        {
          question: "Who should take part in a creative review?",
          answer: "Only the people whose judgement the work needs: usually the creator, whoever owns the brief and anyone who must check facts or brand requirements. Wider audiences can use the result once it has been approved.",
        },
      ],
      sources: [{ kind: "pdf", page: 69 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reviewing creative work",
      variant: "compact",
      pages: [67, 65, 87, 77, 103, 90],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest review topics." }],
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
