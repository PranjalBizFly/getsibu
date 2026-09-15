import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { CONTACT_PAGE } from "@/content/architecture/company-pages";
import { GLOBAL_CTAS } from "@/content/architecture/navigation";
import { getPage } from "@/lib/content/inventory";
import { pageSummary, type ResolvedAction } from "@/lib/content/links";
import { buildMetadata } from "@/lib/seo/metadata";
import { contactFormConfig } from "@/lib/forms/contact-config";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { CapabilityBreakdown } from "@/components/sections/ContentSections";

export const metadata: Metadata = buildMetadata({
  title: CONTACT_PAGE.metaTitle,
  h1: CONTACT_PAGE.title,
  description: CONTACT_PAGE.description,
  canonicalPath: CONTACT_PAGE.path,
  schemaTypes: ["WebPage"],
  robots: CONTACT_PAGE.indexable ? "index,follow" : "noindex,follow",
  sitemap: CONTACT_PAGE.indexable,
});

/**
 * Contact, without inventing a channel. GetSibu has not supplied contact details (the official
 * site's are placeholders), so the page says so and routes to the verified pages and the official
 * sign-up and sign-in actions. It stays out of search until a real channel exists. The contact form
 * appears only when an endpoint and privacy notice are configured (lib/forms/contact-config.ts).
 */
export default function ContactPage() {
  const actions: ResolvedAction[] = [
    { label: GLOBAL_CTAS.primary.label, href: GLOBAL_CTAS.primary.href, external: true, emphasis: "primary" },
    { label: GLOBAL_CTAS.signIn.label, href: GLOBAL_CTAS.signIn.href, external: true, emphasis: "secondary" },
  ];
  const form = contactFormConfig();
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: CONTACT_PAGE.title, path: CONTACT_PAGE.path },
        ]}
        eyebrow="Contact"
        icon={Mail}
        title={CONTACT_PAGE.title}
        lede={form.enabled ? CONTACT_PAGE.formLede : CONTACT_PAGE.state}
        actions={actions}
      />
      {form.enabled && form.privacyUrl ? (
        <Section id="message" labelledBy="message-title">
          <div className="container-content grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeader id="message-title" eyebrow="Message" heading="Send a message" />
            </div>
            <div className="min-w-0 lg:col-span-8">
              <ContactForm privacyUrl={form.privacyUrl} />
            </div>
          </div>
        </Section>
      ) : null}
      <CapabilityBreakdown
        id="routes"
        eyebrow="Common questions"
        heading="Where to go next"
        surface="muted"
        items={[
          ...CONTACT_PAGE.routes.map((n) => ({ heading: pageSummary(n).title, body: getPage(n).keyStatement, page: n })),
        ]}
      />
    </>
  );
}
