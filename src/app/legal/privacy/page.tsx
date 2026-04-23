import type { Metadata } from 'next';
import { LegalLayout, LegalSection, LegalP, LegalList } from '@/components/layout/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy — CITYZINE',
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 2025">

      <LegalSection title="1. Data Controller">
        <LegalP>
          The data controller for personal data collected through city-zine.eu is
          CITYZINE — an independent street culture platform based in Hungary.
          For any privacy-related queries, contact:{' '}
          <a href="mailto:cityzine@city-zine.eu" className="text-white/70 hover:text-white underline underline-offset-4 transition-colors">
            cityzine@city-zine.eu
          </a>
        </LegalP>
        <LegalP>
          This policy is issued in accordance with the EU General Data Protection
          Regulation (GDPR / 2016/679) and the Hungarian Information Act
          (2011. évi CXII. törvény az információs önrendelkezési jogról és
          az információszabadságról).
        </LegalP>
      </LegalSection>

      <LegalSection title="2. Data We Collect">
        <LegalP>When you place an order or contact us, we may collect:</LegalP>
        <LegalList items={[
          'Name and contact details (email address)',
          'Shipping and billing address',
          'Order history and transaction data',
          'Communications you send us',
          'Basic usage data (pages visited, browser type) for site performance',
        ]} />
        <LegalP>
          We do not collect payment card details directly — payments are processed
          by a third-party provider operating under their own data policies.
        </LegalP>
      </LegalSection>

      <LegalSection title="3. Purpose & Legal Basis">
        <LegalP>We process your data for the following purposes:</LegalP>
        <LegalList items={[
          'Fulfilling orders and managing delivery — legal basis: contract performance',
          'Issuing invoices — legal basis: legal obligation (Hungarian accounting and tax law)',
          'Responding to enquiries and complaints — legal basis: legitimate interest',
          'Improving the website — legal basis: legitimate interest',
        ]} />
        <LegalP>
          We do not sell, rent, or share your personal data with third parties
          for marketing purposes.
        </LegalP>
      </LegalSection>

      <LegalSection title="4. Data Retention">
        <LegalP>
          Invoice and transaction records are retained for <strong className="text-white font-medium">8 years</strong> in
          compliance with Hungarian accounting law (2000. évi C. törvény a számvitelről).
          Other personal data is kept only as long as necessary for the purpose it
          was collected.
        </LegalP>
      </LegalSection>

      <LegalSection title="5. Your Rights (GDPR)">
        <LegalP>Under GDPR, you have the right to:</LegalP>
        <LegalList items={[
          'Access — request a copy of the data we hold about you',
          'Rectification — request correction of inaccurate data',
          'Erasure — request deletion ("right to be forgotten"), where no legal retention obligation applies',
          'Restriction — request that we limit how we process your data',
          'Portability — receive your data in a machine-readable format',
          'Object — object to processing based on legitimate interest',
        ]} />
        <LegalP>
          To exercise any right, email{' '}
          <a href="mailto:cityzine@city-zine.eu" className="text-white/70 hover:text-white underline underline-offset-4 transition-colors">
            cityzine@city-zine.eu
          </a>
          . We will respond within 30 days.
        </LegalP>
      </LegalSection>

      <LegalSection title="6. Supervisory Authority">
        <LegalP>
          If you believe your data has been processed unlawfully, you have the right
          to lodge a complaint with the Hungarian data protection authority:
        </LegalP>
        <LegalP>
          <strong className="text-white font-medium">
            Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)
          </strong><br />
          1055 Budapest, Falk Miksa utca 9–11.<br />
          Tel.: +36 1 391 1400<br />
          Email: ugyfelszolgalat@naih.hu<br />
          Website:{' '}
          <a
            href="https://www.naih.hu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white underline underline-offset-4 transition-colors"
          >
            naih.hu
          </a>
        </LegalP>
        <LegalP>
          You may also lodge a complaint with the supervisory authority in your
          country of residence if you are located in another EU member state.
        </LegalP>
      </LegalSection>

      <LegalSection title="7. Cookies">
        <LegalP>
          This website uses only functional cookies necessary for the site to operate
          (e.g. shopping cart session). No third-party tracking, analytics, or
          advertising cookies are used without your consent. No cookie consent banner
          is required for strictly necessary cookies under GDPR.
        </LegalP>
      </LegalSection>

      <LegalSection title="8. Third-Party Services">
        <LegalP>
          We use trusted third-party services (e.g. payment processing, email delivery)
          solely to operate the store. These act as data processors under written
          agreements and may only use data for their designated purpose.
        </LegalP>
      </LegalSection>

      <LegalSection title="9. Changes to This Policy">
        <LegalP>
          We may update this policy from time to time. The current version with the
          date of last update is always published on this page.
        </LegalP>
      </LegalSection>

    </LegalLayout>
  );
}
