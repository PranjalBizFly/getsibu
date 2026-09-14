/**
 * The nine original system figures, each able to focus on one of its parts.
 * Focus keys are documented per figure; see content/architecture/visuals.ts for who uses them.
 */
import type { CSSProperties } from "react";
import { Chip, FocusRing, MONO, MediaTile, Svg, dim, isOn, part, type FigureProps } from "./parts";

/* Library search (homepage hero) — no focus ---------------------------------------------------- */

export function LibrarySearch() {
  const tileW = 127;
  const tileH = 86;
  const col = (i: number) => 28 + i * (tileW + 12);
  const rows = [192, 314];
  const tiles = [
    { type: "video", row: 0, col: 0, match: true },
    { type: "image", row: 0, col: 1 },
    { type: "document", row: 0, col: 2 },
    { type: "audio", row: 0, col: 3 },
    { type: "image", row: 1, col: 0 },
    { type: "video", row: 1, col: 1 },
    { type: "audio", row: 1, col: 2 },
    { type: "document", row: 1, col: 3 },
  ] as const;
  const chips = [
    { label: "Filename", width: 82 },
    { label: "Metadata", width: 84, on: true },
    { label: "Extracted text", width: 124 },
    { label: "AI tags", width: 74, on: true },
    { label: "Comments", width: 88 },
  ];
  let chipX = 28;
  return (
    <Svg viewBox="0 0 600 520" label="A natural-language search for warm urban evening footage, matched through metadata and AI tags to one video in a library of videos, images, documents and audio.">
      <rect x={0.5} y={0.5} width={599} height={519} rx={16} className="fill-raised stroke-line" />
      <g {...part(0)}>
        <rect x={28} y={28} width={544} height={60} rx={10} className="fill-bg stroke-line-strong" strokeWidth={1.25} />
        <circle cx={58} cy={56} r={8.5} fill="none" className="stroke-fg-muted" strokeWidth={2} />
        <path d="M64.5 62.5 71 69" className="stroke-fg-muted" strokeWidth={2} strokeLinecap="round" />
        <text x={86} y={64} fontSize={19} fontWeight={500} className="fill-fg">
          warm urban evening footage
        </text>
        <rect x={436} y={44} width={120} height={28} rx={6} className="fill-accent-soft" />
        <text x={496} y={62.5} textAnchor="middle" fontSize={11.5} className={`fill-accent ${MONO}`}>
          natural language
        </text>
      </g>
      <g {...part(1)}>
        <text x={28} y={128} fontSize={11} letterSpacing={1.2} className={`fill-fg-muted ${MONO}`}>
          MATCHED ON
        </text>
        {chips.map((chip) => {
          const x = chipX;
          chipX += chip.width + 8;
          return <Chip key={chip.label} x={x} y={140} width={chip.width} label={chip.label} on={chip.on} />;
        })}
      </g>
      {tiles.map((tile, i) => {
        const x = col(tile.col);
        const y = rows[tile.row];
        const match = "match" in tile;
        return (
          <g key={`${tile.row}-${tile.col}`} {...part(i + 2)}>
            {match ? (
              <g>
                <rect x={x} y={y} width={tileW} height={tileH} rx={7} className="fill-navy" />
                {[
                  [10, 34, 18, 52],
                  [30, 22, 22, 64],
                  [54, 40, 16, 46],
                  [72, 14, 24, 72],
                  [98, 30, 18, 56],
                ].map(([bx, by, bw, bh]) => (
                  <rect key={bx} x={x + bx} y={y + by} width={bw} height={bh} className="fill-navy-700" />
                ))}
                {[
                  [34, 30],
                  [40, 44],
                  [77, 24],
                  [84, 38],
                  [77, 52],
                  [102, 42],
                  [14, 46],
                  [58, 52],
                ].map(([wx, wy]) => (
                  <rect key={`${wx}-${wy}`} x={x + wx} y={y + wy} width={4} height={4} className="fill-olive-300" />
                ))}
                <rect x={x - 5} y={y - 5} width={tileW + 10} height={tileH + 10} rx={11} fill="none" strokeWidth={3} pathLength={1} className="stroke-signal" data-draw="" style={{ "--len": 1, "--delay": "1100ms" } as CSSProperties} />
              </g>
            ) : (
              <MediaTile type={tile.type} x={x} y={y} width={tileW} height={tileH} />
            )}
            <text x={x} y={y + tileH + 18} fontSize={10.5} letterSpacing={1} className={`${MONO} ${match ? "fill-signal-strong" : "fill-fg-muted"}`}>
              {tile.type.toUpperCase()}
              {match ? " · MATCH" : ""}
            </text>
          </g>
        );
      })}
      <g {...part(10)}>
        <rect x={28} y={440} width={544} height={52} rx={10} className="fill-bg stroke-line" />
        <circle cx={48} cy={466} r={5} fill="none" strokeWidth={2} className="stroke-signal" />
        <text x={62} y={470.5} fontSize={11} letterSpacing={1} className={`fill-fg-muted ${MONO}`}>
          AI TAGS
        </text>
        <Chip x={128} y={451} width={66} label="urban" on />
        <Chip x={202} y={451} width={78} label="evening" on />
        <Chip x={288} y={451} width={104} label="warm tones" on />
        <rect x={450} y={451} width={108} height={30} rx={6} className="fill-accent-soft" />
        <path d="M464 466.5l4.5 4.5 9-9" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-accent" />
        <text x={486} y={471} fontSize={13} fontWeight={600} className="fill-accent">
          Approved
        </text>
      </g>
    </Svg>
  );
}

