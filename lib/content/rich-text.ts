import type { RichText } from "@/types/content";

/** The words of a RichText, without its links. */
export const plainText = (rich: RichText): string => (typeof rich === "string" ? rich : rich.map((part) => (typeof part === "string" ? part : part.text)).join(""));
