import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

const initialForm = {
  full_name: "",
  position: "",
  email: "",
  phone: "",
  company_name: "",
  services_offered: "",
  partner_type: "",
};

const partnerTypes = [
  { value: "clinic", label: "Clinic" },
  { value: "optical_shop", label: "Optical Shop" },
  { value: "distributor", label: "Distributor" },
  { value: "manufacturer", label: "Manufacturer" },
  { value: "laboratory", label: "Laboratory" },
  { value: "other", label: "Other" },
];

function BecomePartner() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("submitting");
    setError("");

    try {
      await api.post("/applications", form);

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("Partner application failed:", err);

      const responseMessage = err.response?.data?.message;

      setError(
        responseMessage ||
          "We couldn't submit your application right now. Please check your details and try again."
      );

      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <main className="min-h-screen bg-[#f8f9fb]">
        <section className="mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-2xl text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
              <svg
                className="h-9 w-9 text-emerald-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  d="M5 12.5 9.5 17 19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Application received
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#172033] sm:text-5xl">
              Thanks for your interest in Optocare.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-500">
              Your partner application has been submitted successfully. Our
              team will review your information and get back to you.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                className="rounded-full bg-[#172033] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Back to home
              </Link>

              <Link
                to="/partners"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#172033] transition hover:border-slate-400"
              >
                Explore providers
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[#f8f9fb]">
      {/* Hero */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Become a partner
              </p>

              <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#172033] sm:text-6xl">
                Put your optical business where people are looking.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
                Join the Optocare network and make your business, services,
                and products easier for people to discover.
              </p>

              <div className="mt-9 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef1f4] text-xs font-semibold text-[#172033]">
                    01
                  </div>

                  <div>
                    <p className="font-semibold text-[#172033]">
                      Build your presence
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Create a public profile for your optical business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef1f4] text-xs font-semibold text-[#172033]">
                    02
                  </div>

                  <div>
                    <p className="font-semibold text-[#172033]">
                      Showcase what you offer
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Make your optical services and products discoverable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef1f4] text-xs font-semibold text-[#172033]">
                    03
                  </div>

                  <div>
                    <p className="font-semibold text-[#172033]">
                      Connect with customers
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Become part of a growing optical ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#eef1f4]">
              <div className="flex aspect-[4/3] flex-col items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white text-3xl font-semibold text-[#172033] shadow-sm">
                  O
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Cloudinary image
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Partner / optical business photography
                </p>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-xl shadow-slate-900/5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Optocare network
                </p>

                <p className="mt-2 text-sm font-medium leading-6 text-[#172033]">
                  Your business. Your services. Your products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application section */}
      <section className="border-t border-slate-200 bg-[#f8f9fb]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:gap-20">
            {/* Form intro */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Partner application
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
                Tell us about your business.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-500">
                Submit your details and our team will review your application.
                If approved, you'll receive the next steps for accessing your
                partner account.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Before you submit
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-500">
                  <li className="flex gap-3">
                    <span className="text-[#172033]">•</span>
                    Use accurate business and contact information.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#172033]">•</span>
                    Describe the optical services you currently offer.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-[#172033]">•</span>
                    Applications are reviewed before partner access is
                    activated.
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal information */}
                <div>
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Contact information
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-[#172033]">
                      Your details
                    </h3>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="full_name"
                        className="mb-2 block text-sm font-medium text-[#172033]"
                      >
                        Full name
                      </label>

                      <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        value={form.full_name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        className="w-full rounded-2xl border border-slate-200 bg-[#f8f9fb] px-4 py-3.5 text-sm text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#172033] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="position"
                        className="mb-2 block text-sm font-medium text-[#172033]"
                      >
                        Position
                      </label>

                      <input
                        id="position"
                        name="position"
                        type="text"
                        value={form.position}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Owner, Manager"
                        className="w-full rounded-2xl border border-slate-200 bg-[#f8f9fb] px-4 py-3.5 text-sm text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#172033] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-[#172033]"
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="w-full rounded-2xl border border-slate-200 bg-[#f8f9fb] px-4 py-3.5 text-sm text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#172033] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-[#172033]"
                      >
                        Phone number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        placeholder="+254 7XX XXX XXX"
                        className="w-full rounded-2xl border border-slate-200 bg-[#f8f9fb] px-4 py-3.5 text-sm text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#172033] focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Business information */}
                <div className="border-t border-slate-200 pt-8">
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Business information
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-[#172033]">
                      Your optical business
                    </h3>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="company_name"
                        className="mb-2 block text-sm font-medium text-[#172033]"
                      >
                        Company name
                      </label>

                      <input
                        id="company_name"
                        name="company_name"
                        type="text"
                        value={form.company_name}
                        onChange={handleChange}
                        required
                        autoComplete="organization"
                        placeholder="Your business name"
                        className="w-full rounded-2xl border border-slate-200 bg-[#f8f9fb] px-4 py-3.5 text-sm text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#172033] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="partner_type"
                        className="mb-2 block text-sm font-medium text-[#172033]"
                      >
                        Business type
                      </label>

                      <select
                        id="partner_type"
                        name="partner_type"
                        value={form.partner_type}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none rounded-2xl border border-slate-200 bg-[#f8f9fb] px-4 py-3.5 text-sm text-[#172033] outline-none transition focus:border-[#172033] focus:bg-white"
                      >
                        <option value="" disabled>
                          Select business type
                        </option>

                        {partnerTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="services_offered"
                        className="mb-2 block text-sm font-medium text-[#172033]"
                      >
                        Services offered
                      </label>

                      <textarea
                        id="services_offered"
                        name="services_offered"
                        value={form.services_offered}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about the optical services your business offers..."
                        className="w-full resize-none rounded-2xl border border-slate-200 bg-[#f8f9fb] px-4 py-3.5 text-sm leading-6 text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#172033] focus:bg-white"
                      />

                      <p className="mt-2 text-xs text-slate-400">
                        You can list multiple services separated by commas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div
                    role="alert"
                    className="rounded-2xl border border-red-100 bg-red-50 px-4 py-4 text-sm leading-6 text-red-600"
                  >
                    {error}
                  </div>
                )}

                {/* Submit */}
                <div className="border-t border-slate-200 pt-8">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex w-full items-center justify-center rounded-full bg-[#172033] px-6 py-4 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-3">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Submitting application...
                      </span>
                    ) : (
                      "Submit application"
                    )}
                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                    By submitting this application, you confirm that the
                    information provided is accurate.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#172033]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Still exploring?
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                See what the Optocare network looks like.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/partners"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#172033] transition hover:bg-slate-100"
              >
                Explore providers
              </Link>

              <Link
                to="/about"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                About Optocare
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BecomePartner;