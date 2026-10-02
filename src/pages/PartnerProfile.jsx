import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/api";

function PartnerProfile() {
  const { id } = useParams();

  const [partner, setPartner] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPartner = async () => {
      try {
        setLoading(true);
        setError("");

        const [partnerResponse, servicesResponse, productsResponse] =
          await Promise.all([
            api.get(`/partners/${id}`),
            api.get(`/partners/${id}/services`),
            api.get(`/partners/${id}/products`),
          ]);

        setPartner(partnerResponse.data.partner);
        // setServices(servicesResponse.data.services || []);
        // setProducts(productsResponse.data.products || []);
      } catch (err) {
        console.error("Failed to load partner:", err);

        if (err.response?.status === 404) {
          setError("This partner could not be found.");
        } else {
          setError(
            "We couldn't load this partner profile right now. Please try again."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPartner();
  }, [id]);

  const formatPartnerType = (type) => {
    if (!type) return "Optical professional";

    return type
      .replace(/_/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f8f9fb]">
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="animate-pulse">
            <div className="h-4 w-32 rounded bg-slate-200" />

            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.65fr]">
              <div>
                <div className="h-16 w-20 rounded-3xl bg-slate-200" />
                <div className="mt-7 h-12 w-3/4 rounded bg-slate-200" />
                <div className="mt-5 h-20 max-w-xl rounded bg-slate-100" />
              </div>

              <div className="h-64 rounded-[2rem] bg-slate-200" />
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (error || !partner) {
    return (
      <main className="min-h-screen bg-[#f8f9fb]">
        <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-20">
          <div className="max-w-lg text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl text-slate-400 shadow-sm">
              !
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[#172033]">
              Provider unavailable
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              {error || "This provider is no longer available."}
            </p>

            <Link
              to="/partners"
              className="mt-8 inline-flex rounded-full bg-[#172033] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Back to providers
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[#f8f9fb]">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-12">
          <Link
            to="/partners"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#172033]"
          >
            <span>←</span>
            <span>All providers</span>
          </Link>
        </div>
      </div>

      {/* Profile hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Main identity */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                {partner.is_verified && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Verified provider
                  </span>
                )}

                {partner.partner_type && (
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {formatPartnerType(partner.partner_type)}
                  </span>
                )}
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#172033] sm:text-5xl lg:text-6xl">
                {partner.company_name}
              </h1>

              {partner.description && (
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                  {partner.description}
                </p>
              )}

              {partner.location && (
                <div className="mt-8 inline-flex items-center gap-3 text-sm text-slate-500">
                  <svg
                    className="h-5 w-5 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>

                  {partner.location}
                </div>
              )}
            </div>

            {/* Brand visual */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#eef1f4]">
              <div className="flex aspect-[4/3] flex-col items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white text-3xl font-semibold text-[#172033] shadow-sm">
                  {partner.company_name
                    ?.charAt(0)
                    ?.toUpperCase() || "O"}
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Cloudinary image
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Provider photography placeholder
                </p>
              </div>

              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-lg shadow-slate-900/5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Optocare network
                </p>

                <p className="mt-1 text-sm font-medium text-[#172033]">
                  Verified optical provider
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-slate-200 bg-[#f8f9fb]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Location
              </p>

              <p className="mt-3 truncate text-xl font-semibold text-[#172033]">
                {partner.location || "Not specified"}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Provider location
              </p>
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
                Find your care
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Explore more optical services and products.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/services"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#172033] transition hover:bg-slate-100"
              >
                Browse services
              </Link>

              <Link
                to="/products"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Browse products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PartnerProfile;