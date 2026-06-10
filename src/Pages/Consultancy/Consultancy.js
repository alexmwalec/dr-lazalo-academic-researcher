import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { consultancyData } from "./consultancyData";
import humanity from "../../Images/humanity.jpg";
import { FaLinkedinIn, FaResearchgate, FaGlobe } from "react-icons/fa";
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredData =
    selectedYear === "All"
      ? consultancyData
      : consultancyData.filter(
          (item) => item.year === Number(selectedYear)
        );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

       
      {/* Banner */}
      <div className="relative h-[200px] sm:h-[260px] md:h-[330px] w-full">
        <img
          src={humanity}
          alt="Academic Research Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] lg:-mt-24 flex flex-col items-center lg:items-start">

            {/* Profile Image */}
            <div className="mt-[-60px] lg:mt-0">
              <img
                src="/profile.jpg"
                alt="Mayeso Lazaro"
                className="w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] lg:w-[220px] lg:h-[220px] rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>

            <div className="mt-4 lg:mt-5 text-center lg:text-left w-full px-2 lg:px-0">
              <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-tight">
                Mayeso Chinseu Lazaro
              </h2>

              <p className="text-gray-700 mt-1 text-sm sm:text-base">
                Senior Lecturer, Researcher and Evaluation Consultant
              </p>

              
                <a href="mailto:mlazaro@unima.ac.mw"
                className="block mt-4 lg:mt-8 text-[#b44343] underline text-sm sm:text-base break-all"
              >
                mlazaro@unima.ac.mw
              </a>

              <div className="mt-4 lg:mt-8 text-gray-700 font-semibold leading-relaxed text-sm sm:text-base">
                Human Ecology and Agricultural Sciences Department
                <br />
                University of Malawi
              </div>

              {/* Social Links */}
              <div className="mt-4 lg:mt-8 space-y-3 flex flex-col items-center lg:items-start">
  <div className="flex flex-col items-start">

    <a href="https://scholar.google.com/citations?hl=en&user=5BMNX2sAAAAJ"
      target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base"
    >
      <SiGooglescholar className="text-[#4285F4] text-lg flex-shrink-0 w-5" />
      Google Scholar
    </a>

    <a href="https://www.researchgate.net/profile/Mayeso-Lazaro-2"
      target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base mt-3"
    >
      <FaResearchgate className="text-[#00CCBB] text-lg flex-shrink-0 w-5" />
      ResearchGate
    </a>

    <a href="https://orcid.org/0000-0001-5314-0638"
      target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base mt-3"
    >
      <SiOrcid className="text-[#A6CE39] text-lg flex-shrink-0 w-5" />
      ORCID
    </a>

    <a href="http://www.linkedin.com/in/mayeso-chinseu-lazaro"
      target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base mt-3"
    >
      <FaLinkedinIn className="text-[#0A66C2] text-lg flex-shrink-0 w-5" />
      LinkedIn
    </a>

    <a href="https://unima.ac.mw/people/staff/search?staff=dr.+mayeso+chinseu+lazaro"
      target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base mt-3"
    >
      <FaGlobe className="text-[#34A853] text-lg flex-shrink-0 w-5" />
      Institutional Web Page
    </a>

  </div>

            </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 py-6 lg:py-12">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Consultancy
            </h1>

            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              The following engagements reflect applied research, evaluation,
              and advisory roles undertaken alongside academic responsibilities.
            </p>

            {/* Filter */}
            <div className="mb-8 sm:mb-10">
              <label className="font-semibold mr-3 text-sm sm:text-base">
                Filter by Year:
              </label>
              <select
                value={selectedYear}
                onChange={handleYearChange}
                className="border border-gray-300 bg-white px-3 py-2 rounded text-sm sm:text-base mt-2 sm:mt-0"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Consultancy Cards */}
            <div className="space-y-6 sm:space-y-8">
              {currentItems.map((item, index) => (
                <div
                  key={index}
                  className="border-l-4 border-[#b44343] pl-4 sm:pl-6 py-2"
                >
                  <h2 className="text-lg sm:text-xl font-semibold text-[#b44343] mb-3 leading-snug">
                    {item.title}
                  </h2>

                  <div className="space-y-1 sm:space-y-2 text-gray-800 text-sm sm:text-base">
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
            <div className="flex justify-center items-center gap-1 sm:gap-2 mt-8 sm:mt-10 flex-wrap">
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 sm:px-4 py-2 border rounded bg-white disabled:opacity-50 text-sm"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 sm:px-4 py-2 border rounded text-sm ${
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
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 sm:px-4 py-2 border rounded bg-white disabled:opacity-50 text-sm"
              >
                Next
              </button>
            </div>

            {/* Page Info */}
            <div className="text-center text-gray-600 mt-4 text-sm sm:text-base">
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