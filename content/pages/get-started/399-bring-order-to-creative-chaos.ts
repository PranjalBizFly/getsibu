/**
 * 399 · Bring Order to Creative Chaos — /get-started/bring-order-to-creative-chaos
 *
 * Angle (clusters: library-organisation, conversion): the four causes of creative chaos (scattered storage,
 * inconsistent filenames, duplicate files, unclear versions), what each costs, how each is addressed, how the causes
 * reinforce one another, and what order makes possible for searching, organising, reviewing and collaborating.
 * Creative Library Maintenance (111) owns clutter routines; Creative Asset Versioning (91) owns "final-final" files.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how disorder builds up in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 399,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Get Started",
      lede: "The four habits that turn a creative library into chaos, what each one costs, how they feed one another, and what changes for searching, organising, reviewing and collaborating once the assets sit in a structured environment.",
      visual: { diagram: "version-record", focus: "files" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "page", page: 8, label: "Creative asset organisation" },
      ],
      sources: [{ kind: "pdf", page: 399 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Chaos is a pattern, not a single problem",
      body: [
        "Creative chaos often begins with scattered storage, inconsistent filenames, duplicate files and unclear versions. GetSibu brings those assets into a structured environment in which teams can search, organise, review and collaborate with more confidence.",
        "Each cause has an author who sees nothing wrong: the designer who saved a folder to a laptop, the editor who named an export “banner new”, the colleague who kept a spare copy of the logo to be safe. Because nobody experiences the whole pattern, nobody feels responsible for it, and the disorder is usually noticed only when someone new has to find something.",
        [
          "Order also has to be kept once it has been established. Stopping duplicates, obsolete files and poor classification from building up again is the subject of ",
          { text: "creative library maintenance", page: 111 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "The four causes",
        items: ["Scattered storage", "Inconsistent filenames", "Duplicate files", "Unclear versions", "Causes that reinforce each other"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer asked for the current brand presentation finds four candidates on two drives. Once the presentation is kept as one asset, its earlier versions sit behind it and its status shows whether it is approved.",
        tags: ["Brand", "Presentations"],
      },
      glance: {
        heading: "Order from chaos in brief",
        facts: [
          { label: "Area", value: "Get Started" },
          { label: "Causes", value: "Scattered storage, inconsistent filenames, duplicates, unclear versions" },
          { label: "Makes possible", value: "Searching, organising, reviewing and collaborating with confidence" },
          { label: "Kept up by", value: "Regular library maintenance" },
        ],
      },
      sources: [{ kind: "pdf", page: 399 }, { kind: "pdf", page: 111 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 102 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "causes",
      eyebrow: "Cause by cause",
      heading: "Where each cause starts, what it costs and how it is addressed",
      columns: ["How it usually starts", "What it costs", "How GetSibu addresses it"],
      rows: [
        { label: "Scattered storage", cells: ["Each team, tool or supplier picks its own location", "Nobody can see the whole collection", "One central location for connected drives, local infrastructure and direct uploads"], page: 6 },
        { label: "Inconsistent filenames", cells: ["Cameras, exports and personal habits name the files", "Searching by name misses much of the library", "Search through metadata, OCR, AI-generated tags, comments and semantic information"], page: 11 },
        { label: "Duplicate files", cells: ["Files downloaded, renamed and uploaded again", "Wasted storage and cluttered results", "Exact and perceptual hashing that catches renamed or re-encoded copies"], page: 40 },
        { label: "Unclear versions", cells: ["Revisions saved as new files beside the old ones", "The wrong file used in good faith", "Replacement in place, with previous versions retained"], page: 91 },
      ],
      sources: [{ kind: "pdf", page: 6 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "feedback-loops",
      eyebrow: "Why it compounds",
      heading: "How the four causes feed one another",
      items: [
        {
          heading: "Scattered storage breeds duplicates",
          summary: "When nobody knows where a file lives, the quickest option is to save another copy.",
          icon: "copy",
          body: [
            "A marketer who cannot find the logo on the shared drive downloads it from an old email and saves it to a campaign folder. The library now holds two logos, and the next person who searches may find either.",
            [{ text: "Duplicate reduction", page: 350 }, " can help cut unnecessary storage consumption and the confusion that multiple copies create."],
          ],
        },
        {
          heading: "Duplicates turn into rival versions",
          summary: "Two copies edited separately become two competing versions of one piece of work.",
          icon: "layers",
          body: [
            "Once a file exists twice, it is only a matter of time before someone corrects one copy and someone else corrects the other. Neither is wrong, and neither is complete.",
            ["Keeping revisions inside one asset record avoids that split, and ", { text: "creative revision tracking", page: 100 }, " helps teams understand what changed between versions and which version is currently active."],
          ],
        },
        {
          heading: "Unrecognisable names lead to rework",
          summary: "A file nobody can identify by its name tends to be made again.",
          icon: "text",
          body: [
            "When filenames say nothing useful, people give up searching sooner and ask a designer to recreate the asset. The new file arrives with a new name, and the collection grows more confusing.",
            ["Search that does not depend on names breaks the loop, and ", { text: "searching by what people remember", page: 393 }, " is the habit that replaces hunting by filename."],
          ],
        },
        {
          heading: "Version doubt spreads to the whole library",
          summary: "After using the wrong version once, people start keeping private copies, which restarts the cycle.",
          icon: "flag",
          body: [
            "A single mistake with an outdated file teaches colleagues to trust their own downloads over the shared library. Those private copies are the next round of scattered storage.",
            [{ text: "Creative approval management", page: 89 }, " creates a structured process for moving assets from draft to approved status, which gives people a reason to trust the shared copy again."],
          ],
        },
        {
          heading: "Fixing one cause at a time rarely holds",
          summary: "Because the causes reinforce each other, they need to be tackled together.",
          icon: "workflow",
          body: [
            "Removing duplicates while storage stays scattered only clears space for new copies. Consolidating storage without a versioning habit brings the rival versions along with it.",
            [{ text: "Complete asset management", page: 120 }, " combines organisation, metadata, AI analysis, collaboration, versioning, approvals and auditability into one asset management workflow."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 350 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 393 }, { kind: "pdf", page: 89 }, { kind: "pdf", page: 120 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "with-confidence",
      eyebrow: "With greater confidence",
      heading: "What order makes possible, activity by activity",
      tabs: [
        {
          label: "Search",
          heading: "Trusting that a search shows what exists",
          icon: "search",
          body: [
            "In a chaotic library, a search that finds nothing proves nothing, because the file may simply be somewhere else. Confidence arrives when the library is where things are.",
            [
              "On the ",
              { text: "media search platform", page: 13 },
              ", keywords can be combined with filters for file category, format, uploader, resolution and date to narrow a large set of results.",
            ],
          ],
          points: ["An empty result that means something", "Large result sets narrowed deliberately"],
        },
        {
          label: "Organise",
          heading: "Trusting that the structure will hold",
          icon: "folder",
          body: [
            "Order imposed once decays unless something keeps it. The confidence to organise comes from knowing that new material will meet the same standard as the old.",
            ["Teams can use approval and metadata workflows to ", { text: "maintain higher-quality libraries", page: 113 }, "."],
          ],
          points: ["New material held to the same standard", "Quality kept up through workflow"],
        },
        {
          label: "Review",
          heading: "Trusting that feedback concerns the right file",
          icon: "eye",
          body: [
            "Reviewers in a chaotic library can spend an afternoon commenting on a copy that was already replaced. Order means the file under discussion is the one that matters.",
            [{ text: "Creative feedback management", page: 74 }, " turns feedback into an organised workflow by attaching discussions directly to the relevant asset."],
          ],
          points: ["Comments attached to the relevant asset", "Fewer reviews of superseded copies"],
        },
        {
          label: "Collaborate",
          heading: "Trusting that everyone sees the same thing",
          icon: "users",
          body: [
            "Distributed teams feel chaos sharply, because a quick question about which file a colleague means turns into a message and a wait.",
            [{ text: "Remote teams", page: 88 }, " can collaborate around the same assets through comments, mentions, approvals and shared searches."],
          ],
          points: ["The same asset for every collaborator", "Shared searches instead of sent files"],
        },
      ],
      sources: [{ kind: "pdf", page: 13 }, { kind: "pdf", page: 113 }, { kind: "pdf", page: 74 }, { kind: "pdf", page: 88 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about bringing order to creative chaos",
      items: [
        {
          question: "Where should a team start when its creative library is in chaos?",
          answer: ["Usually with storage, since duplicates and rival versions are hard to judge while assets sit in several places. ", { text: "Automated asset ingestion", page: 121 }, " supports bringing content in from connected storage sources and direct uploads, and the other causes can then be tackled together."],
        },
        {
          question: "Can creative chaos return after a library has been organised?",
          answer: ["Yes, if the habits behind it continue. Files sent as attachments are a common way for duplicates to return, whereas sharing a ", { text: "saved view", page: 79 }, " through a URL gives colleagues the collection itself rather than new copies of it."],
        },
        {
          question: "Does bringing order to a creative library mean deleting a lot of files?",
          answer: ["Not necessarily. Much of the disorder comes from where files sit and how they are named, not from how many there are. Where removal is right, ", { text: "asset deletion", page: 109 }, " lets authorised users remove assets according to organisational policies and permissions, which keeps it a governed decision rather than a clean-up reflex."],
        },
        {
          question: "Do inconsistent filenames need fixing before assets are brought into order?",
          answer: "Rarely. Renaming a large collection by hand is slow and tends to introduce inconsistencies of its own. It is usually more productive to agree a naming convention for new work and let descriptions, rather than names, carry the load for older files.",
        },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on restoring order to a library",
      variant: "compact",
      pages: [8, 111, 40, 91, 100, 6],
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
