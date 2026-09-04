import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../api/api";
import SectionHeading from "../ui/SectionHeading";

function ProductsPreview() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.products || []);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-[#f3f5f7] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The catalogue"
            title="Products worth seeing."
            description="Browse products made available by verified optical partners."
          />

          <Link
            to="/products"
            className="shrink-0 text-sm font-medium text-[#172033] underline decoration-slate-300 underline-offset-8 transition hover:decoration-[#172033]"
          >
            Explore catalogue
          </Link>
        </div>

        {loading ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-3xl bg-white"
              >
                <div className="aspect-square bg-slate-200" />
                <div className="space-y-3 p-5">
                  <div className="h-4 w-2/3 rounded bg-slate-200" />
                  <div className="h-3 w-1/3 rounded bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="mt-14 rounded-3xl border border-dashed border-slate-300 p-12 text-center">
            <p className="text-sm text-slate-400">
              No products are currently available.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group overflow-hidden rounded-3xl bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                          Cloudinary
                        </p>
                        <p className="mt-2 text-xs text-slate-300">
                          Product image
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  {product.brand && (
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                      {product.brand}
                    </p>
                  )}

                  <h3 className="mt-2 font-medium text-[#172033]">
                    {product.name}
                  </h3>

                  {product.price !== null && product.price !== undefined && (
                    <p className="mt-3 text-sm text-slate-500">
                      KSh {Number(product.price).toLocaleString()}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductsPreview;