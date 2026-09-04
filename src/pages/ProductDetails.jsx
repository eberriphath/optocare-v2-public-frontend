import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/api";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get(`/products/${id}`);

        setProduct(response.data.product);
      } catch (err) {
        console.error("Failed to load product:", err);

        if (err.response?.status === 404) {
          setError("This product could not be found.");
        } else {
          setError(
            "We couldn't load this product right now. Please try again."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f8f9fb]">
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="animate-pulse">
            <div className="h-4 w-32 rounded bg-slate-200" />

            <div className="mt-10 grid gap-12 lg:grid-cols-2">
              <div className="aspect-square rounded-[2rem] bg-slate-200" />

              <div className="py-4">
                <div className="h-4 w-24 rounded bg-slate-200" />
                <div className="mt-6 h-14 w-3/4 rounded bg-slate-200" />
                <div className="mt-5 h-20 rounded bg-slate-100" />
                <div className="mt-8 h-14 w-40 rounded bg-slate-200" />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="min-h-screen bg-[#f8f9fb]">
        <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-lg text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl text-slate-400 shadow-sm">
              !
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[#172033]">
              Product unavailable
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              {error || "This product is no longer available."}
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex rounded-full bg-[#172033] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Back to products
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const partner = product.partner;

  return (
    <main className="bg-[#f8f9fb]">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#172033]"
          >
            <span>←</span>
            <span>All products</span>
          </Link>
        </div>
      </div>

      {/* Product */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Image */}
            <div className="overflow-hidden rounded-[2rem] bg-[#eef1f4]">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="aspect-square h-full w-full object-cover"
                />
              ) : (
                <div className="flex aspect-square flex-col items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white shadow-sm">
                    <span className="text-3xl font-semibold text-[#172033]">
                      O
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Cloudinary image
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Product photography placeholder
                  </p>
                </div>
              )}
            </div>

            {/* Information */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                {product.brand && (
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {product.brand}
                  </span>
                )}

                {product.category && (
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                    {product.category}
                  </span>
                )}
              </div>

              <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#172033] sm:text-5xl">
                {product.name}
              </h1>

              {product.description && (
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
                  {product.description}
                </p>
              )}

              <div className="mt-9 flex flex-wrap items-center gap-4">
                {product.price !== null &&
                  product.price !== undefined && (
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                        Price
                      </p>

                      <p className="mt-1 text-2xl font-semibold text-[#172033]">
                        KSh {Number(product.price).toLocaleString()}
                      </p>
                    </div>
                  )}

                <div className="h-10 w-px bg-slate-200" />

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                    Availability
                  </p>

                  <p className="mt-1 text-sm font-semibold text-emerald-600">
                    Available
                  </p>
                </div>
              </div>

              {/* Product metadata */}
              <div className="mt-10 grid max-w-xl gap-4 border-y border-slate-200 py-7 sm:grid-cols-2">
                {product.brand && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                      Brand
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#172033]">
                      {product.brand}
                    </p>
                  </div>
                )}

                {product.category && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                      Category
                    </p>

                    <p className="mt-2 text-sm font-medium capitalize text-[#172033]">
                      {product.category}
                    </p>
                  </div>
                )}

                {product.stock_quantity !== null &&
                  product.stock_quantity !== undefined && (
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                        Stock
                      </p>

                      <p className="mt-2 text-sm font-medium text-[#172033]">
                        {product.stock_quantity} available
                      </p>
                    </div>
                  )}
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Available from
                </p>

                <p className="mt-2 text-base font-semibold text-[#172033]">
                  {partner?.company_name || "Optocare partner"}
                </p>

                {partner?.location && (
                  <p className="mt-1 text-sm text-slate-400">
                    {partner.location}
                  </p>
                )}
              </div>

              {partner && (
                <Link
                  to={`/partners/${partner.id}`}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#172033] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  View provider
                  <span>→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Provider */}
      {partner && (
        <section className="border-t border-slate-200 bg-[#f8f9fb]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  The provider
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#172033]">
                  Buy with confidence.
                </h2>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#172033] text-lg font-semibold text-white">
                      {partner.company_name?.charAt(0)?.toUpperCase() ||
                        "O"}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#172033]">
                        {partner.company_name}
                      </h3>

                      {partner.partner_type && (
                        <p className="mt-1 text-sm capitalize text-slate-400">
                          {partner.partner_type.replace(/_/g, " ")}
                        </p>
                      )}
                    </div>
                  </div>

                  {partner.is_verified && (
                    <span className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Verified provider
                    </span>
                  )}
                </div>

                {partner.description && (
                  <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-500">
                    {partner.description}
                  </p>
                )}

                <div className="mt-8 grid gap-5 border-t border-slate-100 pt-7 sm:grid-cols-2">
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

                <Link
                  to={`/partners/${partner.id}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#172033] transition hover:gap-3"
                >
                  Explore provider
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-[#172033]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Continue exploring
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Find more from the Optocare network.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/products"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#172033] transition hover:bg-slate-100"
              >
                Browse products
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

export default ProductDetails;