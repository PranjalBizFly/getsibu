/**
 * 331 · Backup Redundancy — /security/backup-redundancy (HELD: backups-pitr)
 *
 * Angle (cluster: resilience): what makes backups redundant rather than merely present, which losses redundancy
 * answers, and how to check that recovery options would hold. page 332 owns choosing a moment to
 * restore to; page 333 owns copies in another region and is not named here. Framed with
 * GetSibu Security, and kept distinct from version restore. States the claim only in PDF 331 wording; no schedules
 * or retention periods.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "General explanation of backup practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 331,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "What makes backups redundant rather than merely present, the kinds of loss that redundancy is meant to answer, and the questions that show whether recovery options would hold up on the day they are needed.",
      visual: { diagram: "architecture-stack", focus: "storage" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/security", label: "More in Security" },
      ],
      sources: [{ kind: "pdf", page: 331 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "More than one way back when stored data is lost",
      body: [
        "Backup redundancy helps protect against data loss and provides recovery options. A backup is a separate copy of data kept so the data can be recovered; redundancy means there is more than one such copy, arranged so that a single failure cannot destroy them all.",
        "A lone backup carries a quiet risk: it can turn out to be faulty at the very moment it is needed. Storage fails, copies get overwritten, a job stops without anyone noticing, or the backup sits so close to the original that one incident removes both. Independent copies, kept apart in where they are held and how they are managed, turn a single point of failure into several.",
        [
          { text: "Asset recovery", page: 110 },
          " draws on two safeguards: versioning and backups can support recovery when content is accidentally replaced or removed. Redundancy concerns the second of those, and asks whether enough independent copies exist for recovery to stay possible after a failure, a mistake or an attack has reached one of them.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Copies kept apart from the original", "Several independent backups", "Failures that reach one copy only", "Recovery tested rather than assumed", "A layer beneath version history"],
      },
      highlight: {
        heading: "In practice",
        body: "When a studio’s IT lead is asked whether the asset library is backed up, the useful questions come next: how independent the copies are, what they include and when recovery was last tried.",
        tags: ["IT", "Studios", "Security reviews"],
      },
      glance: {
        heading: "Backup redundancy in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Protects against", value: "Data loss" },
          { label: "Provides", value: "Recovery options" },
          { label: "Wider design", value: "GetSibu Security", page: 321 },
        ],
      },
      sources: [{ kind: "pdf", page: 331 }, { kind: "pdf", page: 110 }, { kind: "pdf", page: 321 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "principles",
      eyebrow: "Principles",
      heading: "What makes a backup worth having",
      items: [
        {
          heading: "Independence from the original",
          summary: "A copy that shares the original’s fate offers little protection.",
          icon: "layers",
          body: [
            "If a backup lives on the same system, under the same credentials, as the data it protects, one incident can remove both. Independent copies sit on separate storage and are managed so that a failure, a mistake or an attack on the original does not reach them as well.",
          ],
        },
        {
          heading: "Spread across places and kinds of storage",
          summary: "Copies are arranged so that no single event affects them all.",
          icon: "server",
          body: [
            "Holding copies in more than one location guards against a problem confined to one site, and using more than one kind of storage guards against a fault in one technology. Long-standing backup guidance puts it simply: several copies, on more than one type of storage, with at least one kept well away from the rest.",
          ],
        },
        {
          heading: "Defence against deletion and tampering",
          summary: "Backups face the same threats as live data, sometimes sooner.",
          icon: "shield",
          body: [
            "Ransomware operators and malicious insiders commonly try to reach backups, because removing the way back raises the pressure on their victim. Copies that are hard to alter or delete, and that sit under separate access, keep recovery possible after a deliberate attack.",
          ],
        },
        {
          heading: "Integrity checks",
          summary: "A copy is only useful if what it holds is intact.",
          icon: "check",
          body: [
            "Confirming that backed-up data matches what was copied, and that it can actually be read, catches silent corruption before it matters. Without such checks a backup can look complete for a long time while holding nothing usable.",
          ],
        },
        {
          heading: "Restores that have been tried",
          summary: "Recovery that nobody has practised is a hope rather than a plan.",
          icon: "restore",
          body: [
            "The dependable proof that backups work is recovering from them. Test restores show whether data comes back whole, how long the work takes and which steps rely on one person happening to know what to do.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 331 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "layers-of-protection",
      eyebrow: "Different layers",
      heading: "What each safeguard is designed to answer",
      intro: "Backups sit alongside other safeguards, and each one protects against a different kind of loss.",
      columns: ["What it protects against", "What it leaves to other safeguards"],
      rows: [
        { label: "Version history", cells: ["A file replaced by the wrong one, or a need to return to an earlier creative state", "Loss of the stored data the versions themselves rely on"], page: 92 },
        { label: "Archiving", cells: ["Old material crowding everyday discovery while still being retained", "Data that has been damaged or lost"], page: 108 },
        { label: "Permissions on removal", cells: ["Assets removed by people without the authority to remove them", "Losses that have nothing to do with who acted"], page: 109 },
        { label: "Redundant backups", cells: ["Stored data lost through failure, error or attack", "A problem copied into every backup before anyone noticed it"] },
      ],
      sources: [{ kind: "pdf", page: 92 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 331 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "checking-recovery",
      eyebrow: "Step by step",
      heading: "Checking that recovery options would hold up",
      intro: "A general routine for any organisation relying on backups, whether its own or a provider’s.",
      steps: [
        { heading: "Name what matters most", body: "Decide which material would hurt most to lose, such as masters, unreleased campaigns and signed releases, so recovery questions start there.", icon: "flag" },
        { heading: "Ask what is copied", body: "Establish whether backups hold only files or also the information that gives them meaning, such as metadata, discussions and access rules.", icon: "database" },
        { heading: "Ask how copies are kept apart", body: "Find out how backups are separated from the original, both in where they are held and in who is able to change them.", icon: "layers" },
        { heading: "Ask how recovery is proven", body: "Learn how a recovery would be requested, what could be brought back and when a restore was last tested.", icon: "restore" },
        { heading: "Agree who acts", body: "Decide who in your organisation would ask for a recovery and who would confirm that what came back is complete.", icon: "users" },
      ],
      sources: [{ kind: "pdf", page: 331 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about backup redundancy",
      items: [
        {
          question: "How often should recovery from backups be tested?",
          answer: "Often enough that the steps and the people involved still match how things work today. After any significant change to a library, or to the team that looks after it, is a sensible moment for another test.",
        },
        {
          question: "Should creative teams keep copies of their own when backups are redundant?",
          answer: "That depends on how irreplaceable the material is and how the organisation weighs risk. Keeping originals of shoots that could never be repeated somewhere you control is a reasonable choice, at least until the library has earned your confidence.",
        },
        {
          question: "Can backups undo a file being shared with the wrong people?",
          answer: [
            "No. Backups bring back data that has been lost or damaged; they cannot recall a copy that has already left the library. That kind of exposure has to be prevented beforehand, which is easier when ",
            { text: "secure asset sharing", page: 172 },
            " is controlled through permissions rather than relying only on unrestricted links.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 331 }, { kind: "pdf", page: 172 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on protecting and recovering creative work",
      variant: "compact",
      pages: [321, 110, 92, 108, 172],
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
