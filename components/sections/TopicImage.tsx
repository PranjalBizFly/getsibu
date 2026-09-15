import { ImageIcon } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";

/** A topic's assigned photo (content/generated/image-matrix.json, read through lib/content/images). */
export interface TopicImageRef {
  src: string;
  alt: string;
  caption?: string;
}

/** Every figure is captioned as an illustration. */
export function imageCaption(image: TopicImageRef): string {
  const text = image.caption ?? image.alt;
  return text.startsWith("Illustration") ? text : `Illustration: ${text}`;
}

/** The glass caption pill laid over a photo (Sky9's image label). Opaque enough to read over any photo. */
export function CaptionChip({ image, className = "" }: { image: TopicImageRef; className?: string }) {
  return (
    <figcaption
      className={`type-caption pointer-events-none inline-flex max-w-[min(calc(100%-1.5rem),30rem)] items-start gap-1.5 rounded-lg border border-white/15 bg-navy-950/85 px-2.5 py-1.5 font-medium text-white shadow-lg backdrop-blur-md ${className}`}
    >
      <ImageIcon aria-hidden="true" className="mt-px size-3.5 shrink-0 text-signal" strokeWidth={2} />
      <span className="line-clamp-2">{imageCaption(image)}</span>
    </figcaption>
  );
}

interface FramedImageProps {
  image: TopicImageRef;
  sizes: string;
  /** Aspect utility for the photo box, e.g. "aspect-4/3". */
  aspect?: string;
  captionAt?: "bottom" | "top";
  className?: string;
  style?: CSSProperties;
}

/**
 * Sky9's framed photo: rounded, hairline border and deep shadow, the photo settling in as the frame
 * scrolls into view and easing forward on hover, a caption pill laid over it.
 */
export function FramedImage({ image, sizes, aspect = "aspect-4/3", captionAt = "bottom", className = "", style }: FramedImageProps) {
  return (
    <figure data-reveal="fade" style={style} className={`group/img relative overflow-hidden rounded-2xl border border-line-strong/70 bg-navy-950 shadow-xl ${className}`}>
      <div className={`relative w-full ${aspect}`}>
        <div className="reveal-zoom absolute inset-0">
          <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105" />
        </div>
        <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 h-2/5 from-navy-950/60 to-transparent ${captionAt === "top" ? "top-0 bg-linear-to-b" : "bottom-0 bg-linear-to-t"}`} />
      </div>
      <CaptionChip image={image} className={`absolute left-3 sm:left-4 ${captionAt === "top" ? "top-3 sm:top-4" : "bottom-3 sm:bottom-4"}`} />
    </figure>
  );
}
