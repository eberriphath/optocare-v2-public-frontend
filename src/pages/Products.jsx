import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/products");

        setProducts(response.data.products || []);
      } catch (err) {
        console.error("Failed to load products:", err);
        setError(
          "We couldn't load the products right now. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.category)
          .filter(Boolean)
      ),
    ];
  }, [products]);

  const brands = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.brand)
          .filter(Boolean)
      ),
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;

      const matchesBrand =
        brand === "all" || product.brand === brand;

      const matchesSearch =
        !searchTerm ||
        product.name?.toLowerCase().includes(searchTerm) ||
        product.description?.toLowerCase().includes(searchTerm) ||
        product.brand?.toLowerCase().includes(searchTerm) ||
        product.partner?.company_name?.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [products, search, category, brand]);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setBrand("all");
  };

  return (
    <main className="bg-[#f8f9fb]">
      {/* Introduction */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Optical products
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#172033] sm:text-5xl lg:text-6xl">
              Things that help you
              <span className="block text-slate-400">
                see better.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Discover optical products offered by verified businesses
              across the Optocare network.
            </p>
          </div>
        </div>
      </section>

      {/* Search + filters */}
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
                placeholder="Search products, brands or providers..."
                className="h-12 w-full rounded-full border border-slate-200 bg-white pl-12 pr-5 text-sm text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#172033]"
              />
            </div>

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-500 outline-none transition focus:border-[#172033] lg:w-48"
            >
              <option value="all">All categories</option>

              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Brand */}
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="h-12 rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-500 outline-none transition focus:border-[#172033] lg:w-48"
            >
              <option value="all">All brands</option>

              {brands.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Product catalogue */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                <div className="aspect-square bg-slate-200" />

                <div className="p-6">
                  <div className="h-3 w-20 rounded bg-slate-200" />
                  <div className="mt-4 h-6 w-3/4 rounded bg-slate-200" />
                  <div className="mt-3 h-4 w-full rounded bg-slate-100" />
                  <div className="mt-2 h-4 w-2/3 rounded bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        )}

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

        {!loading && !error && (
          <>
            <div className="mb-8 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-400">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1
                  ? "product"
                  : "products"}
              </p>

              {(search ||
                category !== "all" ||
                brand !== "all") && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm font-medium text-[#172033] underline underline-offset-4"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
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
                  No products found
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Try another search term or remove some filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-[#172033] transition hover:bg-slate-50"
                >
                  View all products
                </button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40"
                  >
                    {/* Product image */}
                    <div className="relative aspect-square overflow-hidden bg-[#eef1f4]">
                      {product.image_url ? (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center">
                          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm">
                            <span className="text-2xl font-semibold text-[#172033]">
                              O
                            </span>
                          </div>

                          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                            Cloudinary image
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            Product image placeholder
                          </p>
                        </div>
                      )}

                      {/* Availability */}
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-600 shadow-sm backdrop-blur">
                        Available
                      </div>
                    </div>

                    {/* Product information */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3">
                        <p className="truncate text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                          {product.brand || "Optical product"}
                        </p>

                        <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#172033]">
                          →
                        </span>
                      </div>

                      <h2 className="mt-3 line-clamp-2 text-xl font-semibold tracking-tight text-[#172033]">
                        {product.name}
                      </h2>

                      {product.description && (
                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                          {product.description}
                        </p>
                      )}

                      <div className="mt-6 border-t border-slate-100 pt-5">
                        <div className="flex items-end justify-between gap-3">
                          <div>
                            <p className="text-xs text-slate-400">
                              Provider
                            </p>

                            <p className="mt-1 max-w-[150px] truncate text-sm font-medium text-[#172033]">
                              {product.partner?.company_name ||
                                "Optocare partner"}
                            </p>
                          </div>

                          {product.price !== null &&
                            product.price !== undefined && (
                              <p className="shrink-0 text-sm font-semibold text-[#172033]">
                                KSh{" "}
                                {Number(
                                  product.price
                                ).toLocaleString()}
                              </p>
                            )}
                        </div>
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

export default Products;