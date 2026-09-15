/**
 * 133 · Folder Mapping — /storage/folder-mapping
 *
 * Angle (cluster: folder-mapping, primary): the import option of mirroring or remapping existing folders as
 * content is ingested — building a folder map, handling common folder patterns and avoiding pitfalls.
 * Folder Structure Migration (287) owns moving a structure as a whole; Migration Folder Mapping (294) owns
 * the keep-or-redesign decision. Nothing here says how permissions behave when folders are remapped.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of folder-structure practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 133,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Decide where imported folders should land in GetSibu, draw up a folder map before anything moves, and avoid the pitfalls that leave a library with two structures in it.",
      visual: { diagram: "migration-map", focus: "folders" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 133 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Deciding where imported folders land",
      body: [
        "During import into GetSibu, existing folder structures can be mirrored or remapped. That allows an organisation to adapt the system it used before, rather than being forced either to copy it unchanged or to abandon it.",
        "Mirroring reproduces the old hierarchy as it stands, with every folder in the same place under the same name. Remapping sends content from its old locations to different ones, so images filed under the photographer who shot them might land under the product they show instead.",
        "Whichever option is chosen, the useful artefact is a folder map: a written list of the existing areas and where each should appear in the library, agreed before anything is imported by the people who will actually use it.",
        [
          "When the choice forms part of a wider migration plan, ",
          { text: "migration folder mapping", page: 294 },
          " weighs keeping the existing organisation against creating a new structure.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Mirror the existing hierarchy", "Remap into a new structure", "A written folder map", "Meaning held in folder names", "Folders as the basis for access"],
      },
      highlight: {
        heading: "In practice",
        body: "A studio remaps a structure organised by photographer into one organised by product, because its marketing team searches by product and rarely knows who took each shot.",
        tags: ["Studios", "Marketing", "Structure"],
      },
      glance: {
        heading: "Folder mapping in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Options", value: "Mirror or remap existing folders" },
          { label: "Happens", value: "During import" },
          { label: "Structure as a whole", value: "Folder Structure Migration", page: 287 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 133 }, { kind: "pdf", page: 294 }, { kind: "pdf", page: 287 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "building-a-map",
      eyebrow: "Step by step",
      heading: "Building a folder map before importing",
      intro: "A folder map is cheap to change on paper and expensive to change once assets have landed.",
      steps: [
        { heading: "List the current structure", body: "Capture the existing hierarchy to a sensible depth, noting which folders are busy, which are dormant and which nobody recognises.", icon: "folder" },
        { heading: "Choose mirror or remap", body: "Decide whether the library should reproduce the structure or reorganise it, based on how people will look for things rather than how files happened to be saved.", icon: "compass" },
        { heading: "Draft the destinations", body: "For a remap, write down where each existing area goes; for a mirror, note anything worth tidying before it is reproduced faithfully.", icon: "map" },
        { heading: "Settle access alongside", body: "Because access can be controlled folder by folder, decide who needs each destination while the map is still a document.", icon: "lock", page: 152 },
        { heading: "Check a sample afterwards", body: "Open assets from several old locations and confirm that each sits where the map said it would.", icon: "check", page: 296 },
      ],
      sources: [{ kind: "pdf", page: 133 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "patterns",
      eyebrow: "Common patterns",
      heading: "How to map the folder patterns teams inherit",
      surface: "muted",
      tabs: [
        {
          label: "By client",
          heading: "Client folders people navigate by habit",
          icon: "briefcase",
          body: [
            "Folders named after clients are often the soundest part of an old structure, because teams already think in those terms. Mirroring them keeps navigation familiar on the first day in the new library.",
            "The work is usually in the names rather than the structure. The same client can appear under a full name in one place and an abbreviation in another, and settling one form before import avoids two folders for one client.",
          ],
          points: ["Familiar navigation kept", "One name for each client"],
        },
        {
          label: "By year",
          heading: "Dates doing the job of organisation",
          icon: "calendar",
          body: [
            "Structures filed by year or season are easy to create and hard to search, since people seldom remember when something was made. Remapping by brand, product or campaign usually serves searchers better.",
            "Capture dates often remain inside the files themselves, so the timeline is not lost when the folders stop being organised by it.",
          ],
          points: ["Organised by what people remember", "Dates still carried by the files"],
        },
        {
          label: "By status",
          heading: "Folders standing in for a workflow",
          icon: "approval",
          body: [
            ["Folders named “Drafts”, “For review” and “Approved” are a workaround for a missing process. In GetSibu, ", { text: "asset statuses", page: 102 }, " help teams distinguish drafts, approved content and other workflow states, so a team may prefer to express status that way rather than reproduce the folders."],
          ],
          points: ["Status as a workflow state", "Fewer folders that go stale"],
        },
        {
          label: "By person",
          heading: "Personal folders holding shared work",
          icon: "user",
          body: [
            ["Folders named after individuals often contain work the whole team needs. Remapping them by project or subject makes that content findable by colleagues, while ", { text: "asset ownership", page: 115 }, " still provides context about who created or uploaded it."],
          ],
          points: ["Work findable beyond its maker", "Who made it still on record"],
        },
      ],
      sources: [{ kind: "pdf", page: 133 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 115 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "pitfalls",
      eyebrow: "What to watch",
      heading: "Pitfalls when mapping folders during import",
      items: [
        {
          heading: "Reproducing depth for its own sake",
          summary: "A hierarchy that was hard to navigate on a drive stays hard to navigate after a mirror.",
          icon: "layers",
          body: [
            "A path many levels deep made sense to the person who built it. Mirroring it exactly passes that difficulty on to everyone else. Collapsing levels that hold a single subfolder, or that exist only to separate years, is a frequent improvement when remapping.",
          ],
        },
        {
          heading: "Losing the information in names",
          summary: "A remapped folder can take its meaning with it unless that meaning is kept somewhere else.",
          icon: "tag",
          body: [
            ["If a client’s name exists only in a folder title, moving the files elsewhere removes the clue. File paths are among the metadata that ", { text: "can be preserved", page: 132 }, ", which can keep the old location, and the client name within it, as part of each asset’s context."],
          ],
        },
        {
          heading: "The same campaign in two places",
          summary: "Content from several drives may bring near-identical folders with different names.",
          icon: "copy",
          body: [
            ["When a collection comes from more than one location, a campaign can appear twice under slightly different names. Mapping both to one destination gives the campaign a single home, but compare what the two folders contain before they are combined, since they may hold the same files. Within the library, ", { text: "duplicate detection", page: 40 }, " helps identify identical files and visually equivalent copies."],
          ],
        },
        {
          heading: "Changing the map halfway",
          summary: "Late changes leave some material in the old arrangement and some in the new.",
          icon: "refresh",
          body: [
            "Once part of a collection has landed under one structure, a change of plan produces a library with two logics in it. Agreeing the map first, and trying it on a representative area before the rest, prevents that.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 132 }, { kind: "pdf", page: 40 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about folder mapping",
      items: [
        {
          question: "What should a folder map do with folders nobody uses?",
          answer: "Leave them out unless someone can say why they matter. An abandoned folder reproduced in the library becomes one more place people feel they have to check, and material worth keeping from it can be moved to a sensible destination instead.",
        },
        {
          question: "How does folder mapping relate to folder structure migration?",
          answer: ["Folder mapping is the import option itself, mirroring or remapping as content comes in. ", { text: "Folder structure migration", page: 287 }, " looks at moving an existing structure across as a whole during a migration."],
        },
        {
          question: "Is a folder map worth keeping once the import is finished?",
          answer: "Yes. It explains to later colleagues why content sits where it does, and when someone asks where an old folder went, the map gives the answer without anyone having to hunt through the library.",
        },
      ],
      sources: [{ kind: "pdf", page: 287 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on structure during import",
      variant: "compact",
      pages: [294, 287, 132, 131, 152, 102],
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
