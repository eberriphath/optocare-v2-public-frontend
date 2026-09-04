import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/api";

function ServiceDetails() {
  const { id } = useParams();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get(`/services/${id}`);

        setService(response.data.service);
      } catch (err) {
        console.error("Failed to load service:", err);

        if (err.response?.status === 404) {
          setError("This service could not be found.");
        } else {
          setError(
            "We couldn't load this service right now. Please try again."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f8f9fb]">
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="animate-pulse">
            <div className="h-4 w-32 rounded bg-slate-200" />

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="h-4 w-28 rounded bg-slate-200" />
                <div className="mt-6 h-16 max-w-2xl rounded bg-slate-200" />
                <div className="mt-6 h-24 max-w-2xl rounded bg-slate-100" />
              </div>

              <div className="h-72 rounded-3xl bg-slate-200" />
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (error || !service) {
    return (
      <main className="min-h-screen bg-[#f8f9fb]">
        <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-lg text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl text-slate-400 shadow-sm">
              !
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[#172033]">
              Service unavailable
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              {error || "This service is no longer available."}
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex rounded-full bg-[#172033] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Back to services
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const partner = service.partner;

  return (
    <main className="bg-[#f8f9fb]">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#172033]"
          >
            <span>←</span>
            <span>All services</span>
          </Link>
        </div>
      </div>

      {/* Main service introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Service information */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {service.category || "Optical care"}
                </span>

                {partner?.is_verified && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Verified provider
                  </span>
                )}
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#172033] sm:text-5xl lg:text-6xl">
                {service.name}
              </h1>

              {service.description && (
                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                  {service.description}
                </p>
              )}

              <div className="mt-10 flex flex-wrap items-center gap-4">
                {service.price !== null &&
                  service.price !== undefined && (
                    <div className="rounded-2xl border border-slate-200 bg-[#f8f9fb] px-6 py-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                        Starting price
                      </p>

                      <p className="mt-1 text-xl font-semibold text-[#172033]">
                        KSh {Number(service.price).toLocaleString()}
                      </p>
                    </div>
                  )}

                {partner?.location && (
                  <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#172033]">
                      {partner.location}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#eef1f4]">
              <div className="flex aspect-[4/3] items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm">
                    <span className="text-2xl font-semibold text-[#172033]">
                      O
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                    Cloudinary image
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Service photography placeholder
                  </p>
                </div>
              </div>

              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-lg shadow-slate-900/5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Optocare network
                </p>

                <p className="mt-1 text-sm font-medium text-[#172033]">
                  Professional optical care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider section */}
      {partner && (
        <section className="border-t border-slate-200 bg-[#f8f9fb]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              {/* Label */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Provided by
                </p>

                <div className="mt-5 h-px w-16 bg-slate-300" />
              </div>

              {/* Provider */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-10">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#172033] text-lg font-semibold text-white">
                        {partner.company_name?.charAt(0)?.toUpperCase() || "O"}
                      </div>

                      <div>
                        <p className="text-xl font-semibold tracking-tight text-[#172033]">
                          {partner.company_name}
                        </p>

                        {partner.partner_type && (
                          <p className="mt-1 text-sm capitalize text-slate-400">
                            {partner.partner_type.replace(/_/g, " ")}
                          </p>
                        )}
                      </div>
                    </div>

                    {partner.description && (
                      <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-500">
                        {partner.description}
                      </p>
                    )}
                  </div>

                  {partner.is_verified && (
                    <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Verified
                    </div>
                  )}
                </div>

                <div className="mt-8 grid gap-4 border-t border-slate-100 pt-7 sm:grid-cols-2">
                  {partner.location && (
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                        Location
                      </p>

                      <p className="mt-2 text-sm font-medium text-[#172033]">
                        {partner.location}
                      </p>
                    </div>
                  )}

                  {partner.specialty && (
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                        Specialty
                      </p>

                      <p className="mt-2 text-sm font-medium text-[#172033]">
                        {partner.specialty}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <Link
                    to={`/partners/${partner.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#172033] transition hover:gap-3"
                  >
                    View provider profile
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-[#172033]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Explore more
              </p>

              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Find the right care for you.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/services"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#172033] transition hover:bg-slate-100"
              >
                Browse services
              </Link>

              {partner && (
                <Link
                  to={`/partners/${partner.id}`}
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View provider
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetails;