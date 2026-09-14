/** Serialises JSON-LD safely: "<" is escaped so no string can close the script element. */
const LESS_THAN_ESCAPE = "\\" + "u003c";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, LESS_THAN_ESCAPE) }}
    />
  );
}
