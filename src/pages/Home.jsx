import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import ProductsPreview from "../components/home/ProductsPreview";
import PartnersPreview from "../components/home/PartnersPreview";
import ReviewsPreview from "../components/home/ReviewsPreview";

function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProductsPreview />
      <PartnersPreview />
      <ReviewsPreview />
    </>
  );
}

export default Home;