/* Search signals — focus: filename | metadata | ocr | tags | comments | semantic ---------------- */

const SEARCH_QUERIES: Record<string, string> = {
  ocr: "quarterly results slide",
  semantic: "warm urban evening footage",
  metadata: "photos from the brand shoot",
  tags: "product shots",
  comments: "approved hero image",
};

export function SearchSignals({ focus }: FigureProps) {
  const signals = [
    { key: "filename", label: "Filename", match: false },
    { key: "metadata", label: "Metadata", match: true },
    { key: "ocr", label: "OCR text", match: false },
    { key: "tags", label: "AI-generated tags", match: true },
    { key: "comments", label: "Comments", match: true },
    { key: "semantic", label: "Semantic meaning", match: true },
  ].map((s) => ({ ...s, match: focus ? s.key === focus : s.match }));
  const query = (focus && SEARCH_QUERIES[focus]) ?? "spring campaign, outdoor, blue sky";
  return (
    <Svg viewBox="0 0 560 392" label={`A search for "${query}" checked against filename, metadata, OCR text, AI-generated tags, comments and semantic meaning, showing which signals match.`}>
      <g {...part(0)}>
        <rect x={24} y={24} width={512} height={52} rx={10} className="fill-bg stroke-line-strong" strokeWidth={1.25} />
        <circle cx={52} cy={49} r={8} fill="none" strokeWidth={2} className="stroke-fg-muted" />
        <path d="M58 55l6 6" strokeWidth={2} strokeLinecap="round" className="stroke-fg-muted" />
        <text x={76} y={56} fontSize={17} fontWeight={500} className="fill-fg">
          {query}
        </text>
      </g>
      {signals.map((signal, i) => {
        const y = 100 + i * 46;
        const focused = signal.key === focus;
        return (
          <g key={signal.key} {...part(i + 1)}>
            <rect x={24} y={y} width={512} height={38} rx={8} strokeWidth={focused ? 1.75 : 1} className={focused ? "fill-signal-soft stroke-signal" : signal.match ? "fill-raised stroke-line" : "fill-bg stroke-line"} />
            <circle cx={48} cy={y + 19} r={5.5} strokeWidth={2} className={signal.match ? "fill-signal stroke-signal" : "fill-none stroke-line-strong"} />
            <text x={66} y={y + 24} fontSize={14.5} fontWeight={signal.match ? 600 : 400} className={signal.match ? "fill-fg" : "fill-fg-muted"}>
              {signal.label}
            </text>
            <text x={516} y={y + 24} textAnchor="end" fontSize={11} letterSpacing={1} className={`${MONO} ${signal.match ? "fill-signal-strong" : "fill-fg-muted"}`}>
              {signal.match ? "MATCH" : "—"}
            </text>
          </g>
        );
      })}
    </Svg>
  );
}

/* AI review — focus: object | colour | mood | confidence | approve | override | tags -------------- */

