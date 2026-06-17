import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import humanity from "../../Images/humanity.jpg";

const Peer_Reviews = () => {
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
              Peer Reviews & Editorial Roles
            </h1>

            <p className="text-lg text-gray-700 mb-6 sm:mb-8 leading-7">
              My contributions to scholarly publishing, peer review, editorial
              work, and academic quality assurance.
            </p>

            <div className="space-y-4">

              <div className="border-b border-gray-300 pb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-[#b44343] mb-3 leading-snug">
                  Editorial Member – Malawi Journal of Science and Technology, University of Malawi
                </h2>
                <p className="text-gray-800 text-lg leading-7">
                  <strong>Role:</strong> Editorial Member
                </p>
                <p className="text-gray-800 text-lg leading-7 mt-0.5">
                  <strong>Period:</strong> February 2026 – Present
                </p>
              </div>

              <div className="border-b border-gray-300 pb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-[#b44343] mb-3 leading-snug">
                  Peer Reviewer – Journal of Humanities, University of Malawi
                </h2>
                <p className="text-gray-800 text-lg leading-7">
                  <strong>Year:</strong> 2025
                </p>
                <p className="text-gray-800 text-lg leading-7 mt-0.5">
                  One manuscript reviewed.
                </p>
              </div>

              <div className="border-b border-gray-300 pb-4">
                <h2 className="text-xl sm:text-xl font-semibold text-[#b44343] mb-2 leading-snug">
                  Peer Reviewer – Food Security Seminars, University of Malawi
                </h2>
                <p className="text-gray-800 text-lg leading-7">
                  <strong>Year:</strong> 2024
                </p>
                <p className="text-gray-800 text-lg leading-7 mt-0.5">
                  One manuscript and one abstract reviewed.
                </p>
              </div>

              <div className="border-b border-gray-300 pb-4">
                <h2 className="text-xl sm:text-xl font-semibold text-[#b44343] mb-2 leading-snug">
                  Peer Reviewer – Food Studies Seminar, University of Malawi
                </h2>
                <p className="text-gray-800 text-lg leading-7">
                  <strong>Year:</strong> 2024
                </p>
                <p className="text-gray-800 text-lg leading-7 mt-0.5">
                  Two abstracts reviewed.
                </p>
              </div>

              <div className="border-b border-gray-300 pb-4 last:border-0">
                <h2 className="text-xl sm:text-xl font-semibold text-[#b44343] mb-2 leading-snug">
                  Editor – Improving Secondary Education in Malawi (ISEM) Phase
                  I & II CPD Training Manual
                </h2>
                <p className="text-gray-800 text-lg leading-7">
                  <strong>Role:</strong> Editor
                </p>
                <p className="text-gray-800 text-lg leading-7 mt-0.5">
                  <strong>Year:</strong> 2022
                </p>
              </div>

            </div>
          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Peer_Reviews;