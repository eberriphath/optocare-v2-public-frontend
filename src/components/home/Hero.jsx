import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f3f5f7]">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            The optical network
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#172033] sm:text-6xl lg:text-7xl">
            See better.
            <br />
            <span className="text-slate-400">Live better.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-slate-500 sm:text-lg">
            Discover trusted optical services, products and verified
            professionals through one connected platform.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/order-glasses"
              className="rounded-full bg-[#172033] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#283650]"
            >
              Get Your Glasses
            </Link>

            <Link
              to="/services"
              className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-[#172033] transition hover:border-slate-400"
            >
              Explore services
            </Link>
          </div>

          <Link
            to="/partners"
            className="mt-5 inline-block text-sm font-medium text-slate-500 underline-offset-4 transition hover:text-[#172033] hover:underline"
          >
            Find a partner →
          </Link>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-200">
            <img
              src="https://res.cloudinary.com/qnyhrcim/image/upload/v1790940637/Our_new_selection___The_House_of_Vintage_Frames_Tallinn_voi5vu.jpg"
              alt="Curated selection of vintage optical frames"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating information card */}
          <div className="absolute -bottom-5 left-5 rounded-2xl border border-white/80 bg-white/95 p-5 shadow-xl backdrop-blur sm:left-[-2rem]">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
              Connected care
            </p>

            <p className="mt-2 text-sm font-medium text-[#172033]">
              Trusted optical professionals
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;