import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { publicationsData } from "./publicationsData";
import humanity from "../../Images/humanity.jpg";
import Sidebar from "../Sidebar/Sidebar";

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
    <div className="min-h-screen bg-slate-100 font-['Arial',sans-serif]">
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
 
          <Sidebar />       

          {/* Main Content */}
          <main className="flex-1 py-6 lg:py-12">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Publications
            </h1>

            <p className="text-lg text-gray-700 mb-6 sm:mb-8 leading-7">
              Peer-review articles and books in the thematic of Early Child Development (ECD)
              Early Child Education (ECE), older person and ageing, disability, education,
              food security, and digital sociology.
            </p>

            {/* Filter */}
            <div className="mb-6 sm:mb-8">
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
            <div className="space-y-6">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-200 pb-6"
                >
                  <div className="text-xs sm:text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                    {item.year}
                  </div>
                    <h2 className="text-lg sm:text-xl font-semibold text-[#b44343] mb-3 leading-snug">
                      {item.title}
                    </h2>
                  <div className="text-gray-700 text-lg mb-2 leading-7">
                    <strong>Authors:</strong> {item.authors}
                  </div>
                  <div className="text-gray-700 text-lg leading-7">
                    {item.publication}
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6 mt-3 flex-wrap">
                    <button
                      onClick={() => handleViewDetails(item.id)}
                      className="text-amber-700 text-base font-medium hover:text-amber-800"
                    >
                      {selectedItem === item.id ? "Hide Details" : "View Details"}
                    </button>

                    {/* Conditional: Show PDF if pdfUrl exists, else show DOI if doi exists */}
                    {item.pdfUrl && item.pdfUrl !== "#" && (
                      <a
                        href={item.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#b44343] text-base font-medium hover:text-amber-700"
                      >
                        View PDF
                      </a>
                    )}

                    {item.doi && (
                      <a
                        href={item.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#b44343] text-base font-medium hover:text-amber-700"
                      >
                        DOI
                      </a>
                    )}
                  </div>

                  {/* Details Panel - Co-Authors and Abstract */}
                  {selectedItem === item.id && (
                    <div className="mt-4 sm:mt-6 bg-amber-50/40 p-4 sm:p-5 rounded-lg border-l-4 border-amber-600">
                      {/* Co-Authors Section */}
                      {item.coAuthors && item.coAuthors.length > 0 && (
                        <div className="mb-4">
                          <h3 className="font-semibold text-black mb-2 text-base">
                            Co-Authors
                          </h3>
                          <ul className="space-y-1 text-lg text-gray-700 leading-7">
                            {item.coAuthors.map((author, index) => (
                              <li key={index}>• {author}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Abstract Section */}
                      {item.abstract && (
                        <div>
                          <h3 className="font-semibold text-black mb-2 text-base">
                            Abstract
                          </h3>
                          <p className="text-lg text-gray-700 leading-7">
                            {item.abstract}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Unpublished Works */}
            {currentPage === totalPages && (
              <section className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Unpublished Works
                </h2>

                <div className="space-y-6">

                  {/* PhD Dissertation */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="text-xs sm:text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                      2018
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium underline text-[#b44343] mb-3 leading-snug">
                      Grandfathers Caring for Orphaned Grandchildren in Rural Southern Malawi:
                      Invisible in Plain Sight?
                    </h3>

                    <div className="text-gray-700 text-lg mb-2 leading-7">
                      <strong>Author:</strong> Lazaro, M. C.
                    </div>

                    <div className="text-gray-700 text-lg leading-7 mb-3">
                      University of Hull, United Kingdom.
                    </div>

                    <div className="text-lg leading-7">
                      <strong>Repository Link:</strong>{" "}
                      <a
                        href="https://hull-repository.worktribe.com/output/4220827"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#b44343] underline hover:text-amber-700"
                      >
                        hull-repository.worktribe.com/output/4220827
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

                    <div className="text-gray-700 text-lg mb-2 leading-7">
                      <strong>Author:</strong> Lazaro, M. C.
                    </div>

                    <div className="text-gray-700 text-lg leading-7 mb-3">
                      University of Alberta, Canada.
                    </div>

                    <div className="text-lg leading-7">
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
              <div className="flex justify-center items-center gap-1 sm:gap-2 mt-6 sm:mt-8 flex-wrap">
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