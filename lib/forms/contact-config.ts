import "server-only";
import { IS_PRODUCTION } from "@/lib/site";

/**
 * Where contact messages go — configured, never assumed.
 *
 *   CONTACT_FORM_ENDPOINT     server-only URL that accepts a JSON POST (a form service, CRM webhook or
 *                             GetSibu's own API). HTTPS is required in production. Never exposed to the
 *                             browser: submissions go through a server action.
 *   CONTACT_FORM_PRIVACY_URL  the privacy notice shown with the form (a path or absolute URL).
 *
 * The form is rendered only when both are set. Until then /contact says plainly that direct contact
 * details are not published, and the server action refuses submissions — nothing can appear sent.
 */
export function contactFormConfig(): { enabled: boolean; endpoint: string | null; privacyUrl: string | null } {
  const endpoint = process.env.CONTACT_FORM_ENDPOINT?.trim() || null;
  const privacyUrl = process.env.CONTACT_FORM_PRIVACY_URL?.trim() || null;
  const secure = !!endpoint && (!IS_PRODUCTION || endpoint.startsWith("https://"));
  return { enabled: !!endpoint && !!privacyUrl && secure, endpoint: secure ? endpoint : null, privacyUrl };
}
