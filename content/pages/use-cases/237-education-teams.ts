/**
 * 237 · GetSibu for Education Teams — /use-cases/education-teams
 *
 * Angle (cluster: uc-communications): teaching material — course media, presentations, recordings and visual
 * resources — reused and revised by several members of staff from one term to the next, and handed on when modules
 * change hands. Internal Communications (239) addresses employees; Corporate Communications (240) addresses the public.
 * Never implies learner access, learning-platform integrations, or text generated from recordings.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how education teams typically prepare, teach and revise course material; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 237,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How an education team can keep course media, presentations, recordings and visual resources in one library that teaching staff reuse, revise and hand on from one term to the next.",
      visual: { diagram: "media-library", focus: "video,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 237 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Teaching material that improves from term to term",
      body: [
        "Education organisations can use GetSibu to manage course media, presentations, recordings and the visual resources that teaching depends on.",
        "Teaching material has an unusual life. A module’s slides, demonstration videos and diagrams are used, revised and used again every term, often by several members of staff, and pieces move between modules as courses are redesigned. When everything sits in personal drives, a lecturer who inherits a module inherits a folder of files named by date, and a diagram drawn for one course is redrawn for another because nobody knew it existed.",
        [
          "A shared library turns that material into something a whole department can build on. A ",
          { text: "creative team workspace", page: 90 },
          " gives staff one place to search, review, organise and collaborate around teaching assets, and ",
          { text: "asset discussion history", page: 75 },
          " lets a new convenor understand how feedback on a resource evolved over time.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Course material shared across staff", "Slides revised without losing last term’s", "Diagrams reused across modules", "Recordings kept with the module", "Modules handed on with their history"],
      },
      highlight: {
        heading: "In practice",
        body: "A lecturer taking over a module finds the previous convenor’s slides, demonstration videos and diagrams together, along with the comments colleagues left on them.",
        tags: ["Lecturers", "Learning technologists", "Course teams"],
      },
      glance: {
        heading: "Education teams in brief",
        facts: [
          { label: "Team", value: "Schools, colleges, universities and training teams" },
          { label: "Typical material", value: "Lecture recordings, slides, demonstration videos, diagrams and images" },
          { label: "Builds on", value: "Searchable Document Library", page: 27 },
          { label: "Supports", value: "Creative Library Navigation", page: 29 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 237 }, { kind: "pdf", page: 90 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 29 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "challenges",
      eyebrow: "Recurring challenges",
      heading: "What makes teaching material hard to keep in order",
      items: [
        {
          heading: "Modules change hands",
          summary: "The person who built a course is rarely the one teaching it a few years later.",
          icon: "users",
          body: [
            "Staff move between modules, take leave and retire. Their material stays on a drive, but the knowledge of what exists, and which version was last taught, tends to leave with them.",
            [{ text: "Asset ownership", page: 115 }, " provides context about who created or uploaded content, which tells a new convenor whom to ask about a file."],
          ],
        },
        {
          heading: "Visual resources get reinvented",
          summary: "Diagrams and images are redrawn because the originals cannot be found.",
          icon: "image",
          body: [
            "Illustrations, diagrams and photographs are among the most reusable teaching resources, yet they are usually embedded in slide decks and never saved on their own. The next person to need one draws it again.",
            [{ text: "Creative file discovery", page: 24 }, " is designed to reduce dependence on folder knowledge and on individual colleagues remembering where files were stored."],
          ],
        },
        {
          heading: "Recordings accumulate",
          summary: "Every recorded session adds another long, heavy file.",
          icon: "video",
          body: [
            "Recorded lectures and demonstrations build up quickly, and many are only accurate for a term or two before the content changes. Keeping all of them in active use makes the current recording harder to find.",
            [{ text: "Asset archiving", page: 108 }, " retains older recordings for reference without letting them get in the way of everyday discovery."],
          ],
        },
        {
          heading: "Borrowed images in slides",
          summary: "Teaching slides often include images with their own terms of use.",
          icon: "flag",
          body: [
            "Images from publishers, picture libraries and websites find their way into lecture slides, and permission to use them may be limited to teaching or to a period of time. Recording those limits once avoids every lecturer checking again.",
            [{ text: "Creative data governance", page: 339 }, " establishes rules around access, retention, usage and asset management, which is where such limits belong."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 115 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 339 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "teaching-year",
      eyebrow: "Term by term",
      heading: "A module’s material across the teaching year",
      stages: [
        { label: "Preparation", body: "Before term, the course team gathers last year’s slides, videos and readings. Searching across the entire library brings them together instead of opening folders one at a time.", page: 16 },
        { label: "Revision", body: "Slides and handouts are updated for the new cohort. Presentations can be replaced while their historical versions are retained, so last year’s deck is still there if a change does not work.", page: 99 },
        { label: "Peer review", body: "Colleagues look over revised material before teaching starts. Creative review gives them a central place to inspect the work, discuss changes and confirm the final version.", page: 69 },
        { label: "Teaching", body: "During term, a learning technologist checks each new recording through a streaming preview before the teaching team relies on it, without waiting for a full download.", page: 306 },
        { label: "Looking back", body: "After term, usage analytics help show which resources staff returned to and which went untouched, which guides what to revise next time.", page: 182 },
      ],
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 69 }, { kind: "pdf", page: 306 }, { kind: "pdf", page: 182 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Redesigning a module inherited from a colleague",
      team: "A university course team",
      situation: "A lecturer takes over a second-year module from a colleague who has moved to another department. The module needs redesigning before the new term, and the teaching team wants to reuse what still works.",
      steps: [
        {
          heading: "Last year’s decks are found by their content",
          body: ["The new convenor searches for terms from the syllabus, and ", { text: "AI document discovery", page: 53 }, " locates the lecture decks through the information inside them."],
        },
        {
          heading: "A diagram turns up from another course",
          body: ["Describing the diagram they need, the convenor finds one drawn for a different module through ", { text: "semantic search", page: 39 }, ", which interprets meaning rather than exact words."],
        },
        {
          heading: "A colleague from another department gets one folder",
          body: ["A lecturer from another department who is contributing a pair of sessions receives ", { text: "individual permissions", page: 157 }, " for the module’s folder and nothing else."],
        },
        {
          heading: "Colleagues comment on the new sessions",
          body: ["The teaching team reviews the redesigned slides, and each colleague’s point about a particular slide gets its own ", { text: "thread", page: 63 }, "."],
        },
        {
          heading: "Outdated sessions are retired",
          body: ["Sessions that no longer fit the module are removed through ", { text: "asset deletion", page: 109 }, " in line with the department’s policies, while the reusable diagrams stay in the library."],
        },
      ],
      outcome: "The module starts the new term built on its predecessor’s best material, and the next convenor will find this term’s decks, diagrams and recordings as easily as this one found last year’s.",
      link: { page: 99, label: "Document Version Management" },
      sources: [{ kind: "pdf", page: 53 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 109 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What education teams use",
      heading: "What an education team relies on in GetSibu",
      items: [
        {
          heading: "Resumable uploads",
          body: "A long lecture recording does not have to start its upload again from the beginning after a network interruption.",
          icon: "upload",
          points: ["Long recordings uploaded reliably", "Less time lost to dropped connections"],
          page: 137,
        },
        {
          heading: "A curriculum-shaped taxonomy",
          body: "Hierarchical tags can mirror how teaching is organised, from subject to course to topic, so resources are labelled the way staff think about them.",
          icon: "tag",
          points: ["Subject, course and topic", "Shared terms across a department"],
          page: 8,
        },
        {
          heading: "Saved searches for a module",
          body: "The search that gathers a module’s material can be saved and shared through a URL with everyone who teaches on it.",
          icon: "search",
          points: ["One view for the teaching team", "No copies passed around"],
          page: 17,
        },
        {
          heading: "Duplicate detection",
          body: "The same slide deck or image saved separately by several lecturers can be identified, including renamed and re-encoded copies.",
          icon: "copy",
          points: ["Copies across staff drives found", "Less confusion over which to use"],
          page: 40,
        },
        {
          heading: "Department access",
          body: "Departments and faculties can receive access to only the teaching libraries relevant to their work.",
          icon: "building",
          points: ["Each department’s material together", "Other departments’ drafts out of view"],
          page: 176,
        },
      ],
      sources: [{ kind: "pdf", page: 137 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 176 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for education teams",
      items: [
        {
          question: "Can an education team move years of course material off shared drives?",
          answer: [{ text: "Creative team migration", page: 298 }, " is about exactly that transition, from fragmented folders into a structured library, which suits a department whose material is spread across personal and shared drives."],
        },
        {
          question: "Can teaching staff bring a colleague into a discussion about a lecture deck?",
          answer: ["Yes. ", { text: "Team mentions", page: 66 }, " bring a colleague into the discussion on an asset, and folder-aware autocomplete helps make sure the person mentioned can see it."],
        },
        {
          question: "Can an education team protect assessment material before it is released?",
          answer: [{ text: "Creative security controls", page: 174 }, " help protect assets from unnecessary or unauthorised access, which matters for exam papers and assessment briefs held alongside ordinary course material."],
        },
        {
          question: "Can an education team keep audio recordings for language or music teaching?",
          answer: ["Yes. ", { text: "Audio is managed alongside other formats", page: 28 }, ", so listening exercises and recorded examples sit with the slides and videos they belong to."],
        },
      ],
      sources: [{ kind: "pdf", page: 298 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 174 }, { kind: "pdf", page: 28 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for teams managing teaching material",
      variant: "compact",
      pages: [99, 27, 16, 108, 236, 239],
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
