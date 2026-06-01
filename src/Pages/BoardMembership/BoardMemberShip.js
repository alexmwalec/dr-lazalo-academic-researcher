import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  FaLinkedinIn,
  FaTwitter,
  FaResearchgate,
  FaGoogleScholar,
  FaGlobe
} from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";
import { membershipData } from "./membershipData";
import humanity from "../../Images/humanity.jpg";
import SocialShareBar from "../SocialShareBar/SocialShareBar";

const BoardMembership = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const totalPages = Math.ceil(
    membershipData.length / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = membershipData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
                      {/* Google Scholar */}
                      <a
                        href="https://scholar.google.com/citations?hl=en&user=5BMNX2sAAAAJ"
                          target="_blank"
                          rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[#b44343] underline"
                      >
                        <SiGooglescholar className="text-gray-400" />
                        Google Scholar
                      </a>
          
                      {/* ResearchGate */}
                      <a
                        href="https://www.researchgate.net/profile/Mayeso-Lazaro-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[#b44343] underline"
                      >
                        <FaResearchgate className="text-gray-400 "/>
                        ResearchGate
                      </a>
          
                      {/* ORCID */}
                      <a
                        href="https://orcid.org/0000-0001-5314-0638"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[#b44343] underline"
                      >
                        <SiOrcid className="text-gray-400 " />
                        ORCID
                      </a>
          
                      {/* Web of Science */}
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
          
                      {/* LinkedIn */}
                      <a
                        href="http://www.linkedin.com/in/mayeso-chinseu-lazaro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[#b44343] underline"
                      >
                        <FaLinkedinIn className="text-gray-400 " />
                        LinkedIn
                      </a>
          
                      {/* Website */}
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

          <main className="flex-1 py-12">
            <h1 className="text-4xl font-bold text-[#b44343] mb-4">
              Memberships, Boards & Associations
            </h1>

            <p className="text-lg text-gray-700 mb-10">
              I have actively served on various boards and have been a member
              of local and international professional societies,
              associations, and community organisations.
            </p>

            {/* Membership List */}
            <div className="space-y-8">
              {currentItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 pb-6"
                >
                  <h2 className="text-xl font-semibold text-[#b44343] mb-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-800">
                    <strong>Organisation:</strong>{" "}
                    {item.organization}
                  </p>

                  <p className="text-gray-800">
                    <strong>Period:</strong>{" "}
                    {item.period}
                  </p>
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

export default BoardMembership;