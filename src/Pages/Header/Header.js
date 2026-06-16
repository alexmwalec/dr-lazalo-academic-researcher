import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/publications", label: "Publications" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/awards", label: "Awards" },
  { to: "/supervision", label: "Supervision" },
  { to: "/board-membership", label: "Board Membership" },
  { to: "/teaching", label: "Teaching" },
  { to: "/peer-review", label: "Peer Reviews" },
  { to: "/conference", label: "Conference Contribution" },
  { to: "/trainings", label: "Trainings" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Check if link is active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden text-gray-800 text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Name / Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 whitespace-nowrap hover:text-rose-700"
          >
            Mayeso Chinseu Lazaro
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-[17px] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`whitespace-nowrap transition-colors duration-200 ${
                isActive(link.to)
                  ? "text-rose-700"
                  : "text-gray-700 hover:text-rose-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-base font-medium shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`border-b pb-2 last:border-none transition-colors duration-200 ${
                isActive(link.to)
                  ? "text-rose-700"
                  : "text-gray-700 hover:text-rose-700"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;