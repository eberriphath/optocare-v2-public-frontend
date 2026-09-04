import { useEffect, useState } from "react";

import api from "../../api/api";
import SectionHeading from "../ui/SectionHeading";

function ReviewsPreview() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const partnersResponse = await api.get("/partners", {
          params: {
            page: 1,
            per_page: 6,
          },
        });

        const partners = partnersResponse.data.partners || [];

        const reviewResponses = await Promise.all(
          partners.map((partner) =>
            api
              .get(`/reviews/partner/${partner.id}`)
              .then((response) =>
                (response.data.reviews || []).map((review) => ({
                  ...review,
                  partner_name: partner.company_name,
                }))
              )
              .catch(() => [])
          )
        );

        const combinedReviews = reviewResponses
          .flat()
          .sort(
            (a, b) =>
              new Date(b.created_at) - new Date(a.created_at)
          )
          .slice(0, 6);

        setReviews(combinedReviews);
      } catch (error) {
        console.error("Failed to load reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (!loading && reviews.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#f3f5f7] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="From the community"
          title="What people are saying."
          description="Real experiences shared with verified Optocare partners."
        />

        {loading ? (
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-56 animate-pulse rounded-3xl bg-white"
              />
            ))}
          </div>
        ) : (
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="rounded-3xl bg-white p-7"
              >
                <div className="flex gap-1 text-sm text-[#172033]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={
                        star <= review.rating
                          ? "opacity-100"
                          : "opacity-20"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-600">
                  “{review.comment}”
                </p>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <p className="text-sm font-medium text-[#172033]">
                    {review.reviewer_name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {review.partner_name}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ReviewsPreview;