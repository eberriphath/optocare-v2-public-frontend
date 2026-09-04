import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5 flex h-10 w-32 items-center justify-center rounded-lg bg-slate-100 text-xs font-medium tracking-widest text-slate-400">
              OPTOCARE LOGO
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              Connecting people with trusted optical services, products and
              partners.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-[#172033]">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <Link to="/services" className="hover:text-[#172033]">
                Services
              </Link>
              <Link to="/products" className="hover:text-[#172033]">
                Products
              </Link>
              <Link to="/partners" className="hover:text-[#172033]">
                Partners
              </Link>
              <Link to="/about" className="hover:text-[#172033]">
                About Optocare
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-[#172033]">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <Link to="/become-a-partner" className="hover:text-[#172033]">
                Become a Partner
              </Link>
              <Link to="/contact" className="hover:text-[#172033]">
                Contact
              </Link>
              <Link to="/privacy" className="hover:text-[#172033]">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#172033]">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-100 pt-6">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Optocare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;