export function AiReview({ focus }: FigureProps) {
  const tags = [
    { tag: "cup", kind: "Object", key: "object", confidence: 0.92 },
    { tag: "indigo", kind: "Colour", key: "colour", confidence: 0.78 },
    { tag: "calm", kind: "Mood", key: "mood", confidence: 0.61 },
  ];
  const tagFocus = focus && ["object", "colour", "mood"].includes(focus);
  return (
    <Svg viewBox="0 0 560 400" label="An image with detected object and colour regions, and a panel of suggested tags with confidence bars and approve or override actions.">
      <g {...part(0)}>
        <rect x={24} y={24} width={300} height={352} rx={10} className="fill-accent-soft" />
        <rect x={24} y={262} width={300} height={114} className="fill-indigo-300" />
        <rect x={120} y={176} width={78} height={94} rx={12} className="fill-indigo" />
        <path d="M198 198c24 0 24 44 0 44" fill="none" strokeWidth={9} className="stroke-indigo" />
        <circle cx={250} cy={96} r={26} className="fill-olive-300" />
      </g>
      <g {...part(1)}>
        <g className={tagFocus ? dim(focus, "object") : focus === "mood" ? "opacity-35" : ""}>
          <rect x={106} y={162} width={120} height={122} rx={6} fill="none" strokeWidth={isOn(focus, "object") ? 3 : 2} strokeDasharray="7 5" className="stroke-signal" />
          <rect x={106} y={138} width={70} height={20} rx={4} className="fill-signal" />
          <text x={141} y={152.5} textAnchor="middle" fontSize={11} className={`fill-navy ${MONO}`}>
            object
          </text>
        </g>
        <g className={tagFocus ? dim(focus, "colour") : focus === "mood" ? "opacity-35" : ""}>
          <rect x={40} y={40} width={150} height={96} rx={6} fill="none" strokeWidth={isOn(focus, "colour") ? 3 : 2} strokeDasharray="7 5" className="stroke-signal" />
          <rect x={48} y={48} width={70} height={20} rx={4} className="fill-signal" />
          <text x={83} y={62.5} textAnchor="middle" fontSize={11} className={`fill-navy ${MONO}`}>
            colour
          </text>
        </g>
      </g>
      <g {...part(2)}>
        <rect x={344.5} y={24.5} width={191} height={351} rx={10} className="fill-bg stroke-line" />
        <text x={362} y={54} fontSize={11} letterSpacing={1} className={`fill-fg-muted ${MONO}`}>
          SUGGESTED TAGS
        </text>
        {tags.map((t, i) => {
          const y = 76 + i * 64;
          const rowClass = tagFocus ? dim(focus, t.key) : "";
          return (
            <g key={t.tag} className={rowClass}>
              <rect x={362} y={y} width={t.tag.length * 8.5 + 22} height={26} rx={6} className={isOn(focus, t.key) ? "fill-signal stroke-signal" : "fill-signal-soft"} />
              <text x={373} y={y + 17.5} fontSize={13} fontWeight={600} className={isOn(focus, t.key) ? "fill-navy" : "fill-signal-strong"}>
                {t.tag}
              </text>
              <text x={518} y={y + 17.5} textAnchor="end" fontSize={11.5} className="fill-fg-muted">
                {t.kind}
              </text>
              <rect x={362} y={y + 38} width={156} height={isOn(focus, "confidence") ? 7 : 5} rx={2.5} className="fill-line" />
              <rect x={362} y={y + 38} width={156 * t.confidence} height={isOn(focus, "confidence") ? 7 : 5} rx={2.5} className="fill-signal" />
            </g>
          );
        })}
        <text x={362} y={284} fontSize={11} fontWeight={isOn(focus, "confidence") ? 600 : 400} className={isOn(focus, "confidence") ? "fill-signal-strong" : "fill-fg-muted"}>
          Bars show tag confidence
        </text>
        <g className={focus && ["approve", "override"].includes(focus) ? dim(focus, "approve") : ""}>
          <FocusRing x={362} y={298} width={156} height={34} rx={6} show={isOn(focus, "approve")} />
          <rect x={362} y={298} width={156} height={34} rx={6} className="fill-accent" />
          <text x={440} y={319.5} textAnchor="middle" fontSize={13} fontWeight={600} className="fill-accent-fg">
            Approve all
          </text>
        </g>
        <g className={focus && ["approve", "override"].includes(focus) ? dim(focus, "override") : ""}>
          <rect x={362.5} y={338.5} width={155} height={29} rx={6} strokeWidth={isOn(focus, "override") ? 2 : 1} className={isOn(focus, "override") ? "fill-signal-soft stroke-signal" : "fill-bg stroke-line-strong"} />
          <text x={440} y={357.5} textAnchor="middle" fontSize={13} fontWeight={isOn(focus, "override") ? 600 : 500} className="fill-fg">
            Override
          </text>
        </g>
      </g>
    </Svg>
  );
}

