import { Link } from "react-router-dom";

function Terms() {
  return (
    <main className="bg-[#f8f9fb]">
      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Legal
          </p>

          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-[#172033] sm:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-500">
            These Terms & Conditions govern your use of the Optocare website
            and services.
          </p>

          <p className="mt-5 text-sm text-slate-400">
            Last updated: [Insert effective date]
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-24">
          <div className="space-y-14">
            {/* 1 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                1. Acceptance of these terms
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                By accessing or using Optocare, you agree to be bound by these
                Terms & Conditions and any policies referenced by them. If you
                do not agree with these terms, you should not use the platform.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                2. What Optocare provides
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Optocare provides a platform designed to help users discover
                optical providers, services, and products and to help eligible
                optical businesses establish a presence within the network.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Unless expressly stated otherwise, Optocare does not itself
                represent every provider, product, or service displayed on the
                platform.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                3. Optical and healthcare information
              </h2>

              <div className="mt-5 rounded-3xl border border-amber-100 bg-amber-50 p-6">
                <p className="text-sm font-semibold text-amber-800">
                  Important
                </p>

                <p className="mt-3 text-sm leading-7 text-amber-700">
                  Information available through Optocare should not be treated
                  as a substitute for professional medical or optical advice,
                  diagnosis, or treatment.
                </p>
              </div>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Users should consult an appropriately qualified optical or
                healthcare professional regarding individual health concerns,
                diagnoses, prescriptions, treatment decisions, or emergencies.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                4. Provider information
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Provider profiles, services, products, prices, descriptions,
                locations, and other information may be supplied or maintained
                by partner businesses.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                While Optocare may take steps to review or verify certain
                information, users should independently confirm important
                details directly with the relevant provider before relying on
                them.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                5. Partner applications
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Businesses applying to become Optocare partners must provide
                accurate, complete, and current information.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Submitting an application does not guarantee acceptance.
                Optocare may approve, reject, suspend, or terminate a partner
                account where appropriate.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                6. Partner responsibilities
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Partners are responsible for the accuracy and legality of
                information they publish through their accounts.
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-500">
                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Keep account information accurate and current.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Provide accurate service and product information.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Avoid misleading, fraudulent, or deceptive information.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Maintain the necessary permissions, registrations, or
                  qualifications required for their business activities.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Protect their account credentials.
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                7. User accounts
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Where Optocare provides account functionality, users are
                responsible for maintaining the confidentiality of their login
                credentials and for activity occurring through their account.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Users should notify Optocare promptly if they believe their
                account has been accessed without authorization.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                8. Reviews and user content
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Users may be permitted to submit reviews or other content.
                Submitted content must be truthful, lawful, relevant, and
                respectful.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                You must not submit content that is fraudulent, defamatory,
                abusive, discriminatory, unlawful, misleading, or intended to
                manipulate the platform.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Optocare may moderate, reject, edit where appropriate, or
                remove content that violates these terms or applicable
                policies.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                9. Intellectual property
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Unless otherwise stated, the Optocare website, branding,
                design, software, text, graphics, and other original materials
                are protected by applicable intellectual property laws.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                You may not reproduce, modify, distribute, reverse engineer,
                scrape, or commercially exploit protected Optocare materials
                without appropriate authorization.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                10. Prohibited use
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                You must not use Optocare to:
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-500">
                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Violate any applicable law or regulation.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Impersonate another person or organization.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Submit fraudulent or misleading information.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Attempt to gain unauthorized access to accounts or systems.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Interfere with the security or operation of the platform.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Abuse automated systems or attempt unauthorized scraping.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Upload malicious software or harmful content.
                </li>
              </ul>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                11. Availability of the platform
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                We aim to keep Optocare available and reliable, but we do not
                guarantee uninterrupted or error-free operation.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                The platform may occasionally be unavailable because of
                maintenance, upgrades, technical failures, security events, or
                circumstances outside our reasonable control.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                12. Third-party services and links
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Optocare may contain links to or integrations with third-party
                services. These services are operated independently and may
                have their own terms and privacy policies.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Optocare is not responsible for the policies or practices of
                third-party websites or services except where applicable law
                provides otherwise.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                13. Disclaimers
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                To the extent permitted by applicable law, Optocare provides
                the platform and its content on an “as available” basis.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                We do not guarantee that all information displayed on the
                platform will always be complete, accurate, current, or
                error-free.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                14. Limitation of liability
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                To the maximum extent permitted by applicable law, Optocare
                will not be liable for indirect, incidental, special,
                consequential, or similar losses arising from your use of or
                inability to use the platform.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Nothing in these terms is intended to exclude or limit
                liability that cannot lawfully be excluded or limited.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                15. Suspension and termination
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Optocare may suspend or terminate access to accounts or
                services where necessary to protect the platform, enforce
                these terms, respond to misuse, or comply with legal
                obligations.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Users may also stop using the platform at any time.
              </p>
            </section>

            {/* 16 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                16. Changes to these terms
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                We may update these Terms & Conditions as Optocare develops or
                as applicable requirements change. Updated terms will be
                published on this page with a revised effective date.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Continued use of the platform after an updated version becomes
                effective may constitute acceptance of the revised terms to the
                extent permitted by applicable law.
              </p>
            </section>

            {/* 17 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                17. Governing law
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                These terms should be reviewed and finalized according to the
                laws applicable to the Optocare business and its users.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Before publication, the applicable jurisdiction, dispute
                resolution process, and any mandatory consumer or data
                protection provisions should be confirmed.
              </p>
            </section>

            {/* 18 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                18. Contact us
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                If you have questions about these Terms & Conditions, please
                contact Optocare using the details provided on our Contact
                page.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full bg-[#172033] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Contact Optocare
              </Link>
            </section>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#172033]">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Privacy
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Your privacy and your trust matter.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Learn how Optocare handles information collected through the
            platform.
          </p>

          <Link
            to="/privacy"
            className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#172033] transition hover:bg-slate-100"
          >
            Read Privacy Policy
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Terms;