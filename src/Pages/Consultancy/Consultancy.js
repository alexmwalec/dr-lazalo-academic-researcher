import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { consultancyData } from "./consultancyData";
import humanity from "../../Images/humanity.jpg";
import Sidebar from "../Sidebar/Sidebar";

const Consultancy = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null); 

  const ITEMS_PER_PAGE = 5;

  const years = [
    "All",
    ...new Set(consultancyData.map((item) => item.year)),
  ].sort((a, b) => (a === "All" ? -1 : b - a));

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setCurrentPage(1);
    setSelectedItem(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedItem(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewDetails = (id) => {
    setSelectedItem(selectedItem === id ? null : id);
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
              Consultancy
            </h1>

            <p className="text-lg text-gray-700 mb-6 sm:mb-8 leading-7">
              The following engagements reflect applied research, evaluation,
              and advisory roles undertaken alongside academic responsibilities.
            </p>

            {/* Filter */}
            <div className="mb-6 sm:mb-8">
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
            <div className="space-y-6">
              {currentItems.length === 0 ? (
                <div className="text-center py-10 text-gray-500 text-lg">
                  No consultancy records found for {selectedYear}.
                </div>
              ) : (
                currentItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 pb-6 last:border-0"
                  >
                    <h2 className="text-lg sm:text-xl font-semibold text-[#b44343] mb-3 leading-snug">
                      {item.title}
                    </h2>

                    <div className="space-y-1 text-lg text-gray-800 leading-7">
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

                    <div className="flex items-center gap-4 sm:gap-6 mt-3">
                      <button
                        onClick={() => handleViewDetails(item.id)}
                        className="text-amber-700 text-sm font-medium hover:text-amber-800"
                      >
                        {selectedItem === item.id
                          ? "Hide Details"
                          : "View Details"}
                      </button>
                    </div>

                    {selectedItem === item.id && (
                      <div className="mt-4 sm:mt-6 bg-amber-50/40 p-4 sm:p-5 rounded-lg border-l-4 border-amber-600">
                        {item.description && (
                          <div>
                            <h3 className="font-semibold text-black mb-2 text-base">
                              Description
                            </h3>
                            <p className="text-lg text-gray-700 leading-7">
                              {item.description}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-1 sm:gap-2 mt-6 sm:mt-8 flex-wrap">
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
            )}

            {/* Page Info */}
            {filteredData.length > 0 && (
              <div className="text-center text-gray-600 mt-4 text-lg">
                Page {currentPage} of {totalPages}
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Consultancy;