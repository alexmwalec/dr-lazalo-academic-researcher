import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { membershipData } from "./membershipData";
import humanity from "../../Images/humanity.jpg";

const BoardMembership = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(membershipData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = membershipData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            <h1 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Memberships, Boards & Associations
            </h1>

            <p className="text-lg text-gray-700 mb-6 sm:mb-8 leading-7">
              I have actively served on various boards and have been a member of
              local and international professional societies, associations, and
              community organisations.
            </p>

            {/* Membership List */}
            <div className="space-y-4">
              {currentItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 pb-4 last:border-0"
                >
                  <h2 className="text-xl sm:text-xl font-semibold text-[#b44343] mb-2 leading-snug">
                    {item.title}
                  </h2>

                  <p className="text-gray-800 text-lg leading-7">
                    <strong>Organisation:</strong> {item.organization}
                  </p>

                  <p className="text-gray-800 text-lg leading-7 mt-0.5">
                    <strong>Period:</strong> {item.period}
                  </p>
                </div>
              ))}
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
            {membershipData.length > 0 && (
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

export default BoardMembership;