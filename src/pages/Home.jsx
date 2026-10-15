import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import ProductsPreview from "../components/home/ProductsPreview";
import PartnersPreview from "../components/home/PartnersPreview";
import ReviewsPreview from "../components/home/ReviewsPreview";
import SEO from "../components/seo/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Eyewear & Eye Care"
        description="See better. Live better. Explore quality eyewear, designer frames, sunglasses, contact lenses and eye-care services with Optocare."
        path="/"
      />

      <Hero />
      <ServicesPreview />
      <ProductsPreview />
      <PartnersPreview />
      <ReviewsPreview />
    </>
  );
}

export default Home;