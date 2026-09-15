/**
 * 299 · DAM Implementation — /migration/dam-implementation
 *
 * Angle (cluster: migration-planning): the configuration build itself — users, folders, permissions, integrations,
 * metadata and workflows, how they depend on one another, the order that avoids rework and the choices that are
 * costly to reverse. DAM Migration Strategy (289) owns understanding what exists; Migration Metadata Preservation (293)
 * owns keeping metadata through the move; DAM Onboarding (297) owns bringing people into the finished library.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of DAM configuration practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 299,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Work through the configuration of a new DAM in an order that avoids rework: who administers it, how folders and access fit together, which connections and metadata it needs, and the workflows that carry assets from draft to approved.",
      visual: { diagram: "migration-map" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 299 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Six areas of configuration that lean on one another",
      body: [
        "Implementation involves configuring users, folders, permissions, integrations, metadata and workflows. It is the stage at which decisions from a migration strategy and plan become the actual shape of the library that teams will open every day.",
        "The six areas are listed separately but rarely behave that way. Access is set against folders, so the structure has to exist first; review steps need the people involved to be able to reach the material under review; tag conventions decide how incoming material is described. Configured in the wrong order, they create rework, such as redrawing access after a folder redesign or re-describing assets that arrived before the vocabulary was ready.",
        [
          "Understanding what exists comes earlier, under ",
          { text: "DAM migration strategy", page: 289 },
          ", and implementation is the build that follows. Bringing people into the finished library is the concern of ",
          { text: "DAM Onboarding", page: 297 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Administrators named first", "Folders before access", "Access layered from broad to specific", "Connections chosen for a purpose", "Vocabulary settled before large imports", "Workflows from draft to approved"],
      },
      highlight: {
        heading: "In practice",
        body: "An agency configures structure and access for one client first, tests them with that account team, and only then repeats the pattern for its other clients.",
        tags: ["Agencies", "Configuration", "Repeatable patterns"],
      },
      glance: {
        heading: "Implementation in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Follows", value: "Digital Asset Migration Planning", page: 290 },
          { label: "Order matters for", value: "Folders, access and vocabulary" },
          { label: "Leads into", value: "Everyday use by teams" },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 299 }, { kind: "pdf", page: 289 }, { kind: "pdf", page: 297 }, { kind: "pdf", page: 290 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "areas",
      eyebrow: "What gets configured",
      heading: "What each area of implementation involves in GetSibu",
      items: [
        {
          heading: "Users",
          body: "Organisation administrators can manage access policies, users, folders and organisational settings, so implementation begins by deciding who carries that responsibility.",
          icon: "user",
          page: 158,
          points: ["Administrators named early", "Multi-factor authentication as added account protection"],
        },
        {
          heading: "Folders",
          body: "Folders set the main boundaries of the library. New folders can remain private until access is explicitly granted, which makes agreeing each folder’s audience part of creating it.",
          icon: "folder",
          page: 154,
          points: ["Top-level boundaries agreed first", "An audience for every new folder"],
        },
        {
          heading: "Permissions",
          body: "Hierarchical permissions combine broad organisational roles with detailed folder-level controls, and individual users can receive targeted access where roles alone are not granular enough.",
          icon: "lock",
          page: 178,
          points: ["Broad access set first", "Exceptions kept few and explained"],
        },
        {
          heading: "Integrations",
          body: "Connections to existing tools sit alongside the API, which developers can use to bring upload, search, collaboration and other supported workflows into custom applications.",
          icon: "plug",
          page: 241,
          points: ["Each connection given a purpose", "Custom applications planned with developers"],
        },
        {
          heading: "Metadata",
          body: "EXIF, XMP, file paths, creators and custom keywords can become part of the asset record, while hierarchical tags, synonyms, colours and inheritance support a taxonomy built to grow.",
          icon: "tag",
          page: 22,
          points: ["Fields the teams rely on identified", "One owner for the vocabulary"],
        },
        {
          heading: "Workflows",
          body: "GetSibu’s approval workflows cover requesting review, making changes and marking assets as approved, so each team’s existing review steps can be matched against that sequence.",
          icon: "approval",
          page: 67,
          points: ["Review steps matched to real work", "Only as many steps as people will follow"],
        },
      ],
      sources: [{ kind: "pdf", page: 158 }, { kind: "pdf", page: 336 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 178 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 241 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "order",
      eyebrow: "Sequence",
      heading: "An order of work that avoids reconfiguring later",
      intro: "Each step relies on decisions made in the step before it.",
      steps: [
        { heading: "Name the administrators", body: "Decide who owns organisation-level configuration before anything else, so every later decision has someone accountable for it.", icon: "key" },
        { heading: "Build the structure", body: "Create the agreed top-level folders and the main branches beneath them, leaving finer detail until teams start working.", icon: "folder" },
        { heading: "Layer the access", body: "Grant broad access to groups first, then folder-level detail for sensitive areas, then individual exceptions, and ask someone from each group to confirm what they can reach.", icon: "lock" },
        { heading: "Settle the vocabulary", body: "Finalise tag and metadata conventions before large imports, so incoming material is described once rather than corrected afterwards.", icon: "tag" },
        { heading: "Connect the tools", body: "Add the integrations the first teams need, and confirm that each one supports the workflow it was chosen for.", icon: "plug" },
        { heading: "Introduce the workflows", body: "Bring in review steps and statuses once the people taking part in review can reach the material they will be looking at.", icon: "approval" },
      ],
      sources: [{ kind: "pdf", page: 299 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "hard-to-undo",
      eyebrow: "Decisions with long consequences",
      heading: "Implementation choices that are costly to reverse",
      items: [
        {
          heading: "The top level of the structure",
          summary: "Everything else hangs from the highest folders.",
          icon: "layers",
          body: [
            "Access, navigation and team habits all form around the top level. Changing it after people have settled in means revisiting permissions and relearning locations at the same time, so it deserves the closest scrutiny before configuration starts.",
          ],
        },
        {
          heading: "How the tag vocabulary is governed",
          summary: "An open vocabulary is quick to start and slow to repair.",
          icon: "tag",
          body: [
            "When tags are added without guidance, near-duplicates appear quickly and search results split between them. A controlled vocabulary with an owner takes longer to agree but stays useful.",
            ["Suggested tags raise a related question: who looks after them. With ", { text: "AI tag approval", page: 47 }, ", teams can approve suggestions in bulk rather than reviewing every file individually, which makes that responsibility manageable."],
          ],
        },
        {
          heading: "What each status means",
          summary: "A status applied under one meaning is hard to reinterpret later.",
          icon: "flag",
          body: [
            ["If one team reads “approved” as signed off by the brand lead and another as ready for a client to see, the word stops protecting anyone. ", { text: "Asset statuses", page: 102 }, " help teams distinguish drafts, approved content and other workflow states, so write down what each state means before assets start carrying them."],
          ],
        },
        {
          heading: "What each integration sets in motion",
          summary: "A connection added in a hurry can become a permanent source of surprises.",
          icon: "webhook",
          body: [
            ["Every automated connection widens what happens without a person looking. ", { text: "Webhook automation", page: 257 }, " means events for assets, comments, approvals and other supported activity can trigger downstream workflows, so decide which downstream actions are genuinely wanted before connecting anything."],
          ],
        },
        {
          heading: "How material leaves everyday use",
          summary: "Without a rule, finished work piles up in daily results.",
          icon: "archive",
          body: [
            ["Decide early how content retires. ", { text: "Asset expiry information", page: 104 }, " can help teams identify content that should no longer be used after a specified period, and archiving retains historical work without letting it interfere with everyday discovery."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 47 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about DAM implementation",
      items: [
        {
          question: "What is the difference between DAM implementation and DAM migration?",
          answer: "Migration moves existing assets and their context into the new library; implementation configures the library they arrive in. The two usually run side by side, often with the same people making decisions for both.",
        },
        {
          question: "Does a DAM implementation have to be complete before any content is imported?",
          answer: "Not entirely. Secondary connections and refinements to workflows can follow once real use shows what is needed; the parts that imported material depends on are the ones worth finishing first.",
        },
        {
          question: "How can a DAM implementation be tested before teams depend on it?",
          answer: "Ask representative people from different teams to carry out their ordinary tasks with their own accounts: finding material, adding an asset, asking for review. Gaps in access or structure show up far more clearly in someone’s real work than in a review of the configuration.",
        },
        {
          question: "Can integrations be added after a DAM implementation is finished?",
          answer: [
            "Connections do not all have to arrive on the first day. Organisations can also ",
            { text: "request integrations", page: 260 },
            " for tools that are not already part of the supported integration ecosystem.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 260 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on configuring a new library",
      variant: "compact",
      pages: [289, 297, 158, 178, 241, 67],
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
