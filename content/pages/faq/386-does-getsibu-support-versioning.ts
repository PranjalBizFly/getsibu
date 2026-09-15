/**
 * 386 · Does GetSibu Support Versioning? — /faq/does-getsibu-support-versioning
 *
 * Angle (cluster: versioning): the direct yes, how versions build up for different kinds of creative file, and
 * what to understand before relying on them. Creative Asset Versioning (91) owns replacing in place, 92 the
 * record, 94 restore, 97–99 each format, What Is Asset Versioning? (369) the concept.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative files are revised in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 386,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "FAQ",
      lede: "The short answer on versioning in GetSibu, how versions build up for video, images, documents and campaign files, and the points worth understanding before your team relies on them.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 386 }],
    },
    {
      kind: "definition",
      id: "short-answer",
      eyebrow: "Short answer",
      term: "Does GetSibu Support Versioning?",
      answer: "Yes. A file can be replaced while its previous versions stay available within the asset’s history.",
      detail: "Replacing an asset does not have to mean losing the work that came before it, because GetSibu maintains versions within the asset record. That helps a team avoid the confusion of copies saved as “final”, “final-v2” and “final-final”.",
      sources: [{ kind: "pdf", page: 386 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 91 }],
    },
    {
      kind: "overview",
      id: "longer-answer",
      heading: "One record for each piece of work, however often it changes",
      body: [
        "In the longer view, versioning gives each asset a history rather than leaving a folder to collect copies. File version history keeps a record of the earlier versions, and revision tracking helps a team understand what changed between them and which version is currently active.",
        "Evaluators often picture versioning as a safety net, and it is one. Its everyday value is plainer: the asset holds its active version, while the files it replaced stay in its history for whoever needs to see how the work developed.",
        [
          "For the idea in general terms, see ",
          { text: "What Is Asset Versioning?", page: 369 },
          ". ",
          { text: "Creative Asset Versioning", page: 91 },
          " looks at replacing assets in place and the naming habits it makes unnecessary.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Replace the file, keep the asset", "Earlier versions in the history", "A clearly active version", "Restore when work must go back", "Versions for video, images and documents"],
      },
      highlight: {
        heading: "In practice",
        body: "A retoucher uploads a corrected product image in place of the one marketing flagged. The earlier image stays in the asset’s history, so there is no reason to keep a private copy just in case.",
        tags: ["Design", "Marketing", "Retouching"],
      },
      glance: {
        heading: "Versioning in brief",
        facts: [
          { label: "Area", value: "Asset management" },
          { label: "Record kept", value: "File Version History", page: 92 },
          { label: "Active version", value: "Creative Revision Tracking", page: 100 },
          { label: "Works on", value: "Video, images and documents" },
        ],
        actions: [{ kind: "route", path: "/faq", label: "More in FAQs" }]
      },
      sources: [{ kind: "pdf", page: 386 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 369 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "by-kind-of-file",
      eyebrow: "By kind of file",
      heading: "How versions build up for different creative files",
      tabs: [
        {
          label: "Video",
          heading: "Cuts that follow one another",
          icon: "film",
          body: [
            "An edit produces a rough cut, a revised cut after feedback, a locked picture and often a late fix to a title card. Each one supersedes the one before, which is exactly the pattern versioning suits.",
            "In GetSibu, video teams can manage different cuts and revisions while keeping the version history associated with the asset.",
          ],
          points: ["Rough cut to final in one asset", "Earlier cuts kept for reference"],
          link: { page: 97, label: "Video Version Management" },
        },
        {
          label: "Images",
          heading: "Retouches and corrections",
          icon: "image",
          body: [
            "Images change through colour correction, retouching and small fixes such as a corrected price or product detail. Each fix supersedes the image that was in use, and a colleague who reuses the image later wants the corrected one.",
            "Marketing and design teams can maintain different versions of a visual asset in one structured record.",
          ],
          points: ["Corrections become versions", "The corrected image in use"],
          link: { page: 98, label: "Image Version Management" },
        },
        {
          label: "Documents",
          heading: "Decks and guidelines that keep changing",
          icon: "document",
          body: [
            "Presentations and guidelines are revised again and again and are often shared long after they were written, so an outdated copy can cause real problems. Replacing the document in the library, rather than adding another copy beside it, leaves colleagues less to choose between.",
            "Documents and presentations can be replaced while their historical versions are retained.",
          ],
          points: ["Revisions without extra copies", "Historical versions retained"],
          link: { page: 99, label: "Document Version Management" },
        },
        {
          label: "Campaigns",
          heading: "Many files moving through many rounds",
          icon: "megaphone",
          body: [
            "A campaign multiplies the problem, with many assets each going through its own rounds of feedback at the same time. Campaign teams can maintain versions of their creative files without creating separate, disconnected copies for every round.",
          ],
          points: ["Rounds of feedback on many assets", "No disconnected copies per round"],
          link: { page: 96, label: "Campaign Asset Versioning" },
        },
      ],
      sources: [{ kind: "pdf", page: 97 }, { kind: "pdf", page: 98 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 96 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "before-relying-on-it",
      eyebrow: "Before you rely on it",
      heading: "Points to understand about versions in GetSibu",
      items: [
        {
          heading: "Going back to an earlier version",
          summary: "An older version can be brought back when the work needs to return to it.",
          icon: "restore",
          page: 94,
          body: [
            "Restoring is useful when a revision turns out to be a step in the wrong direction, such as a new edit that loses something a client liked. GetSibu allows an older version to be restored when a team wants to return to a previous creative state.",
          ],
        },
        {
          heading: "Knowing which version was accepted",
          summary: "Versions show what the file looked like; approval history shows what was agreed.",
          icon: "approval",
          page: 77,
          body: [
            "The two records answer different questions. Approval history provides a record of review activity, which supports accountability and reduces confusion around which version was accepted.",
          ],
        },
        {
          heading: "Recovering from a mistaken replacement",
          summary: "Versioning can help when the wrong file is put in place.",
          icon: "refresh",
          page: 110,
          body: [
            "Uploading the wrong export over a finished asset is an easy slip to make. Versioning can support recovery when content is accidentally replaced, since the file that was there before is kept among the previous versions.",
          ],
        },
        {
          heading: "Versions versus separate assets",
          summary: "Not every new file should become a version of an existing one.",
          icon: "copy",
          body: [
            "A version should replace something that ought no longer to be used. A translated edition, a square crop or a shorter cut for another channel is needed at the same time as the original, so it is usually clearer as an asset in its own right.",
          ],
        },
        {
          heading: "Why a file changed",
          summary: "History shows how the work evolved; a short note explains the reason.",
          icon: "message",
          page: 95,
          body: [
            "File history provides context around how an asset has changed over time. A brief comment on the asset describing each significant revision makes that history far easier for the next person to follow.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 94 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 110 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 95 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Follow-up questions about versioning in GetSibu",
      items: [
        {
          question: "What should we do about copies of one file already saved under several names?",
          answer: [
            "Start by finding them. ",
            { text: "AI duplicate detection", page: 40 },
            " identifies identical files and visually equivalent copies, even when they have been renamed or re-encoded. Files that differ because they were genuinely revised need someone who knows the work to decide which one becomes the asset.",
          ],
        },
        {
          question: "Should superseded campaign files be kept as versions or archived?",
          answer: [
            "They serve different needs. Versions hold the earlier states of an asset that is still in use, while ",
            { text: "asset archiving", page: 108 },
            " retains historical content without letting it interfere with everyday discovery, which suits a campaign that has ended.",
          ],
        },
        {
          question: "Who should be allowed to replace files with new versions?",
          answer: [
            "That is a governance decision. ",
            { text: "Creative asset governance", page: 114 },
            " defines who can upload, edit, approve, download and manage assets, and it is reasonable to treat replacing a file as a form of editing when those rights are set.",
          ],
        },
        {
          question: "How should files be named once earlier versions are kept in the asset?",
          answer: "By what the work is, such as the campaign and the piece, with the name kept steady from one version to the next. Status words and version numbers in a filename go out of date, whereas the asset’s history already shows how the file changed.",
        },
      ],
      sources: [{ kind: "pdf", page: 40 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on versions and file history",
      variant: "compact",
      pages: [91, 92, 94, 100, 369, 97],
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
