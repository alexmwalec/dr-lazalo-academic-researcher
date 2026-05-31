import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { consultancyData } from "./consultancyData";

import {
  FaLinkedinIn,
  FaResearchgate,
  FaGlobe,
} from "react-icons/fa";

import { SiOrcid, SiGooglescholar } from "react-icons/si";

const Consultancy = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  const years = [
    "All",
    ...new Set(consultancyData.map((item) => item.year)),
  ].sort((a, b) => (a === "All" ? -1 : b - a));

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setCurrentPage(1);
  };
  
  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const filteredData =
    selectedYear === "All"
      ? consultancyData
      : consultancyData.filter(
          (item) => item.year === Number(selectedYear)
        );

  const totalPages = Math.ceil(
    filteredData.length / ITEMS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentItems = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      {/* Banner */}
      <div
        className="h-[330px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/banner.jpg')`,
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] -mt-24">
            <img
              src="/profile.jpg"
              alt="Mayeso Lazaro"
              className="w-[220px] border-4 border-white shadow-sm"
            />

            <div className="mt-5">
              <h2 className="text-[22px] font-bold leading-tight">
                Mayeso Lazaro
              </h2>

              <p className="text-gray-700 mt-1">
                Senior Lecturer, Researcher and Evaluation Consultant
              </p>

              <a
                href="mailto:mlazaro@unima.ac.mw"
                className="block mt-8 text-[#b44343] underline"
              >
                mlazaro@unima.ac.mw
              </a>

              <div className="mt-8 text-gray-700 leading-relaxed">
                Department of Human Ecology
                <br />
                University of Malawi
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href="https://scholar.google.com/citations?hl=en&user=5BMNX2sAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b44343] underline"
                >
                  <SiGooglescholar className="text-gray-400" />
                  Google Scholar
                </a>

                <a
                  href="https://www.researchgate.net/profile/Mayeso-Lazaro-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b44343] underline"
                >
                  <FaResearchgate className="text-gray-400" />
                  ResearchGate
                </a>

                <a
                  href="https://orcid.org/0000-0001-5314-0638"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b44343] underline"
                >
                  <SiOrcid className="text-gray-400" />
                  ORCID
                </a>

                <a
                  href="https://www.webofscience.com/wos/author/record/PYY-0010-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b44343] underline"
                >
                  <div className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center text-[10px] font-bold text-gray-500">
                    W
                  </div>

                  Web of Science
                </a>

                <a
                  href="http://www.linkedin.com/in/mayeso-chinseu-lazaro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b44343] underline"
                >
                  <FaLinkedinIn className="text-gray-400" />
                  LinkedIn
                </a>

                <a
                  href="https://unima.ac.mw/people/staff/search?staff=dr.+mayeso+chinseu+lazaro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b44343] underline"
                >
                  <FaGlobe className="text-gray-400" />
                  Institutional Web Page
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 py-12">
            <h1 className="text-3xl font-bold  mb-4">
              Consultancy
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              The following engagements reflect applied research,
              evaluation, and advisory roles undertaken alongside
              academic responsibilities.
            </p>

            {/* Filter */}
            <div className="mb-10">
              <label className="font-semibold mr-3">
                Filter by Year:
              </label>

              <select
                value={selectedYear}
                onChange={handleYearChange}
                className="border border-gray-300 bg-white px-4 py-2 rounded"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Consultancy Cards */}
            <div className="space-y-8">
              {currentItems.map((item, index) => (
                <div
                  key={index}
                  className="p-6 shadow-sm  "
                >
                  <h2 className="text-xl font-semibold text-[#b44343] mb-3">
                    {item.title}
                  </h2>

                  <div className="space-y-2 text-gray-800">
                    <p>
                      <strong>Client:</strong> {item.client}
                    </p>

                    <p>
                      <strong>Period:</strong> {item.period}
                    </p>

                    <p>
                      <strong>Year:</strong> {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
           <div className="flex justify-center items-center gap-2 mt-10">
              <button
                onClick={() =>
                  handlePageChange(
                    Math.max(currentPage - 1, 1)
                  )
                }
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded bg-white disabled:opacity-50"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handlePageChange(index + 1)
                  }
                  className={`px-4 py-2 border rounded ${
                    currentPage === index + 1
                      ? "bg-[#b44343] text-white border-[#b44343]"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  handlePageChange(
                    Math.min(
                      currentPage + 1,
                      totalPages
                    )
                  )
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded-lg bg-white disabled:opacity-50"
              >
                Next
              </button>
            </div>

            {/* Page Info */}
            <div className="text-center text-gray-600 mt-4">
              Page {currentPage} of {totalPages}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Consultancy;