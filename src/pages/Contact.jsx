import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="bg-[#f8f9fb]">
      {/* Hero */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Contact Optocare
              </p>

              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#172033] sm:text-6xl lg:text-7xl">
                Let’s talk about better vision.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Whether you’re looking for optical care, exploring the
                Optocare network, or interested in becoming a partner, we’d
                love to hear from you.
              </p>
            </div>

            {/* Visual placeholder */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#eef1f4]">
              <div className="flex aspect-[4/3] flex-col items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white text-3xl font-semibold text-[#172033] shadow-sm">
                  O
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Cloudinary image
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Optical care / lifestyle photography
                </p>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-xl shadow-slate-900/5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Optocare
                </p>

                <p className="mt-2 text-sm font-medium leading-6 text-[#172033]">
                  Connecting people with better optical care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="border-t border-slate-200 bg-[#f8f9fb]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Email */}
            <a
              href="mailto:info@optocare.net"
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef1f4] text-[#172033]">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Email
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[#172033]">
                Get in touch
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Send us a message and we’ll get back to you.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#172033] underline underline-offset-4">
                info@optocare.net →
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+254700000000"
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef1f4] text-[#172033]">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6.5 3.5h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3c0 1-1 1.5-2 1.5C10.5 19 5 13.5 5 6.5c0-1 .5-3 1.5-3Z" />
                </svg>
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Phone
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[#172033]">
                Speak with us
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Have a question that’s easier to discuss directly?
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#172033] underline underline-offset-4">
                +254 700 000 000 →
              </span>
            </a>

            {/* Partners */}
            <Link
              to="/become-a-partner"
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef1f4] text-[#172033]">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="8" cy="8" r="3" />
                  <circle cx="16" cy="8" r="3" />
                  <path d="M3 19c.5-3 2-5 5-5s4.5 2 5 5" />
                  <path d="M11 19c.5-3 2-5 5-5s4.5 2 5 5" />
                </svg>
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Businesses
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[#172033]">
                Join Optocare
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Interested in becoming part of the optical network?
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#172033] underline underline-offset-4">
                Become a partner →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main contact area */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            {/* Contact information */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Reach us
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
                We're here to help.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-500">
                For general questions, partnership enquiries, or anything
                related to the Optocare platform, use the contact details
                provided here.
              </p>

              <div className="mt-10 space-y-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Email
                  </p>

                  <a
                    href="mailto:info@optocare.net"
                    className="mt-2 inline-block text-lg font-medium text-[#172033] underline decoration-slate-300 underline-offset-4 transition hover:decoration-[#172033]"
                  >
                    info@optocare.net
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Phone
                  </p>

                  <a
                    href="tel:+254700000000"
                    className="mt-2 inline-block text-lg font-medium text-[#172033] underline decoration-slate-300 underline-offset-4 transition hover:decoration-[#172033]"
                  >
                    +254 700 000 000
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Location
                  </p>

                  <p className="mt-2 text-lg font-medium text-[#172033]">
                    Kenya
                  </p>
                </div>
              </div>
            </div>

            {/* Contact guidance */}
            <div className="rounded-[2rem] bg-[#172033] p-8 sm:p-10 lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Looking for something specific?
              </p>

              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Start with the right place.
              </h2>

              <div className="mt-10 divide-y divide-white/10">
                <div className="py-6 first:pt-0">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Looking for optical care?
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                        Browse providers and discover optical services
                        available through the Optocare network.
                      </p>
                    </div>

                    <Link
                      to="/partners"
                      className="shrink-0 text-sm font-semibold text-white underline underline-offset-4"
                    >
                      Explore
                    </Link>
                  </div>
                </div>

                <div className="py-6">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Looking for a product?
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                        Browse products listed by verified optical businesses.
                      </p>
                    </div>

                    <Link
                      to="/products"
                      className="shrink-0 text-sm font-semibold text-white underline underline-offset-4"
                    >
                      Browse
                    </Link>
                  </div>
                </div>

                <div className="py-6 last:pb-0">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Want to join Optocare?
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                        Submit your business information and apply to become a
                        partner.
                      </p>
                    </div>

                    <Link
                      to="/become-a-partner"
                      className="shrink-0 text-sm font-semibold text-white underline underline-offset-4"
                    >
                      Apply
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / location placeholder */}
      <section className="border-t border-slate-200 bg-[#f8f9fb]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Where we are
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172033]">
                  Kenya
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                  Optocare is building a connected optical ecosystem designed
                  to make discovering optical care easier.
                </p>
              </div>

              <div className="flex min-h-[320px] items-center justify-center bg-[#eef1f4]">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#172033] shadow-sm">
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Map integration
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Add Google Maps / Mapbox later
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#172033]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Discover Optocare
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Better vision starts with finding the right care.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/services"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#172033] transition hover:bg-slate-100"
              >
                Explore services
              </Link>

              <Link
                to="/partners"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Find a provider
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;