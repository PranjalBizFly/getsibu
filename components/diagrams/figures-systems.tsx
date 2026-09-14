/**
 * System figures added for the page experience (Prompt 3). Labels are PDF terms; nothing depicts
 * a product screen, a figure, a vendor logo or a claim that is not publishable.
 */
import { Arrow, Chip, FocusRing, MONO, MediaTile, Svg, dim, isOn, part, type FigureProps, type MediaType } from "./parts";

/* Ingest pipeline — focus: sources | upload | processing | index | preview ------------------------- */

export function IngestPipeline({ focus }: FigureProps) {
  const nodes = [
    { key: "sources", label: "Connect", note: "Sources and uploads" },
    { key: "upload", label: "Upload", note: "Chunked, resumable" },
    { key: "processing", label: "Process", note: "Metadata, thumbnails, AI" },
    { key: "index", label: "Index", note: "Ready to search" },
    { key: "preview", label: "Preview", note: "Streaming" },
  ];
  const w = 100;
  const gap = 15;
  const x = (i: number) => 20 + i * (w + gap);
  return (
    <Svg viewBox="0 0 600 360" label="Content entering the library: connected sources and uploads, chunked resumable upload, processing for metadata, thumbnails and AI, indexing, and streaming preview.">
      <text x={20} y={48} fontSize={11} letterSpacing={1} className={`fill-fg-muted ${MONO}`} {...part(0)}>
        FROM SOURCE TO SEARCHABLE
      </text>
      {nodes.map((node, i) => {
        const nx = x(i);
        const on = isOn(focus, node.key);
        return (
          <g key={node.key} {...part(i + 1)} className={dim(focus, node.key)}>
            <FocusRing x={nx} y={80} width={w} height={120} show={on} />
            <rect x={nx + 0.5} y={80.5} width={w - 1} height={119} rx={10} strokeWidth={on ? 1.75 : 1} className={on ? "fill-signal-soft stroke-signal" : "fill-raised stroke-line"} />
            {i === 0 ? (
              <g>
                <rect x={nx + 22} y={104} width={56} height={34} rx={5} className="fill-accent-soft stroke-line" />
                <rect x={nx + 28} y={112} width={56} height={34} rx={5} className="fill-raised stroke-line-strong" />
                <path d={`M${nx + 56} 168v-14m-6 6 6-6 6 6`} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-accent" />
              </g>
            ) : null}
            {i === 1 ? (
              <g>
                {[0, 1, 2, 3, 4].map((c) => (
                  <rect key={c} x={nx + 16 + c * 14} y={124} width={11} height={16} rx={2} className={c < 3 ? "fill-accent" : "fill-line"} />
                ))}
                <path d={`M${nx + 30} ${162}a14 14 0 1 1 20 8`} fill="none" strokeWidth={2} strokeLinecap="round" className="stroke-signal" />
              </g>
            ) : null}
            {i === 2 ? (
              <g>
                {["metadata", "thumbnail", "AI"].map((label, j) => (
                  <g key={label}>
                    <circle cx={nx + 20} cy={112 + j * 22} r={4} className="fill-signal" />
                    <text x={nx + 30} y={116 + j * 22} fontSize={11} className={`fill-fg-soft ${MONO}`}>
                      {label}
                    </text>
                  </g>
                ))}
              </g>
            ) : null}
            {i === 3 ? (
              <g>
                <circle cx={nx + 46} cy={132} r={17} fill="none" strokeWidth={3} className="stroke-accent" />
                <path d={`M${nx + 58} ${144}l12 12`} strokeWidth={3} strokeLinecap="round" className="stroke-accent" />
              </g>
            ) : null}
            {i === 4 ? (
              <g>
                <rect x={nx + 16} y={108} width={68} height={46} rx={6} className="fill-navy" />
                <path d={`M${nx + 44} ${120}l14 11-14 11z`} className="fill-white/85" />
                <rect x={nx + 16} y={162} width={68} height={4} rx={2} className="fill-line" />
                <rect x={nx + 16} y={162} width={30} height={4} rx={2} className="fill-signal" />
              </g>
            ) : null}
            <text x={nx + w / 2} y={228} textAnchor="middle" fontSize={14} fontWeight={600} className="fill-fg">
              {node.label}
            </text>
            <text x={nx + w / 2} y={248} textAnchor="middle" fontSize={10.5} className="fill-fg-muted">
              {node.note}
            </text>
            {i < nodes.length - 1 ? <Arrow d={`M${nx + w + 2} 140h${gap - 4}m-4-4 4 4-4 4`} /> : null}
          </g>
        );
      })}
      <g {...part(7)} className={dim(focus, "processing", "index")}>
        <text x={20} y={300} fontSize={11} letterSpacing={1} className={`fill-fg-muted ${MONO}`}>
          PROCESSING STATUS
        </text>
        <Chip x={184} y={282} width={84} label="Queued" />
        <Chip x={276} y={282} width={104} label="Processing" />
        <Chip x={388} y={282} width={76} label="Ready" on />
      </g>
    </Svg>
  );
}


