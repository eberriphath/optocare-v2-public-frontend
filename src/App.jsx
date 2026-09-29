import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Partners from "./pages/Partners";
import PartnerProfile from "./pages/PartnerProfile";
import BecomePartner from "./pages/BecomePartner";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import OrderGlasses from "./pages/OrderGlasses";

function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fb] text-[#172033]">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/:id" element={<PartnerProfile />} />

          <Route path="/become-a-partner" element={<BecomePartner />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/order-glasses" element={<OrderGlasses />} />

          <Route
            path="*"
            element={
              <div className="flex min-h-[60vh] items-center justify-center">
                <div className="text-center">
                  <p className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                    404
                  </p>
                  <h1 className="text-3xl font-semibold">
                    Page not found
                  </h1>
                </div>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;