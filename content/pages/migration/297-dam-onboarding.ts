/**
 * 297 · DAM Onboarding — /migration/dam-onboarding
 *
 * FRAMED (claim: onboarding-assistance). The PDF paragraph for this page is withheld and never paraphrased. The page
 * describes onboarding as the adopting organisation's own work and never says GetSibu provides onboarding, rollout
 * help or instruction. Angle (cluster: migration-planning): moving teams from a configured library into
 * everyday use — readiness, waves, conventions, first tasks and the habits that decide adoption. Implementation (299)
 * owns configuration; Creative Team Migration (298) owns the wider people side of leaving fragmented folders.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how organisations bring teams into a new DAM; states no GetSibu capability beyond the cited pages and no GetSibu onboarding service." } as const;

const page: PageContent = {
  page: 297,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Plan how your own teams move into daily use of a new DAM: what should be ready before the first people arrive, how to introduce the library in stages, and which everyday habits show that the library has taken hold.",
      visual: { diagram: "migration-map" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 299 }, { kind: "pdf", page: 298 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "From a configured library to one people rely on",
      body: [
        "Onboarding is the stretch between a library being set up and a team using it without a second thought. Configuration and migration make the library possible; onboarding is what makes it the first place people look for work, share it and record decisions about it.",
        "It is organisational work more than technical work. People arrive with years of habits: paths they know by heart, private folders of favourite files, feedback sent by email. A library that is complete on paper can still be ignored if nobody shows why the new way is better for the task in hand, or if the first search someone tries comes back empty.",
        [
          "Onboarding rests on groundwork done earlier. ",
          { text: "DAM implementation", page: 299 },
          " involves configuring users, folders, permissions, integrations, metadata and workflows, and onboarding begins where that configuration meets the people who will use it.",
        ],
        [
          "The broader human side of leaving scattered storage is the subject of ",
          { text: "creative team migration", page: 298 },
          ". Onboarding is narrower and more practical: the sequence, conventions and first tasks that turn access into habit.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Readiness before the first arrivals", "Teams introduced in waves", "Conventions written down early", "Real tasks from the first day", "A go-to person within each team", "Questions gathered and acted on"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketing department invites one campaign team first. That team’s questions in its first weeks reshape the naming conventions before the rest of the department arrives.",
        tags: ["Marketing", "First team", "Conventions"],
      },
      glance: {
        heading: "Onboarding in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Owned by", value: "The organisation adopting the library" },
          { label: "Starts after", value: "DAM Implementation", page: 299 },
          { label: "Focus", value: "Habits, conventions and first tasks" },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 299 }, { kind: "pdf", page: 298 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "stages",
      eyebrow: "Stage by stage",
      heading: "How onboarding unfolds from preparation to routine",
      items: [
        { label: "Before anyone arrives", body: "The library is configured, conventions are written down, and the order in which teams will join has been agreed along with the reasons for it." },
        { label: "A first team", body: "One team with real deadlines and a willingness to report problems starts working in the library, while everyone else carries on as before." },
        { label: "The first days", body: "People complete ordinary tasks in the new library, such as finding a current logo or gathering a campaign set, rather than exploring features in the abstract." },
        { label: "Adjusting", body: "Questions and stumbles from the first team are collected, and conventions, folder names or access are corrected before more people depend on them." },
        { label: "Further waves", body: "Other teams follow in an order that suits their workload, each introduced by someone from a team that has already made the move." },
        { label: "Routine", body: "Old locations stop receiving new work, and onboarding becomes part of how new joiners start rather than a project of its own." },
      ],
      sources: [{ kind: "pdf", page: 299 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "ready",
      eyebrow: "Readiness",
      heading: "What should be in place before a team starts",
      variant: "chips",
      items: [
        "An account for everyone in the team",
        "The folders the team uses from the start",
        "Access checked by team members",
        "Naming and tagging conventions",
        "An agreed way to ask for review",
        "Connected tools the team depends on",
        "A first set of real tasks",
      ],
      sources: [{ kind: "pdf", page: 299 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "habits",
      eyebrow: "Habits that decide adoption",
      heading: "What onboarding has to establish in everyday work",
      items: [
        {
          heading: "Searching before asking",
          summary: "The first habit to build is looking in the library before messaging a colleague.",
          icon: "search",
          body: [
            "Old storage taught people to ask whoever might know. Onboarding is working when the first response to “where is it?” becomes a search, and when colleagues who are asked reply with a link into the library instead of an attachment.",
            ["Saved searches make that easier: ", { text: "frequently used searches can be saved and shared through a URL", page: 17 }, ", so a team lead can hand newcomers the views they will reach for most."],
          ],
        },
        {
          heading: "Describing new work consistently",
          summary: "Conventions only help if people apply them when they add material.",
          icon: "tag",
          body: [
            ["Agree how new assets are described, which terms the team uses and who looks after the vocabulary. GetSibu helps teams organise assets with structured folders and ", { text: "scalable taxonomies", page: 8 }, ", yet a taxonomy stays useful only while contributors keep to it."],
            "Early mistakes are cheap to correct, so check what the first team adds and fix inconsistent terms while the collection of new material is still small.",
          ],
        },
        {
          heading: "Feedback on the asset, not in the inbox",
          summary: "Reviews should move into the library along with the files.",
          icon: "approval",
          body: [
            ["If feedback keeps arriving by email, the library holds the files while decisions live somewhere else. Introduce review early by taking one real piece of work through the library’s ", { text: "creative approval workflow", page: 67 }, ", so the team sees its decisions recorded beside the asset."],
          ],
        },
        {
          heading: "New files added in one place",
          summary: "Onboarding is not finished while new work still lands in the old locations.",
          icon: "upload",
          body: [
            ["Agree a date after which new work goes only into the library, and make adding it there the easy option. For single files or small batches, ", { text: "drag and drop upload", page: 127 }, " lets people add material without configuring an integration."],
          ],
        },
        {
          heading: "Knowing whether it is working",
          summary: "Adoption shows in behaviour, and analytics can make that behaviour visible.",
          icon: "chart",
          body: [
            [{ text: "Contributor analytics", page: 185 }, " help organisations understand who is adding content and taking part in library activity, and ", { text: "most-searched tags", page: 193 }, " provide insight into what people frequently look for."],
            "Read together, they can hint at whether contributions are spreading beyond the first enthusiasts and whether the agreed vocabulary is the one people actually look for.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 17 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 193 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about DAM onboarding",
      items: [
        {
          question: "Which team should be onboarded first to a new DAM?",
          answer: "Avoid the extremes. A team in the middle of a launch has no room to adapt, and a team with little on its plate will not test the library properly; somewhere between the two gives honest feedback without putting a deadline at risk.",
        },
        {
          question: "What should happen when a first search in the new DAM comes back empty?",
          answer: "Treat it as useful feedback rather than a failure. Note the words that were tried, find where the material actually sits and adjust its description or the team’s conventions, so the next person’s search succeeds.",
        },
        {
          question: "Who should look after DAM onboarding inside an organisation?",
          answer: "Someone accountable for the library as a whole, since questions about conventions and access end up with them. Everyday questions are often better answered inside each team, by a colleague who knows its material, than by whoever configured the platform.",
        },
        {
          question: "How should people who join after onboarding get started in the DAM?",
          answer: "With the same essentials in a shorter form: the conventions, the searches their team relies on and the person to ask. Welcoming one newcomer is far simpler once the library already reflects how the team works.",
        },
      ],
      sources: [{ kind: "pdf", page: 299 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on bringing teams into the library",
      variant: "compact",
      pages: [299, 298, 8, 67, 17, 185],
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
