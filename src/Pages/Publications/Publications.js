import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { publicationsData } from "./publicationsData";
import humanity from "../../Images/humanity.jpg";
import { FaLinkedinIn, FaResearchgate, FaGlobe } from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";

const Publications = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const itemsPerPage = 7;

  const years = [
    "All",
    ...new Set(publicationsData.map((item) => item.year)),
  ].sort((a, b) => (a === "All" ? -1 : b - a));

  const filteredPublications =
    selectedYear === "All"
      ? publicationsData
      : publicationsData.filter((item) => item.year === Number(selectedYear));

  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);

  const currentItems = filteredPublications.slice(
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
              Publications
            </h1>

            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Peer-review articles and books in the thematic of Early Child Development (ECD)
              Early Child Education (ECE), older person and ageing, disability, education,
              food security, and digital sociology.
            </p>

            {/* Filter */}
            <div className="mb-8 sm:mb-10">
              <label className="font-semibold mr-3 text-sm sm:text-base">
                Filter by Year:
              </label>
              <select
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-300 px-3 py-2 rounded-md bg-white text-sm sm:text-base mt-2 sm:mt-0"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Publications List */}
            <div className="space-y-8 sm:space-y-10">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-200 pb-6 sm:pb-8"
                >
                  <div className="text-xs sm:text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                    {item.year}
                  </div>

                  <h2 className="text-lg sm:text-xl md:text-2xl font-medium underline text-[#b44343] mb-3 leading-snug">
                    {item.title}
                  </h2>

                  <div className="text-gray-700 text-xs sm:text-sm mb-2">
                    <strong>Authors:</strong> {item.authors}
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    {item.publication}
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6 mt-4 flex-wrap">
                    <button
                      onClick={() => handleViewDetails(item.id)}
                      className="text-amber-700 text-sm font-medium hover:text-amber-800"
                    >
                      {selectedItem === item.id ? "Hide Details" : "View Details"}
                    </button>

                    {item.pdfUrl && (
                      <a href={item.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#b44343] text-sm font-medium hover:text-amber-700"
                      >
                        View PDF
                      </a>
                    )}
                  </div>

                  {/* Details Panel */}
                  {selectedItem === item.id && (
                    <div className="mt-4 sm:mt-6 bg-amber-50/40 p-4 sm:p-5 rounded-lg border-l-4 border-amber-600">
                      {item.coAuthors && item.coAuthors.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-black mb-3 text-sm sm:text-base">
                            Co-Authors
                          </h3>
                          <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                            {item.coAuthors.map((author, index) => (
                              <li key={index}>• {author}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Unpublished Works - FIXED: Removed duplicate {...} block */}
            {currentPage === totalPages && (
              <section className="mt-14">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Unpublished Works
                </h2>

                <div className="space-y-8">

                  {/* PhD Dissertation */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="text-xs sm:text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                      2018
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium underline text-[#b44343] mb-3 leading-snug">
                      Grandfathers Caring for Orphaned Grandchildren in Rural Southern Malawi:
                      Invisible in Plain Sight?
                    </h3>

                    <div className="text-gray-700 text-sm mb-2">
                      <strong>Author:</strong> Lazaro, M. C.
                    </div>

                    <div className="text-gray-700 text-sm leading-relaxed mb-3">
                      Doctoral Dissertation, University of Hull, United Kingdom.
                    </div>

                    <div className="text-sm">
                      <strong>Repository Link:</strong>{" "}
                      <a
                        href="https://hull-repository.worktribe.com/output/4220827"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#b44343] underline hover:text-amber-700"
                      >
                        View Dissertation
                      </a>
                    </div>
                  </div>

                  {/* Masters Thesis */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="text-xs sm:text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                      2013
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium underline text-[#b44343] mb-3 leading-snug">
                      The Meaning of a Healthy Family in Sub-Saharan Africa: Perspectives of
                      Two-Parent Families in Urban Malawi
                    </h3>

                    <div className="text-gray-700 text-sm mb-2">
                      <strong>Author:</strong> Lazaro, M. C.
                    </div>

                    <div className="text-gray-700 text-sm leading-relaxed mb-3">
                      Master's Thesis, University of Alberta, Canada.
                    </div>

                    <div className="text-sm">
                      <strong>DOI:</strong>{" "}
                      <a
                        href="https://doi.org/10.7939/R30D00"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#b44343] underline hover:text-amber-700"
                      >
                        10.7939/R30D00
                      </a>
                    </div>
                  </div>

                </div>
              </section>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-1 sm:gap-2 mt-8 sm:mt-10 flex-wrap">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 sm:px-4 py-2 border rounded-md bg-white disabled:opacity-50 text-sm"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 sm:px-4 py-2 border rounded-md text-sm ${
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
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 sm:px-4 py-2 border rounded-md bg-white disabled:opacity-50 text-sm"
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

export default Publications;