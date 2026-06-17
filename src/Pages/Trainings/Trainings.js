import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { trainingData } from "./trainingData";
import humanity from "../../Images/humanity.jpg";
import Sidebar from "../Sidebar/Sidebar";

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
      : trainingData.filter((item) => item.year === Number(selectedYear));

  const totalPages = Math.ceil(filteredTrainings.length / itemsPerPage);

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
              Trainings & Workshops
            </h1>

            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Professional trainings, workshops, conferences, research
              capacity-building programmes, and academic development activities
              attended over the years.
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

            {/* Training List */}
            <div className="space-y-8 sm:space-y-10">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-200 pb-6 sm:pb-8"
                >
                  <div className="text-xs sm:text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                    {item.year}
                  </div>

                  <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#b44343] mb-3 leading-snug">
                    {item.title}
                  </h2>

                  <div className="text-gray-700 text-xs sm:text-sm mb-2">
                    <strong>Institution:</strong> {item.institution}
                  </div>

                  <div className="text-gray-700 text-xs sm:text-sm mb-2">
                    <strong>Location:</strong> {item.location}
                  </div>

                  <div className="text-gray-700 text-xs sm:text-sm">
                    <strong>Date:</strong> {item.date}
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6 mt-4 ">
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
                    <div className="mt-4 sm:mt-6">
                      {item.description && (
                        <div>
                          <h3 className="font-semibold text-black mb-2 text-sm sm:text-base">
                            Description
                          </h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-1 sm:gap-2 mt-8 sm:mt-10 flex-wrap">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
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

export default Trainings;