/**
 * 226 · GetSibu for Freelancers — /use-cases/freelancers
 *
 * Angle (cluster: uc-studios-creators): a solo professional's personal library, built up job by job over years, and
 * the reusable pieces buried inside it. No approvals, permissions or client environments: search, tagging and
 * organisation for one person. Creative Studios (220) owns multidisciplinary teams; Content Creators (227) own a
 * channel's output; Photography Teams (228) own large shoot collections.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how freelance creative professionals typically keep their files; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 226,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a freelancer can turn years of project folders and external drives into one personal library, and find the textures, templates and footage worth using again without remembering which job produced them.",
      visual: { diagram: "media-library", focus: "image,video,audio" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 226 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A personal library that outlasts every commission",
      body: [
        "With GetSibu, a freelancer can organise a personal creative library and quickly locate the assets that are worth reusing.",
        "A freelancer’s files are arranged around jobs rather than around what might be useful later. Each commission gets a folder, each busy year fills another external drive, and the texture made for one client or the stock footage shot for another ends up buried inside a finished project. With no colleague to ask, the only index is the freelancer’s own memory, and memory fades long before the files do.",
        [
          "A library changes where that knowledge lives. GetSibu’s ",
          { text: "creative file discovery", page: 24 },
          " is designed to reduce dependence on folder knowledge, which matters most when the person who made the folders is the only one who ever looked inside them. ",
          { text: "AI library organisation", page: 57 },
          " then helps keep order as the collection grows, instead of leaving a large manual clean-up for later.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Years of jobs in one library", "Reusable pieces found by description", "Tags suggested rather than typed", "Revisions kept inside each asset", "Finished jobs archived out of view"],
      },
      highlight: {
        heading: "In practice",
        body: "When a returning client asks for a file from a job several years back, a photographer finds it by client and project instead of plugging in one external drive after another.",
        tags: ["Designers", "Photographers", "Motion artists"],
      },
      glance: {
        heading: "Freelancers in brief",
        facts: [
          { label: "Team", value: "Independent creative professionals" },
          { label: "Typical material", value: "Own photography, templates, footage, sound and project files" },
          { label: "Builds on", value: "Natural Language Asset Search", page: 18 },
          { label: "Supports", value: "Creative Asset Organisation", page: 8 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 226 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 57 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A quiet week spent turning old drives into a library",
      team: "A freelance designer",
      situation: "Between commissions, a freelance designer finally deals with the external drives holding years of client work. Most of it is finished, but somewhere inside are textures, icon sets and photographs the designer would gladly use again.",
      steps: [
        {
          heading: "The drives come in, reorganised",
          body: ["The designer brings each drive’s contents into the library and ", { text: "remaps the old folder structure", page: 133 }, " so work is grouped by client and by type, not by whichever drive it happened to land on."],
        },
        {
          heading: "Suggested tags are approved in batches",
          body: ["Rather than labelling thousands of files alone, the designer ", { text: "approves suggested tags in bulk", page: 47 }, " and overrides the few that clash with their own vocabulary."],
        },
        {
          heading: "Copies from earlier drives surface",
          body: ["The same photographs turn up on several drives under different names, and ", { text: "duplicate detection", page: 40 }, " identifies them, including copies that were renamed or re-encoded along the way."],
        },
        {
          heading: "A reusable kit becomes a saved search",
          body: ["The search that brings up the designer’s favourite textures and icon sets is ", { text: "saved", page: 17 }, ", giving a view that can be reopened whenever a new job starts."],
        },
        {
          heading: "A new brief meets an old texture",
          body: ["Later, a brief calls for a grainy paper background. The designer describes it in plain words and, through ", { text: "natural language search", page: 18 }, ", finds one they made for their own practice years earlier."],
        },
      ],
      outcome: "Old work becomes a resource to draw on instead of an archive to dread, and finding a reusable piece no longer depends on recalling which job it was made for.",
      link: { page: 18, label: "Natural Language Asset Search" },
      sources: [{ kind: "pdf", page: 135 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 18 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What freelancers use",
      heading: "What a solo practitioner relies on day to day",
      items: [
        {
          heading: "Drag and drop upload",
          body: "Files from a current job can be added directly, one at a time or in small batches, without configuring an integration first.",
          icon: "upload",
          points: ["Add work as it is delivered", "Nothing to set up beforehand"],
          page: 127,
        },
        {
          heading: "AI-assisted tagging",
          body: "Tags can be suggested while files are processed, which spares one person from classifying every asset in the library by hand.",
          icon: "sparkles",
          points: ["No marathon tagging sessions", "Suggestions open to review"],
          page: 31,
        },
        {
          heading: "Thumbnails for old files",
          body: "Generated thumbnails give a visual preview of each asset, so a folder of cryptic old filenames can be checked by eye without downloading anything.",
          icon: "image",
          points: ["Recognise work at a glance", "No download needed to check a file"],
          page: 146,
        },
        {
          heading: "Version history",
          body: "When a returning client asks for changes, the revised file can replace the previous one while earlier versions stay on record and can be restored.",
          icon: "history",
          points: ["No “logo_final_new” filenames", "An earlier state available again"],
          page: 92,
        },
        {
          heading: "Metadata in the record",
          body: "EXIF, XMP, file paths, creators and custom keywords can become part of each asset record, so details written by a camera or an old keywording session are not lost.",
          icon: "database",
          points: ["Earlier keywords still count", "File paths kept as context"],
          page: 22,
        },
        {
          heading: "Archiving finished jobs",
          body: "Completed work can be archived, keeping it on record without letting it crowd the searches you run for current projects.",
          icon: "archive",
          points: ["Old jobs retained, not deleted", "Current work easier to reach"],
          page: 108,
        },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 108 }],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Before you start",
      heading: "What a freelancer should settle about a personal library",
      items: [
        {
          heading: "What you are free to reuse",
          summary: "Owning a file is not always the same as being free to use it again.",
          icon: "flag",
          body: [
            "Contracts differ on who owns what a freelancer produces. A texture developed for your own practice is yours to reuse; a finished illustration delivered to a client may not be. Recording the difference when work enters the library saves an awkward check at the moment you want to use it.",
            ["A ", { text: "structured taxonomy", page: 8 }, " can hold that distinction as tags, such as own work and client deliverable, next to the client and project names."],
          ],
        },
        {
          heading: "Folders by client or tags by type",
          summary: "Client folders suit delivery; tags that cut across them suit reuse.",
          icon: "folder",
          body: [
            "Organising only by client keeps each job tidy but hides its reusable pieces. Organising only by asset type makes reuse easy but strips away the context of the job. A common approach combines the two: folders for clients and projects, and tags for type, subject and style.",
            [{ text: "Creative library navigation", page: 29 }, " moves between broad exploration through folders and collections and highly specific discovery through search, so both habits have a place."],
          ],
        },
        {
          heading: "Client files you agreed not to keep",
          summary: "Some commissions require a freelancer to delete client material once the job is delivered.",
          icon: "trash",
          body: [
            "Confidential launches, unreleased products and personal data can come with an obligation to remove files after delivery. Noting that obligation when the job starts, perhaps as a tag on the job’s files, makes it easy to honour when the work is finished.",
            [{ text: "Asset deletion", page: 109 }, " lets authorised users remove assets according to organisational policies and permissions, and for a one-person library the policy is simply the terms of each contract."],
          ],
        },
        {
          heading: "Working from more than one place",
          summary: "Home, a shared studio and a client’s office can all fall in the same week.",
          icon: "cloud",
          body: [
            "Freelancers move between workplaces, and a file that lives only on the laptop left at home causes a detour at the worst possible moment. Deciding early where the working copy of the library lives avoids keeping several partial copies in step.",
            [{ text: "Cloud-based asset management", page: 303 }, " is designed so a creative library can be reached through supported clients and integrations, which matters more to someone without a fixed desk than to a team in one office."],
          ],
        },
        {
          heading: "Where the storage goes",
          summary: "Footage and high-resolution photography fill space faster than documents.",
          icon: "chart",
          body: [
            "Even a one-person library can grow large, particularly for freelancers who shoot video. Knowing which kind of material takes up the space helps decide what to archive and what to keep close.",
            [{ text: "Storage by category", page: 192 }, " analyses storage across video, image, document and audio, which shows where a solo library’s weight really sits."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 303 }, { kind: "pdf", page: 192 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for freelancers",
      items: [
        {
          question: "Does a freelancer need a large collection before a library is worth setting up?",
          answer: ["Not necessarily. For one person the difficulty is less about volume than about memory: even a modest collection becomes hard to navigate once several years and clients are mixed together, and starting a ", { text: "creative library", page: 373 }, " early is easier than reorganising a crowded one later."],
        },
        {
          question: "Can a freelancer bring old project drives into GetSibu?",
          answer: ["Assets can enter GetSibu through ", { text: "several sources", page: 135 }, ", including connected storage and direct uploads. For drives holding a lot of past work, ", { text: "bulk asset import", page: 130 }, " is designed to move a large existing library without uploading each file individually."],
        },
        {
          question: "How does a freelancer find a reusable file when the filename means nothing?",
          answer: ["Search draws on more than filenames: metadata, AI-generated tags and ", { text: "text extracted from inside files", page: 15 }, " all count. ", { text: "Combined filters", page: 19 }, " for format and date then narrow a long list of results."],
        },
        {
          question: "Can a freelancer keep sound effects and music in the same library as design work?",
          answer: ["Yes. ", { text: "Audio can be managed alongside other creative formats", page: 28 }, ", so sound files do not need a separate home from the images, video and documents they are used with."],
        },
      ],
      sources: [{ kind: "pdf", page: 373 }, { kind: "pdf", page: 135 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 28 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for independent creative work",
      variant: "compact",
      pages: [18, 31, 92, 220, 227, 228],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Give Your Creative Team One Source of Truth",
      conversionPage: 395,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 395 }],
    },
  ],
};

export default page;
