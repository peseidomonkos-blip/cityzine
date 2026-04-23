import type { Metadata } from 'next';
import { LegalLayout, LegalSection, LegalP, LegalList } from '@/components/layout/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms & Conditions — CITYZINE',
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="April 2025">

      <LegalSection title="1. About This Website">
        <LegalP>
          These terms govern your use of city-zine.eu, operated by CITYZINE — an independent
          street culture platform rooted in print, urban art, and creative community.
          By accessing this website you agree to these terms.
        </LegalP>
      </LegalSection>

      <LegalSection title="2. Intellectual Property">
        <LegalP>
          All content on this website — including designs, photography, text, graphics,
          and editorial material — is the property of CITYZINE and the respective
          creators credited within each publication.
        </LegalP>
        <LegalP>
          You may not reproduce, distribute, or use any content from this site
          without prior written permission from CITYZINE.
        </LegalP>
      </LegalSection>

      <LegalSection title="3. Acceptable Use">
        <LegalP>You agree not to:</LegalP>
        <LegalList items={[
          'Use this website for any unlawful purpose',
          'Attempt to gain unauthorised access to any part of the site or its infrastructure',
          'Scrape, copy, or redistribute content without permission',
          'Use the site in any way that could damage, disable, or impair its operation',
        ]} />
      </LegalSection>

      <LegalSection title="4. Third-Party Links">
        <LegalP>
          This website contains links to external stockists and partners. These are
          provided for convenience only. CITYZINE has no control over the content
          or practices of third-party websites and accepts no responsibility for them.
          Visiting any linked site is at your own risk.
        </LegalP>
      </LegalSection>

      <LegalSection title="5. Disclaimer">
        <LegalP>
          This website and its content are provided "as is" without warranties of any
          kind. CITYZINE makes no guarantees regarding the accuracy, completeness,
          or availability of any information published here. We reserve the right to
          modify, remove, or update content at any time without notice.
        </LegalP>
      </LegalSection>

      <LegalSection title="6. Limitation of Liability">
        <LegalP>
          To the extent permitted by law, CITYZINE shall not be liable for any
          indirect, incidental, or consequential loss arising from your use of
          this website or any third-party sites linked from it.
        </LegalP>
      </LegalSection>

      <LegalSection title="7. Governing Law">
        <LegalP>
          These terms are governed by the laws of Hungary. Any disputes shall be
          subject to the jurisdiction of Hungarian courts.
        </LegalP>
      </LegalSection>

      <LegalSection title="8. Changes to These Terms">
        <LegalP>
          We may update these terms from time to time. The current version with
          the date of last update is always published on this page. Continued use
          of the site after any changes constitutes acceptance of the updated terms.
        </LegalP>
      </LegalSection>

    </LegalLayout>
  );
}