/* Architecture stack — focus: clients | edge | api | search | storage ----------------------------- */

export function ArchitectureStack({ focus }: FigureProps) {
  const layers = [
    { key: "clients", label: "Clients", chips: ["Supported clients", "Integrations"] },
    { key: "edge", label: "Edge services", chips: ["Edge caching", "CDN delivery"] },
    { key: "api", label: "APIs", chips: ["Stateless", "Scales independently"] },
    { key: "search", label: "Search infrastructure", chips: ["Text search", "Embeddings"] },
    { key: "storage", label: "Storage", chips: ["Object storage", "Partitioned by organisation"] },
  ];
  return (
    <Svg viewBox="0 0 600 420" label="GetSibu's layered architecture: clients, edge services, APIs, search infrastructure and storage.">
      <line x1={36} y1={40} x2={36} y2={380} strokeWidth={2} strokeDasharray="3 5" className="stroke-line-strong" />
      {layers.map((layer, i) => {
        const y = 20 + i * 78;
        const on = isOn(focus, layer.key);
        let chipRight = 564;
        return (
          <g key={layer.key} {...part(i)} className={dim(focus, layer.key)}>
            <rect x={56.5} y={y + 0.5} width={527} height={63} rx={10} strokeWidth={on ? 2 : 1} className={on ? "fill-signal-soft stroke-signal" : i % 2 ? "fill-bg stroke-line" : "fill-raised stroke-line"} />
            <circle cx={36} cy={y + 32} r={on ? 8 : 6} strokeWidth={2} className={on ? "fill-signal stroke-signal" : "fill-raised stroke-line-strong"} />
            <text x={76} y={y + 37} fontSize={15} fontWeight={600} className="fill-fg">
              {layer.label}
            </text>
            {[...layer.chips].reverse().map((chip) => {
              const width = chip.length * 7 + 22;
              chipRight -= width + 8;
              return (
                <g key={chip}>
                  <rect x={chipRight + 8} y={y + 18} width={width} height={28} rx={6} className={on ? "fill-raised" : "fill-sunken"} />
                  <text x={chipRight + 8 + width / 2} y={y + 36.5} textAnchor="middle" fontSize={11.5} className={`fill-fg-soft ${MONO}`}>
                    {chip}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
    </Svg>
  );
}

/* Migration map — focus: folders | metadata | permissions | import | verify ----------------------- */

export function MigrationMap({ focus }: FigureProps) {
  const folders = ["Campaigns", "Brand", "Archive"];
  return (
    <Svg viewBox="0 0 600 400" label="An existing folder structure moved into the GetSibu library with folders mirrored, metadata such as EXIF and XMP preserved, access mapped, and the transfer verified.">
      {[
        { x: 24, title: "EXISTING STORAGE", target: false },
        { x: 344, title: "GETSIBU LIBRARY", target: true },
      ].map((panel, p) => (
        <g key={panel.title} {...part(p)}>
          <rect x={panel.x + 0.5} y={24.5} width={231} height={283} rx={12} className={panel.target ? "fill-raised stroke-signal" : "fill-bg stroke-line"} strokeWidth={panel.target ? 1.5 : 1} />
          <text x={panel.x + 20} y={54} fontSize={11} letterSpacing={1} className={`fill-fg-muted ${MONO}`}>
            {panel.title}
          </text>
          {folders.map((folder, i) => {
            const y = 76 + i * 74;
            return (
              <g key={folder}>
                <g className={dim(focus, "folders", "import")}>
                  <rect x={panel.x + 16} y={y} width={200} height={58} rx={8} strokeWidth={isOn(focus, "folders") && panel.target ? 1.75 : 1} className={isOn(focus, "folders") && panel.target ? "fill-signal-soft stroke-signal" : "fill-raised stroke-line"} />
                  <path d={`M${panel.x + 30} ${y + 14}h9l4 4h13a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-26a3 3 0 0 1-3-3v-16a3 3 0 0 1 3-3z`} className="fill-indigo-300" />
                  <text x={panel.x + 70} y={y + 30} fontSize={14} fontWeight={500} className="fill-fg">
                    {folder}
                  </text>
                </g>
                {panel.target ? (
                  <g>
                    <g className={dim(focus, "metadata")}>
                      {["EXIF", "XMP", "keywords"].map((chip, j) => (
                        <g key={chip}>
                          <rect x={panel.x + 70 + [0, 40, 76][j]} y={y + 38} width={chip.length * 6.6 + 12} height={15} rx={4} className={isOn(focus, "metadata") ? "fill-signal" : "fill-accent-soft"} />
                          <text x={panel.x + 76 + [0, 40, 76][j]} y={y + 49} fontSize={9.5} className={`${isOn(focus, "metadata") ? "fill-navy" : "fill-accent"} ${MONO}`}>
                            {chip}
                          </text>
                        </g>
                      ))}
                    </g>
                    <g className={dim(focus, "permissions")}>
                      <rect x={panel.x + 176} y={y + 10} width={28} height={20} rx={5} className={isOn(focus, "permissions") ? "fill-signal" : "fill-sunken"} />
                      <path d={`M${panel.x + 185} ${y + 18}v-3a5 5 0 0 1 10 0v3`} fill="none" strokeWidth={1.75} className={isOn(focus, "permissions") ? "stroke-navy" : "stroke-fg-muted"} />
                    </g>
                  </g>
                ) : (
                  <text x={panel.x + 70} y={y + 48} fontSize={10.5} className={`fill-fg-muted ${MONO}`}>
                    EXIF · XMP · keywords
                  </text>
                )}
              </g>
            );
          })}
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i} {...part(3 + i)} className={dim(focus, "import", "folders")}>
          <Arrow d={`M${260} ${105 + i * 74}h${76}m-6-6 6 6-6 6`} className={isOn(focus, "import") ? "stroke-signal" : "stroke-fg-muted"} />
        </g>
      ))}
      <g {...part(6)} className={dim(focus, "verify")}>
        <rect x={24.5} y={328.5} width={551} height={47} rx={10} strokeWidth={isOn(focus, "verify") ? 1.75 : 1} className={isOn(focus, "verify") ? "fill-signal-soft stroke-signal" : "fill-bg stroke-line"} />
        <circle cx={52} cy={352} r={11} className="fill-signal" />
        <path d="M46.5 352.5l4 4 7.5-8" fill="none" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" className="stroke-navy" />
        <text x={74} y={357} fontSize={14} fontWeight={600} className="fill-fg">
          Content and metadata verified
        </text>
      </g>
    </Svg>
  );
}

/* Connector flow — label: the connected tool (generic when its claim is unconfirmed) --------------- */

export function ConnectorFlow({ label = "Your tools" }: FigureProps) {
  return (
    <Svg viewBox="0 0 600 340" label={`${label} connected to the GetSibu library: assets come in and are indexed, then discovered through GetSibu.`}>
      <g {...part(0)}>
        <rect x={24.5} y={90.5} width={185} height={159} rx={12} className="fill-raised stroke-line-strong" />
        <rect x={93} y={118} width={48} height={48} rx={12} className="fill-accent-soft" />
        {[
          [106, 131],
          [128, 131],
          [106, 153],
          [128, 153],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={5} className="fill-indigo" />
        ))}
        <text x={117} y={200} textAnchor="middle" fontSize={15} fontWeight={600} className="fill-fg">
          {label}
        </text>
        <text x={117} y={222} textAnchor="middle" fontSize={11} className={`fill-fg-muted ${MONO}`}>
          existing workflow
        </text>
      </g>
      <g {...part(1)}>
        <Arrow d="M222 146h150m-7-7 7 7-7 7" className="stroke-signal" />
        <text x={297} y={134} textAnchor="middle" fontSize={11} className={`fill-signal-strong ${MONO}`}>
          connect and index
        </text>
        <Arrow d="M372 196H222m7-7-7 7 7 7" />
        <text x={297} y={220} textAnchor="middle" fontSize={11} className={`fill-fg-muted ${MONO}`}>
          discover and reuse
        </text>
      </g>
      <g {...part(2)}>
        <rect x={384.5} y={60.5} width={191} height={219} rx={12} strokeWidth={1.5} className="fill-raised stroke-signal" />
        <text x={402} y={88} fontSize={11} letterSpacing={1} className={`fill-fg-muted ${MONO}`}>
          GETSIBU LIBRARY
        </text>
        <rect x={400} y={100} width={160} height={26} rx={6} className="fill-bg stroke-line" />
        <circle cx={414} cy={113} r={5} fill="none" strokeWidth={1.75} className="stroke-fg-muted" />
        {(["video", "image", "document", "audio"] as MediaType[]).map((type, i) => (
          <MediaTile key={type} type={type} x={400 + (i % 2) * 84} y={138 + Math.floor(i / 2) * 66} width={76} height={58} />
        ))}
      </g>
    </Svg>
  );
}

/* Control map — focus: encryption | authentication | access | tenant | audit ---------------------- */

export function ControlMap({ focus }: FigureProps) {
  const rings = [
    { key: "audit", label: "Audit logging", r: 200 },
    { key: "tenant", label: "Tenant isolation", r: 165 },
    { key: "access", label: "Access control", r: 130 },
    { key: "authentication", label: "Authentication", r: 95 },
    { key: "encryption", label: "Encryption", r: 60 },
  ];
  const cx = 280;
  const cy = 252;
  return (
    <Svg viewBox="0 0 560 470" label="Security controls as concentric layers around the creative library: encryption, authentication, access control, tenant isolation and audit logging.">
      {rings.map((ring, i) => {
        const on = isOn(focus, ring.key);
        return (
          <g key={ring.key} {...part(i)}>
            <circle cx={cx} cy={cy} r={ring.r} strokeWidth={on ? 3 : 1.25} className={`${i % 2 ? "fill-raised" : "fill-sunken"} ${on ? "stroke-signal" : "stroke-line-strong"}`} />
            <text x={cx} y={cy - ring.r + 22} textAnchor="middle" fontSize={11} letterSpacing={1} fontWeight={on ? 600 : 500} className={`${MONO} ${on ? "fill-signal-strong" : focus ? "fill-fg-muted opacity-60" : "fill-fg-muted"}`}>
              {ring.label.toUpperCase()}
            </text>
          </g>
        );
      })}
      <g {...part(5)}>
        <circle cx={cx} cy={cy} r={34} className="fill-indigo" />
        <text x={cx} y={cy + 4.5} textAnchor="middle" fontSize={12.5} fontWeight={600} className="fill-white">
          Library
        </text>
      </g>
    </Svg>
  );
}

/* Media library — focus: comma-separated media types ---------------------------------------------- */

export function MediaLibrary({ focus }: FigureProps) {
  const focusTypes = focus?.split(",") ?? [];
  const pattern: MediaType[][] = [
    ["video", "image", "document", "audio"],
    ["image", "video", "audio", "document"],
    ["audio", "document", "video", "image"],
  ];
  const labels: Record<MediaType, string> = { video: "Video", image: "Image", document: "Document", audio: "Audio" };
  const tileW = 127;
  const tileH = 80;
  let chipX = 24;
  return (
    <Svg viewBox="0 0 600 420" label={`A creative library holding videos, images, documents and audio${focusTypes.length ? `, with ${focusTypes.join(" and ")} highlighted` : ""}.`}>
      <g {...part(0)}>
        {(["all", "video", "image", "document", "audio"] as const).map((type) => {
          const label = type === "all" ? "All" : labels[type];
          const width = label.length * 8 + 26;
          const x = chipX;
          chipX += width + 8;
          const on = type === "all" ? !focusTypes.length : focusTypes.includes(type);
          return <Chip key={type} x={x} y={24} width={width} label={label} on={on} />;
        })}
      </g>
      {pattern.flatMap((row, r) =>
        row.map((type, c) => {
          const x = 24 + c * (tileW + 12);
          const y = 78 + r * (tileH + 34);
          return (
            <g key={`${r}-${c}`} {...part(1 + r * 4 + c)} className={focusTypes.length ? dim(focusTypes.includes(type) ? "on" : "off", "on") : ""}>
              <MediaTile type={type} x={x} y={y} width={tileW} height={tileH} />
              <text x={x} y={y + tileH + 17} fontSize={10.5} letterSpacing={1} className={`${MONO} ${focusTypes.includes(type) ? "fill-signal-strong" : "fill-fg-muted"}`}>
                {labels[type].toUpperCase()}
              </text>
            </g>
          );
        }),
      )}
    </Svg>
  );
}
