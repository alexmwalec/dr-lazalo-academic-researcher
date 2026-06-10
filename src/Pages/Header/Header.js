import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { to: "/projects", label: "Projects" },
  { to: "/publications", label: "Publications" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/awards", label: "Awards" },
  { to: "/supervision", label: "Supervision" },
  { to: "/trainings", label: "Trainings" },
  { to: "/board-membership", label: "Board Membership" },
  { to: "/teaching", label: "Teaching" },
  { to: "/peer-review", label: "Peer Reviews" },
  { to: "/conference", label: "Conference Contribution" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4"> 
        
         {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

        {/* Name / Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 uppercase whitespace-nowrap hover:text-rose-700"
        >
          Mayeso Chinseu Lazaro
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-medium">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-rose-700">
              {link.label}
            </Link>
          ))}
        </nav>

      

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-[15px] font-medium shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-rose-700 border-b pb-2 last:border-none"
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