/**
 * 351 · Creative Productivity — /business-value/creative-productivity
 *
 * Angle (cluster: productivity, primary): the individual maker's time — separating file work (naming, filing,
 * describing, hunting, re-exporting) from creative work, where it interrupts a project and how to protect the
 * time that comes back without measuring creativity by volume. AI Creative Operations (59) owns overhead across
 * production and marketing; Creative Operations Efficiency (355) owns the system around the team.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of creative work and file overhead; states no GetSibu capability beyond the cited pages and supplies no figures." } as const;

const page: PageContent = {
  page: 351,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Business Value",
      lede: "What separates the file work that eats into a creative team’s week from the creative work the team exists to do, where GetSibu reduces manual organisation and searching, and how to protect the time that comes back.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 351 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Productivity measured by attention, not output",
      body: [
        "By reducing manual organisation and asset-search work, GetSibu can help teams focus on higher-value creative activities. The aim is not more assets per person but more of each person’s attention on concepts, craft and decisions.",
        "Creative productivity is awkward to measure because good work includes exploration that looks inefficient on paper. Discarded sketches, alternative edits and a long look at references are part of the job. File work is different: naming, filing, describing, hunting and re-exporting add nothing to the idea, yet they arrive with every project.",
        ["That distinction gives a team something honest to improve. Rather than pressing designers and editors to produce faster, reduce the overhead around the work, from ", { text: "AI-assisted tagging", page: 31 }, " that suggests tags during asset processing to ", { text: "search across creative libraries", page: 16 }, " instead of opening folders one at a time."],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["File work versus creative work", "Less manual organisation", "Less time hunting for assets", "Exploration is not inefficiency", "Protecting the time that comes back"],
      },
      highlight: {
        heading: "In practice",
        body: "An art director’s best hour goes on judging concepts, not renaming exports. Productivity improves when the second kind of hour shrinks, even if the first never gets any shorter.",
        tags: ["Art directors", "Designers", "Editors"],
      },
      glance: {
        heading: "Creative productivity in brief",
        facts: [
          { label: "Area", value: "Business value" },
          { label: "Reduces", value: "Manual organisation and asset-search work" },
          { label: "Protects", value: "Time for higher-value creative activities" },
          { label: "Across teams", value: "AI Creative Operations", page: 59 },
        ],
        actions: [{ kind: "route", path: "/business-value", label: "More in Business Value" }]
      },
      sources: [{ kind: "pdf", page: 351 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 59 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "interruptions",
      eyebrow: "Across a project",
      heading: "Where file work interrupts a creative project",
      stages: [
        { label: "Briefing", body: "Before making starts, creatives gather references and earlier work. Semantic search lets people describe the kind of asset they want in natural language, so gathering references can begin from an idea rather than a filename." },
        { label: "Making", body: "Mid-project, interruptions are small and frequent: a logo file, a product shot, a type sample. Filters for category, format, source, resolution and date can be combined to reduce a large library to a relevant set." },
        { label: "Filing", body: "New work has to be described or it is effectively lost. Approving suggested tags in bulk is lighter work than reviewing every file individually, which helps stop filing becoming a job of its own." },
        { label: "Revising", body: "Each round of changes tempts people to save another copy. Replacing an asset in place while earlier versions are retained keeps revision work in one record instead of a folder of near-identical files." },
        { label: "Handing over", body: "At the end, other people need the finished files. Sharing a saved search through a URL gives colleagues the set they need without the creative sending files one by one." },
      ],
      sources: [{ kind: "pdf", page: 14 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 78 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "protecting-time",
      eyebrow: "Considerations",
      heading: "Protecting creative time once file work shrinks",
      items: [
        {
          heading: "Decide where the recovered time should go",
          summary: "Time saved on file work is easily absorbed by more file work.",
          icon: "compass",
          body: [
            "Without a decision, freed time tends to fill with extra requests, meetings or yet more variations of the same piece. Leads who want the benefit to show should say what the time is for: deeper concept development, craft, or fewer late evenings before a deadline.",
          ],
        },
        {
          heading: "Do not turn productivity into volume",
          summary: "Counting assets produced rewards the wrong behaviour.",
          icon: "gauge",
          body: [
            "A team judged by output makes more files, not better ones, and a library crowded with variations is harder for everyone to search. Look instead at how much of the week goes on creative decisions and how often work is held up by file problems.",
          ],
          points: ["Share of time on creative decisions", "Delays caused by file problems"],
        },
        {
          heading: "Let the people who make the work shape the vocabulary",
          summary: "Terms that match how makers think make filing and finding easier together.",
          icon: "tag",
          body: [
            ["Designers and editors describe work by subject, mood, format and project. When the ", { text: "hierarchical tags and synonyms", page: 8 }, " a library uses reflect those terms, reviewers can judge suggested tags against the words the team already uses, and colleagues can later search with those same words."],
          ],
        },
        {
          heading: "Keep judgement with the team",
          summary: "Automation lightens organisation work; it does not replace creative review.",
          icon: "eye",
          body: [
            ["Checking a suggested tag takes a moment of attention, whereas reviewing a concept takes expertise, and the two should never be confused. Where a classification is wrong, authorised users can ", { text: "override AI tags", page: 48 }, " whenever they do not match the team’s intended taxonomy."],
          ],
        },
        {
          heading: "Notice the quieter gains",
          summary: "Some benefits show up as less friction rather than more output.",
          icon: "heart",
          body: [
            "Fewer interruptions from colleagues, fewer late corrections and less reconstruction of lost work rarely appear in a report. Asking the team what has become easier, and what still gets in the way, is a legitimate part of judging creative productivity.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 48 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh when judging creative productivity",
      variant: "chips",
      items: ["Share of the week spent on file work", "Interruptions from asset requests", "Time spent describing new work", "Revisions saved as separate copies", "How references are gathered", "Where recovered time actually goes"],
      sources: [{ kind: "pdf", page: 351 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative productivity",
      items: [
        {
          question: "What counts as higher-value creative activity?",
          answer: "Work that depends on the team’s skills: developing concepts, crafting detail, making editorial and design decisions and responding to feedback on substance. Renaming, filing and hunting for files are necessary, but they add little value of their own.",
        },
        {
          question: "Can file work be removed from creative roles altogether?",
          answer: "No, and it should not be. Some of it depends on the maker’s own context, such as the intention behind a piece or the project it belongs to. The realistic aim is to shrink the repetitive part and keep the part only the maker can do.",
        },
        {
          question: "How is creative productivity different from creative operations efficiency?",
          answer: ["Creative productivity looks at makers and their time. ", { text: "Creative operations efficiency", page: 355 }, " looks at the system around them, where centralised search, metadata, approvals and analytics can make operations more predictable."],
        },
        {
          question: "Does creative productivity benefit when a project mixes images, video, audio and documents?",
          answer: ["It often does, because mixed projects tend to spread their files across several places. ", { text: "Creative file discovery", page: 24 }, " in GetSibu brings images, video, audio and documents into a unified search experience."],
        },
      ],
      sources: [{ kind: "pdf", page: 355 }, { kind: "pdf", page: 24 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on giving time back to creative work",
      variant: "compact",
      pages: [59, 355, 356, 348, 31, 47],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest productivity pages." }],
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
