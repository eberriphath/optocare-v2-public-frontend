import { Helmet } from "react-helmet-async";

const SITE_NAME = "Optocare";
const SITE_URL = "https://optocare.net";

function SEO({
  title,
  description,
  path = "/",
  image,
  noindex = false,
}) {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : "Optocare | Eyewear & Eye Care";

  const canonicalUrl = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />

      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />

      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

export default SEO;