/* Timeline review — focus: comments | timeline | status ----------------------------------------- */

export function TimelineReview({ focus }: FigureProps) {
  const statuses = [
    { label: "Awaiting review", width: 122 },
    { label: "Requires changes", width: 128 },
    { label: "Approved", width: 80, current: true },
  ];
  let statusX = 40;
  return (
    <Svg viewBox="0 0 560 400" label="A video with comments pinned to three points on its timeline, one comment thread open, and a review status of approved.">
      <g {...part(0)}>
        <rect x={24} y={24} width={512} height={232} rx={10} className="fill-navy" />
        <circle cx={280} cy={146} r={30} className="fill-white/10 stroke-white/40" strokeWidth={1.5} />
        <path d="M271 132l24 14-24 14z" className="fill-white/85" />
        <g className={dim(focus, "status")}>
          {statuses.map((status) => {
            const x = statusX;
            statusX += status.width + 8;
            return (
              <g key={status.label}>
                <rect x={x} y={40} width={status.width} height={26} rx={13} className={status.current ? "fill-olive" : "fill-white/10"} />
                <text x={x + status.width / 2} y={57} textAnchor="middle" fontSize={12} fontWeight={600} className={status.current ? "fill-navy" : "fill-white/70"}>
                  {status.label}
                </text>
              </g>
            );
          })}
          {isOn(focus, "status") ? <rect x={33} y={33} width={362} height={40} rx={20} fill="none" strokeWidth={2} className="stroke-olive-300" /> : null}
        </g>
      </g>
      <g {...part(1)} className={dim(focus, "timeline")}>
        <text x={24} y={290} fontSize={11} letterSpacing={1} className={`fill-fg-muted ${MONO}`}>
          TIMELINE
        </text>
        <rect x={24} y={302} width={512} height={isOn(focus, "timeline") ? 8 : 6} rx={3} className="fill-line" />
        <rect x={24} y={302} width={226} height={isOn(focus, "timeline") ? 8 : 6} rx={3} className="fill-accent" />
        <line x1={250} y1={292} x2={250} y2={318} strokeWidth={2} className="stroke-fg" />
        {[120, 250, 420].map((x) => (
          <circle key={x} cx={x} cy={305} r={isOn(focus, "timeline") ? 9 : 7} strokeWidth={2.5} className="fill-signal stroke-raised" />
        ))}
      </g>
      <g {...part(2)} className={dim(focus, "comments")}>
        <path d="M250 322l-8 10h16z" className="fill-raised stroke-line" />
        <rect x={150.5} y={331.5} width={320} height={56} rx={8} strokeWidth={isOn(focus, "comments") ? 2 : 1} className={isOn(focus, "comments") ? "fill-raised stroke-signal" : "fill-raised stroke-line"} />
        <circle cx={176} cy={359} r={12} className="fill-accent-soft" />
        <rect x={198} y={348} width={190} height={8} rx={4} className="fill-line-strong" />
        <rect x={198} y={364} width={130} height={8} rx={4} className="fill-line" />
        <text x={454} y={364} textAnchor="end" fontSize={11} className={`fill-fg-muted ${MONO}`}>
          reply
        </text>
      </g>
    </Svg>
  );
}

/* Version record — focus: files | versions | restore | lifecycle | audit ------------------------ */

