import { Link } from "react-router-dom";

function Privacy() {
  return (
    <main className="bg-[#f8f9fb]">
      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Legal
          </p>

          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-[#172033] sm:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-500">
            Your privacy matters to us. This policy explains how Optocare
            collects, uses, stores, and protects information when you use our
            website and services.
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
                1. About this policy
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                This Privacy Policy explains how Optocare handles personal
                information collected through the Optocare website, partner
                applications, accounts, and other services made available
                through the platform.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                By using Optocare, you acknowledge that you have read and
                understood this policy. If you do not agree with the practices
                described here, you should discontinue use of the relevant
                services.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                2. Information we collect
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Depending on how you interact with Optocare, we may collect
                information such as:
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-500">
                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Name and contact information.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Account information when an account is created.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Business information submitted through a partner
                  application.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Information contained in communications sent to us.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Information provided when submitting a review.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Technical information such as browser, device, and usage
                  information where applicable.
                </li>
              </ul>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                We aim to collect only information that is reasonably necessary
                for the relevant purpose.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                3. How we use information
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Information may be used to:
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-500">
                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Provide and operate Optocare services.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Create and manage user or partner accounts.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Review and process partner applications.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Communicate with users, applicants, and partners.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Display publicly available provider, service, and product
                  information.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Moderate reviews and maintain platform integrity.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Protect the security and reliability of the platform.
                </li>

                <li className="flex gap-3">
                  <span className="text-[#172033]">•</span>
                  Improve the functionality and user experience of Optocare.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                4. Public information
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Optocare is a platform for discovering optical providers,
                services, and products. Information intentionally published as
                part of a public provider profile may therefore be visible to
                website visitors.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Partner businesses should only submit information that they
                are authorized to publish and should avoid submitting personal
                information that is not necessary for their public profile.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                5. Reviews
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Reviews submitted through Optocare may be reviewed before being
                published. Information included in an approved review may
                become publicly visible depending on how the review is
                displayed on the platform.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                We may use moderation measures to remove or reject content that
                violates our policies or is otherwise unsuitable for
                publication.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                6. Cookies and similar technologies
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Optocare may use cookies or similar technologies where
                necessary to operate the website, remember preferences,
                understand usage, improve performance, or support security.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Any analytics, advertising, or third-party technologies added
                to the platform should be reflected in an updated version of
                this policy where required.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                7. Sharing information
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                We do not treat personal information as something to be shared
                indiscriminately. Information may be disclosed where reasonably
                necessary to provide the service, operate the platform,
                communicate with you, protect the platform, comply with legal
                obligations, or work with service providers that support
                Optocare.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Where third-party service providers process information on our
                behalf, we aim to use providers appropriate to the nature of
                the service and information involved.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                8. Data security
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                We take reasonable technical and organizational measures to
                protect information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                However, no internet-based service can guarantee absolute
                security. Users should therefore also take reasonable steps to
                protect their accounts and login information.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                9. Data retention
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                We retain information for as long as reasonably necessary for
                the purposes for which it was collected, including providing
                services, maintaining records, resolving disputes, enforcing
                agreements, and meeting legal or regulatory obligations.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                10. Your rights
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Depending on applicable law, you may have rights concerning
                your personal information, including rights to request access,
                correction, deletion, restriction, or other forms of control
                over your information.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Requests should be directed to the contact details provided on
                our Contact page. We may need to verify your identity before
                processing certain requests.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                11. Children's privacy
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Optocare is not intended to knowingly collect unnecessary
                personal information from children. If you believe information
                relating to a child has been submitted to us improperly, please
                contact us so that the matter can be reviewed.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                12. Third-party services
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Optocare may rely on third-party providers for infrastructure,
                email delivery, media hosting, analytics, security, or other
                technical functions.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                Third-party services may process information according to their
                own privacy policies and terms. We encourage users to review
                those policies where relevant.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                13. Changes to this policy
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                We may update this Privacy Policy from time to time to reflect
                changes to the platform, applicable requirements, or our
                practices. The updated version will be published on this page
                with a revised effective date.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                14. Contact us
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                If you have questions about this Privacy Policy or how
                Optocare handles information, please contact us.
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
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Your information deserves to be handled responsibly.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Learn more about the rules governing your use of the Optocare
            platform.
          </p>

          <Link
            to="/terms"
            className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#172033] transition hover:bg-slate-100"
          >
            Read Terms & Conditions
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Privacy;