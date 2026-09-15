/**
 * 356 · Asset Management Efficiency — /business-value/asset-management-efficiency
 *
 * Angle (cluster: productivity): the running cost of a library lies in three jobs that repeat on different
 * triggers — tagging with every arrival, organising as the library grows, locating with every request — and the
 * efficiency question is how much of that repetition automation removes, tested on the team's own material.
 * AI Media Automation (55) owns the task inventory; AI-Powered Asset Management (45) owns the balance with human
 * approval; AI Library Organisation (57) owns keeping order over time.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of repetitive library work and how to test automation on it; states no GetSibu capability beyond the cited pages and supplies no figures." } as const;

const page: PageContent = {
  page: 356,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Business Value",
      lede: "Where the repetitive work of running an asset library comes from, what automation changes in the tagging, organising and locating that recur with every file and every request, and how to check, once automation is in use, that the effort has really moved.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 356 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Repetition that grows with the library",
      body: [
        "Automation helps reduce repetitive work associated with tagging, organising and locating assets. Those three jobs make up much of the routine cost of running a library, and each one recurs on a different trigger.",
        "Tagging recurs with every file that arrives. Organising recurs as the library grows and its structure has to absorb new material. Locating recurs with every request, including requests for the asset somebody found last month. Done by hand, the first grows with intake, the second with size and the third with the number of people who depend on the library, so a busy library can outgrow the people looking after it without anyone deciding that it should.",
        [
          "Automation of repetitive library tasks is the subject of ",
          { text: "AI media automation", page: 55 },
          ", and the balance between automated analysis and human approval is described under ",
          { text: "AI-powered asset management", page: 45 },
          ". The efficiency question is narrower: how much repetition actually leaves people’s desks, and what kind of work takes its place.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Tagging recurs with every arrival", "Organising recurs as the library grows", "Locating recurs with every request", "Describing shifting towards checking", "Vocabulary that decides what is found"],
      },
      glance: {
        heading: "Asset management efficiency in brief",
        facts: [
          { label: "Area", value: "Business value" },
          { label: "Reduces", value: "Repetitive tagging, organising and locating" },
          { label: "Starts at", value: "Asset Processing", page: 143 },
          { label: "Human control", value: "AI Tag Override", page: 48 },
        ],
        actions: [{ kind: "route", path: "/business-value", label: "More in Business Value" }]
      },
      sources: [{ kind: "pdf", page: 356 }, { kind: "pdf", page: 55 }, { kind: "pdf", page: 45 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 48 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "three-jobs",
      eyebrow: "Three repetitive jobs",
      heading: "What automation changes in tagging, organising and locating",
      tabs: [
        {
          label: "Tagging",
          heading: "From describing every file to reviewing suggestions",
          icon: "tag",
          body: [
            "Manual tagging is often the first job skipped under pressure, because it adds nothing visible on the day. Every skipped description becomes a search that fails later, so the cost is postponed rather than avoided.",
            [
              { text: "AI-assisted tagging", page: 31 },
              " can suggest tags during asset processing, so teams do not have to classify every file by hand. Where suggestions are sound, ",
              { text: "approving them in bulk", page: 47 },
              " makes large-scale organisation significantly faster than reviewing each file individually.",
            ],
          ],
          points: ["A starting description for each arrival", "Suggestions approved in bulk"],
        },
        {
          label: "Organising",
          heading: "Structure that keeps pace with intake",
          icon: "folder",
          body: [
            "Organising work arrives in waves. A campaign, a shoot or a migration brings material faster than anyone can place it, and the resulting backlog is what makes a library feel untidy long after the rush has passed.",
            [
              { text: "AI asset classification", page: 42 },
              " helps categorise assets according to their content and available metadata, which reduces repetitive manual organisation. Moving files is part of the same chore, and ",
              { text: "automated media import", page: 129 },
              " reduces the manual movement of files between storage locations.",
            ],
          ],
          points: ["Categorising helped by content and metadata", "Less copying between locations"],
        },
        {
          label: "Locating",
          heading: "Requests that do not start from nothing",
          icon: "search",
          body: [
            "Locating is repetitive in a way that is easy to miss. The same assets are requested again and again, often by different people who each run their own search or ask the same colleague.",
            [
              "Text inside files becomes something to search on, because ",
              { text: "OCR", page: 38 },
              " extracts it from images, documents, presentations and screenshots and adds it to the searchable asset information. Recurring requests can start from ",
              { text: "saved asset searches", page: 17 },
              " shared through a URL instead of being rebuilt each time.",
            ],
          ],
          points: ["Words inside files searchable once processed", "Frequent searches saved and shared"],
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 129 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "testing",
      eyebrow: "Once automation is in use",
      heading: "Checking that automation is paying back",
      items: [
        {
          heading: "Watch a delivery that represents real work",
          summary: "A gain seen on easy files will not hold across the whole library.",
          icon: "layers",
          body: [
            "Pick a delivery that mixes ordinary material with the awkward cases: similar-looking product shots, scanned documents, footage with no useful filename, material known only by internal jargon. Compare it with what describing and filing that kind of delivery involved by hand, in whatever terms your team already tracks.",
          ],
          points: ["Ordinary and awkward material together", "A record of today’s manual effort"],
        },
        {
          heading: "Compare checking with describing",
          summary: "Correction is part of the work that remains, so record it honestly.",
          icon: "check",
          body: [
            "Once suggestions exist, the work becomes accepting, correcting and occasionally rejecting them. Note where corrections cluster, such as a subject described in generic words or a campaign term only your organisation uses.",
            [
              "Correction is part of the design rather than a failure: authorised users can ",
              { text: "override AI tags", page: 48 },
              " whenever a classification does not match the intended taxonomy, and AI-generated tags can include ",
              { text: "tag confidence", page: 46 },
              " information that helps show how strongly the system associates a tag with an asset.",
            ],
          ],
        },
        {
          heading: "Check that the delivery can be found later",
          summary: "Tagging only pays back if the assets turn up when someone needs them.",
          icon: "search",
          body: [
            "Some time afterwards, ask colleagues who did not handle the delivery to find particular items using the words they would naturally choose. Searches that fail often point to gaps in vocabulary rather than to processing that did not happen.",
            [
              "That makes the vocabulary itself part of the efficiency case. The ",
              { text: "hierarchical tags, synonyms, colours and inheritance", page: 8 },
              " GetSibu supports give a team the means to build an organisation system that stays useful as the library grows.",
            ],
          ],
        },
        {
          heading: "Compare the tags applied with the tags searched",
          summary: "A gap between the two shows where tagging effort is not being repaid.",
          icon: "chart",
          body: [
            [
              { text: "Tag analytics", page: 186 },
              " identify frequently used or searched tags. If the tags people search for differ markedly from the tags most often applied, review effort may be going into descriptions few people use, and the vocabulary needs attention before more automation will help.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 48 }, { kind: "pdf", page: 46 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 186 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh when valuing automation in the library",
      variant: "chips",
      items: [
        "Size and frequency of new deliveries",
        "Material with no useful filename",
        "Text locked inside images and documents",
        "Vocabulary specific to your organisation",
        "Time set aside for reviewing suggestions",
        "Requests repeated by different people",
      ],
      sources: [{ kind: "pdf", page: 356 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset management efficiency",
      items: [
        {
          question: "Where does asset management efficiency show first: tagging, organising or locating?",
          answer: "It depends on where the library strains. A team receiving large deliveries tends to notice the change in tagging first, and a team fielding constant requests notices locating first. Gains in organising often appear later, as less clean-up is needed after each busy period.",
        },
        {
          question: "How does asset management efficiency differ from creative productivity?",
          answer: [
            { text: "Creative productivity", page: 351 },
            " is about protecting makers’ time for creative work. Asset management efficiency concerns the library’s own running costs: the tagging, organising and locating that happen whether or not anyone is creating that day.",
          ],
        },
        {
          question: "Which kinds of material gain least from automated tagging?",
          answer: "Material whose meaning depends on context the file does not show: a concept board, an internal campaign code, a photograph that matters because of the event it records. Those still need a person, and knowing which collections fall into that group sets realistic expectations for the rest.",
        },
        {
          question: "Can developers extend asset management efficiency beyond built-in processing?",
          answer: [
            "Yes. With ",
            { text: "developer automation", page: 278 },
            ", APIs and webhooks can automate repetitive asset management workflows, such as steps that connect the library with an organisation’s other applications.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 351 }, { kind: "pdf", page: 278 }, { kind: "pdf", page: 255 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reducing repetitive library work",
      variant: "compact",
      pages: [55, 45, 31, 47, 17, 351],
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
