import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", path: "/services" },
    { label: "Products", path: "/products" },
    { label: "Partners", path: "/partners" },
    { label: "About", path: "/about" },
  ];

  const navClass = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive
        ? "text-[#172033] font-medium"
        : "text-slate-500 hover:text-[#172033]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {/* Cloudinary logo placeholder */}
          <img
            src="https://res.cloudinary.com/qnyhrcim/image/upload/v1790627860/1000027283-removebg-preview_svmmhf.png"
            alt="Optocare Logo"
            className="h-10 w-auto object contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/contact"
            className="text-sm text-slate-500 transition hover:text-[#172033]"
          >
            Contact
          </Link>

          <Link
            to="/become-a-partner"
            className="rounded-full bg-[#172033] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#26334d]"
          >
            Become a Partner
          </Link>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 lg:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-[#172033]" />
            <span className="block h-px w-5 bg-[#172033]" />
          </div>
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-6 sm:px-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-4 text-sm text-slate-600"
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="border-b border-slate-100 py-4 text-sm text-slate-600"
            >
              Contact
            </Link>

            <Link
              to="/become-a-partner"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full bg-[#172033] px-5 py-3 text-center text-sm font-medium text-white"
            >
              Become a Partner
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;