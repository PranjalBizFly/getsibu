/**
 * 395 · Give Your Creative Team One Source of Truth — /get-started/give-your-creative-team-one-source-of-truth
 *
 * Angle (clusters: centralisation, conversion): consistency across production, marketing, brand and agency teams,
 * which usually breaks at handovers where copies change hands; a shared library of approved content, with
 * permissions deciding who reaches each area. One Source of Truth for Creative Teams (10) owns the platform view,
 * team-by-team benefits and the upload-to-reuse workflow.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how consistency breaks between creative teams; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 395,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Get Started",
      lede: "How one shared library keeps production, marketing, brand and agency teams consistent with each other, why consistency tends to fail at the handovers between them, and how permissions let a single library serve every team without opening everything to all.",
      visual: { diagram: "folder-access", focus: "team" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "page", page: 151, label: "Creative asset permissions" },
      ],
      sources: [{ kind: "pdf", page: 395 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Consistency is won or lost where one team hands work to another",
      body: [
        "A shared creative library can bring consistency to production, marketing, brand and agency teams. In GetSibu, everyone can work from the same approved content, and permissions control who is able to reach the different areas of the library.",
        "Handovers are where consistency tends to slip. Production delivers a film to marketing, marketing sends a toolkit to a regional office, the brand team briefs an agency, and at each step a copy changes hands. From then on two teams hold different files without realising it: the sender corrects its master, and the receiver keeps using what it was given.",
        [
          "A shared library can take the copy out of the handover, and with it the moment at which versions start to diverge. The wider case for working this way, team by team, is set out in ",
          { text: "One Source of Truth for Creative Teams", page: 10 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key ideas",
        items: ["Consistency breaks at handovers", "Approved content every team shares", "Access decided area by area", "Client work kept apart for agencies", "Assets opened in place, not passed on"],
      },
      highlight: {
        heading: "In practice",
        body: "When marketing has a question about a delivered film, it mentions the editor in a comment on the film itself, so the question and its answer stay with the asset instead of disappearing into an inbox.",
        tags: ["Production", "Marketing"],
      },
      glance: {
        heading: "A shared source of truth in brief",
        facts: [
          { label: "Area", value: "Get Started" },
          { label: "Shared by", value: "Production, marketing, brand and agency teams" },
          { label: "Kept consistent by", value: "Approved content and permissions" },
          { label: "Foundation", value: "Centralised Creative Asset Library", page: 6 },
        ],
      },
      sources: [{ kind: "pdf", page: 395 }, { kind: "pdf", page: 10 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 6 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "handovers",
      eyebrow: "Why it matters",
      heading: "Handing over copies, or handing over inside one library",
      beforeLabel: "Handing over copies",
      afterLabel: "Handing over in a shared library",
      before: ["Files exported and sent to the next team", "Every team keeping a set of its own", "Sign-off confirmed in a passing message", "Access handed out by forwarding links"],
      after: ["The next team opens the asset where it lives", "Teams working from the same approved content", "Approval recorded in the asset’s status history", "Sharing controlled through permissions"],
      sources: [{ kind: "pdf", page: 10 }, { kind: "pdf", page: 395 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 172 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "four-handovers",
      eyebrow: "Where consistency breaks",
      heading: "Four handovers a shared library changes",
      tabs: [
        {
          label: "Production to marketing",
          heading: "A film that keeps changing after delivery",
          icon: "film",
          body: [
            "Films are rarely finished when first delivered. A legal line changes, a price is updated, a shot is swapped, and each change produces a file that has to reach every team still using the previous one.",
            [
              { text: "Video version management", page: 97 },
              " lets teams handle different cuts and revisions while the version history stays associated with the asset, which gives marketing one asset to return to rather than a folder of renamed exports.",
            ],
          ],
          points: ["Revisions kept with one asset", "No renamed exports to reconcile"],
        },
        {
          label: "Brand to marketing",
          heading: "Approved work kept apart from work in progress",
          icon: "palette",
          body: [
            "Marketing teams move quickly and take whatever looks finished. When drafts sit beside approved assets, a draft eventually finds its way into a campaign.",
            ["Brand teams can use ", { text: "approval gates", page: 71 }, " to ensure that approved creative assets are separated from drafts and work-in-progress materials."],
          ],
          points: ["Drafts separated from finished work", "Campaigns built from approved material"],
        },
        {
          label: "Across clients",
          heading: "Each client’s work kept to its own library",
          icon: "briefcase",
          body: [
            "An agency hands work to many clients at once, and sending one client another client’s material is the most damaging inconsistency of all.",
            ["Agencies can use GetSibu to ", { text: "maintain client-specific libraries and review workflows", page: 72 }, " while keeping different clients isolated from one another."],
          ],
          points: ["A library for each client", "Review kept inside the client’s space"],
        },
        {
          label: "Central to regional",
          heading: "Local teams using central material correctly",
          icon: "globe",
          body: [
            "Regional teams adapt central material for their markets and need to find it without waiting on head office, yet not everything produced centrally is ready for every market.",
            [
              "Brand teams can ",
              { text: "organise approved assets by campaign, region or market", page: 83 },
              ". Departments can also be given access to only the creative libraries relevant to their work.",
            ],
          ],
          points: ["Approved assets arranged by market", "Access limited to relevant libraries"],
        },
      ],
      sources: [{ kind: "pdf", page: 97 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 83 }, { kind: "pdf", page: 176 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "agreements",
      eyebrow: "Considerations",
      heading: "What teams should agree before calling a library the source of truth",
      items: [
        {
          heading: "What “approved” means",
          summary: "Consistency depends on every team reading a status the same way.",
          icon: "approval",
          body: [
            "If one team treats “approved” as signed off by brand and another as ready for review, the label stops meaning anything, and the library becomes a new source of confusion.",
            [{ text: "Asset statuses", page: 102 }, " help teams distinguish drafts, approved content and other workflow states; agreeing what each state requires is the organisation’s decision."],
          ],
        },
        {
          heading: "Who can open each area",
          summary: "A shared library does not have to be visible to everyone in full.",
          icon: "lock",
          body: [
            "Production rushes, unreleased campaigns and material for a pitch all belong in the library, but not in front of every team that uses it.",
            [{ text: "Permission hierarchies", page: 178 }, " combine broad organisational roles with more detailed folder-level controls, so a department can share access to most of the library while a sensitive project stays narrower."],
          ],
        },
        {
          heading: "Who looks after the shared structure",
          summary: "A library that several teams depend on needs a clear owner.",
          icon: "user",
          body: [
            "When every team can shape the library, it drifts towards each team’s habits. A named owner keeps folders, access and conventions deliberate.",
            "Organisation administrators can manage access policies, users, folders and organisational settings, which gives that ownership a practical home.",
          ],
        },
        {
          heading: "What happens to superseded material",
          summary: "Consistency needs old assets retired as well as new ones added.",
          icon: "calendar",
          body: [
            "A rebrand or a product change leaves assets that were correct until recently. Unless they are taken out of everyday view, they keep turning up in front of teams and keep being used.",
            [{ text: "Asset archiving", page: 108 }, " retains historical content without letting old material interfere with everyday asset discovery, so superseded work stays on record without sitting beside what is current."],
          ],
        },
        {
          heading: "How to tell whether teams use it",
          summary: "A source of truth that people work around is only another copy.",
          icon: "chart",
          body: [
            "The real test of a shared library is whether teams go to it first. Private folders of downloads are a sign that it is not yet trusted or not yet easy enough.",
            [{ text: "Asset access analytics", page: 197 }, " provide information about how content is being viewed or used, which helps show whether teams work from the library or around it."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 102 }, { kind: "pdf", page: 178 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 197 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about one source of truth across teams",
      items: [
        {
          question: "What if one team needs its own version of a shared asset?",
          answer: ["That is often legitimate: a regional crop, a shorter cut for social channels. Kept on a local drive, such a version quietly becomes a rival; kept in the library, it stays visible. ", { text: "Image version management", page: 98 }, " lets marketing and design teams maintain different versions of visual assets in one structured record."],
        },
        {
          question: "Can contributors add work to a shared source of truth without being able to change its rules?",
          answer: ["Yes. ", { text: "Editor permissions", page: 156 }, " give people the access needed to work with creative assets without receiving unnecessary administrative privileges."],
        },
        {
          question: "Is a source of truth shared by several teams harder to control than separate libraries?",
          answer: "Not necessarily. Separate libraries scatter access decisions across several systems, while a shared one keeps them in one place. GetSibu combines collaboration with permissions, so teams can work together without sacrificing control over sensitive assets.",
        },
      ],
      sources: [{ kind: "pdf", page: 98 }, { kind: "pdf", page: 156 }, { kind: "pdf", page: 180 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on sharing one library between teams",
      variant: "compact",
      pages: [10, 6, 151, 71, 83, 102],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
