/**
 * 111 · Creative Library Maintenance — /features/creative-library-maintenance
 *
 * Angle (cluster: library-maintenance, primary): ongoing care that keeps duplicate, obsolete and poorly classified
 * content under control, as a routine rather than an occasional purge. Duplicate Asset Management (112) owns
 * working through copies; Asset Quality Management (113) owns approval and metadata workflows.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of maintaining a creative library over time; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 111,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "Where the clutter in a creative library comes from, the three kinds that matter most, and how a light, regular maintenance routine keeps a growing library trustworthy without a disruptive clean-up every year.",
      visual: { diagram: "media-library" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 111 }, { kind: "pdf", page: 57 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Small, regular care instead of an occasional purge",
      body: [
        "Ongoing maintenance helps stop a GetSibu library from filling up with duplicate, obsolete or poorly classified content.",
        "Clutter accumulates through normal work rather than neglect. Each campaign leaves spare exports and near-copies behind; products, logos and offers change, so yesterday’s material still looks current; tags get applied in a hurry, or by people with different habits. None of it is noticeable on the day it happens. It shows months later, when searches return too much and colleagues stop trusting what they find.",
        [
          "The usual alternative to maintenance is the big clean-up: a project that takes far longer than planned, removes too much or too little, and begins to decay as soon as it ends. ",
          { text: "AI library organisation", page: 57 },
          " helps teams maintain order as a library grows instead of facing a major manual clean-up after every campaign, and ",
          { text: "library health analytics", page: 196 },
          " can reveal growth, duplicates, inactive content and other patterns that show where attention is due.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Duplicate content", "Obsolete content", "Poorly classified content", "A routine, not a project", "An owner for each area", "Signals of library health"],
      },
      glance: {
        heading: "Maintenance in brief",
        facts: [
          { label: "Guards against", value: "Duplicate, obsolete and poorly classified content" },
          { label: "Signals", value: "Library Health Analytics", page: 196 },
          { label: "Copies", value: "Duplicate Asset Management", page: 112 },
          { label: "Approval and metadata", value: "Asset Quality Management", page: 113 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 111 }, { kind: "pdf", page: 57 }, { kind: "pdf", page: 196 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 113 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "kinds-of-clutter",
      eyebrow: "Three kinds of clutter",
      heading: "Where each kind of clutter comes from, and what keeps it down",
      tabs: [
        {
          label: "Duplicates",
          heading: "Copies that split attention",
          icon: "copy",
          body: [
            "Duplicates arrive quietly: a file downloaded and uploaded again, an image exported twice at different sizes, the contents of an old drive merged into the library alongside material that was already there. Each copy makes search results longer and raises the question of which one is right.",
            ["Finding them is a technical problem. ", { text: "AI duplicate detection", page: 40 }, " combines exact and perceptual hashing, which can find identical files and visually equivalent copies, including renamed and re-encoded ones."],
          ],
          points: ["Re-uploads of downloaded files", "Copies merged in from old storage"],
          link: { page: 112, label: "Duplicate Asset Management" },
        },
        {
          label: "Obsolete",
          heading: "Content that looks current but is not",
          icon: "clock",
          body: [
            "Obsolete material does the most harm precisely because it is still found and still looks usable: packaging for a discontinued product, a banner quoting an offer that has ended, a presentation with last year’s positioning.",
            ["Knowing when content stops being usable is half the answer, and ", { text: "expiry information", page: 104 }, " can help identify content that should no longer be used after a specified period. The other half is deciding whether each item is kept as history or removed."],
          ],
          points: ["Superseded products and identities", "Offers and messages that have ended"],
        },
        {
          label: "Poorly classified",
          heading: "Assets that search cannot place",
          icon: "tag",
          body: [
            "An asset with missing, inconsistent or wrong tags is present but effectively lost. The problem compounds, because colleagues who cannot find an asset tend to upload another copy of it.",
            ["Authorised users can ", { text: "override tags", page: 48 }, " whenever a classification does not match the team’s intended taxonomy. ", { text: "Tag analytics", page: 186 }, " identify frequently used or searched tags, which helps show whether the words people look for are the words assets actually carry."],
          ],
          points: ["Missing or inconsistent tags", "Terms that differ from what people search for"],
          link: { page: 113, label: "Asset Quality Management" },
        },
      ],
      sources: [{ kind: "pdf", page: 40 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 113 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "rhythm",
      eyebrow: "A maintenance rhythm",
      heading: "Moments when a little maintenance goes a long way",
      stages: [
        { label: "At intake", body: "Checking tags and metadata while material arrives costs far less than repairing them later, when nobody remembers the shoot or the brief." },
        { label: "During review", body: "Reviewers who spot a wrong tag or a stray copy can raise it in a comment there and then, rather than leaving it for a clean-up that may never come." },
        { label: "At campaign close", body: "Finished work is set aside as history, spare exports are removed, and pieces likely to be reused are checked for accurate tags and a clear status." },
        { label: "When something is replaced", body: "A new logo, product range or guideline edition is the moment to retire what it supersedes, before the old version keeps circulating." },
        { label: "At periodic reviews", body: "A regular look at the library’s health signals tells a team whether the routine is keeping pace or clutter is gaining ground again." },
        { label: "Before a reorganisation", body: "Moving clutter into a new structure only relocates it, so tidy the affected areas first and move less." },
      ],
      sources: [{ kind: "pdf", page: 111 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 196 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "sustainable",
      eyebrow: "Making it last",
      heading: "Keeping maintenance going once the first enthusiasm fades",
      items: [
        {
          heading: "Give every area an owner",
          summary: "When tidiness is everyone’s job, it tends to be nobody’s.",
          icon: "user",
          body: [
            ["Maintenance sticks when each area of the library has someone who knows its content and feels responsible for it. ", { text: "Contributor analytics", page: 185 }, " help organisations understand who is adding content and taking part in library activity, which often points to the natural owner of an area."],
          ],
          points: ["One named person per area", "Owners who know the content"],
        },
        {
          heading: "Keep sessions short and frequent",
          summary: "Brief, regular sessions stop maintenance turning back into a project.",
          icon: "calendar",
          body: [
            ["A short session after each campaign is easier to protect in a busy calendar than a long one every few months. Tagging work speeds up considerably when suggestions can be ", { text: "approved in bulk", page: 47 }, " rather than reviewed file by file."],
          ],
        },
        {
          heading: "Agree what “obsolete” means",
          summary: "Without a shared definition, one person’s clutter is another person’s reference material.",
          icon: "book",
          body: [
            "Write down which kinds of content count as obsolete, such as superseded identities, ended offers and discontinued products, and which kinds are kept as history. A shared definition prevents the same asset being archived by one owner and put back into use by another.",
          ],
        },
        {
          heading: "Fix causes, not only symptoms",
          summary: "Clutter that keeps returning points to a habit worth changing.",
          icon: "workflow",
          body: [
            ["If duplicates reappear after every campaign, the cause is often files being sent around as attachments. With ", { text: "team asset sharing", page: 78 }, ", what gets passed on is a saved search or library view rather than yet another copy of each file."],
          ],
        },
        {
          heading: "Remove with care",
          summary: "Maintenance is never a reason for hasty deletion.",
          icon: "trash",
          body: [
            ["A tidy-up session is exactly when someone removes a file another team needed. ", { text: "Asset deletion", page: 109 }, " is for authorised users acting according to organisational policies and permissions, and anything with historical value can be archived instead."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 185 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative library maintenance",
      items: [
        {
          question: "What are the first signs that a creative library needs maintenance?",
          answer: "Searches that return several near-identical results, colleagues asking which file is current, outdated material turning up in new work, and people starting to keep private folders again.",
        },
        {
          question: "Does creative library maintenance mostly mean deleting old content?",
          answer: "Rarely. Most of the work is correction: tags fixed, superseded material taken out of everyday view and the surviving copy of a file chosen with care. Deletion is the smallest part of the job, and the hardest to undo.",
        },
        {
          question: "How can AI help with creative library maintenance?",
          answer: ["It takes on repetitive classification. ", { text: "AI asset classification", page: 42 }, " helps categorise assets according to their content and available metadata, while decisions about what is obsolete and which copies stay remain with people."],
        },
        {
          question: "Does creative library maintenance differ for video, images and documents?",
          answer: "The kinds of clutter differ. Video tends to gather alternative cuts and exports at several sizes, image libraries fill with near-identical selects from each shoot, and documents with superseded editions of decks and guidelines that still look current.",
        },
      ],
      sources: [{ kind: "pdf", page: 42 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping a library in good order",
      variant: "compact",
      pages: [112, 113, 196, 57, 104, 186],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Order to Creative Chaos",
      conversionPage: 399,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 399 }],
    },
  ],
};

export default page;
