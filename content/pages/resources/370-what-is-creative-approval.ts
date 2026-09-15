/**
 * 370 · What Is Creative Approval? — /resources/what-is-creative-approval
 *
 * Angle (cluster: workflow-explainers; approvals): vendor-neutral explainer of approval as a decision distinct from
 * review — what different approvers check, the stages approval passes through and the design choices that shape
 * a process. The approval feature pages own GetSibu's workflow (67), status history (68), review space (69),
 * campaign (70), brand gates (71), client review (72), status (76), history (77), management (89), approved-only
 * views (103) and the API (267).
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of creative approval practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 370,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "What creative approval is, how it differs from review, what different approvers check, the choices that shape an approval process, and how GetSibu records the decision on the asset.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 370 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "Creative approval",
      answer: "Creative approval is a workflow where authorised users review assets and confirm that content is ready for use. It marks the point at which work in progress becomes something the organisation stands behind.",
      detail: "Review and approval are related but distinct. Review is the conversation: comments, questions and requested changes. Approval is the decision that ends it, made by someone with the authority to make it and recorded so others can rely on it. A sound process keeps both visible and attached to the asset being judged.",
      sources: [{ kind: "pdf", page: 370 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Why sign-off needs to be a record, not a reply",
      body: [
        "Creative approval answers one question for everyone downstream: can this be used? When it works, a designer knows the work is finished, a marketer knows which file to publish and a brand manager can see what is still waiting for sign-off.",
        "The trouble is that sign-off often happens informally: a thumbs-up in chat, a “looks good” buried in an email thread, a spoken yes at the end of a meeting. Each is a real decision, but none is attached to a particular file, so later nobody can say which version was approved, by whom, or whether the changes requested beforehand were ever made.",
        [
          "A structured approval fixes that by tying the decision to the asset and to the version it concerns. It leans on neighbouring practices too: ",
          { text: "asset versioning", page: 369 },
          " makes it possible to say which state was approved, and ",
          { text: "creative governance", page: 371 },
          " defines who is authorised to approve in the first place.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Review is discussion, approval is decision", "Authorised approvers", "Approval tied to a version", "Status everyone can see", "A record that outlasts the project"],
      },
      highlight: {
        heading: "In practice",
        body: "A social media team looking for campaign visuals works only from approved assets, so an early draft with unfinished copy does not end up in a live post.",
        tags: ["Brand", "Marketing", "Agencies"],
      },
      glance: {
        heading: "Creative approval in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Decides", value: "Whether content is ready for use" },
          { label: "Made by", value: "Authorised reviewers" },
          { label: "In GetSibu", value: "Creative Approval Management", page: 89 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 370 }, { kind: "pdf", page: 369 }, { kind: "pdf", page: 371 }, { kind: "pdf", page: 89 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "what-approvers-check",
      eyebrow: "What gets checked",
      heading: "What approvers look for, depending on their role",
      tabs: [
        {
          label: "Brand",
          heading: "Consistency with the brand",
          icon: "palette",
          body: [
            "Brand approval asks whether an asset looks and sounds like the organisation: logo use, colour, typography, tone of voice and imagery style. Because it applies to nearly everything a team produces, it is rarely a one-off check.",
            "The risk it guards against is drift, where many individually reasonable choices add up to a brand that no longer looks coherent.",
          ],
          points: ["Logo and colour use", "Tone and imagery style"],
          link: { page: 71, label: "Brand Asset Approval" },
        },
        {
          label: "Legal and rights",
          heading: "Permission to publish",
          icon: "shield",
          body: [
            "Legal review checks claims, disclaimers and the rights behind what appears in an asset: licensed photography, music and fonts, and model releases for anyone pictured.",
            "Rights can lapse, so this kind of approval is sometimes valid only for a period, a territory or a channel.",
          ],
          points: ["Licences for images, music and fonts", "Claims and required wording"],
        },
        {
          label: "Technical",
          heading: "Fit for the destination",
          icon: "check",
          body: [
            "Technical checks confirm that a file will work where it is going: the right dimensions and format, colour profiles for print or digital display, safe areas for video and loudness for audio.",
            "They are easy to overlook in a creative discussion and expensive to discover after something has gone to print or to air.",
          ],
          points: ["Formats and dimensions", "Print and broadcast specifications"],
        },
        {
          label: "Client",
          heading: "Agreement from the client",
          icon: "briefcase",
          body: [
            "Agencies and studios need a client’s approval before work is final. That brings in a reviewer from outside the team, who should see only their own organisation’s work.",
            "Being clear about what the client is approving, and which version, protects both sides if the decision is questioned later.",
          ],
          points: ["Decisions from outside the team", "Separation between clients"],
          link: { page: 72, label: "Client Review" },
        },
      ],
      sources: [{ kind: "pdf", page: 71 }, { kind: "pdf", page: 72 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "stages",
      eyebrow: "In general",
      heading: "Stages an approval typically passes through",
      stages: [
        { label: "Draft", body: "The creator works on the asset, which collaborators can see but which is clearly not ready for use." },
        { label: "Submitted", body: "The creator asks for review, signalling that the work is complete enough to judge." },
        { label: "Changes requested", body: "Reviewers say what needs to change, and the asset goes back to the creator with that feedback attached." },
        { label: "Approved", body: "An authorised reviewer confirms the version is ready, and the decision is recorded against it." },
        { label: "In use", body: "Approved content becomes available to the people who publish, share or reuse it." },
      ],
      sources: [{ kind: "pdf", page: 370 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "design-choices",
      eyebrow: "Considerations",
      heading: "Choices that shape an approval process",
      intro: "These are decisions about the process itself, whichever tool records the outcome.",
      items: [
        {
          heading: "How many stages",
          summary: "One approver suits simple work; complex or regulated work may need several.",
          icon: "workflow",
          body: [
            "Every extra stage adds assurance and delay. A useful test is whether each approver checks something the others do not; where two stages look at the same thing, one of them can usually go.",
          ],
        },
        {
          heading: "In sequence or in parallel",
          summary: "Approvers can review one after another or at the same time.",
          icon: "users",
          body: [
            "Sequential approval avoids asking legal to review work the brand team is about to reject. Parallel approval is quicker but can produce conflicting feedback, so somebody has to reconcile the comments.",
          ],
        },
        {
          heading: "What happens after an edit",
          summary: "An approved asset that is changed may need approving again.",
          icon: "refresh",
          body: [
            "If approval belongs to a version, a later revision is unapproved until someone confirms it. Deciding which changes reset approval, and which small corrections do not, prevents both risky shortcuts and needless rework.",
          ],
        },
        {
          heading: "When approval runs out",
          summary: "Some approvals hold only for a period, a market or a campaign.",
          icon: "calendar",
          body: [
            ["Seasonal offers, licensed images and time-limited claims should stop being used once their approval lapses. ", { text: "Asset expiry information", page: 104 }, " can help teams identify content that should no longer be used after a specified period."],
          ],
        },
        {
          heading: "Keeping the record",
          summary: "The decision should outlast the project that produced it.",
          icon: "audit",
          body: [
            "Long after a launch, someone may ask why a claim was allowed or which cut the client accepted. A record that names the version, the approver and the discussion that preceded the decision answers those questions without relying on anyone’s memory.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 104 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu applies creative approval",
      items: [
        {
          heading: "Request, change, approve",
          body: "GetSibu’s approval workflows allow teams to request review, make changes and mark assets as approved.",
          icon: "approval",
          page: 67,
        },
        {
          heading: "Status with history",
          body: "Assets move through an approval process with status history, recording whether content is awaiting review, approved or requires changes.",
          icon: "history",
          points: ["Awaiting review", "Approved", "Requires changes"],
          page: 68,
        },
        {
          heading: "Feedback on the asset",
          body: "Reviewers leave comments directly on assets, and on video they can attach comments to specific points on the timeline.",
          icon: "message",
          page: 62,
        },
        {
          heading: "Approved-only views",
          body: "Teams can create approved-only views, so users access content that has completed the required review process.",
          icon: "check",
          page: 103,
        },
        {
          heading: "Review across locations",
          body: "Collaborative review helps distributed teams review creative material without requiring everyone to be in the same place.",
          icon: "globe",
          page: 87,
        },
        {
          heading: "Approval events elsewhere",
          body: "Approval events can be incorporated into external production and workflow systems through the API.",
          icon: "api",
          page: 267,
        },
      ],
      sources: [{ kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 87 }, { kind: "pdf", page: 267 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative approval",
      items: [
        {
          question: "Does every asset need creative approval?",
          answer: "No. Approval earns its cost where a mistake would be expensive or public: campaign material, brand assets, legal claims and client deliverables. Mood boards, references and internal sketches rarely need it, and demanding sign-off for everything slows down the work that does.",
        },
        {
          question: "Can a creative approval be withdrawn?",
          answer: "In principle, yes. New information, such as a lapsed licence or a claim that no longer holds, can make approved content unsuitable. A clear process says who may reverse a decision and records the reason, so the people using the asset know to stop.",
        },
        {
          question: "Should creative approval apply to a specific version of an asset?",
          answer: ["It should, otherwise nobody can tell whether a later edit was approved. In GetSibu, ", { text: "approval history", page: 77 }, " provides a record of review activity and reduces confusion around which version was accepted."],
        },
        {
          question: "How does an approval process keep drafts out of circulation?",
          answer: ["By making status visible where people look for content. ", { text: "Review status", page: 76 }, " indicates whether an asset still needs attention or has completed the approval process, and brand teams can use approval gates to separate approved assets from drafts."],
        },
      ],
      sources: [{ kind: "pdf", page: 77 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 71 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reviews and approvals",
      variant: "compact",
      pages: [67, 68, 76, 77, 103, 89],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Make Every Asset Discoverable",
      conversionPage: 394,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 394 }],
    },
  ],
};

export default page;