export function VersionRecord({ focus }: FigureProps) {
  const files = ["final", "final-v2", "final-final"];
  const stages = ["Ingest", "Review", "Approve", "Distribute", "Archive"];
  return (
    <Svg viewBox="0 0 560 400" label="Three separate files named final, final-v2 and final-final replaced by one asset record holding versions 3, 2 and 1, a lifecycle from ingest to archive, and its audit trail.">
      <g {...part(0)} className={dim(focus, "files")}>
        <text x={24} y={52} fontSize={11} letterSpacing={1} className={`fill-fg-muted ${MONO}`}>
          SEPARATE COPIES
        </text>
        {files.map((file, i) => (
          <g key={file}>
            <rect x={24 + i * 8} y={70 + i * 56} width={160} height={42} rx={8} strokeWidth={isOn(focus, "files") ? 1.75 : 1} className={isOn(focus, "files") ? "fill-bg stroke-signal" : "fill-bg stroke-line"} />
            <text x={42 + i * 8} y={96 + i * 56} fontSize={14} className={`fill-fg-muted ${MONO}`}>
              {file}
            </text>
            <line x1={40 + i * 8} y1={91 + i * 56} x2={52 + i * 8 + file.length * 8.4} y2={91 + i * 56} strokeWidth={1.5} className="stroke-fg-muted" />
          </g>
        ))}
      </g>
      <g {...part(1)} className={dim(focus, "files", "versions")}>
        <path d="M200 160h32m-8-7 8 7-8 7" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-fg-muted" />
      </g>
      <g {...part(2)}>
        <rect x={248.5} y={24.5} width={287} height={351} rx={10} className="fill-raised stroke-line" />
        <text x={268} y={56} fontSize={16} fontWeight={600} className="fill-fg">
          One asset record
        </text>
        <g className={dim(focus, "versions", "restore", "files")}>
          <text x={268} y={86} fontSize={11} letterSpacing={1} className={`fill-fg-muted ${MONO}`}>
            VERSIONS
          </text>
          {[3, 2, 1].map((version, i) => {
            const y = 98 + i * 48;
            const active = i === 0;
            const restoreFocus = isOn(focus, "restore") && i === 1;
            return (
              <g key={version}>
                <rect x={264.5} y={y + 0.5} width={255} height={39} rx={8} strokeWidth={active || restoreFocus ? 1.5 : 1} className={active ? "fill-signal-soft stroke-signal" : restoreFocus ? "fill-accent-soft stroke-accent" : "fill-bg stroke-line"} />
                <text x={282} y={y + 25} fontSize={14} fontWeight={active ? 600 : 500} className="fill-fg">
                  Version {version}
                </text>
                <text x={504} y={y + 25} textAnchor="end" fontSize={12.5} fontWeight={600} className={active ? "fill-signal-strong" : "fill-accent"}>
                  {active ? "Active" : "Restore"}
                </text>
              </g>
            );
          })}
        </g>
        <g className={dim(focus, "lifecycle")}>
          <text x={268} y={268} fontSize={11} letterSpacing={1} className={`fill-fg-muted ${MONO}`}>
            LIFECYCLE
          </text>
          <line x1={284} y1={290} x2={500} y2={290} strokeWidth={2} className="stroke-line-strong" />
          <line x1={284} y1={290} x2={392} y2={290} strokeWidth={isOn(focus, "lifecycle") ? 3 : 2} className="stroke-signal" />
          {stages.map((stage, i) => {
            const x = 284 + i * 54;
            const done = i <= 2;
            return (
              <g key={stage}>
                <circle cx={x} cy={290} r={6} strokeWidth={2} className={done ? "fill-signal stroke-signal" : "fill-raised stroke-line-strong"} />
                <text x={x} y={314} textAnchor="middle" fontSize={10} className={`${MONO} ${done ? "fill-fg-soft" : "fill-fg-muted"}`}>
                  {stage}
                </text>
              </g>
            );
          })}
        </g>
        <g className={dim(focus, "audit")}>
          <line x1={268} y1={334} x2={516} y2={334} className="stroke-line" />
          {isOn(focus, "audit") ? <circle cx={274} cy={354} r={5} className="fill-signal" /> : null}
          <text x={isOn(focus, "audit") ? 286 : 268} y={358} fontSize={12.5} fontWeight={isOn(focus, "audit") ? 600 : 400} className={isOn(focus, "audit") ? "fill-fg" : "fill-fg-muted"}>
            Audit trail kept with the record
          </text>
        </g>
      </g>
    </Svg>
  );
}

/* Folder access — focus: folders | team | individual | private | client ------------------------- */

