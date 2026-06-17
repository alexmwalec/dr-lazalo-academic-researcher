import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { conferenceData } from "./conferenceData";
import Sidebar from "../Sidebar/Sidebar";
import humanity from "../../Images/humanity.jpg";

const Conference = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedYear, setSelectedYear] = useState("All");

  // Get unique years from data
  const years = [
    "All",
    ...new Set(conferenceData.map((item) => item.year)),
  ].sort((a, b) => (a === "All" ? -1 : b - a));

  // Filter data by year
  const filteredData =
    selectedYear === "All"
      ? conferenceData
      : conferenceData.filter((item) => item.year === Number(selectedYear));

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
            <h1 className="text-3xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Conference Contributions
            </h1>

            <p className="text-lg text-gray-700 mb-4 sm:mb-6 leading-7">
              International and regional presentations on ageing, family studies,
              childhood research, development studies, and social sciences.
            </p>

            {/* Filter by Year */}
            <div className="mb-6 sm:mb-8">
              <label className="font-semibold mr-3 text-sm sm:text-base">
                Filter by Year:
              </label>
              <select
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  setSelectedItem(null); 
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

            {/* Conference List */}
            <div className="space-y-6">
              {filteredData.length === 0 ? (
                <div className="text-center py-10 text-gray-500 text-lg">
                  No conference presentations found for {selectedYear}.
                </div>
              ) : (
                filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 pb-6"
                  >
                    <div className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                      {item.year}
                    </div>

                    <h2 className="text-lg sm:text-xl font-semibold text-[#b44343] mb-3 leading-snug">
                      {item.title}
                    </h2>

                    <div className="text-gray-700 text-lg leading-7 mb-2">
                      {item.location}
                    </div>

                    <div className="text-gray-600 text-lg leading-7 mb-3">
                      {item.authors}
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 mt-3 flex-wrap">
                      <button
                        onClick={() => handleViewDetails(item.id)}
                        className="text-amber-700 text-base font-medium hover:text-amber-800"
                      >
                        {selectedItem === item.id
                          ? "Hide Details"
                          : "View Details"}
                      </button>
                    </div>

                    {selectedItem === item.id && (
                      <div className="mt-4 sm:mt-6 bg-amber-50/40 p-4 sm:p-5 rounded-lg border-l-4 border-amber-600">
                        <div className="space-y-3">
                          <div>
                            <span className="text-xs font-semibold text-black uppercase tracking-wide">
                              Conference
                            </span>
                            <p className="text-gray-700 text-lg leading-7 mt-1">
                              {item.conference}
                            </p>
                          </div>

                          <div>
                            <span className="text-xs font-semibold text-black uppercase tracking-wide">
                              Date
                            </span>
                            <p className="text-gray-700 text-lg leading-7 mt-1">
                              {item.date}
                            </p>
                          </div>

                          <div>
                            <span className="text-xs font-semibold text-black uppercase tracking-wide">
                              Full Citation
                            </span>
                            <p className="text-gray-600 text-lg italic leading-7 mt-1">
                              {item.citation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Conference;