/**
 * 344 · Business Plan — /pricing/business-plan (HELD: sso-scim, pricing-tiers, business-plan-contents)
 *
 * Angle (cluster: pricing-plans): studios and larger teams — what the requirements PDF 344 names (additional storage,
 * more seats, SSO, SCIM, audit exports, priority support) mean in practice and what to settle before choosing. Free
 * Plan (342), page 343, page 334, page 335 and the SSO FAQ (389) are held and not linked. No prices,
 * quotas, seat counts, support response times or self-hosting.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how studios and larger teams evaluate a plan; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 344,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Pricing",
      lede: "What the requirements named in the GetSibu Business plan mean for studios and larger teams, and what to establish about identity, records and support before choosing it.",
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/pricing", label: "More in Pricing" },
      ],
      sources: [{ kind: "pdf", page: 344 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Requirements that arrive with scale and scrutiny",
      body: [
        "The Business plan is intended for studios and larger teams requiring additional storage, more seats, SSO, SCIM, audit exports and priority support. Read together, the list describes an organisation whose library has become important enough to be questioned as well as used.",
        "The requirements share a cause. As a studio or team grows, more people join and leave, clients and IT departments start asking how access is controlled and evidenced, and any interruption to the library costs more because more work depends on it. Storage and seats answer the growth; the rest answer the scrutiny that comes with it.",
        [
          "Studios reach that point from different directions. ",
          { text: "Creative studios", page: 220 },
          " can manage images, videos, audio and documents in one searchable environment, while ",
          { text: "production studios", page: 211 },
          " can organise large collections of footage, review video assets and manage versions.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Intended for studios and larger teams", "Additional storage and more seats", "SSO and SCIM for identity", "Audit exports", "Priority support"],
      },
      highlight: {
        heading: "In practice",
        body: "A production studio’s new broadcast client sends a security questionnaire asking how staff sign in, how leavers lose access and what records can be supplied. Several of its questions line up with requirements the Business plan names.",
        tags: ["Studios", "Security reviews", "Clients"],
      },
      glance: {
        heading: "The Business plan in brief",
        facts: [
          { label: "Area", value: "Pricing" },
          { label: "Intended for", value: "Studios and larger teams" },
          { label: "Requirements named", value: "Additional storage, more seats, SSO, SCIM, audit exports, priority support" },
          { label: "Sizing a team", value: "Creative Team Pricing", page: 345 },
        ],
      },
      sources: [{ kind: "pdf", page: 344 }, { kind: "pdf", page: 220 }, { kind: "pdf", page: 211 }, { kind: "pdf", page: 345 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "requirements",
      eyebrow: "Requirement by requirement",
      heading: "What each named requirement means in practice",
      tabs: [
        {
          label: "Scale",
          heading: "Additional storage and more seats",
          icon: "layers",
          body: [
            "Studios gather heavy material fast: rushes, masters, alternative cuts and high-resolution stills. People arrive at their own pace, and not all of them produce anything, so check how seats are counted before estimating for colleagues who only ever look at finished work.",
            "Estimate the two separately, because one can climb steeply while the other hardly moves, and a single combined guess hides which of them is driving the decision.",
          ],
          points: ["Heavy formats drive storage", "People and files grow at different rates"],
        },
        {
          label: "Identity",
          heading: "SSO and SCIM",
          icon: "key",
          body: [
            "SSO provides organisations with centralised identity management, and SCIM support can simplify user provisioning and deprovisioning. In general terms, the first concerns how people prove who they are when they sign in; the second concerns how accounts are created, changed and closed as people join, move and leave.",
            "For a studio that brings in freelancers project by project, the question worth asking is how access ends when the work does, including for people who are not in the studio’s own directory.",
          ],
          points: ["Centralised identity management", "Simpler provisioning and deprovisioning"],
        },
        {
          label: "Records",
          heading: "Audit exports",
          icon: "audit",
          body: [
            [
              { text: "Audit logs", page: 326 },
              " provide a historical record of important actions, including permissions, comments, asset changes and other platform events. In general terms, an audit export is a copy of activity records taken outside the system that produced them, which matters when a security team reviews activity in its own tools or a client wants evidence of how its material was handled.",
            ],
            "What a particular export contains is worth confirming against the questions you expect to answer. Exported records also need a home: decide where they are stored and for how long.",
          ],
          points: ["Evidence for clients and security teams", "Decisions about storage of exported records"],
        },
        {
          label: "Support",
          heading: "Priority support",
          icon: "help",
          body: [
            "In general, priority support means requests are handled ahead of standard ones, but what that covers differs from one provider to the next. For a studio on a delivery deadline, waiting is measured in missed slots and idle crews rather than inconvenience.",
            "Ask what priority means in practice: which issues it covers, how requests are raised and what response to expect around your busiest dates.",
          ],
          points: ["Help when deadlines are close", "Terms confirmed rather than assumed"],
        },
      ],
      sources: [{ kind: "pdf", page: 344 }, { kind: "pdf", page: 334 }, { kind: "pdf", page: 335 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What studios and larger teams should weigh",
      variant: "chips",
      items: [
        "Size of the footage and stills archive",
        "People who join and leave in a year",
        "Freelancers outside your directory",
        "Identity provider already in use",
        "Client security questionnaires",
        "Who reviews activity records",
        "Cost of a day without the library",
        "Support routes you would rely on",
      ],
      sources: [{ kind: "pdf", page: 344 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "before-deciding",
      eyebrow: "Before deciding",
      heading: "Questions a studio should settle before choosing the Business plan",
      items: [
        {
          heading: "Is the directory ready?",
          summary: "SSO and SCIM depend on a directory that is accurate and actively kept up to date.",
          icon: "users",
          body: [
            "Central sign-in and automated provisioning are only as good as the directory behind them. If leavers linger there, or teams are not reflected in its groups, put that right first; otherwise automation carries the same gaps into every connected tool.",
          ],
        },
        {
          heading: "Where will access questions begin?",
          summary: "Clients and security teams usually start by asking who could reach their material.",
          icon: "audit",
          body: [
            [
              "Knowing where to look saves time once such a question arrives. Through ",
              { text: "permission auditing", page: 170 },
              ", changes to permissions can be recorded in the audit history, which gives those questions a starting point. Decide in advance who in the studio will answer them, and how regularly anyone looks before being asked.",
            ],
          ],
        },
        {
          heading: "What do clients require of you?",
          summary: "Client contracts can set expectations for access and records.",
          icon: "briefcase",
          body: [
            "Studios working for regulated or security-conscious clients may be asked to show controlled sign-in, prompt removal of leavers and records of who did what. Gather those requirements before choosing a plan, so the decision rests on obligations rather than guesses.",
          ],
        },
        {
          heading: "How does support fit the production calendar?",
          summary: "The critical moments in creative work are usually known in advance.",
          icon: "calendar",
          body: [
            "Launches, broadcasts and client presentations fall on dates that can be planned for. Share those periods with whoever provides support, and check how urgent problems would be handled around them.",
          ],
        },
        {
          heading: "Are several clients involved?",
          summary: "Keeping clients apart raises questions beyond storage and seats.",
          icon: "building",
          body: [
            [
              "Studios and agencies that must keep clients separate should also read ",
              { text: "DAM pricing for agencies", page: 346 },
              ", where GetSibu is evaluated on the number of clients, users, storage requirements and multi-tenant needs.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 170 }, { kind: "pdf", page: 346 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the GetSibu Business plan",
      items: [
        {
          question: "Are audit exports worth planning for before anyone has asked for them?",
          answer: "The first request tends to arrive at an awkward moment, from a client after an incident or in the middle of a security review. Knowing beforehand what an export would contain, who would interpret it and how findings would be shared avoids improvising under pressure.",
        },
        {
          question: "Is the Business plan only for studios?",
          answer: [
            "No. It is intended for studios and larger teams, so a sizeable in-house department with the same needs for identity, records and support is in a similar position. ",
            { text: "In-house creative teams", page: 222 },
            " can create one source of truth for company-owned creative assets.",
          ],
        },
        {
          question: "How does the Business plan fit into the wider cost of asset management?",
          answer: [
            "Its requirements are part of the cost picture rather than all of it. ",
            { text: "Enterprise asset management cost", page: 347 },
            " is best considered alongside storage, productivity, collaboration and administrative savings.",
          ],
        },
        {
          question: "Does a studio need every requirement on the list before the Business plan makes sense?",
          answer: "Rarely all at once. Organisations tend to arrive with one firm requirement, such as a client insisting on central sign-in, and meet the others later. Weigh the firm one first, then check how the rest match the way the studio expects to work over the next year or so.",
        },
      ],
      sources: [{ kind: "pdf", page: 344 }, { kind: "pdf", page: 222 }, { kind: "pdf", page: 347 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for studios and larger teams choosing a plan",
      variant: "compact",
      pages: [220, 211, 326, 170, 346, 347],
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
