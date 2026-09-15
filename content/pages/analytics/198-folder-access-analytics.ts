/**
 * 198 · Folder Access Analytics — /analytics/folder-access-analytics
 *
 * Angle (cluster: access-audit): the analytics reading of folder access maps — which areas of the library receive
 * attention, and what that says about structure, navigation and upkeep. Folder Access Maps (173) owns the
 * permissions-governance angle; Asset Access Analytics (197) owns individual assets.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how library structure is used in practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 198,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "See which areas of your creative library receive attention, and use that map to judge whether the folder structure still fits how colleagues actually find and use material.",
      visual: { diagram: "folder-access", focus: "folders" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 198 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Where in the library attention really goes",
      body: [
        "Folder access maps in GetSibu help organisations understand which areas of the library receive attention. Rather than examining assets one at a time, the idea is to read the folder structure as a map and see which parts of it draw people in.",
        "Folder structures record decisions made at a particular moment: by project, by client, by department or by year. The way people work moves on while the structure stays put. Some branches become thoroughfares that everyone passes through, others turn into backwaters nobody visits, and neither outcome was planned by whoever created the folders.",
        [
          "Folders are only one route through a library. ",
          { text: "Creative library navigation", page: 29 },
          " combines library views, folders, tags, collections and search, so attention by area shows how much colleagues still rely on the structure itself. For the governance side of the same picture, ",
          { text: "folder access maps", page: 173 },
          " help organisations understand how folders are accessed across their teams.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Attention by area of the library", "Structure compared with real use", "Busy branches and quiet ones", "Upkeep aimed where it matters", "Evidence before restructuring"],
      },
      highlight: {
        heading: "In practice",
        body: "Ahead of a folder reorganisation, a library manager checks which areas receive attention, so the busiest branches keep a familiar place while the neglected ones are rethought.",
        tags: ["Library managers", "Structure", "Navigation"],
      },
      glance: {
        heading: "Folder access analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "Which areas of the library receive attention" },
          { label: "Governance angle", value: "Folder Access Maps", page: 173 },
          { label: "Asset level", value: "Asset Access Analytics", page: 197 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 198 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 173 }, { kind: "pdf", page: 197 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "attention-patterns",
      eyebrow: "Reading the map",
      heading: "What attention to an area of the library can suggest",
      columns: ["What it may mean", "Worth considering"],
      rows: [
        { label: "Busy area with a clear purpose", cells: ["The structure works for the people using it", "Keep its place and names stable"] },
        { label: "Busy area holding mixed material", cells: ["People go there because nothing better exists", "Clearer sub-folders or more precise tags"] },
        { label: "Quiet area of finished work", cells: ["Material that has served its purpose", "Archiving or expiry information"] },
        { label: "Quiet area of current work", cells: ["Hard to find, unknown or not yet reachable", "Check access, naming and awareness"] },
        { label: "Attention spread thinly everywhere", cells: ["No shared starting point in the library", "Saved views for recurring tasks"] },
      ],
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "structures",
      eyebrow: "By kind of folder",
      heading: "Reading attention across different parts of a folder structure",
      tabs: [
        {
          label: "Campaign areas",
          heading: "Attention that rises and falls with the work",
          icon: "megaphone",
          body: [
            "Campaign folders are expected to be busy while a campaign is live and quiet once it ends. The informative case is the exception: an old campaign area that keeps attracting attention usually means colleagues are mining past work for something the current library does not offer.",
            "When that happens, gather what they keep returning for into a reusable view rather than leaving people to dig through a closed campaign each time.",
          ],
          points: ["Quiet after launch is normal", "Lasting attention signals reuse"],
        },
        {
          label: "Shared resources",
          heading: "Areas that should be the busiest in the library",
          icon: "palette",
          body: [
            "Logos, templates and brand photography are meant to serve everyone, so their areas ought to receive steady attention. A resource area that stays quiet suggests people are working from copies kept somewhere else.",
            [
              "That is a duplication problem as much as a structural one, and ",
              { text: "duplicate asset management", page: 112 },
              " helps identify the unnecessary copies that grow up when an official resource is ignored.",
            ],
          ],
          points: ["Steady attention expected", "Silence can mean stray copies"],
        },
        {
          label: "Archive branches",
          heading: "History that occasionally comes back to life",
          icon: "archive",
          body: [
            [
              "Historical areas are supposed to stay quiet. ",
              { text: "Asset archiving", page: 108 },
              " retains older content without letting it interfere with everyday discovery, so low attention there can simply mean the arrangement is doing its job.",
            ],
            "A sudden rise in attention to an archive branch is worth understanding. An anniversary, a returning product or a retrospective can make old material relevant again, and it may deserve a more visible home for a while.",
          ],
          points: ["Low attention is healthy", "Revived interest is worth noticing"],
        },
        {
          label: "Migrated folders",
          heading: "Structures inherited from old storage",
          icon: "folder",
          body: [
            [
              "After a move, a library often mirrors the drives it came from. ",
              { text: "Folder structure migration", page: 287 },
              " allows existing structures to be mirrored or remapped, and attention by area shows which inherited branches colleagues still use.",
            ],
            "Branches named after former staff, retired tools or old office locations tend to go quiet quickly, which makes them the first candidates to rethink in any later import.",
          ],
          points: ["Inherited branches tested by use", "Informs later imports"],
        },
      ],
      sources: [{ kind: "pdf", page: 17 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 287 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A second import shaped by how the first is used",
      team: "A nonprofit communications team",
      situation: "A nonprofit’s communications team moved its campaign imagery and documents into GetSibu, mirroring the old shared-drive folders. Before bringing in the events team’s archive, it wants to know whether mirroring was the right choice.",
      steps: [
        { heading: "Attention is mapped", body: "Folder access maps show attention concentrated in the campaign-by-year folders and the brand resources area, while deep branches named after former staff are rarely visited." },
        { heading: "Colleagues explain the pattern", body: "Staff say they move through the library by campaign and year; the branches named after people only reflected who had once looked after the drive." },
        { heading: "The next import is remapped", body: ["For the events archive, the team decides to ", { text: "remap the old structure during import", page: 133 }, " instead of mirroring it, arranging material by event and year."] },
        { heading: "Context survives the new structure", body: ["Creators and custom keywords can be ", { text: "retained during migration", page: 286 }, ", so information once implied by the old folder names is not lost."] },
        { heading: "Attention is mapped again", body: "Once the events archive has been in use for a while, the team looks at which of its new areas receive attention, to see whether the event-and-year arrangement is the one colleagues actually follow." },
      ],
      outcome: "The events archive arrives in a shape that matches how colleagues already move through the library, instead of reproducing a structure the first import showed nobody used.",
      link: { page: 238, label: "GetSibu for Nonprofits" },
      sources: [{ kind: "pdf", page: 198 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 286 }, { kind: "pdf", page: 238 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about folder access analytics",
      items: [
        {
          question: "What does folder access analytics show that asset-level views miss?",
          answer: "The structure. Attention to single assets says little about whether the folders around them help people find their way, while reading attention by area puts the arrangement of the library itself under review.",
        },
        {
          question: "Does a rarely visited folder mean its content can be archived?",
          answer: "Not on that evidence alone. Check whether colleagues can reach the folder, whether its material is current and whether it serves an occasional but important purpose before moving anything.",
        },
        {
          question: "When are folder access analytics most worth consulting?",
          answer: "Before reorganising folders, after a migration has settled and whenever colleagues say they cannot find things. Each is a moment when the fit between structure and use is in question.",
        },
      ],
      sources: [{ kind: "pdf", page: 198 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on folders and library structure",
      variant: "compact",
      pages: [173, 197, 29, 287, 108, 112],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Scale Your Creative Library",
      conversionPage: 397,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 397 }],
    },
  ],
};

export default page;
