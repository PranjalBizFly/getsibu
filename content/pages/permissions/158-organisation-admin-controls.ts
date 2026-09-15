/**
 * 158 · Organisation Admin Controls — /permissions/organisation-admin-controls
 *
 * Angle (cluster: access-control): organisation administrators as stewards of the library as a whole — access
 * policies, users, folders and organisational settings — and how that work runs across the library's life.
 * Manager Permissions (155) owns scoped remits, Editor Permissions (156) working access, Enterprise Asset
 * Governance (179) the governance combination. Names no specific setting, screen or admin feature.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of organisation-level library administration; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 158,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "Why a shared creative library needs a small, accountable group of organisation administrators to manage its access policies, users, folders and settings, and how to run that stewardship responsibly as it grows.",
      visual: { diagram: "folder-access", focus: "folders" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 158 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The people who look after the library as a whole",
      body: [
        "Organisation administrators in GetSibu can manage access policies, users, folders and organisational settings. While other people’s access is shaped around their own work, administrators look after the structure that all of that access sits within.",
        "Every shared library needs someone answerable for how it is run. Without that, access policies get set by whoever happens to be asked, departed colleagues keep their accounts, and the folder structure reflects a string of individual decisions rather than an agreed design. Administration exists so these questions have a clear home.",
        [
          "It is also where organisational decisions become concrete. ",
          { text: "Creative asset governance", page: 114 },
          " defines who can upload, edit, approve, download and manage assets, and ",
          { text: "enterprise asset governance", page: 179 },
          " brings roles, permissions, audit logs, authentication and organisational policies together.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Access policies for the organisation", "Users joining, moving and leaving", "Folders and their structure", "Organisational settings", "A small, accountable group"],
      },
      highlight: {
        heading: "In practice",
        body: "When a department restructures, an organisation administrator brings users, folders and access policies back in line with the new shape of the organisation.",
        tags: ["Administrators", "IT teams", "Library leads"],
      },
      glance: {
        heading: "Admin controls in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Manages", value: "Access policies, users, folders, organisational settings" },
          { label: "Scope", value: "The organisation as a whole" },
          { label: "Governance", value: "Enterprise Asset Governance" },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 158 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 179 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "areas",
      eyebrow: "What it covers",
      heading: "What organisation administrators manage",
      items: [
        {
          heading: "Access policies",
          body: "Access policies are the organisation’s agreed rules about who should reach what, and having administrators manage them keeps those rules consistent from one team to the next.",
          icon: "shield",
          points: ["Agreed rules rather than ad hoc answers", "Consistent across departments"],
        },
        {
          heading: "Users",
          body: "People join, change jobs and leave; managing users keeps the list of who can work in the library in step with the organisation itself.",
          icon: "user",
          points: ["Joiners, movers and leavers", "Fewer forgotten accounts"],
        },
        {
          heading: "Folders",
          body: "The folder structure is the frame most access decisions hang on, so its overall shape is an organisational decision rather than a personal one.",
          icon: "folder",
          points: ["Structure agreed, not accidental", "Areas that match their audiences"],
        },
        {
          heading: "Organisational settings",
          body: "Settings that apply to the organisation as a whole belong with administrators rather than with each individual team.",
          icon: "building",
          points: ["Decisions that affect everyone", "Held by a small group"],
        },
      ],
      sources: [{ kind: "pdf", page: 158 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "over-time",
      eyebrow: "Over time",
      heading: "Administrative work across a library’s life",
      items: [
        { label: "Planning", body: "Before content moves, migration planning considers assets, metadata and permissions, which is usually when access policies are first agreed." },
        { label: "Implementation", body: "Implementation involves configuring users, folders, permissions, integrations, metadata and workflows so the library opens in a considered state.", page: 299 },
        { label: "Everyday running", body: "New folders can remain private until access is explicitly granted, so routine growth in the library does not quietly widen who can see it." },
        { label: "Change", body: "Reorganisations, new departments and departing staff all call for users, folders and policies to be brought back into line." },
        { label: "Insight", body: "Folder access maps help organisations understand how folders are accessed across their teams, informing the next round of structural decisions.", page: 173 },
      ],
      sources: [{ kind: "pdf", page: 290 }, { kind: "pdf", page: 299 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 173 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "responsibly",
      eyebrow: "Considerations",
      heading: "Running administration responsibly",
      items: [
        {
          heading: "Keep the administrator group small",
          summary: "Every extra administrator is another person who can change the rules for everyone.",
          icon: "users",
          body: [
            "Administrative access tends to spread because it solves problems quickly. Often, the person asking for it needs something narrower.",
            [{ text: "Editor permissions", page: 156 }, " exist for exactly this reason: they give people the access to work with creative assets without unnecessary administrative privileges."],
          ],
        },
        {
          heading: "Protect the accounts that carry the most weight",
          summary: "An administrator’s account can change more than anyone else’s, which makes it worth guarding closely.",
          icon: "key",
          body: [
            ["Account protection matters most where the stakes are highest. ", { text: "Multi-factor authentication", page: 336 }, " adds another layer of account protection beyond a password."],
          ],
        },
        {
          heading: "Write the policies down",
          summary: "Rules that live only in one administrator’s head leave with that administrator.",
          icon: "document",
          body: [
            "A short written policy for who gets access to what, and why, lets another administrator make the same decision next month.",
            [{ text: "Creative data governance", page: 339 }, " is the wider version of that discipline, establishing rules around access, retention, usage and asset management."],
          ],
        },
        {
          heading: "Leave area knowledge close to the work",
          summary: "Administrators set the frame, but they rarely know every campaign’s audience.",
          icon: "compass",
          body: [
            "The people responsible for a team or a market usually know best who needs its material. Asking them before changing access to their area keeps organisation-wide decisions grounded in how the work is actually done.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 156 }, { kind: "pdf", page: 336 }, { kind: "pdf", page: 339 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about organisation admin controls",
      items: [
        {
          question: "How many organisation administrators should a creative library have?",
          answer: "As few as possible, but not only one. A small group working from the same written policies keeps control tight while avoiding a single point of delay during holidays and handovers.",
        },
        {
          question: "Is an organisation administrator the same as a manager in GetSibu?",
          answer: ["No. ", { text: "Managers", page: 155 }, " receive access to the folders or teams they are responsible for, while organisation administrators look after policies, users, folders and settings across the organisation."],
        },
        {
          question: "How can administrators account for changes to access?",
          answer: [{ text: "Audit logs", page: 326 }, " provide a historical record of important actions, including permissions, comments and asset changes, so changes to access do not rely on anyone’s memory."],
        },
      ],
      sources: [{ kind: "pdf", page: 158 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on running the library",
      variant: "compact",
      pages: [179, 114, 155, 156, 326],
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