export function FolderAccess({ focus }: FigureProps) {
  const rows = [
    { label: "Library", depth: 0, key: "folders" },
    { label: "Brand assets", depth: 1, badge: "Team", key: "team" },
    { label: "Campaigns", depth: 1, badge: "Team", key: "team" },
    { label: "Spring launch", depth: 2, badge: "Individual", key: "individual" },
    { label: "New folder", depth: 1, badge: "Private until granted", private: true, key: "private" },
    { label: "Client A", depth: 1, badge: "Isolated", divider: true, key: "client" },
    { label: "Client B", depth: 1, badge: "Isolated", key: "client" },
  ];
  const rowFocus = (key: string) => (focus && focus !== "folders" ? dim(focus, key, key === "folders" ? "any" : "") : "");
  return (
    <Svg viewBox="0 0 560 400" label="A folder tree where team and individual access is set per folder, a new folder stays private until access is granted, and client folders are isolated.">
      <line x1={45} y1={62} x2={45} y2={352} strokeWidth={1.5} className="stroke-line-strong" />
      <line x1={73} y1={166} x2={73} y2={198} strokeWidth={1.5} className="stroke-line-strong" />
      {rows.map((row, i) => {
        const y = 24 + i * 50;
        const x = 32 + row.depth * 28;
        const badgeWidth = (row.badge?.length ?? 0) * 7 + 24;
        const focused = isOn(focus, row.key);
        return (
          <g key={row.label} {...part(i)} className={row.depth === 0 ? "" : rowFocus(row.key)}>
            {row.divider ? <line x1={24} y1={y - 12} x2={536} y2={y - 12} strokeDasharray="4 5" className="stroke-line-strong" /> : null}
            {row.depth > 0 ? <line x1={x - 14} y1={y + 20} x2={x - 2} y2={y + 20} strokeWidth={1.5} className="stroke-line-strong" /> : null}
            <rect
              x={x}
              y={y + 6}
              width={536 - x}
              height={30}
              rx={6}
              className={row.private || (focused && row.depth > 0) ? "fill-signal-soft/60 stroke-signal" : "fill-transparent stroke-transparent"}
              strokeDasharray={row.private ? "5 4" : undefined}
            />
            <path d={`M${x + 8} ${y + 13}h7l3 3h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-18a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z`} className={row.private ? "fill-signal" : row.depth === 0 ? "fill-indigo" : "fill-indigo-300"} />
            <text x={x + 40} y={y + 26} fontSize={14.5} fontWeight={row.depth === 0 || focused ? 600 : 500} className="fill-fg">
              {row.label}
            </text>
            {row.badge ? (
              <g>
                <rect x={528 - badgeWidth} y={y + 10} width={badgeWidth} height={22} rx={11} className={row.private ? "fill-signal" : row.badge === "Isolated" ? "fill-accent-soft" : "fill-sunken"} />
                <text x={528 - badgeWidth / 2} y={y + 25} textAnchor="middle" fontSize={11.5} fontWeight={600} className={row.private ? "fill-navy" : row.badge === "Isolated" ? "fill-accent" : "fill-fg-soft"}>
                  {row.badge}
                </text>
              </g>
            ) : null}
          </g>
        );
      })}
    </Svg>
  );
}

/* Library activity — focus: uploads | storage | tags | cadence ----------------------------------- */

