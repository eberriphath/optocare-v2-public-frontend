import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../api/api";
import SectionHeading from "../ui/SectionHeading";

function PartnersPreview() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await api.get("/partners", {
          params: {
            page: 1,
            per_page: 6,
          },
        });

        setPartners(response.data.partners || []);
      } catch (error) {
        console.error("Failed to load partners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The network"
            title="People you can trust."
            description="Meet verified optical professionals and businesses within the Optocare network."
          />

          <Link
            to="/partners"
            className="shrink-0 text-sm font-medium text-[#172033] underline decoration-slate-300 underline-offset-8 transition hover:decoration-[#172033]"
          >
            Meet the network
          </Link>
        </div>

        {loading ? (
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-48 animate-pulse rounded-3xl bg-slate-100"
              />
            ))}
          </div>
        ) : (
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partners.slice(0, 6).map((partner) => (
              <Link
                key={partner.id}
                to={`/partners/${partner.id}`}
                className="group rounded-3xl border border-slate-200 p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f5f7] text-sm font-semibold text-[#172033]">
                    {partner.company_name?.charAt(0)}
                  </div>

                  {partner.is_verified && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Verified
                    </span>
                  )}
                </div>

                <h3 className="mt-8 text-lg font-medium text-[#172033]">
                  {partner.company_name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                  {partner.partner_type && (
                    <span>{partner.partner_type.replace("_", " ")}</span>
                  )}

                  {partner.location && (
                    <>
                      <span>·</span>
                      <span>{partner.location}</span>
                    </>
                  )}
                </div>

                <span className="mt-6 inline-block text-sm text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#172033]">
                  View profile →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PartnersPreview;