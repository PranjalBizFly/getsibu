/**
 * 284 · Dropbox Migration — /migration/dropbox-migration
 *
 * HELD draft (claim: storage-sources). Angle: bringing Dropbox content into the GetSibu workflow while maintaining
 * the metadata and structure that are relevant, in libraries shaped by the exchange of files with clients,
 * suppliers and freelancers. page 123 owns connecting Dropbox as a source; Metadata Migration
 * (286) and Folder Structure Migration (287) own the general practice. Nothing about setup, duration or support.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how libraries built by exchanging files are structured and described; states no GetSibu or Dropbox capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 284,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Work out which metadata and structure in a Dropbox library are worth maintaining as its content comes into GetSibu, and which only ever served the way files were passed between people.",
      visual: { diagram: "migration-map", focus: "metadata" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 284 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Keeping the metadata and structure that still describe the work",
      body: [
        "Dropbox content can be brought into the GetSibu workflow while maintaining relevant metadata and structure. The word that deserves attention is “relevant”: a good migration keeps what will help people later, not every trace of how files once changed hands.",
        "Structure in a long-used Dropbox account is worth judging level by level. A top level named after clients, with jobs beneath it, often still describes the work years later. Further down, transfer folders, repeated deliveries and labels that meant something only to whoever was sending files that week are usually noise.",
        "The same is true inside the files. Photographers and designers often embed credits, captions and keywords worth far more than anything typed in afterwards, while other files carry little beyond a date. Knowing which is which before the move turns maintaining relevant metadata into a plan rather than a hope.",
        [
          "Two neighbouring topics carry the detail: ",
          { text: "migration metadata preservation", page: 293 },
          " is about valuable information not disappearing during the move, and ",
          { text: "folder structure migration", page: 287 },
          " about existing folders being mirrored or remapped.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Dropbox content brought into GetSibu", "Relevant metadata maintained", "Relevant structure maintained", "Folder levels judged one by one", "Relevance decided before the move"],
      },
      highlight: {
        heading: "In practice",
        body: "An agency moving its Dropbox archive keeps client and job folders and photographers’ embedded credits, and leaves behind the transfer folders that only existed to pass files between people.",
        tags: ["Agencies", "Metadata", "Folder structure"],
      },
      glance: {
        heading: "Dropbox migration in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Brings", value: "Dropbox content into the GetSibu workflow" },
          { label: "Maintains", value: "Relevant metadata and structure" },
          { label: "Folder decisions", value: "Migration Folder Mapping", page: 294 },
        ],
      },
      sources: [{ kind: "pdf", page: 284 }, { kind: "pdf", page: 293 }, { kind: "pdf", page: 287 }, { kind: "pdf", page: 294 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "library-shapes",
      eyebrow: "By how the library grew",
      heading: "Three shapes a Dropbox library tends to take",
      tabs: [
        {
          label: "Agency jobs",
          heading: "Client and job folders built project by project",
          icon: "briefcase",
          body: [
            "An agency’s folders usually follow clients and jobs, often with a job number that links them to finance and project records. That structure still describes the work years later, which makes it worth maintaining.",
            ["The move is also a chance to make client separation explicit, because agencies can ", { text: "manage multiple client libraries from one platform", page: 162 }, " while maintaining separation between tenants."],
          ],
          points: ["Client and job names worth keeping", "Clients kept apart in the new library"],
        },
        {
          label: "Photography",
          heading: "Shoots delivered with rich embedded information",
          icon: "camera",
          body: [
            "Photographers commonly embed credits, captions, keywords and capture details in the files they deliver. In a Dropbox library these often matter more than the folder names, which may be no more than a shoot date.",
            ["Embedded information such as ", { text: "EXIF, XMP, creators and custom keywords", page: 286 }, " can be retained during migration, so a photographer’s descriptive work is not lost on the way."],
          ],
          points: ["Embedded description carried across", "Shoot-date folders matter less"],
        },
        {
          label: "Freelance network",
          heading: "Deliveries from many outside contributors",
          icon: "users",
          body: [
            "Teams that work with many freelancers accumulate folders named after people and delivery rounds. Who made the work is relevant; which folder they happened to use usually is not.",
            ["Keeping the contributor as information rather than as a folder is what ", { text: "asset attribution", page: 116 }, " supports: creators and contributors can remain associated with assets through collaboration and migration."],
          ],
          points: ["Contributors kept as information", "Delivery folders left behind"],
        },
      ],
      sources: [{ kind: "pdf", page: 162 }, { kind: "pdf", page: 286 }, { kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "what-is-relevant",
      eyebrow: "What is relevant",
      heading: "What served only the exchange compared with what is worth maintaining",
      columns: ["Served only the exchange", "Worth maintaining"],
      emphasis: 1,
      rows: [
        ["Folder levels", "Transfer and “for review” folders", "Client, brand and job folders"],
        ["Names", "Initials and one-off delivery labels", "Job numbers people still quote"],
        ["Embedded details", "Stale fields left by old templates", "Credits, captions and keywords"],
        ["Copies", "The same delivery saved in several places", "One asset for each piece of work"],
        ["Where a file sat", "Temporary drop locations", "Paths that record the work’s origin"],
      ],
      sources: [{ kind: "pdf", page: 284 }, { kind: "pdf", page: 132 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "Keeping a Dropbox migration faithful to how people will search",
      items: [
        {
          heading: "Let searchers define what is relevant",
          summary: "The people who will look for material know which details matter.",
          icon: "search",
          body: [
            "Before the move, ask producers, designers and account teams how they describe material when they need it: by client, campaign, photographer or product. The details they name are the metadata and structure worth maintaining; the rest can stay behind with the exchange that created it.",
          ],
        },
        {
          heading: "Rounds that were superseded",
          summary: "Exchange folders often keep every round of a delivery, not only the final one.",
          icon: "history",
          body: [
            [
              "Suppliers frequently send revised rounds into the same job folder, so earlier attempts sit beside the approved one. Decide whether those rounds are worth bringing across and, if they are, make it obvious which was final; ",
              { text: "asset statuses", page: 102 },
              " help teams distinguish drafts, approved content and other workflow states.",
            ],
          ],
        },
        {
          heading: "Proof that relevance survived",
          summary: "A migration meant to keep credits and job folders should show that it did.",
          icon: "check",
          body: [
            [
              "Sample assets from each shape of library, such as an agency job, a photographer’s shoot and a freelancer’s delivery, and confirm that credits, keywords and folder placement came through. ",
              { text: "Migration verification", page: 296 },
              " helps organisations confirm that important content and metadata have transferred correctly.",
            ],
          ],
        },
        {
          heading: "A new delivery route for outside contributors",
          summary: "Suppliers keep sending files where they always have unless someone tells them otherwise.",
          icon: "megaphone",
          body: [
            "Freelancers and agencies are used to delivering into familiar folders. Agree where new work should arrive once the migration is complete, and tell outside contributors directly, so nobody is left guessing.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 102 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about Dropbox migration",
      items: [
        {
          question: "Can a Dropbox folder structure come across as it is and be improved later?",
          answer: ["It can. ", { text: "Migration folder mapping", page: 294 }, " gives teams the flexibility to maintain existing organisation or create a new structure, so an arrangement that works well enough need not hold up the move while better ideas are tested with the people who search."],
        },
        {
          question: "What if photographers never embedded metadata in their Dropbox deliveries?",
          answer: ["Then folder and file names hold what little context exists, which makes keeping them more important. Once assets are processed, ", { text: "AI-assisted tagging", page: 31 }, " can suggest tags, so files that arrive undescribed still gain a starting point."],
        },
        {
          question: "How does a Dropbox migration differ from connecting Dropbox as a source?",
          answer: "Connecting centralises Dropbox content for the library. A migration also settles what the old folders were for, which metadata and structure to carry forward and where collaborators should deliver work from now on.",
        },
      ],
      sources: [{ kind: "pdf", page: 284 }, { kind: "pdf", page: 294 }, { kind: "pdf", page: 31 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on carrying metadata and structure across",
      variant: "compact",
      pages: [286, 287, 293, 294, 116, 296],
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
