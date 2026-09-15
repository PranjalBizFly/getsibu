/**
 * 154 · Default-Deny Access — /permissions/default-deny-access
 *
 * Angle (cluster: access-control): the access model — new folders stay private until access is granted — and how
 * that default shapes everyday work in a library. Default-Deny Security (337) owns the protection angle; Folder-
 * Level Permissions (152) owns folder granularity. Never describes how a grant is made or any request workflow.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of default-deny and default-allow access models; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 154,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "What a default-deny model means day to day: new folders in GetSibu can stay private until someone explicitly grants access, so opening material up becomes a decision rather than an accident.",
      visual: { diagram: "folder-access", focus: "private" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 154 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "New folders start closed, and opening them is a choice",
      body: [
        "In GetSibu, a new folder can remain private until access to it is explicitly granted. The library works on a default-deny basis: fresh content waits for a decision about who should see it, rather than being exposed automatically.",
        "The opposite approach, default-allow, is common in shared drives because it asks nothing of the person creating a folder. Its cost shows up later. A folder made for an unannounced product is visible to anyone browsing nearby, a contractor’s upload lands where the whole company can see it, and the problem is usually noticed only after the material has been seen.",
        [
          "A default is a starting point, not a whole permission model. Once a folder exists, ",
          { text: "folder-level permissions", page: 152 },
          " decide who it opens to, and that decision deserves the same care as any other access question.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Private until access is granted", "Opening a folder is a decision", "Default-deny versus default-allow", "No automatic exposure of new content", "Access added one deliberate step at a time"],
      },
      highlight: {
        heading: "In practice",
        body: "A producer sets up a folder for a launch that has not been announced. It stays private while the team works out who should be involved, instead of appearing to the whole organisation on the first day.",
        tags: ["New folders", "Unreleased work"],
      },
      glance: {
        heading: "Default-deny in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Applies to", value: "New folders" },
          { label: "Starting state", value: "Private until access is granted" },
          { label: "Security angle", value: "Default-Deny Security" },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 337 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "folder-life",
      eyebrow: "Over time",
      heading: "The life of a new folder under default-deny",
      items: [
        { label: "Created", body: "A folder is added for new work. No access has been granted to it yet, so it is private." },
        { label: "Audience agreed", body: "The people responsible for that area of the library settle who the folder is actually for, before any material is opened up." },
        { label: "Access granted", body: "Access is explicitly granted to the people or groups the folder serves, and to nobody else." },
        { label: "Work begins", body: "Those people add and discuss the folder’s assets while the rest of the organisation carries on elsewhere in the library." },
        { label: "Changes recorded", body: "Changes to the folder’s permissions can be recorded in the audit history, which keeps access management accountable.", page: 170 },
        { label: "Audience widened", body: "When the finished work is ready for a larger group, that wider access is a further deliberate decision rather than something that happened by default." },
      ],
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "defaults",
      eyebrow: "Side by side",
      heading: "Default-allow and default-deny compared",
      columns: ["Default-allow", "Default-deny in GetSibu"],
      emphasis: 1,
      rows: [
        ["A new folder", "Visible as soon as it exists", "Private until access is granted"],
        ["Who has to act", "Someone must remember to restrict it", "Someone must decide to open it"],
        ["Unreleased material", "Protected only if people notice", "Not exposed automatically"],
        ["The usual mistake", "Sensitive work seen too early", "A colleague waiting for access"],
      ],
      sources: [{ kind: "pdf", page: 154 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "living-with-it",
      eyebrow: "Considerations",
      heading: "Working well in a default-deny library",
      items: [
        {
          heading: "Expect people to need access",
          summary: "A closed default means some colleagues will occasionally find a folder they cannot open.",
          icon: "help",
          body: [
            "That is the model doing its job, but it only feels that way if people know where to turn. Agree in advance who is responsible for each area of the library, so a missing permission becomes a short conversation instead of a blocked afternoon.",
          ],
        },
        {
          heading: "Grant to groups where you can",
          summary: "Access given to a team is quicker to set and easier to understand than many individual grants.",
          icon: "users",
          body: [
            ["When a folder serves a whole team, ", { text: "team access management", page: 175 }, " establishes consistent permissions across that group of users. It also makes the folder’s audience easier to read than a long list of individual names."],
          ],
        },
        {
          heading: "Keep individual exceptions deliberate",
          summary: "Some people need access that no group describes.",
          icon: "user",
          body: [
            ["A freelance retoucher or a colleague seconded for one project may need a single folder. ", { text: "Individual permissions", page: 157 }, " cover that case, giving targeted access when organisational roles alone do not provide enough granularity."],
          ],
        },
        {
          heading: "Private is not the same as approved",
          summary: "A folder being closed says nothing about whether its contents are ready to use.",
          icon: "approval",
          body: [
            "Default-deny decides who can see work in progress; it does not decide when that work is finished.",
            ["Readiness is handled by review: ", { text: "asset approval", page: 68 }, " moves assets through a process with status history, recording whether content is awaiting review, approved or needs changes."],
          ],
        },
        {
          heading: "Tell the team what the default is",
          summary: "People who assume folders are shared will be surprised when colleagues cannot see them.",
          icon: "message",
          body: [
            "Teams moving from shared drives are used to anything they create being visible. A short explanation that new folders start private avoids the familiar exchange of “I put it in the folder” followed by “I can’t see it”.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 175 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 68 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about default-deny access",
      items: [
        {
          question: "Does default-deny access slow a creative team down?",
          answer: "It adds a decision at the moment a folder is created. That is far less work than recovering from sensitive material that was visible too early.",
        },
        {
          question: "How is default-deny access different from default-deny security?",
          answer: ["They describe one model from two sides. Default-deny access concerns how teams work with folders that start private, while ", { text: "default-deny security", page: 337 }, " is about ensuring new content is not automatically exposed to every user."],
        },
        {
          question: "Why does default-deny suit unreleased creative work?",
          answer: "Unreleased work is most at risk in the moment it is created, before anyone has thought about access. A folder that starts private covers exactly that moment.",
        },
      ],
      sources: [{ kind: "pdf", page: 337 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on access to new content",
      variant: "compact",
      pages: [337, 152, 175, 157, 170],
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
