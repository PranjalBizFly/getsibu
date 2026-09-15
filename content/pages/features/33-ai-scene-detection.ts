/**
 * 33 · AI Scene Detection — /features/ai-scene-detection
 *
 * HELD draft (claim: scene-detection). Angle: video broken into structured scenes so users can navigate
 * between important sections instead of scrubbing the whole file. States the capability only in the PDF's
 * wording; nothing about accuracy, availability, when detection runs or how sections are shown.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of video structure and review practice in general; states no GetSibu capability beyond the cited pages." } as const;
const SCENARIO = { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." } as const;

const page: PageContent = {
  page: 33,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "See how scene detection gives a long video a structure of scenes to move between, where that saves the most scrubbing, and what a team should still judge by eye.",
      visual: { diagram: "media-library", focus: "video" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 33 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A long video divided into sections you can move between",
      body: [
        "Scene detection in GetSibu automatically breaks a video into structured scenes. Rather than scrubbing back and forth through an entire file to find a moment, users can navigate between the important sections of the video.",
        "Scrubbing is the slowest part of working with footage somebody else shot. Drag a playhead across a long recording and the moments you need flash past too quickly to see, so people end up playing at speed, stopping, backing up and playing again. That time goes into locating material rather than judging it, and it is spent again by every new person who opens the file.",
        [
          "Finding the right file is only half the work with video. ",
          { text: "Creative asset search", page: 11 },
          " can narrow a library to a handful of recordings, yet each may still run long, with the moment someone needs buried somewhere inside. The step from the right file to the right point within it is where structure inside a video counts.",
        ],
        [
          "Other capabilities make video easier to work with in different ways. A ",
          { text: "searchable video library", page: 25 },
          " indexes videos and enriches them with AI-generated information, and ",
          { text: "streaming previews", page: 147 },
          " let people inspect large media files without waiting for a complete download.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Video broken into structured scenes", "Navigation between important sections", "Less repeated scrubbing", "From the right file to the right moment", "A structure to use, not a verdict"],
      },
      highlight: {
        heading: "In practice",
        body: "A producer checking a long location reel steps from section to section until the footage from the second location comes up, instead of dragging the playhead to and fro.",
        tags: ["Assistants", "Producers", "Long recordings"],
      },
      glance: {
        heading: "Scene detection in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Works on", value: "Video" },
          { label: "Gives users", value: "Sections of a video to navigate between" },
          { label: "Approach", value: "Practical AI for Creative Teams", page: 60 },
        ],
      },
      sources: [{ kind: "pdf", page: 33 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 60 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "scrub-or-navigate",
      eyebrow: "Two ways through a video",
      heading: "Scrubbing a whole file compared with moving between scenes",
      columns: ["Scrubbing through the file", "With scene detection"],
      emphasis: 1,
      rows: [
        ["Finding a moment", "Dragging the playhead until it turns up", "Navigating between structured sections"],
        ["Dividing the video", "Done in the viewer’s head, every time", "Done automatically for the video"],
        ["Getting a sense of the whole", "Playing it at speed from start to end", "A structure of scenes to move through"],
        ["Cost of a long recording", "Grows with every extra minute of footage", "Less repeated scrubbing to reach a section"],
      ],
      sources: [{ kind: "pdf", page: 33 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "footage",
      eyebrow: "By kind of footage",
      heading: "Kinds of footage people scrub through most",
      tabs: [
        {
          label: "Rushes",
          heading: "Unedited material from a shoot day",
          icon: "camera",
          body: [
            "Footage from a shoot runs long, with set-ups, resets and repeated takes following one another. An assistant building selects spends much of the day moving past material that will never be used.",
            [
              "Navigating between sections can help that assistant step from one part of a card to the next rather than playing every reset in between. It is the same pressure behind ",
              { text: "production productivity", page: 353 },
              ": less time spent reviewing large amounts of footage.",
            ],
          ],
          points: ["Selects built without playing every reset", "Time moved from searching to choosing"],
        },
        {
          label: "Recordings",
          heading: "Events, presentations and panels",
          icon: "video",
          body: [
            "Recordings of conferences, launches and internal presentations are long and mostly uneventful to scrub through, yet people often want one talk, one question or one announcement from them.",
            "The people searching them are often outside the video team altogether: a communications officer after one quote, or a sales lead after one product demonstration, with no wish to sit through the rest.",
          ],
          points: ["One talk found in a long recording", "Useful beyond the video team"],
          link: { page: 236, label: "GetSibu for Event Companies" },
        },
        {
          label: "Finished films",
          heading: "Edited work that later briefs draw on",
          icon: "film",
          body: [
            "A finished advert or brand film is often reused in pieces: a product close-up for a social cutdown, an opening sequence for a presentation. The person looking for that piece is rarely the editor who made it.",
            "Moving through the film’s sections reaches the passage in question without watching the whole piece again.",
          ],
          points: ["Passages reused in new formats", "No need to rewatch the whole film"],
        },
        {
          label: "Archive",
          heading: "Older reels with little description",
          icon: "archive",
          body: [
            "Digitised tapes and footage inherited from past projects often arrive as long files with generic names and no notes. Nobody wants to describe material they have not yet looked at.",
            "Structured sections give an archivist a way into a reel before deciding which parts deserve careful description and which can be left as they are.",
          ],
          points: ["A way into undescribed reels", "Description effort spent where it counts"],
          link: { page: 217, label: "GetSibu for Documentary Teams" },
        },
      ],
      sources: [{ kind: "pdf", page: 33 }, { kind: "pdf", page: 353 }, { kind: "pdf", page: 236 }, { kind: "pdf", page: 217 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "What to consider",
      heading: "Using detected scenes with the right expectations",
      items: [
        {
          heading: "A boundary is not an editorial decision",
          summary: "Automatic sections and editorial choices answer different questions.",
          icon: "film",
          body: [
            "Detected scenes are a structure worked out automatically, whereas an editor divides material according to story, emphasis and intent.",
            "Treat the sections as a way of moving around footage, and keep choices about selects, story and sign-off with people.",
          ],
        },
        {
          heading: "Structure and feedback do different jobs",
          summary: "Sections help people move around; comments carry what reviewers think.",
          icon: "message",
          body: [
            [
              "Scenes show where a video divides. Feedback about a particular moment still belongs in a ",
              { text: "comment attached to that point on the timeline", page: 64 },
              ", where editors and reviewers find it with the asset.",
            ],
          ],
        },
        {
          heading: "Knowing where a video divides is not knowing what it holds",
          summary: "A section boundary says nothing about who speaks, which product appears or whether a take was approved.",
          icon: "tag",
          body: [
            [
              "Description still comes from elsewhere. ",
              { text: "Tags suggested during processing", page: 31 },
              " can be reviewed, approved or overridden by authorised users, and details only the team knows, such as the campaign or the client, belong in the asset record as ",
              { text: "custom keywords and other metadata", page: 22 },
              ".",
            ],
          ],
        },
        {
          heading: "Judge it by the scrubbing it saves",
          summary: "The useful test is your own team’s slowest video tasks.",
          icon: "gauge",
          body: [
            [
              "GetSibu aims its AI at ",
              { text: "practical library problems", page: 60 },
              " rather than features without a workflow purpose. For scene detection the practical question is simple: which videos does your team scrub through most often, and does moving between sections shorten that work?",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 33 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 60 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Interview footage searched without re-watching every file",
      team: "A documentary team",
      situation: "A documentary team has returned from several weeks of filming, with long interviews and location recordings from two coastal towns. A researcher who was not on the shoot must find material for the first assembly.",
      steps: [
        {
          heading: "The footage is in one place",
          body: ["Rather than sitting on individual drives, the rushes are part of the GetSibu library, where teams can ", { text: "organise large collections of footage", page: 211 }, " and review video assets."],
        },
        {
          heading: "The shoot days are narrowed first",
          body: ["Before opening any file, the researcher uses ", { text: "advanced media filters", page: 19 }, " to reduce the library to video from the days the crew spent in the second town."],
        },
        {
          heading: "The researcher moves between sections",
          body: "Instead of scrubbing each recording from the start, the researcher steps through its structured scenes until she reaches the harbour footage the director asked for.",
        },
        {
          heading: "Usable moments are marked",
          body: ["Where a section holds something worth using, the researcher leaves a ", { text: "timeline comment", page: 64 }, " at that point for the editor."],
        },
        {
          heading: "The editor decides",
          body: "The editor starts from the marked points, watches around each one in full and chooses what goes into the assembly.",
        },
      ],
      outcome: "The researcher’s hours go into choosing material rather than hunting for it, and the editor receives notes tied to the moments they describe.",
      link: { page: 217, label: "GetSibu for Documentary Teams" },
      sources: [{ kind: "pdf", page: 33 }, { kind: "pdf", page: 211 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 64 }, SCENARIO],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI scene detection",
      items: [
        {
          question: "Does AI scene detection mean nobody has to watch the footage?",
          answer: "No. Moving between sections cuts down the scrubbing needed to reach material, but judging a performance, checking what can be used or approving a cut still means watching the parts that matter.",
        },
        {
          question: "Who on a video team gains most from AI scene detection?",
          answer: "People who open footage they did not shoot or edit: assistants building selects, researchers, producers checking material and marketers reusing finished films. Whoever made a video already knows where things are; everyone else benefits from a structure to move through.",
        },
        {
          question: "Is AI scene detection the same as AI-powered video discovery?",
          answer: [
            "They answer different needs. Scene detection gives one video a structure to navigate, whereas ",
            { text: "AI-powered video discovery", page: 51 },
            " is about finding the right videos across a whole library in the first place.",
          ],
        },
        {
          question: "Is AI scene detection worth much for short videos?",
          answer: "Its value grows with length. A short social clip can be watched in full sooner than anyone could move between its parts; long interviews, event recordings and rushes are where repeated scrubbing costs the most.",
        },
      ],
      sources: [{ kind: "pdf", page: 33 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on working with video in the library",
      variant: "compact",
      pages: [25, 147, 64, 65, 51, 60],
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
