/**
 * 78 · Team Asset Sharing — /features/team-asset-sharing
 *
 * Angle (cluster: sharing-views): sharing saved searches and library views without creating duplicate copies of the
 * same files — the collaboration problem copies cause and how to move a team off them. Saved Asset Searches (17) owns
 * saving a search for reuse; Shared Creative Views (79) owns recurring collections shared through a URL.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative files get copied and shared in teams; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 78,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "How a team can pass on saved searches and library views instead of duplicate copies of files, why copies cause problems long after the request that created them, and how to change the habit.",
      visual: { diagram: "search-signals", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 78 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Passing on a way to the files, not another copy of them",
      body: [
        "Teams using GetSibu can share saved searches and relevant library views without creating duplicate copies of the same files. What passes between colleagues is a route to the assets; the assets themselves stay where they are.",
        "Copying is the default way creative files change hands, because it is quick at the moment someone asks. A designer exports product shots for a colleague, a producer drops finished cuts into another department’s folder, a marketer attaches the logo to an email. Each copy then begins a separate life: renamed, edited, forwarded and stored, with no connection to the original when that original is revised or withdrawn.",
        [
          "Sharing by reference avoids starting those separate lives. A ",
          { text: "saved search", page: 17 },
          " can be shared through a URL, and ",
          { text: "shared creative views", page: 79 },
          " do the same for recurring collections of assets. Revisions need not travel as new files either: ",
          { text: "replacing an asset in place", page: 91 },
          " retains its previous versions instead of adding another file to send round.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Share views, not duplicate files", "Saved searches passed on by URL", "Links instead of attachments", "Revisions without redistribution", "Fewer stray copies to keep track of"],
      },
      highlight: {
        heading: "In practice",
        body: "When a regional sales lead asks for the current product brochures, a marketing coordinator replies with the link to a saved search rather than attaching the files, so no further copies go into circulation.",
        tags: ["Coordinators", "Marketing", "Sales"],
      },
      glance: {
        heading: "Team sharing in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Shares", value: "Saved searches and library views" },
          { label: "Avoids", value: "Duplicate copies of the same files" },
          { label: "Builds on", value: "Saved Asset Searches", page: 17 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 78 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "where-copies-come-from",
      eyebrow: "The problem",
      heading: "Where duplicate copies of creative files come from",
      items: [
        {
          heading: "Answering a request quickly",
          summary: "The fastest reply to “can you send me that?” is usually a copy.",
          icon: "download",
          body: [
            "Exporting a few files and attaching them feels helpful, and for one request it is. Repeated across a team for months, it leaves many copies of the same assets in inboxes and download folders, each frozen at the moment it was sent.",
            "A shared link answers the same request without adding another file to anyone’s storage.",
          ],
        },
        {
          heading: "A private folder for every department",
          summary: "Teams outside the creative department often keep their own stash of shared material, just in case.",
          icon: "folder",
          body: [
            "Sales, communications and regional teams each assemble a folder of the brand and campaign files they use most, because they are not confident of finding them again. Those folders drift apart from the originals as soon as anything changes.",
            [
              { text: "Department access", page: 176 },
              " lets each department receive access to the creative libraries relevant to its work, which gives those teams a route to the shared material instead of a reason to hoard it.",
            ],
          ],
        },
        {
          heading: "Downloading, adjusting and uploading again",
          summary: "Files taken out for one project often return to the library as new assets.",
          icon: "upload",
          body: [
            "Someone downloads an image, crops it for a presentation and uploads both the crop and the original into a project folder. The library now holds the original twice, under different names and in different places.",
            "Nobody meant to duplicate anything, which is why copies made this way are rarely noticed until someone has to choose between two files that look the same.",
          ],
        },
        {
          heading: "Copying work that is still changing",
          summary: "Material in review is the worst kind to copy, because it will soon be out of date.",
          icon: "refresh",
          body: [
            "Drafts awaiting feedback, cuts that will be replaced and campaign sets that are still being assembled all go stale soon after they are exported. People working from those copies comment on superseded work, or publish something that has since been corrected.",
            "Waiting until a piece is finished before passing it on, or pointing colleagues to the work in the library with a clear note that it is still changing, avoids both problems.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 78 }, { kind: "pdf", page: 176 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "copies-or-views",
      heading: "Sending copies compared with sharing a view",
      columns: ["Sending copies of files", "Sharing a view in GetSibu"],
      emphasis: 1,
      rows: [
        ["What is passed on", "Exported files and attachments", "A saved search or library view"],
        ["How it travels", "Email, chat or a duplicated folder", "A URL"],
        ["When an asset is revised", "Every copy is left behind", "The asset is replaced in place"],
        ["Storage", "The same file kept many times over", "No duplicate copies created"],
        ["Whether it is finished", "Unknown once the file leaves the library", "Review status stays with the asset"],
      ],
      sources: [{ kind: "pdf", page: 78 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "moving-off-copies",
      eyebrow: "Step by step",
      heading: "Moving a team from copies to shared views",
      intro: "The change is partly a clean-up of what already exists and partly a new habit.",
      steps: [
        { heading: "Notice the repeat requests", body: "Note which files people ask for again and again, because those requests are where copies multiply fastest.", icon: "flag" },
        { heading: "Find the copies already made", body: "Duplicate asset management helps identify unnecessary copies already in the library and can support storage optimisation.", icon: "copy", page: 112 },
        { heading: "Settle on one asset", body: "Agree which asset stays, and treat future revisions as new versions of it rather than as new files.", icon: "layers" },
        { heading: "Answer requests with a link", body: "Turn each recurring request into a saved search and send its URL, so the people who asked, and anyone who asks later, go to the same place.", icon: "search" },
        { heading: "Retire the old copies", body: "Authorised users can then remove superseded copies in line with organisational policies and permissions.", icon: "trash", page: 109 },
      ],
      sources: [{ kind: "pdf", page: 112 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about team asset sharing",
      items: [
        {
          question: "How do permissions relate to sharing assets across a team?",
          answer: [
            { text: "Asset sharing can be controlled through permissions", page: 172 },
            " rather than relying only on unrestricted links. Folder-level permissions control access more finely than organisation-wide access, which makes it worth settling who should reach an area before its assets become a team’s shared reference.",
          ],
        },
        {
          question: "When is sending a copy still the right way to share a creative file?",
          answer: "When the file is genuinely leaving the working library, such as a finished deliverable handed to a printer. Among colleagues who work from the same library, sharing a view keeps everyone on the same assets.",
        },
        {
          question: "What should a team do about copies it has already sent out?",
          answer: "Copies in inboxes and download folders cannot be called back. Tell the people holding them where the material now lives, and answer their next request with a link, so the old copies stop being the files they reach for.",
        },
      ],
      sources: [{ kind: "pdf", page: 78 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on sharing without copies",
      variant: "compact",
      pages: [79, 17, 172, 112, 91, 88],
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
