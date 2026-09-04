import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../api/api";
import SectionHeading from "../ui/SectionHeading";

function ServicesPreview() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get("/services");
        setServices(response.data.services || []);
      } catch (error) {
        console.error("Failed to load services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What you need"
            title="Optical care, connected."
            description="Explore services offered by verified professionals across the Optocare network."
          />

          <Link
            to="/services"
            className="shrink-0 text-sm font-medium text-[#172033] underline decoration-slate-300 underline-offset-8 transition hover:decoration-[#172033]"
          >
            View all services
          </Link>
        </div>

        {loading ? (
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-56 animate-pulse rounded-3xl bg-slate-100"
              />
            ))}
          </div>
        ) : services.length === 0 ? (
          <div className="mt-14 rounded-3xl border border-dashed border-slate-200 p-12 text-center">
            <p className="text-sm text-slate-400">
              No services are currently available.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group rounded-3xl border border-slate-200 bg-[#f8f9fb] p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-10 flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-medium text-[#172033] shadow-sm">
                    {service.name?.charAt(0)}
                  </span>

                  <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#172033]">
                    →
                  </span>
                </div>

                <h3 className="text-xl font-medium text-[#172033]">
                  {service.name}
                </h3>

                {service.description && (
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>
                )}

                {service.partner && (
                  <p className="mt-5 text-xs text-slate-400">
                    {service.partner.company_name}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesPreview;