import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Note: useNavigate is not used in this component, but can be added back if needed for specific links.
// import { useNavigate } from "react-router-dom";

// SVG icon for the hamburger menu
const MenuIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

// SVG icon for the close button
const CloseIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Header = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navigate = useNavigate(); // Can be used for specific navigation if needed

  // Effect to handle body scroll lock when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // Navigation links data
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Create Invoice", href: "/invoice" },
    { title: "Blogs", href: "/blogs" },
    { title: "Free Tools", href: "/tools" },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to={"/"}
              className="text-2xl font-bold tracking-tight text-white"
            >
              Billable.Pro
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="font-medium text-gray-300 hover:text-white transition duration-150 ease-in-out"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="#login"
              className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-md hover:bg-gray-800 transition-colors"
            >
              Login
            </a>
            <a
              href="#signup"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 inset-x-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "transform translate-y-0"
            : "transform -translate-y-[150%]"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-screen">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              {link.title}
            </a>
          ))}
          <div className="border-t border-gray-700 my-4"></div>
          {/* Mobile Auth Buttons */}
          <div className="px-3 py-3 flex flex-col space-y-3">
            <a
              href="#login"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-center text-base font-medium text-white bg-transparent border border-gray-600 rounded-md hover:bg-gray-800 transition-colors"
            >
              Login
            </a>
            <a
              href="#signup"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-center text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
