/**
 * 28 · Searchable Audio Library — /features/searchable-audio-library
 *
 * Angle (cluster: media-libraries): audio managed alongside other creative formats instead of in a separate system.
 * Facts are thin, so depth comes from vendor-neutral explanation of audio in creative libraries (music, voice-over,
 * sound effects, recordings) and what makes sound findable. No audio analysis, preview or listening capability is
 * claimed; descriptive tags for audio are presented as words a team applies.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams keep and find audio; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 28,
  metaDescription: "Audio assets can be managed in GetSibu alongside other creative formats, keeping one central media environment instead of separating audio from the library.",
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Keep music, voice-over, sound effects and recordings in the same library as the images, video and documents they belong with, and learn what makes sound findable when there is nothing to look at.",
      visual: { diagram: "media-library", focus: "audio" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 28 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Sound kept with the rest of the creative work",
      body: [
        "GetSibu lets teams manage audio assets alongside their other creative formats. Audio does not have to be separated from the rest of the library, so the organisation can keep one central media environment.",
        "Audio tends to drift away from everything else. Music is downloaded from a licensing site into someone’s personal folder, voice-over arrives from a recording studio by email, sound effects live inside an editor’s project, and interview recordings stay on the device that captured them. Each file ends up cut off from the film, advert or podcast episode it was made for, and from the paperwork that says how it may be used.",
        [
          "Once audio is part of the library, it can be discovered through the same ",
          { text: "unified search experience", page: 24 },
          " as images, video and documents, and organised with the same folders, tags and metadata.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Audio beside images, video and documents", "Music, voice-over, effects and recordings", "Nothing to see, so description matters", "Usage terms kept close to the track", "No separate audio store"],
      },
      highlight: {
        heading: "In practice",
        body: "An editor updating a product film needs the music bed licensed for the original launch. It sits in the same library as the launch footage, not in a download folder on a former colleague’s laptop.",
        tags: ["Editors", "Sound designers", "Producers"],
      },
      glance: {
        heading: "Audio library in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Works on", value: "Audio assets" },
          { label: "Managed alongside", value: "Images, video and documents" },
          { label: "Used by", value: "GetSibu for Creative Studios", page: 220 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 28 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 220 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "kinds",
      eyebrow: "Kinds of audio",
      heading: "What each kind of audio needs from a library",
      tabs: [
        {
          label: "Music",
          heading: "Beds, stings and licensed tracks",
          icon: "audio",
          body: [
            "Music in creative work is usually licensed rather than owned: a bed under a product film, a sting at the end of an advert, a track behind a social edit. Its usefulness depends as much on its terms as on its sound, since a track cleared for one campaign or territory may not be cleared for another.",
            "People look for music by feel, pace and purpose rather than by title, so tags describing mood, tempo and instrumentation are what make a music collection workable. Those descriptions are words the team chooses and applies, and they help only if everyone uses the same ones.",
          ],
          points: ["Terms matter as much as sound", "Mood, tempo and instrumentation as agreed tags"],
        },
        {
          label: "Voice-over",
          heading: "Reads, pickups and language versions",
          icon: "user",
          body: [
            "Voice-over arrives in rounds: a first read, pickups for changed lines, a read against a revised script, sometimes versions in several languages or by different artists. Each is a separate file from the studio, and its name rarely says which script revision it matches.",
            ["When a new read supersedes an old one, ", { text: "replacing the asset in place", page: 91 }, " retains the previous versions without leaving “VO_final_v3” and “VO_final_new” side by side. A read in another language is used alongside the original rather than instead of it, so it usually deserves an asset of its own."],
          ],
          points: ["Pickups and revised reads", "Language versions as separate assets"],
        },
        {
          label: "Sound effects",
          heading: "A reusable kit of short sounds",
          icon: "zap",
          body: [
            "Sound effects collections grow into large numbers of short files: doors, footsteps, crowds, ambiences, interface sounds. Commercial effects libraries arrive with naming conventions of their own, and a team’s own recordings add another.",
            "Because an effect is chosen by what it sounds like, findability depends on descriptive names and tags in the words an editor would type, such as “heavy wooden door closing”, rather than on a supplier’s catalogue number.",
          ],
          points: ["Many short, similar files", "Descriptive words over catalogue numbers"],
        },
        {
          label: "Recordings",
          heading: "Interviews, sessions and spoken content",
          icon: "users",
          body: [
            "Interview audio, panel sessions, podcasts and event recordings stay valuable long after the project that produced them, as source material for new edits, quotes and archives. They are also the audio most likely to remain with the person or device that captured it.",
            ["Event teams, for instance, can organise ", { text: "event recordings", page: 236 }, " alongside photography, promotional material and presentations. For spoken content, recording who took part, when and for which project is what lets someone find the right session later."],
          ],
          points: ["Source material for later edits", "Participants, dates and projects recorded"],
        },
      ],
      sources: [{ kind: "pdf", page: 28 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 236 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "findable",
      eyebrow: "Findable without a picture",
      heading: "Making audio discoverable when there is nothing to look at",
      items: [
        {
          heading: "Names carry more weight than usual",
          summary: "An image can be recognised from a thumbnail; a sound file offers no such shortcut.",
          icon: "text",
          body: [
            "Scanning a list of audio results means reading rather than glancing. A filename such as “Track 07” or “Audio_0142” forces someone to listen before they even know whether it is the right kind of sound.",
            "A naming convention that says what a file is, which project it served and which revision it represents does more work for audio than for any visual medium.",
          ],
        },
        {
          heading: "Recorded details do the searching",
          summary: "What is recorded about a sound file gives a search something to match when there is nothing to see.",
          icon: "search",
          body: [
            ["Available ", { text: "metadata can be searched alongside tags", page: 23 }, ". For audio that usually comes down to details such as creators, the path a file came from and keywords carried over from earlier systems, so a composer’s or studio’s name, or the project folder a mix was exported to, is often the best clue anyone has."],
          ],
        },
        {
          heading: "Usage terms belong next to the track",
          summary: "A track that cannot be reused legitimately is worse than one that cannot be found.",
          icon: "calendar",
          body: [
            "Music licences, voice artists’ agreements and effects library terms often limit how long, where or in which media a recording may be used. Filed in a separate folder, those limits are forgotten the moment a file is reused.",
            ["", { text: "Asset expiry information", page: 104 }, " can help teams identify content that should no longer be used after a specified period, and the agreement itself can be kept in the same library as a document tagged with the same project."],
          ],
        },
        {
          heading: "Credits and feedback stay with the file",
          summary: "Who made a recording, and what reviewers said about it, are easily lost.",
          icon: "message",
          body: [
            ["", { text: "Asset attribution", page: 116 }, " can keep composers, voice artists and studios associated with their recordings, which matters when a credit or a rights question comes up later."],
            ["Notes such as “too bright for the brand” or “the client prefers the second read” can be left as ", { text: "comments directly on the asset", page: 62 }, ", so the reason a track was chosen or rejected stays with it."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 23 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      eyebrow: "What changes",
      heading: "Audio kept apart compared with audio in the library",
      beforeLabel: "Audio in its own corners",
      afterLabel: "Audio in the central library",
      before: ["Tracks in download folders and edit projects", "Voice-over files left in email threads", "Licence terms filed far from the music", "Audio’s share of storage unknown", "Recordings stranded on the devices that made them"],
      after: ["Managed alongside images, video and documents", "Recordings kept with the project’s other media", "Agreements stored in the same library as tracks", "Storage analysed by category, audio included", "One central media environment"],
      link: { page: 192, label: "Storage by Category" },
      sources: [{ kind: "pdf", page: 28 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 192 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about searchable audio libraries",
      items: [
        {
          question: "Can a music track or a voice-over read be approved before editors use it?",
          answer: ["Yes. Assets can move through ", { text: "an approval process with status history", page: 68 }, ", which records whether a track or a read is awaiting review, approved or requires changes before it goes into an edit."],
        },
        {
          question: "Should the stems of a track be kept separately from its final mix?",
          answer: ["Usually, as assets of their own. Stems, the individual parts such as dialogue, music and effects, are what an editor needs to rework a mix, while the mix is what gets delivered. Giving both the same project tags keeps them findable together, and GetSibu can organise assets through ", { text: "folders, tags, collections and metadata", page: 4 }, "."],
        },
        {
          question: "Does audio need a folder structure of its own?",
          answer: "Not necessarily. Filing a track or a recording with the project or campaign it served keeps it close to its use. A separate area mainly suits shared kits, such as a sound effects collection that many projects draw on.",
        },
        {
          question: "Can access to unreleased music or confidential recordings be limited?",
          answer: ["Yes. ", { text: "Folder-level permissions", page: 152 }, " allow access to be controlled at a more detailed level than organisation-wide access, so sensitive recordings can be kept in areas of the library that only some teams can reach."],
        },
      ],
      sources: [{ kind: "pdf", page: 28 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping every medium in one library",
      variant: "compact",
      pages: [24, 25, 192, 104, 373, 220],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Stop Searching Through Folders",
      conversionPage: 393,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 393 }],
    },
  ],
};

export default page;
