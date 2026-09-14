/**
 * Data-driven illustrations. Each figure draws a concept named in the cited PDF pages — never a
 * mock-up of the GetSibu interface, never real-looking numbers — and says so in its caption.
 *
 * A figure can take a `focus` (the part of the system a page is about) and, for connector-flow, a
 * `label`. Colours come from semantic tokens, so every figure works on paper, muted and navy bands.
 */
import type { ComponentType } from "react";
import type { DiagramId, VisualRef } from "@/types/content";
import type { FigureProps } from "./parts";
import { AiReview, ApiFlow, FolderAccess, LibraryActivity, LibrarySearch, SearchSignals, TenantBoundaries, TimelineReview, VersionRecord } from "./figures-core";
import { ArchitectureStack, ConnectorFlow, ControlMap, IngestPipeline, MediaLibrary, MigrationMap } from "./figures-systems";

const DIAGRAMS: Record<DiagramId, { Figure: ComponentType<FigureProps>; caption: string }> = {
  "library-search": { Figure: LibrarySearch, caption: "Illustration: a plain-language search matched through metadata and AI tags." },
  "search-signals": { Figure: SearchSignals, caption: "Illustration: the information GetSibu can search, and which of it matched a query." },
  "ai-review": { Figure: AiReview, caption: "Illustration: suggested tags with confidence, ready for approval or override." },
  "timeline-review": { Figure: TimelineReview, caption: "Illustration: comments pinned to points on a video timeline, with review status." },
  "version-record": { Figure: VersionRecord, caption: "Illustration: versions, lifecycle and audit trail kept in one asset record." },
  "folder-access": { Figure: FolderAccess, caption: "Illustration: folder-level access, with new folders private until granted." },
  "library-activity": { Figure: LibraryActivity, caption: "Illustration with sample data: uploads, storage by category and most-searched tags." },
  "tenant-boundaries": { Figure: TenantBoundaries, caption: "Illustration: isolated client environments and an audit history of access changes." },
  "api-flow": { Figure: ApiFlow, caption: "Illustration: an application using the GetSibu API, with webhook events in return." },
  "ingest-pipeline": { Figure: IngestPipeline, caption: "Illustration: how content moves from its source to searchable, previewable assets." },
  "architecture-stack": { Figure: ArchitectureStack, caption: "Illustration: the layers GetSibu is built around." },
  "migration-map": { Figure: MigrationMap, caption: "Illustration: an existing structure mapped into the library, with metadata and access carried over." },
  "connector-flow": { Figure: ConnectorFlow, caption: "Illustration: existing storage and tools connected to one searchable library." },
  "control-map": { Figure: ControlMap, caption: "Illustration: security controls as layers around the library." },
  "media-library": { Figure: MediaLibrary, caption: "Illustration: one library for videos, images, documents and audio." },
};

/** A figure's caption split into its note ("Illustration", "Illustration with sample data") and what it shows. */
export function diagramCaption(id: DiagramId): { note: string; text: string } {
  const caption = DIAGRAMS[id].caption;
  const at = caption.indexOf(": ");
  const text = caption.slice(at + 2);
  return { note: caption.slice(0, at), text: text.charAt(0).toUpperCase() + text.slice(1) };
}

interface DiagramProps {
  /** Either a bare id or a full visual reference with focus and label. */
  id?: DiagramId;
  visual?: VisualRef;
  framed?: boolean;
  animate?: boolean;
  caption?: boolean;
  className?: string;
}

export function Diagram({ id, visual, framed = true, animate = true, caption = true, className = "" }: DiagramProps) {
  const ref: VisualRef = visual ?? { diagram: id! };
  const { Figure, caption: text } = DIAGRAMS[ref.diagram];
  // The homepage hero figure carries its own card; everything else sits in a frame.
  const frame = framed && ref.diagram !== "library-search";
  return (
    <figure className={`${animate ? "diagram-enter" : ""} ${className}`}>
      <div className={frame ? "rounded-lg border border-line bg-raised p-4 sm:p-6" : ""}>
        <Figure focus={ref.focus} label={ref.label} />
      </div>
      {caption ? <figcaption className="type-caption mt-3 text-fg-muted">{text}</figcaption> : null}
    </figure>
  );
}
