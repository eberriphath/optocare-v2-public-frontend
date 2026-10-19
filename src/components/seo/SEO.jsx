import { Helmet } from "react-helmet-async";

const SITE_NAME = "Optocare";
const SITE_URL = "https://optocare.net";
const DEFAULT_TITLE = "Optocare | Eyewear & Eye Care";
const DEFAULT_DESCRIPTION =
  "Discover quality eyewear, designer frames, sunglasses, contact lenses and eye-care services with Optocare. Explore products and connect with eye-care providers.";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/qnyhrcim/image/upload/v1790627860/1000027283-removebg-preview_svmmhf.png";

function SEO({
  title,
  description,
  path = "/",
  image,
  noindex = false,
}) {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : DEFAULT_TITLE;

  const pageDescription =
    description?.trim() || DEFAULT_DESCRIPTION;

  const normalizedPath = path.split("?")[0].split("#")[0];
  const cleanPath =
    normalizedPath === "/"
      ? "/"
      : `/${normalizedPath.split("/").filter(Boolean).join("/")}`;

  const canonicalUrl = `${SITE_URL}${cleanPath}`;
  const socialImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="description" content={pageDescription} />

      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImage} />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={socialImage} />
    </Helmet>
  );
}

export default SEO;