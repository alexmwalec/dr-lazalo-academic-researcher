import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Name / Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 whitespace-nowrap hover:text-rose-700"
        >
          Mayeso Lazalo
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-medium">
          <Link to="/projects" className="hover:text-rose-700">
            Projects
          </Link>

          <Link to="/publications" className="hover:text-rose-700">
            Publications
          </Link>

          <Link to="/consultancy" className="hover:text-rose-700">
            Consultancy
          </Link>

          <Link to="/awards" className="hover:text-rose-700">
            Awards
          </Link>

          <Link to="/grants" className="hover:text-rose-700">
            Supervision
          </Link>

          <Link to="/outreach" className="hover:text-rose-700">
            Outreach
          </Link>

          <Link to="/editorial" className="hover:text-rose-700">
            Editorial Roles
          </Link>

          <Link to="/research" className="hover:text-rose-700">
            Research
          </Link>

          <Link to="/board-membership" className="hover:text-rose-700">
            Board Membership
          </Link>

          <Link to="/teaching" className="hover:text-rose-700">
            Teaching
          </Link>
          <Link to="/peer-review" className="hover:text-rose-700">
            Peer Reviews
          </Link>

          <Link to="/conference" className="hover:text-rose-700">
            Conference Contribution
          </Link>

          <Link to="/education" className="hover:text-rose-700">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;