export function LibraryActivity({ focus }: FigureProps) {
  const bars = [44, 60, 52, 76, 68, 90, 82, 104, 88, 112, 98, 124];
  const barW = (512 - 11 * 10) / 12;
  const segments = [
    { label: "Video", share: 0.46, className: "fill-indigo" },
    { label: "Image", share: 0.28, className: "fill-indigo-500" },
    { label: "Document", share: 0.18, className: "fill-indigo-300" },
    { label: "Audio", share: 0.08, className: "fill-olive" },
  ];
  let segX = 24;
  let legendX = 24;
  return (
    <Svg viewBox="0 0 560 400" label="Sample library analytics: weekly uploads as bars, storage split by video, image, document and audio, and most-searched tags. The data is illustrative.">
      <g {...part(0)} className={dim(focus, "uploads", "cadence")}>
        <text x={24} y={44} fontSize={15} fontWeight={600} className="fill-fg">
          Uploads
        </text>
        <rect x={326.5} y={22.5} width={209} height={32} rx={8} strokeWidth={isOn(focus, "cadence") ? 2 : 1} className={isOn(focus, "cadence") ? "fill-signal-soft stroke-signal" : "fill-bg stroke-line"} />
        {["Daily", "Weekly", "Monthly"].map((period, i) => (
          <g key={period}>
            {i === 1 ? <rect x={397} y={26} width={68} height={25} rx={6} className="fill-raised stroke-line" /> : null}
            <text x={362 + i * 70} y={43} textAnchor="middle" fontSize={12.5} fontWeight={i === 1 ? 600 : 500} className={i === 1 ? "fill-fg" : "fill-fg-muted"}>
              {period}
            </text>
          </g>
        ))}
      </g>
      <g {...part(1)} className={dim(focus, "uploads", "cadence")}>
        {[92, 132, 172].map((y) => (
          <line key={y} x1={24} y1={y} x2={536} y2={y} className="stroke-line" />
        ))}
        {bars.map((h, i) => (
          <rect key={i} x={24 + i * (barW + 10)} y={212 - h} width={barW} height={h} rx={3} className={i === bars.length - 1 ? "fill-accent" : "fill-indigo-300"} />
        ))}
        <line x1={24} y1={212.5} x2={536} y2={212.5} className="stroke-line-strong" />
      </g>
      <g {...part(2)} className={dim(focus, "storage")}>
        <text x={24} y={254} fontSize={15} fontWeight={600} className="fill-fg">
          Storage by category
        </text>
        {segments.map((s) => {
          const x = segX;
          segX += s.share * 512;
          return <rect key={s.label} x={x} y={268} width={s.share * 512 - 2} height={isOn(focus, "storage") ? 20 : 16} rx={3} className={s.className} />;
        })}
        {segments.map((s) => {
          const x = legendX;
          legendX += s.label.length * 7.5 + 34;
          return (
            <g key={s.label}>
              <rect x={x} y={298} width={10} height={10} rx={2} className={s.className} />
              <text x={x + 16} y={307.5} fontSize={12} className="fill-fg-muted">
                {s.label}
              </text>
            </g>
          );
        })}
      </g>
      <g {...part(3)} className={dim(focus, "tags")}>
        <text x={24} y={346} fontSize={15} fontWeight={600} className="fill-fg">
          Most searched tags
        </text>
        {["campaign", "product", "portrait", "logo"].map((tag, i) => (
          <g key={tag}>
            <rect x={24 + [0, 96, 184, 280][i]} y={358} width={tag.length * 8 + 22} height={26} rx={6} className={isOn(focus, "tags") ? "fill-signal-soft" : "fill-sunken"} />
            <text x={35 + [0, 96, 184, 280][i]} y={375.5} fontSize={12.5} className={isOn(focus, "tags") ? "fill-signal-strong" : "fill-fg-soft"}>
              {tag}
            </text>
          </g>
        ))}
      </g>
    </Svg>
  );
}

/* Tenant boundaries — focus: tenants | audit ----------------------------------------------------- */

export function TenantBoundaries({ focus }: FigureProps) {
  const clients = ["Client A", "Client B", "Client C"];
  const log = ["New folder created — private until granted", "Access granted to the brand team", "Folder permission changed"];
  return (
    <Svg viewBox="0 0 560 400" label="Three isolated client environments, each with its own assets, above an audit history of access changes.">
      {clients.map((client, i) => {
        const x = 24 + i * 176;
        return (
          <g key={client} {...part(i)} className={dim(focus, "tenants")}>
            <rect x={x + 0.5} y={24.5} width={159} height={199} rx={12} strokeWidth={isOn(focus, "tenants") ? 2 : 1.25} className={isOn(focus, "tenants") ? "fill-raised stroke-signal" : "fill-raised stroke-line-strong"} />
            <text x={x + 18} y={54} fontSize={11} letterSpacing={1} className={`fill-fg-muted ${MONO}`}>
              {client.toUpperCase()}
            </text>
            {[0, 1, 2, 3, 4, 5].map((j) => (
              <rect key={j} x={x + 18 + (j % 3) * 42} y={70 + Math.floor(j / 3) * 46} width={36} height={36} rx={5} className={["fill-indigo", "fill-accent-soft", "fill-sunken", "fill-indigo-300", "fill-sunken", "fill-accent-soft"][(j + i) % 6]} />
            ))}
            <line x1={x + 18} y1={176} x2={x + 142} y2={176} className="stroke-line" />
            <text x={x + 18} y={200} fontSize={12} className="fill-fg-muted">
              Own storage
            </text>
          </g>
        );
      })}
      <g {...part(3)} className={dim(focus, "audit")}>
        <rect x={24.5} y={246.5} width={511} height={129} rx={10} strokeWidth={isOn(focus, "audit") ? 2 : 1} className={isOn(focus, "audit") ? "fill-bg stroke-signal" : "fill-bg stroke-line"} />
        <text x={44} y={276} fontSize={11} letterSpacing={1} className={`fill-fg-muted ${MONO}`}>
          AUDIT HISTORY
        </text>
        {log.map((entry, i) => (
          <g key={entry}>
            <circle cx={50} cy={302 + i * 26} r={4.5} strokeWidth={2} className={i === 0 || isOn(focus, "audit") ? "fill-signal stroke-signal" : "fill-none stroke-line-strong"} />
            <text x={66} y={306.5 + i * 26} fontSize={13.5} className="fill-fg-soft">
              {entry}
            </text>
          </g>
        ))}
      </g>
    </Svg>
  );
}

