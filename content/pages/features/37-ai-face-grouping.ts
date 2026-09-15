/**
 * 37 · AI Face Grouping — /features/ai-face-grouping
 *
 * HELD draft (claim: face-grouping). Angle: people clustered across a creative library so teams can locate
 * the assets featuring the same founder, talent, client or other recognised person. States the capability
 * only in the PDF wording; nothing about accuracy, availability, media types or how facial data is handled.
 * Consent and the sensitivity of biometric data are explained in general terms, without legal advice.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "General explanation of face clustering, consent and the sensitivity of biometric data; not legal advice and states no GetSibu capability beyond the cited pages." } as const;
const SCENARIO = { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." } as const;

const page: PageContent = {
  page: 37,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "Understand how face grouping helps a team gather the assets in which one person appears, where that is genuinely useful, and the consent and privacy questions to settle before anyone relies on it.",
      visual: { diagram: "media-library", focus: "image" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 37 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The same person, found across the whole library",
      body: [
        "Face grouping in GetSibu clusters people across a creative library. Teams can use it to locate the multiple assets that feature the same founder, talent, client or other recognised person, instead of working through one folder or one campaign at a time.",
        "People are among the hardest subjects to find in a large collection. Filenames rarely say who appears in a photograph, and one executive may turn up in event photography, a recruitment film and a press kit, each filed by a different team. Gathering them usually depends on a colleague with a long memory.",
        [
          "Unlike ",
          { text: "object detection", page: 34 },
          " or ",
          { text: "colour detection", page: 36 },
          ", which describe general characteristics of an image, face grouping concerns particular individuals. That difference shapes how carefully it has to be used, and it puts consent, purpose and access ahead of convenience.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["People clustered across the library", "Founders, talent, clients and others", "Individuals, not general traits", "Facial data is sensitive data", "Consent and purpose settled first"],
      },
      highlight: {
        heading: "In practice",
        body: "A communications team preparing a company anniversary gathers the assets featuring its founder, including material filed by events, recruitment and marketing over many years, and then checks each one before use.",
        tags: ["Communications", "Archives", "People"],
      },
      glance: {
        heading: "Face grouping in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Groups", value: "People across a creative library" },
          { label: "Used to locate", value: "Assets featuring the same person" },
          { label: "Related use", value: "GetSibu for PR Teams", page: 235 },
        ],
      },
      sources: [{ kind: "pdf", page: 37 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 235 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "who-appears",
      eyebrow: "By the person in the frame",
      heading: "What teams need when a founder, talent or client appears",
      tabs: [
        {
          label: "Founders",
          heading: "One public face across many teams’ material",
          icon: "user",
          body: [
            "Founders and senior leaders appear in work made all over an organisation, from launch photography to annual reports. When a journalist asks for a picture, the right answer is a current, approved image, not the first one that turns up.",
            [
              "PR teams need to ",
              { text: "locate approved images and executive photos", page: 235 },
              " quickly. A set of assets featuring one leader is where that choice starts; the people who know which images are current still make it.",
            ],
          ],
          points: ["Material from many teams gathered", "The current image still chosen by people"],
        },
        {
          label: "Talent",
          heading: "Appearances that depend on an agreement",
          icon: "camera",
          body: [
            "Models, presenters and actors appear under agreements that often limit where, for how long and in which markets their image may be used. When an agreement lapses, every asset featuring that person may need to come out of circulation.",
            [
              "Finding those assets is the part face grouping speaks to. Whether each may still be used is a separate question, and ",
              { text: "asset expiry information", page: 104 },
              " can help identify content that should no longer be used after a specified period.",
            ],
          ],
          points: ["Every appearance gathered for a rights check", "Usage limits recorded separately"],
        },
        {
          label: "Clients",
          heading: "People who belong to someone else’s story",
          icon: "briefcase",
          body: [
            "Agencies hold material featuring their clients’ people: spokespeople, store staff, specialists filmed for a campaign. How those images may be used is usually the client’s decision rather than the agency’s.",
            [
              "Agencies can ",
              { text: "maintain client-specific libraries", page: 72 },
              " while keeping different clients isolated. Each client should still be asked how images of their people may be kept and used.",
            ],
          ],
          points: ["Client people treated as client material", "Usage agreed with the client"],
        },
        {
          label: "Everyone else",
          heading: "Staff, audiences and people passing by",
          icon: "users",
          body: [
            "Event photography and street footage capture many people who never agreed to be the subject of anything: attendees in a crowd, colleagues at their desks, children at a public event, members of the public in the background.",
            [
              "For a newsroom, organising media by ",
              { text: "person, topic and event", page: 233 },
              " is ordinary archive work. Most other organisations owe people who are not public figures particular care, including a clear view on whether analysing their appearances is appropriate at all.",
            ],
          ],
          points: ["Background figures are people too", "A view on analysing bystanders"],
        },
      ],
      sources: [{ kind: "pdf", page: 37 }, { kind: "pdf", page: 235 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 233 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "What to consider",
      heading: "Consent, sensitivity and the limits of likeness",
      intro: "General points to discuss with your own legal and privacy specialists, not a substitute for their advice.",
      items: [
        {
          heading: "Facial data is treated as sensitive in many places",
          summary: "Information used to recognise people from their faces often receives stronger legal protection than ordinary personal data.",
          icon: "shield",
          body: [
            "Rules differ between countries and regions, but biometric information used to identify a person commonly counts as a special or sensitive category. Processing it may need a specific legal basis, frequently explicit consent, and can bring duties around transparency, security and retention. Children and vulnerable people often attract stricter rules still.",
            "Whether and how this applies depends on where you operate, who appears in your material and what the groups are for, which makes it a question for qualified advisers.",
          ],
        },
        {
          heading: "Agreeing to appear is not always agreeing to be analysed",
          summary: "A release signed for one shoot may not anticipate grouping that person across a whole library.",
          icon: "document",
          body: [
            "Model releases and filming agreements are usually written for a particular campaign, channel and period. Gathering a person’s appearances across everything an organisation holds is a different activity, which older paperwork may never have contemplated. Check what existing agreements say, and consider how future ones should describe this use.",
          ],
        },
        {
          heading: "A group can reveal more than scattered files",
          summary: "Once a person’s appearances sit together, who can find them matters more.",
          icon: "lock",
          body: [
            [
              "Files spread across folders are hard to piece together; a set of every asset featuring one person is not. Decide who genuinely needs to find people across the library, and why, as part of ",
              { text: "creative data governance", page: 339 },
              ", which establishes rules around access, retention, usage and asset management.",
            ],
          ],
        },
        {
          heading: "Likeness can mislead",
          summary: "Any automated comparison of appearance can split one person apart or join people who look alike.",
          icon: "eye",
          body: [
            "Age, lighting, angle, make-up and glasses change how someone looks, and relatives or lookalikes can resemble each other closely. Across the field, the reliability of facial analysis can also vary between different groups of people, so mistakes do not always fall evenly.",
          ],
        },
        {
          heading: "Requests to stop using someone’s image",
          summary: "People move on or object, and a team should know in advance how it will respond.",
          icon: "restore",
          body: [
            [
              "Decide beforehand who handles such a request: finding the assets, choosing what to retire and recording the outcome. In GetSibu, authorised users can remove assets ",
              { text: "according to organisational policies and permissions", page: 109 },
              ". Also ask what happens to any analysis derived from the material, not only to the files.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 37 }, { kind: "pdf", page: 339 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An anniversary archive assembled with care for who appears",
      team: "A corporate communications team",
      situation: "A corporate communications team is preparing material for the company’s anniversary. The founder appears in years of photography and video filed by different departments, often alongside employees who have since left.",
      steps: [
        {
          heading: "The purpose is cleared first",
          body: "Before gathering anything, the team confirms with its privacy lead that grouping the founder’s appearances fits the founder’s wishes and the organisation’s policy.",
        },
        {
          heading: "The founder’s assets are located",
          body: "Face grouping helps the team locate the assets featuring the founder across the library, rather than relying on colleagues remembering which events she attended.",
        },
        {
          heading: "Someone who knows her checks the set",
          body: "A long-serving colleague who knows the founder well confirms each result before it joins the shortlist.",
        },
        {
          heading: "Choices are recorded on each image",
          body: ["Where former employees appear prominently, the team notes in ", { text: "comments on those assets", page: 62 }, " whether the image can be shown, so each decision stays with the file."],
        },
      ],
      outcome: "The anniversary material draws on the whole archive, and every image in it has been checked both for who appears and for whether they can be shown.",
      link: { page: 240, label: "GetSibu for Corporate Communications" },
      sources: [{ kind: "pdf", page: 37 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 240 }, SCENARIO],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI face grouping",
      items: [
        {
          question: "Should a face group be checked before a team acts on it?",
          answer: "Yes. Treat a group as a set of candidates, and have someone who knows the person confirm who is in it before it is used to publish, withdraw or credit anything.",
        },
        {
          question: "Does AI face grouping replace tagging people by name?",
          answer: "No. A name tag reaches only the assets someone remembered to tag, but it can say things a cluster of likenesses cannot, such as a person’s role or which campaign they fronted.",
        },
        {
          question: "Who should decide whether an organisation uses AI face grouping?",
          answer: "Usually more than the creative team: legal or privacy specialists for the rules that apply, whoever manages talent agreements, and the owner of the library, who knows what material it holds and who uses it.",
        },
        {
          question: "How does face grouping sit beside other ways of finding people in a photography collection?",
          answer: ["Photography teams can ", { text: "search large image collections", page: 228 }, " using tags, colours, people and metadata. Face grouping adds a further route, gathering the assets that feature one person, while captions and name tags keep recording what a likeness cannot."],
        },
      ],
      sources: [{ kind: "pdf", page: 37 }, { kind: "pdf", page: 228 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on people, rights and sensitive material",
      variant: "compact",
      pages: [228, 235, 104, 339, 233, 34],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Turn Your Asset Library Into Intelligence",
      conversionPage: 398,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 398 }],
    },
  ],
};

export default page;
