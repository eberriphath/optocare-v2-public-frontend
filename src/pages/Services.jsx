import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/services");

        setServices(response.data.services || []);
      } catch (err) {
        console.error("Failed to load services:", err);
        setError(
          "We couldn't load the services right now. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = services
      .map((service) => service.category)
      .filter(Boolean);

    return [...new Set(uniqueCategories)];
  }, [services]);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        category === "all" || service.category === category;

      const searchTerm = search.trim().toLowerCase();

      const matchesSearch =
        !searchTerm ||
        service.name?.toLowerCase().includes(searchTerm) ||
        service.description?.toLowerCase().includes(searchTerm) ||
        service.partner?.company_name?.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [services, search, category]);

  return (
    <main className="bg-[#f8f9fb]">
      {/* Page introduction */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Optical services
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#172033] sm:text-5xl lg:text-6xl">
              Care designed around
              <span className="block text-slate-400">
                how you see the world.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Explore optical services from verified professionals and
              businesses within the Optocare network.
            </p>
          </div>
        </div>
      </section>

      {/* Search and filters */}
      <section className="sticky top-[73px] z-20 border-b border-slate-200 bg-[#f8f9fb]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
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
              placeholder="Search services or providers..."
              className="h-12 w-full rounded-full border border-slate-200 bg-white pl-12 pr-5 text-sm text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#172033]"
            />
          </div>

          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto pb-1 lg:max-w-[55%]">
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                category === "all"
                  ? "bg-[#172033] text-white"
                  : "border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-[#172033]"
              }`}
            >
              All services
            </button>

            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium capitalize transition ${
                  category === item
                    ? "bg-[#172033] text-white"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-[#172033]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Loading */}
        {loading && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-3xl border border-slate-200 bg-white p-7"
              >
                <div className="h-3 w-20 rounded bg-slate-200" />
                <div className="mt-5 h-7 w-3/4 rounded bg-slate-200" />
                <div className="mt-4 h-16 rounded bg-slate-100" />
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
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">
                  {filteredServices.length}{" "}
                  {filteredServices.length === 1 ? "service" : "services"}
                </p>
              </div>

              {(search || category !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("all");
                  }}
                  className="text-sm font-medium text-[#172033] underline underline-offset-4"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredServices.length === 0 ? (
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
                  No services found
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Try a different search term or remove the current filters.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("all");
                  }}
                  className="mt-6 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-[#172033] transition hover:bg-slate-50"
                >
                  View all services
                </button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredServices.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="group flex min-h-[320px] flex-col rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40"
                  >
                    {/* Category */}
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                        {service.category || "Optical care"}
                      </span>

                      <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#172033]">
                        →
                      </span>
                    </div>

                    {/* Service */}
                    <div className="mt-8">
                      <h2 className="text-2xl font-semibold tracking-tight text-[#172033]">
                        {service.name}
                      </h2>

                      <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-500">
                        {service.description ||
                          "Professional optical care provided through the Optocare network."}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto border-t border-slate-100 pt-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-[#172033]">
                            {service.partner?.company_name ||
                              "Optocare partner"}
                          </p>

                          {service.partner?.location && (
                            <p className="mt-1 truncate text-xs text-slate-400">
                              {service.partner.location}
                            </p>
                          )}
                        </div>

                        {service.price !== null &&
                          service.price !== undefined && (
                            <p className="shrink-0 text-sm font-semibold text-[#172033]">
                              KSh {Number(service.price).toLocaleString()}
                            </p>
                          )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}

export default Services;