/* API flow — focus: upload | search | metadata | tags | comments | approvals | webhooks | auth ---- */

export function ApiFlow({ focus }: FigureProps) {
  const capabilities = [
    { label: "Upload", key: "upload" },
    { label: "Search", key: "search" },
    { label: "Metadata", key: "metadata" },
    { label: "Tags", key: "tags" },
    { label: "Comments", key: "comments" },
    { label: "Approvals", key: "approvals" },
  ];
  const capabilityFocus = focus && capabilities.some((c) => c.key === focus);
  return (
    <Svg viewBox="0 0 560 400" label="An application sends authenticated requests to the GetSibu API for upload, search, metadata, tags, comments and approvals, and receives webhook events in return.">
      <g {...part(0)}>
        <rect x={24.5} y={146.5} width={149} height={99} rx={10} className="fill-raised stroke-line-strong" />
        <text x={99} y={190} textAnchor="middle" fontSize={14.5} fontWeight={600} className="fill-fg">
          Your application
        </text>
        <text x={99} y={212} textAnchor="middle" fontSize={11} className={`fill-fg-muted ${MONO}`}>
          custom workflows
        </text>
      </g>
      <g {...part(1)}>
        <path d="M178 186h30m-7-6 7 6-7 6" fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="stroke-fg-muted" />
        <path d="M208 206h-30m7-6-7 6 7 6" fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="stroke-fg-muted" />
        <rect x={214} y={116} width={134} height={160} rx={10} strokeWidth={2} className="fill-raised stroke-signal" />
        <text x={281} y={178} textAnchor="middle" fontSize={15.5} fontWeight={600} className="fill-fg">
          GetSibu API
        </text>
        <text x={281} y={204} textAnchor="middle" fontSize={11} className={`fill-signal-strong ${MONO}`}>
          REST
        </text>
        {isOn(focus, "auth") ? <rect x={226} y={211} width={110} height={18} rx={9} className="fill-signal-soft" /> : null}
        <text x={281} y={224} textAnchor="middle" fontSize={11} fontWeight={isOn(focus, "auth") ? 600 : 400} className={`fill-signal-strong ${MONO}`}>
          authenticated
        </text>
      </g>
      {capabilities.map((capability, i) => {
        const y = 40 + i * 54;
        const focused = isOn(focus, capability.key);
        return (
          <g key={capability.key} {...part(i + 2)} className={capabilityFocus ? dim(focus, capability.key) : ""}>
            <path d={`M348 196C368 196 366 ${y + 17} 386 ${y + 17}`} fill="none" strokeWidth={focused ? 2 : 1.25} className={focused ? "stroke-signal" : "stroke-line-strong"} />
            <rect x={386.5} y={y + 0.5} width={149} height={33} rx={6} strokeWidth={focused ? 1.75 : 1} className={focused ? "fill-signal-soft stroke-signal" : "fill-sunken stroke-line"} />
            <text x={402} y={y + 21.5} fontSize={12.5} fontWeight={focused ? 600 : 400} className={`${focused ? "fill-signal-strong" : "fill-fg-soft"} ${MONO}`}>
              {capability.label}
            </text>
          </g>
        );
      })}
      <g {...part(8)} className={focus && focus !== "webhooks" ? "opacity-35" : ""}>
        <path d="M281 276v76H99v-106" fill="none" strokeWidth={isOn(focus, "webhooks") ? 2.5 : 1.75} strokeDasharray="6 5" className="stroke-signal" />
        <path d="M93 254l6-8 6 8" fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="stroke-signal" />
        <text x={190} y={343} textAnchor="middle" fontSize={11} fontWeight={isOn(focus, "webhooks") ? 600 : 400} className={`fill-signal-strong ${MONO}`}>
          webhook events
        </text>
      </g>
    </Svg>
  );
}
