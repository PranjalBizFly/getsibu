/**
 * 119 · Asset Audit Trail — /features/asset-audit-trail
 *
 * Angle (cluster: audit-history, primary): visibility into important actions performed on creative files, used for
 * accountability when something is questioned. No exports, retention, compliance, alerts or reports. Audit Logs (326)
 * owns the platform-wide record; Permission Auditing (170) owns permission changes; Asset History (117) owns
 * understanding what happened to the work.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of accountability for actions on creative files; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 119,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "When visibility into the important actions taken on creative files matters, how to answer an accountability question fairly, and how the asset audit trail relates to the other records kept about assets.",
      visual: { diagram: "version-record", focus: "audit" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 119 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Seeing the important actions taken on a creative file",
      body: [
        "The asset audit trail in GetSibu provides visibility into important actions performed on creative files.",
        "On most days nobody needs it. It matters on the day something goes wrong or is questioned: an unapproved version reaches a client, a licensed image is used after its term, a key file goes missing, or a client asks how its material has been handled. On that day, the difference between an answer and an argument is whether the actions in question can be seen.",
        [
          "An audit trail serves accountability rather than understanding; for following how a piece of work developed, ",
          { text: "asset history", page: 117 },
          " is the better record. Neither replaces the conversation a team needs to have once it knows what happened.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Important actions on creative files", "Visibility when questions arise", "Accountability rather than blame", "Evidence instead of assurances", "Findings that improve the process"],
      },
      highlight: {
        heading: "In practice",
        body: "A superseded logo turns up in a partner’s brochure. Before anyone is blamed, the brand team looks at the important actions taken on the logo file as a starting point, then asks the partner where its copy came from.",
        tags: ["Brand", "Partners", "Accountability"],
      },
      glance: {
        heading: "Audit trail in brief",
        facts: [
          { label: "Provides", value: "Visibility into important actions on creative files" },
          { label: "Platform record", value: "Audit Logs", page: 326 },
          { label: "Access changes", value: "Permission Auditing", page: 170 },
          { label: "Understanding the work", value: "Asset History", page: 117 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 119 }, { kind: "pdf", page: 117 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "when-it-matters",
      eyebrow: "When it matters",
      heading: "Moments when the audit trail earns its place",
      items: [
        {
          heading: "Something unapproved went out",
          summary: "The question is how a file reached people before it was signed off.",
          icon: "flag",
          body: [
            ["Seeing the actions taken on the file is the starting point. Alongside it, ", { text: "approval history", page: 77 }, " provides a record of review activity, so a team can check the review record rather than guessing whether review took place."],
          ],
          points: ["Actions on the file", "Review activity beside them"],
        },
        {
          heading: "A file changed or went missing",
          summary: "An unexpected replacement or removal needs an account of what happened.",
          icon: "trash",
          body: [
            [{ text: "Asset recovery", page: 110 }, " is about getting the content back. Working out how the change or removal came about is a separate job, and it is the one that prevents a repeat."],
          ],
        },
        {
          heading: "A client asks for assurance",
          summary: "Agencies are often asked how client material has been handled.",
          icon: "briefcase",
          body: [
            ["Clients expect their work to be handled by the right people in the right way. ", { text: "Agency asset management", page: 168 }, " lets agencies manage creative assets for several customers while maintaining structured separation, and an answer grounded in what can be seen is more convincing than one given from memory."],
          ],
        },
        {
          heading: "A dispute about usage",
          summary: "When usage terms are questioned, what was done with a file becomes important.",
          icon: "shield",
          body: [
            ["A photographer or licensor may ask how an image was used. ", { text: "Asset ownership", page: 115 }, " gives context about who created or uploaded the content, which tells a team whose terms apply before it looks at how the file was handled."],
          ],
        },
        {
          heading: "Checking that rules are followed",
          summary: "An occasional look shows whether governance works in practice.",
          icon: "audit",
          body: [
            ["Rules about who may do what are only as good as the behaviour they produce. Looking at the actions taken on important files from time to time helps show whether ", { text: "creative asset governance", page: 114 }, " is being followed or quietly worked around."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 77 }, { kind: "pdf", page: 110 }, { kind: "pdf", page: 168 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 114 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "answering",
      eyebrow: "Step by step",
      heading: "Answering an accountability question fairly",
      intro: "How a team uses what it finds decides whether anything improves.",
      steps: [
        { heading: "Frame the question precisely", body: "Name the file and the action in doubt, and say why it matters, so the enquiry stays focused and the answer stays fair.", icon: "help" },
        { heading: "Start from the file", body: "Begin with the creative file in question rather than searching the whole library for anything unusual.", icon: "document" },
        { heading: "Put the action in context", body: "The asset’s record of relevant changes and interactions often explains why an action happened when the action alone does not.", icon: "history", page: 117 },
        { heading: "Check what access allowed", body: "If the action should not have been possible, look at how access to that area was set and whether it had changed.", icon: "lock" },
        { heading: "Hear from the people involved", body: "The people concerned can usually explain why something happened, and deserve to be asked before conclusions are drawn.", icon: "users" },
        { heading: "Close the gap", body: "Findings often point to a weakness in process or permissions rather than a careless person, and fixing that weakness makes the same problem less likely to return.", icon: "workflow" },
      ],
      sources: [{ kind: "pdf", page: 117 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "evidence",
      eyebrow: "The difference visibility makes",
      heading: "Accountability without a trail compared with accountability with one",
      beforeLabel: "Without visibility",
      afterLabel: "With the asset audit trail",
      before: ["Answers pieced together from memory and email", "Disagreement about what actually happened", "Suspicion falling on whoever touched the file last", "Mistakes repeated because the cause stayed unclear"],
      after: ["Important actions on the file can be seen", "A shared starting point for the discussion", "Attention on what happened, not on who was nearby", "Weak points in the process found and fixed"],
      sources: [{ kind: "pdf", page: 119 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the asset audit trail",
      items: [
        {
          question: "How is the asset audit trail different from audit logs?",
          answer: ["The difference is scope. The trail is about the files themselves, whereas ", { text: "audit logs", page: 326 }, " provide a historical record of important actions across the platform, including permissions, comments, asset changes and other events."],
        },
        {
          question: "How does the asset audit trail relate to permission auditing?",
          answer: ["They answer complementary questions. The trail concerns what was done to creative files, while ", { text: "permission auditing", page: 170 }, " is about accountability for access itself: changes to permissions can be recorded in the audit history."],
        },
        {
          question: "Who should look at the asset audit trail when something is questioned?",
          answer: "Usually the people accountable for governance and for the part of the library concerned. Keeping that circle small is fair to the colleagues whose actions are being looked at.",
        },
      ],
      sources: [{ kind: "pdf", page: 326 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on records and accountability",
      variant: "compact",
      pages: [326, 170, 117, 77, 114, 110],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Order to Creative Chaos",
      conversionPage: 399,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 399 }],
    },
  ],
};

export default page;
