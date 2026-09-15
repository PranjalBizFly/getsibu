/**
 * 222 · GetSibu for In-House Creative Teams — /use-cases/in-house-creative-teams
 *
 * Angle (cluster: uc-studios-creators): the internal creative department as keeper of company-owned creative assets for the
 * whole organisation — moving from answering file requests to a library other departments use directly, with access,
 * approval and usage kept under the team's control. Creative Studios (220) owns mixed-format studio production; Brand
 * Teams (214) owns brand controls; Enterprise Marketing (223) owns governance at scale.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how in-house creative departments typically serve their organisation; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 222,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How an in-house creative team can give the whole company one source of truth for the creative assets it owns, so colleagues help themselves to approved material instead of queuing requests with the team.",
      visual: { diagram: "media-library", focus: "image,video,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 222 }, { kind: "pdf", page: 103 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The company’s creative assets, owned and organised in one place",
      body: [
        "Internal creative departments can use GetSibu to create one source of truth for the creative assets their company owns.",
        "An in-house team serves an unusually wide audience. Sales wants the latest product photography, HR needs recruitment visuals, product teams need images for release notes, and leadership needs a presentation template by this afternoon. Every request that begins “can you send me…” pulls a designer away from the work they were hired to do, and every file sent by email becomes another copy the team no longer controls.",
        [
          "A shared library changes that pattern. GetSibu gives teams ",
          { text: "a shared source of truth", page: 10 },
          " where permissions and approval workflows help people use and distribute the right content, so colleagues can take what they need from the library rather than asking the team for it.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Company-owned assets in one library", "Self-service for colleagues", "Approved material clearly marked", "Departments see what is relevant", "Fewer copies outside the team’s control"],
      },
      highlight: {
        heading: "In practice",
        body: "A product manager who needs an image for release notes finds the approved one in the library instead of waiting in the design team’s request queue.",
        tags: ["Designers", "Sales", "HR"],
      },
      glance: {
        heading: "In-house creative teams in brief",
        facts: [
          { label: "Team", value: "In-house creative departments" },
          { label: "Typical material", value: "Company photography, templates, product visuals, video" },
          { label: "Builds on", value: "Approved Asset Library", page: 103 },
          { label: "Supports", value: "Department Access", page: 176 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 222 }, { kind: "pdf", page: 10 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 176 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      eyebrow: "Before and after",
      heading: "From a request queue to a self-service library",
      beforeLabel: "The team as a file service",
      afterLabel: "A library colleagues use directly",
      before: ["The same files requested every week", "Assets emailed and saved to laptops", "Outdated templates still in circulation", "No record of which assets get used"],
      after: ["Saved views shared by link", "Access arranged by department", "Templates replaced in place", "Usage analytics on company assets"],
      sources: [{ kind: "pdf", page: 79 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 106 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the team uses",
      heading: "What an in-house team puts in place for the company",
      items: [
        {
          heading: "Approved-only views",
          body: "The version a colleague downloads from an approved-only view has already completed the required review, so nobody outside the team has to judge whether it is final.",
          icon: "check",
          points: ["Drafts stay with the creative team", "Colleagues choose from finished work"],
          page: 103,
        },
        {
          heading: "Department access",
          body: "Each department can receive access to only the creative libraries relevant to its work.",
          icon: "building",
          points: ["Sales sees sales material", "Work in progress kept back"],
          page: 176,
        },
        {
          heading: "Secure asset sharing",
          body: "Sharing can be controlled through permissions rather than relying only on unrestricted links, so the team decides who receives company-owned material.",
          icon: "lock",
          points: ["Access follows permissions", "Fewer open links in circulation"],
          page: 172,
        },
        {
          heading: "Asset ownership",
          body: "Ownership provides context about who created or uploaded content, so a colleague with a question about a file knows whom in the team to ask.",
          icon: "user",
          points: ["The maker of each file on record", "Questions reach the right designer"],
          page: 115,
        },
        {
          heading: "Asset lifecycle",
          body: "Assets can be supported from initial upload through review, approval and reuse to eventual deletion.",
          icon: "refresh",
          points: ["A defined path from upload to deletion", "Retirement as part of the plan"],
          page: 101,
        },
      ],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 101 }],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Opening the creative library to the rest of the company",
      team: "An in-house creative team",
      situation: "An in-house creative team spends much of each week answering requests from sales and HR for photography, templates and product visuals. It decides to open the library to those departments directly.",
      steps: [
        {
          heading: "Departments are set up as teams",
          body: ["Sales and HR are given ", { text: "consistent team-based permissions", page: 175 }, " covering the approved material they need, while work in progress stays outside that access."],
        },
        {
          heading: "Common requests become links",
          body: "The team saves the searches it hears requested most often and shares their URLs with sales and HR, so colleagues open the same views instead of asking.",
        },
        {
          heading: "A salesperson searches in their own words",
          body: "A new account manager describes the product photo they need rather than guessing a filename, and finds it without messaging the team.",
        },
        {
          heading: "A change request lands on the asset",
          body: ["HR asks for a different crop of a recruitment photo by commenting on the image, and the designer replies in the ", { text: "thread", page: 63 }, " when the new version is ready."],
        },
        {
          heading: "Stale assets are identified",
          body: ["After a few months, ", { text: "asset usage tracking", page: 106 }, " helps show which templates remain inactive, and the team archives them."],
        },
      ],
      outcome: "Requests to the team shift from “please send” to “please make”, and the files colleagues use are the ones the team maintains.",
      link: { page: 10, label: "One Source of Truth for Creative Teams" },
      sources: [{ kind: "pdf", page: 175 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 106 }, { kind: "pdf", page: 108 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Considerations",
      heading: "Decisions an in-house team makes when opening its library",
      items: [
        {
          heading: "What colleagues should see",
          summary: "Not every file the team produces is meant for the rest of the company.",
          icon: "eye",
          body: [
            "Working files, rejected concepts and unreleased product material are useful to designers but confusing, or risky, in the hands of colleagues elsewhere in the business.",
            [{ text: "Default-deny access", page: 154 }, " keeps new folders private until access is explicitly granted, so exposing material is always a deliberate step."],
          ],
        },
        {
          heading: "Rules for use, retention and deletion",
          summary: "Owned by the company does not mean usable forever.",
          icon: "shield",
          body: [
            "Photography of people who have left, shots of discontinued products and imagery licensed for one campaign all come with limits that colleagues outside the team will not know about.",
            [{ text: "Creative data governance", page: 339 }, " establishes rules around access, retention, usage and asset management, and ", { text: "asset deletion", page: 109 }, " lets authorised users remove assets in line with organisational policies."],
          ],
        },
        {
          heading: "Measuring whether self-service works",
          summary: "Fewer requests is the goal, but library activity tells the fuller story.",
          icon: "chart",
          body: [
            "A quieter inbox is encouraging but not proof. Signs that colleagues are finding what they need show up in the library’s own activity.",
            [{ text: "Most searched tags", page: 193 }, " give insight into what users are frequently looking for, and ", { text: "creative team analytics", page: 199 }, " provide visibility into how different groups interact with the library."],
          ],
        },
        {
          heading: "Copies left over from the email years",
          summary: "Files sent around for years leave duplicates behind.",
          icon: "copy",
          body: [
            "When a company’s assets have circulated by email and shared drives for a long time, the same photograph can arrive in the library several times under different names.",
            [{ text: "Duplicate asset management", page: 112 }, " helps identify unnecessary copies and can support storage optimisation once the library is in use."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 339 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 193 }, { kind: "pdf", page: 199 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 40 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for in-house creative teams",
      items: [
        {
          question: "Who decides what other departments can do in an in-house team’s library?",
          answer: ["That is a governance question. ", { text: "Creative asset governance", page: 114 }, " defines who can upload, edit, approve, download and manage assets, and it is worth agreeing before the library opens to the rest of the company."],
        },
        {
          question: "How can an in-house team flag photography whose usage rights are ending?",
          answer: [{ text: "Asset expiry information", page: 104 }, " can help teams identify content that should no longer be used after a specified period, which suits imagery licensed for a limited time."],
        },
        {
          question: "Can an in-house team mark which assets meet the brand’s requirements?",
          answer: [{ text: "Brand guardrail tags", page: 105 }, " are structured tags that identify assets complying with specific organisational requirements, so colleagues can look for material that meets them."],
        },
        {
          question: "Can an in-house team undo a template update?",
          answer: ["Earlier versions stay on record: ", { text: "file version history", page: 92 }, " keeps previous versions and allows older ones to be restored when required."],
        },
      ],
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 92 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for internal creative departments",
      variant: "compact",
      pages: [10, 103, 176, 106, 220, 223],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the closest studio and enterprise use cases." }],
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
