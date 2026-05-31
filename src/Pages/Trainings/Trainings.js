import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { trainingData } from "./trainingData";
import humanity from "../../Images/humanity.jpg"; 

import {
  FaLinkedinIn,
  FaResearchgate,
  FaGlobe,
} from "react-icons/fa";

import { SiOrcid, SiGooglescholar } from "react-icons/si";

const Trainings = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const itemsPerPage = 7;

  const years = [
    "All",
    ...new Set(trainingData.map((item) => item.year)),
  ].sort((a, b) => (a === "All" ? -1 : b - a));

  const filteredTrainings =
    selectedYear === "All"
      ? trainingData
      : trainingData.filter(
          (item) => item.year === Number(selectedYear)
        );

  const totalPages = Math.ceil(
    filteredTrainings.length / itemsPerPage
  );

  const currentItems = filteredTrainings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewDetails = (id) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      {/* Banner */}
        <div className="relative h-[330px]">
  <img
    src={humanity}
    alt="Academic Research Banner"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/20" />
</div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-8">
    <div className="flex flex-col lg:flex-row gap-16">

      {/* LEFT SIDEBAR - CHANGED: Profile image now circular with white border and overlaps banner */}
      <aside className="w-full lg:w-[280px] -mt-24">
        {/* CHANGED: Added rounded-full for circular shape, object-cover, h-48 w-48, mx-auto on mobile */}
        <img
          src="/profile.jpg"
          alt="Mayeso Lazaro"
          className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border-4 border-white shadow-lg object-cover mx-auto md:mx-0"
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

            <h1 className="text-3xl font-bold mb-4">
              Trainings & Workshops
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              Professional trainings, workshops, conferences,
              research capacity-building programmes, and academic
              development activities attended over the years.
            </p>

            {/* Filter */}
            <div className="mb-10">
              <label className="font-semibold mr-3">
                Filter by Year:
              </label>

              <select
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-300 px-4 py-2 rounded-md bg-white"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Training List */}
            <div className="space-y-10">

              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-200 pb-8"
                >
                  <div className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                    {item.year}
                  </div>

                  <h2 className="text-xl md:text-2xl font-medium underline text-[#b44343] mb-3">
                    {item.title}
                  </h2>

                  <div className="text-gray-700 text-sm mb-2">
                    <strong>Institution:</strong>{" "}
                    {item.institution}
                  </div>

                  <div className="text-gray-700 text-sm mb-2">
                    <strong>Location:</strong>{" "}
                    {item.location}
                  </div>

                  <div className="text-gray-700 text-sm">
                    <strong>Date:</strong>{" "}
                    {item.date}
                  </div>

                </div>
              ))}

            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">

                <button
                  onClick={() =>
                    setCurrentPage((prev) =>
                      Math.max(prev - 1, 1)
                    )
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 border rounded-md bg-white disabled:opacity-50"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                    className={`px-4 py-2 border rounded-md ${
                      currentPage === index + 1
                        ? "bg-[#b44343] text-white border-[#b44343]"
                        : "bg-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) =>
                      Math.min(
                        prev + 1,
                        totalPages
                      )
                    )
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border rounded-md bg-white disabled:opacity-50"
                >
                  Next
                </button>

              </div>
            )}

          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Trainings;