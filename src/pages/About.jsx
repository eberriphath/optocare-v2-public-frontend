import { Link } from "react-router-dom";

function About() {
  return (
    <main className="bg-[#f8f9fb]">
      {/* Hero */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                About Optocare
              </p>

              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#172033] sm:text-6xl lg:text-7xl">
                Better vision starts with better access.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Optocare is building a more connected way to discover optical
                care, services, products, and trusted professionals.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="rounded-full bg-[#172033] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Explore services
                </Link>

                <Link
                  to="/partners"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#172033] transition hover:border-slate-400"
                >
                  Find a provider
                </Link>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#eef1f4]">
              <div className="flex aspect-[4/3] flex-col items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white text-3xl font-semibold text-[#172033] shadow-sm">
                  O
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Cloudinary image
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Brand / optical lifestyle photography
                </p>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-xl shadow-slate-900/5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Our perspective
                </p>

                <p className="mt-2 text-sm font-medium leading-6 text-[#172033]">
                  Optical care should feel connected, accessible, and
                  human.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro statement */}
      <section className="bg-[#172033]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Why Optocare
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                We're creating a place where people can discover optical care
                with confidence.
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Finding the right optical provider or product shouldn't mean
                searching through disconnected information. Optocare brings
                optical professionals, services, and products into one
                experience designed around discovery and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we connect */}
      <section className="bg-[#f8f9fb]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              One connected experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
              Everything starts with connection.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Optocare connects the people looking for optical care with the
              professionals and businesses providing it.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {/* People */}
            <div className="group rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/40">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef1f4] text-xl font-semibold text-[#172033]">
                01
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#172033]">
                People
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Discover optical providers and find the care that fits your
                needs and location.
              </p>

              <Link
                to="/partners"
                className="mt-7 inline-flex text-sm font-semibold text-[#172033] underline underline-offset-4"
              >
                Meet our providers →
              </Link>
            </div>

            {/* Services */}
            <div className="group rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/40">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef1f4] text-xl font-semibold text-[#172033]">
                02
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#172033]">
                Services
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Explore optical services from verified professionals through a
                single, easier-to-navigate experience.
              </p>

              <Link
                to="/services"
                className="mt-7 inline-flex text-sm font-semibold text-[#172033] underline underline-offset-4"
              >
                Explore services →
              </Link>
            </div>

            {/* Products */}
            <div className="group rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/40">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef1f4] text-xl font-semibold text-[#172033]">
                03
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#172033]">
                Products
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Browse products from optical businesses and discover what is
                available through the network.
              </p>

              <Link
                to="/products"
                className="mt-7 inline-flex text-sm font-semibold text-[#172033] underline underline-offset-4"
              >
                Browse products →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                How we think
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
                Built around trust, clarity, and better experiences.
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              <div className="pb-8">
                <div className="flex gap-6">
                  <span className="text-sm font-semibold text-slate-300">
                    01
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-[#172033]">
                      Trust should be visible.
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                      We make provider information and verification easier to
                      understand, helping people make more confident choices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-8">
                <div className="flex gap-6">
                  <span className="text-sm font-semibold text-slate-300">
                    02
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-[#172033]">
                      Simplicity matters.
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                      Optical care can be complex. The experience of finding
                      it shouldn't be. We aim to make discovery straightforward
                      and intuitive.
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-8">
                <div className="flex gap-6">
                  <span className="text-sm font-semibold text-slate-300">
                    03
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-[#172033]">
                      People come first.
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                      Technology is only useful when it creates a better
                      experience for the people using it. That's the standard
                      we build around.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="flex gap-6">
                  <span className="text-sm font-semibold text-slate-300">
                    04
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-[#172033]">
                      Better access creates better outcomes.
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                      Connecting people to the right optical professionals and
                      resources is at the heart of what we're building.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual break */}
      <section className="bg-[#eef1f4]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid overflow-hidden rounded-[2rem] bg-white lg:grid-cols-[1fr_1fr]">
            <div className="flex min-h-[360px] flex-col justify-between p-8 sm:p-12 lg:p-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  The future of optical care
                </p>

                <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#172033] sm:text-4xl">
                  We're just getting started.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  Optocare is being built to grow alongside the optical
                  professionals and communities it serves.
                </p>
              </div>

              <Link
                to="/become-a-partner"
                className="mt-10 inline-flex w-fit rounded-full bg-[#172033] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Join the network
              </Link>
            </div>

            <div className="flex min-h-[360px] items-center justify-center bg-[#172033] p-8">
              <div className="text-center">
                <div className="text-7xl font-semibold tracking-[-0.08em] text-white sm:text-8xl">
                  O
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  See better. Live better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-12 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Discover Optocare
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[#172033] sm:text-5xl">
            Find the people, services, and products behind better vision.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
            Explore the network and discover what optical care can look like
            when everything is connected.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/partners"
              className="rounded-full bg-[#172033] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Find a provider
            </Link>

            <Link
              to="/products"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#172033] transition hover:border-slate-400"
            >
              Explore products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;