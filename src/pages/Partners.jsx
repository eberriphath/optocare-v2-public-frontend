import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

function Partners() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("all");
  const [partnerType, setPartnerType] = useState("all");

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/partners", {
          params: {
            page: 1,
            per_page: 100,
          },
        });

        setPartners(response.data.partners || []);
      } catch (err) {
        console.error("Failed to load partners:", err);
        setError(
          "We couldn't load our partner network right now. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  const locations = useMemo(() => {
    return [
      ...new Set(
        partners
          .map((partner) => partner.location)
          .filter(Boolean)
      ),
    ].sort();
  }, [partners]);

  const partnerTypes = useMemo(() => {
    return [
      ...new Set(
        partners
          .map((partner) => partner.partner_type)
          .filter(Boolean)
      ),
    ].sort();
  }, [partners]);

  const filteredPartners = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return partners.filter((partner) => {
      const matchesLocation =
        location === "all" || partner.location === location;

      const matchesType =
        partnerType === "all" ||
        partner.partner_type === partnerType;

      const matchesSearch =
        !searchTerm ||
        partner.company_name?.toLowerCase().includes(searchTerm) ||
        partner.location?.toLowerCase().includes(searchTerm) ||
        partner.specialty?.toLowerCase().includes(searchTerm) ||
        partner.description?.toLowerCase().includes(searchTerm);

      return matchesLocation && matchesType && matchesSearch;
    });
  }, [partners, search, location, partnerType]);

  const clearFilters = () => {
    setSearch("");
    setLocation("all");
    setPartnerType("all");
  };

  const formatPartnerType = (type) => {
    if (!type) return "Optical professional";

    return type
      .replace(/_/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  };

  return (
    <main className="bg-[#f8f9fb]">
      {/* Introduction */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              The Optocare network
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#172033] sm:text-5xl lg:text-6xl">
              Meet the people
              <span className="block text-slate-400">
                behind better vision.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Discover verified optical businesses and professionals
              providing services and products through Optocare.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[73px] z-20 border-b border-slate-200 bg-[#f8f9fb]/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Search */}
            <div className="relative flex-1">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search providers, specialties or locations..."
                className="h-12 w-full rounded-full border border-slate-200 bg-white pl-12 pr-5 text-sm text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#172033]"
              />
            </div>

            {/* Location */}
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-12 rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-500 outline-none transition focus:border-[#172033] lg:w-52"
            >
              <option value="all">All locations</option>

              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Partner type */}
            <select
              value={partnerType}
              onChange={(e) => setPartnerType(e.target.value)}
              className="h-12 rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-500 outline-none transition focus:border-[#172033] lg:w-52"
            >
              <option value="all">All providers</option>

              {partnerTypes.map((item) => (
                <option key={item} value={item}>
                  {formatPartnerType(item)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Loading */}
        {loading && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-[2rem] border border-slate-200 bg-white p-7"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-slate-200" />

                  <div className="flex-1">
                    <div className="h-5 w-3/4 rounded bg-slate-200" />
                    <div className="mt-2 h-3 w-1/2 rounded bg-slate-100" />
                  </div>
                </div>

                <div className="mt-7 h-16 rounded bg-slate-100" />

                <div className="mt-7 h-4 w-1/2 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-3xl border border-red-100 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
              !
            </div>

            <h2 className="mt-5 text-xl font-semibold text-[#172033]">
              Something went wrong
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              {error}
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 rounded-full bg-[#172033] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Try again
            </button>
          </div>
        )}

        {/* Results */}
        {!loading && !error && (
          <>
            <div className="mb-8 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-400">
                {filteredPartners.length}{" "}
                {filteredPartners.length === 1
                  ? "provider"
                  : "providers"}
              </p>

              {(search ||
                location !== "all" ||
                partnerType !== "all") && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm font-medium text-[#172033] underline underline-offset-4"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredPartners.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-white px-6 py-20 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                  <svg
                    className="h-7 w-7 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                  </svg>
                </div>

                <h2 className="mt-6 text-xl font-semibold text-[#172033]">
                  No providers found
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Try a different search term or remove some filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-[#172033] transition hover:bg-slate-50"
                >
                  View all providers
                </button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPartners.map((partner) => (
                  <Link
                    key={partner.id}
                    to={`/partners/${partner.id}`}
                    className="group flex min-h-[310px] flex-col rounded-[2rem] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#172033] text-lg font-semibold text-white">
                          {partner.company_name
                            ?.charAt(0)
                            ?.toUpperCase() || "O"}
                        </div>

                        <div className="min-w-0">
                          <h2 className="truncate text-lg font-semibold tracking-tight text-[#172033]">
                            {partner.company_name}
                          </h2>

                          <p className="mt-1 text-xs capitalize text-slate-400">
                            {formatPartnerType(
                              partner.partner_type
                            )}
                          </p>
                        </div>
                      </div>

                      <span className="shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#172033]">
                        →
                      </span>
                    </div>

                    {/* Verification */}
                    <div className="mt-7">
                      {partner.is_verified && (
                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-emerald-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Verified partner
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <div className="mt-6">
                      {partner.specialty && (
                        <p className="text-sm font-medium text-[#172033]">
                          {partner.specialty}
                        </p>
                      )}

                      {partner.description && (
                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                          {partner.description}
                        </p>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="mt-auto border-t border-slate-100 pt-6">
                      {partner.location && (
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <svg
                            className="h-4 w-4 shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          >
                            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                          </svg>

                          <span className="truncate">
                            {partner.location}
                          </span>
                        </div>
                      )}

                      <p className="mt-4 text-sm font-semibold text-[#172033] transition group-hover:underline group-hover:underline-offset-4">
                        Explore provider
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* Partner CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="rounded-[2rem] bg-[#172033] px-7 py-12 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Join the network
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Are you an optical business?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Join Optocare and connect your services and products with
                people looking for better vision care.
              </p>
            </div>

            <Link
              to="/become-a-partner"
              className="mt-8 inline-flex shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#172033] transition hover:bg-slate-100 lg:mt-0"
            >
              Become a partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Partners;